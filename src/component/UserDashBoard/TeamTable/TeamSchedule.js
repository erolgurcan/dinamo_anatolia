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
            <th>  Score </th>
            <th>Opponent Name</th>
            <th>Scored By</th>
          </tr>
        </thead>
        <tbody>
            

            
        </tbody>
      </Table>
    </>
  );
};

export default TeamSchedule;
