import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Api from '../../services/Api';

import { ProductsToolbar, ProductCard } from './components';
//import mockData from './data';
const axios = require('axios');

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2),

  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const ProductList = () => {
  const classes = useStyles();


    axios.get('https://liam-cripto.herokuapp.com/login?username=SidTheKidz&password=SidTheKid')
        .then(function (response) {
            // handle success
            console.log(response);
        })

   /* axios.get('https://liam-cripto.herokuapp.com/getAllCourses')
        .then(function (res) {
            console.log(res.data);

            let courses = [];
            localStorage.setItem("courses", JSON.stringify(res.data));
        })*/


    new Api('getAllCourses').index().then((res) => {
        //this.setState({dataSource : res.data.data });
        console.log(res.data);

        let courses = [];
        localStorage.setItem("courses", JSON.stringify(res.data));
    });


    const [...courses] = JSON.parse(localStorage.getItem("courses"));

    return (
    <div className={classes.root}>
      <ProductsToolbar />
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {courses.map(course => (
            <Grid
              item
              key={course.limas}
              lg={4}
              md={6}
              xs={12}
            >

              <ProductCard course={course} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.pagination}>

        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ProductList;
