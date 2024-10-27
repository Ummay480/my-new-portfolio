import React from 'react';
import ContactForm from '../../Components/ContactForm';
import Contacts from "../../Components/Contacts";
import Header1 from "../../Components/Headr1";

const Contactpage: React.FC = () => {
  return (
    <>

    <div>
      <Header1/>
    </div>
      <div className='flex justify-center '>
          <ContactForm/>
        </div>

    <div>
      <Contacts/>
    </div>

   </> 
  );
}
 export default Contactpage;