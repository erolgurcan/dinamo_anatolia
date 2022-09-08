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
    setPayTable(json);
    createHeaders(json);
  };

  const createHeaders = (json) => {
    const arr = json[0];
    const totalMonth = Object.keys(arr).length;
    const firstMonth = arr[1];

    console.log(Object.keys(arr).sort());
  };

  useEffect(() => {
    getPayTable();
  }, []);

  return (
    <>
      <table class="table w-75 m-auto">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
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
