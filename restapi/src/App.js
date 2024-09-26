import { useEffect } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';

function App() {
  const data = useFetch(`${process.env.REACT_APP_API_URL}?ServiceKey=${process.env.REACT_APP_API_KEY}&searchYearCd=2015&siDo=11&guGun=680&type=json&numOfRows=10&pageNo=1`);
  useEffect(()=>{
    console.log(data);
  },[data])
  return (
    <div className="App">
 
    </div>
  );
}

export default App;
