import React from 'react';
import ContactForm from '../../components/ContactForm';
import Contacts from "../../components/Contacts";
import Header3 from "../../components/Headr1";

const Contactpage: React.FC = () => {
  return (
    <>

      <div className='max-w-full'>
      <Header3/>
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