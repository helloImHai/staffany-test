import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

import Calculator from "./Calculator";

function App() {
  return (
    <div className="App">
      <h1>
        Welcome to the StaffAny Frontend Take Home Test{" "}
        <span role="img" aria-label="sparkly-eyes-emoji">
          🤩
        </span>
      </h1>
      <h2>
        <em>
          note: this is the blank version for candidates to fork. Access the
          working example <a href="https://17smu.csb.app/">here</a>
        </em>
      </h2>
      <p>
        Your task is as follows: Build a form that calculates pay based on shift
        duration, overtime limit, basic pay rate and overtime pay rate.
      </p>
      <p>
        There are two levels to this test: <strong>Basic</strong> and{" "}
        <strong>Advanced</strong>. You can see samples for each version of the
        test below. Hit the button to switch between the basic and the advanced
        versions. You're expected to do as much as possible in the time limit
        given to you. Please don't share this test with others.
      </p>

      <div>
        <h3>Basic Requirements</h3>
        <ol style={{ textAlign: "left" }}>
          <li>
            User can input shift duration, overtime limit, basic rate and pay
            rate
          </li>
          <li>These should all be positive numbers (decimals are possible)</li>
          <li>
            Form Validation is <strong>not necessary</strong>
          </li>
          <li>
            Output/show somewhere on the page the "Total Pay" as calculated by
            the pay formula
          </li>
          <li>
            The exact formula for how to calculate the numbers is displayed
            inside the "Advanced" requirement
          </li>
        </ol>
      </div>
      <div>
        <h3>Advanced Requirements</h3>
        <ol style={{ textAlign: "left" }}>
          <li>All Basic Requirements</li>
          <li>
            User can input a start time and end time, and the form should
            calculate the number of hours
          </li>
          <li>
            You may use any third-party date time library (e.g. moment) to help
            you count hours
          </li>
          <li>Your form should perform validation that makes sense.</li>
          <li>
            You need to "Show your working" and show how you got the total pay
          </li>
        </ol>
      </div>
      <div>
        <h3>Bonus Requirements</h3>
        <p>
          These are ideas to extend if you feel like going above and beyond. You
          can also surprise us with your own extensions!
        </p>
        <ol style={{ textAlign: "left" }}>
          <li>Make it pretty. Style the form</li>
          <li>Write some tests</li>
          <li>Build a table where each row is an instance of the form</li>
          <li>Use Typescript</li>
        </ol>
      </div>
      <div>
        <h3>Submission</h3>
        <p>
          Submit by replying to the email with a link to your codesandbox or
          your github repo
        </p>
      </div>
      <p />
      <hr />
      <h3>Advanced version</h3>
      <br />
      <Calculator />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
