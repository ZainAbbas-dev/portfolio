"use client";

export const AmbientScene = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Background glow effects matching globals.css accents */}
      <div className="absolute -left-32 top-10 h-[500px] w-[500px] rounded-full bg-[#C97D4C]/10 blur-[120px]" />
      <div className="absolute -right-32 bottom-10 h-[600px] w-[600px] rounded-full bg-[#4FD9C7]/5 blur-[150px]" />
      
      {/* Perspective Grid Line overlay from your globals.css */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="ambient-noise" />
    </div>
  );
};