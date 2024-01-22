import { ALL_INCIDENTS_RECEIVING, ALL_INCIDENTS_REQUESTING } from "../store/store";
import { fetchApi } from "./helpers";


async function GetAllIncidents(dispatchFunc){
    return await fetchApi(
        () => fetch('/api/Incident/all'),
        () => dispatchFunc({type: ALL_INCIDENTS_REQUESTING}),
        (value) => dispatchFunc({type: ALL_INCIDENTS_RECEIVING, payload: value})
    )
}


export default {
    GetAllIncidents: GetAllIncidents
}