import React, { useEffect, useState } from "react";
import TeamBanner from "./TeamTable/TeamBanner";

const TeamPayInfo = () => {
  const [payTable, setPayTable] = useState([]);
  const [tableHeader, setTableHeader] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPayTable = async () => {
    setLoading(true);
    const result = await fetch(
      "https://dinamo-anatolia.herokuapp.com/teamInfo/get_pay_table",

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
    console.log(json);
  };

  const booleanToText = (boolean) => {
    if (!(typeof boolean === "boolean")) {
      return boolean;
    }
    if (boolean) {
      return "True";
    }
    if (!boolean) {
      return "False";
    }
  };

  const ModifyPayTable = () => {
    const header = document.getElementById("player_full_name");
    if (header) {
      header.innerText = "Player Name";
      header.style.minWidth = "200px";
    }

    // const userRow = document.getElementsByClassName("user-row");
    // const childNode =  userRow[0]?.childNodes[2];
    // const newCol = document.createElement("td");
    // userRow[0]?.insertBefore(newCol, childNode);

    // Change date format

    const len = document.getElementsByClassName("user-row").length;
    for (let i = 0; i < len; i++) {
      let date = document.getElementsByClassName("user-row")[i]?.childNodes[3];
      let playerStatus = document.getElementsByClassName("user-row")[i]?.childNodes[2];
      if (date) {
        date.innerText = date.innerText.split("T")[0];
        date.className = "label label-default";
      }
      if (playerStatus) {
        playerStatus.className = "label label-bool";
      }

    }


    

    // date.innerText =   new Date(date.innerText.replace("Z", "")+"-07:00" ).toDateString();
  };

  const createHeaders = (json) => {
    const arr = json[0];
    const array = Object.keys(arr);
    setTableHeader(array);
    setLoading(false);
  };

  useEffect(() => {
    getPayTable();
  }, []);

  useEffect(() => {
    ModifyPayTable();
  }, [payTable]);

  return (
    <div className="p-4">
      <h2 className="mt-4"> Pay Table </h2>
      <div className="col-12 d-flex flex-row flex-wrap mt-4">
        <TeamBanner />
        <TeamBanner />
        <TeamBanner />
        <TeamBanner />
      </div>

      <div
        className=" card-body h-100 col-lg-6 col-sm-12 mt-4 overflow-auto"
        style={{ maxHeight: "700px" }}
      >
        <h3> Payment Schedule </h3>
        <div className="mw-50">
          {!loading ? (
            <table className="table table-striped m-auto max-vh-5">
              <thead>
                <tr>
                  {Array.from(tableHeader).map((e) => (
                    <th key={e + "-header"} id={e}  >
                      {" "}
                      {e}{" "}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {payTable?.map((e) => (
                  <tr key={e + "-row"} className="user-row">
                    {" "}
                    {Array.from(Object.values(e)).map((d) => (
                      <td > <span id={Number.isFinite(d) && d} >  {booleanToText(d)} </span> </td>
                    ))}{" "}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h3>Loading....</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamPayInfo;
