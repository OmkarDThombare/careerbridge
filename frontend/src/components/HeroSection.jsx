import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center px-4">
      <div className="flex flex-col gap-6 my-14 max-w-5xl mx-auto">

        {/* Badge */}
        <span className="mx-auto px-5 py-2 rounded-full bg-[#ECFEFF] text-[#10B981] font-medium text-sm">
          YOUR NEXT OPPORTUNITY STARTS HERE
        </span>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] leading-tight">
          Search, Apply & <br />
          Build the{" "}
          <span className="text-[#4F46E5]">Career You </span>
          <span className="text-[#F97316]">Deserve</span>
        </h1>

        {/* Sub text */}
        <p className="text-[#475569] max-w-2xl mx-auto text-base sm:text-lg">
          Discover roles that match your skills and move confidently toward
          your future.
        </p>

        {/* Search Bar */}
        <div className="flex w-full sm:w-[70%] md:w-[55%] mx-auto shadow-md border border-gray-200 rounded-full items-center pl-4 gap-3 bg-white">
          <input
            type="text"
            placeholder="Search jobs by role, skill, or company"
            className="outline-none border-none w-full text-sm sm:text-base py-3"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-full bg-[#4F46E5] hover:bg-[#4338CA] px-6"
          >
            <Search className="w-5 h-5 text-white" />
          </Button>
        </div>

        {/* Affirmation */}
        <p className="text-sm text-[#64748B] mt-2">
          ✨ Thousands of careers start with one search
        </p>

      </div>
    </div>
  )
}

export default HeroSection
