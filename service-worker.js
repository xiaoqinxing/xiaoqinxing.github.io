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

var precacheConfig = [["/2018/12/24/生活-围-2018-12-24-weiyi/index.html","65a5b7fb7f95a0a48ac993bef7d4b240"],["/2018/12/25/生活-围-2018-12-25-weiyi/index.html","5be5846bd593250135d19f5afe1d1c8b"],["/2019/01/02/生活-围-2019-01-02-weiyi/index.html","7090451726cacb0f2220784e735e2c3d"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.1.jpg","77caaf76c11251bfa9dbb0c9b820842a"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.2.jpg","28ea4278d78f3795a1a55bc7883010de"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.3.jpg","8d95da17e87deabfc37e3beaf28fe312"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.4.jpg","18452f4cff1b43c4fe1df7f217af8337"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/1.5.jpg","c9361030de8c1f2cba5a9c7de580fe36"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.1.jpg","208447f9ca466578fa9a91d8922eab8e"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.2.jpg","0ebf50de6c4a942ff43c70683e24b495"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.3.jpg","db61bddc55b44154fb4619b4f9666518"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.4.jpg","3e9eda50484fd1c8ea4973801bf5a795"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/2.5.jpg","4a47ab25dcc8e351be2e24531a593b4b"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/3.1.jpg","1cbbafa473c0241ed0241282686babb9"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/4.1.jpg","0ef5244007bcaa717a6af76ac69ac04a"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/4.2.jpg","8ba891ba20a36961de783b86633f253d"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.1.jpg","b93f948455879510023c620ddee6a428"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.2.jpg","6f68e842a466dbd6b1b4404ae2ba2122"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.3.jpg","9ea6082a02a89293877be49c9051339a"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.4.jpg","dda31464a21f55acbcb2420a25fdce3e"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.5.jpg","8a879cd55cb12ee8b4d86bef58ce2c07"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/5.6.jpg","4fc795312e0e63e7e143782fb14d7e39"],["/2019/01/09/工作-图像-sdm660-ISP效果调试总结/index.html","ebf98f07baca739097919ffcbce4bb1a"],["/2019/01/09/生活-love-2019-01-09-love/index.html","c56dc0f01b8c8af4f3e59e47ebce875c"],["/2019/01/10/工作-编程-ADB指令小结/index.html","2eaff3eddac06ff93d8ad1132af0b029"],["/2019/01/11/工作-图像-背光补偿和强光抑制算法实现/index.html","81c35c2a3ef7fbde92ee8b530f25aacd"],["/2019/01/11/生活-love-2019-01-11-love/index.html","b13d854a9cb2a4060b5641d43fee273b"],["/2019/01/11/生活-围-2019-01-11-weiyi/index.html","613ba17d1cc16083db3c61122deab796"],["/2019/01/14/学习-hexo-markdown常用语法/index.html","8a06b1fa5c894b9bfa9687f27ea0e724"],["/2019/01/15/工作-图像-ADRC/adrc_brightness.jpg","f4cc547ecdd4e7ef988c897efc53259a"],["/2019/01/15/工作-图像-ADRC/index.html","e2c1235682cf9b286ede04ddc9af1978"],["/2019/01/17/工作-图像-BUG-手动增益过大时闪烁/bug1-1583661012571.jpg","d3eead3abf34119d8e058205df83b967"],["/2019/01/17/工作-图像-BUG-手动增益过大时闪烁/index.html","41e07a3bf343aaa1ab6e69f20670cebe"],["/2019/01/18/生活-love-2019-01-18-love/1.jpg","b4868c6b026dae21796a5cbd4e906a00"],["/2019/01/18/生活-love-2019-01-18-love/2.jpg","c1c41fcdcabe6de7328ff95386ae111b"],["/2019/01/18/生活-love-2019-01-18-love/3.jpg","fbe2513fa9e3f72f42d5a2d3ba941336"],["/2019/01/18/生活-love-2019-01-18-love/4.jpg","507a13c99f1e06b884f8da09fa1d32ec"],["/2019/01/18/生活-love-2019-01-18-love/5.jpg","79717b62eeaf65897c7eed944169a57f"],["/2019/01/18/生活-love-2019-01-18-love/index.html","2ca93587d16385a5876dc862cd6055ba"],["/2019/01/21/old-2019-01-21-git/index.html","d77e2866a693c47e0e75362bf1f6175d"],["/2019/01/21/old-2019-01-21-hexo/index.html","53c69c95d2fce0fe7f38a7c48d8b8976"],["/2019/01/21/old-2019-01-21-work/1.jpg","97afe5b2b383a7ec664d0574d3c364b3"],["/2019/01/21/old-2019-01-21-work/2.jpg","0f39d603176af141a04324508e51cec8"],["/2019/01/21/old-2019-01-21-work/3.jpg","80c3a032a79b33ed5355e6160d31b1b7"],["/2019/01/21/old-2019-01-21-work/index.html","45bb68c9030f270b5b9ec7cf653d0209"],["/2019/01/21/学习-python-python-stats数据绘图/1.jpg","9f83806ee43ec6d46138b843900c0b60"],["/2019/01/21/学习-python-python-stats数据绘图/2.jpg","a404a1413d4833599634a09ee8029923"],["/2019/01/21/学习-python-python-stats数据绘图/3.jpg","254d071760788fd3294294c5765991ea"],["/2019/01/21/学习-python-python-stats数据绘图/index.html","a200d07b35c5cc49a1098fbcc58169b2"],["/2019/01/21/生活-love-2019-01-21-love/1.jpg","d931f9512712af50fc43fa174ec49850"],["/2019/01/21/生活-love-2019-01-21-love/2.jpg","c5d5f754bace2091a1604118e9082020"],["/2019/01/21/生活-love-2019-01-21-love/3.jpg","c574239966b53748c2554ce87c3f3a73"],["/2019/01/21/生活-love-2019-01-21-love/4.jpg","b024d5d42464f858e48d77536fdacb2b"],["/2019/01/21/生活-love-2019-01-21-love/5.jpg","ac378567cf1c765c007bc7cbdb482f18"],["/2019/01/21/生活-love-2019-01-21-love/index.html","c7def1229677547bacc421d5544a762e"],["/2019/01/22/old-2019-01-22-work/index.html","2ce5527ac3d874124edab111b21d2013"],["/2019/01/24/生活-围-2019-01-24-weiyi/index.html","44912de36d401f4f1c6f80c984229c5e"],["/2019/01/29/old-2019-01-29-work/index.html","6f56c8f25cb89ddd6eea7364f15864a4"],["/2019/01/30/old-2019-01-30-work/index.html","438eb91ec34b28f7601973baddbed07b"],["/2019/01/30/生活-围-2019-01-30-weiyi/index.html","246627b4883337f612e6f129f1a6d795"],["/2019/02/01/生活-围-2019-02-01-weiyi/index.html","2b446cb5aefbc473c2d3bff450d6d1ae"],["/2019/02/02/生活-围-2019-02-02-weiyi/index.html","8a58c13215f8060e162e0ee4841fc75f"],["/2019/02/14/old-2019-02-14-work/index.html","630755467f77fa1a319a2578778c7e45"],["/2019/02/14/生活-love-2019-02-14-love/index.html","63f19bddb89916a76f36cbc1b624f6da"],["/2019/02/18/old-2019-02-18-work-void总结/index.html","d825041225b8f59128fc57fab799a216"],["/2019/02/19/old-2019-02-19-study/index.html","0567c1a8a44d7c67b822d9955655241a"],["/2019/02/19/old-2019-02-19-work/index.html","2c8d415875ed3e3363aac2d9bb16337f"],["/2019/02/20/old-2019-02-20-work-c-：private外部访问问题/index.html","54bfb577758767e7514c6b1504135c00"],["/2019/02/20/old-2019-02-20-work/index.html","2b49979db855e46d37cc64c67d2a8769"],["/2019/02/20/old-2019-02-21-work-问题：中文乱码/index.html","b4b33e8d425008c063f81e41be72a938"],["/2019/02/21/生活-love-2019-02-21-love/index.html","7f099595f761a9be9c0c0ce476ccfe17"],["/2019/02/22/old-2019-02-21-work-强光识别算法实现/index.html","758df95b37cde770bca00f0772a5c1d3"],["/2019/02/25/old-2019-02-25-blog/index.html","4bf69028302aa3e8af0530f0a2d7d9b7"],["/2019/02/27/old-2019-02-27-study-五子棋算法设计/index.html","fd2fd12875caa1fc06bb9d0c726e9ac5"],["/2019/02/27/old-2019-02-27-work-c-：二维数组参数传递/index.html","328d7a1b47fb57b57a8b39fe23984da5"],["/2019/02/27/old-2019-02-27-work-递归函数设计/index.html","912619fd2247dbb7c6a609a4603046e2"],["/2019/03/01/old-2019-03-01-work-高通设备代码更新及版本更换/index.html","e26691c972b5c3482df76b846ed28573"],["/2019/03/04/old-2019-03-01-study-JavaScript学习/index.html","c6693953db20172221a6b0eaf525afbe"],["/2019/03/07/old-2019-03-07-8056平台aec模块重载chromatix功能实现/index.html","1036b41fb98ded2f62610cffbcf85a7c"],["/2020/03/02/old-2019-03-07-work-BUG-增益设置不正确/index.html","870d9faa5088ec0fd79f0c4a9dd03431"],["/2020/03/02/old-2019-03-08-work-BUG-AE打印延迟/index.html","f9927c689d2bb64b0b2483385f4b1040"],["/2020/03/02/old-2019-03-08-高通WNR滤波理解/index.html","da06fe05e95c008319be61b681563e9b"],["/2020/03/02/old-2019-03-13-makefile编译模板/index.html","092735aa8ba1bcbf1d2575cb4939c179"],["/2020/03/02/old-2019-03-13-sensor模块区分不同型号的逻辑/index.html","9e233c5c520abe807d97513c5368e1c0"],["/2020/03/02/old-2019-03-14-手动快门增益功能实现/index.html","38a9a0529fbf067628e8423e13bae106"],["/2020/03/02/old-2019-03-19-study-c-动态内存分配/index.html","9ff09aafc76d0e5e7278f21610c47f04"],["/2020/03/02/old-2019-03-19-study-c-结构和联合/index.html","0cabc4db80dd3d71507f3fb036ab2b44"],["/2020/03/02/old-2019-03-19-study-python网络编程/index.html","b509cb463a4fad4636011141a96acda9"],["/2020/03/02/old-2019-03-20-study-c-使用结构和指针/index.html","cd238fa5e557b04a14dc54cd6cf95a52"],["/2020/03/02/old-2019-03-20-work-编译版本信息打印功能实现/index.html","7397afc489161e4888670037f2dcbab0"],["/2020/03/02/old-2019-03-22-work-2412M设备补光灯及IR-CUT调试/index.html","81d01b7c2b264f5679be18ff5b150b06"],["/2020/03/02/old-2019-04-01-study-C-设计模式/index.html","4146b01bf3c4a3b335a2ddb6872d0282"],["/2020/03/02/old-2019-04-12-study-同步与互斥/index.html","6f3514613e7de1835f03d6effcb3da5d"],["/2020/03/02/old-2019-04-12-study-线程学习/index.html","678b4b00937caa992adc17b81994aa8b"],["/2020/03/05/学习-hexo-hexo-butterfly主题迁移/index.html","a5173390e1d009fb2957cf14d93aa419"],["/2020/03/06/工作-图像-畸变那些事儿/14695038608OcoPVdc_s.jpg","4b56ec8e03225d151dcf236226c0d47e"],["/2020/03/06/工作-图像-畸变那些事儿/1583426059467.png","1df9eff7e6a371fd3a99db09fa3d1e97"],["/2020/03/06/工作-图像-畸变那些事儿/1583499951669.png","8a30b62c328dbac23ecb3edf67af91c6"],["/2020/03/06/工作-图像-畸变那些事儿/1583675781673.png","3d661725dcb5dc845de75b31398352ff"],["/2020/03/06/工作-图像-畸变那些事儿/1583681903257.png","a009cae329c772165722f83e0b31014a"],["/2020/03/06/工作-图像-畸变那些事儿/1583681934784.png","9e84ecf866a48a5055323503bd46b852"],["/2020/03/06/工作-图像-畸变那些事儿/1583681970945.png","ead36f7a5a2a4d3b290c3c3a73d1bad3"],["/2020/03/06/工作-图像-畸变那些事儿/1583682669887.png","edec49559ba8733e9407c9fe7c767632"],["/2020/03/06/工作-图像-畸变那些事儿/1583683566607.png","5c09532013fdce937172b3578fac4d74"],["/2020/03/06/工作-图像-畸变那些事儿/20170711145255252.gif","e6984a1d2f7ca5d1c68a38981cd5f6fb"],["/2020/03/06/工作-图像-畸变那些事儿/20170711145319620.png","333ff16a9fbd5c50263132856e90f596"],["/2020/03/06/工作-图像-畸变那些事儿/879a9c2b8b0f4b2da7a09ee7cf1326a6_th-1583470457857.png","4d392a3c2fff2f89bad82e0d91b7f89d"],["/2020/03/06/工作-图像-畸变那些事儿/Fri, 06 Mar 2020 210531.png","f09f2e77bfe4208d8f5c7c871a2dce36"],["/2020/03/06/工作-图像-畸变那些事儿/SMIA-TV-Dis.png","994de4927c6f22326ae416e067ba5367"],["/2020/03/06/工作-图像-畸变那些事儿/bad-camberg-884454__480.jpg","c8807428db7b2c44de3af3b89667bbb2"],["/2020/03/06/工作-图像-畸变那些事儿/bd3d1fbdc57c4ae0be86ef5f7fd2bb6e_th.jpg","80279c9134a02babfbae931a72a6f242"],["/2020/03/06/工作-图像-畸变那些事儿/calibration_tangentialdistortion.png","57f93a8eae51d75ff7d72dbc236fe2fc"],["/2020/03/06/工作-图像-畸变那些事儿/index.html","484902bc4bca9f1018e0c48ee36cdd60"],["/2020/03/06/工作-图像-畸变那些事儿/一所计算方法举例.jpg","9bbc38e2e800aed700ab988922503185"],["/2020/03/06/工作-图像-畸变那些事儿/切向畸变.png","648005d4b8691cb944716abd6ffd57b8"],["/2020/03/08/工作-算法-相机成像模型/1583672734274.png","30115caac8c8af46ff1e829959c04778"],["/2020/03/08/工作-算法-相机成像模型/1583672771781.png","666c4302d69880501897e62c3092baa7"],["/2020/03/08/工作-算法-相机成像模型/1583672783896.png","654d9fa326be5542d8e28d4ba12bba45"],["/2020/03/08/工作-算法-相机成像模型/1583672798775.png","aec8ce57454e98f1e135ba9db4823d4c"],["/2020/03/08/工作-算法-相机成像模型/1583672833260.png","941607e5c85db141f8887273a01a3057"],["/2020/03/08/工作-算法-相机成像模型/1583672845339.png","921f2f552082720dd4f53991fa6cc2cc"],["/2020/03/08/工作-算法-相机成像模型/1583672858973.png","b3b845e616a58b17942839ce8eebca22"],["/2020/03/08/工作-算法-相机成像模型/1583673008090.png","669b627c7d9e3772adec8eed99e4630e"],["/2020/03/08/工作-算法-相机成像模型/1583673022764.png","1e163334eea502fc460e83cf823efdb1"],["/2020/03/08/工作-算法-相机成像模型/20161027215101234.jpg","dacf251a2937cdb56e5aee0b91a0bead"],["/2020/03/08/工作-算法-相机成像模型/index.html","bf910368d46bc355fdc563a289fd4605"],["/2020/03/08/工作-算法-相机成像模型/v2-084365a995c90a05793383d030edad4c_1440w.png","0e343a206dd8fc826786d4dc73e0b52c"],["/2020/03/08/工作-算法-相机成像模型/v2-09d962a72f187320ca46e409fd6b364f_1440w.png","48b6997cd269025569f0c1d91ebc7b56"],["/2020/03/08/工作-算法-相机成像模型/v2-0dc276d40437a5f17ed0ec039b18953f_1440w.png","20e886becc3baf2411a16f711c9eca2e"],["/2020/03/08/工作-算法-相机成像模型/v2-1259ab99566c20fb28c30ee2d0e6fcfb_1440w.png","7fe25c637f77c2fbd7761dff2cff018c"],["/2020/03/08/工作-算法-相机成像模型/v2-3f443a32bacc0ed8ec9df0a6b60eadc0_1440w.png","d90d042637eaf730f252c53b25ee8a12"],["/2020/03/08/工作-算法-相机成像模型/v2-47be6823de88962d67c5dbe13567d460_1440w.png","1196440bb9c36b483cba51f3e134944f"],["/2020/03/08/工作-算法-相机成像模型/v2-4adc27fdfd0e1028ab3e1d2aaabc2d49_1440w.png","e48139157b801117ca5c3e45f01d1901"],["/2020/03/08/工作-算法-相机成像模型/v2-4b34d0de42f559659da4ee261b11c98b_1440w.png","f09f2e77bfe4208d8f5c7c871a2dce36"],["/2020/03/08/工作-算法-相机成像模型/v2-504d609395301742f3c875b3f8023731_1440w.png","648005d4b8691cb944716abd6ffd57b8"],["/2020/03/08/工作-算法-相机成像模型/v2-619b0d27a64e6fa74641670610ade0b0_1440w.png","f942db59a412aea22292a86c81efaf09"],["/2020/03/08/工作-算法-相机成像模型/v2-6d70200c60c2fb80595bd931a2167c89_1440w.png","b4529b426376face6c4574207daa7979"],["/2020/03/08/工作-算法-相机成像模型/v2-8535c6123110df3296799e1a74016612_1440w.png","cce2ee3b03569abb644351682b3fb365"],["/2020/03/08/工作-算法-相机成像模型/v2-860767727cf42fb84c60d435e41a83e4_1440w.png","8b22d91220a122351715814aa6292564"],["/2020/03/08/工作-算法-相机成像模型/v2-904b09f24a1ea84d64d425760ca8a796_1440w.png","737c7f7854d0f73eb4b50f1fb272b7f2"],["/2020/03/08/工作-算法-相机成像模型/v2-9d87d744835b0044a20f3d6559d24d31_1440w.png","dffe8695529ca3febd640d0de6c8dc9b"],["/2020/03/08/工作-算法-相机成像模型/v2-a76d8f55905611284570f06f0d77676a_1440w.png","108f2026d115be050d865b073a5056a5"],["/2020/03/08/工作-算法-相机成像模型/v2-b187fdfd286e725a3a140b003f812e6c_1440w.png","907ce16b3606190d61cd9d5bc607b060"],["/2020/03/08/工作-算法-相机成像模型/v2-bfa1bff196934d0d6e19da2b404067aa_1440w.png","bd1270672196a58081f09f06b5a026ca"],["/2020/03/08/工作-算法-相机成像模型/v2-c0dcd00c16c8315216125077d4b8ad06_1440w.png","0e5f36bf4d34cf939afdb9b727a68f42"],["/2020/03/08/工作-算法-相机成像模型/v2-e94f94883bb903f9fa8ad52581bc9033_1440w.png","715f7da6129a5d8c20f87a297a6639d6"],["/Gallery/index.html","fada6585fbccc45adf23168cc2bedb85"],["/about/index.html","9bdc41185c28a32bd50f608b68d042cf"],["/archives/2018/12/index.html","ec64d612a51bb847a85cf0eba13b244a"],["/archives/2018/index.html","c88eba02d247352bfa6d0fdebf2019ea"],["/archives/2019/01/index.html","cc2f162b263ecab7ad348b4152b1cbfb"],["/archives/2019/01/page/2/index.html","4c7f4d3f8eba273666a8f814605a2ae2"],["/archives/2019/01/page/3/index.html","ec1aff0d5d5eb43f0c2431159f0e0605"],["/archives/2019/02/index.html","13b75f246ffb13e5016d5d0a7447ce19"],["/archives/2019/02/page/2/index.html","4994fb907088da24c6ac07f3d371f46a"],["/archives/2019/03/index.html","2ac0ba2dcfd9cccaeb866847501f8e6c"],["/archives/2019/index.html","0e7b2b424b844a29d5729b09f2d365c3"],["/archives/2019/page/2/index.html","549de032cc0959f05b625517113a1bc8"],["/archives/2019/page/3/index.html","6389d890a44e379c166d2202e3706112"],["/archives/2019/page/4/index.html","1b953b0b33fc60a4dcbc80d1ea2f171b"],["/archives/2020/03/index.html","c971253d341f2c81ffd530d8999b8e42"],["/archives/2020/03/page/2/index.html","255aef5f8fc731af4abade3da6796e3d"],["/archives/2020/index.html","f78636ab0c9b375ab805321e5b174bcf"],["/archives/2020/page/2/index.html","7f57cb6891363f34ce6676038f7a9f43"],["/archives/index.html","29d402c8f284eb432b16945edae7e351"],["/archives/page/2/index.html","d7b8f07bf2723fd283bdba215d2b08b4"],["/archives/page/3/index.html","0e4c9cc021efd27614f3c8a387d44f4e"],["/archives/page/4/index.html","b2dc6999615b48b8fe6a8a38c1e6a60d"],["/archives/page/5/index.html","23e459e9f201c921973fb4952f757e34"],["/archives/page/6/index.html","fbb7bbd64ca5af3effe0864d83186f6d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","fd674f85e3f17c97cf54284ff2b7752b"],["/categories/学习/JavaScript/index.html","d9287fb48b09554d2d3dd066109cfa36"],["/categories/学习/Python/index.html","3a45b4835c8c11a8d62ae5adb580189b"],["/categories/学习/c-c/index.html","250fcc34039cfa698d6e3cd8fc6e64d4"],["/categories/学习/index.html","ae042ced9941007c02b2df30733e7344"],["/categories/学习/page/2/index.html","ca2b94b409aaaec803e0de6339d8d66d"],["/categories/学习/算法/index.html","65523ff731d185fc9f2a157a43d148b3"],["/categories/工作/ADB/index.html","a98171ed744be4e78b966de8be4fd7a4"],["/categories/工作/BUG/index.html","a506f76becca80c8ba8415b87e3cdc08"],["/categories/工作/ISP/index.html","ca6c970b2bc7ce28da38d7b0ee44e3bc"],["/categories/工作/c-c/index.html","61d3b29f4239ddc6d7596c3b34c825f4"],["/categories/工作/index.html","09f74271f815e8fef83b6bb39dbcc9e4"],["/categories/工作/page/2/index.html","5befe6bc9c1c5f8af5caae823873cbc8"],["/categories/工作/page/3/index.html","a84f68c3202e92adb38b692e9ec52f12"],["/categories/工作/背光补偿/index.html","fe08383692706d2e079c5f50b7637e92"],["/categories/工作/设备准备/index.html","bb49cb5b7007844299351f66482686c3"],["/categories/工作/高通效果调试/index.html","54df67870fb1eb0bd1123e3a5fa92856"],["/categories/工具/git/index.html","185812a76ec92e1b7654d67aa28a0df2"],["/categories/工具/hexo/index.html","c548e8efcfc64f27b563fb1411c586f9"],["/categories/工具/index.html","a7bc362bcd88cabae611d65a55791cdb"],["/categories/工具/问题/index.html","766dafce635127da20fb57f657476304"],["/categories/我的唯一/index.html","c587a43a7f88db402f41bcedb0fe955a"],["/categories/日记/index.html","65df11f31be61e2ffca4e8678c7227de"],["/categories/日记/围围/index.html","349bac62c27e55bd9e89b60b8bc032ae"],["/categories/日记/围围/诗歌/index.html","f744479c9a025ffd7bc0a707e94e5590"],["/categories/日记/围围/随笔/index.html","0351eec140ffd4f9cb4abc6670c10c6d"],["/css/index.css","a8667c93957ec5fae325f000be2a8e7c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","50cae110079bb6e1bf88c5b1896f4ddf"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/wechat.jpg","8eef90d9d4f788406115a122a8711d64"],["/img/又拍云_logo6.png","e9e2fb940b6cb3c295d235d183688c0a"],["/index.html","b6ac0d1b850a26b9f4d3e9d337162ea9"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/link/index.html","599635d35e9c4a971b38e0815119405c"],["/music/index.html","d3da78be787666bdd12784a6d5cc7af1"],["/page/2/index.html","7f5484db348f7e1c042c8b281b4c9575"],["/page/3/index.html","14f525b0f0a63122a22f9e9f945c38b1"],["/page/4/index.html","f1a1f316fd9d466aadb5845c45e44737"],["/page/5/index.html","1b6c7fdd8694d56f08b1462c75311846"],["/page/6/index.html","fd628120f07f50e994cd2bd6bbedb56a"],["/tags/2412M/index.html","ee70a7ca83f4d9f40960592ac2bf357e"],["/tags/IR-CUT/index.html","6a8fd87bb61780b105a8d391364d3f8b"],["/tags/JavaScript/index.html","bd03da81ba1f4805abf094c51c37d924"],["/tags/Makefile/index.html","078d7a8ec867492ea4f292fb33c276ca"],["/tags/WNR/index.html","300c8e1064600d6cdf13ed7f6b59a604"],["/tags/adb/index.html","7fe142e92fa1569e961c5f7e4986e6ef"],["/tags/bug/index.html","835a2dd98c77b8cc6768d1a981fce11a"],["/tags/c-c/index.html","9df696a043a4791476a2dbb4beac82f7"],["/tags/c/index.html","bb51ffcdbbf347ff65a3dbf37bdf7ea5"],["/tags/camera原理/index.html","2c1640c667a9d610cce08e895c2e0a20"],["/tags/git/index.html","2ca9f6af8fbdef8f1516fcbb19f2de2e"],["/tags/hal/index.html","e1995b6499cea572ab25ab297252298b"],["/tags/hexo/index.html","aafd1325aa079c017b12487c048e08cf"],["/tags/index.html","9f6d2091f2f987a3a1b5911619c4754a"],["/tags/markdown/index.html","ca29dafb21b5c6d1445f2653601d21a9"],["/tags/persist-set/index.html","873a0e83b9c00cd28830b616e58adf64"],["/tags/python/index.html","37d6a024b22f97a9859506020420e609"],["/tags/sensor模块/index.html","ec3538c4e2f46a7564cadb2579ed4dc3"],["/tags/version/index.html","a50aace9ed977a7f49ab30c8c1cb4aec"],["/tags/中文乱码/index.html","a36d647b047d01327ed1bad2e743b759"],["/tags/代码实现/index.html","a14ac2ee817985228e78a9573e47d392"],["/tags/内存/index.html","ec94d0d072f3b924b7f3459c0d7151df"],["/tags/分布式进程/index.html","fbff599b9fddba16b7039e80004cdd56"],["/tags/功能实现/index.html","6b343fc580f84b0752078679b3980ba9"],["/tags/围围/index.html","72b3a3c1ecba7cb4f33c5074669512a0"],["/tags/围围/page/2/index.html","6a10343009e928733b18d5c0ca07ae16"],["/tags/增益设置/index.html","83d7cfca3d3772c68e1ea316352df222"],["/tags/多线程/index.html","79b1da27b564830de1357d3e51b9a224"],["/tags/宝藏/index.html","7c0fcde8ea1ffcf4136e0a58950489ff"],["/tags/情书/index.html","835dd621eda5f8101209968537e6288c"],["/tags/惊喜/index.html","2e2a0802cbaeb16f9edcca9276f0cc9c"],["/tags/手动增益实现/index.html","4c260aa07f23563a0f70b11a7988b5f0"],["/tags/指针/index.html","2703964a6e674026bffda930041ea853"],["/tags/推库/index.html","908c663fbe8047ba61f17e469e331fdb"],["/tags/操作系统/index.html","ad7ab38b5414bc077ec4eaa295a2e624"],["/tags/效果调试/index.html","194b76bc05734e2f01a9d05ba036651b"],["/tags/海思camera/index.html","45af9d85ade4b0c6fbbe0b71d8662c80"],["/tags/滤波/index.html","373e5d72010bf93d946789dc03660521"],["/tags/版本更新/index.html","c76490a7a2a7df6537bb22ab1ea9fec2"],["/tags/畸变/index.html","3002185f063d9797d2354990a3e59848"],["/tags/直方图AEC/index.html","0879830f1ff96294351d29563bca53bf"],["/tags/算法/index.html","92b2b1680ab5b0370576d9d8d15d2660"],["/tags/算法实现/index.html","f7e54b8ef29379b456e7144930fd34aa"],["/tags/线程/index.html","ebdbce9c1656274c0cd6dbf14ee9f71e"],["/tags/结构体/index.html","2b65a1d2b6f2623cf201e6f14cdf1f47"],["/tags/背光补偿/index.html","b6d59f28d4fc5bcfb148639947cb27f9"],["/tags/补光灯/index.html","0b11173ca9d1e169a6bf2b9b61c6171b"],["/tags/设计模式/index.html","b07692d072e5383a899c2f672a3830f6"],["/tags/诗歌/index.html","e300f053ceef5b02f690f076441b5c7e"],["/tags/进程/index.html","c2d574e383169828c5bd82aadb80c55f"],["/tags/递归/index.html","52dd69bcd119359c81661a580d57711f"],["/tags/镜头/index.html","7dc664f4c9865a4fc9b4606026d7afa5"],["/tags/闪烁/index.html","a1bf99d89a6c2474d72d02c453b5925d"],["/tags/高通/index.html","752eeedb86bc8bcef6dbffa62b6c6809"],["/tags/高通camera/index.html","7e6ccf76866337172b9ecafe61e20678"]];
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




