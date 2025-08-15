import React from "react";
import { MoreVertical, Send } from "lucide-react";

const MessageBox = () => {
  return (
    <div className="h-[100] w-full bg-white border shadow-md flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">John Doe</h2>
          <p className="text-xs text-green-500">Online</p>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Chatting area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 border-b border-gray-200">
        {/* Received message */}
        <div className="flex items-start space-x-2">
          <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg max-w-xs">
            Hello, how are you?
          </div>
        </div>

        {/* Sent message */}
        <div className="flex items-end justify-end space-x-2">
          <div className="bg-blue-500 text-white px-3 py-2 rounded-lg max-w-xs">
            I'm good
          </div>
        </div>
      </div>

      {/* Input area with send button */}
      <div className="p-4 flex items-center space-x-2 border-t border-gray-200">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
