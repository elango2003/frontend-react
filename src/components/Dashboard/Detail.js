import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useParams } from "react-router-dom";
import instance from "./api";
import PuffLoader from "react-spinners/PuffLoader";
import '../History/history.css'
import '../Dashboard/Details.css'


const EmpDetail = () => {
  const { userid } = useParams();
  let [loading, setLoading] = useState(false);
  const [patientData, patientDataChange] = useState({});
  
  useEffect(() => {
    loadDetails();
  }, []);

  const loadDetails = async () => {
    await instance.get("/userdetailbyid/" + userid).then((res) => {
      patientDataChange(res.data)
      // console.log(res.data)
      
    });
    
    setLoading(true);
    
  };
  console.log(patientData);




  return (
    <div className="details_page vh-100">
      <div className="row ">
        <div className="offset-lg-3 col-lg-6">
          <div className="container-details mt-5 mb-5">
            <div className="card row" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 className="text-center mt-3">
                  <b>PATIENT DETAILS</b>
                </h2>
              </div>
              <div className="card-body"></div>

              {
                patientData &&
                    <div>
                      <div className="pb-3">
                        <b>Name</b> - {patientData.name}
                      </div>
                      <div className="pb-3">
                        <b>Email Id</b> - {patientData.userName}
                      </div>
                      <div className="pb-3">
                        <b>Age</b> - {patientData.age}
                      </div>
                      <div className="pb-3">
                        <b>Date Of Birth</b> - {patientData.dateOfBirth}{" "}
                      </div>
                      <div className="pb-3">
                        <b>Phone No</b> - {patientData.phoneNo}
                      </div>
                      <div className="pb-3">
                        <b>Aternate no</b> - {patientData.alternateNo}
                      </div>
                      <div className="pb-3">
                        <b>Gender</b> - {patientData.gender}
                      </div>
                      {/* {
                        patientData.address.map((child) => (
                        <div>
                        <div>Address type - {child.addressType}</div>
                        <div>Country -{child.country}</div>
                        <div>State -{child.state}</div>
                        <div>City -{child.city}</div>
                        <div>Zipcode -{child.zipCode}</div>
                        <br></br>
                        </div>
    
                        ))
                      } */}
    
                      <Link to="/dashboard" className="btn btn-danger mb-3 ">
                        Back to Listing
                      </Link>
                    </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpDetail;


