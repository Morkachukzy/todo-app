(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7554390"],{"0026":function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"todo-list-base"},[e("the-todo-list",{attrs:{todos:t.todos},on:{"check-entry":t.checkEntry,"delete-todo":t.deleteTodo}}),e("div",{staticClass:"navigation"},[e("div",{staticClass:"items-left"},[t._v(t._s(t.itemsLeft))]),t._l(t.actions,(function(o){return e("base-button",{key:o,staticClass:"clear-completed-btn",attrs:{action:o},on:{"clear-completed-todos":t.clearCompletedTodos}},[t._v("Clear Completed")])})),e("div",{staticClass:"display-section"},t._l(t.sections,(function(o){return e("base-button",{key:o,class:[t.activeCSS(o),"display-section-btn"],attrs:{display:o},on:{"display-todos":t.displayTodos}},[t._v(t._s(o))])})),1)],2)],1)},i=[],c=e("5530"),n=(e("d3b7"),e("3ca3"),e("ddb0"),e("2f62")),d={components:{TheTodoList:function(){return e.e("chunk-ace2b792").then(e.bind(null,"992b"))}},data:function(){return{sections:["All","Active","Completed"],actions:["clearCompleted"],todos:[],activeTodos:[],completedTodos:[],currentSection:"All"}},mounted:function(){this.todos=this.getAllTodos},methods:{displayTodos:function(t){"All"===t?(this.todos=this.getAllTodos,console.log(this.todos)):"Active"===t?(this.todos=this.getActiveTodos,console.log(this.getActiveTodos)):"Completed"===t&&(this.todos=this.getCompletedTodos,console.log(this.todos)),this.currentSection=t},clearCompletedTodos:function(t){"clearCompleted"===t&&(this.$store.dispatch("removeCompletedTodos"),this.todos=this.getActiveTodos,this.displayTodos("All"))},checkEntry:function(t){this.$store.dispatch("markTodoAt",t)},deleteTodo:function(t){this.$store.dispatch("deleteTodo",t)},activeCSS:function(t){return{active:this.currentSection===t}}},computed:Object(c["a"])({itemsLeft:function(){return"".concat(this.getActiveTodosCount," items left")}},Object(n["b"])(["getAllTodos","getActiveTodos","getActiveTodosCount","getCompletedTodos"]))},l=d,a=(e("bbaf"),e("2877")),r=Object(a["a"])(l,s,i,!1,null,"bde6a03c",null);o["default"]=r.exports},"3e39":function(t,o,e){},bbaf:function(t,o,e){"use strict";e("3e39")}}]);
//# sourceMappingURL=chunk-a7554390.d76378e5.js.map