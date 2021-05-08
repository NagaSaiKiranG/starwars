import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Box, Grid, Typography } from "@material-ui/core";
import useFetch from '../utils/useFetch';
import ListComponent from './list.component';
import FilmDetails from './details.component';
import Characters from './characters.component';
import Species from './species.component';
import Planets from './planets.component';
import Banner from './banner.component';
// import SVG from './animation';
const FilmsList = (props) => {
    const [status, data] = useFetch('films/');
    const [loadingPeople, people] = useFetch('people/');
    const [loadingPlanets, planets] = useFetch('planets/');
    const [loadingSpecies, species] = useFetch('species/');
    const [listItems, setListItems] = useState([]);
    const [filmSelected, setFilmSelected] = useState(null);
    const [planetSelected, setPlanetSelected] = useState(null);
    const [speciesSelected, setSpeciesSelected] = useState(null);
    useEffect(() => {
        const { results } = data;
        const list = [];
        results?.map((item) => {
            const { title, release_date, episode_id } = item;
            list.push({
                primary: title,
                secondary: `Release Date: ${release_date}`,
                cbParam: episode_id
            })
            return null;
        })
        setListItems(list);
        if (list.length) {
            setFilmSelected(data?.results[0]);
        }
    }, [data])

    const onclick = useCallback((episode_id) => {
        setFilmSelected(data.results.filter((film) => film.episode_id === episode_id)[0]);
    }, [setFilmSelected, data])

    const onClickOfSpecies = useCallback((url) => {
        setSpeciesSelected(url);
    }, [setSpeciesSelected])

    const onClickOfPlanets = useCallback((url) => {
        setPlanetSelected(url);
    }, [setPlanetSelected])

    // const sample = useMemo(() => { }, []);
    // const sample = () => {};
    const sample = useMemo(() => ["a", "b"], []);

    return (<>
        {/* <Box pb={1} className="container">
            <Typography variant="h5">Star Wars</Typography>
        </Box> */}
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <ListComponent listItems={listItems} onClick={onclick} listHeader="Films List" />
            </Grid>
            <Grid item xs={8}>
                <FilmDetails film={filmSelected} sample={sample} />
                <Banner
                    planetURL={planetSelected}
                    planets={planets}
                    speciesURL={speciesSelected}
                    species={species}
                    loadingPlanets={loadingPlanets}
                    loadingSpecies={loadingSpecies}
                    sample={sample}
                />
            </Grid>
        </Grid>
        <Box p={2}></Box>
        <Grid container spacing={1}>
            <Grid item xs={4}>
                <Characters people={people} loadingPeople={loadingPeople} sample={sample} />
            </Grid>
            <Grid item xs={4}>
                <Species loadingSpecies={loadingSpecies} species={species} onClick={onClickOfSpecies} sample={sample} />
            </Grid>
            <Grid item xs={4}>
                <Planets loadingPlanets={loadingPlanets} planets={planets} onClick={onClickOfPlanets} sample={sample} />
            </Grid>
        </Grid>
    </>)
}

export default FilmsList;
