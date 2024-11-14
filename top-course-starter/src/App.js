import React, { useEffect, useState } from "react";
import {apiUrl , filterData} from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { toast } from "react-toastify";
import Spinner from './components/Spinner';

const App = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setloading] = useState(false);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setloading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch(error) {
        toast.error("Network me koi dikkat hai");
    }
    setloading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return <div className="bg-sky-950 w-[100%] italic h-[100%]">
    <Navbar></Navbar>

    <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>

    <div className="flex justify-center  ">
    {
      loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
    }
    </div>
  </div>;
};

export default App;
