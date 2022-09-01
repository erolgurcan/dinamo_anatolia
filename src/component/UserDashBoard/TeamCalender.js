import React from "react";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./TeamCalender.css";
import CalenderSchedueleCard from "./Calender/CalenderSchedueleCard";
import CalenderWeather from "./Calender/CalenderWeather";

const TeamCalender = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, onChange] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedYear, setSelecterYear] = useState();
  const [nextEvent, setNextEvent] = useState();

  const url =
    process.env.MODE === "production"
      ? "https://dinamo-anatolia.herokuapp.com/"
      : "http://localhost:5000/";

  const getSchedule = async () => {
    const response = await fetch(url + "teamInfo/get_event", {
      method: "GET",
      headers: {
        token: localStorage.token,
      },
    });
    const jsonData = await response.json();
    setSchedule(jsonData);
    setLoading(true);
    setNextEvent(
      jsonData.filter(
        (jsonData) =>
          new Date(jsonData.event_date2).valueOf() > new Date().valueOf()
      )[0]
    );
  };

  const monthHander = (e) => {
    setSelectedMonth(e.target.value);
  };

  const yearHandler = (e) => {
    setSelecterYear(e.target.value);
  };

  useEffect(() => {
    getSchedule();
  }, []);

  return (
    <>
      <h3 className="mx-4 mb-2 text-gray-800 mt-4">Events</h3>
      <div className="row">
        <div className="d-flex flex-row flex-wrap justify-content-center  ">
          <div className="col-lg-4 col-12 mt-4 text-center">
            <div className="d-flex flex-row justify-content-center px-4">
              <div className="w-100 px-2">
                <h4 className="mx-2 mb-2 text-gray-800 mt-4 mx-1">
                  Select Year
                </h4>
                <Form.Select displayName="Year" onchange={yearHandler}>
                  <option selected>2022</option>
                  <option>2023</option>
                </Form.Select>
              </div>
              <div className="w-100 px-2 mb-4">
                <h4 className="mx-2 mb-2 text-gray-800 mt-4 mx-1">
                  Select Month
                </h4>
                <Form.Select displayName="Month" onChange={monthHander}>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </Form.Select>
              </div>
            </div>
            {schedule
              .filter((schedule) =>
                selectedYear
                  ? new Date(schedule.event_date2).getFullYear() ===
                    selectedYear
                  : true
              )
              .filter((schedule) =>
                selectedMonth
                  ? new Date(schedule.event_date2).getMonth() + 1 ==
                    selectedMonth
                  : true
              )
              .map((s) => (
                <CalenderSchedueleCard data={s} />
              ))}
          </div>
          <div className="col-lg-8 col-12 mt-4">
            <h2 className="mx-2 mb-2 text-gray-800 mt-4 mx-1 text-center">
              Upcoming Events
            </h2>
            <div className="card w-75 m-auto" style={{ borderRadius: "10px" }}>
              <div className="card-body">
                <h5 className="card-title text-center">
                  {" "}
                  {new Date(nextEvent?.event_date2).toDateString()}{" "}
                </h5>
                <h4 className="card-title text-center">
                  {" "}
                  <strong>
                    {" "}
                    {
                      new Date(nextEvent?.event_date2)
                        .toTimeString()
                        .split(" ")[0]
                    }{" "}
                  </strong>{" "}
                </h4>
                <hr></hr>
                <h3 className="card-title text-center mt-2">
                  {" "}
                  <strong className="mt-2">
                    {" "}
                    {nextEvent?.home
                      ? "Dinamo Anatolia vs " + nextEvent?.opponent_name
                      : nextEvent?.opponent_name + " vs Dinamo Anatolia"}{" "}
                  </strong>{" "}
                </h3>
                <div>
                  {" "}
                  <div className="card-text d-flex">
                    <div className="col-6">
                      <div class="card shadow-0 border text-center">
                        <CalenderWeather data= {nextEvent}  />
                      </div>
                    </div>
                    <div className="col-6 text-center">
                      <div className="mx-auto">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.745638288142!2d-122.9769428484508!3d49.2433115792256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486770388535bdd%3A0x3d627c6d2e736bc0!2sBurnaby%20Central%20Secondary%20School!5e0!3m2!1sen!2sca!4v1661623172375!5m2!1sen!2sca"
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                          width="400"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <>
    //   <div id="content-wrapper" className="d-flex flex-column w-100">
    //     <div id="content"></div>
    //     <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"></nav>
    //     <div className="w-75 mx-auto">
    //       <h3>Events</h3>
    //       {!loading ? (
    //         <div className="d-flex flex-column p-5">
    //           {" "}
    //           <Spinner animation="grow" className="m-auto"></Spinner>
    //           <h1 className = "m-auto" >Loading</h1>
    //         </div>
    //       ) : (
    //         <>
    //           {" "}
    //           {event.map((data) => (
    //             <Card key={data.event_id}>
    //               <Card.Header>
    //                 {" "}
    //                 <strong> {"Dinamo Anatolia"} </strong> {"vs "}{" "}
    //                 <strong> {data.opponent_name} </strong>{" "}
    //               </Card.Header>
    //               <Card.Body>
    //                 <Card.Title>
    //                   <div>
    //                     <div>
    //                       {" "}
    //                       <strong> {"Date: "} </strong>{" "}
    //                       <Badge bg="secondary">
    //                         {" "}
    //                         {data.event_date.split("-")[0] +
    //                           "-" +
    //                           data.event_date.split("-")[1] +
    //                           "-" +
    //                           data.event_date.split("-")[2].split("T")[0]}{" "}
    //                       </Badge>{" "}
    //                     </div>
    //                     <br></br>
    //                     <div>
    //                       <strong> {"Macth Score: "} </strong>{" "}
    //                       {data.event_location[0].toUpperCase() +
    //                         data.event_location.slice(1)}
    //                     </div>
    //                   </div>
    //                 </Card.Title>
    //                 <Card.Text>
    //                   <strong> {"Location: "} </strong>{" "}
    //                   {data.event_location[0].toUpperCase() +
    //                     data.event_location.slice(1)}
    //                 </Card.Text>
    //               </Card.Body>
    //               <br></br>
    //             </Card>
    //           ))}
    //         </>
    //       )}
    //       <br></br>
    //     </div>
    //   </div>
    // </>
  );
};

export default TeamCalender;
