import { Phone, MessageCircle, X, Loader2 } from "lucide-react";
import { useState } from "react";
import { useVapi } from "@/hooks/useVapi";
import VapiChatModal from "./VapiChatModal";

// Replace with your Vapi assistant ID
const VAPI_ASSISTANT_ID = "6b90e793-2f4a-4b7c-86c2-3f868ba7eee8";

const FloatingAIButtons = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const { 
    isCallActive, 
    isSpeaking, 
    isLoading, 
    startCall, 
    endCall 
  } = useVapi();

  const handleVoiceCall = async () => {
    if (isCallActive) {
      endCall();
    } else {
      await startCall(VAPI_ASSISTANT_ID);
    }
  };

  const handleChatbot = () => {
    setIsChatOpen(true);
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        {/* Voice Call Button */}
        <div className="relative group">
          <button
            onClick={handleVoiceCall}
            onMouseEnter={() => setHoveredButton("voice")}
            onMouseLeave={() => setHoveredButton(null)}
            disabled={isLoading}
            className={`w-12 h-12 rounded-full ${
              isCallActive 
                ? "bg-destructive hover:bg-destructive/90" 
                : "bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
            } text-primary-foreground shadow-xl hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center group-hover:scale-110 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed`}
            aria-label={isCallActive ? "End Call" : "Voice Call"}
          >
            {/* Animated background ripple */}
            <div className={`absolute inset-0 rounded-full ${isCallActive ? "bg-destructive/20" : "bg-primary/20"} ${isSpeaking ? "animate-pulse" : ""}`} />
            
            {/* Icon */}
            {isLoading ? (
              <Loader2 className="w-5 h-5 relative z-10 animate-spin" />
            ) : isCallActive ? (
              <X className="w-5 h-5 relative z-10" />
            ) : (
              <Phone className={`w-5 h-5 relative z-10 transition-transform duration-300 ${hoveredButton === "voice" ? "scale-110" : ""}`} />
            )}
            
            {/* Speaking indicator */}
            {isCallActive && isSpeaking && (
              <div className="absolute inset-0 rounded-full border-2 border-primary-foreground/50 animate-ping" />
            )}
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-primary-foreground/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          {/* Tooltip */}
          <div className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-background border border-border rounded-lg px-4 py-2 shadow-lg transition-all duration-300 ${hoveredButton === "voice" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"}`}>
            <span className="text-sm font-inter font-medium text-foreground">
              {isLoading ? "Connecting..." : isCallActive ? "End Call" : "Voice Call"}
            </span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-8 border-transparent border-l-border" />
          </div>
        </div>

        {/* Chatbot Button */}
        <div className="relative group">
          <button
            onClick={handleChatbot}
            onMouseEnter={() => setHoveredButton("chat")}
            onMouseLeave={() => setHoveredButton(null)}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground shadow-xl hover:shadow-accent/50 transition-all duration-300 flex items-center justify-center group-hover:scale-110 relative overflow-hidden"
            aria-label="Chatbot"
          >
            {/* Animated background */}
            <div className="absolute inset-0 rounded-full bg-accent/20" />
            
            {/* Icon */}
            <MessageCircle className={`w-5 h-5 relative z-10 transition-transform duration-300 ${hoveredButton === "chat" ? "scale-110" : ""}`} />
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/0 via-accent-foreground/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          {/* Tooltip */}
          <div className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-background border border-border rounded-lg px-4 py-2 shadow-lg transition-all duration-300 ${hoveredButton === "chat" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"}`}>
            <span className="text-sm font-inter font-medium text-foreground">Chatbot</span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-8 border-transparent border-l-border" />
          </div>
        </div>
      </div>

      {/* Chat Modal */}
      <VapiChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        assistantId={VAPI_ASSISTANT_ID}
      />
    </>
  );
};

export default FloatingAIButtons;
