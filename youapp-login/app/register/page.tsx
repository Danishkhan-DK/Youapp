"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Function to toggle password visibility

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);


  

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('http://techtest.youapp.ai/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (!res.ok) throw new Error('Registration failed');

      router.push('/');
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div 
      className="h-screen flex flex-col justify-center items-center px-4" 
      style={{
        background: "radial-gradient(121.73% 121.49% at 100% -3.39%, #1F4247 0%, #0D1D23 56.18%, #09141A 100%)"
      } as React.CSSProperties}
    >
      <button className="text-white self-start absolute top-[40px] left-[18px]" onClick={() => router.back()}>
        &lt; Back
      </button>

      <form onSubmit={handleRegister} 
    //   className="bg-[#1e2a38] p-8 rounded-lg w-full max-w-md mt-4"
      
      >
        <h1 className="text-white text-2xl mb-6">Register</h1>

        {error && <p className="text-red-500">{error}</p>}

        <div className="mb-4">
         
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-white placeholder-opacity-40 focus:outline-none"
            placeholder="Enter Email"
            required
            style={{
                // backgroundColor: "#FFFFFF66", // Placeholder background
                fontFamily: 'Inter',
                fontSize: '13px',
                fontWeight: 500,
                lineHeight: '15.73px',
                textAlign: 'left',
                // width: '250px',
                // height: '51px',
                opacity: 0.5, // Set the opacity to 50%
                borderRadius: '9px',
              }}
          />
        </div>

        <div className="mb-4">
        
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-white placeholder-opacity-40 focus:outline-none"
            placeholder="Create Username"
            required
            style={{
                // backgroundColor: "#FFFFFF66", // Placeholder background
                fontFamily: 'Inter',
                fontSize: '13px',
                fontWeight: 500,
                lineHeight: '15.73px',
                textAlign: 'left',
                // width: '250px',
                // height: '51px',
                opacity: 0.5, // Set the opacity to 50%
                borderRadius: '9px',
              }}
          />
        </div>


<div className="mb-6 relative">  {/* Set relative position for the eye icon */}
        <input
          type={showPassword ? "text" : "password"}  // Toggle between text and password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
          placeholder="Create Password"
          required
          style={{
            fontFamily: 'Inter',
            fontSize: '13px',
            fontWeight: 500,
            lineHeight: '15.73px',
            textAlign: 'left',
            opacity: 0.5,
            borderRadius: '9px',
          }}
        />
        {/* Eye Icon for toggling Create Password visibility */}
        <div
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-white"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>

      

<div className="mb-6 relative">  {/* Set relative position for the eye icon */}
        <input
          type={showConfirmPassword ? "text" : "password"}  // Toggle between text and password
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
          placeholder="Confirm Password"
          required
          style={{
            fontFamily: 'Inter',
            fontSize: '13px',
            fontWeight: 500,
            lineHeight: '15.73px',
            textAlign: 'left',
            opacity: 0.5,
            borderRadius: '9px',
          }}
        />
        {/* Eye Icon for toggling Confirm Password visibility */}
        <div
          onClick={toggleConfirmPasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-white"
        >
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>

        <button
          type="submit"
        //   className="w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#3bc9db] to-[#4361ee] shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
       className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-400 "
       >
          Register
        </button>

        <p className="mt-9 text-white text-[13px] font-medium leading-[15.73px] text-center">
          Have an account?{' '}
          <span className="underline text-[#fab005] cursor-pointer font-medium" onClick={() => router.push('/')}>Login here</span>
        </p>
      </form>
    </div>
  );
}
