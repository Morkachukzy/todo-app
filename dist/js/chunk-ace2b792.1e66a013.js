(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ace2b792"],{"992b":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"todo-list"},[o("ul",e._l(e.todos,(function(t,n){return o("li",{key:JSON.stringify(t),on:{mouseover:function(t){return t.stopPropagation(),e.setHoveredTodo(n)},mouseleave:function(t){return t.stopPropagation(),e.unsetSetHovered.apply(null,arguments)}}},[o("div",{staticClass:"checkbox"},[o("base-check-box",{attrs:{currentTodo:t},on:{"check-entry":e.checkEntry}})],1),o("span",{class:[e.selectedCSS(t),"todo-content"]},[e._v(" "+e._s(t.title)+" ")]),e.isHoveredTodoActiveAt(n)?o("div",{staticClass:"delete-button"},[o("base-delete-button",{attrs:{currentTodo:t,index:n},on:{"delete-todo":e.deleteTodo}})],1):e._e()])})),0)])},s=[],c={name:"TheTodoList",props:{todos:{type:Array}},data:function(){return{isSelected:!1,selectedIndex:null,displayDeleteButton:!1,hoveredTodo:null}},emits:["check-entry","delete-todo"],methods:{checkEntry:function(e){this.$emit("check-entry",e)},selectedCSS:function(e){return{"cross-out":!e.active}},setHoveredTodo:function(e){this.hoveredTodo=e},isHoveredTodoActiveAt:function(e){return this.hoveredTodo===e},unsetSetHovered:function(){this.hoveredTodo=null},deleteTodo:function(e){this.$emit("delete-todo",e)}}},d=c,r=(o("f7b0"),o("2877")),i=Object(r["a"])(d,n,s,!1,null,"53f10af7",null);t["default"]=i.exports},f68e:function(e,t,o){},f7b0:function(e,t,o){"use strict";o("f68e")}}]);
//# sourceMappingURL=chunk-ace2b792.1e66a013.js.map