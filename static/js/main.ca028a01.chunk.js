(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(n,e,t){n.exports=t.p+"static/media/coordinator.f97cb68b.jpg"},28:function(n,e,t){n.exports=t.p+"static/media/tragedy.e9d81a7c.jpg"},29:function(n,e,t){n.exports=t.p+"static/media/expeditions.4f0742e2.png"},30:function(n,e,t){n.exports=t.p+"static/media/ufoviz.f3f5e666.jpg"},31:function(n,e,t){n.exports=t.p+"static/media/vscroll.c2e5f03f.png"},32:function(n,e,t){n.exports=t.p+"static/media/zookeeper.c7f103f0.png"},33:function(n,e,t){n.exports=t.p+"static/media/fruitrage.4e50f8e5.png"},34:function(n,e,t){n.exports=t.p+"static/media/inference.42b253e7.png"},41:function(n,e,t){n.exports=t(57)},46:function(n,e,t){},55:function(n,e,t){},57:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(8),o=t.n(i),c=t(60),m=(t(46),t(21)),l=t(22),u=t(36),p=t(23),s=t(39),f=t(37),g=t(38),d=t(12),h=t(3),x=t(7),b=t(4);function v(){var n=Object(h.a)(["\n  padding: 1.5rem 0;\n  height: 5rem;\n  margin: 0 5em;\n  & > div {\n    display: flex;\n    justify-content: center;\n  }\n  & ",": nth-child(1) {\n    margin-left: 15px;\n  }\n\n  @media (max-width: 480px) {\n    margin: 0 1em;\n    height: 50vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    & "," {\n      margin-left: 0px !important;\n    }\n\n    & ",": nth-child(2) {\n      margin-right: 7px;\n    }\n\n    & div {\n      width: 100%;\n    }\n  }\n"]);return v=function(){return n},n}function y(){var n=Object(h.a)(["\n  font-size: 2rem;\n  font-weight: 300;\n  line-height: 80px;\n  height: 80px;\n  float: left;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 1%;\n"]);return y=function(){return n},n}var j=["Teague","Ashcraft"],E={mass:5,tension:2e3,friction:200},w=Object(b.a)(x.a.div)(y()),O=b.a.div(v(),w,w,w),k=function(){var n=Object(a.useState)(!0),e=Object(d.a)(n,2),t=e[0],i=(e[1],Object(x.c)(j.length,{headerConfig:E,opacity:t?1:0,x:t?0:-20,height:t?80:0,from:{opacity:0,x:-20,height:0}}));return r.a.createElement(O,null,r.a.createElement("div",null,i.map(function(n,e){var t=n.x,a=n.height,i=Object(g.a)(n,["x","height"]);return r.a.createElement(w,{key:j[e],style:Object(f.a)({},i,{transform:t.interpolate(function(n){return"translate3d(0,".concat(n,"px,0)")})})},r.a.createElement(x.a.div,{style:{height:a}},j[e]))})))},z=t(62),C=t(61);function F(){var n=Object(h.a)(["\n  text-align: center;\n  padding: 2em 3em 3em 3em;\n  margin: 0 1em;\n\n  @media (max-width: 480px) {\n    font-size: 1.25em;\n    line-height: 3;\n    margin: 0 0.8em;\n    padding: 3em 0;\n    border-top: 1px solid #bcbcbc;\n    border-bottom: 1px solid #bcbcbc;\n  }\n"]);return F=function(){return n},n}var A=Object(b.a)(x.a.div)(F()),I=function(){var n=Object(x.b)(function(){return{opacity:0}}),e=Object(d.a)(n,2),t=e[0];return(0,e[1])({opacity:1}),r.a.createElement(A,{style:t},"I am a los angeles based software engineer and recent graduate of the university of southern california. I spend most of my engineering hours working with web technologies such as React, Node, and AWS. These are some of my projects.")},D=t(59);function J(){var n=Object(h.a)(["\n  font-family: phosphate;\n  color: #fff;\n  font-size: 2em;\n  text-align: center;\n  padding-top: 45px;\n\n  @media (max-width: 480px) {\n    font-size: 2.75em;\n  }\n"]);return J=function(){return n},n}function R(){var n=Object(h.a)(["\n  opacity: 0;\n  width: 250px;\n  height: 22rem;\n  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  background-image: url(",");\n  background-size: cover;\n  cursor: pointer;\n  &:hover {\n    box-shadow: -1px 10px 29px 0px rgba(0, 0, 0, 0.8);\n  }\n  animation: "," 1s ease 1s 1 forwards;\n\n  @media (max-width: 480px) {\n    height: 60vh;\n    width: 90vw;\n  }\n"]);return R=function(){return n},n}function S(){var n=Object(h.a)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]);return S=function(){return n},n}var T=Object(b.b)(S()),U=b.a.div(R(),function(n){return n.img},T),q=b.a.div(J()),B=function(n){var e=n.data,t=e.link,a=e.image,i=e.overlay,o=e.name;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("a",{style:{textDecoration:"none"},href:t},r.a.createElement(U,{img:a,key:i},r.a.createElement(q,null,i))):r.a.createElement(D.a,{style:{textDecoration:"none"},to:"/".concat(o)},r.a.createElement(U,{img:a,key:i},r.a.createElement(q,null,i))))},N=t(26);function W(){var n=Object(h.a)(["\n  margin: 2em;\n\n  & svg:hover {\n    cursor: pointer;\n    color: #388697;\n  }\n"]);return W=function(){return n},n}function G(){var n=Object(h.a)(["\n  color: #393942;\n"]);return G=function(){return n},n}function H(){var n=Object(h.a)(["\n  width: 100vw;\n  height: 6em;\n  margin-bottom: 5em;\n  display: flex;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n"]);return H=function(){return n},n}var K=b.a.div(H()),L=b.a.a(G()),M=b.a.div(W()),P=function(n){var e=n.icons;return r.a.createElement(K,null,e.map(function(n){return r.a.createElement(M,{key:n.name},r.a.createElement(L,{href:n.url},r.a.createElement(N.a,{icon:n.fontAwesomeClass,size:"3x"})))}))},Q=t(27),V=t.n(Q),X=t(28),Y=t.n(X),Z=t(29),$=t.n(Z),_=t(30),nn=t.n(_),en=t(31),tn=t.n(en),an=t(32),rn=t.n(an),on=t(33),cn=t.n(on),mn=t(34),ln=t.n(mn);function un(){var n=Object(h.a)(["\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  justify-items: center;\n  padding: 0rem 3rem 1.5rem 3rem;\n  margin: 1.5rem 0 1.5rem 0;\n\n  @media (max-width: 480px) {\n    padding: 5rem 3rem 1.5rem 3rem !important;\n    grid-gap: 50px;\n  }\n"]);return un=function(){return n},n}var pn=b.a.div(un()),sn="https://github.com/teagueash",fn=[{name:"github",fontAwesomeClass:["fab","github"],url:"https://github.com/teagueash"},{name:"linkedin",fontAwesomeClass:["fab","linkedin"],url:"https://www.linkedin.com/in/teagueash/"}],gn=[{name:"coordinator",image:V.a,overlay:"coordinator",link:"".concat(sn,"/lit-review-platform")},{name:"documenting tragedy",image:Y.a,overlay:"an american tragedy",link:!1},{name:"UFO data visualizations",image:nn.a,overlay:"area 51",link:"".concat(sn,"/ufo-sightings-datascience")},{name:"expeditions",image:$.a,overlay:"expeditions in space",link:!1},{name:"virtual scroll",image:tn.a,overlay:"basic virtual scroll",link:"".concat(sn,"/basic-virtual-scroll")},{name:"zookeeper",image:rn.a,overlay:"n-queens",link:"".concat(sn,"/zookeeper")},{name:"fruitrage",image:cn.a,overlay:"alpha-beta pruning",link:"".concat(sn,"/FruitRage")},{name:"inference engine",image:ln.a,overlay:"first-order logic resolution",link:"".concat(sn,"/inferenceEngine")}],dn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement(pn,null,gn.map(function(n){return r.a.createElement(B,{key:n.name,data:n})})),r.a.createElement(P,{icons:fn}))};function hn(){var n=Object(h.a)(["\n  opacity: 0;\n  margin-top: 25px;\n  text-align: center;\n  animation: "," 1s ease 1s 1 forwards;\n"]);return hn=function(){return n},n}function xn(){var n=Object(h.a)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]);return xn=function(){return n},n}var bn=Object(b.b)(xn()),vn=b.a.div(hn(),bn),yn=function(){return r.a.createElement(vn,null,"Unfortunately, this is a private repo. Check back later for screen grabs from the project")},jn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,null,r.a.createElement(C.a,{exact:!0,path:"/",component:dn}),r.a.createElement(C.a,{path:"/documenting tragedy",component:yn}),r.a.createElement(C.a,{path:"/expeditions",component:yn})))},En=t(10),wn=t(17);t(55);En.b.add(wn.a,wn.b);var On=function(n){function e(){return Object(m.a)(this,e),Object(u.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(s.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(jn,null))}}]),e}(a.Component);o.a.render(r.a.createElement(c.a,{basename:"/portfolio"},r.a.createElement(On,null)),document.getElementById("root"))}},[[41,2,1]]]);
//# sourceMappingURL=main.ca028a01.chunk.js.map