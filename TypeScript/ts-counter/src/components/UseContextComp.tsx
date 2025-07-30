import { createContext, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};
type ChildProp = {
  children: React.ReactNode;
};
export type ContextProviderProp = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
export const userContext = createContext<ContextProviderProp | null>(null);

const UseContextComp = ({ children }: ChildProp) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UseContextComp;
