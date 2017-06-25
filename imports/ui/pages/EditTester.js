import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import Testers from '../../api/testers/testers';
import TesterEditor from '../components/TesterEditor';
import NotFound from './NotFound';
import container from '../../modules/container';

import { Col, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import ActivityFeed from '../components/extras/justForShow/ActivityFeed';
import TestersList from '../components/TestersList';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  height: 'auto',
  width: '100%',
  padding: 20,
  display: 'inline-block',
  marginTop: 10,
};

const EditTester= ({ tester }) => (tester ? (
    <Row>
      <Col xs={12} lg={8} lgOffset={2}>
        <Paper zDepth={1}>
          <Toolbar style={{color: "#ffffff", backgroundColor: "#0052A5"}}>
            <ToolbarGroup firstChild={true}>
              <ToolbarTitle style={{paddingLeft: 20, color: "#ffffff"}} text="Edit Tester" />
            </ToolbarGroup>
            <ToolbarGroup>
              <ToolbarSeparator />
              <RaisedButton label="Do Something" primary={false} style={{margin: 5}} />
            </ToolbarGroup>
          </Toolbar>
        </Paper>
      </Col>
      <Col xs={12} md={9} lg={6} lgOffset={2}>
        <Paper style={style} zDepth={1}>
          <Row>
            <Col xs={12}>
              <h4 className="pull-left">Tester Information</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <TesterEditor tester={ tester }/>
            </Col>
          </Row>
        </Paper>
      </Col>
      <Col xs={12} md={3} lg={2} >
        <Paper style={style} zDepth={1}>
          <Row>
            <Col xs={12}>
              <h4 className="pull-left">Activity Log</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ActivityFeed />
            </Col>
          </Row>
        </Paper>
      </Col>
    </Row>
) : <NotFound />);

EditTester.propTypes = {
    tester: PropTypes.object,
};

export default container((props, onData) => {
    const testerId = props.params._id;
    const subscription = Meteor.subscribe('testers.view', testerId);

    if (subscription.ready()) {
        const tester = Testers.findOne(testerId);
        onData(null, { tester });
    }
}, EditTester);
