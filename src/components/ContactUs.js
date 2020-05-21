import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <h3 className="lead">Contact Details</h3>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4> {resumeData.skype}</h4>
              <h4>{resumeData.email}</h4>
              <h4>{resumeData.address}</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
