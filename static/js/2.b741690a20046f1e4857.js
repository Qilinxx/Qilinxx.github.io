(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{G7XR:function(t,e,n){},JFOO:function(t,e,n){},JTuA:function(t,e,n){"use strict";var i=n("JFOO");n.n(i).a},k4Nq:function(t,e,n){"use strict";var i=n("G7XR");n.n(i).a},pIus:function(t,e,n){"use strict";n.r(e);var i=n("GguQ"),l=n.n(i),a={name:"addArticle",data:function(){return{article:{title:"文章测试-标题",sort:"",top:!0,contentHtml:""},initData:"",restaurants:[]}},methods:{querySearch:function(t,e){var n=this.restaurants;e(t?n.filter(this.createFilter(t)):n)},createFilter:function(t){return function(e){return 0===e.value.toLowerCase().indexOf(t.toLowerCase())}},loadAll:function(){return[{value:"vue"},{value:"node.js"}]},handleSelect:function(t){console.log(t)},getContent:function(){alert(this.article.contentHtml)},submitArticle:function(){this.$axios.post("/article/addArticle",{data:this.article}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;this.restaurants=this.loadAll();var e=new l.a(this.$refs.editor);e.customConfig.onchange=function(e){t.article.contentHtml=e},e.customConfig.uploadImgServer="/editor/uploadImg",e.customConfig.uploadImgHooks={success:function(t,e,n){},fail:function(t,e,n){},error:function(t,e){},timeout:function(t,e){}},e.create()}},o=(n("k4Nq"),n("JTuA"),n("KHd+")),c=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"addArticle"},[n("el-form",{ref:"article",attrs:{inline:!0,model:t.article,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"文章标题"}},[n("el-input",{staticClass:"title",model:{value:t.article.title,callback:function(e){t.$set(t.article,"title",e)},expression:"article.title"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"标签"}},[n("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":t.querySearch,placeholder:"请输入内容"},on:{select:t.handleSelect},model:{value:t.article.sort,callback:function(e){t.$set(t.article,"sort",e)},expression:"article.sort"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"是否置顶"}},[n("el-switch",{model:{value:t.article.top,callback:function(e){t.$set(t.article,"top",e)},expression:"article.top"}})],1),t._v(" "),n("el-form-item",[n("el-button",{staticClass:"subBtn",attrs:{type:"primary"},on:{click:t.submitArticle}},[t._v("发布")]),t._v(" "),n("el-button",{staticClass:"subBtn",attrs:{type:"primary"},on:{click:t.getContent}},[t._v("获取内容")])],1)],1),t._v(" "),n("div",{ref:"editor",staticStyle:{"text-align":"left"}})],1)}),[],!1,null,"4cc547b7",null);e.default=c.exports}}]);
//# sourceMappingURL=2.b741690a20046f1e4857.js.map