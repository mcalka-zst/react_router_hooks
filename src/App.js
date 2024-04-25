import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/pages/Main';
import Example01 from './components/pages/Example01';
import Example02 from './components/pages/Example02';
import Example03 from './components/pages/Example03';
import NotFound from './components/pages/NotFound';

const App = () => {
  //Trzeba doinstalować moduł React Router. W konsoli wpisujemy: npm i react-router-dom
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/example01" element={<Example01 />} />
        <Route path="/example02" element={<Example02 />} />
        <Route path="/example03" element={<Example03 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
