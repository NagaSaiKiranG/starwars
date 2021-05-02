import React from 'react';

export const defaultState = {
    selectedSpecies: '',
    selectedPlanet: '',
    selectedFilm: ''
}

export const reducer = (state, payload) => {
    switch(payload.type) {
        case 'species': {
            return {
                ...state,
                selectedSpecies: payload.data
            }
        }
        case 'planet': {
            return {
                ...state,
                selectedPlanet: payload.data
            }
        }
        case 'film': {
            return {
                ...state,
                selectedFilm: payload.data
            }
        }
        default:
            return state;
    }
}

export const SelectionContext = React.createContext(defaultState);