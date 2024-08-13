// App.jsx
import React, { useState } from "react";
import "./App.css";

function App() {
const [countries, setCountries] = useState([]);  
// 국가 이름을 입력하는 input  값을 상태관리하기 위한 useState
const [country,setCountry] = useState("");
const [gMedal,setGMedal] = useState("0");
const [sMedal,setSMedal] = useState("0");
const [bMedal,setBMedal] = useState("0");


const handleAddCountry = (event) => {
  event.preventDefault();

  const newCountries = {
    id: new Date().getTime(),
    country: country,
    gold: gMedal,
    silver: sMedal,
    bronze: bMedal
  };
  
  setCountries([ ...countries, newCountries]);
};





// 함수선언
const handleDeleteCountry = (id) => {
  // setCountries(country.filter(country=>country.id !== id));
  const newCountry = countries.filter((country) => {
   return country.id !== id
  });
  
 

  setCountries(newCountry);
}
//filter
//map key ==> idx 임시로 id 넣어 둔 부분
//map 똑같은 div 여러번 생성시키더라도 어떤 div가 어떤 div인지 구분을 하려고  key index
// 삭제 button 세번째 삭제



const handleUpdateCountry = (event) => {
  event.preventDefault(); //default 값을 막아준다.
  const existCountry = countries.find((item)=> { 
    return item.country === country;
  });

  if(existCountry) {
    const newCountries = 

    countries.map((item)=> {
      if (item.country === country) {
        return {
          id: new Date().getTime(),
          country: item.country, 
          gold: gMedal, 
          silver: sMedal, 
          bronze: bMedal, 
        };
      } else {
        return item;
      }
      })
    setCountries (newCountries)
 } else {
   alert("국가가 존재하지 않습니다.");
 }

};

// 존재하지 않는 setrecord  호출함  (틀린 것 회고)


const inputCountryHandle = (event) => {
  setCountry(event.target.value)
  
};

const inputGoldHandle = (event) => {
  setGMedal(event.target.value)
  
};

const inputSiverHandle = (event) => {
  setSMedal(event.target.value)
  
};

const inputBronzeHandle = (event) => {
  setBMedal(event.target.value)
  
};

  return (
    <div className="container">
      
      <h1>2024 파리 올림픽 메달 레코드</h1>
      <form className="input-group">
        <div className="input-field">
          <label>국가명</label>
          <input type="text"  onChange={inputCountryHandle} placeholder="국가 입력" />
        </div>
        <div className="input-field">
          <label>금메달</label>
          <input type="number" onChange={inputGoldHandle} placeholder="0"  />
        </div>
        <div className="input-field">
          <label>은메달</label>
          <input type="number" onChange={inputSiverHandle} placeholder="0"  />
        </div>
        <div className="input-field">
          <label>동메달</label>
          <input type="number" onChange={inputBronzeHandle} placeholder="0"  />
        </div>
        

        <div className="button-group">
          <button  type="submit" onClick={handleAddCountry}>국가 추가</button>
          <button type="button" onClick={handleUpdateCountry}>업데이트</button>
        </div>
      </form>
      <div className="list">
        <div className="listContent">
          <p>국가명</p>
          <p>금메달</p>
          <p>은메달</p>
          <p>동메달</p>
          
        </div>

        {countries.map((item) => 
      <div className="listInput" key={item.name}>
       <p>{item.country}</p> 
       <p>{item.gold}</p>
       <p>{item.silver}</p>
       <p>{item.bronze}</p>
       <button onClick={()=>handleDeleteCountry(item.id)}>삭제</button>
      </div>
      )}
      </div>
    </div>
  );
}

export default App;




// 수정 부분
// 1.  countries 배열 안에 object(객채)  유저가 입력한 국가(country)가 있는지 없는지
//     find 
//     const existCountry = countries.find 
//     1-1. 있을때는 업데이트를 해주고 없을때는 알럿을 띄워줘라
//          if(existCountry) {
//           업데이트
//          } else {
//            alert("국가가 존재하지 않습니다.")
//          }

// 2. map을 써서(item){객체 하나하나} countries 배열을 한번 순회하면서 각 객체에 country가 유저가 입력한  country랑 동일하다면
//   return {country: item.country, gMedal: item.goldInput, silver: silverInput, bronze...}
//   동일하지 않다면 
//   return item

  // countries.map((item)=> {
  //   if (item.country === country) {
  //     return {country: item.country, gold: gMedal, silver: sMedal, bronze: bMedal ...}
  //   } else {
  //     return item
  //   }
  // })  // 1번에 들어갈 내용