<template>
	<view>
		<view style="background-image: linear-gradient(to right, #f6aa52 0%, #e9594e 100%);height: 150px;">
			<image style="width: 20px;height:20px;float: right;right: 20px;top:18px" src="../../static/icon/wenhao.png">
			</image>
			<view style="text-align: center;padding: 55px 0 8px 0;color: #fff">当前可用积分</view>
			<view style="text-align: center;color: #fff;font-size: 25px;">5666</view>
		</view>
		<view style="display: flex; padding:15px 20px;justify-content: space-between;background-color: #fff;">
			<view style="display: flex;align-items: center;">
				<image style="width: 50px;height: 50px;background-color: grey;border-radius: 50px;"></image>
				<view style="margin: 0 0 0 10px;">
					<view>积分商城</view>
					<view style="font-size: 14px;color: grey;">使用积分兑换好礼</view>
				</view>
			</view>
			<view style="margin: 5px 0 0 0;">
				<button
					style="border-radius: 25px;width: 100px;font-size: 13px;background-color: #f6aa52;color: #fff;">去兑换</button>
			</view>
		</view>
		<view style="background-color: #fff;margin-top: 10px;">
			<view class="choose-tab">
				<view class="choose-tab-item" :class="chooseTab == 0 ? 'active' : ''" data-choose="0" @click="clickTab">
					明细</view>
				<view class="choose-tab-item" :class="chooseTab == 1 ? 'active' : ''" data-choose="1" @click="clickTab">
					收入</view>
				<view class="choose-tab-item" :class="chooseTab == 2 ? 'active' : ''" data-choose="2" @click="clickTab">
					支出</view>
			</view>

			<view style="padding: 5px 10px;" v-for="item in list">
				<view :style="chooseTab != 0 ? 'display:none' : ''">
					<view style="display: flex;padding: 10px;justify-content: space-between;border-bottom: 1upx solid #f1f1f1;">
						<view>
							<view>{{item.name}}</view>
							<view style="color: grey;font-size: 13px;padding-top: 5px;">{{item.TimeRanges}}</view>
						</view>
						<view :style="{'color':item.type==1?'#42c600':'#dc0105'}">{{item.money}}</view>
					</view>
				</view>
				<view :style="chooseTab != 1 ? 'display:none' : ''">
					<view style="display: flex;padding: 10px;justify-content: space-between;border-bottom: 1upx solid #f1f1f1;" v-if="item.type==1">
						<view>
							<view>{{item.name}}</view>
							<view style="color: grey;font-size: 13px;padding-top: 5px;">{{item.TimeRanges}}</view>
						</view>
						<view :style="{'color':item.type==1?'#42c600':'#dc0105'}">{{item.money}}</view>
					</view>
				</view>
				<view :style="chooseTab != 2 ? 'display:none' : ''">
					<view style="display: flex;padding: 10px;justify-content: space-between;border-bottom: 1upx solid #f1f1f1;" v-if="item.type==2">
						<view>
							<view>{{item.name}}</view>
							<view style="color: grey;font-size: 13px;padding-top: 5px;">{{item.TimeRanges}}</view>
						</view>
						<view :style="{'color':item.type==1?'#42c600':'#dc0105'}">{{item.money}}</view>
					</view>
				</view>

			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				chooseTab: 0,
				list: [{
						name: "每日签到",
						TimeRanges: "2021/09/12 09:00",
						money: 10,
						type: 1
					},
					{
						name: "每日签到",
						TimeRanges: "2021/09/12 09:00",
						money: 10,
						type: 1
					},
					{
						name: "每日签到",
						TimeRanges: "2021/09/12 09:00",
						money: 10,
						type: 2
					},
					{
						name: "每日签到",
						TimeRanges: "2021/09/12 09:00",
						money: 10,
						type: 1
					}
				]
			};
		},
		methods: {
			clickTab: function(e) { //点击切换
				this.chooseTab = e.target.dataset.choose;

			}
		}
	}
</script>

<style lang="less">
	.choose-tab {
		display: flex;
		flex-flow: row;
		justify-content: space-between;
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		// border-bottom: 2rpx solid #ccc;
	}

	.choose-tab-item {
		width: 25%;
	}

	.active {
		color: #f6aa52;
		border-bottom: 4rpx solid #f6aa52;
	}

	.content {
		text-align: center;
	}
</style>
