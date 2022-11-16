import AllPages from "./pages/AllPages";
import { CookiesProvider } from "react-cookie";
import { AuthContextProvider } from "./context/auth-context";

window.domain = "https://miner.testingdigiquag.fun/api/v1/";
// "http://miner.testingdigiquag.fun/api/v1/"

function App() {
  return (
    <AuthContextProvider>
      <CookiesProvider>
        <AllPages />
      </CookiesProvider>
    </AuthContextProvider>
  );
}

export default App;
