import { ALL_INCIDENTS_RECEIVING, ALL_INCIDENTS_REQUESTING, INCIDENT_RECEIVING, INCIDENT_REQUESTING, ON_SELECTING_INCIDENT } from "../constants/ActionType";
import { fetchApi } from "../api/helpers";
import IncidentApi from "../api/incidents"


async function GetAllIncidents(state, dispatchFunc){
    await fetchApi(
        () => IncidentApi.CallApiGetAllIncidents(),
        () => dispatchFunc({type: ALL_INCIDENTS_REQUESTING}),
        (value) => dispatchFunc({type: ALL_INCIDENTS_RECEIVING, payload: value})
    )
}

async function SelectIncident(state, dispatchFunc, selectedIncident){
    dispatchFunc({type: ON_SELECTING_INCIDENT, payload: selectedIncident})
    await fetchApi(
        () => IncidentApi.CallApiGetIncidentById(selectedIncident.id),
        () => dispatchFunc({type: INCIDENT_REQUESTING}),
        (value) => dispatchFunc({type: INCIDENT_RECEIVING, payload: value})
    )
}

export default {
    GetAllIncidents: GetAllIncidents,
    SelectIncident: SelectIncident
}