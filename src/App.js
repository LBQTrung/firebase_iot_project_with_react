import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app_content">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
