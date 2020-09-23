import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3881b7d5 = () => interopDefault(import('../pages/articles/_id.vue' /* webpackChunkName: "pages/articles/_id" */))
const _8b48c918 = () => interopDefault(import('../pages/categories/_id.vue' /* webpackChunkName: "pages/categories/_id" */))
const _08a22c96 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/articles/:id?",
    component: _3881b7d5,
    name: "articles-id"
  }, {
    path: "/categories/:id?",
    component: _8b48c918,
    name: "categories-id"
  }, {
    path: "/",
    component: _08a22c96,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
