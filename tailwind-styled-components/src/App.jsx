import tw from "tailwind-styled-components";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <h1 className="text-3xl font-bold underline text-red-400 bg-slate-200">
        Hello world!
      </h1> */}
      <Container>
        <Hero>Styled using tailwind styled compoenents</Hero>
      </Container>
    </div>
  );
}
const Container = tw.div`
  flex
  items-center
  justify-center
  flex-col
  w-full
`;
const Hero = tw.div`
  px-4
  py-2
  text-white
  bg-indigo-600
`;
export default App;
