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
                <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - oghenekevwe85@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' ref={form} value={name} onChange={(e)=>setName(e.target.value)} />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'value={email} onChange={(e)=>setEmail(e.target.value)}
            />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' value={message}  onChange={(e)=>setMessage(e.target.value)}></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' type="submit">Send Me A Message</button>
        </form>
    </div>
  )
}




export default Contact