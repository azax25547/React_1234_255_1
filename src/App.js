import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_TODOS = gql`
  query MyQuery {
    todo {
      done
      id
      text
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_TODOS);
  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error</div>;
  return (
    <div className="vh-100 code flex flex-column items-center bg-purple white pa3 fl-1">
      <h1 className="fl-1">Welcome to GraphQL Todos</h1>
      <form className="mb3">
        <input
          className="pa2 f4 b--dashed"
          type="text"
          placeholder="What to do "
        />
        <button type="submit" className="pa2 f4 bg-green">
          Submit
        </button>
      </form>
      <div className="flex items-center justify-center flex-column">
        {data.todo.map((todo) => (
          <p key={todo.id}>
            <span className="pointer list pa1 f3 ">{todo.text}</span>
            <span className="bg-transparent bn f4">
              <span className="red">&times;</span>
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
