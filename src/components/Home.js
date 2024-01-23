import { Link } from "react-router-dom";
import Incidents from "./Incidents";
import { useContext, useEffect } from "react";
import Actions from "../actions/Actions";
import incidents from "../api/incidents";
import { StoreContext } from "../store/StoreContext";


export default function Home() {
    const {state, dispatch} = useContext(StoreContext)
    const incidents = state.incidents;

    useEffect(() => {
        async function fetchData(){
            await Actions.GetAllIncidents(state, dispatch)
        }
        fetchData()
    }, [])


    return (
        <>
            <p><b>Incidents Stats:</b></p>
            <p>Incidents Count: {incidents.length}</p>
            <p>Incidents Open Count: {incidents.filter(i => i.status !== 'Closed').length}</p>
            <p>Incidents Closed Count: {incidents.filter(i => i.status === 'Closed').length}</p>
        </>
    )
}