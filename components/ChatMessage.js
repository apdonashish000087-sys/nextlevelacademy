import React, { useState } from "react";
import Markdown from "react-markdown";
import userPlaceholder from "../image/user1.jpg";
import aiPlaceholder from "../image/ai1.jpg";

const ChatMessage = ({ message, sender }) => {
  const [expanded, setExpanded] = useState(false);
  const maxLines = 1;
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const shouldCollapse = sender === "user";
  const isUser = sender === "user";

  const messageStyle = {
    overflow: "hidden",
  };

  const collapsedStyle = {
    display: "-webkit-box",
    WebkitLineClamp: maxLines,
    WebkitBoxOrient: "vertical",
  };

  const imageContainerStyle = {
    display: "flex",
    alignItems: "flex-start",
    marginLeft: isUser ? "0" : "0.5rem",
    marginRight: isUser ? "0.5rem" : "0",
    order: isUser ? 2 : 0,
    flexShrink: 0,
    "@media (max-width: 640px)": {
      // Example breakpoint for mobile
      marginRight: isUser ? "0.25rem" : "0",
      marginLeft: isUser ? "0" : "0.25rem",
    },
  };

  const imageStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    objectFit: "cover",
    flexShrink: 0,
  };
  const breakLongStrings = (text, maxLength) => {
    if (!text) return "";
    const words = text.split(" ");
    const result = words
      .reduce((acc, word) => {
        let processedWord = word;
        if (word.length > maxLength) {
          processedWord = word.replace(
            new RegExp(`(.{${maxLength}})`, "g"),
            "$1 "
          );
        }
        return acc.concat(processedWord);
      }, [])
      .join(" ");
    return result;
  };
  const formattedMessage = breakLongStrings(message, 50);

  return (
    <div
      className={`mb-4 flex w-full ${isUser ? "justify-end" : "justify-start"}`}
    >
      {/* Image container */}
      <div style={imageContainerStyle}>
        {isUser ? (
          <img
            src={userPlaceholder.src}
            alt="User Profile"
            style={imageStyle}
            className="ml-1"
          />
        ) : (
          <img
            src={aiPlaceholder.src}
            alt="AI Profile"
            style={imageStyle}
            className="mr-1"
          />
        )}
      </div>

      <div
        className={`p-3 rounded-lg flex-grow ${
          isUser
            ? "bg-blue-600 text-right rounded-br-none text-white"
            : "bg-gray-700 rounded-bl-none text-white"
        } `}
      >
        <div
          className={`whitespace-pre-wrap break-words  ${
            shouldCollapse && !expanded ? "overflow-hidden" : ""
          }`}
          style={shouldCollapse && !expanded ? collapsedStyle : messageStyle}
        >
          <Markdown className="markdown">{formattedMessage}</Markdown>
        </div>
        {shouldCollapse && (
          <button
            onClick={toggleExpanded}
            className="text-blue-300 mt-2 hover:text-blue-200"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
