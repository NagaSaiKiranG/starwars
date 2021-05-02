import React, { useEffect, useState, useMemo } from 'react';
import { Box } from "@material-ui/core";
import ListComponent from './list.component';
import Skeleton from '@material-ui/lab/Skeleton';

const Planets = ({ loadingPlanets, planets }) => {
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (loadingPlanets === 'fetched') {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [loadingPlanets])

    const formatPlanetsData = () => {
        // console.log("people", people);
        const result = (planets.results || []);
        const list = [];
        result.map((per) => {
            const { name, population, url } = per;
            list.push({
                primary: name,
                secondary: `Population: ${population}`,
                cbParam: url
            })
            return null;
        })
        setCount(planets.count);
        // console.log("listItems", list);
        return list;
    }
    const listItems = useMemo(formatPlanetsData, [planets]);
    // const onclickCallBack = useCallback(() => { }, [planets]);
    if (loading) {
        return (<Box m={1}><Skeleton variant="rect" height={400} /></Box>)
    }
    return (<Box mx={0.5}>
        <Box pt={1} className="container">
            <ListComponent
                listItems={listItems}
                showSelected={true}
                listHeader="Planets"
                count={count}
                type={"planet"}
            />
        </Box>
    </Box>)
}

export default React.memo(Planets);