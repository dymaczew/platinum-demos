(window.webpackJsonp=window.webpackJsonp||[]).push([[27,25,42],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),i=a("NmYn"),r=a.n(i),l=a("Wbzz"),c=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),m=a.n(s),A=a("QH2O"),d=a.n(A),p=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,b=e.tabs,i=void 0===b?[]:b;return Object(p.b)("div",{className:m()(d.a.pageHeader,(t={},t[d.a.withTabs]=i.length,t[d.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,i=b.baseUrl,r=b.subDirectory,c=i+"/edit/"+b.branch+r+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),j=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,b=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===b,c=new RegExp(b+"/?(#.*)?$"),o=n.replace(c,a);return Object(p.b)("li",{key:e,className:m()((t={},t[N.selectedItem]=i,t),N.listItem)},Object(p.b)(l.Link,{className:N.link,to:""+o},e))}));return Object(p.b)("div",{className:N.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:N.list},i))))))},t}(b.a.Component),y=a("MjG9"),x=a("CzIb"),w=a("Asxa"),v=a("OIbQ"),k=a.n(v),B=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:k.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,b=e.Title,i=t.frontmatter,s=void 0===i?{}:i,m=t.relativePagePath,A=t.titleType,d=s.tabs,g=s.title,j=s.theme,N=s.description,w=s.keywords,v=s.date,k=Object(x.a)().interiorTheme,T=Object(l.useStaticQuery)("2456312558").site.pathPrefix,E=T?n.pathname.replace(T,""):n.pathname,Q=d?E.split("/").filter(Boolean).slice(-1)[0]||r()(d[0],{lower:!0}):"",I=j||k;return Object(p.b)(o.a,{tabs:d,homepage:!1,theme:I,pageTitle:g,pageDescription:N,pageKeywords:w,titleType:A},Object(p.b)(u,{title:b?Object(p.b)(b,null):g,label:"label",tabs:d,theme:I}),d&&Object(p.b)(f,{title:g,slug:E,tabs:d,currentTab:Q}),Object(p.b)(y.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:m}),Object(p.b)(B,{date:v})),Object(p.b)(h.a,{pageContext:t,location:n,slug:E,tabs:d,currentTab:Q}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},WZhW:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return A}));var n=a("wx14"),b=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),l=(a("qKvR"),["components"]),c=function(){return Object(i.b)("span",null,"Observability ",Object(i.b)("br",null)," 100-level live demo")},o={},s={Title:c,_frontmatter:o},m=r.a;function A(e){var t=e.components,a=Object(b.a)(e,l);return Object(i.b)(m,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABkrEqDP8A/8QAGRAAAQUAAAAAAAAAAAAAAAAAAAECAyIz/9oACAEBAAEFAhmsqW//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAADAQAAAAAAAAAAAAAAAAAAEBFi/9oACAEBAAY/Ai6X/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQARITFBUaH/2gAIAQEAAT8hFtpTIreOITYwv//aAAwDAQACAAMAAAAQh+//xAAWEQEBAQAAAAAAAAAAAAAAAAAAATH/2gAIAQMBAT8Qi6//xAAWEQEBAQAAAAAAAAAAAAAAAAAAATH/2gAIAQIBAT8QiY//xAAbEAACAgMBAAAAAAAAAAAAAAABMQAhEUFhwf/aAAgBAQABPxC+RJy5RAJ5BGtYmF9n/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/6b565aca74b8eeed70d06cac096de121/2e753/AIOps_Observability_100_Prep_GitHub_banner_8-3-21_short.jpg",srcSet:["/platinum-demos/static/6b565aca74b8eeed70d06cac096de121/69549/AIOps_Observability_100_Prep_GitHub_banner_8-3-21_short.jpg 288w","/platinum-demos/static/6b565aca74b8eeed70d06cac096de121/473e3/AIOps_Observability_100_Prep_GitHub_banner_8-3-21_short.jpg 576w","/platinum-demos/static/6b565aca74b8eeed70d06cac096de121/2e753/AIOps_Observability_100_Prep_GitHub_banner_8-3-21_short.jpg 1152w","/platinum-demos/static/6b565aca74b8eeed70d06cac096de121/74f4b/AIOps_Observability_100_Prep_GitHub_banner_8-3-21_short.jpg 1728w","/platinum-demos/static/6b565aca74b8eeed70d06cac096de121/cbe2c/AIOps_Observability_100_Prep_GitHub_banner_8-3-21_short.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Preparation"),Object(i.b)("th",{parentName:"tr",align:"left"}))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Scenario overview")),Object(i.b)("td",{parentName:"tr",align:"left"},"This demo shows how IBM Instana helps quickly identify and resolve an incident in a microservices-based application. The application in this demo is called Stan’s Robot Shop, and it uses various technologies such as Java, Python, and MySQL.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Demo outline")),Object(i.b)("td",{parentName:"tr",align:"left"},"Introduction ",Object(i.b)("br",null)," 1. Getting an incident alert ",Object(i.b)("br",null)," 2. Inspect auto-correlated incident details ",Object(i.b)("br",null)," 3. Debugging the incident by inspecting calls ",Object(i.b)("br",null)," 4. Drill down with end-to-end traces ",Object(i.b)("br",null)," 5. Confirm incident resolution was successful ",Object(i.b)("br",null)," Summary")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Before the demo")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Environment setup")," ",Object(i.b)("br",null)," •\tLog into ",Object(i.b)("a",{parentName:"td",href:"https://ibmdemo-instanaibm.instana.io."},"https://ibmdemo-instanaibm.instana.io.")," ",Object(i.b)("br",null)," •\tSet the time period to show an active incident, as detailed below: ",Object(i.b)("br",null)," ",Object(i.b)("br",null)," 1.\tIn the upper right, click the button showing the timeframe. ",Object(i.b)("br",null)," ",Object(i.b)("br",null)," ",Object(i.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"288px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.444444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA4klEQVQY002P226DMBBE+f//6iWEBoRahAnQpiUhVSuuxuaScOo4L13paKXRzmjHSd8l+1yS5D0i7YiShiTrrfYfq5lbkUnCpOVyuXCbebnv63VF6RFnWjSe73P6PhtKIiH4qX7Rk0YqyTAqpB6Ylom6bWj7DvGlmOcZkaSM40iW51RVbcIXnGXWxLGgOBa87HZ4ho3rEgQB7nbL88bl4fHJmBOmeUJrRXwYrPmzOKKU5vUtoizPLOZbJzz0RIUmPEi8fYWfNQR5a/Gzll1aW256+NEbvcNP75XXFRtiK6/3yn88HClO5G3t8QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"timeframe",title:"timeframe",src:"/platinum-demos/static/c0c30f5061e4458de3a14534b6f97023/7fc1e/1_timeframe.png",srcSet:["/platinum-demos/static/c0c30f5061e4458de3a14534b6f97023/7fc1e/1_timeframe.png 288w"],sizes:"(max-width: 288px) 100vw, 288px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," ",Object(i.b)("br",null)," 2.\tAt the bottom of the pop-up, set the timeframe so that it begins at 25 minutes past the hour and ends at 35 minutes past the hour. It doesn’t matter which hour you pick. Click ",Object(i.b)("strong",{parentName:"td"},"‘Set Time.’")," ",Object(i.b)("br",null)," ",Object(i.b)("br",null)," Note: ",Object(i.b)("br",null)," • This will ensure you see normal behavior and then a sudden change when the incident begins at 0:30. ",Object(i.b)("br",null)," • Pressing ‘enter’ doesn’t work. You’ll need to actually click the button. ",Object(i.b)("br",null)," ",Object(i.b)("br",null)," ",Object(i.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"576px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACLElEQVQ4y21T2W7bMBDUN/ex39Bf6I/kJY8tgsBHkQK2c9j1kVi2LNGkqFueztBRUxQ1sJjlcrU7s0tHTduhbtpg8rv+grbr0dCGeDDeVXUDc7aY7yxGsw2+TZ8wWWwxXezwc3XCPqsQKanrOvQsUBYlklOKs3Xw3qNjkbZtgzWhcIOa+XGaYxtn2NGOxvPsiAWSLEeU8cO9y3H0BdHh8XWPx7cYv5IUaVUjKUukZRXYi7kUVHUNl+coeX+5XIL1fQ9jzmJY40QnyUyQFaS2V4kFP/AsVpKVlKhA9e6rgUyx4V4qIk+ZZVXBUmbDQp5MNSfFZYq73COnEo0i572lIhHpyGqIqbhyAsOCsizlaj4FGekDLUKFVaynzIz+ED9RzZGzVsMkNeF8ZV+zoCjT1EW0laSuiqmYirRcmqWvBopb5/+oOPPevOeHgpJ7TbrKGH4a9PDTwP8X//DoU4WURsOTEBvJCQXeNxe2J/wnJtP82r4PaPmcGqIj00hvsObcatJvND9KacnUk3HPxIBs6hjveBa2UsSXASnSdkkG4U/Rc8txDDNfwDw/w74sA+arVfBlZ+Hyei7W63DnidVmg+8PD7iZTHAznWI8GqE+8x262Qzm9RVJfIBnV6vtGQOXpojXWxRpBntMUHKTKApc+DRk8r/8mOLz3R0+3d/j6+0tkB4R2fEYKbsYYkbMhDJ2dWRxeHrC22J+tfnsL1wE5m65hCfr7PkFh9MBvwG90eONjkWsDQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"time_range",title:"time_range",src:"/platinum-demos/static/aaa40e3c00194c970dd5a18a5604f56a/a5df1/2_time_range.png",srcSet:["/platinum-demos/static/aaa40e3c00194c970dd5a18a5604f56a/7fc1e/2_time_range.png 288w","/platinum-demos/static/aaa40e3c00194c970dd5a18a5604f56a/a5df1/2_time_range.png 576w"],sizes:"(max-width: 576px) 100vw, 576px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," ",Object(i.b)("br",null)," 3.\tCheck that the summary tab for the robot shop (",Object(i.b)("strong",{parentName:"td"},"Applications")," -> ",Object(i.b)("strong",{parentName:"td"},"Robot Shop")," -> ",Object(i.b)("strong",{parentName:"td"},"Summary"),") looks like this (seeing drop in call volume and spikes in errors and latency). ",Object(i.b)("br",null)," ",Object(i.b)("br",null)," ",Object(i.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"720px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.45833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABbUlEQVQoz12R227TQBRF/c3wMX2G9oUv4BkJCaS2aXmJqcIlgSZt3Ph+mYs9XuwxlRC1tDTSzDn77LOdpI9brtI16WbHerNlffeT6909H7InSmuZQ2Ccpv+YwkwQxjoGY3F+pB+MTk9StT1eF5MaifD3HFXYNO0/oXFc8KLrBwYJTM9vBDGHRTh5OGbUbaeLmdJ47gpLPsTJhv3hkbKqcc4xRUE1BAnkRcmpKBaBWWJZ7zk0Fq+6ZOjMMpXRcawcH/cTlZHRUY15TlnXaD7zM/Fr5a7pWpwiie42pSfNHbJM8m77iVerc16vLni/v+Z3e2Bd7ihMiywwK5cg4XBxTjg7Y3r7Bq+V/RiWqJzpGfqcvi+UY0eSPv3i88NXro4bbrPvfMl+cHv8RtaUmKrBtXJyOuFWK9zlJe7mhlbZNt0gASuhgUZCtegVUzJarRt3eoFzCl8/xsqFmQIxhYiWVKPFKC8r95GYZay32ugPIb0XALen5KwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"robot_shop_summary",title:"robot_shop_summary",src:"/platinum-demos/static/94795d942bcd3e873415a22a62d4d5af/b85f6/3_robot_shop_summary.png",srcSet:["/platinum-demos/static/94795d942bcd3e873415a22a62d4d5af/7fc1e/3_robot_shop_summary.png 288w","/platinum-demos/static/94795d942bcd3e873415a22a62d4d5af/a5df1/3_robot_shop_summary.png 576w","/platinum-demos/static/94795d942bcd3e873415a22a62d4d5af/b85f6/3_robot_shop_summary.png 720w"],sizes:"(max-width: 720px) 100vw, 720px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," ",Object(i.b)("br",null)," 4.\tClick on ",Object(i.b)("strong",{parentName:"td"},"Events")," on the sidebar menu and check that there are open incidents, including ‘sudden increase in the number of erroneous calls’ on the ‘discount’ service. ",Object(i.b)("br",null)," ",Object(i.b)("br",null)," ",Object(i.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"576px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABn0lEQVQoz2VSi46cMAzk/z/w1Op2ee4SSMLrgPBmOjG31faKNBrbsceOSbAfB/Z9x0E+jhPLssC5SXwfv3C88Vv8LeeqPxBsdLYdcugFp3nGSEH/ncB//I/9coBvcQq6ZUPd5aiHEc24oKg6hI8CiTKCONdkK5wWVmLRU4uflZVw+ChR9RM1ZgQTBdu+QjtO6NwK0w5ImPQ0NR4syCiSm0ZY2YZoJf7UtTSXJsxvKNa6xV/5xDwV3N2ElXdvuy9kzxyltii0gSo1tK1QGgqrUmLaVFCFlhzP/eCwcV3zsnLCqkKf3TAWBVGiezyh7yGqJIWNE5gwQp1mYtsoZjxBLWex+IZo0xRT22H1O5zZ+VxyrvWQ5Q7OcUIFw0baXlPaupEp/bSGbOta4qYis773YlpLfeCYNOQJHIs9evoNr/zlp1UF2lwxdtkvvM46pS4/z+EovPG3B+u6cdwbpqHD4mYY7uTXx28kUYLoHuH+eUeWZIjDWGzPaZwivIXMuWKW02687kKtwL+97fDv6BQc7HJ+L+Avzh/+D+ysud7zjj/2h/ugdJcLtwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"open_incidents",title:"open_incidents",src:"/platinum-demos/static/683941e1d9b61261bc3703167cddc886/a5df1/4_open_incidents.png",srcSet:["/platinum-demos/static/683941e1d9b61261bc3703167cddc886/7fc1e/4_open_incidents.png 288w","/platinum-demos/static/683941e1d9b61261bc3703167cddc886/a5df1/4_open_incidents.png 576w"],sizes:"(max-width: 576px) 100vw, 576px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," ",Object(i.b)("br",null)," ",Object(i.b)("strong",{parentName:"td"},"Requisition instructions")," ",Object(i.b)("br",null)," Please see ",Object(i.b)("a",{parentName:"td",href:"#requisition-instructions"},"below"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Key demo considerations")),Object(i.b)("td",{parentName:"tr",align:"left"},"The demo environment is set to automatically inject an error into the application once every hour. ",Object(i.b)("br",null)," ",Object(i.b)("br",null)," The cycle begins on the half-hour (so 9:30, 10:30, etc). You should see errors begin to show up a few minutes after this (around 32 or 33 minutes past the hour). ",Object(i.b)("br",null)," ",Object(i.b)("br",null)," The error will resolve itself and go back to a normal state after about 10 minutes. ",Object(i.b)("br",null)," ",Object(i.b)("br",null)," You can set the timeframe so that you can demo the active incident, even if your timing does not coincide with when the error cycle starts. See instructions above (under ",Object(i.b)("strong",{parentName:"td"},"Environment setup"),").")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"How to get support")),Object(i.b)("td",{parentName:"tr",align:"left"},"Please direct any questions in preparation for the demo to the ",Object(i.b)("a",{parentName:"td",href:"https://ibm.enterprise.slack.com/app_redirect?channel=techdemos-automation-support"},Object(i.b)("strong",{parentName:"a"},"#Techdemos-Automation-Support"))," Slack channel.")))),Object(i.b)("hr",null),Object(i.b)("span",{id:"requisition-instructions"}),Object(i.b)("h2",null,"Requisition instructions"),Object(i.b)("p",null,"Two days before the demo, make sure you can access the environment: ",Object(i.b)("a",{parentName:"p",href:"https://ibmdemo-instanaibm.instana.io"},"https://ibmdemo-instanaibm.instana.io"),"."),Object(i.b)("p",null,"Email contacts to request access:"),Object(i.b)("h3",null,"Sales"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Region"),Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Email"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Americas"),Object(i.b)("td",{parentName:"tr",align:null},"Chris Marvin"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:camarvin@us.ibm.com"},"camarvin@us.ibm.com"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"EMEA"),Object(i.b)("td",{parentName:"tr",align:null},"Thomas Taschner"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:thota@at.ibm.com"},"thota@at.ibm.com"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"AP"),Object(i.b)("td",{parentName:"tr",align:null},"Mark Jones"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:marjones@au1.ibm.com"},"marjones@au1.ibm.com"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Japan"),Object(i.b)("td",{parentName:"tr",align:null},"Yasuhiro Tsutsumi"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:Yasuhiro.Tsutsumi@ibm.com"},"Yasuhiro.Tsutsumi@ibm.com"))))),Object(i.b)("h3",null,"Tech sales"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Region "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "),Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Email"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Americas"),Object(i.b)("td",{parentName:"tr",align:null},"Ganeshram Boodhoo"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:gbood@us.ibm.com"},"gbood@us.ibm.com"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"EMEA"),Object(i.b)("td",{parentName:"tr",align:null},"Alexandre Abi-Khaled"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:alexandre.abikhaled@nl.ibm.com"},"alexandre.abikhaled@nl.ibm.com"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"AP"),Object(i.b)("td",{parentName:"tr",align:null},"Kitman Cheung"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:cheungk@sg.ibm.com"},"cheungk@sg.ibm.com"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Japan"),Object(i.b)("td",{parentName:"tr",align:null},"Tomonori Iwashina"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:TOMONORI@jp.ibm.com"},"TOMONORI@jp.ibm.com"))))),Object(i.b)("h3",null,"Everybody else (IBMers that are not sales or tech sales)"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Email"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Aaron Tobin"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:atobin@us.ibm.com"},"atobin@us.ibm.com"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Maria Elena Taglieri"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:maria_elena.taglieri@it.ibm.com"},"maria_elena.taglieri@it.ibm.com"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Matthias Staub"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:matthias.staub@ch.ibm.com"},"matthias.staub@ch.ibm.com"))))),Object(i.b)("h3",null,"Business partners"),Object(i.b)("p",null,"TBD"),Object(i.b)("h3",null,"Backup contacts"),Object(i.b)("p",null,"If the person you contact initially is unavailable, contact the other person for your geo."),Object(i.b)("p",null,"Example: A seller in the Americas would contact Chris Marvin initially. If he’s unavailable, that seller would then contact the tech sales contact for Americas (Ganeshram Boodhoo)."),Object(i.b)("p",null,"You can also use the ",Object(i.b)("strong",{parentName:"p"},"Everybody else")," contacts."),Object(i.b)("h3",null,"Turnaround"),Object(i.b)("p",null,"The turnaround time for requests to access the environment is two business days."),Object(i.b)("hr",null))}A.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-100-watson-aiops-observability-demo-preparation-mdx-b42568656831b1474f57.js.map