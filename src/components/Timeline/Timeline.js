import React, {Component} from 'react';
import './timeline.scss';

export default class Timeline extends Component{
  render(){
    return(
      <section class="distri padding-top-100 padding-bottom-100" id="timeline">
        <div class="container">
          <div class="heading text-center">
            <h2>Sale Timeline</h2>
          </div>
          <div class="row">
            <div class="border-left text-sm-left col-12 col-sm-6 item-right offset-1 offset-sm-6 padding-bottom-10">
              <div class="distri-heading">
                <h4 class="distri-heading-text text-left">05 November 2018</h4>
              </div>
              <div class="distri-content">
                <h5 class="distri-subheading-text">Phase 1: Sale announcement</h5>
                <p>Countdown to Ethfinex sale begins. 5.76% discount on ICO token price</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 offset-1 offset-sm-0 col-sm-6 item-left padding-bottom-10">
              <div class="distri-heading">
                <h4 class="distri-heading-text">12 November 2018</h4>
              </div>
              <div class="distri-content">
                <h5 class="distri-subheading-text">Phase 2: Ethfinex sale opens</h5>
                <p>Ethfinex sale now live. Discounted price for ICO sale</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="border-left text-sm-left col-12 col-sm-6 item-right offset-1 offset-sm-6 padding-bottom-10">
              <div class="distri-heading">
                <h4 class="distri-heading-text">26 November 2018</h4>
              </div>
              <div class="distri-content">
                <h5 class="distri-subheading-text">Phase 3: Ethfinex sale closed</h5>
                <p>Countdown to Token Market sale begins</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 offset-1 offset-sm-0 col-sm-6 item-left padding-bottom-10">
              <div class="distri-heading">
                <h4 class="distri-heading-text">03 December 2018</h4>
              </div>
              <div class="distri-content">
                <h5 class="distri-subheading-text">Phase 4: TGE TokenMarket sale opens</h5>
                <p>Ethfinex sale will be closed. Details of the sale will be available</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="border-left text-sm-left col-12 col-sm-6 item-right offset-1 offset-sm-6 padding-bottom-10">
              <div class="distri-heading">
                <h4 class="distri-heading-text">07 January 2019</h4>
              </div>
              <div class="distri-content">
                <h5 class="distri-subheading-text">Phase 5: TGE TokenMarket sale has ended</h5>
                <p>Both sale stages will be closed. Progress can be viewed on sale status</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}