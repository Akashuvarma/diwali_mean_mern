import React from "react";
import { useFormik } from "formik";
import { SignupValidations } from "./Validations";
import { formnewSignup } from "../Services/auth.service";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
const initialValues = {
  first_name: "",
  last_name: "",
  add_line1: "",
  add_line2: "",
  state: "",
  city: "",
  mobile: "",
  password: "",
  email: "",
};
export const Formnew = () => {
  const navigate = useNavigate();

  const { values, errors, touched, handleChange, handleSubmit, handleReset } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignupValidations,
      onSubmit: async (values) => {
        console.log("submitted", values);
        const apiResponse = await formnewSignup(values);
        console.log(apiResponse);
        if (apiResponse.data.status) {
          navigate("/Popup");
          localStorage.setItem("user", JSON.stringify(apiResponse.data.result));
        }
      },
    });
  return (
    <>
        <Header/>
      <h2></h2>
      <section class="">
        <div class="container py-2 h-100">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
              <div
                class="card shadow-2-strong card-registration"
                border-radius="15px"
              >
                <div class="card-body p-4 ">
                  <h3 class="mb-4 ">User Registration Details </h3>
                  <form onSubmit={handleSubmit}>
                    <div class="row">
                      <div class="col-md-6 ">
                        <div class="form-outline">
                          <input
                            type="text"
                            value={values?.first_name}
                            name="first_name"
                            onChange={handleChange}
                          />
                          <label class="form-label">First Name</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <input
                          type="text"
                          value={values?.last_name}
                          name="last_name"
                          onChange={handleChange}
                        />
                        <label class="form-label">Last Name</label>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-outline">
                          <input
                            type="text"
                            value={values?.add_line1}
                            name="add_line1"
                            onChange={handleChange}
                          />
                          <label class="form-label">Address</label>
                        </div>
                        {errors.add_line1 && touched.add_line1 ? (
                          <p className="text-danger">{errors.add_line1}</p>
                        ) : null}
                      </div>
                      <div class="col-md-6  ">
                        <input
                          type="text"
                          value={values?.add_line2}
                          name="add_line2"
                          onChange={handleChange}
                        />
                        <label class="form-label">Address line 2</label>
                        {errors.add_line2 && touched.add_line2 ? (
                          <p className="text-danger">{errors.add_line2}</p>
                        ) : null}
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-outline">
                          <input
                            type="text"
                            value={values?.state}
                            name="state"
                            onChange={handleChange}
                          />
                          <label class="form-label">State</label>
                        </div>
                        {errors.state && touched.state ? (
                          <p className="text-danger">{errors.state}</p>
                        ) : null}
                      </div>
                      <div class="col-md-6">
                        <input
                          type="text"
                          value={values?.city}
                          name="city"
                          onChange={handleChange}
                        />
                        <label class="form-label">City</label>
                        {errors.city && touched.city ? (
                          <p className="text-danger">{errors.city}</p>
                        ) : null}
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6  ">
                        <div class="form-outline">
                          <input
                            type="text"
                            value={values?.mobile}
                            name="mobile"
                            onChange={handleChange}
                          />
                          <label class="form-label">Mobile</label>
                        </div>
                        {errors.mobile && touched.mobile ? (
                          <p className="text-danger">{errors.mobile}</p>
                        ) : null}
                      </div>
                      <div class="col-md-6  ">
                        <input
                          type="text"
                          value={values?.email}
                          name="email"
                          onChange={handleChange}
                        />
                        <label class="form-label">Email</label>
                        {errors.email && touched.email ? (
                          <p className="text-danger">{errors.email}</p>
                        ) : null}
                      </div>
                    </div>

                    <input
                      type="password"
                      value={values?.password}
                      name="password"
                      onChange={handleChange}
                    />
                    <br />
                    <label>Password</label>
                    {errors.password && touched.password ? (
                      <p className="text-danger">{errors.password}</p>
                    ) : null}
                    <br />
                    <div class="row">
                      <div class="col-md-6  ">
                        <button
                          className="btn btn-sm btn-success"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>
                      <div class="col-md-6 ">
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={handleReset}
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
