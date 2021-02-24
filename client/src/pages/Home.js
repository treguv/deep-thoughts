import React from "react";
import { useQuery } from "@apollo/react-hooks"; //allows us to make gql requests to the server
import { QUERY_THOUGHTS } from "../utils/queries";
import ThoughtList from "../components/ThoughtList";
const Home = () => {
  //use useQuery hookto make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || []; // optional chaining. If exists do thoughts else []
  console.log(thoughts);

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed For Thought(s)..."
            ></ThoughtList>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
