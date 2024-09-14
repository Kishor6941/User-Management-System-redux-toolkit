import "./AddUpdateUser.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { adduser, updateuser } from "../../redux/slice/UserSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

type FormValues = {
  name: string;
  email: string;
  phoneNo: number;
};
const AddUpdateUser = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
 let userList =  useSelector((state:any) => state?.user)
  let params = useParams();
  console.log(params?.id);

  let userObjFromid = userList.find((user:any) => user?.id === params?.id)
  
  
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState,setValue } = form;
  const { errors } = formState;
  const { name, email, phoneNo } = errors;

  const getFormValues = (data: FormValues) => {
    if(params?.id) {
        let updateObj = {
            ...data,
            id: params.id,
          };
        dispatch(updateuser(updateObj))
    } else {
        let userObj = {
            ...data,
            id: uuidv4(),
          };
        dispatch(adduser(userObj));
    }
    navigate("/");
  };

  useEffect(() => {
    setValue('name', userObjFromid?.name);
    setValue('email', userObjFromid?.email);
    setValue('phoneNo', userObjFromid?.phoneNo);
  },[params?.id])

  return (
    <>
      <div className="add-edit-user">
        <form onSubmit={handleSubmit(getFormValues)}>
          <h1 className="add-user-head">{params?.id ? "Update" : "Add"} User</h1>
          <div className="username-container">
            <label>Enter Name</label>
            <input
              type="text"
              placeholder="username"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <small className="input-error">{name && name.message}</small>
          </div>
          <div className="email-container">
            <label>Enter Email</label>
            <input
              type="email"
              placeholder="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Invalid Email Format",
                },
              })}
            />
            <small className="input-error">{email && email.message}</small>
          </div>
          <div className="phone-container">
            <label>Phone No</label>
            <input
              type="number"
              placeholder="phone no."
              {...register("phoneNo", {
                required: {
                  value: true,
                  message: "Phone No. is required",
                },
                minLength: {
                  value: 10,
                  message: "10 digit is required",
                },
                maxLength: {
                  value: 10,
                  message: "10 digit is required",
                },
              })}
            />
            <small className="input-error">{phoneNo && phoneNo.message}</small>
          </div>
          <div>
            <button className="glow-on-hover" type="submit">
            {params?.id ? "Update" : "Add"} User
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUpdateUser;
