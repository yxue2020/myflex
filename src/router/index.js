import Vue from 'vue'
import Router from 'vue-router'

// layouts
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        header: Header,
        default: Hello,
        footer: Footer
      }
    }
  ]
})
