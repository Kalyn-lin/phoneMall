<template>
	<view>
		<view v-for="item in list" style="border-radius: 10px; margin:10px 15px;padding:20px 15px 15px 15px;display: flex;background-color: #fff;">
			<view class="left">
				<view style="display: flex;">
					<view class="tip" :style="{'background-color':item.type=='到家券'?'#42c600':'#ff8902'}">{{item.type}}</view>
					<view style="overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;">{{item.name}}</view>
				</view>
				<view style="color: grey;font-size: 13px;margin: 6px 0;">{{item.TimeRange}}</view>
				<view style="color: grey;font-size: 14px">{{item.note}} ></view>
			</view>
			<view class="right">
				<view style="color: #ffaa00;font-size: 20px;font-weight: 600;">￥ {{item.money}}</view>
				<view style="font-size: 15px;margin: 5px 0;color: grey;">{{item.device}}</view>
				<button style="background-color:#ffaa00;font-size:15px;width: 80px;height: 30px;line-height: 30px;color: #fff;">去使用</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						type: "到家券",
						name: "美团优惠券-新人专享",
						TimeRange: "2022/08/08",
						note: "使用规则",
						money:9,
						device:"优惠券"
					}, {
						type: "买菜券",
						name: "美团优惠券-新人专享",
						TimeRange: "2022/08/08",
						note: "使用规则",
						money:9,
						device:"立减券"
					},
					{
						type: "到家券",
						name: "美团优惠券-新人专享",
						TimeRange: "2022/08/08",
						note: "使用规则",
						money:9,
						device:"优惠券"
					}
				]
			};
		}
	}
</script>

<style lang="less">
	.left {
        width: 70%;
	}
	.right{
		border-left:dotted 1px;
		padding: 0 0 0 20px;
		text-align: center;
	}
	.tip{
		color:#fff;
		border-radius:3px;
		font-size: 8px;
		padding: 3px;
		margin: 0 8px 0 0;
	}
</style>
