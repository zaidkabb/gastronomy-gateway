import { useState, useRef, useEffect } from "react";
import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingVoiceButton = () => {
  const [position, setPosition] = useState({ x: window.innerWidth - 100, y: window.innerHeight - 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;
        
        // Keep button within viewport
        const maxX = window.innerWidth - 80;
        const maxY = window.innerHeight - 80;
        
        setPosition({
          x: Math.max(20, Math.min(newX, maxX)),
          y: Math.max(20, Math.min(newY, maxY))
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!isDragging) {
      e.preventDefault();
      console.log("Voice booking clicked");
      // Add your voice booking logic here
    }
  };

  return (
    <div
      ref={buttonRef}
      className="fixed z-50 cursor-move flex items-center gap-3"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="bg-background/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-border/50">
        <span className="text-sm font-inter font-semibold text-foreground whitespace-nowrap">
          KI-Buchung
        </span>
      </div>
      
      <Button
        size="lg"
        onClick={handleClick}
        className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-primary/50 transition-all duration-300 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary-glow/20 rounded-full animate-pulse" />
        <Mic className="w-7 h-7 relative z-10 group-hover:scale-110 transition-transform" />
      </Button>
      
      {/* Ripple effect on hover */}
      <div className="absolute right-0 inset-y-0 w-16 rounded-full border-2 border-primary/30 animate-ping pointer-events-none" />
    </div>
  );
};

export default FloatingVoiceButton;
