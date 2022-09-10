import {createRouter as _createRouter,
        createWebHistory
    } from 'vue-router'

const pages = import.meta.glob('../pages/*.vue')

const routes = Object.keys(pages).map((path)=>{
    const name = path.match(/\.\.\/pages(.*)\.vue$/)[1].toLowerCase()
    console.log(name,'name',path)
    return {
        path: name === '/home' ? '/' : name,
        component: pages[path]
    }
})

export function createRouter(){
    return _createRouter({
        history:createWebHistory(),
        routes
    })
}