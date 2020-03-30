import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import Views from '@material-ui/icons/Visibility';

const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 150,
    width: '100%',
    margin: '0 0',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'left'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'left'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  }
}));

const ProductCard = props => {
  const { className, course, ...rest } = props;

  const classes = useStyles();

    const viewCourseHandler = (data) => {
        //console.log(title);
        //alert(data);
        //let current_course = [];
        localStorage.setItem("current_course", JSON.stringify(data));

        window.location.href='/course-single';
    };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent style={{height: "280px"}}>
        <div className={classes.imageContainer}>
          <img
            alt="Course_image"
            className={classes.image}
            src={course.imageUrl}
          />
        </div>
        <Typography
          align="center"
          gutterBottom
          variant="h4"
          style={{paddingTop: "12px"}}
          onClick={viewCourseHandler.bind(this, course)}
        >
          {course.title}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
            {course.description}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid
          container
          justify="space-between"
        >
          <Grid
            className={classes.statsItem}
            item
          >
            {/*<AccessTimeIcon className={classes.statsIcon} />*/}
            <Typography
              display="inline"
              variant="body2"
             >
                <span style={{fontWeight: '600', fontSize: '19px'}}>L</span> {course.limas}
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <Views className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              {course.totalDownloads} Views
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
    course: PropTypes.object.isRequired
};

export default ProductCard;
