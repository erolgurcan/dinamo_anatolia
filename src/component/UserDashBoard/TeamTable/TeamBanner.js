import React from "react";

const TeamBanner = ( {header, data} ) => {
  return (
    <div className="col-sm-10 col-lg-3">
      <div className="card border-left-primary shadow h-100 py-2 w-100">
        <div className="card-body w-100">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 text-center m-auto">
                {header}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800 text-center">
                {data}
              </div>
            </div>
            <div className="col-auto">
              <i className="fas fa-calendar fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBanner;
