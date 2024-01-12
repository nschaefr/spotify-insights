import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function ContextProvider({ children }) {
  const [username, setLoggedInUsername] = useState();
  const [imageURL, setImageURL] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    axios.get("/profile").then((response) => {
      setLoggedInUsername(response.data.body.display_name);
      setImageURL(response.data.body.images[0].url);
      setEmail(response.data.body.email);
    });
  }, []);

  return (
    <UserContext.Provider value={{ username, imageURL, email }}>
      {children}
    </UserContext.Provider>
  );
}
