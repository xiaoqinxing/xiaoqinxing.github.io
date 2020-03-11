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

var precacheConfig = [["/2018/12/24/生活-围-2018-12-24-weiyi/index.html","75eaedb8537df02c71b561164db0c053"],["/2018/12/25/生活-围-2018-12-25-weiyi/index.html","ce3ffeced57f73244c8a2a6d8d7c9905"],["/2019/01/02/生活-围-2019-01-02-weiyi/index.html","a21132018b7c32d5c4c0cc37f64021dc"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.1.jpg","77caaf76c11251bfa9dbb0c9b820842a"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.2.jpg","28ea4278d78f3795a1a55bc7883010de"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.3.jpg","8d95da17e87deabfc37e3beaf28fe312"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.4.jpg","18452f4cff1b43c4fe1df7f217af8337"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.5.jpg","c9361030de8c1f2cba5a9c7de580fe36"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.1.jpg","208447f9ca466578fa9a91d8922eab8e"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.2.jpg","0ebf50de6c4a942ff43c70683e24b495"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.3.jpg","db61bddc55b44154fb4619b4f9666518"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.4.jpg","3e9eda50484fd1c8ea4973801bf5a795"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.5.jpg","4a47ab25dcc8e351be2e24531a593b4b"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/3.1.jpg","1cbbafa473c0241ed0241282686babb9"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/4.1.jpg","0ef5244007bcaa717a6af76ac69ac04a"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/4.2.jpg","8ba891ba20a36961de783b86633f253d"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.1.jpg","b93f948455879510023c620ddee6a428"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.2.jpg","6f68e842a466dbd6b1b4404ae2ba2122"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.3.jpg","9ea6082a02a89293877be49c9051339a"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.4.jpg","dda31464a21f55acbcb2420a25fdce3e"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.5.jpg","8a879cd55cb12ee8b4d86bef58ce2c07"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.6.jpg","4fc795312e0e63e7e143782fb14d7e39"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/index.html","d4e483052fb921781153ff4a90a03c2c"],["/2019/01/09/生活-love-2019-01-09-love/index.html","80440f2fc186313d9251c0df13fc186f"],["/2019/01/10/工作-编程-ADB指令小结/index.html","a9c562dd755e592f207d646904a8b906"],["/2019/01/11/工作-编程-背光补偿和强光抑制算法实现/index.html","3333710aa0709d071855b63ca7562fdf"],["/2019/01/11/生活-love-2019-01-11-love/index.html","23787f66fb7faa32885688e16587f0e8"],["/2019/01/11/生活-围-2019-01-11-weiyi/index.html","b80f8d6eb7389340f063167406ae9515"],["/2019/01/14/学习-工具-hexo-markdown常用语法/index.html","c1640e5f89b70695ba81961b94a465ec"],["/2019/01/15/工作-图像-ADRC/adrc_brightness.jpg","f4cc547ecdd4e7ef988c897efc53259a"],["/2019/01/15/工作-图像-ADRC/index.html","c1ed2bb47f7122a80bae3bf9310e634c"],["/2019/01/17/工作-BUG-BUG-手动增益过大时闪烁/index.html","5c85916927f36a10cd81bccc238c07f4"],["/2019/01/18/生活-love-2019-01-18-love/1.jpg","b4868c6b026dae21796a5cbd4e906a00"],["/2019/01/18/生活-love-2019-01-18-love/2.jpg","c1c41fcdcabe6de7328ff95386ae111b"],["/2019/01/18/生活-love-2019-01-18-love/3.jpg","fbe2513fa9e3f72f42d5a2d3ba941336"],["/2019/01/18/生活-love-2019-01-18-love/4.jpg","507a13c99f1e06b884f8da09fa1d32ec"],["/2019/01/18/生活-love-2019-01-18-love/5.jpg","79717b62eeaf65897c7eed944169a57f"],["/2019/01/18/生活-love-2019-01-18-love/index.html","6703af21e384eb154153620f9fb765bf"],["/2019/01/21/学习-工具-git-git常用命令/index.html","3f585cb9513d0e7ae03dc25eecd5d8f0"],["/2019/01/21/学习-工具-hexo-hexo-多终端同步/index.html","4b408a53f7f4d535238376dcfa518fcd"],["/2019/01/21/学习-编程-python-python-stats数据绘图/1.jpg","9f83806ee43ec6d46138b843900c0b60"],["/2019/01/21/学习-编程-python-python-stats数据绘图/2.jpg","a404a1413d4833599634a09ee8029923"],["/2019/01/21/学习-编程-python-python-stats数据绘图/3.jpg","254d071760788fd3294294c5765991ea"],["/2019/01/21/学习-编程-python-python-stats数据绘图/index.html","d26c1645984e695700fa7cbc116dfe6c"],["/2019/01/21/工作-编程-原有背光补偿算法实现/index.html","bd24f8379454918141dbe09ae6d16201"],["/2019/01/21/生活-love-2019-01-21-love/1.jpg","d931f9512712af50fc43fa174ec49850"],["/2019/01/21/生活-love-2019-01-21-love/2.jpg","c5d5f754bace2091a1604118e9082020"],["/2019/01/21/生活-love-2019-01-21-love/3.jpg","c574239966b53748c2554ce87c3f3a73"],["/2019/01/21/生活-love-2019-01-21-love/4.jpg","b024d5d42464f858e48d77536fdacb2b"],["/2019/01/21/生活-love-2019-01-21-love/5.jpg","ac378567cf1c765c007bc7cbdb482f18"],["/2019/01/21/生活-love-2019-01-21-love/index.html","3b245301a37e8494f1aa3f808819c590"],["/2019/01/22/工作-BUG-BUG-室内灯光闪烁/index.html","c5f2b2c9aee10e379ecb6046d892e60d"],["/2019/01/24/生活-围-2019-01-24-weiyi/index.html","4c5fff2dd6fdde47f7dec328b92305bc"],["/2019/01/29/工作-编程-chromatix重载代码实现/index.html","4f250ffda8a5a377c5449b1e35fac3ee"],["/2019/01/30/工作-图像-车辆人员监控调试注意点/index.html","ae89362ea703300be749f4cfc588849b"],["/2019/01/30/生活-围-2019-01-30-weiyi/index.html","621c5d896d4e93c26834b704a09fdf32"],["/2019/02/01/生活-围-2019-02-01-weiyi/index.html","b099687c893bc9d4f58ba7e41ec8fd9f"],["/2019/02/02/生活-围-2019-02-02-weiyi/index.html","03f0c0af50034cec0b82782ad463b30b"],["/2019/02/14/工作-编程-背光算法代码实现/index.html","06d9d1f9780515a329c856861aa4046f"],["/2019/02/14/生活-love-2019-02-14-love/index.html","ce9f7e723a1fa7261e611973233f8cfb"],["/2019/02/18/学习-编程-c-void指针疑问和总结/index.html","6870430a01d9ee3da12894661e5a9438"],["/2019/02/19/学习-编程-c-线程进程总结/index.html","8f5925d5a9cb317b7082053bb9b2909b"],["/2019/02/19/学习-编程-python-Python-线程和进程/index.html","efddec0f1ee22e98468efd3f6fd2ece8"],["/2019/02/20/学习-工具-git-问题-中文乱码/index.html","4feb2373c4b25205c81ce0c2a3e80f3f"],["/2019/02/20/学习-编程-c-c-：private外部访问问题/index.html","c0aa296d2ed7d38613de256e436c894c"],["/2019/02/20/工作-编程-高通代码学习与体会/index.html","a9f36987006c9599dbc57a0d670247e9"],["/2019/02/21/生活-love-2019-02-21-love/index.html","8ad571ff0722b2f28a842b521b210f37"],["/2019/02/22/工作-算法-强光识别算法实现/index.html","0f226d4f816e3d75bd808ae14d543a94"],["/2019/02/25/学习-工具-hexo-hexo-相册功能实现/index.html","b4beae65246dae89b1d1cf8f1d006f5a"],["/2019/02/27/学习-编程-c-c-二维数组参数传递/index.html","8fdcff1c96a6de8efa0fb3670873be4f"],["/2019/02/27/学习-编程-算法-五子棋算法设计/index.html","427e5d6f3f3d8eb9ba6f01768c1fb081"],["/2019/02/27/学习-编程-算法-递归函数设计/index.html","d75fee8eb15fa2be4527d136dfc37957"],["/2019/03/01/工作-编程-高通设备代码更新及版本更换/index.html","5f4ee95e2ed63bd4d04d413427a6957e"],["/2019/03/04/学习-编程-前端-JavaScript学习/index.html","5abb4351276da2c1b34db6298cb85c6e"],["/2019/03/07/工作-BUG-BUG-增益设置不正确/index.html","1f1351a924058b1440b4e51aa07fa318"],["/2019/03/07/工作-编程-8056平台aec模块重载chromatix功能实现/index.html","c1c02a768c336cfe912cb91ee80d75fa"],["/2019/03/08/工作-BUG-BUG-AE打印延迟/index.html","f6402a671a9a736f65fb000331995643"],["/2019/03/08/工作-图像-高通WNR滤波理解/index.html","e387b1ead31c82a714f359dcac0ece80"],["/2019/03/13/学习-编程-c-makefile编译模板/index.html","55494e0c0ee9f7ca882979ce8797f20e"],["/2019/03/13/工作-编程-sensor模块区分不同型号的逻辑/index.html","af1b446ad3fbbeba9a34723877a609ff"],["/2019/03/14/工作-编程-手动快门增益功能实现/index.html","1b7e7cafd1b71d5714df597ec2dd7d68"],["/2019/03/19/学习-编程-c-c-动态内存分配/index.html","1d9c618e97cd671c0ddc261b028b38f7"],["/2019/03/19/学习-编程-c-c-结构和联合/index.html","ddbbf21e1280b9c39aa588ac8c68b832"],["/2019/03/19/学习-编程-python-python-网络编程/index.html","5284bf49e61270532597a6db7a1d3cbc"],["/2019/03/20/学习-编程-c-c-使用结构和指针/index.html","6fd61c7a0bcf58ba74f73523523cddc6"],["/2019/03/20/工作-编程-编译版本信息打印功能实现/index.html","5b6ee2d41f3598e4da177836be40e81a"],["/2019/03/22/工作-编程-2412M设备补光灯及IR-CUT调试/index.html","2cf4a88e1e3766d374aef157347b7634"],["/2019/04/01/学习-编程-c-C-设计模式/index.html","14fad3ff8a132cacd12f357b23ff143d"],["/2019/04/12/学习-编程-c-同步与互斥/index.html","e829d67a678c002c22b9cf1273beca8d"],["/2019/04/12/学习-编程-c-线程学习/index.html","918252c5615e08cab6ba8c7da42624b8"],["/2020/01/21/学习-工具-hexo-利用又拍云cdn加速github-pages/1583892494033.png","74967fa27de66cfa15ace1044b9a5f41"],["/2020/01/21/学习-工具-hexo-利用又拍云cdn加速github-pages/1583892988361.png","418f7591a3833fb39255992003c9e79d"],["/2020/01/21/学习-工具-hexo-利用又拍云cdn加速github-pages/index.html","801fe888e5de82bad048a1b2f08c5afd"],["/2020/02/29/工作-BUG-BUG-两路摄像头偶尔不能同时切换日夜模式/index.html","5052a46a1fcb08ed4fbf05e02d50943d"],["/2020/03/01/学习-工具-hexo-hexo-butterfly主题迁移/index.html","ad5a3a6314a36a28e70d48c57af4b81a"],["/2020/03/08/工作-算法-相机成像模型/1583672734274.png","30115caac8c8af46ff1e829959c04778"],["/2020/03/08/工作-算法-相机成像模型/1583672771781.png","666c4302d69880501897e62c3092baa7"],["/2020/03/08/工作-算法-相机成像模型/1583672783896.png","654d9fa326be5542d8e28d4ba12bba45"],["/2020/03/08/工作-算法-相机成像模型/1583672798775.png","aec8ce57454e98f1e135ba9db4823d4c"],["/2020/03/08/工作-算法-相机成像模型/1583672833260.png","941607e5c85db141f8887273a01a3057"],["/2020/03/08/工作-算法-相机成像模型/1583672845339.png","921f2f552082720dd4f53991fa6cc2cc"],["/2020/03/08/工作-算法-相机成像模型/1583672858973.png","b3b845e616a58b17942839ce8eebca22"],["/2020/03/08/工作-算法-相机成像模型/1583673008090.png","669b627c7d9e3772adec8eed99e4630e"],["/2020/03/08/工作-算法-相机成像模型/1583673022764.png","1e163334eea502fc460e83cf823efdb1"],["/2020/03/08/工作-算法-相机成像模型/20161027215101234.jpg","dacf251a2937cdb56e5aee0b91a0bead"],["/2020/03/08/工作-算法-相机成像模型/index.html","9d866918987f5272fb646ccbe7e03634"],["/2020/03/08/工作-算法-相机成像模型/v2-084365a995c90a05793383d030edad4c_1440w.png","0e343a206dd8fc826786d4dc73e0b52c"],["/2020/03/08/工作-算法-相机成像模型/v2-09d962a72f187320ca46e409fd6b364f_1440w.png","48b6997cd269025569f0c1d91ebc7b56"],["/2020/03/08/工作-算法-相机成像模型/v2-0dc276d40437a5f17ed0ec039b18953f_1440w.png","20e886becc3baf2411a16f711c9eca2e"],["/2020/03/08/工作-算法-相机成像模型/v2-1259ab99566c20fb28c30ee2d0e6fcfb_1440w.png","7fe25c637f77c2fbd7761dff2cff018c"],["/2020/03/08/工作-算法-相机成像模型/v2-3f443a32bacc0ed8ec9df0a6b60eadc0_1440w.png","d90d042637eaf730f252c53b25ee8a12"],["/2020/03/08/工作-算法-相机成像模型/v2-47be6823de88962d67c5dbe13567d460_1440w.png","1196440bb9c36b483cba51f3e134944f"],["/2020/03/08/工作-算法-相机成像模型/v2-4adc27fdfd0e1028ab3e1d2aaabc2d49_1440w.png","e48139157b801117ca5c3e45f01d1901"],["/2020/03/08/工作-算法-相机成像模型/v2-4b34d0de42f559659da4ee261b11c98b_1440w.png","f09f2e77bfe4208d8f5c7c871a2dce36"],["/2020/03/08/工作-算法-相机成像模型/v2-504d609395301742f3c875b3f8023731_1440w.png","648005d4b8691cb944716abd6ffd57b8"],["/2020/03/08/工作-算法-相机成像模型/v2-619b0d27a64e6fa74641670610ade0b0_1440w.png","f942db59a412aea22292a86c81efaf09"],["/2020/03/08/工作-算法-相机成像模型/v2-6d70200c60c2fb80595bd931a2167c89_1440w.png","b4529b426376face6c4574207daa7979"],["/2020/03/08/工作-算法-相机成像模型/v2-8535c6123110df3296799e1a74016612_1440w.png","cce2ee3b03569abb644351682b3fb365"],["/2020/03/08/工作-算法-相机成像模型/v2-860767727cf42fb84c60d435e41a83e4_1440w.png","8b22d91220a122351715814aa6292564"],["/2020/03/08/工作-算法-相机成像模型/v2-904b09f24a1ea84d64d425760ca8a796_1440w.png","737c7f7854d0f73eb4b50f1fb272b7f2"],["/2020/03/08/工作-算法-相机成像模型/v2-9d87d744835b0044a20f3d6559d24d31_1440w.png","dffe8695529ca3febd640d0de6c8dc9b"],["/2020/03/08/工作-算法-相机成像模型/v2-a76d8f55905611284570f06f0d77676a_1440w.png","108f2026d115be050d865b073a5056a5"],["/2020/03/08/工作-算法-相机成像模型/v2-b187fdfd286e725a3a140b003f812e6c_1440w.png","907ce16b3606190d61cd9d5bc607b060"],["/2020/03/08/工作-算法-相机成像模型/v2-bfa1bff196934d0d6e19da2b404067aa_1440w.png","bd1270672196a58081f09f06b5a026ca"],["/2020/03/08/工作-算法-相机成像模型/v2-c0dcd00c16c8315216125077d4b8ad06_1440w.png","0e5f36bf4d34cf939afdb9b727a68f42"],["/2020/03/08/工作-算法-相机成像模型/v2-e94f94883bb903f9fa8ad52581bc9033_1440w.png","715f7da6129a5d8c20f87a297a6639d6"],["/2020/03/10/学习-思考-看知乎如何赚一百万的回答有感/index.html","d077473cba4ae28d1f10ae14b5e5edd4"],["/2020/03/11/原创-畸变那些事儿/14695038608OcoPVdc_s.jpg","4b56ec8e03225d151dcf236226c0d47e"],["/2020/03/11/原创-畸变那些事儿/1583426059467.png","1df9eff7e6a371fd3a99db09fa3d1e97"],["/2020/03/11/原创-畸变那些事儿/1583499951669.png","8a30b62c328dbac23ecb3edf67af91c6"],["/2020/03/11/原创-畸变那些事儿/1583675781673.png","3d661725dcb5dc845de75b31398352ff"],["/2020/03/11/原创-畸变那些事儿/1583681903257.png","a009cae329c772165722f83e0b31014a"],["/2020/03/11/原创-畸变那些事儿/1583681934784.png","9e84ecf866a48a5055323503bd46b852"],["/2020/03/11/原创-畸变那些事儿/1583681970945.png","ead36f7a5a2a4d3b290c3c3a73d1bad3"],["/2020/03/11/原创-畸变那些事儿/1583682669887.png","edec49559ba8733e9407c9fe7c767632"],["/2020/03/11/原创-畸变那些事儿/1583683566607.png","5c09532013fdce937172b3578fac4d74"],["/2020/03/11/原创-畸变那些事儿/1583821547894.png","8e908c4e6f1d44f93ea87000c1be69c1"],["/2020/03/11/原创-畸变那些事儿/20170711145255252.gif","e6984a1d2f7ca5d1c68a38981cd5f6fb"],["/2020/03/11/原创-畸变那些事儿/20170711145319620.png","333ff16a9fbd5c50263132856e90f596"],["/2020/03/11/原创-畸变那些事儿/879a9c2b8b0f4b2da7a09ee7cf1326a6_th-1583470457857.png","4d392a3c2fff2f89bad82e0d91b7f89d"],["/2020/03/11/原创-畸变那些事儿/Fri, 06 Mar 2020 210531.png","f09f2e77bfe4208d8f5c7c871a2dce36"],["/2020/03/11/原创-畸变那些事儿/SMIA-TV-Dis.png","994de4927c6f22326ae416e067ba5367"],["/2020/03/11/原创-畸变那些事儿/bad-camberg-884454__480.jpg","c8807428db7b2c44de3af3b89667bbb2"],["/2020/03/11/原创-畸变那些事儿/bd3d1fbdc57c4ae0be86ef5f7fd2bb6e_th.jpg","80279c9134a02babfbae931a72a6f242"],["/2020/03/11/原创-畸变那些事儿/calibration_tangentialdistortion.png","57f93a8eae51d75ff7d72dbc236fe2fc"],["/2020/03/11/原创-畸变那些事儿/index.html","42cc4cba640e65bae66a46ba947998f5"],["/2020/03/11/原创-畸变那些事儿/一所计算方法举例.jpg","9bbc38e2e800aed700ab988922503185"],["/2020/03/11/原创-畸变那些事儿/切向畸变.png","648005d4b8691cb944716abd6ffd57b8"],["/Gallery/index.html","3800539e9abb305975ea3d0e1fbe8bf7"],["/about/index.html","fada54cc95280106dc3f784c12354322"],["/archives/2018/12/index.html","46c4a6cc042f6748438391f8a9e88004"],["/archives/2018/index.html","4db65374e45b2836f19c430e2b7fb3d0"],["/archives/2019/01/index.html","3941f8e42a9ffaf185f5e57b1d60d4f2"],["/archives/2019/01/page/2/index.html","108088b8c2450189cd8cac52d14c09ae"],["/archives/2019/01/page/3/index.html","b08fdde833d9ac2a60cba96a3e57151c"],["/archives/2019/02/index.html","5134bf2ba839254ca9afb0c62bfc40e6"],["/archives/2019/02/page/2/index.html","57748baecb25c35352a8d126a3c59cb2"],["/archives/2019/03/index.html","7c56416474776ac37a2de0b3edf73a9b"],["/archives/2019/03/page/2/index.html","746a5d9603f8182d4a4b5402c6f080a0"],["/archives/2019/04/index.html","be9132e7710ad5c5ea15f561453a2ad6"],["/archives/2019/index.html","15c50be492431aef4b1d9d098c2b8978"],["/archives/2019/page/2/index.html","c8e8af4a3ad9863b2533efd12798bc37"],["/archives/2019/page/3/index.html","b236c73ed3c584116052cb3db708b8a2"],["/archives/2019/page/4/index.html","086b72cd9cf0e984fa4f8b1933a081e1"],["/archives/2019/page/5/index.html","68dee0d38a7527d127745d519decbec5"],["/archives/2019/page/6/index.html","bdfd6d00c45cebb2b31c4249b3f30ac7"],["/archives/2020/01/index.html","af1510d1ebfbd2665e3a0dd87023e323"],["/archives/2020/02/index.html","7e7be4bb483ad8782636b5d01ed0f55d"],["/archives/2020/03/index.html","3af28cd4030cc6e3febbc869bd01b508"],["/archives/2020/index.html","7d2a32115cc7c3f9c2e4206496c81315"],["/archives/index.html","8891f25521d2748162099ed4759f5dec"],["/archives/page/2/index.html","5469b6de7b46ff416205fd0fa5b5d196"],["/archives/page/3/index.html","eb13e4fd547704287ca43468687e5f83"],["/archives/page/4/index.html","7cd1fb9637e1a4929591716c0bdd5faa"],["/archives/page/5/index.html","55495b2f4009350eb78200a69f23af3a"],["/archives/page/6/index.html","2bdc69fbf2d72de8286a7711dfdd03a4"],["/archives/page/7/index.html","18b9b659708971475eb5623f3b268f31"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","49e3e01b2ff88596cdf122387b14dd67"],["/categories/学习/index.html","25b793456197190ce9c1dfe51b07b627"],["/categories/学习/page/2/index.html","94db7ebdaceac302d444968fa12e2ec8"],["/categories/学习/page/3/index.html","371b76abd421685cd0ac38c31660cb0f"],["/categories/学习/工具/git/index.html","ced9f6f35260b0e5bb866f3e7eba478c"],["/categories/学习/工具/hexo/index.html","81a64337b47dcfbbcaa77e943efe55b2"],["/categories/学习/工具/index.html","2726fb0e498a29b7b7d3365fad65e920"],["/categories/学习/编程/c-c/index.html","bd191da5e86c814f2411bfb8acd5b97e"],["/categories/学习/编程/c-c/page/2/index.html","2b4351fb87a5db5e3db5408df62d35a8"],["/categories/学习/编程/index.html","6364137b0bb2f656bd49dd3da0071b30"],["/categories/学习/编程/page/2/index.html","8957c168a45a98107038132d2ef89ce2"],["/categories/学习/编程/python/index.html","bd64b8a461dae7299b16717123322c80"],["/categories/学习/编程/前端/index.html","6c13c28def534e6db87f05efd0d14e91"],["/categories/学习/编程/算法/index.html","a8b4dd32bcef3de4456a9a0d79df557f"],["/categories/工作/BUG/index.html","8596340ccbffcdd014075df794d9f4b6"],["/categories/工作/index.html","d2262ed8f2ea52bd9031b50529a331db"],["/categories/工作/page/2/index.html","7273d85c95c2846f0566267ac0b2efb5"],["/categories/工作/page/3/index.html","a236fadb3590472541bd1b5be294916d"],["/categories/工作/图像效果调试/index.html","85c310fb3d82adbc56de0db7e4031e68"],["/categories/工作/算法/index.html","ce4b9db67d533066cecd4d8fb794cd28"],["/categories/工作/编程/index.html","8b1a561d900541687fcb208e303d347b"],["/categories/工作/编程/page/2/index.html","ab69998a97114ed33f41203b50fb0641"],["/categories/工作/编程/算法/index.html","76e72695a898dd1d933f0b4c121a9d1a"],["/categories/生活/index.html","54fbe9e47816e04482f77f4c08af4d6a"],["/categories/生活/page/2/index.html","75c10833f4fcdeff0476d8820811833c"],["/categories/生活/围围/index.html","57b493ed4d2641f192080e3d17219f34"],["/categories/生活/围围/page/2/index.html","aa13d495106caffbba8daeca7739046c"],["/categories/生活/围围/围的礼物/index.html","d4ac78b5d9bfc08537fa44c6dfc3401d"],["/categories/生活/围围/诗歌/index.html","2b065a69a717fbf2e10ad0195d973638"],["/categories/生活/围围/随笔/index.html","eb9b8ffe1b6b509764f20b7ca0d3d8eb"],["/categories/生活/思考/index.html","1df85a00b68e3d7769b619c414ecbbe6"],["/css/index.css","a8667c93957ec5fae325f000be2a8e7c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","50cae110079bb6e1bf88c5b1896f4ddf"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/pwaicons/icon-128x128.png","350498e05144606fcb27fed03a82dc9b"],["/img/pwaicons/icon-144x144.png","e27b2de61e83e96b9c7d808651ad6e6c"],["/img/pwaicons/icon-152x152.png","327f325669f5e6ed3014554cae6e3589"],["/img/pwaicons/icon-192x192.png","497b4d3ea845b21a10315f690f95a812"],["/img/pwaicons/icon-384x384.png","4cf88abc9aa2dadb1dae05264d9de0b5"],["/img/pwaicons/icon-512x512.png","7d2969d7bd16aa30bf2c72286eff3206"],["/img/pwaicons/icon-72x72.png","b48cc782ab4363eda6fc856d6974f0aa"],["/img/pwaicons/icon-96x96.png","8a93594fa113cebbb2085cf9802e9dde"],["/img/wechat.jpg","8eef90d9d4f788406115a122a8711d64"],["/img/又拍云_logo6.png","e9e2fb940b6cb3c295d235d183688c0a"],["/index.html","dd618bea086934b05a98d08bcfcafef6"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/link/index.html","24b35d0ab6513284509ac9d86a762122"],["/music/index.html","9ff69ec81fac4e7206d234a96e907b4e"],["/page/2/index.html","bdb75bc273839b74005ee46a6abb9eeb"],["/page/3/index.html","9e4466bbc2fe99d0b2c196e9fb7e34b0"],["/page/4/index.html","97019f7b7af58c90466dc7d21fb16634"],["/page/5/index.html","6e87191d231a17190df51d9a602cab31"],["/page/6/index.html","dcf63bb1fba8eb5535300dc3234713df"],["/page/7/index.html","81ae410daa7533a2b01fae184256a0e4"],["/tags/2412M/index.html","44ccfc04da83dd353e5eb74c1111f0b4"],["/tags/BUG/index.html","2efe193a86afa201401ff2978a79af90"],["/tags/IR-CUT/index.html","fd8f33bc61eaaf0f028133874d60c760"],["/tags/JavaScript/index.html","6d294f8aa422f97dbb52f2afb1f0ee75"],["/tags/Makefile/index.html","8c099fd39f11936d81ce6ad1f977aa45"],["/tags/WNR/index.html","47cbdc8b349a81b7deff341888ccecf4"],["/tags/adb/index.html","ac80645438f555873b5ce309011094d1"],["/tags/c/index.html","ec271c89175fa343455eddd407e29fc1"],["/tags/camera原理/index.html","a6acfc75d424f4492ffd4419931800a5"],["/tags/cdn/index.html","448e0e6e346d3c462a4672b0c875ccb1"],["/tags/git/index.html","50f6c981f0a7e8caea48f48deb991551"],["/tags/hal/index.html","062e7764c14e6567a80c00f542b4640f"],["/tags/hexo/index.html","641618d43d390b22337a005ae7426f4c"],["/tags/index.html","f895d47a318df4ab4b41b0f6862153ef"],["/tags/markdown/index.html","481a4ad688c1b287a5e1ca9647f40c6a"],["/tags/persist-set/index.html","eced528eb63608185b275dec98b67401"],["/tags/python/index.html","dc9890609931c21b801de74bfc0eac0b"],["/tags/sensor模块/index.html","ef176fb49686b7236ef126bb6e88814f"],["/tags/version/index.html","8c1fbbff4e111e758c8d99e5fc5eedda"],["/tags/中文乱码/index.html","218ff55b5b09d78e97431a73ba28e0b4"],["/tags/代码实现/index.html","0bbaeb289984b3098fd2ad894bcbb30e"],["/tags/内存/index.html","1b273cdea31ac19dd8e876e535752b7a"],["/tags/分布式进程/index.html","7db8cb4947c972d7c14c17015931db77"],["/tags/功能实现/index.html","9103c74ba3c1096eea2b5bdf06c591b0"],["/tags/原创/index.html","babf2827e9e66ee265bbfec24425ce3a"],["/tags/围围/index.html","05354422de8b9a0de2a0b394c90d0dc8"],["/tags/围围/page/2/index.html","61d2322f6ab826287e938a934e86712a"],["/tags/增益设置/index.html","d25cc468f645ee27f88eb1029b6e419a"],["/tags/多线程/index.html","772a8318ba5caa3977e3377be090d07f"],["/tags/宝藏/index.html","d13bb98b520a640b53344a5cd88b2447"],["/tags/情书/index.html","90e936e7720672722e7f978fc3ff79db"],["/tags/惊喜/index.html","14c900b64680a1b9d67815f59e6aedcd"],["/tags/手动增益实现/index.html","407c0c5d360f9e667dcc0fcfa9c809bf"],["/tags/指针/index.html","01676be837282ea452c00568cce416bc"],["/tags/推库/index.html","f09ba8c1beee4d0d709d1b9461fc3df7"],["/tags/操作系统/index.html","eeb5acfd521cfd672cb4934cc89e8f20"],["/tags/效果调试/index.html","9ae767397a8b09af83f162579d67f7c3"],["/tags/海思camera/index.html","54a32301993f694451944fafcbeb2230"],["/tags/滤波/index.html","7bd7d4c94b0c129fcb30fa5de518b518"],["/tags/版本更新/index.html","329758813bad1ffb7106149cafe09631"],["/tags/畸变/index.html","4a71917f797c65f2941443bd4b0b2a8e"],["/tags/直方图AEC/index.html","7f354c1902274ea7a388b22b30f732f0"],["/tags/算法/index.html","c712a74bdd3354404e0ded8b4700617c"],["/tags/算法实现/index.html","3350451375304a3ea3dbef33bc693a0b"],["/tags/线程/index.html","8dec3ae9d3af22a5a105a50f79bf27a1"],["/tags/结构体/index.html","ad40c8ab4d339894b4320f04b0d9ed17"],["/tags/编程/index.html","a5d4a8c5efca7825080286bc6ea5bd77"],["/tags/网络/index.html","bd082bae473f7429002f2821d951a5ff"],["/tags/补光灯/index.html","52531d7bc0d75924bec223c81cfb3d04"],["/tags/设计模式/index.html","b6bd802e1deb28b4bd680d69f69a23c0"],["/tags/诗歌/index.html","b01ff1597bd397987960fd073e648732"],["/tags/进程/index.html","c235eef57772781ff0105b348a128ca8"],["/tags/递归/index.html","fa24f5a6ce5006b2bb2c2ab4e7f2fc3a"],["/tags/镜头/index.html","eeb5efe8ccd76ff4e3085612a2385ae1"],["/tags/闪烁/index.html","8c751015ce9a11d469ae46bd94f46a7e"],["/tags/高通/index.html","e3cf3b3d95c3bc8bfe0a16c7697eadf5"],["/tags/高通camera/index.html","7f3c6bc436820a8865930fcaacd9a773"],["/tags/高通camera/page/2/index.html","eab3e66f64d7d2ca3000876fbdb00ca1"]];
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

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"www.qinxing.xyz"});




