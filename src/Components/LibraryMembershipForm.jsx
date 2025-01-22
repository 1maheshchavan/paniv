import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LibraryMembershipForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-header text-center">
          <h4>Shriram Shikshan Sanstha's</h4>
          <h5>Shriram College Of Agriculture</h5>
          <p>Paniv, Pin - 413113, Tal. Malshiras, Dist. Solapur</p>
        </div>
        <div className="card-body">
          <h4 className="text-center mb-4">Library Membership Form</h4>
          <form onSubmit={handleSubmit}>
            <p>
              To,
              <br />
              The Librarian
              <br />
              I undersigned desire to seek membership in your library for
              academic year 20__ - 20__.
            </p>
            <h5 className="mb-3">Student Information</h5>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Name in the Student Mr./Miss:</label>
                <input
                  name="studentName"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label>Reg. No.:</label>
                <input
                  name="regNo"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Class:</label>
                <input
                  name="class"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label>Date of Birth:</label>
                <input
                  name="dob"
                  type="date"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Blood Group:</label>
                <input
                  name="bloodGroup"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label>Permanent Address:</label>
                <textarea
                  name="address"
                  className="form-control"
                  rows="2"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <label>Pincode:</label>
                <input
                  name="pincode"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label>Telephone No.:</label>
                <input
                  name="telephoneNo"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label>Mobile No.:</label>
                <input
                  name="mobileNo"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <label>Email ID:</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label>Pan Card No.:</label>
                <input
                  name="panCardNo"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label>Voter Card No.:</label>
                <input
                  name="voterCardNo"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Aadhar Card No.:</label>
                <input
                  name="aadharCardNo"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
            <p>
              I hereby declare that the information given above is true to the
              best of my knowledge. I assure to obey all the rules and
              regulations laid down by the library authorities from time to
              time.
            </p>
            <div className="text-right">
              Yours Faithfully,
              <br />
              (Signature of Student)
            </div>
            <hr />
            <h5 className="mb-3">For Office Use Only</h5>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Mr./Miss:</label>
                <input
                  name="officeName"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label>Is admitted in Class:</label>
                <input
                  name="admittedClass"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Year:</label>
                <input
                  name="admittedYear"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label>With Roll No.:</label>
                <input
                  name="rollNo"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
            <hr />
            <h5 className="mb-3">For Library Use Only</h5>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Library Borrow Card No.:</label>
                <input
                  name="borrowCardNo"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label>Borrow Card Issued Date:</label>
                <input
                  name="issuedDate"
                  type="date"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label>Remark:</label>
              <textarea
                name="remark"
                className="form-control"
                rows="2"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LibraryMembershipForm;
