---
sidebar_position: 1
title: "API - actionsCreator"
---

#### Importing
```javascript
import {actionsCreator} from "redux-cool"
// or CommonJS
const {actionsCreator} = require("redux-cool")
```

### `actionsCreator.ANY.ACTION.TYPE([arg1], [arg2], ..., [callback])`

**actionsCreator** is an action producer, with which we can create any action object in dynamic and inline ways.
We can apply **actionsCreator** with the combination of any properties and call as a function and receive the action. We can pass the callback function as the last argument. actionsCreator will check and if the last argument is a function, it will be considered as a callback function.

*Examples:*
```javascript
const first_action = actionsCreator.MY.FIRST.ACTION("arg1", "arg2")
//      {
//          type: "MY/FIRST/ACTION",
//          args: ["arg1", "arg2"],
//          cb: f() identity,
//          _index: 1
//      } 
```
```javascript
const my_callback = () => {
    console.log("Hello, I am callback!!!")
}

const callbackable_action = actionsCreator.CALLBACKABLE.EXAMPLE(1, 2, 3, my_callback)
//      {
//          type: "CALLBACKABLE/EXAMPLE",
//          args: [1, 2, 3],
//          cb: f() my_callback,
//          _index: 1
//      }
```

*Return value:*

**action** `<Object>`
- **type** `<String>` action type as a string
- **args** `<Array>` any array that contains all the data needed for the action
- **cb** `<Function>` callback function by default is the *identity function (x => x)*
- **_index** `<Integer>` positive integer number (1, 2, 3, ...)․ It is created automatically and shows action order by index. It can be used as a unique identifier or help understand which action was created earlier(in rare cases, it may be necessary)

## `actionsCreator` without function call

### `actionsCreator.MY.ACTION.TYPE`

If we just need to generate an action type as a string, we can do it easily.

Examples:
```javascript
const type1 = String(actionsCreator.MY.ACTION.TYPE)
//      "MY/ACTION/TYPE"

//      or any string conversion
const type2 = actionsCreator.I.LOVE.YOU + ""
console.log(type2)
//      "I/LOVE/YOU"
```

