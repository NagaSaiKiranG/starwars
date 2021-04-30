import React, { useState, useEffect } from 'react';
import { Box, Typography } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';
import getFieldObj from '../utils/getFieldObj';
import CardGroup from './cardGroup.component';
import CardTitle from './cardTitle.component';

const FilmDetials = ({ film }) => {
    const [attributes, setAttributes] = useState([])
    useEffect(()=>{
        const list = [];
        if (!film) {
            return;
        }
        list.push(getFieldObj('Director', film.director));
        list.push(getFieldObj('Characters', film.characters.length));
        list.push(getFieldObj('Starships', film.starships.length));
        list.push(getFieldObj('Planets', film.planets.length));
        list.push(getFieldObj('Species', film.species.length));
        list.push(getFieldObj('Vehicles', film.vehicles.length));
        list.push(getFieldObj('Produces', film.producer, 4, 6));
        setAttributes(list);
    }, [film])
    if (!film) {
        return (<>
        <Skeleton variant="rect"  height={100} />
        <Box p={0.5}></Box>
        <Skeleton variant="rect"  height={100} />
        <Box p={0.5}></Box>
        </>)
    }
    const featured = <CardTitle title="Featured"/>;
    console.log("fiber node", featured);
    return (<>
        <Box p={0.5} className="container">
            <Box pl={1}>{featured}</Box>
            <CardGroup attributes={attributes} />
       </Box>
        <Box p={0.5}></Box>
        <Box p={1} className="container">
            <Box pl={1} pb={0.5}>
                <CardTitle title="Synopsis"/>
            </Box>
            <Box className="synopsis"><Typography variant="body2">{film.opening_crawl}</Typography></Box>
        </Box>
        <Box p={0.5}></Box>
    </>)
}

export default React.memo(FilmDetials);