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

var precacheConfig = [["/2018/12/24/生活-围-2018-12-24-weiyi/index.html","e103052faea8231135023014ca5a75c5"],["/2018/12/25/生活-围-2018-12-25-weiyi/index.html","eda6b1a1a43186ab862d51dc0f65227c"],["/2019/01/02/生活-围-2019-01-02-weiyi/index.html","ef2540210ba4a0bebcf43711c1839b4f"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.1.jpg","77caaf76c11251bfa9dbb0c9b820842a"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.2.jpg","28ea4278d78f3795a1a55bc7883010de"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.3.jpg","8d95da17e87deabfc37e3beaf28fe312"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.4.jpg","18452f4cff1b43c4fe1df7f217af8337"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.5.jpg","c9361030de8c1f2cba5a9c7de580fe36"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.1.jpg","208447f9ca466578fa9a91d8922eab8e"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.2.jpg","0ebf50de6c4a942ff43c70683e24b495"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.3.jpg","db61bddc55b44154fb4619b4f9666518"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.4.jpg","3e9eda50484fd1c8ea4973801bf5a795"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.5.jpg","4a47ab25dcc8e351be2e24531a593b4b"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/3.1.jpg","1cbbafa473c0241ed0241282686babb9"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/4.1.jpg","0ef5244007bcaa717a6af76ac69ac04a"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/4.2.jpg","8ba891ba20a36961de783b86633f253d"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.1.jpg","b93f948455879510023c620ddee6a428"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.2.jpg","6f68e842a466dbd6b1b4404ae2ba2122"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.3.jpg","9ea6082a02a89293877be49c9051339a"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.4.jpg","dda31464a21f55acbcb2420a25fdce3e"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.5.jpg","8a879cd55cb12ee8b4d86bef58ce2c07"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.6.jpg","4fc795312e0e63e7e143782fb14d7e39"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/index.html","f4958e0fd55de3c184c98e21ebd81ef3"],["/2019/01/09/生活-love-2019-01-09-love/index.html","99d9f6f43531fcad80588c5294b58d82"],["/2019/01/10/工作-编程-ADB指令小结/index.html","5783e4a7bc4aa66ffbc0e0a4500aa3b4"],["/2019/01/11/工作-编程-背光补偿和强光抑制算法实现/index.html","0195ac3707b31a629d7ac2a85d48c4c4"],["/2019/01/11/生活-love-2019-01-11-love/index.html","4af0853bbc659b3815b20af7b1f88d58"],["/2019/01/11/生活-围-2019-01-11-weiyi/index.html","35cb936fcc2dc161c3091c85d396549a"],["/2019/01/14/学习-工具-hexo-markdown常用语法/index.html","f620f0ead648f083a01054b77c5b9bdb"],["/2019/01/15/工作-图像-ADRC/adrc_brightness.jpg","f4cc547ecdd4e7ef988c897efc53259a"],["/2019/01/15/工作-图像-ADRC/index.html","2435cbc16b413b2533e235d2da36f443"],["/2019/01/17/工作-BUG-BUG-手动增益过大时闪烁/index.html","4bb746f7d75fcf4c290a127ff1c6e481"],["/2019/01/18/生活-love-2019-01-18-love/1.jpg","b4868c6b026dae21796a5cbd4e906a00"],["/2019/01/18/生活-love-2019-01-18-love/2.jpg","c1c41fcdcabe6de7328ff95386ae111b"],["/2019/01/18/生活-love-2019-01-18-love/3.jpg","fbe2513fa9e3f72f42d5a2d3ba941336"],["/2019/01/18/生活-love-2019-01-18-love/4.jpg","507a13c99f1e06b884f8da09fa1d32ec"],["/2019/01/18/生活-love-2019-01-18-love/5.jpg","79717b62eeaf65897c7eed944169a57f"],["/2019/01/18/生活-love-2019-01-18-love/index.html","8b0a534495c195e56d92410604d98378"],["/2019/01/21/学习-工具-git-git常用命令/index.html","2e5ef125b77013df206a6d6596f101b4"],["/2019/01/21/学习-工具-hexo-hexo-多终端同步/index.html","402135cd4ecde470a05311148d40eaa8"],["/2019/01/21/学习-编程-python-python-stats数据绘图/1.jpg","9f83806ee43ec6d46138b843900c0b60"],["/2019/01/21/学习-编程-python-python-stats数据绘图/2.jpg","a404a1413d4833599634a09ee8029923"],["/2019/01/21/学习-编程-python-python-stats数据绘图/3.jpg","254d071760788fd3294294c5765991ea"],["/2019/01/21/学习-编程-python-python-stats数据绘图/index.html","e8bdc1af0dfdc8b01d5cb9db0ea1c1a9"],["/2019/01/21/工作-编程-原有背光补偿算法实现/index.html","57228b665657b18d0019eee7729bb4ed"],["/2019/01/21/生活-love-2019-01-21-love/1.jpg","d931f9512712af50fc43fa174ec49850"],["/2019/01/21/生活-love-2019-01-21-love/2.jpg","c5d5f754bace2091a1604118e9082020"],["/2019/01/21/生活-love-2019-01-21-love/3.jpg","c574239966b53748c2554ce87c3f3a73"],["/2019/01/21/生活-love-2019-01-21-love/4.jpg","b024d5d42464f858e48d77536fdacb2b"],["/2019/01/21/生活-love-2019-01-21-love/5.jpg","ac378567cf1c765c007bc7cbdb482f18"],["/2019/01/21/生活-love-2019-01-21-love/index.html","be5025dd3834ed770551901bb212b6ef"],["/2019/01/22/工作-BUG-BUG-室内灯光闪烁/index.html","ca0d2a03ad5af7848d13d21501199168"],["/2019/01/24/生活-围-2019-01-24-weiyi/index.html","d298d769bbc9f8b54dc731709e48df02"],["/2019/01/29/工作-编程-chromatix重载代码实现/index.html","058df3a75fafac56412b474c63756d0c"],["/2019/01/30/工作-图像-车辆人员监控调试注意点/index.html","2dac40ef50d04d267ed8db3771e736eb"],["/2019/01/30/生活-围-2019-01-30-weiyi/index.html","1ffd3c070bfc23bf27b5d09b7b36b4f8"],["/2019/02/01/生活-围-2019-02-01-weiyi/index.html","f430e08a79fa24dd635a947cbdfbfe54"],["/2019/02/02/生活-围-2019-02-02-weiyi/index.html","f30b37c95c5a14b9dbdbdd88d30d06a5"],["/2019/02/14/工作-编程-背光算法代码实现/index.html","14f3aafdb9b364176c69a4e2e3a99da3"],["/2019/02/14/生活-love-2019-02-14-love/index.html","29f8cbd332e1656300f2611310a4985f"],["/2019/02/18/学习-编程-c-void指针疑问和总结/index.html","a853233c9fc4d9a6ae65537eef35f1fb"],["/2019/02/19/学习-编程-c-线程进程总结/index.html","a3b959c0ada1b20f3728c0a4c1aad475"],["/2019/02/19/学习-编程-python-Python-线程和进程/index.html","0e052268fb20d8ae52c3c82abc03b899"],["/2019/02/20/学习-工具-git-问题-中文乱码/index.html","b271d455e6b76d3246c2d8e8ff550f79"],["/2019/02/20/学习-编程-c-c-：private外部访问问题/index.html","452034b6f3b3ef43928c406eebde4055"],["/2019/02/20/工作-编程-高通代码学习与体会/index.html","42de5ef3e98687755fb7df5bdd5b8d40"],["/2019/02/21/生活-love-2019-02-21-love/index.html","628cd51dfe813db6dab112acbd55d4c8"],["/2019/02/22/工作-算法-强光识别算法实现/index.html","5ca8581b467fd58da9680d0283bcac2d"],["/2019/02/25/学习-工具-hexo-hexo-相册功能实现/index.html","b0338d77e8382325a3071fa355351d50"],["/2019/02/27/学习-编程-c-c-二维数组参数传递/index.html","365af79bd6e2d56c0ae01c4f929dced0"],["/2019/02/27/学习-编程-算法-五子棋算法设计/index.html","a2291e3173b3c318446ccedd60941171"],["/2019/02/27/学习-编程-算法-递归函数设计/index.html","687b72f560ebd4ff749981d36a9ece24"],["/2019/03/01/工作-编程-高通设备代码更新及版本更换/index.html","0d8dda2294fffea3b9c60535bbcc4dde"],["/2019/03/04/学习-编程-前端-JavaScript学习/index.html","91c89595165cb4dea6b41b082dd0e7eb"],["/2019/03/07/工作-BUG-BUG-增益设置不正确/index.html","504901cba2b41e61da4a532b9c3b14f5"],["/2019/03/07/工作-编程-8056平台aec模块重载chromatix功能实现/index.html","1186091a211212a5a61c6360e46326be"],["/2019/03/08/工作-BUG-BUG-AE打印延迟/index.html","6d5fff39c20812d8f0cf1c01afe69de4"],["/2019/03/08/工作-图像-高通WNR滤波理解/index.html","e847e1c198429dd66a4c68b113c8d63c"],["/2019/03/13/学习-编程-c-makefile编译模板/index.html","4b4fac2f8b0cffce63117d73c1085ff9"],["/2019/03/13/工作-编程-sensor模块区分不同型号的逻辑/index.html","a354a9f34e332faccd14b4d8106135ce"],["/2019/03/14/工作-编程-手动快门增益功能实现/index.html","0c7bc6920e9305000446c8dfaf8902cc"],["/2019/03/19/学习-编程-c-c-动态内存分配/index.html","e89069842b9c069a718c1942691f3f8c"],["/2019/03/19/学习-编程-c-c-结构和联合/index.html","5e670e7c65376d01184fe78d6820b492"],["/2019/03/19/学习-编程-python-python-网络编程/index.html","839029ea196a1ee6b92ae5013c7ca405"],["/2019/03/20/学习-编程-c-c-使用结构和指针/index.html","c6d50b1a2101599a756196d5a8a95bca"],["/2019/03/20/工作-编程-编译版本信息打印功能实现/index.html","b5c079504fc6da9484a743c680c1929f"],["/2019/03/22/工作-编程-2412M设备补光灯及IR-CUT调试/index.html","17e9f4256ee308b9f7842b3f1db99760"],["/2019/04/01/学习-编程-c-C-设计模式/index.html","2ab2a7348ad7876604bf3abeda21fa8d"],["/2019/04/12/学习-编程-c-同步与互斥/index.html","52c601b1f8b3242340c81f5592f487d3"],["/2019/04/12/学习-编程-c-线程学习/index.html","f745a09d5b640feb30a8c157965fdab9"],["/2020/01/21/学习-工具-hexo-利用又拍云cdn加速github-pages/1583892494033.png","74967fa27de66cfa15ace1044b9a5f41"],["/2020/01/21/学习-工具-hexo-利用又拍云cdn加速github-pages/1583892988361.png","418f7591a3833fb39255992003c9e79d"],["/2020/01/21/学习-工具-hexo-利用又拍云cdn加速github-pages/index.html","4a917cc62c5399aa670ff6912053b840"],["/2020/02/29/工作-BUG-BUG-两路摄像头偶尔不能同时切换日夜模式/index.html","78f9c29b9ac7d1cc163575ce4a5761e7"],["/2020/03/01/学习-工具-hexo-hexo-butterfly主题迁移/index.html","85c7196d09078861cb2eabcbb85c2a04"],["/2020/03/08/工作-算法-相机成像模型/1583672734274.png","30115caac8c8af46ff1e829959c04778"],["/2020/03/08/工作-算法-相机成像模型/1583672771781.png","666c4302d69880501897e62c3092baa7"],["/2020/03/08/工作-算法-相机成像模型/1583672783896.png","654d9fa326be5542d8e28d4ba12bba45"],["/2020/03/08/工作-算法-相机成像模型/1583672798775.png","aec8ce57454e98f1e135ba9db4823d4c"],["/2020/03/08/工作-算法-相机成像模型/1583672833260.png","941607e5c85db141f8887273a01a3057"],["/2020/03/08/工作-算法-相机成像模型/1583672845339.png","921f2f552082720dd4f53991fa6cc2cc"],["/2020/03/08/工作-算法-相机成像模型/1583672858973.png","b3b845e616a58b17942839ce8eebca22"],["/2020/03/08/工作-算法-相机成像模型/1583673008090.png","669b627c7d9e3772adec8eed99e4630e"],["/2020/03/08/工作-算法-相机成像模型/1583673022764.png","1e163334eea502fc460e83cf823efdb1"],["/2020/03/08/工作-算法-相机成像模型/20161027215101234.jpg","dacf251a2937cdb56e5aee0b91a0bead"],["/2020/03/08/工作-算法-相机成像模型/index.html","b69970c5d5f18f196a611a05991dfd39"],["/2020/03/08/工作-算法-相机成像模型/v2-084365a995c90a05793383d030edad4c_1440w.png","0e343a206dd8fc826786d4dc73e0b52c"],["/2020/03/08/工作-算法-相机成像模型/v2-09d962a72f187320ca46e409fd6b364f_1440w.png","48b6997cd269025569f0c1d91ebc7b56"],["/2020/03/08/工作-算法-相机成像模型/v2-0dc276d40437a5f17ed0ec039b18953f_1440w.png","20e886becc3baf2411a16f711c9eca2e"],["/2020/03/08/工作-算法-相机成像模型/v2-1259ab99566c20fb28c30ee2d0e6fcfb_1440w.png","7fe25c637f77c2fbd7761dff2cff018c"],["/2020/03/08/工作-算法-相机成像模型/v2-3f443a32bacc0ed8ec9df0a6b60eadc0_1440w.png","d90d042637eaf730f252c53b25ee8a12"],["/2020/03/08/工作-算法-相机成像模型/v2-47be6823de88962d67c5dbe13567d460_1440w.png","1196440bb9c36b483cba51f3e134944f"],["/2020/03/08/工作-算法-相机成像模型/v2-4adc27fdfd0e1028ab3e1d2aaabc2d49_1440w.png","e48139157b801117ca5c3e45f01d1901"],["/2020/03/08/工作-算法-相机成像模型/v2-4b34d0de42f559659da4ee261b11c98b_1440w.png","f09f2e77bfe4208d8f5c7c871a2dce36"],["/2020/03/08/工作-算法-相机成像模型/v2-504d609395301742f3c875b3f8023731_1440w.png","648005d4b8691cb944716abd6ffd57b8"],["/2020/03/08/工作-算法-相机成像模型/v2-619b0d27a64e6fa74641670610ade0b0_1440w.png","f942db59a412aea22292a86c81efaf09"],["/2020/03/08/工作-算法-相机成像模型/v2-6d70200c60c2fb80595bd931a2167c89_1440w.png","b4529b426376face6c4574207daa7979"],["/2020/03/08/工作-算法-相机成像模型/v2-8535c6123110df3296799e1a74016612_1440w.png","cce2ee3b03569abb644351682b3fb365"],["/2020/03/08/工作-算法-相机成像模型/v2-860767727cf42fb84c60d435e41a83e4_1440w.png","8b22d91220a122351715814aa6292564"],["/2020/03/08/工作-算法-相机成像模型/v2-904b09f24a1ea84d64d425760ca8a796_1440w.png","737c7f7854d0f73eb4b50f1fb272b7f2"],["/2020/03/08/工作-算法-相机成像模型/v2-9d87d744835b0044a20f3d6559d24d31_1440w.png","dffe8695529ca3febd640d0de6c8dc9b"],["/2020/03/08/工作-算法-相机成像模型/v2-a76d8f55905611284570f06f0d77676a_1440w.png","108f2026d115be050d865b073a5056a5"],["/2020/03/08/工作-算法-相机成像模型/v2-b187fdfd286e725a3a140b003f812e6c_1440w.png","907ce16b3606190d61cd9d5bc607b060"],["/2020/03/08/工作-算法-相机成像模型/v2-bfa1bff196934d0d6e19da2b404067aa_1440w.png","bd1270672196a58081f09f06b5a026ca"],["/2020/03/08/工作-算法-相机成像模型/v2-c0dcd00c16c8315216125077d4b8ad06_1440w.png","0e5f36bf4d34cf939afdb9b727a68f42"],["/2020/03/08/工作-算法-相机成像模型/v2-e94f94883bb903f9fa8ad52581bc9033_1440w.png","715f7da6129a5d8c20f87a297a6639d6"],["/2020/03/10/学习-思考-看知乎如何赚一百万的回答有感/index.html","423a157598a0e0c9a9f0e98975fa9204"],["/2020/03/11/原创-畸变那些事儿/14695038608OcoPVdc_s.jpg","4b56ec8e03225d151dcf236226c0d47e"],["/2020/03/11/原创-畸变那些事儿/1583426059467.png","1df9eff7e6a371fd3a99db09fa3d1e97"],["/2020/03/11/原创-畸变那些事儿/1583499951669.png","8a30b62c328dbac23ecb3edf67af91c6"],["/2020/03/11/原创-畸变那些事儿/1583675781673.png","3d661725dcb5dc845de75b31398352ff"],["/2020/03/11/原创-畸变那些事儿/1583681903257.png","a009cae329c772165722f83e0b31014a"],["/2020/03/11/原创-畸变那些事儿/1583681934784.png","9e84ecf866a48a5055323503bd46b852"],["/2020/03/11/原创-畸变那些事儿/1583681970945.png","ead36f7a5a2a4d3b290c3c3a73d1bad3"],["/2020/03/11/原创-畸变那些事儿/1583682669887.png","edec49559ba8733e9407c9fe7c767632"],["/2020/03/11/原创-畸变那些事儿/1583683566607.png","5c09532013fdce937172b3578fac4d74"],["/2020/03/11/原创-畸变那些事儿/1583821547894.png","8e908c4e6f1d44f93ea87000c1be69c1"],["/2020/03/11/原创-畸变那些事儿/20170711145255252.gif","e6984a1d2f7ca5d1c68a38981cd5f6fb"],["/2020/03/11/原创-畸变那些事儿/20170711145319620.png","333ff16a9fbd5c50263132856e90f596"],["/2020/03/11/原创-畸变那些事儿/879a9c2b8b0f4b2da7a09ee7cf1326a6_th-1583470457857.png","4d392a3c2fff2f89bad82e0d91b7f89d"],["/2020/03/11/原创-畸变那些事儿/Fri, 06 Mar 2020 210531.png","f09f2e77bfe4208d8f5c7c871a2dce36"],["/2020/03/11/原创-畸变那些事儿/SMIA-TV-Dis.png","994de4927c6f22326ae416e067ba5367"],["/2020/03/11/原创-畸变那些事儿/bad-camberg-884454__480.jpg","c8807428db7b2c44de3af3b89667bbb2"],["/2020/03/11/原创-畸变那些事儿/bd3d1fbdc57c4ae0be86ef5f7fd2bb6e_th.jpg","80279c9134a02babfbae931a72a6f242"],["/2020/03/11/原创-畸变那些事儿/calibration_tangentialdistortion.png","57f93a8eae51d75ff7d72dbc236fe2fc"],["/2020/03/11/原创-畸变那些事儿/index.html","f34f7380869fbc04e58282ab26c88ef5"],["/2020/03/11/原创-畸变那些事儿/一所计算方法举例.jpg","9bbc38e2e800aed700ab988922503185"],["/2020/03/11/原创-畸变那些事儿/切向畸变.png","648005d4b8691cb944716abd6ffd57b8"],["/Gallery/index.html","087b5d38cb0668eb216da384a3e53704"],["/about/index.html","03d9e4ae9dd3df5d5f8fb3975106225e"],["/archives/2018/12/index.html","17a85c23e80b01f2aebb868bfdbc17d3"],["/archives/2018/index.html","698bdba45930ac5d449da3155129dfeb"],["/archives/2019/01/index.html","a451a92111ab5e9a9b78d965fff31381"],["/archives/2019/01/page/2/index.html","29eab4c5be5c32ecf6d734fcf5189f42"],["/archives/2019/01/page/3/index.html","34de1b7fd9cdfe4ac269083f596ffeee"],["/archives/2019/02/index.html","96bc8db88104673cef4d09893606343a"],["/archives/2019/02/page/2/index.html","e860eb7efbec2cfa4c56b865d6a10793"],["/archives/2019/03/index.html","daa28ea3b656594f9511b1dcefe9b05d"],["/archives/2019/03/page/2/index.html","73043f8fcf938edc4868bf0075cd625b"],["/archives/2019/04/index.html","05f82d4a80cf84dcf7a6e4633712a5e6"],["/archives/2019/index.html","4b0870f45855dc37091bf28ef8bdcee1"],["/archives/2019/page/2/index.html","79959de198a0f909179d5137f8dc859f"],["/archives/2019/page/3/index.html","461e7f8c603ff938b8071abb75d1174b"],["/archives/2019/page/4/index.html","05a8d96c37ced9cf229126f74f0313c1"],["/archives/2019/page/5/index.html","5dea6d0cc821e058dde9a27851645f88"],["/archives/2019/page/6/index.html","5f7566bc3baea2fb7d930b621dfce5fe"],["/archives/2020/01/index.html","5349611d6ff1e28ad3ecf36ca3c8e261"],["/archives/2020/02/index.html","00c67eaf5c5a58bb9714b1ec971f13dc"],["/archives/2020/03/index.html","70bd34b46357cd410c25ef6b212bff0a"],["/archives/2020/index.html","00635d779cd3227a8ad6729a6cd4d533"],["/archives/index.html","7eccdda42e308b4fb9c7f0b8d4b1d97e"],["/archives/page/2/index.html","d15064f526f145cc6d29dfa9036d7bb2"],["/archives/page/3/index.html","f4e06e3ba30e83463b49ed4638234e2b"],["/archives/page/4/index.html","5daed3cc91119412a44a2a8c35c039fc"],["/archives/page/5/index.html","ccd02d22bbaa16670f826c343e741732"],["/archives/page/6/index.html","bf13aa73183d5373ced73399ae2077d7"],["/archives/page/7/index.html","53a63c4aef6607999fc89f23099f48ec"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","cbeb9cca28a7de343c1d4f49dff0635d"],["/categories/学习/index.html","39872c0fb44fc56cfc06cf1ea2503427"],["/categories/学习/page/2/index.html","6635ccc565e1cd9fa880dbf768718375"],["/categories/学习/page/3/index.html","5736afb240a41c1b6d33545957e66436"],["/categories/学习/工具/git/index.html","932f75a20c5082f7513e20fbf2c61725"],["/categories/学习/工具/hexo/index.html","dedb1984fc7a93c7dbac5a502147e7d8"],["/categories/学习/工具/index.html","0d3662d27af5a4eb1fc250484b84ba54"],["/categories/学习/编程/c-c/index.html","781f1a4faabadbab2aee2e703907d58f"],["/categories/学习/编程/c-c/page/2/index.html","9a985229bfe61a892cb27a4857f7ba98"],["/categories/学习/编程/index.html","a76453b5f931cfb6879013670a19f56c"],["/categories/学习/编程/page/2/index.html","de1b6d203c8c1812f710f6fbd947d157"],["/categories/学习/编程/python/index.html","ee2de18930a13767c740294399fc1ec3"],["/categories/学习/编程/前端/index.html","a3b4f714e91ed707204dd902684f4143"],["/categories/学习/编程/算法/index.html","8c223351be89f41bf2a287bccb9bfd8a"],["/categories/工作/BUG/index.html","a407a957458c5afc9e6e0ae2c8d05cbd"],["/categories/工作/index.html","5e02e8621d27192411efdc592b663e1e"],["/categories/工作/page/2/index.html","9a18db297a3f8ca05eda1ee88bdd64ea"],["/categories/工作/page/3/index.html","202ed958bb0cc991fde5c817fc2e1ce0"],["/categories/工作/图像效果调试/index.html","96e1eb1867ca1127deac911220972840"],["/categories/工作/算法/index.html","db34fb99f4aab97dffdda28455b12201"],["/categories/工作/编程/index.html","416f5a6d84af26067a3018d50b778582"],["/categories/工作/编程/page/2/index.html","789102ed0a474cf46ae5e792040ca223"],["/categories/工作/编程/算法/index.html","9b9c8b757a7812eb72fc6aaf982519c4"],["/categories/生活/index.html","6125b4c7fc7d04e15030080a107bb3d6"],["/categories/生活/page/2/index.html","aa69f86a18a27ec795131bcc1d116fe4"],["/categories/生活/围围/index.html","fbdcccafb53022d45f3474a3dc2b82d8"],["/categories/生活/围围/page/2/index.html","7ed66dea1288502f4eedb2ebf26f033c"],["/categories/生活/围围/围的礼物/index.html","b5f3f9e10e3f87049a682efdaa9c0a93"],["/categories/生活/围围/诗歌/index.html","5e50b0bd1f15839f5b1c94cf796ef06d"],["/categories/生活/围围/随笔/index.html","201adb36e176ec6026f9893bc245757b"],["/categories/生活/思考/index.html","2d3e379d8971b52f2f1d0122f2ebe905"],["/css/index.css","a8667c93957ec5fae325f000be2a8e7c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","50cae110079bb6e1bf88c5b1896f4ddf"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/pwaicons/icon-128x128.png","350498e05144606fcb27fed03a82dc9b"],["/img/pwaicons/icon-144x144.png","e27b2de61e83e96b9c7d808651ad6e6c"],["/img/pwaicons/icon-152x152.png","327f325669f5e6ed3014554cae6e3589"],["/img/pwaicons/icon-192x192.png","497b4d3ea845b21a10315f690f95a812"],["/img/pwaicons/icon-384x384.png","4cf88abc9aa2dadb1dae05264d9de0b5"],["/img/pwaicons/icon-512x512.png","7d2969d7bd16aa30bf2c72286eff3206"],["/img/pwaicons/icon-72x72.png","b48cc782ab4363eda6fc856d6974f0aa"],["/img/pwaicons/icon-96x96.png","8a93594fa113cebbb2085cf9802e9dde"],["/img/wechat.jpg","8eef90d9d4f788406115a122a8711d64"],["/img/又拍云_logo6.png","e9e2fb940b6cb3c295d235d183688c0a"],["/index.html","8877ab183d60c4ba29a0a256a3a53f0c"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/link/index.html","2ce088e2ac14048deda7532cb6f376c4"],["/music/index.html","e1e73604da93f137d217e88979fd019a"],["/page/2/index.html","57c39d8ee02dd9af138b341db0ad78f4"],["/page/3/index.html","c3b1441cfc9d124e9d73e163df6733f0"],["/page/4/index.html","697c7df3178146227a159049c97dfe10"],["/page/5/index.html","9eac8319513c15fe2571e3cfe3030f9a"],["/page/6/index.html","1e2cb8804c90bc6e4b1ccefd88a85de3"],["/page/7/index.html","92b420f1659882ab2bce1c0a3d204b66"],["/tags/2412M/index.html","db8e613b39a0fde82d2a8acbea837f44"],["/tags/BUG/index.html","d37382995bae5bf90228bfc862bdc602"],["/tags/IR-CUT/index.html","edaa6f63bb17ad863abf6e2d92c397af"],["/tags/JavaScript/index.html","ad0857bf116e6bae9771300ace6b6a9e"],["/tags/Makefile/index.html","c2faa1b4350e2bfbc24bc51438815758"],["/tags/WNR/index.html","27ff18fd07c2cd85bd213cb0ce0fc411"],["/tags/adb/index.html","00aeb51d8d85cd75435530860c0daa87"],["/tags/c/index.html","2d9f562f1bc53928044f9fe3a28f6f86"],["/tags/camera原理/index.html","2fde34d6c41772b9852e96bc21671f98"],["/tags/cdn/index.html","791c4ab2cec7042c9035ab51ec757f1a"],["/tags/git/index.html","adb4afa407fdfcdfe9a65cc35e436d26"],["/tags/hal/index.html","d85c4a790b7c5958b3f9e8f30442d29c"],["/tags/hexo/index.html","d3db99d89039f79d039da06d1c3878b2"],["/tags/index.html","dd606be86438ed13f2f5a54edbdb83ab"],["/tags/markdown/index.html","4e5c97d38f31aa2ff979983e59e52250"],["/tags/persist-set/index.html","87a6a8660f2fca8f4b43bd0cca49fb43"],["/tags/python/index.html","f34b8969d63bd83c57d4986c98965016"],["/tags/sensor模块/index.html","3a277a3daef649bead92a098cd0b7515"],["/tags/version/index.html","e4426b05a155f98aa3d2be702165a9e1"],["/tags/中文乱码/index.html","64ee67b1fcc1950b671a3c8dad1cee62"],["/tags/代码实现/index.html","5bdb5dee2056ceff919981539c709a99"],["/tags/内存/index.html","7c18a033373835347033ff6fef595781"],["/tags/分布式进程/index.html","a4f56fbf952da04e32e203ec04174fb0"],["/tags/功能实现/index.html","7b05397480f36211a23356bc4f0ada5e"],["/tags/原创/index.html","84c41fe7e1c63825a176e63aa190d7fe"],["/tags/围围/index.html","cabc8cd6e9c600c53bb0798eb9006389"],["/tags/围围/page/2/index.html","a4b48f9ee98110b165bfb8ffbc41437a"],["/tags/增益设置/index.html","cb75b8db32dc8aff91553d3899ae7c10"],["/tags/多线程/index.html","fd3c27b5f1b76a50c77558aa2a93b73b"],["/tags/宝藏/index.html","f91291d3007b21fe6139cc2bac89b4b2"],["/tags/情书/index.html","7dacb21e6af953916178c662d49f6240"],["/tags/惊喜/index.html","163d4cc1e9809180683f6a82d9abb44e"],["/tags/手动增益实现/index.html","62aade4877a56c9661b5ce1a7f8fa74c"],["/tags/指针/index.html","6d26f97b5269fe961d0cb15460bf181e"],["/tags/推库/index.html","c0bad94d941b0380b6261b7223ed72c9"],["/tags/操作系统/index.html","a713cef4511de974a26d07f460620ee0"],["/tags/效果调试/index.html","2d1b02dde4f0b217851332266603d1bf"],["/tags/海思camera/index.html","5e73b67955a412c7fb24aa7f0ebc406e"],["/tags/滤波/index.html","8638c1f4a6ff41c42c8edd55045763d7"],["/tags/版本更新/index.html","379835a0580918118ec25b5088194301"],["/tags/畸变/index.html","23a6aee2468d535ccfb6d6f7396e1069"],["/tags/直方图AEC/index.html","aaf63660d125de2270adfda47656e9e9"],["/tags/算法/index.html","0866ce44f4126002b16379d5565d551d"],["/tags/算法实现/index.html","9d94ff322081d6a9f229c8547689d81f"],["/tags/线程/index.html","dddc3804087a55d99efe93b38f448c28"],["/tags/结构体/index.html","447a1ad0fa69719774f0b012d0b31706"],["/tags/编程/index.html","d8279834a4cf08da58291e3bfcdd8094"],["/tags/网络/index.html","5a63e3707f8077187afa418842641e48"],["/tags/补光灯/index.html","a5d4ada36589f5408804b0cbee9cb6a5"],["/tags/设计模式/index.html","c09d9efce88cd478b1c09a241bc26364"],["/tags/诗歌/index.html","457ecc57759083ca147b6b8b036345c6"],["/tags/进程/index.html","7e7f9c138b55657fa3a68e372f07e1d9"],["/tags/递归/index.html","0c7a4bccd4a123c040ea07de2466178e"],["/tags/镜头/index.html","3ac7f2d9cbc572b0cf227a1d22babfd7"],["/tags/闪烁/index.html","7385bc51db1c8c145ce652f501d94c33"],["/tags/高通/index.html","64a57b85ddb89fc19469d416edb5b41e"],["/tags/高通camera/index.html","7cf32b3212a97f3efc56cc573dec4ce3"],["/tags/高通camera/page/2/index.html","e8d71b38638b0883e5c91be60d394e0b"]];
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




