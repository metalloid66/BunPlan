(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(10),a=n.n(r),s=n(3),o=n.n(s),u=n(4),l=n(2),p=n(0);function d(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),i=n[0],r=n[1];function a(e){e.preventDefault(),r(!i)}return Object(p.jsxs)("div",{className:"recipe-container",onMouseEnter:function(e){return a(e)},onMouseLeave:function(e){return a(e)},children:[Object(p.jsx)("p",{onClick:function(){e.toggleRecDet(),e.updateRecipeDet(e.recipeTitle,e.recipeDescription,e.recipeIngredients)},className:"recipe-title",children:e.recipeTitle}),e.isOpenEdit?null:Object(p.jsxs)(p.Fragment,{children:[e.isOpenCalc?Object(p.jsx)("div",{className:i&&e.isOpenAdd?"edit-recipe-btn":"hide",onClick:function(t){t.preventDefault(),window.history.replaceState(null,null,"/recipes/".concat(e.recipeId)),e.onEdit(e.recipeId)},children:"EDIT"}):null,e.isOpenCalc?Object(p.jsx)("div",{className:i&&e.isOpenAdd?"remove-recipe-btn":"hide",onClick:function(){e.onRemove(e.recipeId)},children:"REMOVE"}):null,e.isOpenCalc?null:Object(p.jsx)("div",{className:i?"openCalc-btn":"hide",onClick:function(){e.getRecipe(e.recipeId),window.history.replaceState(null,null,"/recipes/".concat(e.recipeId))},children:"Add To List"})]})]})}function j(e){return Object(p.jsxs)("div",{className:"recipeDet-container",children:[Object(p.jsxs)("h2",{className:"recipeDet-title",children:["How to cook ",e.recipeTitle,"?"]}),Object(p.jsx)("div",{className:"recipeDet-des",children:Object(p.jsx)("p",{children:e.recipeDescription})}),Object(p.jsxs)("div",{className:"recipeDet-ings",children:[Object(p.jsx)("h4",{children:"You will need:"}),Object.entries(e.recipeIngredients).map((function(e,t){return Object(p.jsxs)("p",{children:[e[1].ingTitle," ",e[1].amount," ",e[1].unit,Object(p.jsx)("br",{})]},"ing-".concat(t))}))]})]})}function b(e){return Object(p.jsx)("button",{className:e.isOpenCalc?"btn calculate-btn":"btn close-btn",onClick:e.toggleCalculate,children:e.isOpenCalc?"SHOP":"CLOSE SHOP"})}function O(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)([]),s=Object(l.a)(a,2),o=s[0],u=s[1],d=Object(c.useState)([]),j=Object(l.a)(d,2),b=j[0],O=j[1];return Object(c.useEffect)((function(){e.recipeToShop.title&&(r(i.concat([e.recipeToShop])),console.log(i))}),[e.recipeToShop]),Object(c.useEffect)((function(){!function(e){var t=[];e.forEach((function(e){t.push(e.ingredients)})),u(t)}(i)}),[i]),Object(c.useEffect)((function(){!function(){for(var e=o.flat(),t=[],n=function(n){if(t.some((function(t){return t.ingTitle===e[n].ingTitle&&t.unit===e[n].unit})))return"continue";var c=e.filter((function(t){return t.ingTitle===e[n].ingTitle&&t.unit===e[n].unit})).reduce((function(e,t){return e+Number(t.amount)}),0);t.push({ingTitle:e[n].ingTitle,amount:c,unit:e[n].unit})},c=0;c<e.length;c++)n(c);O(t)}()}),[o]),Object(p.jsxs)("div",{className:"calculate-container",children:[Object(p.jsx)("h2",{className:"recipesToCookTitle",children:"Recipes to Cook"}),Object(p.jsx)("div",{className:"recipesToCook",children:0===i.length?"Please add recipes to cook":i.map((function(e,t){return Object(p.jsxs)("div",{className:"recipeToCook-container",children:[Object(p.jsx)("h4",{className:"recipeToCook-title",children:e.title}),Object(p.jsx)("button",{className:"recipeToCook-remove",onClick:function(e){return function(e,t){e.preventDefault(),r(i.filter((function(e,n){return n!==t})))}(e,t)},children:"x"})]},t)}))}),Object(p.jsx)("h2",{className:"ingsToCookTitle",children:"Ingredients to buy "}),Object(p.jsx)("div",{className:"ingsToCook",children:0===b.length?"No ingredients to buy":b.map((function(e,t){return Object(p.jsx)("div",{className:"ingToCook-container",children:Object(p.jsxs)("p",{children:[e.ingTitle," ",e.amount," ",e.unit]})},t)}))})]})}function f(e){return Object(p.jsx)("button",{onClick:e.toggleAddForm,className:e.isOpenAdd?"btn add-btn":"btn close-btn",children:e.isOpenAdd?"ADD":"CLOSE FORM"})}var h=n(7),m=n(9),v=n(11);function x(e){Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT;var t=Object(c.useState)(""),n=Object(l.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),d=s[0],j=s[1],b=Object(c.useState)([]),O=Object(l.a)(b,2),f=O[0],x=O[1];function g(e,t){e.preventDefault(),e.persist(),x((function(n){return n.map((function(n,c){return c!==t?n:Object(m.a)(Object(m.a)({},n),{},Object(h.a)({},e.target.name,e.target.value))}))}))}Object(c.useEffect)((function(){e.allowEdit&&(function(){var t=Object(u.a)(o.a.mark((function t(){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://bunplanner.herokuapp.com/recipes/".concat(e.idToEdit));case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,r(c.title),j(c.description),x(c.ingredients);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),e.disallowEdit())}));return Object(p.jsx)("div",{className:"addForm-container",children:Object(p.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault(),e.showEdit?(e.finishEdit(e.idToEdit,{title:i,description:d,ingredients:f}),alert("You have Edited a recipe")):(e.onAdd({title:i,description:d,ingredients:f}),alert("You have added a recipe")),e.toggleAddForm(!0)},children:[Object(p.jsx)("label",{className:"rec-descriptor-text",children:"Recipe Name"}),Object(p.jsx)("input",{className:"title-input",type:"text",placeholder:"e.g Pizza",value:i,onChange:function(e){return r(e.target.value)},required:!0}),Object(p.jsx)("label",{className:"rec-descriptor-text",children:"Recipe Description"}),Object(p.jsx)("textarea",{className:"description-input",placeholder:"e.g Put the pizza in oven...",value:d,onChange:function(e){return j(e.target.value)},required:!0}),Object(p.jsx)("label",{className:"rec-descriptor-text",children:"Recipe Ingredients"}),Object(p.jsx)("div",{className:"recipe-ings",children:f.map((function(e,t){return Object(p.jsxs)("div",{className:"recipe-ing",children:[Object(p.jsxs)("h5",{children:["#",t+1]}),Object(p.jsx)("input",{placeholder:"Ing name",name:"ingTitle",type:"text",onChange:function(e){return g(e,t)},value:e.ingTitle}),Object(p.jsx)("input",{placeholder:"Amount",name:"amount",type:"number",onChange:function(e){return g(e,t)},value:e.amount}),Object(p.jsx)("input",{placeholder:"Unit",name:"unit",type:"text",onChange:function(e){return g(e,t)},value:e.unit}),Object(p.jsx)("button",{onClick:function(e){return function(e,t){e.preventDefault(),x((function(e){return e.filter((function(n){return n!==e[t]}))}))}(e,t)},className:"remove-ing",children:"X"})]},"ing-".concat(t))}))}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:function(e){e.preventDefault();var t={ingTitle:"",amount:"",unit:""};x((function(e){return[].concat(Object(v.a)(e),[t])}))},className:"add-ing",children:"ADD INGREDIENT"}),Object(p.jsx)("input",{type:"submit",value:"SAVE RECIPE",className:"submit-form-btn"})]})]})})}function g(e){Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT;var t=Object(c.useState)(!1),n=Object(l.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(!0),s=Object(l.a)(a,2),h=s[0],m=s[1],v=Object(c.useState)(!1),g=Object(l.a)(v,2),S=g[0],T=g[1];function E(e){I(!1),r(!i),D(!1),de(!1),q(!1),!0===e?(m(!0),ne(!1),W(!1)):(m(!h),ne(!te),W(!K))}function N(){return(N=Object(u.a)(o.a.mark((function t(n){var c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://bunplanner.herokuapp.com/add-recipe",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 2:return c=t.sent,t.next=5,c.json();case 5:i=t.sent,e.onUpdate(i);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var C=Object(c.useState)(!1),k=Object(l.a)(C,2),y=k[0],D=k[1],w=Object(c.useState)(!1),R=Object(l.a)(w,2),A=R[0],I=R[1],_=Object(c.useState)({}),P=Object(l.a)(_,2),F=P[0],H=P[1],L=Object(c.useState)(!1),U=Object(l.a)(L,2),K=U[0],W=U[1];function M(e){return z.apply(this,arguments)}function z(){return(z=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(!i),de(!1),D(!0),I(!0),H(t),W(!K),m(!h),ne(!te);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(u.a)(o.a.mark((function t(n,c){var i,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://bunplanner.herokuapp.com/recipes/".concat(n),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(c)});case 2:return i=t.sent,t.next=5,i.json();case 5:r=t.sent,e.onUpdate(r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var V=Object(c.useState)(!1),B=Object(l.a)(V,2),Y=B[0],q=B[1],G=Object(c.useState)(!0),X=Object(l.a)(G,2),Q=X[0],Z=X[1],$=Object(c.useState)(!1),ee=Object(l.a)($,2),te=ee[0],ne=ee[1],ce=Object(c.useState)({}),ie=Object(l.a)(ce,2),re=ie[0],ae=ie[1];function se(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(u.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bunplanner.herokuapp.com/recipes/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,ae(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ue=Object(c.useState)(!1),le=Object(l.a)(ue,2),pe=le[0],de=le[1],je=Object(c.useState)(""),be=Object(l.a)(je,2),Oe=be[0],fe=be[1],he=Object(c.useState)(""),me=Object(l.a)(he,2),ve=me[0],xe=me[1],ge=Object(c.useState)(""),Se=Object(l.a)(ge,2),Te=Se[0],Ee=Se[1];function Ne(){!0!==i&&!0!==y&&!0!==Y&&de(!pe)}function Ce(e,t,n){fe(e),xe(t),Ee(n)}return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"container-1",id:"style-9",children:0===e.recipes.length?"Please Add recipes":e.recipes.map((function(t,n){return Object(p.jsx)(d,{isOpenAdd:h,isOpenCalc:Q,isOpenEdit:K,getRecipe:se,toggleRecDet:Ne,updateRecipeDet:Ce,onRemove:e.onRemove,onEdit:M,recipeTitle:t.title,recipeDescription:t.description,recipeIngredients:t.ingredients,recipeId:t._id},"recipe-".concat(n))}))}),Object(p.jsxs)("div",{className:"add-calc-btns",children:[S?null:Object(p.jsx)(f,{toggleAddForm:E,isOpenAdd:h}),te?null:Object(p.jsx)(b,{toggleCalculate:function(e){e.preventDefault(),q(!Y),de(!1),r(!1),D(!1),Z(!Q),T(!S)},isOpenCalc:Q})]}),pe?Object(p.jsx)("div",{className:"container-2",id:"style-9",children:Object(p.jsx)(j,{recipeTitle:Oe,recipeDescription:ve,recipeIngredients:Te})}):null,i?Object(p.jsx)("div",{className:"container-3",id:"style-9",children:Object(p.jsx)(x,{toggleAddForm:E,onAdd:function(e){return N.apply(this,arguments)},showEdit:y,allowEdit:A,disallowEdit:function(){I(!1)},finishEdit:function(e,t){return J.apply(this,arguments)},idToEdit:F})}):null,Y?Object(p.jsx)("div",{className:"container-4",id:"style-9",children:Object(p.jsx)(O,{recipeToShop:re})}):null]})}var S=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=(t[0],t[1],Object(c.useState)([])),i=Object(l.a)(n,2),r=i[0],a=i[1];function s(){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bunplanner.herokuapp.com/recipes");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bunplanner.herokuapp.com/recipes/".concat(t),{method:"DELETE"});case 2:a(r.filter((function(e){return e.id!==t}))),function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log(r)}),[]),Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(g,{onUpdate:function(e){a(r.concat([e])),function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()},recipes:r,onRemove:function(e){return j.apply(this,arguments)}})})};n(18);a.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.3387c20e.chunk.js.map