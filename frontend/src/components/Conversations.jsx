import Conversation from "./Conversation";
import useGetConversations from "../hooks/useGetConversations";
import { getRandomEmoji } from "../utils/emojis";
function Conversations() {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-1 flex flex-col overflow-auto conversations">
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="loading loading-spinner"></div>
        </div>
      ) : (
        conversations.map((conversation, index) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIndex={index == conversations.length - 1}
          />
        ))
      )}
    </div>
  );
}

export default Conversations;
