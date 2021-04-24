---
sidebar_position: 2
title: "Problems"
---

Ստորեվ թվարկված են այն հիմնական խնդիրները որոնք առաջ են գալիս մեծ նախագծերում **redux** օգտագործելիս․

## Problem 1: Խառնաշփոթություն և ձանձրույթ
Շատ նախագծերում որոնք օժտված են բազմաթիվ feature ֊ներով, բազմաթիվ են այն դեպքերը երբ պետք է լինում փոփոխել state ֊ը ինչոր գործողությունների ժամանակ․ Մենք ստիպված ենք լինում ամեն անգամ ստեղծել նոր action type, reducer -ում ավելացնել դրա համար action-handler, և ամեն անգամ, պետք է import անել համապատասխան action creator ֊ը, ստեղծել action և dispatch անել այն։ Սա բավականին ձանձրացնող պրոցես է, բացի այդ մենք ունենում ենք բազմաթիվ action creator ֊ներ և action-handlers որոնք ուղակի բոլորը իրար տակ գրված են և ոչ մի կերպ խմբաորված չեն տեսանելի և տրամաբանական առումով։

#### Solution:
**Redux Cool** ֊ում reducer -ները գրվում են reducer tree ֊ի մեջ։ reducer tree ֊ն ներդրված javascript օբջեկտ է որի մեջ սահմանված է action-handler ֆունկցիա ֊ներ։ Ամեն action-handler ունի իր տրամաբանական տեղը reducer tree ֊ի մեջ։ Hierarchy ձեվով action-handler ֊նեի դասավորվածությունը հնարավորությունէ տալիս մեզ խմբավորված և տեսանելի ձեվով սահմանել reducer-logic ֊ը։ Բացի այդ Redux Cool ֊ում մենք չենք ունենում ամեն action ֊ի համար առանձին action creator function, այլ ունենք մեկ **actionsCreator** function, որի միջոցով դինամիկ և inline ձեվով կարող ենք ստեղցել ցանկացաց action object.

See details: 
- [Reducer Tree](/docs/concepts/reducer-tree)
- [Reducers Creator](/docs/concepts/reducers-creator)
- [Actions Creator](/docs/concepts/actions-creator)

## Problem 2: Define a Single Action In Multiple Reducers
Սովորաբար complex նախագծերում մենք split ենք անում մեր reducer function ֊ը into separate reducer functions, each managing independent parts of the state. Այնուհետև օգտագործելով Redux -ի combineReducers function ֊ը միավորում ենք այն ստեղծելով մեկ ընդհանուր reducer function․ Հաճախ անհրաժեշտություն է առաջանում ունենալ action, որը կսահմանվի բոլոր reducer ֊ներում կամ որոշակի reducer ֊ներում եվ երբ որ մենք ուղարկենք այդ action ֊ը միժամանակ տարածվի բոլոր reducer ֊ներում որտեղ սահմանված է։ Օրինակ եթե ունենք LOGOUT action, և ուզում ենք այդ action ֊ի ժամանակ մաքրենք բոլոր account specific տվյալները որոնք կան մեր redux state ֊ում։

#### Solution:
**Redux Cool** ֊ում կան action ֊ների Global and Local context ֊ի գաղափար։ Global context ֊ով action ֊ները կարող են տարածվել բազմաթիվ Reducer ֊ների վրա։
See details: 
- [Global And Local Actions](/docs/concepts/global-and-local-actions)


## Problem 3: Actions With Callback capability
Հաճախ երբ մենք side effect ֊ների համար օգտագործում ենք Redux Middlewares(օրինակ redux-saga), անհրաժեզտությունէ առաջանում ունենալ Callback capability actions.


#### Solution:
**Redux Cool** ֊ում բոլոր action -ները ունեն Callback capability, by default դա identity function(x => x) ֊ն է, բայց մենք կարող ենք փոխանցել ցանկացաց callback function, action ֊ի ստեղծման ժամանակ․

See details: 
- [Actions Creator](/docs/concepts/actions-creator)



