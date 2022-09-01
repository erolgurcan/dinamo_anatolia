import React, { useEffect } from "react";
import { useState } from "react";

const UserInfo = () => {
  const url =
    process.env.MODE === "production"
      ? "https://dinamo-anatolia.herokuapp.com/"
      : "http://localhost:5000/";

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const user = await fetch(url + "auth/get-user", {
        method: "POST",
        headers: {
          token: localStorage.token,
        },
      });

      const userParse = await user.json();
      setUserData(userParse);
      console.log(userParse);
      setLoading(false);
    } catch (error) {}
  };

  const onClickHandler = () => {
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const mobile = document.getElementById("phoneNumber");
    const address =
      document.getElementById("addressLine1").value +
      " ;; " +
      document.getElementById("addressLine2").value +
      " ;; " +
      document.getElementById("postcode").value +
      " ;; " +
      document.getElementById("state").value +
      " ;; " +
      document.getElementById("country").value  ;

  };

  useEffect(() => {
    getUser();
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="mt-4">
      <div className="rounded bg-white  w-75 m-auto">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold"> {userData?.user_name} </span>
              <span className="text-black-50"> {userData?.user_email} </span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder={userData?.user_name.split(" ")[0]}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Surname </label>
                  <input
                    type="text"
                    id="surname"
                    className="form-control"
                    placeholder={userData?.user_name.split(" ")[1]}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    className="form-control"
                    placeholder={userData?.phone_number}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line 1</label>
                  <input
                    type="text"
                    id="addressLine1"
                    className="form-control"
                    placeholder="enter address line 1"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line 2</label>
                  <input
                    type="text"
                    className="form-control"
                    id="addressLine2"
                    placeholder="enter address line 2"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Postcode</label>
                  <input
                    type="text"
                    className="form-control"
                    id="postcode"
                    placeholder={userData?.postcode}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">State</label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    placeholder="enter address line 2"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <input
                    type="text"
                    id="country"
                    className="form-control"
                    placeholder="country"

                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">State/Region</label>
                  <input
                    type="text"
                    id="state"
                    className="form-control"

                    placeholder="state"
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                  onClick={onClickHandler}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
