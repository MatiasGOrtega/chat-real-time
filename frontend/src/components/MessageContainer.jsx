import MessageInput from "./MessageInput";
import Messages from "./Messages";
import useConversation from "../store/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
function NoChatSelected() {

  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <span>Welcome 👋 {authUser.fullName}</span>
        <span>Select a chat to start messaging</span>
        <span>👈</span>
      </div>
    </div>
  );
}

function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => {
      // cleanup
      setSelectedConversation(null);
    }
  }, [setSelectedConversation]);

  if (!selectedConversation) {
    return <NoChatSelected />;
  }

  return (
    <div className="md:min-w-[450px] flex flex-col">
      <div className="bg-slate-500 px-4 py-2 mb-2">
        <span className="label-text">To:</span>{" "}
        <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
      </div>

      <Messages />
      <MessageInput />
    </div>
  );
}

export default MessageContainer;
