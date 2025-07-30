import { useState } from "react";

const LoginComp = () => {
  type authUser = {
    name: string;
    email: string;
  };
  const [user, setUser] = useState<authUser>({} as authUser);

  const handleLogin = () => {
    setUser({ name: "sumesh", email: "sumesh@gmail.com" });
  };
  const handleLogout = () => {
    setUser({} as authUser);
  };
  return (
    <>
      {user ? (
        <>
          <h2>
            Welcome {user.name} with email : {user?.email}
          </h2>

          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </>
  );
};

export default LoginComp;
