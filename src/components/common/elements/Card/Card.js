import React from 'react';
import {Card as MuiCard} from '@mui/material';
import CardContent from '@mui/material/CardContent';

const Card = (props) => {
  //if attr not pass then set default value 
  const { minWidth = 275 } = props;

  return (
    <MuiCard sx={{ minWidth: 275 }}>
      <CardContent>{props.children}</CardContent>
    </MuiCard>
  );
};

export default Card;
