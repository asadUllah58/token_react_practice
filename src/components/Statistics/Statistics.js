import React, {Component} from 'react';
import './statistics.scss';
// import './donut-chart.js';

export default class Statistics extends Component{
  render(){
    return(
      <section class="light-bg key-states padding-top-100 padding-bottom-100" id="key-state">
        <div class="container">
          <div class="heading text-center">
            <h2>Key Statistics</h2>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div id="donutChartContainer" class="donutchart"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="hardcap-progress">
                <h4>$11.3 million</h4>
                <div>Tokenmarket Sale</div>
                <div class="progress">
                  <div class="progress-bar token-sale-progress" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                    <span class="sr-only">70% Complete</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="hardcap-progress">
                <h4>$6 million</h4>
                <div>Private sale</div>
                <div class="progress">
                  <div class="progress-bar private-sale-progress" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                    <span class="sr-only">70% Complete</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="hardcap-progress">
                <h4>$3 million</h4>
                <div>Ethfinex sale</div>
                <div class="progress">
                  <div class="progress-bar ethfinex-sale-progress" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                    <span class="sr-only">70% Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row padding-top-80">
            <div class="col pre-sale">
              <h5>Overall Sales</h5>
              <ul>    
                <li>
                  <p>Softcap: 20,000 ETH or roughly $4.5 million. The project has already raised over 24,000 ETH.</p>
                </li>
                <li>
                  <p>20% of Fetch tokens will be sold during all sales (private and public).</p>
                </li>
                <li>
                  <p>Fetch team vesting of 3 years (50% in year 1, 25% in year 2, 25% in year 3).</p>
                </li>
                <li>
                  <p>Private sale vesting 3 months, lock-up with straight line daily vesting over the following 3 months.</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="row padding-top-5">
            <div class="col-sm m-1 pre-sale">
              <h5>Ethfinex public pre-sale</h5>
              <p>Hardcap: $1 million with option to extend to two further rounds
                of $1 million each</p>
              <p>Token price: 10.5 Cents</p>
              <p>Effective bonus Vs public sale: 5%</p>
              <p>Contribution amount: 25 ETH (no more, no less)</p>
            </div>
            <div class="col-sm m-1 public-sale">
              <h5>Tokenmarket public sale</h5>
              <p>Hardcap: $11.3 million</p>
              <p>Softcap: N/A</p>
              <p>Token price: 10.9 cents</p>
              <p> Minimum contribution: 0.2 ETH</p>
              <p>Maximum contribution: 500 ETH</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}