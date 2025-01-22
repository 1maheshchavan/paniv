import React from "react";

const ANNEXURE_I = () => {
  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Annexure I</h3>
      <h4 className="text-center mb-4">AFFIDAVIT BY THE STUDENT</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">
            I
          </label>
          <input
            type="text"
            id="studentName"
            className="form-control"
            placeholder="Student Name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="parentDetails" className="form-label">
            S/o D/o
          </label>
          <input
            type="text"
            id="parentDetails"
            className="form-control"
            placeholder="Parent's Name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="villageTown" className="form-label">
            Resident of the village/Town
          </label>
          <input
            type="text"
            id="villageTown"
            className="form-control"
            placeholder="Village/Town Name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="district" className="form-label">
            District
          </label>
          <input
            type="text"
            id="district"
            className="form-control"
            placeholder="District Name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="college" className="form-label">
            Now the student of the College/Institute
          </label>
          <input
            type="text"
            id="college"
            className="form-control"
            placeholder="College/Institute Name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="degree" className="form-label">
            Leading to the award of Degree/Diploma/certificate programme
          </label>
          <input
            type="text"
            id="degree"
            className="form-control"
            placeholder="Programme Name"
          />
        </div>

        <p>
          hereby acknowledge receipt of the Mahatma Phule Krushi Vidyapeeth,
          Rahuri Student Discipline and Conduct Rule-2002 today the ___ day of
          ___.
        </p>

        <p>
          1. I also hereby declare that I shall submit myself to the
          disciplinary jurisdiction of the Vice-Chancellor/Dean/Associate
          Dean/Principal/Head of the institute of the said university and shall
          observe and abide these rules and regulation made by the
          Vice-Chancellor in the behalf.
        </p>
        <p>
          2. I am fully aware of the penal and administrative action that is
          liable to be taken against me in case I am found guilty of or abetting
          ragging, actively or passively, or being part of a conspiracy to
          promote ragging.
        </p>
        <p>
          3. I hereby solemnly aver and undertake that,
          <br />
          a. I will not indulge in any behavior or act that may be constituted
          as ragging.
          <br />
          b. I will not participate in or abet or propagate through any act of
          commission or omission that may be constituted as ragging under
          clause 2 of Maharashtra prohibition of ragging act, 1999
          (Mah.XXXIII of 1999).
        </p>
        <p>
          4. I hereby affirm that, if found guilty of ragging, I am liable for
          punishment according to M.P.K.V. Rahuri Student Discipline and
          Conduct Rule-2002 and Maharashtra prohibition of ragging act, 1999
          (Mah.XXXIII of 1999), without prejudice to any criminal action that
          may be taken against me under any penal law or any law for the time
          being in force.
        </p>
        <p>
          5. I hereby declare that I have not been expelled or debarred from
          admission in any institution in the country on account of being found
          guilty of, abetting part of conspiracy to promote, ragging and
          further affirm that, in case the declaration is found to be untrue, I
          am aware that my admission is liable to be cancelled.
        </p>
        <p>
          6. Right to expel students without reasoning will be reserved by
          management. This shall not be challenged in any Court of Law and
          management’s decision will not be challenged in any area of Indian
          Jurisdiction.
        </p>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input type="date" id="date" className="form-control" />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="place" className="form-label">
              Place
            </label>
            <input
              type="text"
              id="place"
              className="form-control"
              placeholder="Place"
            />
          </div>
        </div>

        <div className="text-end mt-3">
          <p>Signature of Student</p>
        </div>
      </form>
    </div>
  );
};

export default ANNEXURE_I;
