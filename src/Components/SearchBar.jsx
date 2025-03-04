import React from 'react';
import useGitHubUser from '../Hooks/useGitHubUser';

const SearchBar = ({states}) => {
  const fetchGitHubUser = useGitHubUser(states.setError, states.setUser, states.setLoading);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      states.setError(false);
      states.setUser(null);
      states.setLoading(true);
      fetchGitHubUser(document.querySelector(".input").value);
    }
  }
  
  return (
    <div className="SearchBar flex justify-center items-center w-screen">
      <div className="relative w-[500px] rounded-full overflow-hidden bg-white shadow-xl">
        <input
        onKeyDown={handleKeyDown}
        className="input bg-transparent outline-none border-none pl-6 pr-10 py-5 w-full font-sans text-lg font-semibold" placeholder="Enter Name..." name="text" type="text" />
        <div className="absolute right-0 top-0 h-full flex items-center justify-center">
          <button onClick={() => {
            states.setError(false);
            states.setUser(null);
            states.setLoading(true);  
            fetchGitHubUser(document.querySelector(".input").value);          
            }} 
            className="w-14 h-14 rounded-full bg-violet-500 group shadow-xl flex items-center justify-center relative overflow-hidden">
            <svg className="relative z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={50} width={50}>
              <path fillOpacity="0.01" fill="white" d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z" />
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="3.76603" stroke="white" d="M42.8496 18.7067L21.0628 44.6712" />
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="3.76603" stroke="white" d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238" />
            </svg>
            <div className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000" />
            <div className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
