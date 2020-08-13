import React from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import postReducer from "./reducer";
export const UserContext = React.createContext();
export const PostContext = React.createContext({
  posts: [],
});

export default function App() {
  const [user, setUser] = React.useState("Azax");
  // const [posts, setposts] = React.useState([]);
  const intitalPostState = React.useContext(PostContext);
  const [state, dispatch] = React.useReducer(postReducer, intitalPostState);

  React.useEffect(() => {
    document.title = user ? user : "Welcome to App - Login";
  }, [user]);

  //Callback
  // const handlAddPost = React.useCallback(
  //   (newpost) => {
  //     setposts([newpost, ...state.posts]);
  //   },
  //   [posts]
  // );

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={user}>
        <Header setUser={setUser} />
        <CreatePost user={user} />
        <PostList posts={state.posts} />
      </UserContext.Provider>
    </PostContext.Provider>
  );
}
