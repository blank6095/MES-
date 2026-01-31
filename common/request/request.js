import { apiBaseUrl } from '@/common/setting/constVarsHelper.js';
import * as db from '@/common/utils/dbHelper.js' //引入common

// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = (vm) => {
    // 初始化请求配置
    uni.$u.http.setConfig((defaultConfig) => {
        /* defaultConfig 为默认全局配置 */
        defaultConfig.baseURL = apiBaseUrl; /* 根域名 */
        // defaultConfig.header = {
        //    'Content-type': 'application/json'
        // };
        defaultConfig.method = 'POST';
        defaultConfig.dataType = 'json';
        // #ifndef MP-ALIPAY
        defaultConfig.responseType = 'text';
        // #endif
        // 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
        //defaultConfig.custom = {}; // 全局自定义参数默认值
        // #ifdef APP-PLUS || MP-ALIPAY || MP-WEIXIN
        defaultConfig.timeout = 60000;
        // #endif
        // #ifdef APP-PLUS
        defaultConfig.sslVerify = true;
        // #endif
        // #ifdef APP-PLUS
        defaultConfig.firstIpv4 = false; // DNS解析时优先使用ipv4 仅 App-Android 支持 (HBuilderX 2.8.0+)
        // #endif
        // 局部优先级高于全局，返回当前请求的task,options。请勿在此处修改options。非必填
        // getTask: (task, options) => {
        // 相当于设置了请求超时时间500ms
        //   setTimeout(() => {
        //     task.abort()
        //   }, 500)
        // },
        // 全局自定义验证器。参数为statusCode 且必存在，不用判断空情况。
        defaultConfig.validateStatus = (statusCode) => { // statusCode 必存在。此处示例为全局默认配置
            return statusCode >= 200 && statusCode < 501
        }

        return defaultConfig
    })

    // 请求拦截
    uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
        // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
        config.data = config.data || {}

        if (config?.custom?.needToken) {
            // 获取用户token
            const userToken = db.get("userToken");
            if (!userToken) {
                //console.log("开启弹窗");
                vm.$store.commit('showLoginTip', true);
                //console.log("弹窗已经开启");
                //return false;
            } else {
                config.header.Authorization = 'Bearer ' + userToken;
            }
        }
        //额外需求
        if (config.custom.methodName == 'user.share') {
            const userToken = db.get("userToken");
            config.header.Authorization = 'Bearer ' + userToken;
        }

        return config
    }, config => { // 可使用async await 做异步操作
        return Promise.reject(config)
    })

    // 响应拦截
    uni.$u.http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
        const data = response.data
        if (response.statusCode == 200) {
            let pages = getCurrentPages();
            var page = pages[pages.length - 1];

            if (!data.status && page) {
                // 登录信息过期或者未登录
                if (data.data === 14007 || data.data === 14006 ||data.code === 14007 || data.code === 14006  ) {
                    // #ifdef APP-PLUS || APP-PLUS-NVUE
                        db.del("userToken");
                    if (page.route.indexOf('pages/login/loginBySMS/loginBySMS') < 0) {
                        uni.showToast({
                            title: result.msg,
                            icon: 'none',
                            duration: 1000,
                            complete: function () {
                                setTimeout(function () {
                                    uni.hideToast();
                                    uni.navigateTo({
                                        url: '/pages/login/loginBySMS/loginBySMS'
                                    });
                                },
                                    1000);
                            }
                        });
                    }
                    // #endif
                    // #ifdef MP-WEIXIN || MP-ALIPAY || MP-TOUTIAO
                    db.del("userToken");
                    vm.$store.commit('userInfo', null);
                    //console.log("开启登录弹窗");
                    vm.$store.commit('hasLogin', false);
                    // #endif
					// #ifdef H5
					db.del("userToken");
					// #endif
                }
            }
        }else if(response.statusCode == 401){
			// 登录信息过期或者未登录+
			if (data.data === 14007 || data.data === 14006 ||data.code === 14007 || data.code === 14006 ) {
			    // #ifdef APP-PLUS || APP-PLUS-NVUE
			        db.del("userToken");
			    if (page.route.indexOf('pages/login/loginBySMS/loginBySMS') < 0) {
			        uni.showToast({
			            title: result.msg,
			            icon: 'none',
			            duration: 1000,
			            complete: function () {
			                setTimeout(function () {
			                    uni.hideToast();
			                    uni.navigateTo({
			                        url: '/pages/login/loginBySMS/loginBySMS'
			                    });
			                },
			                    1000);
			            }
			        });
			    }
			    // #endif
			    // #ifdef MP-WEIXIN || MP-ALIPAY || MP-TOUTIAO
			    db.del("userToken");
			    vm.$store.commit('userInfo', null);
			    //console.log("开启登录弹窗");
			    vm.$store.commit('hasLogin', false);
			    // #endif
				// #ifdef H5
				db.del("userToken");
				// #endif
			}
		}
        return data === undefined ? {} : data
    }, (response) => {
        // 对响应错误做点什么 （statusCode !== 200）
        return Promise.reject(response)
    })
}