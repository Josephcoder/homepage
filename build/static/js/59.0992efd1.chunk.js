(this["webpackJsonpreact-redux-typescript-advance"]=this["webpackJsonpreact-redux-typescript-advance"]||[]).push([[59],{203:function(e,t,a){"use strict";a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return p})),a.d(t,"a",(function(){return x})),a.d(t,"g",(function(){return m})),a.d(t,"b",(function(){return n})),a.d(t,"h",(function(){return b})),a.d(t,"c",(function(){return h})),a.d(t,"f",(function(){return g}));var n,s=a(11),i=a(32),o=a(37),r=a(69),c=a.n(r),l=a(31),d=c()().tz(l.f),u=function(e,t){var a=null;if(null!==e){var n=e.find((function(e){return e.id===t}));if(void 0!==n){var s=o.c.find((function(e){return n&&e.key===n.element}));void 0!==s&&(a=s.key)}}return a},p=function(e,t){if(null!==t){var a,n=0,s=Object(i.a)(e);try{var o=function(){var e=a.value,s=t.find((function(t){return t.course===e.course_id}));void 0!==s&&(n+=s.total_marks)};for(s.s();!(a=s.n()).done;)o()}catch(r){s.e(r)}finally{s.f()}return n.toFixed(2)}return"Wait..."},x=function(e,t){var a=!1;if(null!==t){var n,s=Object(i.a)(e);try{var o=function(){var e=n.value;void 0!==t.find((function(t){return t.course===e.course_id}))&&(a=!0)};for(s.s();!(n=s.n()).done;)o()}catch(r){s.e(r)}finally{s.f()}}return a},m=function(e){var t=[];if(void 0===e||""===e||void 0===e.length||0===e.length)return{status:!1,msg:"Please type a formula"};if(e.length<3)return{status:!1,msg:"The formula in not valid, it is not complete!"};var a,n=Object(i.a)(e);try{for(n.s();!(a=n.n()).done;){var o=a.value;t=[].concat(Object(s.a)(t),[o])}}catch(l){n.e(l)}finally{n.f()}if('"'!==t[0])return{status:!1,msg:'Formula should start with (") character'};if(t.filter((function(e){return'"'===e})).length<2)return{status:!1,msg:'Formula is missing closing (") character'};if(t.filter((function(e){return'"'===e})).length>2)return{status:!1,msg:'Formula is invalid, because it has many (") characters ('.concat(t.filter((function(e){return'"'===e})).length,")")};if('"'!==t[t.length-1]&&2===t.filter((function(e){return'"'===e})).length){for(var r="",c=0;c<t.length;c++)'"'===t[c]&&0!==c&&(r=t[c+1]);if(";"!==r)return{status:!1,msg:"Formula is missing separation character (;) between formula and error"};if(";"===t[t.length-1])return{status:!1,msg:"Formula is missing error after (;) character"}}return{status:!0,msg:"Formula is valid"}};function f(e){var t=e.split("T"),a=t[0].split("-"),n=t[1].split(":");return new Date(parseInt(a[2]),parseInt(a[1])-1,parseInt(a[0]),parseInt(n[0]),parseInt(n[1]),parseInt(n[2]))}!function(e){e.Waiting="Waiting",e.Online="Online",e.Expired="Expired"}(n||(n={}));var b=function(e,t,a){var s=n.Expired,i=new Date(d.toString()),o=new Date(e),r=f(o.getDate()+"-"+(o.getMonth()+1)+"-"+o.getFullYear()+"T"+t+":0"),c=f(o.getDate()+"-"+(o.getMonth()+1)+"-"+o.getFullYear()+"T"+a+":0");return(o.getDate()>i.getDate()||o.getMonth()>i.getMonth()||o.getFullYear()>i.getFullYear())&&(s=n.Waiting),(o.getDate()<i.getDate()||o.getMonth()<i.getMonth()||o.getFullYear()<i.getFullYear())&&(s=n.Expired),o.getDate()===i.getDate()&&o.getMonth()===i.getMonth()&&o.getFullYear()===i.getFullYear()&&(s=r.getTime()>i.getTime()?n.Waiting:r.getTime()<=i.getTime()&&c.getTime()>=i.getTime()?n.Online:n.Expired),s},h=function(e,t,a,n,s,o,r,c,l){if(null!==e&&null!==t){n(e.session_plan_id,s,o);var d,u=Object(i.a)(t.courses);try{var p=function(){var n=d.value;if(void 0===a.user_exams_temp.find((function(e){return e.course===n.course_id}))){var s=null===r||void 0===r?void 0:r.find((function(e){return e.course_id===n.course_id}));void 0!==s&&c(e.session_plan_id,n.course_id,s.district_id,s.center_id,s.room_id,t.position_id,l)}};for(u.s();!(d=u.n()).done;)p()}catch(x){u.e(x)}finally{u.f()}}},g=[{rule:"right_click_enabled",status:!1,caption:"Enable right click"},{rule:"copy_enabled",status:!1,caption:"Enable copy"},{rule:"paste_enabled",status:!1,caption:"Enable paste"},{rule:"stop_candidate_when_comeback",status:!1,caption:"Enable Candidate when coming back"},{rule:"allow_to_leave_browser",status:!1,caption:"Enable to leave browser"}]},828:function(e,t,a){"use strict";a.r(t),a.d(t,"_CandidateExams",(function(){return z})),a.d(t,"CandidateExams",(function(){return W}));var n=a(11),s=a(32),i=a(5),o=a.n(i),r=a(2),c=a(7),l=a(21),d=a(20),u=a(23),p=a(22),x=a(14),m=a(4),f=a(15),b=a(85),h=a(92),g=a(8),j=a.n(g),v=a(9),_=a(12),O=a(13),w=a(16),y=a(69),E=a.n(y),N=a(31),M=a(25),D=a(3),A=a(68),k=a(27),L=a(36),C=a(96),S=a(203),P=(a(19),a(26)),F=a(55),I=a(10),Y=a(53),T=a(1),U=function(e){var t=Object(m.useState)(!0),a=Object(x.a)(t,2),n=a[0],s=a[1];return!1===n?Object(T.jsx)("div",{}):Object(T.jsxs)("div",{className:"absolute right-2 left-2 md:right-1/4 md:left-1/4 lg:left-1/2 lg:right-auto bg-yellow-50 shadow-xl rounded py-1 px-1 flex flex-row justify-between items-center gap-2 text-yellow-800 -mt-5 lg:-mt-8",children:[Object(T.jsxs)("div",{className:"flex flex-row gap-2 items-center justify-between w-full pl-1",children:[Object(T.jsx)("span",{className:"font-bold",children:"You are advised to change location"}),Object(T.jsx)("div",{onClick:e.changeLocation,className:"px-2 py-1 rounded bg-blue-100 text-blue-600 w-max cursor-pointer",children:"Change"})]}),Object(T.jsx)("div",{onClick:function(){return s(!1)},className:"bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center p-1 h-8 w-8 cursor-pointer",children:Object(T.jsx)(I.y,{className:"text-4xl"})})]})},z=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).setLoading=function(e){i.setState({loading:e})},i.setloadingExamsDone=function(e){i.setState({loadingExamsDone:e})},i.loadCandidateExams=function(){var e=Object(c.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setLoading(!0),Object(O.b)(),e.prev=2,e.next=5,j.a.get("".concat(v.a.QBank,"/exam/user/").concat(t,"/").concat(a));case 5:n=e.sent,i.setState({candidateExams:n.data}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("My exams error: ",Object(r.a)({},e.t0)),alert(Object(_.a)(e.t0));case 13:i.setLoading(!1);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,a){return e.apply(this,arguments)}}(),i.loadUserProfileDetails=function(){i.setState({loading:!0}),i.props.FC_GetProfileDetails(i.props.auth.user.user_id,(function(e,t){i.setState({loading:!1})})),i.setState({loading:!1})},i.InitializationFn=function(e){0===i.props.candidateExam.user_exams_done.length&&i.props.loadExamsDone(e.application_session.session_plan_id,i.props.auth.user.user_id,i.setloadingExamsDone);var t,a=Object(s.a)(e.position.courses);try{var n=function(){var a=t.value;if(void 0===i.props.candidateExam.user_exams_temp.find((function(e){return e.course===a.course_id}))){var n=e.exams.find((function(e){return e.course_id===a.course_id}));void 0!==n&&i.props.InitializeExamDetails(e.application_session.session_plan_id,a.course_id,n.district_id,n.center_id,n.room_id,e.position.position_id,i.setLoading)}};for(a.s();!(t=a.n()).done;)n()}catch(o){a.e(o)}finally{a.f()}},i.loadUserApplications=Object(c.a)(o.a.mark((function e(){var t,a,n,c,l,d,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setLoading(!0),e.prev=1,e.next=4,j.a.get("".concat(v.a.APPLICATION,"/application/").concat(i.props.auth.user.user_id));case 4:if(200===(t=e.sent).status){i.setState({candidateApplications:t.data}),a=Object(s.a)(t.data);try{for(a.s();!(n=a.n()).done;)c=n.value,i.InitializationFn(c)}catch(o){a.e(o)}finally{a.f()}if(null===i.props.candidateApplications.candidate_applications||0===i.props.candidateApplications.candidate_applications.length){l=Object(s.a)(t.data);try{for(l.s();!(d=l.n()).done;)u=d.value,i.props.AddUserApplication(u)}catch(o){l.e(o)}finally{l.f()}}}e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Appl ex Err: ",Object(r.a)({},e.t0));case 11:i.setLoading(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),i.findLocation=function(e,t){if(null!==i.state.candidateApplications){var a=i.state.candidateApplications.find((function(a){return a.position.position_id===e&&a.exams.filter((function(e){return e.course_id===t}))}));if(void 0!==a){var n=a.exams.find((function(e){return e.course_id===t}));if(void 0!==n)return n}}return null},i.updateLocation=function(){var e=Object(c.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.setState({loading:!0}),e.t0=o.a.keys(a);case 2:if((e.t1=e.t0()).done){e.next=16;break}return n=e.t1.value,e.prev=4,e.next=7,j.a.post("".concat(v.a.APPLICATION,"/application/updatemissed"),{application_id:t,exams:a[n]});case 7:200===e.sent.status&&(i.setState({selectedCourse:null,centersModal:!1,maxExamModal:!1,selectedPosition:"",successMessage:"Location updated successfully!"}),i.loadUserApplications()),e.next=14;break;case 11:e.prev=11,e.t2=e.catch(4),console.log("Update loc err: ",Object(r.a)({},e.t2));case 14:e.next=2;break;case 16:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t,a){return e.apply(this,arguments)}}(),i.updateLocationFunction=function(e){if(console.log("App: ",i.state.candidateApplications),null!==i.state.candidateApplications){var t=i.state.candidateApplications.find((function(e){return e.position.position_id===i.state.selectedPosition}));void 0!==t?i.updateLocation(t.application_id,e):alert("Invalid application")}else alert("Missing application")},i.addLocation=function(e,t,a,n,s){return i.updateLocationFunction([{course_id:e,proctoring_type:"Center",center_id:n.center_id,district_id:n.district_id}])},i.componentDidMount=function(){i.props.loadApplicationPeriods(i.setLoading),""!==i.props.auth.user.sex&&0!==i.props.auth.user.sex.length||i.loadUserProfileDetails(),i.loadUserApplications(),null!==i.props.auth.application_session&&i.loadCandidateExams(i.props.auth.user.user_id,i.props.auth.application_session.session_plan_id),null!==i.props.auth.application_session&&i.props.loadExamsDone(i.props.auth.application_session.session_plan_id,i.props.auth.user.user_id,i.setloadingExamsDone)},i.removeDuplicatesExams=function(e){var t=[];if(null!==i.state.candidateApplications){var a,o=Object(s.a)(e);try{var r=function(){var e=a.value;void 0!==i.state.candidateApplications.find((function(t){return t.position.position_id===e.position}))&&void 0===t.find((function(t){return t._id===e._id}))&&(t=[].concat(Object(n.a)(t),[e]))};for(o.s();!(a=o.n()).done;)r()}catch(c){o.e(c)}finally{o.f()}}return t},i.removeDuplicatesNotPreparedExams=function(e){var t=[];if(null!==i.state.candidateApplications){var a,o=Object(s.a)(e);try{var r=function(){var e=a.value;void 0!==i.state.candidateApplications.find((function(t){return t.position.position_id===e.position}))&&void 0===t.find((function(t){return t.course===e.course}))&&(t=[].concat(Object(n.a)(t),[e]))};for(o.s();!(a=o.n()).done;)r()}catch(c){o.e(c)}finally{o.f()}}return t},i.setTimeOut=function(e){var t=i.state.activeExams;i.setState({activeExams:[].concat(Object(n.a)(t),[e])})},i.selectApplication=function(e,t,a){if(null!==e){var n=e.find((function(e){return e.position.position_id===t}));if(void 0!==n&&void 0!==n.position.courses.find((function(e){return e.course_id===a})))return n}return null},i.setMaxExamModal=function(e){i.setState({maxExamModal:e})},i.changeLocation=function(e){i.setState({selectedCourse:e,centersModal:!0}),i.setMaxExamModal(!0)},i.closeModal=function(){i.setState({centersModal:!1}),i.setMaxExamModal(!1)},i.state={loading:!1,loadingExamsDone:!1,candidateExams:null,activeExams:[],candidateApplications:null,selectedCourse:null,centersModal:!1,maxExamModal:!1,selectedPosition:"",successMessage:""},i}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=E()().tz(N.f);return Object(D.g)(this.props.auth,F.a.MY_APPLICATION).view?null!==this.props.candidateExam.selected_exam_id?Object(T.jsx)(M.a,{to:"/do-exam"}):Object(T.jsx)(m.Fragment,{children:null===this.state.selectedCourse?Object(T.jsxs)("div",{className:"mt-2 -ml-2 mr-3 pb-5",children:[Object(T.jsx)("div",{className:"rounded mt-2",children:Object(T.jsxs)("div",{className:"flex flex-row items-center gap-3",children:[Object(T.jsx)(f.b,{to:"/apps-page",title:"Back to menus",className:"bg-white group hover:bg-blue-50 h-10 w-10 flex items-center justify-center rounded-full cursor-pointer",children:Object(T.jsx)(b.a,{className:"text-3xl text-blue-600 group-hover:text-blue-800"})}),Object(T.jsxs)("div",{className:"flex flex-col",children:[Object(T.jsx)("span",{className:"font-extrabold text-3xl",children:"My exams"}),Object(T.jsx)("span",{className:"text-gray-600 text-sm",children:"List of exams that are assigned to me"})]})]})}),""!==this.state.successMessage&&Object(T.jsx)("div",{title:"Click to close the message",onClick:function(){return e.setState({successMessage:""})},className:"animate__animated animate__zoomIn px-3 py-2 bg-green-500 text-white my-2 rounded cursor-pointer",children:this.state.successMessage}),!0===this.state.loading||!0===this.state.loadingExamsDone||null===this.state.candidateExams||null==this.state.candidateApplications?Object(T.jsx)("div",{className:"px-4 pt-5 pb-1 bg-white mt-2 rounded",children:Object(T.jsx)(k.a,{})}):0===this.removeDuplicatesExams(this.state.candidateExams.preparedExam).length?Object(T.jsx)("div",{className:"bg-gray-50 rounded px-4 py-5 text-center font-bold mt-2 text-2xl text-gray-400",children:"No exams found"}):this.removeDuplicatesExams(this.state.candidateExams.preparedExam).map((function(a,n){var s,i,o,r,c;return Object(T.jsx)("div",{className:"my-2 rounded bg-white p-2 group",children:Object(T.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[Object(T.jsxs)("div",{className:"flex flex-col md:flex-row items-center gap-2 w-full",children:[Object(T.jsx)("div",{children:Object(T.jsx)(h.d,{className:"hidden md:block text-4xl text-gray-600 group-hover:text-blue-600"})}),Object(T.jsxs)("div",{className:"flex flex-col w-full",children:[Object(T.jsx)("span",{className:"text-base text-gray-800 font-extrabold group-hover:text-blue-600",children:a.course_name}),Object(T.jsxs)("div",{className:"flex flex-row items-center justify-start w-full gap-3 -mt-1",children:[Object(T.jsxs)("div",{className:"text-sm text-gray-500 group-hover:text-blue-600",children:["Date: ",Object(L.a)(a.exam_date,"DD/MM/YYYY")]}),Object(T.jsxs)("div",{className:"hidden md:block text-sm bg-gray-100 underline text-gray-500  font-bold rounded-full px-2",children:["Start time: ",a.start_time]}),Object(T.jsxs)("div",{className:"hidden md:block text-sm bg-blue-100 text-blue-900  font-bold rounded-full px-2",children:["Status: ",a.user_status]})]}),null!==e.findLocation(a.position,a.course)&&Object(T.jsxs)("div",{className:"flex flex-row items-center gap-2 mt-2",children:[Object(T.jsxs)("div",{children:["Exam center:"," ",Object(T.jsx)("span",{className:"text-sm bg-gray-100 text-blue-900 group-hover:text-blue-600 font-bold rounded-full px-2 w-max",children:null===(s=e.findLocation(a.position,a.course))||void 0===s?void 0:s.center_name})]}),Object(T.jsxs)("div",{className:"w-max flex flex-col md:flex-row",children:["Room number:"," ",0===(null===(i=e.findLocation(a.position,a.course))||void 0===i?void 0:i.room_number)?Object(T.jsx)("span",{className:"text-sm bg-yellow-100 text-yellow-900 group-hover:text-yellow-800 font-bold rounded-full px-2 w-max flex items-center justify-center",children:"Waiting room"}):Object(T.jsx)("span",{className:"text-sm bg-gray-100 text-blue-900 group-hover:text-blue-600 font-bold rounded-full px-2 w-max",children:null===(o=e.findLocation(a.position,a.course))||void 0===o?void 0:o.room_number}),0===(null===(r=e.findLocation(a.position,a.course))||void 0===r?void 0:r.room_number)&&Object(S.h)(a.exam_date,a.start_time,a.end_time)!==S.b.Expired&&Object(T.jsx)(U,{changeLocation:function(){e.setState({selectedCourse:{course_name:a.course_name,course_code:a.course_code,description:a.course_name,school_levels:[],course_id:a.course},selectedPosition:a.position,centersModal:!0}),e.setMaxExamModal(!0)}})]})]})]})]}),Object(T.jsx)("div",{className:"lg:w-full flex flex-row items-center justify-end",children:void 0!==e.state.activeExams.find((function(e){return e===a._id}))||a.user_status===A.c.Editing||a.user_status===A.c.Paused?Object(S.h)(a.exam_date,a.start_time,a.end_time)!==S.b.Expired?(null===(c=e.selectApplication(e.state.candidateApplications,a.position,a.course))||void 0===c?void 0:c.application_status)!==P.a.Shortlisted?Object(T.jsx)("div",{className:"text-yellow-800 font-extrabold text-base bg-yellow-100 rounded px-3 py-1 cursor-not-allowed",children:"Not shortlisted"}):Object(T.jsx)("div",{onClick:function(){var t=e.selectApplication(e.state.candidateApplications,a.position,a.course);null!==t?t.application_status===P.a.Shortlisted?(e.props.setSelectedPosition(t.position),e.props.setSelectedCourse(t.position.courses.find((function(e){return e.course_id===a.course}))),e.props.setSelectedCandidateExam(a._id)):alert("Corresponding application is not shortlisted!"):alert("Invalid exam!")},className:"".concat(a.user_status===A.c.Editing||a.user_status===A.c.Paused?"bg-green-600 group-hover:bg-green-800":"bg-blue-600 group-hover:bg-blue-800"," btn  text-white cursor-pointer w-max"),children:a.user_status===A.c.Editing?"Back to Exam":a.user_status===A.c.Paused?"Paused, back to exam":"Start Exam"}):a.user_status===A.c.Editing||a.user_status===A.c.Done||a.user_status===A.c.Paused||a.user_status===A.c.Removed?Object(T.jsxs)("div",{className:"text-blue-700 flex flex-col items-end justify-center w-max",children:[Object(T.jsx)("span",{children:"Marks"}),Object(T.jsxs)("span",{className:"text-2xl font-extrabold -mt-2",children:[Math.round(a.user_marks),"%"]})]}):Object(T.jsx)("div",{className:"bg-yellow-100 text-yellow-700 font-extrabold text-base px-3 py-1 rounded-md w-max",children:"Expired"}):!1===a.found?Object(T.jsx)("div",{title:"Please wait for the exam time",className:"text-lg lg:text-xl font-extrabold bg-green-100 text-green-700 px-3 py-1 rounded cursor-not-allowed w-max",children:Object(T.jsx)(C.a,{start_time:new Date(t.toString()).toString(),duration_min:Object(L.i)(new Date(t.toString()),new Date(Object(L.a)(a.exam_date,"MM/DD/YYYY")+" "+a.start_time)),timeout:function(){return e.setTimeOut(a._id)},returnString:!0,labels:!0,days:!0})}):Object(T.jsxs)("div",{className:"text-blue-700 flex flex-col items-end justify-center w-max",children:[Object(T.jsx)("span",{children:"Marks"}),Object(T.jsxs)("span",{className:"text-2xl font-extrabold -mt-2",children:[Math.round(a.user_marks),"%"]})]})})]})},n+1)})),null!==this.state.candidateExams&&!0!==this.state.loading&&this.removeDuplicatesNotPreparedExams(this.state.candidateExams.notPreparedExam).length>0&&this.removeDuplicatesNotPreparedExams(this.state.candidateExams.notPreparedExam).map((function(t,a){var n,s,i,o;return Object(T.jsx)("div",{className:"my-2 rounded bg-white p-2 py-3 group",children:Object(T.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[Object(T.jsxs)("div",{className:"flex flex-col md:flex-row items-center gap-2 w-full",children:[Object(T.jsx)("div",{className:"",children:Object(T.jsx)(h.d,{className:"hidden md:block text-4xl text-gray-300 group-hover:text-blue-600"})}),Object(T.jsxs)("div",{className:"flex flex-col",children:[Object(T.jsx)("span",{className:"text-base text-gray-600 font-bold group-hover:text-blue-600",children:t.course_name}),Object(T.jsx)("div",{className:"flex flex-row items-center gap-3 -mt-1",children:null!==e.findLocation(t.position,t.course)&&Object(T.jsxs)("div",{className:"flex flex-row items-center gap-2 mt-2",children:[Object(T.jsxs)("div",{className:"flex flex-col md:flex-row md:items-center",children:["Exam center:"," ",Object(T.jsx)("span",{className:"text-sm bg-gray-100 text-blue-900 group-hover:text-blue-600 font-bold rounded-full px-2 w-max",children:null===(n=e.findLocation(t.position,t.course))||void 0===n?void 0:n.center_name})]}),Object(T.jsxs)("div",{className:"w-max flex flex-col md:flex-row md:items-center",children:["Room number:"," ",0===(null===(s=e.findLocation(t.position,t.course))||void 0===s?void 0:s.room_number)?Object(T.jsx)("span",{className:"text-sm bg-yellow-100 text-yellow-900 group-hover:text-yellow-800 font-bold rounded-full px-2 w-max flex items-center justify-center",children:"Waiting room"}):Object(T.jsx)("span",{className:"text-sm bg-gray-100 text-blue-900 group-hover:text-blue-600 font-bold rounded-full px-2 w-max",children:null===(i=e.findLocation(t.position,t.course))||void 0===i?void 0:i.room_number}),0===(null===(o=e.findLocation(t.position,t.course))||void 0===o?void 0:o.room_number)&&Object(T.jsx)(U,{changeLocation:function(){e.setState({selectedCourse:{course_name:t.course_name,course_code:t.course_code,description:t.course_name,school_levels:[],course_id:t.course},selectedPosition:t.position,centersModal:!0}),e.setMaxExamModal(!0)}})]})]})})]})]}),Object(T.jsx)("div",{className:"bg-gray-100 text-gray-600 font-extrabold text-base px-3 py-1 rounded-md",children:"Not prepared"})]})},a+1)}))]}):!0===this.state.loading?Object(T.jsx)("div",{className:"px-4 pt-5 pb-1 bg-white mt-2 rounded",children:Object(T.jsx)(k.a,{})}):Object(T.jsxs)("div",{className:"animate__animated animate__fadeInUp animate__faster mt-2 mr-1 -ml-3 rounded-t-md bg-white shadow-md pb-5",children:[Object(T.jsx)("div",{className:"flex flex-row gap-4 items-center justify-between bg-blue-100 py-2 px-2 mb-2",children:Object(T.jsx)("div",{className:"flex flex-col w-full",children:Object(T.jsxs)("div",{className:"flex flex-row gap-2 items-center justify-between w-full pl-2",children:[Object(T.jsx)("span",{className:"font-bold text-xl text-gray-800",children:"Change exam location"}),Object(T.jsx)("div",{className:"bg-white hover:text-yellow-700 hover:bg-white rounded-full p-1 h-10 w-10 border-2 border-white hover:border-yellow-600 flex items-center justify-center",children:Object(T.jsx)(I.y,{className:"cursor-pointer font-extrabold text-3xl",onClick:function(){e.setState({centersModal:!1,selectedCourse:null})}})})]})})}),Object(T.jsx)(Y.b,{positionCourses:this.state.selectedCourse,addLocation:this.addLocation,closeModal:this.closeModal})]})}):Object(T.jsx)(M.a,{to:"/"})}}]),a}(m.Component),W=Object(w.b)((function(e){return{auth:e.auth,candidateExam:e.candidateExam,candidateApplications:e.candidateApplications}}),{FC_GetProfileDetails:D.L,LoadCandidateApplications:D.qb,setSelectedCandidateExam:D.rc,setSelectedCourse:D.sc,setSelectedPosition:D.yc,InitializeExamDetails:D.pb,loadExamsDone:D.cc,AddUserApplication:D.b,loadApplicationPeriods:D.Ub})(z)}}]);
//# sourceMappingURL=59.0992efd1.chunk.js.map