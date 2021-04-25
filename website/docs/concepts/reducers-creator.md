---
sidebar_position: 3
title: "Reducers Creator"
---

**reducersCreator** is a helper function with which we create reducer functions for Redux.

### Instalation
```bash
npm install redux-cool
```
### Usage

```javascript
import {reducersCreator} from "redux-cool"

const initial_state = {
    profile: {
        data: null,
        loading: false,
    }
}

const account_reducer_tree = {
    PROFILE: {
        FETCH: {
            START: (state, action) => {
                state.profile.loading = true
            },
            SUCCESS: (state, action) => {
                const [data] = action.args
                state.profile.data = data
                state.profile.loading = false
            },
            FAIL: (state, action) => {
                state.profile.loading = false
            }
        },
        UPDATE: {
            EMAIL: (state, action) => {
                const [email] = action.args
                state.profile.data.email = email
            },
            USERNAME: (state, action) => {
                const [username] = action.args
                state.profile.data.username = username
            }
        }
    },
    CLEAR: (state, action) => {
        return initial_state
    }
}

const accountReducer = reducersCreator(
    "ACCOUNT",
    initial_state,
    account_reducer_tree,
)

export default accountReducer
```

As you can see in the example above, we create an **accountReducer** by calling the `reducersCreator` function and passing it three arguments:

- **`"ACCOUNT"`** : It's a *name* of the reducer, it can be any string.
- **`initial_state`** : It's a *initial state* of the reducer, it can be any object.
- **`account_reducer_tree`** :  It's a *[reducer tree](/docs/concepts/reducer-tree)* object, in which the action handlers are defined - as an argument *action handler functions* take **state** and **action** and update the state. It automatically uses the [immer library](https://immerjs.github.io/immer/) to do **immutable updates** with normal mutative code, like `state.profile.data.email = email`. There is no need to manually do immutable updates and return the result. If you are not familiar with the [immer library](https://immerjs.github.io/immer/), please look at it, it is very important.



As a result, we get the **accountReducer** function, which can handle the following type of actions:

| Global Context               | Local Context                     |
| -------------               |-------------                       |
| `"PROFILE/FETCH/START"`     | `"ACCOUNT/PROFILE/FETCH/START"`    |
| `"PROFILE/FETCH/SUCCESS"`   | `"ACCOUNT/PROFILE/FETCH/SUCCESS"`  |
| `"PROFILE/FETCH/FAIL"`      | `"ACCOUNT/PROFILE/FETCH/FAIL"`     |
| `"PROFILE/UPDATE/EMAIL"`    | `"ACCOUNT/PROFILE/UPDATE/EMAIL"`   |
| `"PROFILE/UPDATE/USERNAME"` | `"ACCOUNT/PROFILE/UPDATE/USERNAME"`|
| `"CLEAR"`                   | `"ACCOUNT/CLEAR"`                  |


As you can see, each handler can work with **two** types of actions (**Global** and **Local**), first consisting of the path described in *reducerTree*, the second is the same as the first type plus the reducer name that should be added in the beginning like `"CLEAR"` and `"ACCOUNT/CLEAR"`. That is the most important and useful feature of this library. See [Global and Local Actions](/docs/concepts/global-and-local-actions) for more details.
