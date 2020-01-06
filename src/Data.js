import React from 'react'
import CampgroundCard from './CampgroundCard';

const Data = () =>{
    
    return (
        <div className="row text-center">
            <CampgroundCard 
                name="Cloud's Rest" 
                imgSrc="https://res.cloudinary.com/danxiacgf/image/upload/v1574937753/dvh3iy9gllddsmbxvsym.jpg"
                numOfLikes ="2"
            />
            <CampgroundCard 
                name="Lonely night" 
                imgSrc="https://res.cloudinary.com/danxiacgf/image/upload/v1574938269/mjptuyqgl4j110jteadj.jpg"
                numOfLikes="1"
            />
            <CampgroundCard 
                name="Family & Friends" 
                imgSrc="https://res.cloudinary.com/danxiacgf/image/upload/v1574939585/gxsjofzavs7ohiaorqxv.jpg"
                numOfLikes="1"
            />
            <CampgroundCard 
                name="Dogs Are us" 
                imgSrc="https://res.cloudinary.com/danxiacgf/image/upload/v1575927384/lrteau2lq3nosj7ra9qf.jpg"
                numOfLikes="1"
            />
            <CampgroundCard 
                name="Snowing Desert!" 
                imgSrc="https://res.cloudinary.com/danxiacgf/image/upload/v1575927943/jucwvhu6tl2spjmmyp2b.jpg"
                numOfLikes="1"
            />
            <CampgroundCard 
                name="Aurora" 
                imgSrc="https://res.cloudinary.com/danxiacgf/image/upload/v1575928509/vyskzpulrwmqzhl0nzf8.jpg"
                numOfLikes="1"
            />
            <CampgroundCard 
                name="Aurora: The real one!" 
                imgSrc="https://res.cloudinary.com/danxiacgf/image/upload/v1575928699/hjnghwefh6di16sbvr5h.jpg"
                numOfLikes="1"
            />
            <CampgroundCard 
                name="Hello Sunshine!" 
                imgSrc="https://res.cloudinary.com/danxiacgf/image/upload/v1575929387/jzj2ha3ugotuf1r5iqya.jpg"
                numOfLikes="2"
            />
        </div>
    );
};

export default Data;