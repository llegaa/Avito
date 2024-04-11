import {Doc} from "./doc";

export function loadState<T>(key: string):T|undefined{
    try {
        const jsonState = localStorage.getItem(key)
        if(!jsonState){
            return undefined
        }
        return JSON.parse(jsonState)
    }catch (e) {
        console.log(e)
        return undefined
    }
}
export function saveState(state: Doc, key: string) {
    console.log("pastResults")
    let pastResults = loadState(key)
    if(pastResults && Array.isArray(pastResults)){
        for(let i= 0; i<pastResults.length; i++){
            if(state.id===pastResults[i].id){
                pastResults.splice(i, 1);
                console.log(pastResults)
                pastResults.unshift(state)
                console.log(pastResults)
                return
            }
        }
        if(pastResults.length>6){
            pastResults.pop()
        }
        pastResults.unshift(state)
    }else{
        pastResults = [state]
    }
    console.log(pastResults)
    const stringState = JSON.stringify(pastResults)
    localStorage.setItem(key, stringState)
}