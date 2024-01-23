import { useReducer } from 'react'
import incidentsApi from '../api/incidents'
import { ALL_INCIDENTS_RECEIVING, ALL_INCIDENTS_REQUESTING, INCIDENT_RECEIVING, INCIDENT_REQUESTING, ON_SELECTING_INCIDENT } from '../constants/ActionType'


export function reducer(state, action) {
    switch(action.type){
        case ALL_INCIDENTS_REQUESTING:
            return {...state, fetching: true}
        case ALL_INCIDENTS_RECEIVING:
            return {...state, fetching: false, incidents: action.payload.okValue}
        case ON_SELECTING_INCIDENT:
            return {...state, selectedIncident: action.payload}
        case INCIDENT_REQUESTING:
            return {...state, fetching: true}
        case INCIDENT_RECEIVING:
            return {...state, fetching: false, selectedIncident: action.payload.okValue}
        default:
            return state
    }
}

export const initialState = {
    incidents: [],
    fetching: false,
    selectedIncident: null
}

export function GenerateStateAndDispatch(){
    const [state, dispatch] = useReducer(reducer, initialState)
    return {state: state, dispatch: dispatch}
}