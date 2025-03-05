import React from 'react';

const UserCard = ({ data }) => {
  const user = data[0];
  let repos = data[1];
  repos = repos.filter(repo => repo.visibility === "public");
  repos = repos.map(repo => {
    return (
      <a href={repo.clone_url} target='_blank'>
        <div key={repo.id} className="bg-[rgba(255,255,255,0.01)] p-2.5 rounded-xl">
            <h2 className="text-white text-xl underline">{repo.name}</h2>
            <div className="text-white">{repo.description? repo.description: "This repository has no description."}</div>
        </div>
      </a>
    );
  });
  if (!user) return null;
  return (
    <div className="user-card mx-auto w-[75%] h-[75%] bg-gray-950 rounded-t-xl shadow-[2px_2px_10px_var(--color-violet-600)] drop-shadow-xl">
      <div className="bg-[#333] flex items-center p-[5px] rounded-t-xl text-white relative">
        <div className="flex absolute left-3">
          <span className="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2" />
          <span className="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2" />
          <span className="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl" />
        </div>
        <div className="flex-1 text-center text-white">{user.name}</div>
      </div>
      <div className="p-2.5 gap-0.5 flex h-[90%]">
        <div className="left scrollbar w-[30%] h-full flex flex-col p-[20px] justify-center gap-[10px] overflow-auto">
            <a href={user.html_url} target='_blank'><img src={user.avatar_url} alt="User" className="rounded-full" /></a>
            <h2 className='text-white text-xl underline'>Name</h2>
            <div className="text-white text-xl">{user.login}</div>
            <h2 className='text-white text-xl underline'>Bio</h2>
            <div className="text-white">{user.bio? user.bio: "This user hasn’t added a bio yet."}</div>
        </div>
        <div className="right w-[70%] h-[100%] overflow-y-auto flex flex-col justify-center gap-2">
          <h2 className='text-white text-xl underline'>Repositories</h2>
          <div className="scrollbar h-full flex flex-col overflow-auto gap-2 text-xl text-white">
            {(repos.length!=0)? repos: "This user has no public repositories."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

