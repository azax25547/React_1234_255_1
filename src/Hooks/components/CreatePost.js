import React from "react";
import { PostContext } from "../App";

export default function CreatePost({ user, handleAddPost }) {
  const { dispatch } = React.useContext(PostContext);
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState(null);

  const imageRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { content, image, user, id: Date.now() };
    // handleAddPost(post);
    dispatch({ type: "ADD_POST", payload: { post } });
    //controlled Component
    setContent("");
    imageRef.current.value = "";
    setImage("");
  };

  return (
    <div>
      <h1>Create a New Post!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          ref={imageRef}
        />
        <button type="submit" disabled={!content ? true : false}>
          Sumbit your Post
        </button>
      </form>
    </div>
  );
}
