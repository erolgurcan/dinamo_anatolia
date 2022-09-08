import React, { useEffect } from "react";
import { useState } from "react";
const TeamPayInfo = () => {
  const [payTable, setPayTable] = useState([]);

  const getPayTable = async () => {
    const result = await fetch(
      "https://dinamo-anatolia.herokuapp.com/" + "teamInfo/get_pay_table",

      {
        method: "GET",
        headers: {
          token: localStorage.token,
        },
      }
    );
    const json = await result.json();
    console.log(json);
    setPayTable(json);
  };

  useEffect(() => {
    getPayTable();
  }, []);

  return (
    <>
      <table class="table table-striped w-50 m-auto  ">
        <thead>
          <tr>
            <th scope="col">Player Name</th>
            <th scope="col">10-2022</th>
            <th scope="col">11-2022</th>
            <th scope="col">12-2022</th>
            <th scope="col">01-2023</th>
            <th scope="col">02-2023</th>
            <th scope="col">03-2023</th>
          </tr>
        </thead>
        <tbody>


        {  payTable.map( p => (

            <tr>
            <th scope="row"> {p.player_full_name} </th>
            <td> {} </td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>

        ) ) }

          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TeamPayInfo;
