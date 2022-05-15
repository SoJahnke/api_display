import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [randomUsers, updateRandomUsers] = useState()

  useEffect(getData, [])

      // Make a request for a user with a given ID
      function getData() {
    axios.get('https://randomuser.me/api/?results=50')
    .then(function (response) {
      updateRandomUsers(response.data.results)

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  return (
    <div className="App">
      {randomUsers.map(user => {
        return <div>{user.name.last}</div>
      })}
    </div>
  );
}

export default App;
