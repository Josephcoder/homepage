(this["webpackJsonpreact-redux-typescript-advance"]=this["webpackJsonpreact-redux-typescript-advance"]||[]).push([[51],{1330:function(e,t,i){"use strict";i.r(t),i.d(t,"AdminHomepage",(function(){return I}));var s=i(2),a=i(18),o=i(25),c=i(24),r=i(27),n=i(26),l=i(4),p=i.n(l),d=i(12),m=i(67),u=i(204),b=i(125),h=i(23),x=i(3),g=i(105),y=i(48),S=i(40),j=i(1),O=function(e){var t=e.link,i=e.show_category,s=t.icon;return Object(j.jsxs)(S.b,{to:t.url,className:"p-2 bg-white shadow rounded flex hover:bg-blue-100 cursor-pointer",children:[Object(j.jsx)("section",{children:Object(j.jsx)(s,{className:"text-4xl mt-1 text-gray-500"})}),Object(j.jsxs)("section",{className:"flex-1 pl-1",children:[!0===i&&Object(j.jsx)("h4",{className:"text-sm text-blue-700",children:t.category}),Object(j.jsx)("h3",{className:"font-bold text-xl",children:t.title}),Object(j.jsx)("p",{className:"text-sm text-gray-400",children:t.description})]})]})},T=i(203),N=i(66),k=i(124),E=i(715),w=i(34),v=i(72),f=i(37),_=i(31),A=[{title:"Settings",description:"General settings",icon:d.Pb,items:[{title:"System settings",description:"General system settings: 2 factor Auth",icon:d.Pb,keywords:"system settings application session positions 2 two factor authentication",url:"/settings",access:g.a.SYSTEM_SETTINGS},{title:"Schools",description:"School management",icon:v.b,keywords:"school institute education district",url:"/schools",access:g.a.LOCATION_MANAGEMENT}]},{title:"Application",description:"Applications",icon:m.f,items:[{title:"Apply",description:"Create Application",icon:b.d,keywords:"application position create apply vacancies vacancy post",url:"/apply",access:g.a.MY_APPLICATION},{title:"Applications",description:"Candidate Applications",icon:d.M,keywords:"application position",url:"/applications",access:g.a.MY_APPLICATION},{title:"Exams",description:"Candidate Exams",icon:_.o,keywords:"exams do exam ikizamini",url:"/candidate-exams",access:g.a.MY_APPLICATION},{title:"Session Plan",description:"Create, update, activate session plan",icon:d.Pb,keywords:"settings application calendar examination document validation marks publication placement session create activate desactivate update",url:"/session",access:g.a.SYSTEM_SETTINGS},{title:"Marks publication",description:"Pass marks publication",icon:d.Pb,keywords:"application marks pass publication",url:"/marks-publication",access:g.a.SYSTEM_SETTINGS},{title:"Teacher placement",description:"Teacher placement by position",icon:d.Pb,keywords:"do teacher placement waiting list post request",url:"/marks-publication/do-placement",access:g.a.SYSTEM_SETTINGS},{title:"Positions",description:"List, Create, update, delete position",icon:d.Pb,keywords:"system settings application session positions",url:"/positions",access:g.a.SYSTEM_SETTINGS},{title:"Create Position",description:"Create position",icon:d.Pb,keywords:"system settings application positions create",url:"/positions/create",access:g.a.SYSTEM_SETTINGS},{title:"Locations",description:"Location management",icon:d.Z,keywords:"location province district create update capacity delete",url:"/locations",access:g.a.LOCATION_MANAGEMENT},{title:"Centers",description:"Center management",icon:d.Y,keywords:"location province district center room sits create update capacity delete",url:"/centers",access:g.a.LOCATION_MANAGEMENT},{title:"Application Re-Evaluation",description:"Applications' decision override",icon:w.n,keywords:"application override rejected shortlisted decision",url:"/application-assessment",access:g.a.APPLICATION_OVERRIDE},{title:"Document category",description:"Document category settings",icon:w.n,keywords:"document category settings ",url:"/document-category",access:g.a.SYSTEM_SETTINGS},{title:"Document Validation",description:"Candidate document checking",icon:w.m,keywords:"candidate document checking admin level",url:"/document-validation",access:g.a.DOCUMENT_CHECKING}]},{title:"Users",description:"Users management",icon:d.a,items:[{title:"User list",description:"Manage users",icon:d.Sb,keywords:"manage",url:"/users",access:g.a.USER_MANAGEMENT},{title:"Roles",description:"All user role access",icon:E.c,keywords:"access role task",url:"/roles",access:g.a.ROLE_MANAGEMENT}]},{title:"Documents",description:"Documents management",icon:d.L,items:[]},{title:"Proctoring",description:"Proctoring room exam",icon:d.Ob,items:[{title:"Start proctoring",description:"Supervise a room assigned to you",icon:d.j,keywords:"supervise manage gucunga ckeck do exam",url:"/proctoring-center",access:g.a.PROCTORING_ROOM},{title:"Assign supervisor",description:"Assign supervison on a room",icon:d.i,keywords:"add supervisor give a room room-check",url:"/users",access:g.a.PROCTORING_ROOM},{title:"Settings",description:"Supervisor settings",icon:d.Pb,keywords:"candidates, user, settings",url:"/users",access:g.a.PROCTORING_ROOM}]},{title:"Exams",description:"Exams and Question bank",icon:m.n,items:[{title:"Upload questions",description:"Create and upload questions list",icon:u.h,keywords:"questions bank list excel upload",url:"/upload-questions",access:g.a.QUESTION_BANK},{title:"Question bank",description:"Questions list in the bank",icon:d.Xb,keywords:"questions bank list ibibazo",url:"/question-bank",access:g.a.QUESTION_BANK},{title:"Question types",description:"List of available question types",icon:d.Pb,keywords:"Question types, ibibazo, Question category, categories",url:"/settings-question-types",access:g.a.QUESTION_BANK},{title:"Courses",description:"List of all courses",icon:d.Pb,keywords:"Courses, amasomo, isomo",url:"/settings-courses",access:g.a.QUESTION_BANK},{title:"School levels",description:"Primary, Advanced, etc",icon:d.Pb,keywords:"school levels, school categories, amashuri",url:"/settings-school-levels",access:g.a.QUESTION_BANK},{title:"Education institutes",description:"List of institutes",icon:d.Pb,keywords:"List, institutes, category, education, schools",url:"/settings-education-categories",access:g.a.QUESTION_BANK},{title:"Exams list",description:"List of all exams",icon:d.Xb,keywords:"questions exams ikizamini list",url:"/exams-list",access:g.a.PREPARE_EXAM},{title:"Prepare exam",description:"Prepare examination",icon:m.c,keywords:"questions exam prepare ikizamini create",url:"/prepare-exam",access:g.a.PREPARE_EXAM}]},{title:"Claims",description:"Claims management",icon:T.i,items:[{title:"All Claims",description:"List and respond to claims",icon:k.b,keywords:"claim respond application document placement exam",url:"/claiming-admin",access:g.a.DOCUMENT_CHECKING}]},{title:"Post request",description:"Post request management",icon:T.i,items:[{title:"Post Request",description:"List my requests, request teachers",icon:N.q,keywords:"request post teacher",url:"/post-request",access:g.a.POST_REQUEST},{title:"Approve Request",description:"List and respond to post request",icon:k.b,keywords:"respond request post teacher school do placement",url:"/district",access:g.a.POST_APPROVAL}]},{title:"Report",description:"Report and Dashboard",icon:T.i,items:[{title:"Application Report",description:"Report for all applications",icon:b.e,keywords:"report application shortlisted rejected initiated applied raporo apulikasiyo",url:"/report-applications",access:g.a.DOCUMENT_CHECKING},{title:"Application Dashboard",description:"Dashboard for all application/session",icon:k.b,keywords:"dashboard application shortlisted rejected initiated applied raporo",url:"/dashboard-application",access:g.a.SYSTEM_SETTINGS},{title:"Examination Report",description:"Report for all exams",icon:b.e,keywords:"report ikizami ibizami exam pass failed raporo amanota abatsinze abatsinzwe done remaining bisigaye bitarakorwa bimazegukorwa gukorwa",url:"/report-exam",access:g.a.DOCUMENT_CHECKING},{title:"Exam Dashboard",description:"Dashboard for all exams/session",icon:k.b,keywords:"dashboard exam application performance applicant success failed abatsinze abatsinzwe raporo",url:"/dashboard-exam",access:g.a.SYSTEM_SETTINGS},{title:"Marks Publication Report",description:"Report for marks publication",icon:b.e,keywords:"report raporo marks list exam application publication position pass failed",url:"/report-marks",access:g.a.SYSTEM_SETTINGS},{title:"Claim Report",description:"Report for all claims",icon:b.e,keywords:"report claim claiming exam pass failed raporo amanota document validation",url:"/report-claim",access:g.a.SYSTEM_SETTINGS},{title:"Claim Dashboard",description:"Dashboard for all Waiting List",icon:k.b,keywords:"dashboard claim claiming exam application performance application failed abatsinze abatsinzwe raporo document validation",url:"/dashboard-claim",access:g.a.SYSTEM_SETTINGS},{title:"Waiting List Report",description:"Report for all waiting list",icon:b.e,keywords:"report waiting list placement exam pass failed raporo amanota",url:"/report-waitinglist",access:g.a.SYSTEM_SETTINGS},{title:"Waiting List Dashboard",description:"Dashboard for all Waiting List",icon:k.b,keywords:"dashboard claim claiming exam application performance application failed abatsinze abatsinzwe raporo",url:"/dashboard-waitinglist",access:g.a.SYSTEM_SETTINGS},{title:"Room Report",description:"Report for all room occupation",icon:b.e,keywords:"report raporo room list exam application occupation available ibyumba center district",url:"/report-room",access:g.a.SYSTEM_SETTINGS},{title:"Room Dashboard",description:"Dashboard for all Room occupation",icon:k.b,keywords:"dashboard  room list exam application occupation available ibyumba center district raporo",url:"/dashboard-room",access:g.a.SYSTEM_SETTINGS},{title:"Placement Report",description:"Report for applicant placement",icon:b.e,keywords:"report raporo placement list waiting list application position placed confirmed not",url:"/report-placement",access:g.a.SYSTEM_SETTINGS},{title:"Document Validation Report",description:"Report for applicant document validation in the current session",icon:b.e,keywords:"report raporo application document validation approved waiting rejected",url:"/report-document",access:g.a.SYSTEM_SETTINGS}]}],P=function(e){Object(r.a)(i,e);var t=Object(n.a)(i);function i(e){var s;return Object(o.a)(this,i),(s=t.call(this,e)).state={loading:!1,data_list:[],data:[],searchText:""},s}return Object(c.a)(i,[{key:"componentDidMount",value:function(){var e,t=[],i=[],o=Object(a.a)(A);try{for(o.s();!(e=o.n()).done;){var c,r=e.value,n=[],l=Object(a.a)(r.items);try{for(l.s();!(c=l.n()).done;){var p=c.value;Object(x.g)(this.props.auth,p.access).view&&(t.push(Object(s.a)(Object(s.a)({},p),{},{category:r.title})),n.push(Object(s.a)(Object(s.a)({},p),{},{category:r.title})))}}catch(d){l.e(d)}finally{l.f()}i.push({description:r.description,icon:r.icon,title:r.title,items:n}),n=[]}}catch(d){o.e(d)}finally{o.f()}this.setState({data:i,data_list:t})}},{key:"render",value:function(){var e,t=this,i=Object(y.a)(this.state.data_list,this.state.searchText,{title:!0,description:!0,keywords:!0,url:!0,category:!0});return void 0!==(null===(e=this.props.application.apply)||void 0===e?void 0:e.user_id)&&"waiting"===this.props.application.apply.user_id&&null!==this.props.application.apply.selectedPosition&&Object(x.g)(this.props.auth,g.a.MY_APPLICATION).create?Object(j.jsx)(f.a,{to:"/apply"}):Object(j.jsxs)("div",{className:"-ml-4",children:[Object(j.jsxs)("div",{className:"p-3 bg-hero text-blue-100 mx-2 mt-2 rounded-lg",children:[Object(j.jsx)("h2",{className:"text-3xl font-extrabold text-center",children:"System Apps"}),Object(j.jsx)("h6",{className:"text-center",children:"List of system features/menus"}),Object(j.jsxs)("div",{className:"m-1 max-w-lg mx-auto rounded-md shadow-md border border-blue-100 bg-transparent p-1 pl-2 flex ",children:[Object(j.jsx)("label",{htmlFor:"search-text",className:"inline-block text-2xl",children:Object(j.jsx)(d.Nb,{className:"inline-block text-white"})}),Object(j.jsx)("input",{type:"search",className:"outline-none bg-transparent flex-1 pl-1 text-white",placeholder:"Application, reports, candidates...",id:"search-text",onChange:function(e){return t.setState({searchText:e.target.value})}})]})]}),Object(j.jsx)("div",{className:"mt-5 mx-3 animate__animated animate__fadeIn",children:this.state.searchText.length>=3?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"p-2 bg-gray-500 text-white mt-4 rounded flex items-center",children:[Object(j.jsx)("h2",{children:i.length}),Object(j.jsx)("h2",{className:"flex-1 pl-1",children:"Results"})]})}),i.length<=0?Object(j.jsxs)("div",{className:"p-6 text-center mt-3 animate__animated animate__fadeIn",children:[Object(j.jsx)("h1",{className:"text-3xl text-gray-500 font-bold",children:"No results found"}),Object(j.jsx)("h3",{className:"text-gray-500",children:"Try using other words"})]}):Object(j.jsx)("div",{className:"grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-2 ",children:i.map((function(e,t){return Object(j.jsx)(O,{link:e,show_category:!0},t)}))})]}):this.state.data.length<=0?Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"p-2 bg-gray-500 text-white mt-4 rounded flex items-center",children:[Object(j.jsx)("h2",{children:"0"}),Object(j.jsx)("h2",{className:"flex-1 pl-1",children:"Results"})]})}):this.state.data.map((function(e,t){var i=e.icon;return Object(j.jsxs)(l.Fragment,{children:[e.items.length>0&&Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"p-2 bg-gray-500 text-white mt-4 rounded flex items-center",children:[Object(j.jsx)(i,{className:"pr-3 text-xl "})," ",Object(j.jsx)("h2",{className:"flex-1 pl-1",children:e.title})]}),Object(j.jsx)("div",{className:"grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-2 ",children:e.items.map((function(e,t){return Object(j.jsx)(O,{link:e,show_category:!1},t)}))})]})," "]},t)}))})]})}}]),i}(p.a.Component),I=Object(h.b)((function(e){return{auth:e.auth,application:e.application}}),{})(P)}}]);
//# sourceMappingURL=51.5e87fc48.chunk.js.map