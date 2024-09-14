import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./ViewUser.css";
const ViewUser = () => {
  let params = useParams();
  let userList = useSelector((state: any) => state.user);
  let navigate = useNavigate();
  let userObj = userList.find((user: any) => user?.id === params?.id);

  return (
    <div className="main-view">
      <div className="card">
        <button onClick={() => navigate("/")}>Back To Home</button>
        <h2>User Detail</h2>
        <hr />
        <h3>{userObj?.name}</h3>
        <p>+91-{userObj?.phoneNo}</p>
        <div className="info">
          <span>{userObj?.email}</span>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
