import React, {Component} from 'react';
import './development.scss';

export default class Development extends Component{
  render(){
    return(
      <section class="light-bg dev-activ text-center padding-top-100 padding-bottom-100" id="vision">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <h1>What we're building</h1>
            </div>
          </div>
          <div class="row">
            <div class="col vision-videowrapper text-center d-flex">
              <iframe width="1252" height="704" 
                src="https://www.youtube.com/embed/1aJKtSVkhlw" frameborder="0" allow="autoplay; encrypted-media"
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
}