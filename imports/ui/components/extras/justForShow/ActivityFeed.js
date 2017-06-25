import React, { Component } from 'react';

class ActivityFeed extends Component {
  render() {
    return (
      <div className="timeline-body">
        <div className="timeline m-border">
          <div className="timeline-item">
            <div className="item--content">
              <div className="text--muted">Just now</div>
              <p>Finished task #features 4.</p>
            </div>
          </div>
          <div className="timeline-item border-info">
            <div className="item--content">
              <div className="text--muted">11:30</div>
              <p>@Jessi retwit your post</p>
            </div>
          </div>
          <div className="timeline-item border-warning border-l">
            <div className="item--content">
              <div className="text--muted">10:30</div>
              <p>Call to customer #Jacob and discuss the detail.</p>
            </div>
          </div>
          <div className="timeline-item border-warning">
            <div className="item--content">
              <div className="text--muted">3 days ago</div>
              <p>Jessi commented your post.</p>
            </div>
          </div>
          <div className="timeline-item border-danger">
            <div className="item--content">
              <div className="text--muted">Thu, 10 Mar</div>
              <p>Trip to the moon</p>
            </div>
          </div>
          <div className="timeline-item border-info">
            <div className="item--content">
              <div className="text--muted">Sat, 5 Mar</div>
              <p>Prepare for presentation</p>
            </div>
          </div>
          <div className="timeline-item border-danger">
            <div className="item--content">
              <div className="text--muted">Sun, 11 Feb</div>
              <p>Jessi assign you a task #Mockup Design.</p>
            </div>
          </div>
          <div className="timeline-item border-info">
            <div className="item--content">
              <div className="text--muted">Thu, 17 Jan</div>
              <p>Follow up to close deal</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ActivityFeed;
