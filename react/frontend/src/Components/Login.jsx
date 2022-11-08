import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginCustomer } from "../Services/auth.service";
import { Header } from "./Header";
function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: " ",
    password: " ",
  });

  const loginuser = async (e) => {
    e.preventDefault();
    const apiResponse = await loginCustomer(input.email, input.password);
    console.log(apiResponse.data);
    if (apiResponse.data.status) {
      navigate("/Popup");
      localStorage.setItem("user", JSON.stringify(apiResponse.data.result));
      localStorage.setItem("token", JSON.stringify(apiResponse.data.token));
    }
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput((preValue) => ({
      ...preValue,
      [name]: value,
    }));
    //console.log(input)
  };

  return (
    
    <>
        <Header/>
      <div class="container">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm">
            <div className="container">
              <div className="row">
                <div className="">
                  <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={(e) => inputHandler(e)}
                      />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        name="password"
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(e) => inputHandler(e)}
                      />
                    </div>

                    <br />
                    <button
                      type="submit"
                      className="btn btn-success"
                      onClick={loginuser}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm"></div>
        </div>
      </div>
    </>
  );
}

export default Login;
