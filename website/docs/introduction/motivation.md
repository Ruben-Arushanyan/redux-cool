---
sidebar_position: 1
title: "Motivation"
slug: '/introduction'
---


### Prerequisites
For the start, we really hope that you are familiar with [Redux](https://redux.js.org).


### Introduction
As we know **Redux** is a predictable state container for JavaScript apps. Below you can find the architecture of Redux.
![redux architecture diagram](/img/redux-diagram.png)
As can be seen from the diagram above,  we have a **store** where our **state data** is stored, and if we want to change something in the state,  we must create an **action object** which will contain all the information on how we need to change the state. Afterward, we need to dispatch the action object to the reducer. The reducer must receive the action object and based on that it will figure out what to change and how to make that change. This is how the state management works in Redux. Redux as a state management concept is really good because it is predictable - we are not changing the state directly.

As we have already mentioned, Redux is very good as a state management concept, however, when we try to realize it in real and complex projects, we encounter numerous problems and headaches which is why many developers refuse to use Redux.


I created the **Redux Cool** to solve all of these problems.
