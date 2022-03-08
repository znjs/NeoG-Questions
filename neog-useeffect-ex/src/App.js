import tw from "tailwind-styled-components";
import "./App.css";
import AxiosGetReq from "./pages/AxiosGetReq";
import Counter from "./pages/Counter";
import WishList from "./pages/WishList";

function App() {
  return (
    <div className="App">
      <Header>NeoG - useEffect</Header>
      {/* <Counter /> */}
      {/* <WishList /> */}
      <AxiosGetReq />
    </div>
  );
}
const Header = tw.div`text-2xl font-bold text-red-600 mb-2`;
export default App;
