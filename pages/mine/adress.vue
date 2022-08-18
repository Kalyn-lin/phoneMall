<template>
	<div class="all">
			<div style="height: 40upx;"></div>
			<div class="address-list" v-if="list.length > 0">
				<div class="item" v-for="(item, index) in list" :key="index">
					<div class="info" @click="select(item)">
						<div class="top">
							<div class="name">{{ item.name }}</div>
							<div class="tel">{{ item.tel }}</div>
						</div>
						<div class="address">{{ item.address }}</div>
					</div>
					<div class="action">
						<div class="left">
							<radio :checked="item.isDefault" color="#ffaa00" @click="setDefault(item)">设为默认地址</radio>
						</div>
						<div class="right">
							<div @click="onEdit(item)">
								<image src="/static/image/edit.png" mode="aspectFit"></image>
								编辑
							</div>
							<div @click="onDelete(item)">
								<image src="/static/image/delete.png" mode="aspectFit"></image>
								删除
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style="height: 100upx;"></div>
		<div class="add" @click="onAdd">新增地址</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [{_id:1,name:"张三",tel:"13922577869",address:"广东省深圳市龙华区",isDefault:false}],
			};
		},
		methods: {
			select(item) {
			},
			setDefault(item) {
				if (item.isDefault) return;
				item.isDefault = true;
				
			},
			onEdit(item) {
				uni.navigateTo({
					url: '/pages/mine/addressEdit?_id=' + item._id
				});
			},
			onDelete(item) {
				uni.showModal({
					title: '温馨提示',
					content: '确定删除该地址吗？',
					success: modalRes => {
						if (modalRes.confirm) {
							console.log('用户点击确定');
							this.$store.dispatch('showLoading', '正在删除...');
						} else if (modalRes.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			onAdd() {
				uni.navigateTo({
					url: '/pages/mine/addressEdit'
				});
			}
		}
	};
</script>

<style scoped lang="scss">
	.all {
		.address-list {
			// #ifdef APP-PLUS
			margin-top: var(--status-bar-height);

			// #endif
			.item {
				color: #888888;
				font-size: 24upx;
				background-color: #fff;
				// border-top: 1px solid #ccc;s
				margin-top: 20upx;

				&:first-child {
					margin-top: 0;
				}

				.info {
					padding: 30upx 40upx;

					.top {
						display: flex;
						justify-content: space-between;
						align-items: center;

						.name {
							color: #323233;
							font-weight: bold;
						}
					}

					.address {
						margin-top: 20upx;
						line-height: 1.5;
					}
				}

				.action {
					height: 70upx;
					border-top: 1px solid #ccc;
					padding: 0 40upx;
					display: flex;
					justify-content: space-between;
					align-items: center;

					&>div {
						display: flex;
						align-items: center;
					}

					.left {
						/deep/.uni-radio-input {
							width: 30upx;
							height: 30upx;
						}
					}

					.right {
						justify-content: flex-end;

						&>div {
							display: flex;
							align-items: center;
							margin-left: 30upx;
						}

						image {
							width: 30upx;
							height: 30upx;
							margin-right: 10upx;
						}
					}
				}
			}
		}

		.add {
			width: 100%;
			height: 100upx;
			color: #fff;
			font-size: 30upx;
			line-height: 100upx;
			text-align: center;
			background-color: #ffaa00;
			position: fixed;
			left: 0;
			bottom: 0;
			z-index: 10;
		}
	}
</style>
