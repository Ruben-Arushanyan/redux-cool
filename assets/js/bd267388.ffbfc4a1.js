(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),c=(t(0),t(92)),o={sidebar_position:4,title:"Actions Creator"},i={unversionedId:"concepts/actions-creator",id:"concepts/actions-creator",isDocsHomePage:!1,title:"Actions Creator",description:"actionsCreator is an action producer, with which we can create any action object in dynamic and inline ways.",source:"@site/docs/concepts/actions-creator.md",sourceDirName:"concepts",slug:"/concepts/actions-creator",permalink:"/docs/concepts/actions-creator",editUrl:"https://github.com/Redux-Cool/redux-cool/edit/master/website/docs/concepts/actions-creator.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Actions Creator"},sidebar:"docs",previous:{title:"Reducers Creator",permalink:"/docs/concepts/reducers-creator"},next:{title:"Global and Local Actions",permalink:"/docs/concepts/global-and-local-actions"}},l=[{value:"Instalation",id:"instalation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Actions With Callback",id:"actions-with-callback",children:[]}],s={toc:l};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"actionsCreator")," is an action producer, with which we can create any action object in dynamic and inline ways."),Object(c.b)("h3",{id:"instalation"},"Instalation"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"npm install redux-cool\n")),Object(c.b)("h3",{id:"usage"},"Usage"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Example:")," Actions Creator"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'import {actionsCreator} from "redux-cool"\n\n\nconst first_action = actionsCreator.MY.FIRST.ACTION("arg1", "arg2")\nconsole.log(first_action)\n//      {\n//          type: "MY/FIRST/ACTION",\n//          args: ["arg1", "arg2"],\n//          cb: f() identity,\n//          _index: 1\n//      } \n\nconst second_action = actionsCreator.This.is.my.second.action(2021)\nconsole.log(second_action)\n//      {\n//          type: "This/is/my/second/action",\n//          args: [2021],\n//          cb: f() identity,\n//          _index: 2\n//      } \n\n\n\n//      If we just need to generate an action type as a string,\n//      we can do it easily\nconst type1 = String(actionsCreator.MY.FIRST.ACTION)\nconsole.log(type1)\n//      "MY/FIRST/ACTION"\n\n//      or any string conversion\nconst type2 = actionsCreator.MY.FIRST.ACTION + ""\nconsole.log(type2)\n//      "MY/FIRST/ACTION"\n')),Object(c.b)("p",null,"As we see in the example above, every action object has following fields:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"type")," : ",Object(c.b)("inlineCode",{parentName:"li"},"<String>")," action type as a string"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"args")," :",Object(c.b)("inlineCode",{parentName:"li"},"<Array>")," any array that contains all the data needed for the action"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"cb")," : ",Object(c.b)("inlineCode",{parentName:"li"},"<Function>")," callback function by default is an ",Object(c.b)("em",{parentName:"li"},"identity function (x => x)"),", but we can pass any function if we need to have a callback. The next example below shows how to pass that."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"_index")," : ",Object(c.b)("inlineCode",{parentName:"li"},"<Integer>")," positive integer number (1, 2, 3, ...)\u2024 It is created automatically and shows action order by index. It can be used as a unique identifier or help understand which action was created earlier(in rare cases, it may be necessary)")),Object(c.b)("h2",{id:"actions-with-callback"},"Actions With Callback"),Object(c.b)("p",null,"Sometimes we need the action to have ",Object(c.b)("strong",{parentName:"p"},"callback capability"),". It might be necessary in many cases. ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"Actions Creator"))," allows us to do this in a beautiful way: When we try to generate an action object, we can pass the ",Object(c.b)("strong",{parentName:"p"},"callback function")," as the last argument. ",Object(c.b)("inlineCode",{parentName:"p"},"Actions Creator")," will check and if the last argument is a function, it will be considered as a ",Object(c.b)("strong",{parentName:"p"},"callback function"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'import {actionsCreator} from "redux-cool"\n\n\nconst my_callback = () => {\n    console.log("Hello, I am callback!!!")\n}\n\nconst callbackable_action = actionsCreator.CALLBACKABLE.EXAMPLE(1, 2, 3, my_callback)\n\nconsole.log(callbackable_action)\n//      {\n//          type: "CALLBACKABLE/EXAMPLE",\n//          args: [1, 2, 3],\n//          cb: f() my_callback,\n//          _index: 1\n//      }\n\ncallbackable_action.cb()\n//      "Hello, I am callback!!!"\n\n')))}b.isMDXComponent=!0},92:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(t),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||c;return t?r.a.createElement(m,i(i({ref:n},s),{},{components:t})):r.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);