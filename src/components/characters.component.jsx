import React, {useEffect, useState, useMemo, useCallback} from 'react';
import { Box } from "@material-ui/core";
import ListComponent from './list.component';
import Skeleton from '@material-ui/lab/Skeleton';

const Characters = ({loadingPeople, people}) => {
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (loadingPeople === 'fetched') {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [loadingPeople])

    const formatPeopleData = () => {
        // console.log("people", people);
        const result = (people.results || []);
        const list = [];
        result.map((per) => {
            const {name, gender, skin_color, mass, url} = per;
            list.push({
                primary: name,
                secondary: `${gender}, ${skin_color}, mass: ${mass}`,
                cbParam: url
            })
            return null;
        })
        setCount(people.count);
        // console.log("listItems", list);
        return list;
    }
    const listItems = useMemo(formatPeopleData, [people]);
    const onClick = () => {};
    const onclickCallBack = useCallback(() => onClick, []);

    if (loading) {
        return (<Box m={1}><Skeleton variant="rect"  height={400} /></Box>)
    }
    return(<Box mx={0.5}>
        <Box pt={1} className="container">
            <ListComponent listItems={listItems} onClick={onclickCallBack} showSelected={false} listHeader="Lead Characters" count={count}/>
        </Box>
    </Box>)
}

export default React.memo(Characters);