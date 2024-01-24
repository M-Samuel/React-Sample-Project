import { useReducer } from 'react'
import incidentsApi from '../api/incidents'
import { ALL_INCIDENTS_RECEIVING, ALL_INCIDENTS_REQUESTING, INCIDENT_RECEIVING, INCIDENT_REQUESTING, ON_SELECTING_INCIDENT, OPEN_INCIDENT_RECEIVING, OPEN_INCIDENT_REQUESTING } from '../constants/ActionType'


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
        case OPEN_INCIDENT_REQUESTING:
            return {...state, fetching: true, openIncidentBadRequestErrors: null, openedIncident: null, openIncidentErrors: null}
        case OPEN_INCIDENT_RECEIVING:{
            if(!!action.payload.okValue)
                return {...state, fetching: false, openedIncident: action.payload.okValue}
            else if(!!action.payload.badRequestValue)
                return {...state, fetching: false, openIncidentBadRequestErrors: action.payload.badRequestValue, openedIncident: null}
            else if(!!action.payload.errorValue)
                return {...state, fetching: false, openIncidentErrors: action.payload.errorValue, openedIncident: null}
            else
                return state
        }
            
        default:
            return state
    }
}

export const initialState = {
    incidents: [],
    fetching: false,
    selectedIncident: null,
    openedIncident: null,
    openIncidentBadRequestErrors: null,
    openIncidentErrors: null
}

export function GenerateStateAndDispatch(){
    const [state, dispatch] = useReducer(reducer, initialState)
    return {state: state, dispatch: dispatch}
}