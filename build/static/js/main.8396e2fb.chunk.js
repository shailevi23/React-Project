(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(31)},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(5),c=t.n(l),s=t(7),i=t(2),m=t(10),o=t.n(m),u=t(12),d=t(3),f=(t(23),function(e){var a=e.users,t=e.isLoading,n=Object(i.f)();if(t)return r.a.createElement("p",null,"Loading...");return r.a.createElement("div",null,a.map(function(e){return r.a.createElement("div",{className:"tableBodyInnerDiv",hover:"true",key:e.login.username,onClick:function(){!function(e){n("/user/:"+e.login.username,{state:{location:e.location,img:e.picture.large,fname:e.name.first[0]+". "+e.name.last,email:e.email,gender:e.gender,age:e.dob.age}})}(e)}},r.a.createElement("div",{className:"img-div",key:e.picture.large}," ",r.a.createElement("img",{className:"body-image-div",src:e.picture.large,alt:"Avatar",style:{width:"120%",borderRadius:"100%"}})),r.a.createElement("div",{className:"fullname-div",key:e.name.first+e.name.last+e.login.username}," ",e.name.first[0]+". "+e.name.last),r.a.createElement("div",{className:"email-div",key:e.email}," ",r.a.createElement("a",{href:"mailto:"+e.email,style:{color:"aqua"}}," ",e.email," ")),r.a.createElement("div",{className:"age-and-gender-div",key:e.gender+e.login.username}," ",e.gender),r.a.createElement("div",{className:"age-and-gender-div",key:e.age+e.login.username}," ",e.dob.age))}))}),E=(t(24),function(e){var a=e.users,t=e.isLoading,l=Object(n.useState)([]),c=Object(d.a)(l,2),s=c[0],i=c[1],m=Object(n.useState)(1),o=Object(d.a)(m,2),u=o[0],E=o[1];if(Object(n.useEffect)(function(){},[u,s]),t)return r.a.createElement("p",null,"Loading...");var v=function(e){var t=u+1;1===e?a.sort(function(e,a){return a.dob.age-e.dob.age}):a.sort(function(e,a){return e.dob.age-a.dob.age}),i(a),E(t)},p=function(e){var t=u+1;1===e?a.sort(function(e,a){var t=(e.name.first[0]+e.name.last).toUpperCase(),n=(a.name.first[0]+a.name.last).toUpperCase();return t>n?-1:t<n?1:0}):a.sort(function(e,a){var t=(e.name.first[0]+e.name.last).toUpperCase(),n=(a.name.first[0]+a.name.last).toUpperCase();return t<n?-1:t>n?1:0}),i(t),E(t)},g=function(e){var t=u+1;1===e?a.sort(function(e,a){var t=e.email.toUpperCase(),n=a.email.toUpperCase();return t>n?-1:t<n?1:0}):a.sort(function(e,a){var t=e.email.toUpperCase(),n=a.email.toUpperCase();return t<n?-1:t>n?1:0}),i(t),E(t)};return r.a.createElement("div",{className:"main-div"},r.a.createElement("div",{className:"table-head"},r.a.createElement("div",{className:"img-head-div"},"Image"),r.a.createElement("div",{className:"fullname-head-div"},"Full Name",r.a.createElement("button",{onClick:function(){p(0)}},r.a.createElement("div",{className:"arrow down"})),r.a.createElement("button",{className:"button",onClick:function(){p(1)}},r.a.createElement("div",{className:"arrow up"}))),r.a.createElement("div",{className:"email-head-div"},"Email",r.a.createElement("button",{onClick:function(){g(0)}},r.a.createElement("div",{className:"arrow down"})),r.a.createElement("button",{onClick:function(){g(1)}},r.a.createElement("div",{className:"arrow up"}))),r.a.createElement("div",{className:"age-and-gender-head-div"},"Gender"),r.a.createElement("div",{className:"age-and-gender-head-div"},"Age",r.a.createElement("button",{onClick:function(){v(0)}},r.a.createElement("div",{className:"arrow down"})),r.a.createElement("button",{onClick:function(){v(1)}},r.a.createElement("div",{className:"arrow up"})))),r.a.createElement(f,{users:a,isLoading:t}))}),v=function(e){for(var a=e.usersPerPage,t=e.totalUsers,n=e.paginate,l=[],c=1;c<=Math.ceil(t/a);c++)l.push(c);return r.a.createElement("div",{className:"pagination",style:{display:"flex"}},l.map(function(e){return r.a.createElement("div",{key:e,className:"page-item"},r.a.createElement("button",{style:{fontSize:"larger"},onClick:function(){return n(e)}},e))}))},p=(t(25),function(){var e=Object(n.useState)(1),a=Object(d.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),s=Object(d.a)(c,2),i=s[0],m=s[1],f=Object(n.useState)(!1),p=Object(d.a)(f,2),g=p[0],b=p[1],N=Object(n.useState)(10),h=Object(d.a)(N,1)[0],y=Object(n.useState)(50),j=Object(d.a)(y,1)[0];function k(){return(k=Object(u.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,fetch("https://randomuser.me/api/?page="+t+"&results= "+h+"&seed="+t).then(function(e){return e.json()}).then(function(e){b(!1),m(e.results)});case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),b(!1),m(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,6]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){!function(){k.apply(this,arguments)}()},[t]),r.a.createElement("div",{className:"home-page"},r.a.createElement("header",{className:"home-page-header"},r.a.createElement("h1",null,"All Users"),r.a.createElement(E,{users:i,isLoading:g}),r.a.createElement(v,{usersPerPage:h,totalUsers:j,paginate:function(e){return l(e)}})))}),g=t(16),b=t(15),N=t(14),h=t.n(N),y=(t(28),function(e){var a=e.text;return r.a.createElement("div",{className:"pin"},r.a.createElement(b.a,{icon:h.a,className:"pin-icon"}),r.a.createElement("p",{className:"pin-text"},a))}),j=function(e){var a=e.location,t=e.zoomLevel;return r.a.createElement("div",{className:"map"},r.a.createElement("div",{className:"google-map"},r.a.createElement(g.a,{bootstrapURLKeys:{key:"AIzaSyBdIx0sm2lTIVzXyTGwsaNyLhSaXBDddKU"},defaultCenter:a,defaultZoom:t},r.a.createElement(y,{lat:a.lat,lng:a.lng,text:a.address}))))},k=(t(29),function(){var e=Object(i.f)(),a=Object(i.e)(),t={address:a.state.location.street.name+", "+a.state.location.city+", "+a.state.location.state,lat:parseInt(a.state.location.coordinates.latitude),lng:parseInt(a.state.location.coordinates.longitude)};return r.a.createElement("div",{className:"user-details"},r.a.createElement("header",{className:"user-details-header"},r.a.createElement("h1",null,"User Details"),r.a.createElement("div",{className:"user-box"},r.a.createElement("div",null," ",r.a.createElement("img",{src:a.state.img,alt:"Avatar",style:{borderRadius:"100%"}})),r.a.createElement("div",null," ",a.state.fname," "),r.a.createElement("div",null," ",r.a.createElement("a",{href:"mailto:"+a.state.email,style:{color:"aqua"}}," ",a.state.email," ")),r.a.createElement("div",null," ",a.state.gender," "),r.a.createElement("div",null," ",a.state.age," "),r.a.createElement(j,{location:t,zoomLevel:5}),r.a.createElement("button",{onClick:function(){return e(-1)}},r.a.createElement("div",{className:"arrow left"})))))}),w=function(){return r.a.createElement(s.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",element:r.a.createElement(p,null)}," ",r.a.createElement(p,null)," "),r.a.createElement(i.a,{exact:!0,path:"/user/:username",element:r.a.createElement(k,null)})))};t(30);c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.8396e2fb.chunk.js.map