// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import instance from './api';

// function TreatmentForm() {
//   const [show, setShow] = useState(false);
//   const { userid } = useParams();
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     userId:userid,
//     summary: "",
//     suggestion: "",
//     diagnosis: "",
//     conclusion: "",
//     appointmentDate: "",
//     medicine:"",
//     dosage:"",
//     morning:"",
//     afternoon:"",
//     night:"",
//     beforeFood:"",
//     afterFood:""

//   });

//   function onBack(){
//     setShow(false)
//   }

//   function handleInput(event) {
//     setValues({ ...values, [event.target.name]: event.target.value });
//   }

//   async function handleSubmit(){
//     try {
//       await instance.post("/treatmentpost",{
//         userId:userid,
//         summary:values.summary,
//         suggestion:values.suggestion,
//         diagnosis:values.diagnosis,
//         conclusion:values.conclusion,
//         appointment_date:values.appointmentDate,
//         patientMendicationList:[
//           {
//             medicine:values.medicine,
//             dosage:values.dosage
//             // timeList:[
//             //   {
//             //     morning:values.morning,
//             //     afternoon:values.afternoon,
//             //     night:values.night,
//             //     beforeFood:values.beforeFood,
//             //     afterFood:values.afterFood
//             //   }
//             // ]
//           }
//         ]

//       });
//       toast.success("Treatment Added", { theme: "colored" });
//       setShow(false);
//       setValues.summary("");
//       setValues.suggestion("");
//       setValues.diagnosis("");
//       setValues.conclusion("");
//       setValues.appointmentDate("");
//       setValues.medicine("");
//       setValues.dosage("");
//       setValues.morning("");
//       setValues.afternoon("");
//       setValues.night("");
//       setValues.beforeFood("");
//       setValues.afterFood("");
//       // navigate("/dashboard");

//     }catch(error){
//       console.log(error)
//     }
//   }


//   return (
//     <>
//       <Button className='btn btn-secondary btn-sm' onClick={() => setShow(true)}>
//         Treatment
//       </Button>

//       <Modal
//         show={show}
//         onHide={() => setShow(false)}
//         dialogClassName="modal-90w"
//         aria-labelledby="example-custom-modal-styling-title"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="example-custom-modal-styling-title">
//             Treatment For Patient
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
        
//           <form className="container-create mt-5" onSubmit={handleSubmit}>
//             <div className="card" style={{ textAlign: "left" }}>
             
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-lg-12 pb-4">
//                     <div className="form-group">
//                       <label>
//                         <b>Summary</b>
//                       </label>
//                       <input
//                         className="form-control"
//                         name="summary"
//                         type="textarea"
//                         // value={values.username}
//                         onChange={handleInput}
//                         // onChange={(e) => setUserame(e.target.value)}
//                       />
//                     </div>
//                   </div>

//                   <div className="col-lg-12 pb-4">
//                     <div className="form-group">
//                       <label>
//                         <b>Suggestion</b>
//                       </label>
//                       <input
//                         className="form-control"
//                         name="suggestion"
//                         type="paragraph"
//                         // value={values.password}
//                         onChange={handleInput}
//                         // onChange={(e) => setPassword(e.target.value)}
//                       ></input>
//                     </div>
//                   </div>

//                   <div className="col-lg-12 pb-4">
//                     <div className="form-group">
//                       <label>
//                         <b>Diagnosis</b>
//                       </label>
//                       <input
//                         type="text"
//                         name="diagnosis"
//                         onChange={handleInput}
//                         // value={values.age}
//                         // onChange={(e) => setAge(e.target.value)}
//                         className="form-control"
//                       ></input>
//                     </div>
//                   </div>

//                   <div className="col-lg-12 pb-4">
//                     <div className="form-group">
//                       <label>
//                         <b>Conclusion</b>
//                       </label>
//                       <input
//                         type="text"
//                         name="conclusion"
//                         // value={values.dob}
//                         onChange={handleInput}
//                         // onChange={(e) => setDob(e.target.value)}
//                         className="form-control"
//                       ></input>
//                     </div>
//                   </div>

//                   <div className="col-lg-12 pb-4">
//                     <div className="form-group">
//                       <label>
//                         <b>Appointment Date</b>
//                       </label>
//                       <input
//                         type="date"
//                         name="appointmentDate"
//                         // value={values.dob}
//                         onChange={handleInput}
//                         // onChange={(e) => setDob(e.target.value)}
//                         className="form-control"
//                       ></input>
//                     </div>
//                   </div>

//                   <div className="col-lg-12 pb-4">
//                     <div className="form-group">
//                       <label>
//                         <b>Medicine</b>
//                       </label>
//                       <input
//                         type="text"
//                         name="medicine"
//                         // value={values.dob}
//                         onChange={handleInput}
//                         // onChange={(e) => setDob(e.target.value)}
//                         className="form-control"
//                       ></input>
//                     </div>
//                   </div>

