import Loading from './loading.vue'

export default {
  /**
   * 每个插件都有的install方法，用于安装插件
   * @param {Object} Vue - Vue类
   * @param {Object} options - 插件安装配置
   */
  install(Vue, options) {
    const VueLoading = Vue.extend(Loading)
    let loading = null

    /**
     * 初始化并显示loading
     * @returns {Promise} Promise实例
     */
    function $loading() {
      return new Promise((resolve) => {
        // 第一次调用
        if (!loading) {
          loading = new VueLoading()
          // 手动创建一个未挂载的实例
          loading.$mount()
          // 挂载
          document.body.appendChild(loading.$el)
        }
        // 显示loading
        loading.showloading()
        resolve()
      })
    }
    // 定义关闭loading方法
    $loading.end = () => {
      loading.hideloading()
    }
    Vue.prototype.$loading = $loading
  }
}