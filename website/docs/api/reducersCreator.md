---
sidebar_position: 2
title: "API - reducersCreator"
---

#### Importing
```javascript
import {reducersCreator} from "redux-cool"
// or CommonJS
const {reducersCreator} = require("redux-cool")
```

### `reducersCreator(reducer_name, initial_state, reducer_tree)`

- **reducer_name** `<String>` It's a *name* of the reducer, it can be any string.
- **initial_state** `<Object>` It's an *initial state* of the reducer, it can be any object.
- **reducer_tree** `<Object>` It's a *[reducer tree](/docs/concepts/reducer-tree)* object.

*Return value:*

Reducer Function for Redux