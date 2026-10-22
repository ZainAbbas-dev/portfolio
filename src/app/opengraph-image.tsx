import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Muhammad Zain Abbas — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/images/hero-profile.png"));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 80% 30%, #1d2a2c 0%, #0B0E14 60%)",
          color: "#F3F1EC",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 0 0 80px", width: 700 }}>
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#4FD9C7", fontWeight: 700 }}>
            FULL STACK DEVELOPER
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 24, fontSize: 78, fontWeight: 900, lineHeight: 1 }}>
            <span>MUHAMMAD</span>
            <span style={{ color: "#C97D4C" }}>ZAIN ABBAS</span>
          </div>
          <div style={{ marginTop: 32, fontSize: 28, color: "#9CA3AF", lineHeight: 1.4 }}>
            Next.js · Python · AI integration
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", width: 500 }}>
          <img src={photoSrc} alt="" width={500} height={500} />
        </div>
      </div>
    ),
    size,
  );
}
