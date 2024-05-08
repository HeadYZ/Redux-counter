import { createStore } from 'redux'

const counterReducer = (state = { counter: 0 }, action) => {
	if (action.type === 'INCREMENT') {
		return { counter: state.counter + 1 }
	}
	if (action.type === 'DECREMENT') {
		return { counter: state.counter - 1 }
	}
	return state
}

const store = createStore(counterReducer)


export default store














// const counterSubscriber = () => {
// 	const latestCounter = store.getState()
// 	console.log(latestCounter)
// }
// console.log(store.getState())
// store.subscribe(counterSubscriber)
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'DECREMENT' })