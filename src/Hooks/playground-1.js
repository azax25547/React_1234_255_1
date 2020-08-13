import React from "react";
import ReactDOM from "react-dom";

const endPoint = "https://api.github.com/users/azax25547";
const baseUrl = "https://api.github.com/users/";

const App = () => {
  // Hooks
  const [inputHook, setInputHook] = React.useState("");
  const [anotherHook, setAnotherHook] = React.useState("On");
  const [dev, setDev] = React.useState({
    name: "",
    language: "Python",
    exp: 0,
    employed: false,
  });
  const [user, setUser] = React.useState(null);
  const [findUser, setFindUser] = React.useState(null);
  const searchInput = React.useRef();

  // Interact with outside of the App
  // Useful for fetchi data from APIs
  // We can set dependency in the 2nd argument only chnage when name changed
  React.useEffect(() => {
    // document.title = dev.name;
    // fetch(endPoint)
    //   .then((res) => res.json())
    //   .then((data) => setUser(data));
    /** More ASync way to do this */
    const getUserDetails = async () => {
      const response = await fetch(endPoint);
      const data = await response.json();
      setUser(data);
    };

    getUserDetails();

    // it Returns a function to remove any of the effect if after the component is removed
  }, []);

  const getUserDetail = async () => {
    const response = await fetch(`${baseUrl}${findUser}`);
    const data = await response.json();
    setFindUser(data);
  };

  const onHandleInputCHange = (e) => {
    setInputHook(e.target.value);
  };

  const onNewUser = (e) => {
    setFindUser(e.target.value);
  };

  const clearTheInput = () => {
    searchInput.current.value = "";
    searchInput.current.focus();
  };
  return (
    <>
      <label>Enter a value</label>
      <input
        type="text"
        onChange={(event) => {
          setDev({ ...dev, exp: event.target.value });
        }}
      />

      <label>Change Title</label>
      <input
        type="text"
        onChange={(event) => {
          setDev({ ...dev, name: event.target.value });
        }}
      />

      <p>What you will write will be written below too</p>
      <h3>{inputHook}</h3>

      <button
        onClick={() =>
          setDev({
            ...dev,
            language: "Javascript",
            exp: 0,
          })
        }
      >
        Click ME
      </button>
      <p>Language: {dev.language}</p>
      <p>Years of Experience: {dev.exp}</p>

      <button
        onClick={() =>
          setDev((prevState) => ({
            ...prevState,
            employed: !prevState.employed,
          }))
        }
      >
        Employement
      </button>
      <p>I am {dev.employed ? "Emoployed" : "Non-Employed"}</p>

      {user ? (
        <div>
          <p>{user.name}</p>
          <p>{user.location}</p>
          <p>{user.bio}</p>
          <img alt="avatar" src={user.avatar_url}></img>
        </div>
      ) : (
        <h1>LOADING............</h1>
      )}
      <div>
        <h1>Lets FInd Users From Github</h1>
        <label>Find a User </label>
        <input type="text" onChange={onNewUser} ref={searchInput} />
      </div>
      <button onClick={getUserDetail}>Submit</button>
      <button onClick={clearTheInput}>Clear</button>
      {findUser ? (
        <div>
          <p>{findUser.name}</p>
          <p>{findUser.location}</p>
          <p>{findUser.bio}</p>
          <img alt="avatar" src={findUser.avatar_url}></img>
        </div>
      ) : (
        <h1>LOADING............</h1>
      )}
    </>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
