import{S as N,i as S,s as q,c as p,a as h,m as w,t as _,b as m,d as $,k as I,l as y,n as B,h as g,o as k,g as v,j as D,w as E,y as R,u as V,p as j,q as P,B as z,C as A}from"./index.9387a7f5.js";import"./ua-parser.7bf42864.js";import{S as F}from"./SmallParagraph.0e838e0b.js";import{R as G,I as C}from"./RawButton.76e72a28.js";function H(o){let t,n;return t=new C({props:{inverted:!o[0],name:"download"}}),{c(){p(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,r){w(t,e,r),n=!0},p(e,r){const l={};r&1&&(l.inverted=!e[0]),t.$set(l)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function J(o){let t,n;return t=new C({props:{inverted:!o[0],name:"arrow-forward"}}),{c(){p(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,r){w(t,e,r),n=!0},p(e,r){const l={};r&1&&(l.inverted=!e[0]),t.$set(l)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function K(o){let t,n;return t=new C({props:{inverted:!o[0],name:"open-in-new"}}),{c(){p(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,r){w(t,e,r),n=!0},p(e,r){const l={};r&1&&(l.inverted=!e[0]),t.$set(l)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function L(o){let t,n,e,r,l;const i=o[5].default,s=D(i,o,o[6],null),d=[K,J,H],u=[];function f(a,c){return a[1]?0:a[2]?1:a[3]?2:-1}return~(e=f(o))&&(r=u[e]=d[e](o)),{c(){s&&s.c(),t=E(),n=I("div"),r&&r.c(),this.h()},l(a){s&&s.l(a),t=R(a),n=y(a,"DIV",{class:!0});var c=B(n);r&&r.l(c),c.forEach(g),this.h()},h(){k(n,"class","inline relative top-0.5")},m(a,c){s&&s.m(a,c),v(a,t,c),v(a,n,c),~e&&u[e].m(n,null),l=!0},p(a,c){s&&s.p&&(!l||c&64)&&V(s,i,a,a[6],l?P(i,a[6],c,null):j(a[6]),null);let b=e;e=f(a),e===b?~e&&u[e].p(a,c):(r&&(z(),m(u[b],1,1,()=>{u[b]=null}),A()),~e?(r=u[e],r?r.p(a,c):(r=u[e]=d[e](a),r.c()),_(r,1),r.m(n,null)):r=null)},i(a){l||(_(s,a),_(r),l=!0)},o(a){m(s,a),m(r),l=!1},d(a){s&&s.d(a),a&&g(t),a&&g(n),~e&&u[e].d()}}}function M(o){let t,n,e,r;return n=new F({props:{$$slots:{default:[L]},$$scope:{ctx:o}}}),{c(){t=I("div"),p(n.$$.fragment),this.h()},l(l){t=y(l,"DIV",{class:!0});var i=B(t);h(n.$$.fragment,i),i.forEach(g),this.h()},h(){k(t,"class",e="rounded-lg h-12 px-4 "+(o[0]?"bg-green-300 text-black":"bg-green-900 text-white")+" center_row font-body")},m(l,i){v(l,t,i),w(n,t,null),r=!0},p(l,i){const s={};i&79&&(s.$$scope={dirty:i,ctx:l}),n.$set(s),(!r||i&1&&e!==(e="rounded-lg h-12 px-4 "+(l[0]?"bg-green-300 text-black":"bg-green-900 text-white")+" center_row font-body"))&&k(t,"class",e)},i(l){r||(_(n.$$.fragment,l),r=!0)},o(l){m(n.$$.fragment,l),r=!1},d(l){l&&g(t),$(n)}}}function O(o){let t,n;return t=new G({props:{onClick:o[4],$$slots:{default:[M]},$$scope:{ctx:o}}}),{c(){p(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,r){w(t,e,r),n=!0},p(e,[r]){const l={};r&16&&(l.onClick=e[4]),r&79&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function Q(o,t,n){let{$$slots:e={},$$scope:r}=t,{secondary:l=!1}=t,{openInNew:i=!1}=t,{next:s=!1}=t,{download:d=!1}=t,{onClick:u}=t;return o.$$set=f=>{"secondary"in f&&n(0,l=f.secondary),"openInNew"in f&&n(1,i=f.openInNew),"next"in f&&n(2,s=f.next),"download"in f&&n(3,d=f.download),"onClick"in f&&n(4,u=f.onClick),"$$scope"in f&&n(6,r=f.$$scope)},[l,i,s,d,u,e,r]}class Y extends N{constructor(t){super(),S(this,t,Q,O,q,{secondary:0,openInNew:1,next:2,download:3,onClick:4})}}export{Y as B};
