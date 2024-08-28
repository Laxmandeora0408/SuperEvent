import React from "react";

const MessageIcons = () => {
  return (
    <div className="flex items-center justify-start p-4">
      <div className="relative bg-blue-500 text-white p-4 rounded-lg max-w-xs">
        <p className="text-lg font-medium">Laxman</p>
        <p className="mt-2 text-sm">
          This is a sample message bubble design. You can adjust the styling as
          needed.
        </p>
        <div className="absolute -bottom-2 -left-4 w-0 h-0 border-l-8 border-l-blue-500 border-t-8 border-t-transparent"></div>
      </div>
    </div>
  );
};

export default MessageIcons;
