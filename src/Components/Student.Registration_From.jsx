import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentRegistrationForm = () => {
  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">
        Shriram College of Agriculture, Paniv
      </h3>
      <h5 className="text-center">Student Registration Form</h5>
      <form>
        <div className="mb-3">
          <label className="form-label">Student type:</label>
          <div>
            <input
              type="radio"
              name="studentType"
              id="regular"
              value="Regular student"
              className="form-check-input"
            />
            <label htmlFor="regular" className="form-check-label me-3">
              Regular Student
            </label>
            <input
              type="radio"
              name="studentType"
              id="diploma"
              value="Diploma student"
              className="form-check-input"
            />
            <label htmlFor="diploma" className="form-check-label">
              Diploma Student
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Student Name:</label>
          <input type="text" className="form-control" placeholder="Enter name" />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Reg. No:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Semester:</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Academic Year:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Gender:</label>
            <select className="form-select">
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">Date of Birth:</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Birthplace:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Blood Group:</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Religion:</label>
          <input type="text" className="form-control" />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Category:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Caste:</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Permanent Address:</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Local Address:</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Parent/Guardian Information:</label>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Parent/Guardian Name"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Mother's Name"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Occupation"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">HSC/College Details:</label>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Last College Name"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Exam Passed"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;