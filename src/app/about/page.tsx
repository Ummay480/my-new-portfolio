
import React from 'react';
import AboutSection from '../../Components/AboutSection';
import Header from "../../Components/Header";
import Contacts from "../../Components/Contacts";

const AboutPage: React.FC = () => {
  return (
<>
    <div>
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