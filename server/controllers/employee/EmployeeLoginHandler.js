import bodyParser from "body-parser";
var urlencodedParser = bodyParser.urlencoded({ extended: false }); //middileware

//module export
const EmployeeLoginHandler = (app, db) => {
  app.post("/login/emp", (req, res) => {
    //variables
    const empUserName = req.body.empUserName;
    const empPassword = req.body.empPassword;

    //query
    const sqlSelect = "SELECT * FROM emp_login WHERE userName= ? AND password=?";

    //
    db.query(sqlSelect, [empUserName, empPassword], (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log("**ERROR**");
      }
      /////
      if (result.length > 0) {
        res.send(result);
        console.log("**RESULT SENT TO FRONT END**");
      } else {
        res.send({ message: "wrong username/password combination!" });
        console.log("**INVALID COMBINATION**");
      }
    });
  });
};

export default EmployeeLoginHandler;