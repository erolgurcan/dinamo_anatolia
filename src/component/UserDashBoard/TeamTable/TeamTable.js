import React from "react";
import { Table } from "react-bootstrap";

const TeamTable = ( {standing} ) => {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>GP</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Draw</th>
            <th>PKW</th>
            <th>PKL</th>
            <th>GD</th>
            <th>GF</th>
            <th>GA</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {standing.map((st) => (
            <tr
              className={
                st.team_name === "Dinamo Anatolia" && "bg-primary text-white"
              }
            >
              <td> {st.standing}</td>
              <td> {st.team_name}</td>
              <td> {st.gp}</td>
              <td> {st.won}</td>
              <td> {st.lost}</td>
              <td> {st.draw}</td>
              <td> {st.pkw}</td>
              <td> {st.pkl}</td>
              <td> {st.gd}</td>
              <td> {st.gf}</td>
              <td> {st.ga}</td>
              <td> {st.pts}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TeamTable;
