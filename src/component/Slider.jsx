import React, { useState, useEffect , useRef} from 'react'
import GlobalApi from '../Services/GlobalApi';
import { HiChevronLeft , HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {

  const getTrendingMovies = () => {
    GlobalApi.getTrendingMovies()
      .then(resp => {
        console.log(resp.data.results);
        setMoviesList(resp.data.results);
      })
      .catch(err => {
        console.error("Error fetching trending movies:", err);
      });
  };

  const [moviesList, setMoviesList] = useState([]);
  const elementRef = useRef();
  const sliderRight = (element)=>{
    element.scrollLeft+=screenWidth-110
  }
  const sliderLeft = (element)=>{
    element.scrollLeft-=screenWidth-110
  }

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <div>

        <HiChevronLeft className='text-white text-[30px] absolute max-8 mt-[150px] cursor-pointer hidden md:block' onClick={() => sliderLeft(elementRef.current)}/>
        <HiChevronRight className='text-white text-[30px] absolute max-8 mt-[150px] cursor-pointer hidden md:block right-0' onClick={() => sliderRight(elementRef.current)}/>

   <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth ' ref={elementRef}>
  {moviesList.map((item, index) => (
    <img 
      key={index} 
      src={IMAGE_BASE_URL + item.backdrop_path} 
      alt={item.title || "Movie Image"} className='min-w-full md:h-[410px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'
    />
  ))}
</div>
</div>

  )
}

export default Slider;
