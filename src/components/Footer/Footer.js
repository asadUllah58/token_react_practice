import React, {Component} from 'react';
import './footer.scss';
export default class Footer extends Component{
  render(){
    return (
      <footer id="contact">
        <div className="rights">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>© 2018 Fetch.ai. All Rights Reserved.</p>
              </div>
              <div className="col-md-6 text-right">
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}