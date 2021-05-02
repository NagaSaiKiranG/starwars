import React, {useReducer, useCallback} from 'react';
import { Box } from "@material-ui/core";
import FilmsList from '../components/filmList.component';
import { defaultState, SelectionContext, reducer} from '../components/selectionContext';

const Home = () => {
    const [context, dispatch] = useReducer(reducer, defaultState);
    const dispatchRef = useCallback(dispatch, [dispatch]);
    return (<Box m={2}>
        <SelectionContext.Provider value={{context, dispatch: dispatchRef}}>
            <FilmsList />
        </SelectionContext.Provider>
    </Box>)
}

export default Home;