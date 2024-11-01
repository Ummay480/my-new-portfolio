
import React from 'react';
import AboutSection from '../../components/AboutSection';
import Header from "../../components/Header";
import Contacts from "../../components/Contacts";

const AboutPage: React.FC = () => {
  return (
<>
    <div className='max-w-full'>
      <Header/>
    </div>
  
      <div>
          <AboutSection/>
        </div>

        <div className='-mb-14'>
          <Contacts/>
        </div>
    </>
  );
}
export default AboutPage;