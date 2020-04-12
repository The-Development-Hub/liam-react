import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { ProductsToolbar, ProductCard } from './components';
import mockData from './data';
import Api from "../../services/Api";
const axios = require('axios');
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const AssetsList = () => {
  const classes = useStyles();

 /* const [products] = useState(mockData);*/

    axios.get('https://liam-cripto.herokuapp.com/login?username=SidTheKidz&password=SidTheKid')
        .then(function (response) {
            // handle success
            console.log(response);
        })


    new Api('getAllAssets').index().then((res) => {
        //this.setState({dataSource : res.data.data });
        console.log(res.data);

        let assets = [];
        localStorage.setItem("assets", JSON.stringify(res.data));
    });

    const [...products] = JSON.parse(localStorage.getItem("assets"));

  return (
    <div className={classes.root}>
      <ProductsToolbar />
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {products.map(product => (
            <Grid
              item
              key={product.id}
              lg={4}
              md={6}
              xs={12}
            >
              <ProductCard product={product} />
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

export default AssetsList;
