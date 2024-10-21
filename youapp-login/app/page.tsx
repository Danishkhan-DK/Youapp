
"use client";  

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();


    const [showPassword, setShowPassword] = useState(false);
  
    // Toggle password visibility
   

    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://techtest.youapp.ai/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error('Login failed');

      const data = await res.json();
      router.push('/profile');
    } catch (err) {
      setError('Invalid credentials');
    }
  };


  return (
  


    <div 
    className="h-screen flex flex-col justify-center items-center px-4" 
    style={{
      background: "radial-gradient(121.73% 121.49% at 100% -3.39%, #1F4247 0%, #0D1D23 56.18%, #09141A 100%)"
    }}
  >

<button className="text-white self-start absolute top-[40px] left-[18px]" onClick={() => router.back()}>
        &lt; Back
     </button>


      <form onSubmit={handleLogin} className="p-8 rounded-lg w-full max-w-md">
        <h1 className="text-white text-2xl mb-6">Login</h1>

        {error && <p className="text-red-500">{error}</p>}

        <div className="mb-4">
          {/* <label className="block text-white mb-2">Email</label> */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
            placeholder="Enter Username/Email"
            
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

        {/* <div className="mb-6">
       
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
            placeholder="Enter Password"
            required
            style={{
              
              fontFamily: 'Inter',
              fontSize: '13px',
              fontWeight: 500,
              lineHeight: '15.73px',
              textAlign: 'left',
           
              opacity: 0.5, // Set the opacity to 50%
              borderRadius: '9px',
            }}
          />
        </div> */}

<div className="mb-6 relative">  {/* Set relative position for the eye icon */}
      <input
        type={showPassword ? "text" : "password"}  // Toggle between text and password
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
        placeholder="Enter Password"
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
      {/* Eye Icon for toggling */}
      <div
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-white"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </div>
    </div>

        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-400 borderRadius: '9px',"
          onClick={() => router.push('/about')}

        >
          Login
        </button>

        <p className="mt-9 text-white text-[13px] font-medium leading-[15.73px] text-center">
          {/* No account? <a href="/register" className="underline">Register here</a> */}
          No account? <span className="underline text-[#fab005] cursor-pointer" onClick={() => router.push('/register')}>Register here</span>
        </p>

        
      </form>
</div>
  );
}