import { users } from "../data/users";

export const initial_state = {
  all_users: users,
  selected_users: [],
  show_user_modal: false,
};

export const chip_reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER_TO_SELECTED_USER_LIST":
      return {
        ...state,
        all_users: state.all_users.filter(
          ({ _id }) => _id !== action.payload._id
        ),
        selected_users: [...state.selected_users, action.payload],
      };

    case "REMOVE_USER_FROM_SELECTED_USER_LIST":
      return {
        ...state,
        selected_users: state.selected_users.filter(
          ({ _id }) => _id !== action.payload._id
        ),
        all_users: [...state.all_users, action.payload],
      };

    case "SHOW_USER_MODAL":
      return { ...state, show_user_modal: true };
    case "HIDE_USER_MODAL":
      return { ...state, show_user_modal: false };

    default:
      return state;
  }
};
