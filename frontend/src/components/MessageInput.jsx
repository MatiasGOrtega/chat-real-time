import { useState } from "react";
import useSendMessage from "../hooks/useSendMessage";
import SendIcon from "./icons/SendIcon";
function MessageInput() {
  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input input-bordered w-full p-2.5 text-sm bg-gray-800 text-white"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
          disabled={loading}
        >
          {
            loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <SendIcon className="w-5 h-5 text-gray-200" />
            )
          }
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
