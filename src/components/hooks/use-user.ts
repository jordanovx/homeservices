import { useState, useEffect } from "react";
import { User } from "../../../models/user";

const useUser = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const localUser = JSON.parse(
      window.localStorage.getItem("user") || "{}"
    ) as User;
    setUser(localUser);
  }, []);

  return {
    user,
  };
};

export default useUser;
