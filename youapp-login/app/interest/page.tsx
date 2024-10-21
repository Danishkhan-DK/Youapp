"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';


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
return(

<div
    //   className="h-screen flex flex-col px-4 pt-10 bg-#09141A"
    className="h-screen flex flex-col justify-center items-center px-4"
    style={{
        background: "radial-gradient(121.73% 121.49% at 100% -3.39%, #1F4247 0%, #0D1D23 56.18%, #09141A 100%)"
      } as React.CSSProperties}
    >
      {/* Back Button */}
      <button className="text-white self-start absolute top-[40px] left-[18px]" onClick={() => router.back()}>
        &lt; Back
      </button>

      <button className="text-blue-400 self-start absolute top-[40px] right-[17px]" onClick={() => router.back()}>
        Save
      </button>

      

      <p className="text-[#fab005] font-medium absolute top-[171px] left-[35px]">Tell everyone about yourself</p> <br/>
      <p className="text-white 20px absolute top-[200px] left-[35px]">What interest you?</p>
     
        <div className="flex justify-between items-center">
        
          
          {/* <button className="text-gray-400">
            
          </button> */}
        </div>

        {/* Interest Input Section */}
        <div className="absolute top-[259px] left-[24px]">
          {/* Display Interests as tags */}
          <div className="flex flex-wrap gap-2">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white px-3 py-1 rounded-md flex items-center space-x-2"
              >
                <span>{interest}</span>
                <button
                  className="text-white rounded-full p-1"
                  onClick={() => handleRemoveInterest(index)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          {/* Input to add more interests */}
          <input
            className="w-324px mt-2 p-2 bg-gray-800 rounded-lg text-white"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleAddInterest}
          />
        </div>
      </div>
      
    );
}