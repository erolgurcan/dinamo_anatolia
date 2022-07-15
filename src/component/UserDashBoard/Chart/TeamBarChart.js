import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
  } from "recharts";



const TeamBarChart = ( {score} ) => {
  
    const data = [

      ];

      score.forEach(element => {

            let date = new Date(element.event_date).toDateString();
            let score = parseInt(element.dinamo_score);

            data.push( {date, score} )

      });

      console.log(data);
  
    return (
    <div>
      {" "}
      <BarChart width={1300} height={300} data={data}>
        <XAxis dataKey="date" stroke="#8884d8" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 20,
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "40px",
          }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="score" fill="#0d6efd" barSize={30}  />
      </BarChart>
    </div>
  );
};

export default TeamBarChart;
