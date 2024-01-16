import { createContext, useReducer } from "react";
import { chip_reducer, initial_state } from "../reducers/chip-reducer";

export const ChipContext = createContext();

export const ChipProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chip_reducer, initial_state);

  return (
    <ChipContext.Provider value={{ state, dispatch }}>
      {children}
    </ChipContext.Provider>
  );
};
