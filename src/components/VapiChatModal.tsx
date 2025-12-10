import { useState, useEffect, useRef } from "react";
import { X, Send, Mic, MicOff, Loader2 } from "lucide-react";
import { useVapi } from "@/hooks/useVapi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface VapiChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  assistantId: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

const VapiChatModal = ({ isOpen, onClose, assistantId }: VapiChatModalProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { 
    isCallActive, 
    isSpeaking, 
    isLoading, 
    startCall, 
    endCall, 
    sendMessage,
    transcript 
  } = useVapi();

  useEffect(() => {
    if (isOpen && !isCallActive && !isLoading) {
      startCall(assistantId);
    }
  }, [isOpen, assistantId]);

  useEffect(() => {
    if (transcript) {
      // Parse transcript and add to messages
      const trimmedTranscript = transcript.trim();
      if (trimmedTranscript) {
        setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage?.role === "assistant") {
            // Update last assistant message
            return [...prev.slice(0, -1), { ...lastMessage, content: trimmedTranscript }];
          }
          return [...prev, { role: "assistant", content: trimmedTranscript }];
        });
      }
    }
  }, [transcript]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim() || !isCallActive) return;
    
    setMessages(prev => [...prev, { role: "user", content: inputValue }]);
    sendMessage(inputValue);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClose = () => {
    if (isCallActive) {
      endCall();
    }
    setMessages([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card border border-border rounded-2xl shadow-2xl w-full max-w-md h-[500px] flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${isCallActive ? "bg-green-500 animate-pulse" : isLoading ? "bg-yellow-500 animate-pulse" : "bg-muted-foreground"}`} />
            <div>
              <h3 className="font-playfair font-semibold text-foreground">Restaurant Assistant</h3>
              <p className="text-xs text-muted-foreground">
                {isLoading ? "Connecting..." : isCallActive ? (isSpeaking ? "Speaking..." : "Listening...") : "Offline"}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {isLoading && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <span className="ml-2 text-muted-foreground">Connecting to assistant...</span>
            </div>
          )}
          
          {!isLoading && messages.length === 0 && isCallActive && (
            <div className="text-center py-8 text-muted-foreground">
              <p className="font-inter">Start speaking or type a message!</p>
              <p className="text-sm mt-2">Ask about our menu, reservations, or anything else.</p>
            </div>
          )}

          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-muted text-foreground rounded-bl-md"
                }`}
              >
                <p className="text-sm font-inter">{message.content}</p>
              </div>
            </div>
          ))}
          
          {isSpeaking && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-2">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-full ${isCallActive ? "bg-green-500/20 text-green-500" : "bg-muted text-muted-foreground"}`}>
              {isCallActive ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            </div>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={isCallActive ? "Type or speak..." : "Connecting..."}
              disabled={!isCallActive}
              className="flex-1 bg-background border-border"
            />
            <Button
              onClick={handleSend}
              disabled={!inputValue.trim() || !isCallActive}
              size="icon"
              className="shrink-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VapiChatModal;
