import { displayUser, displayError, stopLoading } from "../redux/userSlice";

export default function userThunk() {
  return async function (dispatch) {
    const uri = "https://jsonplaceholder.typicode.com/users/1";
    const options = {
      "Content-type": "application/json",
    };

    try {
      const response = await fetch(uri, options);
      const data = await response.json();
      dispatch(displayUser(data));
    } catch (error) {
      dispatch(displayError());
    } finally {
      dispatch(stopLoading());
    }
  };
}
