import React, { useContext } from "react";

const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState("");
  const [isLogin, setisLogin] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);

  useEffect(() => {});

  const value = {
    user,
    isLogin,
    isAdmin,
    setUser,
    setisLogin,
    setisAdmin,
  };

  return (
  <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>

  );



};
  export const useAuth = () => {
    return useContext(AuthContext);
  }
