import { useContext, useEffect } from 'react'
import { StoreContext } from '../store/StoreContext'
import Actions from '../actions/Actions'
import ListGroup from 'react-bootstrap/ListGroup';
import { Badge, Button } from 'react-bootstrap';

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
            <OpenIncident></OpenIncident>
            <ListGroup>
                {state.incidents.map((i,key) => <IncidentData key={key} incident={i}></IncidentData>)}
            </ListGroup>
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
        <ListGroup.Item>
            <p><b>{incident.title}</b></p>
            {state.selectedIncident?.id === incident.id ? <Badge bg="primary">Selected</Badge> : null}
            <p>{incident.description}</p>
            <p>{incident.id}</p>
            <p>{incident.createdDate}</p>
            <Button variant="secondary" onClick={() => Actions.SelectIncident(state, dispatch, incident)}>Select</Button>
            <ListGroup>
                {mapToIncidentChangeDetails()}
            </ListGroup>
        </ListGroup.Item>
    )
}

function IncidentChangeDetail({detail}){
    return(
        <ListGroup.Item>
            <p>{detail.id}</p>
            <p>{detail.changedDateTime}</p>
            <p>{detail.oldStatus} {'=>'}  {detail.newStatus}</p>
            <br></br>
        </ListGroup.Item>
    )
}

function OpenIncident(){
    const {state, dispatch} = useContext(StoreContext)

    const apiCall = async (formData) => {
        await Actions.OpenIncident(state, dispatch, formData);
        await Actions.GetAllIncidents(state, dispatch);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(Object.fromEntries(formData));
        apiCall(formData)
    };

    return (
        <form onSubmit={handleSubmit}>
          <label>
            Customer Id:
            <input type="text" name="CustomerId" />
          </label>
          <br />
          <label>
            Title:
            <input type="text" name="Title" />
          </label>
          <br />
          <label>
            Description:
            <input type="text" name="Description" />
          </label>
          <br />
          <Button variant="primary" type="submit">Submit</Button>
          <OpenIncidentErrors badRequestValue={state.openIncidentBadRequestErrors} errors={state.openIncidentErrors}></OpenIncidentErrors>
          {state.openedIncident !== null ? <Badge bg="success">Success</Badge> : null}
        </form>
      );
}

function OpenIncidentErrors({badRequestValue, errors}){
    if(!errors && !badRequestValue)
        return null;

    if(!!badRequestValue){
        return(
            <>
                {badRequestValue.map((error,key) => <p key={key}>{error.message}</p>)}
            </>
        )
    }

    return(
        <>
            <Badge bg="danger">Unhandle Error occured</Badge>
        </>
    )
    
}