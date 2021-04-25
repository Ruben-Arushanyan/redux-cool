---
sidebar_position: 2
title: "Problems"
---

Below are the main problems which we usually face when we use **Redux** in complex projects.

## Problem 1: Confusion and Boredom
In many projects that have various features, there are many cases when it is required to change the state during some actions. We have to create a new *action type* every single time,  to add an *action handler* for that in reducer, every time we have to *import* the appropriate *action creator*, create action and dispatch it. This is quite a boring process. Besides, we have many action creators and action handlers, which are just written one under another and not grouped in logical and visual form.

#### Solution:
In **Redux Cool**,  the reducers are created with the help of a **reducer tree** - the **reducer tree** is a nested javascript object in which **action-handler** functions are defined. Each **action-handler** has its logical place in the **reducer tree**. The hierarchical order of **action-handlers** enables us to define reducer-logic in a grouped and visual form. 

Besides, in **Redux Cool**, we don't have a separate **action creator** function for each action, instead, we have one `actionsCreator` action producer with which we can create any action object in dynamic and inline ways.

See details: 
- [Reducer Tree](/docs/concepts/reducer-tree)
- [Reducers Creator](/docs/concepts/reducers-creator)
- [Actions Creator](/docs/concepts/actions-creator)



## Problem 2: Define a Single Action In Multiple Reducers
In complex projects, we are usually splitting our reducer functions into separate reducer functions, each managing independent parts of the state. Then, using the **combineReducers** function of Redux, we are combining it creating one general reducer function. Very often, there is a need to have specific types of actions, which we would like to apply simultaneously to all reducers or to specific reducers. For example, when we have **LOGOUT** action and during that action, we want to erase all the account-specific data that exists in our Redux state.

#### Solution:
The actions have **Global** and **Local** contexts in **Redux Cool**. The actions with Global context can be applied to various Reducers.

See details:
- [Global And Local Actions](/docs/concepts/global-and-local-actions)




## Problem 3: Actions With Callback capability
Usually, when we are using Redux Middlewares for side effects(e.g. redux-saga), there is a need to have actions with **Callback capability**.


#### Solution:
In **Redux Cool**, all the actions have Callback capability - by default, it is an identity function*(x => x)* but we can pass any callback function during the creation of action. 

See details: 
- [Actions Creator](/docs/concepts/actions-creator)



