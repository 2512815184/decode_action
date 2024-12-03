//Tue Dec 03 2024 11:21:14 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var haha03boxWins = function (_0x32c992) {
  function _0x247e70() {
    {
      var _0x247e70 = _0x32c992.call(this) || this;
      _0x247e70.roleIndex = 0;
      _0x247e70.oldIndex = 0;
      _0x247e70.roleSelectVis = true;
      _0x247e70.skinName = "haha01boxWinsskins";
      _0x247e70.isTopLevel = true;
      _0x247e70.addExclusionWin(egret.getQualifiedClassName(SmeltEquipTotalWin));
      return _0x247e70;
    }
  }
  __extends(_0x247e70, _0x32c992);
  _0x247e70.prototype.initUI = function () {};
  _0x247e70.prototype.open = function (_0x32c992) {
    this.addTouchEvent(this.closeBtn, this.onClick);
    this.oldIndex = this.tab.selectedIndex = this.viewStack.selectedIndex = _0x32c992[0] ? _0x32c992[0] : 0;
    this.addTouchEvent(this, this.onClick);
    this.addChangingEvent(this.tab, this.checkIsOpen);
    this.setOpenIndex(0);
  };
  _0x247e70.prototype.close = function () {
    for (var _0x32c992 = [], _0x247e70 = 0; _0x247e70 < arguments.length; _0x247e70++) _0x32c992[_0x247e70] = arguments[_0x247e70];
    var _0x4ac673 = ViewManager.ins().getView(UIView2);
    _0x4ac673 && _0x4ac673.closeNav(UIView2.NAV_ROLE);
    for (var _0x1e95bb = this.viewStack.numChildren, _0x3977ed = 0; _0x1e95bb > _0x3977ed; _0x3977ed++) this.viewStack.getChildAt(_0x3977ed) instanceof eui.Group || this.viewStack.getChildAt(_0x3977ed).close();
  };
  _0x247e70.prototype.checkIsOpen = function (_0x32c992) {
    this.setOpenIndex(this.tab.selectedIndex);
    this.viewStack.selectedIndex = this.tab.selectedIndex;
    this.viewStack.getElementAt(this.oldIndex).close();
  };
  _0x247e70.prototype.setOpenIndex = function (_0x32c992) {
    if (this.oldIndex && 1 == this.oldIndex && this.oldIndex != _0x32c992 && this.getWingPanelInfo()) return this.doOpenHintWin(1, this.tab.selectedIndex), void (this.tab.selectedIndex = this.oldIndex);
    switch (_0x32c992) {
      case 0:
        this.tgwu1.open();
        break;
      case 1:
        this.tgwu2.open(2);
        break;
      case 2:
        this.tgwu3.open(2);
        break;
      case 3:
        this.tgwu4.open(2);
    }
  };
  _0x247e70.prototype.onClick = function (_0x32c992) {
    switch (_0x32c992.target) {
      case this.closeBtn:
      case this.closeBtn0:
        ViewManager.ins().close(this);
    }
  };
  return _0x247e70;
}(BaseEuiView);
__reflect(haha03boxWins.prototype, "haha03boxWins");
ViewManager.ins().reg(haha03boxWins, LayerManager.UI_Main);
var DestroyEquip2Item = function (_0x40ee55) {
  function _0x1b476e() {
    var _0x1b476e = _0x40ee55.call(this) || this;
    _0x1b476e.touchEnabled = true;
    _0x1b476e.touchChildren = false;
    return _0x1b476e;
  }
  __extends(_0x1b476e, _0x40ee55);
  _0x1b476e.prototype.dataChanged = function () {
    if (this.data) {
      var _0x15d763 = ConfgMgr.ItemConfig[this.data.itemid];
      this.equipIcon.source = _0x15d763.icon + "_png";
      this.equipIcon.width = this.equipIcon.height = 40;
      this.selectImg.visible = this.data.ling;
      this.slotLv.text = this.data.lv;
      this.slotme.text = _0x15d763.name;
      this.slotme.visible = 1;
    }
  };
  return _0x1b476e;
}(BaseItemRender);
__reflect(DestroyEquip2Item.prototype, "DestroyEquip2Item");
var class_open_s1c = function (_0x3c3a27) {
  function _0x34776f() {
    {
      var _0x34776f = _0x3c3a27.call(this) || this;
      _0x34776f._cost = 0;
      _0x34776f.isTopLevel = true;
      _0x34776f.skinName = "DemonReformEquip2Skina";
      _0x34776f.effmc = "resource/newUI/newgongneng3/eff1/";
      _0x34776f.itemicon = [3100125, 3100126, 3100127, 3100128, 3100129, 3100130, 3100131, 3100132, 3100133, 3100134, 3100135, 3100136];
      _0x34776f._indexid = 0;
      return _0x34776f;
    }
  }
  __extends(_0x34776f, _0x3c3a27);
  _0x34776f.prototype.open = function () {
    {
      for (var _0x34776f = 1; _0x34776f <= 12; _0x34776f++) this.addTouchEvent(this["item" + _0x34776f], this.ontable);
      this.kuangMc || (this.kuangMc = new MovieClip());
      this.observe(Dress.ins().postDressInfo, this.Edata);
      this.observe(UserBag.ins().postItemAdd, this.Edata);
      this.observe(UserBag.ins().postItemDel, this.Edata);
      this.observe(UserBag.ins().postItemCountChange, this.Edata);
      this.addChangeEvent(this.roleSelect, this.onChange);
      this.addTouchEvent(this.updateBtn, this.ontable);
      this.updateBtn.label = "染  色";
      this.curRole = 1;
      this.roleSelect.setCurRole(0);
    }
  };
  _0x34776f.prototype.onChange = function (_0x3c3a27) {
    this.curRole = this.roleSelect.getCurRole();
    this.Edata();
  };
  _0x34776f.prototype.kuangsmcc = function (_0x3c3a27) {
    this.monsterGroup.horizontalCenter = -440;
    this.monsterGroup.verticalCenter = -300;
    this.monsterGroup.addChild(this.kuangMc);
    this.kuangMc.playFile(this.effmc + "jijia_s" + _0x3c3a27, -1);
  };
  _0x34776f.prototype.Listdate = function (_0x254783) {
    this.curRole = this.roleSelect.getCurRole();
    var _0x3c3a27 = Dress.ins();
    this.listInfo = [];
    for (var _0x34776f in ConfgMgr.lastjijiazhiticonfig) if (SubRoles.ins().getSubRoleByIndex(this.curRole).job == ConfgMgr.lastjijiazhiticonfig[_0x34776f].roletype) {
      var _0x1acbde = new DressItemInfo();
      var _0x39d74a = ConfgMgr.lastjijiazhiticonfig[_0x34776f],
        _0x1b5258 = _0x39d74a.id;
      _0x1acbde.lv = 0;
      _0x1acbde.id = _0x1b5258;
      _0x1acbde.uid = _0x39d74a.uid;
      _0x1acbde.job = _0x39d74a.roletype;
      _0x3c3a27.timeInfo[_0x1b5258] && (_0x1acbde.timer = _0x3c3a27.timeInfo[_0x1b5258].invalidtime, _0x1acbde.lv = _0x3c3a27.timeInfo[_0x1b5258].lv);
      this.listInfo.push(_0x1acbde);
    }
    return this.listInfo;
  };
  _0x34776f.prototype.Edata = function (_0x3c3a27) {
    var _0x3cd043 = this.Listdate();
    for (x = 0; x < 12; x++) {
      var _0x3c3a27 = {};
      _0x3c3a27.itemid = this.itemicon[x];
      _0x3c3a27.ling = x == this._indexid ? 1 : 0;
      _0x3c3a27.lv = _0x3cd043[x].lv;
      this["item" + (parseInt(x) + 1)].data = _0x3c3a27;
    }
    this._lv = _0x3cd043[this._indexid].lv;
    var _0x347c6b = parseInt(this._lv) + 1;
    this._dressid = _0x3cd043[this._indexid].id;
    var _0x35c96a = ConfgMgr.lastjijiazhitiupconfig[this._indexid];
    if (_0x35c96a[_0x347c6b]) {
      {
        this.colst.visible = 1;
        var _0x3b4570 = _0x35c96a[_0x347c6b];
        this._itemdata = ConfgMgr.ItemConfig[_0x3b4570.itemid];
        this._count1 = _0x3b4570.count;
        this._count2 = UserBag.ins().getBagGoodsCountById(0, _0x3b4570.itemid);
        this.rold.text = this._itemdata.name + "（" + this._count2 + "/" + this._count1 + "）";
      }
    } else {
      {
        this.colst.visible = 0;
      }
    }
    this.zhandouli(_0x3cd043);
  };
  _0x34776f.prototype.zhandouli = function (_0x3c3a27) {
    var _0x4e0e38 = 0,
      _0x2d37f7 = ConfgMgr.fodoushituupconfig;
    for (x = 0; x < _0x3c3a27.length; x++) {
      if (_0x3c3a27[x].lv > 0) {
        if (_0x2d37f7[_0x3c3a27[x].uid][_0x3c3a27[x].lv]) {
          _0x4e0e38 = parseInt(_0x4e0e38) + parseInt(UserBag.getAttrPower(AttributeData.transformAttr(_0x2d37f7[_0x3c3a27[x].uid][_0x3c3a27[x].lv].attr)));
        }
      }
    }
    this.powerPanel.setPower(_0x4e0e38);
    this.removeMc(this.kuangMc);
    var _0x2720c8 = this.jisuandonghua(_0x3c3a27);
    this.kuangsmcc(_0x2720c8);
  };
  _0x34776f.prototype.jisuandonghua = function (_0x3c3a27) {
    var _0x34f27d = 1;
    for (x = 0; x < _0x3c3a27.length; x++) {
      {
        var _0xc48aa6 = _0x3c3a27[x].lv;
        if (_0xc48aa6 >= 10) {
          {
            _0x34f27d = parseInt(_0x34f27d) + 1;
          }
        }
      }
    }
    return _0x34f27d >= 12 ? 2 : 1;
  };
  _0x34776f.prototype.close = function () {};
  _0x34776f.prototype.removeMc = function (_0x3c3a27) {
    _0x3c3a27 && (_0x3c3a27.dispose(), DisplayUtils.removeFromParent(_0x3c3a27));
  };
  _0x34776f.prototype.Edatas = function (_0x3c3a27) {
    if (_0x3c3a27 == this._indexid) {
      ViewManager.ins().open(RingDetailWinext, this._lv, this._indexid);
    } else {
      {
        this._indexid = _0x3c3a27;
        this.Edata();
      }
    }
  };
  _0x34776f.prototype.ontable = function (_0x3c3a27) {
    switch (_0x3c3a27.currentTarget) {
      case this.item1:
        this.Edatas(0);
        break;
      case this.item2:
        this.Edatas(1);
        break;
      case this.item3:
        this.Edatas(2);
        break;
      case this.item4:
        this.Edatas(3);
        break;
      case this.item5:
        this.Edatas(4);
        break;
      case this.item6:
        this.Edatas(5);
        break;
      case this.item7:
        this.Edatas(6);
        break;
      case this.item8:
        this.Edatas(7);
        break;
      case this.item9:
        this.Edatas(8);
        break;
      case this.item10:
        this.Edatas(9);
        break;
      case this.item11:
        this.Edatas(10);
        break;
      case this.item12:
        this.Edatas(11);
        break;
      case this.updateBtn:
        if (this._count2 < this._count1) return void UserTips.ins().showTips("|C:0xf3311e&T:所需道具不足|");
        if (this._lv < 1) {
          {
            Dress.ins().JiezhikongjianUserReq(this._dressid, 31);
          }
        } else {
          Dress.ins().JiezhikongjianLevelUp(this._dressid);
        }
    }
  };
  return _0x34776f;
}(BaseView);
__reflect(class_open_s1c.prototype, "class_open_s1c");
var RingDetailWinext = function (_0x141f53) {
  function _0x566f9f() {
    var _0x2f8bc1 = _0x141f53.call(this) || this;
    _0x2f8bc1.skinName = "RelicsAttrskinext";
    return _0x2f8bc1;
  }
  __extends(_0x566f9f, _0x141f53);
  _0x566f9f.prototype.open = function (_0x47629d, _0x12df1c) {
    {
      this.addTouchEvent(this.rect, this.tap);
      this._lv = _0x47629d < 1 ? 1 : _0x47629d;
      this._indexid = _0x12df1c;
      this.viewsex();
    }
  };
  _0x566f9f.prototype.viewsex = function () {
    var _0x56290e = ConfgMgr.lastjijiazhitiupconfig[this._indexid];
    if (_0x56290e[this._lv]) {
      {
        var _0x566f9f = _0x56290e[this._lv].attr,
          _0x141f53 = "";
        for (x = 0; x < _0x566f9f.length; x++) {
          var _0x56290e = _0x566f9f[x].type,
            _0x174d89 = _0x566f9f[x].value;
          2 == _0x56290e && (_0x141f53 = _0x141f53 + "" + _0x174d89 + "\n");
          4 == _0x56290e && (_0x141f53 = _0x141f53 + "" + _0x174d89 + "\n");
          5 == _0x56290e && (_0x141f53 = _0x141f53 + "" + _0x174d89 + "\n");
          6 == _0x56290e && (_0x141f53 = _0x141f53 + "" + _0x174d89);
        }
        this.attrValue.text = _0x141f53;
      }
    }
  };
  _0x566f9f.prototype.close = function () {};
  _0x566f9f.prototype.tap = function (_0x5680a0) {
    _0x5680a0.currentTarget == this.rect && ViewManager.ins().close(_0x566f9f);
  };
  return _0x566f9f;
}(BaseEuiView);
__reflect(RingDetailWinext.prototype, "RingDetailWinext");
ViewManager.ins().reg(RingDetailWinext, LayerManager.UI_Popup);
var DestroyEquip3Item = function (_0x3d6cdc) {
  function _0x21ab72() {
    {
      var _0x21ab72 = _0x3d6cdc.call(this) || this;
      _0x21ab72.touchEnabled = true;
      _0x21ab72.touchChildren = false;
      _0x21ab72.kuangMc = new MovieClip();
      return _0x21ab72;
    }
  }
  __extends(_0x21ab72, _0x3d6cdc);
  _0x21ab72.prototype.dataChanged = function () {
    if (this.data) {
      {
        this.equipIcon.source = "";
        this.selectImg.visible = this.data.ling;
        this.slotLv.text = this.data.lv;
        this.removeMc(this.kuangMc);
        this.kuangsmcc();
      }
    }
  };
  _0x21ab72.prototype.removeMc = function (_0x3d6cdc) {
    _0x3d6cdc && (_0x3d6cdc.dispose(), DisplayUtils.removeFromParent(_0x3d6cdc));
  };
  _0x21ab72.prototype.kuangsmcc = function (_0x3d6cdc) {
    this.macv.horizontalCenter = 0;
    this.macv.verticalCenter = 0;
    this.macv.addChild(this.kuangMc);
    this.kuangMc.playFile(this.data.eff, -1);
    this.kuangMc.filters = this.data.lk > 0 ? "" : [FilterUtil.grayFilter];
  };
  return _0x21ab72;
}(BaseItemRender);
__reflect(DestroyEquip3Item.prototype, "DestroyEquip3Item");
var class_open_s2t = function (_0x550dfc) {
  function _0x250380() {
    {
      var _0x250380 = _0x550dfc.call(this) || this;
      _0x250380._cost = 0;
      _0x250380.isTopLevel = true;
      _0x250380.skinName = "DemonReformEquip3Skinf";
      _0x250380.skmc = "resource/newUI/newgongneng3/eff2/";
      _0x250380.equipid = [3, 5, 1, 6, 4, 7, 9, 10, 11, 12, 2, 0];
      _0x250380._indexid = 0;
      return _0x250380;
    }
  }
  __extends(_0x250380, _0x550dfc);
  _0x250380.prototype.open = function () {
    for (var _0x250380 = 1; _0x250380 <= 12; _0x250380++) this.addTouchEvent(this["item" + _0x250380], this.ontable);
    this.kuangMc || (this.kuangMc = new MovieClip());
    this.observe(Dress.ins().postDressInfo, this.Edata);
    this.addChangeEvent(this.roleSelect, this.onChange);
    this.curRole = 1;
    this.roleSelect.setCurRole(0);
    this.kuangsmcc();
  };
  _0x250380.prototype.onChange = function (_0x550dfc) {
    this.curRole = this.roleSelect.getCurRole();
    this.Edata();
  };
  _0x250380.prototype.Listdate = function (_0x350a8e) {
    {
      this.curRole = this.roleSelect.getCurRole();
      var _0x550dfc = Dress.ins();
      this.listInfo = [];
      for (var _0x250380 in ConfgMgr.lastjijiamohuaconfig) if (SubRoles.ins().getSubRoleByIndex(this.curRole).job == ConfgMgr.lastjijiamohuaconfig[_0x250380].roletype) {
        {
          var _0x489822 = new DressItemInfo();
          var _0x51b214 = ConfgMgr.lastjijiamohuaconfig[_0x250380],
            _0x3ee033 = _0x51b214.id;
          _0x489822.lv = 0;
          _0x489822.id = _0x3ee033;
          _0x489822.uid = _0x51b214.uid;
          _0x489822.job = _0x51b214.roletype;
          _0x550dfc.timeInfo[_0x3ee033] && (_0x489822.timer = _0x550dfc.timeInfo[_0x3ee033].invalidtime, _0x489822.lv = _0x550dfc.timeInfo[_0x3ee033].lv);
          this.listInfo.push(_0x489822);
        }
      }
      return this.listInfo;
    }
  };
  _0x250380.prototype.kuangsmcc1 = function (_0x550dfc) {
    var _0x14ed56 = this.Listdate();
    var _0x24639b = 1;
    for (x = 0; x < _0x14ed56.length; x++) {
      if (_0x14ed56[x].lv > 0) {
        _0x24639b = parseInt(_0x24639b) + 1;
      }
    }
    return _0x24639b >= 12 ? 1 : 0;
  };
  _0x250380.prototype.kuangsmcc = function (_0x550dfc) {
    this.monsterGroup.verticalCenter = 190;
    this.monsterGroup.addChild(this.kuangMc);
    this.kuangMc.playFile(this.skmc + "DemonGodSoul_SwordEff_1", -1);
    var _0x15ad90 = this.kuangsmcc1();
    this.kuangMc.filters = _0x15ad90 > 0 ? "" : [FilterUtil.grayFilter];
  };
  _0x250380.prototype.Edata = function () {
    var _0x4decec = this.Listdate();
    for (x = 1; x < 13; x++) {
      var _0x98e3fd = parseInt(x) - 1;
      var _0x4f6079 = {};
      _0x4f6079.id = x;
      _0x4f6079.lv = _0x4decec[_0x98e3fd].lv;
      _0x4f6079.lk = _0x4decec[_0x98e3fd].lv > 0 ? 1 : 0;
      _0x4f6079.ling = _0x98e3fd == this._indexid ? 1 : 0;
      _0x4f6079.eff = this.skmc + "DemonGodSoul_posEff_" + this.equipid[_0x98e3fd];
      this["item" + x].data = _0x4f6079;
    }
    this.zhandouli(_0x4decec);
  };
  _0x250380.prototype.zhandouli = function (_0x550dfc) {
    {
      var _0x499cbe = 0,
        _0x511a1b = ConfgMgr.lastjijiamohuaupconfig;
      for (x = 0; x < _0x550dfc.length; x++) {
        if (_0x550dfc[x].lv > 0) {
          {
            if (_0x511a1b[_0x550dfc[x].uid][_0x550dfc[x].lv]) {
              _0x499cbe = parseInt(_0x499cbe) + parseInt(UserBag.getAttrPower(AttributeData.transformAttr(_0x511a1b[_0x550dfc[x].uid][_0x550dfc[x].lv].attr)));
            }
          }
        }
      }
      this.powerPanel.setPower(_0x499cbe);
    }
  };
  _0x250380.prototype.Edatas = function (_0x550dfc) {
    {
      var _0x2e8b1b = this.Listdate();
      this._indexid = _0x550dfc;
      ViewManager.ins().open(moshengupPanel_c, this._indexid, _0x2e8b1b[this._indexid], this.skmc + "DemonGodSoul_posEff_" + this.equipid[this._indexid], this.roleSelect.getCurRole());
    }
  };
  _0x250380.prototype.ontable = function (_0x550dfc) {
    {
      switch (_0x550dfc.currentTarget) {
        case this.item1:
          this.Edatas(0);
          break;
        case this.item2:
          this.Edatas(1);
          break;
        case this.item3:
          this.Edatas(2);
          break;
        case this.item4:
          this.Edatas(3);
          break;
        case this.item5:
          this.Edatas(4);
          break;
        case this.item6:
          this.Edatas(5);
          break;
        case this.item7:
          this.Edatas(6);
          break;
        case this.item8:
          this.Edatas(7);
          break;
        case this.item9:
          this.Edatas(8);
          break;
        case this.item10:
          this.Edatas(9);
          break;
        case this.item11:
          this.Edatas(10);
          break;
        case this.item12:
          this.Edatas(11);
      }
    }
  };
  _0x250380.prototype.close = function () {};
  return _0x250380;
}(BaseView);
__reflect(class_open_s2t.prototype, "class_open_s2t");
var moshengupPanel_c = function (_0x5df31f) {
  function _0x3bf82f() {
    {
      var _0x917996 = _0x5df31f.call(this) || this;
      _0x917996.skinName = "moshenjihuoskin_c";
      return _0x917996;
    }
  }
  __extends(_0x3bf82f, _0x5df31f);
  _0x3bf82f.prototype.initUI = function () {};
  _0x3bf82f.prototype.open = function (_0x39a42c, _0x3bf82f, _0x5df31f, _0x311f8c) {
    this.kuangMc || (this.kuangMc = new MovieClip());
    this.observe(Dress.ins().postDressInfo, this.effInit);
    this.observe(UserBag.ins().postItemAdd, this.effInit);
    this.observe(UserBag.ins().postItemDel, this.effInit);
    this.observe(UserBag.ins().postItemCountChange, this.effInit);
    this.relicsKuange = new RelicsKuangeEff(this.anigroup, 1);
    this.relicsKuange.kuangeEffOpen(_0x39a42c) || (this.relicsKuange = null);
    this.addTouchEvent(this.bgclose, this.tap);
    this.addTouchEvent(this.lvupBtn, this.tap);
    this.itemsc.visible = 0;
    this.pointAttr.visible = 0;
    this._indexid = _0x39a42c;
    this.lvupBtn.label = "魔  化";
    this._dressdatar = _0x3bf82f;
    this._effurl = _0x5df31f;
    this.curRole = _0x311f8c;
    this.kuangsmcc();
    this.effInit();
  };
  _0x3bf82f.prototype.close = function () {};
  _0x3bf82f.prototype.tap = function (_0x2cee7c) {
    {
      switch (_0x2cee7c.currentTarget) {
        case this.bgclose:
          ViewManager.ins().close(_0x3bf82f);
          break;
        case this.lvupBtn:
          if (this._count2 < this._count1) return void UserTips.ins().showTips("|C:0xf3311e&T:所需道具不足|");
          if (this._lv < 1) {
            Dress.ins().JiezhikongjianUserReq(this._dressid, 32);
          } else {
            Dress.ins().JiezhikongjianLevelUp(this._dressid);
          }
      }
    }
  };
  _0x3bf82f.prototype.Listdate = function (_0x5d0655) {
    var _0x10adb2 = Dress.ins();
    this.listInfo = [];
    for (var _0x3bf82f in ConfgMgr.lastjijiamohuaconfig) if (SubRoles.ins().getSubRoleByIndex(this.curRole).job == ConfgMgr.lastjijiamohuaconfig[_0x3bf82f].roletype) {
      {
        var _0x4031b8 = new DressItemInfo();
        var _0xc8f84a = ConfgMgr.lastjijiamohuaconfig[_0x3bf82f],
          _0x15391a = _0xc8f84a.id;
        _0x4031b8.lv = 0;
        _0x4031b8.id = _0x15391a;
        _0x4031b8.uid = _0xc8f84a.uid;
        _0x4031b8.job = _0xc8f84a.roletype;
        _0x10adb2.timeInfo[_0x15391a] && (_0x4031b8.timer = _0x10adb2.timeInfo[_0x15391a].invalidtime, _0x4031b8.lv = _0x10adb2.timeInfo[_0x15391a].lv);
        this.listInfo.push(_0x4031b8);
      }
    }
    return this.listInfo;
  };
  _0x3bf82f.prototype.effInit = function (_0xab8cfc) {
    {
      var _0x1200b1 = this.Listdate();
      var _0x494151 = ["项链", "腰带", "头盔", "戒指", "护腕", "靴子", "斗笠", "面甲", "披风", "盾牌", "铠甲", "战武"];
      var _0x5df31f = ConfgMgr.lastjijiamohuaupconfig[this._indexid];
      var _0xdd311a = parseInt(_0x1200b1[this._indexid].lv) + 1;
      if (_0x5df31f[_0xdd311a]) {
        this.pointAttr.visible = 1;
        this.curAttr.text = ConfgMgr.ItemConfig[_0x5df31f[_0xdd311a].itemid].name + "（" + UserBag.ins().getBagGoodsCountById(0, _0x5df31f[_0xdd311a].itemid) + "/" + _0x5df31f[_0xdd311a].count + "）";
        this._count1 = _0x5df31f[_0xdd311a].count;
        this._count2 = UserBag.ins().getBagGoodsCountById(0, _0x5df31f[_0xdd311a].itemid);
        this._dressid = _0x1200b1[this._indexid].id;
      }
      var _0x14e055 = _0x1200b1[this._indexid].lv;
      this.tipsLabel.text = "魔化 ★ " + _0x494151[this._indexid] + "  Lv." + _0x14e055;
      this._lv = _0x14e055;
      _0x14e055 = _0x14e055 < 1 ? 1 : _0x14e055;
      this.attrtxt1.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x5df31f[_0x14e055].attr), 0, 1, "：");
    }
  };
  _0x3bf82f.prototype.effUpdate = function () {
    egret.Tween.removeTweens(this.tablesv);
    egret.Tween.get(this.tablesv, {
      "loop": true
    }).to({
      "top": 160
    }, 1000).to({
      "top": 180
    }, 1000);
  };
  _0x3bf82f.prototype.kuangsmcc1 = function (_0x383b7e) {
    var _0x4d5a00 = this.Listdate();
    var _0x5a2e3c = 1;
    for (x = 0; x < _0x4d5a00.length; x++) {
      if (_0x4d5a00[x].lv > 0) {
        {
          _0x5a2e3c = parseInt(_0x5a2e3c) + 1;
        }
      }
    }
    return _0x5a2e3c >= 12 ? 1 : 0;
  };
  _0x3bf82f.prototype.kuangsmcc = function (_0x521fff) {
    this.kuangMc.scaleX = this.kuangMc.scaleY = 1.6;
    this.tablesv.addChild(this.kuangMc);
    this.kuangMc.playFile(this._effurl, -1);
    this.effUpdate();
  };
  return _0x3bf82f;
}(BaseEuiView);
__reflect(moshengupPanel_c.prototype, "moshengupPanel_c");
ViewManager.ins().reg(moshengupPanel_c, LayerManager.UI_Popup);
var DestroyEquip343Item = function (_0x2b36d6) {
  function _0x40556e() {
    var _0x40556e = _0x2b36d6.call(this) || this;
    _0x40556e.touchEnabled = true;
    _0x40556e.touchChildren = false;
    return _0x40556e;
  }
  __extends(_0x40556e, _0x2b36d6);
  _0x40556e.prototype.dataChanged = function () {
    if (this.data) {
      this.cls.source = this.data.ling > 0 ? "mojian_kiang_s1_png" : "mojian_kiang_s0_png";
      this.cls.width = 90;
      this.cls.height = 76;
      this.cls.verticalCenter = 5;
      this.Icon.source = this.data.icon;
      this.lvico.visible = 0;
      this.solv = new eui.BitmapLabel();
      this.solv.left = 0;
      this.solv.top = 0;
      this.solv.size = 18;
      this.solv.font = "num_10_fnt";
      this.solv.text = this.data.lv;
      this.dkeff.addChild(this.solv);
    }
  };
  return _0x40556e;
}(BaseItemRender);
__reflect(DestroyEquip343Item.prototype, "DestroyEquip343Item");
var class_open_s3v = function (_0x1ff2d1) {
  function _0x21333c() {
    {
      var _0x21333c = _0x1ff2d1.call(this) || this;
      _0x21333c._cost = 0;
      _0x21333c.isTopLevel = true;
      _0x21333c.skinName = "manghuangskinsp";
      _0x21333c.effmc = "resource/newUI/newgongneng3/eff3/";
      _0x21333c._indexid = 0;
      return _0x21333c;
    }
  }
  __extends(_0x21333c, _0x1ff2d1);
  _0x21333c.prototype.open = function () {
    {
      for (var _0x21333c = 0; _0x21333c <= 9; _0x21333c++) this.addTouchEvent(this["item" + _0x21333c], this.ontable);
      this.kuangMc || (this.kuangMc = new MovieClip());
      this.addTouchEvent(this.Upbntss, this.ontable);
      this.observe(Dress.ins().postDressInfo, this.Edata);
      this.observe(UserBag.ins().postItemAdd, this.Edata);
      this.observe(UserBag.ins().postItemDel, this.Edata);
      this.observe(UserBag.ins().postItemCountChange, this.Edata);
      this.addChangeEvent(this.roleSelect, this.onChange);
      this.curRole = 1;
      this.roleSelect.setCurRole(0);
      this.heopen.visible = 0;
    }
  };
  _0x21333c.prototype.onChange = function (_0x1ff2d1) {
    this.curRole = this.roleSelect.getCurRole();
    this.Edata();
  };
  _0x21333c.prototype.Listdate = function (_0x3924fa) {
    this.curRole = this.roleSelect.getCurRole();
    var _0x1ff2d1 = Dress.ins();
    this.listInfo = [];
    for (var _0x21333c in ConfgMgr.lastjijiajianlingconfig) if (SubRoles.ins().getSubRoleByIndex(this.curRole).job == ConfgMgr.lastjijiajianlingconfig[_0x21333c].roletype) {
      var _0x5e728b = new DressItemInfo();
      var _0x2a2074 = ConfgMgr.lastjijiajianlingconfig[_0x21333c],
        _0x1ab6fb = _0x2a2074.id;
      _0x5e728b.lv = 0;
      _0x5e728b.id = _0x1ab6fb;
      _0x5e728b.uid = _0x2a2074.uid;
      _0x5e728b.job = _0x2a2074.roletype;
      _0x1ff2d1.timeInfo[_0x1ab6fb] && (_0x5e728b.timer = _0x1ff2d1.timeInfo[_0x1ab6fb].invalidtime, _0x5e728b.lv = _0x1ff2d1.timeInfo[_0x1ab6fb].lv);
      this.listInfo.push(_0x5e728b);
    }
    return this.listInfo;
  };
  _0x21333c.prototype.kuangsmcc = function (_0x1ff2d1) {
    {
      this.weaponeff.horizontalCenter = -200;
      this.weaponeff.verticalCenter = -260;
      this.kuangMc.scaleX = this.kuangMc.scaleY = 1;
      this.weaponeff.addChild(this.kuangMc);
      this.kuangMc.playFile(this.effmc + "jian_jian_jian", -1);
      var _0x80e56e = this.tyutyutyu();
      this.kuangMc.filters = _0x80e56e > 0 ? "" : [FilterUtil.grayFilter];
    }
  };
  _0x21333c.prototype.Edata = function () {
    {
      var _0x1b2517 = this.Listdate();
      for (x = 0; x < 10; x++) {
        {
          var _0x173266 = {};
          _0x173266.lv = _0x1b2517[x].lv;
          _0x173266.name = "哈哈哈哈";
          _0x173266.ling = x == this._indexid ? 1 : 0;
          _0x173266.icon = "mojian_icon_s" + x + "_png";
          this["item" + x].data = _0x173266;
        }
      }
      this._lv = _0x1b2517[this._indexid].lv;
      this._updressid = _0x1b2517[this._indexid].id;
      var _0x74160d = ConfgMgr.lastjijiajianlingupconfig[this._indexid];
      var _0xb5d84e = parseInt(this._lv) + 1;
      if (_0x74160d[_0xb5d84e]) {
        this.maxbox1.visible = 1;
        this.maxbox2.visible = 0;
        var _0x457d94 = _0x74160d[_0xb5d84e];
        if (this._lv < 1) {
          {
            var _0x3d910b = ConfgMgr.fodoucaishenshubaseconfig.attr;
          }
        } else {
          var _0x3d910b = _0x74160d[this._lv].attr;
        }
        this.curAttr0.text = this.curAttr2.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x3d910b), 0, 1, "：");
        this.curAttr1.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x457d94.attr), 0, 1, "：");
        this._count1 = _0x457d94.count;
        this._count2 = UserBag.ins().getBagGoodsCountById(0, _0x457d94.itemid);
        this._dataitem = ConfgMgr.ItemConfig[_0x457d94.itemid];
        this.itemname.text = this._dataitem.name + "（" + this._count2 + "/" + this._count1 + "）";
      } else {
        {
          this.maxbox1.visible = 0;
          this.maxbox2.visible = 1;
          this.curAttr1.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x74160d[this._lv].attr), 0, 1, "：");
        }
      }
      this.kuangsmcc(this.tyutyutyu(_0x1b2517));
      this.zhandouli(_0x1b2517);
    }
  };
  _0x21333c.prototype.tyutyutyu = function (_0x1ff2d1) {
    {
      var _0x1ff2d1 = this.Listdate();
      var _0x3152a2 = 0;
      for (x = 0; x < _0x1ff2d1.length; x++) {
        {
          if (_0x1ff2d1[x].lv > 0) {
            {
              _0x3152a2 = parseInt(_0x3152a2) + 1;
            }
          }
        }
      }
      return _0x3152a2 >= 10 ? 1 : 0;
    }
  };
  _0x21333c.prototype.zhandouli = function (_0x1ff2d1) {
    var _0x2d5d8 = 0,
      _0xa95c21 = ConfgMgr.lastjijiajianlingupconfig;
    for (x = 0; x < _0x1ff2d1.length; x++) {
      if (_0x1ff2d1[x].lv > 0) {
        {
          if (_0xa95c21[_0x1ff2d1[x].uid][_0x1ff2d1[x].lv]) {
            _0x2d5d8 = parseInt(_0x2d5d8) + parseInt(UserBag.getAttrPower(AttributeData.transformAttr(_0xa95c21[_0x1ff2d1[x].uid][_0x1ff2d1[x].lv].attr)));
          }
        }
      }
    }
    this.powerPanel.setPower(_0x2d5d8);
  };
  _0x21333c.prototype.ontable = function (_0x1ff2d1) {
    {
      switch (_0x1ff2d1.currentTarget) {
        case this.item0:
          this._indexid = 0;
          this.Edata();
          break;
        case this.item1:
          this._indexid = 1;
          this.Edata();
          break;
        case this.item2:
          this._indexid = 2;
          this.Edata();
          break;
        case this.item3:
          this._indexid = 3;
          this.Edata();
          break;
        case this.item4:
          this._indexid = 4;
          this.Edata();
          break;
        case this.item5:
          this._indexid = 5;
          this.Edata();
          break;
        case this.item6:
          this._indexid = 6;
          this.Edata();
          break;
        case this.item7:
          this._indexid = 7;
          this.Edata();
          break;
        case this.item8:
          this._indexid = 8;
          this.Edata();
          break;
        case this.item9:
          this._indexid = 9;
          this.Edata();
          break;
        case this.Upbntss:
          if (this._count2 < this._count1) return void UserTips.ins().showTips("|C:0xf3311e&T:所需道具不足|");
          if (this._lv < 1) {
            Dress.ins().JiezhikongjianUserReq(this._updressid, 33);
          } else {
            Dress.ins().JiezhikongjianLevelUp(this._updressid);
          }
      }
    }
  };
  _0x21333c.prototype.close = function () {};
  return _0x21333c;
}(BaseView);
__reflect(class_open_s3v.prototype, "class_open_s3v");
var DestroyEquip345Item = function (_0x460e92) {
  function _0x3ee980() {
    {
      var _0x3ee980 = _0x460e92.call(this) || this;
      _0x3ee980.touchEnabled = true;
      _0x3ee980.touchChildren = false;
      _0x3ee980.kuangMc = new MovieClip();
      return _0x3ee980;
    }
  }
  __extends(_0x3ee980, _0x460e92);
  _0x3ee980.prototype.dataChanged = function () {
    {
      if (this.data) {
        {
          this.curAttr2.text = this.data.lv;
          this.curAttr2.visible = 1;
          this.curAttr2.size = this.data.ling > 0 ? 22 : 18;
          this.curAttr2.textColor = this.data.ling > 0 ? "0xFFFFFF" : "0x9f946d";
          this.curAttr2.bottom = this.data.ling > 0 ? 18 : 21;
          this.titleico.visible = 0;
          this.Selecte.visible = this.data.ling;
          egret.Tween.removeTweens(this.klmaceff);
          this.klmaceff.alpha = 1;
          this.removeMc(this.kuangMc);
          this.dataChangeff();
        }
      }
    }
  };
  _0x3ee980.prototype.dataChangeff = function () {
    this.klmaceff.x = 10;
    this.klmaceff.y = 20;
    this.kuangMc.scaleX = this.kuangMc.scaleY = 0.4;
    this.klmaceff.addChild(this.kuangMc);
    this.kuangMc.playFile(this.data.eff, -1);
    this.data.ling > 0 ? this.shanguang() : "";
  };
  _0x3ee980.prototype.shanguang = function (_0x460e92) {
    egret.Tween.removeTweens(this.klmaceff);
    egret.Tween.get(this.klmaceff, {
      "loop": true
    }).to({
      "alpha": 0.3
    }, 300).to({
      "alpha": 1
    }, 300);
  };
  _0x3ee980.prototype.removeMc = function (_0x460e92) {
    {
      _0x460e92 && (_0x460e92.dispose(), DisplayUtils.removeFromParent(_0x460e92));
    }
  };
  return _0x3ee980;
}(BaseItemRender);
__reflect(DestroyEquip345Item.prototype, "DestroyEquip345Item");
var class_open_s4uf = function (_0x2a233c) {
  function _0x5a95da() {
    var _0x5a95da = _0x2a233c.call(this) || this;
    _0x5a95da._cost = 0;
    _0x5a95da.isTopLevel = true;
    _0x5a95da.skinName = "sixiangskinsa";
    _0x5a95da.effmc = "resource/newUI/newgongneng3/eff4/";
    _0x5a95da._indexid = 0;
    return _0x5a95da;
  }
  __extends(_0x5a95da, _0x2a233c);
  _0x5a95da.prototype.open = function () {
    for (var _0x5a95da = 0; _0x5a95da <= 11; _0x5a95da++) this.addTouchEvent(this["item" + _0x5a95da], this.ontable);
    this.kuangMc || (this.kuangMc = new MovieClip());
    this.addTouchEvent(this.Upbntss, this.ontable);
    this.observe(Dress.ins().postDressInfo, this.Edata);
    this.observe(UserBag.ins().postItemAdd, this.Edata);
    this.observe(UserBag.ins().postItemDel, this.Edata);
    this.observe(UserBag.ins().postItemCountChange, this.Edata);
    this.addChangeEvent(this.roleSelect, this.onChange);
    this.curRole = 1;
    this.roleSelect.setCurRole(0);
    this.heopen.visible = 0;
  };
  _0x5a95da.prototype.Listdate = function (_0x2dc3cb) {
    this.curRole = this.roleSelect.getCurRole();
    var _0x2a233c = Dress.ins();
    this.listInfo = [];
    for (var _0x5a95da in ConfgMgr.lastjijiahuanlingconfig) if (SubRoles.ins().getSubRoleByIndex(this.curRole).job == ConfgMgr.lastjijiahuanlingconfig[_0x5a95da].roletype) {
      var _0x5899e0 = new DressItemInfo();
      var _0x216f67 = ConfgMgr.lastjijiahuanlingconfig[_0x5a95da],
        _0x4c8099 = _0x216f67.id;
      _0x5899e0.lv = 0;
      _0x5899e0.id = _0x4c8099;
      _0x5899e0.uid = _0x216f67.uid;
      _0x5899e0.job = _0x216f67.roletype;
      _0x2a233c.timeInfo[_0x4c8099] && (_0x5899e0.timer = _0x2a233c.timeInfo[_0x4c8099].invalidtime, _0x5899e0.lv = _0x2a233c.timeInfo[_0x4c8099].lv);
      this.listInfo.push(_0x5899e0);
    }
    return this.listInfo;
  };
  _0x5a95da.prototype.onChange = function (_0x2a233c) {
    {
      this.curRole = this.roleSelect.getCurRole();
      this.Edata();
    }
  };
  _0x5a95da.prototype.tiaodongzijie = function (_0x2a233c) {
    egret.Tween.removeTweens(this.gta);
    egret.Tween.get(this.gta, {
      "loop": true
    }).to({
      "verticalCenter": -160
    }, 800).to({
      "verticalCenter": -110
    }, 800);
  };
  _0x5a95da.prototype.dataChangeff = function () {
    {
      this.gta.horizontalCenter = -130;
      this.gta.verticalCenter = -110;
      this.gta.y = 20;
      this.kuangMc.scaleX = this.kuangMc.scaleY = 1;
      this.gta.addChild(this.kuangMc);
      this.kuangMc.playFile(this.effmc + "book_ttt_s" + this._indexid, -1);
      egret.Tween.removeTweens(this.gta);
      this.gta.verticalCenter = -110;
      this.tiaodongzijie();
    }
  };
  _0x5a95da.prototype.Edata = function () {
    {
      var _0x28242c = this.Listdate();
      for (var _0x5a95da = 0; _0x5a95da <= 11; _0x5a95da++) {
        {
          var _0x3386ab = {};
          _0x3386ab.lv = "+" + _0x28242c[_0x5a95da].lv;
          _0x3386ab.eff = this.effmc + "book_ttt_s" + _0x5a95da;
          _0x3386ab.ling = _0x5a95da == this._indexid ? 1 : 0;
          this["item" + _0x5a95da].data = _0x3386ab;
        }
      }
      this.dataChangeff();
      this._lv = _0x28242c[this._indexid].lv;
      this._updressid = _0x28242c[this._indexid].id;
      var _0x3c9355 = parseInt(this._lv) + 1;
      var _0x1fc62d = ConfgMgr.lastjijiahuanlingupconfig[this._indexid];
      if (_0x1fc62d[_0x3c9355]) {
        this.maxbox1.visible = 1;
        this.maxbox2.visible = 0;
        var _0x25853e = _0x1fc62d[_0x3c9355].attr;
        if (this._lv < 1) {
          var _0x516135 = ConfgMgr.fodoucaishenshubaseconfig.attr;
        } else {
          var _0x516135 = _0x1fc62d[this._lv].attr;
        }
        this.curAttr0.text = this.curAttr2.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x516135), 0, 1, "：");
        this.curAttr1.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x25853e), 0, 1, "：");
        this._count1 = _0x1fc62d[_0x3c9355].count;
        this._count2 = UserBag.ins().getBagGoodsCountById(0, _0x1fc62d[_0x3c9355].itemid);
        this._dataitem = ConfgMgr.ItemConfig[_0x1fc62d[_0x3c9355].itemid];
        this.itemname.text = this._dataitem.name + "（" + this._count2 + "/" + this._count1 + "）";
      } else {
        {
          this.maxbox1.visible = 0;
          this.maxbox2.visible = 1;
          this.curAttr2.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x1fc62d[this._lv].attr), 0, 1, "：");
        }
      }
      this.zhandouli(_0x28242c);
    }
  };
  _0x5a95da.prototype.zhandouli = function (_0x2a233c) {
    {
      var _0x4e3b9d = 0,
        _0x4a16e6 = ConfgMgr.lastjijiahuanlingupconfig;
      for (x = 0; x < _0x2a233c.length; x++) {
        if (_0x2a233c[x].lv > 0) {
          {
            if (_0x4a16e6[_0x2a233c[x].uid][_0x2a233c[x].lv]) {
              _0x4e3b9d = parseInt(_0x4e3b9d) + parseInt(UserBag.getAttrPower(AttributeData.transformAttr(_0x4a16e6[_0x2a233c[x].uid][_0x2a233c[x].lv].attr)));
            }
          }
        }
      }
      this.powerPanel.setPower(_0x4e3b9d);
    }
  };
  _0x5a95da.prototype.ontable = function (_0x2a233c) {
    switch (_0x2a233c.currentTarget) {
      case this.item0:
        this._indexid = 0;
        this.Edata();
        break;
      case this.item1:
        this._indexid = 1;
        this.Edata();
        break;
      case this.item2:
        this._indexid = 2;
        this.Edata();
        break;
      case this.item3:
        this._indexid = 3;
        this.Edata();
        break;
      case this.item4:
        this._indexid = 4;
        this.Edata();
        break;
      case this.item5:
        this._indexid = 5;
        this.Edata();
        break;
      case this.item6:
        this._indexid = 6;
        this.Edata();
        break;
      case this.item7:
        this._indexid = 7;
        this.Edata();
        break;
      case this.item8:
        this._indexid = 8;
        this.Edata();
        break;
      case this.item9:
        this._indexid = 9;
        this.Edata();
        break;
      case this.item10:
        this._indexid = 10;
        this.Edata();
        break;
      case this.item11:
        this._indexid = 11;
        this.Edata();
        break;
      case this.Upbntss:
        if (this._count2 < this._count1) return void UserTips.ins().showTips("|C:0xf3311e&T:所需道具不足|");
        if (this._lv < 1) {
          Dress.ins().JiezhikongjianUserReq(this._updressid, 34);
        } else {
          {
            Dress.ins().JiezhikongjianLevelUp(this._updressid);
          }
        }
    }
  };
  _0x5a95da.prototype.close = function () {};
  return _0x5a95da;
}(BaseView);
__reflect(class_open_s4uf.prototype, "class_open_s4uf");