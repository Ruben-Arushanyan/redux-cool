---
sidebar_position: 2
title: "Usage Guide: React, Redux Cool"
---

> This is only usage guide, which shows how to use **Redux Cool** in React app, if you want to fully understand Redux Cool concepts and philosophy, please see [Redux Cool Concepts](/docs/concepts).

This guide contains step by step instructions on how to use **Redux Cool** in React app. If you want to see the final result at once, you can clone [finial result repository](https://github.com/Examples-Of-Usage/example__react__redux-cool) and run locally.

## Step 1: Setup a minimal React development environment
To create a minimal React development environment. you can use [create-react-app](https://github.com/facebook/create-react-app)
```bash
npx create-react-app redux-cool-example
```
After that, Navigate to the **redux-cool-example** directory
```bash
cd redux-cool-example
```

---

## Step 2: Install required packages

```bash
npm install redux-cool redux react-redux redux-devtools-extension
```

---

## Step 3: Create COUNTER_1 reducer function

Create a folder named `store` in the `src` folder․

Create a file named `src/store/counter_1_reducer.js`

*src/store/counter_1_reducer.js*
```javascript
import {reducersCreator} from "redux-cool"

const initial_state = {
    count: 0
}

const reducer_tree = {
    COUNT: {
        INCREMENT: (state, action) => {
            state.count++
        },
        DECREMENT: (state, action) => {
            state.count--
        },
        ADD: (state, action) => {
            const [value] = action.args
            state.count += value
        },
    },
    CLEAR: (state, action) => {
        return initial_state
    }
}

const counter_1_reducer = reducersCreator(
    "COUNTER_1",
    initial_state,
    reducer_tree,
)

export default counter_1_reducer
```

---

## Step 4: Create COUNTER_2 reducer function

Create a file named `src/store/counter_2_reducer.js`

*src/store/counter_2_reducer.js*
```javascript
import {reducersCreator} from "redux-cool"

const initial_state = {
    count: 0
}

const reducer_tree = {
    COUNT: {
        INCREMENT: (state, action) => {
            state.count++
        },
        DECREMENT: (state, action) => {
            state.count--
        },
        ADD: (state, action) => {
            const [value] = action.args
            state.count += value
        },
    },
    CLEAR: (state, action) => {
        return initial_state
    }
}

const counter_2_reducer = reducersCreator(
    "COUNTER_2",
    initial_state,
    reducer_tree,
)

export default counter_2_reducer
```

---

## Step 5: Create a Redux Store

Create a file named `src/store/index.js`

*src/store/index.js*
```javascript
import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'


// import reducers
import counter_1_reducer from './counter_1_reducer'
import counter_2_reducer from './counter_2_reducer'

const rootReducer = combineReducers({
    counter_1: counter_1_reducer,
    counter_2: counter_2_reducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools()
)

export default store
```

---

## Step 6: Connect react app to the store

*src/index.js*
```javascript
import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import App from './App'

import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
```

---

## Step 7: Use Redux State and Actions in React Component

Replace `src/App.js` file with:

*src/App.js*
```javascript
import {
  useDispatch,
  useSelector,
} from 'react-redux'

import {
  actionsCreator,
} from 'redux-cool'
 
function App() {

  const dispatch = useDispatch()

  const count_1 = useSelector(state => state.counter_1.count)
  const count_2 = useSelector(state => state.counter_2.count)

  const incrementCounter_1 = () => dispatch(actionsCreator.COUNTER_1.COUNT.INCREMENT())
  const decrementCounter_1 = () => dispatch(actionsCreator.COUNTER_1.COUNT.DECREMENT())
  const addCounter_1 = () => dispatch(actionsCreator.COUNTER_1.COUNT.ADD(10))

  const incrementCounter_2 = () => dispatch(actionsCreator.COUNTER_2.COUNT.INCREMENT())
  const decrementCounter_2 = () => dispatch(actionsCreator.COUNTER_2.COUNT.DECREMENT())
  const addCounter_2 = () => dispatch(actionsCreator.COUNTER_2.COUNT.ADD(10))

  const clearAll = () => dispatch(actionsCreator.CLEAR())
  const clearOnlyCounter_1 = () => dispatch(actionsCreator.COUNTER_1.CLEAR())
  const clearOnlyCounter_2 = () => dispatch(actionsCreator.COUNTER_2.CLEAR())

  return (
    <div>
        <h1>Redux Cool Example</h1>
        <hr/>
        <div>
          <div>
            <h3>counter1</h3>
            <h1>{count_1}</h1>
            <button onClick={incrementCounter_1}>increment</button>
            <button onClick={decrementCounter_1}>decrement</button>
            <button onClick={addCounter_1}>add 10</button>
          </div>
          <hr/>
          <div>
          <h3>counter2</h3>
            <h1>{count_2}</h1>
            <button onClick={incrementCounter_2}>increment</button>
            <button onClick={decrementCounter_2}>decrement</button>
            <button onClick={addCounter_2}>add 10</button>
          </div>
        </div>

        <hr/>
        <br/>
        <br/>
        <br/>
        <span>
          <button onClick={clearAll}>Clear All State</button>
          <hr/>
          <button onClick={clearOnlyCounter_1}>Clear Only Counter-1 State</button>
          <hr/>
          <button onClick={clearOnlyCounter_2}>Clear Only Counter-2 State</button>
          <hr/>
        </span>
    </div>
  )
}

export default App
```

---

## Step 8: Run the app locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.