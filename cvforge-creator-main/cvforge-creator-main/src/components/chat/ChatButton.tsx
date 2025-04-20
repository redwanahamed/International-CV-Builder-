
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ChatDialog from "./ChatDialog";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <ChatDialog onClose={() => setIsOpen(false)} />
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-colors"
        >
          <MessageCircle className="text-primary-foreground" />
        </Button>
      )}
    </div>
  );
};

export default ChatButton;
