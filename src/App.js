import AllPages from "./pages/AllPages";
import { CookiesProvider } from "react-cookie";

window.domain = "http://miner.testingdigiquag.fun/api/v1/";
function App() {
  return (
    <CookiesProvider>
      <AllPages />
    </CookiesProvider>
  );
}

export default App;
