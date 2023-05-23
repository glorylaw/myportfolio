import React from 'react';

//import Compute from '../assets/compute.jpeg';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About me .....
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>| Bugs are a Thrill |</p>
            </div>
            <div>
              <p> I am a MERN-STACK Engineer with a passion for building applications
            that solve real-world problems. I am proficient in an assortment of
            technologies, including React,React Native, Node.Js, Typescript, Express, and 
            Relational Databases such as MongoDB. I have also led a team of six 
            in building a progress tracker application to serve over 1,000 devs 
            per month, increasing efficiency and transparency by over 60 percent. 
            I was awarded the Most Outstanding Developer With 
            Exemplary Leadership traits. I can work both in interdisciplinary 
            teams and take initiative in a remote team environment</p>  

            <p className="text-gray-600 py-2 cursor-pointer underline">
            Checkout out some of my projects..........
          </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
