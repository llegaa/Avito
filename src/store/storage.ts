import {MoviesInterface} from "./interfaces/moviesInterface";

export function loadState<T>(key: string): T | undefined {
    try {
        const jsonState = localStorage.getItem(key)
        if (!jsonState) {
            return undefined
        }
        return JSON.parse(jsonState)
    } catch (e) {
        return undefined
    }
}

export function saveState(state: MoviesInterface, key: string) {
    let pastResults = loadState(key)
    if (pastResults && Array.isArray(pastResults)) {
        for (let i = 0; i < pastResults.length; i++) {
            if (state.id === pastResults[i].id) {
                pastResults.splice(i, 1);
                pastResults.unshift(state)
                return
            }
        }
        if (pastResults.length > 6) {
            pastResults.pop()
        }
        pastResults.unshift(state)
    } else {
        pastResults = [state]
    }
    const stringState = JSON.stringify(pastResults)
    localStorage.setItem(key, stringState)
}