import React from 'react';
import { Link, Typography, Breadcrumbs } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

export default function Breadcrumb(props) {
  const breadcrumbs = useBreadcrumbs(props.routes);

  return(
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.map(({match, breadcrumb}, index) => {
        let isLast = index === breadcrumbs.length - 1;

        return(
          <LinkRouter key={match.url} to={match.url}>
            <Typography color={isLast ? 'primary' : 'inherit'}>
              {breadcrumb}
            </Typography>
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}