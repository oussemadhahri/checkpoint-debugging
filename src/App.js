
import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList'; 
import {moviesData} from './moviesData';  
import { useState } from 'react';
import FilterByTitle from './components/FilterByTitle';
import  FilterByRate from './components/Rating';
import { Modal, Button } from 'antd';
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchRate, setSearchRate]= useState(1)
  const [showAddForm, setShowAddForm] = useState(false);
  const movieAdd =(newMovie)=>{
    setMovies([...movies, newMovie]);
    
  }

  return (
    <div className="app">
      <h1>movie store</h1>
      <FilterByTitle 
     searchTitle={searchTitle}
      setSearchTitle={setSearchTitle}/>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'20px'}}> 
        <FilterByRate  
      searchRate={searchRate}
      setSearchRate={setSearchRate}
      isRating={false}/>
      </div>
     
      <div style={{width: '60%', margin: '16px auto', display: 'flex', justifyContent: 'center'}}>
        <Button type="primary" onClick={() => setShowAddForm(true)}>Add Movie</Button>
      </div>

      <Modal
        title="Add Movie"
        open={showAddForm}
        onCancel={() => setShowAddForm(false)}
        footer={null}
        centered
        width={900}
      >
        <AddMovie movieAdd={movieAdd} onClose={() => setShowAddForm(false)} />
      </Modal>
      <MovieList movies={movies} searchTitle={searchTitle} searchRate={searchRate}/>
    </div>
  );
}

export default App;