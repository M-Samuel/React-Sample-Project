

function CallApiGetAllIncidents(){
    return fetch('/api/Incident/all')
}


export default {
    CallApiGetAllIncidents: CallApiGetAllIncidents
}