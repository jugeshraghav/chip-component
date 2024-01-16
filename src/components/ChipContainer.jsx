import { useContext } from "react";
import { ChipContext } from "../context/ChipContext";

export const ChipContainer = ({ filtered_users }) => {
  const { dispatch } = useContext(ChipContext);

  return filtered_users.length > 0 ? (
    <div className="w-96 h-96 overflow-auto mx-auto flex  shadow-lg flex-col gap-4  items-center">
      {filtered_users.map(({ _id, fullname, image, email }) => (
        <div
          key={_id}
          className="w-72 flex gap-2 items-start cursor-pointer  p-2 rounded-lg hover:border-2 border-purple-500"
          onClick={() => {
            dispatch({
              type: "ADD_USER_TO_SELECTED_USER_LIST",
              payload: { _id, fullname, email, image },
            });
            dispatch({ type: "HIDE_USER_MODAL" });
          }}
        >
          <img src={image} alt="profile" className="w-12 h-12 rounded-full" />
          <div>
            <p className="font-bold text-left">{fullname}</p>
            <p className="text-gray-800 text-left">{email}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    ""
  );
};
