# Redux Cool

> *Build redux logic, without getting nervous.*

## Description

**Redux Cool** is an awesome tiny package that allows you to easily and intuitively write redux logic. It is the collection of two separate libraries, one designed to create reducer functions and the other to create action objects: ([Reducers Creator](https://github.com/Ruben-Arushanyan/reducers-creator) for creating reducers functions and [Actions Creator](https://github.com/Ruben-Arushanyan/actions-creator) for creating actions object)

## Installation

```bash
npm install redux redux-cool
```

## Getting Started

Create a file named *src/accountReducer.js*

*src/accountReducer.js*
```javascript
import {reducersCreator} from "redux-cool"

const initialState = {
    profile: {
        data: null
    }
}

const reducerTree = {

    PROFILE: {

        SET: (state, action) => {
            const [data] = action.args
            state.profile.data = data
        },

        UPDATE_EMAIL: (state, action) => {
            const [email] = action.args
            state.profile.data.email = email
        }
    },

    CLEAR: (state, action) => {
        state.profile.data = null
    }

}

const accountReducer = reducersCreator(
    "ACCOUNT",
    initialState,
    reducerTree,
)

export default accountReducer

```
As you can see in the example above, we create an **accountReducer** by calling the `reducersCreator` function and passing it three arguments:

- **`"ACCOUNT"`** : It's the *name* of the reducer, it can be any string.
- **`initialState`** : It's the *initial state* of the reducer, it can be any object
- **`reducerTree`** : It's an object *(can have any deep and nested structure)* that intuitively and in readible ways, defines *handler functions* for reducer. *Handler functions* as an argument take **state** and **action** and update the state. It automatically uses the [immer library](https://immerjs.github.io/immer/) to do **immutable updates** with normal mutative code, like `state.profile.data.email = email`. There is no need to manually do immutable updates and return the result. If you are not familiar with the [immer library](https://immerjs.github.io/immer/), please look at it, it is very important.

As a result, we get the **accountReducer** function, which can handle the following type of actions:
- types: `"PROFILE/SET"` or `"ACCOUNT/PROFILE/SET"`
- types: `"PROFILE/UPDATE_EMAIL"` or `"ACCOUNT/PROFILE/UPDATE_EMAIL"`
- types: `"CLEAR"` or `"ACCOUNT/CLEAR"`

As you can see, each handler can work with **two** types of actions, one consisting of the path described in *reducerTree*, the second is the same as the first type plus the reducer name that should be added from the beginning like `"CLEAR"` and `"ACCOUNT/CLEAR"`. That is the most important and useful feature of this library:

>In both cases (`"CLEAR"` and `"ACCOUNT/CLEAR"`), the **CLEAR** handler is called in the         **accountReducer**, but when we have multiple reducers that have the **CLEAR** handler and we need to clear the state of all reducers, we must use `"CLEAR"` action type, but if we need to delete only the **ACCOUNT** reducer state we must use the `"ACCOUNT/CLEAR"` action type.


Now that we have the **accountReducer**, let's create the redux store.

Create a file named *src/store.js*

*src/store.js*
```javascript
import {createStore} from "redux"
import {actionsCreator} from "redux-cool"
import accountReducer from "./accountReducer.js"

// Create Store
const store = createStore(accountReducer)

// Dispatch Set Profile Action
store.dispatch(actionsCreator.PROFILE.SET({
        email: 'test@test',
        name: 'Test'
    })
)
console.log(store.getState())
// {
//     profile: {
//         data: {email: 'test@test', name: 'Test'}
//     }
// }


// Dispatch Update Email Action
store.dispatch(actionsCreator.PROFILE.UPDATE_EMAIL('test2@test2'))
console.log(store.getState())
// {
//     profile: {
//         data: {email: 'test2@test2', name: 'Test'}
//     }
// }



// Dispatch Clear Email Action
store.dispatch(actionsCreator.CLEAR())
console.log(store.getState())
// {
//     profile: {
//         data: null
//     }
// }

```


## API

### `reducersCreator()`
```javascript
reducersCreator(name, initialState, reducerTree)
```

- **`name`** <String\> *name* of the reducer, it can be any string
- **`initialState`** <Object\> *initial state* of the reducer, it can be any object
- **`reducerTree`** <Object\> object *(can have any deep and nested structure)* that intuitively and in readible ways, defines *handler functions* for reducer. *Handler functions* as an argument take **state** and **action** and update the state. It automatically uses the [immer library](https://immerjs.github.io/immer/) to do **immutable updates** with normal mutative code, like `state.profile.data.email = email`. There is no need to manually do immutable updates and return the result. If you are not familiar with the [immer library](https://immerjs.github.io/immer/), please look at it, it is very important.

### `actionsCreator`

```javascript
actionsCreator.ANY.ACTION.TYPE(...args)
```
- see: [Actions Creator library](https://github.com/Ruben-Arushanyan/actions-creator)  for details

## Maintainers

- [Ruben Arushanyan](https://github.com/ruben-arushanyan)

## License

[MIT](https://github.com/ruben-arushanyan/redux-cool/blob/master/LICENSE)
