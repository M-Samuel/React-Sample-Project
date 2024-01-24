

function CallApiGetAllIncidents(){
    return fetch('/api/Incident/all')
}

function CallApiGetIncidentById(id){
    return fetch(`/api/Incident/get/${id}`)
}

function CallApiOpenIncident(formData){
    return fetch(`api/Incident/open`,{
        body: formData,
        method: 'post'
    })
}


export default {
    CallApiGetAllIncidents: CallApiGetAllIncidents,
    CallApiGetIncidentById: CallApiGetIncidentById,
    CallApiOpenIncident: CallApiOpenIncident
}