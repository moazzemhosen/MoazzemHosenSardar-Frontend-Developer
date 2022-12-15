
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Banner from './components/Banner';
import GridPage from './components/GridPage';
import Search from './components/Search';
import { getData } from './Redux/AppReducer/action';

function App() {

  const usesData=useSelector((state)=>state.AppReducer.DATA)
  const [data,setData]=useState(usesData);
  const dispatch=useDispatch();
  useEffect(()=>{
 dispatch(getData())
  },[])
  useEffect(()=>{
 setData(usesData)
  },[usesData])

  return (
    <div className="App">
      <Banner/>
      <Search data={usesData} setData={setData}/>
    
      <GridPage usesData={data} />
      
    </div>
  );
}

export default App;
