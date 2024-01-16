import { useContext } from "react";
import { ChipContext } from "../context/ChipContext";

export const Chip = ({ user }) => {
  const { dispatch } = useContext(ChipContext);
  return (
    <div
      key={user._id}
      className="w-max flex gap-2 items-center   rounded-full bg-gray-200"
    >
      <img src={user.image} className="w-10 h-10 rounded-full" />

      <p>{user.fullname}</p>
      <p
        className="mr-2 cursor-pointer hover:font-bold"
        onClick={() =>
          dispatch({
            type: "REMOVE_USER_FROM_SELECTED_USER_LIST",
            payload: user,
          })
        }
      >
        ✕
      </p>
    </div>
  );
};
