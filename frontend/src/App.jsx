import { ContextProvider } from "./utils/user-context";
import Routes from "./Routes.jsx";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

function App() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
}

export default App;
