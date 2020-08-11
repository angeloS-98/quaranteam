import React, { Component } from 'react';
import './stylesheet/FAQ.css'

class FAQ extends Component{
    render(){
        return (
          <section class="clearfix mt-3" aria-label="FAQ">
            <div class="container">
              <h3 class="text-center">
                <strong>Frequently Asked Questions</strong>
              </h3>

              <div
                class="mt-4"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div class="panel-default">
                  <div class="panel-heading p-3 mb-3" role="tab" id="heading0">
                    <h4 class="panel-title">
                      <a
                        class="d-flex collapsed justify-content-between"
                        role="button"
                        title=""
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse0"
                        aria-expanded="true"
                        aria-controls="collapse0"
                      >
                        <i>What are the benefits of Solodev CMS?</i>
                        <i class="fas fa-sort-down"></i>
                      </a>
                    </h4>
                  </div>

                  <div
                    id="collapse0"
                    class="collapse"
                    role="tabpanel"
                    aria-labelledby="heading0"
                  >
                    <div class="px-3 mb-4">
                      <p>
                        With Solodev CMS, you and your visitors will benefit
                        from a finely-tuned technology stack that drives the
                        highest levels of site performance, speed and engagement
                        - and contributes more to your bottom line. Our users
                        fell in love with:
                      </p>

                      <ul>
                        <li>
                          Light speed deployment on the most secure and stable
                          cloud infrastructure available on the market.
                        </li>
                        <li>
                          Scalability – pay for what you need today and add-on
                          options as you grow.
                        </li>
                        <li>
                          All of the bells and whistles of other enterprise CMS
                          options but without the design limitations - this CMS
                          simply lets you realize your creative visions.
                        </li>
                        <li>
                          Amazing support backed by a team of Solodev pros –
                          here when you need them.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="panel-default">
                  <div class="panel-heading p-3 mb-3" role="tab" id="heading1">
                    <h4 class="panel-title">
                      <a
                        class="d-flex collapsed justify-content-between"
                        role="button"
                        title=""
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse1"
                        aria-expanded="true"
                        aria-controls="collapse2"
                      >
                        <i>
                          How easy is it to build a website with Solodev CMS?
                        </i>
                        <i class="fas fa-sort-down"></i>
                      </a>
                    </h4>
                  </div>

                  <div
                    id="collapse1"
                    class="collapse"
                    role="tabpanel"
                    aria-labelledby="heading1"
                  >
                    <div class="panel-body px-3 mb-4">
                      <p>
                        Building a website is extremely easy. With a working
                        knowledge of HTML and CSS you will be able to have a
                        site up and running in no time.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel-default">
                  <div class="panel-heading p-3 mb-3" role="tab" id="heading2">
                    <h4 class="panel-title">
                      <a
                        class="d-flex collapsed justify-content-between"
                        role="button"
                        title=""
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse2"
                        aria-expanded="true"
                        aria-controls="collapse2"
                      >
                        <i>What is the uptime for Solodev CMS?</i>
                        <i class="fas fa-sort-down"></i>
                      </a>
                    </h4>
                  </div>

                  <div
                    id="collapse2"
                    class="collapse"
                    role="tabpanel"
                    aria-labelledby="heading2"
                  >
                    <div class="panel-body px-3 mb-4">
                      <p>
                        Using Amazon AWS technology which is an industry leader
                        for reliability you will be able to experience an uptime
                        in the vicinity of 99.95%.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel-default">
                  <div class="panel-heading p-3 mb-3" role="tab" id="heading3">
                    <h4 class="panel-title">
                      <a
                        class="d-flex collapsed justify-content-between"
                        role="button"
                        title=""
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse3"
                        aria-expanded="true"
                        aria-controls="collapse3"
                      >
                        <i>
                          Solodev CMS handle multiple websites for my company?
                        </i>
                        <i class="fas fa-sort-down"></i>
                      </a>
                    </h4>
                  </div>

                  <div
                    id="collapse3"
                    class="collapse"
                    role="tabpanel"
                    aria-labelledby="heading3"
                  >
                    <div class="px-3 mb-4">
                      <p>
                        Yes, Solodev CMS is built to handle the needs of any
                        size company. With our Multi-Site Management, you will
                        be able to easily manage all of your websites.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default FAQ;