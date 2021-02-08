import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Model from "./Components/Model";
import { StateProvider } from "./Components/DataLayer/StateProvider";
import Stories from "./Components/Stories";
import StatusModal from "./Components/StatusModal";
import Post from "./Components/Post";
import Create from "./Components/Create";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <StateProvider>
      <div className="App">
        <Header />
        <Model />
        <div className="container">
          <Stories />
          <Create />

          <StatusModal />

          <Post />
          <Sidebar />
        </div>
      </div>
    </StateProvider>
  );
}

export default App;
