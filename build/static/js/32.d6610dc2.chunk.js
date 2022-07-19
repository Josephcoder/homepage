(this["webpackJsonpreact-redux-typescript-advance"]=this["webpackJsonpreact-redux-typescript-advance"]||[]).push([[32],{683:function(e,t,l){"use strict";var a=l(4),s=l.n(a),i=l(50),c=l(1),n=function(e){e.title;var t=e.description,l=void 0===t?"Please Wait for the system to publish the sessions or contact the administrator":t,a=e.content,s=void 0===a?void 0:a;return Object(c.jsx)("div",{className:"w-full my-5",children:Object(c.jsxs)("section",{className:"py-10 flex flex-col items-center rounded border border-gray-300 bg-white text-2xl font-medium text-yellow-800 animate__animated animate__pulse",children:[Object(c.jsxs)("div",{className:"flex flex-col items-center",children:[Object(c.jsx)(i.r,{className:"w-32 h-32"}),l]}),s&&s,!1]})})};t.a=s.a.memo(n)},687:function(e,t,l){"use strict";l(4);var a=l(1);t.a=function(e){var t=function(){for(var t=[],l=0;l<e.cols;l++)t.push(l);return t.map((function(e){return Object(a.jsx)("td",{className:"p-3 text-center whitespace-nowrap",children:Object(a.jsx)("div",{className:"w-full h-4 rounded bg-gray-200 animate__animated animate__pulse animate__delay-5s animate__infinite"})},e)}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("tr",{className:"border-b border-gray-200",children:t()},Math.random()),Object(a.jsx)("tr",{className:"border-b border-gray-200",children:t()},Math.random()),Object(a.jsx)("tr",{className:"border-b border-gray-200",children:t()},Math.random())]})}},690:function(e,t,l){"use strict";l(4);var a=l(714),s=l(715),i=l(34),c=l(1);t.a=function(e){var t=e.fileData,l=e.fileName,n=e.btnName,r=void 0===n?"Excel":n,o=e.className,d=void 0===o?"flex items-center gap-1 px-4 py-1 rounded text-green-700 bg-white border hover:text-white hover:bg-green-700 border-green-700 font-bold":o,u=e.showIcon,m=void 0===u||u;return Object(c.jsxs)("button",{onClick:function(e){return function(e,t){var l={Sheets:{data:s.utils.json_to_sheet(e)},SheetNames:["data"]},i=s.write(l,{bookType:"xlsx",type:"array"}),c=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});a.saveAs(c,t+".xlsx")}(t,l)},className:d,children:[m&&Object(c.jsx)(i.j,{}),r]})}},694:function(e,t,l){"use strict";l.d(t,"a",(function(){return d}));var a=l(5),s=l.n(a),i=l(7),c=l(713),n=l(28),r=l.p+"static/media/mineduc.11a9ae1c.png";l(721);var o=function(e){var t=e.internal.getNumberOfPages();e.setFont("helvetica","italic"),e.setFontSize(8);for(var l=1;l<=t;l++)e.setPage(l),e.text("Page "+String(l)+" of "+String(t),e.internal.pageSize.width/2,297,{align:"center"})},d=function(){var e=Object(i.a)(s.a.mark((function e(t,l,a){var i,d,u,m,b,j,x,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a(!0),i=t.orientation?t.orientation:"p",d=20,20,185,(u=new c.default(i,"mm","a4")).setTextColor(95,95,95),u.setFontSize(28),u.addImage(r,"png",20,20,10,10),u.text("MINEDUC",32,28.5,void 0,"left"),u.setFontSize(26),u.text(t.title,u.internal.pageSize.getWidth()/2,42.7,void 0,"center"),u.setFontSize(20),u.text(t.institute,u.internal.pageSize.getWidth()/2,53.7,void 0,"center"),m=u.splitTextToSize(t.subject,145),u.setFontSize(16),b=63,u.setTextColor(95,95,95),u.text("".concat(t.subjectTitle,": "),d,b),j=u.getTextWidth("".concat(t.subjectTitle,": ")),u.setTextColor(38,38,38),x=0;x<m.length;x++)b>280&&(b=10,u.addPage()),u.text(m[x],d+j,b),b+=7;return u.setTextColor(95,95,95),u.text("Period: ",d,b+3),j=u.getTextWidth("Period: "),u.setTextColor(38,38,38),u.text(t.period,d+j,b+3),u.autoTable({html:l,startY:85,margin:{horizontal:20},cellPadding:3,rowHeight:20,bodyStyles:{valign:"top"},columnStyles:{email:{cellWidth:"wrap"}},theme:"striped",tableWidth:!0}),u.setFontSize(12),p=u.lastAutoTable.finalY,u.text("Reported by: ".concat(t.doneBy),d,p+15),u.text("Report downloaded on "+Object(n.a)((new Date).toString()),d,p+23),o(u),e.next=35,u.save("".concat(t.title+": "+t.subject+": "+t.period,".pdf"),{returnPromise:!0}).then(a(!1));case 35:case"end":return e.stop()}}),e)})));return function(t,l,a){return e.apply(this,arguments)}}()},699:function(e,t,l){"use strict";var a=l(17),s=(l(11),l(18),l(4)),i=l.n(s),c=l(12),n=l(33),r=(l(9),l(49)),o=l(1),d=function(e){var t,l,i=Object(s.useState)(null),d=Object(a.a)(i,2),u=d[0],m=d[1],b=Object(s.useState)(""),j=Object(a.a)(b,2),x=j[0],p=j[1];return Object(o.jsxs)("div",{className:"",children:[Object(o.jsx)("div",{className:"px-3",children:Object(o.jsx)("input",{onChange:function(e){return p(e.target.value)},type:"text",className:"py-3 px-4 w-full rounded border border-gray-400 mb-3",placeholder:"Search by year, name",disabled:null===e.allSession||0===e.allSession.length})}),Object(o.jsx)("div",{className:"bg-gray-100 px-3 pt-3 pb-2 rounded-b",children:null===e.allSession?Object(o.jsx)(n.a,{}):0===e.allSession.length?Object(o.jsxs)("div",{className:"flex flex-col text-gray-400 items-center justify-center mb-2 bg-white py-4",children:[Object(o.jsx)(c.Pb,{className:"text-6xl"}),Object(o.jsx)("div",{className:"flex flex-col items-center justify-center",children:Object(o.jsx)("span",{children:"No session found!"})})]}):Object(o.jsxs)("section",{children:[e.chooseAll&&Object(o.jsxs)("div",{className:"rounded border ".concat("all"===e.currentSelected?"bg-blue-50 border-blue-300":"bg-white border-white "," group hover:border-blue-500 px-2 py-2 mb-2 flex flex-col md:flex-row items-start md:items-center md:justify-between"),children:[Object(o.jsxs)("div",{className:"flex flex-row items-center gap-3",children:["all"===e.currentSelected?Object(o.jsx)(c.v,{className:"text-blue-500 text-4xl"}):Object(o.jsx)(c.Fb,{className:"text-gray-300 text-4xl"}),Object(o.jsx)("div",{className:"flex flex-col",children:Object(o.jsx)("div",{className:"text-gray-600 font-bold",children:"All session"})})]}),Object(o.jsx)("div",{onClick:function(){e.setSelectSession("all")},className:"bg-gray-50 group-hover:bg-blue-600 font-semibold text-gray-400 group-hover:text-white rounded px-3 py-2 cursor-pointer",children:"Select"})]}),(t=e.allSession,l=x,Object(r.a)(t,l)).map((function(t,l){return Object(o.jsx)("div",{className:"rounded border ".concat("all"!==e.currentSelected&&e.currentSelected._id===t._id?"bg-blue-50 border-blue-300":"bg-white border-white "," group hover:border-blue-500 px-2 py-2 mb-2"),children:Object(o.jsxs)("div",{className:"flex flex-col md:flex-row items-start md:items-center md:justify-between ",children:[Object(o.jsxs)("div",{className:"flex flex-row items-center gap-3",children:["all"!==e.currentSelected&&e.currentSelected._id===t._id?Object(o.jsx)(c.v,{className:"text-blue-500 text-4xl"}):Object(o.jsx)(c.Fb,{className:"text-gray-300 text-4xl"}),Object(o.jsxs)("div",{className:"flex flex-col",children:[Object(o.jsx)("div",{className:"".concat("all"!==e.currentSelected&&e.currentSelected._id===t._id?"text-blue-600":"text-gray-600"," font-bold"),children:t.session_plan_name}),Object(o.jsxs)("div",{className:"text-sm text-gray-500",children:[Object(o.jsx)("span",{children:"Status: "}),Object(o.jsx)("span",{className:"".concat(!0===t.is_active?"text-gray-900 font-bold underline":"text-gray-500 italic"),children:!0===t.is_active?"Active":"Expired"})]})]})]}),Object(o.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(null===u||u._id!==t._id)&&Object(o.jsx)("div",{onClick:function(){return m(t)},className:"bg-gray-50 group-hover:bg-blue-100 font-semibold text-gray-400 group-hover:text-blue-600 rounded px-3 py-2 cursor-pointer",children:"Details"}),Object(o.jsx)("div",{onClick:function(){e.setSelectSession(t)},className:"bg-gray-50 group-hover:bg-blue-600 font-semibold text-gray-400 group-hover:text-white rounded px-3 py-2 cursor-pointer",children:"Select"}),null!==u&&u._id===t._id&&Object(o.jsx)("div",{onClick:function(){return m(null)},className:"bg-red-100 group-hover:bg-red-200 font-semibold text-red-600 group-hover:text-red-800 rounded px-3 py-2 cursor-pointer",children:"Close"})]})]})},l+1)}))]})})]})};t.a=i.a.memo(d)},711:function(e,t){},716:function(e,t){},717:function(e,t){},875:function(e,t,l){"use strict";l.r(t),l.d(t,"reportClaimType",(function(){return k})),l.d(t,"ClaimingReport",(function(){return A}));var a=l(17),s=l(4),i=l(72),c=l(206),n=l(67),r=l(12),o=l(23),d=l(3),u=l(69),m=l(694),b=l(33),j=l(19),x=l(685),p=l(212),h=l(21),g=l(690),f=l(28),O=l(808),y=l(687),v=l(9),N=l(203),_=l(32),C=l(699),S=l(683),w=l(1),k=function(e){var t="all";switch(e){case v.g.APPLICATION:t=O.ClaimTypesEnum.application;break;case v.g.DOCUMENT_VALIDATION:t=O.ClaimTypesEnum.document;break;case v.g.EXAMINATION:t=O.ClaimTypesEnum.exam;break;case v.g.MARKS_PUBLICATION:t=O.ClaimTypesEnum.marks_publication;break;case v.g.PLACEMENT_TRANSFER:t=O.ClaimTypesEnum.placement;break;default:t="all"}return t},T=[{key:p.d.names,title:"Applicant Names",status:!0},{key:p.d.national_id,title:"National ID",status:!0},{key:p.d.gender,title:"Gender",status:!0},{key:p.d.phone,title:"Phone",status:!0},{key:p.d.claim_session,title:"Claim Session",status:!0},{key:p.d.education_category,title:"Education Institute",status:!0},{key:p.d.date,title:"Claim Date",status:!0},{key:p.d.decision,title:"Decision",status:!0},{key:p.d.claim_title,title:"Claim Title",status:!0},{key:p.d.claim_type,title:"Claim Type",status:!0},{key:p.d.claim_level,title:"Claim Level",status:!0}],A=Object(o.b)((function(e){var t=e.auth,l=e.sessionPlan,a=e.claiming,s=e.document,i=e.schoolLevels;return{auth:t,application_sessions:l.allSessionPlans,claiming:a,documentReducer:s,schoolLevels:i}}),{getAllClaims:u.g,GetClaimingTypes:u.a,getAllApplications:u.f,GetAllSessionPlans:N.d,loadEducationCategories:d.Jc,setSelectedClaimType:u.n,PushPopupAlert:d.Rb})((function(e){var t=Object(s.useState)(null),l=Object(a.a)(t,2),o=l[0],d=l[1],u=Object(s.useState)("all"),N=Object(a.a)(u,2),A=N[0],P=N[1],E=Object(s.useState)(!0),F=Object(a.a)(E,2),L=F[0],D=F[1],I=Object(s.useState)(!0),R=Object(a.a)(I,2),z=R[0],G=R[1],M=Object(s.useState)(!1),W=Object(a.a)(M,2),B=W[0],U=W[1],X=Object(s.useState)(!0),J=Object(a.a)(X,2),q=J[0],K=J[1],Y=Object(s.useState)(!0),H=Object(a.a)(Y,2),V=H[0],Q=H[1],Z=Object(s.useState)(!1),$=Object(a.a)(Z,2),ee=$[0],te=$[1],le=Object(s.useState)(),ae=Object(a.a)(le,2),se=ae[0],ie=ae[1],ce=Object(s.useState)(""),ne=Object(a.a)(ce,2),re=ne[0],oe=ne[1],de=Object(s.useState)(!1),ue=Object(a.a)(de,2),me=ue[0],be=ue[1],je=Object(s.useState)("ASC"),xe=Object(a.a)(je,2),pe=xe[0],he=xe[1],ge=Object(s.useState)(""),fe=Object(a.a)(ge,2),Oe=fe[0],ye=fe[1],ve=Object(s.useState)(null),Ne=Object(a.a)(ve,2),_e=Ne[0],Ce=Ne[1],Se=Object(s.useState)(""),we=Object(a.a)(Se,2),ke=we[0],Te=we[1],Ae=Object(s.useState)(T),Pe=Object(a.a)(Ae,2),Ee=Pe[0],Fe=Pe[1],Le=Object(s.useState)(!0),De=Object(a.a)(Le,2),Ie=De[0],Re=De[1],ze=Object(s.useState)(null),Ge=Object(a.a)(ze,2),Me=Ge[0],We=Ge[1],Be=Object(s.useState)(!1),Ue=Object(a.a)(Be,2),Xe=Ue[0],Je=Ue[1],qe=Object(s.useState)("all"),Ke=Object(a.a)(qe,2),Ye=Ke[0],He=Ke[1];if(Object(s.useEffect)((function(){if(null===e.schoolLevels.education_categories||0===e.schoolLevels.education_categories.length?e.loadEducationCategories(Q):Q(!1),null===e.claiming.claimTypes&&e.GetClaimingTypes((function(t,l){!1===t&&l.length>0&&e.PushPopupAlert({title:l,theme:h.a.danger})})),null===e.application_sessions?e.GetAllSessionPlans((function(t,l){t||(G(!1),D(!1),l.length&&e.PushPopupAlert({title:l,theme:h.a.danger}))})):z&&(D(!1),G(!1)),null===o&&!z&&e.application_sessions&&e.application_sessions.length>0){var t=e.application_sessions.find((function(e){return!0===e.is_active}));d(t||e.application_sessions[0])}null===e.claiming.allClaims&&null!==o?e.getAllClaims(2,o._id,(function(t,l){!t&&K(t),!1===t&&l.length&&e.PushPopupAlert({title:l,theme:h.a.danger})})):o&&q&&K(!1)}),[q,z,e,o]),!0===L)return Object(w.jsx)("div",{className:"text-center mt-7 font-bold text-4xl text-gray-400 animate-pulse",children:"Loading Data..."});if(e.application_sessions&&0===e.application_sessions.length)return Object(w.jsx)(S.a,{});var Ve,Qe,Ze=function(e){he(re===e&&"ASC"===pe?"DESC":"ASC"),oe(e),be(!0)},$e=function(){if(o){var t="Claim Report "+o.session_plan_name;Te(t)}if(e.claiming.allClaims&&e.claiming.claimTypes){var l=[],a=1;for(var s in e.claiming.allClaims)if(Object.prototype.hasOwnProperty.call(e.claiming.allClaims,s))for(var i in e.claiming.allClaims[s].claims)if(Object.prototype.hasOwnProperty.call(e.claiming.allClaims[s].claims,i)){var c=e.claiming.allClaims[s].claims[i],n=Object(O.whichClaimType)(e.claiming.allClaims[s]),r={claim_id:a,names:e.claiming.allClaims[s].user.user_info.fname+" "+e.claiming.allClaims[s].user.user_info.lname,gender:e.claiming.allClaims[s].user.user_info.sex?"Male":"Female",national_id:e.claiming.allClaims[s].user.n_id,phone:e.claiming.allClaims[s].user.phone_number,email:e.claiming.allClaims[s].user.email,claim_type:n||"",claim_level:c.level,education_category:"",claim_session:o?o.session_plan_name:"",date:Object(f.a)(c.createdAt),decision:c.decision_taken_status?c.decision_taken_status:"PENDING",claim_title:e.claiming.allClaims[s].title};for(var d in Ee)Object.prototype.hasOwnProperty.call(Ee,d)&&(Ee[d].status||delete r[Ee[d].key]);l.push(r),a++}ie(l),l=[],a=1}},et=function(e){if(null===e)return null;var t=[],l=1;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a))for(var s in e[a].claims)if(Object.prototype.hasOwnProperty.call(e[a].claims,s)){var i=e[a].claims[s],c=Object(O.whichClaimType)(e[a]),n={claim_id:l,names:e[a].user.user_info.fname+" "+e[a].user.user_info.lname,gender:e[a].user.user_info.sex?"Male":"Female",national_id:e[a].user.n_id,phone:e[a].user.phone_number,email:e[a].user.email,claim_type:c||"",claim_level:i.level,education_category:e[a].institute_id&&!Object(_.f)(e[a].institute_id)?e[a].institute_id:null,claim_session:o?o.session_plan_name:"",date:Object(f.a)(i.createdAt),decision:i.decision_taken_status?i.decision_taken_status:"PENDING",claim_title:e[a].title?e[a].title:"Undefined"};t.push(n),l++}return t},tt=function(e){return e!==p.d.names&&e!==p.d.decision&&e!==p.d.claim_session&&e!==p.d.claim_type&&e!==p.d.date},lt=function(e,t,l,a){var s=e;return"all"!==t&&(s=s.filter((function(e){return e.claim_type===t}))),"all"!==l&&(s=s.filter((function(e){return e.claim_level===l}))),"all"!==a&&(s=s.filter((function(e){return null===e.education_category||e.education_category===a.education_institute_id}))),s};return Object(w.jsxs)(s.Fragment,{children:[Object(w.jsxs)(x.b,{children:[Object(w.jsxs)("div",{className:"flex flex-col mb-4",children:[Object(w.jsx)("span",{className:"text-sm text-gray-600 mb-2",children:"Education categories:"}),null===e.schoolLevels.education_categories||V?Object(w.jsx)(b.a,{}):0===e.schoolLevels.education_categories.length?Object(w.jsx)("span",{children:"No result found"}):Object(w.jsxs)(s.Fragment,{children:[Object(w.jsxs)("div",{onClick:function(){return He("all")},className:"border rounded px-2 py-2 mb-2 cursor-pointer ".concat("all"===Ye?"bg-blue-600 text-white hover:bg-blue-100 hover:text-blue-600 hover:border-blue-500":"hover:bg-blue-100 hover:text-blue-600 hover:border-blue-500"," font-bold flex flex-row items-center gap-2"),children:["all"===Ye?Object(w.jsx)(r.Eb,{}):Object(w.jsx)(r.Fb,{}),Object(w.jsx)("span",{children:"All"})]}),e.schoolLevels.education_categories.map((function(e,t){return Object(w.jsxs)("div",{onClick:function(){return He(e)},className:"border rounded px-2 py-2 mb-2 cursor-pointer ".concat("all"!==Ye&&Ye.education_institute_id===e.education_institute_id?"bg-blue-600 text-white hover:bg-blue-100 hover:text-blue-600 hover:border-blue-500":"hover:bg-blue-100 hover:text-blue-600 hover:border-blue-500"," font-bold flex flex-row items-center gap-2"),children:["all"!==Ye&&Ye.education_institute_id===e.education_institute_id?Object(w.jsx)(r.Eb,{}):Object(w.jsx)(r.Fb,{}),Object(w.jsx)("span",{children:e.education_category_title})]},t+1)}))]})]}),Object(w.jsxs)("div",{className:"",children:[Object(w.jsx)("div",{className:"text-gray-600 text-sm mb-2",children:"Selected period:"}),Object(w.jsxs)("div",{onClick:function(){return Je(!0)},className:"font-bold bg-blue-50 border border-blue-200 rounded py-2 cursor-pointer text-xs px-2 hover:underline  text-blue-600  mb-4 w-full flex flex-row items-center animate__animated animate__zoomIn",children:[null!==o?"".concat(Object(_.b)(o.session_plan_name)," - ").concat(o.period):"Filter by period",Object(w.jsx)(c.e,{className:"text-3xl text-blue-600"})]})]}),Object(w.jsxs)("div",{className:"pt-1",children:[Object(w.jsx)("div",{className:"text-sm text-gray-700 pb-2 pt-2",children:"Claim types:"}),null===e.claiming.claimTypes||null===et(e.claiming.allClaims)?Object(w.jsx)(b.a,{}):function(e){var t=[{title:"All types",count:e.length,type:"all"}];return Object.values(v.g).forEach((function(l){l!==v.g.MARKS_PUBLICATION&&t.push({title:Object(_.a)(k(l)),count:e.length>0?e.filter((function(e){return e.claim_type===k(l)})).length:0,type:l})})),t}(et(e.claiming.allClaims)).map((function(t,l){return Object(w.jsx)("div",{onClick:function(){return e.setSelectedClaimType(k(t.type))},children:Object(w.jsx)(x.a,{title:t.title,count:t.count,active:(a=e.claiming.selectedClaimType,s=t.type,"all"===s&&"all"===a||"all"!==s&&"all"!==a&&s===a)})},t.title+l);var a,s}))]}),Object(w.jsxs)("div",{className:"pt-1",children:[Object(w.jsx)("div",{className:"text-sm text-gray-700 pb-2 pt-2",children:"Claim level:"}),null===e.claiming.claimTypes||null===et(e.claiming.allClaims)?Object(w.jsx)(b.a,{}):function(e){var t=[{title:"All levels",count:e.length,level:"all"}],l=[1,2],a=function(a){t.push({title:"Level "+l[a],count:e.filter((function(e){return e.claim_level===l[a]})).length,level:l[a]})};for(var s in l)a(s);return t}(et(e.claiming.allClaims)).map((function(e,t){return Object(w.jsx)("div",{onClick:function(){return P(e.level)},children:Object(w.jsx)(x.a,{title:e.title,count:e.count,active:e.level===A})},e.title+t)}))]})]}),Object(w.jsxs)("section",{children:[Object(w.jsxs)("div",{className:"grid md:grid-cols-12",children:[Object(w.jsx)("div",{className:"col-span-8",children:Object(w.jsx)("div",{className:"mt-4 mx-4 flex flex-col gap-1",children:Object(w.jsx)("span",{className:"text-3xl font-bold text-gray-700",children:"Claim report"})})}),Object(w.jsx)("div",{className:"col-span-4",children:Object(w.jsx)("div",{className:"float-right mt-2",children:e.claiming.allClaims&&e.claiming.allClaims.length>0&&Object(w.jsxs)("div",{className:"flex flex-row items-center justify-end font-bold mb-2",children:[Object(w.jsx)(i.e,{className:"text-2xl text-gray-500"}),Object(w.jsx)("span",{className:"text-gray-500",children:"Export as"}),Object(w.jsx)("button",{className:"px-4 py-1 ml-1 rounded bg-white border hover:text-blue-600 font-bold hover:bg-blue-50 border-gray-200",disabled:L,onClick:function(){$e(),Ce({reportType:"EXCEL",status:!0})},children:"EXCEL"}),Object(w.jsx)("button",{className:"px-4 py-1 ml-1 rounded bg-white border hover:text-blue-600 font-bold hover:bg-blue-50 border-gray-200 ".concat(ee&&"cursor-wait"),onClick:function(){return function(){if(document.querySelectorAll("#report_content tbody tr").length){if(o){var t=document.getElementById("report_content"),l={doneBy:e.auth.user.fname+" "+e.auth.user.lname,title:"Claim Report",subjectTitle:"Claim type",subject:"all"===e.claiming.selectedClaimType?"All Types":e.claiming.selectedClaimType,period:o.session_plan_name,footer:"Online Recruitment",institute:"all"===Ye?"All institute":Ye.education_category_title};t&&Object(m.a)(l,t,te)}}else e.PushPopupAlert({title:"Can't generate Report of empty Data",theme:h.a.warning})}()},disabled:L||ee,children:"PDF"})]})})})]}),Object(w.jsxs)("div",{className:"bg-white my-4",children:[Object(w.jsx)("div",{className:"w-full px-2 py-2",children:Object(w.jsx)("input",{onChange:function(e){return ye(e.target.value)},type:"text",value:Oe,placeholder:"Search...",className:"w-full bg-gray-100 py-2 px-3 rounded focus:border-gray-800",disabled:null===e.claiming.allClaims||null===e.claiming.claimTypes||null===et(e.claiming.allClaims)||B})}),Object(w.jsxs)("table",{className:"w-full shadow",id:"report_content",children:[Object(w.jsx)("thead",{className:"bg-white border-b-2 border-gray-300 text-gray-600 font-bold text-sm",children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{className:"px-2 py-2",children:"#"}),Object(w.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return Ze("names")},children:Object(w.jsxs)("div",{className:"flex items-center gap-1",children:["Applicant names ",Object(w.jsx)(i.j,{})]})}),Object(w.jsx)("td",{className:"px-2 py-2",children:"National ID"}),Object(w.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return Ze("gender")},children:Object(w.jsxs)("div",{className:"flex items-center gap-1",children:["Gender ",Object(w.jsx)(i.j,{})]})}),Object(w.jsx)("td",{className:"px-2 py-2",children:"Phone"}),Object(w.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return Ze("claim_title")},children:Object(w.jsxs)("div",{className:"flex items-center gap-1",children:["Claim Title ",Object(w.jsx)(i.j,{})]})}),Object(w.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return Ze("claim_type")},children:Object(w.jsxs)("div",{className:"flex items-center gap-1",children:["Claim Type ",Object(w.jsx)(i.j,{})]})}),Object(w.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return Ze("claim_level")},children:Object(w.jsxs)("div",{className:"flex items-center gap-1",children:["Claim Level ",Object(w.jsx)(i.j,{})]})}),Object(w.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return Ze("decision")},children:Object(w.jsxs)("div",{className:"flex items-center gap-1",children:["Status ",Object(w.jsx)(i.j,{})]})}),Object(w.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return Ze("date")},children:Object(w.jsxs)("div",{className:"flex items-center gap-1",children:["Date ",Object(w.jsx)(i.j,{})]})})]})}),Object(w.jsx)("tbody",{children:null===e.claiming.allClaims||null===e.claiming.claimTypes||B||null===et(e.claiming.allClaims)?Object(w.jsx)(y.a,{cols:10}):0===lt(et(e.claiming.allClaims),e.claiming.selectedClaimType,A,Ye).length?Object(w.jsx)("tr",{children:Object(w.jsx)("td",{colSpan:10,className:"px-2 py-2",children:Object(w.jsxs)("div",{className:"flex flex-col text-gray-400 items-center justify-center bg-gray-100 rounded py-10",children:[Object(w.jsx)(n.c,{className:"text-8xl text-gray-400 mb-2 animate__animated animate__shakeX"}),Object(w.jsx)("span",{className:"text-sm font-bold",children:"No result found! Please try to search again"}),Object(w.jsx)("div",{className:"w-full mt-2 flex flex-row items-center justify-center",children:Object(w.jsxs)("ul",{className:"text-sm py-2 text-blue-600 font-bold flex flex-row gap-2",children:[Object(w.jsx)("li",{onClick:function(){return Je(!0)},className:"underline text-gray-500 cursor-pointer",children:"Filter by period"}),Object(w.jsx)("li",{className:"text-gray-400 italic",children:"or"}),Object(w.jsx)("li",{className:"text-gray-500",children:"Filter by Claim type"}),Object(w.jsx)("li",{className:"text-gray-400 italic",children:"or"}),Object(w.jsx)("li",{className:"text-gray-500",children:"Filter by Claim Level"})]})})]})})}):Object(f.r)(me,(Ve=lt(et(e.claiming.allClaims),e.claiming.selectedClaimType,A,Ye),Qe=Oe,void 0===Qe||""===Qe?Ve:Ve.filter((function(e){var t;for(var l in e)if(t=!1,"names"!==l&&"gender"!==l&&"national_id"!==l&&"phone"!==l&&"email"!==l&&"claim_title"!==l&&"claim_type"!==l&&"claim_level"!==l&&"education_category"!==l&&"claim_session"!==l&&"date"!==l&&"decision"!==l||e[l]&&(t=e[l].toString().toLowerCase().indexOf(Qe.toLowerCase())>-1),t)break;return t}))),re,pe).map((function(e,t){return Object(w.jsxs)("tr",{className:"".concat(t%2!==0?"bg-gray-100":"bg-white"," text-gray-600 hover:bg-blue-100 hover:text-blue-700 border-b border-gray-300 hover:border-blue-500 text-sm"),children:[Object(w.jsx)("td",{className:"px-2 py-2",children:t+1}),Object(w.jsx)("td",{className:"px-2 py-2",children:e.names}),Object(w.jsx)("td",{className:"px-2 py-2",children:e.national_id}),Object(w.jsx)("td",{className:"px-2 py-2",children:e.gender}),Object(w.jsx)("td",{className:"px-2 py-2",children:e.phone}),Object(w.jsx)("td",{className:"px-2 py-2",children:e.claim_title}),Object(w.jsx)("td",{className:"px-2 py-2",children:e.claim_type}),Object(w.jsx)("td",{className:"px-2 py-2",children:"Level "+e.claim_level}),Object(w.jsx)("td",{className:"px-2 py-2",children:e.decision}),Object(w.jsx)("td",{className:"px-2 py-2",children:e.date})]},t+1)}))})]})]})]}),null!==_e&&!0===_e.status&&Object(w.jsx)(j.d,{title:Object(w.jsx)("div",{className:"flex flex-row gap-4 items-center",children:Object(w.jsxs)("div",{className:"flex flex-col",children:[Object(w.jsx)("span",{className:"font-bold text-2xl text-gray-500",children:"Generating Report contents"}),Object(w.jsxs)("span",{className:"text-sm text-blue-600 font-normal",children:["Generating ",_e.reportType," Report"]})]})}),backDrop:!0,theme:j.c.default,close:function(){return Ce(null)},backDropClose:!1,widthSizeClass:j.b.medium,displayClose:!0,padding:{title:!0},children:Object(w.jsxs)("div",{className:"px-6",children:[Object(w.jsxs)("div",{className:"my-2 text-base text-gray-700 sm:text-lg",children:[Object(w.jsxs)("div",{className:"flex flex-col",children:[Object(w.jsx)("label",{children:"Title"}),Object(w.jsx)("input",{type:"text",className:"text-left input-white w-20 inline-block ".concat(Me&&"report_title"===Me.element?"border-red-500":"border-gray-500"," border-2"),placeholder:"Sub Category Title",value:ke,onChange:function(e){We(null),Te(e.target.value)},disabled:L}),Me&&"report_title"===Me.element&&Object(w.jsx)("span",{className:"text-red-500",children:Me.msg})]}),Object(w.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(w.jsx)("label",{children:"Report content"}),Object(w.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 items-center gap-2 mt-2",children:Ee.map((function(e,t){return Object(w.jsxs)("div",{className:"flex items-center gap-1 ".concat(tt(e.key)?"cursor-pointer":"cursor-not-allowed"),onClick:function(){return tt(e.key)&&function(e){var t=Ee.findIndex((function(t){return t.key===e})),l=Ee;l[t].status=!l[t].status,Fe(l);var a=l.find((function(e){return!1===e.status}));Re(!a),$e()}(e.key)},title:tt(e.key)?"":"Required for every report!",children:[e.status?Object(w.jsx)(r.t,{className:"w-6 h-6 text-blue-700"}):Object(w.jsx)(r.u,{className:"w-6 h-6"}),Object(w.jsx)("span",{children:e.title})]},t)}))}),Me&&"report_content"===Me.element&&Object(w.jsx)("span",{className:"text-red-500",children:Me.msg})]})]}),Object(w.jsxs)("div",{className:"flex justify-between mb-2 mt-4",children:[Object(w.jsxs)("div",{className:"flex items-center gap-1 cursor-pointer",onClick:function(){return function(e){var t=Ee;for(var l in t)tt(t[l].key)&&(t[l].status=!e);Fe(t),Re(!e),$e()}(Ie)},children:[Ie?Object(w.jsx)(r.t,{className:"w-6 h-6 text-blue-700"}):Object(w.jsx)(r.u,{className:"w-6 h-6"}),Object(w.jsx)("span",{children:"Select all"})]}),se&&!L&&Object(w.jsx)(g.a,{fileData:se,fileName:ke,btnName:"Generate"})]})]})}),Xe&&Object(w.jsx)(j.d,{title:Object(w.jsxs)("div",{className:"flex flex-row gap-4 items-center",children:[Object(w.jsx)(r.R,{className:"text-5xl text-blue-600"}),Object(w.jsx)("span",{className:"flex flex-col",children:"Choose a period"})]}),backDrop:!0,theme:j.c.default,close:function(){return null!==o&&Je(!1)},backDropClose:!0,widthSizeClass:j.b.extraLarge,displayClose:!0,padding:{title:!0},children:Object(w.jsx)(C.a,{allSession:e.application_sessions,setSelectSession:function(t){var l;"all"!==t&&d(t),"all"!==t&&(l=t._id,U(!0),e.getAllClaims(2,l,(function(t,l){!t&&U(!1),!1===t&&l.length&&e.PushPopupAlert({title:l,theme:h.a.danger})}))),"all"!==t&&Je(!1)},chooseAll:!1,currentSelected:o||"all"})})]})}))}}]);
//# sourceMappingURL=32.d6610dc2.chunk.js.map