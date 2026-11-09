import React, { useState, useEffect } from "react";

interface OpeningAnimationProps {
  onComplete?: () => void;
}

export const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Smooth, fast, elegant progress bar (~1.1s total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              setIsHidden(true);
              if (onComplete) onComplete();
            }, 500);
          }, 200);
          return 100;
        }
        return prev + 3.5;
      });
    }, 28);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsHidden(true);
      if (onComplete) onComplete();
    }, 300);
  };

  if (isHidden) return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0a08] text-[#f7eee6] transition-all duration-500 ease-out cursor-pointer select-none ${
        isExiting ? "opacity-0 scale-102 pointer-events-none" : "opacity-100 scale-100"
      }`}
      aria-label="Portfolio Introduction"
    >
      {/* Subtle Warm Radial Spotlight */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#c88746]/10 blur-[100px] pointer-events-none" />

      {/* Minimalist Center Piece */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* Sleek Minimal Monogram */}
        <div className="w-12 h-12 rounded-xl border border-[#c88746]/40 bg-[#16100c] flex items-center justify-center mb-5 shadow-lg shadow-[#c88746]/10">
          <span className="font-mono text-base font-bold text-gradient tracking-tight">
            &lt;TJ/&gt;
          </span>
        </div>

        {/* Clean Typography */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f7eee6] mb-1.5">
          Tasya Khaerani Janubiya
        </h1>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#c88746] mb-7">
          Frontend Developer
        </p>

        {/* Ultra-Slim Minimalist Progress Line */}
        <div className="w-36 h-[2px] bg-[#241a14] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#8a4b1f] via-[#c88746] to-[#f0ca9f] transition-all duration-75 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>

      {/* Subtle Minimalist Skip Hint */}
      <div className="absolute bottom-6 text-[10px] font-mono text-muted-foreground/40 hover:text-muted-foreground transition-colors">
        click anywhere to skip
      </div>
    </div>
  );
};

export default OpeningAnimation;
