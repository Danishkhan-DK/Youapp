// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
// //   const [error, setError] = useState(null);
//   const [error, setError] = useState<string | null>(null);

//   const router = useRouter();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://techtest.youapp.ai/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!res.ok) throw new Error('Login failed');

//       const data = await res.json();
//       // Handle successful login (e.g., store token, redirect to profile)
//       router.push('/profile');
//     } catch (err) {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="h-screen bg-dark-green flex flex-col justify-center items-center mobile:px-4">
//       <form onSubmit={handleLogin} className="bg-soft-gray p-8 rounded-lg w-full max-w-md">
//         <h1 className="text-white text-2xl mb-6">Login</h1>

//         {error && <p className="text-red-500">{error}</p>}

//         <div className="mb-4">
//           <label className="block text-white mb-2">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
//             placeholder="Enter your email"
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-white mb-2">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
//             placeholder="Enter your password"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-400"
//         >
//           Login
//         </button>

//         <p className="mt-4 text-white">
//           No account? <a href="/register" className="underline">Register here</a>
//         </p>
//       </form>
//     </div>
//   );
// }
