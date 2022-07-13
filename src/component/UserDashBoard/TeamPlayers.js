import React from 'react'
import { useState, useEffect } from 'react';

const TeamPlayers = () => {

    const [event, setEvent] = useState([]);

    const getEvent = async () => {
      const response = await fetch(
        "https://dinamo-anatolia.herokuapp.com/get_players"
      );
      const jsonData = await response.json();
      setEvent(jsonData);
      console.log(jsonData);
    };
  
    useEffect(() => {
      getEvent();
    }, []);
  


  return (
    <div>


    </div>
  )
}

export default TeamPlayers