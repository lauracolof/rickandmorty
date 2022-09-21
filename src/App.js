import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from './component/Filters/Filters';
import Cards from './component/Cards/Cards';
import Pagination from './component/Pagination/Pagination';
import Search from './component/Search/Search';
import Navbar from './component/NavBar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import CardsDetail from './component/Cards/CardsDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<CardsDetail />} />


        <Route path='/episodes' element={<Episodes />} />
        <Route path='/episodes/:id' element={<CardsDetail />} />

        <Route path='/location' element={<Location />} />
        <Route path='/location/:id' element={<CardsDetail />} />


      </Routes>
    </Router>
  )
}

const Home = () => {
  //page 1 by default
  // [variable, function]
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState('');
  let [status, setStatus] = useState('');
  let [gender, setGender] = useState('');
  let [species, setSpecies] = useState('');
  let [fetchedData, updateFetchedData] = useState([]);
  //results trae todos los characters
  let { info, results } = fetchedData;
  //si la apicambia, cambia la ruta
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    //inmediatly invocked function expression,
    //cada vez que cambie la api, se ejecuta inmediatamente
    (async function () {
      //esperamos la respuesta y la convertimos a json
      let data = await fetch(api).then(res => res.json());
      updateFetchedData(data)
    })();
  }, [api])

  return (
    <div className="App">

      <h1 className='text-center mb-4'>Characters</h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <Filters
            setGender={setGender}
            setSpecies={setSpecies}
            setStatus={setStatus}
            setPageNumber={setPageNumber} />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page='/'
                results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
