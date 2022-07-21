import React from "react";
import { Table } from "react-bootstrap";

const TeamScoreTable = ({ score }) => {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th> Match Date </th>
            <th> Dinamo Anatolia </th>
            <th>  Score </th>
            <th>Opponent Name & Score</th>
            <th>Scored By</th>
          </tr>
        </thead>
        <tbody>
          {score.map((st) => (
            <tr
              className={
                st.team_name === "Dinamo Anatolia" && "bg-primary text-white"
              }
            >
              <td> {   new Date(st.event_date).toDateString() }</td>
              <td> {"Dinamo Anatolia" }</td>
              <td> <strong> {st.team_score + "-" + st.opponent_score} </strong>  </td>
              <td>  { st.opponent_name} </td>
              <td> {st.scored_by}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TeamScoreTable;
