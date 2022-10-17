import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { ADD_MESSAGE } from "../../utils/mutations";
import { QUERY_MESSAGES, QUERY_GIFTER } from "../../utils/queries";

const GifterInput = () => {
  const [messageAuthor, setMessageAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const { loading, data } = useQuery(QUERY_MESSAGES);
  const messages = data?.messages || [];

  // const [addMessage, { data, loading, error }] = useMutation(ADD_MESSAGE);

  // update({ data: { addMessage } }) {
  //   try {
  //     const { messages } = cache.readQuery({ query: QUERY_MESSAGES });
  //     cache.writeQuery({
  //       query: QUERY_MESSAGES,
  //       data: { messages: [addMessage, ...messages] },
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  //   // update me object's cache
  //   const { gifter } = cache.readQuery({ query: QUERY_GIFTER });
  //   cache.writeQuery({
  //     query: QUERY_GIFTER,
  //     data: {
  //       gifter: { ...gifter, messages: [...gifter.messages, addMessage] },
  //     },
  //   });
  // },
  // });

  console.log(messages);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // try {
    //   const { data } = await addMessage({
    //     variables: {
    //       messageText: messageText,
    //       messageAuthor: messageAuthor,
    //     },
    //   });
    // } catch (err) {
    //   console.error(err);
    // } finally {
    //   // setMessageAuthor("");
    //   // setEmail("");
    //   // setMessageText("");
    // }
  };

  return (
    <div>
      <div>
        <div className="messageBox">
          <h2>Leave a message!</h2>
          <form
            className="justify-center justify-content-center align-center col-12"
            onSubmit={handleFormSubmit}
          >
            <div className="mb-3 col-12">
              <label for="inputName" className="form-label">
                Name
              </label>
              <input
                type="name"
                className="form-control"
                id="inputName"
                onChange={(e) => setMessageAuthor(e.target.value)}
              />
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3 col-12">
              <textarea
                name="messageText"
                placeholder="Enter a message here."
                value={messageText}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={(e) => setMessageText(e.target.value)}
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GifterInput;
