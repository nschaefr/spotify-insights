import { useContext } from "react";
import { UserContext } from "./utils/user-context";
import InformationPage from "./pages/InformationPage";
import ProfilePage from "./pages/ProfilePage";

function Routes() {
  const { username } = useContext(UserContext);

  if (username) {
    return <ProfilePage />;
  }

  return <InformationPage />;
}

export default Routes;
