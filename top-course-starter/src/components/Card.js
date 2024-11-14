import React from 'react'
import {FcLike , FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = ({course , likedCourses , setLikedCourses}) => {

    function likeHandler(){
        if(likedCourses.includes(course.id)){
            let filter = likedCourses.filter(ele => ele !== course.id);
            setLikedCourses(filter);
            toast.warning('Like Removed');
        }
        else{
            setLikedCourses([...likedCourses,course.id]);
            toast.success('Liked Successfully');
        }
    }

  return (
    <div className='border-2 p-[10px] rounded-lg'>
        <div className='relative'>
            <img src={course.image.url}></img>
            <button className='absolute right-2 bottom-2 bg-white h-[1.7rem] w-[1.7rem] rounded-full grid place-content-center' onClick={likeHandler}>
                {likedCourses.includes(course.id) ? <FcLike/> : <FcLikePlaceholder/>}
            </button>
        </div>
        <div className='text-white'>
            <h2 className='text-[1.25rem] font-semibold'>{course.title}</h2>
            <p>{course.description.length > 100 ? `${course.description.substring(0,100)}...` : course.description}</p>
        </div>
    </div>
  )
}

export default Card