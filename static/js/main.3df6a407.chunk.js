(this["webpackJsonphappy-mynd"]=this["webpackJsonphappy-mynd"]||[]).push([[0],{33:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(6),i=n.n(c),l=(n(33),n.p+"static/media/logo-with-name.4477470d.png"),r=n.p+"static/media/emotions.b073eaa2.png",o=n.p+"static/media/mentorship.76d05f08.png",d=n(3);var j=function(e){var t=e.reference,n=e.onClick;return Object(d.jsxs)("div",{className:"d-flex justify-content-between mentorship-container",ref:t,children:[Object(d.jsx)("div",{className:"image-container",children:Object(d.jsx)("img",{src:o,alt:"logo",className:"mentorship"})}),Object(d.jsxs)("div",{className:"App-main-component flex-wrap",children:[Object(d.jsx)("img",{src:o,alt:"logo",className:"img-fluid emotions-inner"}),Object(d.jsx)("div",{className:"flex-column d-flex App-component ",children:Object(d.jsxs)("div",{className:"d-flex flex-column ",children:[Object(d.jsxs)("span",{className:"App-header",children:[Object(d.jsx)("span",{style:{color:"#FF5757"},children:"Mentorship"}),"- Program "]}),Object(d.jsx)("span",{className:"App-sub-heading",children:"We Provide live courses to train your mind to unleash your true potential. Experience joy and love in your life so you remain playful and exuberance in any sitution of life"}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"global-button",onClick:n,children:Object(d.jsx)("span",{children:"Lets Connect"})})})]})})]})]})},m=n(7),p=n(25),u=n.p+"static/media/section3.74e218ae.png",b=n(71),h=n(75),f=Object(b.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));var x=function(e){var t=e.reference,n=Object(a.useState)({}),s=Object(p.a)(n,2),c=s[0],i=s[1],l=f();return Object(d.jsxs)("div",{className:"d-flex justify-content-between addData-container",style:{marginBottom:100},ref:t,children:[Object(d.jsx)("div",{className:"image-container",children:Object(d.jsx)("img",{src:u,alt:"logo",className:"addData-image"})}),Object(d.jsxs)("div",{className:"flex-column d-flex",children:[Object(d.jsx)("img",{src:u,alt:"logo",className:"img-fluid emotions-inner"}),Object(d.jsx)("div",{className:"d-flex flex-column mentorship-main-component align-items-center",style:{paddingLeft:40},children:Object(d.jsxs)("div",{className:"d-flex flex-column",children:[Object(d.jsxs)("span",{className:"App-header",children:["Lets ",Object(d.jsx)("span",{style:{color:"#FF5757"},children:"Connect"})]}),Object(d.jsx)("span",{className:"App-sub-heading",children:"In-order to provide you a mentorship program we must know the people who are interested to participate"}),Object(d.jsxs)("form",{className:l.root,autoComplete:"off",style:{marginBottom:40},onSubmit:function(e){e.preventDefault();var t={majorDimension:"ROWS",values:[c]};gapi.client.sheets.spreadsheets.values.append({spreadsheetId:"1tsFKsa6fzkv5JPlPcp8eOZfU3nmvcnjEB8VDFyjHt7o",range:"Sheet1",valueInputOption:"RAW",insertDataOption:"INSERT_ROWS"},t).then((function(e){window.scrollTo(0,0),i({first_name:"",last_name:"",age:"",email:"",phone:""}),window.scrollTo(0,0)}),(function(e){console.error("error: "+e.result.error.message)}))},children:[Object(d.jsx)(h.a,{id:"standard-basic",required:!0,value:c.first_name,onChange:function(e){return i(Object(m.a)(Object(m.a)({},c),{},{first_name:e.target.value}))},label:"First Name"}),Object(d.jsx)(h.a,{required:!0,id:"standard-basic",value:c.last_name,label:"Last Name",onChange:function(e){return i(Object(m.a)(Object(m.a)({},c),{},{last_name:e.target.value}))}}),Object(d.jsx)(h.a,{required:!0,id:"standard-basic",label:"Age",value:c.age,type:"number",InputLabelProps:{shrink:!0},onChange:function(e){return i(Object(m.a)(Object(m.a)({},c),{},{age:e.target.value}))}}),Object(d.jsx)(h.a,{required:!0,id:"standard-basic",label:"Ph-no",type:"number",value:c.phone,InputLabelProps:{shrink:!0},onChange:function(e){return i(Object(m.a)(Object(m.a)({},c),{},{phone:e.target.value}))}}),Object(d.jsx)(h.a,{required:!0,type:"email",name:"email",value:c.email,autoComplete:"email",id:"standard-basic",label:"Email",onChange:function(e){return i(Object(m.a)(Object(m.a)({},c),{},{email:e.target.value}))}}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"global-button",type:"submit",children:Object(d.jsx)("span",{children:"Submit"})})})]})]})})]})]})};n(40);var g=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=function(){gapi.client.init({apiKey:"AIzaSyDY8xeTg3sEYWRSorpCRnH1cW_dA1D_cms",clientId:"684833227999-vlje4f6f0m9gbq0hrag3a4rsdsrcj9o9.apps.googleusercontent.com",scope:["https://www.googleapis.com/auth/spreadsheets"],discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"]}).then((function(){console.log("is signed in")}))};return Object(a.useEffect)((function(){gapi.load("client:auth2",n)})),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"d-flex justify-content-between App ",children:[Object(d.jsxs)("div",{className:"App-main-component flex-wrap d-flex",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:l,className:"App-logo",alt:"logo"})}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"flex-column d-flex App-component ",children:Object(d.jsxs)("div",{className:"d-flex flex-column ",children:[Object(d.jsxs)("span",{className:"App-header",children:["Life is filled with ",Object(d.jsx)("span",{style:{color:"#FF5757"},children:"Happiness"})," Lets explore it !"]}),Object(d.jsx)("span",{className:"App-sub-heading",children:"We provide you a Mentorship program to make your life better and help you to discover the positive inner side of you"}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"global-button",onClick:function(){return e.current.scrollIntoView()},children:Object(d.jsx)("span",{children:"Explore more"})})})]})})})]}),Object(d.jsx)("div",{className:"image-container",children:Object(d.jsx)("img",{src:r,alt:"logo",className:"emotions"})})]}),Object(d.jsx)(j,{reference:e,onClick:function(){return t.current.scrollIntoView()}}),Object(d.jsx)(x,{reference:t})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),O()}},[[41,1,2]]]);
//# sourceMappingURL=main.3df6a407.chunk.js.map