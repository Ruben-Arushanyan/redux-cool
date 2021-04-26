(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),c=(n(0),n(92)),a={sidebar_position:2,title:"Usage Guide: React, Redux Cool"},u={unversionedId:"guide/react-redux-cool",id:"guide/react-redux-cool",isDocsHomePage:!1,title:"Usage Guide: React, Redux Cool",description:"This is only usage guide, which shows how to use Redux Cool in React app, if you want to fully understand Redux Cool concepts and philosophy, please see Redux Cool Concepts.",source:"@site/docs/guide/react-redux-cool.md",sourceDirName:"guide",slug:"/guide/react-redux-cool",permalink:"/docs/guide/react-redux-cool",editUrl:"https://github.com/Redux-Cool/redux-cool/edit/master/website/docs/guide/react-redux-cool.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Usage Guide: React, Redux Cool"},sidebar:"docs",previous:{title:"Usage Guide: Index",permalink:"/docs/guide"},next:{title:"API Reference",permalink:"/docs/api"}},i=[{value:"Step 1: Setup a minimal React development environment",id:"step-1-setup-a-minimal-react-development-environment",children:[]},{value:"Step 2: Install required packages",id:"step-2-install-required-packages",children:[]},{value:"Step 3: Create COUNTER_1 reducer function",id:"step-3-create-counter_1-reducer-function",children:[]},{value:"Step 4: Create COUNTER_2 reducer function",id:"step-4-create-counter_2-reducer-function",children:[]},{value:"Step 5: Create a Redux Store",id:"step-5-create-a-redux-store",children:[]},{value:"Step 6: Connect react app to the store",id:"step-6-connect-react-app-to-the-store",children:[]},{value:"Step 7: Use Redux State and Actions in React Component",id:"step-7-use-redux-state-and-actions-in-react-component",children:[]},{value:"Step 8: Run the app locally",id:"step-8-run-the-app-locally",children:[]}],l={toc:i};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"This is only usage guide, which shows how to use ",Object(c.b)("strong",{parentName:"p"},"Redux Cool")," in React app, if you want to fully understand Redux Cool concepts and philosophy, please see ",Object(c.b)("a",{parentName:"p",href:"/docs/concepts"},"Redux Cool Concepts"),".")),Object(c.b)("p",null,"This guide contains step by step instructions on how to use ",Object(c.b)("strong",{parentName:"p"},"Redux Cool")," in React app. If you want to see the final result at once, you can clone ",Object(c.b)("a",{parentName:"p",href:"https://github.com/Examples-Of-Usage/example__react__redux-cool"},"finial result repository")," and run locally."),Object(c.b)("h2",{id:"step-1-setup-a-minimal-react-development-environment"},"Step 1: Setup a minimal React development environment"),Object(c.b)("p",null,"To create a minimal React development environment. you can use ",Object(c.b)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"create-react-app")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app redux-cool-example\n")),Object(c.b)("p",null,"After that, Navigate to the ",Object(c.b)("strong",{parentName:"p"},"redux-cool-example")," directory"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"cd redux-cool-example\n")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"step-2-install-required-packages"},"Step 2: Install required packages"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"npm install redux-cool redux react-redux redux-devtools-extension\n")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"step-3-create-counter_1-reducer-function"},"Step 3: Create COUNTER_1 reducer function"),Object(c.b)("p",null,"Create a folder named ",Object(c.b)("inlineCode",{parentName:"p"},"store")," in the ",Object(c.b)("inlineCode",{parentName:"p"},"src")," folder\u2024"),Object(c.b)("p",null,"Create a file named ",Object(c.b)("inlineCode",{parentName:"p"},"src/store/counter_1_reducer.js")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"src/store/counter_1_reducer.js")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'import {reducersCreator} from "redux-cool"\n\nconst initial_state = {\n    count: 0\n}\n\nconst reducer_tree = {\n    COUNT: {\n        INCREMENT: (state, action) => {\n            state.count++\n        },\n        DECREMENT: (state, action) => {\n            state.count--\n        },\n        ADD: (state, action) => {\n            const [value] = action.args\n            state.count += value\n        },\n    },\n    CLEAR: (state, action) => {\n        return initial_state\n    }\n}\n\nconst counter_1_reducer = reducersCreator(\n    "COUNTER_1",\n    initial_state,\n    reducer_tree,\n)\n\nexport default counter_1_reducer\n')),Object(c.b)("hr",null),Object(c.b)("h2",{id:"step-4-create-counter_2-reducer-function"},"Step 4: Create COUNTER_2 reducer function"),Object(c.b)("p",null,"Create a file named ",Object(c.b)("inlineCode",{parentName:"p"},"src/store/counter_2_reducer.js")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"src/store/counter_2_reducer.js")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'import {reducersCreator} from "redux-cool"\n\nconst initial_state = {\n    count: 0\n}\n\nconst reducer_tree = {\n    COUNT: {\n        INCREMENT: (state, action) => {\n            state.count++\n        },\n        DECREMENT: (state, action) => {\n            state.count--\n        },\n        ADD: (state, action) => {\n            const [value] = action.args\n            state.count += value\n        },\n    },\n    CLEAR: (state, action) => {\n        return initial_state\n    }\n}\n\nconst counter_2_reducer = reducersCreator(\n    "COUNTER_2",\n    initial_state,\n    reducer_tree,\n)\n\nexport default counter_2_reducer\n')),Object(c.b)("hr",null),Object(c.b)("h2",{id:"step-5-create-a-redux-store"},"Step 5: Create a Redux Store"),Object(c.b)("p",null,"Create a file named ",Object(c.b)("inlineCode",{parentName:"p"},"src/store/index.js")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"src/store/index.js")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"import {createStore, combineReducers} from 'redux'\nimport {composeWithDevTools} from 'redux-devtools-extension'\n\n\n// import reducers\nimport counter_1_reducer from './counter_1_reducer'\nimport counter_2_reducer from './counter_2_reducer'\n\nconst rootReducer = combineReducers({\n    counter_1: counter_1_reducer,\n    counter_2: counter_2_reducer\n})\n\nconst store = createStore(\n    rootReducer,\n    composeWithDevTools()\n)\n\nexport default store\n")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"step-6-connect-react-app-to-the-store"},"Step 6: Connect react app to the store"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"src/index.js")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react'\nimport {Provider} from 'react-redux'\nimport ReactDOM from 'react-dom'\nimport App from './App'\n\nimport store from './store'\n\nReactDOM.render(\n  <React.StrictMode>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </React.StrictMode>,\n  document.getElementById('root')\n)\n")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"step-7-use-redux-state-and-actions-in-react-component"},"Step 7: Use Redux State and Actions in React Component"),Object(c.b)("p",null,"Replace ",Object(c.b)("inlineCode",{parentName:"p"},"src/App.js")," file with:"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"src/App.js")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"import {\n  useDispatch,\n  useSelector,\n} from 'react-redux'\n\nimport {\n  actionsCreator,\n} from 'redux-cool'\n \nfunction App() {\n\n  const dispatch = useDispatch()\n\n  const count_1 = useSelector(state => state.counter_1.count)\n  const count_2 = useSelector(state => state.counter_2.count)\n\n  const incrementCounter_1 = () => dispatch(actionsCreator.COUNTER_1.COUNT.INCREMENT())\n  const decrementCounter_1 = () => dispatch(actionsCreator.COUNTER_1.COUNT.DECREMENT())\n  const addCounter_1 = () => dispatch(actionsCreator.COUNTER_1.COUNT.ADD(10))\n\n  const incrementCounter_2 = () => dispatch(actionsCreator.COUNTER_2.COUNT.INCREMENT())\n  const decrementCounter_2 = () => dispatch(actionsCreator.COUNTER_2.COUNT.DECREMENT())\n  const addCounter_2 = () => dispatch(actionsCreator.COUNTER_2.COUNT.ADD(10))\n\n  const clearAll = () => dispatch(actionsCreator.CLEAR())\n  const clearOnlyCounter_1 = () => dispatch(actionsCreator.COUNTER_1.CLEAR())\n  const clearOnlyCounter_2 = () => dispatch(actionsCreator.COUNTER_2.CLEAR())\n\n  return (\n    <div>\n        <h1>Redux Cool Example</h1>\n        <hr/>\n        <div>\n          <div>\n            <h3>counter1</h3>\n            <h1>{count_1}</h1>\n            <button onClick={incrementCounter_1}>increment</button>\n            <button onClick={decrementCounter_1}>decrement</button>\n            <button onClick={addCounter_1}>add 10</button>\n          </div>\n          <hr/>\n          <div>\n          <h3>counter2</h3>\n            <h1>{count_2}</h1>\n            <button onClick={incrementCounter_2}>increment</button>\n            <button onClick={decrementCounter_2}>decrement</button>\n            <button onClick={addCounter_2}>add 10</button>\n          </div>\n        </div>\n\n        <hr/>\n        <br/>\n        <br/>\n        <br/>\n        <span>\n          <button onClick={clearAll}>Clear All State</button>\n          <hr/>\n          <button onClick={clearOnlyCounter_1}>Clear Only Counter-1 State</button>\n          <hr/>\n          <button onClick={clearOnlyCounter_2}>Clear Only Counter-2 State</button>\n          <hr/>\n        </span>\n    </div>\n  )\n}\n\nexport default App\n")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"step-8-run-the-app-locally"},"Step 8: Run the app locally"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),Object(c.b)("p",null,"Open ",Object(c.b)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," to view it in the browser."))}s.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||c;return n?o.a.createElement(m,u(u({ref:t},l),{},{components:n})):o.a.createElement(m,u({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var l=2;l<c;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);