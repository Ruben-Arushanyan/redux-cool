---
sidebar_position: 5
title: "Global and Local Actions"
---

In complex projects, we are usually splitting our reducer functions into separate reducer functions, each managing independent parts of the state. Then, using the **combineReducers** function of Redux, we are combining it creating one general reducer function. Very often, there is a need to have specific types of actions, which we would like to apply simultaneously to all reducers or to specific reducers. For example, when we have **LOGOUT** action and during that action, we want to erase all the account-specific data that exists in our Redux state.

The actions have **Global** and **Local** contexts in **Redux Cool**. The actions with Global context can be applied to various Reducers. The actions with Local context can be applied to a specific Reducer.

As we already know from the topic of [Reducers Creator](/docs/concepts/reducers-creator), when we are creating reducers, we are passing a name as the first argument - that is the name of reducer, the purpose of which is to enable us to send Local (reducer specific) actions. For that, it is necessary that the action type includes the reducer name as a prefix. 


Here we have two reducer functions. 

```javascript
import { reducersCreator } from "redux-cool"

const first_reducer = reducersCreator(
    "FIRST", //reducer name
    {},  // initial state
    {
        // ...
        LOGOUT: (state, action) => {
            // ...
        }
    }
)


const second_reducer = reducersCreator(
    "SECOND", //reducer name
    {},  // initial state
    {
        // ...
        LOGOUT: (state, action) => {
            // ...
        }
    }
)

```

As we see from the above example, both of the reducers have **LOGOUT** action handlers defined in the reducer tree. 

If we dispatch an action that has a `"LOGOUT"` type, it will be applied to both (we call it **Global action**). But, if we create an action that has a `"FIRST/LOGOUT"` type, it will be applied only to the first reducer(we can call it **Local action**).
