import { useState } from "react";
import SearchIcon from "./icons/SearchIcon";
import useConversation from "../store/useConversation";
import useGetConversations from "../hooks/useGetConversations";

function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
      
    const selected = conversations.find((conv) => conv.fullName.toLowerCase().includes(search.toLowerCase()));

    if (selected) {
      setSelectedConversation(selected);
      setSearch("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchInput;
