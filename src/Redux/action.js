// const {legacy_createStore}=require("redux");

export const appActions={
    INCREMENT_COUNT:"INCREMENT_COUNT",
    DECREMENT_COUNT:"DECREMENT_COUNT",
}
export const icrementCountAction=(count)=>{
    return{
        type:appActions.INCREMENT_COUNT,
        payload:count
    }
}




