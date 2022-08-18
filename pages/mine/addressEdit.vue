<template>
	<div class="all">
		<div class="form">
			<div class="form-item">
				<div class="left">收货人</div>
				<div class="center"><input v-model="addressInfo.name" type="text" maxlength="25" placeholder="请输入姓名" @blur="onBlur('name')" /></div>
			</div>
			<div class="form-item">
				<div class="left">手机号码</div>
				<div class="center"><input v-model="addressInfo.tel" type="number" maxlength="11" placeholder="请输入手机号" @blur="onBlur('tel')" /></div>
			</div>
			<div class="form-item">
				<div class="left">省</div>
				<div class="center">
					<picker mode="selector" :value="provinceIndex" :range="provinceList" range-key="label" @change="onProvinceChange">
						<div class="picker">
							<span v-if="addressInfo.province">{{ addressInfo.province }}</span>
							<span v-else style="color: #808080;">请选择</span>
						</div>
					</picker>
				</div>
				<div class="right">
					<image src="/static/image/right.png" mode="aspectFit" alt="进入"></image>
				</div>
			</div>
			<div class="form-item">
				<div class="left">市</div>
				<div class="center">
					<picker mode="selector" :disabled="!addressInfo.province" :value="cityIndex" :range="cityList" range-key="label"
					 @change="onCityChange">
						<div class="picker">
							<span v-if="addressInfo.city">{{ addressInfo.city }}</span>
							<span v-else style="color: #808080;">请选择</span>
						</div>
					</picker>
				</div>
				<div class="right">
					<image src="/static/image/right.png" mode="aspectFit" alt="进入"></image>
				</div>
			</div>
			<div class="form-item">
				<div class="left">区</div>
				<div class="center">
					<picker mode="selector" :disabled="!addressInfo.city" :value="countyIndex" :range="countyList" range-key="label"
					 @change="onCountyChange">
						<div class="picker">
							<span v-if="addressInfo.county">{{ addressInfo.county }}</span>
							<span v-else style="color: #808080;">请选择</span>
						</div>
					</picker>
				</div>
				<div class="right">
					<image src="/static/image/right.png" mode="aspectFit" alt="进入"></image>
				</div>
			</div>
			<div class="form-item">
				<div class="left">详细地址</div>
				<div class="center"><textarea v-model="addressInfo.addressDetail" auto-height placeholder="请输入详细地址" @blur="onBlur('addressDetail')"></textarea></div>
			</div>
		</div>
		<div class="is-default">
			<radio :checked="addressInfo.isDefault" color="#ffaa00" @click="addressInfo.isDefault = !addressInfo.isDefault">设为默认地址</radio>
		</div>
		<button  class="save" @click="onSave(addressInfo)">保存</button>
	</div>
</template>

