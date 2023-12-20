import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { useState } from "react"

function App() {
  const [item, setItem] = useState('/home')

  return (
    <div className="app">
      <Sidebar activeInfo={[item, setItem]} />
      <div className="app_content">
        <Navbar activeInfo={[item, setItem]} />
        <Content activeInfo={[item, setItem]} />
      </div>
    </div>
  );
}

export default App;
