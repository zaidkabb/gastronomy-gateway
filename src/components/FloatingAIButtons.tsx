import { Mic, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingAIButtons = () => {
  const handleVoiceCall = () => {
    const widget = document.querySelector('vapi-widget');
    if (widget) {
      widget.setAttribute('mode', 'voice');
      (widget as any).open?.();
    }
  };

  const handleChatbot = () => {
    const widget = document.querySelector('vapi-widget');
    if (widget) {
      widget.setAttribute('mode', 'chat');
      (widget as any).open?.();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50">
      <Button
        size="lg"
        onClick={handleVoiceCall}
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all group"
        aria-label="Voice Call"
      >
        <Mic className="w-6 h-6 group-hover:animate-pulse" />
      </Button>
      <Button
        size="lg"
        onClick={handleChatbot}
        className="w-14 h-14 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all"
        aria-label="Chatbot"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingAIButtons;
