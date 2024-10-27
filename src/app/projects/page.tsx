import React from 'react';
import ProjectSection from '../../Components/ProjectSection';
import Contacts from "../../Components/Contacts";
import Header3 from "../../Components/Header3";

export default function Projects() {
  return (
  
    <>
     <div>
      <Header3/>
    </div>

      <div className='flex justify-center mt-40'>
          <ProjectSection/>
        </div>

        <div className='-mb-14'>
        <Contacts/>
      </div>
    </>
  );
}
