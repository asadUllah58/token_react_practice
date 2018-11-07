import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header class="sticky">
        <div class="content container">
          <div class="logo"> 
            <a href="index.html">
              <img class="img-responsive" src="../../public/images/logo.png" alt=""/>
            </a> 
          </div>
          <nav class="navbar ownmenu navbar-expand-lg">
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="nav">
                <li class="scroll active">
                  <a href="#hme">Home</a>
                </li>
                <li class="scroll"> 
                  <a href="#timeline">Timeline</a> 
                </li>
                <li class="scroll"> 
                  <a href="#key-state">Statistics</a> 
                </li>
                <li class="scroll"> 
                  <a href="#token">Tokenomics</a> 
                </li>
                <li class="scroll"> 
                  <a href="#vision">Vision</a> 
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}