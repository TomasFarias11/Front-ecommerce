import store from '../store'
const initialState={
	countries:[],
	
}

// console.log(store.getState())

export default function reducer(state=initialState, action){
	console.log(state)
	switch(action.type){
		default:
			return state;
	}
 
}