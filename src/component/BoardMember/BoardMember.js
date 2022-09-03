import React from "react";
import "./BoardMember.css";
import Navigation from "../Navigation/Navigation";
import BoardMemberCard from "./BoardMemberCard";

const BoardMember = () => {
  return (
    <>
      <Navigation></Navigation>
      <div className="col-lg-10 py-5 m-auto">
        <div className="row mb-4">
          <div className="col-lg-5 text-center">
            <h2 className="display-4 font-weight-light mt-4 ">Board of Members</h2>
            <p className="font-italic text-muted">
              
            </p>
          </div>
        </div>
        <div className="col-lg-12 d-flex flex-row flex-wrap m-auto justify-content-center">

          <BoardMemberCard member_name={"Kivanç Özçetin"} position = {"President"} photo = {"kivanc.jpg"} />
          <BoardMemberCard member_name={"Can Durmaz"} position = {"Vice President-Coach"} photo = {"can.png"}   />
          <BoardMemberCard member_name={"Orcan Günay"} position = {"Deputy Chairman"} photo = {"orcan.jpg"}   />
          <BoardMemberCard member_name={"Sabri Can Çalışır"} position = {"Director of Football"} photo = {"sabri.png"}   />
          <BoardMemberCard  member_name={"Osman Aslan"} position = {"General Secretary"} photo = {"osman.png"}  />
          <BoardMemberCard member_name={"Erol Gurcan"} position = {"IT Consult-Developer "} photo = {"erol.png"}   />
        </div>
      </div>
    </>
  );
};

export default BoardMember;
