// about.tsx (in your app directory)
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PiPencilSimpleLineLight } from "react-icons/pi";

export default function AboutPage() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddInterest = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setInterests([...interests, inputValue.trim()]);
      setInputValue(''); // Reset input field
    }
  };

  // Function to handle removing an interest tag
  const handleRemoveInterest = (index: number) => {
    const newInterests = interests.filter((_, i) => i !== index);
    setInterests(newInterests);
  };

  return (
    <div
    //   className="h-screen flex flex-col px-4 pt-10 bg-#09141A"
    className="h-screen flex flex-col px-4 pt-10 bg-gradient-to-b from-[#0f1c2b] to-[#152a42]"
      style={{ backgroundColor: '#000' }}
    >
      {/* Back Button */}
      <button className="text-white self-start" onClick={() => router.back()}>
        &lt; Back
      </button>

      {/* Username Section */}
      <div className="flex flex-col items-center mt-4">
        <div className="bg-gray-800 rounded-lg w-full p-4 text-white h-24">
          @johndoe123
        </div>
      </div>


      <div className="mt-6 bg-[#152a42] rounded-lg p-4 flex justify-between items-center">
      <div>
        <p className="text-white font-semibold">About</p>
        {!isEditing && (
          <p className="text-gray-400 text-[14px]">
            Add in your bio to help others know you better
          </p>
        )}
      </div>
      <button className="text-gray-400" onClick={() => setIsEditing(!isEditing)}>
        {/* Replacing emoji with the pencil icon */}
        <PiPencilSimpleLineLight  color="#9CA3AF" size={20} aria-label="edit" />
      </button>
    </div>

      {/* Conditionally Render Edit Form */}
      {isEditing && (
        <div className="mt-4 bg-[#1c2a38] rounded-lg p-4">

          {/* Save & Update Button */}
          <div className="flex justify-end mb-4">
            <button className="bg-blue-600 p-2 rounded-lg text-white">
              Save & Update
            </button>
          </div>

          {/* Editable Fields */}
          <div className="space-y-4">
            {/* Display Name */}
            <div className="flex items-center">
              <label className="text-white w-1/3">Display name:</label>
              <input
                className="w-2/3 p-2 bg-gray-800 rounded-lg text-white"
                placeholder="Enter name"
              />
            </div>

            {/* Gender */}
            <div className="flex items-center">
              <label className="text-white w-1/3">Gender:</label>
              <select className="w-2/3 p-2 bg-gray-800 rounded-lg text-gray-400">
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Birthday */}
            <div className="flex items-center">
              <label className="text-white w-1/3">Birthday:</label>
              <input
                className="w-2/3 p-2 bg-gray-800 rounded-lg text-gray-400"
                placeholder="DD MM YYYY"
              />
            </div>

            {/* Horoscope */}
            <div className="flex items-center">
              <label className="text-white w-1/3">Horoscope:</label>
              <input className="w-2/3 p-2 bg-gray-800 rounded-lg text-gray-400" />
            </div>

            {/* Zodiac */}
            <div className="flex items-center">
              <label className="text-white w-1/3">Zodiac:</label>
              <input className="w-2/3 p-2 bg-gray-800 rounded-lg text-gray-400" />
            </div>

            {/* Height */}
            <div className="flex items-center">
              <label className="text-white w-1/3">Height:</label>
              <input className="w-2/3 p-2 bg-gray-800 rounded-lg text-gray-400" />
            </div>

            {/* Weight */}
            <div className="flex items-center">
              <label className="text-white w-1/3">Weight:</label>
              <input className="w-2/3 p-2 bg-gray-800 rounded-lg text-gray-400" />
            </div>
          </div>
        </div>
      )}

      {/* Interest Section */}
      <div className="mt-6 bg-[#152a42] rounded-lg p-4 flex justify-between items-center">
        <div>
          <p className="text-white font-semibold">Interest</p>
          <p className="text-gray-400 text-[14px]">
            Add in your interest to find a better match
          </p>
        </div>
        <button className="text-gray-400" onClick={() => router.push('/interest')}>
          <span role="img" aria-label="edit">
          <PiPencilSimpleLineLight   color="#9CA3AF" size={20} aria-label="edit"  />
          </span>
        </button>
      </div>

    </div>
  );
}
