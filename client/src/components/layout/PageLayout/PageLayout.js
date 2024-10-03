import React from 'react';
import classes from './PageLayout.module.css';
import { Breadcrumbs, Link, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const PageLayout = (props) => {
  const {
    breadcrumbs = [],
  } = props;

  const separator = <span style={{ color: 'white' }}>›</span>;

  return (
    <>
      <Typography variant="h4" className={classes.title}>
        {props.pageTitle}
      </Typography>

      <div className={classes.bread}>
        {breadcrumbs.length > 0 && (
          <Breadcrumbs separator={separator} aria-label="breadcrumb" className={classes.breadcrumbs}>
            {breadcrumbs.map((crumb, index) => (
              index === breadcrumbs.length - 1 ? (
                <Typography className={classes.crumbText} key={crumb.label}>
                  {crumb.label}
                </Typography>
              ) : (
                <Link className={classes.crumbLink} href={crumb.href} key={crumb.label}>
                  {crumb.label}
                </Link>
              )
            ))}
          </Breadcrumbs>
        )}
      </div>

      <div className={classes.body}>
        {props.children}
      </div>
    </>
  );
};

export { PageLayout };