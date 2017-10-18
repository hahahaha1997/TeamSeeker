//head.js
//获取用户身份信息
const app = getApp()
var iden = {}
Page({
  data: {
    motto: '选择身份进入TeamSeeker',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  bindViewTap_stu: function () {

    wx.navigateTo({
      url: '../index/index?id=1'
    })
  },
  bindViewTap_tea: function () {

    wx.navigateTo({
      url: '../index/index?id=2'
    })
  },
  onLoad: function () {
    wx.request({
      url: "http://119.29.253.254:8000/api/auth?" + this.token,
      data: {

      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "GET",
      success: function (res) {
        iden = res.data.identity
        if (iden == 0 || iden == 1)
          wx.navigateTo({
            url: '../index/index'
          })
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
