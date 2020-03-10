import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import moment from "moment";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timein: "0800",
      timeout: "2000",
      overtimelimit: 10,
      basicpay: 12,
      overtimepay: 15
    };

    this.handleChangeTimeIn = this.handleChangeTimeIn.bind(this);
    this.handleChangeTimeOut = this.handleChangeTimeOut.bind(this);
    this.handleChangeOvertimeLimit = this.handleChangeOvertimeLimit.bind(this);
    this.handleChangeBasicPay = this.handleChangeBasicPay.bind(this);
    this.handleChangeOvertimePay = this.handleChangeOvertimePay.bind(this);
  }
  handleChangeTimeIn(event) {
    this.setState({ timein: event.target.value });
  }
  handleChangeTimeOut(event) {
    console.log(event);
    this.setState({ timeout: event.target.value });
  }
  handleChangeOvertimeLimit(event) {
    this.setState({ overtimelimit: event.target.value });
  }
  handleChangeOvertimePay(event) {
    this.setState({ overtimepay: event.target.value });
  }
  handleChangeBasicPay(event) {
    this.setState({ basicpay: event.target.value });
  }
  render() {
    let time1 = moment(this.state.timein, "HHmm");
    let time2 = moment(this.state.timeout, "HHmm");
    let totalhours = time2.diff(time1) / 3600000;
    let overtime = Math.max(totalhours - this.state.overtimelimit, 0);
    let normalhours = totalhours - overtime;
    let normalpay = normalhours * this.state.basicpay;
    let overtimepay = overtime * this.state.overtimepay;
    return (
      <div className={"myform"}>
        <Form>
          <Form.Row>
            <Form.Group controlId="timein">
              <Form.Label>Time in: </Form.Label>
              <Form.Control
                type="text"
                placeholder="0800"
                onChange={this.handleChangeTimeIn}
              />
            </Form.Group>
            <Form.Group controlId="timeout">
              <Form.Label>Time out: </Form.Label>
              <Form.Control
                type="text"
                placeholder="2000"
                onChange={this.handleChangeTimeOut}
              />
            </Form.Group>
          </Form.Row>
          <br />
          <Form.Group controlId="overtimelimit">
            <Form.Label>Overtime Limit: </Form.Label>
            <Form.Control
              type="number"
              placeholder={10}
              onChange={this.handleChangeOvertimeLimit}
            />
          </Form.Group>
          <br />
          <Form.Group controlId="basicpay">
            <Form.Label>Basic Pay: </Form.Label>
            <Form.Control
              type="number"
              placeholder={12}
              onChange={this.handleChangeBasicPay}
            />
          </Form.Group>
          <br />
          <Form.Group controlId="overtimepay">
            <Form.Label>Overtime Pay: </Form.Label>
            <Form.Control
              type="number"
              placeholder={15}
              onChange={this.handleChangeOvertimePay}
            />
          </Form.Group>
        </Form>
        <br />
        <div>
          Worked from {time1.format("HH:mm")} to {time2.format("HH:mm")}
        </div>
        <div> For total of {totalhours} hours </div>
        <div> Normal hours = {normalhours}</div>
        <div> Overtime hours = {overtime} </div>
        <div>
          {" "}
          Basic pay = basic rate ({this.state.basicpay}) * normal working hours
          ({normalhours}) = {normalpay}
        </div>
        <div>
          Overtime pay = overtime rate ({this.state.overtimepay}) * normal
          working hours ({overtime}) = {overtimepay}
        </div>
        <div>
          Total pay = basic pay ({normalpay}) + overtime pay ({overtimepay}) ={" "}
          {normalpay + overtimepay}
        </div>
        <br />
        <h3>Total pay: {normalpay + overtimepay}</h3>
      </div>
    );
  }
}
