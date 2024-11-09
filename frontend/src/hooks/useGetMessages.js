import { useEffect, useState } from "react";
import useConversation from "../store/useConversation";
function useGetMessages() {
  const [loading, setLoading ] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await response.json();
  
        if(data.error){
          throw new Error("An error occurred while fetching messages");
        }
  
        setMessages(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if(selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
}

export default useGetMessages;