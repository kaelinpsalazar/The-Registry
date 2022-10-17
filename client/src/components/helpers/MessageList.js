import React from "react";

const MessageList = ({
  messages,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!messages) {
    return <h3>No Messages Yet</h3>;
  }
  console.log("messages in messageList", messages);

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      <hr style={{ marginLeft: "40px", marginRight: "40px", color: "black" }} />
      {messages &&
        messages.map((message) => (
          <div key={message._id} className="mb-3">
            <h6
              className="
            card-header text-dark p-0 m-0"
            >
              {showUsername ? (
                `${message.messageAuthor} messaged: ${message.messageText}`
              ) : (
                <>
                  <span style={{ fontSize: "1rem" }}>
                    You said this message on {message.messageText}
                  </span>
                </>
              )}
            </h6>
          </div>
        ))}
    </div>
  );
};

export default MessageList;
