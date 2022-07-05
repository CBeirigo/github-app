import React from "react";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import RepositoriesList from "./components/RepositoriesList";
import { ResetCSS } from "./global/resetCSS";
import GithubProvider from "./providers/GithubProvider";

function App() {
  return (
    <main>
      <GithubProvider>
        <ResetCSS/>
        <Layout>
        <Profile/>
          <RepositoriesList/>
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
