// import { appActions } from "./action";
import{icrementCountAction} from "./action";
import reducer from "./reducer";
const {legacy_createStore}=require("redux");

class Store{
    #reducer
    #state
    #listeners
    constructor(reducer,initState){
        this.#reducer=reducer;
        this.#state=initState;
        this.#listeners=[];
    }
    getState(){
        return this.#state;
    }
    dispatch(action){
        const oldState=this.#state
        this.#state=this.#reducer(this.#state,action)
        console.log(this.#state===oldState)
        // console.log("dispatch action",action)
        if(oldState!==this.#state)
        {
            this.#listeners.forEach((listener)=>listener())
        }
        // const updatedState=this.#reducer(this.#state,action);
        // this.#state=updatedState;
        // this.#listeners.forEach(listener=>listener())
    }
    subcribe(listener){
        this.#listeners.push(listener);
    }
}
const initState={count:0}
const store= legacy_createStore(reducer,initState)
// let updatedState=reducer(initState,{type:'INCREMENT'});

// store.subcribe(()=>{
//     console.log("store has got updated",store.getState())
// })
store.dispatch(icrementCountAction(1))
store.dispatch(icrementCountAction(2))
export default store