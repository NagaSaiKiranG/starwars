import React, { useEffect, useState, useMemo } from 'react';
import { Box } from "@material-ui/core";
import ListComponent from './list.component';
import Skeleton from '@material-ui/lab/Skeleton';

const Species = ({ loadingSpecies, species }) => {
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (loadingSpecies === 'fetched') {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [loadingSpecies])

    const formatSpeciesData = () => {
        // console.log("people", people);
        const result = (species.results || []);
        const list = [];
        result.map((per) => {
            const { name, url, classification } = per;
            list.push({
                primary: name,
                secondary: `Classification: ${classification}`,
                cbParam: `${url}`
            })
            return null;
        })
        setCount(species.count);
        // console.log("listItems", list);
        return list;
    }
    const listItems = useMemo(formatSpeciesData, [species]);
    // const onclickCallBack = useCallback(() => { }, [species]);
    if (loading) {
        return (<Box m={1}><Skeleton variant="rect"  height={400} /></Box>)
    }
    return (<Box mx={0.5}>
        {/* <Grid container>
            <Grid item xs={5}>
                
            </Grid>
            <Grid item xs={4}>

            </Grid>
        </Grid> */}
        <Box pt={1} className="container">
            <ListComponent
            listItems={listItems}
            showSelected={true}
            listHeader="Species"
            count={count}
            type={"species"}
            />
        </Box>
    </Box>)
}

export default React.memo(Species);