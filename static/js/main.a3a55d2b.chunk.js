(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,t,a){e.exports=a(304)},143:function(e,t,a){},286:function(e,t,a){},302:function(e,t,a){},304:function(e,t,a){"use strict";a.r(t);var n,i=a(0),r=a.n(i),o=a(24),l=a.n(o),s=(a(143),a(30)),c=a(28),u=a(137),d=a.n(u),m=a(23),h=a(18),p=a(19),b=a(21),g=a(20),f=a(22),v=a(35),E=a(118),y=a(5),w=a.n(y),O=a(130),k=a.n(O),j=a(82),S=a.n(j),C=a(133),B=a.n(C),A=a(40),L=a.n(A),N=a(131),x=a.n(N),U=a(132),D=a.n(U),I=a(134),R=a.n(I),F=a(135),W=a.n(F),G=a(16),T=a.n(G),M=a(119),P=a.n(M),z=a(120),V=a.n(z),_=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={open:!1,message:""},a.openSnackBar=function(e){a.setState({open:!0,message:e})},a.handleClose=function(e,t){"clickaway"!==t&&a.setState({open:!1})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){n=this.openSnackBar}},{key:"render",value:function(){var e=this.state,t=e.open,a=e.message,n=this.props.classes,i=r.a.createElement("span",{id:"message-id"},a);return r.a.createElement(P.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:t,autoHideDuration:6e3,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:i,action:[r.a.createElement(T.a,{key:"close",color:"secondary",size:"small",onClick:this.handleClose},"CLOSE"),r.a.createElement(L.a,{key:"close","aria-label":"Close",color:"inherit",className:n.close,onClick:this.handleClose},r.a.createElement(V.a,null))]})}}]),t}(r.a.Component);function H(e){n(e)}var Y=Object(m.withStyles)(function(e){return{close:{padding:e.spacing.unit/2}}})(_),Q={submissions:"submissions",members:"members",advertisers:"advertisers",rejects:"rejects",roles:"roles"},Z=240,J=[{to:"/",text:"Home"},{to:"/terms",text:"Terms"},{to:"/subscribe",text:"Subscribe"},{to:"/members",text:"Members"},{to:"/advertisers",text:"Advertisers"},{to:"/submissions",text:"Submissions"}],$="You need to login to access this section",K="You do not have enough rights to access this section",q='If you are looking for a community membership, you should apply first. Check the "Subscribe" section!',X=a(121),ee=a.n(X),te=a(122),ae=a.n(te),ne=a(123),ie=a.n(ne),re=a(6),oe=a.n(re),le=a(53),se=a.n(le),ce=a(34),ue={UserLoggedIn:"USER_LOGGED_IN",UserLoggedOut:"USER_LOGGED_OUT"};var de=function(e){function t(e){var a;Object(h.a)(this,t),(a=Object(b.a)(this,Object(g.a)(t).call(this,e))).authSuccess=function(e){var t=Object(ce.a)(a).props,n=e.user,i=e.credential.accessToken;t.onLogin({user:n,token:i})},a.authError=function(e){},a.ghSignIn=function(){var e=Object(ce.a)(a).auth,t=new window.firebase.auth.GithubAuthProvider;t.addScope("read:org"),e.signInWithPopup(t).then(a.authSuccess).catch(a.authError)},a.signOut=function(){a.auth.signOut()};var n=window.firebase.auth;return a.auth=n(),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.auth,t=this.props;e.onAuthStateChanged(function(e){e?t.onLogin({user:e}):t.onLogout()})}},{key:"render",value:function(){var e=this.props.user.displayName;return r.a.createElement(r.a.Fragment,null,e?r.a.createElement(T.a,{onClick:this.signOut},"SignOut"):r.a.createElement(T.a,{onClick:this.ghSignIn},"Github SignIn"))}}]),t}(r.a.Component);var me=Object(c.b)(function(e){return{user:e.user}},function(e){return{onLogin:function(t){var a;e((a=t,{type:ue.UserLoggedIn,data:a}))},onLogout:function(){e({type:ue.UserLoggedOut})}}})(de),he=Object(m.withStyles)(function(e){return{grow:{flexGrow:1},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(Z,"px)"),marginLeft:Z,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:0,marginRight:0},hide:{display:"none"},content:Object(v.a)({paddingLeft:10*e.spacing.unit,paddingRight:10*e.spacing.unit},e.breakpoints.down("sm"),{paddingLeft:3*e.spacing.unit,paddingRight:3*e.spacing.unit}),devconLogo:{backgroundImage:"url('".concat("","/img/devcon.london.png')"),width:"48px",height:"48px",backgroundRepeat:"no-repeat"}}},{withTheme:!0})(function(e){var t=e.classes,a=e.drawerOpen,n=e.handleDrawer;return r.a.createElement(ee.a,{color:"default",className:w()(t.appBar,Object(v.a)({},t.appBarShift,a))},r.a.createElement(ae.a,{disableGutters:!a,className:t.content},r.a.createElement(oe.a,{variant:"h6",className:t.grow},r.a.createElement(L.a,{"aria-label":"Open drawer",onClick:n,className:w()(t.menuButton,a&&t.hide)},r.a.createElement(ie.a,null)),r.a.createElement(se.a,{component:s.b,to:"/"},r.a.createElement("span",{className:t.devconLogo}))),r.a.createElement(me,null)))}),pe=a(41),be=function(){return r.a.createElement("div",null,r.a.createElement(oe.a,{variant:"h2",gutterBottom:!0},"Welcome."),r.a.createElement(oe.a,{variant:"h6",gutterBottom:!0},"Q: What is Devcon.London?"),r.a.createElement(oe.a,{variant:"body1",gutterBottom:!0},"A: Devcon.London is an invitation-only community of developers."),r.a.createElement(oe.a,{variant:"h6",gutterBottom:!0},"Q: How do I get in?"),r.a.createElement(oe.a,{variant:"body1",gutterBottom:!0},"A: You should know someone who is already in and willing to invite you."),r.a.createElement(oe.a,{variant:"h6",gutterBottom:!0},"Q: Why is this community so private?"),r.a.createElement(oe.a,{variant:"body1",gutterBottom:!0},"A: Because we believe that keeping strong relationships between our members is healthy and granting access on an invite-basis is a way of doing so. Also, we can guarantee privacy for our members and avoid unsolicited contacts from people who are not interested in the community."),r.a.createElement(oe.a,{variant:"h6",gutterBottom:!0},"Q: OK, I have an invite, how do I get in now?"),r.a.createElement(oe.a,{variant:"body1",gutterBottom:!0},"A: Login using your Github account, then head to the subscribe page and fill the form. One of the admins will review your submission and let you in."))},ge=function(){return r.a.createElement("div",null,r.a.createElement(oe.a,{variant:"h4",gutterBottom:!0},"Privacy."),r.a.createElement("p",null,"All data is stored on Firebase, and only authenticated users can access it. Only members can see all other members' data."),r.a.createElement("p",null,"Also, we only use cookies for the Google Analytics tracker."),r.a.createElement(oe.a,{variant:"h4",gutterBottom:!0},"Code of conduct."),r.a.createElement("p",null,"Please refer to the guidelines received when you joined the group."))},fe=a(86),ve=a.n(fe),Ee=a(129),ye=a.n(Ee),we=a(85),Oe=a.n(we),ke=a(81),je=a.n(ke),Se=a(80),Ce=a.n(Se),Be=a(29),Ae={validName:function(e){return/[\w]+[ ][\w]+/.exec(e)?void 0:"enter a valid name + surname without special characters"},validCompany:function(e){return e&&e.length>2?void 0:"at least 3 characters for a valid company name"},validRole:function(e){return e&&e.length>2?void 0:"at least 3 characters for a valid role"},validBio:function(e){var t=e?100-e.length:100,a=t>0?"(".concat(t," to go)"):"",n="at least 100 characters for a valid bio ".concat(a);return e&&t<1?void 0:n},validGithub:function(e){return/https:\/\/github\.com\/[A-z0-9_-]+\/?/.exec(e)?void 0:"valid Github url: https://github.com/username"},validTwitter:function(e){return/https:\/\/twitter\.com\/[A-z0-9_]+\/?/.exec(e)?void 0:"valid Twitter url: https://twitter.com/username"},validLinkedIn:function(e){return/https:\/\/www\.linkedin\.com\/in\/[A-z0-9_-]+\/?/.exec(e)?void 0:"valid LinkedIn url: https://www.linkedin.com/in/username"},validEmail:function(e){return/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.exec(e)?void 0:"enter a valid email address"}},Le=a(127),Ne=a(128),xe=a.n(Ne),Ue=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).handleChange=function(e){var t=Object(ce.a)(a).props;t.fieldApi.setValue(e.target.value),t.onChange&&t.onChange(e)},a.handleBlur=function(e){var t=Object(ce.a)(a).props;t.fieldApi.setTouched(!0),t.onBlur&&t.onBlur(e)},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){var a=this.props;return e.fieldState!==a.fieldState||t!==this.state}},{key:"render",value:function(){var e=this.props,t=(e.field,e.fieldState),a=(e.fieldApi,e.onChange,e.onBlur,e.initialValue,e.forwardedRef,e.className,e.setFocus,e.children,e.InputProps,e.validate,Object(Le.a)(e,["field","fieldState","fieldApi","onChange","onBlur","initialValue","forwardedRef","className","setFocus","children","InputProps","validate"])),n=t.value,i=t.error;return r.a.createElement(xe.a,Object.assign({},a,{value:n||0===n?n:"",onChange:this.handleChange,onBlur:this.handleBlur,error:!!i,helperText:i}))}}]),t}(r.a.Component),De=Object(Be.c)(Ue),Ie=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Be.b,{field:"uid",id:"uid",hidden:!0}),r.a.createElement(De,{field:"name",id:"name",label:"Name",fullWidth:!0,validateOnChange:!0,validate:Ae.validName}),r.a.createElement(De,{field:"github",id:"github",label:"Github URL",fullWidth:!0,validateOnChange:!0,validate:Ae.validGithub}),r.a.createElement(De,{field:"twitter",id:"twitter",label:"Twitter URL",fullWidth:!0,validateOnChange:!0,validate:Ae.validTwitter}),r.a.createElement(De,{field:"linkedin",id:"linkedin",label:"LinkedIn URL",fullWidth:!0,validateOnChange:!0,validate:Ae.validLinkedIn}),r.a.createElement(De,{field:"email",id:"email",label:"Email",fullWidth:!0,validateOnChange:!0,validate:Ae.validEmail}),r.a.createElement(De,{field:"role",id:"role",label:"Role",fullWidth:!0,validateOnChange:!0,validate:Ae.validRole}),r.a.createElement(De,{field:"bio",id:"bio",label:"Short Bio",fullWidth:!0,multiline:!0,rows:"4",validateOnChange:!0,validate:Ae.validBio}))},Re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Be.b,{field:"uid",id:"uid",hidden:!0}),r.a.createElement(De,{field:"name",id:"name",label:"Name",fullWidth:!0,validateOnChange:!0,validate:Ae.validName}),r.a.createElement(De,{field:"email",id:"email",label:"Email",fullWidth:!0,validateOnChange:!0,validate:Ae.validEmail}),r.a.createElement(De,{field:"company",id:"company",label:"Company",fullWidth:!0,validateOnChange:!0,validate:Ae.validCompany}),r.a.createElement(De,{field:"role",id:"role",label:"Role",fullWidth:!0,validateOnChange:!0,validate:Ae.validRole}),r.a.createElement(De,{field:"linkedin",id:"linkedin",label:"LinkedIn URL",fullWidth:!0,validateOnChange:!0,validate:Ae.validLinkedIn}))},Fe=(a(286),window.db),We=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={submitted:!1,applicant:Q.members},a.setFormApi=function(e){a.formApi=e},a.submitForm=function(){var e=a.formApi.getState(),t=["referrer","name","role","email","linkedin"].reduce(function(t,a){return t&&e.touched[a]},!0);if(!e.invalid&&!e.pristine&&t){var n=a.props.user,i=a.state.applicant;a.formApi.setValue("uid",n.uid),a.formApi.setValue("date",new Date),a.formApi.setValue("applicant",i),Fe.collection(Q.submissions).doc(n.uid).set(e.values).then(function(){a.setState({submitted:!0})}).catch(function(e){console.log("error writing submission",e)})}},a.setApplicant=function(e){return a.setState({applicant:e.target.value})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=null;if(e.submitted)t=r.a.createElement("p",null,"Thank you!");else{var a={members:r.a.createElement(Ie,null),advertisers:r.a.createElement(Re,null)};t=r.a.createElement(Be.a,{className:"SubscriptionForm",id:"subscription-form",getApi:this.setFormApi,onSubmit:this.submitForm},r.a.createElement(Be.b,{field:"date",id:"date",hidden:!0}),r.a.createElement(Be.b,{field:"applicant",id:"applicant",hidden:!0}),r.a.createElement(je.a,{component:"fieldset"},r.a.createElement(Ce.a,{component:"legend"},"Applicant Type"),r.a.createElement(ye.a,{"aria-label":"Applicant",name:"applicant",value:e.applicant,onChange:this.setApplicant},r.a.createElement(Oe.a,{value:Q.members,control:r.a.createElement(ve.a,null),label:"Member"}),r.a.createElement(Oe.a,{value:Q.advertisers,control:r.a.createElement(ve.a,null),label:"Advertiser"}))),r.a.createElement(De,{field:"referrer",id:"referrer",label:"Introduced by (who told you about this)",fullWidth:!0,validateOnChange:!0,validate:Ae.validName}),a[e.applicant],r.a.createElement(T.a,{onClick:this.submitForm},"Submit"))}return t}}]),t}(r.a.Component),Ge=window.db,Te=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={loading:!0,membership:null,submission:null},a.fetchUserMembership=function(e){return Ge.collection(Q.members).doc(e).get()},a.fetchUserSubmission=function(e){return Ge.collection(Q.submissions).doc(e).get()},a.retrieveData=function(e){a.setState({loading:!0}),a.fetchUserMembership(e).then(function(e){e.exists&&a.setState({loading:!1,membership:e.data()})}).catch(function(t){a.fetchUserSubmission(e).then(function(e){e.exists?a.setState({loading:!1,submission:e.data()}):a.setState({loading:!1})}).catch(function(e){a.setState({loading:!1})})})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.user;null!==e.uid&&this.retrieveData(e.uid)}},{key:"componentDidUpdate",value:function(e){var t=this.props.user;t.uid!==e.user.uid&&null!==t.uid&&this.retrieveData(t.uid)}},{key:"render",value:function(){var e=this.props.user,t=this.state,a=t.membership,n=t.submission,i=t.loading,o=null;return null===e.uid?(H($),o=r.a.createElement(pe.a,{to:"/"})):o=!0===i?r.a.createElement("p",null,"loading..."):null===a?null===n?r.a.createElement(We,{user:e}):r.a.createElement("p",null,"You have a pending submission, good things come to those who wait."):r.a.createElement("p",null,"You are already a Devcon member, do not need to subscribe again"),r.a.createElement("div",null,r.a.createElement(oe.a,{variant:"h4",gutterBottom:!0},"Subscribe."),o)}}]),t}(r.a.Component),Me=Object(c.b)(function(e){return{user:e.user}})(Te),Pe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Events"),r.a.createElement("p",null,"accessible to members only"),r.a.createElement("p",null,"pull stuff from google calendar maybe?"))},ze=a(37),Ve=a.n(ze),_e=a(33),He=a.n(_e),Ye=window.db,Qe=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={members:[],loading:!0,editing:!1,error:null},a.setFormApi=function(e){a.formApi=e},a.submitForm=function(){var e=a.formApi.getState();e.invalid||Ye.collection(Q.members).doc(e.values.uid).get().then(function(t){var n=Object.assign({},t.data(),e.values);Ye.collection(Q.members).doc(n.uid).set(n).then(function(){a.setState({error:null,editing:!1})}).catch(function(e){a.setState({error:"Error storing data",editing:!1})})}).catch(function(e){a.setState({error:"Error fetching your personal data",editing:!1})})},a.getUserForm=function(e){return r.a.createElement(Be.a,{className:"SubscriptionForm",id:"subscription-form",getApi:a.setFormApi,initialValues:e,key:e.uid},r.a.createElement(Ie,null),r.a.createElement(T.a,{onClick:a.submitForm},"Submit"),r.a.createElement(T.a,{onClick:function(){a.setState({editing:!1})}},"Cancel"))},a.getUserCard=function(e,t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{variant:"h5"},"".concat(e.name,", ").concat(e.role)),r.a.createElement(oe.a,{variant:"body1",gutterBottom:!0},"member since ".concat(e.adminDate)),r.a.createElement(oe.a,{variant:"body1",gutterBottom:!0},e.bio),r.a.createElement(oe.a,{variant:"body1"},t?r.a.createElement(T.a,{className:n.linkButton,variant:"contained",color:"primary",onClick:function(){return a.setState({editing:!0})}},"edit"):"",r.a.createElement(T.a,{className:n.linkButton,variant:"contained",href:e.github},"Github"),r.a.createElement(T.a,{className:n.linkButton,variant:"contained",href:e.linkedin},"LinkedIn"),r.a.createElement(T.a,{className:n.linkButton,variant:"contained",href:e.twitter},"Twitter")))},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;null!==this.props.user.uid&&(this.membersUnsubscribe=Ye.collection(Q.members).onSnapshot(function(t){var a=[];t.forEach(function(e){a.push(e.data())}),e.setState({members:a,loading:!1,error:null})},function(t){e.setState({members:[],loading:!1,error:q})}))}},{key:"componentWillUnmount",value:function(){this.membersUnsubscribe&&this.membersUnsubscribe()}},{key:"render",value:function(){var e=this,t=this.props,a=t.user,n=t.classes,i=this.state,o=i.members,l=i.loading,s=i.editing,c=i.error,u=null;return null===a.uid?(H($),u=r.a.createElement(pe.a,{to:"/"})):u=l?r.a.createElement("p",null,"loading..."):null!==c?r.a.createElement("p",null,c):o.length?r.a.createElement("div",{className:n.root},r.a.createElement(Ve.a,{container:!0,spacing:24},o.map(function(t){var i=null;if(!0===s&&t.uid===a.uid)i=e.getUserForm(t);else{var o=t.uid===a.uid;i=e.getUserCard(t,o,n)}return r.a.createElement(Ve.a,{item:!0,xs:12,sm:6,key:t.uid},r.a.createElement(He.a,{className:n.paper},i))}))):r.a.createElement("p",null,"these are not the droids you are looking for!"),r.a.createElement("div",null,r.a.createElement(oe.a,{variant:"h4",gutterBottom:!0},"Members."),u)}}]),t}(r.a.Component),Ze=Object(m.withStyles)(function(e){return{root:{flexGrow:1},linkButton:{marginRight:"5px"},paper:{padding:2*e.spacing.unit}}})(Qe),Je=Object(c.b)(function(e){return{user:e.user}})(Ze),$e=window.db,Ke=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={advertisers:[],error:null},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;null!==this.props.user.uid&&(this.advertisersUnsubscribe=$e.collection(Q.advertisers).onSnapshot(function(t){var a=[];t.forEach(function(e){a.push(e.data())}),e.setState({advertisers:a,error:null})},function(t){e.setState({advertisers:[],error:K})}))}},{key:"componentWillUnmount",value:function(){this.advertisersUnsubscribe&&this.advertisersUnsubscribe()}},{key:"render",value:function(){var e=this.props,t=e.user,a=e.classes,n=this.state,i=n.advertisers,o=n.error,l=null;return null===t.uid?(H($),l=r.a.createElement(pe.a,{to:"/"})):l=i.length?r.a.createElement("div",null,r.a.createElement(Ve.a,{container:!0,spacing:24},i.map(function(e){return r.a.createElement(Ve.a,{item:!0,xs:12,sm:6,key:e.uid},r.a.createElement(He.a,{className:a.paper},r.a.createElement(oe.a,{variant:"h5"},"".concat(e.name,", ").concat(e.role," at ").concat(e.company)),r.a.createElement(oe.a,{variant:"body1"},"email: ".concat(e.email,", joined ").concat(e.adminDate)),r.a.createElement(T.a,{href:e.linkedin},"linkedin")))}))):o?r.a.createElement("p",null,o):r.a.createElement("p",null,"nobody here..."),r.a.createElement("div",null,r.a.createElement(oe.a,{variant:"h4",gutterBottom:!0},"Advertisers."),l)}}]),t}(r.a.Component),qe=Object(m.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit}}})(Ke),Xe=Object(c.b)(function(e){return{user:e.user}})(qe),et=window.db,tt=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={submissions:[],error:null},a.approveSubmission=function(e){a.handleSubmission(e.target.dataset.uid,!0)},a.rejectSubmission=function(e){a.handleSubmission(e.target.dataset.uid,!1)},a.getClickHandler=function(e,t){return function(){return a.handleSubmission(e,t)}},a.handleSubmission=function(e,t){var n=a.props.user;et.collection(Q.submissions).doc(e).get().then(function(i){var r=Object.assign({adminUid:n.uid,adminDate:(new Date).toISOString()},i.data()),o=Q.rejects;t&&(o=Q[r.applicant]),et.collection(o).doc(e).set(r).then(function(){et.collection(Q.submissions).doc(e).delete().then(function(){a.setState({error:null})}).catch(function(e){console.log("error deleting submission",e),a.setState({error:"error deleting submission"})})}).catch(function(e){console.log("error setting submission",o,e),a.setState({error:"error setting submission"})})}).catch(function(t){console.log("error retrieving submission",e,t),a.setState({error:"error retrieving submission"})})},a.getFields=function(e,t){var a=r.a.createElement(oe.a,{variant:"body1",gutterBottom:!0},"introduced by ".concat(e.referrer," on ").concat(e.date));return{members:r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{variant:"h5"},"Community Membership for ".concat(e.name,", ").concat(e.role)),a,r.a.createElement(oe.a,{variant:"body1",gutterBottom:!0},"Bio: ".concat(e.bio)),r.a.createElement(oe.a,{variant:"body1",gutterBottom:!0},r.a.createElement(T.a,{className:t.linkButton,variant:"contained",href:e.github},"Github"),r.a.createElement(T.a,{className:t.linkButton,variant:"contained",href:"mailto:".concat(e.email)},"Email"),r.a.createElement(T.a,{className:t.linkButton,variant:"contained",href:e.linkedin},"LinkedIn"),r.a.createElement(T.a,{className:t.linkButton,variant:"contained",href:e.twitter},"Twitter"))),advertisers:r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{variant:"h5"},"Advertising Membership for ".concat(e.name)),a,r.a.createElement(oe.a,{variant:"body1",gutterBottom:!0},"Role ".concat(e.role,". Company: ").concat(e.company)),r.a.createElement(oe.a,{variant:"body1",gutterBottom:!0},r.a.createElement(T.a,{className:t.linkButton,variant:"contained",href:e.linkedin},"LinkedIn"),r.a.createElement(T.a,{className:t.linkButton,variant:"contained",href:"mailto:".concat(e.email)},"Email")))}[e.applicant]},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;null!==this.props.user.uid&&(this.submissionsUnsubscribe=et.collection(Q.submissions).onSnapshot(function(t){var a=[];t.forEach(function(e){a.push(e.data())}),e.setState({submissions:a,error:null})},function(t){e.setState({submissions:[],error:K})}))}},{key:"componentWillUnmount",value:function(){this.submissionsUnsubscribe&&this.submissionsUnsubscribe()}},{key:"render",value:function(){var e=this,t=this.props,a=t.user,n=t.classes,i=this.state,o=i.submissions,l=i.error,s=null;return null===a.uid?(H($),s=r.a.createElement(pe.a,{to:"/"})):s=o.length?r.a.createElement("div",{className:n.root},r.a.createElement(Ve.a,{container:!0,spacing:24},o.map(function(t){return r.a.createElement(Ve.a,{item:!0,xs:12,sm:6,key:t.uid},r.a.createElement(He.a,{className:n.paper},e.getFields(t,n),[{label:"Accept",approval:!0},{label:"Reject",approval:!1}].map(function(a){return r.a.createElement(T.a,{className:n.linkButton,variant:"contained",color:a.approval?"primary":"secondary",key:a.label,"data-uid":t.uid,onClick:e.getClickHandler(t.uid,a.approval)},a.label)})))}))):l?r.a.createElement("p",null,l):r.a.createElement("p",null,"no pending submissions!"),r.a.createElement("div",null,r.a.createElement(oe.a,{variant:"h4",gutterBottom:!0},"Submissions."),s)}}]),t}(r.a.Component),at=Object(m.withStyles)(function(e){return{root:{flexGrow:1},linkButton:{marginRight:"5px"},paper:{padding:2*e.spacing.unit}}})(tt),nt=Object(c.b)(function(e){return{user:e.user}})(at),it=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(pe.b,{path:"/",exact:!0,component:be}),r.a.createElement(pe.b,{path:"/terms",component:ge}),r.a.createElement(pe.b,{path:"/subscribe",component:Me}),r.a.createElement(pe.b,{path:"/events",component:Pe}),r.a.createElement(pe.b,{path:"/members",component:Je}),r.a.createElement(pe.b,{path:"/advertisers",component:Xe}),r.a.createElement(pe.b,{path:"/submissions",component:nt}))},rt=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={open:!1},a.handleDrawerOpen=function(){a.setState({open:!0})},a.handleDrawerClose=function(){a.setState({open:!1})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.theme,i=this.state.open;return r.a.createElement("div",{className:a.root},r.a.createElement(he,{drawerOpen:i,handleDrawer:this.handleDrawerOpen}),r.a.createElement(k.a,{className:a.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(L.a,{onClick:this.handleDrawerClose},"ltr"===n.direction?r.a.createElement(x.a,null):r.a.createElement(D.a,null))),r.a.createElement(B.a,null),r.a.createElement(S.a,null,J.map(function(t){return r.a.createElement(R.a,{button:!0,key:t.text,component:s.b,onClick:function(){e.handleDrawerClose()},to:t.to},r.a.createElement(W.a,{primary:t.text}))}))),r.a.createElement("main",{className:w()(a.content,Object(v.a)({},a.contentShift,i))},r.a.createElement(it,null),r.a.createElement(Y,null)))}}]),t}(r.a.Component),ot=Object(m.withStyles)(function(e){var t;return{root:{display:"flex"},drawer:{width:Z,flexShrink:0},drawerPaper:{width:Z},drawerHeader:Object(E.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:(t={flexGrow:1,height:"100vh",overflow:"auto",color:"white",paddingTop:"84px",paddingLeft:10*e.spacing.unit,paddingRight:10*e.spacing.unit},Object(v.a)(t,e.breakpoints.down("sm"),{paddingLeft:3*e.spacing.unit,paddingRight:3*e.spacing.unit}),Object(v.a)(t,"transition",e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})),Object(v.a)(t,"marginLeft",-Z),t),contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}},{withTheme:!0})(rt),lt=a(48),st=a(136),ct={uid:null,displayName:null,photoURL:null,token:null,userObj:null},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue.UserLoggedIn:return console.log("reducer user loggedin",t.data),Object.assign({},{uid:t.data.user.uid,displayName:t.data.user.displayName,photoURL:t.data.user.photoURL,token:t.data.token,userObj:t.data.user});case ue.UserLoggedOut:return Object.assign({},ct);default:return e}},dt=Object(lt.c)({user:ut}),mt=Object(lt.d)(dt,Object(lt.a)(st.a)),ht=(a(302),Object(m.createMuiTheme)({typography:{useNextVariants:!0},palette:{type:"dark"}})),pt=function(){return r.a.createElement(c.a,{store:mt},r.a.createElement(s.a,null,r.a.createElement(m.MuiThemeProvider,{theme:ht},r.a.createElement(d.a,null),r.a.createElement(ot,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(pt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[138,1,2]]]);
//# sourceMappingURL=main.a3a55d2b.chunk.js.map