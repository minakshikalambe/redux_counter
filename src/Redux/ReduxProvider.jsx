import React, { useState } from "react"
import store from "./store"
export const ReduxContext=React.createContext()
function ReduxProvider({childern}){
  const[___INTERNAL__COUNT__HACK,forceUpdate]=useState(0)

  store.subscribe(()=>{
    forceUpdate((perv)=>perv+1)
  })
    return (
        <ReduxContext.Provider value={[store.getState.bind(store),store.dispatch.bind(store)]}>
          {childern}
        </ReduxContext.Provider>
    )
}
export default ReduxProvider;