(function(t){function e(e){for(var i,r,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"005e":function(t,e,n){"use strict";n("2240")},"121f":function(t,e,n){},"201f":function(t,e,n){"use strict";n("69fd")},2240:function(t,e,n){},2475:function(t,e,n){"use strict";n("7887")},"31d6":function(t,e,n){},"368f":function(t,e,n){},"3bd5":function(t,e,n){"use strict";n("31d6")},"3c0c":function(t,e,n){"use strict";n("af9a")},"3c4f":function(t,e,n){"use strict";n("d666")},4045:function(t,e,n){t.exports=n.p+"img/loading.7d26db10.svg"},"47b6":function(t,e,n){"use strict";n("f145")},"4b51":function(t,e,n){},5343:function(t,e,n){"use strict";n("88a4")},"536b":function(t,e,n){t.exports={message:"showMessage-module_message_3v7H3","message-info":"showMessage-module_message-info_1ZW3l","message-success":"showMessage-module_message-success_gMWiM","message-warn":"showMessage-module_message-warn_1Jfh3","message-error":"showMessage-module_message-error_2UIr3",icon:"showMessage-module_icon_3nHuj"}},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("96eb"),a=n.n(i);a.a.mock("/api/banner","get",{code:0,msg:"",data:[{id:"2",midImg:"http://mdrs.yuanjin.tech/img/20201031205550.jpg",bigImg:"http://mdrs.yuanjin.tech/img/20201031205551.jpg",title:"血火同源",description:"如果我回头，一切都完了"},{id:"1",midImg:"https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100",bigImg:"https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=1920&h=1080",title:"凛冬将至",description:"人唯有恐惧的时候方能勇敢"},{id:"3",midImg:"http://mdrs.yuanjin.tech/img/20201031204401.jpg",bigImg:"http://mdrs.yuanjin.tech/img/20201031204403.jpg",title:"听我怒吼",description:"兰尼斯特有债必偿"}]});var s=n("ade3"),r=n("b383"),o=n.n(r);a.a.mock("/api/blogtype","get",{code:0,msg:"","data|10-20":[{"id|+1":1,name:"分类@id","articleCount|0-300":0,"order|+1":1}]}),a.a.mock(/^\/api\/blog(\?.+)?$/,"get",(function(t){var e=o.a.parse(t.url);return a.a.mock({code:0,msg:"",data:Object(s["a"])({"total|2000-3000":0},"rows|".concat(e.limit||10),[{id:"@guid",title:"@ctitle(1, 50)",description:"@cparagraph(1, 10)",category:{"id|1-10":0,name:"分类@id"},"scanNumber|0-3000":0,"commentNumber|0-300":30,"thumb|1":[a.a.Random.image("300x250","#000","#fff","Random Image"),null],createDate:"@date('T')"}])})})),a.a.mock(/^\/api\/blog\/[^/]+$/,"get",{code:0,msg:"",data:{id:"@guid",title:"CORS跨域方案详解",category:{"id|1-10":1,name:"分类@id"},description:"@cparagraph(1, 10)","scanNumber|0-10000":0,"commentNumber|0-100":0,createDate:"@date('T')",toc:[{name:"概述",anchor:"article-md-title-1"},{name:"简单请求",anchor:"article-md-title-2",children:[{name:"简单请求的判定",anchor:"article-md-title-3"},{name:"简单请求的交互规范",anchor:"article-md-title-4"}]},{name:"需要预检的请求",anchor:"article-md-title-5"},{name:"附带身份凭证的请求",anchor:"article-md-title-6"},{name:"一个额外的补充",anchor:"article-md-title-7"}],"thumb|1":[a.a.Random.image("300x250","#000","#fff","Random Image"),null],htmlContent:'<blockquote>\n  <p>阅读本文，你需要首先知道：</p><ol>\n  <li>浏览器的同源策略</li>\n  <li>跨域问题</li>\n  <li>JSONP原理</li>\n  <li>cookie原理</li>\n  </ol>\n  </blockquote>\n  <p>JSONP并不是一个好的跨域解决方案，它至少有着下面两个严重问题：</p><ol>\n  <li><strong>会打乱服务器的消息格式</strong>：JSONP要求服务器响应一段JS代码，但在非跨域的情况下，服务器又需要响应一个正常的JSON格式</li>\n  <li><strong>只能完成GET请求</strong>：JSONP的原理会要求浏览器端生成一个<code>script</code>元素，而<code>script</code>元素发出的请求只能是<code>get</code>请求</li>\n  </ol>\n  <p>所以，CORS是一种更好的跨域解决方案。</p><h1 id="article-md-title-1">概述</h1><p><code>CORS</code>是基于<code>http1.1</code>的一种跨域解决方案，它的全称是<strong>C</strong>ross-<strong>O</strong>rigin <strong>R</strong>esource <strong>S</strong>haring，跨域资源共享。</p><p>它的总体思路是：<strong>如果浏览器要跨域访问服务器的资源，需要获得服务器的允许</strong></p><figure class="markdown-image">\n        \n        <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421152122793.png" title="image-20200421152122793" alt="image-20200421152122793">\n        <figcaption>image-20200421152122793</figcaption>\n    \n      </figure><p>而要知道，一个请求可以附带很多信息，从而会对服务器造成不同程度的影响</p><p>比如有的请求只是获取一些新闻，有的请求会改动服务器的数据</p><p>针对不同的请求，CORS规定了三种不同的交互模式，分别是：</p><ul>\n  <li><strong>简单请求</strong></li>\n  <li><strong>需要预检的请求</strong></li>\n  <li><strong>附带身份凭证的请求</strong></li>\n  </ul>\n  <p>这三种模式从上到下层层递进，请求可以做的事越来越多，要求也越来越严格。</p><p>下面分别说明三种请求模式的具体规范。</p><h1 id="article-md-title-2">简单请求</h1><p>当浏览器端运行了一段ajax代码（无论是使用XMLHttpRequest还是fetch api），浏览器会首先判断它属于哪一种请求模式</p><h2 id="article-md-title-3">简单请求的判定</h2><p>当请求<strong>同时满足</strong>以下条件时，浏览器会认为它是一个简单请求：</p><ol>\n  <li><p><strong>请求方法属于下面的一种：</strong></p><ul>\n  <li>get</li>\n  <li>post</li>\n  <li>head</li>\n  </ul>\n  </li>\n  <li><p><strong>请求头仅包含安全的字段，常见的安全字段如下：</strong></p><ul>\n  <li><code>Accept</code></li>\n  <li><code>Accept-Language</code></li>\n  <li><code>Content-Language</code></li>\n  <li><code>Content-Type</code></li>\n  <li><code>DPR</code></li>\n  <li><code>Downlink</code></li>\n  <li><code>Save-Data</code></li>\n  <li><code>Viewport-Width</code></li>\n  <li><code>Width</code></li>\n  </ul>\n  </li>\n  <li><p><strong>请求头如果包含<code>Content-Type</code>，仅限下面的值之一：</strong></p><ul>\n  <li><code>text/plain</code></li>\n  <li><code>multipart/form-data</code></li>\n  <li><code>application/x-www-form-urlencoded</code></li>\n  </ul>\n  </li>\n  </ol>\n  <p>如果以上三个条件同时满足，浏览器判定为简单请求。</p><p>下面是一些例子：</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);\n  \n  <span class="hljs-comment">// 请求方法不满足要求，不是简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">method</span>:<span class="hljs-string">"PUT"</span>\n  })\n  \n  <span class="hljs-comment">// 加入了额外的请求头，不是简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">headers</span>:{\n      <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>\n    }\n  })\n  \n  <span class="hljs-comment">// 简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>\n  })\n  \n  <span class="hljs-comment">// content-type不满足要求，不是简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>,\n    <span class="hljs-attr">headers</span>: {\n      <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n    }\n  })</code></pre>\n  <h2 id="article-md-title-4">简单请求的交互规范</h2><p>当浏览器判定某个<strong>ajax跨域请求</strong>是<strong>简单请求</strong>时，会发生以下的事情</p><ol>\n  <li><strong>请求头中会自动添加<code>Origin</code>字段</strong></li>\n  </ol>\n  <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);</code></pre>\n  <p>请求发出后，请求头会是下面的格式：</p><pre><code>GET /api/news/ HTTP/1.1\n  Host: crossdomain.com\n  Connection: keep-alive\n  ...\n  Referer: http://my.com/index.html\n  Origin: http://my.com</code></pre><p>看到最后一行没，<code>Origin</code>字段会告诉服务器，是哪个源地址在跨域请求</p><ol start="2">\n  <li><strong>服务器响应头中应包含<code>Access-Control-Allow-Origin</code></strong></li>\n  </ol>\n  <p>当服务器收到请求后，如果允许该请求跨域访问，需要在响应头中添加<code>Access-Control-Allow-Origin</code>字段</p><p>该字段的值可以是：</p><ul>\n  <li>*：表示我很开放，什么人我都允许访问</li>\n  <li>具体的源：比如<code>http://my.com</code>，表示我就允许你访问</li>\n  </ul>\n  <blockquote>\n  <p>实际上，这两个值对于客户端<code>http://my.com</code>而言，都一样，因为客户端才不会管其他源服务器允不允许，就关心自己是否被允许</p><p>当然，服务器也可以维护一个可被允许的源列表，如果请求的<code>Origin</code>命中该列表，才响应<code>*</code>或具体的源</p><p><strong>为了避免后续的麻烦，强烈推荐响应具体的源</strong></p></blockquote>\n  <p>假设服务器做出了以下的响应：</p><pre><code>HTTP/1.1 200 OK\n  Date: Tue, 21 Apr 2020 08:03:35 GMT\n  ...\n  Access-Control-Allow-Origin: http://my.com\n  ...\n  \n  消息体中的数据</code></pre><p>当浏览器看到服务器允许自己访问后，高兴的像一个两百斤的孩子，于是，它就把响应顺利的交给js，以完成后续的操作</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n        \n        <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421162846480.png" title="image-20200421162846480" alt="image-20200421162846480">\n        <figcaption>image-20200421162846480</figcaption>\n    \n      </figure><h1 id="article-md-title-5">需要预检的请求</h1><p>简单的请求对服务器的威胁不大，所以允许使用上述的简单交互即可完成。</p><p>但是，如果浏览器不认为这是一种简单请求，就会按照下面的流程进行：</p><ol>\n  <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n  <li><strong>服务器允许</strong></li>\n  <li><strong>浏览器发送真实请求</strong></li>\n  <li><strong>服务器完成真实的响应</strong></li>\n  </ol>\n  <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 需要预检的请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/user"</span>, {\n    <span class="hljs-attr">method</span>:<span class="hljs-string">"POST"</span>, <span class="hljs-comment">// post 请求</span>\n    <span class="hljs-attr">headers</span>:{  <span class="hljs-comment">// 设置请求头</span>\n      <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>,\n      <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>,\n      <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n    },\n    <span class="hljs-attr">body</span>: <span class="hljs-built_in">JSON</span>.stringify({ <span class="hljs-attr">name</span>: <span class="hljs-string">"袁小进"</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">18</span> }) <span class="hljs-comment">// 设置请求体</span>\n  });</code></pre>\n  <p>浏览器发现它不是一个简单请求，则会按照下面的流程与服务器交互</p><ol>\n  <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n  </ol>\n  <pre><code>OPTIONS /api/user HTTP/1.1\n  Host: crossdomain.com\n  ...\n  Origin: http://my.com\n  Access-Control-Request-Method: POST\n  Access-Control-Request-Headers: a, b, content-type</code></pre><p>可以看出，这并非我们想要发出的真实请求，请求中不包含我们的响应头，也没有消息体。</p><p>这是一个预检请求，它的目的是询问服务器，是否允许后续的真实请求。</p><p>预检请求<strong>没有请求体</strong>，它包含了后续真实请求要做的事情</p><p>预检请求有以下特征：</p><ul>\n  <li>请求方法为<code>OPTIONS</code></li>\n  <li>没有请求体</li>\n  <li>请求头中包含<ul>\n  <li><code>Origin</code>：请求的源，和简单请求的含义一致</li>\n  <li><code>Access-Control-Request-Method</code>：后续的真实请求将使用的请求方法</li>\n  <li><code>Access-Control-Request-Headers</code>：后续的真实请求会改动的请求头</li>\n  </ul>\n  </li>\n  </ul>\n  <ol start="2">\n  <li><strong>服务器允许</strong></li>\n  </ol>\n  <p>服务器收到预检请求后，可以检查预检请求中包含的信息，如果允许这样的请求，需要响应下面的消息格式</p><pre><code>HTTP/1.1 200 OK\n  Date: Tue, 21 Apr 2020 08:03:35 GMT\n  ...\n  Access-Control-Allow-Origin: http://my.com\n  Access-Control-Allow-Methods: POST\n  Access-Control-Allow-Headers: a, b, content-type\n  Access-Control-Max-Age: 86400\n  ...</code></pre><p>对于预检请求，不需要响应任何的消息体，只需要在响应头中添加：</p><ul>\n  <li><code>Access-Control-Allow-Origin</code>：和简单请求一样，表示允许的源</li>\n  <li><code>Access-Control-Allow-Methods</code>：表示允许的后续真实的请求方法</li>\n  <li><code>Access-Control-Allow-Headers</code>：表示允许改动的请求头</li>\n  <li><code>Access-Control-Max-Age</code>：告诉浏览器，多少秒内，对于同样的请求源、方法、头，都不需要再发送预检请求了</li>\n  </ul>\n  <ol start="3">\n  <li><strong>浏览器发送真实请求</strong></li>\n  </ol>\n  <p>预检被服务器允许后，浏览器就会发送真实请求了，上面的代码会发生下面的请求数据</p><pre><code>POST /api/user HTTP/1.1\n  Host: crossdomain.com\n  Connection: keep-alive\n  ...\n  Referer: http://my.com/index.html\n  Origin: http://my.com\n  \n  {"name": "袁小进", "age": 18 }</code></pre><ol start="4">\n  <li><strong>服务器响应真实请求</strong></li>\n  </ol>\n  <pre><code>HTTP/1.1 200 OK\n  Date: Tue, 21 Apr 2020 08:03:35 GMT\n  ...\n  Access-Control-Allow-Origin: http://my.com\n  ...\n  \n  添加用户成功</code></pre><p>可以看出，当完成预检之后，后续的处理与简单请求相同</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n        \n        <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421165913320.png" title="image-20200421165913320" alt="image-20200421165913320">\n        <figcaption>image-20200421165913320</figcaption>\n    \n      </figure><h1 id="article-md-title-6">附带身份凭证的请求</h1><p>默认情况下，ajax的跨域请求并不会附带cookie，这样一来，某些需要权限的操作就无法进行</p><p>不过可以通过简单的配置就可以实现附带cookie</p><pre><code class="language-js"><span class="hljs-comment">// xhr</span>\n  <span class="hljs-keyword">var</span> xhr = <span class="hljs-keyword">new</span> XMLHttpRequest();\n  xhr.withCredentials = <span class="hljs-literal">true</span>;\n  \n  <span class="hljs-comment">// fetch api</span>\n  fetch(url, {\n    <span class="hljs-attr">credentials</span>: <span class="hljs-string">"include"</span>\n  })</code></pre>\n  <p>这样一来，该跨域的ajax请求就是一个<em>附带身份凭证的请求</em></p><p>当一个请求需要附带cookie时，无论它是简单请求，还是预检请求，都会在请求头中添加<code>cookie</code>字段</p><p>而服务器响应时，需要明确告知客户端：服务器允许这样的凭据</p><p>告知的方式也非常的简单，只需要在响应头中添加：<code>Access-Control-Allow-Credentials: true</code>即可</p><p>对于一个附带身份凭证的请求，若服务器没有明确告知，浏览器仍然视为跨域被拒绝。</p><p>另外要特别注意的是：<strong>对于附带身份凭证的请求，服务器不得设置 <code>Access-Control-Allow-Origin 的值为*</code></strong>。这就是为什么不推荐使用*的原因</p><h1 id="article-md-title-7">一个额外的补充</h1><p>在跨域访问时，JS只能拿到一些最基本的响应头，如：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头。</p><p><code>Access-Control-Expose-Headers</code>头让服务器把允许浏览器访问的头放入白名单，例如：</p><pre><code>Access-Control-Expose-Headers: authorization, a, b</code></pre><p>这样JS就能够访问指定的响应头了。</p>'}}),a.a.mock("/api/comment","post",{code:0,msg:"",data:{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}}),a.a.mock(/^\/api\/comment\/?(\?.+)?$/,"get",(function(t){var e=o.a.parse(t.url);return a.a.mock({code:0,msg:"",data:Object(s["a"])({"total|50-200":0},"rows|".concat(e.limit||10),[{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}])})})),a.a.setup({timeout:"1000-2000"});var c=n("2b0e"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("Layout",{scopedSlots:t._u([{key:"left",fn:function(){return[n("div",{staticClass:"aside"},[n("SiteAside")],1)]},proxy:!0},{key:"default",fn:function(){return[n("RouterView")]},proxy:!0}])})],1)},u=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-container"},[n("div",{staticClass:"left"},[t._t("left")],2),n("div",{staticClass:"main"},[t._t("default")],2),n("div",{staticClass:"right"},[t._t("right")],2)])},d=[],h={},m=h,g=(n("2475"),n("2877")),f=Object(g["a"])(m,p,d,!1,null,"474abcd6",null),v=f.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site-aside-container"},[n("Avatar",{attrs:{url:"https://p1.ssl.qhimg.com/dr/270_500_/t01f517f2fd44f3ee24.png?size=332x362"}}),n("h1",{staticClass:"title"},[t._v("你好，董凤博")]),n("Menu"),n("Contact"),n("p",{staticClass:"footer"},[t._v("黑ICP备17001719号")])],1)},y=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"avatar-container",style:{width:t.size+"px",height:t.size+"px"},attrs:{src:t.url}})},_=[],j=(n("a9e3"),{props:{url:{type:String,required:!0},size:{type:Number,default:150}}}),x=j,C=(n("704b"),Object(g["a"])(x,w,_,!1,null,"149cf706",null)),O=C.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"menu-container"},t._l(t.items,(function(e){return n("RouterLink",{key:e.link,attrs:{exact:e.exact,to:{name:e.name},"active-class":"selected","exact-active-class":""}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:e.icon}})],1),n("span",[t._v(t._s(e.title))])])})),1)},S=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"iconfont icon-container",class:t.fontClass})},T=[],L=(n("b64b"),{home:"iconzhuye",success:"iconzhengque",error:"iconcuowu",close:"iconguanbi",warn:"iconjinggao",info:"iconxinxi",blog:"iconblog",code:"iconcode",about:"iconset_about_hov",weixin:"iconweixin",mail:"iconemail",github:"icongithub",qq:"iconsign_qq",arrowUp:"iconiconfonticonfonti2copy",arrowDown:"iconiconfonticonfonti2",empty:"iconempty",chat:"iconliuyan"}),R=(Object.keys(L),{props:{type:{type:String,required:!0}},computed:{fontClass:function(){return L[this.type]}}}),A=R,I=(n("9e71"),Object(g["a"])(A,$,T,!1,null,"2cacee20",null)),z=I.exports,M={components:{Icon:z},data:function(){return{items:[{name:"Home",title:"首页",icon:"home",exact:!0},{name:"Blog",title:"文章",icon:"blog",exact:!1},{name:"About",title:"关于我",icon:"about",exact:!0},{name:"Project",title:"项目&效果",icon:"code",exact:!0},{name:"Message",title:"留言板",icon:"chat",exact:!0}]}}},q=M,E=(n("3bd5"),Object(g["a"])(q,k,S,!1,null,"2c896c50",null)),N=E.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"contact-container"},[n("li",[n("a",{attrs:{href:""}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"github"}})],1),n("span",[t._v("dong-fb")])])]),n("li",[n("a",{attrs:{href:"mailto:23423424234@qq.com"}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"mail"}})],1),n("span",[t._v("893605141@qq.com")])])]),n("li",[n("a",{attrs:{href:"tencent://message/?Menu=yes&uin=3263023350&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"qq"}})],1),n("span",[t._v("893605141")])]),t._m(0)]),n("li",[n("a",[n("div",{staticClass:"icon weixin"},[n("Icon",{attrs:{type:"weixin"}})],1),n("span",[t._v("dongfengbo")])]),t._m(1)])])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pop"},[n("img",{attrs:{src:"http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pop"},[n("img",{attrs:{src:"https://p1.ssl.qhimgs1.com/sdr/400__/t0153fb8b6899949111.png",alt:""}})])}],H={components:{Icon:z}},B=H,W=(n("201f"),Object(g["a"])(B,D,P,!1,null,"5325b014",null)),J=W.exports,Y={components:{Avatar:O,Menu:N,Contact:J}},X=Y,G=(n("cba0"),Object(g["a"])(X,b,y,!1,null,"2c043834",null)),K=G.exports,U={components:{Layout:v,SiteAside:K}},F=U,V=(n("3c4f"),Object(g["a"])(F,l,u,!1,null,"093a27ba",null)),Z=V.exports,Q=(n("4b51"),n("8c4f")),tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],ref:"container",staticClass:"home-container",on:{wheel:t.handleWheel}},[n("ul",{staticClass:"carousel-container",style:{marginTop:t.marginTop},on:{transitionend:t.handleTransitionEnd}},t._l(t.data,(function(t){return n("li",{key:t.id},[n("CarouselItem",{attrs:{carousel:t}})],1)})),0),n("div",{directives:[{name:"show",rawName:"v-show",value:t.index>=1,expression:"index >= 1"}],staticClass:"icon icon-up",on:{click:function(e){return t.switchTo(t.index-1)}}},[n("Icon",{attrs:{type:"arrowUp"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.index<t.data.length-1,expression:"index < data.length - 1"}],staticClass:"icon icon-down",on:{click:function(e){return t.switchTo(t.index+1)}}},[n("Icon",{attrs:{type:"arrowDown"}})],1),n("ul",{staticClass:"indicator"},t._l(t.data,(function(e,i){return n("li",{key:e.id,class:{active:i===t.index},on:{click:function(e){return t.switchTo(i)}}})})),0)])},et=[],nt=(n("96cf"),n("1da1")),it=n("bc3a"),at=n.n(it),st=(n("99af"),function(t,e){var n=new c["a"]({render:function(n){return n(t,{props:e})}});return n.$mount(),n.$el}),rt=n("536b"),ot=n.n(rt),ct=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.content||"",n=t.type||"info",i=t.duration||2e3,a=t.container||document.body,s=document.createElement("div"),r=st(z,{type:n});s.innerHTML='<span class="'.concat(ot.a.icon,'">').concat(r.outerHTML,"</span><div>").concat(e,"</div>");var o=ot.a["message-".concat(n)];s.className="".concat(ot.a.message," ").concat(o),t.container&&"static"===getComputedStyle(a).position&&(a.style.position="relative"),a.appendChild(s),s.clientHeight,s.style.opacity=1,s.style.transform="translate(-50%, -50%)",setTimeout((function(){s.style.opacity=0,s.style.transform="translate(-50%, -50%) translateY(-25px)",s.addEventListener("transitionend",(function(){s.remove(),t.callback&&t.callback()}),{once:!0})}),i)},lt=at.a.create();lt.interceptors.response.use((function(t){return 0!==t.data.code?(ct({content:t.data.msg,type:"error",duration:1500}),null):t.data.data}));var ut=lt;function pt(){return dt.apply(this,arguments)}function dt(){return dt=Object(nt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ut.get("/api/banner");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),dt.apply(this,arguments)}var ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",staticClass:"carousel-item-container",on:{mousemove:t.handleMouseMove,mouseleave:t.handleMouseLeave}},[n("div",{ref:"image",staticClass:"carousel-img",style:t.imagePosition},[n("ImageLoader",{attrs:{src:t.carousel.bigImg,placeholder:t.carousel.midImg},on:{load:this.showWords}})],1),n("div",{ref:"title",staticClass:"title"},[t._v(t._s(t.carousel.title))]),n("div",{ref:"desc",staticClass:"desc"},[t._v(t._s(t.carousel.description))])])},mt=[],gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-loader-container"},[t.everythingDone?t._e():n("img",{staticClass:"placeholder",attrs:{src:t.placeholder,alt:""}}),n("img",{style:{opacity:t.originOpacity,transition:t.duration+"ms"},attrs:{src:t.src,alt:""},on:{load:t.handleLoad}})])},ft=[],vt={props:{src:{type:String,required:!0},placeholder:{type:String,required:!0},duration:{type:Number,default:500}},data:function(){return{originLoaded:!1,everythingDone:!1}},computed:{originOpacity:function(){return this.originLoaded?1:0}},methods:{handleLoad:function(){var t=this;this.originLoaded=!0,setTimeout((function(){t.everythingDone=!0,t.$emit("load")}),this.duration)}}},bt=vt,yt=(n("47b6"),Object(g["a"])(bt,gt,ft,!1,null,"9b0c1dae",null)),wt=yt.exports,_t={props:["carousel"],components:{ImageLoader:wt},data:function(){return{titleWidth:0,descWidth:0,containerSize:null,innerSize:null,mouseX:0,mouseY:0}},computed:{imagePosition:function(){if(this.innerSize&&this.containerSize){var t=this.innerSize.width-this.containerSize.width,e=this.innerSize.height-this.containerSize.height,n=-t/this.containerSize.width*this.mouseX,i=-e/this.containerSize.height*this.mouseY;return{transform:"translate(".concat(n,"px, ").concat(i,"px)")}}},center:function(){return{x:this.containerSize.width/2,y:this.containerSize.height/2}}},mounted:function(){this.titleWidth=this.$refs.title.clientWidth,this.descWidth=this.$refs.desc.clientWidth,this.setSize(),this.mouseX=this.center.x,this.mouseY=this.center.y,window.addEventListener("resize",this.setSize)},destroyed:function(){window.removeEventListener("resize",this.setSize)},methods:{showWords:function(){this.$refs.title.style.opacity=1,this.$refs.title.style.width=0,this.$refs.title.clientWidth,this.$refs.title.style.transition="1s",this.$refs.title.style.width=this.titleWidth+"px",this.$refs.desc.style.opacity=1,this.$refs.desc.style.width=0,this.$refs.desc.clientWidth,this.$refs.desc.style.transition="2s 1s",this.$refs.desc.style.width=this.descWidth+"px"},setSize:function(){this.containerSize={width:this.$refs.container.clientWidth,height:this.$refs.container.clientHeight},this.innerSize={width:this.$refs.image.clientWidth,height:this.$refs.image.clientHeight}},handleMouseMove:function(t){var e=this.$refs.container.getBoundingClientRect();this.mouseX=t.clientX-e.left,this.mouseY=t.clientY-e.top},handleMouseLeave:function(){this.mouseX=this.center.x,this.mouseY=this.center.y}}},jt=_t,xt=(n("5343"),Object(g["a"])(jt,ht,mt,!1,null,"7c8b49c1",null)),Ct=xt.exports,Ot=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{data:function(){return{isLoading:!0,data:t}},created:function(){var t=this;return Object(nt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:t.data=e.sent,t.isLoading=!1;case 4:case"end":return e.stop()}}),e)})))()}}},kt={mixins:[Ot([])],components:{CarouselItem:Ct,Icon:z},data:function(){return{index:0,containerHeight:0,switching:!1}},mounted:function(){this.containerHeight=this.$refs.container.clientHeight,window.addEventListener("resize",this.handleResize)},destroyed:function(){window.removeEventListener("resize",this.handleResize)},computed:{marginTop:function(){return-this.index*this.containerHeight+"px"}},methods:{switchTo:function(t){this.index=t},fetchData:function(){return Object(nt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,pt();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},handleWheel:function(t){this.switching||(t.deltaY<-5&&this.index>0?(this.switching=!0,this.index--):t.deltaY>5&&this.index<this.data.length-1&&(this.switching=!0,this.index++))},handleTransitionEnd:function(){this.switching=!1},handleResize:function(){this.containerHeight=this.$refs.container.clientHeight}}},St=kt,$t=(n("6ff8"),Object(g["a"])(St,tt,et,!1,null,"2acbc943",null)),Tt=$t.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("关于我")])},Rt=[],At={},It=At,zt=Object(g["a"])(It,Lt,Rt,!1,null,null,null),Mt=zt.exports,qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{scopedSlots:t._u([{key:"right",fn:function(){return[n("BlogCategory")]},proxy:!0}])},[n("BlogList")],1)},Et=[],Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],ref:"container",staticClass:"blog-list-container"},[n("ul",t._l(t.data.rows,(function(e){return n("li",{key:e.id},[e.thumb?n("div",{staticClass:"thumb"},[n("RouterLink",{attrs:{to:{name:"BlogDetail",params:{id:e.id}}}},[n("img",{attrs:{src:e.thumb,alt:e.title,title:e.title}})])],1):t._e(),n("div",{staticClass:"main"},[n("a",{attrs:{href:""}},[n("RouterLink",{staticClass:"desc",attrs:{to:{name:"BlogDetail",params:{id:e.id}}}},[n("h2",[t._v(t._s(e.title))])])],1),n("div",{staticClass:"aside"},[n("span",[t._v("日期："+t._s(t.formatDate(e.createDate)))]),n("span",[t._v("浏览："+t._s(e.scanNumber))]),n("span",[t._v("评论："+t._s(e.commentNumber))]),n("RouterLink",{attrs:{to:{name:"CategoryBlog",params:{categoryId:e.category.id}}}},[t._v(" "+t._s(e.category.name)+" ")])],1),n("RouterLink",{staticClass:"desc",attrs:{to:{name:"BlogDetail",params:{id:e.id}}}},[t._v(" "+t._s(e.description)+" ")])],1)])})),0),t.data.total?n("Pager",{attrs:{current:t.routeInfo.page,total:t.data.total,limit:t.routeInfo.limit,visibleNumber:10},on:{pageChange:t.handlePageChange}}):t._e()],1)},Dt=[],Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.pageNumber>1?n("div",{staticClass:"pager-container"},[n("a",{class:{disabled:1===t.current},on:{click:function(e){return t.handleClick(1)}}},[t._v(" |<< ")]),n("a",{class:{disabled:1===t.current},on:{click:function(e){return t.handleClick(t.current-1)}}},[t._v(" << ")]),t._l(t.numbers,(function(e,i){return n("a",{key:i,class:{active:e===t.current},on:{click:function(n){return t.handleClick(e)}}},[t._v(" "+t._s(e)+" ")])})),n("a",{class:{disabled:t.current===t.pageNumber},on:{click:function(e){return t.handleClick(t.current+1)}}},[t._v(" >> ")]),n("a",{class:{disabled:t.current===t.pageNumber},on:{click:function(e){return t.handleClick(t.pageNumber)}}},[t._v(" >>| ")])],2):t._e()},Ht=[],Bt={props:{current:{type:Number,default:1},total:{type:Number,default:0},limit:{type:Number,default:10},visibleNumber:{type:Number,default:10}},computed:{pageNumber:function(){return Math.ceil(this.total/this.limit)},visibleMin:function(){var t=this.current-Math.floor(this.visibleNumber/2);return t<1&&(t=1),t},visibleMax:function(){var t=this.visibleMin+this.visibleNumber-1;return t>this.pageNumber&&(t=this.pageNumber),t},numbers:function(){for(var t=[],e=this.visibleMin;e<=this.visibleMax;e++)t.push(e);return t}},methods:{handleClick:function(t){t<1&&(t=1),t>this.pageNumber&&(t=this.pageNumber),t!==this.current&&this.$emit("pageChange",t)}}},Wt=Bt,Jt=(n("3c0c"),Object(g["a"])(Wt,Pt,Ht,!1,null,"0a5978e5",null)),Yt=Jt.exports;function Xt(){return Gt.apply(this,arguments)}function Gt(){return Gt=Object(nt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ut.get("/api/blogtype");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),Gt.apply(this,arguments)}function Kt(){return Ut.apply(this,arguments)}function Ut(){return Ut=Object(nt["a"])(regeneratorRuntime.mark((function t(){var e,n,i,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,n=a.length>1&&void 0!==a[1]?a[1]:10,i=a.length>2&&void 0!==a[2]?a[2]:-1,t.next=5,ut.get("/api/blog",{params:{page:e,limit:n,categoryid:i}});case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)}))),Ut.apply(this,arguments)}function Ft(t){return Vt.apply(this,arguments)}function Vt(){return Vt=Object(nt["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ut.get("/api/blog/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),Vt.apply(this,arguments)}n("d3b7"),n("25f0"),n("4d90");var Zt=function(t){var e=new Date(+t),n=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0");return"".concat(e.getFullYear(),"-").concat(n,"-").concat(i)},Qt={mixins:[Ot({})],components:{Pager:Yt},computed:{routeInfo:function(){var t=+this.$route.params.categoryId||-1,e=+this.$route.query.page||1,n=+this.$route.query.limit||10;return{categoryId:t,page:e,limit:n}}},methods:{formatDate:Zt,fetchData:function(){var t=this;return Object(nt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Kt(t.routeInfo.page,t.routeInfo.limit,t.routeInfo.categoryId);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},handlePageChange:function(t){var e={page:t,limit:this.routeInfo.limit};-1===this.routeInfo.categoryId?this.$router.push({name:"Blog",query:e}):this.$router.push({name:"CategoryBlog",query:e,params:{categoryId:this.routeInfo.categoryId}})}},watch:{$route:function(){var t=this;return Object(nt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,t.$refs.container.scrollTop=0,e.next=4,t.fetchData();case 4:t.data=e.sent,t.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()}}},te=Qt,ee=(n("005e"),Object(g["a"])(te,Nt,Dt,!1,null,"2448ac07",null)),ne=ee.exports,ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"blog-category-container"},[n("h2",[t._v("文章分类")]),n("RightList",{attrs:{list:t.list},on:{select:t.handleSelect}})],1)},ae=[],se=(n("d81d"),n("13d5"),n("5530")),re=n("2909"),oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"right-list-container"},t._l(t.list,(function(e,i){return n("li",{key:i},[n("span",{class:{active:e.isSelect},on:{click:function(n){return t.handleClick(e)}}},[t._v(" "+t._s(e.name)+" ")]),e.aside?n("span",{staticClass:"aside",class:{active:e.isSelect},on:{click:function(n){return t.handleClick(e)}}},[t._v(" "+t._s(e.aside)+" ")]):t._e(),n("RightList",{attrs:{list:e.children},on:{select:t.handleClick}})],1)})),0)},ce=[],le={name:"RightList",props:{list:{type:Array,default:function(){return[]}}},methods:{handleClick:function(t){t.isSelect||this.$emit("select",t)}}},ue=le,pe=(n("7e80"),Object(g["a"])(ue,oe,ce,!1,null,"6541019a",null)),de=pe.exports,he={mixins:[Ot([])],components:{RightList:de},computed:{categoryId:function(){return+this.$route.params.categoryId||-1},limit:function(){return+this.$route.query.limit||10},list:function(){var t=this,e=this.data.reduce((function(t,e){return t+e.articleCount}),0),n=[{name:"全部",id:-1,articleCount:e}].concat(Object(re["a"])(this.data));return n.map((function(e){return Object(se["a"])(Object(se["a"])({},e),{},{isSelect:e.id===t.categoryId,aside:"".concat(e.articleCount,"篇")})}))}},methods:{fetchData:function(){return Object(nt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Xt();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},handleSelect:function(t){var e={page:1,limit:this.limit};-1===t.id?this.$router.push({name:"Blog",query:e}):this.$router.push({name:"CategoryBlog",query:e,params:{categoryId:t.id}})}}},me=he,ge=(n("670e"),Object(g["a"])(me,ie,ae,!1,null,"035335f4",null)),fe=ge.exports,ve={components:{Layout:v,BlogList:ne,BlogCategory:fe}},be=ve,ye=Object(g["a"])(be,qt,Et,!1,null,null,null),we=ye.exports,_e=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("项目&效果")])},je=[],xe={},Ce=xe,Oe=Object(g["a"])(Ce,_e,je,!1,null,null,null),ke=Oe.exports,Se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("留言板")])},$e=[],Te={},Le=Te,Re=Object(g["a"])(Le,Se,$e,!1,null,null,null),Ae=Re.exports,Ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{scopedSlots:t._u([{key:"right",fn:function(){return[n("BlogTOC")]},proxy:!0}])},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"main-container"},[t.data?n("BlogDetail",{attrs:{blog:t.data}}):t._e()],1)])},ze=[],Me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-detail-container"},[n("h1",[t._v(t._s(t.blog.title))]),n("div",{staticClass:"fenlei"},[n("span",[t._v("日期："+t._s(t.formatDate(t.blog.createDate)))]),n("span",[t._v("浏览: "+t._s(t.blog.scanNumber))]),n("a",{attrs:{href:""}},[t._v("评论: "+t._s(t.blog.commentNumber))]),n("a",{attrs:{href:""}},[t._v("评论: "+t._s(t.blog.category.name))])]),n("div",{domProps:{innerHTML:t._s(t.blog.htmlContent)}})])},qe=[],Ee={props:{blog:{type:Object,required:!0}},methods:{formatDate:Zt}},Ne=Ee,De=(n("d0fa"),Object(g["a"])(Ne,Me,qe,!1,null,null,null)),Pe=De.exports,He=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v(" BlogTOC ")])},Be=[],We={},Je=We,Ye=Object(g["a"])(Je,He,Be,!1,null,null,null),Xe=Ye.exports,Ge={components:{Layout:v,BlogDetail:Pe,BlogTOC:Xe},mixins:[Ot(null)],methods:{fetchData:function(){return Object(nt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ft();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}}},Ke=Ge,Ue=(n("c990"),Object(g["a"])(Ke,Ie,ze,!1,null,"6c95272e",null)),Fe=Ue.exports,Ve=[{name:"Home",path:"/",component:Tt},{name:"About",path:"/about",component:Mt},{name:"Blog",path:"/article",component:we},{name:"CategoryBlog",path:"/article/cate/:categoryId",component:we},{name:"BlogDetail",path:"/article/:id",component:Fe},{name:"Project",path:"/project",component:ke},{name:"Message",path:"/message",component:Ae}];c["a"].use(Q["a"]);var Ze=new Q["a"]({routes:Ve,mode:"history"}),Qe=Ze,tn=n("4045"),en=n.n(tn),nn=n("5c5c"),an=n.n(nn);function sn(t){return t.querySelector("img[data-role=loading]")}function rn(){var t=document.createElement("img");return t.dataset.role="loading",t.src=en.a,t.className=an.a.loading,t}var on=function(t,e){var n=sn(t);if(e.value){if(!n){var i=rn();t.appendChild(i)}}else n&&n.remove()};c["a"].prototype.$showMessage=ct,c["a"].directive("loading",on),new c["a"]({router:Qe,render:function(t){return t(Z)}}).$mount("#app")},5796:function(t,e,n){},"5c5c":function(t,e,n){t.exports={loading:"loading-module_loading_1dKWw"}},"670e":function(t,e,n){"use strict";n("b99a")},"69fd":function(t,e,n){},"6ad8":function(t,e,n){},"6ff8":function(t,e,n){"use strict";n("5796")},"704b":function(t,e,n){"use strict";n("6ad8")},7887:function(t,e,n){},"7e80":function(t,e,n){"use strict";n("cbb1")},"88a4":function(t,e,n){},"8e42":function(t,e,n){},"9e71":function(t,e,n){"use strict";n("368f")},af9a:function(t,e,n){},b99a:function(t,e,n){},c990:function(t,e,n){"use strict";n("e1b3")},cba0:function(t,e,n){"use strict";n("8e42")},cbb1:function(t,e,n){},d0fa:function(t,e,n){"use strict";n("121f")},d666:function(t,e,n){},e1b3:function(t,e,n){},f145:function(t,e,n){}});
//# sourceMappingURL=app.cccb94c8.js.map