<script>
	import areaDatas from '@/static/area-datas.js';
	export default {
		name: 'addressEdit',
		data() {
			return {
				searchResult: [],
				addressInfo: {
					name: '',
					tel: '',
					country: '',
					province: '',
					city: '',
					county: '',
					areaCode: '',
					postalCode: '',
					addressDetail: '',
					isDefault: false
				},
				provinceIndex: -1,
				cityIndex: -1,
				countyIndex: -1
			};
		},
		computed: {
			disabledBtn() {
				return this.addressInfo.name && this.addressInfo.tel && this.addressInfo.province && this.addressInfo.city && this.addressInfo
					.county && this.addressInfo.addressDetail;
			},
			// 省级列表
			provinceList() {
				return areaDatas.province_list || [];
			},
			// 市级列表
			cityList() {
				if (this.provinceList.length === 0 || this.provinceIndex === -1) return [];
				const value = this.provinceList[this.provinceIndex].value.substr(0, 2);
				return areaDatas.city_list.filter(item => item.value.substr(0, 2) === value);
			},
			// 区级列表
			countyList() {
				if (this.cityList.length === 0 || this.cityIndex === -1) return [];
				const value = this.cityList[this.cityIndex].value.substr(0, 4);
				return areaDatas.county_list.filter(item => item.value.substr(0, 4) === value);
			}
		},
		onLoad(query) {
		},
		methods: {
			onProvinceChange(e) {
				this.provinceIndex = e.target.value;
				this.addressInfo.province = this.provinceList[this.provinceIndex].label;
				this.cityIndex = -1;
				this.addressInfo.city = '';
				this.countyIndex = -1;
				this.addressInfo.county = '';
			},
			onCityChange(e) {
				this.cityIndex = e.target.value;
				this.addressInfo.city = this.cityList[this.cityIndex].label;
				this.countyIndex = -1;
				this.addressInfo.county = '';
			},
			onCountyChange(e) {
				this.countyIndex = e.target.value;
				this.addressInfo.county = this.countyList[this.countyIndex].label;
			},
			onSave(addressInfo) {
				if (!addressInfo.name) {
					return this.$store.dispatch('showToast', {
						title: '请输入姓名',
						mask: false
					})
				}
				if (addressInfo.name.length < 2) {
					return this.$store.dispatch('showToast', {
						title: '收货人姓名为2-25个字符之间',
						mask: false
					})
				}
				if (!addressInfo.tel) {
					return this.$store.dispatch('showToast', {
						title: '请输入手机号',
						mask: false
					})
				}
				if (/^1[3-9]{10}$/.test(addressInfo.tel)) {
					return this.$store.dispatch('showToast', {
						title: '请输入11位手机号码',
						mask: false
					})
				}
				if (!addressInfo.province) {
					return this.$store.dispatch('showToast', {
						title: '请选择省',
						mask: false
					})
				}
				if (!addressInfo.city) {
					return this.$store.dispatch('showToast', {
						title: '请选择市',
						mask: false
					})
				}
				if (!addressInfo.county) {
					return this.$store.dispatch('showToast', {
						title: '请输入区',
						mask: false
					})
				}
				if (!addressInfo.addressDetail) {
					return this.$store.dispatch('showToast', {
						title: '请输入详细地址',
						mask: false
					})
				}
				console.log("12345");
				this.$store.dispatch('showToast', {
					icon: 'success',
					title: '保存成功'
				});
				setTimeout(() => {
					uni.navigateBack();
				}, 1500);
		
			},
			onBlur(key) {
				console.log('key', key)
				this.$set(this.addressInfo, key, this.addressInfo[key].replace(/\s/g, ''))
				
			},
			goBack() {
				uni.navigateBack();
			}
		}
	};
</script>

<style lang="scss" scoped>
	.all {
		min-height: 100vh;
		box-sizing: border-box;

		.top {
			width: 100%;
			height: 90upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #fff;
			box-sizing: border-box;
			position: fixed;
			top: 0;
			// #ifdef APP-PLUS
			top: var(--status-bar-height);
			// #endif
			left: 0;
			z-index: 10;

			image {
				width: 18upx;
				height: 30upx;
			}

			div {
				min-width: 41.25upx;
				height: 90upx;
				line-height: 90upx;
				font-size: 36upx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #323233;
				white-space: nowrap;
				padding: 0 30upx;
			}
			
			.back {
				min-width: auto;
			}

			.save {
				font-size: 24upx;
				font-weight: 500;
				color: $uni-text-color-placeholder;
			}
		}

		.form {
			background-color: #fff;
			margin-top: 30upx;
			padding: 0 30upx;

			.form-item {
				color: #323233;
				font-size: 30upx;
				display: flex;
				border-top: 1px solid #cccccc;

				&:first-child {
					border-top: none;
				}

				.left {
					min-width: 160upx;
					max-width: 160upx;
					height: 88upx;
					display: flex;
					align-items: center;
				}

				.center {
					flex: 1;
					min-height: 100%;

					input {
						height: 88upx;
					}

					.picker {
						height: 88upx;
						display: flex;
						align-items: center;
					}

					textarea {
						width: 100%;
						min-height: 230upx;
						line-height: 1.5;
						padding: 24upx 0;
						box-sizing: border-box;
					}

					input,
					textarea {
						color: #323233;
						font-size: 30upx;
					}
				}

				.right {
					min-width: 12upx;
					display: flex;
					align-items: center;
					padding: 0 10upx;

					image {
						width: 15upx;
						height: 25upx;
					}
				}
			}
		}

		.is-default {
			height: 88upx;
			color: #323233;
			font-size: 30upx;
			background-color: #fff;
			display: flex;
			align-items: center;
			margin-top: 40upx;
			padding: 0 40upx;

			/deep/.uni-radio-input {
				width: 30upx;
				height: 30upx;
			}
		}
	}
</style>
