import React from "react";
import { MoreVertical, Send, Smile } from "lucide-react";
import { useDispatch } from "react-redux";


const MessageBox = () => {
  const dispatch = useDispatch()


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
        <div className="flex flex-col items-start space-y-1">
          <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg max-w-xs">
            Hello, how are you?
          </div>
          <span className="text-xs text-gray-400 ml-1">10:45 AM</span>
        </div>

        {/* Sent message */}
        <div className="flex flex-col items-end space-y-1">
          <div className="bg-blue-500 text-white px-3 py-2 rounded-lg max-w-xs">
            I'm good
          </div>
          <span className="text-xs text-gray-400 mr-1">10:46 AM</span>
        </div>
      </div>

      {/* Input area with emoji (left) and send button */}
      <div className="p-4 flex items-center space-x-2 border-t border-gray-200">
        {/* Emoji button on left */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Smile className="w-5 h-5 text-gray-600" />
        </button>
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />
        {/* Send button */}
        <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
