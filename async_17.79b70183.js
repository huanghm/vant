(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{117:function(t,n,e){"use strict";var o=e(59);e.n(o).a},118:function(t,n,e){(t.exports=e(10)(!1)).push([t.i,"\n.demo-image-preview .van-button {\n  margin-left: 15px;\n}\n.van-image-preview img {\n  -webkit-user-drag: none;\n}\n",""])},277:function(t,n,e){"use strict";e.r(n);var o=e(5),i=["https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg","https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg","https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg","https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg"],c={i18n:{"zh-CN":{button1:"预览图片",button2:"指定初始位置",button3:"手动关闭"},"en-US":{button1:"Show Images",button2:"Custom Start Position",button3:"Close Manually"}},methods:{showImagePreview:function(t,n){var e=Object(o.a)({images:i,startPosition:"number"==typeof t?t:0});n&&setTimeout(function(){e.close()},n)}}},s=(e(117),e(0)),a=Object(s.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("demo-section",[e("demo-block",{attrs:{title:t.$t("basicUsage")}},[e("van-button",{on:{click:t.showImagePreview}},[t._v(t._s(t.$t("button1")))])],1),e("demo-block",{attrs:{title:t.$t("button2")}},[e("van-button",{on:{click:function(n){t.showImagePreview(1)}}},[t._v(t._s(t.$t("button2")))])],1),e("demo-block",{attrs:{title:t.$t("button3")}},[e("van-button",{on:{click:function(n){t.showImagePreview(0,1e3)}}},[t._v(t._s(t.$t("button3")))])],1)],1)},[],!1,null,null,null);a.options.__file="index.vue";n.default=a.exports},59:function(t,n,e){var o=e(118);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(11)(o,i);o.locals&&(t.exports=o.locals)}}]);