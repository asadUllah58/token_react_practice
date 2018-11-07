import React, {Component} from 'react';
import './roadmap.scss';

export default class RoadMap extends Component{
  render(){
    return(
      <section class="road-map padding-top-100 padding-bottom-100">
        <div class="container">
          <h2 class="text-center">Development fund allocation</h2>
          <p class="text-center">Approximate division of development funds leading up to 2020 </p>
          <div class="row road-map-container">
            <div id="graphContainer"></div>
            <script src="js/graph.js"></script>
          </div>
        </div>
      </section>
    );
  }
}