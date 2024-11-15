import { useEffect } from "react";
import { useSocketContext } from "../context/socketContext";
import useConversation from "../store/useConversation";

function useListenMessages() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      setMessages([...messages, newMessage]);
    });

    return () => {
      socket?.off("newMessage");
    };

  }, [socket, messages, setMessages]);
}

export default useListenMessages;
