import { useEffect, useState } from "react";
import "./App.css";
import { type User } from "./types.d";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=100")
      .then(async (res) => await res.json())
      .then((res) => {
        setUsers(res.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Prueba tecnica</h1>
      {JSON.stringify(users)}
    </div>
  );
}

export default App;
