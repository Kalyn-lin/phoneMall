<template>
	<view>
		<view class="boxleft">
			<view class="inv-h-w">
				<view v-for="(item,index) in tab">
					<view :class="['inv-h',Inv==index?'inv-h-se':'']" @click="Inv=index">{{item}}</view>
				</view>
			</view>
			<view class="boxright">
				<view v-for="(product,index) in list">
					<view class="tabcard" v-show="Inv == product.type">
						<image style="width: 160upx;height: 160upx;background-color: aqua;" :src="product.url"></image>
						<view>{{product.name}}</view>
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
				Inv: 1,
				tab: ["品牌手机", "休闲零食", "生活用品", "智能家居"],
				list: [{
					name: "iphone",
					url: "https://p.ssl.qhimg.com/dmfd/240_240_80/t0180500b1b2225eab3.jpg?size=800x800",
					type:0
				}, {
					name: "iphone",
					url: "https://p.ssl.qhimg.com/dmfd/240_240_80/t0124cacb55d17a339b.jpg",
					type:1
				}, 
				{
					name: "iphone",
					url: "https://p.ssl.qhimg.com/dmfd/240_240_80/t0124cacb55d17a339b.jpg",
					type:1
				},
				{
					name: "iphone",
					url: "https://p.ssl.qhimg.com/dmfd/240_240_80/t0124cacb55d17a339b.jpg",
					type:1
				},
				{
					name: "iphone",
					url: "https://p.ssl.qhimg.com/dmfd/240_240_80/t0124cacb55d17a339b.jpg",
					type:1
				},{
					name: "iphone",
					url: "https://p.ssl.qhimg.com/dmfd/240_240_80/t0124cacb55d17a339b.jpg",
					type:2
				}]
			}
		},
		methods: {
			changeTab(Inv) {
				that.navIdx = Inv;

			},
		}

	}
</script>

<style lang="less">
	page{
		background-color: #fff;
	}
	.inv-h-w {
		display: flex;
		flex-direction: column;
		background-color: #F8F8F8;
	}

	.inv-h {
		font-size: 30upx;
		flex: 1;
		text-align: center;
		color: #C9C9C9;
		height: 100upx;
		line-height: 100upx;
	}

	.inv-h-se {
		color: #ff6a00;
		border-bottom: 4upx solid #ff6a00;
		background-color: #fff;
		padding: 0 20upx;
	}


	.boxleft {
		display: flex;
	}

	.boxright {
		display: flex;
		background-color: #fff;
		flex-wrap: wrap;
		justify-content: space-between;
		
		.tabcard {
			display: flex;
			flex-direction: column;
			text-align: center;
			margin: 10upx 10upx;
		}
	}

	
</style>
