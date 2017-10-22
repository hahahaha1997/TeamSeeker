var app = getApp();

var pageData = {
  data: {
    //搜索栏样式
    "search1":{
      "type":"search",
      "style":"margin-top:0;height:117.1875rpx;width:750rpx;background-color:#efeff4；margin-left:auto;",
      "content":{
        "placeholder":"请输入搜索内容"
        },
      "customFeature":{
          "hasQuickTags":true,
          "ifLocation":false,
          "quickTags":[],
          "searchObject":""
        },
          "animations":[],
          "page_form":"",
          "compId":"search1",
          "parentCompid":"search1"},

          //滑块的样式
          "carousel2":{
          "type":"carousel",
          "style":"height:375rpx; margin-left:auto; margin-top:0;opacity:1;",
          "content":[
            {
"customFeature":[],
              "pic":"/images/swiper3.png",
"style":""
            },
            {
              "customFeature": [],
              "pic": "/images/swiper4.png",
              "style": ""
            },
            {
"customFeature":[],
"pic":"/images/swiper2.png","content":"",
"parentCompid":"carousel2",
"style":""
            }],
            "customFeature":{
              "autoplay":true,
              "interval":2,
              "carouselgroupId":null
              },
              "animations":[],
              "page_form":"",
              "compId":"carousel2"
            },

            //标题的样式
              "list3":{
              "type":"list",
              "style":"background-color:#e8f5e9;#66bb6a;color:rgb(34, 34, 34);font-size:37.5rpx;opacity:1;text-align:left;margin-left:auto;",

              "content":[
{"customFeature":[],"title":"2018年世界ACM程序设计大赛", "secTitle":"TeamSeeker",
                  "pic": "https://okdkbnczs.qnssl.com/image/wx/comp1.jpeg", "content": "", "listStyle": "margin-bottom:2.34375rpx;background-color:rgb(255, 255, 255);height:140.625rpx;margin-left:auto;", "imgStyle":"width:110rpx;height:110rpx;margin-left:auto;margin-right:20rpx;","secTitleStyle":"color:rgb(102, 102, 102);font-size:28.125rpx;text-align:left;margin-left:auto;","titleWidth":"width:585.9375rpx;margin-left:auto;","parentCompid":"list3","style":""},

{"customFeature": [], "title": "2018年港澳台侨创新创业大赛", "secTitle": "TeamSeeker2.0",
  "pic": "https://okdkbnczs.qnssl.com/image/wx/comp1.jpeg", "content": "", "listStyle": "margin-bottom:2.34375rpx;background-color:rgb(255, 255, 255);height:140.625rpx;margin-left:auto;", "imgStyle": "width:110rpx;height:110rpx;margin-left:auto;margin-right:20rpx;", "secTitleStyle": "color:rgb(102, 102, 102);font-size:28.125rpx;text-align:left;margin-left:auto;", "titleWidth": "width:585.9375rpx;margin-left:auto;", "parentCompid": "list3", "style": ""
},

 {"customFeature":[],"title":"基于微信小程序的校园信息交互平台","secTitle":"TeamSeek3.0",            
   "pic": "https://okdkbnczs.qnssl.com/image/wx/proj1.jpeg", "content": "", "listStyle": "margin-bottom:2.34375rpx;background-color:rgb(255, 255, 255);height:140.625rpx;margin-left:10rpx;margin-boder:#000000", "imgStyle": "width:100rpx;height:100rpx;margin-left:auto;margin-right:20rpx;", "secTitleStyle": "color:rgb(102, 102, 102);font-size:28.125rpx;text-align:left;margin-left:auto;", "titleWidth": "width:585.9375rpx;margin-left:auto;", "parentCompid": "list3", "style": ""},
 
 {"customFeature": [], "title": "TeamSeeker", "secTitle":"TeamSeeker4.0",
   "pic": "https://okdkbnczs.qnssl.com/image/wx/proj1.jpeg", "content": "", "listStyle":"margin-bottom:2.34375rpx;background-color:rgb(255, 255, 255);height:140.625rpx;margin-left:10rpx;","imgStyle":"width:100rpx;height:100rpx;margin-left:auto;margin-right:20rpx;","secTitleStyle":"color:rgb(102, 102, 102);font-size:28.125rpx;text-align:left;margin-left:auto;","titleWidth":"width:585.9375rpx;margin-left:auto;","parentCompid":"list3","style":""}],

"customFeature":{"imgHeight":60,"imgWidth":60,"lineBackgroundColor":"rgb(232, 232, 232)","lineBackgroundImage":"","lineHeight":60,"margin":1,"mode":0,"secColor":"rgb(102, 102, 102)","secFontSize":"12px","secFontStyle":"","secFontWeight":"","secTextAlign":"left","secTextDecoration":""},"animations":[],"page_form":"","compId":"list3","itemType":"list","itemParentType":null,"itemIndex":"list3"},"has_tabbar":1,"page_hidden":true,"page_form":""},
    need_login: false,
    page_router: 'page10000',
    page_form: 'none',
      list_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [],
      communityComps: [],
      franchiseeComps: [],
      cityLocationComps: [],
      seckillOnLoadCompidParam: [],
      requesting: false,
  requestNum: 1,
  modelChoose: [],
  modelChooseId: '',
  modelChooseName: [],
  onLoad: function (e) {
    app.onPageLoad(e);
  },
  dataInitial: function () {
    app.pageDataInitial();
  },
  onShareAppMessage: function (e) {
    return app.onPageShareAppMessage(e);
  },
  onShow: function () {
    app.onPageShow();
  },
  onReachBottom: function () {
    app.onPageReachBottom();
  },
  onUnload: function () {
    app.onPageUnload();
  },
  tapPrevewPictureHandler: function (e) {
    app.tapPrevewPictureHandler(e);
  },
  suspensionBottom: function () {
    app.suspensionBottom();
  },
  pageScrollFunc: function (e) {
    app.pageScrollFunc(e);
  },
  dynamicVesselScrollFunc: function (e) {
    app.dynamicVesselScrollFunc(e);
  },
  goodsScrollFunc: function (e) {
    app.goodsScrollFunc(e);
  },
  franchiseeScrollFunc: function (e) {
    app.franchiseeScrollFunc(e);
  },
  seckillScrollFunc: function (e) {
    app.seckillScrollFunc(e);
  },
  changeCount: function (e) {
    app.changeCount(e);
  },
  inputChange: function (e) {
    app.inputChange(e);
  },
  bindDateChange: function (e) {
    app.bindDateChange(e);
  },
  bindTimeChange: function (e) {
    app.bindTimeChange(e);
  },
  bindSelectChange: function (e) {
    app.bindSelectChange(e);
  },
  bindScoreChange: function (e) {
    app.bindScoreChange(e);
  },
  submitForm: function (e) {
    app.submitForm(e);
  },
  udpateVideoSrc: function (e) {
    app.udpateVideoSrc(e);
  },
  tapMapDetail: function (e) {
    app.tapMapDetail(e);
  },
  uploadFormImg: function (e) {
    app.uploadFormImg(e);
  },
  deleteUploadImg: function (e) {
    app.deleteUploadImg(e);
  },
  listVesselTurnToPage: function (e) {
    app.listVesselTurnToPage(e);
  },
  dynamicVesselTurnToPage: function (e) {
    app.dynamicVesselTurnToPage(e);
  },
  userCenterTurnToPage: function (e) {
    app.userCenterTurnToPage(e);
  },
  turnToGoodsDetail: function (e) {
    app.turnToGoodsDetail(e);
  },
  turnToFranchiseeDetail: function (e) {
    app.turnToFranchiseeDetail(e);
  },
  turnToSeckillDetail: function (e) {
    app.turnToSeckillDetail(e);
  },
  sortListFunc: function (e) {
    app.sortListFunc(e);
  },
  bbsInputComment: function (e) {
    app.bbsInputComment(e);
  },
  bbsInputReply: function (e) {
    app.bbsInputReply(e);
  },
  uploadBbsCommentImage: function (e) {
    app.uploadBbsCommentImage(e);
  },
  uploadBbsReplyImage: function (e) {
    app.uploadBbsReplyImage(e);
  },
  deleteCommentImage: function (e) {
    app.deleteCommentImage(e);
  },
  deleteReplyImage: function (e) {
    app.deleteReplyImage(e);
  },
  bbsPublishComment: function (e) {
    app.bbsPublishComment(e);
  },
  clickBbsReplyBtn: function (e) {
    app.clickBbsReplyBtn(e);
  },
  bbsPublishReply: function (e) {
    app.bbsPublishReply(e);
  },
  searchList: function (e) {
    app.searchList(e);
  },
  selectLocal: function (e) {
    app.selectLocal(e);
  },
  cancelCity: function (e) {
    app.cancelCity(e);
  },
  bindCityChange: function (e) {
    app.bindCityChange(e);
  },
  submitCity: function (e) {
    app.submitCity(e);
  },
  openTakeoutLocation: function (e) {
    app.openTakeoutLocation(e);
  },
  callTakeout: function (e) {
    app.callTakeout(e);
  },
  getMoreAssess: function (e) {
    app.getMoreAssess(e);
  },
  changeEvaluate: function (e) {
    app.changeEvaluate(e)
  },
  deleteAllCarts: function (e) {
    app.deleteAllCarts(e);
  },
  clickWaimaiCategory: function (e) {
    app.clickWaimaiCategory(e);
  },
  takeoutGoodsListMinus: function (e) {
    app.takeoutGoodsListMinus(e);
  },
  takeoutGoodsListPlus: function (e) {
    app.takeoutGoodsListPlus(e);
  },
  takeoutCartListMinus: function (e) {
    app.takeoutCartListMinus(e);
  },
  takeoutCartListPlus: function (e) {
    app.takeoutCartListPlus(e);
  },
  changeAssessType: function (e) {
    app.changeAssessType(e);
  },
  showShoppingCartPop: function (e) {
    app.showShoppingCartPop(e);
  },
  hideTakeoutShoppingCart: function (e) {
    app.hideTakeoutShoppingCart(e);
  },
  showTakeoutDetail: function (e) {
    app.showTakeoutDetail(e);
  },
  hideTakeoutDetailPop: function (e) {
    app.hideTakeoutDetailPop(e);
  },
  hideTakeoutModelPop: function (e) {
    app.hideTakeoutModelPop(e);
  },
  chooseTakeoutModel: function (e) {
    app.chooseTakeoutModel(e);
  },
  sureChooseModel: function (e) {
    app.sureChooseModel(e);
  },
  clickWaimaiChooseComplete: function (e) {
    app.clickWaimaiChooseComplete(e);
  },
  tapGoodsTradeHandler: function (e) {
    app.tapGoodsTradeHandler(e);
  },
  tapInnerLinkHandler: function (e) {
    app.tapInnerLinkHandler(e);
  },
  tapPhoneCallHandler: function (e) {
    app.tapPhoneCallHandler(e);
  },
  tapRefreshListHandler: function (e) {
    app.tapRefreshListHandler(e);
  },
  tapGetCouponHandler: function (e) {
    app.tapGetCouponHandler(e);
  },
  tapCommunityHandler: function (e) {
    app.tapCommunityHandler(e);
  },
  turnToCommunityPage: function (e) {
    app.turnToCommunityPage(e);
  },
  tapToFranchiseeHandler: function (e) {
    app.tapToFranchiseeHandler(e);
  },
  tapToTransferPageHandler: function () {
    app.tapToTransferPageHandler();
  },
  tapToSeckillHandler: function (e) {
    app.tapToSeckillHandler(e);
  },
  tapToCouponReceiveListHandler: function () {
    app.tapToCouponReceiveListHandler();
  },
  tapToRechargeHandler: function () {
    app.tapToRechargeHandler();
  },
  tapToXcx: function (e) {
    app.tapToXcx(e);
  },
  tapFranchiseeLocation: function (e) {
    app.tapFranchiseeLocation(e);
  },
  showAddShoppingcart: function (e) {
    app.showAddShoppingcart(e);
  },
  hideAddShoppingcart: function () {
    app.hideAddShoppingcart();
  },
  selectGoodsSubModel: function (e) {
    app.selectGoodsSubModel(e);
  },
  resetSelectCountPrice: function () {
    app.resetSelectCountPrice();
  },
  // 电商
  clickGoodsMinusButton: function (e) {
    app.clickGoodsMinusButton();
  },
  clickGoodsPlusButton: function (e) {
    app.clickGoodsPlusButton();
  },
  sureAddToShoppingCart: function () {
    app.sureAddToShoppingCart();
  },
  sureAddToBuyNow: function () {
    app.sureAddToBuyNow();
  },
  clickTostoreMinusButton: function (e) {
    app.clickTostoreMinusButton(e);
  },
  clickTostorePlusButton: function (e) {
    app.clickTostorePlusButton(e);
  },
  readyToPay: function () {
    app.readyToTostorePay();
  },
  getValidateTostore: function () {
    app.getValidateTostore();
  },
  goToShoppingCart: function () {
    app.goToShoppingCart();
  },
  getCartList: function () {
    app.getTostoreCartList();
  },
  stopPropagation: function () {
  },
  turnToSearchPage:function (e) {
    app.turnToSearchPage(e);
  },
  previewImage: function (e) {
    var dataset = e.currentTarget.dataset;
    app.previewImage({
      current : dataset.src,
      urls: dataset.previewImgarr,
    });
  },
  scrollPageTop: function () {
    app.pageScrollTo(0);
  },
  suspensionTurnToPage: function (e) {
    app.suspensionTurnToPage(e);
  },
  tapToLuckyWheel: function (e) {
    app.tapToLuckyWheel(e);
  },
  keywordList:{},
  bindSearchTextChange: function (e) {
    this.keywordList[e.currentTarget.dataset.compid] = e.detail.value;
  },
};
Page(pageData);
