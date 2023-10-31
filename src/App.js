import React,{useEffect,useState} from "react";
import bgImageMobile from "./assets/images/bg-header-mobile.svg";
import bgImageDesktop from "./assets/images/bg-header-desktop.svg";
import profileImage from "./assets/images/shortly.svg";

const App = () => {
  const [data,setData] = useState({});
  const getData = ()=>{
    fetch('./src/assets/data.json').then((response)=>response.json()).then((jsonData)=>setData(jsonData)).catch((error)=>{console.log("an error has occured ",error)});
  }

  useEffect(()=>{
    getData();
    console.log(data);
  },[]);


  return (
    <div className="font-leagueSpartan">
      <section id="jobList">
        <div >
          <div >
            <img
              className="w-full md:hidden "
              src={bgImageMobile}
              srcSet=""
              alt="background header"
            />

            <img
              className="hidden  md:block md:w-full"
              src={bgImageDesktop}
              srcSet=""
              alt="background header"
            />
          </div>
          {/* card */}
          
        </div>
      </section>
    </div>
  );
};

export default App;
