import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import CountryInfo from './pages/CountryInfo';
import Provider from "./provider/Provider";

function App() {
  return (
    <Provider>
      <Routes>
        <Route exact path="/" element={ <Main /> } />
        <Route exact path="/:country" element={ <CountryInfo /> } />
      </Routes>
    </Provider>
  );
}

export default App;
