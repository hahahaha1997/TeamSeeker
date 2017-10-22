var app      = getApp();

var pageData = {
  data: {
    "form_vessel1":{
      "type":"form-vessel",
      "style":"background-color:rgba(0, 0, 0, 0);opacity:1;margin-left:auto;",
      "content":[{
        "type":"input-ele",
        "style":"width:642.1875rpx;margin-top:23.4375rpx;border-radius:23.4375rpx;height:93.75rpx;opacity:1;margin-left:auto;margin-right:auto;","content":"","customFeature":{"segment":"","placeholder":"姓名","ifMust":true},"animations":[],"compId":"data.content[0]","formCompid":"form_vessel1","segment_required":0,"parentCompid":"form_vessel1"},
        
        {"type":"input-ele","style":"width:642.1875rpx;margin-top:23.4375rpx;border-radius:23.4375rpx;height:93.75rpx;opacity:1;margin-left:auto;margin-right:auto;","content":"","customFeature":{"segment":"","placeholder":"\u5e74\u7ea7\u5b66\u9662\uff08\u5982\uff1a2014\u7ecf\u6d4e\u5b66\u9662\uff09","ifMust":true},"animations":[],"compId":"data.content[1]","formCompid":"form_vessel1","segment_required":0,"parentCompid":"form_vessel1"},
        
        {"type":"input-ele","style":"width:642.1875rpx;margin-top:23.4375rpx;border-radius:23.4375rpx;height:93.75rpx;opacity:1;margin-left:auto;margin-right:auto;","content":"","customFeature":{"segment":"","placeholder":"\u7cfb","ifMust":true},"animations":[],"compId":"data.content[2]","formCompid":"form_vessel1","segment_required":0,"parentCompid":"form_vessel1"},
        
        {"type":"input-ele","style":"width:642.1875rpx;margin-top:23.4375rpx;border-radius:23.4375rpx;height:93.75rpx;opacity:1;margin-left:auto;margin-right:auto;","content":"","customFeature":{"segment":"","placeholder":"\u5b66\u53f7\/\u6559\u5e08\u4eba\u4e8b\u7f16\u53f7","ifMust":true},"animations":[],"compId":"data.content[3]","formCompid":"form_vessel1","segment_required":0,"parentCompid":"form_vessel1"},
        
        {"type":"input-ele","style":"width:642.1875rpx;margin-top:23.4375rpx;border-radius:23.4375rpx;height:93.75rpx;opacity:1;margin-left:auto;margin-right:auto;","content":"","customFeature":{"segment":"","placeholder":"\u6559\u80b2\u6c34\u5e73\uff08\u672c\u79d1\/\u7814\u7a76\u751f\u7b49\uff09","ifMust":true},"animations":[],"compId":"data.content[4]","formCompid":"form_vessel1","segment_required":0,"parentCompid":"form_vessel1"}],
        
        "customFeature":{"form":"212"},"animations":[],"page_form":"","compId":"form_vessel1","form":"212","field_info":[],"formCompid":"form_vessel1"},"form_vessel2":{"type":"form-vessel","style":"background-color:rgba(0, 0, 0, 0);opacity:1;margin-left:auto;","content":[{"type":"textarea-ele","style":"margin-top:21.09375rpx;opacity:1;border-radius:23.4375rpx;width:642.1875rpx;height:239.0625rpx;margin-left:auto;line-height:70.3125rpx;margin-right:auto;","content":"","customFeature":{"placeholder":"\u4e2a\u4eba\u7b80\u4ecb"},"animations":[],"compId":"data.content[0]","formCompid":"form_vessel2","segment_required":0,"parentCompid":"form_vessel2"}],"customFeature":{"form":""},"animations":[],"page_form":"","compId":"form_vessel2","form":"","field_info":[],"formCompid":"form_vessel2"},"button3":{"type":"button","style":"margin-top:30.46875rpx;background-color:rgb(61,59, 79);line-height:93.75rpx;width:642.1875rpx;border-radius:9.375rpx;height:93.75rpx;font-size:32.8125rpx;opacity:1;margin-left:auto;margin-right:auto;","content":"\u63d0\u4ea4","customFeature":{"segment":"submit-btn","action":"call","inner-page-link":"page10001"},"animations":[],"page_form":"","compId":"button3","parentCompid":"button3","itemType":"button","itemParentType":null,"itemIndex":"button3"},"has_tabbar":0,"page_hidden":true,"page_form":""},
    need_login: false,
    page_router: 'page10002',
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
