import React from "react";
import Layout from "./components/Layout";
import NoSearch from "./components/NoSearch";
import Profile from "./components/Profile";
import RepositoriesList from "./components/RepositoriesList";
import useGithub from "./hooks/GithubHooks";


function App() {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ?  (<>
        {githubState.loading ? (
          <p>Loading</p>
        ) : (
          <>
            <Profile />
            <RepositoriesList />
          </>
        )}
      </>) : (<NoSearch />) }
     

    </Layout>
  );
}

export default App;
