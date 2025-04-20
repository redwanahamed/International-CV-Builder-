
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export const useCustomerChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m your CV building assistant. How can I help you today?',
      timestamp: new Date().toISOString(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendMessage = async (userMessage: string) => {
    if (!userMessage.trim() || isLoading) return;

    // Generate a unique ID for the message
    const userMessageId = `user-${Date.now()}`;
    
    // Add user message to chat
    const newUserMessage: ChatMessage = {
      id: userMessageId,
      role: 'user',
      content: userMessage,
      timestamp: new Date().toISOString(),
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      // Simulate AI response for now - this is where you'd integrate with your AI service
      const response = "Thank you for your message! I'm here to help you create a professional CV. Feel free to ask any questions about our templates, sections, or formatting options.";
      
      setTimeout(() => {
        const assistantMessage: ChatMessage = {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: response,
          timestamp: new Date().toISOString(),
        };
        
        setMessages(prev => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get a response. Please try again.",
      });
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    sendMessage,
  };
};
