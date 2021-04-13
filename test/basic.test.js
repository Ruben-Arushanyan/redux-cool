/**
* Copyright (c) 2020-present Ruben Arushanyan (https://github.com/ruben-arushanyan)
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
* 
*/



////////////////////////// TEST ////////////////////////////
const {
    createStore,
} = require('redux')
const {
    reducersCreator,
    actionsCreator,
} = require('../src')

const initialState = {
    profile: {
		data: null
	}
}


const reducer_tree = {
	PROFILE: {
        SET: (state, action) => {
            const [data] = action.args
            state.profile.data = data
        },
        UPDATE_EMAIL: (state, action) => {
            const [email] = action.args
            state.profile.data.email = email
        },
        CLEAR: (state, action) => {
            state.profile.data = null
        }
    }
}

// Create Reducer
const accountReducer = reducersCreator(
    'ACCOUNT',
    initialState,
    reducer_tree,
)


test('Reducers Creator Test', () => {
    // Create Store
    const store = createStore(accountReducer)


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
    
    let state = store.getState()
    expect(state).toEqual({
        profile: {
            data: null
        }
    })

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

    store.dispatch(actionsCreator.PROFILE.SET({email: 'test1@test1.test1', name: 'Test1'}))
    state = store.getState()
    expect(state)
    .toEqual({
        profile: {
            data: {email: 'test1@test1.test1', name: 'Test1'}
        }
    })

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

    store.dispatch(actionsCreator.ACCOUNT.PROFILE.SET({email: 'test2@test2.test2', name: 'Test2'}))
    state = store.getState()
    expect(state)
    .toEqual({
        profile: {
            data: {email: 'test2@test2.test2', name: 'Test2'}
        }
    })

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

    store.dispatch(actionsCreator.ACCOUNT.PROFILE.UPDATE_EMAIL('test3@test3.test3'))
    state = store.getState()
    expect(state)
    .toEqual({
        profile: {
            data: {email: 'test3@test3.test3', name: 'Test2'}
        }
    })

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

    store.dispatch(actionsCreator.ACCOUNT.PROFILE.CLEAR())
    state = store.getState()
    expect(state)
    .toEqual({
        profile: {
            data: null
        }
    })
})