//                   <div className="col-lg-12 pb-4">
//                     <div className="form-group">
//                       <label>
//                         <b>Dosage</b>
//                       </label>
//                       <input
//                         type="text"
//                         name="dosage"
                        
//                         onChange={handleInput}
                        
//                         className="form-control"
//                       ></input>
//                     </div>
//                   </div>

//                   <div className="col-lg-12 pb-4">
//                     <div className="form-group d-flex flex-row">
//                       <label>
//                         <b>Morning </b>
//                       </label>
//                       <div class="form-check">
//                         <input
//                           class="form-check-input"
//                           type="radio"
//                           name="morning"
//                           onChange={handleInput}
                         
//                           // id="exampleRadios1"
//                           value="true"
                        
//                         />
//                         <label class="form-check-label" for="exampleRadios1">
//                           Yes
//                         </label>
//                       </div>
//                       <div class="form-check ">
//                         <input
//                           class="form-check-input"
//                           type="radio"
//                           name="morning"
//                           onChange={handleInput}
//                           // id="exampleRadios2"
//                           value="false"
//                         />
//                         <label class="form-check-label" for="exampleRadios2">
//                           No
//                         </label>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-lg-12 pb-4">
//                     <div className="form-group d-flex flex-row">
//                       <label>
//                         <b>Afternoon </b>
//                       </label>
//                       <div class="form-check">
//                         <input
//                           class="form-check-input"
//                           type="radio"
//                           name="afternoon"
                          
//                           value="true"
//                           onChange={handleInput}
                        
//                         />
//                         <label class="form-check-label" for="exampleRadios1">
//                           Yes
//                         </label>
//                       </div>
//                       <div class="form-check ">
//                         <input
//                           class="form-check-input"
//                           type="radio"
//                           name="afternoon"
//                           onChange={handleInput}
//                           value="false"
//                         />
//                         <label class="form-check-label" for="exampleRadios2">
//                           No
//                         </label>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-lg-12 pb-4">
//                     <div className="form-group d-flex flex-row">
//                       <label>
//                         <b>Night </b>
//                       </label>
//                       <div class="form-check">
//                         <input
//                           class="form-check-input"
//                           type="radio"
//                           name="night"
//                           onChange={handleInput}
//                           value="true"
                          
//                         />
//                         <label class="form-check-label" for="exampleRadios1">
//                           Yes
//                         </label>
//                       </div>
//                       <div class="form-check ">
//                         <input
//                           class="form-check-input"
//                           type="radio"
//                           name="night"
//                           onChange={handleInput}
//                           value="false"
//                         />
//                         <label class="form-check-label" for="exampleRadios2">
//                           No
//                         </label>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-lg-12 pb-4">
//                     <div className="form-group d-flex flex-row">
//                       <label>
//                         <b>Before Food </b>
//                       </label>
//                       <div class="form-check">
//                         <input
//                           class="form-check-input"
//                           type="radio"
//                           name="beforeFood"
//                           onChange={handleInput}
//                           value="true"
                          
//                         />
//                         <label class="form-check-label" for="exampleRadios1">
//                           Yes
//                         </label>
//                       </div>
//                       <div class="form-check ">
//                         <input
//                           class="form-check-input"
//                           type="radio"
//                           name="beforeFood"
//                           onChange={handleInput}
//                           value="false"
//                         />
//                         <label class="form-check-label" for="exampleRadios2">
//                           No
//                         </label>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-lg-12 pb-4">
//                     <div className="form-group d-flex flex-row">
//                       <label>
//                         <b>After Food </b>
//                       </label>
//                       <div class="form-check">
//                         <input
//                           class="form-check-input"
//                           type="radio"
//                           name="afterFood"
//                           onChange={handleInput}
//                           value="true"
                      
//                         />
//                         <label class="form-check-label" for="exampleRadios1">
//                           Yes
//                         </label>
//                       </div>
//                       <div class="form-check ">
//                         <input
//                           class="form-check-input"
//                           type="radio"
//                           name="afterFood"
//                           onChange={handleInput}
//                           value="false"
//                         />
//                         <label class="form-check-label " for="exampleRadios2">
//                           No
//                         </label>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-lg-12">
//                     <div className="form-group d-flex justify-content-end">
//                       <button className="btn btn-success" type="submit">
//                         <b>Save</b>
//                       </button>
//                       <Button className="btn btn-danger" onClick={onBack}>
//                         <b>Back</b>
//                       </Button>
//                       {/* <div className="btn btn-danger">Back</div> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </form>
       
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default TreatmentForm;