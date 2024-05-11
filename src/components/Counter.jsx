import { useSelector } from 'react-redux'
import { counterActions } from '../store/index'
import classes from './Counter.module.css'

const Counter = () => {
	const counter = useSelector(state => state.counter)
	const show = useSelector(state => state.showCounter)

	const incrementHandler = () => {
		counterActions.increment
	}
	const decrementHandler = () => {
		counterActions.decrement
	}

	const toggleCounterHandler = () => {
		counterActions.toggleCounter
	}

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<button onClick={incrementHandler}>Increment</button>
			<button onClick={decrementHandler}>Decrement</button>
			<div></div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	)
}

export default Counter
