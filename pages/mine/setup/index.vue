<template>
	<view class="container">
		<view class="content" @click="toCenter()">
			<view>帮助中心</view>
			<image src="../../../static/icon/more.png" style="width: 30upx;height: 30upx;"></image>
		</view>
		<view class="content" @click="toAbout()">
			<view>关于我们</view>
			<image src="../../../static/icon/more.png" style="width: 30upx;height: 30upx;"></image>
		</view>
		<view class="content" @click="toClear()">
			<view>清除缓存</view>
			<view style="color: grey">7.71M<image src="../../../static/icon/more.png"
					style="width: 30upx;height: 30upx;"></image>
			</view>
		</view>
		<view class="content" @click="toUpdate()">
			<view>版本更新</view>
			<view style="display: flex;">
				<view style="background-color: #df0000;height: 20upx;width: 20upx;border-radius: 50%;"></view>
				<image src="../../../static/icon/more.png" style="width: 30upx;height: 30upx;"></image>
			</view>
		</view>
		<view v-if="show">
			<view class="box">
				<view class="sub">
					<view style="position: absolute;right: 50upx;" @click="close()">x</view>
					<image src="../../../static/icon/update.png" style="height: 200upx;width: 200upx;"></image>
					<view class="version">V2.0.0</view>
					<view style="margin: 30upx;color: grey;">
						<li>全新版本，全新上市</li>
						<li>全新版本，全新上市</li>
						<li>全新版本，全新上市</li>
					</view>
					<button style="background-color: #ff7903;color: aliceblue;width: 300upx;">立即更新</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			};
		},
		methods: {
			toCenter() {
				uni.navigateTo({
					url: "/pages/mine/setup/helpCenter"
				})
			},
			toAbout() {
				uni.navigateTo({
					url: "/pages/mine/setup/about"
				})
			},
			toClear() {
				uni.showModal({
					content: '确定要清楚缓存吗？',
					success: modalRes => {
						if (modalRes.confirm) {
							console.log('用户点击确定');
						} else if (modalRes.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			toUpdate() {
				this.show = true
			},
			close() {
				this.show = false
			}
		}
	}
</script>

<style lang="less">
	.content {
		background-color: #fff;
		padding: 30upx 40upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.box {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 30upx;
		padding: 40upx;
		border-radius: 20upx;
		background-color: #0000008a;
		z-index: 9999;
		display: flex;
		align-items: center;
		justify-content: center;

		.sub {
			border-radius: 10upx;
			width: 590upx;
			height: 620upx;
			background: #FFFFFF;
			display: flex;
			flex-direction: column;
			align-items: center;
			position: relative;
			padding: 30upx 0;
		}

		.version {
			background-color: #ff7903;
			border-radius: 20upx;
			color: #FFFFFF;
			padding: 10upx 20upx;
		}

	}
</style>
