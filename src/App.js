import Layout from "./components/Layout.js";
import Profile from "./components/Profile.js";  
import Projects from "./components/Projects.js";
import "./App.css";

function App() {
  return (
    <Layout>
      <Profile id="profile"/>
      <Projects id="projects"/>
    </Layout>
  );
}

export default App;
