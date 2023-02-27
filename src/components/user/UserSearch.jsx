import { useContext } from "react";
import { useState } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";
import GithubContext from "../../context/github/GithubContext";

const UserSearch = () => {
  const [text, setText] = useState("");

  const { users, dispatch, setLoading, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = ({ target: { value } }) => setText(value);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something!", "error");
      return;
    } else {
      setLoading();
      const data = await searchUsers(text);

      dispatch({
        type: "GET_USERS",
        payload: data,
      });
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-8 gap-8">
      <div>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-md text-black focus:outline-0 "
                placeholder="Search.."
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36  btn btn-md "
              >
                Go!
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-md btn-ghost" onClick={() => clearUsers()}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
export default UserSearch;
