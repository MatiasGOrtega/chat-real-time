import { useAuthContext } from "../context/AuthContext";
import useConversation from "../store/useConversation";
import { extractTime } from "../utils/extractTime";

function Message({message}) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePicture = fromMe ? authUser.profilePicture : selectedConversation?.profilePicture;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const time = extractTime(message.createdAt);
  const shouldShake = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={profilePicture}
            alt="user avatar"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shouldShake}`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        <span>{time}</span>
      </div>
    </div>
  );
}

export default Message;
