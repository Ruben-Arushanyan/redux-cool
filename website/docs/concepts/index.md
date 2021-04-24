---
sidebar_position: 1
title: "Redux-Cool Concepts"
slug: '/concepts'
---

### Description

**Redux Cool** is an awesome tiny package that allows you to easily and intuitively write redux logic.

### Installation

```bash
npm install redux-cool
```

### Recipes
It has only two functions:
```javascript
import {
    reducersCreator,
    actionsCreator
} from "redux-cool"
```
- **[reducersCreator](/docs/concepts/reducers-creator)** : For creating **reducer functions**.
- **[actionsCreator](/docs/concepts/actions-creator)** : For creating **action objects**.

### Reducer-Tree concept
It's a javascript object *(can have any deep and nested structure)* that intuitively and in visible ways, defines *action handlers* for reducer. See details:
- **[Reducer Tree](/docs/concepts/reducer-tree)**

### Global and Local Actions concepts
The actions have **Global** and **Local** contexts in **Redux Cool**. The actions with Global context can be applied to various Reducers.  The actions with local contexts can be only be applied to one specific reducer. See details:
- **[Global And Local Actions](/docs/concepts/global-and-local-actions)**