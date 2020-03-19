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

var precacheConfig = [["/2018/12/24/生活-围-2018-12-24-weiyi/index.html","75bc0b211708ff6434ee3a365f356f2d"],["/2018/12/25/生活-围-2018-12-25-weiyi/index.html","6fb427abaa53dc5d6ab0085305d31639"],["/2019/01/02/生活-围-2019-01-02-weiyi/index.html","8603bc2dc3b515c50af976b1e5f28186"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.1.jpg","77caaf76c11251bfa9dbb0c9b820842a"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.2.jpg","28ea4278d78f3795a1a55bc7883010de"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.3.jpg","8d95da17e87deabfc37e3beaf28fe312"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.4.jpg","18452f4cff1b43c4fe1df7f217af8337"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.5.jpg","c9361030de8c1f2cba5a9c7de580fe36"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.1.jpg","208447f9ca466578fa9a91d8922eab8e"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.2.jpg","0ebf50de6c4a942ff43c70683e24b495"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.3.jpg","db61bddc55b44154fb4619b4f9666518"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.4.jpg","3e9eda50484fd1c8ea4973801bf5a795"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.5.jpg","4a47ab25dcc8e351be2e24531a593b4b"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/3.1.jpg","1cbbafa473c0241ed0241282686babb9"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/4.1.jpg","0ef5244007bcaa717a6af76ac69ac04a"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/4.2.jpg","8ba891ba20a36961de783b86633f253d"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.1.jpg","b93f948455879510023c620ddee6a428"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.2.jpg","6f68e842a466dbd6b1b4404ae2ba2122"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.3.jpg","9ea6082a02a89293877be49c9051339a"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.4.jpg","dda31464a21f55acbcb2420a25fdce3e"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.5.jpg","8a879cd55cb12ee8b4d86bef58ce2c07"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.6.jpg","4fc795312e0e63e7e143782fb14d7e39"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/index.html","9b211eec96d08e804dac02e46f686f93"],["/2019/01/09/生活-love-2019-01-09-love/index.html","7773c2ec97ea134155ef2e9b78a3b257"],["/2019/01/10/工作-编程-ADB指令小结/index.html","7b69f6c66704a66b4f5915a86ccdf91f"],["/2019/01/11/工作-编程-背光补偿和强光抑制算法实现/index.html","9276bea643e73cb4eab4c4fda64b178e"],["/2019/01/11/生活-love-2019-01-11-love/index.html","a25ddf36d160d6773af7ee7a3a9e6f43"],["/2019/01/11/生活-围-2019-01-11-weiyi/index.html","5f139b33bc2b1ca1958eb81a5986771b"],["/2019/01/14/学习-工具-hexo-markdown常用语法/index.html","e3d927d5065b03f12a58a93bfa986e08"],["/2019/01/15/工作-图像-ADRC/adrc_brightness.jpg","f4cc547ecdd4e7ef988c897efc53259a"],["/2019/01/15/工作-图像-ADRC/index.html","c0590c032318686863b69d5be6b5a602"],["/2019/01/17/工作-BUG-BUG-手动增益过大时闪烁/index.html","1527ac14beafe89a288ca174e212b9ed"],["/2019/01/18/生活-love-2019-01-18-love/1.jpg","b4868c6b026dae21796a5cbd4e906a00"],["/2019/01/18/生活-love-2019-01-18-love/2.jpg","c1c41fcdcabe6de7328ff95386ae111b"],["/2019/01/18/生活-love-2019-01-18-love/3.jpg","fbe2513fa9e3f72f42d5a2d3ba941336"],["/2019/01/18/生活-love-2019-01-18-love/4.jpg","507a13c99f1e06b884f8da09fa1d32ec"],["/2019/01/18/生活-love-2019-01-18-love/5.jpg","79717b62eeaf65897c7eed944169a57f"],["/2019/01/18/生活-love-2019-01-18-love/index.html","204589c85efa5475cbacbd9d64ccbfdd"],["/2019/01/21/学习-工具-git-git常用命令/index.html","070e258a9953fad933071abae87f804b"],["/2019/01/21/学习-工具-hexo-hexo-多终端同步/index.html","b87c5071753c0a3626f546d9d27477aa"],["/2019/01/21/学习-编程-python-python-stats数据绘图/1.jpg","9f83806ee43ec6d46138b843900c0b60"],["/2019/01/21/学习-编程-python-python-stats数据绘图/2.jpg","a404a1413d4833599634a09ee8029923"],["/2019/01/21/学习-编程-python-python-stats数据绘图/3.jpg","254d071760788fd3294294c5765991ea"],["/2019/01/21/学习-编程-python-python-stats数据绘图/index.html","22686014d2667d9f7e6034fc4a0444f9"],["/2019/01/21/工作-编程-原有背光补偿算法实现/index.html","a6b0f003d55e750e669a835f8cede03e"],["/2019/01/21/生活-love-2019-01-21-love/1.jpg","d931f9512712af50fc43fa174ec49850"],["/2019/01/21/生活-love-2019-01-21-love/2.jpg","c5d5f754bace2091a1604118e9082020"],["/2019/01/21/生活-love-2019-01-21-love/3.jpg","c574239966b53748c2554ce87c3f3a73"],["/2019/01/21/生活-love-2019-01-21-love/4.jpg","b024d5d42464f858e48d77536fdacb2b"],["/2019/01/21/生活-love-2019-01-21-love/5.jpg","ac378567cf1c765c007bc7cbdb482f18"],["/2019/01/21/生活-love-2019-01-21-love/index.html","b20099dbd858adc3359f3d5843ed83a3"],["/2019/01/22/工作-BUG-BUG-室内灯光闪烁/index.html","928c518f409f30afc3d0ff310e3eeb8b"],["/2019/01/24/生活-围-2019-01-24-weiyi/index.html","9b30e141547b612f2aa9a69ac11bb449"],["/2019/01/29/工作-编程-chromatix重载代码实现/index.html","fb3a7db88ef6b5f8fa140770461cb884"],["/2019/01/30/工作-图像-车辆人员监控调试注意点/index.html","5b2738ea756aac7eca50d15037278d8e"],["/2019/01/30/生活-围-2019-01-30-weiyi/index.html","e90df0e3e0e1e651ad10ab93e2da12fb"],["/2019/02/01/生活-围-2019-02-01-weiyi/index.html","855102276c9bc3f550af919c0125f184"],["/2019/02/02/生活-围-2019-02-02-weiyi/index.html","51b02c56bd99d1e634b45c93378f5ac1"],["/2019/02/14/工作-编程-背光算法代码实现/index.html","f2a93ff902d863d33c82a41cd53dc653"],["/2019/02/14/生活-love-2019-02-14-love/index.html","9c0404267be0d6d7ad47cffc8d4e507b"],["/2019/02/18/学习-编程-c-void指针疑问和总结/index.html","3b1d2f2426082fc0e1c6041511b1cb0a"],["/2019/02/19/学习-编程-c-线程进程总结/index.html","37e377d4e020c27df03e3c0f499b22b1"],["/2019/02/19/学习-编程-python-Python-线程和进程/index.html","5e933fb28f4cf6b43fa4b1740947eaa4"],["/2019/02/20/学习-工具-git-问题-中文乱码/index.html","cf34f37aaeaea63d87415a90d997c675"],["/2019/02/20/学习-编程-c-c-：private外部访问问题/index.html","41ff6cdace4d64e54d242e4c31b08f3a"],["/2019/02/20/工作-编程-高通代码学习与体会/index.html","61c6e48b2fad3327e184643a6afd345c"],["/2019/02/21/生活-love-2019-02-21-love/index.html","74b9146a01aa2975cc33d36263d5e51e"],["/2019/02/22/工作-算法-强光识别算法实现/index.html","83ce39c01f5e8498b858d1560fbb9284"],["/2019/02/25/学习-工具-hexo-hexo-相册功能实现/index.html","ba39dc8e09cda01dfaa9eb6d7f354d60"],["/2019/02/27/学习-编程-c-c-二维数组参数传递/index.html","5fcb0ac99f4962f9ad3b84d028154d01"],["/2019/02/27/学习-编程-算法-五子棋算法设计/index.html","c559e2ddc0df5b27bb0b71294312b64f"],["/2019/02/27/学习-编程-算法-递归函数设计/index.html","5f3ecb808b07679a439b97b65b25309d"],["/2019/03/01/工作-编程-高通设备代码更新及版本更换/index.html","4875fbaa034a1f519098fd47654f7ee1"],["/2019/03/04/学习-编程-前端-JavaScript学习/index.html","7f017ecf1d470b1afd543b15484730f9"],["/2019/03/07/工作-BUG-BUG-增益设置不正确/index.html","7bad3206b62fea377e77822432a02d58"],["/2019/03/07/工作-编程-8056平台aec模块重载chromatix功能实现/index.html","d50fa531eb33f1c7f6c6f230c4c1238a"],["/2019/03/08/工作-BUG-BUG-AE打印延迟/index.html","29c8d3a41ebef3d0d2190fe9f0639378"],["/2019/03/08/工作-图像-高通WNR滤波理解/index.html","b035fc27f3574ec9df9f21de4f83577b"],["/2019/03/13/学习-编程-c-makefile编译模板/index.html","f35f8b5dc8ff00f62d4cfdb0bf075cfe"],["/2019/03/13/工作-编程-sensor模块区分不同型号的逻辑/index.html","6cd561764a297e315a27293ec9ffa9f7"],["/2019/03/14/工作-编程-手动快门增益功能实现/index.html","777fdf0cf2842fa8c7798e74f6278499"],["/2019/03/19/学习-编程-c-c-动态内存分配/index.html","040373a3ed024d07f83b1e70bacc71b7"],["/2019/03/19/学习-编程-c-c-结构和联合/index.html","1c6a95a5954ca48d48a0ad71f3dc899d"],["/2019/03/19/学习-编程-python-python-网络编程/index.html","86ea088cd22e9aa4ecd6ba3cd9a2035a"],["/2019/03/20/学习-编程-c-c-使用结构和指针/index.html","ee917c92770a18157cb736eded6f4486"],["/2019/03/20/工作-编程-编译版本信息打印功能实现/index.html","72949aa5eecdf041499d41f9ffc7d744"],["/2019/03/22/工作-编程-2412M设备补光灯及IR-CUT调试/index.html","50f52af3bf0782beefa2ed4d5d1f1c34"],["/2019/04/01/学习-编程-c-C-设计模式/index.html","16cbf7b33186ad5e56fd32a2ad19fcce"],["/2019/04/12/学习-编程-c-同步与互斥/index.html","79e32982869a4dc4bb5af4259fd57c56"],["/2019/04/12/学习-编程-c-线程学习/index.html","9494fcfe1cbfd6ef01c44a071d2a45b6"],["/2019/05/20/生活-推荐-网站推荐/index.html","e76041c738b5c0ba3ecd4bc711f8d8b3"],["/2019/05/27/学习-工具-vscode-vscode使用技巧/index.html","d2b28af7edf4dd4b0f56f3a7adbad7b4"],["/2019/07/16/工作-编程-高通660平台实现实时切换采集帧率/index.html","7961b1da4b5ae1dababb052dac76b59f"],["/2019/07/25/工作-编程-高通预览流实现60帧/1584288030980.png","ba14ba9916ad791fdf34aa4d78aeba1a"],["/2019/07/25/工作-编程-高通预览流实现60帧/index.html","e9b26ad0fcb04ed7e640609b6bafe80d"],["/2019/08/06/工作-BUG-BUG-高温导致帧率异常/index.html","b01ad95f9f5824344299a8338b113654"],["/2019/11/26/工作-算法-深度学习简介/1584538518218.png","3397e2ddfac0bce0c9161c35d6074d6a"],["/2019/11/26/工作-算法-深度学习简介/1584538775923.png","66a0a90a61dfdc152b3213a89ba3af9e"],["/2019/11/26/工作-算法-深度学习简介/1584538805796.png","e37cbace494e75b34f41c44c8fd18e6c"],["/2019/11/26/工作-算法-深度学习简介/1584538822068.png","cb419cfb7210e28f521ee09803f2a246"],["/2019/11/26/工作-算法-深度学习简介/1584538842934.png","9f910ce583059e0ebd56ba6500f5c2f0"],["/2019/11/26/工作-算法-深度学习简介/1584538855608.png","5e4dc19392073c9b9068055b4385dcdc"],["/2019/11/26/工作-算法-深度学习简介/1584539085149.png","c86e44f18c957a1bf7275463e0d636c9"],["/2019/11/26/工作-算法-深度学习简介/1584539135418.png","3c0fca48e3b85bd75b2331215a51a711"],["/2019/11/26/工作-算法-深度学习简介/1584539149546.png","5eb669e78477b00345be45ec62c08141"],["/2019/11/26/工作-算法-深度学习简介/1584539161436.png","f74547aead6ca6d4e6ea6207d8340638"],["/2019/11/26/工作-算法-深度学习简介/1584539189846.png","d4caf2227c74216658c771db5cf95839"],["/2019/11/26/工作-算法-深度学习简介/1584539217241.png","e9cd9a5e3821bdf6a1df1fb67d748622"],["/2019/11/26/工作-算法-深度学习简介/1584539242812.png","b9b40c99a2f3a59f5029f357c4bb17cd"],["/2019/11/26/工作-算法-深度学习简介/index.html","3bba69b23ab98a97bd1b9c433f444f84"],["/2019/11/27/工作-算法-AI超微光/1584540035684.png","4a13fcb91e1be936cb6d7e70481da795"],["/2019/11/27/工作-算法-AI超微光/1584540832671.png","aac47d8484500b97fe73898f44bd12ad"],["/2019/11/27/工作-算法-AI超微光/AL超微光流程.png","2e6acf94c1082eb56a9ee91ee691a51a"],["/2019/11/27/工作-算法-AI超微光/index.html","bccaa84282162014e7a90fda17f60ff1"],["/2020/01/21/学习-工具-hexo-利用又拍云cdn加速github-pages/1583892494033.png","74967fa27de66cfa15ace1044b9a5f41"],["/2020/01/21/学习-工具-hexo-利用又拍云cdn加速github-pages/1583892988361.png","418f7591a3833fb39255992003c9e79d"],["/2020/01/21/学习-工具-hexo-利用又拍云cdn加速github-pages/index.html","b2997bb9c6af91855b9bfa0d5eb54f73"],["/2020/02/29/工作-BUG-BUG-两路摄像头偶尔不能同时切换日夜模式/index.html","4cd474a77afb65ef82ff4e0542d773b7"],["/2020/03/01/学习-工具-hexo-hexo-butterfly主题迁移/index.html","e3c1e4e3fdbfc8f73088d1091486f6f9"],["/2020/03/08/工作-算法-相机成像模型/1583672734274.png","30115caac8c8af46ff1e829959c04778"],["/2020/03/08/工作-算法-相机成像模型/1583672771781.png","666c4302d69880501897e62c3092baa7"],["/2020/03/08/工作-算法-相机成像模型/1583672783896.png","654d9fa326be5542d8e28d4ba12bba45"],["/2020/03/08/工作-算法-相机成像模型/1583672798775.png","aec8ce57454e98f1e135ba9db4823d4c"],["/2020/03/08/工作-算法-相机成像模型/1583672833260.png","941607e5c85db141f8887273a01a3057"],["/2020/03/08/工作-算法-相机成像模型/1583672845339.png","921f2f552082720dd4f53991fa6cc2cc"],["/2020/03/08/工作-算法-相机成像模型/1583672858973.png","b3b845e616a58b17942839ce8eebca22"],["/2020/03/08/工作-算法-相机成像模型/1583673008090.png","669b627c7d9e3772adec8eed99e4630e"],["/2020/03/08/工作-算法-相机成像模型/1583673022764.png","1e163334eea502fc460e83cf823efdb1"],["/2020/03/08/工作-算法-相机成像模型/20161027215101234.jpg","dacf251a2937cdb56e5aee0b91a0bead"],["/2020/03/08/工作-算法-相机成像模型/index.html","e898ef83add82ad356c6ca7bf66b9b67"],["/2020/03/08/工作-算法-相机成像模型/v2-084365a995c90a05793383d030edad4c_1440w.png","0e343a206dd8fc826786d4dc73e0b52c"],["/2020/03/08/工作-算法-相机成像模型/v2-09d962a72f187320ca46e409fd6b364f_1440w.png","48b6997cd269025569f0c1d91ebc7b56"],["/2020/03/08/工作-算法-相机成像模型/v2-0dc276d40437a5f17ed0ec039b18953f_1440w.png","20e886becc3baf2411a16f711c9eca2e"],["/2020/03/08/工作-算法-相机成像模型/v2-1259ab99566c20fb28c30ee2d0e6fcfb_1440w.png","7fe25c637f77c2fbd7761dff2cff018c"],["/2020/03/08/工作-算法-相机成像模型/v2-3f443a32bacc0ed8ec9df0a6b60eadc0_1440w.png","d90d042637eaf730f252c53b25ee8a12"],["/2020/03/08/工作-算法-相机成像模型/v2-47be6823de88962d67c5dbe13567d460_1440w.png","1196440bb9c36b483cba51f3e134944f"],["/2020/03/08/工作-算法-相机成像模型/v2-4adc27fdfd0e1028ab3e1d2aaabc2d49_1440w.png","e48139157b801117ca5c3e45f01d1901"],["/2020/03/08/工作-算法-相机成像模型/v2-4b34d0de42f559659da4ee261b11c98b_1440w.png","f09f2e77bfe4208d8f5c7c871a2dce36"],["/2020/03/08/工作-算法-相机成像模型/v2-504d609395301742f3c875b3f8023731_1440w.png","648005d4b8691cb944716abd6ffd57b8"],["/2020/03/08/工作-算法-相机成像模型/v2-619b0d27a64e6fa74641670610ade0b0_1440w.png","f942db59a412aea22292a86c81efaf09"],["/2020/03/08/工作-算法-相机成像模型/v2-6d70200c60c2fb80595bd931a2167c89_1440w.png","b4529b426376face6c4574207daa7979"],["/2020/03/08/工作-算法-相机成像模型/v2-8535c6123110df3296799e1a74016612_1440w.png","cce2ee3b03569abb644351682b3fb365"],["/2020/03/08/工作-算法-相机成像模型/v2-860767727cf42fb84c60d435e41a83e4_1440w.png","8b22d91220a122351715814aa6292564"],["/2020/03/08/工作-算法-相机成像模型/v2-904b09f24a1ea84d64d425760ca8a796_1440w.png","737c7f7854d0f73eb4b50f1fb272b7f2"],["/2020/03/08/工作-算法-相机成像模型/v2-9d87d744835b0044a20f3d6559d24d31_1440w.png","dffe8695529ca3febd640d0de6c8dc9b"],["/2020/03/08/工作-算法-相机成像模型/v2-a76d8f55905611284570f06f0d77676a_1440w.png","108f2026d115be050d865b073a5056a5"],["/2020/03/08/工作-算法-相机成像模型/v2-b187fdfd286e725a3a140b003f812e6c_1440w.png","907ce16b3606190d61cd9d5bc607b060"],["/2020/03/08/工作-算法-相机成像模型/v2-bfa1bff196934d0d6e19da2b404067aa_1440w.png","bd1270672196a58081f09f06b5a026ca"],["/2020/03/08/工作-算法-相机成像模型/v2-c0dcd00c16c8315216125077d4b8ad06_1440w.png","0e5f36bf4d34cf939afdb9b727a68f42"],["/2020/03/08/工作-算法-相机成像模型/v2-e94f94883bb903f9fa8ad52581bc9033_1440w.png","715f7da6129a5d8c20f87a297a6639d6"],["/2020/03/10/学习-思考-看知乎如何赚一百万的回答有感/index.html","18a7a18d7a14547e69b0c35e2193bed6"],["/2020/03/11/原创-畸变那些事儿/14695038608OcoPVdc_s.jpg","4b56ec8e03225d151dcf236226c0d47e"],["/2020/03/11/原创-畸变那些事儿/1583426059467.png","1df9eff7e6a371fd3a99db09fa3d1e97"],["/2020/03/11/原创-畸变那些事儿/1583499951669.png","8a30b62c328dbac23ecb3edf67af91c6"],["/2020/03/11/原创-畸变那些事儿/1583675781673.png","3d661725dcb5dc845de75b31398352ff"],["/2020/03/11/原创-畸变那些事儿/1583681903257.png","a009cae329c772165722f83e0b31014a"],["/2020/03/11/原创-畸变那些事儿/1583681934784.png","9e84ecf866a48a5055323503bd46b852"],["/2020/03/11/原创-畸变那些事儿/1583681970945.png","ead36f7a5a2a4d3b290c3c3a73d1bad3"],["/2020/03/11/原创-畸变那些事儿/1583682669887.png","edec49559ba8733e9407c9fe7c767632"],["/2020/03/11/原创-畸变那些事儿/1583683566607.png","5c09532013fdce937172b3578fac4d74"],["/2020/03/11/原创-畸变那些事儿/1583821547894.png","8e908c4e6f1d44f93ea87000c1be69c1"],["/2020/03/11/原创-畸变那些事儿/20170711145255252.gif","e6984a1d2f7ca5d1c68a38981cd5f6fb"],["/2020/03/11/原创-畸变那些事儿/20170711145319620.png","333ff16a9fbd5c50263132856e90f596"],["/2020/03/11/原创-畸变那些事儿/879a9c2b8b0f4b2da7a09ee7cf1326a6_th-1583470457857.png","4d392a3c2fff2f89bad82e0d91b7f89d"],["/2020/03/11/原创-畸变那些事儿/Fri, 06 Mar 2020 210531.png","f09f2e77bfe4208d8f5c7c871a2dce36"],["/2020/03/11/原创-畸变那些事儿/SMIA-TV-Dis.png","994de4927c6f22326ae416e067ba5367"],["/2020/03/11/原创-畸变那些事儿/bad-camberg-884454__480.jpg","c8807428db7b2c44de3af3b89667bbb2"],["/2020/03/11/原创-畸变那些事儿/bd3d1fbdc57c4ae0be86ef5f7fd2bb6e_th.jpg","80279c9134a02babfbae931a72a6f242"],["/2020/03/11/原创-畸变那些事儿/calibration_tangentialdistortion.png","57f93a8eae51d75ff7d72dbc236fe2fc"],["/2020/03/11/原创-畸变那些事儿/index.html","fc1daaec2ce330ccb6221632071f5cf0"],["/2020/03/11/原创-畸变那些事儿/一所计算方法举例.jpg","9bbc38e2e800aed700ab988922503185"],["/2020/03/11/原创-畸变那些事儿/切向畸变.png","648005d4b8691cb944716abd6ffd57b8"],["/2020/03/11/工作-BUG-BUG-红外回调不生效/index.html","5f064cf62055376bae484e3753b5ee47"],["/2020/03/12/工作-BUG-BUG-畸变校正不生效/f0c18288-1de3-4c2f-8811-3a8354be5218_1d808b11-dc95-4acf-81fe-05e86b38e90b@kedacom.com.png","173333ae54517ace623968d3776615c5"],["/2020/03/12/工作-BUG-BUG-畸变校正不生效/index.html","0ed8d870148ec2d0f7a932251ee730ca"],["/Gallery/index.html","b43f31a91f23afa9cd878b6a01cdc1c9"],["/about/index.html","6cbd952869377528ba344399c815b8f8"],["/archives/2018/12/index.html","860275a5a9a0dca55093ae47f6759859"],["/archives/2018/index.html","0d8356a37f372d533b014ca13b056a50"],["/archives/2019/01/index.html","1133c890f02049b0785a4267649b2cd6"],["/archives/2019/01/page/2/index.html","56cd415fbd61704babe9d3b8e963ba77"],["/archives/2019/01/page/3/index.html","07683ed42abf516e78bffd3488ad898f"],["/archives/2019/02/index.html","5d4a6ad1487db42151513bcbefb6a2dc"],["/archives/2019/02/page/2/index.html","ee4f9442023071af2966c476c88486db"],["/archives/2019/03/index.html","cfe92301aba7b98c5a95ad2f76a3243a"],["/archives/2019/03/page/2/index.html","65afd8f69e0a291b7021246fde7f4e7d"],["/archives/2019/04/index.html","9a0c175aabf23e2305b640f3ccc29d5c"],["/archives/2019/05/index.html","3336c058350219d471dd93e0127eb724"],["/archives/2019/07/index.html","e3bbf8bdb7120b398f9a99655f7dba7d"],["/archives/2019/08/index.html","6c09965eb45a5f28c62ce3da41e25505"],["/archives/2019/11/index.html","34479fe7af85ba7a7b45fd013566af8f"],["/archives/2019/index.html","f0bc1c5c2c6aeabb1356a38b73388f97"],["/archives/2019/page/2/index.html","ad29379fe195d6d576325a27854310a6"],["/archives/2019/page/3/index.html","480f54a0e5b68c499917894efa9c817e"],["/archives/2019/page/4/index.html","26989279288f13fea892f9aa24e46e12"],["/archives/2019/page/5/index.html","9094bef8704e058f1af83ac59e6cd9f6"],["/archives/2019/page/6/index.html","c664a00ab20072cb7a61ea96c8556446"],["/archives/2019/page/7/index.html","ef2c804d3f089ab8de44f23e440addbe"],["/archives/2020/01/index.html","ac487d7bdb3e4eb0e46094f3813beae5"],["/archives/2020/02/index.html","1ddb7f20d5fda6e2b09eb089ff409dca"],["/archives/2020/03/index.html","11cd4f6a61f7f5dbcbe062370243cb74"],["/archives/2020/index.html","6a8f52bed2bd171a6efddda8a7cacbca"],["/archives/index.html","4ac4fa086fe02eb6c46dae08f496b28c"],["/archives/page/2/index.html","50f16e65e25800136034c13bbaaf1a58"],["/archives/page/3/index.html","098ecfe775108bbc4c7a87eb5aaea4fa"],["/archives/page/4/index.html","cc7d35a3d95bf996f73fba24000bf0b2"],["/archives/page/5/index.html","68d7eb6ad7387c19f03a9188f03a9eed"],["/archives/page/6/index.html","08fff99d08c1db37e982acdf1d7bf406"],["/archives/page/7/index.html","9413ae7914a44e243eec04725e7080f8"],["/archives/page/8/index.html","5735b01eaaf66c9462ad9ce084064ea4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","95a1588ae6a68c8d888fba8501273388"],["/categories/学习/index.html","d2f33dc3ea7073837aac5edbbf3f27d1"],["/categories/学习/page/2/index.html","20297b1ac4bf3cc406379dc83206bbaa"],["/categories/学习/page/3/index.html","ec4fc030d5431d5432390065c0cb559b"],["/categories/学习/工具/git/index.html","02692b433accbacda837a4d41bfa54ef"],["/categories/学习/工具/hexo/index.html","111a66c304dd925acb7a13da8f1ed3fc"],["/categories/学习/工具/index.html","19f022c535f4d1f89f5954b64f763001"],["/categories/学习/工具/vscode/index.html","b2ec044250dd802752df6e3bcb381d1c"],["/categories/学习/编程/c-c/index.html","dc9003a712c206a5df069b02cab35f8d"],["/categories/学习/编程/c-c/page/2/index.html","a94ff8bd4488889ccdd91ab8462e2bc5"],["/categories/学习/编程/index.html","c32fd87565f0cef485c4d81e65887b52"],["/categories/学习/编程/page/2/index.html","ee5d2f0c9e13e73bda768a470f577f70"],["/categories/学习/编程/python/index.html","15b2416543e382a14bec17189ff39e09"],["/categories/学习/编程/前端/index.html","aaeb8c15d1f5e6b0ba2b98dabedcc90e"],["/categories/学习/编程/算法/index.html","a92521f721140b53afed0fe6e965c85f"],["/categories/工作/BUG/index.html","7c8c95cd709196683fb6cefef39fabaa"],["/categories/工作/index.html","25f937421a66664e07a367f97dde4f76"],["/categories/工作/page/2/index.html","70e71288727f2088e8cbf4cfb118f938"],["/categories/工作/page/3/index.html","c7bc8bbc04ac468e8142a25a7639970d"],["/categories/工作/page/4/index.html","8724bed8e61f8b55c355937027ee797e"],["/categories/工作/图像效果调试/index.html","f89c179210b0db1efb6c9cfa68d176b5"],["/categories/工作/算法/index.html","be73fc5eed8cd0173465abc77206d5e8"],["/categories/工作/编程/index.html","32897ed6a150da6990364ac6f4b48b26"],["/categories/工作/编程/page/2/index.html","4c6b5d426bd2108551c9ddd270632107"],["/categories/工作/编程/算法/index.html","7a834ab2b1f54f160d9b523243d5f956"],["/categories/生活/index.html","10d0f915815429db1dfa6cade37bc597"],["/categories/生活/page/2/index.html","e685b0a4b8c22133949c14a8e852c500"],["/categories/生活/围围/index.html","a139f4f4977a97007a3556142bbeece5"],["/categories/生活/围围/page/2/index.html","b73f9a6626a5aa66d822e0d04a33e473"],["/categories/生活/围围/围的礼物/index.html","50a34c98687b068ed3408e7b27ebaeec"],["/categories/生活/围围/诗歌/index.html","af30f91b3baba9eb9e1c628b28ba64c5"],["/categories/生活/围围/随笔/index.html","86803e1977cf23d85da64fd2b9b9411c"],["/categories/生活/思考/index.html","e81098f2f0c5657fee0f066122a0fdb0"],["/categories/生活/推荐/index.html","8bb8508b03cd3cc4999e120f83fc1a96"],["/css/index.css","a8667c93957ec5fae325f000be2a8e7c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","50cae110079bb6e1bf88c5b1896f4ddf"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/pwaicons/icon-128x128.png","350498e05144606fcb27fed03a82dc9b"],["/img/pwaicons/icon-144x144.png","e27b2de61e83e96b9c7d808651ad6e6c"],["/img/pwaicons/icon-152x152.png","327f325669f5e6ed3014554cae6e3589"],["/img/pwaicons/icon-192x192.png","497b4d3ea845b21a10315f690f95a812"],["/img/pwaicons/icon-384x384.png","4cf88abc9aa2dadb1dae05264d9de0b5"],["/img/pwaicons/icon-512x512.png","7d2969d7bd16aa30bf2c72286eff3206"],["/img/pwaicons/icon-72x72.png","b48cc782ab4363eda6fc856d6974f0aa"],["/img/pwaicons/icon-96x96.png","8a93594fa113cebbb2085cf9802e9dde"],["/img/wechat.jpg","8eef90d9d4f788406115a122a8711d64"],["/img/又拍云_logo6.png","e9e2fb940b6cb3c295d235d183688c0a"],["/index.html","55e8fcb5b93aaf883a50367bdb2270e7"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/link/index.html","d5fc3139ca3ded9e6cb6687df2e96acc"],["/music/index.html","f1434499b4dc5d38c4edb9bf37a224f5"],["/page/2/index.html","bc470cbc8d094a9be5c2157818a499f2"],["/page/3/index.html","14e889ef0213a13bb08f1b7dd9fb464f"],["/page/4/index.html","6a6d957cadb6c449d6d2e38dbfd95750"],["/page/5/index.html","6af3a8b95b3ea79ecc5d7f54b3f84d65"],["/page/6/index.html","9b224c3c9ebe3d5e56e26e1a477be096"],["/page/7/index.html","3a07d3bc28fee1cf5a875c238dc4f124"],["/page/8/index.html","43e06e9a6745b46ec95ebc79fe2798b0"],["/tags/2412M/index.html","de8397734b85125ffe053dbb8d606955"],["/tags/BUG/index.html","24666a300c58bc26a10091a9438bebfa"],["/tags/IR-CUT/index.html","1892cfd70368f6397770d03824999c0b"],["/tags/JavaScript/index.html","d8c273fa7e7476062b86288c158b5f0a"],["/tags/Makefile/index.html","1558312f3f8489fccdd19a31113c936a"],["/tags/WNR/index.html","95aed0f9901162bb2e41832cfd8eae12"],["/tags/adb/index.html","47b34586db674d3b2baff7dcd08cc839"],["/tags/c-c/index.html","91d9aabb5760a0f66b69ba9346ff3b9e"],["/tags/c/index.html","b66b40c1cd47738222bd329ae3e2e20b"],["/tags/camera原理/index.html","2d15e6e4bd37ef1ac431b04b7041fa77"],["/tags/cdn/index.html","6e6a88d587804ccd5913acf3287364ff"],["/tags/git/index.html","1128310e6c617288833fda10abf72bf6"],["/tags/hal/index.html","070c18c31dd1fd26e1d76fb5219cb168"],["/tags/hexo/index.html","7d2d248f57a017fb2411a853351e8fe0"],["/tags/index.html","dc1c3f499f33586b3ee00ab03d22aaf9"],["/tags/markdown/index.html","c8d18f4fb18a14d86b0259d3c9cf4a8b"],["/tags/persist-set/index.html","4872a9db26700919a8bf45eec3760bad"],["/tags/python/index.html","fd00a805a70834016cb61a2f8382598a"],["/tags/sensor模块/index.html","a30f9bba4b1a9a94f234f571eb6f6787"],["/tags/version/index.html","71a71ebbba2b5bcd460a87e0b389861a"],["/tags/vscode/index.html","3cddb909397f3eca7864829a071ec530"],["/tags/中文乱码/index.html","786460fdf595f6ac65ac48e3de882ef5"],["/tags/代码实现/index.html","0a47acd16ff3715fb7d68c31fbfa56cb"],["/tags/使用技巧/index.html","810a17bd939e7d4f9e8ee110fa168256"],["/tags/内存/index.html","11ac1a360c5167243deed5f1dff1d487"],["/tags/分布式进程/index.html","e4a3932cdf65b1d6a7bf0bc8ddbb4cbf"],["/tags/功能实现/index.html","1331801afd2d474243e5ceb6b49e9501"],["/tags/原创/index.html","3be62f6897b41e93f7a18d33b621500c"],["/tags/围围/index.html","c0bb9280239195355640c0ec4ae3bdc8"],["/tags/围围/page/2/index.html","87ba3185bce26911127c988383e280a9"],["/tags/增益设置/index.html","98908f3659b49018fe7b86fd47684340"],["/tags/多线程/index.html","1942e2dcf3fdefac72dcdc0154e407e5"],["/tags/宝藏/index.html","33f5233bd2a385b6e6124c3d6ab24932"],["/tags/帧率/index.html","21c082e6311fb7eb11e717c142b3ed4b"],["/tags/情书/index.html","6d66c71325123e2bfe53d2efcd1a8915"],["/tags/惊喜/index.html","25c991a8d1346514c16d99c53888c9b1"],["/tags/手动增益实现/index.html","ac24d7076e5036e71f11b83fadcd30c1"],["/tags/指针/index.html","64e084d499ab3d5e4c4f3a00b02f0447"],["/tags/推库/index.html","323646ce7769116fb45860267fb6131b"],["/tags/推荐/index.html","2909b552dd44c25811857c21e5beaea2"],["/tags/操作系统/index.html","92bd7880cef5fe0b0c28de9d3e92aab7"],["/tags/效果调试/index.html","b590f9fc311717eb81459ec4d3418840"],["/tags/海思camera/index.html","6b8035cab5d18227096c0f40f11627aa"],["/tags/深度学习/index.html","f143b0f677e6d96aa22fb236fb515d7c"],["/tags/滤波/index.html","d92c6716994a020fc96ef95371b311f1"],["/tags/版本更新/index.html","6be181004438e4b765863fb6fedb8b41"],["/tags/畸变/index.html","6eec2518f76840d84c7ad4898280486c"],["/tags/直方图AEC/index.html","c37de7b3ad614baa5f5e552b596ef9cf"],["/tags/算法/index.html","1954936b21a109dcfe69226c926e3b39"],["/tags/算法实现/index.html","4fc09a105df7dac2785b91423eaef3a6"],["/tags/线程/index.html","4f6e34707781d2a9275e6a4d9e4b2e7f"],["/tags/结构体/index.html","28853c119d3cb26a90b131e4e6d6e3c2"],["/tags/编程/index.html","a163ced807867c8a37460968140b363a"],["/tags/网站/index.html","0921464e266e8cf2349e801c360ff9df"],["/tags/网络/index.html","2e37f89ec97ea36aa4a7bbff28988ca2"],["/tags/补光灯/index.html","bf62a84e99c688d4834228b991b06e5f"],["/tags/设计模式/index.html","382c1f6af6eec0e971feee6222fc12cf"],["/tags/诗歌/index.html","01f9047b650a61e53ecfd62e5708d3f8"],["/tags/进程/index.html","b1bcf1d13b546cf5116bc848483b6294"],["/tags/递归/index.html","cc1b4a5d608806a3c81743b99eff77f5"],["/tags/镜头/index.html","7c542eab883618afca2216083b9826f1"],["/tags/闪烁/index.html","408dd7cececd4fb407855f28ba209d2d"],["/tags/高通/index.html","7ce368f4e7eb4177b3e78ce1300a57b7"],["/tags/高通camera/index.html","702f11b1400ab6ffbb014807e07cc057"],["/tags/高通camera/page/2/index.html","5dbb6ad0f8753fac190485d85733b996"]];
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




