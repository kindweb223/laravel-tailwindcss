(window.webpackJsonp=window.webpackJsonp||[]).push([[3,15],{"+SZM":function(t,e,s){"use strict";var a={components:{Logo:s("lrC8").a},data:function(){return{open:!1}},methods:{handleFocusOut:function(){this.open=!1}},props:{routes:Array}},l=s("KHd+"),r={components:{YayHeader:Object(l.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"flex items-center justify-between flex-wrap bg-gray-100 px-6 py-2 border-b border-blue-100 shadow-lg mb-4"},[s("div",{staticClass:"flex items-center flex-no-shrink text-white mr-6"},[s("logo",{staticClass:"h-8"})],1),t._v(" "),s("div",{staticClass:"block lg:hidden"},[s("button",{staticClass:"flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white",on:{click:function(e){t.open=!t.open}}},[s("svg",{staticClass:"h-3 w-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("title",[t._v("Menu")]),t._v(" "),s("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])])]),t._v(" "),s("div",{staticClass:"block w-full flex-grow lg:flex lg:items-center lg:w-auto",class:t.open?"block":"hidden",attrs:{tabindex:"0"},on:{focusout:t.handleFocusOut}},[s("div",{staticClass:"text-sm lg:flex-grow"},t._l(t.routes,(function(e){return s("inertia-link",{key:e.route,staticClass:"block mt-4 lg:inline-block lg:mt-0 mr-4",attrs:{href:t.route(e.route)}},[t._v("\n                "+t._s(e.label)+"\n            ")])})),1),t._v(" "),s("div",[s("inertia-link",{staticClass:"inline-block text-sm px-4 py-2 leading-none border rounded hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0",attrs:{href:t.route("logout"),method:"post"}},[t._v("Logout")])],1)])])}),[],!1,null,null,null).exports}},n=Object(l.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative"},[s("yay-header",{attrs:{routes:t.$page.routes}}),t._v(" "),t.$page.flash.success?s("span",{staticClass:"flex rounded shadow-xlw-100 p-5 m-5 bg-blue-500  text-white font-bold"},[t._v(t._s(t.$page.flash.success))]):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},0:function(t,e){},"33Wh":function(t,e,s){var a=s("yoRg"),l=s("eDl+");t.exports=Object.keys||function(t){return a(t,l)}},DORU:function(t,e,s){"use strict";var a={props:{links:Array}},l=s("KHd+"),r=Object(l.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-6 -mb-1 flex flex-wrap"},[t._l(t.links,(function(e,a){return[null===e.url?s("div",{key:a,staticClass:"mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400",class:{"ml-auto":"Next"===e.label}},[t._v("\n            "+t._s(e.label)+"\n        ")]):s("inertia-link",{key:a,staticClass:"mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500",class:{"bg-white":e.active,"ml-auto":"Next"===e.label},attrs:{href:e.url}},[t._v(t._s(e.label))])]}))],2)}),[],!1,null,null,null);e.a=r.exports},JsjC:function(t,e,s){"use strict";var a={props:{video:{type:Object,default:function(){return{}}},displayTitle:{type:Boolean,default:!1}}},l=s("KHd+"),r=Object(l.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.video?s("table",{staticClass:"flex table table-auto w-full text-xs"},[t.displayTitle?s("tr",[s("td",[t._v("Filename")]),t._v(" "),s("td",[s("strong",[t._v(t._s(t.video.original_name))])])]):t._e(),t._v(" "),s("tr",[s("td",[t._v("Duration")]),t._v(" "),s("td",[t._v(t._s(t.video.duration))])]),t._v(" "),s("tr",[s("td",[t._v("Framerate")]),t._v(" "),s("td",[t._v("\n            "+t._s(Math.round(t.video.framerate))+"\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("Dimensions")]),t._v(" "),s("td",[t._v(t._s(t.video.width)+"x"+t._s(t.video.height))])]),t._v(" "),s("tr",[s("td",[t._v("Codec")]),t._v(" "),s("td",[t._v("\n            "+t._s(t.video.codec)+"\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("Uploaded")]),t._v(" "),s("td",[t._v("\n            "+t._s(t.video.uploaded_at)+"\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("4K")]),t._v(" "),s("td",[t._v("\n            "+t._s(1==t.video["4k"]?"Yes":"No")+"\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("Size")]),t._v(" "),s("td",[t._v(t._s(t.video.size)+" MB")])])]):t._e()}),[],!1,null,null,null);e.a=r.exports},UtYB:function(t,e,s){"use strict";var a=s("8OJ3"),l={name:"VideoPlayer",props:{poster:{type:String,required:!0},src:{type:String,required:!0},autoplay:{type:Boolean,default:!0},controls:{type:Boolean,default:!0}},watch:{src:function(t,e){t!=e&&this.player&&(this.player.src({type:"video/mp4",src:t}),this.player.poster(this.poster))}},data:function(){return{options:{poster:this.poster,autoplay:!0,muted:!0,controls:this.controls,loop:!0,fluid:!0,sources:[{src:this.src,type:"video/mp4"}]},player:null,preload:"metadata"}},mounted:function(){this.player=Object(a.a)(this.$refs.videoPlayer,this.options,(function(){}))},beforeDestroy:function(){this.player&&this.player.dispose()}},r=s("KHd+"),n=Object(r.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("video",{ref:"videoPlayer",staticClass:"video-js"})}),[],!1,null,null,null);e.a=n.exports},VMDh:function(t,e,s){"use strict";s.r(e);var a=s("UtYB"),l=void 0,r={components:{VideoPlayer:a.a},props:["video"],data:function(){return{src:null}},methods:{getVideo:function(){var t=this;this.$http.get("/api/video/full/"+this.video.file_uuid).then((function(e){t.src=t.video.preview}))},close:function(){this.src=null,this.$emit("preview-close")},closeOnEscape:function(t){"Escape"!=t.code&&27!=t.keyCode||l.close()}},created:function(){window.addEventListener("keyup",this.closeOnEscape)},beforeDestroy:function(){window.removeEventListener("keyup",this.closeOnEscape)}},n=s("KHd+"),i=Object(n.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.video?s("div",{staticClass:"fixed right-0 bottom-0 w-full md:w-2/4 md:m-16 shadow-2xl",on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.close(e)}}},[s("button",{staticClass:"rounded-full w-12 h-12 -ml-6 -mt-6 bg-blue-500 text-white absolute left-0 top-0 z-20",attrs:{"aria-label":"close"},on:{click:t.close}},[s("svg",{staticClass:"w-12 h-12 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),s("path",{attrs:{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}})])]),t._v(" "),t.video.preview?s("video-player",{attrs:{poster:t.video.thumbnail,src:t.video.preview}}):t._e()],1):t._e()}),[],!1,null,null,null);e.default=i.exports},Xd28:function(t,e,s){"use strict";var a={props:{title:{type:String}}},l=s("KHd+"),r=Object(l.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rounded border shadow-lg m-5 p-5 bg-white"},[this.title?e("h2",{staticClass:"text-lg mb-5 font-bold text-lg text-gray-700"},[this._v("\n        "+this._s(this.title)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},YNrV:function(t,e,s){"use strict";var a=s("g6v/"),l=s("0Dky"),r=s("33Wh"),n=s("dBg+"),i=s("0eef"),o=s("ewvW"),c=s("RK3t"),d=Object.assign,u=Object.defineProperty;t.exports=!d||l((function(){if(a&&1!==d({b:1},d(u({},"a",{enumerable:!0,get:function(){u(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},s=Symbol();return t[s]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=d({},t)[s]||"abcdefghijklmnopqrst"!=r(d({},e)).join("")}))?function(t,e){for(var s=o(t),l=arguments.length,d=1,u=n.f,v=i.f;l>d;)for(var p,h=c(arguments[d++]),f=u?r(h).concat(u(h)):r(h),_=f.length,m=0;_>m;)p=f[m++],a&&!v.call(h,p)||(s[p]=h[p]);return s}:d},ewvW:function(t,e,s){var a=s("HYAF");t.exports=function(t){return Object(a(t))}},kVI2:function(t,e,s){"use strict";s.r(e);s("zKZe");var a=s("+SZM"),l=s("Xd28"),r=s("JsjC"),n=s("VMDh"),i=s("DORU"),o={layout:a.a,metaInfo:{title:"Video Approval"},components:{Card:l.a,VideoMetainfo:r.a,Preview:n.default,Pagination:i.a},props:{videos:{type:Object},contributors:{type:Array},perpage:{default:20},contributor:{default:null}},data:function(){return{sending:!1,preview:null,selected:[],selectall:!1}},methods:{previewVideo:function(t){this.preview=t},routeParams:function(t){var e={};return this.contributor&&(e.contributor=this.contributor),this.perpage&&(e.perpage=this.perpage),Object.assign(e,t)},select:function(){if(this.selected=[],!this.selectall)for(var t in this.videos.data)this.selected.push(this.videos.data[t].id)},approveVideos:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,s=[];e?s.push(e):s=this.selected,s.length&&(this.sending=!0,this.$inertia.post(route("admin.videos.approve"),{videos:s}).then((function(){t.sending=!1})))},rejectVideos:function(t){var e=this,s=[];t?s.push(t):s=this.selected,s.length&&(this.sending=!0,this.$inertia.post(route("admin.videos.reject"),{videos:s}).then((function(){e.sending=!1})))}}},c=s("KHd+"),d=Object(c.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex"},[s("card",{staticClass:"w-full",attrs:{title:"Video Approval Queue"}},[s("div",{staticClass:"md:flex justify-between"},[s("ul",{staticClass:"w-full flex flex-1 flex-wrap items-center pb-5"},[s("li",{staticClass:"p-1 text-xs font-bold uppercase"},[t._v("\n                    Filter By User:\n                ")]),t._v(" "),t._l(t.contributors,(function(e){return s("li",{key:e.id,staticClass:"p-1"},[s("inertia-link",{staticClass:"btn btn-primary text-xs",attrs:{href:t.route("admin.videos",t.routeParams({contributor:e.uid}))}},[t._v(t._s(e.user.username)+" ("+t._s(e.video_count)+")\n                    ")])],1)}))],2),t._v(" "),s("ul",{staticClass:"flex flex-wrap items-center pb-5"},[s("li",{staticClass:"p-1 text-xs font-bold uppercase"},[t._v("\n                    Items:\n                ")]),t._v(" "),s("li",{staticClass:"p-1"},[s("inertia-link",{staticClass:"btn btn-primary text-xs",class:{active:20==t.perpage},attrs:{href:t.route("admin.videos",t.routeParams({perpage:20}))}},[t._v("20\n                    ")])],1),t._v(" "),s("li",{staticClass:"p-1"},[s("inertia-link",{staticClass:"btn btn-primary text-xs",class:{active:50==t.perpage},attrs:{href:t.route("admin.videos",t.routeParams({perpage:50}))}},[t._v("50\n                    ")])],1),t._v(" "),s("li",{staticClass:"p-1"},[s("inertia-link",{staticClass:"btn btn-primary text-xs",class:{active:100==t.perpage},attrs:{href:t.route("admin.videos",t.routeParams({perpage:100}))}},[t._v("100\n                    ")])],1),t._v(" "),t.selected.length?s("li",{staticClass:"flex text-xs items-center pl-2"},[s("strong",[t._v("SELECTED:")]),t._v(" "),s("button",{staticClass:"btn btn-primary text-xs",on:{click:function(e){return t.approveVideos()}}},[t._v("\n                        Accept\n                    ")]),t._v(" "),s("button",{staticClass:"btn btn-danger text-xs",on:{click:function(e){return t.rejectVideos()}}},[t._v("\n                        Reject\n                    ")])]):t._e()])]),t._v(" "),s("table",{staticClass:"table table-auto flex w-full"},[s("thead",[s("tr",{staticClass:"border-b text-xs"},[s("th",{staticClass:"text-base"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectall,expression:"selectall"}],staticClass:"mb-1",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selectall)?t._i(t.selectall,null)>-1:t.selectall},on:{click:function(e){return t.select()},change:function(e){var s=t.selectall,a=e.target,l=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&(t.selectall=s.concat([null])):r>-1&&(t.selectall=s.slice(0,r).concat(s.slice(r+1)))}else t.selectall=l}}})]),t._v(" "),s("th",[t._v("Thumb/Preview")]),t._v(" "),s("th",[t._v("Title/Description")]),t._v(" "),s("th",[t._v("Keywords")]),t._v(" "),s("th",[t._v("Media Releases")]),t._v(" "),s("th",[t._v("Meta Information")]),t._v(" "),s("th",[t._v("Actions")])])]),t._v(" "),s("tbody",t._l(t.videos.data,(function(e){return s("tr",{key:e.id,staticClass:"border-b"},[s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.selected)?t._i(t.selected,e.id)>-1:t.selected},on:{change:function(s){var a=t.selected,l=s.target,r=!!l.checked;if(Array.isArray(a)){var n=e.id,i=t._i(a,n);l.checked?i<0&&(t.selected=a.concat([n])):i>-1&&(t.selected=a.slice(0,i).concat(a.slice(i+1)))}else t.selected=r}}})]),t._v(" "),s("td",{staticClass:"w-56 p-1"},[s("button",{on:{click:function(s){return t.previewVideo(e)}}},[s("img",{attrs:{src:e.thumbnail}})])]),t._v(" "),s("td",[s("ul",{staticClass:"list-none text-sm p-2"},[s("li",{staticClass:"mb"},[s("strong",[t._v("title:")]),t._v(" "+t._s(e.title)+"\n                            ")]),t._v(" "),s("li",{staticClass:"mb"},[s("strong",[t._v("description:")]),t._v(t._s(e.description)+"\n                            ")]),t._v(" "),s("li",{staticClass:"mb"},[s("strong",[t._v("by:")]),t._v(t._s(e.user.username)+"\n                            ")])])]),t._v(" "),s("td",{staticClass:"text-xs"},[e.keywords.length>0?s("ul",{staticClass:"list-none flex flex-wrap p-1"},t._l(e.keywords,(function(e){return s("li",{key:e,staticClass:"p-1 m-1 block border rounded text-blue-500 border-blue-500"},[t._v("\n                                "+t._s(e)+"\n                            ")])})),0):s("strong",{staticClass:"p-1"},[t._v("No Keywords.")])]),t._v(" "),s("td",[s("ul",{staticClass:"text-sm"},[s("li",{staticClass:"p-1"},[s("strong",[t._v("people:")]),t._v("\n                                "+t._s(e.people?"Yes":"No")+"\n                            ")]),t._v(" "),e.num_people?s("li",{staticClass:"p-1"},[s("strong",[t._v("number of people")]),t._v(t._s(e.num_people)+"\n                            ")]):t._e(),t._v(" "),t._l(e.releases,(function(a){return e.releases.length?s("li",{key:a.id,staticClass:"p-1"},[s("a",{staticClass:"text-blue-500 flex items-center",attrs:{href:t.route("release.download",{id:a.file_uuid})}},[s("svg",{staticClass:"fill-current w-4 inline-block mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),s("path",{attrs:{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}})]),t._v(" "),s("span",[t._v(" "+t._s(a.filename))])])]):t._e()})),t._v(" "),e.editorial?s("li",{staticClass:"p-1"},[s("strong",[t._v("Editorial:")]),t._v(" Yes\n                            ")]):t._e(),t._v(" "),e.nsfw?s("li",{staticClass:"p-1"},[s("strong",[t._v("NSFW:")]),t._v(" Yes\n                            ")]):t._e()],2)]),t._v(" "),s("td",{staticClass:"md:w-1/4 p-1"},[s("video-metainfo",{attrs:{video:e,"display-title":""}})],1),t._v(" "),s("td",{},[s("div",{staticClass:"flex flex-col justify-center items-center"},[s("button",{staticClass:"btn btn-primary text-xs",on:{click:function(s){return t.approveVideos(e.id)}}},[t._v("\n                                Accept\n                            ")]),t._v(" "),s("button",{staticClass:"btn btn-danger text-xs",on:{click:function(s){return t.rejectVideos(e.id)}}},[t._v("\n                                Reject\n                            ")])])])])})),0)]),t._v(" "),s("Pagination",{attrs:{links:t.videos.links}})],1),t._v(" "),s("preview",{attrs:{video:t.preview},on:{"preview-close":function(e){t.preview=null}}})],1)}),[],!1,null,null,null);e.default=d.exports},lrC8:function(t,e,s){"use strict";var a={},l=s("KHd+"),r=Object(l.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 668.68 153.6"}},[e("defs"),e("g",{attrs:{"data-name":"Group 9"}},[e("g",{attrs:{fill:"#333","data-name":"Group 5"}},[e("path",{attrs:{d:"M223.36 59l13.47 24.33L250.35 59h8.34l-18.04 31.17v17.35h-7.72V90.03L214.96 59z","data-name":"Path 15"}}),e("path",{attrs:{d:"M263.95 107.52L283.49 59h6.3l19.47 48.52h-8.14l-5.19-13.19h-18.72l-5.06 13.19zm22.69-39.97l-8.06 21.1h15.85z","data-name":"Path 16"}}),e("path",{attrs:{d:"M322.85 59l13.47 24.33L349.84 59h8.34l-18.04 31.17v17.35h-7.72V90.03L314.45 59z","data-name":"Path 17"}}),e("path",{attrs:{d:"M373.9 107.52V59.07h4.72v48.45z","data-name":"Path 18"}}),e("path",{attrs:{d:"M443.46 107.52V67.68l-17.7 30.82h-2.8l-17.77-30.82v39.84h-4.71V59h4.85l19 33.22 19-33.22h4.85v48.52z","data-name":"Path 19"}}),e("path",{attrs:{d:"M464.91 107.52L485.21 59h3.9l20.29 48.52h-5.13L498 92.35h-21.8l-6.22 15.17zm22.28-42.91l-9.98 23.98h19.7z","data-name":"Path 20"}}),e("path",{attrs:{d:"M561.13 100.48q-6.77 7.38-15.51 7.38a19.54 19.54 0 01-9.05-2.12 23.95 23.95 0 01-7.19-5.6 26.35 26.35 0 01-4.74-7.89 24.78 24.78 0 01-1.71-9.05 26.22 26.22 0 011.67-9.3 25.35 25.35 0 014.65-7.82 22.57 22.57 0 017.1-5.4 20.3 20.3 0 019-2.02 24.85 24.85 0 016.45.79 20.01 20.01 0 015.19 2.18 17.23 17.23 0 014 3.35 20.16 20.16 0 012.87 4.27l-3.69 2.46a15.67 15.67 0 00-6.21-6.62 17.62 17.62 0 00-8.68-2.12 15.4 15.4 0 00-7.28 1.7 17.58 17.58 0 00-5.54 4.55 20.78 20.78 0 00-3.52 6.49 23.56 23.56 0 00-1.22 7.55 21.82 21.82 0 001.4 7.79 20.8 20.8 0 003.86 6.46 18.7 18.7 0 005.78 4.4 16.01 16.01 0 007.2 1.64 17 17 0 007.93-1.95 24.12 24.12 0 007.24-6.11v-8.13H550.4v-3.69h14.83v23.85h-4.1z","data-name":"Path 21"}}),e("path",{attrs:{d:"M617.5 103.28v4.24h-32.6V59h31.98v4.24h-27.26v17.5h23.78v4.02h-23.78v18.52z","data-name":"Path 22"}}),e("path",{attrs:{d:"M664.04 68.1a14.75 14.75 0 00-5.5-3.77 20.06 20.06 0 00-7.76-1.43c-4.33 0-7.47.8-9.43 2.43a8.09 8.09 0 00-2.93 6.59 7.27 7.27 0 00.78 3.59 6.84 6.84 0 002.46 2.42 17.8 17.8 0 004.23 1.78q2.57.75 6.05 1.5a69.45 69.45 0 016.97 1.81 19.28 19.28 0 015.26 2.53 10.44 10.44 0 013.35 3.76 11.7 11.7 0 011.17 5.5 12.36 12.36 0 01-1.3 5.81 11.62 11.62 0 01-3.63 4.1 16.23 16.23 0 01-5.53 2.43 29.5 29.5 0 01-6.97.78 28.63 28.63 0 01-19.48-7.03l2.32-3.9a21.54 21.54 0 007.18 4.75 25.11 25.11 0 0010.04 1.94q5.81 0 9.1-2.08a6.97 6.97 0 003.27-6.32 7.25 7.25 0 00-.92-3.8 8 8 0 00-2.77-2.66 19.4 19.4 0 00-4.61-1.94c-1.84-.55-3.98-1.1-6.39-1.64-2.55-.6-4.78-1.21-6.7-1.85a17.45 17.45 0 01-4.82-2.4 9.4 9.4 0 01-2.93-3.44 11.2 11.2 0 01-1-4.95 13.7 13.7 0 011.27-5.99 11.86 11.86 0 013.55-4.37 16.51 16.51 0 015.47-2.66 24.95 24.95 0 017-.92 23.7 23.7 0 018.58 1.46 23.3 23.3 0 016.87 4.14z","data-name":"Path 23"}})]),e("g",{attrs:{"data-name":"Group 7"}},[e("g",{attrs:{fill:"#61bbff","data-name":"Group 6"}},[e("path",{attrs:{d:"M147.61 86.67a47.06 47.06 0 01-77.33 36.27l-21.33 21.33h133.11a4.04 4.04 0 004.04-4.04V33.1a4.04 4.04 0 00-4.04-4.03h-17.9L136.6 56.64a46.88 46.88 0 0111.02 30.03z","data-name":"Path 24"}}),e("path",{attrs:{d:"M100.3 48.2a38.26 38.26 0 00-30.02 62.24l53.8-53.8a38.08 38.08 0 00-23.78-8.44z","data-name":"Path 25"}})])]),e("g",{attrs:{fill:"#333","data-name":"Group 8",transform:"translate(-698.4 -289.55)"}},[e("path",{attrs:{d:"M855.55 438.24v4.91h19.73a13.37 13.37 0 0013.37-13.37V322.65a13.37 13.37 0 00-13.37-13.37h-43.43v4.91l4.82-.96c0-.01-.44-2.18-1.94-9.92a30.38 30.38 0 00-1.58-5.73 11.86 11.86 0 00-5.86-6.5c-2.75-1.3-5.57-1.52-8.83-1.53h-49.87a26.6 26.6 0 00-6.04.56 11.64 11.64 0 00-7.3 4.9 22.5 22.5 0 00-2.93 8.3c-1.5 7.74-1.93 9.91-1.94 9.92l4.82.96v-4.91h-43.43a13.37 13.37 0 00-13.37 13.37v107.13a13.37 13.37 0 0013.37 13.37h143.78v-9.82H711.77a3.55 3.55 0 01-3.55-3.55V322.65a3.55 3.55 0 013.55-3.54h43.43a4.91 4.91 0 004.82-3.95l1.94-9.99a21.31 21.31 0 011.03-3.87c.57-1.22.61-1.1 1.01-1.36a11.77 11.77 0 014.6-.57h49.86a17.47 17.47 0 013.8.3c1.16.36.98.34 1.37.79a14.16 14.16 0 011.45 4.71c1.5 7.76 1.94 9.97 1.95 9.99a4.9 4.9 0 004.82 3.94h43.43a3.55 3.55 0 013.55 3.55v107.13a3.55 3.55 0 01-3.55 3.55h-19.73z","data-name":"Path 26"}}),e("path",{attrs:{d:"M836.41 376.22H832a38.46 38.46 0 11-11.27-27.2 38.33 38.33 0 0111.27 27.2h8.84a47.3 47.3 0 10-47.3 47.3 47.3 47.3 0 0047.3-47.3z","data-name":"Path 27"}}),e("path",{attrs:{d:"M857.77 311.97a4.91 4.91 0 00-6.95 0l-30.45 30.45a4.73 4.73 0 00-.63.96 50.69 50.69 0 015.83 4.91l1.14 1.48a4.46 4.46 0 00.61-.4l30.45-30.45a4.91 4.91 0 000-6.95z","data-name":"Path 28"}}),e("path",{attrs:{d:"M734.63 441.37l31.7-31.7a4.42 4.42 0 10-6.26-6.26l-31.7 31.7a4.42 4.42 0 006.26 6.26","data-name":"Path 29"}}),e("circle",{attrs:{cx:"5.22",cy:"5.22",r:"5.22","data-name":"Ellipse 1",transform:"translate(718.7 331.91)"}}),e("path",{attrs:{d:"M843.95 305.2h27.63a4.91 4.91 0 000-9.82h-27.63a4.91 4.91 0 000 9.82","data-name":"Path 30"}})])])])}),[],!1,null,null,null);e.a=r.exports},zKZe:function(t,e,s){var a=s("I+eb"),l=s("YNrV");a({target:"Object",stat:!0,forced:Object.assign!==l},{assign:l})}}]);