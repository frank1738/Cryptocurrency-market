import { Provider } from 'react-redux';
import { store } from './Redux/configureStore';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './Components/Details';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');
  return (
    <Provider store={store}>
      <Router>
        <NavBar page={page} set={setPage} />
        <Routes>
          <Route path="/" element={<Home page={page} set={setPage} />} />
          <Route path="/coin" element={<Details />}>
            <Route path=":coinId" element={<Details />}></Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
