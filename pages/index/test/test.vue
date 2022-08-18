<template>
	<view class="content">
		<!-- 搜索框 -->
		<uni-search-bar style="width: 350px;" placeholder="请输入" @confirm="search" clearButton="auto"
			cancelButton="auto"></uni-search-bar>

		<!-- 轮播图 -->
		<uni-swiper-dot class="uni-swiper-dot-box" :info="info" :current="current" :mode="mode" field="content">
			<swiper class="swiper-box" @change="change" :current="swiperDotIndex">
				<swiper-item v-for="(item, index) in info" :key="index" style="border-radius: 10px;">
					<view class="swiper-item">
						<image class="image" :src="item.url" mode="aspectFill" :draggable="false"
							@click="onBanner(index)" />
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<!-- 菜单栏 -->
		<view class="menus">
			<view v-for="(item,index) in menu" :key="index"
				style="display: flex;align-content: space-around;text-align: center;">
				<view style="margin:10px">
					<image style="width:50px;height: 50px;background-color: aqua;border-radius: 50px;"></image>
					<view>{{item.type}}</view>
				</view>
			</view>
		</view>
		<!-- 秒杀商品 -->
		<view class="card" >
			<view v-for="(item,indexs) in goods">
			<view style="border-radius: 20px" >
				<image style="width: 100px;height: 100px;border-radius: 10px;" :src="item.img"></image>
				<view style="display: flex;flex-wrap: wrap;">{{item.name}}</view>
			</view>
			</view>
		</view>
		<div class="middleBox">
			<div class="title" style="text-align: center;">新人推荐</div>
			<uni-grid :column="3" :showBorder="false">
				<template v-for="(item, index) in goods">
					<uni-grid-item  class="interval" :key="index">
						<div class="tjGoods">
							<image mode="aspectFill" :src="item.img"></image>
							<div class="proDetail">
								<div class="proPrice">
									￥{{item.price}}</div>
								<div class="proMark"> 
									￥{{item.price}}</div>
							</div>
						</div>
					</uni-grid-item>
				</template>
			</uni-grid>
		</div>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				info: [{
						colorClass: 'uni-bg-red',
						url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
						content: '内容 C'
					}
				],
				current: 0,
				mode: 'default',
				dotsStyles: {},
				swiperDotIndex: 0,
				menu: [{
					icon: "page",
					type: "水果"
				}, {
					icon: "page",
					type: "水果"
				}, {
					icon: "page",
					type: "水果"
				}, {
					icon: "page",
					type: "水果"
				}, {
					icon: "page",
					type: "水果"
				}],
				goods: [{
					img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
					name: 'aaaaaaaaaabbbbbb',
					price: '23.00',
					telprice: '50.99'
				}, {
					img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
					name: 'aaaaaaaaaabbbbbb',
					price: '23.00',
					telprice: '50.99'
				}, {
					img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
					name: 'aaaaaaaaaabbbbbb',
					price: '23.00',
					telprice: '50.99'
				}]
			}
		},
		onLoad() {},
		methods: {
			change(e) {
				this.current = e.detail.current
				console.log("1111", e);
			},
			onBanner(index) {
				console.log(22222, index);
			}
		}
	}
</script>

<style lang="scss">
	// @import '@/common/uni-nvue.scss';

	.swiper-box {
		height: 150px;
		margin: 0 20px;
		border-radius: 10px;
	}

	.swiper-item {
		/* #ifndef APP-NVUE */
		display: flex;
		border-radius: 10px;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: $uni-text-color-grey;
		color: #fff;
		border-radius: 10px;

	}

	.image {
		width: 100%;

	}

	/* #ifndef APP-NVUE */
	::v-deep .image img {
		-webkit-user-drag: none;
		-khtml-user-drag: none;
		-moz-user-drag: none;
		-o-user-drag: none;
		user-drag: none;

	}

	/* #endif */

	@media screen and (min-width: 500px) {
		.uni-swiper-dot-box {
			width: 400px;
			margin: 0 auto;
			margin-top: 8px;
			border-radius: 10px;
		}

		.image {
			width: 100%;
		}
	}

	.uni-bg-red {
		background-color: #ff5a5f;
	}

	.uni-bg-green {
		background-color: #09bb07;
	}

	.uni-bg-blue {
		background-color: #007aff;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 20rpx;
	}

	.example-body-item {
		border-radius: 10px;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 15rpx;
		padding: 15rpx;
		height: 60rpx;
		/* #ifndef APP-NVUE */
		display: flex;
		padding: 0 15rpx;
		/* #endif */
		flex: 1;
		border-color: #e5e5e5;
		border-style: solid;
		border-width: 1px;
		border-radius: 5px;
	}

	.example-body-item-text {
		font-size: 28rpx;
		color: #333;
	}

	.example-body-dots {
		width: 16rpx;
		height: 16rpx;
		border-radius: 50px;
		background-color: #333333;
		margin-left: 10rpx;
	}

	.active {
		border-style: solid;
		border-color: #007aff;
		border-width: 1px;
	}

	.menus {
		margin: 10px 10px;
		padding: 10px 10px;
		display: flex;
		align-content: space-around;
		flex-wrap: wrap;
		justify-content: space-between;

	}
	.card{
		margin: 10px;
		padding: 10px;
		display: flex;
		align-content: space-around;
		justify-content: space-around;
	}
	.middleBox {
		background: #fff;
		margin: 0 10upx;
		border-radius: 10upx;
	}
	.interval {
		background-color: #ffffff;
		height: 300upx;
	}
	.tjGoods {
		background-color: #ffffff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	
		// padding: 20upx;
		image {
			width: 220upx;
			height: 220upx;
		}
	}
	
	
</style>
