import React, { useState, useEffect, useContext } from 'react';
import { Box, Typography } from "@material-ui/core";
import getFieldObj from '../utils/getFieldObj';
import CardGroup from './cardGroup.component';
import Skeleton from '@material-ui/lab/Skeleton';
import { SelectionContext } from './selectionContext';

const Banner = ({ species, planets, loadingSpecies, loadingPlanets }) => {

    const [attributes, setAttributes] = useState([]);
    const [planetAttributes, setPlanetAttributes] = useState([]);
    const { context } = useContext(SelectionContext);
    const {selectedPlanet, selectedSpecies} = context;
    useEffect(() => {
        if (!(planets?.results?.length)) {
            return
        }
        console.log("planets useeffect")
        let selection = [];
        if (selectedPlanet)
            selection = planets.results.filter((planet) => planet.url === selectedPlanet);
        else
            selection.push(planets.results[0]);
        const list = [];
        if (selection.length) {
            const planet = selection[0];
            const { climate, terrain, surface_water, gravity } = planet;
            list.push(getFieldObj('Climate', climate));
            list.push(getFieldObj('Terrain', terrain));
            list.push(getFieldObj('Water', surface_water));
            list.push(getFieldObj('Gravity', gravity));
        }
        setPlanetAttributes(list);
    }, [planets, selectedPlanet])

    useEffect(() => {
        if (!(species?.results?.length)) {
            return
        }
        console.log("sepecies useeffect")
        let selection = [];
        if (selectedSpecies)
            selection = species.results.filter((specie) => specie.url === selectedSpecies);
        else
            selection.push(species.results[0]);
        // setAlien(selection.length ? selection[0] : {});
        const list = [];
        if (selection.length) {
            const alien = selection[0];
            const { skin_colors, language, designation, eye_colors } = alien;
            list.push(getFieldObj('Skin', skin_colors));
            list.push(getFieldObj('Eye color', eye_colors));
            list.push(getFieldObj('Designation', designation));
            list.push(getFieldObj('Language', language));
        }
        setAttributes(list);
    }, [species, selectedSpecies])
    if (![loadingPlanets, loadingSpecies].includes("fetched")) {
        return (<Skeleton variant="rect" height={150} />)
    }
    // console.log('selectedAttributes', context);
    return (<Box p={0.5} className="container">
        <Box pl={1}><Typography variant="subtitle1" align="left" style={{ fontWeight: 'bold' }}>Characteristics</Typography></Box>
        {/* <Box>{selectedAttributes}</Box> */}
        <CardGroup attributes={[...attributes, ...planetAttributes]} />
    </Box>)
}

export default React.memo(Banner);