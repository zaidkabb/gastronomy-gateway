import { useState, useEffect, useCallback, useRef } from 'react';
import Vapi from '@vapi-ai/web';

const VAPI_PUBLIC_KEY = 'e0f0f197-f357-446b-8b83-4c76a07e41bc';

interface UseVapiReturn {
  isCallActive: boolean;
  isSpeaking: boolean;
  isLoading: boolean;
  startCall: (assistantId: string) => Promise<void>;
  endCall: () => void;
  sendMessage: (message: string) => void;
  transcript: string;
}

export const useVapi = (): UseVapiReturn => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [transcript, setTranscript] = useState('');
  const vapiRef = useRef<Vapi | null>(null);

  useEffect(() => {
    vapiRef.current = new Vapi(VAPI_PUBLIC_KEY);

    const vapi = vapiRef.current;

    vapi.on('call-start', () => {
      console.log('Vapi call started');
      setIsCallActive(true);
      setIsLoading(false);
    });

    vapi.on('call-end', () => {
      console.log('Vapi call ended');
      setIsCallActive(false);
      setIsSpeaking(false);
      setIsLoading(false);
    });

    vapi.on('speech-start', () => {
      setIsSpeaking(true);
    });

    vapi.on('speech-end', () => {
      setIsSpeaking(false);
    });

    vapi.on('message', (message) => {
      console.log('Vapi message:', message);
      if (message.type === 'transcript' && message.transcriptType === 'final') {
        setTranscript(prev => prev + ' ' + message.transcript);
      }
    });

    vapi.on('error', (error) => {
      console.error('Vapi error:', error);
      setIsLoading(false);
      setIsCallActive(false);
    });

    return () => {
      vapi.stop();
    };
  }, []);

  const startCall = useCallback(async (assistantId: string) => {
    if (!vapiRef.current) return;
    
    setIsLoading(true);
    setTranscript('');
    
    try {
      await vapiRef.current.start(assistantId);
    } catch (error) {
      console.error('Failed to start Vapi call:', error);
      setIsLoading(false);
    }
  }, []);

  const endCall = useCallback(() => {
    if (!vapiRef.current) return;
    vapiRef.current.stop();
  }, []);

  const sendMessage = useCallback((message: string) => {
    if (!vapiRef.current || !isCallActive) return;
    vapiRef.current.send({
      type: 'add-message',
      message: {
        role: 'user',
        content: message,
      },
    });
  }, [isCallActive]);

  return {
    isCallActive,
    isSpeaking,
    isLoading,
    startCall,
    endCall,
    sendMessage,
    transcript,
  };
};
