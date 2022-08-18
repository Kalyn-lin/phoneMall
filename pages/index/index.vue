<template>
	<view class="content">
		<uni-search-bar style="background-color: #fff;"></uni-search-bar>
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode"
			style="margin: 0 10px;border-radius: 15px;text-align: center;">
			<swiper class="swiper-box" @change="change">
				<swiper-item v-for="(item ,index) in info" :key="index">
					<image style="border-radius: 15px;" :src="item.content" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<view style="display:flex; flex-wrap: wrap;margin: 10px;">
			<view style="width:25%;" v-for="item in menu">
				<view style="padding: 10px;text-align: center">
		 		<uni-icons type="contact" size="30"></uni-icons>
					<view>{{item.text}}</view>
				</view>
			</view>
		</view>
	
	<view style="display: flex;margin: 10px;flex-wrap: wrap;justify-content: space-around;">
		<view style="width: 50%;background-color: #fff;" v-for="item in products" @click="toproDetail()">
			<view style="padding: 10px;">
			<image style="width: 150px;height: 150px;border-radius: 10px;" :src="item.url"></image>
			<view style="width: 150px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;">{{item.text}}</view>
			<view style="text-decoration:line-through;color: gray;padding:5px 0;font-size: 15px;">￥{{item.price}}</view>
			<view style="display: flex;align-items: baseline;">
				<view style="color: orangered;font-size: 18px;">￥{{(item.realprice).toFixed(2)}} </view>
			    <view style="font-size: 10px;color: gray;padding: 0 0 0 4px;">{{item.buy}}人付款</view>
			</view>
			</view>
		</view>
		
	</view>
	
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				info: [{
					content: 'https://imgx.mediav.com/rimg.jpg?size=368x122&img=https%3A%2F%2Fs3m1.fenxi.com%2Fgalileo%2Ff37ce3ef2e516204c2637910fa324b58.gif&webp=1'
				}, {
					content: 'https://p.ssl.img.360kuai.com/dmfd/158_88_75/t01d3fd0ee2db4ad35f.webp?size=1196x758'
				}, {
					content: 'https://p.ssl.img.360kuai.com/dmfd/158_88_75/t01d3fd0ee2db4ad35f.webp?size=1196x758'
				}],
				menu: [{
					url: 'https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t01380b539956c76f95.webp?size=1024x683',
					text: "ppotato"
				}, {
					url: 'https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t01380b539956c76f95.webp?size=1024x683',
					text: "ppotato"
				}, {
					url: 'https://p1.ssl.qhimgs1.com/sdm/280_280_100/t0175b3ab3aa44e4563.jpg',
					text: "ppotato"
				}, {
					url: 'https://p1.ssl.qhimgs1.com/sdm/280_280_100/t0175b3ab3aa44e4563.jpg',
					text: "ppotato"
				}, {
					url: 'https://p1.ssl.qhimgs1.com/sdm/280_280_100/t0175b3ab3aa44e4563.jpg',
					text: "ttomamo"
				}, {
					url: 'https://p1.ssl.qhimgs1.com/sdm/280_280_100/t0175b3ab3aa44e4563.jpg',
					text: "ppotato"
				}],
				products: [{
					url: 'https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t01380b539956c76f95.webp?size=1024x683',
					text: "ppotato这是一种很好吃的土豆芋头西红柿",
					price:"20.00",
					realprice:13,
					buy:98
				}, {
					url: 'https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t01380b539956c76f95.webp?size=1024x683',
					text: "ppotato这是一种很好吃的土豆芋头西红柿",
					price:"20",
					realprice:14,
					buy:99
				}, {
					url: 'https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t01380b539956c76f95.webp?size=1024x683',
					text: "ppotato这是一种很好吃的土豆芋头西红柿",
					price:"20",
					realprice:15,
					buy:64
				}, {
					url: 'https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t01380b539956c76f95.webp?size=1024x683',
					text: "ttomamo",
					price:"20",
					realprice:18,
					buy:60
				}, 
				],
				current: 0,
				mode: 'round',
			}
		},
		onLoad() {},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			toproDetail(){
				uni.navigateTo({
					url:"/pages/index/proDetail"
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
