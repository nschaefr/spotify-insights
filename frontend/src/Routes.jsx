import { useContext } from "react";
// import { UserContext } from "./components/utils/user-context";
import InformationPage from "./pages/InformationPage";

function Routes() {
  // const { username } = useContext(UserContext);

  /** 
  if (username) {
    return <ChatPage />;
  }
  */

  return <InformationPage />;
}

export default Routes;
