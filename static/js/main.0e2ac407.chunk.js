(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{26:function(e,t,n){e.exports=n(38)},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),l=(n(31),n(12)),i=n(8),u=n(1),s=n.n(u),m=n(5),d=n(3),f=n(25),b=n(14);function p(){var e=Object(i.e)(),t=a.useState([]),n=Object(d.a)(t,2),r=n[0],c=n[1],o=Object(f.a)(),l=o.register,u=o.handleSubmit,p=o.errors,y="/quiz?amount=",g=u((function(t){var n=t.amount,a=t.category,r=t.difficulty,c=t.type;y+=n,y+="any"!==a?"&category="+a:"",y+="any"!==r?"&difficulty="+r:"",y+="any"!==c?"&type="+c:"",e.push(y)}));return a.useEffect((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api_category.php");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n.trivia_categories);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a.createElement("div",{className:"flex flex-col min-h-screen justify-center md:w-1/2 mx-auto px-2"},a.createElement("div",{className:"py-5 text-center"},"Quiz App"),a.createElement("form",{className:"grid grid-cols-1 row-gap-3",onSubmit:g},a.createElement("label",null,"Amount"),a.createElement("input",{name:"amount",ref:l({required:!0,max:50}),type:"number",className:Object(b.a)("border border-black border-solid px-3 py-4 h-12 rounded-md text-base",p.amount&&"border-red-300 focus:border-red-600 focus:shadow-outline-red")}),a.createElement("label",null,"Category"),a.createElement("select",{name:"category",className:"border border-black border-solid px-3 py-2 h-12 rounded-md text-base",ref:l},a.createElement("option",{value:"any"},"Any Category"),r.map((function(e){return a.createElement("option",{key:e.id,value:e.id},e.name)}))),a.createElement("label",null,"Difficulty"),a.createElement("select",{name:"difficulty",className:"border border-black border-solid px-3 py-2 h-12 rounded-md text-base",ref:l},a.createElement("option",{value:"any"},"Any Difficulty"),a.createElement("option",{value:"easy"},"Easy"),a.createElement("option",{value:"medium"},"Medium"),a.createElement("option",{value:"hard"},"Hard")),a.createElement("label",null,"Type"),a.createElement("select",{name:"type",className:"border border-black border-solid px-3 py-2 h-12 rounded-md text-base",ref:l},a.createElement("option",{value:"any"},"Any Type"),a.createElement("option",{value:"multiple"},"Multiple Choice"),a.createElement("option",{value:"boolean"},"True / False")),a.createElement("button",{type:"submit",className:"bg-indigo-600 hover:bg-indigo-500 focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 py-2 h-12 rounded-md text-white"},"Start")))}var y=n(24),g=n(2),x=n(41),h=n(15),v=n.n(h);function E(e){var t=e.text,n=e.selected,a=e.isTrue,c=e.onClick;return r.a.createElement("button",{onClick:c,className:Object(b.a)("flex-1 flex-grow text-left bg-gray-300 rounded-md my-1 ".concat(!n&&!a&&"hover:bg-gray-200"," py-3 pl-6"),a&&n&&"bg-green-300",a&&!n&&"bg-red-300",!a&&n&&"bg-blue-300")},r.a.createElement("span",null,v.a.decode(t)))}var w={transition:"opacity ".concat(200,"ms ease-in-out"),opacity:0},j=[{key:"entering",value:{opacity:1}},{key:"entered",value:{opacity:1}},{key:"exiting",value:{opacity:0}},{key:"exited",value:{opacity:0}}];var O=function(){var e=Object(i.f)(),t=Object(i.e)(),n=Object(a.useState)([]),c=Object(d.a)(n,2),o=c[0],l=c[1],u=Object(a.useState)([""]),f=Object(d.a)(u,2),b=f[0],p=f[1],h=Object(a.useState)(0),O=Object(d.a)(h,2),k=O[0],N=O[1],S=Object(a.useState)(!1),C=Object(d.a)(S,2),T=C[0],z=C[1],_=r.a.useState(!0),q=Object(d.a)(_,2),A=q[0],M=q[1],F=r.a.useState(""),Q=Object(d.a)(F,2),D=Q[0],J=Q[1],Y=Object(a.useState)(10),B=Object(d.a)(Y,2),H=B[0],I=B[1],P=function(e){"dec"===e&&0===k||"inc"===e&&k===o.length-1||(M(!1),J(e))};Object(a.useEffect)((function(){console.log("calleed");var e=setTimeout((function(){0!==H||T?H>0&&I(H-1):(z(!0),alert("You have "+o.map((function(e){return e.correct_answer})).filter((function(e){return b.includes(e)})).length+" correct answer"))}),1e3);return function(){return clearTimeout(e)}}),[H,b,o,T]),Object(a.useEffect)((function(){(function(){var t=Object(m.a)(s.a.mark((function t(){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://opentdb.com/api.php"+e.search);case 2:return n=t.sent,t.next=5,n.json();case 5:(a=t.sent).results.forEach((function(e){e.options=e.incorrect_answers.concat(e.correct_answer).sort((function(){return Math.random()-.5}))})),l(a.results);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.search]);var R=function(e){T||(k<o.length-1&&M(!1),J("inc"),p([].concat(Object(g.a)(b.slice(0,k)),[e.currentTarget.innerText],Object(g.a)(b.slice(k+1,b.length)))))},G=o.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement("div",{className:"flex flex-row items-center justify-between mb-3 bg-gray-900 text-white h-12 md:rounded-md"},r.a.createElement("div",{className:"text-left pl-5"},k+1," / ",o.length),r.a.createElement("div",{className:"ext-center"},e.category),r.a.createElement("div",{className:"text-right w-10 pr-5"},H)),r.a.createElement("div",{key:t,className:"flex flex-col bg-gray-200 p-3 my-3 rounded-md h-48 text-lg text-center justify-center text-2xl font-extrabold text-gray-800"},v.a.decode(e.question)),r.a.createElement("div",{className:"flex flex-col justify-between mb-3"},e.options.map((function(t,n){return r.a.createElement(E,{key:n,text:t,selected:t===b[k],isTrue:T&&t===e.correct_answer,onClick:R})}))))}));return r.a.createElement("div",{className:"flex flex-col min-h-screen md:justify-center md:w-1/2 mx-auto"},r.a.createElement(x.a,{in:A,timeout:200,onExited:function(){M(!0),T||I(10),"inc"===D?N(k===o.length-1?k:k+1):"dec"===D&&N(0===k?0:k-1),J("")}},(function(e){return r.a.createElement("div",{style:Object(y.a)({},w,{},j.filter((function(t){return t.key===e}))[0].value)},G[k])})),r.a.createElement("div",{className:"flex flex-row justify-between items-center"},r.a.createElement("button",{type:"button",className:"w-1/3 flex-grow h-12 bg-gray-500 hover:bg-gray-400 md: rounded-md",onClick:function(){return P("dec")}},"Previous"),r.a.createElement("button",{type:"button",className:"w-1/3 mx-1 flex-grow h-12 text-white bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 md: rounded-md",onClick:function(){T?t.push("/"):(z(!0),I(0),alert("You have "+o.map((function(e){return e.correct_answer})).filter((function(e){return b.includes(e)})).length+" correct answer"))}},T?"Restart Quiz":"Finish Quiz"),r.a.createElement("button",{className:"w-1/3 flex-grow h-12 bg-gray-500 hover:bg-gray-400 md: rounded-md",onClick:function(){return P("inc")}},"Next")))};var k=function(){return r.a.createElement("div",{className:"min-h-screen"},r.a.createElement("div",{className:"mx-auto bg-gray-100 max-w-screen-lg"},r.a.createElement(l.a,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(p,null)),r.a.createElement(i.a,{path:"/quiz"},r.a.createElement(O,null)))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.0e2ac407.chunk.js.map