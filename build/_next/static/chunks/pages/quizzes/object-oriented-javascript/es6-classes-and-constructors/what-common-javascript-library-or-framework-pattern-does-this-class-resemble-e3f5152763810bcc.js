(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95088],{62215:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/object-oriented-javascript/es6-classes-and-constructors/what-common-javascript-library-or-framework-pattern-does-this-class-resemble",function(){return s(68672)}])},16833:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var n=s(85893),r=s(67294),o=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:s="6753219060",className:o}=e,a=(0,r.useRef)(null),i=(0,r.useRef)(!1),[c,d]=(0,r.useState)(!1);return((0,r.useEffect)(()=>(d(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,r.useEffect)(()=>{if(c){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))a.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{a.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0)}}}},[c]),c)?(0,n.jsx)("ins",{ref:a,className:"adsbygoogle ".concat(o),style:{display:"block"},"data-ad-client":t,"data-ad-slot":s}):null};function a(e){return class extends r.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,n.jsx)("div",{children:(0,n.jsx)(o,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,n.jsx)("div",{children:(0,n.jsx)(e,{...this.props})}),(0,n.jsx)("div",{children:(0,n.jsx)(o,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},68672:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return i}});var n=s(85893),r=s(1475),o=s(41354),a=s(16833),i=!0;t.default=(0,o.Z)((0,a.Z)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"ES6 Classes & Constructors"}),(0,n.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,n.jsx)(r.Y3,{activeQuestionIndex:10,totalQuestions:28,index:10,question:"What common JavaScript library or framework pattern does this class resemble?",options:["Express middleware","jQuery plugin","React component","Node.js module"],code:"class Component {\n  constructor(props) {\n    this.props = props;\n    this.state = {};\n  }\n  \n  setState(newState) {\n    this.state = {...this.state, ...newState};\n    this.render();\n  }\n  \n  render() {\n    throw new Error('You must implement render()'); \n  }\n}",nextQuestionPath:"what-does-super-draw-do-in-this-code",correctAnswer:3,explanation:"This class structure resembles a React component: 1) It has props passed at initialization, 2) It maintains internal state, 3) It has a setState method to update state immutably, 4) It requires a render method to be implemented, 5) Updates to state trigger re-rendering, 6) This pattern was common in React's class-based components before hooks were introduced, showing how ES6 classes were leveraged in major frameworks.",id:725,quizId:34},10)})]})))}},function(e){e.O(0,[41966,25675,61793,92888,49774,40179],function(){return e(e.s=62215)}),_N_E=e.O()}]);