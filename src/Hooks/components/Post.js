import React from "react";
import { UserContext } from "../App";
import { PostContext } from "../App";

export default function Post({ image, content, user, id }) {
  const currentUser = React.useContext(UserContext);
  const { dispatch } = React.useContext(PostContext);

  function handleDelePost() {
    dispatch({
      type: "DELETE_POST",
      payload: { id },
    });
  }
  const isCurrentUser = currentUser === user;
  return (
    <>
      {image && (
        <img
          style={{ height: 100, width: 200, objectFit: "cover" }}
          src={URL.createObjectURL(image)}
        />
      )}
      <p>{content}</p>
      <div>{user}</div>
      {isCurrentUser && <button onClick={handleDelePost}>Delete</button>}
    </>
  );
}
