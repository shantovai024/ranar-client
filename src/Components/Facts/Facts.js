import React from 'react';
import CountUp from "react-countup";
import './Facts.css'

const Facts = () => {
  return (
    <div className='row mlr-0 mb-60'>
      <div className="fact-bg text-center">
        <div className="col-md-3 col-6 count-facts">
          <span
            data-purecounter-start="0"
            data-purecounter-end="5555"
            data-purecounter-duration="2"
            className="purecounter"
          >
            <CountUp delay={1} end={5555} />
          </span>
          <h5>Happy Clients</h5>
        </div>
        <div className="col-md-3 col-6 count-facts">
          <span
            data-purecounter-start="0"
            data-purecounter-end="35"
            data-purecounter-duration="2"
            className="purecounter"
          >
            <CountUp delay={1} end={35} />
          </span>
          <h5>Total Supplier</h5>
        </div>
        <div className="col-md-3 col-6 count-facts">
          <span
            data-purecounter-start="0"
            data-purecounter-end="10300"
            data-purecounter-duration="2"
            className="purecounter"
          >
            <CountUp delay={1} end={10300} />
          </span>
          <h5>Available Products</h5>
        </div>
        <div className="col-md-3 col-6 count-facts">
          <span
            data-purecounter-start="0"
            data-purecounter-end="365"
            data-purecounter-duration="2"
            className="purecounter"
          >
            <CountUp delay={1} end={365} />
          </span>
          <h5>Days of Support</h5>
        </div>
      </div>
    </div>
  );
};

export default Facts;