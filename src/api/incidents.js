

function CallApiGetAllIncidents(){
    return fetch('/api/Incident/all')
}

function CallApiGetIncidentById(id){
    return fetch(`/api/Incident/get/${id}`)
}


export default {
    CallApiGetAllIncidents: CallApiGetAllIncidents,
    CallApiGetIncidentById: CallApiGetIncidentById
}