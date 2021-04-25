---
sidebar_position: 2
title: "Reducer Tree"
---

In **Redux Cool**,  the reducers are created with the help of a **reducer tree** - the **reducer tree** is a nested javascript object in which **action-handler** functions are defined. Each **action-handler** has its logical place in the **reducer tree**. The hierarchical order of **action-handlers** enables us to define reducer-logic in a grouped and visual form.

*Example:* Reducer Tree
```javascript
const products_reducer_tree = {
    // phone
    PHONE: {
        FETCH: {
            START: (state, action) => {
                // ...
            },
            SUCCESS: (state, action) => {
                // ...
            },
            FAIL: (state, action) => {
                // ...
            }
        },
        UPDATE: {
            PRICE: (state, action) => {
                // ...
            },
            DISCOUNT: (state, action) => {
                // ...
            }
        },
        CLEAR: (state, action) => {
            // ...
        }
    },

    // laptop
    LAPTOP: {
        FETCH: {
            START: (state, action) => {
                // ...
            },
            SUCCESS: (state, action) => {
                // ...
            },
            FAIL: (state, action) => {
                // ...
            }
        },
        UPDATE: {
            VERSION: (state, action) => {
                // ...
            },
            IMAGE: (state, action) => {
                // ...
            }
        },
        CLEAR: (state, action) => {
            // ...
        }
    }
}
```

As we can see in the above mentioned example, we defined the object of `products_reducer_tree`, in which 12 action handlers are defined in a hierarchic form.

- `PHONE.FETCH.START`
- `PHONE.FETCH.SUCCESS`
- `PHONE.FETCH.FAIL`
- `PHONE.UPDATE.PRICE`
- `PHONE.UPDATE.DISCOUNT`
- `PHONE.CLEAR`
- `LAPTOP.FETCH.START`
- `LAPTOP.FETCH.SUCCESS`
- `LAPTOP.FETCH.FAIL`
- `LAPTOP.UPDATE.VERSION`
- `LAPTOP.UPDATE.IMAGE`
- `LAPTOP.CLEAR`

This was just a simple example to show you what the reducer tree is.

In the next part, we will see how to create reducer function with the help of reducer-tree.