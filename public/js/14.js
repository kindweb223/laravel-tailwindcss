(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{0:function(e,t){},UtYB:function(e,t,s){"use strict";var o=s("8OJ3"),i={name:"VideoPlayer",props:{poster:{type:String,required:!0},src:{type:String,required:!0},autoplay:{type:Boolean,default:!0},controls:{type:Boolean,default:!0}},watch:{src:function(e,t){e!=t&&this.player&&(this.player.src({type:"video/mp4",src:e}),this.player.poster(this.poster))}},data:function(){return{options:{poster:this.poster,autoplay:!0,muted:!0,controls:this.controls,loop:!0,fluid:!0,sources:[{src:this.src,type:"video/mp4"}]},player:null,preload:"metadata"}},mounted:function(){this.player=Object(o.a)(this.$refs.videoPlayer,this.options,(function(){}))},beforeDestroy:function(){this.player&&this.player.dispose()}},n=s("KHd+"),r=Object(n.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("video",{ref:"videoPlayer",staticClass:"video-js"})}),[],!1,null,null,null);t.a=r.exports},VMDh:function(e,t,s){"use strict";s.r(t);var o=s("UtYB"),i=void 0,n={components:{VideoPlayer:o.a},props:["video"],data:function(){return{src:null}},methods:{getVideo:function(){var e=this;this.$http.get("/api/video/full/"+this.video.file_uuid).then((function(t){e.src=t.data.src}))},close:function(){this.src=null,this.$emit("preview-close")},closeOnEscape:function(e){"Escape"!=e.code&&27!=e.keyCode||i.close()}},created:function(){window.addEventListener("keyup",this.closeOnEscape)},beforeDestroy:function(){window.removeEventListener("keyup",this.closeOnEscape)}},r=s("KHd+"),l=Object(r.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.video?s("div",{staticClass:"fixed right-0 bottom-0 w-full md:w-2/4 md:m-16 shadow-2xl",on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.close(t)}}},[s("button",{staticClass:"rounded-full w-12 h-12 -ml-6 -mt-6 bg-blue-500 text-white absolute left-0 top-0 z-20",attrs:{"aria-label":"close"},on:{click:e.close}},[s("svg",{staticClass:"w-12 h-12 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),e._v(" "),s("path",{attrs:{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}})])]),e._v(" "),e.video.preview?s("video-player",{attrs:{poster:e.video.thumbnail,src:e.src}}):e._e()],1):e._e()}),[],!1,null,null,null);t.default=l.exports}}]);