(this["webpackJsonpreact-3"]=this["webpackJsonpreact-3"]||[]).push([[0],{12:function(e,t,a){},16:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),r=a.n(l),i=a(5),s=a(6),m=a(8),o=a(7);a(12);var u=function(){return c.a.createElement("div",{id:"particles"},c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}),c.a.createElement("div",{className:"particle"}))},d=a(10),v=a(2),p=(a(21),a(13)),E=a(14);var h=function(e){var t=e.items;console.log(t.key);var a=t.map((function(t){return c.a.createElement("div",{className:"list",key:t.key},c.a.createElement("p",null,c.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(a){e.setUpdate(a.target.value,t.key)}}),c.a.createElement("span",null,c.a.createElement(p.a,{className:"faicons",onClick:function(){e.deleteItem(t.key)},icon:"check-circle"}))))}));return c.a.createElement("div",null,c.a.createElement(E.a,{duration:300,easing:"ease-in-out"},a))},f=(a(27),function(e){e.target.classList.remove("animate"),e.target.classList.add("animate"),setTimeout((function(){e.target.classList.remove("animate")}),700)});var N=function(e){for(var t=document.getElementsByClassName("bubbly-button"),a=0;a<t.length;a++)t[a].addEventListener("click",f,!1);return c.a.createElement("div",null,c.a.createElement("button",{className:"bubbly-button",onClick:function(){return e.saveItems()}},"\u2191"))},y=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;if(Object(i.a)(this,a),(n=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},window.performance&&1==performance.navigation.type){for(var c=Object(d.a)(Array(localStorage.length)).map((function(e){return 0})),l=0;l<localStorage.length;l++)n.state={currentItem:{text:localStorage.getItem(localStorage.key(l)),key:parseInt(localStorage.key(l))}},c[l]=n.state.currentItem;n.state.items=c}return n.addItem=n.addItem.bind(Object(v.a)(n)),n.handleInput=n.handleInput.bind(Object(v.a)(n)),n.deleteItem=n.deleteItem.bind(Object(v.a)(n)),n.setUpdate=n.setUpdate.bind(Object(v.a)(n)),n.saveItems=n.saveItems.bind(Object(v.a)(n)),n}return Object(s.a)(a,[{key:"saveItems",value:function(){for(var e=this.state.items.length,t=0;t<e;t++)localStorage.setItem(JSON.stringify(this.state.items[t].key),this.state.items[t].text)}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var a=[].concat(Object(d.a)(this.state.items),[t]);this.setState({items:a,currentItem:{text:"",key:""}})}}},{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));localStorage.removeItem(JSON.stringify(e)),this.setState({items:t})}},{key:"setUpdate",value:function(e,t){var a=this.state.items;a.map((function(a){a.key===t&&(a.text=e)})),this.setState({items:a})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("form",{id:"form-todo",onSubmit:this.addItem},c.a.createElement("input",{type:"text",placeholder:"Enter task",value:this.state.currentItem.text,onChange:this.handleInput})),c.a.createElement("p",null,this.state.items.text),c.a.createElement(N,{saveItems:this.saveItems}),c.a.createElement(h,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate}))}}]),a}(c.a.Component),b=a(4),I=a(15);b.b.add(I.a);var k=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{id:"root",className:"App"},c.a.createElement(u,null),c.a.createElement("h1",null,"I\xa0will\xa0.\xa0"),c.a.createElement(y,null))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.baca2f0a.chunk.js.map