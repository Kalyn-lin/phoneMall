const actions = {
	showToast(context, toastMsg) {
		if (typeof toastMsg === 'string') {
			uni.showToast({
				icon: 'none',
				title: toastMsg,
				duration: 2000,
				mask: true
			})
		} else {
			toastMsg.title = toastMsg.text || toastMsg.message || toastMsg.title
			uni.showToast(Object.assign({
				icon: 'none',
				title: '',
				duration: 2000,
				mask: true
			}, toastMsg))
		}
	},
	showLoading(context, loadingMsg) {
		if (typeof loadingMsg === 'string') {
			uni.showLoading({
				title: loadingMsg,
				mask: true
			})
		} else {
			loadingMsg.title = loadingMsg.text || loadingMsg.message || loadingMsg.title
			uni.showLoading(Object.assign({
				title: '',
				mask: true
			}, loadingMsg))
		}
	}
}

export default actions
