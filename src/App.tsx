
import axios from 'axios';
import React, { useState } from 'react';
import { UserCard } from './components/UserCard';
import { User } from './types/api/user';
import { UserProfile } from './types/UserProfile';

const user = {
  id: 1,
  name: "勇人",
  email: "address@gmail.com",
  address: "ハゲタコストリート"
};

function App() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const onClickFetchUser = () => { 
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      const data = res.data.map((user) => ({
        id: user.id,
        name: `${user.name}(${user.username})`,
        email: user.email,
        address: `${user.address.city}${user.address.street}${user.address.suite}`
      }));
      setUserProfiles(data);
    })
  }
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      {userProfiles.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      
    </div>
  );
}

export default App;
