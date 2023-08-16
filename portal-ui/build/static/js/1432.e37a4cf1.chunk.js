"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1432,4770],{59447:function(e,n,t){var i=t(93433),o=t(29439),a=t(72791),r=t(26181),l=t.n(r),s=t(29945),c=t(80184);n.Z=function(e){var n=e.elements,t=e.name,r=e.label,u=e.tooltip,d=void 0===u?"":u,f=e.commonPlaceholder,p=void 0===f?"":f,h=e.onChange,m=e.withBorder,x=void 0!==m&&m,v=(0,a.useState)([""]),g=(0,o.Z)(v,2),b=g[0],j=g[1],y=(0,a.createRef)();(0,a.useEffect)((function(){if(1===b.length&&""===b[0]&&n&&""!==n){var e=n.split(",");e.push(""),j(e)}}),[n,b]),(0,a.useEffect)((function(){if(b.length>1){var e=y.current;e&&e.scrollIntoView(!1)}}),[b,y]);var Z=(0,a.useCallback)((function(e){h(e)}),[h]),k=(0,a.useRef)(!0);(0,a.useEffect)((function(){if(k.current)k.current=!1;else{var e=b.filter((function(e){return""!==e.trim()})).join(",");Z(e)}}),[b]);var C=function(e){e.persist();var n=(0,i.Z)(b),t=l()(e.target,"dataset.index","0");n[parseInt(t)]=e.target.value,j(n)},w=b.map((function(e,n){return(0,c.jsx)(s.Wzg,{id:"".concat(t,"-").concat(n.toString()),label:"",name:"".concat(t,"-").concat(n.toString()),value:b[n],onChange:C,index:n,placeholder:p,overlayIcon:n===b.length-1?(0,c.jsx)(s.dtP,{}):null,overlayAction:function(){!function(e){if(""!==e[e.length-1].trim()){var n=(0,i.Z)(e);n.push(""),j(n)}}(b)}},"csv-multi-".concat(t,"-").concat(n.toString()))}));return(0,c.jsx)(a.Fragment,{children:(0,c.jsxs)(s.xuv,{sx:{display:"flex"},className:"inputItem",children:[(0,c.jsxs)(s.AZs,{sx:{alignItems:"flex-start"},children:[(0,c.jsx)("span",{children:r}),""!==d&&(0,c.jsx)(s.xuv,{sx:{marginLeft:5,display:"flex",alignItems:"center","& .min-icon":{width:13}},children:(0,c.jsx)(s.ua7,{tooltip:d,placement:"top",children:(0,c.jsx)(s.xuv,{className:d,children:(0,c.jsx)(s.byK,{})})})})]}),(0,c.jsxs)(s.xuv,{withBorders:x,sx:{width:"100%",overflowY:"auto",height:150,position:"relative"},children:[w,(0,c.jsx)("div",{ref:y})]})]})})}},81159:function(e,n,t){var i=t(4942),o=t(1413),a=t(72791),r=t(11135),l=t(25787),s=t(9955),c=t(30829),u=t(20068),d=t(20890),f=t(61889),p=t(23814),h=t(29945),m=t(28182),x=t(80184),v=(0,l.Z)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},switchContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}))(s.Z);n.Z=(0,l.Z)((function(e){return(0,r.Z)((0,o.Z)((0,o.Z)({indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},p.OR),p.YI))}))((function(e){var n=e.label,t=void 0===n?"":n,r=e.onChange,l=e.value,s=e.id,p=e.name,g=e.checked,b=void 0!==g&&g,j=e.disabled,y=void 0!==j&&j,Z=e.switchOnly,k=void 0!==Z&&Z,C=e.tooltip,w=void 0===C?"":C,_=e.description,S=void 0===_?"":_,E=e.classes,I=e.indicatorLabels,A=e.extraInputProps,F=void 0===A?{}:A,L=(0,x.jsxs)(a.Fragment,{children:[!k&&(0,x.jsx)("span",{className:(0,m.Z)(E.indicatorLabel,(0,i.Z)({},E.indicatorLabelOn,!b)),children:I&&I.length>1?I[1]:"OFF"}),(0,x.jsx)(v,{checked:b,onChange:r,color:"primary",name:p,inputProps:(0,o.Z)({"aria-label":"primary checkbox"},F),disabled:y,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:l,id:s}),!k&&(0,x.jsx)("span",{className:(0,m.Z)(E.indicatorLabel,(0,i.Z)({},E.indicatorLabelOn,b)),children:I?I[0]:"ON"})]});return k?L:(0,x.jsx)("div",{children:(0,x.jsxs)(f.ZP,{container:!0,alignItems:"center",children:[(0,x.jsx)(f.ZP,{item:!0,xs:12,sm:8,md:8,children:""!==t&&(0,x.jsxs)(c.Z,{htmlFor:s,className:E.inputLabel,children:[(0,x.jsx)("span",{children:t}),""!==w&&(0,x.jsx)("div",{className:E.tooltipContainer,children:(0,x.jsx)(u.Z,{title:w,placement:"top-start",children:(0,x.jsx)("div",{className:E.tooltip,children:(0,x.jsx)(h.byK,{})})})})]})}),(0,x.jsx)(f.ZP,{item:!0,xs:12,sm:""!==t?4:12,md:""!==t?4:12,textAlign:"right",justifyContent:"end",className:E.switchContainer,children:L}),""!==S&&(0,x.jsx)(f.ZP,{item:!0,xs:12,textAlign:"left",children:(0,x.jsx)(d.Z,{component:"p",className:E.fieldDescription,children:S})})]})})}))},21435:function(e,n,t){var i=t(29439),o=t(1413),a=t(72791),r=t(27391),l=t(61889),s=t(30829),c=t(20068),u=t(13400),d=t(20165),f=t(3579),p=t(11135),h=t(72455),m=t(25787),x=t(23814),v=t(29945),g=t(28182),b=t(80184),j=(0,h.Z)((function(e){return(0,p.Z)((0,o.Z)({},x.gM))}));function y(e){var n=j();return(0,b.jsx)(r.Z,(0,o.Z)({InputProps:{classes:n}},e))}n.Z=(0,m.Z)((function(e){return(0,p.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},x.YI),x.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var n=e.label,t=e.onChange,r=e.value,p=e.id,h=e.name,m=e.type,x=void 0===m?"text":m,j=e.autoComplete,Z=void 0===j?"off":j,k=e.disabled,C=void 0!==k&&k,w=e.multiline,_=void 0!==w&&w,S=e.tooltip,E=void 0===S?"":S,I=e.index,A=void 0===I?0:I,F=e.error,L=void 0===F?"":F,T=e.required,N=void 0!==T&&T,R=e.placeholder,q=void 0===R?"":R,P=e.min,D=e.max,W=e.overlayId,M=e.overlayIcon,z=void 0===M?null:M,B=e.overlayObject,O=void 0===B?null:B,K=e.extraInputProps,V=void 0===K?{}:K,H=e.overlayAction,Y=e.noLabelMinWidth,$=void 0!==Y&&Y,U=e.pattern,G=void 0===U?"":U,X=e.autoFocus,Q=void 0!==X&&X,J=e.classes,ee=e.className,ne=void 0===ee?"":ee,te=e.onKeyPress,ie=e.onFocus,oe=e.onPaste,ae=(0,o.Z)({"data-index":A},V),re=(0,a.useState)(!1),le=(0,i.Z)(re,2),se=le[0],ce=le[1];"number"===x&&P&&(ae.min=P),"number"===x&&D&&(ae.max=D),""!==G&&(ae.pattern=G);var ue=z,de=x;return"password"===x&&null===z&&(ue=se?(0,b.jsx)(d.Z,{}):(0,b.jsx)(f.Z,{}),de=se?"text":"password"),(0,b.jsx)(a.Fragment,{children:(0,b.jsxs)(l.ZP,{container:!0,className:(0,g.Z)(""!==ne?ne:"",""!==L?J.errorInField:J.inputBoxContainer),children:[""!==n&&(0,b.jsxs)(s.Z,{htmlFor:p,className:$?J.noMinWidthLabel:J.inputLabel,children:[(0,b.jsxs)("span",{children:[n,N?"*":""]}),""!==E&&(0,b.jsx)("div",{className:J.tooltipContainer,children:(0,b.jsx)(c.Z,{title:E,placement:"top-start",children:(0,b.jsx)("div",{className:J.tooltip,children:(0,b.jsx)(v.byK,{})})})})]}),(0,b.jsxs)("div",{className:J.textBoxContainer,children:[(0,b.jsx)(y,{id:p,name:h,fullWidth:!0,value:r,autoFocus:Q,disabled:C,onChange:t,type:de,multiline:_,autoComplete:Z,inputProps:ae,error:""!==L,helperText:L,placeholder:q,className:J.inputRebase,onKeyPress:te,onFocus:ie,onPaste:oe}),ue&&(0,b.jsx)("div",{className:"".concat(J.overlayAction," ").concat(""!==n?"withLabel":""),children:(0,b.jsx)(u.Z,{onClick:H?function(){H()}:function(){return ce(!se)},id:W,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:ue})}),O&&(0,b.jsx)("div",{className:"".concat(J.overlayAction," ").concat(""!==n?"withLabel":""),children:O})]})]})})}))},64163:function(e,n,t){var i=t(1413),o=t(72791),a=t(61889),r=t(11135),l=t(25787),s=t(23814),c=t(80184);n.Z=(0,l.Z)((function(e){return(0,r.Z)((0,i.Z)({},s.xx))}))((function(e){var n=e.classes,t=e.label,i=void 0===t?"":t,r=e.content,l=e.multiLine,s=void 0!==l&&l,u=e.actionButton;return(0,c.jsx)(o.Fragment,{children:(0,c.jsxs)(a.ZP,{className:n.prefinedContainer,children:[""!==i&&(0,c.jsx)(a.ZP,{item:!0,xs:12,className:n.predefinedTitle,children:i}),(0,c.jsxs)(a.ZP,{item:!0,xs:12,className:"".concat(n.predefinedList," ").concat(u?n.includesActionButton:""),children:[(0,c.jsx)(a.ZP,{item:!0,xs:12,className:s?n.innerContentMultiline:n.innerContent,children:r}),u&&(0,c.jsx)("div",{className:n.overlayShareOption,children:u})]})]})})}))},11432:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var i=t(74165),o=t(15861),a=t(29439),r=t(72791),l=t(29945),s=t(58493),c=t(57689),u=t(26181),d=t.n(u),f=t(78687),p=t(31776),h=t(82342),m=t(87995),x=t(81551),v=t(93433),g=t(56028),b=t(244),j=t(13901),y=t(36909),Z=t(40986),k=t(23814),C=t(80184),w=function(e){var n=e.open,t=e.type,i=e.onCloseEndpoint,o=(0,r.useState)(""),s=(0,a.Z)(o,2),c=s[0],u=s[1],d=(0,r.useState)(""),f=(0,a.Z)(d,2),w=f[0],_=f[1],S=(0,r.useState)(""),E=(0,a.Z)(S,2),I=E[0],A=E[1],F=(0,r.useState)(!1),L=(0,a.Z)(F,2),T=L[0],N=L[1],R=(0,r.useState)(["name","endpoint"]),q=(0,a.Z)(R,2),P=q[0],D=q[1],W=(0,r.useState)(["name","endpoint","auth-token"]),M=(0,a.Z)(W,2),z=M[0],B=M[1],O=(0,x.TL)(),K=function(e){B(z.filter((function(n){return n!==e})))},V=function(e,n){P.includes(e)&&n?D(P.filter((function(n){return n!==e}))):n||P.includes(e)||D([].concat((0,v.Z)(P),[e]))},H="Add new Webhook",Y=(0,C.jsx)(b.Z,{});switch(t){case"logger_webhook":H="New Logger Webhook",Y=(0,C.jsx)(j.Z,{});break;case"audit_webhook":H="New Audit Webhook",Y=(0,C.jsx)(y.Z,{})}return(0,C.jsx)(r.Fragment,{children:(0,C.jsxs)(g.Z,{modalOpen:n,title:H,onClose:i,titleIcon:Y,children:[(0,C.jsxs)(l.ltY,{containerPadding:!1,withBorders:!1,children:[(0,C.jsx)(l.Wzg,{id:"name",name:"name",onChange:function(e){K("name"),u(e.target.value),V("name",e.target.validity.valid)},error:P.includes("name")&&!z.includes("name")?"Invalid Name":"",label:"Name",value:c,pattern:"^(?=.*[a-zA-Z0-9]).{1,}$",required:!0}),(0,C.jsx)(l.Wzg,{id:"endpoint",name:"endpoint",onChange:function(e){K("endpoint"),_(e.target.value),V("endpoint",e.target.validity.valid)},error:P.includes("endpoint")&&!z.includes("endpoint")?"Invalid Endpoint set":"",label:"Endpoint",value:w,pattern:"^(https?):\\/\\/([a-zA-Z0-9\\-.]+)(:[0-9]+)?(\\/[a-zA-Z0-9\\-.\\/]*)?$",required:!0}),(0,C.jsx)(l.Wzg,{id:"auth-token",name:"auth-token",onChange:function(e){K("auth-token"),A(e.target.value)},label:"Auth Token",value:I})]}),T&&(0,C.jsx)(l.rjZ,{item:!0,xs:12,sx:{marginBottom:10},children:(0,C.jsx)(Z.Z,{})}),(0,C.jsxs)(l.rjZ,{item:!0,xs:12,sx:k.ID.modalButtonBar,children:[(0,C.jsx)(l.zxk,{id:"reset",type:"button",variant:"regular",disabled:T,onClick:i,label:"Cancel",sx:{marginRight:10}}),(0,C.jsx)(l.zxk,{id:"save-lifecycle",type:"submit",variant:"callAction",color:"primary",disabled:T||0!==P.length,label:"Save",onClick:function(){if(!T&&0===P.length)if(""!==c.trim())if(""!==w.trim()){N(!0);var e={key_values:[{key:"endpoint",value:w},{key:"auth_token",value:I}],arn_resource_id:c};p.h.configs.setConfig(t,e).then((function(e){N(!1),O((0,m.cN)(e.data.restart||!1)),e.data.restart||O((0,m.y1)("Configuration saved successfully")),i(),O((0,m.Ie)(!0))})).catch((function(e){N(!1),O((0,m.Ih)((0,h.g)(e.error)))}))}else D([].concat((0,v.Z)(P),["endpoint"]));else D([].concat((0,v.Z)(P),["name"]))}})]})]})})},_=t(23508),S=function(e){var n=e.modalOpen,t=e.onClose,i=e.selectedARN,o=(0,r.useState)(!1),s=(0,a.Z)(o,2),c=s[0],u=s[1],d=(0,x.TL)();(0,r.useEffect)((function(){c&&p.h.configs.resetConfig(i).then((function(){u(!1),d((0,m.cN)(!0)),d((0,m.Ie)(!0)),t()})).catch((function(e){u(!1),d((0,m.Ih)((0,h.g)(e.error)))}))}),[c,d,t,i]);var f=!i.includes(":"),v="Are you sure you want to delete the Configured Endpoint";return f&&(v="Are you sure you want to reset the Default"),(0,C.jsx)(_.Z,{title:f?"Reset Default Webhook":"Delete Webhook",confirmText:f?"Reset":"Delete",isOpen:n,isLoading:c,onConfirm:function(){u(!0)},titleIcon:(0,C.jsx)(l.NvT,{}),onClose:t,confirmationContent:(0,C.jsxs)(r.Fragment,{children:["".concat(v," "),(0,C.jsx)("strong",{children:i}),"?"]})})},E=t(1413),I=t(21435),A=t(81159),F=t(64163),L=function(e){var n,t,i,o=e.open,c=e.type,u=e.endpointInfo,d=e.onCloseEndpoint,f=(0,r.useState)(""),w=(0,a.Z)(f,2),_=w[0],S=w[1],L=(0,r.useState)(""),T=(0,a.Z)(L,2),N=T[0],R=T[1],q=(0,r.useState)(""),P=(0,a.Z)(q,2),D=P[0],W=P[1],M=(0,r.useState)("on"),z=(0,a.Z)(M,2),B=z[0],O=z[1],K=(0,r.useState)(!1),V=(0,a.Z)(K,2),H=V[0],Y=V[1],$=(0,r.useState)([]),U=(0,a.Z)($,2),G=U[0],X=U[1],Q=(0,x.TL)();(0,r.useEffect)((function(){if(u){var e=u.key_values.find((function(e){return"endpoint"===e.key})),n=u.key_values.find((function(e){return"auth_token"===e.key})),t=u.key_values.find((function(e){return"enable"===e.key})),i=[];if(e){var o=e.value;""===o?i.push("endpoint"):R(o)}if(n){var a=n.value;""===a?i.push("auth-token"):W(a)}t&&"off"===t.value&&O(t.value),S(u.name||""),X(i)}}),[u]);var J=!_.includes(":"),ee=u.key_values.filter((function(e){return!!e.env_override})),ne=(0,s.F_)(ee),te="Edit Webhook",ie=(0,C.jsx)(b.Z,{});switch(c){case"logger_webhook":te="Edit ".concat(J?" the Default ":"","Logger Webhook"),ie=(0,C.jsx)(j.Z,{});break;case"audit_webhook":te="Edit ".concat(J?" the Default ":"","Audit Webhook"),ie=(0,C.jsx)(y.Z,{})}return ee.length>0&&(te="View env variable Webhook"),(0,C.jsx)(r.Fragment,{children:(0,C.jsx)(g.Z,{modalOpen:o,title:"".concat(te).concat(J?"":" - ".concat(_)),onClose:d,titleIcon:ie,children:ee.length>0?(0,C.jsxs)(r.Fragment,{children:[(0,C.jsx)(l.rjZ,{item:!0,xs:12,sx:(0,E.Z)({},k.DF.formFieldRow),children:(0,C.jsx)(F.Z,{label:"Enabled",content:(null===(n=ne.enable)||void 0===n?void 0:n.value)||"-",actionButton:(0,C.jsx)(l.rjZ,{item:!0,sx:{display:"flex",justifyContent:"flex-end",paddingRight:"10px"},children:(0,C.jsx)(l.ua7,{tooltip:ne.enable?"This value is set from the ".concat(ne.enable.overrideEnv," environment variable"):"",placement:"left",children:(0,C.jsx)(l.zD0,{style:{width:20}})})})})}),(0,C.jsx)(l.rjZ,{item:!0,xs:12,sx:(0,E.Z)({},k.DF.formFieldRow),children:(0,C.jsx)(F.Z,{label:"Endpoint",content:(null===(t=ne.endpoint)||void 0===t?void 0:t.value)||"-",actionButton:(0,C.jsx)(l.rjZ,{item:!0,sx:{display:"flex",justifyContent:"flex-end",paddingRight:"10px"},children:(0,C.jsx)(l.ua7,{tooltip:ne.enable?"This value is set from the ".concat(ne.endpoint.overrideEnv," environment variable"):"",placement:"left",children:(0,C.jsx)(l.zD0,{style:{width:20}})})})})}),(0,C.jsx)(l.rjZ,{item:!0,xs:12,sx:(0,E.Z)({},k.DF.formFieldRow),children:(0,C.jsx)(F.Z,{label:"Auth Token",content:(null===(i=ne.auth_token)||void 0===i?void 0:i.value)||"-",actionButton:(0,C.jsx)(l.rjZ,{item:!0,sx:{display:"flex",justifyContent:"flex-end",paddingRight:"10px"},children:(0,C.jsx)(l.ua7,{tooltip:ne.enable?"This value is set from the ".concat(ne.auth_token.overrideEnv," environment variable"):"",placement:"left",children:(0,C.jsx)(l.zD0,{style:{width:20}})})})})})]}):(0,C.jsxs)(r.Fragment,{children:[(0,C.jsx)(l.rjZ,{item:!0,xs:12,sx:(0,E.Z)({},k.DF.formFieldRow),children:(0,C.jsx)(A.Z,{onChange:function(e){var n=e.target.checked?"on":"off";O(n)},id:"endpoint_enabled",name:"endpoint_enabled",label:"Enabled",value:"switch_on",checked:"on"===B})}),(0,C.jsx)(l.rjZ,{item:!0,xs:12,sx:(0,E.Z)({},k.DF.formFieldRow),children:(0,C.jsx)(I.Z,{id:"endpoint",name:"endpoint",onChange:function(e){R(e.target.value),function(e,n){G.includes(e)&&n?X(G.filter((function(n){return n!==e}))):n||G.includes(e)||X([].concat((0,v.Z)(G),[e]))}("endpoint",e.target.validity.valid)},error:G.includes("endpoint")?"Invalid Endpoint set":"",label:"Endpoint",value:N,pattern:"^(https?):\\/\\/([a-zA-Z0-9\\-.]+)(:[0-9]+)?(\\/[a-zA-Z0-9\\-.\\/]*)?$",required:!0})}),(0,C.jsx)(l.rjZ,{item:!0,xs:12,sx:(0,E.Z)({},k.DF.formFieldRow),children:(0,C.jsx)(I.Z,{id:"auth-token",name:"auth-token",onChange:function(e){W(e.target.value)},label:"Auth Token",value:D})}),H&&(0,C.jsx)(l.rjZ,{item:!0,xs:12,sx:{marginBottom:10},children:(0,C.jsx)(Z.Z,{})}),(0,C.jsxs)(l.rjZ,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end"},children:[(0,C.jsx)(l.zxk,{id:"reset",type:"button",variant:"regular",disabled:H,onClick:d,label:"Cancel",sx:{marginRight:10}}),(0,C.jsx)(l.zxk,{id:"save-lifecycle",type:"submit",variant:"callAction",color:"primary",disabled:H||0!==G.length,label:"Update",onClick:function(){if(!H&&0===G.length)if(N&&""!==N.trim()){Y(!0);var e={key_values:[{key:"endpoint",value:N},{key:"auth_token",value:D},{key:"enable",value:B}]};p.h.configs.setConfig(_,e).then((function(e){Y(!1),Q((0,m.cN)(e.data.restart||!1)),e.data.restart||Q((0,m.y1)("Configuration saved successfully")),d(),Q((0,m.Ie)(!0))})).catch((function(e){Y(!1),Q((0,m.Ih)((0,h.g)(e.error)))}))}else X([].concat((0,v.Z)(G),["endpoint"]))}})]})]})})})},T=function(e){e.setResetConfigurationOpen;var n=e.WebhookSettingslist,t=e.type,i=(0,r.useState)(!1),o=(0,a.Z)(i,2),s=o[0],c=o[1],u=(0,r.useState)(!1),d=(0,a.Z)(u,2),f=d[0],p=d[1],h=(0,r.useState)(!1),m=(0,a.Z)(h,2),x=m[0],v=m[1],g=(0,r.useState)(""),b=(0,a.Z)(g,2),j=b[0],y=b[1],Z=(0,r.useState)(null),k=(0,a.Z)(Z,2),_=k[0],E=k[1],I=[{type:"view",onClick:function(e){e.name&&(v(!0),E(e))}},{type:"delete",onClick:function(e){e.name&&(p(!0),y(e.name))},disableButtonFunction:function(e){var t=n.find((function(n){return n.name===e}));if(t){var i,o=null===(i=t.key_values)||void 0===i?void 0:i.filter((function(e){return!!e.env_override}));return!!(o&&o.length>0)}return!1}}];return(0,C.jsxs)(l.rjZ,{container:!0,children:[s&&(0,C.jsx)(w,{open:s,type:t,onCloseEndpoint:function(){c(!1)}}),f&&(0,C.jsx)(S,{modalOpen:f,onClose:function(){p(!1),y("")},selectedARN:j,type:t}),x&&_&&(0,C.jsx)(L,{open:x,type:t,endpointInfo:_,onCloseEndpoint:function(){v(!1),E(null)}}),(0,C.jsx)(l.rjZ,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end"},children:(0,C.jsx)(l.zxk,{id:"newWebhook",variant:"callAction",onClick:function(){c(!0)},children:"New Endpoint"})}),(0,C.jsx)(l.rjZ,{item:!0,xs:12,sx:{padding:"0 10px 10px"},children:(0,C.jsxs)(r.Fragment,{children:[(0,C.jsx)("h3",{children:"Currently Configured Endpoints"}),(0,C.jsx)(l.wQF,{columns:[{label:"Status",elementKey:"key_values",renderFunction:function(e){var n=e.find((function(e){return"enable"===e.key}));if(null!==n&&void 0!==n&&n.env_override){var t=null!==n&&void 0!==n&&n.env_override.value&&"on"!==(null===n||void 0===n?void 0:n.env_override.value)&&null!==n&&void 0!==n&&n.env_override.value?"Disabled":"Enabled";return(0,C.jsxs)(l.rjZ,{container:!0,sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"start",fontSize:"8px"},children:[(0,C.jsx)(l.zD0,{style:{fill:"#052F51",width:"14px"}}),t?"Enabled":"Disabled"]})}return n&&"on"!==n.value&&n.value?(0,C.jsxs)(l.rjZ,{container:!0,sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"start",fontSize:"8px"},children:[(0,C.jsx)(l.qwj,{style:{fill:"#C83B51",width:14,height:14}}),"Disabled"]}):(0,C.jsxs)(l.rjZ,{container:!0,sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"start",fontSize:"8px"},children:[(0,C.jsx)(l.Yp9,{style:{fill:"#4CCB92",width:14,height:14}}),"Enabled"]})},width:50},{label:"Name",elementKey:"name"},{label:"Endpoint",elementKey:"key_values",renderFunction:function(e){var n=e.find((function(e){return"endpoint"===e.key}));return n?n.env_override?n.env_override.value:n.value:""}}],itemActions:I,idField:"name",isLoading:!1,records:n,entityName:"endpoints",customPaperHeight:"calc(100vh - 750px)"})]})})]})},N=t(94770),R=t(90767),q=function(e){var n=e.selectedConfiguration,t=e.className,i=void 0===t?"":t,o=(0,x.TL)(),u=(0,c.s0)(),v=(0,c.TH)().pathname,g=void 0===v?"":v,b=g.substring(g.lastIndexOf("/")+1);b="settings"===b?"region":b;var j=(0,r.useState)([]),y=(0,a.Z)(j,2),Z=y[0],k=y[1],w=(0,r.useState)(!1),_=(0,a.Z)(w,2),S=_[0],E=_[1],I=(0,r.useState)([]),A=(0,a.Z)(I,2),F=A[0],L=A[1],q=(0,r.useState)([]),P=(0,a.Z)(q,2),D=P[0],W=P[1],M=(0,r.useState)(!1),z=(0,a.Z)(M,2),B=z[0],O=z[1],K=(0,r.useState)({}),V=(0,a.Z)(K,2),H=V[0],Y=V[1],$=(0,f.v9)((function(e){return e.system.loadingConfigurations}));(0,r.useEffect)((function(){o((0,m.Ie)(!0))}),[b,o]),(0,r.useEffect)((function(){if($){var e=d()(n,"configuration_id",!1);if(e)return void p.h.configs.configInfo(e).then((function(n){W(n.data);var t=d()(n.data[0],"key_values",[]),i=s.DP[e].map((function(e){var n=t.find((function(n){return n.key===e.name})),i=(null===n||void 0===n?void 0:n.value)||"";return{key:e.name,value:e.customValueProcess?e.customValueProcess(i):i}}));L(i),Y((0,s.F_)(i)),o((0,m.Ie)(!1))})).catch((function(e){o((0,m.Ie)(!1)),o((0,m.Ih)((0,h.g)(e.error)))}));o((0,m.Ie)(!1))}}),[$,n,o]),(0,r.useEffect)((function(){if(S){var e={key_values:(0,s.DD)(Z)};p.h.configs.setConfig(n.configuration_id,e).then((function(e){E(!1),o((0,m.cN)(e.data.restart||!1)),o((0,m.Ie)(!0)),e.data.restart||o((0,m.y1)("Configuration saved successfully"))})).catch((function(e){E(!1),o((0,m.Ih)((0,h.g)(e.error)))}))}}),[S,o,n,Z,u]);var U=(0,r.useCallback)((function(e){k(e)}),[k]),G=function(){O(!0)};return(0,C.jsx)(r.Fragment,{children:(0,C.jsxs)("div",{onMouseMove:function(){o((0,m.Sc)("settings_".concat(n.configuration_label)))},children:[B&&(0,C.jsx)(R.Z,{configurationName:n.configuration_id,closeResetModalAndRefresh:function(e){O(!1),o((0,m.cN)(e)),e&&o((0,m.Ie)(!0))},resetOpen:B}),$?(0,C.jsx)(l.rjZ,{item:!0,xs:12,sx:{textAlign:"center",paddingTop:"15px"},children:(0,C.jsx)(l.aNw,{})}):(0,C.jsx)(l.xuv,{sx:{padding:"15px",height:"100%"},children:"logger_webhook"===n.configuration_id||"audit_webhook"===n.configuration_id?(0,C.jsx)(T,{WebhookSettingslist:D,setResetConfigurationOpen:G,type:n.configuration_id}):(0,C.jsx)(r.Fragment,{children:(0,C.jsxs)("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),E(!0)},className:i,style:{height:"100%",display:"flex",flexFlow:"column"},children:[(0,C.jsx)(l.rjZ,{item:!0,xs:12,sx:{display:"grid",gridTemplateColumns:"1fr",gap:"10px"},children:(0,C.jsx)(N.default,{fields:s.DP[n.configuration_id],onChange:U,defaultVals:F,overrideEnv:H})}),(0,C.jsxs)(l.rjZ,{item:!0,xs:12,sx:{paddingTop:"15px ",textAlign:"right",maxHeight:"60px",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:[(0,C.jsx)(l.zxk,{type:"button",id:"restore-defaults",variant:"secondary",onClick:G,label:"Restore Defaults"}),"\xa0 \xa0",(0,C.jsx)(l.zxk,{id:"save",type:"submit",variant:"callAction",disabled:S,label:"Save"})]})]})})})]})})},P=function(){var e=(0,c.TH)().pathname,n=void 0===e?"":e,t=n.substring(n.lastIndexOf("/")+1),i=s.bx.find((function(e){return e.configuration_id===t})),o="".concat(t);return(0,C.jsx)(l.rjZ,{item:!0,xs:12,sx:{height:"100%","& .identity_ldap, .api":{"& label":{minWidth:220,marginRight:0}}},children:i&&(0,C.jsx)(q,{className:"".concat(o),selectedConfiguration:i})})},D=t(56087),W=t(47974),M=t(9505),z=t(45248),B=t(99779),O=t(27454),K=function(){var e=(0,f.I0)(),n=(0,M.Z)((function(e){(0,z.zZ)(new Blob([window.atob(e.value)]),"minio-server-config-".concat(B.ou.now().toFormat("LL-dd-yyyy-HH-mm-ss"),".conf"))}),(function(n){e((0,m.Ih)(n))})),t=(0,a.Z)(n,2),i=t[0],o=t[1];return(0,C.jsx)(O.Z,{tooltip:"Warning! The resulting file will contain server configuration information in plain text",children:(0,C.jsx)(l.zxk,{id:"export-config",onClick:function(){o("GET","api/v1/configs/export")},icon:(0,C.jsx)(l.rG2,{}),label:"Export",variant:"regular",disabled:i})})},V=function(){var e=(0,c.s0)(),n=(0,f.I0)(),t=(0,f.v9)((function(e){return e.system.serverNeedsRestart})),i=(0,r.useState)(void 0),o=(0,a.Z)(i,2),s=o[0],u=o[1],d=(0,r.useRef)(null),p=(0,M.Z)((function(e){n((0,m.cN)(!0)),u(!0)}),(function(e){n((0,m.Ih)(e))})),h=(0,a.Z)(p,2),x=h[0],v=h[1];(0,r.useEffect)((function(){!t&&s&&e(0)}),[t,s,e]);return(0,C.jsxs)(r.Fragment,{children:[(0,C.jsx)("input",{type:"file",onChange:function(e){if(null!==e&&void 0!==e&&null!==e.target.files&&void 0!==e.target.files){e.preventDefault();var n=(0,a.Z)(e.target.files,1)[0],t=new FormData,i=new Blob([n],{type:n.type});t.append("file",i,n.name),v("POST","api/v1/configs/import",t),e.target.value=""}},style:{display:"none"},ref:d}),(0,C.jsx)(O.Z,{tooltip:"The file must be valid and  should have valid config values",children:(0,C.jsx)(l.zxk,{id:"import-config",onClick:function(){d&&d.current&&d.current.click()},icon:(0,C.jsx)(l._8t,{}),label:"Import",variant:"regular",disabled:x})})]})},H=t(99670),Y=["region"],$=["cache"],U=function(){var e=(0,c.TH)().pathname,n=void 0===e?"":e,t=(0,x.TL)(),u=(0,c.s0)(),d=(0,r.useState)([]),f=(0,a.Z)(d,2),v=f[0],g=f[1],b=(0,r.useCallback)((0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.h.configs.listConfig().then((function(e){var n;if(e&&null!==e&&void 0!==e&&e.data&&null!==e&&void 0!==e&&null!==(n=e.data)&&void 0!==n&&n.configurations){var t,i=((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.configurations)||[]).reduce((function(e,n){var t=n.key,i=void 0===t?"":t;return $.includes(i)||e.push(i),e}),[]);g(i)}})).catch((function(e){t((0,m.Ih)((0,h.g)(e)))}));case 1:case"end":return e.stop()}}),e)}))),[t]);(0,r.useEffect)((function(){b(),t((0,m.Sc)("settings_Region"))}),[]);var j=s.bx.filter((function(e){var n=e.configuration_id;return Y.includes(n)||v.includes(n)||!v.length}));return(0,C.jsxs)(r.Fragment,{children:[(0,C.jsx)(W.Z,{label:"Settings",actions:(0,C.jsx)(H.Z,{})}),(0,C.jsxs)(l.Xgh,{children:[(0,C.jsxs)(l.rjZ,{item:!0,xs:12,id:"settings-container",children:[(0,C.jsx)(l.UHn,{icon:(0,C.jsx)(l.ewm,{}),title:"MinIO Configuration:",actions:(0,C.jsxs)(l.xuv,{sx:{display:"flex",gap:10},children:[(0,C.jsx)(V,{}),(0,C.jsx)(K,{})]}),sx:{marginBottom:15}}),(0,C.jsx)(l.mQc,{currentTabOrPath:n,onTabClick:function(e){u(e)},useRouteTabs:!0,options:j.map((function(e){var n,t=e.configuration_id,i=e.configuration_label,o=e.icon;return{tabConfig:{id:"settings-tab-".concat(i),label:i,value:t,icon:o,to:(n=t,"".concat(D.gA.SETTINGS,"/").concat(n))}}})),routes:(0,C.jsxs)(c.Z5,{children:[j.map((function(e){return(0,C.jsx)(c.AW,{path:"".concat(e.configuration_id),element:(0,C.jsx)(P,{})},"configItem-".concat(e.configuration_label))})),(0,C.jsx)(c.AW,{path:"/",element:(0,C.jsx)(c.Fg,{to:"".concat(D.gA.SETTINGS,"/region")})})]})})]}),(0,C.jsx)(l.rjZ,{item:!0,xs:12,sx:{paddingTop:"15px"},children:(0,C.jsx)(l.KfX,{title:"Learn more about Configurations",iconComponent:(0,C.jsx)(l.ewm,{}),help:(0,C.jsxs)(r.Fragment,{children:["MinIO supports a variety of configurations ranging from encryption, compression, region, notifications, etc.",(0,C.jsx)("br",{}),(0,C.jsx)("br",{}),"You can learn more at our"," ",(0,C.jsx)("a",{href:"https://min.io/docs/minio/linux/reference/minio-mc-admin/mc-admin-config.html?ref=con#id4",target:"_blank",rel:"noopener",children:"documentation"}),"."]})})})]})]})}},58493:function(e,n,t){t.d(n,{DD:function(){return g},DP:function(){return v},F_:function(){return j},_0:function(){return b},bx:function(){return x}});var i=t(4942),o=t(1413),a=t(93433),r=(t(72791),t(87569)),l=t(61809),s=t(31292),c=t(98095),u=t(67055),d=t(21141),f=t(36909),p=t(13901),h=t(29945),m=t(80184),x=[{icon:(0,m.jsx)(r.Z,{}),configuration_id:"region",configuration_label:"Region"},{icon:(0,m.jsx)(l.Z,{}),configuration_id:"compression",configuration_label:"Compression"},{icon:(0,m.jsx)(s.Z,{}),configuration_id:"api",configuration_label:"API"},{icon:(0,m.jsx)(c.Z,{}),configuration_id:"heal",configuration_label:"Heal"},{icon:(0,m.jsx)(u.Z,{}),configuration_id:"scanner",configuration_label:"Scanner"},{icon:(0,m.jsx)(d.Z,{}),configuration_id:"etcd",configuration_label:"Etcd"},{icon:(0,m.jsx)(p.Z,{}),configuration_id:"logger_webhook",configuration_label:"Logger Webhook"},{icon:(0,m.jsx)(f.Z,{}),configuration_id:"audit_webhook",configuration_label:"Audit Webhook"},{icon:(0,m.jsx)(h.I$E,{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiTab-iconWrapper css-i4bv87-MuiSvgIcon-root",style:{width:24,height:24}}),configuration_id:"audit_kafka",configuration_label:"Audit Kafka"}],v={region:[{name:"name",required:!0,label:"Server Location",tooltip:'Name of the location of the server e.g. "us-west-rack2"',type:"string",placeholder:"e.g. us-west-rack-2"},{name:"comment",required:!1,label:"Comment",tooltip:"You can add a comment to this setting",type:"comment",placeholder:"Enter custom notes if any"}],compression:[{name:"extensions",required:!1,label:"Extensions",tooltip:'Extensions to compress e.g. ".txt", ".log" or ".csv" -  you can write one per field',type:"csv",placeholder:"Enter an Extension",withBorder:!0},{name:"mime_types",required:!1,label:"Mime Types",tooltip:'Mime types e.g. "text/*", "application/json" or "application/xml" - you can write one per field',type:"csv",placeholder:"Enter a Mime Type",withBorder:!0}],api:[{name:"requests_max",required:!1,label:"Requests Max",tooltip:"Maximum number of concurrent requests, e.g. '1600'",type:"number",placeholder:"Enter Requests Max"},{name:"cors_allow_origin",required:!1,label:"Cors Allow Origin",tooltip:"List of origins allowed for CORS requests",type:"csv",placeholder:"Enter allowed origin e.g. https://example.com"},{name:"replication_workers",required:!1,label:"Replication Workers",tooltip:"Number of replication workers, defaults to 100",type:"number",placeholder:"Enter Replication Workers"},{name:"replication_failed_workers",required:!1,label:"Replication Failed Workers",tooltip:"Number of replication workers for recently failed replicas, defaults to 4",type:"number",placeholder:"Enter Replication Failed Workers"}],heal:[{name:"bitrotscan",required:!1,label:"Bitrot Scan",tooltip:"Perform bitrot scan on disks when checking objects during scanner",type:"on|off"},{name:"max_sleep",required:!1,label:"Max Sleep",tooltip:"Maximum sleep duration between objects to slow down heal operation, e.g. 2s",type:"duration",placeholder:"Enter Max Sleep Duration"},{name:"max_io",required:!1,label:"Max IO",tooltip:"Maximum IO requests allowed between objects to slow down heal operation, e.g. 3",type:"number",placeholder:"Enter Max IO"}],scanner:[{name:"delay",required:!1,label:"Delay Multiplier",tooltip:"Scanner delay multiplier, defaults to '10.0'",type:"number",placeholder:"Enter Delay"},{name:"max_wait",required:!1,label:"Max Wait",tooltip:"Maximum wait time between operations, defaults to '15s'",type:"duration",placeholder:"Enter Max Wait"},{name:"cycle",required:!1,label:"Cycle",tooltip:"Time duration between scanner cycles, defaults to '1m'",type:"duration",placeholder:"Enter Cycle"}],etcd:[{name:"endpoints",required:!0,label:"Endpoints",tooltip:'List of etcd endpoints e.g. "http://localhost:2379" - you can write one per field',type:"csv",placeholder:"Enter Endpoint"},{name:"path_prefix",required:!1,label:"Path Prefix",tooltip:'Namespace prefix to isolate tenants e.g. "customer1/"',type:"string",placeholder:"Enter Path Prefix"},{name:"coredns_path",required:!1,label:"Coredns Path",tooltip:'Shared bucket DNS records, default is "/skydns"',type:"string",placeholder:"Enter Coredns Path"},{name:"client_cert",required:!1,label:"Client Cert",tooltip:"Client cert for mTLS authentication",type:"string",placeholder:"Enter Client Cert"},{name:"client_cert_key",required:!1,label:"Client Cert Key",tooltip:"Client cert key for mTLS authentication",type:"string",placeholder:"Enter Client Cert Key"},{name:"comment",required:!1,label:"Comment",tooltip:"You can add a comment to this setting",type:"comment",multiline:!0,placeholder:"Enter custom notes if any"}],logger_webhook:[{name:"endpoint",required:!0,label:"Endpoint",type:"string",placeholder:"Enter Endpoint"},{name:"auth_token",required:!0,label:"Auth Token",type:"string",placeholder:"Enter Auth Token"}],audit_webhook:[{name:"endpoint",required:!0,label:"Endpoint",type:"string",placeholder:"Enter Endpoint"},{name:"auth_token",required:!0,label:"Auth Token",type:"string",placeholder:"Enter Auth Token"}],audit_kafka:[{name:"enable",required:!1,label:"Enable",tooltip:"Enable audit_kafka target",type:"on|off",customValueProcess:function(e){return""===e||"on"===e?"on":"off"}},{name:"brokers",required:!0,label:"Brokers",type:"csv",placeholder:"Enter Kafka Broker"},{name:"topic",required:!1,label:"Topic",type:"string",placeholder:"Enter Kafka Topic",tooltip:"Kafka topic used for bucket notifications"},{name:"sasl",required:!1,label:"Use SASL",tooltip:"Enable SASL (Simple Authentication and Security Layer) authentication",type:"on|off"},{name:"sasl_username",required:!1,label:"SASL Username",type:"string",placeholder:"Enter SASL Username",tooltip:"Username for SASL/PLAIN or SASL/SCRAM authentication"},{name:"sasl_password",required:!1,label:"SASL Password",type:"password",placeholder:"Enter SASL Password",tooltip:"Password for SASL/PLAIN or SASL/SCRAM authentication"},{name:"sasl_mechanism",required:!1,label:"SASL Mechanism",type:"string",placeholder:"Enter SASL Mechanism",tooltip:"SASL authentication mechanism"},{name:"tls",required:!1,label:"Use TLS",tooltip:"Enable TLS (Transport Layer Security)",type:"on|off"},{name:"tls_skip_verify",required:!1,label:"Skip TLS Verification",tooltip:"Trust server TLS without verification",type:"on|off"},{name:"client_tls_cert",required:!1,label:"Client Cert",tooltip:"Client cert for mTLS authentication",type:"string",placeholder:"Enter Client Cert"},{name:"client_tls_key",required:!1,label:"Client Cert Key",tooltip:"Client cert key for mTLS authentication",type:"string",placeholder:"Enter Client Cert Key"},{name:"tls_client_auth",required:!1,label:"TLS Client Auth",tooltip:"ClientAuth determines the Kafka server's policy for TLS client authorization",type:"string"},{name:"version",required:!1,label:"Version",tooltip:"Specify the version of the Kafka cluster",type:"string"}]},g=function(e){return e.filter((function(e){return""!==e.value}))},b=function(e,n,t){var i=e.target,o=i.value,r=i.checked,l=(0,a.Z)(t);return r?l.push(o):l=l.filter((function(e){return e!==o})),n(l),l},j=function(e){var n={};return e.forEach((function(e){if(e.env_override){var t={value:e.env_override.value,overrideEnv:e.env_override.name};n=(0,o.Z)((0,o.Z)({},n),{},(0,i.Z)({},e.key,t))}})),n}},94770:function(e,n,t){t.r(n),t.d(n,{valueDef:function(){return c}});var i=t(93433),o=t(29439),a=t(72791),r=t(29945),l=t(59447),s=t(80184),c=function(e,n,t){var i="on|off"===n?"off":"";if(t.length>0){var o=t.find((function(n){return n.key===e}));o&&(i=o.value||"")}return i};n.default=function(e){var n=e.onChange,t=e.fields,u=e.defaultVals,d=e.overrideEnv,f=(0,a.useState)([]),p=(0,o.Z)(f,2),h=p[0],m=p[1],x=t||[],v=u||[];(0,a.useEffect)((function(){var e=t.map((function(e){return{key:e.name,value:c(e.name,e.type,v)}}));m(e)}),[t,u]),(0,a.useEffect)((function(){n(h)}),[h]);var g=function(e,n,t){var o=(0,i.Z)(h);n=n.trim(),o[t]={key:e,value:n},m(o)},b=function(e,n){var t=h[n];if(t){var i=null===d||void 0===d?void 0:d["".concat(t.key)];if(i)return(0,s.jsx)(r.bSr,{label:e.label,actionButton:(0,s.jsx)(r.rjZ,{item:!0,sx:{display:"flex",justifyContent:"flex-end",paddingRight:"10px"},children:(0,s.jsx)(r.ua7,{tooltip:"This value is set from the ".concat(i.overrideEnv," environment variable"),placement:"left",children:(0,s.jsx)(r.zD0,{style:{width:20}})})}),sx:{width:"100%"},children:i.value})}switch(e.type){case"on|off":var o=t?t.value:"off";return(0,s.jsx)(r.rsf,{onChange:function(t){var i=t.target.checked?"on":"off";g(e.name,i,n)},id:e.name,name:e.name,label:e.label,value:"switch_on",tooltip:e.tooltip,checked:"on"===o});case"csv":return(0,s.jsx)(l.Z,{elements:t?t.value:"",label:e.label,name:e.name,onChange:function(t){var i="";i=Array.isArray(t)?t.join(","):t,g(e.name,i,n)},tooltip:e.tooltip,commonPlaceholder:e.placeholder,withBorder:!0});case"comment":return(0,s.jsx)(r.q5m,{id:e.name,name:e.name,label:e.label,tooltip:e.tooltip,value:t?t.value:"",onChange:function(t){return g(e.name,t.target.value,n)},placeholder:e.placeholder});default:return(0,s.jsx)(r.Wzg,{id:e.name,name:e.name,label:e.label,tooltip:e.tooltip,value:t?t.value:"",onChange:function(t){return g(e.name,t.target.value,n)},placeholder:e.placeholder})}};return(0,s.jsx)(r.ltY,{withBorders:!1,containerPadding:!1,children:x.map((function(e,n){return(0,s.jsx)(a.Fragment,{children:b(e,n)},e.name)}))})}},90767:function(e,n,t){var i=t(29439),o=t(72791),a=t(31776),r=t(82342),l=t(23508),s=t(40986),c=t(29945),u=t(87995),d=t(81551),f=t(80184);n.Z=function(e){var n=e.configurationName,t=e.closeResetModalAndRefresh,p=e.resetOpen,h=(0,d.TL)(),m=(0,o.useState)(!1),x=(0,i.Z)(m,2),v=x[0],g=x[1];(0,o.useEffect)((function(){v&&a.h.configs.resetConfig(n).then((function(){g(!1),t(!0)})).catch((function(e){g(!1),h((0,u.Ih)((0,r.g)(e.error)))}))}),[t,n,v,h]);return(0,f.jsx)(l.Z,{title:"Restore Defaults",confirmText:"Yes, Reset Configuration",isOpen:p,titleIcon:(0,f.jsx)(c.NvT,{}),isLoading:v,onConfirm:function(){g(!0)},onClose:function(){t(!1)},confirmationContent:(0,f.jsxs)(o.Fragment,{children:[v&&(0,f.jsx)(s.Z,{}),(0,f.jsxs)(o.Fragment,{children:["Are you sure you want to restore these configurations to default values?",(0,f.jsx)("br",{}),(0,f.jsx)("b",{style:{maxWidth:"200px",whiteSpace:"normal",wordWrap:"break-word"},children:"Please note that this may cause your system to not be accessible"})]})]})})}}}]);
//# sourceMappingURL=1432.e37a4cf1.chunk.js.map