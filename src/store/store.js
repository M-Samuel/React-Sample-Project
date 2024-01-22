
import incidentsApi from '../api/incidents'
export const ALL_INCIDENTS_REQUESTING = 'ALL_INCIDENTS_REQUESTING'
export const ALL_INCIDENTS_RECEIVING = 'ALL_INCIDENTS_RECEIVING'



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


export function dispatch_AllIncidents(state, dispatch){
    incidentsApi.GetAllIncidents(dispatch)
    .then(_ => console.log)
}

