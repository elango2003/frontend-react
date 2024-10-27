// import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import home from "../Home/homestyle.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./homestyle.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PuffLoader from "react-spinners/PuffLoader";
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { RiFileList2Line } from "react-icons/ri";
import { BsPersonFillAdd } from "react-icons/bs";
import { MdChecklist } from "react-icons/md";
import TreatmentForm from "../TreatmentForm";
import History from "../../History/History";
import Homepage from "./Homepage";



function Home() {
  let [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const LoadForm = (userid) => {
    navigate("/dashboard/treatment/" + userid);
  };

  const LoadEdit = (id) => {
    navigate("/dashboard/edit/" + id);
  };

  const LoadDetail = (id) => {
    navigate("/dashboard/details/" + id);
  };

  const LoadHistory = (id) => {
    navigate("/dashboard/history/" + id);
  }

  // setLoading(false)
  const Removefunction = async (id) => {
    if (window.confirm("Do you want to remove?")) {
      await instance
        .delete("/delete/" + id)
        .then((res) => {
          window.location.reload();
          toast.success("Removed successfully", { theme: "colored" });
        })

        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  

  const [Data, setData] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    await instance.get("/userdetails").then((res) => {
      setData(res.data.data.data);
    });
    setLoading(true);
  };
  // const [openPopup, setOpenPopup] = useState(false);
  return (
    <div className="container-two">


      <div className="card">
        <div className="card-title ">
          <div className="add-container">
            {/* <div>
              <div className="btn btn-primary w-10 p-1 ">Search</div>
            </div> */}
            {/* <div className="add-one">Search</div> */}
          </div>
        </div>
        <div className="card-body">
          <div>
            <div className="d-flex justify-content-between mt-3 ">
            <div>
              <b> <MdChecklist /> Patient List</b>
            </div>
            <div >
              <Link
                to="/dashboard/create"
                className="btn btn-primary  w-10 p-1 shadow"
              >
               <b> Add new</b>
                <BsPersonFillAdd />
              </Link>
            </div>

            </div>
            <div className=" pb-3 pt-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search patient by name"
                onChange={(e) => setSearch(e.target.value)}
              ></input>
            </div>
          </div>
          <table className="table table-bordered shadow">
            <thead className="bg-dark text-white">
              <tr className="table-secondary">
                <th >User Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Number</th>
                <th>Date Of Birth</th>
                <th>Actions</th>
                <th>Treatment</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Data.filter((user) => {
                  return search.toLowerCase() === ""
                    ? user
                    : user.name.toLowerCase().includes(search);
                }).map((user, index) => (
                  <tr key={user.userId}>
                    <td>{user.userId}</td>
                    <td>{user.name}</td>
                    <td>{user.userName}</td>
                    <td>{user.password}</td>
                    <td>{user.phoneNo}</td>
                    <td>{user.dateOfBirth}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(user.userId);
                        }}
                        className="btn btn-success shadow"
                      >
                        <LiaUserEditSolid />
                      </a>
                      <a
                        onClick={() => {
                          Removefunction(user.userId);
                        }}
                        className="btn btn-danger shadow"
                      >
                        <RiDeleteBin2Fill />
                      </a>
                      <a
                        onClick={() => {
                          LoadDetail(user.userId);
                        }}
                        className="btn btn-primary shadow"
                      >
                        <RiFileList2Line />
                      </a>
                    </td>
                    <td>
                      {/* <TreatmentForm /> */}
                      <a
                        onClick={() => {
                          LoadForm(user.userId);
                        }}
                        className="btn btn-secondary btn-sm shadow"
                      >Treatment
                        </a>

                      <a
                        onClick={() => {
                          LoadHistory(user.userId);
                        }}
                        className="btn btn-primary btn-sm shadow"
                      >History
                        </a>
                    </td>
                  </tr>
                ))
              ) : (
                <div className="loader">
                  <PuffLoader color="#0000FF" />
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Home;
