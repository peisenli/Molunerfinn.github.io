/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/0tolearnfe/index.html","8362d662923ca6bfdd8c4be49000f187"],["/2016/index.html","4b510bbf32d134c35afac1e98175a94b"],["/2017-summary/index.html","1cb1be8f344d6c75d755fa8c3091245b"],["/2018-summary/index.html","69844bca146a2f10211fd749963c0ee2"],["/Electron-vs-nwjs-part2/index.html","649930e4ace6e6c34202ee98e446007c"],["/Electron-vs-nwjs/index.html","ea0f71490e1d0631b096f41631ce47e9"],["/FullScreenBackground(css)/index.html","92afc5d27015e5b276881d5e8f3e240d"],["/PC-Chrome-PWA/index.html","5d22c0e876191dc313323a6e2145d450"],["/PerfectMoviePerWeek3/index.html","f2ddb96f89cd57e538b682ba781fc40b"],["/PerfectMoviePerWeek4/index.html","5c3d2e50a92bd25c7c3230cbca38ea1e"],["/PerfectMoviePerWeek5/index.html","3a70b69fdf064dd02555dd212f90ba03"],["/Use-Jest-To-Test-Vue-Koa/index.html","9e5c2addb4c1018ce4fe5d7e42d32470"],["/Vue+Koa/index.html","87e0bae2d352b9ba4d42a65e67122d9c"],["/WEEK89/index.html","512ea220abfeb010f68ac805fb0ac51a"],["/WEEK90/index.html","1be43da5efd903524d88b160279a14ec"],["/WEEK91/index.html","3cfc93af20ff367c3d2197735d8476af"],["/WEEK92/index.html","f2a9619c7250ce45e9c43a6c58533467"],["/WEEK93/index.html","05c054fb919abcd3db8d03c6bc668c76"],["/Webpack-Optimize/index.html","40a3dd7298a14b97959026b062a01c3a"],["/about/index.html","5f1650b63902ea726cfbd9e4132c7b14"],["/archives/2015/05/index.html","99a884e0d98a4e1e5f4ecba5a9751dec"],["/archives/2015/06/index.html","77bc6f510a0233bd9108ed4766fba879"],["/archives/2015/06/page/2/index.html","764bc33ddaec15e888e6af218db9dac6"],["/archives/2015/08/index.html","3bd09a507135993eb7457be982c41234"],["/archives/2015/09/index.html","09e68ca54a7041c64a28bd48cd8edf92"],["/archives/2015/11/index.html","b56ed9f04acf52b4dd51869d363fc663"],["/archives/2015/12/index.html","51138ad734fc9e851b1c5c3d6dfaf304"],["/archives/2015/index.html","746ee0ab5bcf4100571405ea4cb45c95"],["/archives/2015/page/2/index.html","447135e023eaaf3caad8f514fc5a1f91"],["/archives/2015/page/3/index.html","2d8cb7355d03ccc161cf7aeb34666f42"],["/archives/2015/page/4/index.html","8bbf279a6cdefe19d96f1d1c06316fea"],["/archives/2016/02/index.html","1de13ae5e3cc4b3b75cf0a47079cdec6"],["/archives/2016/03/index.html","8d3629444ea3ee0bec89f5478ce576ef"],["/archives/2016/04/index.html","ab6fa99fc639eacd460d763d2629fc32"],["/archives/2016/05/index.html","44a32344d64fafc5c7f35fde25cbc19b"],["/archives/2016/06/index.html","f3debdc1e7efb2569feb42bbe20be57a"],["/archives/2016/07/index.html","0e0bce6e4b16e0276877e854f4a8f92f"],["/archives/2016/08/index.html","1409a6c1eb46fb22a260937f32277719"],["/archives/2016/11/index.html","3cae5a48a061b65f13335f6991111716"],["/archives/2016/12/index.html","f4ac66e13a518617e615e27a972162c5"],["/archives/2016/index.html","a03e80685b554ff6bbfcd0fcb6c734c3"],["/archives/2016/page/2/index.html","700a949440cab43cf6fd031f3faa01d1"],["/archives/2017/01/index.html","55941618403156658f6d688efe316207"],["/archives/2017/04/index.html","46e286a76ff7408b8d0a000d5e0f9567"],["/archives/2017/05/index.html","da17107921950096acc95b3bb6c4c559"],["/archives/2017/06/index.html","dac23bcea77556faff5b6a1be150eb75"],["/archives/2017/07/index.html","e0ff20ab2ecfeaf676da55c944d19a24"],["/archives/2017/09/index.html","6ab2d88a147eefab2c67363639239909"],["/archives/2017/10/index.html","0ceca0d14c2d6a03d26cf210113ae230"],["/archives/2017/11/index.html","3db2ce92c948b3761cba6a6d331aad30"],["/archives/2017/12/index.html","8019e7079fad9d4ad102d80d4cc4ed06"],["/archives/2017/index.html","304d5abda3ca237e24e6b226f13cfdd8"],["/archives/2017/page/2/index.html","450b846b7e018cb80091e302f871e5da"],["/archives/2018/01/index.html","a7c1808360ffcd5c3cbd141030ac5050"],["/archives/2018/02/index.html","4badc0f795b1063f0ddff23bd2bdd2e3"],["/archives/2018/03/index.html","d6a1b227e3bfd3aa155a73f2369f105a"],["/archives/2018/04/index.html","109f4e02872c277790acfa577fa78418"],["/archives/2018/05/index.html","03db2cadb4f5c17845ed1ecb23050299"],["/archives/2018/06/index.html","f4dd01a590be1565c70f5abb2ba29afd"],["/archives/2018/11/index.html","45a165a8b51177a1efc9062f591c9597"],["/archives/2018/index.html","d9c35671b156fc65f66a9a453a65026a"],["/archives/2018/page/2/index.html","e42d90de7056d0d714cc6960a060f04a"],["/archives/2018/page/3/index.html","b4509650514d0cb44eb1285fbe71cf9c"],["/archives/2019/01/index.html","c74142fe06f631965da38b9f1bbc3cdd"],["/archives/2019/02/index.html","65b69157d6a3df34309e2c674f58da68"],["/archives/2019/03/index.html","e228e4b0fdb0e633eda8119aeb303502"],["/archives/2019/04/index.html","75390619cdd62e9a3e7ef18e2cfb71e1"],["/archives/2019/05/index.html","9eb25cb272267b7281a031f80d9aa411"],["/archives/2019/index.html","d83f82d8cb2b62ffd34e05d5fd69b663"],["/archives/index.html","eec7ba162423efb706de7ed3a968f1a0"],["/archives/page/10/index.html","2aa535115ab0d0fe02ed1acd90f076af"],["/archives/page/11/index.html","660d8ef0dcff80a360a55d7b80b0134e"],["/archives/page/2/index.html","2b445ecbcfe3640a96804507ec6fa809"],["/archives/page/3/index.html","44888452e59567117e99c4b55547887f"],["/archives/page/4/index.html","27dcde7168743e1265177073524a082d"],["/archives/page/5/index.html","7436ea01373c7d1d3a03c0d1591e87b5"],["/archives/page/6/index.html","b5214b0d7987edc11bdc747d41b3d9bb"],["/archives/page/7/index.html","a08db278f0277046f31e09d5c51e6d9b"],["/archives/page/8/index.html","8b073aed7c1726eb9ae4b765fc0285b0"],["/archives/page/9/index.html","95f8553e51966211739a4097eb707bc3"],["/atom.xml","a6fad10994174fff75a691f0b4b3e58b"],["/categories/HEXO日常/index.html","644228590ad651e3669b68909e3e67ad"],["/categories/HEXO日常/日志/index.html","7d0ae532befb198c1797f32e15bf8207"],["/categories/Linux/index.html","a077331c6105d582e5c9fe07e254e33a"],["/categories/Linux/日志/index.html","0a4702f941bbd26f8928a90129b1ee23"],["/categories/Web/index.html","d0032055701929a287a2f799b736d3b4"],["/categories/Web/page/2/index.html","40c1eed7e6bef7b28f2137d3386b9be0"],["/categories/Web/page/3/index.html","0d9692c075f851cccffb5eb393384a50"],["/categories/Web/page/4/index.html","bcab4c1da2495f76f0c49d71b2d4ae49"],["/categories/Web/page/5/index.html","cccabbe0e5a09037e758cf0a04b114b8"],["/categories/Web/page/6/index.html","e4e57e587321449cbaa310a071abef2c"],["/categories/Web/开发/Nodejs/index.html","314b5fdaaf1914287b872def1b5747c9"],["/categories/Web/开发/TypeScript/index.html","7d8dc36b6e6764f6af6b809c6b449382"],["/categories/Web/开发/electron/index.html","832ae500367cd55df7bfbac312fa54dc"],["/categories/Web/开发/index.html","addad0ada4297062f94f61a03ab385c4"],["/categories/Web/开发/page/2/index.html","c40598c2f5810fbd82d092df9063d75b"],["/categories/Web/开发/page/3/index.html","60670cc54a878f1e80802191f4c6eb07"],["/categories/Web/开发/page/4/index.html","36010a85683992818a6f7ad4a08c2240"],["/categories/Web/开发/page/5/index.html","8b1b751b9a19218503a55790623bef21"],["/categories/Web/开发/page/6/index.html","09191abc5d4a8afc19045c38ac96554b"],["/categories/Web/开发/随笔/index.html","613ab1b82472fd0470e7847851863803"],["/categories/Web/日志/index.html","409a94cd1e8906aedc69fd1c78860778"],["/categories/Web/日志/翻译/index.html","6158e2874c915f93073f1c1263367607"],["/categories/Web/日志/随笔/index.html","5cc6962e3c4b9d93eb144eb1a4ab5aa3"],["/categories/WordPress日常/index.html","2710908b31ff62b376a3aba45cced63d"],["/categories/WordPress日常/page/2/index.html","21260311b36bd2f1893eba3ce7388185"],["/categories/WordPress日常/日志/index.html","b04e68c51a5c589129ea51af35120776"],["/categories/WordPress日常/日志/page/2/index.html","eeb6f03faac3a8e505dead1908326e99"],["/categories/hexo/index.html","8c6903b04e8020fcb69a15df7795daba"],["/categories/index.html","51d2cece939df9eeeba8fc6c06d4c718"],["/categories/其他/index.html","eb6490ab2443d2235b4b792f78568d7d"],["/categories/其他/极客/index.html","ab8082c2071758fcd146cf1c08aecb6c"],["/categories/周电/index.html","f622aa6ba05fe45fd2e6443cb9ad72f3"],["/categories/周电/日志/index.html","93a9d27ebf2b74e9db64de3249bdce7d"],["/categories/日志/index.html","52b7e5a4e7a0eaf46896c8ef6b263db1"],["/categories/日志/page/2/index.html","a8c525b7238c8148de64a66485034992"],["/categories/日志/周电/index.html","a3bb16e517b2357e505d4bce8fa64baf"],["/categories/日志/随笔/index.html","f92b331438597f5cd18f03c74c4a1673"],["/categories/笔记/index.html","a5efc7a676ded9fc45a6f2b0b1ef0a5a"],["/centos-1/index.html","b7dd9778b203c0e01c7604accd2bb586"],["/centos7-1inwin8-1/index.html","572b1f17185dac749c2b40f157634ee1"],["/css/index.css","6dd28045e5084cb83a27b5b72a425fbc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/electron-vue-1/index.html","e66ad3929ae740541414da1ff048a329"],["/electron-vue-2/index.html","ff228af5923c41a7e89cb55de8b602a4"],["/electron-vue-3/index.html","4cb2ce0a4762a6a3ed9a648f1ecc53d3"],["/electron-vue-4/index.html","d029aacac7c4bdf356f10d736a477257"],["/electron-vue-5/index.html","6ca0e64881e6c457e778303017c198d6"],["/electron-vue-6/index.html","0f3a8a8ae6714b0cd11e10ffe55777cd"],["/electron-vue-7/index.html","d929bc0f1cd0d54071a1df75089dea5b"],["/electron-vue-8/index.html","c89ab2c36e4381559640623cd4aac53a"],["/element-default-theme/index.html","4fe7fb70f1f9bbce0205676a6b99195d"],["/fe-be-router-render/index.html","64f7b03606a3229e9246dc1ec2ce771b"],["/fethefirst-2/index.html","460f001b4a2a80fc4bbb71ec408e47f5"],["/fethefirst/index.html","6c0357b6bb98706ebebd3708bb073363"],["/gear-system/index.html","d48a25c197533f3b3ab2598d93679bb0"],["/git-ssh2https/index.html","b50badc97ab323b5b85972d4becced8d"],["/hello-world-1/index.html","2750e3278789d735ab748a22856f2ad7"],["/hexo-travisci-https/index.html","0f611c3c98cde5982f260162e4d8f839"],["/hexodaily-1/index.html","2bbaaa395993873703edd8ec3155eaab"],["/iTerm2-lrzsz/index.html","48526db94c00d70a75ff4165e63b01e3"],["/images/icons/icon-144.png","77ff48fc0e9d1928e7de882687a2206b"],["/images/icons/icon-192.png","84dc14588b23f97779da8f8b0969d4ad"],["/images/icons/icon-36.png","5c953ea6f63a79f355784c3f9f895b70"],["/images/icons/icon-48.png","8b51531a5c3dd42e5c67451b890c4472"],["/images/icons/icon-72.png","bf9669545978443a03c14e07664dc885"],["/images/icons/icon-96.png","7669c9f2e04be5935dd5b43832d3bd97"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","e4d3fa58a0a300a01bdf364d8a96d104"],["/jquery-1/index.html","3b71a75449bd1e1e70541a3e5be48cc3"],["/js/copy.js","1cbaa5a8eed187110b79b523bebb597e"],["/js/fancybox.js","ee0be6a35548fe934306d9ff7288c837"],["/js/fireworks.js","f6da66de730cc068efd0d0b0a9ec64ae"],["/js/head.js","802d516f90b4e87c40edc27d3eb4ba79"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","ba21174ad3619148cda89475756b053b"],["/js/search/algolia.js","2dd585bf72ab790662bd614ccf026d9c"],["/js/search/local-search.js","4442b4a1efe05dd05ec7dcc6d132a182"],["/js/sidebar.js","e3308924d89861ff54f17f8de0f864f0"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","3e9daf655da50b0eda5324a81a2b9720"],["/js/utils.js","8250feefdfa7ac2e0bc56194a507580b"],["/koa2-wechatpay/index.html","b9bfc45c07d14f5db24357ac73461fad"],["/make-a-hexo-theme/index.html","c6cd7dcf11bdc147d5854933ef6d7f96"],["/make-a-picgo/index.html","b600500d1c0fd5fa9e4c97c2abcae56f"],["/manifest.json","1ae58b354c872862c45f7b8eaa5c935f"],["/markdown-wordpress/index.html","9dff111044e126075f4418c5e48be2e7"],["/marklinejs/index.html","e9c4899fe620c6cab71f3eaf3a8257e7"],["/my-2019-interview-of-summer-internship/index.html","55eac941df483a781b37598ce5cc573d"],["/myfe/index.html","cfb785eb45e5c6f0e103ae0486f3d7e6"],["/nodejs-1/index.html","448841c607ef30d0f7114503ec384691"],["/nodejs-2/index.html","2e35c435c887e0ddafd3faa638684f04"],["/nodejs-3/index.html","45045d1eec5459dd94fb1c366fbb6971"],["/nokian1-root/index.html","2378c3bb9ab30c3e59259d64cd1aa331"],["/note-for-picgo/index.html","c36be2569b8cf2831197e378ceeb9331"],["/notebook2016/index.html","a60a666b7c6fc6b42e195df6dbabe905"],["/observer-vs-pubsub-pattern/index.html","d07e60f13def671ca943974ec278727c"],["/page/10/index.html","7ee33e7e61e4833d1db8fe8902322aec"],["/page/11/index.html","7db2f61cf139a048b3db8cd0f69ed3a3"],["/page/2/index.html","f416a5857e7a9e0eab5cd4044b4552ac"],["/page/3/index.html","e5b46934c01b0dd4df023dc5fc1767a9"],["/page/4/index.html","cb446f6b582189893bfac09fa2cbd726"],["/page/5/index.html","4105286ae148aef7ede4b83c666c4f92"],["/page/6/index.html","ea4ba94c0ff48f5195471f7c3bb13744"],["/page/7/index.html","16445b1d69dd8c84a65a9eae059ec123"],["/page/8/index.html","36630579b32486581f9dad90cdbad743"],["/page/9/index.html","f58affb00d0d434ed8889cb36e08a4f3"],["/picgo-v1.5-update/index.html","797452e5cad01fbce933ca95926195b8"],["/picgo-v2.0-update/index.html","af01bf3b270b670e297c11a4092e7daa"],["/process-thread-coroutine/index.html","04c9202d73e8b508de4d44cae8b82626"],["/setTimeout-hack-setInterval/index.html","6ce41f7a7b826a73a60e45f445756a5b"],["/sitemap.xml","93415214edf9411d3871b8eefd142c12"],["/slide-support/index.html","521ca68a7dffa7573d959616f68312bf"],["/slides/index.html","b80a2ed4d61e6e57aa9a478a5157f127"],["/something-about-settimeout/index.html","71100d15782e2f43e21e1eb388d99e45"],["/somethingAndNothing/index.html","55e3e5081a6ddb2654f8980bb70824ce"],["/tags/Electron-vue/index.html","46f12655e2b0798d6e9f8719c7b80134"],["/tags/Electron-vue/page/2/index.html","923f27c0e384898736c461e401464a10"],["/tags/Electron/index.html","3a39de0e050ce0bd98ec127174f6049e"],["/tags/Electron/page/2/index.html","b26eb1b98e9b0245ffcbf7c800a55874"],["/tags/JS/index.html","ac7597d3ae00c3b4642e6266f7f0d6ff"],["/tags/Koa/index.html","4257211db09377b1aa610211dfa72800"],["/tags/Mac/index.html","765ecd0199c9e8b5ab4e37b430753939"],["/tags/Nodejs/index.html","7c06d0fd91bcca7fdfa9a8f202395f8d"],["/tags/Nodejs/page/2/index.html","ed0cf0e1d872139d3aed53eec7968bae"],["/tags/NokiaN1/index.html","4a6e60dfe3db799e5e775de2ebd3955e"],["/tags/PWA/index.html","0a995713f486117dc5a6b75383ddf5f6"],["/tags/TypeScript/index.html","941ba3f49c0465fe138d386c92da0285"],["/tags/VSCode/index.html","d5a89b7f91e89ebca347611154c2cc8f"],["/tags/Vue/index.html","907033b9f43648fc6f7b2dff89983450"],["/tags/Vue/page/2/index.html","dcac87754a930a293f45843e338db86f"],["/tags/Webpack/index.html","ac28bf5b16f10bcc501eb91af84f3ba2"],["/tags/electron/index.html","7a6a9397304de4a227cfea8a46c1621c"],["/tags/git/index.html","bbec2b1c41594dd4f30e6e62625d94b0"],["/tags/hexo/index.html","6de261f59fee782aa8e892e87098f09e"],["/tags/index.html","000e7d3665e64b5e4dc1f55a66198c7d"],["/tags/note/index.html","0e5b906fa065ec09ca207ef6f48b51b2"],["/tags/vue/index.html","fa9aeae85e6bc02c85d35b7dd3a1e86b"],["/tags/web/index.html","124e9980587f2e7e0b4df63cd7675f22"],["/tags/前端/index.html","5a86e3181a389093318435d6afe255b3"],["/tags/前端/page/2/index.html","735651ce198c49d8c3707e359a4c6122"],["/tags/前端/page/3/index.html","b7f6b4eb9a4c45b5a1b32c238c0c527f"],["/tags/前端/page/4/index.html","3ce216a57d8f951b370837f23bc33479"],["/tags/前端/page/5/index.html","bdb438b40d2606d2e93f582ad0d12219"],["/tags/后端/index.html","5ef7e7c89faf2154dbfaf24d9e7190dd"],["/tags/更新日志/index.html","82a50e881a72ffd8202e098c60e332fc"],["/tags/电影/index.html","100a5c282a191bd83aa7cfa9a14063b0"],["/tags/电影/page/2/index.html","2393da75461f85ed5fb278e582d0b5cd"],["/tags/笔记/index.html","fe89d59fde3f03166ce283506afd3688"],["/tags/随笔/index.html","934744d9fbf3b8c198c61b32505bd4ac"],["/thinkself-1/index.html","ba89493cdcee2e19cd3e8ce42e1b91f6"],["/vscode-extension-develop-1/index.html","a8db7f1ebf4408c0d4d2250ff3f29f96"],["/vue-components/index.html","d64ba09ebd536b19a0ae93aaabc4a32e"],["/vuejs-1/index.html","fa032ce4caabd8d90f2994f47ccc7f4f"],["/wdinst3/index.html","c97facd5cc63bb357c7103a69a4f5451"],["/wordpress-theme-setup-record/index.html","74e02b5f2d16f2c6682cb2daf89f3b4d"],["/wpdaily-0616/index.html","8efbc65b44ebb3ce6f450eb515539b8b"],["/wpdaily-0618/index.html","f0a0c3f5aaf79a92e4d4d9b866c737ec"],["/wpdaily0606-1/index.html","267e9ae29191d9a83b634072d044eb15"],["/wpdaily0611/index.html","bc569c8049fbc984de12808830944e34"],["/wpdaily0613/index.html","00f32344f97180d2a5231fdf62847f13"],["/wpdaily0620/index.html","3d9f2a40a9c95a380e9bbc408182a9d8"],["/wpdaily0808/index.html","d3242903026c26e0b0422b0726be8200"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.bootcss.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"molunerfinn.com"});




