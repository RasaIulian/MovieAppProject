(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,n,t){e.exports=t(83)},55:function(e,n,t){},83:function(e,n,t){"use strict";t.r(n);var r,a,o=t(0),i=t.n(o),c=t(43),l=t.n(c),u=(t(55),t(9)),s=t(3),m=t(4),d=t(5),f=d.b.div(r||(r=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 8vh;\n  background-image: linear-gradient(#fafafa, lightgrey);\n"]))),h=d.b.h1(a||(a=Object(m.a)(["\n  font-size: 2.5rem;\n  line-height: 1.05em;\n  color: #2b2922;\n  width: 100%;\n  max-width: 60rem;\n  text-align: center;\n  margin: 0.5rem auto;\n  padding: 1rem;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n"])));function b(e){var n=e.children;return i.a.createElement(f,null,i.a.createElement(h,null,n))}var g,p,v,y,w,E,x,j,O,k,S,L,z,F,C,G,M,I,T,_,A,P=t(26),R=d.b.div(g||(g=Object(m.a)(["\n  background-image: linear-gradient(#1e212b, darkgrey);\n  padding: 2rem 1.5rem;\n  min-height: 76dvh;\n"]))),N=d.b.div(p||(p=Object(m.a)(["\n  width: 100%;\n  max-width: 155rem;\n  margin: 0 auto;\n"]))),H=(d.b.h1(v||(v=Object(m.a)(["\n  text-align: center;\n  margin-bottom: 3rem;\n  color: #fafafa;\n"]))),d.b.div(y||(y=Object(m.a)(["\n  min-height: 20rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"])))),V=d.b.div(w||(w=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  width: 100%;\n  background-color: rgba(250, 250, 250, 0.15);\n  color: #ff8427;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n"]))),B=d.b.div(E||(E=Object(m.a)(["\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  background-color: rgba(250, 250, 250, 0.15);\n  color: rgb(255, 132, 39);\n  font-size: 1.6rem;\n  border-radius: 5px;\n"]))),D=d.b.div(x||(x=Object(m.a)(["\n  max-width: 25rem;\n  width: 100%;\n  margin: 0 1.5rem 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: top;\n  align-items: center;\n  padding: 1.5rem 1.5rem;\n  background-color: #fafafa;\n  text-align: center;\n  border-radius: 3rem;\n  transition: background-color 0.2s ease-in-out;\n\n  position: relative;\n\n  &:hover {\n    background-color: #eaeaea;\n  }\n"]))),Y=d.b.div(j||(j=Object(m.a)(["\n  width: 25rem;\n  overflow: hidden;\n  border-top-left-radius: 1.8rem;\n  border-top-right-radius: 1.8rem;\n  border-bottom-right-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n"]))),J=d.b.img(O||(O=Object(m.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 1.8rem 1.8rem 0.5rem 0.5rem;\n  display: block;\n  transition: transform 0.1s ease-in-out;\n\n  ",":hover & {\n    transform: scale(1.05);\n  }\n"])),D),q=d.b.h2(k||(k=Object(m.a)(["\n  font-size: 1.8rem;\n  line-height: 2.4rem;\n  font-weight: bold;\n  color: #2b2922;\n  padding: 5px;\n"]))),W=d.b.div(S||(S=Object(m.a)(["\n  min-height: ",";\n  align-items: center;\n  justify-content: center;\n  display: flex;\n"])),function(e){return e.size}),X=Object(d.b)(P.a).attrs(function(e){return{icon:e.icon,style:{color:"true"===e.ismoviefavorite?"gold":"rgba(100, 100, 100, 0.5)"}}})(L||(L=Object(m.a)(["\n  display: inline-block;\n  width: 3rem;\n  height: 3rem;\n  z-index: 4;\n  cursor: pointer;\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),K=(d.b.div(z||(z=Object(m.a)(["\n  text-align: center;\n  justify-content: center;\n  margin: 2rem 0;\n  font-size: 1.5rem;\n  background-image: linear-gradient(#1e212b, darkgrey);\n  padding: 2rem 1.5rem;\n  min-height: 62vh;\n"]))),t(18)),Q=t(25),U=t(12);function Z(e){var n=e.fetching,t=e.titleInfo,r=e.error,a=e.handleFavoriteClick,o=e.favoriteMovies;return i.a.createElement(R,null,i.a.createElement(N,null,i.a.createElement(H,null,n&&i.a.createElement(V,null,"Loading movies..."),r&&i.a.createElement(B,null,"Error: ",r),!n&&!r&&t.length>0&&t.map(function(e){var n=o.some(function(n){return n.imdbid===e.imdbid});return i.a.createElement(D,{key:e.rank},i.a.createElement(W,{size:"40rem"},i.a.createElement(U.b,{to:"/".concat(e.rank)},i.a.createElement(Y,null,i.a.createElement(J,{src:e.image})),i.a.createElement(q,null,"Rank: ",e.rank),i.a.createElement(W,{size:"8rem"},i.a.createElement(q,null,e.title)),i.a.createElement(q,null,"Release year: ",e.year),i.a.createElement(q,null,"Rating: ",e.rating),i.a.createElement(W,{size:"8rem"},i.a.createElement(q,null,"Genre:"," ",e.genre.map(function(e,n){return i.a.createElement("span",{key:n},e)}).reduce(function(e,n){return[e,", ",n]}))))),i.a.createElement(X,{icon:!0===n?K.b:Q.a,ismoviefavorite:n?"true":"false",onClick:function(n){n.stopPropagation(),a(e)},title:"Add/Remove Favourite"}))}))))}var $,ee,ne,te,re,ae,oe=d.b.div(F||(F=Object(m.a)(["\n  padding: 0.5rem 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-image: linear-gradient(#1e212bbd, #eaeaea);\n  min-height: 5rem;\n"]))),ie=d.b.img(C||(C=Object(m.a)(["\n  display: block;\n  z-index: 9999;\n  max-height: 4rem;\n  border-radius: 1rem;\n  margin: 8px 1.6rem 8px 0;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);\n  transition: transform 0.3s;\n"]))),ce=d.b.div(G||(G=Object(m.a)(["\n  width: 100%;\n  max-width: 150rem;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 auto;\n"]))),le=d.b.nav(M||(M=Object(m.a)(["\n  display: flex;\n  align-items: center;\n"]))),ue=Object(d.b)(U.b)(I||(I=Object(m.a)(["\n  color: #fafafa;\n  background-color: #1e212b;\n  display: block;\n  font-size: 1.8rem;\n  line-height: 3rem;\n  font-weight: 600;\n  padding: 8px 1.6rem;\n  position: relative;\n  border-radius: 5px;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);\n  transition: transform 0.3s;\n  &:focus,\n  &:active {\n    box-shadow: none;\n    border: none;\n  }\n"]))),se=d.b.div(T||(T=Object(m.a)(["\n  position: absolute;\n  left: 19rem;\n  &:focus,\n  &:active {\n    box-shadow: none;\n    border: none;\n  }\n"]))),me=d.b.select(_||(_=Object(m.a)(["\n  padding: 0.5rem;\n  cursor: pointer;\n  height: 4rem;\n  color: #2b2922;\n  font-size: 1.8rem;\n  font-weight: bold;\n  background-color: rgba(200, 200, 200, 0.9);\n  border-radius: 1rem;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);\n  transition: box-shadow 0.3s;\n  &:focus,\n  &:active {\n    box-shadow: none;\n    outline: none;\n  }\n\n  @media (max-width: 420px) {\n    display: none;\n  }\n"]))),de=d.b.option(A||(A=Object(m.a)(["\n  &:focus,\n  &:active {\n    box-shadow: none;\n    border: none;\n  }\n"]))),fe=d.b.div($||($=Object(m.a)(["\n  display: flex;\n  border-radius: 1rem;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  color: #2b2922;\n  background-color: rgba(200, 200, 200, 0.9);\n  z-index: 5;\n  height: 3rem;\n  padding: 0.5rem;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  transition: box-shadow 0.3s;\n  &:active,\n  :focus {\n    box-shadow: none;\n  }\n\n  &::after {\n    content: attr(data-favorites);\n    margin-left: 0.5rem;\n    font-weight: bold;\n    position: absolute;\n    top: 1rem;\n    left: 5.1rem;\n    color: #2b2922;\n    z-index: 6;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    width: 2rem;\n    text-align: center;\n  }\n"]))),he=function(e){var n=e.favoriteMovies,t=e.toggleShowFavorites,r=n.length>0;return i.a.createElement(ce,null,i.a.createElement(le,null,i.a.createElement(fe,{onClick:t,"data-favorites":r?n.length:"",title:!0===r?n.length+" Favorites":"No favorite movies selected."},i.a.createElement(q,null,"Fav\xa0"),i.a.createElement(X,{icon:!0===r?K.b:Q.a,ismoviefavorite:r?"true":"false"}))))};function be(e){var n=e.searchValue,t=e.handleSearch,r=e.favoriteMovies,a=e.toggleShowFavorites,o=e.handleHomeClick,c=e.favoritesButtonClicked,l=e.selectedGenre,u=e.setSelectedGenre,s=e.genres;return i.a.createElement(oe,null,i.a.createElement(ce,null,i.a.createElement(U.b,{to:"/",onClick:o},i.a.createElement(ie,{src:"https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100",alt:"Reload Logo",title:"Home"})),i.a.createElement(he,{favoriteMovies:r,toggleShowFavorites:a},"Fav"),i.a.createElement(se,null,i.a.createElement(me,{id:"genre-select",value:l,onChange:function(e){return u(e.target.value)}},i.a.createElement(de,{value:"",title:"Genres filter"},"All Genres"),s&&s.map(function(e){return i.a.createElement(de,{key:e,value:e},e)}))),!c&&i.a.createElement(Oe,{type:"search",placeholder:"",id:"Search",value:n,onChange:function(e){return t(e.target.value)}})))}function ge(){return i.a.createElement(oe,null,i.a.createElement(ce,null,i.a.createElement(le,null,i.a.createElement(ue,{to:"/"},"HomePage"))))}var pe,ve,ye,we=d.b.div(ee||(ee=Object(m.a)(["\n  display: block;\n  width: 100%;\n  min-width: 30rem;\n\n  ","\n"])),function(e){return e.noMargin?"":Object(d.a)(ne||(ne=Object(m.a)(["\n          margin-bottom: 1rem;\n        "])))}),Ee=Object(d.b)(P.a)(te||(te=Object(m.a)(["\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  display: block;\n  width: 2rem;\n  height: 2rem;\n  position: absolute;\n  right: 1rem;\n  transform: translateY(-45%);\n  color: rgba(100, 100, 100, 0.5);\n  z-index: 4;\n"]))),xe=Object(d.a)(re||(re=Object(m.a)(["\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  color: #1e212b;\n  display: block;\n  max-width: 20%;\n  padding: 0.7rem 1rem;\n  border-radius: 1rem;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);\n  margin: 5px 0;\n  transition: box-shadow 0.3s;\n\n  &:focus {\n    box-shadow: none;\n  }\n"]))),je=d.b.input(ae||(ae=Object(m.a)(["\n  ",'\n  &[type="search"] {\n    height: 4rem;\n    position: absolute;\n    right: 0;\n    transform: translateY(-60%);\n    background-color: rgba(200, 200, 200, 0.9);\n    font-size: 1.7rem;\n    z-index: 3;\n  }\n'])),xe);function Oe(e){var n=e.type,t=e.value,r=e.onChange,a=e.placeholder,c=Object(o.useState)(!1),l=Object(s.a)(c,2),u=l[0],m=l[1];return i.a.createElement(we,{noMargin:!0},!u&&i.a.createElement(Ee,{icon:K.a})," ",i.a.createElement(je,{type:n,value:t,placeholder:a,onChange:r,onFocus:function(){m(!0)},onBlur:function(){m(!1)},name:"search"}))}var ke=d.b.div(pe||(pe=Object(m.a)(["\n  background-color: #1e212b;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  max-width: 100vw;\n"]))),Se=d.b.h3(ve||(ve=Object(m.a)(["\n  color: #fafafa;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  font-weight: 400;\n  padding: 1rem 1.5rem;\n  text-align: right;\n  &:screen {\n  }\n"]))),Le=d.b.a(ye||(ye=Object(m.a)(["\n  color: #fafafa;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  font-weight: 400;\n  transition: color 0.3s;\n  &:hover {\n    color: lightskyblue;\n  }\n"])));function ze(){return i.a.createElement(ke,null,i.a.createElement(Se,null,"Designed and developed by: ",i.a.createElement("br",null),i.a.createElement(Le,{href:"mailto:ilie.rasa@gmail.com"},"Rasa I. Front-end Developer")," "))}function Fe(e){var n=e.children,t=e.searchValue,r=e.handleSearch,a=e.handleHomeClick,o=e.favoriteMovies,c=e.toggleShowFavorites,l=e.favoritesButtonClicked,u=e.selectedGenre,s=e.setSelectedGenre,m=e.genres;return i.a.createElement(i.a.Fragment,null,i.a.createElement(be,{searchValue:t,handleSearch:r,favoriteMovies:o,toggleShowFavorites:c,handleHomeClick:a,favoritesButtonClicked:l,selectedGenre:u,setSelectedGenre:s,genres:m}),n,i.a.createElement(ze,null))}function Ce(e){var n=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(ge,null),n,i.a.createElement(ze,null))}var Ge=t(10),Me=t(47),Ie=t.n(Me);function Te(){Te=function(){return n};var e,n={},t=Object.prototype,r=t.hasOwnProperty,a=Object.defineProperty||function(e,n,t){e[n]=t.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(e,n,t){return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{u({},"")}catch(e){u=function(e,n,t){return e[n]=t}}function s(e,n,t,r){var o=n&&n.prototype instanceof p?n:p,i=Object.create(o.prototype),c=new C(r||[]);return a(i,"_invoke",{value:S(e,t,c)}),i}function m(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(e){return{type:"throw",arg:e}}}n.wrap=s;var d="suspendedStart",f="suspendedYield",h="executing",b="completed",g={};function p(){}function v(){}function y(){}var w={};u(w,i,function(){return this});var E=Object.getPrototypeOf,x=E&&E(E(G([])));x&&x!==t&&r.call(x,i)&&(w=x);var j=y.prototype=p.prototype=Object.create(w);function O(e){["next","throw","return"].forEach(function(n){u(e,n,function(e){return this._invoke(n,e)})})}function k(e,n){function t(a,o,i,c){var l=m(e[a],e,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?n.resolve(s.__await).then(function(e){t("next",e,i,c)},function(e){t("throw",e,i,c)}):n.resolve(s).then(function(e){u.value=e,i(u)},function(e){return t("throw",e,i,c)})}c(l.arg)}var o;a(this,"_invoke",{value:function(e,r){function a(){return new n(function(n,a){t(e,r,n,a)})}return o=o?o.then(a,a):a()}})}function S(n,t,r){var a=d;return function(o,i){if(a===h)throw Error("Generator is already running");if(a===b){if("throw"===o)throw i;return{value:e,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var l=L(c,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=b,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=h;var u=m(n,t,r);if("normal"===u.type){if(a=r.done?b:f,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(a=b,r.method="throw",r.arg=u.arg)}}}function L(n,t){var r=t.method,a=n.iterator[r];if(a===e)return t.delegate=null,"throw"===r&&n.iterator.return&&(t.method="return",t.arg=e,L(n,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=m(a,n.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,g;var i=o.arg;return i?i.done?(t[n.resultName]=i.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=e),t.delegate=null,g):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function z(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function F(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(z,this),this.reset(!0)}function G(n){if(n||""===n){var t=n[i];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var a=-1,o=function t(){for(;++a<n.length;)if(r.call(n,a))return t.value=n[a],t.done=!1,t;return t.value=e,t.done=!0,t};return o.next=o}}throw new TypeError(typeof n+" is not iterable")}return v.prototype=y,a(j,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:v,configurable:!0}),v.displayName=u(y,l,"GeneratorFunction"),n.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,l,"GeneratorFunction")),e.prototype=Object.create(j),e},n.awrap=function(e){return{__await:e}},O(k.prototype),u(k.prototype,c,function(){return this}),n.AsyncIterator=k,n.async=function(e,t,r,a,o){void 0===o&&(o=Promise);var i=new k(s(e,t,r,a),o);return n.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},O(j),u(j,l,"Generator"),u(j,i,function(){return this}),u(j,"toString",function(){return"[object Generator]"}),n.keys=function(e){var n=Object(e),t=[];for(var r in n)t.push(r);return t.reverse(),function e(){for(;t.length;){var r=t.pop();if(r in n)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=G,C.prototype={constructor:C,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!n)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function a(r,a){return c.type="throw",c.arg=n,t.next=r,a&&(t.method="next",t.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,n){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=n,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),g},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),F(t),g}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===e){var r=t.completion;if("throw"===r.type){var a=r.arg;F(t)}return a}}throw Error("illegal catch attempt")},delegateYield:function(n,t,r){return this.delegate={iterator:G(n),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=e),g}},n}function _e(e){var n=Object(o.useState)([]),t=Object(s.a)(n,2),r=t[0],a=t[1],i=Object(o.useState)(""),c=Object(s.a)(i,2),l=c[0],u=c[1],m=Object(o.useState)(!0),d=Object(s.a)(m,2),f=d[0],h=d[1],b={method:"GET",url:e?"https://imdb-top-100-movies.p.rapidapi.com/top"+e:"https://imdb-top-100-movies.p.rapidapi.com/",headers:{"X-RapidAPI-Key":"dba5d11475msh67833a57c148263p1a7846jsna1ce2112129b","X-RapidAPI-Host":"imdb-top-100-movies.p.rapidapi.com"}};function g(){return(g=Object(Ge.a)(Te().mark(function e(n){var t,r,o,i;return Te().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ie.a.request(b);case 3:t=e.sent,r=t.data,o=t.status,i=t.statusText,200===o?a(r):u(i),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),e.t0.response?u("Status ".concat(e.t0.response.status,"; ").concat(e.t0.response.data.message)||!1):e.t0.request?u("No response from server. Please try again."):u(e.t0.message);case 13:return e.prev=13,h(!1),e.finish(13);case 16:case"end":return e.stop()}},e,null,[[0,10,13,16]])}))).apply(this,arguments)}return Object(o.useEffect)(function(){!function(e){g.apply(this,arguments)}(e||"")},[]),{fetching:f,titleInfo:r,error:l}}var Ae,Pe,Re,Ne,He,Ve,Be,De,Ye,Je,qe,We=t(6),Xe={button:{height:"4rem",width:"4rem",position:"fixed",bottom:"1.5rem",right:"1rem",fontSize:"1.8rem",lineHeight:"3rem",backgroundColor:"rgba(255, 255, 255, 0.5)",color:"#1e212b",border:"1px solid rgba(255, 255, 255, 0.5)",borderRadius:"50%",cursor:"pointer",transition:"all 0.3s ease",transform:"rotate(-90deg)"},hover:{backgroundColor:"rgba(30, 33, 43, 0.5)",color:"#fff"},default:{backgroundColor:"rgba(255, 255, 255, 0.5)",color:"#1e212b"}},Ke=function(){var e=Object(o.useState)(!1),n=Object(s.a)(e,2),t=n[0],r=n[1],a=Object(o.useState)(!1),c=Object(s.a)(a,2),l=c[0],u=c[1],m=function(){window.scrollY>600?r(!0):r(!1)};Object(o.useEffect)(function(){return window.addEventListener("scroll",m),function(){window.removeEventListener("scroll",m)}},[]);return i.a.createElement("div",null,t&&i.a.createElement("button",{title:"Go to top",onClick:function(){window.scrollTo({top:0,behavior:"smooth"}),setTimeout(function(){u(!1)},100)},style:Object(We.a)({},Xe.button,l?Xe.hover:Xe.default),onMouseEnter:function(){u(!0)},onMouseLeave:function(){u(!1)}},">"))};function Qe(){var e=_e(),n=e.fetching,t=e.titleInfo,r=e.error,a=Object(o.useState)([]),c=Object(s.a)(a,2),l=c[0],m=c[1],d=Object(o.useState)([]),f=Object(s.a)(d,2),h=f[0],g=f[1],p=Object(o.useState)(""),v=Object(s.a)(p,2),y=v[0],w=v[1],E=Object(o.useState)(!1),x=Object(s.a)(E,2),j=x[0],O=x[1],k=Object(o.useState)(JSON.parse(localStorage.getItem("favoriteMovies"))||[]),S=Object(s.a)(k,2),L=S[0],z=S[1],F=Object(o.useState)(!1),C=Object(s.a)(F,2),G=C[0],M=C[1],I=Object(o.useState)(!1),T=Object(s.a)(I,2),_=T[0],A=T[1],P=Object(o.useState)(""),D=Object(s.a)(P,2),Y=D[0],J=D[1];Object(o.useEffect)(function(){m(t)},[t]),Object(o.useEffect)(function(){O(!0);var e=function(e,n){var t,r=function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];clearTimeout(t),t=setTimeout(function(){clearTimeout(t),e.apply(void 0,a)},n)};return r.clear=function(){clearTimeout(t)},r}(function(){if(y){var e=y.toLowerCase(),n=l.filter(function(n){return n.title.toLowerCase().includes(e)});g(n),O(!1)}else g([]),O(!1)},300);return e(),function(){e.clear()}},[y,l]),Object(o.useEffect)(function(){localStorage.setItem("favoriteMovies",JSON.stringify(L))},[L]);var q=function(e){if(L.some(function(n){return n.imdbid===e.imdbid})){var n=L.filter(function(n){return n.imdbid!==e.imdbid});z(n),0===n.length&&(M(!1),A(!1))}else z([].concat(Object(u.a)(L),[e])),G||M(!0)},W=function(e,n){return n?e.filter(function(e){return e.genre.includes(n)}):e};return i.a.createElement(Fe,{searchValue:y,handleSearch:w,favoriteMovies:L,handleFavoriteClick:q,showFavorites:G,setShowFavorites:M,toggleShowFavorites:function(){M(function(e){return!e}),L.length>0?A(function(e){return!e}):A(!1),_||(w(""),g([]))},handleHomeClick:function(){M(!1),A(!1)},favoritesButtonClicked:_,selectedGenre:Y,setSelectedGenre:J,genres:["Action","Adventure","Animation","Comedy","Drama","Fantasy","Horror","Mystery","Romance","Sci-Fi"]},_&&L.length>0?i.a.createElement(b,null,"FAVORITE MOVIES"):i.a.createElement(b,null,"WELCOME TO THE MOVIE DATABASE APP"),y&&j?i.a.createElement(R,null,i.a.createElement(N,null,i.a.createElement(H,null,i.a.createElement(V,null,"Searching...")))):y&&!j&&0===h.length?i.a.createElement(R,null,i.a.createElement(N,null,i.a.createElement(H,null,i.a.createElement(B,null,'No movies found for "',y,'", please try again')))):i.a.createElement(Z,{fetching:n,titleInfo:_&&L.length>0?W(L,Y):W(y?h:t,Y),error:r,favoriteMovies:L,handleFavoriteClick:q,searchValue:y}),i.a.createElement(Ke,null))}var Ue=d.b.div(Ae||(Ae=Object(m.a)(["\n  background-image: linear-gradient(#1e212b, darkgrey);\n  padding: 1rem 1.5rem;\n  min-height: 60vh;\n"]))),Ze=d.b.div(Pe||(Pe=Object(m.a)(["\n  width: 100%;\n  max-width: 120rem;\n  margin: 0 auto;\n"]))),$e=(d.b.h1(Re||(Re=Object(m.a)(["\n  text-align: center;\n  margin-bottom: 3rem;\n  color: #fafafa;\n"]))),d.b.div(Ne||(Ne=Object(m.a)(["\n  min-height: 80rem;\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 120rem;\n  justify-content: center;\n"])))),en=d.b.div(He||(He=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  background-color: rgba(250, 250, 250, 0.15);\n  color: #ff8427;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  border-radius: 5px;\n"]))),nn=d.b.div(Ve||(Ve=Object(m.a)(["\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  background-color: rgba(250, 250, 250, 0.15);\n  color: rgb(255, 132, 39);\n  font-size: 1.6rem;\n  border-radius: 5px;\n"]))),tn=d.b.div(Be||(Be=Object(m.a)(["\n  max-width: calc(100% - 3rem);\n  margin: 0 1.5rem 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: top;\n  padding: 1.5rem 1.5rem;\n  background-color: #fafafa;\n  text-align: center;\n  border-radius: 3rem;\n  transition: background-color 0.3s;\n"]))),rn=d.b.img(De||(De=Object(m.a)(["\n  width: 100%;\n  max-width: 38rem;\n  border-radius: 2rem;\n  display: block;\n  margin: 0 auto;\n  box-shadow: 0px 2px 3px 3px rgba(0, 0, 0, 0.2);\n"]))),an=d.b.h2(Ye||(Ye=Object(m.a)(["\n  font-size: 1.6rem;\n  line-height: 1.8rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n  color: #2b2922;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  padding: 5px;\n"]))),on=d.b.div(Je||(Je=Object(m.a)(["\n  width: 100%;\n  min-height: 40rem;\n  border-radius: 5px;\n  overflow: hidden;\n  margin-bottom: 1rem;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n  position: relative;\n"]))),cn=d.b.iframe(qe||(qe=Object(m.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  border-radius: 5px;\n"])));function ln(e){var n=e.fetching,t=e.titleInfo,r=e.error;return i.a.createElement(Ue,null,i.a.createElement(Ze,null,i.a.createElement($e,null,n&&i.a.createElement(en,null,"Loading movie details..."),r&&i.a.createElement(nn,null,"Error: ",r),!n&&!r&&i.a.createElement(tn,null,i.a.createElement(rn,{src:t.big_image}),i.a.createElement(an,null,"Rank: ",t.rank),i.a.createElement(an,null,"Title: ",t.title),i.a.createElement(an,null,"Release Year: ",t.year),i.a.createElement(an,null,"Rating: ",t.rating),i.a.createElement(an,null,"Genre:"," ",t.genre.map(function(e,n){return i.a.createElement("span",{key:n},e,n!==t.genre.length-1&&", ")})),i.a.createElement(an,null,"Directors: ",t.director),i.a.createElement(an,null,"Writers:"," ",t.writers.map(function(e,n){return i.a.createElement("span",{key:n},e,n!==t.writers.length-1&&", ")})),i.a.createElement(an,null,"Description: ",t.description),i.a.createElement(on,null,i.a.createElement(cn,{src:t.trailer_embed_link,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",allowfullscreen:!0,title:"YouTube trailer"})),i.a.createElement(U.b,{to:t.imdb_link,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(an,null,"View on IMDb"))))))}var un=t(2);function sn(){var e=_e(Object(un.q)().rank),n=e.fetching,t=e.titleInfo,r=e.error;return i.a.createElement(Ce,null,i.a.createElement(b,null,t.title),i.a.createElement(ln,{fetching:n,titleInfo:t,error:r}))}var mn=[{path:"/",component:i.a.createElement(Qe,null)},{path:"/:rank",component:i.a.createElement(sn,null)}],dn="/MovieAppProject";var fn=function(){return i.a.createElement(U.a,{basename:dn},i.a.createElement(un.c,null,mn.map(function(e){return i.a.createElement(un.a,{path:e.path,element:e.component,key:e.path})})))};l.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(fn,null)))}},[[48,1,2]]]);
//# sourceMappingURL=main.f6815585.chunk.js.map