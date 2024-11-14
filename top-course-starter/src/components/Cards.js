import React, { useState } from "react";
import { toast } from "react-toastify";
import Card from "./Card";

const Cards = ({ courses , category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if(category === "All"){
        let allCourses = [];
        Object.values(courses).forEach((array) => {
            array.forEach((course) => {
                allCourses.push(course);
            });
        });
        return allCourses;
    }
    else{
        return courses[category];
    }
  }

  return (
    <div className="grid grid-cols-3 gap-4 w-[80%] place-content-center">
      {getCourses().map((course) => {
        return (
          <Card
            course={course}
            key={course.id}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          ></Card>
        );
      })}
    </div>
  );
};

export default Cards;
