import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import List from"../../public/List.json";       // in list.json file we samne array banaye he jisme differant objects hai
import Cards from './Cards';
                                          // here freebook is an parent component and cards is an child component
function Freebook() {
    
  try {
    const filterData=List.filter((data)=>data.category==="Free"); // arrays ke data ko filter krne ke liye we use filter data
    console.log(filterData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    
  return (<>
  <div className=" max-w-screen-2x1 container mx-auto md:px-3 px-4">
   <div>
   <h1 className="font-semibold text-x1 pb-1">Free Offered Course</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Necessitatibus unde voluptatem fuga, alias praesentium esse 
        reiciendis, laudantium repudiandae odio accusantium eligendi eum iure nam labore iste consectetur itaque tenetur error?
    </p>
   </div>
  <div>
  <Slider {...settings}>
        {filterData.map((item)=>(
          <Cards item={item}key={item.id}/>
        ))}
      </Slider>
  </div>
  </div>

  </>);
    
  } catch (error) {
    console.log(error);
  }
}
export default Freebook;