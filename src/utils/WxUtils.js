import Tips from './Tips';
import wepy from 'wepy';

export default class WxUtils {
  // 微信登录
  static async wxLogin() {
    return new Promise((resolve, reject) => {
      wx.login({
        success: (res) => {
          resolve(res.code)
        },
        fail: (err) => {
          resolve(err)
        }
      })
    })
  }
  // 隐藏分享菜单
  static async wxHideShareMenu() {
    return new Promise((resolve, reject) => {
      wx.hideShareMenu({
        success: (res) => {
          resolve(true)
        },
        fail: (err) => {
          resolve(err)
        }
      })
    })
  }
  // 微信获取用户授权
  static async wxGetUserInfo () {
    return new Promise((resolve, reject) => {
      wx.getUserInfo({
        success: (res) => {
          resolve(res)
        },
        fail: (err) => {
          resolve(err)
        }
      })
    })
  }
}
