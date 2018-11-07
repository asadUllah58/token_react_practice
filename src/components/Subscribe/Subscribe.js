import React, {Component} from 'react';
import './subscribe.scss';

export default class Subscribe extends Component{
  render(){
    return(
      <section class="community-sec padding-top-100 padding-bottom-100">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="news-letter">
                <h2 class="align-center">Subscribe to get latest updates</h2>
                <form>
                  <input type="email" placeholder="Enter your email address" required/>
                  <button class="btn-inverse" type="submit">SEND</button>
                </form>
              </div>
            </div>
          </div>
          <div class="row padding-top-20">
            <div class="col text-center">
              <a class="btn"  target="_blank" href="https://fetch.ai/faq">Faqs </a>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <ul class="list-inline mb-0 text-center margin-top-20">
                <li class="list-inline-item">
                  <a class="text-center" target="_blank" href="https://t.me/fetch_ai">
                    <i class="fab fa-telegram"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a target="_blank" class=" btn-social text-center" href="https://twitter.com/fetch_ai?lang=en">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a target="_blank" class="btn-social text-center" href="https://www.linkedin.com/company/fetch-ai/">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>

                <li class="list-inline-item">
                  <a target="_blank" class="btn-social text-center" href="https://www.youtube.com/c/FetchAI">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>

                <li class="list-inline-item">
                  <a target="_blank" class="btn-social text-center" href="https://medium.com/fetch-ai">
                    <i class="fab fa-medium" aria-hidden="true"></i>
                  </a>
                </li>

                <li class="list-inline-item">
                  <a target="_blank" class="btn-social text-center rounded-circle" href="https://github.com/fetchai">
                    <i class="fab fa-github"></i>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}