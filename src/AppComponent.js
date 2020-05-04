import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { throttle, debounce } from "throttle-debounce";

export default class AppComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.throttled = this.throttled.bind(this);
    this.debouncing = this.debouncing.bind(this);
    this.normal = this.normal.bind(this);
  }
  normal = () => {
    document.getElementById("without-result").innerHTML=parseInt(document.getElementById("without-result").innerHTML)+1
  };

  throttled = throttle(300, () => {
    // Throttled function
    document.getElementById("throttling-result").innerHTML=parseInt(document.getElementById("throttling-result").innerHTML)+1
    
  });

  debouncing = debounce(300, () => {
    // Debounced function
    console.log("debouncing");
    document.getElementById("debouncing-result").innerHTML=parseInt(document.getElementById("debouncing-result").innerHTML)+1

  });

  render() {
    return (
      <div>
        <div className="row">
          {/* Without debouncing and throttling */}
          <div className="col-sm-4 pt-3">
            <div className="px-sm-10">
              <div className="mx-auto text-center font-weight-bold pb-10">
                Normal calls
              </div>
              <div className="form-group pt-4 pl-2">
                <label for="without ">Search Product</label>
                <input
                  type="text"
                  className="form-control"
                  id="without"
                  placeholder="Enter Product Name"
                  onChange={this.normal}
                />
              </div>
              <div>
                Number of calls made :&nbsp;
                <text id="without-result" className="text">
                  0
                </text>
              </div>
            </div>
          </div>
          {/*throttling */}
          <div className="col-sm-4 pt-3">
            <div className="px-sm-10">
              <div className="mx-auto text-center font-weight-bold pb-10">
                With Throttling
              </div>
              <div className="form-group pt-4 pl-2">
                <label for="without ">Search Product</label>
                <input
                  type="text"
                  className="form-control"
                  id="throtlling-input"
                  placeholder="Enter Product Name"
                  onChange={this.throttled}
                />
              </div>
              <div>
                Number of calls made :&nbsp;
                <text id="throttling-result" className="text">
                  0
                </text>
              </div>
            </div>
          </div>

          {/* Debouncing*/}
          <div className="col-sm-4 pt-3 pr-10">
            <div className="px-sm-10">
              <div className="mx-auto text-center font-weight-bold pb-10">
                With Debouncing
              </div>
              <div className="form-group pt-4 pl-2">
                <label for="without ">Search Product</label>
                <input
                  type="text"
                  className="form-control"
                  id="debouncing-input"
                  placeholder="Enter Product Name"
                  onChange={this.debouncing}
                />
              </div>
              <div>
                Number of calls made :&nbsp;
                <text id="debouncing-result" className="text">
                  0
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
