import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SSCForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h2 className="mb-3">SSC School Details:</h2>
      <div className="mb-3">
        <label className="form-label">Last School Name:</label>
        <input name="lastSchoolName" type="text" className="form-control" onChange={handleChange} />
      </div>
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Obtained Marks:</label>
          <input name="obtainedMarks" type="text" className="form-control" onChange={handleChange} />
        </div>
        <div className="col">
          <label className="form-label">Total Marks:</label>
          <input name="totalMarks" type="text" className="form-control" onChange={handleChange} />
        </div>
        <div className="col">
          <label className="form-label">Percentage:</label>
          <input name="percentage" type="text" className="form-control" onChange={handleChange} />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Month of Passing:</label>
          <input name="monthOfPassing" type="text" className="form-control" onChange={handleChange} />
        </div>
        <div className="col">
          <label className="form-label">Year of Passing:</label>
          <input name="yearOfPassing" type="text" className="form-control" onChange={handleChange} />
        </div>
      </div>

      <h2 className="mb-3">Official Details:</h2>
      <div className="mb-3">
        <label className="form-label">Reservation Quota:</label>
        <input name="reservationQuota" type="text" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Other Reservation:</label>
        <input name="otherReservation" type="text" className="form-control" onChange={handleChange} />
      </div>

      <h2 className="mb-3">Certificate Details:</h2>
      <div className="mb-3">
        <label className="form-label">Domicile of Maharashtra State:</label>
        <div>
          <input
            name="domicile"
            type="radio"
            value="yes"
            onChange={handleChange}
          /> Yes
          <input
            name="domicile"
            type="radio"
            value="no"
            className="ms-3"
            onChange={handleChange}
          /> No
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Cast Certificate:</label>
        <div>
          <input
            name="castCertificate"
            type="radio"
            value="available"
            onChange={handleChange}
          /> Available
          <input
            name="castCertificate"
            type="radio"
            value="notAvailable"
            className="ms-3"
            onChange={handleChange}
          /> Not Available
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">If Submitted, Authority Name:</label>
          <input name="castAuthority" type="text" className="form-control" onChange={handleChange} />
        </div>
        <div className="col">
          <label className="form-label">Date:</label>
          <input name="castDate" type="date" className="form-control" onChange={handleChange} />
        </div>
      </div>

      <h2 className="mb-3">Physical Disable Details:</h2>
      <div className="mb-3">
        <label className="form-label">Physically Challenged:</label>
        <div>
          <input
            name="physicallyChallenged"
            type="radio"
            value="yes"
            onChange={handleChange}
          /> Yes
          <input
            name="physicallyChallenged"
            type="radio"
            value="no"
            className="ms-3"
            onChange={handleChange}
          /> No
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">PH Category:</label>
          <input name="phCategory" type="text" className="form-control" onChange={handleChange} />
        </div>
        <div className="col">
          <label className="form-label">Percentage:</label>
          <input name="phPercentage" type="text" className="form-control" onChange={handleChange} />
        </div>
        <div className="col">
          <label className="form-label">PH Certificate Issued By:</label>
          <input name="phIssuer" type="text" className="form-control" onChange={handleChange} />
        </div>
      </div>

      <h2 className="mb-3">Bank Details:</h2>
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Bank Name:</label>
          <input name="bankName" type="text" className="form-control" onChange={handleChange} />
        </div>
        <div className="col">
          <label className="form-label">Branch Name:</label>
          <input name="branchName" type="text" className="form-control" onChange={handleChange} />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Bank Account Number:</label>
          <input name="accountNumber" type="text" className="form-control" onChange={handleChange} />
        </div>
        <div className="col">
          <label className="form-label">IFSC Code:</label>
          <input name="ifscCode" type="text" className="form-control" onChange={handleChange} />
        </div>
        <div className="col">
          <label className="form-label">MICR Code:</label>
          <input name="micrCode" type="text" className="form-control" onChange={handleChange} />
        </div>
      </div>

      <h2 className="mb-3">Declaration:</h2>
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Date:</label>
          <input name="declarationDate" type="date" className="form-control" onChange={handleChange} />
        </div>
        <div className="col">
          <label className="form-label">Place:</label>
          <input name="declarationPlace" type="text" className="form-control" onChange={handleChange} />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default SSCForm;
