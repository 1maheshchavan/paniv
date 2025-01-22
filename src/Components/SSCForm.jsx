import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <h2>SSC School Details:</h2>
      <label>Last School Name:</label>
      <input name="lastSchoolName" type="text" onChange={handleChange} />
      <br />
      <label>Obtained Marks:</label>
      <input name="obtainedMarks" type="text" onChange={handleChange} />
      <label>Total Marks:</label>
      <input name="totalMarks" type="text" onChange={handleChange} />
      <label>Percentage:</label>
      <input name="percentage" type="text" onChange={handleChange} />
      <br />
      <label>Month of Passing:</label>
      <input name="monthOfPassing" type="text" onChange={handleChange} />
      <label>Year of Passing:</label>
      <input name="yearOfPassing" type="text" onChange={handleChange} />

      <h2>Official Details:</h2>
      <label>Reservation Quota:</label>
      <input name="reservationQuota" type="text" onChange={handleChange} />
      <label>Other Reservation:</label>
      <input name="otherReservation" type="text" onChange={handleChange} />

      <h2>Certificate Details:</h2>
      <label>Domicile of Maharashtra State:</label>
      <input
        name="domicile"
        type="radio"
        value="yes"
        onChange={handleChange}
      />
      Yes
      <input
        name="domicile"
        type="radio"
        value="no"
        onChange={handleChange}
      />
      No
      <br />
      <label>Cast Certificate:</label>
      <input
        name="castCertificate"
        type="radio"
        value="available"
        onChange={handleChange}
      />
      Available
      <input
        name="castCertificate"
        type="radio"
        value="notAvailable"
        onChange={handleChange}
      />
      Not Available
      <br />
      <label>If Submitted, Authority Name:</label>
      <input name="castAuthority" type="text" onChange={handleChange} />
      <label>Date:</label>
      <input name="castDate" type="date" onChange={handleChange} />

      <h2>Physical Disable Details:</h2>
      <label>Physically Challenged:</label>
      <input
        name="physicallyChallenged"
        type="radio"
        value="yes"
        onChange={handleChange}
      />
      Yes
      <input
        name="physicallyChallenged"
        type="radio"
        value="no"
        onChange={handleChange}
      />
      No
      <br />
      <label>PH Category:</label>
      <input name="phCategory" type="text" onChange={handleChange} />
      <label>Percentage:</label>
      <input name="phPercentage" type="text" onChange={handleChange} />
      <label>PH Certificate Issued By:</label>
      <input name="phIssuer" type="text" onChange={handleChange} />

      <h2>Bank Details:</h2>
      <label>Bank Name:</label>
      <input name="bankName" type="text" onChange={handleChange} />
      <label>Branch Name:</label>
      <input name="branchName" type="text" onChange={handleChange} />
      <label>Bank Account Number:</label>
      <input name="accountNumber" type="text" onChange={handleChange} />
      <label>IFSC Code:</label>
      <input name="ifscCode" type="text" onChange={handleChange} />
      <label>MICR Code:</label>
      <input name="micrCode" type="text" onChange={handleChange} />

      <h2>Declaration:</h2>
      <label>Date:</label>
      <input name="declarationDate" type="date" onChange={handleChange} />
      <label>Place:</label>
      <input name="declarationPlace" type="text" onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SSCForm;
