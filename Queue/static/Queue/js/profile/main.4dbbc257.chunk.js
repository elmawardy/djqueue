(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,a){e.exports=a(311)},311:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(15),i=a.n(l),o=a(74),c=a(75),s=a(77),m=a(76),d=a(78),u=a(43),p=a.n(u),h=a(44),E=a.n(h),g=a(16),v=a.n(g),y=a(108),f=a.n(y),b=a(109),w=a.n(b),C=a(110),x=a.n(C),M=a(28),O=a.n(M),k=a(29),B=a.n(k),j=a(30),R=a.n(j),S=a(17),L=a.n(S),z=a(45),_=a.n(z),I=a(51),N=a.n(I),T=a(52),D=a.n(T),P=a(55),A=a(53),H=a.n(A),J=a(31),Y=a.n(J),F=a(27),G=a.n(F),U=a(46),W=a.n(U),q=a(50),K=a.n(q),Q=a(48),V=a.n(Q),X=a(49),Z=a.n(X),$=a(47),ee=a.n($),te=a(54),ae=a.n(te),ne=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState({auth:e.target.checked})},a.handleMenu=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.openResetModal=function(e){a.setState({resetModal:!0,toBresetCard:e})},a.closeResetModal=function(){a.setState({resetModal:!1})},a.state={auth:!0,profileOpen:!1,resetModal:!1,anchorEl:null,managedServices:[],username:"User",toBresetCard:null,resettingCard:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=Boolean(this.state.anchorEl);return r.a.createElement("div",null,r.a.createElement(p.a,{position:"static"},r.a.createElement(E.a,null,r.a.createElement(v.a,{style:{flexGrow:1},variant:"h6",color:"inherit"},"Profile"),this.state.auth&&r.a.createElement("div",null,r.a.createElement(L.a,{"aria-owns":t?"menu-appbar":void 0,"aria-haspopup":"true",onClick:this.handleMenu,color:"inherit"},"Howdy ",this.state.username,r.a.createElement(f.a,{style:{marginLeft:"10px"}})),r.a.createElement(_.a,{id:"menu-appbar",anchorEl:this.state.anchorEl,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:t,onClose:this.handleClose},r.a.createElement(O.a,{id:"chgPwdBtn"},r.a.createElement(B.a,null,r.a.createElement(w.a,null)),r.a.createElement(R.a,{inset:!0,primary:"Change Password"})),r.a.createElement(O.a,{id:"logoutBtn"},r.a.createElement(B.a,null,r.a.createElement(x.a,null)),r.a.createElement(R.a,{inset:!0,primary:"Logout"})))))),r.a.createElement(v.a,{color:"primary",style:{margin:"10px",marginTop:"30px",fontWeight:"bold"},variant:"h5",gutterBottom:!0},"My Services"),this.state.managedServices.length>0?r.a.createElement(P.b,{container:!0,spacing:8,style:{padding:"10px",width:"100%"}},this.state.managedServices.map(function(t,a){return r.a.createElement(P.b,{item:!0,xs:12,md:3,key:a},r.a.createElement(re,{serviceID:t.id,handlerResetClose:e.closeResetModal,handlerResetOpen:e.openResetModal,manageLink:t.href,service_name:t.service_name,currentNumber:t.currentNumber}))})):r.a.createElement(Y.a,{size:30,style:{margin:"10px"},color:"primary"}),r.a.createElement(W.a,{open:this.state.resetModal,TransitionComponent:le,keepMounted:!0,onClose:this.closeResetModal,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(ee.a,{id:"alert-dialog-slide-title"},this.state.resettingCard?"Resetting ...":"Service reset confirmation!"),this.state.resettingCard?r.a.createElement("div",{style:{padding:"20px"}},r.a.createElement(Y.a,{size:20,style:{marginLeft:"calc(50% - 10px)"},color:"primary"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,null,r.a.createElement(Z.a,{id:"alert-dialog-slide-description"},"Are you sure to reset the current number of ",this.state.toBresetCard&&r.a.createElement("strong",null,this.state.toBresetCard.service_name))),r.a.createElement(K.a,null,r.a.createElement(L.a,{onClick:this.closeResetModal,color:"primary"},"No"),r.a.createElement(L.a,{id:"resetYesBtn",color:"primary"},"Yes")))))}}]),t}(r.a.Component),re=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(P.a,{timeout:1e3,in:!0},r.a.createElement(N.a,null,r.a.createElement(D.a,{style:{paddingBottom:"10px"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(v.a,{style:{color:"gray"},variant:"h6",color:"inherit"},this.props.service_name),r.a.createElement(H.a,null),r.a.createElement(v.a,{color:"primary",variant:"h1",style:{marginTop:"15px",marginBottom:"15px"}},this.props.currentNumber)),r.a.createElement("div",null,r.a.createElement(L.a,{href:this.props.manageLink,variant:"contained",style:{backgroundColor:"teal",color:"white"}},"Manage"),r.a.createElement(L.a,{onClick:function(){return e.props.handlerResetOpen({service_name:e.props.service_name,serviceID:e.props.serviceID})},variant:"outlined",style:{marginLeft:"5px"},color:"primary"},"Reset",r.a.createElement(G.a,{color:"primary",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))))))}}]),t}(r.a.Component);function le(e){return r.a.createElement(ae.a,Object.assign({direction:"up"},e))}i.a.render(r.a.createElement(ne,{ref:function(e){window.profile=e}}),document.getElementById("root"))}},[[185,1,2]]]);
//# sourceMappingURL=main.4dbbc257.chunk.js.map