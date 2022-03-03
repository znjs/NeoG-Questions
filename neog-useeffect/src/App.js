import tw from "tailwind-styled-components";
import "./App.css";

function App() {
  return (
    <Container className="App">
      <Header>Hello world!</Header>
    </Container>
  );
}
const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600
`;
const Header = tw.h1`
text-3xl font-bold underline inline-block bg-blue-600 text-white px-4 py-2 rounded-lg`;
export default App;
