"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  const _component_up_index_anchor = common_vendor.resolveComponent("up-index-anchor");
  const _component_up_index_item = common_vendor.resolveComponent("up-index-item");
  const _component_up_index_list = common_vendor.resolveComponent("up-index-list");
  (_easycom_u_search2 + _component_up_index_anchor + _component_up_index_item + _component_up_index_list)();
}
const _easycom_u_search = () => "../../uni_modules/uview-plus/components/u-search/u-search.js";
if (!Math) {
  _easycom_u_search();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let indexList = common_vendor.ref([1, 2, 3]);
    let itemArr = common_vendor.ref([
      ["列表A1", "列表A2", "列表A3"],
      ["列表B1", "列表B2", "列表B3"],
      ["列表C1", "列表C2", "列表C3"]
    ]);
    let info = common_vendor.ref();
    let search = (e) => {
      common_vendor.index.showToast({
        title: "点击成功"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(itemArr), (item, index, i0) => {
          return {
            a: "08c5ebb2-3-" + i0 + "," + ("08c5ebb2-2-" + i0),
            b: common_vendor.p({
              text: common_vendor.unref(indexList)[index]
            }),
            c: common_vendor.f(item, (cell, index2, i1) => {
              return {
                a: common_vendor.t(cell)
              };
            }),
            d: "08c5ebb2-2-" + i0 + ",08c5ebb2-1"
          };
        }),
        b: common_assets._imports_0,
        c: common_vendor.p({
          ["index-list"]: common_vendor.unref(indexList)
        }),
        d: common_vendor.o(($event) => common_vendor.unref(search)()),
        e: common_vendor.t(common_vendor.unref(info))
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
