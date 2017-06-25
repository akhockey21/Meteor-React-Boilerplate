import React from 'react';
import { browserHistory } from 'react-router';
import { Col, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { red500, blue500 } from 'material-ui/styles/colors';

const style = {
  height: 'auto',
  width: '100%',
  textAlign: 'center',
  display: 'inline-block',
};

const buttonStyle = {
  backgroundColor: blue500,
  padding: 20,
  height: 'auto',
  width: '100%',
  color: '#ffffff',
  textAlign: 'center',
  display: 'inline-block',
};

const styles = {
  cardStylePrimary : {
    backgroundColor: blue500,
    padding: 20,
    height: 'auto',
    width: '100%',
    color: '#ffffff',
    textAlign: 'center',
    display: 'inline-block',
  },
  cardStyleOpposite : {
    backgroundColor: red500,
    padding: 20,
    height: 'auto',
    width: '100%',
    color: '#ffffff',
    textAlign: 'center',
    display: 'inline-block',
  },
  cardHeaderStyle: {
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 0
  },
  cardTextColor: '#ffffff',
};

const Index = () => (
  <Col xs={12} sm={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
    <Row>
      <Col xs={12} sm={12}>
        <div className="widget p-md clearfix"><div className="pull-left"><h3 className="widget-title">Today's Jobs</h3><small className="text-color">Total jobs</small></div><span className="pull-right fz-lg fw-500 counter" data-plugin="counterUp">102</span></div>
      </Col>
      <Col xs={12} sm={12}>
        <div className="widget p-md clearfix"><div className="pull-left"><h3 className="widget-title">Scheduling</h3><small className="text-color">Todo List</small></div><span className="pull-right fz-lg fw-500 counter" data-plugin="counterUp">325</span></div>
      </Col>
    </Row>
    <Row>
      <Col xs={6} sm={12} md={3}>
        <div className="widget stats-widget"><div className="widget-body clearfix"><div className="pull-left"><h3 className="widget-title text-primary"><span className="counter" data-plugin="counterUp">66</span></h3><small className="text-color">Job Backlog</small></div><span className="pull-right big-icon watermark"><i className="fa fa-paperclip" /></span></div><footer className="widget-footer bg-primary"><small>% charge</small> <span className="small-chart pull-right" data-plugin="sparkline" data-options="[4,3,5,2,1], { type: 'bar', barColor: '#ffffff', barWidth: 5, barSpacing: 2 }"><canvas width={33} height={16} style={{display: 'inline-block', width: 33, height: 16, verticalAlign: 'top'}} /></span></footer></div>
      </Col>
      <Col xs={6} sm={12} md={3}>
        <div className="widget stats-widget"><div className="widget-body clearfix"><div className="pull-left"><h3 className="widget-title text-danger"><span className="counter" data-plugin="counterUp">12</span></h3><small className="text-color">Total Tests Overdue</small></div><span className="pull-right big-icon watermark"><i className="fa fa-ban" /></span></div><footer className="widget-footer bg-danger"><small>% charge</small> <span className="small-chart pull-right" data-plugin="sparkline" data-options="[1,2,3,5,4], { type: 'bar', barColor: '#ffffff', barWidth: 5, barSpacing: 2 }"><canvas width={33} height={16} style={{display: 'inline-block', width: 33, height: 16, verticalAlign: 'top'}} /></span></footer></div>
      </Col>
      <Col xs={6} md={3}>
        <div className="widget stats-widget"><div className="widget-body clearfix"><div className="pull-left"><h3 className="widget-title text-success"><span className="counter" data-plugin="counterUp">8.378</span></h3><small className="text-color">Time and Materials</small></div><span className="pull-right big-icon watermark"><i className="fa fa-unlock-alt" /></span></div><footer className="widget-footer bg-success"><small>% charge</small> <span className="small-chart pull-right" data-plugin="sparkline" data-options="[2,4,3,4,3], { type: 'bar', barColor: '#ffffff', barWidth: 5, barSpacing: 2 }"><canvas width={33} height={16} style={{display: 'inline-block', width: 33, height: 16, verticalAlign: 'top'}} /></span></footer></div>
      </Col>
      <Col xs={6} md={3}>
        <div className="widget stats-widget"><div className="widget-body clearfix"><div className="pull-left"><h3 className="widget-title text-warning"><span className="counter" data-plugin="counterUp">3.490</span></h3><small className="text-color">Device Inventory</small></div><span className="pull-right big-icon watermark"><i className="fa fa-file-text-o" /></span></div><footer className="widget-footer bg-warning"><small>% charge</small> <span className="small-chart pull-right" data-plugin="sparkline" data-options="[5,4,3,5,2],{ type: 'bar', barColor: '#ffffff', barWidth: 5, barSpacing: 2 }"><canvas width={33} height={16} style={{display: 'inline-block', width: 33, height: 16, verticalAlign: 'top'}} /></span></footer></div>

      </Col>
      <Col xs={12} md={3}>
        <Paper zDepth={1} style={buttonStyle}>
          <h2 style={{ color: '#fff' }}>Visual Reports</h2>
          <p style={{ color: '#fff' }}>Charts.</p>
          <p>
            <a
              href="https://themeteorchef.com/base"
              role="button"
              style={{ color: '#fff' }}
            >Read the Documentation</a>
          </p>
          <p style={{ fontSize: '16px', color: '#fff' }}>Currently at v4.11.0</p>
          <RaisedButton
            onTouchTap={() => (browserHistory.push('/documents'))}
            primary={false}
            label="Start"
          />
        </Paper>
      </Col>
      <Col xs={12} md={3}>
        <Paper zDepth={1} style={buttonStyle}>
          <h2 style={{ color: '#fff' }}>Maps and Routes</h2>
          <p style={{ color: '#fff' }}>Starting point.</p>
          <p>
            <a
              href="https://themeteorchef.com/base"
              role="button"
              style={{ color: '#fff' }}
            >Read the Documentation</a>
          </p>
          <p style={{ fontSize: '16px', color: '#fff' }}>Currently at v4.11.0</p>
          <RaisedButton
            onTouchTap={() => (browserHistory.push('/documents'))}
            primary={false}
            label="Start"
          />
        </Paper>
      </Col>
      <Col xs={12} md={3}>
        <Paper zDepth={1} style={buttonStyle}>
          <h2 style={{ color: '#fff' }}>Week at a Glance</h2>
          <p style={{ color: '#fff' }}>Starting point.</p>
          <p>
            <a
              href="https://themeteorchef.com/base"
              role="button"
              style={{ color: '#fff' }}
            >Read the Documentation</a>
          </p>
          <p style={{ fontSize: '16px', color: '#fff' }}>Currently at v4.11.0</p>
          <RaisedButton
            onTouchTap={() => (browserHistory.push('/documents'))}
            primary={false}
            label="Start"
          />
        </Paper>
      </Col>
      <Col xs={12} md={3}>
        <Paper zDepth={1} style={buttonStyle}>
          <h2 style={{ color: '#fff' }}>Base & Material UI</h2>
          <p style={{ color: '#fff' }}>A starting point for Meteor applications.</p>
          <p>
            <a
              href="https://themeteorchef.com/base"
              role="button"
              style={{ color: '#fff' }}
            >Read the Documentation</a>
          </p>
          <p style={{ fontSize: '16px', color: '#fff' }}>Currently at v4.11.0</p>
          <RaisedButton
            onTouchTap={() => (browserHistory.push('/documents'))}
            primary={false}
            label="Start"
          />
        </Paper>
      </Col>
    </Row>
  </Col>
);

export default Index;
