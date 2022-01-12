(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3737)}])},3737:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var a=n(5666),s=n.n(a),i=n(5893),r=n(9008),o=(n(4298),n(7460)),l=n.n(o),c=n(7294),d=n(9548),p=[{name:"Active",color:function(e){return d.cJy(d.bc$).domain([0,35e4])(e.active)}},{name:"Total",color:function(e){return d.cJy(d._BJ).domain([0,3e4])(e.confirmed)}},{name:"Recovered",color:function(e){return d.cJy(d.Maq).domain([0,3e4])(e.recovered)}},{name:"Deaths",color:function(e){return d.cJy(d.sY$).domain([0,3e3])(e.deaths)}}];function m(e){var t=e.data,n=(0,c.useState)(0),a=n[0],s=n[1],r=(0,c.useState)({}),o=r[0],l=r[1];(0,c.useEffect)((function(){d.td_("path").style("fill",(function(e){return p[a].color(e.properties)}))}),[a]);var m=function(e,t){var n=c.useRef();return c.useEffect((function(){return e(d.Ys(n.current)),function(){}}),t),n}((function(e){var n=d.FWi().parallels([24.6,43.6]).rotate([-138.2529,0,0]).scale(1800).fitSize([900,900],t);n.translate([380,300]);var s=d.l49().projection(n),i=d.Ys("#tooltip").style("z-index","10").style("visibility","hidden").text("a simple tooltip");e.selectAll("path").data(t.features).enter().append("path").attr("d",s).style("fill",(function(e){return p[a].color(e.properties)})).style("transition-property","all").style("transition-timing-function","cubic-bezier(0, 0, 0.2, 1);").style("transition-duration",(function(){return(850*Math.random()+150).toString()+"ms"})).attr("stroke","#404040").attr("stroke-width",.1).on("mouseover",(function(e,t){!function(e){console.log(e.properties),l(e.properties)}(t),d.Ys(this).attr("stroke-width",2),i.text(t.properties.name),i.style("visibility","visible")})).on("mousemove",(function(e,t){return i.style("top",e.pageY+5+"px").style("left",e.pageX+20+"px")})).on("mouseout",(function(e){i.style("visibility","hidden"),d.Ys(this).attr("stroke-width",.1)}))}),[a,t.features]);return(0,i.jsxs)("div",{className:"max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8",children:[(0,i.jsx)("div",{className:"lg:max-w-2xl lg:mx-auto lg:text-center mt-16",children:(0,i.jsx)("h3",{className:"text-3xl font-extrabold tracking-tight text-gra-900 sm:text-4xl",children:"Coronavirus in Japan"})}),(0,i.jsx)("nav",{className:"mx-5 my-2 flex flex-wrap justify-center","aria-label":"Footer",children:p.map((function(e,t){return(0,i.jsx)("div",{className:"px-5 py-2",children:(0,i.jsx)("button",{href:e.href,onClick:function(){s(t)},className:h(a===t?"underline":"","text-base text-gray-500 hover:text-gray-900 selected:text-red-700"),children:e.name})},e.name)}))}),(0,i.jsxs)("div",{className:"mx-auto my-24 flex flex-row",children:[(0,i.jsx)("svg",{ref:m,className:"transition-all duration-700",style:{height:700,width:800}}),(0,i.jsxs)("div",{className:"flex flex-col justify-center w-60",children:[(0,i.jsx)("div",{className:"text-xl font-semibold",children:o.name?o.name:"Select a prefecture"}),(0,i.jsxs)("div",{className:"text-sm border-b border-dashed",children:["Active ",(0,i.jsx)("span",{className:"float-right",children:o.active})]}),(0,i.jsxs)("div",{className:"text-sm border-b border-dashed",children:["Total ",(0,i.jsx)("span",{className:"float-right",children:o.confirmed})]}),(0,i.jsxs)("div",{className:"text-sm border-b border-dashed",children:["Recovered ",(0,i.jsx)("span",{className:"float-right",children:o.recovered})]}),(0,i.jsxs)("div",{className:"text-sm border-b border-dashed",children:["Deaths ",(0,i.jsx)("span",{className:"float-right",children:o.deaths})]})]}),(0,i.jsx)("div",{id:"tooltip",className:"absolute shadow-xl p-2 text-xs bg-white rounded"})]}),(0,i.jsxs)("h5",{className:"text-xs text-stone-400 text-center",children:["Data from 01-01-2021 by ",(0,i.jsx)("a",{className:"underline hover:text-stone-900",href:"https://www3.nhk.or.jp/news/special/coronavirus/data/",children:"NHK"})]})]})}function h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function x(e,t,n,a,s,i,r){try{var o=e[i](r),l=o.value}catch(c){return void n(c)}o.done?t(l):Promise.resolve(l).then(a,s)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(a,s){var i=e.apply(t,n);function r(e){x(i,a,s,r,o,"next",e)}function o(e){x(i,a,s,r,o,"throw",e)}r(void 0)}))}}var f=[{id:1,question:"When will Japan lift its travel ban and reopen for tourists?",answer:"No one knows yet. But it will be at least a couple of months."},{id:2,question:"Can I go to Japan?",answer:"You cannot visit Japan unless you are a Japanese citizen."},{id:3,question:"I thought Japan eased restrictions?",answer:"That lasted for only a few weeks, and Japan never actaully reopened for tourists."},{id:4,question:"When is the next update from the Japanese government?",answer:"A decision on whether to maintain the closure is expected sometime within the next week, in mid-January 2022."}],g=[{id:0,url:"https://www3.nhk.or.jp/nhkworld/en/news/20220110_20/",site_name:"NHK WORLD",title:"6,438 new cases of coronavirus reported in Japan | NHK WORLD-JAPAN News",description:"Japanese health officials say they confirmed 6,438 new cases of the coronavirus nationwide as of 6:30 p.m. on Monday.",image:{url:"https://www3.nhk.or.jp/nhkworld/upld/thumbnails/en/news/20220110_20_1066197_L.jpg",width:"",height:"",type:""}},{id:1,url:"https://mainichi.jp/english/articles/20220110/p2a/00m/0na/014000c",site_name:"The Mainichi",title:"Japan's COVID border restrictions keeping families apart, affecting relationships: group - The Mainichi",description:"TOKYO -- Amid severe restrictions on new entries by foreign nationals to Japan introduced in November 2021 following confirmation of the coronavirus's",image:{url:"https://cdn.mainichi.jp/vol1/2022/01/10/20220110p2a00m0na011000p/0c10.jpg?1",width:"",height:"",type:""}},{id:2,url:"https://www.japantimes.co.jp/news/2022/01/08/national/politics-diplomacy/omicron-fumio-kishida-covid-policy/",site_name:"The Mainichi",title:"Omicron spread puts Kishida's COVID policy to the test",description:"Kishida put three prefectures \u2014 Okinawa, Hiroshima and Yamaguchi \u2014 under quasi-emergency measures, but not all in his administration were on board with the decision.",image:{url:"https://cdn-japantimes.com/wp-content/uploads/2022/01/np_file_134143-870x489.jpeg",width:"",height:"",type:""}},{id:3,url:"https://english.kyodonews.net/news/2022/01/19d6f4cd1c20-covid-border-steps-force-300-foreigners-to-decline-japan-teacher-jobs.html",site_name:"The Mainichi",title:"COVID border steps force 300 foreigners to decline Japan teacher jobs",description:"Japan's COVID-19 border restrictions appear to have prompted more than 300 people to decline offers for foreign language teacher and assistant positions in Japan, leading to a fall in the number of such instructors in the country, according to a Kyodo News survey.",image:{url:"https://img.kyodonews.net/english/public/images/posts/a1576910b54f79779619a1e609c8f047/cropped_image_l.jpg",width:"",height:"",type:""}}];function j(){var e=(0,c.useState)(),t=e[0],n=e[1];return(0,c.useEffect)((function(){function e(){return(e=u(s().mark((function e(){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/japan.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,l().parse("./japan_data.csv",{download:!0,complete:function(e){var t=a.features.map((function(t){var n=!0,a=!1,s=void 0;try{for(var i,r=e.data[Symbol.iterator]();!(n=(i=r.next()).done);n=!0){var o=i.value;t.properties.name===o[2]&&(t.properties.confirmed=o[7],t.properties.deaths=o[8],t.properties.recovered=o[9],t.properties.active=o[10],t.properties.incident_rate=o[12],t.properties.case_fatality_ratio=o[13])}}catch(l){a=!0,s=l}finally{try{n||null==r.return||r.return()}finally{if(a)throw s}}return t}));a.features=t,n(a)}});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,i.jsxs)("div",{className:"",children:[(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:"Japan Borders are Closed"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("link",{rel:"stylesheet",href:"https://rsms.me/inter/inter.css"}),(0,i.jsx)("link",{rel:"canonical",herf:""}),(0,i.jsx)("meta",{name:"description",content:"Can I go to Japan? Japan is NOT open for tourist visas"}),(0,i.jsx)("meta",{name:"keywords",content:"Japan, Open, Border, Visa, Tokyo, Osaka"}),(0,i.jsx)("meta",{name:"robots",content:"index, follow"}),(0,i.jsx)("meta",{property:"og:url",content:"https://www.canigotojapan.com/"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:"Can I go to Japan? - Probably not yet but.."}),(0,i.jsx)("meta",{property:"og:description",content:"Want to find out about the Coronavirus situation in Japan? We have all the info about when you can go!"}),(0,i.jsx)("meta",{property:"og:image",content:"https://www.canigotojapan.com/og-canigotojapan.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{property:"twitter:domain",content:"canigotojapan.com"}),(0,i.jsx)("meta",{property:"twitter:url",content:"https://www.canigotojapan.com/"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Can I go to Japan? - Probably not yet but.."}),(0,i.jsx)("meta",{name:"twitter:description",content:"Want to find out about the Coronavirus situation in Japan? We have all the info about when you can go!"}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://www.canigotojapan.com/og-canigotojapan.png"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1.0"}),(0,i.jsx)("script",{defer:!0,"data-domain":"canigotojapan.com",src:"https://plausible.io/js/plausible.js"})]}),(0,i.jsxs)("main",{children:[(0,i.jsx)(w,{}),(0,i.jsx)(y,{}),(0,i.jsx)(v,{}),(0,i.jsx)(b,{}),t&&(0,i.jsx)(m,{data:t})]}),(0,i.jsx)("footer",{children:(0,i.jsxs)("div",{className:"text-center text-red-300 bg-red-600 p-12",children:[(0,i.jsx)("h5",{children:"Made by"})," ",(0,i.jsx)("a",{className:"text-red-100 hover:text-white",href:"https://www.twitter.com/fergusleen",children:"@fergusleen"})]})})]})}var w=function(){return(0,i.jsx)("div",{className:"bg-white",children:(0,i.jsx)("div",{className:"max-w-7xl mx-auto mt-24 py-16 px-4 sm:py-24 sm:px-6 lg:px-8",children:(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("h1",{className:"mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl",children:"Is Japan open yet?"}),(0,i.jsx)("h2",{className:"max-w-xl mt-5 mx-auto text-3xl text-gray-700",children:"No. Japan borders are still closed :("})]})})})},y=function(){return(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8",children:(0,i.jsxs)("div",{className:"text-center text-gray-500",children:[(0,i.jsx)("b",{children:"6 378"})," new cases in Japan today."]})})})},v=function(){return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8",children:[(0,i.jsx)("div",{className:"lg:max-w-2xl lg:mx-auto lg:text-center",children:(0,i.jsx)("h3",{className:"text-3xl font-extrabold tracking-tight text-gra-900 sm:text-4xl",children:"Latest Headlines"})}),(0,i.jsx)("div",{className:"mt-10",children:(0,i.jsx)("dl",{className:"space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10",children:g.map((function(e){return(0,i.jsxs)("a",{href:e.url,className:"border hover:border-red-500",children:[(0,i.jsx)("img",{src:e.image.url}),(0,i.jsxs)("div",{className:"p-4",children:[(0,i.jsx)("dt",{className:"mt-1 font-semibold text-gray-800",children:e.title}),(0,i.jsx)("dd",{className:"mt-3 text-gray-400",children:e.description})]})]},e.id)}))})})]})})},b=function(){return(0,i.jsx)("div",{className:"bg-red-600",children:(0,i.jsxs)("div",{className:"max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8",children:[(0,i.jsx)("div",{className:"lg:max-w-2xl lg:mx-auto lg:text-center",children:(0,i.jsx)("h3",{className:"text-3xl font-extrabold tracking-tight text-white sm:text-4xl",children:"Frequently asked questions"})}),(0,i.jsx)("div",{className:"mt-20",children:(0,i.jsx)("dl",{className:"space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10",children:f.map((function(e){return(0,i.jsxs)("div",{children:[(0,i.jsx)("dt",{className:"font-semibold text-white",children:e.question}),(0,i.jsx)("dd",{className:"mt-3 text-stone-50",children:e.answer})]},e.id)}))})})]})})}}},function(e){e.O(0,[965,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);