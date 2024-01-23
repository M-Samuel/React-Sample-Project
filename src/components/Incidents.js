import { useContext, useEffect } from 'react'
import { StoreContext } from '../store/StoreContext'
import Actions from '../actions/Actions'

export default function Incidents(){
    const {state, dispatch} = useContext(StoreContext)

    useEffect(() => {
        async function fetchData(){
            await Actions.GetAllIncidents(state, dispatch)
        }
        fetchData()
    }, [])

    return(
         <>
            {state.fetching ? <p>Loading...</p> : <p>Loaded</p>}
            {state.incidents.map((i,key) => <IncidentData key={key} incident={i}></IncidentData>)}
        </>
    )
}


function IncidentData({incident}){
    const {state, dispatch} = useContext(StoreContext)
    
    const mapToIncidentChangeDetails = () => {
        if(!state.selectedIncident)
            return null
        if(state.selectedIncident.id !== incident.id)
            return null
        if(!state.selectedIncident.incidentStatusChanges)
            return null
        

        return state.selectedIncident.incidentStatusChanges
        .map((isc,key) => <IncidentChangeDetail detail={isc} key={key}></IncidentChangeDetail>)
    }
    return(
        <>
            <p><b>{incident.title}</b></p>
            {state.selectedIncident?.id === incident.id ? <p>Selected</p> : null}
            <p>{incident.description}</p>
            <p>{incident.id}</p>
            <p>{incident.createdDate}</p>
            <button onClick={() => Actions.SelectIncident(state, dispatch, incident)}>Select</button>
            {mapToIncidentChangeDetails()}
            <br></br>
            <br></br>
        </>
    )
}

function IncidentChangeDetail({detail}){
    return(
        <>
            <p>{detail.id}</p>
            <p>{detail.changedDateTime}</p>
            <p>{detail.oldStatus} {'=>'}  {detail.newStatus}</p>
            <br></br>
        </>
    )
}