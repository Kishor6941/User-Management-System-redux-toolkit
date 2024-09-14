import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteuser } from "../../redux/slice/UserSlice";
const Home = () => {
  let navigate = useNavigate();
  let dispatch =  useDispatch()
  let userList = useSelector((state: any) => {
    return state?.user;
  });
  let navigateToUser = () => {
    navigate("/add-update-user");
  };

  let navigateToAddEdit = (user:any) => {
    navigate('/add-update-user/'+user?.id)
  }
  return (
    <>
      <div className="main">
        <div className="home">
          <div>
            <h1 className="head">User Managment System</h1>
          </div>
          <div>
            <button className="glow-on-hover" onClick={navigateToUser}>
              Add User
            </button>
          </div>
        </div>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Action</th>

          </tr>
          {!userList.length ? (
            <h1>No Record Found</h1>
          ) : (
            userList.map((user: any) => (
              <tr key={user?.id}>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>+91-{user?.phoneNo}</td>
                <td>
                  <button className="view-btn" onClick={() => navigate("/view-user/"+user?.id)}>View</button> {" "}
                  <button className="update-btn" onClick={() => navigateToAddEdit(user)}>Update</button>{" "}
                  <button className="delete-btn" onClick={() => dispatch(deleteuser(user?.id))}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </table>
      </div>
    </>
  );
};

export default Home;
