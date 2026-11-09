import React, { useEffect, useState } from "react";

export const InteractiveBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [targetPos, setTargetPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth lerp animation loop for cursor spotlight
  useEffect(() => {
    let animId: number;
    const lerp = () => {
      setMousePos((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.08,
        y: prev.y + (targetPos.y - prev.y) * 0.08,
      }));
      animId = requestAnimationFrame(lerp);
    };
    animId = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(animId);
  }, [targetPos]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Dynamic Cursor Spotlight (Warm Amber Glow following mouse) */}
      <div
        className="absolute rounded-full transition-opacity duration-500 ease-out"
        style={{
          width: "600px",
          height: "600px",
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
          background: "radial-gradient(circle, rgba(200, 135, 70, 0.09) 0%, rgba(138, 75, 31, 0.04) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Very subtle secondary ambient nodes for deep spatial depth */}
      <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-[#c88746]/[0.03] dark:bg-[#c88746]/[0.05] rounded-full blur-[140px] animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute top-[60%] right-[10%] w-[450px] h-[450px] bg-[#8a4b1f]/[0.03] dark:bg-[#8a4b1f]/[0.05] rounded-full blur-[140px] animate-pulse" style={{ animationDuration: "10s" }} />
    </div>
  );
};

export default InteractiveBackground;

