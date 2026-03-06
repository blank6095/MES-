import GoEasy from 'goeasy';
const goEasy = GoEasy.getInstance({
	host: 'hangzhou.goeasy.io', //新加坡host：singapore.goeasy.io
	appkey: "BC-dc93b6f339d7426a8c1207e22fff322b", //替换为您的应用appkey
	modules: ['pubsub']
});
// 建议在main.js里初始化全局的GoEasy对象
Vue.prototype.goEasy = goEasy;
//建立连接
goEasy.connect({
	onSuccess: function() { //连接成功
		console.log("GoEasy connect successfully.") //连接成功
	},
	onFailed: function(error) { //连接失败
		console.log("Failed to connect GoEasy, code:" + error.code + ",error:" + error.content);
	}
});
//订阅消息
goEasy.pubsub.subscribe({
	channel: "test_channel", //替换为您自己的channel
	onMessage: function(message) { //收到消息
		console.log("Channel:" + message.channel + " content:" + message.content);
	},
	onSuccess: function() {
		console.log("Channel订阅成功。");
	},
	onFailed: function(error) {
		console.log("Channel订阅失败, 错误编码：" + error.code + " 错误信息：" + error.content)
	}
});