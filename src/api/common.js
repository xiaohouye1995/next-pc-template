import request from '../utils/request'

//获取菜单列表
export function getMenus() {
    return request({
        url: '/api/menus/getMenus',
        method: 'get',
    })
}