import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './component/home'
import FestivalForm from './component/festivalForm'
import FestivalList from './component/festivalList';
import CharacterModel from './component/characterModel'

function App() {
  return (
      <BrowserRouter>
        <nav style={{
          textAlign: 'center',
        }}>
          <Link to = "/">HOME</Link> | {""}
          <Link to = "/festivalform">FESTIVAL FORM</Link> | {""}
          <Link to = "/festivallist">FESTIVAL LIST</Link> | {""}
          <Link to = "/charactermodel">CHARACTER MODEL</Link>
        </nav>

        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/festivalform" element={ <FestivalForm /> } />
          <Route path="/festivallist" element={ <FestivalList /> } />
          <Route path="/charactermodel" element={ <CharacterModel /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
