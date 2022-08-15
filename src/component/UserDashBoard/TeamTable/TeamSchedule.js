import React from "react";
import { Table } from "react-bootstrap";

const TeamSchedule = ({ schedule }) => {

   

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th> Date </th>
            <th> Location </th>
            <th>Opponent </th>
          </tr>
        </thead>
        <tbody>
          {schedule.filter( schedule =>   new Date(schedule.event_date).valueOf()  > new Date().valueOf() ).map((s) => (
            <tr>
              <td> { new Date(s.event_date).toDateString()  } </td>
              <td> {  new String(s.event_location).toLocaleUpperCase()  } </td>
              <td> {s.opponent_name} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TeamSchedule;
