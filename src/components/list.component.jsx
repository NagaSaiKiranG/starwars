import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Box, Typography } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import React, { useContext } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
// import { blueGrey } from '@material-ui/core/colors';
// import ListSubheader from '@material-ui/core/ListSubheader';
import { SelectionContext } from './selectionContext';



const ListComponent = ({ listItems, onClick, showSelected = true, listHeader = '', count, type }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const { dispatch } = useContext(SelectionContext);

    const onSelection = (cbParam, index) => {
        if (onClick) {
            onClick(cbParam)
        }
        if (showSelected) {
            setSelectedIndex(index)
        }
        if (type) {
            dispatch({type, data: cbParam})
        }
    }
    console.log("list component render")
    return (<Box className="container" >
        <Box pl={2} style={{ display: 'flex' }}>
            <Box style={{ flexGrow: 1 }}>
                <Typography variant="subtitle2" align="left" style={{ fontWeight: 'bold', fontSize: 16 }}>{listHeader}</Typography>
            </Box>
            {count ? <Box style={{ width: 40, marginRight: 8, borderRadius: 50, backgroundColor: 'blueviolet', color: 'white' }}>
                {count}
            </Box> : null}
        </Box>
        {
            listItems.length ? <List>
                {listItems.map((listItem, index) => {
                    const { primary, secondary, cbParam } = listItem;
                    return (<ListItem
                        divider={true}
                        selected={showSelected ? selectedIndex === index : false}
                        onClick={() => onSelection(cbParam, index)}
                        key={cbParam}
                    >
                        <ListItemText primary={primary} secondary={secondary} />
                    </ListItem>)
                })}
            </List> : <Skeleton variant="rect" height={350} />
        }

    </Box>)
}

export default React.memo(ListComponent);



// const [sortedList, setSortedList] = React.useState([]);
// React.useEffect(() => {
//     setSortedList(listItems);
// }, [listItems])
// const handleChange = (e) => {
//     const val = e.target.value;
//     const list = [ ...listItems];
//     if (val === 'name') {
//         list.sort((a,b) => a.primary.localeCompare(b.primary));
//         // console.log(list);
//         setSortedList(list);
//     } else if (val === 'episode') {
//         list.sort((a,b) => a.episode_id.localeCompare(b.episode_id));
//         // console.log(list);
//         setSortedList(list);
//     } else {
//         setSortedList(listItems);
//     }
// }
// console.log("list component render")

// <FormControl className={classes.formControl}>
            //     <Select
            //         labelId="demo-simple-select-label"
            //         id="demo-simple-select"
            //         value={'date'}
            //         onChange={handleChange}
            //     >
            //         <MenuItem value='date'>Date</MenuItem>
            //         <MenuItem value='episode_id'>Episode</MenuItem>
            //         <MenuItem value='name'>Name</MenuItem>
            //     </Select>
            // </FormControl> 

            // const useStyles = makeStyles((theme) => ({
            //     formControl: {
            //         margin: theme.spacing(1),
            //         minWidth: 120,
            //     },
            //     selectEmpty: {
            //         marginTop: theme.spacing(0),
            //     },
            //     header: {
            //         display: "flex"
            //     }
            // }));