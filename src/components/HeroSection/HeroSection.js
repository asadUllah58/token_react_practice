import React, {Component} from 'react';
import './HeroSection.scss';

export default class HeroSection extends Component{
  render(){
    return(
      <section className="simple-head" data-stellar-background-ratio="0.5" id="hme">
        <div id="particles-js"></div>

        <div class="bg-video-container">
            <video class="header-background-video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
              <source src="https://player.vimeo.com/external/291468374.hd.mp4?s=661268668bfd9c40b35272f39c93508e02e07d48&profile_id=175"
                type="video/mp4"/>
          </video>
        </div>
          <div class="position-center-center">
            <div class="container">
              <div class="row">
                <div class="col-md-7 d-flex">
                  <div class="header-left-content">
                    <h1>A framework for the<br /> intelligent and <br />connected economy</h1>
                    <span class="scroll">
                      <a href="#timeline" class="btn padding-left-20 padding-right-20">Token sale timeline</a>
                    </span>
                    <a href="how-to-participate.html" class="btn padding-left-20 padding-right-20">How to participate</a>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="distri sales-open-box">
                    <h6>Sale on Ethfinex opens in</h6>
                    <div id="buy-now-countdown" class="countdown">
                      <ul class="row">
                        <li class="col-3">
                          <article>
                            <span class="days">00</span>
                            <p class="days_ref">Days</p>
                          </article>
                        </li>
                        <li class="col-3">
                          <article>
                            <span class="hours">00</span>
                            <p class="hours_ref">Hours</p>
                          </article>
                        </li>
                        <li class="col-3">
                          <article>
                            <span class="minutes">00</span>
                            <p class="minutes_ref">Minutes</p>
                          </article>
                        </li>
                        <li class="col-3">
                          <article>
                            <span class="seconds">00</span>
                            <p class="seconds_ref">Seconds</p>
                          </article>
                        </li>
                      </ul>
                    </div>
                    <div class="row pre-register padding-bottom-10">
                      <div class="col">
                        <a target="_blank" href="https://www.ethfinex.com/" class="btn btn-inverse margin-left-0">Pre-register now</a>
                      </div>
                      <div class="col padding-left-0">
                        <div class="row">
                          <div class="col">
                            <span class="tooltip-right button-info button-info-top margin-top-0 margin-left-0">25 ETH only</span>
                            <span class="tooltiptext">The contribution amount is fixed for all at 25 ETH (no more, no less)</span>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <span class="tooltip-right button-info button-info-top margin-top-0 margin-left-0">5.76% discount</span>
                            <span class="tooltiptext">The price of the tokens will be discounted 5.76% from the main ICO price at TokenMarket</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="distri tokenmarket-section padding-bottom-10">
                    <div class="pre-register">
                      <h6>Invest up to 500 ETH</h6>
                      <div class="row padding-top-10">
                        <a target="_blank" href="https://tokenmarket.net/" class="margin-left-15 btn">Pre-register now</a>

                        <p class="margin-top-10 margin-left-15">on TokenMarket</p>
                        <p class="button-info margin-top-10 margin-left-15">Sale begins 03 Dec, 2018</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid header-bottom-container">
            <div class="container">
              <div class="row">
                <div class="col text-center padding-top-40 padding-bottom-40 d-flex">
                  <div class="buy-token-button-container">
                    <a target="_blank" href="https://fetch.ai/technical-introduction" class="btn">
                      <i class="fa fa-download" aria-hidden="true"></i>
                      White Paper
                </a>
                  </div>
                </div>

                <div class="col text-center padding-top-40 padding-bottom-40 d-flex">
                  <div class="buy-token-button-container">
                    <span class="scroll">
                      <a target="_blank" href="https://fetch.ai/public/pdf/Fetch-Token-Overview.pdf" class="btn">
                        <i class="fa fa-download" aria-hidden="true"></i>
                        Blue Paper
                  </a>
                    </span>
                  </div>
                </div>

                <div class="col text-center padding-top-40 padding-bottom-40 d-flex">
                  <div class="buy-token-button-container">
                    <a href="sale-strategy.html" class="btn">
                      <i class="fa fa-line-chart"></i>
                      Sale strategy
                </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>
    );
  }
}