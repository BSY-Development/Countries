import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Provider from "./provider/Provider";

function App() {
  return (
    <Provider>
      <Navbar />
      <Content />
    </Provider>
  );
}

export default App;
