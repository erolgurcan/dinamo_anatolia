import React from "react";
import "./BoardMember.css"
const BoardMemberCard = ({ member_name, position, photo }) => {
  return (
    <>
      <div className="member rounded shadow-sm py-5 m-1 px-4 text-center">
        <img
          className="img-fluid mb-4"
          src={require("../../images/board-member/" + photo  )}
          alt="..."
          style={{ height: "20vh" , borderRadius: "5vh" }}
        />
        <h5 className="mb-0"> {member_name}</h5>
        <span className="small text-uppercase text-muted">{position}</span>
        <ul className="social mb-0 list-inline mt-3"></ul>
      </div>
    </>
  );
};

export default BoardMemberCard;
