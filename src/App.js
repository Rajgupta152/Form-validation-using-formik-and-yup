import './App.css';
import Forms from './components/Forms';
import DataTable from './components/DataTable';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router';

function App() {
  const [formData, setFormData] = useState([]);
  const getData = (data) => {
    // console.log(data);
    setFormData(data)
  }
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Forms takeData = {getData}/>}/>
        <Route path='/DataTable' element = {<DataTable sendData = {formData}/>} />
      </Routes>
    </div>
  )
}

export default App;
