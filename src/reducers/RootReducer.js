import { useReducer } from 'react'
import incidentsApi from '../api/incidents'
import { ALL_INCIDENTS_RECEIVING, ALL_INCIDENTS_REQUESTING } from '../constants/ActionType'


export function reducer(state, action) {
    switch(action.type){
        case ALL_INCIDENTS_REQUESTING:
            return {...state, fetching: true}
        case ALL_INCIDENTS_RECEIVING:
            return {...state, fetching: false, incidents: action.payload.okValue}
        default:
            return state
    }
}

export const initialState = {
    incidents: [],
    fetching: false
}

export function GenerateStateAndDispatch(){
    const [state, dispatch] = useReducer(reducer, initialState)
    return {state: state, dispatch: dispatch}
}