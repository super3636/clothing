import React from "react";

import { Container, Card } from "./test.styles";
import DataFetch from "./use-effect";
const Tester = () => {
  const user = DataFetch(
    "https://jsonplaceholder.typicode.com/users?username=Bret"
  );
  const posts = DataFetch("https://jsonplaceholder.typicode.com/posts?id=1");

  return (
    <Container>
      <Card>
        {/* <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input> */}
        {user ? (
          <div>
            <h2>{user.name}</h2>
            <h2>{user.username}</h2>
            <h2>{user.email}</h2>
          </div>
        ) : (
          <p>User not found</p>
        )}
      </Card>
      <Card>
        {posts ? (
          <div>
            <h2>{posts.body}</h2>
            <h2>{posts.title}</h2>
          </div>
        ) : (
          <p>Post not found</p>
        )}
      </Card>
    </Container>
  );
};
export default Tester;
