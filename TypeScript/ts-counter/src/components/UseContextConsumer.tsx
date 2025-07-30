import { useContext } from "react";
import { userContext } from "./UseContextComp";

const UseContextConsumer = () => {
  const userData = useContext(userContext);
  const handleLogin = () => {
    if (!userData?.user) {
      userData?.setUser({ name: "Soman", email: "Soman@gmail.com" });
      alert("login Successfully");
      return;
    }
    alert("you are already Logged in");
  };

  const handleLogout = () => {
    if (userData?.user) {
      userData.setUser(null);
      alert("You are logged out successfully");
      return;
    }
    alert("You are already logged out , Try Login ");
  };
  return (
    <div>
      {userData?.user ? (
        <>
          <h2>Welcome user : {userData?.user?.name}</h2>
          <p>user Email : {userData?.user?.email}</p>
        </>
      ) : (
        ""
      )}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UseContextConsumer;
