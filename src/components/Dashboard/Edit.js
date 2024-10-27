import React from 'react'
// import { Link } from 'react-router-dom'
import { useEffect , useState} from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import instance from './api';
import { toast } from 'react-toastify';

const Edit = () => {
  const navigate = useNavigate();
  const { userid } = useParams();
  const [Userid, setUserId] = useState("");
  const [name, setName] = useState("");
  const [username, setUserame] = useState("");
  // const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [alternateno, setAlternateno] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [currentcountry, setCurrentCountry] = useState("");
  const [currentstate, setCurrentState] = useState("");
  const [currentcity, setCurrentCity] = useState("");
  const [currentzip_code, setCurrentZipCode] = useState("");
  
  const [patientData, patientDataChange] = useState([
    // {
    //   userId : Userid,
    //   userName: username,
    //   password: password,
    //   age: age,
    //   gender: gender,
    //   phoneNo: phoneno,
    //   dateOfBirth: dob,
    //   aternateNo: alternateno
      
      
    // }
  ]);

  useEffect(() => {
    instance.get("/userdetailbyid/" + userid).then((res) => {
      patientDataChange(res.data);
      setUserId(res.data.userid);
      setName(res.data.name);
      setUserame(res.data.userName);
      // setPassword(res.data.password);
      setAge(res.data.age);
      setGender(res.data.gender);
      setDob(res.data.dateOfBirth);
      setPhoneno(res.data.phoneNo);
      setAlternateno(res.data.alternateNo);
      res.data.address.map((items, index) => {
        if(res.data.address[0]){
          setCurrentCountry(items.country);
        setCurrentState(items.state);
        setCurrentCity(items.city);
        setCurrentZipCode(items.zip_code);
        }
        if(res.data.address[1]){
          
        setCountry(items.country);
        setState(items.state);
        setCity(items.city);
        setZipCode(items.zip_code);
        }
      }
      )
    });
  }, []);
console.log(patientData)
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await instance.put("/update", {
        userId:userid,
        name:name,
        userName: username,
        // password: password,
        age: age,
        gender: gender,
        phoneNo: phoneno,
        dateOfBirth: dob,
        aternateNo: alternateno,
        address: [
          {
            address_type: "permanent",
            country: country,
            state: state,
            city: city,
            zip_code: zip_code,
          },
          {
            address_type: "current",
            country: currentcountry,
            state:currentstate,
            city: currentcity,
            zip_code:currentzip_code,
          },
        ]

      })
    
      toast.success("Updated successfully",{theme:'colored'});
      navigate('/dashboard');
      setUserame("");
      // setPassword("");
      setAge("");
      setGender("");
      setPhoneno("");
      setAlternateno("");
      setDob("");

    } catch {
      toast.error("Failed to update!",{theme:'colored'});
    }
  }
  
  return (
    <div className="bg-primary vh-auto">
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form onSubmit={handleSubmit} className="container-create mt-5">
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 className="text-center">Add new patient</h2>
              </div>
              <div className="card-body">
                <div className="row">
                <div className="col-lg-12 pb-3">
                      <div className="form-group">
                        <label>
                          <b>Name</b>
                        </label>
                        <input
                        value={name}
                          className="form-control shadow-none"
                          name="name"
                          type="text"
                          // value={values.password}
                          onChange={(e) => setName(e.target.value)}
                          // onChange={(e) => setPassword(e.target.value)}
                        ></input>
                      </div>
                    </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label><b>Username</b></label>
                      <input
                      placeholder={username}
                        value={username}
                        onChange={(e) => setUserame(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label><b>Age</b></label>
                      <input
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div class="form-group pb-4">
                    <label for="exampleFormControlSelect1"><b>Gender</b></label>
                    <select
                      checked={gender}
                      onChange={(e) => setGender(e.target.checked)}
                      type="checkbox"
                      class="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label><b>D.O.B</b></label>
                      <input
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="form-control"
                        type="date"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label><b>Phone No</b></label>
                      <input
                        value={phoneno}
                        onChange={(e) => setPhoneno(e.target.value)}
                        className="form-control"
                        type="number"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label><b>Aternate No</b></label>
                      <input
                        value={alternateno}
                        onChange={(e) => setAlternateno(e.target.value)}
                        className="form-control"
                        type="number"
                      ></input>
                    </div>
                  </div>

                  
                  <div className="col-lg-12">
                    <label>
                      <b>Current Address :</b>
                    </label>
                    <div className="form-group">
                      <label>
                        <b>Country</b>
                      </label>
                      <input
                        name="currentcountry"
                        value={currentcountry}
                        onChange={(e) => setCurrentCountry(e.target.value)}
                        className="form-control"
                        type="text"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        <b>State</b>
                      </label>
                      <input
                        name="currentstate"
                        value={currentstate}
                        onChange={(e) => setCurrentState(e.target.value)}
                        className="form-control"
                        type="text"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        <b>City</b>
                      </label>
                      <input
                        name="currentcity"
                        value={currentcity}
                        onChange={(e) => setCurrentCity(e.target.value)}
                        className="form-control"
                        type="text"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        <b>Zipcode</b>
                      </label>
                      <input
                        name="currentzipcode"
                        value={currentzip_code}
                        onChange={(e) => setCurrentZipCode(e.target.value)}
                        className="form-control"
                        type="number"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <label>
                      <b>Permanent Address :</b>
                    </label>
                    <div className="form-group">
                      <label>
                        <b>Country</b>
                      </label>
                      <input
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="form-control"
                        type="text"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        <b>State</b>
                      </label>
                      <input
                        name="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="form-control"
                        type="text"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        <b>City</b>
                      </label>
                      <input
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="form-control"
                        type="text"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        <b>Zipcode</b>
                      </label>
                      <input
                        name="zipcode"
                        value={zip_code}
                        onChange={(e) => setZipCode(e.target.value)}
                        className="form-control"
                        type="number"
                      ></input>
                    </div>
                  </div>


                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/dashboard" className="btn btn-danger">
                        Back
                      </Link>
                      {/* <div className="btn btn-danger">Back</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit