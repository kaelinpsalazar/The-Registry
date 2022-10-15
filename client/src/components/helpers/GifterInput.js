import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_MESSAGE } from "../../utils/mutations";
import { QUERY_MESSAGES, QUERY_GIFTER } from "../../utils/queries";

const GifterInput = () => {
  const [messageText, setMessageText] = useState("");
  const [addMessage, { error }] = useMutation(ADD_MESSAGE, {
    update(cache, { data: { addMessage } }) {
      try {
        const { messages } = cache.readQuery({ query: QUERY_MESSAGES });

        cache.writeQuery({
          query: QUERY_MESSAGES,
          data: { messages: [addMessage, ...messages] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { gifter } = cache.readQuery({ query: QUERY_GIFTER });
      cache.writeQuery({
        query: QUERY_GIFTER,
        data: {
          gifter: { ...gifter, messages: [...gifter.messages, addMessage] },
        },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addMessage({
        variables: {
          messageText,
          messageAuthor: data.name,
        },
      });

      setMessageText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "messageText") {
      setMessageText(value);
    }
  };

  return (
    <div>
      <h2>Leave a message!</h2>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="mb-3">
          <label for="inputName" className="form-label">
            Name
          </label>
          <input type="name" className="form-control" id="inputName" />
        </div>
        <div className="mb-3">
          <label for="inputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <textarea
            name="messageText"
            placeholder="Enter a message here."
            value={messageText}
            className="form-input w-90"
            style={{ lineHeight: "1.5", resize: "vertical" }}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default GifterInput;
