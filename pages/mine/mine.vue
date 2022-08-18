<template>
	<view>
		<!-- 头部个人信息 -->
		<view style="display: flex;margin: 20px 20px;">
			<image style="width: 65px;height: 65px;border-radius: 50px;" src="../../static/logo.png"></image>
			<view style="margin: 8px 10px;">
				<view style="font-size: 18px;margin: 0 0 6px 0;">{{people.name}}</view>
				<view style="color: grey;font-size: 14px;">ID:{{people.ID}}</view>
			</view>
		</view>
		<!-- 优惠券 -->
		<view style="display: flex;justify-content: space-around;margin: 30px 0;" >
			<view style="text-align: center;width: 30%;" @click="toCoupon()">
				<view style="margin: 0 0 8px 0;">5</view>
				<view>优惠券</view>
			</view>
			<view style="text-align: center;width: 30%;" @click="toIntegral()">
				<view style="margin: 0 0 8px 0;">5997</view>
				<view>积分</view>
			</view>
			<view style="text-align: center; center;width: 30%;">
				<view style="margin: 0 0 8px 0;">65</view>
				<view>收藏</view>
			</view>
		</view>
		<!-- VIP -->
		<view
			style="display: flex;margin:10px;padding:10px;background: linear-gradient(to bottom right, #ffaa00, #fff);border-radius:10px;justify-content: space-around;color:grey">
			<view style="display: flex;align-items: center;">
				<image style="width: 30px;height:30px;border-radius:50px" src="../../static/logo.png"></image>
				<view style="padding:0 10px">VIP 会员</view>
			</view>
			<view style="display: flex;align-items: center">
				<view>免费领取七天会员</view>
				<view>></view>
			</view>
		</view>
		<!-- 我的订单 -->
		<view style="margin: 10px;background-color:#fff;border-radius:10px;padding:15px 15px 5px 15px">
		<view style="display:flex;justify-content: space-between;">
			<view style="font-weight: 600;">我的订单</view>
			<view style="color: grey;">全部订单 ></view>
		</view>
		<view style="display: flex;justify-content: space-around;margin:20px 0">
			<view style="text-align: center;width: 30%;">
				<view style="margin: 0 0 8px 0;">0</view>
				<view>待付款</view>
			</view>
			<view style="text-align: center;width: 30%;">
				<view style="margin: 0 0 8px 0;">6</view>
				<view>待发货</view>
			</view>
			<view style="text-align: center; center;width: 30%;">
				<view style="margin: 0 0 8px 0;">2</view>
				<view>待收货</view>
			</view>
			<view style="text-align: center; center;width: 30%;">
				<view style="margin: 0 0 8px 0;">65</view>
				<view>已完成</view>
			</view>
			</view>
		</view>
		<!-- 我的服务 -->
		<view style="background-color:#fff;margin:10px;border-radius:10px">
		<view style="font-weight: 600;margin:0 10px;padding:15px 10px 5px 10px; ">我的服务</view>
		<view style="display: flex;justify-content: space-between;margin:10px 10px;padding:10px 10px;border-bottom:solid 1upx #f0f0f0" @click="toAdress()">
			<view>收货地址</view>
			<image style="width: 10px;height:10px;" src="../../static/icon/more.png"></image>
		</view>
		<view style="display: flex;justify-content: space-between;align-items: center;margin:10px 10px;padding:10px 10px;border-bottom:solid 1upx #f0f0f0" @click="toSetup()">
			<view>我的设置</view>
			<image style="width: 10px;height:10px;" src="../../static/icon/more.png"></image>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				people: {
					name: "我爱吃榴莲",
					ID: "5288721"
				}
			};
		},
		methods:{
			toCoupon(){
				uni.navigateTo({
					url:"/pages/mine/coupon"
				})
			},
			toIntegral(){
				uni.navigateTo({
					url:"/pages/mine/integral"
				})
			},
			toAdress(){
				uni.navigateTo({
					url:"/pages/mine/adress"
				})
			},
			toSetup(){
				uni.navigateTo({
					url:"/pages/mine/setup/index"
				})
			}
		}
	}
</script>

<style lang="less">

</style>
