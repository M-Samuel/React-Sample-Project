import { useContext, useEffect } from 'react'
import { StoreContext } from '../store/StoreContext'
import Actions from '../actions/Actions'

export default function Home(){
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
            {state.incidents.map((i,key) => <p key={key}>{i.title}</p>)}
        </>
    )
}