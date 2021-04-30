import React from 'react';
import { Typography } from "@material-ui/core";

const CardTitle = ({ title }) => {
    return (<Typography variant="subtitle1" align="left" style={{fontWeight: 'bold'}}>{title}</Typography>)
}

export default CardTitle;