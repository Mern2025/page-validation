import React from "react";
import { Search, MoreVertical } from "lucide-react";

const users = [
  {
    id: 1,
    name: "John Doe",
    message: "Hey, how are you?",
    time: "10:45 AM",
    avatar: "https://i.pravatar.cc/80?img=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "Let's catch up later!",
    time: "11:15 AM",
    avatar: "https://i.pravatar.cc/80?img=2",
  },
  {
    id: 3,
    name: "Michael Johnson",
    message: "Can you send me the files?",
    time: "12:00 PM",
    avatar: "https://i.pravatar.cc/80?img=3",
  },
  {
    id: 4,
    name: "Emily Davis",
    message: "Good morning!",
    time: "8:30 AM",
    avatar: "https://i.pravatar.cc/80?img=4",
  },
];

const MessageUserList = () => {
  return (
    <div className="h-screen flex justify-center items-start bg-gray-100 ">
      {/* Sidebar */}
      <div className="h-full w-80 bg-white border  shadow-md flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Chats</h2>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Search / Start Chat Input */}
        <div className="p-4 border-b border-gray-200">
          <input
            type="text"
            placeholder="Search or start chat"
            className="w-full px-3 py-2 border rounded-lg outline-none text-gray-700 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* User list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <div className="flex items-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">{user.name}</p>
                  <p className="text-gray-500 text-sm">{user.message}</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs">{user.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageUserList;
