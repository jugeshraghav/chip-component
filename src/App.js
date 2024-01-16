import { useContext, useEffect, useState } from "react";
import "./App.css";
import { ChipContext } from "./context/ChipContext";
import { ChipContainer } from "./components/ChipContainer";
import { Chip } from "./components/Chip";

function App() {
  const state = useContext(ChipContext);

  const [searchText, setSearchText] = useState("");
  const [showFilteredUsers, setShowFilteredUsers] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState(state.state.all_users);

  console.log(searchText);
  useEffect(() => {
    setFilteredUsers(
      searchText.length > 0 || showFilteredUsers
        ? state.state.all_users.filter(({ fullname }) =>
            fullname.includes(searchText)
          )
        : []
    );
  }, [searchText, showFilteredUsers, state.state.all_users]);
  return (
    <div className="App">
      <h1 className="text-4xl text-purple-900">Pick Users</h1>
      <div className="py-2 mx-auto border-b-4 border-purple-500 w-1/2 m-10  flex flex-wrap gap-2">
        {state.state.selected_users.map((user) => (
          <Chip user={user} key={user._id} />
        ))}

        <input
          type="text"
          placeholder="Add new user..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setShowFilteredUsers(true)}
          className="border-none px-2"
        />
      </div>
      <ChipContainer filtered_users={filteredUsers} />
    </div>
  );
}

export default App;
