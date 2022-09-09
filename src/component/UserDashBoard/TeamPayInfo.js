import React, { useEffect, useState } from "react";

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

  const createHeaders = (json) => {
    const arr = json[0];
    const array = Object.keys(arr);
    setTableHeader(array);
    setLoading(false);
  };

  useEffect(() => {
    getPayTable();
  }, []);

  return (
    <>
    <div className="mt-4 col-lg-6 col-sm-12 " >
      {!loading ? (
        <table className="table table-striped w-75 m-auto table-responsive-sm min-vh-7 ">
          <thead>
            <tr>
              {Array.from(tableHeader).map((e) => (
                <th key = { e + "-header" } > {e} </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {payTable?.map((e) => (
              <tr key = {e + "-row"} >
                {" "}
                {Array.from(Object.values(e)).map((d) => (
                  <td   > {d} </td>
                ))}{" "}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3>Loading....</h3>
      )}
      </div>
    </>
  );
};

export default TeamPayInfo;
