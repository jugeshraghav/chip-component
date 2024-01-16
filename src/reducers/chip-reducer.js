import { users } from "../data/users";

export const initial_state = {
  all_users: users,
  selected_users: [],
};

export const chip_reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER_TO_SELECTED_USER_LIST":
      return {
        ...state,
        selected_users: [...state.selected_users, action.payload],
      };

    case "REMOVE_USER_FROM_SELECTED_USER_LIST":
      return {
        ...state,
        selected_users: state.selected_users.filter(
          ({ _id }) => _id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};
