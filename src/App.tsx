
import axios from 'axios';
import React from 'react';
import { UserCard } from './components/UserCard';

const user = {
  id: 1,
  name: "勇人",
  email: "address@gmail.com",
  address: "ハゲタコストリート"
};

function App() {

  const onClickFetchUser = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
  }
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <UserCard user={user} />
    </div>
  );
}

export default App;
