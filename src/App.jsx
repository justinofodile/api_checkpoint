import { useState } from "react";
import "./App.css";
import UserList from "./UserList";
import NavBar from "./NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <UserList />
    </div>
  );
}

export default App;
