import React from 'react';
import { Box, Grid, Typography } from "@material-ui/core";

const CardGroup = ({ attributes }) => {
    return (<Grid container>
        {attributes.map((field) => getField(field))}
    </Grid>)
}

const getField = (field) => {
    const { label, value, xs, sm } = field;
    return (<Grid item xs={xs} sm={sm}>
        <Box p={1}>
            <Typography variant="subtitle2" align="left">{label}</Typography>
            <Typography variant="subtitle1" align="left">{value}</Typography>
        </Box>
    </Grid>)
}
export default CardGroup;