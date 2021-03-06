import Vue from 'vue'
import VueResource from 'vue-resource'

// 启用
Vue.use(VueResource)

const API = {
    // 获得任务列表
    getTaskList: function(self) {
        return self.$http.get(location.origin.replace(/:8899/, '') + ':3000/tasks', {foo: 'bar'})
    }
}

export default API