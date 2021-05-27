import * as actions from './actionTypes';
// just for reference to see clear function way
/* export function bugAdded(description){
    return {
        type: actions.BUG_ADDED,
        payload :{
            description: "Bug1"
        }
    }
} */

//  arrow function way to wrute action creators

export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload :{
        description: "Bug1"
    }
})
export const bugRemoved = description => ({
    type: actions.BUG_REMOVED,
    payload :{
        description
    }
})
export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload :{
        id
    }
})