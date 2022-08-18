<template>
	<view class="newsTab">
		<view style="background-color: #fff">
			<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text"
				activeColor="#ff6a00"></uni-segmented-control>
		</view>
		<view class="content" v-for="(item,index) in list">

			<view v-show="current == 0" class="card">
				<view class="cardTop">
					<view>订单号：{{item.orderNum}}</view>
					<view style="color: red;">{{item.proStatus}}</view>
				</view>
				<view class="cardCen">
					<view class="cenCon">
						<image :src="item.url"></image>
						<view class="cenMid">
							<view>{{item.name}}</view>
							<view style="color: grey;font-size: 28upx;">{{item.specs}}</view>
						</view>
					</view>
					<view class="cenrgt">
						<view>￥{{item.price}}</view>
						<view>x{{item.totalNum}}</view>
					</view>
				</view>
				<view class="cardMid">
					<view style="font-size: 30upx;color: grey;">{{item.time}}</view>
					<view>金额：￥{{item.price*item.totalNum}}</view>
				</view>
				<view class="cardBot">
					<view class="btn" v-show="item.proStatus=='待付款'">取消订单</view>
					<view class="btn" v-show="item.proStatus=='待收货'">确认收货</view>
					<view class="btn" v-show="item.proStatus=='待发货'">提醒发货</view>
					<view class="btn" v-show="item.proStatus=='已完成'">删除订单</view>
					<view class="btn" v-show="item.proStatus=='待付款'">立即付款</view>
				</view>
			</view>

			<view v-show="current == item.type" class="card">
				<view class="cardTop">
					<view>订单号：{{item.orderNum}}</view>
					<view style="color: red;">{{item.proStatus}}</view>
				</view>
				<view class="cardCen">
					<view class="cenCon">
						<image :src="item.url"></image>
						<view class="cenMid">
							<view>{{item.name}}</view>
							<view style="color: grey;font-size: 28upx;">{{item.specs}}</view>
						</view>
					</view>
					<view class="cenrgt">
						<view>￥{{item.price}}</view>
						<view>x{{item.totalNum}}</view>
					</view>
				</view>
				<view class="cardMid">
					<view style="font-size: 30upx;color: grey;">{{item.time}}</view>
					<view>金额：￥{{item.price*item.totalNum}}</view>
				</view>
				<view class="cardBot">
					<view class="btn" v-show="item.proStatus=='待付款'">取消订单</view>
					<view class="btn" v-show="item.proStatus=='待收货'">确认收货</view>
					<view class="btn" v-show="item.proStatus=='待发货'">提醒发货</view>
					<view class="btn" v-show="item.proStatus=='已完成'">删除订单</view>
					<view class="btn" v-show="item.proStatus=='待付款'">立即付款</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				items: ["全部", "待付款", "待发货", "待收货", "已完成"],
				list: [{
						name: "iphone",
						url: "https://p.ssl.qhimg.com/dmfd/120_90_100/t01cb0c8fb94e1c9ad0.jpg",
						type: 1,
						proStatus: "待付款",
						orderNum: "0000001",
						specs: "蓝色/50mmx150mm",
						price: "2000",
						totalNum: 1,
						time: "2022/03/09 12:00"
					}, {
						name: "iphone2",
						url: "https://p.ssl.qhimg.com/dmfd/240_240_80/t0124cacb55d17a339b.jpg",
						type: 2,
						proStatus: "待发货",
						orderNum: "0000001",
						specs: "蓝色/50mmx150mm",
						price: "2000",
						totalNum: 1,
						time: "2022/03/09 12:00"
					}, {
						name: "vivo",
						url: "https://p.ssl.qhimg.com/dmfd/240_240_80/t0180500b1b2225eab3.jpg?size=800x800",
						type: 2,
						proStatus: "待发货",
						orderNum: "0000001",
						specs: "蓝色/50mmx150mm",
						price: "2000",
						totalNum: 1,
						time: "2022/03/09 12:00"
					},
					{
						name: "vivo",
						url: "https://p.ssl.qhimg.com/dmfd/240_240_80/t0180500b1b2225eab3.jpg?size=800x800",
						type: 3,
						proStatus: "待收货",
						orderNum: "0000001",
						specs: "蓝色/50mmx150mm",
						price: "2000",
						totalNum: 1,
						time: "2022/03/09 12:00"
					},
					{
						name: "vivo",
						url: "https://p.ssl.qhimg.com/dmfd/240_240_80/t0180500b1b2225eab3.jpg?size=800x800",
						type: 4,
						proStatus: "已完成",
						orderNum: "0000001",
						specs: "蓝色/50mmx150mm",
						price: "2000",
						totalNum: 1,
						time: "2022/03/09 12:00"
					}
				]
			};
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index.currentIndex) {
					this.current = index.currentIndex;
				}
			},
		}
	}
</script>

<style lang="less">
	.content {
		margin: 20upx 0;
		background-color: #fff;
		padding: 0 30upx;
	}

	.cardTop {
		display: flex;
		justify-content: space-between;
		padding: 30upx 0;
	}

	.cardCen {
		display: flex;
		justify-content: space-between;
		padding: 30upx 0;
		border-bottom: #e8e8e8 solid 1upx;
		border-top: #e8e8e8 solid 1upx;

		.cenCon {
			display: flex
		}

		.cenMid {
			padding: 10upx 0;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.cenrgt {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-end;
			color: grey;
			font-size: 28upx;
		}

		image {
			height: 160upx;
			width: 160upx;
			background-color: aqua;
			margin: 0 20upx 0 0;
		}
	}

	.cardMid {
		display: flex;
		justify-content: space-between;
		padding: 20upx;
	}

	.cardBot {
		display: flex;
		justify-content: flex-end;

		.btn {
			color: #ff6a00;
			width: 160upx;
			font-size: 28upx;
			padding: 12upx 20upx;
			border: #ff6a00 solid 1upx;
			text-align: center;
			border-radius: 40upx;
			margin: 10upx 10upx 20upx 10upx;
		}

	}
</style>
