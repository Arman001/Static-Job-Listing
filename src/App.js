import React,{useEffect,useState} from "react";
import bgImageMobile from "./assets/images/bg-header-mobile.svg";
import bgImageDesktop from "./assets/images/bg-header-desktop.svg";
import data from './assets/data.json';
import Card from "./components/Card";
import Filter from "./components/Filter";

const App = () => {
  const [filterTags, setFilterTags] = useState([]);
  useEffect(()=>{
    console.log(filterTags);
  }, [filterTags])

  return (
    <div className="font-leagueSpartan">
      <section id="jobList">
        <div className="flex flex-col">
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
          {/* Filters */}

          {filterTags.length>0&&(<div className=" bg-white -mt-5 mb-3 p-3 relative w-4/5  self-center md:w-4/5 flex flex-row justify-between">
            <div className="flex flex-row flex-wrap gap-3">
            {filterTags.map((tag)=>(
              <Filter tag={tag} setFilterTags={setFilterTags}/>
              ))}
              </div>

              <button className=" text-veryDarkGreyishCyan cursor-pointer hover:text-desaturatedDarkCyan hover:underline" onClick={()=>{setFilterTags([])}}>Clear</button>
              
          </div>)}

          {/* card */}
          <div className="md:w-4/5 self-center">
          {data.map((item)=>(
            <Card info = {item} setFilterTags = {setFilterTags} filterTags={filterTags} />
          ))}
          </div>
          
          
        </div>
      </section>
    </div>
  );
};

export default App;
