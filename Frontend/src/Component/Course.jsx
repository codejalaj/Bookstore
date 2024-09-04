import React from "react";
import Cards from"./Cards";
import List from "../../public/List.json"
import {Link} from "react-router-dom"
export default function Course() {
  return (
    <>
       <div className=" max-w-screen-2xl container mx-auto md:px-18 px-4">
        <div className="mt-3 items-center justify-center text-center">
          <h1 className="text-2x-1  md:text-4x1">
             we're delighted to have you  <span className="text-pink-500"> Here!</span>
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Tempore odio reprehenderit optio, nostrum temporibus officia at
              magnam veniam qui odit. Veritatis fugit nobis non reiciendis nesciunt error eos reprehenderit eligendi?
          </p>
          <Link to="/">
          <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300" >Back</button></Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {List.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))}
        </div>
       </div>
    </>
  );

}

