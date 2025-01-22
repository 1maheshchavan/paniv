import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ANNEXURE_III = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-header text-center">
          <h4>Annexure III</h4>
          <h5>DISCIPLINE AND CODE OF CONDUCT</h5>
        </div>
        <div className="card-body">
          <ul className="list-unstyled">
            <li>1. Every student should carry their valid college identity card while in the college or representing the college at any other place.</li>
            <li>2. Students must maintain strict discipline in classrooms, library, and corridors where classrooms are located.</li>
            <li>3. Students must not attend any other class other than their own, without prior permission of authorities.</li>
            <li>4. Students are not permitted to bring any outsider to the college campus without prior permission of authorities.</li>
            <li>5. No students should loiter in the corridors or college campus during lecture hours.</li>
            <li>6. No student is permitted to miss the lectures and sit in the canteen/common room.</li>
            <li>7. Every student should always be decently dressed and observe decorum with regard to both clothing and behavior.</li>
            <li>8. Students must not collect any money/funds without prior permission of the class in-charge or principal.</li>
            <li>9. Students should not organize any picnic without prior permission of the principal.</li>
            <li>10. Students should refrain from indulging in any form of ragging.</li>
            <li>11. Students should not write on benches, walls or disfigure walls.</li>
            <li>12. Students are not allowed to go out of the college premises without prior permission.</li>
            <li>13. No student will write to the press or communicate any information about college-related matters.</li>
            <li>14. A student absent without leave is liable to be removed from the college roll.</li>
            <li>15. Students should deposit lost property to the office.</li>
            <li>16. Students are not allowed to use mobile phones within the premises.</li>
            <li>17. Students should ride bikes properly on the campus with a helmet.</li>
            <li>18. Failure to observe rules will result in disciplinary action.</li>
            <li>19. Students must use college buses only.</li>
            <li>20. Management's decisions are final in all matters.</li>
          </ul>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Date:</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-6">
                <label>Place:</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="mb-3">
              <label>Signature of Student:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label>Signature of Parent/Guardian:</label>
              <input type="text" className="form-control" />
            </div>
            <hr />
            <h5>For Office Use Only</h5>
            <div className="form-check mb-3">
              <input type="radio" id="admitted" name="admissionStatus" className="form-check-input" />
              <label className="form-check-label" htmlFor="admitted">
                Admitted
              </label>
            </div>
            <div className="form-check mb-3">
              <input type="radio" id="notAdmitted" name="admissionStatus" className="form-check-input" />
              <label className="form-check-label" htmlFor="notAdmitted">
                Not Admitted
              </label>
            </div>
            <div className="mb-3">
              <label>Remark by Principal:</label>
              <textarea className="form-control" rows="2"></textarea>
            </div>
            <div className="mb-3">
              <label>Signature of Principal:</label>
              <input type="text" className="form-control" />
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

export default ANNEXURE_III;
