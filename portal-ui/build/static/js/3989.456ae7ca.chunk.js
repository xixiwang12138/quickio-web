"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[3989],{93989:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var s=n(29439),i=n(72791),l=n(26181),a=n.n(l),r=n(78687),o=n(57689),c=n(31776),u=n(82342),d=n(29945),x=n(23814),f=n(56087),h=n(38442),m=n(87995),p=n(9859),j=n(44690),b=n(84861),g=n(80184),S=function(e){var t,n,s=e.versioningState,i=void 0===s?{}:s;return(0,g.jsxs)(d.xuv,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,g.jsx)(d.xuv,{sx:{fontWeight:"medium",display:"flex",gap:2},children:i.excludeFolders?(0,g.jsx)(b.Z,{icon:i.excludeFolders?(0,g.jsx)(d.E31,{style:{color:"green"}}):(0,g.jsx)(d.dRf,{}),label:(0,g.jsx)("label",{style:{textDecoration:"normal"},children:"Exclude Folders"})}):null}),null!==(t=i.excludedPrefixes)&&void 0!==t&&t.length?(0,g.jsxs)(d.xuv,{sx:{fontWeight:"medium",display:"flex",justifyItems:"end",placeItems:"flex-start",flexDirection:"column",gap:1},children:[(0,g.jsx)(d.xuv,{children:"Excluded Prefixes :"}),(0,g.jsx)("div",{style:{maxHeight:"200px",overflowY:"auto",placeItems:"flex-start",justifyItems:"end",flexDirection:"column",display:"flex"},children:null===(n=i.excludedPrefixes)||void 0===n?void 0:n.map((function(e){return(0,g.jsx)("div",{children:(0,g.jsx)("strong",{children:e.prefix})})}))})]}):null]})},v=n(75578),T=n(1413),_=n(45987),E=["disabled","onClick"],y=function(e){var t=e.disabled,n=e.onClick,s=(0,_.Z)(e,E);return(0,g.jsx)(d.hU,(0,T.Z)((0,T.Z)({size:"small",disabled:t,onClick:n},s),{},{children:(0,g.jsx)(d.dY8,{})}))},C=function(e){var t=e.resourceName,n=e.iamScopes,s=e.secureCmpProps,i=void 0===s?{}:s,l=e.children;return(0,g.jsx)(h.s,(0,T.Z)((0,T.Z)({scopes:n,resource:t,errorProps:{disabled:!0}},i),{},{children:l}))},I=function(e){var t=e.isLoading,n=void 0===t||t,s=e.resourceName,i=void 0===s?"":s,l=e.iamScopes,a=e.secureCmpProps,r=void 0===a?{}:a,o=e.property,c=void 0===o?null:o,u=e.value,x=void 0===u?null:u,f=e.onEdit,h=e.disabled,m=void 0!==h&&h,p=e.helpTip;return(0,g.jsxs)(d.xuv,{sx:{display:"flex",alignItems:"baseline",justifyContent:"flex-start",gap:10},children:[(0,g.jsx)(d.kKA,{label:c,value:p?(0,g.jsx)(C,{resourceName:i,iamScopes:l,secureCmpProps:r,children:(0,g.jsx)(d.SYi,{placement:"left",content:p,children:(0,g.jsx)(d.vmT,{isLoading:n,onClick:f,label:x,sx:{fontWeight:"bold"},disabled:m})})}):(0,g.jsx)(C,{resourceName:i,iamScopes:l,secureCmpProps:r,children:(0,g.jsx)(d.vmT,{isLoading:n,onClick:f,label:x,sx:{fontWeight:"bold"},disabled:m})})}),(0,g.jsx)(C,{resourceName:i,iamScopes:l,secureCmpProps:r,children:(0,g.jsx)(y,{onClick:f,sx:{background:"#f8f8f8",marginLeft:"3px",top:3,"& .min-icon":{width:"16px",height:"16px"}},disabled:m})})]})},N=n(45248),k=function(e){var t=e.bucketSize;return(0,g.jsxs)(d.xuv,{sx:{display:"flex",alignItems:"center","& .min-icon":{height:37,width:37}},children:[(0,g.jsx)(d.Mhr,{}),(0,g.jsxs)(d.xuv,{sx:{display:"flex",alignItems:"flex-start",justifyContent:"center",flexFlow:"column",marginLeft:"20px",fontSize:"19px"},children:[(0,g.jsx)("label",{style:{fontWeight:600},children:"Reported Usage:"}),(0,g.jsx)("label",{children:(0,N.ae)(t)})]})]})},O=function(e){var t=e.quota;return(0,g.jsxs)(d.xuv,{sx:{display:"flex",alignItems:"center","& .min-icon":{height:37,width:37}},children:[(0,g.jsx)(d.sjJ,{}),(0,g.jsxs)(d.xuv,{sx:{display:"flex",alignItems:"flex-start",justifyContent:"center",flexFlow:"column",marginLeft:"20px",fontSize:"19px"},children:[(0,g.jsxs)("label",{style:{fontWeight:600,textTransform:"capitalize"},children:[null===t||void 0===t?void 0:t.type," Quota"]}),(0,g.jsxs)("label",{children:[" ",(0,N.ae)("".concat(null===t||void 0===t?void 0:t.quota),!0)]})]})]})},F=(0,v.Z)(i.lazy((function(){return n.e(3690).then(n.bind(n,33690))}))),Z=(0,v.Z)(i.lazy((function(){return n.e(1604).then(n.bind(n,1604))}))),A=(0,v.Z)(i.lazy((function(){return n.e(9952).then(n.bind(n,99952))}))),B=(0,v.Z)(i.lazy((function(){return n.e(402).then(n.bind(n,70402))}))),U=(0,v.Z)(i.lazy((function(){return n.e(1705).then(n.bind(n,71705))}))),R=(0,v.Z)(i.lazy((function(){return n.e(1581).then(n.bind(n,1581))}))),G=function(){var e,t=(0,j.TL)(),n=(0,o.UO)(),l=(0,r.v9)(p.HQ),v=(0,r.v9)(p.G6),T=(0,r.v9)(m.N5),_=(0,i.useState)(null),E=(0,s.Z)(_,2),y=E[0],C=E[1],N=(0,i.useState)("0"),G=(0,s.Z)(N,2),P=G[0],K=G[1],L=(0,i.useState)(!1),w=(0,s.Z)(L,2),M=w[0],z=w[1],D=(0,i.useState)(!1),Y=(0,s.Z)(D,2),W=Y[0],Q=Y[1],V=(0,i.useState)(!1),q=(0,s.Z)(V,2),J=q[0],H=q[1],X=(0,i.useState)(!0),$=(0,s.Z)(X,2),ee=$[0],te=$[1],ne=(0,i.useState)(!0),se=(0,s.Z)(ne,2),ie=se[0],le=se[1],ae=(0,i.useState)(!0),re=(0,s.Z)(ae,2),oe=re[0],ce=re[1],ue=(0,i.useState)(!0),de=(0,s.Z)(ue,2),xe=de[0],fe=de[1],he=(0,i.useState)(!0),me=(0,s.Z)(he,2),pe=me[0],je=me[1],be=(0,i.useState)(!0),ge=(0,s.Z)(be,2),Se=ge[0],ve=ge[1],Te=(0,i.useState)(!0),_e=(0,s.Z)(Te,2),Ee=_e[0],ye=_e[1],Ce=(0,i.useState)(!0),Ie=(0,s.Z)(Ce,2),Ne=Ie[0],ke=Ie[1],Oe=(0,i.useState)(),Fe=(0,s.Z)(Oe,2),Ze=Fe[0],Ae=Fe[1],Be=(0,i.useState)(!1),Ue=(0,s.Z)(Be,2),Re=Ue[0],Ge=Ue[1],Pe=(0,i.useState)(null),Ke=(0,s.Z)(Pe,2),Le=Ke[0],we=Ke[1],Me=(0,i.useState)(!1),ze=(0,s.Z)(Me,2),De=ze[0],Ye=ze[1],We=(0,i.useState)(!1),Qe=(0,s.Z)(We,2),Ve=Qe[0],qe=Qe[1],Je=(0,i.useState)(null),He=(0,s.Z)(Je,2),Xe=He[0],$e=He[1],et=(0,i.useState)(!1),tt=(0,s.Z)(et,2),nt=tt[0],st=tt[1],it=(0,i.useState)(!1),lt=(0,s.Z)(it,2),at=lt[0],rt=lt[1],ot=(0,i.useState)(!1),ct=(0,s.Z)(ot,2),ut=ct[0],dt=ct[1],xt=(0,i.useState)(!1),ft=(0,s.Z)(xt,2),ht=ft[0],mt=ft[1];(0,i.useEffect)((function(){t((0,m.Sc)("bucket_detail_summary"))}),[]);var pt=n.bucketName||"",jt="n/a",bt="";null!==v&&v.access&&v.definition&&(jt=v.access,bt=v.definition);var gt=(0,h.F)(pt,[f.Ft.S3_GET_BUCKET_OBJECT_LOCK_CONFIGURATION,f.Ft.S3_GET_ACTIONS]),St=(0,h.F)(pt,[f.Ft.S3_GET_BUCKET_ENCRYPTION_CONFIGURATION,f.Ft.S3_GET_ACTIONS]),vt=(0,h.F)(pt,[f.Ft.ADMIN_GET_BUCKET_QUOTA]);(0,i.useEffect)((function(){ce(!!l)}),[l,ce]),(0,i.useEffect)((function(){xe&&(St?c.h.buckets.getBucketEncryptionInfo(pt).then((function(e){e.data.algorithm&&(Ye(!0),C(e.data)),fe(!1)})).catch((function(e){"The server side encryption configuration was not found"===(e=(0,u.g)(e.error)).errorMessage&&(Ye(!1),C(null)),fe(!1)})):(Ye(!1),C(null),fe(!1)))}),[xe,pt,St]),(0,i.useEffect)((function(){pe&&T&&c.h.buckets.getBucketVersioning(pt).then((function(e){Ae(e.data),je(!1)})).catch((function(e){t((0,m.Ih)((0,u.g)(e.error))),je(!1)}))}),[pe,t,pt,T]),(0,i.useEffect)((function(){Se&&T&&(vt?c.h.buckets.getBucketQuota(pt).then((function(e){we(e.data),e.data.quota?Ge(!0):Ge(!1),ve(!1)})).catch((function(e){t((0,m.Ih)((0,u.g)(e.error))),Ge(!1),ve(!1)})):(Ge(!1),ve(!1)))}),[Se,je,t,pt,T,vt]),(0,i.useEffect)((function(){pe&&T&&(gt?c.h.buckets.getBucketObjectLockingStatus(pt).then((function(e){z(e.data.object_locking_enabled),te(!1)})).catch((function(e){t((0,m.Ih)((0,u.g)(e.error))),te(!1)})):te(!1))}),[ee,t,pt,pe,T,gt]),(0,i.useEffect)((function(){ie&&c.h.buckets.listBuckets().then((function(e){var t=a()(e.data,"buckets",[]).find((function(e){return e.name===pt})),n=a()(t,"size","0");le(!1),K(n)})).catch((function(e){le(!1),t((0,m.Ih)((0,u.g)(e.error)))}))}),[ie,t,pt]),(0,i.useEffect)((function(){Ee&&T&&c.h.buckets.getBucketReplication(pt).then((function(e){var t=e.data.rules?e.data.rules:[];H(t.length>0),ye(!1)})).catch((function(e){t((0,m.Ih)((0,u.g)(e.error))),ye(!1)}))}),[Ee,t,pt,T]),(0,i.useEffect)((function(){Ne&&M&&c.h.buckets.getBucketRetentionConfig(pt).then((function(e){ke(!1),qe(!0),$e(e.data)})).catch((function(e){qe(!1),ke(!1),$e(null)}))}),[Ne,M,pt]);var Tt=function(){t((0,p.d5)(!0)),ce(!0),le(!0),je(!0),fe(!0),ke(!0)},_t=null===Ze||void 0===Ze?void 0:Ze.status,Et="Unversioned (Default)";return"Enabled"===_t?Et="Versioned":"Suspended"===_t&&(Et="Suspended"),(0,g.jsxs)(i.Fragment,{children:[at&&(0,g.jsx)(A,{open:at,selectedBucket:pt,encryptionEnabled:De,encryptionCfg:y,closeModalAndRefresh:function(){rt(!1),fe(!0)}}),ut&&(0,g.jsx)(R,{open:ut,selectedBucket:pt,enabled:Re,cfg:Le,closeModalAndRefresh:function(){dt(!1),ve(!0)}}),W&&(0,g.jsx)(F,{bucketName:pt,open:W,actualPolicy:jt,actualDefinition:bt,closeModalAndRefresh:function(){Q(!1),Tt()}}),nt&&(0,g.jsx)(Z,{bucketName:pt,open:nt,closeModalAndRefresh:function(){st(!1),Tt()}}),ht&&(0,g.jsx)(B,{closeVersioningModalAndRefresh:function(e){mt(!1),e&&Tt()},modalOpen:ht,selectedBucket:pt,versioningInfo:Ze,objectLockingEnabled:!!M}),(0,g.jsx)(d.NZf,{separator:!0,sx:{marginBottom:15},children:"Summary"}),(0,g.jsxs)(d.rjZ,{container:!0,children:[(0,g.jsx)(h.s,{scopes:[f.Ft.S3_GET_BUCKET_POLICY,f.Ft.S3_GET_ACTIONS],resource:pt,children:(0,g.jsx)(d.rjZ,{item:!0,xs:12,children:(0,g.jsxs)(d.xuv,{sx:x.nl,children:[(0,g.jsxs)(d.xuv,{sx:x.nl,children:[(0,g.jsx)(h.s,{scopes:[f.Ft.S3_GET_BUCKET_POLICY,f.Ft.S3_GET_ACTIONS],resource:pt,children:(0,g.jsx)(I,{iamScopes:[f.Ft.S3_PUT_BUCKET_POLICY,f.Ft.S3_PUT_ACTIONS],resourceName:pt,property:"Access Policy:",value:jt.toLowerCase(),onEdit:function(){Q(!0)},isLoading:oe,helpTip:(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)("strong",{children:"Private"})," policy limits access to credentialled accounts with appropriate permissions",(0,g.jsx)("br",{}),(0,g.jsx)("strong",{children:"Public"})," policy anyone will be able to upload, download and delete files from this Bucket once logged in",(0,g.jsx)("br",{}),(0,g.jsx)("strong",{children:"Custom"})," policy can be written to define which accounts are authorized to access this Bucket",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),"To allow Bucket access without credentials, use the"," ",(0,g.jsx)("a",{href:"/buckets/".concat(pt,"/admin/prefix"),children:"Anonymous"})," ","setting"]})})}),(0,g.jsx)(h.s,{scopes:[f.Ft.S3_GET_BUCKET_ENCRYPTION_CONFIGURATION,f.Ft.S3_GET_ACTIONS],resource:pt,children:(0,g.jsx)(I,{iamScopes:[f.Ft.S3_PUT_BUCKET_ENCRYPTION_CONFIGURATION,f.Ft.S3_PUT_ACTIONS],resourceName:pt,property:"Encryption:",value:De?"Enabled":"Disabled",onEdit:function(){rt(!0)},isLoading:xe,helpTip:(0,g.jsxs)(i.Fragment,{children:["MinIO supports enabling automatic"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/kubernetes/upstream/administration/server-side-encryption/server-side-encryption-sse-kms.html",target:"blank",children:"SSE-KMS"})," ","and"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/kubernetes/upstream/administration/server-side-encryption/server-side-encryption-sse-s3.html",target:"blank",children:"SSE-S3"})," ","encryption of all objects written to a bucket using a specific External Key (EK) stored on the external KMS."]})})}),(0,g.jsx)(h.s,{scopes:[f.Ft.S3_GET_REPLICATION_CONFIGURATION,f.Ft.S3_GET_ACTIONS],resource:pt,children:(0,g.jsx)(d.kKA,{label:"Replication:",value:(0,g.jsx)(b.Z,{icon:J?(0,g.jsx)(d.E31,{}):(0,g.jsx)(d.dRf,{}),label:(0,g.jsx)("label",{className:"muted",children:J?"Enabled":"Disabled"})})})}),(0,g.jsx)(h.s,{scopes:[f.Ft.S3_GET_BUCKET_OBJECT_LOCK_CONFIGURATION,f.Ft.S3_GET_ACTIONS],resource:pt,children:(0,g.jsx)(d.kKA,{label:"Object Locking:",value:(0,g.jsx)(b.Z,{icon:M?(0,g.jsx)(d.E31,{}):(0,g.jsx)(d.dRf,{}),label:(0,g.jsx)("label",{className:"muted",children:M?"Enabled":"Disabled"})})})}),(0,g.jsx)(d.xuv,{children:(0,g.jsx)(d.kKA,{label:"Tags:",value:(0,g.jsx)(U,{bucketName:pt})})}),(0,g.jsx)(I,{iamScopes:[f.Ft.ADMIN_SET_BUCKET_QUOTA],resourceName:pt,property:"Quota:",value:Re?"Enabled":"Disabled",onEdit:function(){dt(!0)},isLoading:Se,helpTip:(0,g.jsxs)(i.Fragment,{children:["Setting a"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/linux/reference/minio-mc/mc-quota-set.html",target:"blank",children:"quota"})," ","assigns a hard limit to a bucket beyond which MinIO does not allow writes."]})})]}),(0,g.jsxs)(d.xuv,{sx:{display:"grid",gridTemplateColumns:"1fr",alignItems:"flex-start"},children:[(0,g.jsx)(k,{bucketSize:"".concat(P)}),Re&&Le?(0,g.jsx)(O,{quota:Le}):null]})]})})}),T&&(0,g.jsx)(h.s,{scopes:[f.Ft.S3_GET_BUCKET_VERSIONING,f.Ft.S3_GET_ACTIONS],resource:pt,children:(0,g.jsxs)(d.rjZ,{item:!0,xs:12,sx:{marginTop:5},children:[(0,g.jsx)(d.NZf,{separator:!0,sx:{marginBottom:15},children:"Versioning"}),(0,g.jsx)(d.xuv,{sx:x.nl,children:(0,g.jsxs)(d.xuv,{sx:x.nl,children:[(0,g.jsx)(I,{iamScopes:[f.Ft.S3_PUT_BUCKET_VERSIONING,f.Ft.S3_PUT_ACTIONS],resourceName:pt,property:"Current Status:",value:(0,g.jsx)(d.xuv,{sx:{display:"flex",flexDirection:"column",textDecorationStyle:"initial",placeItems:"flex-start",justifyItems:"flex-start",gap:3},children:(0,g.jsxs)("div",{children:[" ",Et]})}),onEdit:function(){mt(!0)},isLoading:pe,disabled:M}),"Enabled"===(null===Ze||void 0===Ze?void 0:Ze.status)?(0,g.jsx)(S,{versioningState:Ze}):null]})})]})}),M&&(0,g.jsx)(h.s,{scopes:[f.Ft.S3_GET_OBJECT_RETENTION,f.Ft.S3_GET_ACTIONS],resource:pt,children:(0,g.jsxs)(d.rjZ,{item:!0,xs:12,sx:{marginTop:5},children:[(0,g.jsx)(d.NZf,{separator:!0,sx:{marginBottom:15},children:"Retention"}),(0,g.jsx)(d.xuv,{sx:x.nl,children:(0,g.jsxs)(d.xuv,{sx:x.nl,children:[(0,g.jsx)(I,{iamScopes:[f.Ft.ADMIN_SET_BUCKET_QUOTA],resourceName:pt,property:"Retention:",value:Ve?"Enabled":"Disabled",onEdit:function(){st(!0)},isLoading:Ne,helpTip:(0,g.jsxs)(i.Fragment,{children:["MinIO"," ",(0,g.jsx)("a",{target:"blank",href:"https://min.io/docs/minio/macos/administration/object-management.html#object-retention",children:"Object Locking"})," ","enforces Write-Once Read-Many (WORM) immutability to protect versioned objects from deletion."]})}),(0,g.jsx)(d.kKA,{label:"Mode:",value:(0,g.jsx)("label",{className:"muted",style:{textTransform:"capitalize"},children:Xe&&Xe.mode?Xe.mode:"-"})}),(0,g.jsx)(d.kKA,{label:"Validity:",value:(0,g.jsxs)("label",{className:"muted",style:{textTransform:"capitalize"},children:[Xe&&Xe.validity," ",Xe&&(1===Xe.validity?null===(e=Xe.unit)||void 0===e?void 0:e.slice(0,-1):Xe.unit)]})})]})})]})})]})]})}},84861:function(e,t,n){n(72791);var s=n(29945),i=n(80184);t.Z=function(e){var t=e.icon,n=void 0===t?null:t,l=e.label,a=void 0===l?null:l;return(0,i.jsxs)(s.xuv,{sx:{display:"flex",alignItems:"center",gap:5,marginTop:3},children:[(0,i.jsx)(s.xuv,{sx:{height:16,width:16,display:"flex",alignItems:"center"},children:n}),(0,i.jsx)(s.xuv,{children:a})]})}}}]);
//# sourceMappingURL=3989.456ae7ca.chunk.js.map