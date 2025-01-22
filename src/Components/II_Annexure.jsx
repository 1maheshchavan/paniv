import React from "react";

const ANNEXURE_II = () => {
  return (
    <div className="container mt-4">
      <h4 className="text-center">ANNEXURE II</h4>
      <h5 className="text-center">AFFIDAVIT BY PARENT / GUARDIAN</h5>

      <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="parentName" className="form-label">
            I, Father/Mother/Guardian of
          </label>
          <input
            type="text"
            id="parentName"
            className="form-control"
            placeholder="Enter Parent/Guardian Name"
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="town" className="form-label">
              Town
            </label>
            <input
              type="text"
              id="town"
              className="form-control"
              placeholder="Enter Town"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="district" className="form-label">
              District
            </label>
            <input
              type="text"
              id="district"
              className="form-control"
              placeholder="Enter District"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="institute" className="form-label">
            Institute
          </label>
          <input
            type="text"
            id="institute"
            className="form-control"
            placeholder="Enter Institute Name"
          />
        </div>

        <p>
          my ward is a student of the college/institute leading to the award of
        </p>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Degree/Diploma/Certificate Program"
          />
        </div>

        <p>
          hereby acknowledge receipt of the Mahatma Phule Krishi Vidyapeeth,
          Rahuri Student Discipline and Conduct Rule-2002 today the
        </p>

        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Day"
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Month"
            />
          </div>
        </div>

        <p>
          1. I also hereby declare that my ward shall submit to the disciplinary
          jurisdiction of the Vice-Chancellor / Dean / Associate Dean /
          Principal / Head of the institute of the said university and shall
          observe and abide by these rules and regulations made by the Vice-
          Chancellor in the behalf.
        </p>

        <p>
          2. I am fully aware of the penal and administrative action that is
          liable to be taken against my ward in case he/she found guilty of or
          abetting ragging, actively or passively, or being part of a conspiracy
          to promote ragging.
        </p>

        <p>
          3. I hereby solemnly aver and undertake that,
          <ul>
            <li>
              a. My ward will not indulge in any behavior or act that may be
              constituted as ragging.
            </li>
            <li>
              b. My ward will not participate in or abet or propagate through
              any act of commission or omission that may be constituted as
              ragging under clause 2 of Maharashtra prohibition of ragging act,
              1999 (Mah.XXXIII of 1999).
            </li>
          </ul>
        </p>

        <p>
          4. I hereby affirm that, if found guilty of ragging, my ward is liable
          for punishment according to M.P.K.V. Rahuri Student Discipline and
          conduct Rule-2002 and Maharashtra prohibition of ragging act, 1999
          (Mah.XXXIII of 1999 ), without prejudice to any criminal action that
          may be taken against me under any penal law or any law for the time
          being in force.
        </p>

        <p>
          5. I hereby declare that my ward have not being expelled or debarred
          from admission in any institution in the country on account of being
          found guilty of, abetting part of conspiracy to promote, ragging and
          further affirm that, in case the declaration is found to be untrue, I
          am aware that admission of my ward is liable to be cancelled.
        </p>

        <p>
          6. Right to expel students without reasoning will be reserved by
          management. This shall not be challenged in any Court of Law.
        </p>

        <p>
          7. I am aware that management decision will not be challenged in any
          area of Indian Jurisdiction.
        </p>

        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <label htmlFor="date" className="form-label">
              Date:
            </label>
            <input type="date" id="date" className="form-control" />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="place" className="form-label">
              Place:
            </label>
            <input type="text" id="place" className="form-control" placeholder="Enter Place" />
          </div>
        </div>

        <div className="text-end mt-4">
          <p>Signature of Parent / Guardian</p>
        </div>
      </form>
    </div>
  );
};

export default ANNEXURE_II;
