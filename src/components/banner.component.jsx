import React, { useState, useEffect } from 'react';
import { Box, Typography } from "@material-ui/core";
import getFieldObj from '../utils/getFieldObj';
import CardGroup from './cardGroup.component';
import Skeleton from '@material-ui/lab/Skeleton';

const Banner = ({ species, planets, planetURL, speciesURL, loadingSpecies, loadingPlanets }) => {

    const [attributes, setAttributes] = useState([]);
    const [planetAttributes, setPlanetAttributes] = useState([]);
    
    useEffect(() => {
        if (!(planets?.results?.length)) {
            return
        }
        let selection = [];
        if (planetURL)
            selection = planets.results.filter((planet) => planet.url === planetURL);
        else 
            selection.push(planets.results[0]);
        const list = [];
        if (selection.length) {
            const planet = selection[0];
            const {climate, terrain, surface_water, gravity} = planet;
            list.push(getFieldObj('Climate', climate));
            list.push(getFieldObj('Terrain', terrain));
            list.push(getFieldObj('Water', surface_water));
            list.push(getFieldObj('Gravity', gravity));
        }
        setPlanetAttributes(list);
    }, [planets, planetURL])

    useEffect(() => {
        if (!(species?.results?.length)) {
            return
        }
        let selection = [];
        if (speciesURL)
            selection = species.results.filter((specie) => specie.url === speciesURL);
        else 
            selection.push(species.results[0]);
        // setAlien(selection.length ? selection[0] : {});
        const list = [];
        if (selection.length) {
            const alien = selection[0];
            const {skin_colors, language, designation, eye_colors} = alien;
            list.push(getFieldObj('Skin', skin_colors));
            list.push(getFieldObj('Eye color', eye_colors));
            list.push(getFieldObj('Designation', designation));
            list.push(getFieldObj('Language', language));
        }
        setAttributes(list);
    }, [species, speciesURL])
    if (![loadingPlanets, loadingSpecies].includes("fetched")) {
        return (<Skeleton variant="rect"  height={150} />)
    }
    return (<Box p={0.5} className="container">
        <Box pl={1}><Typography variant="subtitle1" align="left" style={{fontWeight: 'bold'}}>Characteristics</Typography></Box>
        <CardGroup attributes={[...attributes, ...planetAttributes]} />
    </Box>)
}

export default React.memo(Banner);