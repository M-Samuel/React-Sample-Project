import { ALL_INCIDENTS_RECEIVING, ALL_INCIDENTS_REQUESTING } from "../constants/ActionType";
import { fetchApi } from "../api/helpers";
import IncidentApi from "../api/incidents"


async function GetAllIncidents(state, dispatchFunc){
    return await fetchApi(
        () => IncidentApi.CallApiGetAllIncidents(),
        () => dispatchFunc({type: ALL_INCIDENTS_REQUESTING}),
        (value) => dispatchFunc({type: ALL_INCIDENTS_RECEIVING, payload: value})
    )
}


export default {
    GetAllIncidents: GetAllIncidents
}