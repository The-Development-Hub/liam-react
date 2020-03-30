import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  Budget,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders
} from './components';
import Api from "../../services/Api";
const axios = require('axios');
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

    axios.get('http://localhost:3000/login?username=SidTheKidz&password=SidTheKid')
        .then(function (response) {
            // handle success
            console.log(response);
        })


    new Api('getEverything').index().then((res) => {
        //this.setState({dataSource : res.data.data });
        console.log(res.data);

        let user_data = [];
        localStorage.setItem("user_data", JSON.stringify(res.data.user));
    });

    //const [...courses] = JSON.parse(localStorage.getItem("courses"));

    const data = JSON.parse(localStorage.getItem("user_data"));

    const totalLiams = data.totalLimas;
    const totalAssets = data.assets.length;
    const courseProgress = data.courses[0].progress;
    const latestAssets = data.assets;
    const latestActivities = data.transactions;

    //alert(totalLiams);
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
          >

              <TotalProfit totalLiams={totalLiams} />

          </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Budget totalAssets={totalAssets} />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TasksProgress courseProgress={courseProgress} />
        </Grid>

        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestSales />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <UsersByDevice />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <LatestProducts latestAssets={latestAssets} />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestOrders latestActivities={latestActivities} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
