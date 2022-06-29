import React from "react";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import RepositoriesList from "./components/RepositoriesList";
import { ResetCSS } from "./global/resetCSS";

function App() {
  return (
    <main>
      <ResetCSS/>
      <Layout>
       <Profile/>
        <RepositoriesList/>
      </Layout>
    </main>
  );
}

export default App;
