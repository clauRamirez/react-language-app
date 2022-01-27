import React from 'react';



const LeaderboardUser = ({user}) => {
  return (
    <div>
    
    {user.name}:{user.high_score}
    </div>
    );
};

export default LeaderboardUser;
