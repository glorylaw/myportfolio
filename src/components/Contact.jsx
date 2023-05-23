import React,{useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import { toast }from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

   const form = useRef(null);
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [message, setMessage] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm("service_rqnvrh5", 'template_c4fkyux', form.current, '0Aeiived59pFXnmWS')
      .then((result) => {
        console.log(result)
        setEmail("")
         setName("")
         setMessage("")
        toast.success("message sent successfully")
        
      }, (error) => {
          console.log(error.text);
      });
   
  };
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      
        <form  ref={form} onSubmit={sendEmail}  className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - oghenekevwe85@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' ref={form} value={name} onChange={(e)=>setName(e.target.value)} />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'value={email} onChange={(e)=>setEmail(e.target.value)}
            />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' value={message}  onChange={(e)=>setMessage(e.target.value)}></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' type="submit">Let's Collaborate</button>
        </form>
    </div>
  )
}


// const Contact = () => {

//  const form = useRef(null);
//  const [name, setName] = useState("")
//  const [email, setEmail] = useState("")
//  const [message, setMessage] = useState("")

//   const sendEmail = (e) => {
//     e.preventDefault();


//     emailjs.sendForm("service_rqnvrh5", 'template_c4fkyux', form.current, '0Aeiived59pFXnmWS')
//       .then((result) => {
//         console.log(result)
//         setEmail("")
//          setName("")
//          setMessage("")
//         toast.success("message sent successfully")
        
//       }, (error) => {
//           console.log(error.text);
//       });
   
//   };
//   return (
//     <section
//       id='contact'
//       className=' bg-[#0a192f] text-white min-h-[732px] section'
//     >
      
//       <div className='container mx-auto text-center'>
//         <h2 className='text-5xl font-primary font-extrabold mb-4'>
//           Contact us
//         </h2>
//         <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]'>
//           Send us a message via the field below
//         </p>

//         {/* form */}
//         <form ref={form} onSubmit={sendEmail}  className='px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]'>
//           <input className='form-control' ref={form} name="name" type='text' placeholder='Full name' value={name} onChange={(e)=>setName(e.target.value)} />
//           <input
//             className='form-control'
//             type='text'
//             name='email'
//             placeholder='Email address'
//             value={email}
//             onChange={(e)=>setEmail(e.target.value)}
//           />
//           <textarea className='textarea' name="message" placeholder='Message'  value={message}  onChange={(e)=>setMessage(e.target.value)}></textarea>
//           <button type="submit" className='btn bg-accent hover:bg-accent-hover transition-all'>
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

export default Contact