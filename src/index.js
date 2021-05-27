// console.log("Hello World!dadasa");
import store from './store';
import { bugAdded, bugResolved } from './actionCreaters';
// const unsubscribe = store.subscribe(() => {
//     console.log("store changed!",  store.getState());
// })
// reducer(state, action);
// notify the subscribers 
//  we have to type the entire struture create a function that will create an actions creators

store.dispatch(bugAdded("bug1"));
store.dispatch(bugResolved(1));
// unsubscribe();
console.log(store.getState());