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

  const getSchedule = async () => {
    const response = await fetch(
      "https://dinamo-anatolia.herokuapp.com/" + "teamInfo/get_event",
      {
        method: "GET",
        headers: {
          token: localStorage.token,
        },
      }
    );
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
      <h3 className="mx-4 mb-2 text-dinamo mt-4 ">Events</h3>
      <div className="row">
        <div className="d-flex flex-row flex-wrap justify-content-center  ">
          <div className="col-lg-6 col-12 mt-4">
            <h2 className="mx-2 mb-2 text-primary mt-4 mx-1 text-center">
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
                  <strong className="mt-2  text-dinamo">
                    {" "}
                    {nextEvent?.home
                      ? "Dinamo Anatolia vs " + nextEvent?.opponent_name
                      : nextEvent?.opponent_name + " vs Dinamo Anatolia"}{" "}
                  </strong>{" "}
                </h3>
                <div>
                  {" "}
                  <div className="card-text d-flex">
                    <div className="col-lg-6 col-sm-12 p-0">
                      <div class="card shadow-0 border text-center">
                        <CalenderWeather data={nextEvent} />
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
          <div className="col-lg-4 col-12 mt-4 text-center events-frame overflow-auto ">
            <div className="d-flex flex-row justify-content-center px-4 mb-2">
              <div className="px-2 col-sm-12 col-lg-5 ">
                <h4 className="mx-2 mb-2  text-primary mt-4 mx-1">
                  Select Year
                </h4>
                <Form.Select displayName="Year" onchange={yearHandler}>
                  <option selected>2022</option>
                  <option>2023</option>
                </Form.Select>
              </div>
              <div className="px-2  col-lg-5 col-sm-12  ">
                <h4 className="mx-2 mb-2 text-primary mt-4 mx-1">
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
        </div>
      </div>
    </>
  );
};

export default TeamCalender;
