import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../../firebase";


const Admin_login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
  
    const handlePasswordChange = event => {
      setPassword(event.target.value);
    };
  
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      // Write logic to submit the form data to the server
      if (!email || !password) {
        setError("Please Fill the all field!");
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then((value) => {
            navigate("/difmllc_dashboard");
          })
          .catch((error) => {
           // Handle Firebase error and set custom error message
        if (error.code === 'auth/user-not-found') {
          setError('Invalid email address. Please enter a valid email.');
        } else if (error.code === 'auth/wrong-password') {
          setError('Invalid password. Please enter the correct password.');
        } else {
          setError('An error occurred. Please try again later.');
        }
          })
      }
    };
  


  return (
    <div>
      <div class="isolate mx-auto  bg-discount-gradient px-6 py-24 sm:py-12  lg:w-[600px] rounded-[20px] mt-14 sm:mb-32 ">
          <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
          </div>
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-2xl font-poppins font-normal tracking-tight text-white sm:text-4xl sm:mt-0 -mt-14">Admin Login</h2>
          </div>
          <form action="#" method="POST" class="mx-auto mt-16 max-w-md sm:mt-14" onSubmit={handleFormSubmit}>
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">

              <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-semibold leading-6 text-white">Eamil<span className='text-red-700'> *</span></label>
                <div class="mt-2.5">
                <input
                    type="email"
                    name="email"
                    value={email} 
                    onChange={(e) => { setEmail(e.target.value) }}
                    id="email"
                    placeholder="Enter your Email"
                    autoComplete="off"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="mb-1 block w-full bg-discount-gradient rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                    required
                  />
                
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-semibold leading-6 text-white">Password<span className='text-red-700'> *</span></label>
                <div class="mt-2.5">
                <input
                    type="password" 
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                    autoComplete="off"
                    className="mb-1 block w-full bg-discount-gradient rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                    required
                  />
                
                </div>
              </div>
              <p className='text-rose-400 mt-2'>{error}</p>
             
            </div>
            <div class="mt-10">
              <button type="submit" id="sendemail"  class="block w-full rounded-md bg-blue-gradient px-3.5 py-2.5 text-center text-md font-semibold text-dimwhite shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">Submit</button>
            
            </div>
          </form>
        </div>
    </div>
  )
}

export default Admin_login
