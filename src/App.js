import { useContext, useState } from "react";
import "./App.css";
import { ChipContext } from "./context/ChipContext";
import { ChipContainer } from "./components/ChipContainer";
import { Chip } from "./components/Chip";

function App() {
  const state = useContext(ChipContext);
  console.log(state);
  const [searchText, setSearchText] = useState("");
  const filtered_users =
    searchText.length > 0
      ? state.state.all_users.filter(({ fullname }) =>
          fullname.includes(searchText)
        )
      : [];

  return (
    <div className="App">
      <h1 className="text-4xl text-purple-900">Pick Users</h1>
      <div className=" mx-auto border-b-4 border-purple-500 w-1/2 m-10  flex flex-wrap">
        <div className="flex flex-wrap gap-2">
          {state.state.selected_users.map((user) => (
            <Chip user={user} />
          ))}
        </div>
        <input
          type="text"
          placeholder="Add new user..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border-none"
        />
      </div>
      <ChipContainer filtered_users={filtered_users} />
    </div>
  );
}

export default App;
