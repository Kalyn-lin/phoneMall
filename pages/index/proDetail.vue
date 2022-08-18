<template>
	<view>
		<uni-swiper-dot class="uni-swiper-dot-box" :info="info" :current="current" :mode="mode" field="content">
			<swiper class="swiper-box" @change="change">
				<swiper-item v-for="(item ,index) in info" :key="index">
					<div class="swipe" style="width: 100%;height: 100%;">
						<image :src="item.content" mode="aspectFit" style="width: 100%;height: 100%;"></image>
					</div>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<view style="padding:20px 0 10px 20px;background-color:#fff">
			<view style="display:flex;justify-content: space-between">
				<view>
					<p style="font-size:18px;padding-bottom:3px;font-weight:600">每天帮您照顾好自己，一天坚果</p>
					<p style="font-size:15px;color:grey">干湿分离，更新鲜，更营养</p>
				</view>
				<view>
					<button
						style="border-radius:15px 0 0 15px;background-color:green;height:30px;color:#fff;line-height:30px;font-size:15px;width:80px;text-align:center">分享</button>
				</view>
			</view>
			<view style="display:flex;margin:10px 0 0 0">
				<p style="font-size:18px;font-weight:600;color:red">￥29.00</p>
				<p style="margin: 0 8px;font-size:18px;font-weight:600;">￥19.00</p>
				<view style="color:#fff;background-color:#550000;font-size:13px;border-radius:5px;padding:2px 5px">会员价
				</view>
				<view style="margin: 0 8px;font-size:13px;border:1upx soild #ffaa00;padding:2px 5px;color:#ffaa00">赠送积分
				</view>
			</view>
			<view
				style="display: flex;margin:10px 20px 0 0;padding:10px;background-color:#fff6e6;border-radius:10px;justify-content: space-between;color:grey">
				<view style="display: flex;align-items: center;margin-left:10px">
					<image style="width: 30px;height:30px;border-radius:50px" src="../../static/logo.png"></image>
					<view style="padding:0 10px">VIP 会员</view>
				</view>
				<view
					style="display: flex;align-items: center;background-color:#00007f;padding:5px 10px;border-radius:10px">
					<view style="color:#fff">立即开通</view>
				</view>
			</view>
		</view>
		<view style="padding:20px 20px;background-color:#fff;margin:10px 0">
			<view style="display:flex;justify-content: space-between;align-items: baseline">
				<view style="display:flex;align-items: baseline">
					<p>积分 </p>
					<p style="color:grey;font-size:14px;margin-left:8px"> 购买本商品可获得200积分</p>
				</view>
				<image style="width:10px;height:10px" src="../../static/icon/more.png"></image>
			</view>
			<view
				style="border:1upx soild #ddd;padding:20px 0;display:flex;justify-content: space-between;align-items: baseline">
				<view style="display:flex;align-items: baseline">
					<p>服务 </p>
					<p style="color:grey;font-size:14px;margin-left:8px"> 购买本商品可获得200积分</p>
				</view>
				<image style="width:10px;height:10px" src="../../static/icon/more.png"></image>
			</view>
			<view style="display:flex;justify-content: space-between;align-items: baseline">
				<view style="display:flex;align-items: baseline">
					<p>评分 </p>
					<p style="color:grey;font-size:14px;margin-left:8px"> 购买本商品可获得200积分</p>
				</view>
			</view>
		</view>
		<view style="margin:10px 0;background-color:#fff;text-align:center">
			<view style="padding:20px 0 10px 0;text-align:center">商品介绍</view>
			<image style="margin:10px;width:350px;height:250px;background-color:#b5b5b5"></image>
			<image style="margin:10px;width:350px;height:250px;background-color:#b5b5b5"></image>
			<image style="margin:10px;width:350px;height:250px;background-color:#b5b5b5"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				mode: 'round',
				info: [{
					content: 'https://p3.ssl.qhimgs0.com/dr/660_220_60/t01c423a7e4a96e27d8.jpg'
				}, {
					content: 'https://p3.ssl.qhimgs0.com/dr/660_220_60/t01599d7756e7e62947.jpg'
				}, {
					content: 'https://p3.ssl.qhimgs0.com/dr/660_220_60/t01599d7756e7e62947.jpg'
				}],
			};
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
		}
	}
</script>

<style lang="less">
	.swiper-box {
		width: 100%;
		height: 200px;

	}
</style>
