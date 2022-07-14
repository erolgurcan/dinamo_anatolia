import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const TeamPlayers = () => {
  const [player, setPlayer] = useState([]);

  const getPlayer = async () => {
    const response = await fetch(
      "https://dinamo-anatolia.herokuapp.com/get_players"
    );
    const jsonData = await response.json();
    setPlayer(jsonData);
    console.log(jsonData);
  };

  useEffect(() => {
    getPlayer();
  }, []);

  return (
    <div className="w-75 m-auto pt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Player Position</th>
          </tr>
        </thead>
        <tbody>
          {player.map((p) => (
            <tr>
              <td>  </td>
              <td> {p.player_full_name.split(" ")[0]} </td>
              <td> {p.player_full_name.split(" ")[1]} </td>
              <td>  {p.player_position } </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TeamPlayers;
