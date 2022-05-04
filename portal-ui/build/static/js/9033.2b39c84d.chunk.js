"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9033],{24065:function(e,t,s){s.r(t),s.d(t,{default:function(){return O}});var n=s(29439),a=s(1413),r=s(72791),o=s(60364),c=s(11135),i=s(25787),l=s(61889),u=s(81207),d=s(64554),h=s(42649),f=s(56375),m=s(92983),p=s(21639),x=s(32291),Z=s(23814),g=s(56028),j=s(21435),v=s(36151),w=s(40986),S=s(80184),b=(0,o.$j)(null,{setModalErrorSnackMessage:h.zb}),y=(0,i.Z)((function(e){return(0,c.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},Z.ID),Z.DF),Z.bK),(0,Z.Bz)(e.spacing(4))))}))(b((function(e){var t=e.classes,s=e.open,a=e.closeModal,o=e.setModalErrorSnackMessage,c=(0,r.useState)(""),i=(0,n.Z)(c,2),d=i[0],h=i[1],m=(0,r.useState)(""),p=(0,n.Z)(m,2),x=p[0],Z=p[1],b=(0,r.useState)(""),y=(0,n.Z)(b,2),C=y[0],A=y[1],P=(0,r.useState)(!1),k=(0,n.Z)(P,2),M=k[0],E=k[1];return s?(0,S.jsx)(g.Z,{title:"Change Password",modalOpen:s,onClose:function(){Z(""),A(""),h(""),a()},titleIcon:(0,S.jsx)(f.IaT,{}),children:(0,S.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){!function(e){if(e.preventDefault(),x===C){if(x.length<8)o({errorMessage:"Passwords must be at least 8 characters long",detailedError:""});else if(!M){E(!0);var t={current_secret_key:d,new_secret_key:x};u.Z.invoke("POST","/api/v1/account/change-password",t).then((function(){E(!1),Z(""),A(""),h(""),a()})).catch((function(e){E(!1),Z(""),A(""),h(""),o(e)}))}}else o({errorMessage:"New passwords don't match",detailedError:""})}(e)},children:(0,S.jsxs)(l.ZP,{container:!0,children:[(0,S.jsxs)(l.ZP,{item:!0,xs:12,className:t.modalFormScrollable,children:[(0,S.jsx)(l.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,S.jsx)(j.Z,{id:"current-password",name:"current-password",onChange:function(e){h(e.target.value)},label:"Current Password",type:"password",value:d})}),(0,S.jsx)(l.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,S.jsx)(j.Z,{id:"new-password",name:"new-password",onChange:function(e){Z(e.target.value)},label:"New Password",type:"password",value:x})}),(0,S.jsx)(l.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,S.jsx)(j.Z,{id:"re-new-password",name:"re-new-password",onChange:function(e){A(e.target.value)},label:"Type New Password Again",type:"password",value:C})})]}),(0,S.jsx)(l.ZP,{item:!0,xs:12,className:t.modalButtonBar,children:(0,S.jsx)(v.Z,{type:"submit",variant:"contained",color:"primary",disabled:M||!(d.length>0&&x.length>0&&C.length>0),children:"Save"})}),M&&(0,S.jsx)(l.ZP,{item:!0,xs:12,children:(0,S.jsx)(w.Z,{})})]})})}):null}))),C=s(23804),A=s(74794),P=s(59114),k=s(75578),M=s(56087),E=s(38442),N=s(40603),F=s(58493),R=s(18303),_=s(14048),D=(0,k.Z)(r.lazy((function(){return s.e(3956).then(s.bind(s,23956))}))),I=(0,o.$j)(null,{displayErrorMessage:h.Ih}),O=(0,i.Z)((function(e){return(0,c.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},Z.OR),Z.qg),{},{searchField:(0,a.Z)((0,a.Z)({},Z.qg.searchField),{},{marginRight:"auto",maxWidth:380})},Z.VX),(0,Z.Bz)(e.spacing(4))))}))(I((function(e){var t=e.classes,s=e.displayErrorMessage,a=e.history,o=(0,r.useState)([]),c=(0,n.Z)(o,2),i=c[0],Z=c[1],g=(0,r.useState)(!1),j=(0,n.Z)(g,2),v=j[0],w=j[1],b=(0,r.useState)(""),k=(0,n.Z)(b,2),I=k[0],O=k[1],T=(0,r.useState)(!1),B=(0,n.Z)(T,2),z=B[0],L=B[1],V=(0,r.useState)(null),K=(0,n.Z)(V,2),U=K[0],q=K[1],$=(0,r.useState)(!1),G=(0,n.Z)($,2),J=G[0],W=G[1],X=(0,r.useState)([]),Y=(0,n.Z)(X,2),H=Y[0],Q=Y[1],ee=(0,r.useState)(!1),te=(0,n.Z)(ee,2),se=te[0],ne=te[1],ae=(0,r.useState)(!1),re=(0,n.Z)(ae,2),oe=re[0],ce=re[1];(0,r.useEffect)((function(){ie()}),[]),(0,r.useEffect)((function(){v&&u.Z.invoke("GET","/api/v1/service-accounts").then((function(e){var t=e.sort(p.V2);w(!1),Z(t)})).catch((function(e){s(e),w(!1)}))}),[v,w,Z,s]);var ie=function(){w(!0)},le=[{type:"view",onClick:function(e){q(e),ce(!0)}},{type:"delete",onClick:function(e){q(e),L(!0)}}],ue=i.filter((function(e){return e.toLowerCase().includes(I.toLowerCase())}));return(0,S.jsxs)(r.Fragment,{children:[z&&(0,S.jsx)(D,{deleteOpen:z,selectedServiceAccount:U,closeDeleteModalAndRefresh:function(e){!function(e){L(!1),e&&ie()}(e)}}),se&&(0,S.jsx)(R.Z,{deleteOpen:se,selectedSAs:H,closeDeleteModalAndRefresh:function(e){ne(!1),e&&((0,h.y1)("Service accounts deleted successfully."),Q([]),w(!0))}}),oe&&(0,S.jsx)(_.Z,{open:oe,selectedAccessKey:U,closeModalAndRefresh:function(){ce(!1),w(!0)}}),(0,S.jsx)(y,{open:J,closeModal:function(){return W(!1)}}),(0,S.jsx)(x.Z,{label:"Service Accounts"}),(0,S.jsxs)(A.Z,{children:[(0,S.jsxs)(l.ZP,{item:!0,xs:12,className:t.actionsTray,children:[(0,S.jsx)(P.Z,{placeholder:"Search Service Accounts",onChange:O,overrideClass:t.searchField,value:I}),(0,S.jsxs)(d.Z,{sx:{display:"flex"},children:[" ",(0,S.jsx)(N.Z,{tooltip:"Delete Selected",onClick:function(){ne(!0)},text:"Delete Selected",icon:(0,S.jsx)(f.pJl,{}),color:"secondary",disabled:0===H.length,variant:"outlined"}),(0,S.jsx)(E.s,{scopes:[M.Ft.ADMIN_CREATE_USER],resource:M.C3,matchAll:!0,errorProps:{disabled:!0},children:(0,S.jsx)(N.Z,{onClick:function(){return W(!0)},text:"Change Password",icon:(0,S.jsx)(f.tvm,{}),color:"primary",variant:"outlined",disabled:0===H.length})}),(0,S.jsx)(N.Z,{onClick:function(e){a.push("".concat(M.gA.ACCOUNT_ADD))},text:"Create service account",icon:(0,S.jsx)(f.dtP,{}),color:"primary",variant:"contained"})]})]}),(0,S.jsx)(l.ZP,{item:!0,xs:12,className:t.tableBlock,children:(0,S.jsx)(m.Z,{isLoading:v,records:ue,entityName:"Service Accounts",idField:"",columns:[{label:"Service Account",elementKey:""}],itemActions:le,selectedItems:H,onSelect:function(e){return(0,F._0)(e,Q,H)},onSelectAll:function(){H.length!==i.length?Q(i):Q([])}})}),(0,S.jsx)(l.ZP,{item:!0,xs:12,marginTop:"15px",children:(0,S.jsx)(C.Z,{title:"Learn more about SERVICE ACCOUNTS",iconComponent:(0,S.jsx)(f.frP,{}),help:(0,S.jsxs)(r.Fragment,{children:["MinIO service accounts are child identities of an authenticated MinIO user, including externally managed identities. Each service account inherits its privileges based on the policies attached to it\u2019s parent user or those groups in which the parent user has membership. Service accounts also support an optional inline policy which further restricts access to a subset of actions and resources available to the parent user.",(0,S.jsx)("br",{}),(0,S.jsx)("br",{}),"You can learn more at our"," ",(0,S.jsx)("a",{href:"https://docs.min.io/minio/baremetal/security/minio-identity-management/user-management.html?ref=con#service-accounts",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})})})]})]})})))}}]);
//# sourceMappingURL=9033.2b39c84d.chunk.js.map