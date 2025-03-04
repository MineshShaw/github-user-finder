import React from 'react';

const UserCard = ({ user }) => {

  return (
    <div className="mx-auto w-[500px] bg-gray-950 rounded-xl overflow-hidden drop-shadow-xl">
      <div className="bg-[#333] flex items-center p-[5px] text-white relative">
        <div className="flex absolute left-3">
          <span className="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2" />
          <span className="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2" />
          <span className="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl" />
        </div>
        <div className="flex-1 text-center text-white">{user.name}</div>
      </div>
      <div className="p-2.5">
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default UserCard;

