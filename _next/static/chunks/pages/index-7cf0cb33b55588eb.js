(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(3737)}])},3737:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var n=a(5666),o=a.n(n),s=a(5893),r=a(9008),i=a(7460),c=a.n(i),d=a(7294);a(7051);var m=a(6030);function l(e,t,a,n,o,s,r){try{var i=e[s](r),c=i.value}catch(d){return void a(d)}i.done?t(c):Promise.resolve(c).then(n,o)}function u(e){return function(){var t=this,a=arguments;return new Promise((function(n,o){var s=e.apply(t,a);function r(e){l(s,n,o,r,i,"next",e)}function i(e){l(s,n,o,r,i,"throw",e)}r(void 0)}))}}var p=[{name:"Hokkaido",code:1},{name:"Aomori",code:2},{name:"Iwate",code:3},{name:"Miyagi",code:4},{name:"Akita",code:5},{name:"Yamagata",code:6},{name:"Fukushima",code:7},{name:"Ibaraki",code:8},{name:"Tochigi",code:9},{name:"Gunma",code:10},{name:"Saitama",code:11},{name:"Chiba",code:12},{name:"Tokyo",code:13},{name:"Kanagawa",code:14},{name:"Niigata",code:15},{name:"Toyama",code:16},{name:"Ishikawa",code:17},{name:"Fukui",code:18},{name:"Yamanashi",code:19},{name:"Nagano",code:20},{name:"Gifu",code:21},{name:"Shizuoka",code:22},{name:"Aichi",code:23},{name:"Mie",code:24},{name:"Shiga",code:25},{name:"Kyoto",code:26},{name:"Osaka",code:27},{name:"Hyogo",code:28},{name:"Nara",code:29},{name:"Wakayama",code:30},{name:"Tottori",code:31},{name:"Shimane",code:32},{name:"Okayama",code:33},{name:"Hiroshima",code:34},{name:"Yamaguchi",code:35},{name:"Tokushima",code:36},{name:"Kagawa",code:37},{name:"Ehime",code:38},{name:"Kochi",code:39},{name:"Fukuoka",code:40},{name:"Saga",code:41},{name:"Nagasaki",code:42},{name:"Kumamoto",code:43},{name:"Oita",code:44},{name:"Miyazaki",code:45},{name:"Kagoshima",code:46},{name:"Okinawa",code:47}],x=(0,s.jsxs)("span",{children:["Last updated on ",(0,s.jsx)("b",{children:"2022/09/30"})," at 11:11 (GMT+0)"]}),h="2022-09-29";function f(){var e=function(){window.innerWidth>650?b(650):b(window.innerWidth-30)},t=(0,d.useState)(),a=t[0],n=t[1],i=(0,d.useState)(),l=i[0],x=i[1],f=(0,d.useState)(),j=(f[0],f[1]);(0,d.useEffect)((function(){function e(){return(e=u(o().mark((function e(){var t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/japan.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c().parse("https://www3.nhk.or.jp/n-data/opendata/coronavirus/nhk_news_covid19_prefectures_daily_data.csv",{download:!0,complete:function(e){var t=new Date(h).toISOString().split("T")[0].replace(/-0+/g,"/").replaceAll("-","/"),o=e.data.filter((function(e){return e[0]===t}));a.date=t,y(a,o),n(a),x(e);var s={today_cases:0,cases:0,today_deaths:0,deaths:0};a.features.map((function(e){s.today_cases+=Number(e.properties.today_cases),s.cases+=Number(e.properties.total_cases),s.today_deaths+=Number(e.properties.today_deaths),s.deaths+=Number(e.properties.total_deaths)})),j(s),console.log(s)}});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,m.Z)({targets:"#person",translateX:0,translateY:-245,rotate:170,duration:2e3,delay:300,easing:"easeOutElastic(1.2, 0.6)"}),m.Z.timeline().add({targets:"#person",translateX:0,translateY:-245,rotate:170,duration:2e3,delay:8e3,easing:"easeOutElastic(1.2, 0.6)"}).add({targets:"#person",translateX:50,translateY:-300,rotate:0,duration:2e3,delay:15e3,easing:"easeOutElastic(1.2, 0.6)"}),a||l||function(){e.apply(this,arguments)}()}),[]);var y=function(e,t){t.map((function(t){var a=t[1],n=p.find((function(e){return e.code==a})).name,o=e.features.find((function(e){return e.properties.name==n}));o.properties.total_cases=t[4],o.properties.today_deaths=t[5],o.properties.total_deaths=t[6],o.properties.today_cases=t[3],o.properties.incident_rate=t[7]}))},v=(0,d.useState)(650),b=(v[0],v[1]);return(0,d.useEffect)((function(){return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("title",{children:"Can I go to Japan? | YES from October 11, 2022."}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,s.jsx)("link",{rel:"stylesheet",href:"https://rsms.me/inter/inter.css"}),(0,s.jsx)("link",{rel:"canonical",herf:""}),(0,s.jsx)("meta",{name:"description",content:"Latest info about Japan's entry ban and coronavirus"}),(0,s.jsx)("meta",{name:"keywords",content:"Japan, Open, Border, Visa, Tokyo, Osaka, Can I go to Japan"}),(0,s.jsx)("meta",{name:"robots",content:"index, follow"}),(0,s.jsx)("meta",{property:"og:url",content:"https://www.canigotojapan.com/"}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:title",content:"Can I go to Japan? - YES from October 11, 2022"}),(0,s.jsx)("meta",{property:"og:description",content:"Latest info about Japan's entry ban and coronavirus"}),(0,s.jsx)("meta",{property:"og:image",content:"https://www.canigotojapan.com/og-canigotojapan.png"}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{property:"twitter:domain",content:"canigotojapan.com"}),(0,s.jsx)("meta",{property:"twitter:url",content:"https://www.canigotojapan.com/"}),(0,s.jsx)("meta",{name:"twitter:title",content:"Can I go to Japan? - YES from October 11, 2022"}),(0,s.jsx)("meta",{name:"twitter:description",content:"Latest info about Japan's entry ban and coronavirus"}),(0,s.jsx)("meta",{name:"twitter:image",content:"https://www.canigotojapan.com/og-canigotojapan.png"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1.0"}),(0,s.jsx)("script",{defer:!0,"data-domain":"canigotojapan.com",src:"https://plausible.io/js/plausible.js"})]}),(0,s.jsxs)("main",{children:[(0,s.jsx)(g,{}),(0,s.jsx)(w,{})]}),(0,s.jsx)("footer",{children:(0,s.jsxs)("div",{className:"text-center text-red-300 text-sm bg-red-600 p-12",children:[(0,s.jsx)("h5",{children:"Made by"})," ",(0,s.jsx)("a",{className:"text-red-100 hover:text-white",href:"https://www.twitter.com/fergusleen",children:"@fergusleen"})]})})]})}var g=function(){return(0,s.jsxs)("div",{className:"bg-white",children:[(0,s.jsx)("div",{className:"text-center text-xs text-gray-500 mt-2",children:x}),(0,s.jsx)("div",{className:"max-w-7xl mx-auto mt-24 py-16 px-4 sm:py-24 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("h1",{className:"mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl",children:"Is Japan open yet?"}),(0,s.jsxs)("h2",{className:"max-w-xl mt-5 mx-auto text-4xl text-gray-700",children:["Opening on ",(0,s.jsx)("b",{children:"October 11"}),", 2022"]})]})})]})},w=function(){var e=(0,d.useState)(""),t=e[0],a=e[1],n=(0,d.useState)(""),r=n[0],i=n[1],c=(0,d.useState)(!1),m=c[0],l=c[1],p=(0,d.useState)(!1),x=p[0],h=p[1],f=u(o().mark((function e(a){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t){e.next=3;break}return e.abrupt("return",i("No email"));case 3:return l(!0),e.next=6,fetch("https://emaildb.vercel.app/api/email",{method:"POST",SameSite:"Strict",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}).then((function(e){return e.json()})).then((function(e){if(e.err)return l(!1),void i(e.err);h(!0)})).catch((function(e){l(!1),console.error(e)}));case 6:e.sent,l(!1);case 8:case"end":return e.stop()}}),e)})));return(0,s.jsx)("div",{className:"bg-white py-16 sm:py-24",children:(0,s.jsx)("div",{className:"mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"sm:text-center",children:(0,s.jsx)("h2",{className:"text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl",children:"Get notified when Japan opens"})}),!x&&(0,s.jsxs)("form",{onSubmit:f,className:"mt-12 sm:mx-auto sm:max-w-lg sm:flex",children:[(0,s.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,s.jsx)("label",{htmlFor:"cta-email",className:"sr-only",children:"Email address"}),(0,s.jsx)("input",{id:"cta-email",type:"email",onChange:function(e){a(e.target.value),i("")},className:"w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md",placeholder:"Enter your email"}),(0,s.jsx)("p",{className:"block h-4 text-red-500 text-xs italic",children:r})]}),(0,s.jsxs)("div",{className:"mt-4 sm:mt-0 sm:ml-3",children:[!m&&(0,s.jsx)("button",{type:"submit",className:"block w-full rounded-md border border-transparent px-5 py-3 bg-red-600 text-base font-medium text-white shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-600 sm:px-10",children:"Notify me"}),m&&(0,s.jsx)("div",{className:"block w-full rounded-md border border-transparent px-5 py-3 bg-red-700 text-base font-medium text-white shadow sm:px-10",children:(0,s.jsxs)("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-full text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,s.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,s.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})]})]}),x&&(0,s.jsx)("div",{className:"text-center mt-12 text-gray-800",children:"Done."})]})})})}}},function(e){e.O(0,[397,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);