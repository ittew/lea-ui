import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
Vue.component('lea-button', Button)
Vue.component('lea-icon', Icon)
Vue.component('lea-button-group', ButtonGroup)
new Vue({
    el: '#app',
    data: {
        loading1: false
    }
})