import React, {Component} from 'react';
import './TokenRelease.scss';

export default class TokenRelease extends Component{
  render(){
    return(
      <section class="light-bg graph-section padding-top-100 padding-bottom-100">
        <div class="container">
          <div class="row">
            <div class="col-md-6 heading margin-bottom-50">
              <h2>Token release</h2>
              <p>Total number of token release, scheduled over 6 years</p>
              <p>Estimated token amount in millions</p>
            </div>
            <div class="col-md-6 token-graph text-center">
              <div class="container">
                <div id="token-graph" style={{width: 'calc(620*0.1%)'}}>
                  <span class="token-year">1 year</span>
                  <span class="token-value">620m</span>
                </div>

                <div id="token-graph" style={{width: 'calc(800*0.1%)'}}>
                  <span class="token-year">2 years</span>
                  <span class="token-value">800m</span>
                </div>

                <div id="token-graph" style={{width: 'calc(930*0.1%)'}}>
                  <span class="token-year">3 years</span>
                  <span class="token-value">930m</span>
                </div>

                <div id="token-graph" style={{width: 'calc(945*0.1%)'}}>
                  <span class="token-year">4 years</span>
                  <span class="token-value">945m</span>
                </div>

                <div id="token-graph" style={{width: 'calc(955*0.1%)'}}>
                  <span class="token-year">5 years</span>
                  <span class="token-value">955m</span>
                </div>

                <div id="token-graph" style={{width: 'calc(970*0.1%)'}}>
                  <span class="token-year">6 years</span>
                  <span class="token-value">970m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}