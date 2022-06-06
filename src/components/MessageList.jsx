/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types
export const MessageList = ({ messages }) => {
  return (
    <ul>
      {messages.map ((message, idx) => (
        <li key={idx}>
          {message.author}: {message.text}
        </li>
      ))}
    </ul>
  );

};