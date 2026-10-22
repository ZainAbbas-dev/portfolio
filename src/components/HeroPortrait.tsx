"use client";
import Image from "next/image";
import { motion, useMotionValue, useMotionValueEvent, useSpring, useTransform } from "framer-motion";
import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

const orbitChips = [
  { label: "Next.js", className: "left-0 top-[18%]", depth: 110, delay: "-1s" },
  { label: "Python", className: "right-0 top-[36%]", depth: 140, delay: "-3s" },
  { label: "AI", className: "left-[8%] bottom-[26%]", depth: 90, delay: "-5s" },
];

const MIN_ZOOM = 0.7;
const MAX_ZOOM = 2.2;
const ZOOM_STEP = 0.3;
const MAX_TILT = 30;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

type Point = { x: number; y: number };

export const HeroPortrait = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Targets are set directly; the springs make every rotation and zoom glide smoothly
  const rotateYTarget = useMotionValue(0);
  const rotateXTarget = useMotionValue(0);
  const zoomTarget = useMotionValue(1);
  const rotateY = useSpring(rotateYTarget, { stiffness: 70, damping: 18 });
  const rotateX = useSpring(rotateXTarget, { stiffness: 70, damping: 18 });
  const scale = useSpring(zoomTarget, { stiffness: 140, damping: 22 });

  // Swap front and back faces from the rotation angle. CSS backface-visibility drops pieces
  // of the photo in Chrome where the tilted orbit rings slice through it.
  const facingFront = (angle: number) => Math.cos((angle * Math.PI) / 180) >= 0;
  const frontVisibility = useTransform(rotateY, (angle) => (facingFront(angle) ? "visible" : "hidden"));
  const backVisibility = useTransform(rotateY, (angle) => (facingFront(angle) ? "hidden" : "visible"));

  // Chrome clips layered 3D scenes under a scaled ancestor, so depth is flattened while zoomed
  useMotionValueEvent(scale, "change", (value) => setIsZoomed(Math.abs(value - 1) > 0.01));

  const pointers = useRef(new Map<number, Point>());
  const drag = useRef({ x: 0, y: 0, rotateY: 0, rotateX: 0, lastX: 0, lastTime: 0, velocity: 0 });
  const pinch = useRef({ distance: 0, zoom: 1 });

  const setZoom = (value: number) => zoomTarget.set(clamp(value, MIN_ZOOM, MAX_ZOOM));

  // Return to the nearest front-facing turn instead of unwinding every full spin
  const reset = () => {
    rotateYTarget.set(Math.round(rotateYTarget.get() / 360) * 360);
    rotateXTarget.set(0);
    zoomTarget.set(1);
  };

  const pinchDistance = () => {
    const [a, b] = [...pointers.current.values()];
    return Math.hypot(a.x - b.x, a.y - b.y);
  };

  const startDrag = (point: Point) => {
    drag.current = {
      x: point.x,
      y: point.y,
      rotateY: rotateYTarget.get(),
      rotateX: rotateXTarget.get(),
      lastX: point.x,
      lastTime: performance.now(),
      velocity: 0,
    };
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    setIsInteracting(true);

    if (pointers.current.size === 2) {
      pinch.current = { distance: pinchDistance(), zoom: zoomTarget.get() };
    } else {
      startDrag({ x: event.clientX, y: event.clientY });
    }
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!pointers.current.has(event.pointerId)) return;
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.current.size === 2) {
      if (pinch.current.distance > 0) {
        setZoom(pinch.current.zoom * (pinchDistance() / pinch.current.distance));
      }
      return;
    }

    const now = performance.now();
    const state = drag.current;
    const elapsed = Math.max(now - state.lastTime, 1);
    state.velocity = (event.clientX - state.lastX) / elapsed;
    state.lastX = event.clientX;
    state.lastTime = now;

    rotateYTarget.set(state.rotateY + (event.clientX - state.x) * 0.6);
    rotateXTarget.set(clamp(state.rotateX - (event.clientY - state.y) * 0.3, -MAX_TILT, MAX_TILT));
  };

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (!pointers.current.delete(event.pointerId)) return;

    if (pointers.current.size === 1) {
      // One finger lifted after a pinch: continue as a drag from the remaining finger
      startDrag([...pointers.current.values()][0]);
      return;
    }

    if (pointers.current.size === 0) {
      // Flick momentum so a quick swipe keeps spinning before settling
      const fling = clamp(drag.current.velocity * 0.6 * 300, -360, 360);
      rotateYTarget.set(rotateYTarget.get() + fling);
      setIsInteracting(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const actions: Record<string, () => void> = {
      ArrowLeft: () => rotateYTarget.set(rotateYTarget.get() - 30),
      ArrowRight: () => rotateYTarget.set(rotateYTarget.get() + 30),
      ArrowUp: () => rotateXTarget.set(clamp(rotateXTarget.get() + 10, -MAX_TILT, MAX_TILT)),
      ArrowDown: () => rotateXTarget.set(clamp(rotateXTarget.get() - 10, -MAX_TILT, MAX_TILT)),
      "+": () => setZoom(zoomTarget.get() + ZOOM_STEP),
      "=": () => setZoom(zoomTarget.get() + ZOOM_STEP),
      "-": () => setZoom(zoomTarget.get() - ZOOM_STEP),
      "0": reset,
    };
    const action = actions[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  };

  // Trackpad pinch arrives as ctrl+wheel; plain wheel is left alone so the page still scrolls
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const handleWheel = (event: WheelEvent) => {
      if (!event.ctrlKey) return;
      event.preventDefault();
      zoomTarget.set(clamp(zoomTarget.get() * Math.exp(-event.deltaY * 0.01), MIN_ZOOM, MAX_ZOOM));
    };

    stage.addEventListener("wheel", handleWheel, { passive: false });
    return () => stage.removeEventListener("wheel", handleWheel);
  }, [zoomTarget]);

  return (
    <div className="mx-auto w-full max-w-[19rem] sm:max-w-sm lg:max-w-lg">
      <div
        ref={stageRef}
        aria-label="3D portrait of Muhammad Zain Abbas. Drag to rotate, pinch or use the zoom buttons to zoom. Arrow keys rotate, plus and minus zoom, 0 resets."
        className={`relative aspect-square w-full touch-pan-y select-none outline-none focus-visible:ring-2 focus-visible:ring-accent-cool/60 rounded-3xl ${
          isInteracting ? "cursor-grabbing" : "cursor-grab"
        }`}
        onDoubleClick={() => setZoom(zoomTarget.get() > 1.2 ? 1 : 1.8)}
        onKeyDown={handleKeyDown}
        onPointerCancel={handlePointerEnd}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        role="application"
        tabIndex={0}
      >
        {/* Zoom is applied outside the 3D scene so the rotating layers are never re-clipped */}
        <motion.div className="pointer-events-none absolute inset-0" style={{ scale }}>
          <div className="portrait-stage absolute inset-0">
            <motion.div className="portrait-3d absolute inset-0" style={{ rotateX, rotateY }}>
              <div
                className={`portrait-3d portrait-idle absolute inset-0 ${isInteracting ? "is-paused" : ""} ${
                  isZoomed ? "is-zoomed" : ""
                }`}
              >
                {/* Depth glow behind the portrait */}
                <div className="portrait-glow absolute inset-[12%] rounded-full" />

                {/* Orbit rings pass behind and in front of the portrait in 3D space */}
                <div className="portrait-orbit portrait-orbit-warm">
                  <span className="portrait-orbit-dot bg-accent-warm text-accent-warm" />
                </div>
                <div className="portrait-orbit portrait-orbit-cool">
                  <span className="portrait-orbit-dot bg-accent-cool text-accent-cool" />
                </div>

                {/* Front face (bottom fade is baked into the image: CSS masks get clipped in 3D layers) */}
                <motion.div className="absolute inset-0" style={{ visibility: frontVisibility, transform: "translateZ(60px)" }}>
                  <Image
                    src="/images/hero-portrait.png"
                    alt=""
                    width={600}
                    height={600}
                    priority
                    draggable={false}
                    sizes="(min-width: 1024px) 512px, (min-width: 640px) 384px, 304px"
                    className="h-full w-full object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.7)]"
                  />
                </motion.div>

                {/* Back face: a rim-lit silhouette instead of a mirrored photo */}
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{ visibility: backVisibility, transform: "translateZ(58px) rotateY(180deg)" }}
                >
                  <Image
                    src="/images/hero-portrait.png"
                    alt=""
                    width={600}
                    height={600}
                    draggable={false}
                    sizes="(min-width: 1024px) 512px, (min-width: 640px) 384px, 304px"
                    className="portrait-silhouette h-full w-full object-contain"
                    style={{ transform: "scaleX(-1)" }}
                  />
                </motion.div>

                {orbitChips.map((chip) => (
                  <motion.div
                    key={chip.label}
                    className={`absolute ${chip.className}`}
                    style={{ visibility: frontVisibility, transform: `translateZ(${chip.depth}px)` }}
                  >
                    <span className="portrait-chip" style={{ animationDelay: chip.delay }}>
                      {chip.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Zoom controls */}
      <div className="relative z-10 mt-4 flex items-center justify-center gap-2">
        <button aria-label="Zoom out" className="portrait-control" onClick={() => setZoom(zoomTarget.get() - ZOOM_STEP)} type="button">
          <ZoomOut aria-hidden="true" size={16} />
        </button>
        <button aria-label="Reset view" className="portrait-control" onClick={reset} type="button">
          <RotateCcw aria-hidden="true" size={16} />
        </button>
        <button aria-label="Zoom in" className="portrait-control" onClick={() => setZoom(zoomTarget.get() + ZOOM_STEP)} type="button">
          <ZoomIn aria-hidden="true" size={16} />
        </button>
        <span className="ml-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
          Drag to rotate 360°
        </span>
      </div>
    </div>
  );
};
