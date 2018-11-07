import React, {Component} from 'react';
import './tokenomics.scss';

export default class Tokenomics extends Component{
  render(){
    return(
      <section class="padding-top-100 padding-bottom-100" id="token">
        <div class="container">
          <div class="heading text-center">
            <h2>Tokenomics</h2>
            <p>The total number of tokens generated is intended to be 1,152,997,575. No further tokens will
              be created, but native Fetch tokens can be subdivided indefinitely.</p>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div id="piecharContainer" class="piechart"></div>
              <script src="js/piechart.js"></script>
            </div>
            <div class="col-md-12">
              <ul class="key-details-list">
                <li>The ERC-20 token is <b>required</b> to participate in the <b>public test network</b>: the
                  development, deployment and use of Fetch code and assets as part of the Fetch network, protocol and
                  platform.</li>
                <li>They will be <b>exchanged</b> for sub-divisible, native Fetch tokens at a <b>fixed
                    conversion rate</b> which is expected to be approximately one-to-one</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}