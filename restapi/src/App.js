import { useEffect } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';

const { kakao } = window;
function App() {
  const data = useFetch(`${process.env.REACT_APP_API_URL}?ServiceKey=${process.env.REACT_APP_API_KEY}&searchYearCd=2015&siDo=11&guGun=680&type=json&numOfRows=10&pageNo=1`);
 

  useEffect(()=>{
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };
    new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  },[])

  return (
    <div className="App">
      <h1>자전거 사고 다발구역</h1>
      <div id="map"  ></div>
    </div>
  );
}

export default App;
