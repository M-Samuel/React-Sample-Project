import { useContext, useEffect } from 'react'
import { StoreContext } from '../App'
import { dispatch_AllIncidents } from '../store/store';

export default function Home(){
    const {state, dispatch} = useContext(StoreContext)

    useEffect(() => dispatch_AllIncidents(state, dispatch), [])
    console.log(state)
    return(
        <>
            {state.fetching ? <p>Loading...</p> : <p>Loaded</p>}
            {state.incidents.map(i => <p>{i.title}</p>)}
        </>
    )
}