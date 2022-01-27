import React from 'react';
import LeaderboardUser from './LeaderboardUser';



const Leaderboard = ({userData}) => {
    
       const userNodes = userData.map(user=>{
           return <LeaderboardUser user={user} key={user._id}/>
       })
  
    return (
  <div>
  
    {userNodes}
  </div>
  );
};

export default Leaderboard;