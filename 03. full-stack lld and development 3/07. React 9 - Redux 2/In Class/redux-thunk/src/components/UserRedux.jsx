import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import userThunk from "../middleware/userThunk";

export default function UserRedux() {
  const { loading, error, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userThunk());
  }, []);

  if (error) {
    return <h1 className="text-2xl text-red-400">Unable to fetch user details</h1>;
  } else if (loading) {
    return <h1 className="text-2xl tedt-green-600">Loading ...</h1>;
  }

  return (
    <div>
      <h1 className="text-2xl">User Component</h1>
      <p className="text-xl">Name: {user.name}</p>
      <p className="text-xl">Phone: {user.phone}</p>
    </div>
  );
}
