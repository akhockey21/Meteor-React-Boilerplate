import React from 'react';
import { Grid, Breadcrumb, Button } from 'react-bootstrap';
import Paper from 'material-ui/Paper'

import './Index.scss';

const Index = () => (
  <div>
    <Paper zDepth={1}>
      <Breadcrumb>
        <Breadcrumb.Item active>
          Home
        </Breadcrumb.Item>
      </Breadcrumb>
    </Paper>
    <Grid>
      <Paper className="Index" zDepth={1}>
        <img
          src="https://s3-us-west-2.amazonaws.com/cleverbeagle-assets/graphics/email-icon.png"
          alt="Clever Beagle"
        />
        <h1>Pup</h1>
        <p>A boilerplate for products.</p>
        <div>
          <Button href="http://cleverbeagle.com/pup">Read the Docs</Button>
          <Button href="https://github.com/cleverbeagle/pup"><i className="fa fa-star" /> Star on GitHub</Button>
        </div>
        <footer>
          <p>Need help and want to stay accountable building your product? <a href="http://cleverbeagle.com?utm_source=pupappindex&utm_campaign=oss">Check out Clever Beagle</a>.</p>
        </footer>
      </Paper>
    </Grid>
  </div>
);

export default Index;
