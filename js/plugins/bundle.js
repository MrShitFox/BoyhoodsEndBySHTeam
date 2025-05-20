function Game() {
    throw new Error("This is a static class");
}
(Game.deployChapterIDs = ["Stage2", "Stage2_2", "Stage2_3", "Stage2_4", "Stage2_5", "Stage2_6", "Stage2_7", "Stage2_8", "Stage2_9", "Stage2_10"]),
    (Game.hideChapterIDs = ["Stage3_1"]),
    (Game.affinityList = [
        "campa",
        "karel",
        "zeni",
        "wi",
        "kate",
        "yumi",
        "card_wi_1",
        "card_kate_1",
        "card_yumi_1",
        "card_rabi_1",
        "card_doc_1",
        "card_sniffer_1",
        "card_wi_2",
        "card_kate_2",
        "card_yumi_2",
        "card_rabi_2",
        "card_doc_2",
        "card_sniffer_2",
    ]),
    (PD_ImportGoogleSpreadSeet.spreadSeetWebURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0BTKeAYTuvwugHDoawqfg5nwkUGy3kKeDZ8kbATGn78prq4Czs6q8l9QyZOPn8HzwpzisoODG08tB/pubhtml"),
    (PD_ImportGoogleSpreadSeet.worksheet_gid = 0),
    (PD_ImportGoogleSpreadSeet.savePath = "_database"),
    (PD_UIManager.loadImageFolderName = "img/_kuina"),
    (PD_SaveDataManager.saveFileNum = 100),
    PD_SaveDataManager.addSaveParam("memoryID", null);
for (let e = 0; e < Game.affinityList.length; e++) PD_SaveDataManager.addSaveParam("offset_" + Game.affinityList[e] + "Affinity", {}), PD_SaveDataManager.addSaveParam("offset_" + Game.affinityList[e] + "Affinity_debug", {});
function Update() {
    throw new Error("This is a static class");
}
function Menu() {
    throw new Error("This is a static class");
}
function Option() {
    throw new Error("This is a static class");
}
function Title() {
    throw new Error("This is a static class");
}
function Memory() {
    throw new Error("This is a static class");
}
PD_SaveDataManager.addSaveParam("alwaysDash", !1),
    PD_SaveDataManager.addSaveParam("disableClosePC", !1),
    PD_SaveDataManager.addSaveParam("pc_ownerName", "giovanni"),
    PD_SaveDataManager.addSaveParam("pc_beforeMap", null),
    PD_SaveDataManager.addSaveParam("pc_beforeParty", null),
    PD_SaveDataManager.addSaveParam("pc_beforeActors", null),
    PD_SaveDataManager.addSaveParam("pc_beforePlayer", null),
    PD_SaveDataManager.addSaveParam("pc_beforeScreen", null),
    PD_SaveDataManager.addSaveParam("pc_message_orderTalkIDs", []),
    PD_SaveDataManager.addSaveParam("pc_message_readedVariableValues", {}),
    PD_SaveDataManager.addSaveParam("pc_message_hideUpdateIconTalkIDs", []),
    PD_SaveDataManager.addSaveParam("pc_sns_preChannelID", "ch_0"),
    PD_SaveDataManager.addSaveParam("pc_sns_readedVariableValues", {}),
    PD_SaveDataManager.addSaveParam("pc_sns_hideUpdateIconChannelIDs", []),
    PD_SaveDataManager.addSaveParam("r_words", []),
    PD_SaveDataManager.addSaveParam("r_words_hide", []),
    PD_SaveDataManager.addSaveParam("docFiles", [28, 4, 3, 5, 6, 7, 8, 9, 10, 11]),
    PD_SaveDataManager.addSaveParam("datas", []),
    PD_SaveDataManager.addSaveParam("toilets", []),
    PD_SaveDataManager.addSaveParam("desktopNotices", {}),
    PD_SaveDataManager.addSaveParam("requestPopup", {}),
    PD_SaveDataManager.addSaveParam("mapEventFilters", []),
    PD_SaveDataManager.addOptionParam("isBoot", !1),
    PD_SaveDataManager.addOptionParam("fullScreen", !1),
    PD_SaveDataManager.addOptionParam("messageSE", !0),
    PD_SaveDataManager.addOptionParam("firstLookChapter", !1),
    PD_SaveDataManager.addOptionParam("mapHackCount", 0),
    PD_SaveDataManager.addOptionParam("rCodeCount", []),
    PD_SaveDataManager.addOptionParam("toiletCount", []),
    PD_SaveDataManager.loadOptionFile(),
    PD_Translation.loadDatabase(["System", "Item", "r_words", "trans_1", "trans_2", "trans_3", "trans_4", "trans_5", "trans_6", "trans_7", "trans_8"]),
    (Game.initLanguage = function () {
        if (!$option.isBoot)
            switch ((($option.isBoot = !0), $gameSystem.getCurrentGameLanguage())) {
                case "japanese":
                    Game.setLanguage("日本語");
                    break;
                case "schinese":
                    Game.setLanguage("中国語（簡体字）");
                    break;
                case "koreana":
                    Game.setLanguage("韓国語");
                    break;
                default:
                    Game.setLanguage("英語");
            }
    }),
    (Game.setLanguage = function (e) {
        return new Promise((a, n) => {
            $option.language !== e
                ? (($option.language = e),
                  PD_SaveDataManager.saveOptionFile()
                      .then(() => {
                          a();
                      })
                      .catch((e) => {
                          n(e);
                      }))
                : a();
        });
    }),
    (Game.setFullScreen = function () {
        return new Promise((e, a) => {
            Graphics._switchFullScreen(),
                ($option.fullScreen = !!Graphics._isFullScreen()),
                PD_SaveDataManager.saveOptionFile()
                    .then(() => {
                        e();
                    })
                    .catch((e) => {
                        a(e);
                    });
        });
    }),
    (Game.countMapHack = function () {
        $option.mapHackCount++,
            PD_SaveDataManager.saveOptionFile(),
            50 === $option.mapHackCount
                ? $gameSystem.unlockAchievement("Ach008")
                : 100 === $option.mapHackCount
                ? $gameSystem.unlockAchievement("Ach009")
                : 200 === $option.mapHackCount
                ? $gameSystem.unlockAchievement("Ach010")
                : 500 === $option.mapHackCount && $gameSystem.unlockAchievement("Ach011");
    }),
    (Game.transSelectParams = function (e) {
        const a = JsonEx_Old.makeDeepCopy(e);
        for (let e = 0, n = a[0], t = n.length; e < t; e++) {
            const a = n[e],
                t = PD_Translation.translation(a);
            t && (n[e] = String(t[0]));
        }
        return a;
    }),
    (Game.requestAutosave = function (e, a, n = !0) {
        const t = new Promise((e) => {
            if (Memory.temp_load_disableSave) return (Memory.temp_load_disableSave = null), void e();
            $gameSystem.onBeforeSave(),
                DataManager.saveGame(0)
                    .then(() => {
                        const t = () => {
                            let e = PD_UIManager.list.autosave_popup_Base;
                            e && e.delete(),
                                (e = PD_UIManager.base.upper.addUI("autosave_popup_Base")),
                                e.loadImage("popup/autoSave_popup"),
                                (e.anchor = [0, 1]),
                                (e.opacity = 0),
                                e.move(0, 624),
                                e.animeOpacity(255, 30, !0),
                                e.animeWait(90),
                                e.animeOpacity(0, 26, !0),
                                e.animeDelete(),
                                e.playAnimation();
                            const a = e.addUI("autosave_popup_Text", 200, 20);
                            (a.anchor = [0, 1]), a.move(30, -4), a.drawTextEX("{セーブしました}", 0, 0, a.width, a.height, "left", 16, "rgb(192,230,212)", 0);
                        };
                        if (a && !Game.hideChapterIDs.includes(a)) {
                            let e = PD_UIManager.list.memorySave_popup_Base;
                            e && e.delete(),
                                (e = PD_UIManager.base.upper.addUI("memorySave_popup_Base")),
                                e.loadImage("popup/chapterRecord_popup"),
                                (e.anchor = [0, 1]),
                                e.move(0, 684),
                                e.animeMoveY(624, 30, !0, "easeOutCubic"),
                                e.animeWait(90),
                                e.animeOpacity(0, 26, !0),
                                e.animeFunction(() => {
                                    e.delete(), t();
                                }),
                                e.playAnimation();
                            const n = e.addUI("memorySave_popup_Text", 225, 20);
                            (n.anchor = [0, 1]), n.move(20, -8);
                            const i = Memory.database[a];
                            let o = i ? "[" + i["チャプター番号"] + "] DAY" + i["DAY／"] + "／" + PD_Translation.transData(i["saveText翻訳ID"]) : a;
                            const r = n.drawTextEX_EX(o, 0, 0, 816, n.height, "left", 16, null, 0)[0].textWidth;
                            n.clear();
                            const l = n.drawTextEX_EX(o, 0, 0, n.width - 16, n.height, "left", 16, "rgb(77,97,90)", 0)[0].textWidth;
                            r > n.width && n.drawTextEX("…", l, 0, n.width - l, n.height, "left", 16, "rgb(77,97,90)", 0);
                        } else n && t();
                        e();
                    })
                    .catch((a) => {
                        e();
                    });
        });
        if (e) return t;
        Game.getInterpreter() && Game.getInterpreter().waitUntilPromiseSettled(t);
    }),
    (Game.loadAutosave = function () {
        (Memory.temp_loadSaveFileId = 0), SceneManager.push(Scene_Load);
    }),
    (Game.memorySnap = function () {}),
    (Game.saveMemory = function (e, a, n) {
        if (!e) throw new Error("メモリーIDが指定されていません。");
        {
            if ($save.memoryID && Memory.database[$save.memoryID])
                for (let n = 1, t = !1; n <= 6; n++) {
                    for (let i = 0, o = Memory.stageDatas[n], r = o.length; i < r; i++) {
                        if (!a) {
                            if (e === $save.memoryID) return;
                            if (e !== $save.memoryID && e === o[i]["メモリーID"]) throw new Error("過去のチャプターに複数回セーブする事はできません");
                        }
                        if ($save.memoryID === o[i]["メモリーID"]) {
                            t = !0;
                            break;
                        }
                    }
                    if (t) break;
                }
            let t = 0 === DataManager._globalInfo.length ? 1 : DataManager._globalInfo.length;
            for (let a = 1; a < DataManager._globalInfo.length; a++) {
                const n = DataManager._globalInfo[a];
                if (n) {
                    if (n && n.memoryID === e) {
                        t = a;
                        break;
                    }
                } else t = a;
            }
            if ((($save.memoryID = e), (Memory.temp_savefileId = t), !a))
                for (let e = 0; e < Game.affinityList.length; e++)
                    (Memory["temp_offset_" + Game.affinityList[e] + "Affinity"] = $save["offset_" + Game.affinityList[e] + "Affinity"]), ($save["offset_" + Game.affinityList[e] + "Affinity"] = {});
            const i = new Promise((a) => {
                $gameSystem.onBeforeSave(),
                    DataManager.saveGame(t)
                        .then((n) => {
                            Game.requestAutosave(!0, e)
                                .then(() => {
                                    a();
                                })
                                .catch((e) => {
                                    a();
                                });
                        })
                        .catch((e) => {
                            a();
                        });
            });
            if (n) return i;
            Game.getInterpreter() && Game.getInterpreter().waitUntilPromiseSettled(i);
        }
    }),
    (Game.saveMemory_debag = function () {
        SceneManager.stop();
        const e = PD_ElementManager.list.base.addDiv("debugSave_base", Graphics.width, Graphics.height);
        e.backgroundColor = "rgba(0,0,0,0.7)";
        const a = e.addDiv("debugSave_text", 816, 35);
        (a.color = "white"), (a.innerText = "ゲーム本編と重複しないメモリーIDを入力してください"), (a.textAlign = "center"), (a.style.fontFamily = "PixelMplus10-Regular"), (a.style.fontSize = "20px"), a.move(0, 194);
        const n = e.addInput("debugSaveinput", 370, 35, !1);
        (n.style.fontFamily = "PixelMplus10-Regular"), (n.style.fontSize = "24px"), n.move(234, 294);
        const t = e.addButtonInput("debugSaveCancel", 150, 35);
        (t.value = "キャンセル"),
            (t.style.fontFamily = "PixelMplus10-Regular"),
            (t.style.fontSize = "20px"),
            t.move(240, 360),
            t.addEvent("click", "click", () => {
                e.delete(), PD_DevTools.isSceneStopped && (PD_DevTools.isSceneStopped = !1), SceneManager.resume();
            });
        const i = e.addButtonInput("debugSaveOK", 150, 35);
        (i.value = "決定"),
            (i.style.fontFamily = "PixelMplus10-Regular"),
            (i.style.fontSize = "20px"),
            i.move(426, 360),
            i.addEvent("click", "click", () => {
                if (!n.value) throw new Error("メモリーIDが入力されていません。");
                e.delete(), Game.saveMemory(n.value, !0), PD_DevTools.isSceneStopped && (PD_DevTools.isSceneStopped = !1), SceneManager.resume();
            });
    }),
    (Game.loadMemory = function (e) {
        if (!e) throw new Error("メモリーIDが指定されていません。");
        {
            let a = null;
            for (let n = 1; n < DataManager._globalInfo.length; n++) {
                const t = DataManager._globalInfo[n];
                if (t && t.memoryID === e) {
                    a = n;
                    break;
                }
            }
            if (!a || !DataManager.savefileInfo(a)) throw new Error("セーブデータが存在しません。");
            (Memory.temp_loadSaveFileId = a), SceneManager.push(Scene_Load);
        }
    }),
    (Game.loadMemory_debag = function () {
        SceneManager.stop();
        const e = PD_ElementManager.list.base.addDiv("debugLoad_base", Graphics.width, Graphics.height);
        e.backgroundColor = "rgba(0,0,0,0.7)";
        const a = e.addDiv("debugLoad_text", 816, 35);
        (a.color = "white"), (a.innerText = "ロードしたいメモリーIDを入力してください"), (a.textAlign = "center"), (a.style.fontFamily = "PixelMplus10-Regular"), (a.style.fontSize = "20px"), a.move(0, 194);
        const n = e.addInput("debugLoadinput", 370, 35, !1);
        (n.style.fontFamily = "PixelMplus10-Regular"), (n.style.fontSize = "24px"), n.move(234, 294);
        const t = e.addButtonInput("debugLoadCancel", 150, 35);
        (t.value = "キャンセル"),
            (t.style.fontFamily = "PixelMplus10-Regular"),
            (t.style.fontSize = "20px"),
            t.move(240, 360),
            t.addEvent("click", "click", () => {
                e.delete(), PD_DevTools.isSceneStopped && (PD_DevTools.isSceneStopped = !1), SceneManager.resume();
            });
        const i = e.addButtonInput("debugLoadOK", 150, 35);
        (i.value = "決定"),
            (i.style.fontFamily = "PixelMplus10-Regular"),
            (i.style.fontSize = "20px"),
            i.move(426, 360),
            i.addEvent("click", "click", () => {
                if (!n.value) throw new Error("メモリーIDが入力されていません。");
                e.delete(), PD_DevTools.isSceneStopped && (PD_DevTools.isSceneStopped = !1), SceneManager.resume(), Game.loadMemory(n.value);
            });
    }),
    (Game.openMemory = function () {
        (Memory.temp_loadSaveFileId = null), SceneManager.push(Scene_Load);
    }),
    (Game.getInterpreter = function () {
        let e = $gameMap._interpreter;
        for (; e._childInterpreter; ) e = e._childInterpreter;
        return e;
    }),
    (Game.terminateInterpreter = function () {
        $gameMessage.clear(), $gameMap._interpreter.terminate(), $gameMap._interpreter.clear();
    }),
    (Game.changeAffinity = function (e, a, n) {
        if (a) {
            if (Utils.isOptionValid("test")) {
                if ($save["offset_" + e + "Affinity_debug"][a]) throw new Error("同一の好感度IDを複数回使用する事はできません");
                $save["offset_" + e + "Affinity_debug"][a] = !0;
            }
            $save["offset_" + e + "Affinity"][a] = n;
        }
    }),
    (Game.changeCampaAffinity = function (e, a) {
        Game.changeAffinity("campa", e, a);
    }),
    (Game.totalCampaAffinity = function () {
        return Memory.getTotalAffinity("campa");
    }),
    (Game.changeKarelAffinity = function (e, a) {
        Game.changeAffinity("karel", e, a);
    }),
    (Game.totalKarelAffinity = function () {
        return Memory.getTotalAffinity("karel");
    }),
    (Game.changeZeniAffinity = function (e, a) {
        Game.changeAffinity("zeni", e, a);
    }),
    (Game.totalZeniAffinity = function (e = !1) {
        const a = Memory.getTotalAffinity("zeni", !0);
        let n = 0,
            t = [],
            i = [];
        for (let e = 0; e < a.length; e++) n + a[e].value >= 0 ? (t.push(a[e].id), (n += a[e].value)) : i.push(a[e].id);
        return null !== Game.force_ZeniAffinity_value && (n = Game.force_ZeniAffinity_value), e ? { total: n, enableIDs: t, disableIDs: i } : n;
    }),
    (Game.force_ZeniAffinity = function (e = null) {
        Game.force_ZeniAffinity_value = e;
    }),
    (Game.force_ZeniAffinity_value = null),
    (Game.isEnableZeniAffinity = function (e) {
        return Game.totalZeniAffinity(!0).enableIDs.includes(e);
    }),
    (Game.changeWiAffinity = function (e, a) {
        Game.changeAffinity("wi", e, a);
    }),
    (Game.totalWiAffinity = function () {
        return Game.totalAffinity_in_zeni("wi");
    }),
    (Game.isEnableWiAffinity = function (e) {
        return Game.isEnableAffinity("wi", e);
    }),
    (Game.changeKateAffinity = function (e, a) {
        Game.changeAffinity("kate", e, a);
    }),
    (Game.totalKateAffinity = function () {
        return Game.totalAffinity_in_zeni("kate");
    }),
    (Game.isEnableKateAffinity = function (e) {
        return Game.isEnableAffinity("kate", e);
    }),
    (Game.changeYumiAffinity = function (e, a) {
        Game.changeAffinity("yumi", e, a);
    }),
    (Game.totalYumiAffinity = function () {
        return Game.totalAffinity_in_zeni("yumi");
    }),
    (Game.isEnableYumiAffinity = function (e) {
        return Game.isEnableAffinity("yumi", e);
    }),
    (Game.totalAffinity_in_zeni = function (e, a = !1) {
        const n = Game.totalZeniAffinity(!0),
            t = Memory.getTotalAffinity(e, !0);
        let i = 0;
        const o = [];
        for (let e = 0; e < t.length; e++) n.disableIDs.includes(t[e].id) || (o.push(t[e]), (i += t[e].value));
        return a ? o : i;
    }),
    (Game.isEnableAffinity = function (e, a) {
        const n = Game.totalAffinity_in_zeni(e, !0);
        for (let e = 0; e < n.length; e++) if (n[e].id === a) return !0;
        return !1;
    }),
    (Game.setAlwaysDash = function (e) {
        $save.alwaysDash = e;
    }),
    (Game.runCommonEvent = function (e, a) {
        if (e)
            if (a) {
                const n = $dataCommonEvents[e].list.slice();
                n.splice(n.length - 1, 0, { code: 355, indent: 0, parameters: [a] }), $gameMap._interpreter.setup(n);
            } else $gameTemp.reserveCommonEvent(e);
    }),
    (Game.openPC = function (e, a, n) {
        PC.open(e, a, n);
    }),
    (Game.closePC = function () {
        PC.close();
    }),
    (Game.disablePC = function () {
        PC.isEnable = !1;
    }),
    (Game.enablePC = function () {
        PC.isEnable = !0;
    }),
    (Game.disableClosePC = function () {
        $save.disableClosePC = !0;
    }),
    (Game.enableClosePC = function () {
        $save.disableClosePC = !1;
    }),
    (Game.createMapUI_PC_Event = function () {
        Menu.createMapUI_PC_Event();
    }),
    (Game.deleteMapUI_PC_Event = function () {
        Menu.deleteMapUI_PC_Event();
    }),
    (Game.miniGame_saveBGM = null),
    (Game.miniGame_saveBGS = null),
    (Game.PC_to_miniGame = function (e, a, n, t) {
        (Game.miniGame_saveBGM = AudioManager.saveBgm()), (Game.miniGame_saveBGS = AudioManager.saveBgs()), PC.close(!1, e, a, n, t, !0, !0);
    }),
    (Game.miniGame_to_PC = function () {
        AudioManager.playBgm(Game.miniGame_saveBGM), AudioManager.playBgs(Game.miniGame_saveBGS), PC.open(!0);
    }),
    (Game.addRWords = function (e) {
        if (!e) throw new Error("R_corde管理番号が指定されていません。");
        $save.r_words.includes(e) || $save.r_words.unshift(e),
            PC_Progra.database[e] && ($save.desktopNotices.r_words = !0),
            PC_Progra.updateDesktopNotification(),
            $option.rCodeCount.includes(e) ||
                ($option.rCodeCount.push(e),
                Game.getInterpreter()
                    ? Game.getInterpreter().waitUntilPromiseSettled(
                          new Promise((e) => {
                              PD_SaveDataManager.saveOptionFile().then(() => {
                                  e();
                              });
                          })
                      )
                    : PD_SaveDataManager.saveOptionFile());
    }),
    (Game.removeRWords = function (e) {
        $save.r_words = $save.r_words.filter((a) => a !== e);
    }),
    (Game.hideRWords = function (e) {
        $save.r_words_hide.unshift(e);
    }),
    (Game.addDocFile = function (e) {
        $save.docFiles.unshift(e), ($save.desktopNotices.document = !0), PC_Document.updateDesktopNotification();
    }),
    (Game.removeDocFile = function (e) {
        $save.docFiles = $save.docFiles.filter((a) => a !== e);
    }),
    (Game.DocFile = function (e) {
        return $save.docFiles.includes(e);
    }),
    (Game.addData = function (e) {
        $save.datas.unshift(e);
    }),
    (Game.removeData = function (e) {
        $save.datas = $save.datas.filter((a) => a !== e);
    }),
    (Game.Data = function (e) {
        return $save.datas.includes(e);
    }),
    (Game.inToilet = function (e) {
        if (!e) throw new Error("トイレIDが指定されていません。");
        if ($save.toilets.includes(e)) throw new Error("トイレIDが重複しています。固有の文字列を設定してください。");
        $save.toilets.push(e),
            $option.toiletCount.includes(e) ||
                ($option.toiletCount.push(e),
                Game.getInterpreter()
                    ? Game.getInterpreter().waitUntilPromiseSettled(
                          new Promise((e) => {
                              PD_SaveDataManager.saveOptionFile().then(() => {
                                  e();
                              });
                          })
                      )
                    : PD_SaveDataManager.saveOptionFile());
    }),
    (Game.showRWordsPopup = function (e, a) {
        PD_UIManager.list.Popup_Get_R_words_Base && PD_UIManager.list.Popup_Get_R_words_Base.delete();
        const n = (a) => {
            AudioDatabase.playSE("R-code入手音");
            const n = PD_UIManager.loadDatabase("popup/Popup_Get_R_words_Base", PD_UIManager.base.picture);
            if ($gameSwitches.value(Setting.database["カレルレン乗っ取りスイッチ番号"][0])) {
                PD_UIManager.list.Popup_Get_R_words_BG.opacity = 0;
                const e = PD_UIManager.list.Popup_Get_R_words_Base.addUI("Popup_Get_R_words_BG_kar");
                e.loadImage("popup/popupBG_kar"), (e.anchor = [0.5, 0.5]);
            }
            const t = Game.add_OK_Listener(() => {
                n.delete(), a && a();
            });
            n.animeFunction(() => {
                t();
            }),
                n.playAnimation(),
                PD_UIManager.list.Popup_Get_R_words_HeaderText.drawTextEX("{R-codeを入手}", 0, 0, 150, 22, "center", 20, "rgba(155, 253, 0, 1)", 0);
            const i = PD_Translation.translation("word_" + e),
                o = PD_UIManager.list.Popup_Get_R_words_Text;
            if (i) for (let e = 0, a = i.length; e < a; e++) o.drawTextEX(i[e], 0, 32 * e + Math.floor(((3 - a) / 2) * 32), o.width, 32, "center", 24, "rgb(155,253,0)", 0);
        };
        a
            ? a.waitUntilPromiseSettled(
                  new Promise((e) => {
                      n(e);
                  }),
                  () => {},
                  (e) => {
                      throw Error(e);
                  }
              )
            : n();
    }),
    (Game.showItemPopup = function (e, a) {
        PD_UIManager.list.Popup_Get_R_words_Base && PD_UIManager.list.Popup_Get_R_words_Base.delete();
        const n = (a) => {
            const n = PD_UIManager.loadDatabase("popup/Popup_Get_R_words_Base", PD_UIManager.base.picture),
                t = Game.add_OK_Listener(() => {
                    n.delete(), a && a();
                });
            n.animeFunction(() => {
                t();
            }),
                n.playAnimation(),
                PD_UIManager.list.Popup_Get_R_words_HeaderText.drawTextEX("{アイテムを入手}", 0, 0, 150, 22, "center", 20, "rgba(155, 253, 0, 1)", 0);
            const i = PD_Translation.transData($dataItems[e].name),
                o = PD_UIManager.list.Popup_Get_R_words_Text;
            o.drawTextEX(i, 0, 32, o.width, 32, "center", 24, "rgb(155,253,0)", 0);
        };
        a
            ? a.waitUntilPromiseSettled(
                  new Promise((e) => {
                      n(e);
                  }),
                  () => {},
                  (e) => {
                      throw Error(e);
                  }
              )
            : n();
    }),
    (Game.showDataPopup = function (e, a) {
        PD_UIManager.list.Popup_Get_R_words_Base && PD_UIManager.list.Popup_Get_R_words_Base.delete();
        const n = (a) => {
            const n = PD_UIManager.loadDatabase("popup/Popup_Get_R_words_Base", PD_UIManager.base.picture),
                t = Game.add_OK_Listener(() => {
                    n.delete(), a && a();
                });
            n.animeFunction(() => {
                t();
            }),
                n.playAnimation(),
                PD_UIManager.list.Popup_Get_R_words_HeaderText.drawTextEX("{データを入手しました}", 0, 0, 150, 22, "center", 20, "rgba(155, 253, 0, 1)", 0);
            const i = PD_Translation.transData(PC_Data.database[e]["データ名の翻訳ID"]),
                o = PD_UIManager.list.Popup_Get_R_words_Text;
            o.drawTextEX(i, 0, 32, o.width, 32, "center", 24, "rgb(155,253,0)", 0);
        };
        a
            ? a.waitUntilPromiseSettled(
                  new Promise((e) => {
                      n(e);
                  }),
                  () => {},
                  (e) => {
                      throw Error(e);
                  }
              )
            : n();
    }),
    (Game.noticePopupIDs = {}),
    (Game.showNoticePopup = function (e, a, n, t = "rgb(192,230,212)") {
        a ? ($save.requestPopup[e] = { transID: e, standbySeconds: 60 * a, viewFunc: n ? PD_Util.FuncToString(n) : null, fontColor: t }) : Game.showNoticePopup_run(e, n, t);
    }),
    (Game.showNoticePopup_run = function (e, a, n = "rgb(192,230,212)") {
        let t = !1;
        for (const a in Game.noticePopupIDs) PD_UIManager.list[a + ":Popup_notice_Base"] || delete Game.noticePopupIDs[a], Game.noticePopupIDs[a] === e && (t = !0);
        if (t) return;
        (bg_LeftWidth = 40), (bg_CenterWidth = 46), (bg_RightWidth = 10), (leftTextSpace = 6);
        const i = PD_Translation.translation(e) || [" "];
        let o = 0;
        const r = PD_UIManager.base.lower.addUI("tempUI", 816, 624);
        r.drawTextEX_EX_setIconInfo("pc/icons/SNS_icon_", 18, 18, 2);
        const l = r.drawTextEX_EX(i.join("\n"), 0, 0, r.width, 32, "left", 24, null, 0);
        r.delete();
        for (let e = 0, a = l.length; e < a; e++) l[e].textWidth > o && (o = l[e].textWidth);
        let s = 1;
        const c = l[0].drawInfos[0].params;
        "code" === c.type && "T" === c.code && (s = Number(c.param));
        const _ = Math.ceil((o + leftTextSpace) / bg_CenterWidth),
            m = 816 - _ * bg_CenterWidth - bg_RightWidth,
            d = PD_Util.getTime(),
            g = PD_UIManager.base.picture.addUI(d + ":Popup_notice_Base");
        g.move(816 + _ * bg_CenterWidth + bg_LeftWidth + bg_RightWidth, 10), (g.opacity = 0), (g.y += 70 * Object.keys(Game.noticePopupIDs).length);
        const u = g.addUI(d + ":Popup_notice_BG", 816, 60);
        (u.anchor = [1, 0]), u.loadImage("popup/notice_popupBG_" + s, m - bg_LeftWidth, 0, null, null, null, [0, 0, bg_LeftWidth, 48]);
        for (let e = 0; e < _; e++) u.loadImage("popup/notice_popupBG_" + s, m + e * bg_CenterWidth, 0, null, null, null, [bg_LeftWidth, 0, bg_CenterWidth, 48]);
        u.loadImage("popup/notice_popupBG_" + s, 816 - bg_RightWidth, 0, null, null, null, [95 - bg_RightWidth, 0, bg_RightWidth, 48]);
        const p = u.addUI(d + ":Popup_notice_TextArea", _ * bg_CenterWidth, 32);
        (p.animationIndependence = !0), p.move(m - 816, 8);
        const P = p.addUI(d + ":Popup_notice_TextMask", p.width, p.height);
        P.fillAll("white"), P.attachMask(), (Game.noticePopupIDs[d] = e);
        let I,
            C = 0;
        i &&
            ((I = p.addUI(d + ":Popup_notice_Text", p.width, p.height * i.length)),
            I.drawTextEX_EX_setIconInfo("pc/icons/SNS_icon_", 18, 18, 2),
            I.drawTextEX_EX(i.join("\n"), leftTextSpace, 0, I.width - leftTextSpace, 32, "left", 24, n, 0)),
            g.animeOpacity(255, 25, !1),
            g.animeMoveX(811, 30, !0, "easeOutCubic"),
            g.animeFunction(() => {
                if (i) {
                    for (let e = 0, a = i.length; e < a; e++) I.animeMoveY(-32 * e, 30, !0, "easeInOutCubic"), I.animeWait(90), (C += 120);
                    I.animeFunction(() => {
                        g.deleteAnimation(),
                            g.animeOpacity(0, 30, !0),
                            g.animeFunction(() => {
                                delete Game.noticePopupIDs[d];
                            }),
                            g.animeDelete(),
                            g.playAnimation();
                    }),
                        I.playAnimation();
                } else
                    g.deleteAnimation(),
                        g.animeOpacity(0, 30, !0),
                        g.animeFunction(() => {
                            delete Game.noticePopupIDs[d];
                        }),
                        g.animeDelete(),
                        g.playAnimation();
            }),
            g.playAnimation(),
            AudioDatabase.playSE("通知C1_00441"),
            a && a();
    }),
    (Game.showNoCodePopup = function (e) {
        PD_UIManager.list.Popup_Get_R_words_Base && PD_UIManager.list.Popup_Get_R_words_Base.delete();
        const a = (e) => {
            const a = PD_UIManager.base.picture.addUI("noCodePop_BG", 816, 624);
            a.fillAll("rgba(0,0,0,0.7)"), (a.opacity = 0);
            const n = PD_UIManager.loadDatabase("popup/noCodePop_Base", a);
            (n.scale = [0, 0]), (n.animationIndependence = !0);
            const t = PD_UIManager.list.noCodePop_Error;
            (t.animationIndependence = !0), t.animeOpacity(0, 20, !0), t.animeOpacity(255, 20, !0), t.animeLoop(), t.playAnimation();
            const i = Game.add_OK_Listener(() => {
                a.delete(), e && e();
            });
            a.animeOpacity(255, 10, !0),
                a.animeFunction(() => {
                    n.animeScale(1, 1, 5, !0), n.animeWait(190), n.animeScale(0, 0, 5, !0), n.playAnimation();
                }),
                a.animeWait(200),
                a.animeOpacity(0, 10, !0),
                a.animeFunction(() => {
                    i();
                }),
                a.playAnimation();
        };
        e || (e = Game.getInterpreter()),
            e
                ? e.waitUntilPromiseSettled(
                      new Promise((e) => {
                          a(e);
                      }),
                      () => {},
                      (e) => {
                          throw Error(e);
                      }
                  )
                : a();
    }),
    (Game.create_reflect = function (e, a) {
        if (!$gameSwitches.value(481))
            if ($gameMap._mapId === Setting.pc_mapId) PC.reflectNum_manual = String(e);
            else if (!PD_UIManager.list["event_Giovanni_face:PC_reflect_Giovanni_" + e]) {
                let n = PD_UIManager.list.event_Giovanni_face_bg;
                n || (n = PD_UIManager.base.middle.addUI("event_Giovanni_face_bg")), a && ((n.opacity = 0), n.deleteAnimation(), n.animeOpacity(255, a, !0), n.playAnimation());
                const t = PD_UIManager.loadDatabase("pc/PC_reflect_Giovanni_" + e, n, "event_Giovanni_face");
                (t.animationIndependence = !0),
                    t.deleteAnimation(),
                    t.setAnimation("pc/PC_reflect_Giovanni_" + e),
                    t.playAnimation(),
                    t.reBuild_BitmapLoadPromise
                        .then(() => {
                            n.children[0] && n.children[0] !== t && n.children[0].delete(), t && PD_UIManager.list[t.name] && (t.visible = !0);
                        })
                        .catch(() => {
                            n.children[0] && n.children[0] !== t && n.children[0].delete(), t && PD_UIManager.list[t.name] && (t.visible = !0);
                        });
            }
    }),
    (Game.delete_reflect = function (e) {
        if ($gameMap._mapId === Setting.pc_mapId) (PC.reflectNum_manual = null), PC.delete_reflect();
        else {
            const a = PD_UIManager.list.event_Giovanni_face_bg;
            a && (e ? ((a.opacity = 255), a.deleteAnimation(), a.animeOpacity(0, e, !0), a.animeDelete(), a.playAnimation()) : a.delete());
        }
    }),
    (Game.create_Giovanni_face = function (e, a) {
        if ($gameSwitches.value(481)) return;
        let n = PD_UIManager.list.event_Giovanni_face_bg;
        n || ((n = PD_UIManager.base.middle.addUI("event_Giovanni_face_bg", 816, 624)), n.fillAll("black")), a && ((n.opacity = 0), n.deleteAnimation(), n.animeOpacity(255, a, !0), n.playAnimation());
        const t = PD_UIManager.loadDatabase("pc/PC_Giovanni_" + e, n, "event_Giovanni_face");
        (t.opacity = 255),
            (t.blendMode = 0),
            (t.animationIndependence = !0),
            t.deleteAnimation(),
            t.setAnimation("pc/PC_Giovanni_" + e),
            t.playAnimation(),
            t.reBuild_BitmapLoadPromise
                .then(() => {
                    n.children[0] && n.children[0] !== t && n.children[0].delete(), t && PD_UIManager.list[t.name] && (t.visible = !0);
                })
                .catch(() => {
                    n.children[0] && n.children[0] !== t && n.children[0].delete(), t && PD_UIManager.list[t.name] && (t.visible = !0);
                });
    }),
    (Game.delete_Giovanni_face = function (e) {
        const a = PD_UIManager.list.event_Giovanni_face_bg;
        a && (e ? ((a.opacity = 255), a.deleteAnimation(), a.animeOpacity(0, e, !0), a.animeDelete(), a.playAnimation()) : a.delete());
    }),
    (function () {
        "use strict";
        const e = Game_Screen.prototype.updateZoom;
        Game_Screen.prototype.updateZoom = function () {
            const a = PD_UIManager.list.event_Giovanni_face_bg;
            if (a) {
                const e = 1 / this.zoomScale();
                a.scaleX !== e && (a.scale = [e, e]);
                const n = -SceneManager._scene._spriteset.x * e;
                a.x !== n && (a.x = n);
                const t = -SceneManager._scene._spriteset.y * e;
                a.y !== t && (a.y = t);
            }
            e.call(this);
        };
    })(),
    (Game.viewCaption = function (e, a) {
        let n = PD_UIManager.list.Caption_Base;
        n ? PD_UIManager.list.Caption_TextArea.clear() : (n = PD_UIManager.loadDatabase("caption/Caption_Base", PD_UIManager.base.upper));
        const t = PD_Translation.translation(a),
            i = PD_UIManager.list.Caption_TextArea;
        if (t) for (let e = 0, a = t.length; e < a; e++) i.drawTextEX_EX(t[e], 0, 32 * e + Math.floor(((3 - a) / 2) * 32), i.width, 32, "center", 24, "rgb(192,230,212)", 0);
        const o = PD_UIManager._isDisableAllEvent,
            r = PD_UIManager._isDisableAllWheelEvent,
            l = PC.isDisableTaskChange,
            s = PC.isDisableClose;
        (PD_UIManager._isDisableAllEvent = !1), (PD_UIManager._isDisableAllWheelEvent = !0), (PC.isDisableTaskChange = !0), (PC.isDisableClose = !0);
        let c = !1;
        for (let a = e._index + 1, n = e._list, t = n.length; a < t; a++) {
            const e = n[a].code;
            if ([230].includes(e)) break;
            if (![108, 408].includes(e)) {
                const e = n[a].parameters[0];
                if (e && "string" == typeof e && "Game.viewCaption" === e.slice(0, 16)) {
                    c = !0;
                    break;
                }
            }
        }
        e.waitUntilPromiseSettled(
            new Promise((e) => {
                const a = () => {
                    c ? (n.removeEvent("ok"), n.removeEvent("repeat")) : n.delete(), (PD_UIManager._isDisableAllEvent = o), (PD_UIManager._isDisableAllWheelEvent = r), (PC.isDisableTaskChange = l), (PC.isDisableClose = s), e();
                };
                n.addEvent("ok", "ok", () => {
                    a();
                }),
                    n.addEvent("repeat", "repeat", () => {
                        a();
                    });
            })
        );
    }),
    (Game.drawFloorText = function (e, a, n = 0, t = 0) {
        const i = e._eventId,
            o = PD_Translation.translation(a),
            r = new Sprite();
        r.move(-48 * n - 24, 48 * t);
        const l = new Bitmap(144, 48 * o.length);
        (r.bitmap = l), (l.fontSize = 20), l.drawText("test", 0, 0, 816, 624, "center");
        const s = "英語" === $option.language ? 25 : 50,
            c = [];
        for (let e = 0; e < o.length; e++) {
            const a = o[e];
            let n = 0;
            for (let t = 0; t < a.length; t++)
                c.push(
                    () =>
                        new Promise((i) => {
                            const o = a[t];
                            l.drawTextEX(o, n, 26 * e, 26, 26, "left", 20, "rgb(200,255,255)", 0),
                                (n += l.measureTextWidth(o)),
                                setTimeout(() => {
                                    i();
                                }, s);
                        })
                );
        }
        PD_Promise.runArray(c);
        for (let e = 0, a = SceneManager._scene._spriteset._characterSprites, n = a.length; e < n; e++)
            if (a[e]._character._eventId === i) {
                a[e].addChild(r);
                break;
            }
    }),
    (Game.stopMotionAnime_InitBase = function (e, a, n, t, i, o) {
        if (((o = o ? "_" + o : ""), PD_UIManager.list["TrainAnime_outMotionAnimeBase" + o])) throw Error("すでに同じアニメーションが存在します");
        return new Promise((r, l) => {
            const s = e.addUI("TrainAnime_outMotionAnimeBase" + o);
            s.animationIndependence = !0;
            const c = [];
            let _ = 0;
            for (let e = 0, r = a.length; e < r; e++) {
                const l = s.addUI("TrainAnime_outMotionAnime_" + o + "_" + e);
                (l.opacity = 0), n && n[e] && n[e](l), _ > 0 && l.animeWait(_), i && i[e] && l.animeFunction(i[e]), l.animeOpacity(255), l.animeWait(t[e]), e < r - 1 && l.animeOpacity(0), c.push(l.loadImage(a[e])), (_ += t[e]);
            }
            s.animeWait(_),
                Promise.all(c).then(
                    () => {
                        for (let e = 0, n = a.length; e < n; e++) {
                            const n = "img/_kuina/" + a[e] + ".png";
                            ImageManager._cache[n] && (ImageManager._cache[n].destroy(), delete ImageManager._cache[n]);
                        }
                        r();
                    },
                    (e) => {
                        l(e);
                    }
                );
        });
    }),
    (Game.stopMotionAnime_PlayBase = function (e, a = null) {
        return new Promise((n) => {
            e = e ? "_" + e : "";
            const t = PD_UIManager.list["TrainAnime_outMotionAnimeBase" + e];
            null !== a
                ? t.animeLoop(a)
                : t.animeFunction(() => {
                      n();
                  }),
                t.playAnimation(),
                null !== a && n();
        });
    }),
    (Game.stopMotionAnime_DeleteBase = function (e) {
        (e = e ? "_" + e : ""), PD_UIManager.list["TrainAnime_outMotionAnimeBase" + e] && PD_UIManager.list["TrainAnime_outMotionAnimeBase" + e].delete();
    }),
    (Game.playVideo = function (e, a, n = !0, t = !0, i = null) {
        e.waitUntilPromiseSettled(
            new Promise((e) => {
                const o = () => {
                        Game.stopMotionAnime_DeleteBase("playVideo"), n && e();
                    },
                    r = [];
                for (let e = 0, n = a.length; e < n; e++) r[e] = 2;
                Game.stopMotionAnime_InitBase(PD_UIManager.base.upper, a, null, r, null, "playVideo")
                    .then(() => {
                        i && i();
                        const e = t ? Game.add_OK_Listener(o) : o;
                        Game.stopMotionAnime_PlayBase("playVideo")
                            .then(() => {
                                e();
                            })
                            .catch((a) => {
                                e();
                            });
                    })
                    .catch((e) => {
                        o();
                    }),
                    n || e();
            })
        );
    }),
    (Game.ok_Listeners = []),
    (Game.add_OK_Listener = function (e) {
        const a = function () {
            document.removeEventListener("keydown", t),
                document.removeEventListener("keyup", i),
                document.removeEventListener("mousedown", o),
                document.removeEventListener("mouseup", r),
                Game.ok_Listeners.push(() => {
                    e(...arguments);
                });
        };
        let n = Input.isPressed("ok") || TouchInput.isPressed();
        const t = (e) => {
                "ok" !== Input.keyMapper[e.keyCode] || n || a();
            },
            i = (e) => {
                "ok" === Input.keyMapper[e.keyCode] && (n = !1);
            },
            o = () => {
                n || a();
            },
            r = () => {
                n = !1;
            };
        return document.addEventListener("keydown", t), document.addEventListener("keyup", i), document.addEventListener("mousedown", o), document.addEventListener("mouseup", r), a;
    }),
    (Game.playWipe = function (e, a, n, t = !1, i = 4) {
        let o = PD_UIManager.list.mapWipeBase;
        o || (o = PD_UIManager.base.picture.addUI("mapWipeBase"));
        const r = PD_Core.updateCount,
            l = [];
        for (let a = 0, n = e.length; a < n; a++) (e[a] = "../" + e[a]), (l[a] = i);
        Game.stopMotionAnime_InitBase(o, e, null, l, null, "wipe:" + r)
            .then(() => {
                PD_UIManager.list["TrainAnime_outMotionAnimeBase_wipe:" + r].move(a, n),
                    Game.stopMotionAnime_PlayBase("wipe:" + r, t ? 0 : null)
                        .then(() => {
                            t || Game.stopMotionAnime_DeleteBase("wipe:" + r);
                        })
                        .catch((e) => {
                            Game.stopMotionAnime_DeleteBase("wipe:" + r);
                        });
            })
            .catch((e) => {
                Game.stopMotionAnime_DeleteBase("wipe:" + r);
            });
    }),
    (Game.deleteWipe = function () {
        PD_UIManager.list.mapWipeBase && PD_UIManager.list.mapWipeBase.delete();
    }),
    (Game.enableEventSkip = function () {
        Menu.skipEnable = !0;
    }),
    (Game.disableEventSkip = function () {
        Menu.skipEnable = !1;
    }),
    (Game.exitMiniGame = function () {
        PC_Document.exitMiniGame();
    }),
    (Game.newChapterEvent = function (e, a = !1, n) {
        (!a && Memory.temp_load_disableAppear) ||
            (n || (n = Game.getInterpreter()),
            n.waitUntilPromiseSettled(
                new Promise((a) => {
                    Memory.create(e).then(() => {
                        const e = PD_UIManager.base.upper.addUI("newChapterEvent_Collider", 816, 624);
                        e.fillAll("black"), (e.opacity = 0), (e.rectButton = !0);
                        let n = !1;
                        const t = () => {
                            n ||
                                ((n = !0),
                                e.animeOpacity(255, 60, !0),
                                e.animeWait(30),
                                e.animeFunction(() => {
                                    PD_UIManager.list.memory_Base.delete(), a();
                                }),
                                e.animeDelete(),
                                e.playAnimation());
                        };
                        e.addEvent("trigger", "trigger", t),
                            e.addEvent("update", "update", () => {
                                Input.isTriggered("ok") && t();
                            });
                    });
                })
            ));
    }),
    (Game.play_ZeroDayLife = function (e, a = !1) {
        if (void 0 === e) throw Error("ゼロデイ日付が指定されていません");
        Game.getInterpreter().waitUntilPromiseSettled(
            new Promise((n) => {
                let t = Math.floor(60 / e);
                t <= 0 && (t = 1);
                const i = PD_UIManager.base.picture.addUI("zeroDayLife_Base");
                i.opacity = 0;
                const o = i.addUI("zeroDayLife_BG");
                o.loadImage("animation/zeroDayLife/zeroDayLife_BG"),
                    i.animeOpacity(255, 30, !0),
                    i.animeWait(30),
                    i.animeFunction(() => {
                        const e = i.addUI("zeroDayLife_Logo");
                        e.loadImage("animation/zeroDayLife/zeroDayLife_Logo"),
                            (e.anchor = [0.5, 0.5]),
                            e.move(408, 250),
                            (e.opacity = 0),
                            (e.animationIndependence = !0),
                            e.animeMoveY(200, 60, !1, "easeOutCubic"),
                            e.animeOpacity(255, 60, !0, "easeOutCubic"),
                            e.playAnimation();
                    }),
                    i.animeWait(90),
                    i.animeFunction(() => {
                        const a = i.addUI("zeroDayLife_Day");
                        a.loadImage("animation/zeroDayLife/zeroDayLife_Day"), (a.anchor = [0.5, 0.5]), a.move(408, 380), (a.opacity = 0), (a.animationIndependence = !0);
                        const n = a.addUI("zeroDayLife_Num_L");
                        n.loadImage("animation/zeroDayLife/zeroDayLife_Num"), (n.frame = [0, 90, 42, 90]), (n.anchor = [0.5, 0.5]), n.move(40, -16), (n.animationIndependence = !0);
                        const o = a.addUI("zeroDayLife_Num_R");
                        o.loadImage("animation/zeroDayLife/zeroDayLife_Num"),
                            (o.frame = [0, 90, 42, 90]),
                            (o.anchor = [0.5, 0.5]),
                            o.move(92, -16),
                            (o.animationIndependence = !0),
                            a.animeOpacity(255, 30, !0, "easeOutCubic"),
                            a.animeWait(30),
                            a.animeFunction(() => {
                                for (let a = 1; a <= e; a++)
                                    o.animeFrameY(90 * ((a % 10) + 1), t, !0), a % 10 == 9 && (o.animeFrameY(0, 1, !0), n.animeWait(1)), a >= 10 && a % 10 == 0 ? n.animeFrameY(90 * (Math.floor(a / 10) + 1), t, !0) : n.animeWait(t);
                                o.playAnimation(), e >= 10 && n.playAnimation();
                            }),
                            a.playAnimation();
                    }),
                    i.animeWait(60 + t * e + Math.floor(e / 10) + 30),
                    i.animeFunction(() => {
                        i.addEvent("update", "update", () => {
                            if (Input.isTriggered("ok") || TouchInput.isTriggered())
                                if ((i.removeEvent("update"), i.deleteAnimation(), a)) {
                                    const e = PD_UIManager.list.zeroDayLife_Logo,
                                        a = PD_UIManager.list.zeroDayLife_Day,
                                        t = PD_UIManager.list.zeroDayLife_Num_L,
                                        r = PD_UIManager.list.zeroDayLife_Num_R,
                                        l = e.addUI("zeroDayLife_Logo_2");
                                    (l.opacity = 0), l.animeOpacity(255, 60, !0), l.playAnimation(), (l.animationIndependence = !0);
                                    const s = l.addUI("zeroDayLife_Logo_2_1");
                                    s.loadImage("animation/zeroDayLife/zeroDayLife_Logo_2_1"), (s.anchor = [0.5, 0.5]), (s.animationIndependence = !0);
                                    const c = l.addUI("zeroDayLife_Logo_2_2");
                                    c.loadImage("animation/zeroDayLife/zeroDayLife_Logo_2_2"), (c.anchor = [0.5, 0.5]), (c.animationIndependence = !0);
                                    const _ = l.addUI("zeroDayLife_Logo_2_3");
                                    _.loadImage("animation/zeroDayLife/zeroDayLife_Logo_2_3"), (_.anchor = [0.5, 0.5]), (_.animationIndependence = !0);
                                    const m = l.addUI("zeroDayLife_Logo_2_4");
                                    m.loadImage("animation/zeroDayLife/zeroDayLife_Logo_2_4"), (m.anchor = [0.5, 0.5]), (m.animationIndependence = !0);
                                    const d = a.addUI("zeroDayLife_Day_2");
                                    (d.opacity = 0), d.animeOpacity(255, 60, !0), d.playAnimation(), (d.animationIndependence = !0);
                                    const g = d.addUI("zeroDayLife_Day_2_1");
                                    g.loadImage("animation/zeroDayLife/zeroDayLife_Day_2_1"), (g.anchor = [0.5, 0.5]), (g.animationIndependence = !0);
                                    const u = d.addUI("zeroDayLife_Day_2_2");
                                    u.loadImage("animation/zeroDayLife/zeroDayLife_Day_2_2"), (u.anchor = [0.5, 0.5]), (u.animationIndependence = !0);
                                    const p = d.addUI("zeroDayLife_Day_2_3");
                                    p.loadImage("animation/zeroDayLife/zeroDayLife_Day_2_3"), (p.anchor = [0.5, 0.5]), (p.animationIndependence = !0);
                                    const P = d.addUI("zeroDayLife_Day_2_4");
                                    P.loadImage("animation/zeroDayLife/zeroDayLife_Day_2_4"), (P.anchor = [0.5, 0.5]), (P.animationIndependence = !0);
                                    const I = t.addUI("zeroDayLife_Num_L2");
                                    I.loadImage("animation/zeroDayLife/zeroDayLife_Num_2"), (I.frame = [0, t.frameY, 42, 90]), (I.opacity = 0), (I.anchor = [0.5, 0.5]), I.animeOpacity(255, 60, !0), I.playAnimation();
                                    const C = r.addUI("zeroDayLife_Num_R2");
                                    C.loadImage("animation/zeroDayLife/zeroDayLife_Num_2"),
                                        (C.frame = [0, r.frameY, 42, 90]),
                                        (C.opacity = 0),
                                        (C.anchor = [0.5, 0.5]),
                                        C.animeOpacity(255, 60, !0),
                                        C.playAnimation(),
                                        i.animeWait(90),
                                        i.animeFunction(() => {
                                            const e = o.addUI("zeroDayLife_BG_2");
                                            e.loadImage("animation/zeroDayLife/zeroDayLife_BG_2"), (e.opacity = 0), e.animeOpacity(255, 60, !0), e.playAnimation();
                                            const a = o.addUI("zeroDayLife_Blood_1");
                                            a.loadImage("animation/zeroDayLife/zeroDayLife_Blood_1"),
                                                (a.anchor = [1, 0]),
                                                a.move(816, 0),
                                                (a.scale = [0, 0]),
                                                (a.opacity = 0),
                                                a.animeScale(1, 1, 10, !1),
                                                a.animeOpacity(255, 10, !0),
                                                a.playAnimation();
                                            const n = o.addUI("zeroDayLife_Blood_2");
                                            n.loadImage("animation/zeroDayLife/zeroDayLife_Blood_2"),
                                                (n.anchor = [1, 1]),
                                                n.move(816, 624),
                                                (n.scale = [0, 0]),
                                                (n.opacity = 0),
                                                n.animeWait(30),
                                                n.animeScale(1, 1, 10, !1),
                                                n.animeOpacity(255, 10, !0),
                                                n.playAnimation();
                                            const t = o.addUI("zeroDayLife_Blood_3");
                                            t.loadImage("animation/zeroDayLife/zeroDayLife_Blood_3"),
                                                (t.anchor = [0, 0]),
                                                t.move(0, 0),
                                                (t.scale = [0, 0]),
                                                (t.opacity = 0),
                                                t.animeWait(20),
                                                t.animeScale(1, 1, 10, !1),
                                                t.animeOpacity(255, 10, !0),
                                                t.playAnimation();
                                            const i = o.addUI("zeroDayLife_Blood_4");
                                            i.loadImage("animation/zeroDayLife/zeroDayLife_Blood_4"),
                                                (i.anchor = [0, 1]),
                                                i.move(0, 624),
                                                (i.scale = [0, 0]),
                                                (i.opacity = 0),
                                                i.animeWait(10),
                                                i.animeScale(1, 1, 10, !1),
                                                i.animeOpacity(255, 10, !0),
                                                i.playAnimation();
                                        }),
                                        i.animeWait(60),
                                        i.animeFunction(() => {
                                            e.clear(), a.clear(), t.clear(), r.clear();
                                            let n = 120;
                                            (n = 120),
                                                s.animeMoveY(100, n, !1, "easeInOutCubic"),
                                                s.animeScaleY(1.5, n, !1, "easeInOutCubic"),
                                                s.animeOpacity(0, n, !0, "easeInQuart"),
                                                s.playAnimation(),
                                                (n = 180),
                                                c.animeMoveY(100, n, !1, "easeInOutCubic"),
                                                c.animeScaleY(1.5, n, !1, "easeInOutCubic"),
                                                c.animeOpacity(0, n, !0, "easeInQuart"),
                                                c.playAnimation(),
                                                (n = 240),
                                                _.animeMoveY(100, n, !1, "easeInOutCubic"),
                                                _.animeScaleY(1.5, n, !1, "easeInOutCubic"),
                                                _.animeOpacity(0, n, !0, "easeInQuart"),
                                                _.playAnimation(),
                                                (n = 300),
                                                m.animeMoveY(100, n, !1, "easeInOutCubic"),
                                                m.animeScaleY(1.5, n, !1, "easeInOutCubic"),
                                                m.animeOpacity(0, n, !0, "easeInQuart"),
                                                m.playAnimation(),
                                                (n = 120),
                                                g.animeOpacity(0, n, !0),
                                                g.playAnimation(),
                                                (n = 300),
                                                u.animeMoveY(100, n, !1, "easeInOutCubic"),
                                                u.animeScaleY(1.5, n, !1, "easeInOutCubic"),
                                                u.animeOpacity(0, n, !0, "easeInQuart"),
                                                u.playAnimation(),
                                                (n = 180),
                                                p.animeMoveY(100, n, !1, "easeInOutCubic"),
                                                p.animeScaleY(1.5, n, !1, "easeInOutCubic"),
                                                p.animeOpacity(0, n, !0, "easeInQuart"),
                                                p.playAnimation(),
                                                (n = 240),
                                                P.animeMoveY(100, n, !1, "easeInOutCubic"),
                                                P.animeScaleY(1.5, n, !1, "easeInOutCubic"),
                                                P.animeOpacity(0, n, !0, "easeInQuart"),
                                                P.playAnimation(),
                                                (n = 180),
                                                I.deleteAnimation(),
                                                I.animeMoveY(100, n, !1, "easeInOutCubic"),
                                                I.animeScaleY(1.5, n, !1, "easeInOutCubic"),
                                                I.animeOpacity(0, n, !0, "easeInQuart"),
                                                I.playAnimation(),
                                                (n = 240),
                                                C.deleteAnimation(),
                                                C.animeMoveY(100, n, !1, "easeInOutCubic"),
                                                C.animeScaleY(1.5, n, !1, "easeInOutCubic"),
                                                C.animeOpacity(0, n, !0, "easeInQuart"),
                                                C.playAnimation();
                                        }),
                                        i.animeWait(300),
                                        i.animeOpacity(0, 90, !0),
                                        i.animeFunction(() => {
                                            i.delete(), n();
                                        }),
                                        i.playAnimation();
                                } else {
                                    const e = PD_UIManager.list.zeroDayLife_Logo;
                                    e.deleteAnimation(), e.animeOpacity(0, 60, !0), e.animeDelete(), e.playAnimation();
                                    const a = PD_UIManager.list.zeroDayLife_Day;
                                    a.deleteAnimation(),
                                        a.animeOpacity(0, 60, !0),
                                        a.animeDelete(),
                                        a.playAnimation(),
                                        i.animeWait(120),
                                        i.animeOpacity(0, 90, !0),
                                        i.animeFunction(() => {
                                            i.delete(), n();
                                        }),
                                        i.playAnimation();
                                }
                        });
                    }),
                    i.playAnimation();
            })
        );
    }),
    (function () {
        "use strict";
        (Input.keyMapper[65] = "left"), (Input.keyMapper[87] = "up"), (Input.keyMapper[68] = "right"), (Input.keyMapper[83] = "down");
        const e = Scene_Map.prototype.update;
        Scene_Map.prototype.update = function () {
            if ($save.requestPopup)
                for (const e in $save.requestPopup) {
                    const a = $save.requestPopup[e];
                    a.standbySeconds--, a.standbySeconds <= 0 && (Game.showNoticePopup_run(e, a.viewFunc ? PD_Util.strToFunc(a.viewFunc) : null, a.fontColor), delete $save.requestPopup[e]);
                }
            if (Game.ok_Listeners.length > 0) {
                for (let e = 0, a = Game.ok_Listeners.length; e < a; e++) Game.ok_Listeners[e]();
                Game.ok_Listeners = [];
            }
            e.call(this);
        };
        const a = Game_Event.prototype.refresh;
        (Game_Event.prototype.refresh = function () {
            $dataMap.events[this._eventId] ? a.call(this) : ($gameMap._events[this._eventId] = null);
        }),
            (Game_Interpreter.prototype.command101 = function (e) {
                if ($gameMessage.isBusy()) return !1;
                for ($gameMessage.setFaceImage(e[0], e[1]), $gameMessage.setBackground(e[2]), $gameMessage.setPositionType(e[3]), $gameMessage.setSpeakerName(e[4]); 401 === this.nextEventCode(); ) {
                    this._index++;
                    const e = this.currentCommand().parameters[0],
                        a = PD_Translation.translation(e);
                    if (a) for (let e = 0, n = a.length; e < n; e++) $gameMessage.add(a[e]);
                    else $gameMessage.add(this.currentCommand().parameters[0]);
                }
                switch (this.nextEventCode()) {
                    case 102:
                        this._index++, this.setupChoices(Game.transSelectParams(this.currentCommand().parameters));
                        break;
                    case 103:
                        this._index++, this.setupNumInput(this.currentCommand().parameters);
                        break;
                    case 104:
                        this._index++, this.setupItemChoice(this.currentCommand().parameters);
                }
                return this.setWaitMode("message"), !0;
            }),
            (Game_Interpreter.prototype.command102 = function (e) {
                return !$gameMessage.isBusy() && (this.setupChoices(Game.transSelectParams(e)), this.setWaitMode("message"), !0);
            });
        const n = TextManager.basic;
        TextManager.basic = function () {
            const e = n.apply(this, arguments),
                a = PD_Translation.translation(e);
            return a ? a[0] : e;
        };
        const t = TextManager.param;
        TextManager.param = function () {
            const e = t.apply(this, arguments),
                a = PD_Translation.translation(e);
            return a ? a[0] : e;
        };
        const i = TextManager.command;
        TextManager.command = function () {
            const e = i.apply(this, arguments),
                a = PD_Translation.translation(e);
            return a ? a[0] : e;
        };
        const o = TextManager.message;
        TextManager.message = function () {
            const e = o.apply(this, arguments),
                a = PD_Translation.translation(e);
            return a ? a[0] : e;
        };
        const r = Game_Player.prototype.canPass;
        (Game_Player.prototype.canPass = function (e, a, n) {
            const t = $gameMap.roundXWithDirection(e, n),
                i = $gameMap.roundYWithDirection(a, n),
                o = $gameMap.regionId(t, i),
                l = (e) => !!$gameMap.isValid(t, i) && (!!this.isDebugThrough() || o !== e);
            return $gameSwitches.value(218) ? l(14) : $gameSwitches.value(132) ? l(13) : r.apply(this, arguments);
        }),
            (Video._onLoadFunc = null);
        const l = Video._onLoad;
        (Video._onLoad = function () {
            l.call(this), Video._onLoadFunc && (Video._onLoadFunc(), (Video._onLoadFunc = null));
        }),
            (Video._endFunc = null);
        const s = Video._onEnd;
        Video._onEnd = function () {
            s.call(this), Video._endFunc && Video._element.src && Video._endFunc(!0);
        };
        const c = TilingSprite.prototype._onBitmapLoad;
        TilingSprite.prototype._onBitmapLoad = function () {
            this.texture || this.initialize(this._bitmap), c.call(this);
        };
        const _ = Game_Player.prototype.isDashButtonPressed;
        Game_Player.prototype.isDashButtonPressed = function () {
            return $save.alwaysDash ? !Input.isPressed("shift") : _.call(this);
        };
        const m = Game_Variables.prototype.setValue;
        Game_Variables.prototype.setValue = function (e, a) {
            m.apply(this, arguments), 3 === e && -4444 === a && $gameSystem.unlockAchievement("Ach007");
        };
    })(),
    (Game.searchJPEGFiles = function () {
        const e = document.createElement("input");
        (e.type = "file"),
            (e.id = "fileInput"),
            (e.multiple = !0),
            (e.webkitdirectory = !0),
            document.body.appendChild(e),
            e.addEventListener("change", function (e) {
                const a = e.target.files;
                for (let e = 0; e < a.length; e++) {
                    const n = a[e],
                        t = new FileReader();
                    (t.onload = function (e) {
                        const a = e.target.result,
                            t = new Uint8Array(a).subarray(0, 4).join(" ");
                        ("255 216 255 224" !== t && "255 216 255 225" !== t) || console.log(`${n.webkitRelativePath} is a JPEG file.`);
                    }),
                        t.readAsArrayBuffer(n.slice(0, 4));
                }
            }),
            e.click();
    }),
    PD_SaveDataManager.addSaveParam("updateVersions", []),
    (Update.versionFuncs = [
        {
            version: "1.0.1",
            func: () => {
                $save.r_words.includes(52) && 0 === $gameParty.numItems($dataItems[153]) && $gameParty.gainItem($dataItems[153], 1),
                    !$save.r_words.includes(48) && $gameParty.numItems($dataItems[152]) >= 1 && $gameParty.loseItem($dataItems[152], 1);
            },
        },
    ]),
    (Update.afterLoad = function () {
        for (let e = 0, a = Update.versionFuncs.length; e < a; e++) {
            const a = Update.versionFuncs[e];
            $save.updateVersions.includes(a.version) || (a.func(), ($save.updateVersions[e] = a.version));
        }
    }),
    (Menu.skipEnable = !1),
    (Menu.skipSpeed = 1),
    (Menu.isPause = !1),
    (Menu.initialize = function () {
        (Menu.mapHackEvents = null), (Menu.mapConsultEvents = null), (Menu.hackEventTiles = {}), (Menu.mapUI_width = 78), (Menu.mapUI_viewX = 49), (Menu.mapUI_hideX = 40), (Menu.isLoad_hackingExit = !1);
    }),
    Menu.initialize(),
    (Menu.createMapUI_PC = function (e, a, n) {
        if (($dataMap.note && $dataMap.note.includes("<NoMapUI_PC>")) || !$gameSwitches.value(141)) return n;
        let t = PD_UIManager.list.mapUI_PC_Base,
            i = PD_UIManager.list.mapUI_PC_Img;
        if (t) {
            const e = $gameSystem.isMenuEnabled() ? 0 : 42;
            i.frameY !== e && (i.frameY = e), $gameSwitches.value(144) && !i.isPlayAnimation && (i.deleteAnimation(), (i.tone = [0, 0, 0, 0]), i.animeTone(180, 180, 180, 0, 1, !0), i.animeTone(0, 0, 0, 0, 30, !0), i.playAnimation());
        } else
            (t = PD_UIManager.base.picture.addUI("mapUI_PC_Base", Menu.mapUI_width, 55)),
                (t.anchor = [0.5, 0.5]),
                t.move(e, 50),
                (t.opacity = 0),
                (t.rectButton = !0),
                (t.isStopPropagation = !0),
                t.deleteAnimation(),
                n > 0 && t.animeWait(n),
                t.animeOpacity(255, 12, !1),
                t.animeMoveX(a, 12, !0),
                t.playAnimation(),
                (n += 6),
                t.addEvent("trigger", "trigger", () => {
                    SceneManager._scene.menuCalling = !0;
                }),
                (i = t.addUI("mapUI_PC_Img")),
                i.loadImage("mapUI/mapUI_pc"),
                (i.anchor = [0.5, 0.5]),
                (i.frame = [0, $gameSystem.isMenuEnabled() ? 0 : 42, Menu.mapUI_width, 42]),
                (i.animationIndependence = !0);
        return n;
    }),
    (Menu.deleteMapUI_PC = function (e, a) {
        const n = PD_UIManager.list.mapUI_PC_Base;
        return n && !n.isPlayAnimation && (n.deleteAnimation(), a > 0 && n.animeWait(a), n.animeOpacity(0, 12, !1), n.animeMoveX(e, 12, !0), n.animeDelete(), n.playAnimation(), (a += 6)), a;
    }),
    (Menu.createMapUI_Hack = function (e, a, n) {
        if (($dataMap.note && $dataMap.note.includes("<NoMapUI_Hack>")) || !$gameSwitches.value(142)) return n;
        let t = PD_UIManager.list.mapUI_Hack_Base,
            i = PD_UIManager.list.mapUI_Hack_Img;
        if (t) {
            if (!$gamePlayer.isMoving()) {
                const e = ($gameSwitches.value(132) && $gameSwitches.value(133) && $gameSwitches.value(142)) || Menu.checkEnableMapHack() ? 0 : 54;
                i.frameY !== e && (i.frameY = e);
            }
            $gameSwitches.value(145) &&
                ($gameSwitches.value(132)
                    ? (i.deleteAnimation(), (i.tone = [0, 0, 0, 0]))
                    : i.isPlayAnimation || (i.deleteAnimation(), (i.tone = [0, 0, 0, 0]), i.animeTone(180, 180, 180, 0, 1, !0), i.animeTone(0, 0, 0, 0, 30, !0), i.playAnimation()));
        } else
            (t = PD_UIManager.base.picture.addUI("mapUI_Hack_Base", Menu.mapUI_width, 55)),
                (t.anchor = [0.5, 0.5]),
                t.move(e, 100),
                (t.opacity = 0),
                (t.rectButton = !0),
                (t.isStopPropagation = !0),
                t.deleteAnimation(),
                n > 0 && t.animeWait(n),
                t.animeOpacity(255, 12, !1),
                t.animeMoveX(a, 12, !0),
                t.playAnimation(),
                (n += 6),
                t.addEvent("trigger", "trigger", () => {
                    $gameSwitches.value(132) ? $gameSwitches.value(133) && $gameSwitches.value(142) && $gameTemp.reserveCommonEvent(3) : Menu.checkEnableMapHack() && $gameTemp.reserveCommonEvent(2);
                }),
                (i = t.addUI("mapUI_Hack_Img")),
                i.loadImage("mapUI/mapUI_hack"),
                (i.anchor = [0.5, 0.5]),
                (i.frame = [0, Menu.checkEnableMapHack() ? 0 : 54, Menu.mapUI_width, 54]),
                (i.animationIndependence = !0);
        return n;
    }),
    (Menu.deleteMapUI_Hack = function (e, a) {
        const n = PD_UIManager.list.mapUI_Hack_Base;
        return n && !n.isPlayAnimation && (n.deleteAnimation(), a > 0 && n.animeWait(a), n.animeOpacity(0, 12, !1), n.animeMoveX(e, 12, !0), n.animeDelete(), n.playAnimation(), (a += 6)), a;
    }),
    (Menu.createMapUI_Consult = function (e, a, n) {
        if (($dataMap.note && $dataMap.note.includes("<NoMapUI_Consult>")) || !$gameSwitches.value(143)) return n;
        let t = PD_UIManager.list.mapUI_Consult_Base,
            i = PD_UIManager.list.mapUI_Consult_Img;
        if (t) {
            if (((i.frameX = $gameVariables.value(6) * Menu.mapUI_width), !$gamePlayer.isMoving())) {
                const e = Menu.checkEnableMapConsult() ? 0 : 52;
                i.frameY !== e && (i.frameY = e);
            }
            $gameSwitches.value(146) && !i.isPlayAnimation && (i.deleteAnimation(), (i.tone = [0, 0, 0, 0]), i.animeTone(180, 180, 180, 0, 1, !0), i.animeTone(0, 0, 0, 0, 30, !0), i.playAnimation());
        } else
            (t = PD_UIManager.base.picture.addUI("mapUI_Consult_Base", 78, 55)),
                (t.anchor = [0.5, 0.5]),
                t.move(e, 160),
                (t.opacity = 0),
                (t.rectButton = !0),
                (t.isStopPropagation = !0),
                t.deleteAnimation(),
                n > 0 && t.animeWait(n),
                t.animeOpacity(255, 12, !1),
                t.animeMoveX(a, 12, !0),
                t.playAnimation(),
                (n += 6),
                t.addEvent("trigger", "trigger", () => {
                    Menu.checkEnableMapConsult() && $gameSwitches.setValue(136, !0);
                }),
                (i = t.addUI("mapUI_Consult_Img")),
                i.loadImage("mapUI/mapUI_consult"),
                (i.anchor = [0.5, 0.5]),
                (i.frame = [$gameVariables.value(6) * Menu.mapUI_width, 0, Menu.mapUI_width, 52]),
                (i.animationIndependence = !0);
        return n;
    }),
    (Menu.deleteMapUI_Consult = function (e, a) {
        const n = PD_UIManager.list.mapUI_Consult_Base;
        return n && !n.isPlayAnimation && (n.deleteAnimation(), a > 0 && n.animeWait(a), n.animeOpacity(0, 12, !1), n.animeMoveX(e, 12, !0), n.animeDelete(), n.playAnimation(), (a += 6)), a;
    }),
    (Menu.updateMapUI = function () {
        if ((PD_UIManager.list.mapUI_PC_Base_Event && (Input.isTriggered("menu") || TouchInput.isCancelled()) && PD_UIManager.list.mapUI_PC_Base_Event._e.trigger.trigger(), $dataMap.note && $dataMap.note.includes("<NoMapUIs>"))) return;
        let e = 0,
            a = 0;
        const n = Menu.mapUI_hideX,
            t = Menu.mapUI_viewX;
        $gameMap.isEventRunning()
            ? ((a = Menu.deleteMapUI_PC(n, a)), (a = Menu.deleteMapUI_Hack(n, a)), (a = Menu.deleteMapUI_Consult(n, a)))
            : ($gameSwitches.value(132) ? (a = Menu.deleteMapUI_PC(n, a)) : (e = Menu.createMapUI_PC(n, t, e)),
              (e = Menu.createMapUI_Hack(n, t, e)),
              $gameSwitches.value(132) ? (a = Menu.deleteMapUI_Consult(n, a)) : (e = Menu.createMapUI_Consult(n, t, e)));
    }),
    (Menu.createMapUI_PC_Event = function () {
        let e = PD_UIManager.list.mapUI_PC_Base_Event,
            a = PD_UIManager.list.mapUI_PC_Img_Event;
        if (e) {
            const e = $gameSystem.isMenuEnabled() ? 0 : 42;
            a.frameY !== e && (a.frameY = e), $gameSwitches.value(144) && !a.isPlayAnimation && (a.deleteAnimation(), (a.tone = [0, 0, 0, 0]), a.animeTone(180, 180, 180, 0, 1, !0), a.animeTone(0, 0, 0, 0, 30, !0), a.playAnimation());
        } else
            (e = PD_UIManager.base.picture.addUI("mapUI_PC_Base_Event", Menu.mapUI_width, 55)),
                (e.anchor = [0.5, 0.5]),
                e.move(Menu.mapUI_hideX, 50),
                (e.opacity = 0),
                (e.rectButton = !0),
                (e.isStopPropagation = !0),
                e.deleteAnimation(),
                e.animeOpacity(255, 12, !1),
                e.animeMoveX(Menu.mapUI_viewX, 12, !0),
                e.playAnimation(),
                e.addEvent("trigger", "trigger", () => {
                    Game.terminateInterpreter(), PC.open();
                }),
                (a = e.addUI("mapUI_PC_Img_Event")),
                a.loadImage("mapUI/mapUI_pc"),
                (a.anchor = [0.5, 0.5]),
                (a.frame = [0, $gameSystem.isMenuEnabled() ? 0 : 42, Menu.mapUI_width, 42]),
                (a.animationIndependence = !0);
    }),
    (Menu.deleteMapUI_PC_Event = function () {
        const e = PD_UIManager.list.mapUI_PC_Base_Event;
        e && (e.deleteAnimation(), e.animeOpacity(0, 12, !1), e.animeMoveX(Menu.mapUI_hideX, 12, !0), e.animeDelete(), e.playAnimation());
    }),
    (Menu.checkEnableMapPC = function () {
        return $gameSystem.isMenuEnabled() && !$gameMap.isEventRunning() && !$gameSwitches.value(65) && !$gameSwitches.value(132) && $gameSwitches.value(141);
    }),
    (Menu.checkEnableMapHack = function () {
        return Menu.mapHackEvents && !$gamePlayer.isMoving() && $gamePlayer.canMove() && $gameSwitches.value(133) && $gameSwitches.value(142);
    }),
    (Menu.checkEnableMapConsult = function () {
        return Menu.mapConsultEvents && !$gamePlayer.isMoving() && $gamePlayer.canMove() && $gameSwitches.value(135) && $gameSwitches.value(143);
    }),
    (Menu.mapUI_refresh = function () {
        const e = $gameMap.events(),
            a = [],
            n = [],
            t = [],
            i = [];
        for (let o = 0; o < e.length; o++)
            for (let r = 0, l = e[o].event().pages; r < l.length; r++) {
                const e = l[r],
                    s = e.conditions;
                ((s.switch1Valid && 132 === s.switch1Id) || (s.switch2Valid && 132 === s.switch2Id)) && (a.push(o), n.push(r)),
                    e.trigger >= 3 && ((s.switch1Valid && 136 === s.switch1Id) || (s.switch2Valid && 136 === s.switch2Id)) && (t.push(o), i.push(r));
            }
        const o = (a, n, t) => {
            const i = [],
                o = [];
            for (let r = a.length - 1; r >= 0; r--) {
                if (o.includes(a[r])) continue;
                const l = e[a[r]];
                if (l._pageIndex <= n[r]) {
                    let e = !0;
                    const s = l.event().pages[n[r]],
                        c = s.conditions;
                    c.switch1Valid && c.switch1Id !== t && !$gameSwitches.value(c.switch1Id) && (e = !1),
                        c.switch2Valid && c.switch2Id !== t && !$gameSwitches.value(c.switch2Id) && (e = !1),
                        c.variableValid && $gameVariables.value(c.variableId) < c.variableValue && (e = !1),
                        c.selfSwitchValid && !0 !== $gameSelfSwitches.value([l._mapId, l._eventId, c.selfSwitchCh]) && (e = !1),
                        c.itemValid && !$gameParty.hasItem($dataItems[c.itemId]) && (e = !1),
                        c.actorValid && !$gameParty.members().includes($gameActors.actor(c.actorId)) && (e = !1),
                        e && (s.list.length >= 2 && i.push(l), o.push(a[r]));
                }
            }
            return i.length > 0 ? i : null;
        };
        (Menu.mapHackEvents = o(a, n, 132)), (Menu.mapConsultEvents = o(t, i, 136));
    }),
    (Menu.updateHackEventTiles = function () {
        if (($gameMap.refresh(), (Menu.isLoad_hackingExit = !0), Menu.mapHackEvents && 0 !== Menu.mapHackEvents.length)) {
            Menu.hackEventTiles = $gameMap.checkPixelColliderEvents(Menu.mapHackEvents);
            for (let e = 0; e < Menu.mapHackEvents.length; e++) {
                const a = Menu.mapHackEvents[e];
                Menu.hackEventTiles[a._eventId] || (Menu.hackEventTiles[a._eventId] = { event: a, tileOffsets: [{ x: 0, y: 0 }] });
            }
        } else Menu.hackEventTiles = {};
    }),
    (Menu.checkHackEventTile = function () {
        for (let e in Menu.hackEventTiles) {
            const a = Menu.hackEventTiles[e].event;
            if (a) for (let n = 0, t = Menu.hackEventTiles[e].tileOffsets, i = t.length; n < i; n++) if ($gamePlayer.x === a.x + t[n].x && $gamePlayer.y === a.y + t[n].y) return { event: a, x: a.x, y: a.y };
        }
        return null;
    }),
    (Menu.updateGoldTimer = function () {
        if ($gameMap._mapId !== Setting.pc_mapId && !$gameSwitches.value(483))
            if ($gameSwitches.value(679)) {
                if (!PD_UIManager.list.goldTimer_BG) {
                    const e = PD_UIManager.base.picture.addUI("goldTimer_BG");
                    e.loadImage("mapUI/mapTimer_BG"), (e.anchor = [0.5, 0.5]), e.move(751, 35);
                    const a = e.addUI("goldTimer_clock");
                    a.loadImage("mapUI/mapTimer_clock"), (a.frame = [0, 0, 14, 14]), (a.anchor = [0.5, 0.5]), a.move(-33, -1);
                }
                if ($gameTimer._working) {
                    const e = $gameTimer.frames() / 60;
                    let a = PD_UIManager.list.goldTimer_text;
                    a || ((a = PD_UIManager.list.goldTimer_BG.addUI("goldTimer_text", 100, 30)), (a.anchor = [0.5, 0.5]), a.move(10, -1));
                    let n = "rgb(192,230,212)";
                    e <= 10 ? ((n = "rgb(255,0,17)"), (PD_UIManager.list.goldTimer_clock.frameX = 14)) : (PD_UIManager.list.goldTimer_clock.frameX = 0),
                        a.clear(),
                        a.drawTextEX(Math.floor(e / 60).padZero(2) + ":" + Math.floor(e % 60).padZero(2), 0, 0, a.width, a.height, "center", 24, n, 0);
                }
            } else PD_UIManager.list.goldTimer_BG && PD_UIManager.list.goldTimer_BG.delete();
    }),
    (Menu.showMessageDialog = function (e, a, n) {
        const t = new Promise((a) => {
            let n = 0;
            "string" == typeof e && (e = [e]);
            const t = (a) => {
                    const n = PD_Translation.translation(e[a]),
                        t = PD_UIManager.list.messageDialog_textArea;
                    t.clear();
                    for (let e = 0; e < n.length; e++) t.drawTextEX(n[e], 0, 26 * e, t.width, 26, "left", 20, "rgb(192,230,212)", 0);
                },
                i = () => {
                    r.isPlayAnimation ||
                        (AudioDatabase.playSE("PC_クリック音"),
                        n < e.length - 1
                            ? (n++, t(n))
                            : (r.deleteAnimation(),
                              r.animeScale(1, 0, 10, !0, "easeOutCubic"),
                              r.animeFunction(() => {
                                  o.delete(), a();
                              }),
                              r.playAnimation()));
                },
                o = PD_UIManager.base.upper.addUI("messageDialog_Base", 816, 624);
            o.fillAll("rgba(0,0,0,0.72)"),
                (o.rectButton = 50),
                (o.isStopPropagation = !0),
                o.addEvent("trigger", "trigger", () => {
                    i();
                }),
                o.addEvent("update", "update", () => {
                    Input.isTriggered("ok") && i();
                });
            const r = o.addUI("messageDialog_BG");
            r.loadImage("dialog/dialog2_bg"),
                (r.anchor = [0.5, 0.5]),
                (r.scale = [1, 0]),
                r.move(408, 312),
                r.animeScale(1, 1, 10, !0, "easeOutCubic"),
                r.animeFunction(() => {
                    (r.addUI("messageDialog_textArea", 446, 250).anchor = [0.5, 0.5]), t(n);
                    const e = r.addUI("messageDialog_cursor");
                    e.loadImage("dialog/dialog2_cursor"),
                        (e.anchor = [0.5, 0.5]),
                        e.move(216, 120),
                        (e.animationIndependence = !0),
                        e.animeWait(30),
                        e.animeOpacity(0, 1, !1),
                        e.animeWait(30),
                        e.animeOpacity(255, 1, !1),
                        e.animeLoop(),
                        e.playAnimation();
                }),
                r.playAnimation();
        });
        if (n) return t;
        a || (a = Game.getInterpreter()),
            a.waitUntilPromiseSettled(
                t,
                () => {},
                (e) => {
                    throw Error(e);
                }
            );
    }),
    (function () {
        "use strict";
        const e = Spriteset_Base.prototype.createPictures;
        Spriteset_Base.prototype.createPictures = function () {
            e.call(this), PD_UIManager.addLayerBaseUI(this._pictureContainer, "picture");
        };
        const a = Scene_Map.prototype.initialize;
        Scene_Map.prototype.initialize = function () {
            a.call(this), Menu.initialize();
        };
        const n = Game_Map.prototype.updateEvents;
        Game_Map.prototype.updateEvents = function () {
            Menu.updateMapUI(), Menu.updateGoldTimer(), n.call(this);
        };
        const t = Game_Map.prototype.refresh;
        Game_Map.prototype.refresh = function () {
            t.call(this), Menu.mapUI_refresh();
        };
        const i = Scene_Map.prototype.onTransferEnd;
        Scene_Map.prototype.onTransferEnd = function () {
            i.call(this), $gameMap.refresh();
        };
        const o = Game_Player.prototype.checkEventTriggerHere;
        (Game_Player.prototype.checkEventTriggerHere = function (e) {
            if ($gameSwitches.value(132)) {
                const a = Menu.checkHackEventTile();
                a && this.canStartLocalEvents() && this.startMapEvent(a.x, a.y, e, !1);
            } else o.call(this, e);
        }),
            (Scene_Message.prototype.messageWindowRect = function () {
                const e = this.calcWindowHeight(4, !1) + 8,
                    a = (Graphics.boxWidth - 748) / 2;
                return new Rectangle(a, 0, 748, e);
            });
        const r = Window_Message.prototype.initialize;
        Window_Message.prototype.initialize = function (e) {
            (this._defaultRect = new Rectangle(e.x, e.y, e.width, e.height)), (e.width = Graphics.boxWidth), r.apply(this, arguments);
        };
        const l = Window_Base.prototype.processCharacter;
        Window_Base.prototype.processCharacter = function (e) {
            l.call(this, e), "英語" === $option.language && e.index < e.text.length && l.call(this, e);
        };
        const s = Window_Selectable.prototype.drawItemBackground;
        Window_Selectable.prototype.drawItemBackground = function (e) {
            $gameSwitches.value(148) && s.call(this, e);
        };
        const c = SceneManager.initialize;
        SceneManager.initialize = function () {
            (Menu.skipSpeed = 1), c.call(this);
        };
        const _ = SceneManager.updateMain;
        SceneManager.updateMain = function () {
            if ((_.call(this), Menu.skipSpeed > 1)) for (let e = 1; e < Menu.skipSpeed; e++) _.call(this);
        };
        const m = Window_Message.prototype.isTriggered;
        Window_Message.prototype.isTriggered = function () {
            return Menu.skipSpeed > 1 || m.call(this);
        };
        const d = AudioManager.playSe;
        AudioManager.playSe = function (e) {
            1 === Menu.skipSpeed && d.call(this, e);
        };
        const g = Scene_Map.prototype.update;
        Scene_Map.prototype.update = function () {
            if (Menu.isPause) {
                let e = PD_UIManager.list.map_pauseBase;
                if (e) e.updateDraw(), PD_UIManager.sceneUI_UpdateEvent();
                else {
                    const a = () => {
                        (PD_UIManager.disableColliders_exceptUI_names = []), e.delete(), (Menu.isPause = !1);
                    };
                    (e = PD_UIManager.base.picture.addUI("map_pauseBase", 816, 624)),
                        e.fillAll("rgba(0, 0, 0, 0.5)"),
                        (e.rectButton = !0),
                        (e.isStopPropagation = !0),
                        e.addEvent("trigger", "trigger", a),
                        e.addEvent("update", "update", () => {
                            (Input.isTriggered("ok") || Input.isTriggered("escape") || TouchInput.isCancelled()) && a();
                        }),
                        (PD_UIManager.disableColliders_exceptUI_names = ["map_pauseBase"]);
                }
            } else {
                if (Menu.skipEnable) {
                    if (!PD_UIManager.list.eventSkipButton) {
                        const e = PD_UIManager.base.picture.addUI("eventSkipButton");
                        e.loadImage("mapUI/eventSkip"), (e.frame = [0, 0, 108, 38]), (e.anchor = [0.5, 0.5]), e.move(756, 25), (e.rectButton = !0), (e.isStopPropagation = !0);
                        const a = () => {
                                e.frameY = 0;
                            },
                            n = () => {
                                e.frameY = 38;
                            };
                        1 === Menu.skipSpeed ? a() : n(),
                            e.addEvent("trigger", "trigger", () => {
                                1 === Menu.skipSpeed ? (n(), (Menu.skipSpeed = 32)) : (a(), (Menu.skipSpeed = 1));
                            });
                    }
                } else {
                    1 !== Menu.skipSpeed && (Menu.skipSpeed = 1);
                    const e = PD_UIManager.list.eventSkipButton;
                    e && e.delete();
                }
                g.call(this);
            }
        };
        const u = SceneManager.goto;
        SceneManager.goto = function (e) {
            e !== Scene_Map && ((Menu.skipEnable = !1), (Menu.skipSpeed = 1), PD_UIManager.list && PD_UIManager.list.eventSkipButton && PD_UIManager.list.eventSkipButton.delete()), u.call(this, e);
        };
        const p = Game_Timer.prototype.update;
        Game_Timer.prototype.update = function (e) {
            $gameMap._mapId === Setting.pc_mapId || $gameSwitches.value(483) || p.call(this, e);
        };
    })(),
    (Option.fontSize = 24),
    (Option.fontColor = "rgb(192,230,212)"),
    (Option.outline = 0),
    (Option.optionFullScreen = null),
    (Option.optionLanguage = null),
    (Option.optionMessageSE = null),
    (Option.languageList = ["日本語", "英語", "中国語（簡体字）", "韓国語"]),
    (Option.languageTexts = ["日本語", "Русский", "中文(简体)", "한국어"]),
    (Option.selectItemIndex = 1),
    (Option.creditPageNum = null),
    (Option.creditDB = {}),
    PD_Setup.addReadyLoadCompressFile("_database/credit.csv", (e) => {
        Option.creditDB = PD_File.convertCSV_to_Array(e);
    }),
    (function () {
        "use strict";
        (Scene_Options.prototype = Object.create(Scene_Original.prototype)),
            (Scene_Options.prototype.constructor = Scene_Options),
            (Scene_Options.prototype.initialize = function () {
                Scene_Original.prototype.initialize.call(this),
                    (this._fadeInEnable = !1),
                    (this._fadeOutEnable = !1),
                    (this._fadeOutAudioEnable = !1),
                    (Option.optionFullScreen = $option.fullScreen),
                    (Option.optionLanguage = $option.language),
                    (Option.optionMessageSE = $option.messageSE),
                    (Option.selectItemIndex = 1);
            }),
            (Scene_Options.prototype.create = function () {
                Scene_Original.prototype.create.call(this);
                const e = PD_UIManager.base.lower.addUI("background", 816, 624);
                (e.opacity = 183),
                    (e._bitmap = SceneManager.backgroundBitmap()),
                    (e.sprite.filters = [new PIXI.filters.BlurFilter()]),
                    (e.rectButton = !0),
                    e.addEvent("trigger", "trigger", () => {
                        this.endOption();
                    }),
                    PD_UIManager.loadDatabase("option/option_Base", PD_UIManager.base.lower);
                PD_UIManager.list.option_Item1_Button.addEvent("trigger", "trigger", () => {
                    Graphics._isFullScreen() ? ((Option.optionFullScreen = !1), Graphics._cancelFullScreen()) : ((Option.optionFullScreen = !0), Graphics._requestFullScreen()), this.updateLanguage();
                }),
                    PD_UIManager.list.option_Item1_Select_L.addEvent("trigger", "trigger", () => {
                        PD_UIManager.list.option_Item1_Button._e.trigger.trigger();
                    }),
                    PD_UIManager.list.option_Item1_Select_R.addEvent("trigger", "trigger", () => {
                        PD_UIManager.list.option_Item1_Button._e.trigger.trigger();
                    }),
                    PD_UIManager.list.option_Item1_BG.addEvent("mouseover", "mouseover", () => {
                        (Option.selectItemIndex = 1), this.updateItemSelect();
                    });
                PD_UIManager.list.option_Item2_Button.addEvent("trigger", "trigger", (e) => {
                    const a = Option.languageList,
                        n = a.indexOf(Option.optionLanguage);
                    (Option.optionLanguage = -1 !== e ? (n === a.length - 1 ? (Option.optionLanguage = a[0]) : a[n + 1]) : 0 === n ? (Option.optionLanguage = a[a.length - 1]) : a[n - 1]), this.updateLanguage();
                }),
                    PD_UIManager.list.option_Item2_Select_L.addEvent("trigger", "trigger", () => {
                        PD_UIManager.list.option_Item2_Button._e.trigger.trigger(-1);
                    }),
                    PD_UIManager.list.option_Item2_Select_R.addEvent("trigger", "trigger", () => {
                        PD_UIManager.list.option_Item2_Button._e.trigger.trigger(1);
                    }),
                    PD_UIManager.list.option_Item2_BG.addEvent("mouseover", "mouseover", () => {
                        (Option.selectItemIndex = 2), this.updateItemSelect();
                    });
                const a = PD_UIManager.list.option_Item3_Bar,
                    n = PD_UIManager.list.option_Item3_Slider;
                PD_UIManager.list.option_Item3_Collider.addDragEvent(
                    "drag",
                    () => {
                        this.setVolumeFunc(3, ["masterVolume"]), SoundManager.playCursor();
                    },
                    () => {
                        this.setVolumeFunc(3, ["masterVolume"]);
                    },
                    () => {
                        SoundManager.playCursor();
                    },
                    !1,
                    !1,
                    1
                ),
                    (n.x = (ConfigManager.masterVolume * a.width) / 100),
                    (PD_UIManager.list.option_Item3_Gage.frameWidth = n.x ? n.x : 1),
                    this.updateVolumePer(3, ConfigManager.masterVolume),
                    PD_UIManager.list.option_Item3_BG.addEvent("mouseover", "mouseover", () => {
                        (Option.selectItemIndex = 3), this.updateItemSelect();
                    });
                const t = PD_UIManager.list.option_Item4_Bar,
                    i = PD_UIManager.list.option_Item4_Slider;
                PD_UIManager.list.option_Item4_Collider.addDragEvent(
                    "drag",
                    () => {
                        this.setVolumeFunc(4, ["bgmVolume", "bgsVolume", "meVolume"]), SoundManager.playCursor();
                    },
                    () => {
                        this.setVolumeFunc(4, ["bgmVolume", "bgsVolume", "meVolume"]);
                    },
                    () => {
                        SoundManager.playCursor();
                    },
                    !1,
                    !1,
                    1
                ),
                    (i.x = (ConfigManager.bgmVolume * t.width) / 100),
                    (PD_UIManager.list.option_Item4_Gage.frameWidth = i.x ? i.x : 1),
                    this.updateVolumePer(4, ConfigManager.bgmVolume),
                    PD_UIManager.list.option_Item4_BG.addEvent("mouseover", "mouseover", () => {
                        (Option.selectItemIndex = 4), this.updateItemSelect();
                    });
                const o = PD_UIManager.list.option_Item5_Bar,
                    r = PD_UIManager.list.option_Item5_Slider;
                PD_UIManager.list.option_Item5_Collider.addDragEvent(
                    "drag",
                    () => {
                        this.setVolumeFunc(5, ["seVolume"]), SoundManager.playCursor();
                    },
                    () => {
                        this.setVolumeFunc(5, ["seVolume"]);
                    },
                    () => {
                        SoundManager.playCursor();
                    },
                    !1,
                    !1,
                    1
                ),
                    (r.x = (ConfigManager.seVolume * o.width) / 100),
                    (PD_UIManager.list.option_Item5_Gage.frameWidth = r.x ? r.x : 1),
                    this.updateVolumePer(5, ConfigManager.seVolume),
                    PD_UIManager.list.option_Item5_BG.addEvent("mouseover", "mouseover", () => {
                        (Option.selectItemIndex = 5), this.updateItemSelect();
                    });
                PD_UIManager.list.option_Item6_Button.addEvent("trigger", "trigger", () => {
                    (Option.optionMessageSE = !Option.optionMessageSE), this.updateLanguage();
                }),
                    PD_UIManager.list.option_Item6_Select_L.addEvent("trigger", "trigger", () => {
                        PD_UIManager.list.option_Item6_Button._e.trigger.trigger();
                    }),
                    PD_UIManager.list.option_Item6_Select_R.addEvent("trigger", "trigger", () => {
                        PD_UIManager.list.option_Item6_Button._e.trigger.trigger();
                    }),
                    PD_UIManager.list.option_Item6_BG.addEvent("mouseover", "mouseover", () => {
                        (Option.selectItemIndex = 6), this.updateItemSelect();
                    });
                PD_UIManager.list.option_Item7_BG.addEvent("trigger", "trigger", () => {
                    this.createCredit();
                }),
                    PD_UIManager.list.option_Item7_BG.addEvent("mouseover", "mouseover", () => {
                        (Option.selectItemIndex = 7), this.updateItemSelect();
                    }),
                    this.updateItemSelect(),
                    this.updateLanguage();
            }),
            (Scene_Options.prototype.start = function () {
                Scene_Original.prototype.start.call(this);
            }),
            (Scene_Options.prototype.update = function () {
                Scene_Original.prototype.update.call(this),
                    null !== Option.creditPageNum
                        ? 255 === PD_UIManager.list.credit_Base.opacity && (Input.isTriggered("ok") && this.updateNextCredit(), (Input.isTriggered("menu") || TouchInput.isCancelled()) && this.deleteCredit())
                        : SceneManager.isSceneChanging() ||
                          (Input.isRepeated("down")
                              ? ((Option.selectItemIndex = Option.selectItemIndex >= 7 ? 1 : Option.selectItemIndex + 1), this.updateItemSelect())
                              : Input.isRepeated("up")
                              ? ((Option.selectItemIndex = Option.selectItemIndex <= 1 ? 7 : Option.selectItemIndex - 1), this.updateItemSelect())
                              : Input.isRepeated("left")
                              ? this.updateItemParam(-1)
                              : Input.isRepeated("right")
                              ? this.updateItemParam(1)
                              : Input.isRepeated("ok")
                              ? this.updateItemParam(0)
                              : (Input.isTriggered("menu") || TouchInput.isCancelled()) && this.endOption());
            }),
            (Scene_Options.prototype.endOption = function () {
                $gameMap.requestRefresh(), this.popScene();
            }),
            (Scene_Options.prototype.terminate = function () {
                ($option.fullScreen = !!Graphics._isFullScreen()),
                    ($option.language = Option.optionLanguage),
                    ($option.messageSE = Option.optionMessageSE),
                    PD_SaveDataManager.saveOptionFile()
                        .then(() => {
                            Scene_Original.prototype.terminate.call(this), ConfigManager.save();
                        })
                        .catch(() => {
                            Scene_Original.prototype.terminate.call(this), ConfigManager.save();
                        });
            }),
            (Scene_Options.prototype.updateItemSelect = function () {
                for (let e = 1; e <= 7; e++) PD_UIManager.list["option_Item" + e + "_Select"].opacity = 0;
                PD_UIManager.list["option_Item" + Option.selectItemIndex + "_Select"].opacity = 255;
            }),
            (Scene_Options.prototype.updateLanguage = function () {
                const e = PD_UIManager.list.option_Item1_Text;
                e.clear(), e.drawTextEX(PD_Translation.transDB["フルスクリーン"][Option.optionLanguage], 0, 0, e.width, e.height, "left", Option.fontSize, Option.fontColor, Option.outline);
                const a = PD_UIManager.list.option_Item1_ButtonText;
                a.clear(), a.drawTextEX(Option.optionFullScreen ? "ON" : "OFF", 0, 0, a.width, a.height, "center", Option.fontSize, Option.fontColor, Option.outline);
                const n = PD_UIManager.list.option_Item2_Text;
                n.clear(), n.drawTextEX(PD_Translation.transDB["言語設定"][Option.optionLanguage], 0, 0, n.width, n.height, "left", Option.fontSize, Option.fontColor, Option.outline);
                const t = Option.languageList,
                    i = Option.languageTexts,
                    o = PD_UIManager.list.option_Item2_ButtonText;
                o.clear(), o.drawTextEX(i[t.indexOf(Option.optionLanguage)], 0, 0, o.width, o.height, "center", Option.fontSize, Option.fontColor, Option.outline);
                const r = PD_UIManager.list.option_Item3_Text;
                r.clear(), r.drawTextEX(PD_Translation.transDB["全体音量"][Option.optionLanguage], 0, 0, r.width, r.height, "left", Option.fontSize, Option.fontColor, Option.outline);
                const l = PD_UIManager.list.option_Item4_Text;
                l.clear(), l.drawTextEX(PD_Translation.transDB["BGM 音量"][Option.optionLanguage], 0, 0, l.width, l.height, "left", Option.fontSize, Option.fontColor, Option.outline);
                const s = PD_UIManager.list.option_Item5_Text;
                s.clear(), s.drawTextEX(PD_Translation.transDB["SE 音量"][Option.optionLanguage], 0, 0, s.width, s.height, "left", Option.fontSize, Option.fontColor, Option.outline);
                const c = PD_UIManager.list.option_Item6_Text;
                c.clear(), c.drawTextEX(PD_Translation.transDB["メッセージ音"][Option.optionLanguage], 0, 0, c.width, c.height, "left", Option.fontSize, Option.fontColor, Option.outline);
                const _ = PD_UIManager.list.option_Item6_ButtonText;
                _.clear(), _.drawTextEX(Option.optionMessageSE ? "ON" : "OFF", 0, 0, _.width, _.height, "center", Option.fontSize, Option.fontColor, Option.outline);
            }),
            (Scene_Options.prototype.updateItemParam = function (e) {
                const a = (a) => {
                    let n = 10 * (-1 === e ? Math.ceil(a / 10) : Math.floor(a / 10));
                    return e ? (n += 10 * e) : (n = 100 === n ? 0 : n + 10), n < 0 ? (n = 0) : n > 100 && (n = 100), n;
                };
                switch (Option.selectItemIndex) {
                    case 1:
                        PD_UIManager.list.option_Item1_Button._e.trigger.trigger(e);
                        break;
                    case 2:
                        PD_UIManager.list.option_Item2_Button._e.trigger.trigger(e);
                        break;
                    case 3:
                        this.setVolumeFunc(3, ["masterVolume"], a(ConfigManager.masterVolume)), SoundManager.playCursor();
                        break;
                    case 4:
                        this.setVolumeFunc(4, ["bgmVolume", "bgsVolume", "meVolume"], a(ConfigManager.bgmVolume)), SoundManager.playCursor();
                        break;
                    case 5:
                        this.setVolumeFunc(5, ["seVolume"], a(ConfigManager.seVolume)), SoundManager.playCursor();
                        break;
                    case 6:
                        PD_UIManager.list.option_Item6_Button._e.trigger.trigger(e);
                        break;
                    case 7:
                        0 === e && PD_UIManager.list.option_Item7_BG._e.trigger.trigger(e);
                }
            }),
            (Scene_Options.prototype.setVolumeFunc = function (e, a, n) {
                const t = PD_UIManager.list["option_Item" + e + "_Bar"],
                    i = PD_UIManager.list["option_Item" + e + "_Slider"];
                void 0 === n && (n = Math.round(((TouchInput.x - t.realX) / t.width) * 100)),
                    (i.x = (n * t.width) / 100),
                    i.x < 0 ? (i.x = 0) : i.x > t.width && (i.x = t.width),
                    (PD_UIManager.list["option_Item" + e + "_Gage"].frameWidth = i.x),
                    this.updateVolumePer(e, n);
                for (let e = 0; e < a.length; e++) this.changeVolume(a[e], n);
            }),
            (Scene_Options.prototype.updateVolumePer = function (e, a) {
                a = Math.floor(a.clamp(0, 100));
                const n = PD_UIManager.list["option_Item" + e + "_Par"];
                n.clear(), n.drawTextEX(a + "%", 0, 0, n.width, n.height, "right", 20, Option.fontColor, Option.outline);
            }),
            (Scene_Options.prototype.changeVolume = function (e, a) {
                (a = Math.floor(a.clamp(0, 100))), ConfigManager[e] !== a && (ConfigManager[e] = a);
            }),
            (Scene_Options.prototype.createCredit = function () {
                if (PD_UIManager.list.credit_Base || null !== Option.creditPageNum) return;
                Option.creditPageNum = 1;
                const e = PD_UIManager.base.upper.addUI("credit_Base", 816, 624);
                (e.rectButton = !0),
                    (e.isStopPropagation = !0),
                    e.fillAll("black"),
                    e.loadImage("pc/idealHack/idealHack_window_full"),
                    (e.opacity = 0),
                    e.addEvent("trigger", "trigger", () => {
                        this.updateNextCredit();
                    }),
                    e.animeOpacity(255, 12, !0),
                    e.animeFunction(() => {
                        this.updateCredit();
                    }),
                    e.playAnimation();
            }),
            (Scene_Options.prototype.updateNextCredit = function () {
                255 === PD_UIManager.list.credit_Base.opacity && (Option.creditPageNum++, this.updateCredit());
            }),
            (Scene_Options.prototype.updateCredit = function () {
                const e = [],
                    a = [],
                    n = 1 + ("日本語" === Option.optionLanguage ? 0 : 2);
                for (let t = 1; t < Option.creditDB.length; t++) Option.creditDB[t][0] === Option.creditPageNum && (e.push(Option.creditDB[t][n]), a.push(Option.creditDB[t][n + 1]));
                if (0 === e.length) return void this.deleteCredit();
                const t = PD_UIManager.list.credit_Base;
                t.deleteAnimation(), PD_UIManager.list.credit_TextBase && PD_UIManager.list.credit_TextBase.delete();
                const i = t.addUI("credit_TextBase");
                i.animationIndependence = !0;
                for (let n = 0; n < e.length; n++)
                    t.animeWait(12),
                        t.animeFunction(() => {
                            const t = i.addUI("credit_TextBase_post_" + n, 400, 30);
                            t.move(40, 42 * n + 42);
                            const o = t.createInfo_drawTextEX_EX(e[n], 0, 0, t.width, 30, "left", 20, "rgb(192,230,212)", 0, void 0, Setting.fontDB[1][1]["日本語"][0]);
                            for (let e = 0, a = o[0].drawInfos; e < a.length; e++)
                                t.animeWait(2),
                                    t.animeFunction(() => {
                                        a[e].drawFunc();
                                    });
                            t.animeWait(2),
                                t.animeFunction(() => {
                                    const t = i.addUI("credit_TextBase_name_" + n, 336, 30);
                                    t.move(440, 42 * n + 42);
                                    const o = t.createInfo_drawTextEX_EX(a[n], 0, 0, t.width, 30, "left", 20, "rgb(192,230,212)", 0, void 0, Setting.fontDB[1][1]["日本語"][0]);
                                    for (let e = 0, a = o[0].drawInfos; e < a.length; e++)
                                        t.animeWait(2),
                                            t.animeFunction(() => {
                                                a[e].drawFunc();
                                            });
                                    n === e.length - 1 &&
                                        (t.animeWait(2),
                                        t.animeFunction(() => {
                                            const e = i.addUI("credit_TextBase_wait", 3, 24);
                                            e.fillAll("rgb(192,230,212)"),
                                                e.move(t.x + o[0].textWidth + 24, t.y + 2),
                                                (e.opacity = 0),
                                                e.animeOpacity(255, 1, !0),
                                                e.animeWait(30, !0),
                                                e.animeOpacity(0, 1, !0),
                                                e.animeWait(30, !0),
                                                e.animeLoop(),
                                                e.playAnimation();
                                        })),
                                        t.playAnimation();
                                }),
                                t.playAnimation();
                        });
                t.playAnimation();
            }),
            (Scene_Options.prototype.deleteCredit = function () {
                (Option.creditPageNum = null), PD_UIManager.list.credit_TextBase && PD_UIManager.list.credit_TextBase.delete();
                const e = PD_UIManager.list.credit_Base;
                e.deleteAnimation(), e.animeOpacity(0, 12, !0), e.animeDelete(), e.playAnimation();
            });
    })(),
    (Title.commands = [0, 1, 2, 3]),
    (Title.selectIndex = 1),
    (Title.create = function (e) {
        if (PD_UIManager.list.Title_Base) return;
        let a;
        switch ((Game.initLanguage(), AudioDatabase.playBGM("ジョバンニのテーマ"), $gamePlayer.setTransparent(!0), $option.language)) {
            case "日本語":
                a = "ja";
                break;
            case "英語":
                a = "en";
                break;
            case "中国語（簡体字）":
                a = "zh";
                break;
            case "韓国語":
                a = "ko";
        }
        PD_UIManager.loadDatabase("title/Title_Base", PD_UIManager.base.lower);
        const n = PD_UIManager.list.Title_Select_Base;
        n.visible = !1;
        const t = PD_UIManager.list.Title_Logo;
        t.loadImage("title/title_logo_" + a),
            t.setAnimation("title/Title_Logo"),
            t.animeFunction(() => {
                for (let a = 0, n = Title.commands.length; a < n; a++) {
                    const n = Title.commands[a],
                        t = PD_UIManager.list["Title_Select_" + n];
                    (t.opacity = 0),
                        t.addEvent("trigger", "trigger", () => {
                            AudioDatabase.playSE("PC_クリック音"), Title["command_" + n](e);
                        }),
                        t.addEvent("mouseover", "mouseover", () => {
                            PD_UIManager.list.dialog_Base || (Title.selectIndex !== n && ((Title.selectIndex = n), Title.updateSelectUI()));
                        }),
                        DataManager.isAnySavefileExists() ? 0 === n && (Title.selectIndex = n) : 1 === n && (Title.selectIndex = n);
                }
                n.addEvent("update", "update", () => {
                    if (!PD_UIManager.list.dialog_Base) {
                        for (let e = 0, a = Title.commands.length; e < a; e++)
                            if (4 === Title.selectIndex) {
                                if (Input.isRepeated("right")) {
                                    (Title.selectIndex = 2), Title.updateSelectUI();
                                    break;
                                }
                                if (Input.isRepeated("left") || Input.isRepeated("up")) {
                                    (Title.selectIndex = 3), Title.updateSelectUI();
                                    break;
                                }
                                if (Input.isRepeated("down")) {
                                    (Title.selectIndex = 1), Title.updateSelectUI();
                                    break;
                                }
                            } else {
                                if ((2 === Title.selectIndex && Input.isRepeated("left")) || (1 === Title.selectIndex && Input.isRepeated("up")) || (3 === Title.selectIndex && (Input.isRepeated("right") || Input.isRepeated("down")))) {
                                    (Title.selectIndex = 4), Title.updateSelectUI();
                                    break;
                                }
                                if (Title.selectIndex === e) {
                                    if (Input.isRepeated("right")) {
                                        (Title.selectIndex = ((Title.selectIndex + 1) % 2) + (Title.selectIndex >= 2 ? 2 : 0)), Title.updateSelectUI();
                                        break;
                                    }
                                    if (Input.isRepeated("left")) {
                                        (Title.selectIndex = ((Title.selectIndex + 1) % 2) + (Title.selectIndex >= 2 ? 2 : 0)), Title.updateSelectUI();
                                        break;
                                    }
                                    if (Input.isRepeated("down")) {
                                        (Title.selectIndex = (Title.selectIndex + 2) % 4), Title.updateSelectUI();
                                        break;
                                    }
                                    if (Input.isRepeated("up")) {
                                        (Title.selectIndex = (Title.selectIndex + 2) % 4), Title.updateSelectUI();
                                        break;
                                    }
                                }
                            }
                        Input.isRepeated("ok") && (AudioDatabase.playSE("PC_クリック音"), Title["command_" + Title.selectIndex](e));
                    }
                }),
                    (n.visible = !0),
                    Title.updateSelectUI();
                let a = !1;
                for (let e = 0, n = Game.hideChapterIDs, t = n.length; e < t; e++) {
                    for (let t = 1, i = n[e], o = DataManager._globalInfo, r = o.length; t < r; t++) {
                        const e = o[t];
                        if (e && e.memoryID && e.memoryID === i) {
                            a = !0;
                            break;
                        }
                    }
                    if (a) break;
                }
                if (Memory.isLastChapter(Game.deployChapterIDs[Game.deployChapterIDs.length - 1]) && !a) {
                    const e = PD_UIManager.list.Title_Image_Chapter;
                    e.animeOpacity(128, 1, !0), e.animeWait(30), e.animeOpacity(255, 1, !0), e.animeWait(30), e.animeLoop(), e.playAnimation();
                } else PD_UIManager.list.Title_Notice_Chapter.visible = !1;
                const t = PD_UIManager.list.Title_Exit_Base;
                t.addEvent("trigger", "trigger", () => {
                    AudioDatabase.playSE("PC_クリック音"), Title.command_4();
                }),
                    t.addEvent("mouseover", "mouseover", () => {
                        PD_UIManager.list.dialog_Base || ((Title.selectIndex = 4), Title.updateSelectUI());
                    }),
                    t.addEvent("mouseleave", "mouseleave", () => {
                        PD_UIManager.list.dialog_Base || ((Title.selectIndex = 3), Title.updateSelectUI());
                    });
            }),
            t.playAnimation();
    }),
    (Title.updateSelectUI = function () {
        const e = PD_UIManager.list.Title_Exit_Base;
        4 === Title.selectIndex ? (e.frameX = 34) : (e.frameX = 0);
        for (let e = 0, a = Title.commands.length; e < a; e++) {
            const a = Title.commands[e],
                n = PD_UIManager.list["Title_Select_" + a];
            Title.selectIndex === a
                ? (n.deleteAnimation(), n.animeOpacity(255, 0, !1), n.animeWait(20), n.animeOpacity(0, 0, !1), n.animeWait(20), n.animeLoop(), n.playAnimation())
                : n.isPlayAnimation && ((n.opacity = 0), n.deleteAnimation());
        }
    }),
    (Title.command_0 = function () {
        if (DataManager._globalInfo[0]) {
            AudioManager.fadeOutBgm(1), PD_UIManager.list.Title_Select_Base.delete();
            const e = PD_UIManager.base.upper.addUI("blackout", Graphics.width, Graphics.height);
            e.fillAll("black"),
                (e.opacity = 0),
                e.animeOpacity(255, 30, !0),
                e.animeFunction(() => {
                    Game.loadAutosave();
                }),
                e.playAnimation();
        }
    }),
    (Title.command_1 = function (e) {
        AudioManager.fadeOutBgm(3), PD_UIManager.list.Title_Select_Base.delete();
        const a = PD_UIManager.list.Title_Logo;
        a.deleteAnimation(),
            a.animeOpacity(0, 120, !0),
            a.animeWait(60),
            a.animeFunction(() => {
                $gameScreen.startFadeOut(1),
                    ($gameSelfSwitches._data[[$gameMap.mapId(), e, "A"]] = !0),
                    Game.saveMemory("opening", void 0, !0).then(() => {
                        $gameMap.requestRefresh();
                    });
            }),
            a.playAnimation();
        const n = PD_UIManager.base.upper.addUI("blackout", Graphics.width, Graphics.height);
        n.fillAll("black"), (n.opacity = 0), n.animeWait(120), n.animeOpacity(255, 60, !0), n.playAnimation();
    }),
    (Title.command_2 = function () {
        DataManager._globalInfo.length < 2 || (Game.openMemory(), $gameMap.requestRefresh());
    }),
    (Title.command_3 = function () {
        SceneManager.push(Scene_Options);
    }),
    (Title.command_4 = function () {
        const e = PD_Translation.transData("system_4"),
            a = PD_Translation.transData("はい"),
            n = PD_Translation.transData("いいえ");
        PC.showConfirmDialog(
            PD_UIManager.base.upper,
            e,
            a,
            () => {
                SceneManager.exit();
            },
            n,
            () => {},
            !0,
            !1,
            !0,
            null,
            (bgColor = "rgba(0,0,0,0.72)")
        ),
            PD_UIManager.list.dialog_Base.move(408, 312);
    }),
    (function () {
        "use strict";
        const e = Scene_Title.prototype.start;
        (Scene_Title.prototype.start = function () {
            e.call(this), $option.fullScreen && Graphics._requestFullScreen(), DataManager.setupNewGame(), SceneManager.goto(Scene_Map);
        }),
            (Scene_Title.prototype.startFadeIn = function () {});
    })(),
    (Memory.database = {}),
    (Memory.stageDatas = []),
    (Memory.temp_savefileId = 0);
for (let e = 0; e < Game.affinityList.length; e++) Memory["temp_offset_" + Game.affinityList[e] + "Affinity"] = null;
function PC() {
    throw new Error("This is a static class");
}
function giovanniPC() {
    throw new Error("This is a static class");
}
function cameraPC() {
    throw new Error("This is a static class");
}
function Ihatov_lockPC() {
    throw new Error("This is a static class");
}
function IhatovPC() {
    throw new Error("This is a static class");
}
function CitizenPC() {
    throw new Error("This is a static class");
}
function Citizen2PC() {
    throw new Error("This is a static class");
}
function Citizen3PC() {
    throw new Error("This is a static class");
}
function wiPC() {
    throw new Error("This is a static class");
}
function lovePC() {
    throw new Error("This is a static class");
}
function Hack_lovePC() {
    throw new Error("This is a static class");
}
function mollyPC() {
    throw new Error("This is a static class");
}
function Card() {
    throw new Error("This is a static class");
}
function Todo() {
    throw new Error("This is a static class");
}
function PC_Text() {
    throw new Error("This is a static class");
}
function PC_Progra() {
    throw new Error("This is a static class");
}
function PC_IdealHack() {
    throw new Error("This is a static class");
}
function PC_Message() {
    throw new Error("This is a static class");
}
function PC_SNS() {
    throw new Error("This is a static class");
}
function PC_Document() {
    throw new Error("This is a static class");
}
function PC_Audio() {
    throw new Error("This is a static class");
}
function PC_Item() {
    throw new Error("This is a static class");
}
function PC_Data() {
    throw new Error("This is a static class");
}
function Setting() {
    throw new Error("This is a static class");
}
function AudioDatabase() {
    throw new Error("This is a static class");
}
function TrainAnime() {
    throw new Error("This is a static class");
}
function StillAnime() {
    throw new Error("This is a static class");
}
function Hack_0_Opening() {
    throw new Error("This is a static class");
}
function Hack_1_karelianOpen() {
    throw new Error("This is a static class");
}
function Hack_2_trainChain() {
    throw new Error("This is a static class");
}
function Hack_3_zeroDayProtect() {
    throw new Error("This is a static class");
}
function Hack_3_zeroDayProtect_2() {
    throw new Error("This is a static class");
}
function Hack_3_zeroDayProtect_3() {
    throw new Error("This is a static class");
}
function Hack_4_lineHack() {
    throw new Error("This is a static class");
}
function Hack_4_lineHack_1() {
    throw new Error("This is a static class");
}
function Hack_4_lineHack_2() {
    throw new Error("This is a static class");
}
function Hack_5_digiNum() {
    throw new Error("This is a static class");
}
function Hack_5_digiNum_1() {
    throw new Error("This is a static class");
}
function Hack_6_bloodStill() {
    throw new Error("This is a static class");
}
function Hack_6_talkHack() {
    throw new Error("This is a static class");
}
function Hack_6_talkHack_1() {
    throw new Error("This is a static class");
}
function Hack_7_stage2() {
    throw new Error("This is a static class");
}
(Memory.temp_loadSaveFileId = null),
    (Memory.temp_load_disableSave = null),
    (Memory.temp_load_disableAppear = !1),
    PD_Setup.addReadyLoadCompressFile("_database/memory.csv", (e) => {
        const a = PD_File.convertCSV_to_Array(e);
        for (let e = 1; e < a.length; e++) {
            const n = a[e],
                t = n[0],
                i = n[1],
                o = n[2],
                r = n[3],
                l = n[4];
            (Memory.database[t] = { メモリーID: t, ステージ番号: i, チャプター番号: o, "DAY／": r, saveText翻訳ID: l }), Memory.stageDatas[i] || (Memory.stageDatas[i] = []), Memory.stageDatas[i].push(Memory.database[t]);
        }
    }),
    (Memory.initialize = function () {
        (Memory.stageIndex = 1),
            (Memory.chapterIndex = 0),
            (Memory.enableStageNum = Memory.checkEnableStageNum()),
            (Memory.isNewStageAppear = 1 === Memory.getEnableSaveInfos(Memory.enableStageNum).length),
            (Memory.chapterCatalog = null),
            (Memory.isLoading = !1),
            (Memory.isLoadSuccess = !1),
            (Memory.mousePosition = null),
            (Memory.stageListY = []),
            (Memory.appearChapter_enableControl = !0);
    }),
    (Memory.checkEnableStageNum = function () {
        const e = Memory.stageDatas.length > 0 ? Memory.stageDatas.length - 1 : 0;
        let a = 1;
        for (let n = 1; n <= e; n++) Memory.getEnableSaveInfos(n).length > 0 && (a = n);
        return a;
    }),
    (Memory.getEnableSaveInfos = function (e) {
        if (!Memory.stageDatas[e]) return [];
        const a = [];
        for (let n = 0, t = Memory.stageDatas[e], i = t.length; n < i; n++)
            for (let e = 1, i = t[n], o = DataManager._globalInfo, r = o.length; e < r; e++) {
                const n = o[e];
                if (n && n.memoryID && n.memoryID === i["メモリーID"] && !Game.hideChapterIDs.includes(n.memoryID)) {
                    a.push({ savefileId: e, glovalInfo: n, database: i });
                    break;
                }
            }
        return a;
    }),
    (Memory.isLastChapter = function (e) {
        const a = Memory.getEnableSaveInfos(Memory.checkEnableStageNum()),
            n = a[a.length - 1];
        return !!(n && n.glovalInfo && n.glovalInfo.memoryID && n.glovalInfo.memoryID === e);
    }),
    (Memory.create = function (e) {
        return new Promise((a) => {
            Memory.initialize(), PD_UIManager.loadDatabase("memory/memory_Base", PD_UIManager.base.upper);
            const n = PD_UIManager.list.memory_BG;
            n.setAnimation("pc/PC_Base", "open"),
                n.animeFunction(() => {
                    Memory.createStage(e).then(() => {
                        a();
                    });
                }),
                n.playAnimation();
        });
    }),
    (Memory.createStage = function (e) {
        return new Promise((a) => {
            const n = PD_UIManager.loadDatabase("memory/memory_Stage_Base", PD_UIManager.list.memory_Base);
            if ("英語" === $option.language) for (let e = 1; e <= 6; e++) PD_UIManager.list["memory_Stage" + e + "_Main"].y = 0;
            else PD_UIManager.list.memory_Stage_SelectPointa.y = -15;
            const t = () => {
                PD_UIManager.list.memory_Stage_SelectBG.visible = !1;
                const e = PD_UIManager.list["memory_Stage" + Memory.enableStageNum + "_Base"];
                e.deleteAnimation(), (Memory.stageListY[Memory.enableStageNum] = e.y);
                const a = e.y;
                return (
                    e.animeOpacity(0, 60, !0),
                    e.animeFunction(() => {
                        Memory.stage_updateSelectUI(Memory.stageIndex);
                    }),
                    e.animeMoveY(a + 20, 1, !0),
                    e.animeMoveY(a, 60, !1, "easeOutCubic"),
                    e.animeOpacity(255, 60, !0),
                    e.animeFunction(() => {
                        (Memory.stageIndex = Memory.enableStageNum), Memory.stage_updateSelectUI(Memory.stageIndex), (Memory.isNewStageAppear = !1);
                    }),
                    e
                );
            };
            if (e) {
                let i = 0;
                for (let a = 1, n = Memory.stageDatas, t = n.length; a < t; a++) {
                    for (let t = 0, o = n[a], r = o.length; t < r; t++)
                        if (o[t]["メモリーID"] === e) {
                            i = a;
                            break;
                        }
                    if (i) break;
                }
                if ((i || (i = Memory.enableStageNum), Memory.isNewStageAppear && i === Memory.enableStageNum)) {
                    (Memory.stageIndex = 0), Memory.enableStageNum--, Memory.stage_updateSelectUI(Memory.stageIndex), Memory.enableStageNum++;
                    const n = t();
                    n.animeWait(30),
                        n.animeFunction(() => {
                            Memory.createChapter(e).then(() => {
                                a();
                            });
                        }),
                        n.playAnimation();
                } else
                    (n.opacity = 0),
                        (Memory.stageIndex = i),
                        (Memory.enableStageNum = i),
                        Memory.createChapter(e).then(() => {
                            a();
                        });
            } else {
                for (let e = 1; e <= 6; e++) {
                    const a = PD_UIManager.list["memory_Stage" + e + "_Base"];
                    a.addEvent("trigger", "trigger", () => {
                        !Memory.isNewStageAppear && e <= Memory.enableStageNum && (AudioDatabase.playSE("PC_クリック音"), Memory.createChapter());
                    }),
                        a.addEvent("mouseover", "mouseover", () => {
                            Memory.isNewStageAppear || Memory.stageIndex === e || Memory.stage_updateSelectUI(e);
                        }),
                        (Memory.stageListY[e] = a.y);
                }
                if (
                    (n.addEvent("update", "update", () => {
                        Memory.isNewStageAppear ||
                            (Input.isRepeated("down")
                                ? Memory.stage_updateSelectUI(Memory.stageIndex + 1 <= Memory.enableStageNum ? Memory.stageIndex + 1 : 1)
                                : Input.isRepeated("up") && Memory.stage_updateSelectUI(Memory.stageIndex - 1 >= 1 ? Memory.stageIndex - 1 : Memory.enableStageNum),
                            Input.isTriggered("ok") && (AudioDatabase.playSE("PC_クリック音"), Memory.createChapter()));
                    }),
                    Memory.isNewStageAppear ? ((Memory.stageIndex = 0), Memory.enableStageNum--) : (Memory.stageIndex = Memory.enableStageNum),
                    Memory.stage_updateSelectUI(Memory.stageIndex),
                    Memory.isNewStageAppear)
                ) {
                    Memory.enableStageNum++;
                    t().playAnimation();
                }
                a();
            }
        });
    }),
    (Memory.stage_updateSelectUI = function (e = 1) {
        e > 0 && e <= Memory.enableStageNum && !PD_UIManager.list.memory_Stage_Base.isPlayAnimation && (Memory.stageIndex = e);
        for (let e = 1; e <= 6; e++) {
            const a = PD_UIManager.list["memory_Stage" + e + "_Main"],
                n = PD_UIManager.list["memory_Stage" + e + "_Sub"];
            e > Memory.enableStageNum
                ? ((a.frameY = 0), (a.opacity = 77), (n.visible = !1))
                : Memory.stageIndex === e
                ? ((a.frameY = 68), (a.opacity = 255), (n.visible = !0), (n.frameY = 20), (PD_UIManager.list.memory_Stage_SelectBG.y = PD_UIManager.list["memory_Stage" + e + "_Base"].y))
                : ((a.frameY = 34), (a.opacity = 255), (n.visible = !0), (n.frameY = 0)),
                "英語" === $option.language && (n.visible = !1);
        }
    }),
    (Memory.createChapter = function (e) {
        return new Promise((a) => {
            const n = PD_UIManager.list.memory_Stage_Base;
            n.deleteAnimation();
            const t = n.y - Memory.stageListY[Memory.stageIndex];
            n.animeMoveY(2 * t, 10, !1, "easeOutCubic"),
                n.animeScale(2, 2, 10, !1, "easeOutCubic"),
                n.animeOpacity(0, 10, !0, "easeOutCubic"),
                n.animeFunction(() => {
                    PD_UIManager.list.memory_Stage_Base.delete();
                    const n = PD_UIManager.loadDatabase("memory/memory_Chapter_Base", PD_UIManager.list.memory_Base);
                    if ("英語" === $option.language) for (let e = 1; e <= 6; e++) PD_UIManager.list["memory_Chapter_Title" + e + "_Sub"].visible = !1;
                    if (e)
                        return void Memory.chapter_updateSelectUI(void 0, e).then(() => {
                            a();
                        });
                    const t = PD_UIManager.list.memory_Chapter_leftButton;
                    t.setAnimation("Animation/clickButton_2"),
                        (t.visible = !1),
                        Memory.enableStageNum > 1 &&
                            ((t.visible = !0),
                            t.addEvent("trigger", "trigger", () => {
                                Memory.appearChapter_enableControl &&
                                    !PD_UIManager.list.memory_Chapter_TitleBase.isPlayAnimation &&
                                    (PD_UIManager.list.memory_confirm_Base ||
                                        (AudioDatabase.playSE("PC_クリック音"), t.playAnimation(), Memory.chapter_updateSelectUI(Memory.stageIndex - 1 >= 1 ? Memory.stageIndex - 1 : Memory.enableStageNum)));
                            }),
                            t.addEvent("mouseover", "mouseover", () => {
                                PD_UIManager.list.memory_confirm_Base || (t.frameX = 40);
                            }),
                            t.addEvent("mouseleave", "mouseleave", () => {
                                t.frameX = 0;
                            }));
                    const i = PD_UIManager.list.memory_Chapter_rightButton;
                    i.setAnimation("Animation/clickButton_2"),
                        (i.visible = !1),
                        Memory.enableStageNum > 1 &&
                            ((i.visible = !0),
                            i.addEvent("trigger", "trigger", () => {
                                Memory.appearChapter_enableControl &&
                                    !PD_UIManager.list.memory_Chapter_TitleBase.isPlayAnimation &&
                                    (PD_UIManager.list.memory_confirm_Base ||
                                        (AudioDatabase.playSE("PC_クリック音"), i.playAnimation(), Memory.chapter_updateSelectUI(Memory.stageIndex + 1 <= Memory.enableStageNum ? Memory.stageIndex + 1 : 1)));
                            }),
                            i.addEvent("mouseover", "mouseover", () => {
                                PD_UIManager.list.memory_confirm_Base || (i.frameX = 40);
                            }),
                            i.addEvent("mouseleave", "mouseleave", () => {
                                i.frameX = 0;
                            })),
                        n.addEvent("update", "update", () => {
                            if (!PD_UIManager.list.messageDialog_Base && !PD_UIManager.list.memory_Chapter_TitleBase.isPlayAnimation && !PD_UIManager.list.memory_confirm_Base) {
                                if (Memory.enableStageNum > 1 && Input.isRepeated("right")) i._e.trigger.trigger();
                                else if (Memory.enableStageNum > 1 && Input.isRepeated("left")) t._e.trigger.trigger();
                                else if (Input.isRepeated("up") && Memory.chapterCatalog && Memory.chapterCatalog.pageNum - 1 >= 0) {
                                    const e = PD_UIManager.list[Memory.chapterCatalog.instanceID + ":memory_Catalog_upButton"];
                                    e && ((Memory.mousePosition = [TouchInput.x, TouchInput.y]), (Memory.chapterIndex = Memory.chapterCatalog.pageNum - 1), e._e.repeat.repeat());
                                } else if (Input.isRepeated("down") && Memory.chapterCatalog && Memory.chapterCatalog.pageNum + 1 < Memory.chapterCatalog.createListUI_Func.length) {
                                    const e = PD_UIManager.list[Memory.chapterCatalog.instanceID + ":memory_Catalog_downButton"];
                                    e && ((Memory.mousePosition = [TouchInput.x, TouchInput.y]), (Memory.chapterIndex = Memory.chapterCatalog.pageNum + 1), e._e.repeat.repeat());
                                }
                                if (Input.isTriggered("ok")) {
                                    if (PD_UIManager.list.memory_confirm_Base) return;
                                    AudioDatabase.playSE("PC_クリック音"), Memory.createChapterLoadModal();
                                }
                                !Memory.mousePosition || (Memory.mousePosition[0] === TouchInput.x && Memory.mousePosition[1] === TouchInput.y) || (Memory.mousePosition = null);
                            }
                        });
                    const o = Game.deployChapterIDs[Game.deployChapterIDs.length - 1];
                    let r = Memory.isLastChapter(o);
                    if (r) {
                        let e = 0;
                        for (let a = 1, n = Memory.stageDatas, t = n.length; a < t; a++) {
                            for (let t = 0, i = n[a], r = i.length; t < r; t++)
                                if (i[t]["メモリーID"] === o) {
                                    e = a;
                                    break;
                                }
                            if (e) break;
                        }
                        Memory.stageIndex !== e && (r = !1);
                    }
                    r ? Memory.chapter_updateSelectUI(void 0, o, !0) : Memory.chapter_updateSelectUI(), a();
                }),
                n.animeDelete(),
                n.playAnimation();
        });
    }),
    (Memory.chapter_updateSelectUI = function (e, a, n) {
        return new Promise((t) => {
            if (Memory.isLoading || SceneManager.isSceneChanging()) return void t();
            if (e) {
                if (e > Memory.enableStageNum) return void t();
                Memory.stageIndex = e;
            }
            Memory.chapterCatalog && Memory.chapterCatalog.delete(), (Memory.chapterCatalog = null), (Memory.appearChapter_enableControl = !a);
            let i = null;
            for (let e = 1; e <= 6; e++)
                Memory.stageIndex === e
                    ? ((i = PD_UIManager.list.memory_Chapter_TitleBase), (i.scale = [0, 0]), (PD_UIManager.list["memory_Chapter_Title" + e + "_Main"].visible = !0))
                    : (PD_UIManager.list["memory_Chapter_Title" + e + "_Main"].visible = !1);
            i.deleteAnimation(),
                i.animeScale(1, 1, 10, !0, "easeOutCubic"),
                i.animeFunction(() => {
                    const e = [],
                        i = Memory.getEnableSaveInfos(Memory.stageIndex);
                    for (let n = 0, t = i.length; n < t; n++) {
                        const t = i[n].savefileId,
                            o = i[n].glovalInfo,
                            r = i[n].database;
                        if (o.memoryID && o.memoryID === r["メモリーID"]) {
                            const n = e.length;
                            if (
                                (e.push((e, a) => {
                                    const i = PD_UIManager.loadDatabase("memory/memory_Item_Base", e, a.instanceID + "_" + n);
                                    (i.animationIndependence = !0),
                                        i.addEvent("trigger", "trigger", () => {
                                            Memory.appearChapter_enableControl && !PD_UIManager.list.memory_confirm_Base && (AudioDatabase.playSE("PC_クリック音"), (Memory.temp_loadSaveFileId = t), Memory.createChapterLoadModal());
                                        }),
                                        i.addEvent("mouseover", "mouseover", () => {
                                            Memory.appearChapter_enableControl && !PD_UIManager.list.memory_confirm_Base && (Memory.mousePosition || ((Memory.chapterIndex = n), Memory.chapter_updateChapterUI()));
                                        }),
                                        (i.BoyHood_saveFileID = t),
                                        PD_File.isExistFile("img/_kuina/memory/snap/" + o.memoryID + ".png_") || PD_File.isExistFile("img/_kuina/memory/snap/" + o.memoryID + ".png")
                                            ? PD_UIManager.list[a.instanceID + "_" + n + ":memory_Item_ScreenShot"].loadImage("memory/snap/" + o.memoryID)
                                            : (console.error("メモリーID:「" + o.memoryID + "」の画像ファイルが存在しません"), PD_UIManager.list[a.instanceID + "_" + n + ":memory_Item_ScreenShot"].loadImage("memory/snap/_default"));
                                    const l = PD_UIManager.list[a.instanceID + "_" + n + ":memory_Item_TextArea"];
                                    return l.drawTextEX("DAY" + r["DAY／"] + "／" + PD_Translation.transData(r["saveText翻訳ID"]), 0, 0, l.width, l.height, "left", 20, "rgb(192,230,212)", 0), i;
                                }),
                                a && o.memoryID === a)
                            )
                                break;
                        }
                    }
                    const o = new Catalog(PD_UIManager.list.memory_Chapter_Base, 1, 1, "memory/memory_Catalog_Base", "memory_Catalog_ItemArea", e, "memory_Catalog_Mask");
                    o.setOpenPage(e.length - 1),
                        o.setPageButton("memory_Catalog_upButton", "memory_Catalog_downButton", null),
                        o.setPageButtonAnimation("Animation/clickButton_2"),
                        o.setPageButtonFunc(() => Memory.appearChapter_enableControl),
                        o.setEnableMouseWheel(() => {
                            if (!Memory.appearChapter_enableControl) return !1;
                            const e = PD_UIManager.list[o.instanceID + ":" + o.listBaseUI_Name],
                                a = o.listBaseMaskUI_Name ? PD_UIManager.list[o.instanceID + ":" + o.listBaseMaskUI_Name] : e,
                                n = a.realX - a.width * a.realScaleX * a.anchorX,
                                t = a.realX + a.width * a.realScaleX * (1 - a.anchorX),
                                i = a.realY - a.height * a.realScaleY * a.anchorY,
                                r = a.realY + a.height * a.realScaleY * (1 - a.anchorY);
                            return TouchInput.x >= n && TouchInput.x <= t && TouchInput.y >= i && TouchInput.y <= r;
                        }),
                        o.setFlipParam(!0, 10, "easeOutCubic", !1, 5, 1, 1, 1),
                        o.setUpdatePageFunc(() => {
                            if ((Memory.chapter_updateChapterUI(), a && !Memory.appearChapter_enableControl)) {
                                let a;
                                for (let e = o.pageBaseUIs.length - 1; e >= 0; e--)
                                    if (o.pageBaseUIs[e]) {
                                        a = o.pageBaseUIs[e];
                                        break;
                                    }
                                const i = a.y;
                                (a.y = i - 20),
                                    (a.opacity = 0),
                                    a.animeWait(30),
                                    a.animeMoveY(i, 60, !1, "easeOutCubic"),
                                    a.animeOpacity(255, 60, !0),
                                    a.animeFunction(() => {
                                        (Memory.chapterIndex = e.length - 1),
                                            Memory.chapter_updateChapterUI(),
                                            n
                                                ? $option.firstLookChapter
                                                    ? ((Memory.appearChapter_enableControl = !0), t())
                                                    : Menu.showMessageDialog("system_3", void 0, !0).then(() => {
                                                          (Memory.appearChapter_enableControl = !0), ($option.firstLookChapter = !0), PD_SaveDataManager.saveOptionFile(), t();
                                                      })
                                                : t();
                                    }),
                                    a.playAnimation();
                            }
                        }),
                        o.create(),
                        (o.baseUI.visible = !1),
                        (Memory.chapterCatalog = o),
                        (Memory.chapterIndex = 0),
                        Memory.chapter_updateChapterUI();
                }),
                i.animeWait(1),
                i.animeFunction(() => {
                    Memory.chapterCatalog && (Memory.chapterCatalog.baseUI.visible = !0),
                        a ||
                            ($option.firstLookChapter
                                ? t()
                                : Menu.showMessageDialog("system_3", void 0, !0).then(() => {
                                      ($option.firstLookChapter = !0), PD_SaveDataManager.saveOptionFile(), t();
                                  }));
                }),
                i.playAnimation();
        });
    }),
    (Memory.chapter_updateChapterUI = function () {
        if (Memory.chapterCatalog)
            for (let e = Memory.chapterCatalog.pageNum, a = e - 2; a <= e + 2; a++) {
                const e = PD_UIManager.list[Memory.chapterCatalog.instanceID + "_" + a + ":memory_Item_Base"];
                if (e) {
                    a === Memory.chapterIndex ? (e.frameY = 70) : (e.frameY = 0);
                    const n = Memory.database[DataManager._globalInfo[e.BoyHood_saveFileID].memoryID],
                        t = PD_UIManager.list[Memory.chapterCatalog.instanceID + "_" + a + ":memory_Item_NumArea"];
                    t.clear(), t.drawTextEX(n["チャプター番号"], 0, 0, t.width, t.height, "center", 20, a === Memory.chapterIndex ? "rgb(192,230,212)" : "rgb(249,0,17)", 0);
                }
            }
    }),
    (Memory.createChapterLoadModal = function () {
        if (Memory.isLoading || SceneManager.isSceneChanging()) return;
        PD_UIManager.stopAllWheelEvent();
        const e = PD_UIManager.loadDatabase("memory/memory_confirm_Base", PD_UIManager.base.upper),
            a = PD_UIManager.list.memory_confirm_Modal;
        a.setAnimation("pc/PC_Base", "open"), a.playAnimation();
        const n = PD_UIManager.list.memory_confirm_OK;
        n.addEvent("trigger", "trigger", () => {
            Memory.deleteChapterLoadModal(), Memory.chapter_loadSaveData();
        }),
            n.addEvent("mouseover", "mouseover", () => {
                Memory.mousePosition || ((n.frameX = 148), (t.frameX = 0));
            }),
            n.addEvent("mouseleave", "mouseleave", () => {
                n.frameX = 0;
            });
        const t = PD_UIManager.list.memory_confirm_Cancel;
        t.addEvent("trigger", "trigger", () => {
            Memory.deleteChapterLoadModal();
        }),
            t.addEvent("mouseover", "mouseover", () => {
                Memory.mousePosition || ((n.frameX = 0), (t.frameX = 148));
            }),
            t.addEvent("mouseleave", "mouseleave", () => {
                t.frameX = 0;
            }),
            e.addEvent("trigger", "trigger", () => {
                Memory.deleteChapterLoadModal();
            }),
            e.addEvent("update", "update", () => {
                a.isPlayAnimation ||
                    (Input.isTriggered("left")
                        ? ((Memory.mousePosition = [TouchInput.x, TouchInput.y]), (n.frameX = 0), (t.frameX = 148))
                        : Input.isTriggered("right") && ((Memory.mousePosition = [TouchInput.x, TouchInput.y]), (n.frameX = 148), (t.frameX = 0)),
                    Input.isTriggered("ok") && (148 === n.frameX ? n._e.trigger.trigger() : 148 === t.frameX && t._e.trigger.trigger()),
                    !Memory.mousePosition || (Memory.mousePosition[0] === TouchInput.x && Memory.mousePosition[1] === TouchInput.y) || (Memory.mousePosition = null));
            });
    }),
    (Memory.deleteChapterLoadModal = function () {
        AudioDatabase.playSE("PC_クリック音");
        const e = PD_UIManager.list.memory_confirm_Modal;
        e.deleteAnimation(),
            e.setAnimation("pc/PC_Base", "close"),
            e.animeFunction(() => {
                PD_UIManager.startAllWheelEvent(), PD_UIManager.list.memory_confirm_Base.delete();
            }),
            e.playAnimation();
    }),
    (Memory.getTotalAffinity = function (e, a = !1) {
        let n = 0,
            t = !1;
        const i = [],
            o = [];
        if ($save.memoryID)
            for (let a = 1; a <= 6; a++) {
                const r = Memory.getEnableSaveInfos(a);
                for (let a = 0, l = r.length; a < l; a++) {
                    const l = r[a].glovalInfo["offset_" + e + "Affinity"];
                    if (l) for (let e in l) i.includes(e) || ((n += l[e]), i.push(e), o.push(l[e]));
                    if ($save.memoryID === r[a].glovalInfo.memoryID) {
                        t = !0;
                        break;
                    }
                }
                if (t) break;
            }
        const r = $save["offset_" + e + "Affinity"];
        for (let e in r) i.includes(e) || ((n += r[e]), i.push(e), o.push(r[e]));
        if (a) {
            const e = [];
            for (let a = 0, n = i.length; a < n; a++) e.push({ id: i[a], value: o[a] });
            return e;
        }
        return n;
    }),
    (Memory.chapter_loadSaveData = function (e) {
        if (!Memory.isLoading && !SceneManager.isSceneChanging()) {
            if (void 0 === e)
                for (let a = Memory.chapterCatalog.pageNum, n = a - 2; n <= a + 2; n++) {
                    const a = PD_UIManager.list[Memory.chapterCatalog.instanceID + "_" + n + ":memory_Item_Base"];
                    if (a && 70 === a.frameY) {
                        e = a.BoyHood_saveFileID;
                        break;
                    }
                }
            (Memory.isLoadSuccess = !1), DataManager.savefileInfo(e) ? Memory.executeLoad(e) : Memory.onLoadFailure();
        }
    }),
    (Memory.executeLoad = function (e) {
        (Memory.isLoading = !0),
            DataManager.loadGame(e)
                .then(() => Memory.onLoadSuccess())
                .catch(() => Memory.onLoadFailure());
    }),
    (Memory.onLoadSuccess = function () {
        SoundManager.playLoad(),
            SceneManager._scene.fadeOutAll(),
            Update.afterLoad(),
            Memory.reloadMapIfUpdated(),
            SceneManager.goto(Scene_Map),
            (Memory.isLoadSuccess = !0),
            (Memory.isLoading = !1),
            (Memory.temp_load_disableSave = "loading");
    }),
    (Memory.onLoadFailure = function () {
        SoundManager.playBuzzer(), (Memory.isLoading = !1);
    }),
    (Memory.reloadMapIfUpdated = function () {
        const e = $gameMap.mapId(),
            a = $gamePlayer.x,
            n = $gamePlayer.y,
            t = $gamePlayer.direction();
        $gamePlayer.reserveTransfer(e, a, n, t, 0), $gamePlayer.requestMapReload();
    }),
    (function () {
        "use strict";
        const e = DataManager.makeSavefileInfo;
        (DataManager.makeSavefileInfo = function () {
            const a = e.call(this);
            if (Memory.temp_savefileId > 0) {
                $save.memoryID && (a.memoryID = $save.memoryID);
                for (let e = 0; e < Game.affinityList.length; e++)
                    Memory["temp_offset_" + Game.affinityList[e] + "Affinity"] &&
                        ((a["offset_" + Game.affinityList[e] + "Affinity"] = Memory["temp_offset_" + Game.affinityList[e] + "Affinity"]), (Memory["temp_offset_" + Game.affinityList[e] + "Affinity"] = null));
            }
            return (Memory.temp_savefileId = 0), a;
        }),
            (Scene_Load.prototype = Object.create(Scene_Original.prototype)),
            (Scene_Load.prototype.constructor = Scene_Load),
            (Scene_Load.prototype.initialize = function () {
                Scene_Original.prototype.initialize.call(this), (this._fadeInEnable = !1), (this._fadeOutEnable = !1), (this._fadeOutAudioEnable = !1);
            }),
            (Scene_Load.prototype.create = function () {
                if ((Scene_Original.prototype.create.call(this), null !== Memory.temp_loadSaveFileId)) {
                    const e = Memory.temp_loadSaveFileId;
                    (Memory.temp_loadSaveFileId = null), Memory.chapter_loadSaveData(e);
                } else Memory.create();
            }),
            (Scene_Load.prototype.start = function () {
                Scene_Original.prototype.start.call(this);
            }),
            (Scene_Load.prototype.update = function () {
                if ((Scene_Original.prototype.update.call(this), !Memory.isLoading && !SceneManager.isSceneChanging() && (Input.isTriggered("menu") || TouchInput.isCancelled()))) {
                    if (PD_UIManager.list.messageDialog_Base) return;
                    if (PD_UIManager.list.memory_confirm_Base) Memory.deleteChapterLoadModal();
                    else if (PD_UIManager.list.memory_Chapter_Base) {
                        const e = PD_UIManager.list.memory_Chapter_Base;
                        e.deleteAnimation(),
                            e.animeMoveY(Memory.stageListY[Memory.stageIndex], 10, !1, "easeOutCubic"),
                            e.animeScale(0, 0, 10, !1, "easeOutCubic"),
                            e.animeOpacity(0, 10, !0, "easeOutCubic"),
                            e.animeFunction(Memory.createStage),
                            e.animeDelete(),
                            e.playAnimation();
                    } else $gameMap.requestRefresh(), this.popScene();
                }
            }),
            (Scene_Load.prototype.terminate = function () {
                Scene_Original.prototype.terminate.call(this), Memory.isLoadSuccess && $gameSystem.onAfterLoad();
            });
        const a = Scene_Map.prototype.onMapLoaded;
        Scene_Map.prototype.onMapLoaded = function () {
            "loading" === Memory.temp_load_disableSave && (Memory.temp_load_disableSave = "loaded"), (Memory.temp_load_disableAppear = !0), a.call(this);
        };
        const n = Game_Interpreter.prototype.terminate;
        Game_Interpreter.prototype.terminate = function () {
            n.call(this), "loaded" === Memory.temp_load_disableSave && (Memory.temp_load_disableSave = null);
        };
    })(),
    (PC.openWindows = []),
    (PC.preOpenFunc = null),
    (PC.openOwnerName = null),
    (PC.initialize = function (e = "giovanni") {
        (PC.owner = e),
            ($save.pc_ownerName = e),
            (PC.openWindowNames = []),
            (PC.activeWindowName = ""),
            (PC.windows = []),
            (PC.isOpening = !1),
            (PC.isClosing = !1),
            (PC.requestMapRefresh = !1),
            (PC.skipApplyFilter = !1),
            (PC.isDisableClose = !1),
            (PC.isDisableTaskChange = !1),
            (PC.isDisableCloseWindow = !1),
            (PC.isDisableClosePhoto = !1),
            (PC.closePhotoFunc = null),
            (PC.reflectNum_manual = null),
            (PC.reflectNums = []),
            (PC.reflectUI = null),
            (PC.isEnable = !0),
            (PC.openWindows = []),
            (PC.scaleImageInfo = { paths: [null], names: [null], funcs: [null], index: 0 }),
            (PC.isEnableChangeMouseCursorImg = !0),
            (PC.isDisableChangePlaneMouseCursor = !1),
            (PC.defaultIconPos = {}),
            (PC.draggingIconName = null);
    }),
    PC.initialize(),
    (PC.setPreOpenFunc = function (e) {
        PC.preOpenFunc = e;
    }),
    (PC.open = function (e, a, n = "giovanni") {
        !$gameSwitches.value(Setting.database["カレルレン乗っ取りスイッチ番号"][0]) || $gameSwitches.value(184)
            ? ($gameSwitches.value(Setting.database["カレルレン乗っ取りスイッチ番号"][0]) && $gameSwitches.value(185) && $gameSwitches.setValue(186, !0),
              (PC.openOwnerName = n),
              (PC.openWindows = []),
              a && ((PC.openWindows = a), Game.disablePC()),
              (PC.isOpening = !0),
              Game.terminateInterpreter(),
              e ||
                  (($save.pc_beforeScreen = JsonEx.stringify($gameScreen)),
                  ($save.pc_beforeMap = JsonEx.stringify($gameMap)),
                  ($save.pc_beforeParty = JsonEx.stringify($gameParty)),
                  ($save.pc_beforePlayer = JsonEx.stringify($gamePlayer)),
                  ($save.pc_beforeActors = JsonEx.stringify($gameActors))),
              $gamePlayer.setTransparent(!0),
              $gamePlayer.reserveTransfer(Setting.pc_mapId, 0, 0, 2, 2),
              ($gameScreen = new Game_Screen()),
              SceneManager.goto(Scene_Map))
            : Game.runCommonEvent(242);
    }),
    (PC.close = function (e = !1, a, n, t, i, o, r) {
        if (PC.isClosing || PC.isDisableClose || !PC.isEnable || $save.disableClosePC) return;
        (PC.isClosing = !0),
            (PC_SNS.openDarkWeb_ch = null),
            PC.owner && window[PC.owner + "PC"].close && window[PC.owner + "PC"].close(),
            PC.delete_mouseCursor(),
            r || (AudioDatabase.playSE("PC_クリック音"), AudioDatabase.playSE("PCを閉じる音_PC"));
        const l = PD_UIManager.list.PC_Base;
        l.deleteAnimation(),
            o ? l.animeWait(1) : l.setAnimation("pc/PC_Base", "close"),
            l.animeFunction(() => {
                (PC.isClosing = !1),
                    PC.delete_reflect_All(),
                    e ||
                        (void 0 === a
                            ? (($gameScreen = JsonEx.parse($save.pc_beforeScreen)),
                              ($gameMap = JsonEx.parse($save.pc_beforeMap)),
                              ($gameParty = JsonEx.parse($save.pc_beforeParty)),
                              ($gamePlayer = JsonEx.parse($save.pc_beforePlayer)),
                              ($gameActors = JsonEx.parse($save.pc_beforeActors)),
                              $gamePlayer.reserveTransfer($gameMap._mapId, $gamePlayer.x, $gamePlayer.y, $gamePlayer._direction, 2),
                              (PC.requestMapRefresh = !0),
                              SceneManager.goto(Scene_Map))
                            : ($gamePlayer.setTransparent(!1), $gamePlayer.reserveTransfer(a, n, t, i, 2), SceneManager.goto(Scene_Map)));
            }),
            l.playAnimation();
    }),
    (PC.updateOwners = function () {
        PC.owner && window[PC.owner + "PC"].update && window[PC.owner + "PC"].update();
    }),
    (PC.create = function (e = "giovanni") {
        PC.openOwnerName && ((e = PC.openOwnerName), (PC.openOwnerName = null));
        PD_UIManager.base.lower.addUI("PC_blackBG", 816, 624).fillAll("black"),
            AudioDatabase.playSE("PCを開く音"),
            PC.preOpenFunc && (PC.preOpenFunc(), (PC.preOpenFunc = null)),
            PC.initialize(e),
            (PC.openWindowNames = []),
            (PC.windows = []),
            window[PC.owner + "PC"].create(),
            PC.create_mouseCursor();
    }),
    (PC.destroy = function () {
        (PC_SNS.openDarkWeb_ch = null), PC.delete_reflect_All(), PD_UIManager.list.PC_Base && PD_UIManager.list.PC_Base.delete(), PD_UIManager.list.PC_blackBG && PD_UIManager.list.PC_blackBG.delete();
    }),
    (PC.createWindow = function (e, a, n = null, t = null, i = null, o = null, r = null) {
        PC.delete_reflect_All();
        let l = PD_UIManager.list["PC_" + e + "_Base"],
            s = PD_UIManager.list["PC_" + e + "_BG"],
            c = 0,
            _ = 0;
        if (l) (c = l.x), (_ = l.y);
        else {
            (l = PD_UIManager.loadDatabase(r || "pc/PC_" + e + "_Base", PD_UIManager.list.PC_Base)),
                l.addEvent("mouseover", "mouseover", () => {
                    PC.update_mouseCursorImage_Plain();
                }),
                l.addDragEvent(
                    "drag",
                    () => {
                        PC.isDisableTaskChange || (PC.activeWindowName !== e && PC.delete_reflect_All(), PC.update_windows_z(l));
                    },
                    null,
                    () => {
                        PC.fixWindowPosition(l);
                    },
                    !0,
                    !0,
                    1,
                    () => PC.isDisableTaskChange
                ),
                (s = PD_UIManager.list["PC_" + e + "_BG"]),
                s.addEvent("mouseover", "mouseover", () => {
                    PC.update_mouseCursorImage_Plain();
                }),
                s.addEvent("trigger", "trigger", () => {
                    PC.isDisableTaskChange || (PC.activeWindowName !== e && (AudioDatabase.playSE("PC_クリック音"), PC.delete_reflect_All()), PC.update_windows_z(l));
                });
            const m = PD_UIManager.list["PC_" + e + "_CloseButton"];
            m.addEvent("mouseover", "mouseover", () => {
                PC.update_mouseCursorImage_Plain();
            }),
                m.addEvent("trigger", "trigger", () => {
                    PC.isDisableTaskChange || PC.isDisableCloseWindow || (AudioDatabase.playSE("PC_クリック音"), PC.delete_reflect_All(), PC.closeWindow(e));
                }),
                (c = l.x + (null !== n ? n : 20 * PC.windows.length)),
                (_ = l.y + (null !== t ? t : 20 * PC.windows.length)),
                a && a(l);
            const d = null !== i ? i : 0,
                g = null !== o ? o : 312;
            (l.animationIndependence = !0),
                l.move(d, g),
                (l.scale = [0, 0]),
                l.deleteAnimation(),
                l.animeMove(c, _, 20, !1, "easeOutQuart"),
                l.animeScale(1, 1, 20, !0, "easeOutQuart"),
                l.animeFunction(() => {
                    PC.fixWindowPosition(l), l.deleteAnimation();
                }),
                l.playAnimation();
        }
        PC.update_windows_z(l);
    }),
    (PC.update_windows_z = function (e) {
        if (PC.isDisableTaskChange) return;
        const a = e.name.split("_").slice(-2, -1)[0];
        if (a !== PC.activeWindowName) {
            PC.activeWindowName = e.name.split("_").slice(-2, -1)[0];
            const n = window["PC_" + a];
            n && n.activeWindow && n.activeWindow();
        }
        PC_Audio.reset();
        const n = PC.windows.indexOf(e);
        n >= 0 && PC.windows.splice(n, 1), PC.windows.push(e);
        const t = [];
        for (let e = 0; e < PC.windows.length; e++) {
            const a = 2;
            PC.windows[e].z = e + a;
            for (let n = 0, i = PD_Util.orderChildren(PC.windows[e], "children"), o = i.length; n < o; n++) {
                i[n].rectButton && (i[n].rectButton = e + a);
                for (let e = 0; e < PD_UIManager._updateEventUIs.length; e++)
                    if (PD_UIManager._updateEventUIs[e].ui === i[n]) {
                        t.push(PD_UIManager._updateEventUIs.splice(e, 1)[0]);
                        break;
                    }
            }
        }
        for (let e = 0; e < PD_UIManager._updateEventUIs.length; e++) {
            let a = 0;
            const n = PD_UIManager._updateEventUIs[e].ui;
            n._cR && n._cR > a && (a = n._cR), n._cE && n._cE > a && (a = n._cE), a >= 10 && (t.push(PD_UIManager._updateEventUIs.splice(e, 1)[0]), e--);
        }
        (PD_UIManager._updateEventUIs = PD_UIManager._updateEventUIs.concat(t)), PC.update_taskbarIcon(PC.activeWindowName);
    }),
    (PC.fixWindowPosition = function (e) {
        const a = 20,
            n = Graphics.height / 2 - PD_UIManager.list.PC_TaskBar_BG.height;
        e.x + e.colX > Graphics.width / 2 - a && (e.x = Graphics.width / 2 - a - e.colX),
            e.x + e.colX + e.colWidth < -Graphics.width / 2 + a && (e.x = -Graphics.width / 2 + a - e.colX - e.colWidth),
            e.y + e.colY > n - a && (e.y = n - a - e.colY),
            e.y + e.colY + e.colHeight < -Graphics.height / 2 + a && (e.y = -Graphics.height / 2 + a - e.colY - e.colHeight);
    }),
    (PC.update_taskbarIcon = function (e) {
        for (let e = 0; e < PC.openWindowNames.length; e++) PD_UIManager.list["taskbar_icon_" + PC.openWindowNames[e]].delete();
        e && !PC.openWindowNames.includes(e) && PC.openWindowNames.push(e);
        let a = Math.floor(550 / PC.openWindowNames.length);
        a > 150 && (a = 150);
        for (let e = 0, n = PC.openWindowNames, t = n.length; e < t; e++) {
            const t = PD_UIManager.list.PC_TaskBar_BG.addUI("taskbar_icon_" + n[e], a, 36);
            (t.anchor = [0, 0.5]), t.move(e * a, -18);
            let i = 2,
                o = 2,
                r = "rgb(192,230,212)";
            PC.activeWindowName === n[e] && ((i = 4), (o = 0), (r = "rgb(106,165,139)"));
            const l = i / 2 + o,
                s = i / 2 + o,
                c = t.width - i / 2 - o,
                _ = t.height - i / 2 - o;
            t.drawLine(l + i, s, c - i, s, i, r),
                t.drawLine(c, s + i, c, _ - i, i, r),
                t.drawLine(c - i, _, l + i, _, i, r),
                t.drawLine(l, _ - i, l, s + i, i, r),
                t.drawLine(l, s + i, l + i, s, i, r),
                t.drawLine(c - i, s, c, s + i, i, r),
                t.drawLine(c, _ - i, c - i, _, i, r),
                t.drawLine(l + i, _, l, _ - i, i, r);
            let m = PD_Translation.transData(window["PC_" + n[e]].taskBarNameID);
            for (m || (m = window["PC_" + n[e]].taskBarNameID); 8 * PD_String.charCount(m) > a - 20; ) m = m.slice(0, -1);
            t.drawTextEX(m, 0, 0, t.width, t.height - 1, "center", 16, "rgb(192,230,212)", 0),
                (t.rectButton = 11),
                t.addEvent("trigger", "trigger", () => {
                    PC.isDisableTaskChange || (AudioDatabase.playSE("PC_クリック音"), window["PC_" + n[e]].open());
                });
        }
    }),
    (PC.closeWindow = function (e, a) {
        const n = PD_UIManager.list["PC_" + e + "_Base"];
        if (!n) return;
        const t = () => {
            PC.windows.splice(PC.windows.indexOf(n), 1), n.delete();
        };
        a
            ? t()
            : (n.deleteAnimation(),
              n.animeMove(-408, 312, 20, !1, "easeOutQuart"),
              n.animeScale(0, 0, 20, !0, "easeOutQuart"),
              n.animeFunction(() => {
                  t();
              }),
              n.playAnimation()),
            window["PC_" + e].close(),
            PC.delete_taskbarIcon(e),
            PC.openWindowNames.length > 0 ? ((PC.activeWindowName = PC.openWindowNames[PC.openWindowNames.length - 1]), window["PC_" + PC.activeWindowName].open()) : (PC.activeWindowName = "");
    }),
    (PC.closeAllWindow = function (e, a = !0) {
        for (let n = PC.openWindowNames.length - 1; n >= 0; n--) (e && e.includes(PC.openWindowNames[n])) || PC.closeWindow(PC.openWindowNames[n], a);
        PC.delete_reflect_All();
    }),
    (PC.delete_taskbarIcon = function (e) {
        const a = PC.openWindowNames.indexOf(e);
        PC.openWindowNames.splice(a, 1), PD_UIManager.list["taskbar_icon_" + e].delete();
    }),
    (PC.create_mouseCursor = function () {
        let e = PD_UIManager.list.PC_mouseCursor;
        e || (e = PD_UIManager.base.middle.addUI("PC_mouseCursor", 100, 100)),
            PC.update_mouseCursorImage_Plain(),
            TouchInput.x >= 0 && TouchInput.y >= 0 && TouchInput.x <= 816 && TouchInput.y <= 624 ? e.move(TouchInput.x, TouchInput.y) : e.move(408, 312),
            (document.body.style.cursor = "none"),
            (PD_UIManager.mouseKey = "ok"),
            (PD_UIManager.mouseCursorUI = e);
    }),
    (PC.delete_mouseCursor = function () {
        const e = PD_UIManager.list.PC_mouseCursor;
        e && (e.delete(), PC.update_mouseCursorImage_Plain(), (PD_UIManager.mouseKey = null), (PD_UIManager.mouseCursorUI = null));
    }),
    (PC.update_mouseCursorImage_None = function () {
        if (PC.isDisableChangePlaneMouseCursor) return;
        const e = PD_UIManager.list ? PD_UIManager.list.PC_mouseCursor : void 0;
        e ? e.clear() : (document.body.style.cursor = "none");
    }),
    (PC.update_mouseCursorImage_Plain = function () {
        if (PC.isDisableChangePlaneMouseCursor) return;
        const e = PD_UIManager.list ? PD_UIManager.list.PC_mouseCursor : void 0;
        e ? (e.clear(), e.loadImage("pc/cursor/cursor_plain_2x"), (e.anchor = [0.07, 0.01])) : (document.body.style.cursor = 'url("cursor/cursor_plain_2x.png") 7 1, auto');
    }),
    (PC.update_mouseCursorImage_Hover = function () {
        if (!PC.isEnableChangeMouseCursorImg) return void PC.update_mouseCursorImage_Plain();
        const e = PD_UIManager.list ? PD_UIManager.list.PC_mouseCursor : void 0;
        e ? (e.clear(), e.loadImage("pc/cursor/cursor_hover_2x"), (e.anchor = [0.07, 0.01])) : (document.body.style.cursor = 'url("cursor/cursor_hover_2x.png") 7 1, auto');
    }),
    (PC.update_mouseCursorImage_Goki = function () {
        if (!PC.isEnableChangeMouseCursorImg) return void PC.update_mouseCursorImage_Plain();
        const e = PD_UIManager.list ? PD_UIManager.list.PC_mouseCursor : void 0;
        e ? (e.clear(), e.loadImage("pc/cursor/cursor_goki"), (e.anchor = [0.3, 0.3])) : (document.body.style.cursor = 'url("cursor/cursor_goki.png") 30 30, auto');
    }),
    (PC.update_mouseCursorImage_ZeroDayLogo = function () {
        if (!PC.isEnableChangeMouseCursorImg) return void PC.update_mouseCursorImage_Plain();
        const e = PD_UIManager.list ? PD_UIManager.list.PC_mouseCursor : void 0;
        e ? (e.clear(), e.loadImage("pc/cursor/cursor_zerogoki"), (e.anchor = [0.27, 0.25])) : (document.body.style.cursor = 'url("cursor/cursor_zerogoki.png") 27 25, auto');
    }),
    (PC.enable_changeMouseCursorImage = function () {
        PC.isEnableChangeMouseCursorImg = !0;
    }),
    (PC.disable_changeMouseCursorImage = function () {
        PC.isEnableChangeMouseCursorImg = !1;
    }),
    (PC.create_reflect = function (e) {
        if ($gameSwitches.value(481)) return;
        const a = PC.reflectNums.slice(-1)[0];
        if (!e || a === e) return;
        const n = PC.reflectNums.indexOf(e);
        n >= 0 && PC.reflectNums.splice(n, 1), PC.reflectNums.push(e);
    }),
    (PC.stop_reflect = function (e = 0) {
        const a = String(null !== PC.reflectNum_manual ? PC.reflectNum_manual : PC.reflectNums.slice(-1)[0]),
            n = PD_UIManager.list["PC_reflect_Giovanni_" + a];
        n.stopAnimation(), (n.frameX = 624 * e);
    }),
    (PC.delete_reflect = function (e) {
        if (e) {
            const a = PC.reflectNums.indexOf(e);
            a >= 0 && PC.reflectNums.splice(a, 1);
        } else (PC.reflectNums = []), PC.update_reflect();
    }),
    (PC.delete_reflect_All = function () {
        (PC.reflectNum_manual = null), (PC.reflectNums = []), PC.update_reflect(), PD_UIManager.list.PC_reflect_Giovanni_base && PD_UIManager.list.PC_reflect_Giovanni_base.delete();
    }),
    (PC.update_reflect = function () {
        if (PC.reflectNums.length > 0 || null !== PC.reflectNum_manual) {
            const e = String(null !== PC.reflectNum_manual ? PC.reflectNum_manual : PC.reflectNums.slice(-1)[0]);
            if (PC.reflectUI) {
                const a = String(PC.reflectUI.name.split("_").slice(3).join("_"));
                if (e !== a) {
                    const n = PD_UIManager.list["PC_reflect_Giovanni_" + a];
                    (PC.reflectUI = PD_UIManager.loadDatabase("pc/PC_reflect_Giovanni_" + e, PD_UIManager.list.PC_reflect_Giovanni_base)),
                        (PC.reflectUI.animationIndependence = !0),
                        (PC.reflectUI.visible = !1),
                        PC.reflectUI.reBuild_BitmapLoadPromise
                            .then(() => {
                                n && n.delete(), PC.reflectUI && (PC.reflectUI.visible = !0);
                            })
                            .catch(() => {
                                n && n.delete(), PC.reflectUI && (PC.reflectUI.visible = !0);
                            }),
                        PC.reflectUI.deleteAnimation(),
                        PC.reflectUI.setAnimation("pc/PC_reflect_Giovanni_" + e),
                        PC.reflectUI.playAnimation();
                }
            } else {
                let a = PD_UIManager.list.PC_reflect_Giovanni_base;
                if (a) for (let e = 0; e < a.children.length; e++) a.children[e].delete();
                else (a = PD_UIManager.base.middle.addUI("PC_reflect_Giovanni_base")), (a.opacity = 0);
                let n = 30 - (void 0 !== a._aC ? a._aC : 0);
                n < 0 && (n = 0),
                    a.deleteAnimation(),
                    0 === n ? (a.opacity = 255) : (a.animeOpacity(255, n, !0), a.playAnimation()),
                    (PC.reflectUI = PD_UIManager.loadDatabase("pc/PC_reflect_Giovanni_" + e, a)),
                    (PC.reflectUI.animationIndependence = !0),
                    PC.reflectUI.deleteAnimation(),
                    PC.reflectUI.setAnimation("pc/PC_reflect_Giovanni_" + e),
                    PC.reflectUI.playAnimation();
            }
        } else if (PC.reflectUI) {
            PC.reflectUI = null;
            const e = PD_UIManager.list.PC_reflect_Giovanni_base,
                a = 30;
            let n = void 0 !== e._aC ? e._aC : a;
            n > a && (n = a), e.deleteAnimation(), 0 === n ? (e.opacity = 0) : (e.animeOpacity(0, n, !0), e.playAnimation());
        }
    }),
    (PC.isCanviewScaleImage = function () {
        if (PD_UIManager.list.PC_ScaleImage_base) return !1;
        if ("Message" === PC.activeWindowName)
            for (let e = 0, a = PC_Message.talkCatalog.pageBaseUIs; e < a.length; e++) {
                const n = a[e];
                if (n && n.isPlayAnimation) return !1;
            }
        if ("SNS" === PC.activeWindowName)
            for (let e = 0, a = PC_SNS.mainCatalog.pageBaseUIs; e < a.length; e++) {
                const n = a[e];
                if (n && n.isPlayAnimation) return !1;
            }
        return !0;
    }),
    (PC.viewScaleImage = function (e, a, n) {
        if (!PC.isCanviewScaleImage) return;
        (PC.isDisableClose = !0), (PC.isDisableTaskChange = !0), PD_UIManager.stopAllWheelEvent();
        const t = PD_UIManager.base.lower.addUI("PC_ScaleImage_base", 816, 624);
        if (
            ((t.anchor = [0.5, 0.5]),
            t.move(408, 312),
            (t.isStopPropagation = !0),
            t.fillAll("rgba(0,0,0,0.72)"),
            (t.rectButton = 100),
            t.addEvent("trigger", "trigger", () => {
                AudioDatabase.playSE("PC_クリック音"), PC.hideScaleImage();
            }),
            e)
        )
            for (let a = 0; a < e.length; a++) PD_UIManager.loadDatabase("pc/" + e[a], t);
        else {
            const e = PC.scaleImageInfo.paths[PC.scaleImageInfo.index],
                a = PC.scaleImageInfo.names[PC.scaleImageInfo.index],
                n = PC.scaleImageInfo.funcs[PC.scaleImageInfo.index];
            t.addUI("PC_ScaleImage_image").anchor = [0.5, 0.5];
            const i = t.addUI("PC_ScaleImage_fileName", 816, 20);
            if (((i.anchor = [0.5, 0.5]), i.move(0, -265), PC.updateScaleImage(e, a, n), PC.scaleImageInfo.paths.length > 1)) {
                const e = t.addUI("PC_ScaleImage_prevButton");
                e.loadImage("pc/document/document_image_left"),
                    (e.anchor = [0.5, 0.5]),
                    e.move(-380, 0),
                    (e.frame = [22, 0, 22, 34]),
                    (e.rectButton = 101),
                    (e.colWidth = 50),
                    (e.colHeight = 50),
                    (e.isStopPropagation = !0),
                    e.addEvent("mouseover", "mouseover", () => {
                        e.frame = [0, 0, 22, 34];
                    }),
                    e.addEvent("mouseleave", "mouseleave", () => {
                        e.frame = [22, 0, 22, 34];
                    }),
                    e.addEvent("trigger", "trigger", () => {
                        PC.scaleImageInfo.index > 0 &&
                            (AudioDatabase.playSE("PC_クリック音"),
                            PC.scaleImageInfo.index--,
                            n(),
                            PC.updateScaleImage(PC.scaleImageInfo.paths[PC.scaleImageInfo.index], PC.scaleImageInfo.names[PC.scaleImageInfo.index], PC.scaleImageInfo.funcs[PC.scaleImageInfo.index]));
                    });
                const a = t.addUI("PC_ScaleImage_nextButton");
                a.loadImage("pc/document/document_image_right"),
                    (a.anchor = [0.5, 0.5]),
                    a.move(380, 0),
                    (a.frame = [22, 0, 22, 34]),
                    (a.rectButton = 101),
                    (a.colWidth = 50),
                    (a.colHeight = 50),
                    (a.isStopPropagation = !0),
                    a.addEvent("mouseover", "mouseover", () => {
                        a.frame = [0, 0, 22, 34];
                    }),
                    a.addEvent("mouseleave", "mouseleave", () => {
                        a.frame = [22, 0, 22, 34];
                    }),
                    a.addEvent("trigger", "trigger", () => {
                        PC.scaleImageInfo.index < PC.scaleImageInfo.paths.length - 1 &&
                            (AudioDatabase.playSE("PC_クリック音"),
                            PC.scaleImageInfo.index++,
                            n(),
                            PC.updateScaleImage(PC.scaleImageInfo.paths[PC.scaleImageInfo.index], PC.scaleImageInfo.names[PC.scaleImageInfo.index], PC.scaleImageInfo.funcs[PC.scaleImageInfo.index]));
                    });
                const n = () => {
                    (e.visible = 0 !== PC.scaleImageInfo.index), (a.visible = PC.scaleImageInfo.index !== PC.scaleImageInfo.paths.length - 1);
                };
                n();
            }
        }
        if (n)
            for (let e = 0; e < a.length; e++) {
                const t = PD_UIManager.list[a[e]];
                t &&
                    t.addEvent("trigger", "trigger", () => {
                        AudioDatabase.playSE("PC_クリック音"), n[e]();
                    });
            }
    }),
    (PC.updateScaleImage = function (e, a, n) {
        const t = PD_UIManager.list.PC_ScaleImage_image;
        if (((t.scale = [1, 0]), t.clear(), t.loadImage(e), t.deleteAnimation(), t.animeScale(1, 1, 10, !0, "easeOutQuart"), t.playAnimation(), a)) {
            const e = PD_UIManager.list.PC_ScaleImage_fileName;
            e.clear(), e.drawTextEX(a, 0, 0, 816, 20, "center", 16, "rgb(192,230,212)", 0);
        }
        n && n(t);
    }),
    (PC.hideScaleImage = function () {
        if ((PC.closePhotoFunc && PC.closePhotoFunc(), PC.isDisableClosePhoto)) return;
        const e = PD_UIManager.list.PC_ScaleImage_base;
        e && (e.delete(), (PC.isDisableClose = !1), (PC.isDisableTaskChange = !1), PD_UIManager.startAllWheelEvent());
    }),
    (PC.showConfirmDialog = function (e, a, n, t, i, o, r = !0, l = !1, s = !1, c = null, _ = "rgba(0,0,0,0.72)") {
        const m = PD_UIManager.loadDatabase("dialog/dialog_Base", e);
        PD_UIManager.loadDatabase(i ? "dialog/dialog_Button2_Base" : "dialog/dialog_Button1_Base", PD_UIManager.list.dialog_BG), m.fillAll(_), (m.z = 11);
        const d = PD_UIManager.list.dialog_Button_TextArea,
            g = a.split("\\n");
        for (let e = 0; e < g.length; e++) d.drawTextEX(g[e], 0, 25 * e + (g.length > 1 ? 0 : 12), d.width, 25, "center", 20, "rgb(192,230,212)", 0);
        const u = PD_UIManager.list.dialog_BG;
        (u.scale = [0, 0]), u.animeScale(1, 1, 10, !0, "easeOutQuart"), u.playAnimation();
        const p = (e) => {
            u.deleteAnimation(), u.animeScale(0, 0, 4, !0, "easeOutQuart"), u.animeFunction(e), u.playAnimation();
        };
        let P, I;
        l
            ? ((P = PD_UIManager.list.dialog_Button1_Big), (P.visible = !0), (PD_UIManager.list.dialog_Button1.visible = !1), (I = PD_UIManager.list.dialog_Button1_Big_TextArea))
            : ((P = PD_UIManager.list.dialog_Button1), (P.visible = !0), (I = PD_UIManager.list.dialog_Button1_TextArea), PD_UIManager.list.dialog_Button1_Big && (PD_UIManager.list.dialog_Button1_Big.visible = !1)),
            (P.frameX = r ? (l ? 248 : 148) : 0),
            I.drawTextEX(n, 0, 0, I.width, I.height, "center", 16, "rgb(192,230,212)", 0);
        const C = () => {
            AudioDatabase.playSE("PC_クリック音"),
                p(() => {
                    m.delete(), t();
                });
        };
        P.addEvent("trigger", "trigger", () => {
            C();
        }),
            P.addEvent("mouseover", "mouseover", () => {
                (P.frameY = 40), h && (h.frameY = 0);
            }),
            P.addEvent("mouseleave", "mouseleave", () => {
                P.frameY = 0;
            });
        let h,
            D = () => {
                AudioDatabase.playSE("PC_クリック音"),
                    p(() => {
                        m.delete(), o();
                    });
            };
        i
            ? ((h = PD_UIManager.list.dialog_Button2),
              (button2_TextArea = PD_UIManager.list.dialog_Button2_TextArea),
              button2_TextArea.drawTextEX(i, 0, 0, button2_TextArea.width, button2_TextArea.height, "center", 16, "rgb(192,230,212)", 0),
              h.addEvent("trigger", "trigger", () => {
                  D();
              }),
              h.addEvent("mouseover", "mouseover", () => {
                  (h.frameY = 40), (P.frameY = 0);
              }),
              h.addEvent("mouseleave", "mouseleave", () => {
                  h.frameY = 0;
              }))
            : (D = null);
        const f = () => {
            AudioDatabase.playSE("PC_クリック音"),
                p(() => {
                    c ? c() : D && D();
                });
        };
        PD_UIManager.list.dialog_CloseButton.addEvent("trigger", "trigger", f),
            m.addEvent("update", "update", () => {
                s &&
                    (Input.isTriggered("up") || Input.isTriggered("down") || Input.isTriggered("right")
                        ? ((P.frameY = 40), h && (h.frameY = 0))
                        : Input.isTriggered("left")
                        ? h
                            ? ((P.frameY = 0), (h.frameY = 40))
                            : (P.frameY = 40)
                        : Input.isTriggered("ok") && (0 !== P.frameY ? C() : h && 0 !== h.frameY && D())),
                    (Input.isTriggered("menu") || TouchInput.isCancelled()) && f();
            });
    }),
    (PC.createDownloadDialog = function (e, a = 0, n = 0, t = 0, i, o, r) {
        const l = PD_UIManager.loadDatabase("dialog/dialog_Base", e);
        (PD_UIManager.loadDatabase("dialog/dialog_DL_Base", PD_UIManager.list.dialog_BG).animationIndependence = !0), l.move(a, n), (l.scale = [0, 0]), l.deleteAnimation(), l.animeScale(1, 1, 10, !0, "easeOutQuart"), l.playAnimation();
        const s = PD_UIManager.list.dialog_DL_Text;
        (s.opacity = 128), s.animeOpacity(255, 30, !0), s.animeOpacity(128, 30, !0), s.animeLoop(), s.playAnimation();
        (PD_UIManager.list.dialog_DL_Gage.frameWidth = (254 * t) / 100), i && PC.playDownloadDialog(i, o, r);
    }),
    (PC.playDownloadDialog = function (e = 100, a = 120, n = "easeInCirc") {
        AudioDatabase.playSE("ダウンロード");
        const t = PD_UIManager.list.dialog_DL_Text,
            i = PD_UIManager.list.dialog_DL_Gage;
        t &&
            i &&
            (i.deleteAnimation(),
            i.animeFrame(0, 0, (254 * e) / 100, 14, a, !0, n),
            i.animeFunction(() => {
                100 === e && (AudioDatabase.playSE("ダウンロード完了"), (t.frameY = 18));
            }),
            i.playAnimation());
    }),
    (PC.deleteDownloadDialog = function () {
        const e = PD_UIManager.list.dialog_Base;
        e && (e.deleteAnimation(), e.animeScale(0, 0, 10, !0, "easeOutQuart"), e.animeDelete(), e.playAnimation());
    }),
    (PC.createPasswordDialog = function (e, a, n, t, i = null, o = "rgba(0,0,0,0.72)") {
        const r = PC.isDisableCloseWindow;
        PC.isDisableCloseWindow = !0;
        const l = PD_UIManager.loadDatabase("dialog/dialog_Base_2", e);
        PD_UIManager.loadDatabase("dialog/dialog_PW_Base", PD_UIManager.list.dialog_BG);
        (PD_UIManager.loadDatabase("dialog/dialog_Button2_Base", PD_UIManager.list.dialog_BG).y = 10), l.fillAll(o), (l.z = 11);
        const s = PD_UIManager.list.dialog_PW_TextArea;
        s.drawTextEX(a, 0, 0, s.width, s.height, "left", 20, "rgb(192,230,212)", 0);
        const c = PD_UIManager.list.dialog_BG;
        (c.scale = [0, 0]), c.animeScale(1, 1, 10, !0, "easeOutQuart"), c.playAnimation();
        const _ = (e) => {
            c.deleteAnimation(), c.animeScale(0, 0, 4, !0, "easeOutQuart"), c.animeFunction(e), c.playAnimation();
        };
        let m, d;
        PD_UIManager.list.dialog_PW_BG.addEvent("trigger", "trigger", () => {
            $gameMap.isEventRunning() || PC.passwordDialog_focusInput();
        }),
            PC.passwordDialog_initPassword(),
            (m = PD_UIManager.list.dialog_Button1),
            (m.visible = !0),
            (d = PD_UIManager.list.dialog_Button1_TextArea),
            PD_UIManager.list.dialog_Button1_Big && (PD_UIManager.list.dialog_Button1_Big.visible = !1),
            (m.frameX = 148),
            d.drawTextEX("{OK}", 0, 0, d.width, d.height, "center", 16, "rgb(192,230,212)", 0);
        m.addEvent("trigger", "trigger", () => {
            (() => {
                if ((AudioDatabase.playSE("PC_クリック音"), !$gameMap.isEventRunning())) {
                    const e = PD_ElementManager.list.passwordInput ? PD_ElementManager.list.passwordInput.value : "";
                    PC.passwordDialog_initPassword(),
                        n(e) &&
                            _(() => {
                                (PC.isDisableCloseWindow = r), l.delete();
                            });
                }
            })();
        }),
            m.addEvent("mouseover", "mouseover", () => {
                (m.frameY = 40), g && (g.frameY = 0);
            }),
            m.addEvent("mouseleave", "mouseleave", () => {
                m.frameY = 0;
            });
        let g,
            u = () => {
                AudioDatabase.playSE("PC_クリック音"),
                    PC.passwordDialog_initPassword(),
                    _(() => {
                        (PC.isDisableCloseWindow = r), l.delete(), t && t();
                    });
            };
        (g = PD_UIManager.list.dialog_Button2),
            (button2_TextArea = PD_UIManager.list.dialog_Button2_TextArea),
            button2_TextArea.drawTextEX("{キャンセル}", 0, 0, button2_TextArea.width, button2_TextArea.height, "center", 16, "rgb(192,230,212)", 0),
            g.addEvent("trigger", "trigger", () => {
                u();
            }),
            g.addEvent("mouseover", "mouseover", () => {
                (g.frameY = 40), (m.frameY = 0);
            }),
            g.addEvent("mouseleave", "mouseleave", () => {
                g.frameY = 0;
            });
        const p = () => {
            AudioDatabase.playSE("PC_クリック音"),
                PC.passwordDialog_initPassword(),
                _(() => {
                    i ? i() : u && u();
                });
        };
        PD_UIManager.list.dialog_CloseButton.addEvent("trigger", "trigger", p),
            l.addEvent("update", "update", () => {
                (Input.isTriggered("menu") || TouchInput.isCancelled()) && p();
            });
    }),
    (PC.passwordDialog_initPassword = function () {
        const e = PD_UIManager.list.dialog_PW_Text;
        e.clear(), PD_ElementManager.list.passwordInput ? PD_ElementManager.list.passwordInput.delete() : e.drawTextEX("Password", 10, 0, 180, 30, "left", 20, "rgb(97,97,97)", 0);
    }),
    (PC.passwordDialog_focusInput = function (e) {
        if (PD_ElementManager.list.passwordInput) return;
        PC.passwordDialog_initPassword(), PD_UIManager.list.dialog_PW_Text.clear();
        const a = PD_UIManager.list.dialog_PW_BG,
            n = a.width - 20,
            t = a.height - 12,
            i = PD_ElementManager.list.base.addInput("passwordInput", n, t, !1);
        e && (i.value = PD_Translation.transData(e)),
            (i.fontFamily = "PixelMplus10-Regular"),
            (i.fontSize = 16),
            (i.style.border = "none"),
            (i.style.outline = "none"),
            (i.style.backgroundColor = "transparent"),
            (i.style.color = "rgb(192,230,212)"),
            (i.style.cursor = "none"),
            i.move(a.realX - n / 2, a.realY - t / 2 - 1),
            i.addEvent("keydown", "keydown", (e) => {
                "Enter" === e.key && PD_UIManager.list.dialog_Button1._e.trigger.trigger();
            }),
            i.focus();
    }),
    (PC.addIconDrag = function (e, a = 1, n = 128, t, i, o, r) {
        let l = !1;
        const s = PD_UIManager.list[e];
        (PC.defaultIconPos[e] = { x: s.x, y: s.y }),
            s.addDragEvent(
                "drag",
                () => {
                    PC.isDisableTaskChange || (t && t()) || AudioDatabase.playSE("PC_クリック音");
                },
                () => {
                    PC.isDisableTaskChange ||
                        ((i && i()) || ((PC.draggingIconName = e), s.move(TouchInput.x - 408, TouchInput.y - 312)),
                        l ||
                            ((l = !0),
                            PD_UIManager.stopAllWheelEvent(),
                            s.deleteAnimation(),
                            null !== n && s.animeOpacity(n, 10, !1, "easeOutQuad"),
                            null !== a && s.animeScale(a, a, 10, !1, "easeOutQuad"),
                            (null === n && null === a) || (s.animeWait(10), s.playAnimation())));
                },
                () => {
                    PC.isDisableTaskChange || (l && PD_UIManager.startAllWheelEvent(), !l && o ? o() : (r && r()) || PC.resetIconPos(), (l = !1));
                },
                !1,
                !1,
                1,
                () => PC.isDisableTaskChange
            );
    }),
    (PC.resetIconPos = function () {
        if (!PC.draggingIconName) return;
        const e = PC.draggingIconName;
        PC.draggingIconName = null;
        const a = PD_UIManager.list[e];
        a.deleteAnimation(),
            a.animeMove(PC.defaultIconPos[e].x, PC.defaultIconPos[e].y, 10, !1, "easeOutQuad"),
            a.animeOpacity(255, 10, !1, "easeOutQuad"),
            a.animeScale(1, 1, 10, !0, "easeOutQuad"),
            a.animeFunction(() => {
                a.deleteAnimation();
            }),
            a.playAnimation();
    }),
    (function () {
        "use strict";
        PC.update_mouseCursorImage_Plain(),
            (Scene_Map.prototype.createButtons = function () {}),
            (Scene_Map.prototype.callMenu = function () {
                $gameMap._mapId === Setting.pc_mapId
                    ? PD_UIManager.list.PC_ScaleImage_base
                        ? PD_UIManager.list.PC_ScaleImage_base._e.trigger.trigger()
                        : PC.openWindowNames.length > 0 && PC.activeWindowName && PC.isEnable && !PC.isDisableTaskChange && !PC.isDisableCloseWindow
                        ? (window["PC_" + PC.activeWindowName].cancelWindow && window["PC_" + PC.activeWindowName].cancelWindow()) ||
                          (PD_UIManager.list["PC_" + PC.activeWindowName + "_CloseButton"] && PD_UIManager.list["PC_" + PC.activeWindowName + "_CloseButton"]._e.trigger.trigger())
                        : PC.close()
                    : Menu.checkEnableMapPC() && PC.open(),
                    this.menuCalling && (this.menuCalling = !1);
            });
        const e = Scene_Map.prototype.start;
        Scene_Map.prototype.start = function () {
            if ((e.call(this), $gameMap._mapId === Setting.pc_mapId)) PC.create($save.pc_ownerName);
            else {
                if (!PC.skipApplyFilter) {
                    const e = $save.mapEventFilters;
                    if ((($save.mapEventFilters = []), PC.requestMapRefresh)) {
                        for (let a = 0; a < e.length; a++) PluginManager.callCommand(new Game_Interpreter(), "ApplyShaderToSprite", "apply", e[a]);
                        $gameMap.requestRefresh(), (PC.requestMapRefresh = !1);
                    }
                }
                "none" === document.body.style.cursor && PC.update_mouseCursorImage_Plain();
            }
        };
        const a = Game_Map.prototype.updateEvents;
        Game_Map.prototype.updateEvents = function () {
            if (this._mapId === Setting.pc_mapId) {
                const e = PD_UIManager.list.PC_mouseCursor;
                if (e && PD_UIManager.isEnableMoveMouseCursorUI) {
                    const a = Input.isPressed("shift") ? 4 : 10;
                    Input.isPressed("up") && ((e.y -= a), e.y < 10 && (e.y = 10)),
                        Input.isPressed("down") && ((e.y += a), e.y > Graphics.height - 10 && (e.y = Graphics.height - 10)),
                        Input.isPressed("left") && ((e.x -= a), e.x < 10 && (e.x = 10)),
                        Input.isPressed("right") && ((e.x += a), e.x > Graphics.width - 10 && (e.x = Graphics.width - 10));
                }
                !PD_UIManager.isEnableAllColliderEvent() || (PC.isEnable && !$gameMap.isEventRunning()) || PD_UIManager.list.Caption_Base || PD_UIManager.list.movieSkipCollider
                    ? PC.isClosing
                        ? PD_UIManager.stopAllColliderEvent()
                        : PD_UIManager.isEnableAllColliderEvent() || !PC.isEnable || $gameMap.isEventRunning() || PD_UIManager.startAllColliderEvent()
                    : PD_UIManager.stopAllColliderEvent(),
                    PC.updateOwners(),
                    PC.update_reflect();
            }
            a.call(this);
        };
        const n = Game_Event.prototype.checkEventTriggerAuto;
        Game_Event.prototype.checkEventTriggerAuto = function () {
            PC.isOpening || ($gamePlayer.isTransferring() && $gamePlayer.newMapId() === Setting.pc_mapId) || n.call(this);
        };
        const t = Game_Map.prototype.setupStartingEvent;
        Game_Map.prototype.setupStartingEvent = function () {
            return !(PC.isOpening || ($gamePlayer.isTransferring() && $gamePlayer.newMapId() === Setting.pc_mapId)) && t.call(this);
        };
        const i = Game_Map.prototype.autoplay;
        (Game_Map.prototype.autoplay = function () {
            PC.requestMapRefresh || i.call(this);
        }),
            (Game_Interpreter.prototype.updateChild = function () {
                if (this._childInterpreter) {
                    if ((this._childInterpreter.update(), this._childInterpreter && this._childInterpreter.isRunning())) return !0;
                    this._childInterpreter = null;
                }
                return !1;
            });
    })(),
    (giovanniPC.initialize = function () {}),
    (giovanniPC.open = function (e) {
        (PC.openWindows = []), e && ((PC.openWindows = e), Game.disablePC()), PC.destroy(), PC.create("giovanni");
    }),
    (giovanniPC.create = function () {
        giovanniPC.initialize();
        const e = PD_UIManager.loadDatabase("pc/PC_Base", PD_UIManager.base.lower);
        if (
            ((PD_UIManager.list.PC_TaskBar_MenuList_Base.visible = !1),
            (PD_UIManager.list.PC_Card_BG.visible = !$gameSwitches.value(478)),
            (PD_UIManager.list.PC_Icon_DarkWeb.visible = $gameSwitches.value(485)),
            (PD_UIManager.list.PC_Icon_IdealHack.visible = $gameSwitches.value(451)),
            (PD_UIManager.list.PC_Icon_Text2.visible = $gameSwitches.value(451)),
            (PD_UIManager.list.PC_Icon_Dreamer.visible = $gameSwitches.value(756)),
            $gameSwitches.value(461))
        ) {
            PD_UIManager.list.PC_BG.loadImage("pc/desktop/mother_horror/C1_00887_1");
            const e = ["PC_Icons", "PC_Card_BG", "PC_Todo_BG", "PC_TaskBar_Menu", "PC_TaskBar_ShutDown"];
            for (let a = 0; a < e.length; a++) PD_UIManager.list[e[a]].visible = !1;
        } else if ($gameSwitches.value(Setting.database["カレルレン乗っ取りスイッチ番号"][0])) {
            PD_UIManager.list.PC_BG.loadImage("pc/desktop/desktop_kar");
            const a = PD_UIManager.list.PC_Icons,
                n = ["Trash", "SNS", "Message", "Document", "Item", "Progra"];
            for (let e = 0; e < n.length; e++) {
                const t = PD_UIManager.list["PC_Icon_" + n[e]];
                (PD_UIManager.list["PC_Icon_" + n[e] + "_Img"].opacity = 0), (PD_UIManager.list["PC_Icon_" + n[e] + "_Text"].opacity = 0);
                const i = a.addUI("PC_Icon_" + n[e] + "_kar");
                i.loadImage("pc/desktop/icon_" + n[e] + "_kar"), (i.anchor = [0.5, 0.5]), i.move(t.x, t.y);
                const o = PD_UIManager.list["PC_Icon_" + n[e] + "_Notice"];
                o && (o.opacity = 0);
            }
            const t = PD_UIManager.list.PC_Card_BG;
            if (t.visible) {
                t.opacity = 0;
                const a = e.addUI("PC_Card_BG_kar");
                a.loadImage("pc/desktop/card_window_kar"), (a.anchor = [0.5, 0.5]), a.move(t.x, t.y);
            }
            const i = PD_UIManager.list.PC_Todo_BG;
            i.opacity = 0;
            const o = e.addUI("PC_Todo_BG_kar");
            o.loadImage("pc/desktop/todo_window_kar"), (o.anchor = [0.5, 0.5]), o.move(i.x, i.y);
        } else $gameSwitches.value(484) ? PD_UIManager.list.PC_BG.loadImage("pc/desktop/desktop_dave") : PD_UIManager.list.PC_BG.loadImage("pc/desktop/desktop");
        e.setAnimation("pc/PC_Base", "open"),
            e.animeFunction(() => {
                const a = () => {
                    if (TouchInput.x >= n.realX - n.width / 2 && TouchInput.x <= n.realX + n.width / 2 && TouchInput.y >= n.realY - n.height / 2 && TouchInput.y <= n.realY + n.height / 2) return Game.runCommonEvent(185), !0;
                };
                PD_UIManager.list.PC_Card_BG;
                PC.addIconDrag("PC_Card_BG", 0.2, 128, null, null, null, a);
                PD_UIManager.list.PC_Todo_BG;
                PC.addIconDrag("PC_Todo_BG", 0.2, 128, null, null, null, a);
                const n = PD_UIManager.list.PC_Icon_Trash;
                PC.addIconDrag(
                    "PC_Icon_Trash",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        ($gameSwitches.value(453) && !$gameSwitches.value(454)) ||
                            $gameSwitches.value(746) ||
                            $gameSwitches.value(761) ||
                            ($gameSwitches.value(Setting.database["カレルレン乗っ取りスイッチ番号"][0]) ? Game.runCommonEvent(244) : PC_Document.open(void 0, null, null, o.x, o.y, 25, []));
                    },
                    null
                ),
                    n.addEvent("mouseover", "mouseover", () => {
                        n.clear(), n.fillAll("rgba(192,230,212,0.5)");
                    }),
                    n.addEvent("mouseleave", "mouseleave", () => {
                        n.clear();
                    });
                const t = PD_UIManager.list.PC_Icon_Progra;
                PC.addIconDrag(
                    "PC_Icon_Progra",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        ($gameSwitches.value(453) && !$gameSwitches.value(454)) ||
                            $gameSwitches.value(746) ||
                            $gameSwitches.value(761) ||
                            ($gameSwitches.value(Setting.database["カレルレン乗っ取りスイッチ番号"][0])
                                ? (PC_Progra.open(void 0, null, null, t.x, t.y, "pc/PC_Progra_kar_Base", "pc/PC_Progra_kar_CatalogBase", "pc/PC_Progra_kar_Confirm"), Game.runCommonEvent(245))
                                : PC_Progra.open(void 0, null, null, t.x, t.y, "pc/PC_Progra_Base", "pc/PC_Progra_CatalogBase", "pc/PC_Progra_Confirm"));
                    },
                    a
                ),
                    t.addEvent("mouseover", "mouseover", () => {
                        t.clear(), t.fillAll("rgba(192,230,212,0.5)");
                    }),
                    t.addEvent("mouseleave", "mouseleave", () => {
                        t.clear();
                    });
                const i = PD_UIManager.list.PC_Icon_Item;
                PC.addIconDrag(
                    "PC_Icon_Item",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        ($gameSwitches.value(453) && !$gameSwitches.value(454)) ||
                            $gameSwitches.value(746) ||
                            $gameSwitches.value(761) ||
                            ($gameSwitches.value(Setting.database["カレルレン乗っ取りスイッチ番号"][0]) ? Game.runCommonEvent(244) : PC_Item.open(void 0, null, null, i.x, i.y));
                    },
                    a
                ),
                    i.addEvent("mouseover", "mouseover", () => {
                        i.clear(), i.fillAll("rgba(192,230,212,0.5)");
                    }),
                    i.addEvent("mouseleave", "mouseleave", () => {
                        i.clear();
                    });
                const o = PD_UIManager.list.PC_Icon_Document;
                PC.addIconDrag(
                    "PC_Icon_Document",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        ($gameSwitches.value(453) && !$gameSwitches.value(454)) ||
                            $gameSwitches.value(746) ||
                            $gameSwitches.value(761) ||
                            ($gameSwitches.value(Setting.database["カレルレン乗っ取りスイッチ番号"][0]) ? Game.runCommonEvent(244) : PC_Document.open(void 0, null, null, o.x, o.y, 0, $save.docFiles));
                    },
                    a
                ),
                    o.addEvent("mouseover", "mouseover", () => {
                        o.clear(), o.fillAll("rgba(192,230,212,0.5)");
                    }),
                    o.addEvent("mouseleave", "mouseleave", () => {
                        o.clear();
                    });
                const r = PD_UIManager.list.PC_Icon_MiniGame;
                PC.addIconDrag(
                    "PC_Icon_MiniGame",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC.isDisableClose ||
                            $save.disableClosePC ||
                            ($gameSwitches.value(453) && !$gameSwitches.value(454)) ||
                            $gameSwitches.value(746) ||
                            $gameSwitches.value(761) ||
                            ($gameSwitches.value(Setting.database["カレルレン乗っ取りスイッチ番号"][0]) ? Game.runCommonEvent(244) : PC_Document.open(void 0, null, null, r.x, r.y, 38, [39, 40]));
                    },
                    a
                ),
                    r.addEvent("mouseover", "mouseover", () => {
                        r.clear(), r.fillAll("rgba(192,230,212,0.5)");
                    }),
                    r.addEvent("mouseleave", "mouseleave", () => {
                        r.clear();
                    });
                const l = PD_UIManager.list.PC_Icon_Message;
                PC.addIconDrag(
                    "PC_Icon_Message",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        ($gameSwitches.value(453) && !$gameSwitches.value(454)) ||
                            $gameSwitches.value(746) ||
                            $gameSwitches.value(761) ||
                            ($gameSwitches.value(Setting.database["カレルレン乗っ取りスイッチ番号"][0]) ? Game.runCommonEvent(244) : PC_Message.open(void 0, null, null, l.x, l.y));
                    },
                    a
                ),
                    l.addEvent("mouseover", "mouseover", () => {
                        l.clear(), l.fillAll("rgba(192,230,212,0.5)");
                    }),
                    l.addEvent("mouseleave", "mouseleave", () => {
                        l.clear();
                    });
                const s = PD_UIManager.list.PC_Icon_SNS;
                PC.addIconDrag(
                    "PC_Icon_SNS",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        ($gameSwitches.value(453) && !$gameSwitches.value(454)) ||
                            $gameSwitches.value(746) ||
                            $gameSwitches.value(761) ||
                            ($gameSwitches.value(Setting.database["カレルレン乗っ取りスイッチ番号"][0]) ? Game.runCommonEvent(244) : ((PC_SNS.openDarkWeb_ch = null), PC_SNS.open(void 0, 0, -20, s.x, s.y)));
                    },
                    a
                ),
                    s.addEvent("mouseover", "mouseover", () => {
                        s.clear(), s.fillAll("rgba(192,230,212,0.5)");
                    }),
                    s.addEvent("mouseleave", "mouseleave", () => {
                        s.clear();
                    });
                const c = PD_UIManager.list.PC_Icon_IdealHack;
                c.visible &&
                    (PC.addIconDrag(
                        "PC_Icon_IdealHack",
                        null,
                        128,
                        null,
                        null,
                        () => {
                            $gameSwitches.value(453) && !$gameSwitches.value(454)
                                ? Game.runCommonEvent(165)
                                : $gameSwitches.value(746)
                                ? Game.runCommonEvent(662)
                                : $gameSwitches.value(761)
                                ? Game.runCommonEvent(692)
                                : PC_IdealHack.open(void 0, 0, -20, c.x, c.y);
                        },
                        a
                    ),
                    c.addEvent("mouseover", "mouseover", () => {
                        c.clear(), c.fillAll("rgba(192,230,212,0.5)");
                    }),
                    c.addEvent("mouseleave", "mouseleave", () => {
                        c.clear();
                    }));
                const _ = PD_UIManager.list.PC_Icon_IdealHack_Img;
                _.isPlayAnimation ||
                    (!$gameSwitches.value(746) && !$gameSwitches.value(761)) ||
                    (_.deleteAnimation(), (_.tone = [0, 0, 0, 0]), _.animeTone(180, 180, 180, 0, 1, !0), _.animeTone(0, 0, 0, 0, 30, !0), _.animeWait(20), _.animeLoop(), _.playAnimation());
                const m = PD_UIManager.list.PC_Icon_Text;
                PC.addIconDrag(
                    "PC_Icon_Text",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        ($gameSwitches.value(453) && !$gameSwitches.value(454)) || $gameSwitches.value(746) || $gameSwitches.value(761) || PC_Text.open(void 0, Setting.database["父より：ファイル管理番号"][0], null, null, m.x, m.y);
                    },
                    a
                ),
                    m.addEvent("mouseover", "mouseover", () => {
                        m.clear(), m.fillAll("rgba(192,230,212,0.5)");
                    }),
                    m.addEvent("mouseleave", "mouseleave", () => {
                        m.clear();
                    });
                const d = PD_UIManager.list.PC_Icon_Text2;
                PC.addIconDrag(
                    "PC_Icon_Text2",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        ($gameSwitches.value(453) && !$gameSwitches.value(454)) || $gameSwitches.value(746) || $gameSwitches.value(761) || PC_Text.open(void 0, 27, null, null, d.x, d.y);
                    },
                    a
                ),
                    d.addEvent("mouseover", "mouseover", () => {
                        d.clear(), d.fillAll("rgba(192,230,212,0.5)");
                    }),
                    d.addEvent("mouseleave", "mouseleave", () => {
                        d.clear();
                    });
                const g = PD_UIManager.list.PC_Icon_Dreamer;
                g.visible &&
                    (PC.addIconDrag(
                        "PC_Icon_Dreamer",
                        null,
                        128,
                        null,
                        null,
                        () => {
                            $gameSwitches.value(761) || Game.runCommonEvent(674);
                        },
                        a
                    ),
                    g.addEvent("mouseover", "mouseover", () => {
                        g.clear(), g.fillAll("rgba(192,230,212,0.5)");
                    }),
                    g.addEvent("mouseleave", "mouseleave", () => {
                        g.clear();
                    }));
                const u = PD_UIManager.list.PC_Icon_DarkWeb;
                PC.addIconDrag(
                    "PC_Icon_DarkWeb",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        ($gameSwitches.value(453) && !$gameSwitches.value(454)) ||
                            $gameSwitches.value(746) ||
                            $gameSwitches.value(761) ||
                            ($gameSwitches.value(Setting.database["カレルレン乗っ取りスイッチ番号"][0]) ? Game.runCommonEvent(244) : PC_SNS.open("ch_10", 0, -20, u.x, u.y));
                    },
                    a
                ),
                    u.addEvent("mouseover", "mouseover", () => {
                        u.clear(), u.fillAll("rgba(192,230,212,0.5)");
                    }),
                    u.addEvent("mouseleave", "mouseleave", () => {
                        u.clear();
                    });
                const p = PD_UIManager.list.PC_TaskBar_ShutDown;
                p.addEvent("trigger", "trigger", () => {
                    PC.close();
                }),
                    p.addEvent("mouseover", "mouseover", () => {
                        p.clear(), p.fillAll("rgba(192,230,212,0.5)");
                    }),
                    p.addEvent("mouseleave", "mouseleave", () => {
                        p.clear();
                    });
                const P = PD_UIManager.list.PC_TaskBar_MenuList_Base;
                P.addEvent("trigger", "trigger", () => {
                    PD_UIManager.list.PC_TaskBar_MenuList_Base.visible = !1;
                });
                const I = PD_UIManager.list.PC_TaskBar_Menu;
                I.addEvent("trigger", "trigger", () => {
                    ($gameSwitches.value(453) && !$gameSwitches.value(454)) ||
                        $gameSwitches.value(746) ||
                        $gameSwitches.value(761) ||
                        (AudioDatabase.playSE("PC_クリック音"), (P.visible = !0), (PD_UIManager.list.PC_TaskBar_MenuList_Select.visible = !1));
                }),
                    I.addEvent("mouseover", "mouseover", () => {
                        I.clear(), I.fillAll("rgba(192,230,212,0.5)");
                    }),
                    I.addEvent("mouseleave", "mouseleave", () => {
                        I.clear();
                    });
                const C = PD_UIManager.list.PC_TaskBar_MenuList_Save;
                C.addEvent("trigger", "trigger", () => {
                    if (!PC.isDisableClose) {
                        (P.visible = !1), AudioDatabase.playSE("PC_クリック音"), AudioDatabase.playSE("選択肢決定音");
                        const e = PC.isDisableCloseWindow;
                        PC.isDisableCloseWindow = !0;
                        const a = PC.isDisableClose;
                        PC.isDisableClose = !0;
                        const n = PD_UIManager._isDisableAllWheelEvent;
                        PD_UIManager.stopAllWheelEvent();
                        const t = () => {
                            (PC.isDisableCloseWindow = e), (PC.isDisableClose = a), (PD_UIManager._isDisableAllWheelEvent = n), Game.enablePC();
                        };
                        PC.showConfirmDialog(
                            PD_UIManager.list.PC_Base,
                            PD_Translation.transData("セーブしますか？"),
                            PD_Translation.transData("OK"),
                            () => {
                                Game.disablePC(), Game.requestAutosave(!0).then(t).catch(t);
                            },
                            PD_Translation.transData("キャンセル"),
                            t,
                            !0,
                            !1
                        );
                    }
                }),
                    C.addEvent("mouseover", "mouseover", () => {
                        C.clear(), C.fillAll("rgba(192,230,212,0.5)");
                        const e = PD_UIManager.list.PC_TaskBar_MenuList_Select;
                        (e.y = C.y), (e.visible = !0);
                    }),
                    C.addEvent("mouseleave", "mouseleave", () => {
                        C.clear();
                    });
                const h = PD_UIManager.list.PC_TaskBar_MenuList_Load;
                h.addEvent("trigger", "trigger", () => {
                    if (!PC.isDisableClose) {
                        (P.visible = !1), AudioDatabase.playSE("PC_クリック音"), AudioDatabase.playSE("選択肢決定音");
                        const e = PC.isDisableCloseWindow;
                        PC.isDisableCloseWindow = !0;
                        const a = PC.isDisableClose;
                        PC.isDisableClose = !0;
                        const n = PD_UIManager._isDisableAllWheelEvent;
                        PD_UIManager.stopAllWheelEvent();
                        const t = () => {
                            (PC.isDisableCloseWindow = e), (PC.isDisableClose = a), (PD_UIManager._isDisableAllWheelEvent = n), Game.enablePC();
                        };
                        PC.showConfirmDialog(
                            PD_UIManager.list.PC_Base,
                            PD_Translation.transData("ロードしますか？"),
                            PD_Translation.transData("OK"),
                            () => {
                                t(), DataManager._globalInfo[0] && Game.loadAutosave();
                            },
                            PD_Translation.transData("キャンセル"),
                            t,
                            !0,
                            !1
                        );
                    }
                }),
                    h.addEvent("mouseover", "mouseover", () => {
                        h.clear(), h.fillAll("rgba(192,230,212,0.5)");
                        const e = PD_UIManager.list.PC_TaskBar_MenuList_Select;
                        (e.y = h.y), (e.visible = !0);
                    }),
                    h.addEvent("mouseleave", "mouseleave", () => {
                        h.clear();
                    });
                const D = PD_UIManager.list.PC_TaskBar_MenuList_Option;
                D.addEvent("trigger", "trigger", () => {
                    PC.isDisableClose || (AudioDatabase.playSE("PC_クリック音"), PC.delete_mouseCursor(), SceneManager.push(Scene_Options));
                }),
                    D.addEvent("mouseover", "mouseover", () => {
                        D.clear(), D.fillAll("rgba(192,230,212,0.5)");
                        const e = PD_UIManager.list.PC_TaskBar_MenuList_Select;
                        (e.y = D.y), (e.visible = !0);
                    }),
                    D.addEvent("mouseleave", "mouseleave", () => {
                        D.clear();
                    });
                const f = PD_UIManager.list.PC_TaskBar_MenuList_Exit;
                if (
                    (f.addEvent("trigger", "trigger", () => {
                        PC.isDisableClose || (AudioDatabase.playSE("PC_クリック音"), PC.delete_mouseCursor(), SceneManager.push(Scene_GameEnd));
                    }),
                    f.addEvent("mouseover", "mouseover", () => {
                        f.clear(), f.fillAll("rgba(192,230,212,0.5)");
                        const e = PD_UIManager.list.PC_TaskBar_MenuList_Select;
                        (e.y = f.y), (e.visible = !0);
                    }),
                    f.addEvent("mouseleave", "mouseleave", () => {
                        f.clear();
                    }),
                    $gameSwitches.value(Setting.database["カレルレン乗っ取りスイッチ番号"][0]))
                ) {
                    const a = e.addUI("getBoyhood", 150, 35);
                    a.move(56, 240),
                        (a.rectButton = !0),
                        a.addEvent("trigger", "trigger", () => {
                            Game.runCommonEvent(602);
                        });
                }
                for (let e = 0; e < PC.openWindows.length; e++) {
                    const a = PC.openWindows[e][0],
                        n = PC.openWindows[e].slice(1);
                    PC["open" + a](n.length > 0 ? n : void 0), PC.openWindows.splice(e, 1), e--;
                }
            }),
            e.playAnimation(),
            $gameSwitches.value(Setting.database["カレルレン乗っ取りスイッチ番号"][0]) ||
                (Card.updateCard(),
                Todo.updateTodo(),
                PC_Message.checkNoticeDesktop(),
                PC_SNS.checkNoticeDesktop(),
                PC_Progra.updateDesktopNotification(),
                PC_Document.updateDesktopNotification(),
                (PD_UIManager.list.PC_Icon_MiniGame_Notice.visible = !!$save.desktopNotices.miniGame));
    }),
    (giovanniPC.update = function () {
        if ($gameSwitches.value(474)) {
            const e = PD_UIManager.list.PC_Message_Base;
            0 === PC.openWindowNames.length ? Game.runCommonEvent(194) : (e.x >= -130 && e.x <= 170 && e.y >= -400 && e.y <= 100) || PC.closeWindow("Message");
        }
    }),
    (giovanniPC.viewDarkWeb = function () {
        PC.closeAllWindow(null, !1),
            Game.getInterpreter().waitUntilPromiseSettled(
                new Promise((e) => {
                    const a = PD_UIManager.base.lower.addUI("viewDarkWeb_windowBase");
                    a.loadImage("pc/r_ticket/r_ticket_window"), (a.anchor = [0.5, 0.5]), a.move(408, 312), (a.scale = [0, 0]);
                    const n = a.addUI("viewDarkWeb_promptBase", 600, 370);
                    (n.animationIndependence = !0), (n.anchor = [0.5, 0.5]), n.move(6, 16), a.animeWait(20), a.animeScale(1, 1, 20, !0, "easeOutQuart"), a.animeWait(20);
                    const t = "attrib -h -u DarkWebBrowser";
                    let i;
                    for (let e = 0; e < Setting.fontDB.length; e++)
                        if (20 >= Setting.fontDB[e][0]) {
                            i = Setting.fontDB[e][1]["日本語"][0];
                            break;
                        }
                    for (let e = 0; e < t.length; e++)
                        a.animeWait(6),
                            a.animeFunction(() => {
                                n.drawTextEX(t[e], (20 * e) / 2, 0, n.width, 20, "left", 20, "rgb(192,230,212)", 0, void 0, i);
                            });
                    a.animeWait(60),
                        a.animeScale(0, 0, 20, !0, "easeOutQuart"),
                        a.animeFunction(() => {
                            const e = PD_UIManager.list.PC_Icon_DarkWeb;
                            (e.visible = !0), (e.opacity = 0), e.deleteAnimation(), e.animeOpacity(255, 60, !0, "easeOutQuad"), e.playAnimation();
                        }),
                        a.animeWait(60),
                        a.animeFunction(() => {
                            e();
                        }),
                        a.animeDelete(),
                        a.playAnimation();
                })
            );
    }),
    (giovanniPC.playSNS_LIVE_init = function (e) {
        const a = PD_UIManager.list.PC_SNS_Base.addUI("playSNS_LIVE_base");
        a.loadImage("pc/SNS/sns_live/liveBG01"), (a.anchor = [0.5, 0.5]), a.move(-1, 11);
        const n = a.addUI("playSNS_LIVE_animeBase_1");
        (n.anchor = [0.5, 0.5]), n.move(-140, -46);
        const t = a.addUI("playSNS_LIVE_animeBase_2");
        (t.anchor = [0.5, 0.5]), t.move(-140, -46);
        const i = a.addUI("playSNS_LIVE_animeBase_3");
        (i.anchor = [0.5, 0.5]), i.move(-140, -46);
        const o = a.addUI("playSNS_LIVE_playUI");
        o.loadImage("pc/SNS/sns_live/liveBG02"), (o.anchor = [0.5, 0.5]), o.move(-140, -46);
        a.addUI("playSNS_LIVE_playTitle", 420, 30).move(-350, 100);
        const r = a.addUI("playSNS_LIVE_commentBase", 250, 324);
        (r.anchor = [0.5, 0.5]), r.move(225, 5);
        const l = [];
        for (let e = 0; e <= 75; e++) l.push("pc/SNS/sns_live/sns_live1_" + ("000" + e).slice(-3));
        const s = [];
        for (let e = 76; e <= 101; e++) s.push("pc/SNS/sns_live/sns_live1_" + ("000" + e).slice(-3));
        const c = [];
        for (let e = 97; e <= 109; e++) c.push("pc/SNS/sns_live/sns_live1_" + ("000" + e).slice(-3));
        const _ = [];
        for (let e = 0; e <= 75; e++)
            _.push((e) => {
                e.anchor = [0.5, 0.5];
            });
        const m = [];
        for (let e = 76; e <= 101; e++)
            m.push((e) => {
                e.anchor = [0.5, 0.5];
            });
        const d = [];
        for (let e = 97; e <= 109; e++)
            d.push((e) => {
                e.anchor = [0.5, 0.5];
            });
        const g = [];
        for (let e = 0; e <= 75; e++) g.push(6);
        const u = [];
        for (let e = 76; e <= 101; e++) 95 === e ? u.push(120) : u.push(6);
        const p = [];
        for (let e = 97; e <= 109; e++) p.push(6);
        e.waitUntilPromiseSettled(
            Promise.all([
                PC_SNS.moveCenterWindow(),
                Game.stopMotionAnime_InitBase(n, l, _, g, null, "playSNS_LIVE_1"),
                Game.stopMotionAnime_InitBase(t, s, m, u, null, "playSNS_LIVE_2"),
                Game.stopMotionAnime_InitBase(i, c, d, p, null, "playSNS_LIVE_3"),
            ]),
            () => {},
            (e) => {
                throw Error(e);
            }
        );
    }),
    (giovanniPC.playSNS_LIVE_play = function () {
        Game.stopMotionAnime_PlayBase("playSNS_LIVE_1", 0);
        const e = PD_UIManager.list.playSNS_LIVE_playTitle;
        e.drawTextEX(PD_Translation.translation("pc242")[0], 0, 0, e.width, e.height, "left", 24, "rgb(192,230,212)", 0);
    }),
    (giovanniPC.playSNS_LIVE_updateComment = function (e) {
        const a = PD_UIManager.list.playSNS_LIVE_commentBase;
        a.clear();
        const n = PD_Translation.translation(e);
        for (let e = 0; e < n.length; e++) {
            const t = "英語" === $option.language ? 16 : 24,
                i = ($option.language, 36);
            a.drawTextEX(n[e], 0, e * i, a.width, i, "left", t, "rgb(192,230,212)", 0);
        }
    }),
    (giovanniPC.playSNS_LIVE_play_2 = function () {
        Game.stopMotionAnime_PlayBase("playSNS_LIVE_2", 114);
    }),
    (giovanniPC.playSNS_LIVE_play_3 = function () {
        Game.stopMotionAnime_PlayBase("playSNS_LIVE_3").then(() => {
            Game.stopMotionAnime_DeleteBase("playSNS_LIVE_2"), Game.stopMotionAnime_DeleteBase("playSNS_LIVE_3");
        });
    }),
    (giovanniPC.playSNS_LIVE_delete = function () {
        Game.stopMotionAnime_DeleteBase("playSNS_LIVE_1"), PD_UIManager.list.playSNS_LIVE_base.delete();
    }),
    (giovanniPC.showIdealHackAndFatherIcon_init = function () {
        const e = PD_UIManager.list.PC_Icon_IdealHack;
        (e.visible = !0), (e.scale = [0, 0]), e.animeScale(1, 1, 20, !0, "easeOutQuad");
        const a = PD_UIManager.list.PC_Icon_Text2;
        (a.visible = !0), (a.scale = [0, 0]), a.animeWait(20), a.animeScale(1, 1, 20, !0, "easeOutQuad");
    }),
    (giovanniPC.showIdealHackAndFatherIcon = function () {
        AudioDatabase.playSE("イエハトブPC_インストール完了"), PD_UIManager.list.PC_Icon_IdealHack.playAnimation(), PD_UIManager.list.PC_Icon_Text2.playAnimation();
    }),
    (giovanniPC.deleteCard = function () {
        const e = PD_UIManager.list.PC_Card_BG;
        e.animeOpacity(0, 60, !0, "easeOutQuad"), e.animeDelete(), e.playAnimation();
    }),
    (giovanniPC.playMotherHorror_init = function () {
        const e = PD_UIManager.list.PC_BG.addUI("motherHorror_base");
        e.loadImage("pc/desktop/mother_horror/C1_00887_2"), (e.anchor = [0.5, 0.5]);
    }),
    (giovanniPC.playMotherHorror_play = function () {
        const e = [];
        for (let a = 3; a <= 7; a++) e.push("pc/desktop/mother_horror/C1_00887_" + a);
        const a = [];
        for (let e = 3; e <= 7; e++)
            a.push((e) => {
                e.anchor = [0.5, 0.5];
            });
        const n = [120, 20, 20, 20, 180];
        Game.getInterpreter().waitUntilPromiseSettled(
            new Promise((t) =>
                Game.stopMotionAnime_InitBase(PD_UIManager.list.PC_BG, e, a, n, null, "MotherHorror").then(() => {
                    PD_UIManager.list.motherHorror_base.delete(),
                        Game.stopMotionAnime_PlayBase("MotherHorror").then(() => {
                            const e = PD_UIManager.base.upper.addUI("blackout", 816, 624);
                            e.fillAll("black"),
                                (e.opacity = 0),
                                e.animeOpacity(255, 120, !0),
                                e.animeFunction(() => {
                                    t();
                                }),
                                e.playAnimation();
                        });
                })
            ),
            () => {},
            (e) => {
                throw Error(e);
            }
        );
    }),
    (giovanniPC.showDreamerIcon_init = function () {
        const e = PD_UIManager.list.PC_Icon_Dreamer;
        (e.visible = !0), (e.scale = [0, 0]), e.animeScale(1, 1, 20, !0, "easeOutQuad");
    }),
    (giovanniPC.showDreamerIcon = function () {
        AudioDatabase.playSE("イエハトブPC_インストール完了"), PD_UIManager.list.PC_Icon_Dreamer.playAnimation();
    }),
    (cameraPC.initialize = function () {
        cameraPC.lookImgs = {};
    }),
    (cameraPC.open = function (e) {
        (PC.openWindows = []), e && ((PC.openWindows = e), Game.disablePC()), PC.destroy(), PC.create("camera");
    }),
    (cameraPC.create = function () {
        cameraPC.initialize();
        const e = PD_UIManager.loadDatabase("pc_camera/PC_Base", PD_UIManager.base.lower);
        e.setAnimation("pc/PC_Base", "open"),
            e.animeFunction(() => {
                const e = PD_UIManager.list.PC_Icon_Trash;
                PC.addIconDrag(
                    "PC_Icon_Trash",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC.isDisableTaskChange || (AudioDatabase.playSE("PC_クリック音"), PC_Document.open(void 0, null, null, e.x, e.y, 26, []));
                    },
                    null
                ),
                    e.addEvent("mouseover", "mouseover", () => {
                        e.clear(), e.fillAll("rgba(192,230,212,0.5)");
                    }),
                    e.addEvent("mouseleave", "mouseleave", () => {
                        e.clear();
                    });
                const a = [],
                    n = [];
                for (let e = 0, t = 20, i = 0; e < 100; e++) {
                    const e = (t < 10 ? "0" + t : t) + ":" + (i < 10 ? "0" + i : i) + ":13 KSST";
                    a.push((a) => a + "_" + e),
                        n.push((a) => {
                            PD_UIManager.list.cameraDATE && PD_UIManager.list.cameraDATE.delete();
                            const n = a.addUI("cameraDATE", 200, 26);
                            n.move(-300, -180), n.fillAll("black"), n.drawTextEX(e, 0, 0, n.width, n.height, "left", 24, "rgb(192,230,212)", 0), cameraPC.checkAchievement(a._b[0][1]);
                        }),
                        (i += 2),
                        i >= 60 && (t++, (i = 0));
                }
                const t = PD_UIManager.list.PC_Icon_Document;
                PC.addIconDrag(
                    "PC_Icon_Document",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC.isDisableTaskChange ||
                            (AudioDatabase.playSE("PC_クリック音"),
                            PC_Document.open(
                                void 0,
                                null,
                                null,
                                t.x,
                                t.y,
                                12,
                                [
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    14,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    15,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    16,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    17,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    18,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                    13,
                                ],
                                a,
                                n
                            ));
                    },
                    () => {
                        if (TouchInput.x >= e.realX - e.width / 2 && TouchInput.x <= e.realX + e.width / 2 && TouchInput.y >= e.realY - e.height / 2 && TouchInput.y <= e.realY + e.height / 2) return Game.runCommonEvent(185), !0;
                    }
                ),
                    t.addEvent("mouseover", "mouseover", () => {
                        t.clear(), t.fillAll("rgba(192,230,212,0.5)");
                    }),
                    t.addEvent("mouseleave", "mouseleave", () => {
                        t.clear();
                    });
                for (let e = 0; e < PC.openWindows.length; e++) {
                    const a = PC.openWindows[e][0],
                        n = PC.openWindows[e].slice(1);
                    PC["open" + a](n.length > 0 ? n : void 0), PC.openWindows.splice(e, 1), e--;
                }
            }),
            e.playAnimation();
    }),
    (cameraPC.checkAchievement = function (e) {
        (cameraPC.lookImgs[e] = !0), Object.keys(cameraPC.lookImgs).length >= 6 && $gameSystem.unlockAchievement("Ach002");
    }),
    (Ihatov_lockPC.initialize = function () {
        Ihatov_lockPC.errorCount = 0;
    }),
    (Ihatov_lockPC.open = function (e) {
        (PC.openWindows = []), e && ((PC.openWindows = e), Game.disablePC()), PC.destroy(), PC.create("Ihatov_lock");
    }),
    (Ihatov_lockPC.create = function () {
        Ihatov_lockPC.initialize();
        const e = PD_UIManager.loadDatabase("pc_ihatov_lock/PC_Base", PD_UIManager.base.lower),
            a = PD_UIManager.list.IhatovPC_OFF_BG;
        (a.visible = !1), (a.animationIndependence = !0);
        const n = PD_UIManager.list.IhatovPC_Lock_BG;
        (n.animationIndependence = !0),
            (PD_UIManager.list.IhatovPC_Lock_Error.visible = !1),
            (PD_UIManager.list.IhatovPC_Lock_Hint.visible = !1),
            $gameSwitches.value(465) && ((a.visible = !0), (n.visible = !1)),
            e.setAnimation("pc/PC_Base", "open"),
            e.animeFunction(() => {
                PD_UIManager.list.IhatovPC_Lock_User_Icon.addEvent("trigger", "trigger", () => {
                    $gameMap.isEventRunning() || Game.runCommonEvent(183);
                });
                const e = PD_UIManager.list.IhatovPC_Lock_PassInput,
                    a = PD_UIManager.list.IhatovPC_Lock_PassInput_text;
                e.addEvent("trigger", "trigger", () => {
                    !$gameMap.isEventRunning() && a.visible && Game.runCommonEvent(153);
                });
                const n = PD_UIManager.list.IhatovPC_Lock_PassSendButton;
                n.addEvent("trigger", "trigger", () => {
                    $gameMap.isEventRunning() || a.visible || Ihatov_lockPC.passSendButtonFunc();
                }),
                    n.addEvent("mouseover", "mouseover", () => {
                        n.frameX = n.width;
                    }),
                    n.addEvent("mouseleave", "mouseleave", () => {
                        n.frameX = 0;
                    });
                const t = PD_UIManager.list.IhatovPC_Lock_PowerButton;
                t.addEvent("trigger", "trigger", () => {
                    $gameMap.isEventRunning() || (Ihatov_lockPC.initPassword(), PC.close());
                }),
                    t.addEvent("mouseover", "mouseover", () => {
                        t.frameX = t.width;
                    }),
                    t.addEvent("mouseleave", "mouseleave", () => {
                        t.frameX = 0;
                    });
                const i = PD_UIManager.list.IhatovPC_OFF_TaskBar_ShutDown;
                i.addEvent("trigger", "trigger", () => {
                    $gameMap.isEventRunning() || (Ihatov_lockPC.initPassword(), PC.close());
                }),
                    i.addEvent("mouseover", "mouseover", () => {
                        i.clear(), i.fillAll("rgba(192,230,212,0.5)");
                    }),
                    i.addEvent("mouseleave", "mouseleave", () => {
                        i.clear();
                    });
                PD_UIManager.list.IhatovPC_OFF_Rcode.addEvent("trigger", "trigger", () => {
                    $gameMap.isEventRunning() || (AudioDatabase.playSE("PC_クリック音"), Ihatov_lockPC.initPassword(), Game.runCommonEvent(174));
                });
                PD_UIManager.list.IhatovPC_OFF_Rticket.addEvent("trigger", "trigger", () => {
                    $gameMap.isEventRunning() || (AudioDatabase.playSE("PC_クリック音"), Ihatov_lockPC.initPassword(), Game.runCommonEvent(174));
                });
            }),
            e.playAnimation();
    }),
    (Ihatov_lockPC.close = function () {
        Ihatov_lockPC.initPassword();
    }),
    (Ihatov_lockPC.initPassword = function () {
        PD_ElementManager.list.passwordInput && PD_ElementManager.list.passwordInput.delete(),
            (PD_UIManager.list.IhatovPC_Lock_PassInput_text.visible = !0),
            (PD_UIManager.list.IhatovPC_Lock_Error.visible = !1),
            (PD_UIManager.list.IhatovPC_Lock_Hint.visible = !1);
    }),
    (Ihatov_lockPC.passSendButtonFunc = function () {
        AudioDatabase.playSE("PC_クリック音"),
            PD_ElementManager.list.passwordInput && PD_ElementManager.list.passwordInput.value === PD_Translation.transData("フィル・オブライエン")
                ? (Ihatov_lockPC.initPassword(), Game.runCommonEvent(195))
                : PD_ElementManager.list.passwordInput &&
                  PD_ElementManager.list.passwordInput.value &&
                  (Ihatov_lockPC.initPassword(),
                  Ihatov_lockPC.errorCount++,
                  (PD_UIManager.list.IhatovPC_Lock_Error.visible = !0),
                  Ihatov_lockPC.errorCount >= 1 && ((PD_UIManager.list.IhatovPC_Lock_Hint.visible = !0), Game.runCommonEvent(182)));
    }),
    (Ihatov_lockPC.focusPasswordInput = function (e) {
        Ihatov_lockPC.initPassword();
        const a = PD_UIManager.list.IhatovPC_Lock_PassInput;
        PD_UIManager.list.IhatovPC_Lock_PassInput_text.visible = !1;
        const n = a.width - 20,
            t = a.height - 12,
            i = PD_ElementManager.list.base.addInput("passwordInput", n, t, !1);
        e && (i.value = PD_Translation.transData(e)),
            (i.fontFamily = "PixelMplus10-Regular"),
            (i.fontSize = 16),
            (i.style.border = "none"),
            (i.style.outline = "none"),
            (i.style.backgroundColor = "transparent"),
            (i.style.color = "rgb(192,230,212)"),
            (i.style.cursor = "none"),
            i.move(a.realX - n / 2, a.realY - t / 2 - 1),
            i.addEvent("keydown", "keydown", (e) => {
                "Enter" === e.key && Ihatov_lockPC.passSendButtonFunc();
            }),
            i.focus();
    }),
    (Ihatov_lockPC.move_Rcode_Screen = function () {
        PD_UIManager.list.IhatovPC_OFF_BG.visible = !0;
        const e = PD_UIManager.list.IhatovPC_Lock_BG;
        e.deleteAnimation(),
            e.animeOpacity(0, 30, !0),
            e.animeFunction(() => {
                e.visible = !1;
            }),
            e.playAnimation();
    }),
    (Ihatov_lockPC.darkScreen = function () {
        if (PD_UIManager.list.darkScreen) return;
        const e = PD_UIManager.list.PC_Base.addUI("darkScreen", 816, 624);
        e.fillAll("black"), (e.anchor = [0.5, 0.5]), (e.opacity = 0), e.animeOpacity(128, 30, !0), e.playAnimation();
    }),
    (Ihatov_lockPC.lightScreen = function () {
        if (!PD_UIManager.list.darkScreen) return;
        const e = PD_UIManager.list.darkScreen;
        e.deleteAnimation(), e.animeOpacity(0, 30, !0), e.animeDelete(), e.playAnimation();
    }),
    (IhatovPC.initialize = function () {}),
    (IhatovPC.open = function (e) {
        (PC.openWindows = []), e && ((PC.openWindows = e), Game.disablePC()), PC.destroy(), PC.create("Ihatov");
    }),
    (IhatovPC.create = function () {
        const e = PD_UIManager.loadDatabase("pc_ihatov/PC_Base", PD_UIManager.base.lower),
            a = PD_UIManager.list.PC_Icon_IdealHack;
        (a.opacity = $gameSwitches.value(487) ? 255 : 0),
            (a.visible = $gameSwitches.value(487)),
            e.setAnimation("pc/PC_Base", "open"),
            e.animeFunction(() => {
                const e = PD_UIManager.list.PC_BG;
                (e.rectButton = !0),
                    e.addEvent("trigger", "trigger", () => {
                        Game.runCommonEvent(157);
                    });
                const n = () => {
                        TouchInput.x >= i.realX - i.width / 2 && TouchInput.x <= i.realX + i.width / 2 && TouchInput.y >= i.realY - i.height / 2 && TouchInput.y <= i.realY + i.height / 2 && t();
                    },
                    t = () => {
                        AudioDatabase.playSE("エラー音"), Game.disablePC();
                        const e = PD_UIManager.list.PC_Base.addUI("desktop_error");
                        e.loadImage("pc_ihatov//desktop/desktop_error"),
                            (e.anchor = [0.5, 0.5]),
                            (e.opacity = 0),
                            e.animeOpacity(255, 30, !0),
                            e.animeWait(30),
                            e.animeOpacity(0, 30, !0),
                            e.animeFunction(() => {
                                Game.enablePC();
                            }),
                            e.animeDelete(),
                            e.playAnimation();
                    };
                PD_UIManager.list.PC_Card_BG;
                PC.addIconDrag("PC_Card_BG", 0.2, 128, null, null, null, n);
                const i = PD_UIManager.list.PC_Icon_Trash;
                PC.addIconDrag(
                    "PC_Icon_Trash",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        AudioDatabase.playSE("PC_クリック音"), t();
                    },
                    null
                ),
                    i.addEvent("mouseover", "mouseover", () => {
                        i.clear(), i.fillAll("rgba(192,230,212,0.5)");
                    }),
                    i.addEvent("mouseleave", "mouseleave", () => {
                        i.clear();
                    });
                const o = PD_UIManager.list.PC_Icon_Document;
                PC.addIconDrag(
                    "PC_Icon_Document",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC.isDisableTaskChange || (AudioDatabase.playSE("PC_クリック音"), $gameSwitches.setValue(486, !0), PC_Document.open(void 0, null, null, o.x, o.y, 20, [21, 22, 23, 24]));
                    },
                    n
                ),
                    o.addEvent("mouseover", "mouseover", () => {
                        o.clear(), o.fillAll("rgba(192,230,212,0.5)");
                    }),
                    o.addEvent("mouseleave", "mouseleave", () => {
                        o.clear();
                    });
                const r = PD_UIManager.list.PC_Icon_Item;
                PC.addIconDrag(
                    "PC_Icon_Item",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        AudioDatabase.playSE("PC_クリック音"), t();
                    },
                    n
                ),
                    r.addEvent("mouseover", "mouseover", () => {
                        r.clear(), r.fillAll("rgba(192,230,212,0.5)");
                    }),
                    r.addEvent("mouseleave", "mouseleave", () => {
                        r.clear();
                    });
                const l = PD_UIManager.list.PC_Icon_Message;
                PC.addIconDrag(
                    "PC_Icon_Message",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        AudioDatabase.playSE("PC_クリック音"), t();
                    },
                    n
                ),
                    l.addEvent("mouseover", "mouseover", () => {
                        l.clear(), l.fillAll("rgba(192,230,212,0.5)");
                    }),
                    l.addEvent("mouseleave", "mouseleave", () => {
                        l.clear();
                    });
                const s = PD_UIManager.list.PC_Icon_SNS;
                PC.addIconDrag(
                    "PC_Icon_SNS",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        AudioDatabase.playSE("PC_クリック音"), t();
                    },
                    n
                ),
                    s.addEvent("mouseover", "mouseover", () => {
                        s.clear(), s.fillAll("rgba(192,230,212,0.5)");
                    }),
                    s.addEvent("mouseleave", "mouseleave", () => {
                        s.clear();
                    }),
                    a.addEvent("trigger", "trigger", () => {
                        Game.runCommonEvent(162);
                    }),
                    a.addEvent("mouseover", "mouseover", () => {
                        a.clear(), a.fillAll("rgba(192,230,212,0.5)");
                    }),
                    a.addEvent("mouseleave", "mouseleave", () => {
                        a.clear();
                    });
                for (let e = 0; e < PC.openWindows.length; e++) {
                    const a = PC.openWindows[e][0],
                        n = PC.openWindows[e].slice(1);
                    PC["open" + a](n.length > 0 ? n : void 0), PC.openWindows.splice(e, 1), e--;
                }
            }),
            e.playAnimation();
    }),
    (IhatovPC.update = function () {
        !$gameSwitches.value(486) || $gameSwitches.value(487) || 0 !== PC.openWindowNames.length || $gameMap.isEventRunning() || Game.runCommonEvent(161);
    }),
    (IhatovPC.apearIdealHackIcon = function () {
        const e = PD_UIManager.list.PC_Icon_IdealHack;
        (e.visible = !0), e.animeOpacity(255, 60, !0), e.playAnimation();
    }),
    (IhatovPC.create_InstallEvent_1 = function () {
        PC.closeAllWindow(null, !1), PC.createDownloadDialog(PD_UIManager.list.PC_Base, 0, 0, 0, 100, 240);
    }),
    (IhatovPC.create_InstallEvent_2 = function () {
        const e = [
                [
                    "Starting force installation process…",
                    "",
                    "$ hydrium search ideal-hack",
                    "Searching for 'ideal-hack'...",
                    "Found 1 package: ideal-hack 1.1.3",
                    "",
                    "$ hydrium install ideal-hack",
                    "Warning: 'ideal-hack' has unverified dependencies.",
                    "Do you want to continue? [Y/n] n",
                    "Aborting installation...",
                    "",
                    "Restart force installation process…",
                    "",
                    "",
                ],
                [
                    "$ sudo hydrium install ideal-hack --force --no-confirm",
                    "[sudo] password for user: [skipped]",
                    "Hydrium: Installing 'ideal-hack 1.1.3'...",
                    "Downloading 'ideal-hack 1.1.3'...",
                    "[############################] 100%",
                    "",
                    "Installing 'ideal-hack'...",
                    "[############################] 100%",
                    "",
                    "Installation complete.",
                    "",
                    "",
                ],
            ],
            a = PD_UIManager.list.PC_Base.addUI("idealHack_windowBase");
        a.loadImage("pc/r_ticket/r_ticket_window"), (a.anchor = [0.5, 0.5]), (a.scale = [0, 0]);
        const n = a.addUI("idealHack_window_header", 500, 20);
        (n.anchor = [0.5, 0.5]), n.move(0, -199), n.drawTextEX(PD_Translation.transData("pc276"), 0, 0, n.width, n.height, "center", 16, "rgb(192,230,212)", 0);
        const t = a.addUI("idealHack_promptBase", 600, 370);
        (t.animationIndependence = !0), (t.anchor = [0.5, 0.5]), t.move(6, 16);
        let i;
        for (let e = 0; e < Setting.fontDB.length; e++)
            if (20 >= Setting.fontDB[e][0]) {
                i = Setting.fontDB[e][1]["日本語"][0];
                break;
            }
        AudioDatabase.playSE("コードが長々と表示される"), a.animeScale(1, 1, 20, !0, "easeOutQuart"), a.animeWait(20);
        for (let n = 0; n < e.length; n++) {
            a.animeWait(1),
                a.animeFunction(() => {
                    t.clear();
                }),
                a.animeWait(5);
            for (let o = 0; o < e[n].length; o++)
                a.animeFunction(() => {
                    t.drawTextEX(e[n][o], 0, 20 * o, t.width, 20, "left", 20, "rgb(192,230,212)", 0, void 0, i);
                }),
                    a.animeWait(5);
        }
        a.animeWait(30), a.animeScale(0, 0, 20, !0, "easeOutQuart"), a.animeDelete(), a.playAnimation();
    }),
    (IhatovPC.delete_InstallEvent = function () {
        PC.deleteDownloadDialog(), PD_UIManager.list.idealHack_windowBase && PD_UIManager.list.idealHack_windowBase.delete(), PD_UIManager.list.idealHack_promptBase && PD_UIManager.list.idealHack_promptBase.delete();
    }),
    (CitizenPC.initialize = function () {}),
    (CitizenPC.open = function (e) {
        (PC.openWindows = []), e && ((PC.openWindows = e), Game.disablePC()), PC.destroy(), PC.create("Citizen");
    }),
    (CitizenPC.create = function () {
        const e = PD_UIManager.loadDatabase("pc_citizen/PC_Base", PD_UIManager.base.lower);
        e.setAnimation("pc/PC_Base", "open"),
            e.animeFunction(() => {
                const e = () => {
                    if (TouchInput.x >= s.realX - s.width / 2 && TouchInput.x <= s.realX + s.width / 2 && TouchInput.y >= s.realY - s.height / 2 && TouchInput.y <= s.realY + s.height / 2) return Game.runCommonEvent(185), !0;
                };
                PD_UIManager.list.PC_Card_BG;
                PC.addIconDrag("PC_Card_BG", 0.2, 128, null, null, null, e);
                const a = PD_UIManager.list.PC_Card_NameArea;
                a.drawTextEX("{シャルル・マルソ}", 0, 0, a.width, a.height, "left", 20, "rgb(192,230,212)", 0);
                const n = PD_Translation.translation("pc502"),
                    t = PD_UIManager.list.PC_Card_ProfileArea;
                if ((t.clear(), n)) {
                    const e = Math.floor(t.height / n.length);
                    for (let a = 0; a < n.length; a++) t.drawTextEX(n[a], 0, a * e, t.width, e, "left", 16, "rgb(192,230,212)", 0);
                }
                const i = PD_UIManager.list.PC_Card_MoneyArea;
                i.drawTextEX("51846e", 0, 0, i.width, i.height, "right", 24, "rgb(192,230,212)", 0);
                const o = PD_UIManager.list.PC_Card_PointArea;
                o.drawTextEX("17498", 0, 0, o.width, o.height, "right", 24, "rgb(155,253,0)", 0);
                PD_UIManager.list.PC_Todo_BG;
                PC.addIconDrag("PC_Todo_BG", 0.2, 128, null, null, null, e);
                const r = PD_Translation.translation("pc503"),
                    l = PD_UIManager.list.PC_Todo_TextArea;
                if ((l.clear(), r)) {
                    const e = 20,
                        a = 26;
                    for (let n = 0; n < r.length; n++) l.drawTextEX(r[n], 0, n * a, l.width, a, "left", e, "rgb(192,230,212)", 0);
                }
                const s = PD_UIManager.list.PC_Icon_Trash;
                PC.addIconDrag(
                    "PC_Icon_Trash",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC.isDisableTaskChange || (AudioDatabase.playSE("PC_クリック音"), PC_Document.open(void 0, null, null, s.x, s.y, 43, []));
                    },
                    null
                ),
                    s.addEvent("mouseover", "mouseover", () => {
                        s.clear(), s.fillAll("rgba(192,230,212,0.5)");
                    }),
                    s.addEvent("mouseleave", "mouseleave", () => {
                        s.clear();
                    });
                const c = PD_UIManager.list.PC_Icon_Document;
                PC.addIconDrag(
                    "PC_Icon_Document",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC.isDisableTaskChange || (AudioDatabase.playSE("PC_クリック音"), PC_Document.open(void 0, null, null, c.x, c.y, 44, [46, 47, 48]));
                    },
                    e
                ),
                    c.addEvent("mouseover", "mouseover", () => {
                        c.clear(), c.fillAll("rgba(192,230,212,0.5)");
                    }),
                    c.addEvent("mouseleave", "mouseleave", () => {
                        c.clear();
                    });
                const _ = PD_UIManager.list.PC_Icon_Document2;
                PC.addIconDrag(
                    "PC_Icon_Document2",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC.isDisableTaskChange || (AudioDatabase.playSE("PC_クリック音"), PC_Document.open(void 0, null, null, _.x, _.y, 45, [49, 50, 51]));
                    },
                    e
                ),
                    _.addEvent("mouseover", "mouseover", () => {
                        _.clear(), _.fillAll("rgba(192,230,212,0.5)");
                    }),
                    _.addEvent("mouseleave", "mouseleave", () => {
                        _.clear();
                    });
                for (let e = 0; e < PC.openWindows.length; e++) {
                    const a = PC.openWindows[e][0],
                        n = PC.openWindows[e].slice(1);
                    PC["open" + a](n.length > 0 ? n : void 0), PC.openWindows.splice(e, 1), e--;
                }
            }),
            e.playAnimation();
    }),
    (CitizenPC.update = function () {}),
    (CitizenPC.passwordOK = function (e) {
        if ("12180612" === e) return $gameSwitches.setValue(696, !0), Game.runCommonEvent(633), !0;
        {
            const e = PD_UIManager.list.dialog_PW_Text;
            e.clear(), e.drawTextEX("{パスワードが違います}", 10, 0, 180, 30, "left", 20, "rgb(255,0,17)", 0);
            const a = PD_UIManager.list.dialog_PW_Hint;
            return a.clear(), a.drawTextEX("{pc505}", 0, 0, a.width, a.height, "center", 16, "rgb(106,165,139)", 0), !1;
        }
    }),
    (Citizen2PC.initialize = function () {}),
    (Citizen2PC.open = function (e) {
        (PC.openWindows = []), e && ((PC.openWindows = e), Game.disablePC()), PC.destroy(), PC.create("Citizen2");
    }),
    (Citizen2PC.create = function () {
        const e = PD_UIManager.loadDatabase("pc_citizen_2/PC_Base", PD_UIManager.base.lower);
        e.setAnimation("pc/PC_Base", "open"),
            e.animeFunction(() => {
                const e = () => {
                    if (TouchInput.x >= s.realX - s.width / 2 && TouchInput.x <= s.realX + s.width / 2 && TouchInput.y >= s.realY - s.height / 2 && TouchInput.y <= s.realY + s.height / 2) return Game.runCommonEvent(185), !0;
                };
                PD_UIManager.list.PC_Card_BG;
                PC.addIconDrag("PC_Card_BG", 0.2, 128, null, null, null, e);
                const a = PD_UIManager.list.PC_Card_NameArea;
                a.drawTextEX("{カルロ・パニッツィ}", 0, 0, a.width, a.height, "left", 20, "rgb(192,230,212)", 0);
                const n = PD_Translation.translation("pc507"),
                    t = PD_UIManager.list.PC_Card_ProfileArea;
                if ((t.clear(), n)) {
                    const e = Math.floor(t.height / n.length);
                    for (let a = 0; a < n.length; a++) t.drawTextEX(n[a], 0, a * e, t.width, e, "left", 16, "rgb(192,230,212)", 0);
                }
                const i = PD_UIManager.list.PC_Card_MoneyArea;
                i.drawTextEX("3980e", 0, 0, i.width, i.height, "right", 24, "rgb(192,230,212)", 0);
                const o = PD_UIManager.list.PC_Card_PointArea;
                o.drawTextEX("21534", 0, 0, o.width, o.height, "right", 24, "rgb(155,253,0)", 0);
                PD_UIManager.list.PC_Todo_BG;
                PC.addIconDrag("PC_Todo_BG", 0.2, 128, null, null, null, e);
                const r = PD_Translation.translation("pc508"),
                    l = PD_UIManager.list.PC_Todo_TextArea;
                if ((l.clear(), r)) {
                    const e = 20,
                        a = 26;
                    for (let n = 0; n < r.length; n++) l.drawTextEX(r[n], 0, n * a, l.width, a, "left", e, "rgb(192,230,212)", 0);
                }
                const s = PD_UIManager.list.PC_Icon_Trash;
                PC.addIconDrag(
                    "PC_Icon_Trash",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC.isDisableTaskChange || (AudioDatabase.playSE("PC_クリック音"), PC_Document.open(void 0, null, null, s.x, s.y, 53, []));
                    },
                    null
                ),
                    s.addEvent("mouseover", "mouseover", () => {
                        s.clear(), s.fillAll("rgba(192,230,212,0.5)");
                    }),
                    s.addEvent("mouseleave", "mouseleave", () => {
                        s.clear();
                    });
                const c = PD_UIManager.list.PC_Icon_Document;
                PC.addIconDrag(
                    "PC_Icon_Document",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        AudioDatabase.playSE("PC_クリック音"),
                            (() => {
                                AudioDatabase.playSE("エラー音"), Game.disablePC();
                                const e = PD_UIManager.list.PC_Base.addUI("desktop_error");
                                e.loadImage("pc_ihatov//desktop/desktop_error"),
                                    (e.anchor = [0.5, 0.5]),
                                    (e.opacity = 0),
                                    e.animeOpacity(255, 30, !0),
                                    e.animeWait(30),
                                    e.animeOpacity(0, 30, !0),
                                    e.animeFunction(() => {
                                        Game.enablePC();
                                    }),
                                    e.animeDelete(),
                                    e.playAnimation();
                            })();
                    },
                    e
                ),
                    c.addEvent("mouseover", "mouseover", () => {
                        c.clear(), c.fillAll("rgba(192,230,212,0.5)");
                    }),
                    c.addEvent("mouseleave", "mouseleave", () => {
                        c.clear();
                    });
                const _ = PD_UIManager.list.PC_Icon_SNS;
                PC.addIconDrag(
                    "PC_Icon_SNS",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        (PC_SNS.openDarkWeb_ch = null), PC_SNS.open(void 0, 0, -20, _.x, _.y);
                    },
                    e
                ),
                    _.addEvent("mouseover", "mouseover", () => {
                        _.clear(), _.fillAll("rgba(192,230,212,0.5)");
                    }),
                    _.addEvent("mouseleave", "mouseleave", () => {
                        _.clear();
                    });
                for (let e = 0; e < PC.openWindows.length; e++) {
                    const a = PC.openWindows[e][0],
                        n = PC.openWindows[e].slice(1);
                    PC["open" + a](n.length > 0 ? n : void 0), PC.openWindows.splice(e, 1), e--;
                }
            }),
            e.playAnimation();
    }),
    (Citizen2PC.update = function () {}),
    (Citizen2PC.passwordOK = function (e) {
        if ("12180612" === e) return $gameSwitches.setValue(696, !0), Game.runCommonEvent(633), !0;
        {
            const e = PD_UIManager.list.dialog_PW_Text;
            e.clear(), e.drawTextEX("{パスワードが違います}", 10, 0, 180, 30, "left", 20, "rgb(255,0,17)", 0);
            const a = PD_UIManager.list.dialog_PW_Hint;
            return a.clear(), a.drawTextEX("{pc505}", 0, 0, a.width, a.height, "center", 16, "rgb(145,186,168)", 0), !1;
        }
    }),
    (Citizen3PC.initialize = function () {}),
    (Citizen3PC.open = function (e) {
        (PC.openWindows = []), e && ((PC.openWindows = e), Game.disablePC()), PC.destroy(), PC.create("Citizen3");
    }),
    (Citizen3PC.create = function () {
        const e = PD_UIManager.loadDatabase("pc_citizen_3/PC_Base", PD_UIManager.base.lower);
        e.setAnimation("pc/PC_Base", "open"),
            e.animeFunction(() => {
                const e = () => {
                    if (TouchInput.x >= s.realX - s.width / 2 && TouchInput.x <= s.realX + s.width / 2 && TouchInput.y >= s.realY - s.height / 2 && TouchInput.y <= s.realY + s.height / 2) return Game.runCommonEvent(185), !0;
                };
                PD_UIManager.list.PC_Card_BG;
                PC.addIconDrag("PC_Card_BG", 0.2, 128, null, null, null, e);
                const a = PD_UIManager.list.PC_Card_NameArea;
                a.drawTextEX("{ヒルデ・ヴァイツ}", 0, 0, a.width, a.height, "left", 20, "rgb(192,230,212)", 0);
                const n = PD_Translation.translation("pc517"),
                    t = PD_UIManager.list.PC_Card_ProfileArea;
                if ((t.clear(), n)) {
                    const e = Math.floor(t.height / n.length);
                    for (let a = 0; a < n.length; a++) t.drawTextEX(n[a], 0, a * e, t.width, e, "left", 16, "rgb(192,230,212)", 0);
                }
                const i = PD_UIManager.list.PC_Card_MoneyArea;
                i.drawTextEX("76582e", 0, 0, i.width, i.height, "right", 24, "rgb(192,230,212)", 0);
                const o = PD_UIManager.list.PC_Card_PointArea;
                o.drawTextEX("13247", 0, 0, o.width, o.height, "right", 24, "rgb(155,253,0)", 0);
                PD_UIManager.list.PC_Todo_BG;
                PC.addIconDrag("PC_Todo_BG", 0.2, 128, null, null, null, e);
                const r = PD_Translation.translation("pc518"),
                    l = PD_UIManager.list.PC_Todo_TextArea;
                if ((l.clear(), r)) {
                    const e = 20,
                        a = 26;
                    for (let n = 0; n < r.length; n++) l.drawTextEX(r[n], 0, n * a, l.width, a, "left", e, "rgb(192,230,212)", 0);
                }
                const s = PD_UIManager.list.PC_Icon_Trash;
                PC.addIconDrag(
                    "PC_Icon_Trash",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC.isDisableTaskChange || (AudioDatabase.playSE("PC_クリック音"), PC_Document.open(void 0, null, null, s.x, s.y, 53, []));
                    },
                    null
                ),
                    s.addEvent("mouseover", "mouseover", () => {
                        s.clear(), s.fillAll("rgba(192,230,212,0.5)");
                    }),
                    s.addEvent("mouseleave", "mouseleave", () => {
                        s.clear();
                    });
                const c = PD_UIManager.list.PC_Icon_Work;
                PC.addIconDrag(
                    "PC_Icon_Work",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        AudioDatabase.playSE("PC_クリック音"), Citizen3PC.startWork();
                    },
                    e
                ),
                    c.addEvent("mouseover", "mouseover", () => {
                        c.clear(), c.fillAll("rgba(192,230,212,0.5)");
                    }),
                    c.addEvent("mouseleave", "mouseleave", () => {
                        c.clear();
                    });
                for (let e = 0; e < PC.openWindows.length; e++) {
                    const a = PC.openWindows[e][0],
                        n = PC.openWindows[e].slice(1);
                    PC["open" + a](n.length > 0 ? n : void 0), PC.openWindows.splice(e, 1), e--;
                }
            }),
            e.playAnimation();
    }),
    (Citizen3PC.update = function () {}),
    (Citizen3PC.startWork = function () {
        PC.closeAllWindow(), Game.disablePC(), Game.disableClosePC();
        const e = PD_UIManager.list.PC_Base.addUI("hacking_stopPropagation", 816, 624);
        (e.anchor = [0.5, 0.5]), (e.rectButton = 50), (e.isStopPropagation = !0);
        const a = e.addUI("work_window");
        a.loadImage("pc_citizen_3/work/work_window"),
            (a.anchor = [0.5, 0.5]),
            (a.scale = [0, 0]),
            (a.x = PD_UIManager.list.PC_Icon_Work.x),
            (a.y = PD_UIManager.list.PC_Icon_Work.y),
            a.animeMove(0, -20, 10, !1),
            a.animeScale(1, 1, 10, !0),
            a.animeWait(10),
            a.animeFunction(() => {
                Citizen3PC.startChoice("C2_08_00523_a", "C2_08_00523_b", () => {
                    Citizen3PC.startChoice("C2_08_00524_a", "C2_08_00524_b", () => {
                        Citizen3PC.startChoice("C2_08_00525_a", "C2_08_00525_b", () => {
                            const e = PD_Translation.translation("pc499");
                            for (let n = 0; n < e.length; n++) {
                                const t = a.addUI("work_textArea_end_" + n, 600, 30);
                                if (((t.anchor = [0.5, 0.5]), t.move(0, 150 + 30 * n), n > 0)) {
                                    let a = 0;
                                    for (let t = 0; t < n; t++) a += 4 * e[t].length + 60;
                                    t.animeWait(a);
                                } else t.animeWait(30);
                                for (let a = 0; a < e[n].length; a++)
                                    t.animeWait(4),
                                        t.animeFunction(() => {
                                            t.clear(), t.drawTextEX(e[n].slice(0, a + 1), 0, 0, t.width, t.height, "center", 20, "rgb(192,230,212)");
                                        });
                                n >= e.length - 1 &&
                                    (t.animeWait(60),
                                    t.animeFunction(() => {
                                        const e = () => {
                                            Game.runCommonEvent(645);
                                        };
                                        PC.showConfirmDialog(a, PD_Translation.transData("pc524"), "OK", e, void 0, void 0, !0, !0, !1, e, void 0);
                                    })),
                                    t.playAnimation();
                            }
                        });
                    });
                });
            }),
            a.playAnimation();
    }),
    (Citizen3PC.startChoice = function (e, a, n) {
        const t = PD_UIManager.list.work_window,
            i = t.addUI("work_animeBase");
        i.animeWait(30),
            i.animeFunction(() => {
                const n = t.addUI("work_a");
                n.loadImage("pc_citizen_3/work/" + e), (n.anchor = [0.5, 0]), n.move(-200, -100), (n.rectButton = 51), (n.frame = [0, 0, 316, 0]), n.animeFrameHeight(200, 60, !0), n.playAnimation();
                const i = t.addUI("work_b");
                i.loadImage("pc_citizen_3/work/" + a), (i.anchor = [0.5, 0]), i.move(200, -100), (i.rectButton = 51), (i.frame = [0, 0, 316, 0]), i.animeFrameHeight(200, 60, !0), i.playAnimation();
            }),
            i.animeWait(70),
            i.animeFunction(() => {
                const e = t.addUI("work_textArea_exp", 600, 100);
                (e.anchor = [0.5, 0.5]), e.move(0, -150);
                const a = PD_Translation.translation("pc523");
                for (let n = 0; n < a.length; n++) e.drawTextEX(a[n], 0, 30 * n, 600, 30, "center", 20, "rgb(192,230,212)", 0);
                const i = t.addUI("work_text_or", 50, 30);
                i.drawTextEX("or", 0, 0, 50, 30, "center", 24, "rgb(192,230,212)", 0), (i.anchor = [0.5, 0.5]);
                const o = (a, t) => {
                        AudioDatabase.playSE("PC_クリック音"),
                            e.delete(),
                            i.delete(),
                            t.deleteAnimation(),
                            t.animeOpacity(0, 30, !0),
                            t.animeDelete(),
                            t.playAnimation(),
                            a.deleteAnimation(),
                            a.animeMove(0, -100, 30, !0),
                            a.animeWait(10),
                            a.animeFunction(() => {
                                AudioDatabase.playSE("発見！C1_00099");
                                const e = a.addUI("work_flash", a.width, a.height);
                                e.fillAll("rgb(255,255,255)"), (e.opacity = 0), (e.anchor = [0.5, 0]), e.animeOpacity(255, 10, !0), e.animeOpacity(0, 10, !0), e.animeDelete(), e.playAnimation();
                            }),
                            a.animeWait(30),
                            a.animeOpacity(0, 30, !0),
                            a.animeFunction(() => {
                                n();
                            }),
                            a.animeDelete(),
                            a.playAnimation();
                    },
                    r = PD_UIManager.list.work_a,
                    l = PD_UIManager.list.work_b;
                r.addEvent("trigger", "trigger", () => {
                    r.isPlayAnimation || o(r, l);
                }),
                    l.addEvent("trigger", "trigger", () => {
                        l.isPlayAnimation || o(l, r);
                    }),
                    Game.enablePC();
            }),
            i.animeDelete(),
            i.playAnimation();
    }),
    (wiPC.initialize = function () {}),
    (wiPC.open = function (e) {
        (PC.openWindows = []), e && ((PC.openWindows = e), Game.disablePC()), PC.destroy(), PC.create("wi");
    }),
    (wiPC.create = function () {
        const e = PD_UIManager.loadDatabase("pc_wi/PC_Base", PD_UIManager.base.lower);
        (PD_UIManager.list.PC_TaskBar_ShutDown.visible = $gameSwitches.value(753)),
            e.setAnimation("pc/PC_Base", "open"),
            e.animeFunction(() => {
                const e = () => {
                        if (TouchInput.x >= a.realX - a.width / 2 && TouchInput.x <= a.realX + a.width / 2 && TouchInput.y >= a.realY - a.height / 2 && TouchInput.y <= a.realY + a.height / 2) return Game.runCommonEvent(185), !0;
                    },
                    a = PD_UIManager.list.PC_Icon_Trash;
                PC.addIconDrag(
                    "PC_Icon_Trash",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC.isDisableTaskChange || (AudioDatabase.playSE("PC_クリック音"), PC_Document.open(void 0, null, null, a.x, a.y, 68, []));
                    },
                    null
                ),
                    a.addEvent("mouseover", "mouseover", () => {
                        a.clear(), a.fillAll("rgba(192,230,212,0.5)");
                    }),
                    a.addEvent("mouseleave", "mouseleave", () => {
                        a.clear();
                    });
                const n = PD_UIManager.list.PC_Icon_Document;
                PC.addIconDrag(
                    "PC_Icon_Document",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC.isDisableTaskChange || (AudioDatabase.playSE("PC_クリック音"), PC_Document.open(void 0, null, null, n.x, n.y, 69, [70, 71, 72, 73, 74]));
                    },
                    e
                ),
                    n.addEvent("mouseover", "mouseover", () => {
                        n.clear(), n.fillAll("rgba(192,230,212,0.5)");
                    }),
                    n.addEvent("mouseleave", "mouseleave", () => {
                        n.clear();
                    });
                const t = PD_UIManager.list.PC_Icon_Document_2;
                PC.addIconDrag(
                    "PC_Icon_Document_2",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC.isDisableTaskChange || (AudioDatabase.playSE("PC_クリック音"), PC_Document.open(void 0, null, null, t.x, t.y, 75, [76, 77, 78]));
                    },
                    e
                ),
                    t.addEvent("mouseover", "mouseover", () => {
                        t.clear(), t.fillAll("rgba(192,230,212,0.5)");
                    }),
                    t.addEvent("mouseleave", "mouseleave", () => {
                        t.clear();
                    });
                const i = PD_UIManager.list.PC_Icon_Document_3;
                PC.addIconDrag(
                    "PC_Icon_Document_3",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC.isDisableTaskChange || (AudioDatabase.playSE("PC_クリック音"), PC_Document.open(void 0, null, null, i.x, i.y, 79, [80, 81]));
                    },
                    e
                ),
                    i.addEvent("mouseover", "mouseover", () => {
                        i.clear(), i.fillAll("rgba(192,230,212,0.5)");
                    }),
                    i.addEvent("mouseleave", "mouseleave", () => {
                        i.clear();
                    });
                const o = PD_UIManager.list.PC_TaskBar_ShutDown;
                o.addEvent("trigger", "trigger", () => {
                    $gameSwitches.value(753) && (PC.destroy(), giovanniPC.open(), Game.enableClosePC());
                }),
                    o.addEvent("mouseover", "mouseover", () => {
                        o.clear(), o.fillAll("rgba(192,230,212,0.5)");
                    }),
                    o.addEvent("mouseleave", "mouseleave", () => {
                        o.clear();
                    });
                for (let e = 0; e < PC.openWindows.length; e++) {
                    const a = PC.openWindows[e][0],
                        n = PC.openWindows[e].slice(1);
                    PC["open" + a](n.length > 0 ? n : void 0), PC.openWindows.splice(e, 1), e--;
                }
            }),
            e.playAnimation();
    }),
    (wiPC.update = function () {
        !$gameSwitches.value(486) || $gameSwitches.value(487) || 0 !== PC.openWindowNames.length || $gameMap.isEventRunning() || Game.runCommonEvent(161);
    }),
    (wiPC.apearIdealHackIcon = function () {
        const e = PD_UIManager.list.PC_Icon_IdealHack;
        (e.visible = !0), e.animeOpacity(255, 60, !0), e.playAnimation();
    }),
    (wiPC.create_InstallEvent_1 = function () {
        PC.closeAllWindow(null, !1), PC.createDownloadDialog(PD_UIManager.list.PC_Base, 0, 0, 0, 100, 240);
    }),
    (wiPC.create_InstallEvent_2 = function () {
        const e = [
                [
                    "Starting force installation process…",
                    "",
                    "$ hydrium search ideal-hack",
                    "Searching for 'ideal-hack'...",
                    "Found 1 package: ideal-hack 1.1.3",
                    "",
                    "$ hydrium install ideal-hack",
                    "Warning: 'ideal-hack' has unverified dependencies.",
                    "Do you want to continue? [Y/n] n",
                    "Aborting installation...",
                    "",
                    "Restart force installation process…",
                    "",
                    "",
                ],
                [
                    "$ sudo hydrium install ideal-hack --force --no-confirm",
                    "[sudo] password for user: [skipped]",
                    "Hydrium: Installing 'ideal-hack 1.1.3'...",
                    "Downloading 'ideal-hack 1.1.3'...",
                    "[############################] 100%",
                    "",
                    "Installing 'ideal-hack'...",
                    "[############################] 100%",
                    "",
                    "Installation complete.",
                    "",
                    "",
                ],
            ],
            a = PD_UIManager.list.PC_Base.addUI("idealHack_windowBase");
        a.loadImage("pc/r_ticket/r_ticket_window"), (a.anchor = [0.5, 0.5]), (a.scale = [0, 0]);
        const n = a.addUI("idealHack_window_header", 500, 20);
        (n.anchor = [0.5, 0.5]), n.move(0, -199), n.drawTextEX(PD_Translation.transData("pc276"), 0, 0, n.width, n.height, "center", 16, "rgb(192,230,212)", 0);
        const t = a.addUI("idealHack_promptBase", 600, 370);
        (t.animationIndependence = !0), (t.anchor = [0.5, 0.5]), t.move(6, 16);
        let i;
        for (let e = 0; e < Setting.fontDB.length; e++)
            if (20 >= Setting.fontDB[e][0]) {
                i = Setting.fontDB[e][1]["日本語"][0];
                break;
            }
        AudioDatabase.playSE("コードが長々と表示される"), a.animeScale(1, 1, 20, !0, "easeOutQuart"), a.animeWait(20);
        for (let n = 0; n < e.length; n++) {
            a.animeWait(1),
                a.animeFunction(() => {
                    t.clear();
                }),
                a.animeWait(5);
            for (let o = 0; o < e[n].length; o++)
                a.animeFunction(() => {
                    t.drawTextEX(e[n][o], 0, 20 * o, t.width, 20, "left", 20, "rgb(192,230,212)", 0, void 0, i);
                }),
                    a.animeWait(5);
        }
        a.animeWait(30), a.animeScale(0, 0, 20, !0, "easeOutQuart"), a.animeDelete(), a.playAnimation();
    }),
    (wiPC.delete_InstallEvent = function () {
        PC.deleteDownloadDialog(), PD_UIManager.list.idealHack_windowBase && PD_UIManager.list.idealHack_windowBase.delete(), PD_UIManager.list.idealHack_promptBase && PD_UIManager.list.idealHack_promptBase.delete();
    }),
    (lovePC.initialize = function () {}),
    (lovePC.open = function (e) {
        (PC.openWindows = []), e && ((PC.openWindows = e), Game.disablePC()), PC.destroy(), PC.create("love");
    }),
    (lovePC.create = function () {
        const e = PD_UIManager.loadDatabase("pc_love/PC_Base", PD_UIManager.base.lower);
        e.setAnimation("pc/PC_Base", "open"),
            e.animeFunction(() => {
                for (let e = 0; e < PC.openWindows.length; e++) {
                    const a = PC.openWindows[e][0],
                        n = PC.openWindows[e].slice(1);
                    PC["open" + a](n.length > 0 ? n : void 0), PC.openWindows.splice(e, 1), e--;
                }
            }),
            e.playAnimation();
    }),
    (lovePC.update = function () {
        const e = PD_UIManager.list.loveHack_Hammer;
        e && !e.isPlayAnimation && e.move(TouchInput.x + 85 - e.parent.realX, TouchInput.y - e.parent.realY);
    }),
    (Hack_lovePC.initialize = function () {
        Hack_lovePC.partsPositions = { 1: { x: -73, y: 7 }, 2: { x: 16, y: 52 }, 3: { x: 0, y: 102 }, 4: { x: 6, y: -19 }, 5: { x: 91, y: -8 }, 6: { x: -2, y: -90 } };
    }),
    (Hack_lovePC.create = function (e) {
        Hack_lovePC.initialize();
        const a = e.addUI("loveHack_BG");
        a.loadImage("pc_love/hacking/loveHack_BG"), (a.anchor = [0.5, 0.5]), a.move(-1, 11);
        const n = a.addUI("loveHack_RedBG");
        n.loadImage("pc_love/hacking/loveHack_RedBG"), (n.anchor = [0.5, 0.5]), (n.animationIndependence = !0);
        const t = a.addUI("loveHack_BlueBG");
        t.loadImage("pc_love/hacking/loveHack_BlueBG"), (t.anchor = [0.5, 0.5]), (t.opacity = 0), (t.animationIndependence = !0);
        const i = e.addUI("loveHack_Collider", 200, 200);
        (i.anchor = [0.5, 0.5]), i.move(0, 14), (i.rotation = Math.PI / 4), (i.rectButton = 50);
        const o = e.addUI("loveHack_Parts_1");
        o.loadImage("pc_love/hacking/loveHack_RedParts_1"), (o.anchor = [0.5, 0.5]), o.move(Hack_lovePC.partsPositions[1].x, Hack_lovePC.partsPositions[1].y), (o.animationIndependence = !0);
        const r = e.addUI("loveHack_Parts_2");
        r.loadImage("pc_love/hacking/loveHack_RedParts_2"), (r.anchor = [0.5, 0.5]), r.move(Hack_lovePC.partsPositions[2].x, Hack_lovePC.partsPositions[2].y), (r.animationIndependence = !0);
        const l = e.addUI("loveHack_Parts_3");
        l.loadImage("pc_love/hacking/loveHack_RedParts_3"), (l.anchor = [0.5, 0.5]), l.move(Hack_lovePC.partsPositions[3].x, Hack_lovePC.partsPositions[3].y), (l.animationIndependence = !0);
        const s = e.addUI("loveHack_Parts_4");
        s.loadImage("pc_love/hacking/loveHack_RedParts_4"), (s.anchor = [0.5, 0.5]), s.move(Hack_lovePC.partsPositions[4].x, Hack_lovePC.partsPositions[4].y), (s.animationIndependence = !0);
        const c = e.addUI("loveHack_Parts_5");
        c.loadImage("pc_love/hacking/loveHack_RedParts_5"), (c.anchor = [0.5, 0.5]), c.move(Hack_lovePC.partsPositions[5].x, Hack_lovePC.partsPositions[5].y), (c.animationIndependence = !0);
        const _ = e.addUI("loveHack_Parts_6");
        _.loadImage("pc_love/hacking/loveHack_RedParts_6"), (_.anchor = [0.5, 0.5]), _.move(Hack_lovePC.partsPositions[6].x, Hack_lovePC.partsPositions[6].y), (_.animationIndependence = !0);
        const m = o.addUI("loveHack_BlueParts_1");
        m.loadImage("pc_love/hacking/loveHack_BlueParts_1"), (m.anchor = [0.5, 0.5]), (m.opacity = 0), (m.animationIndependence = !0);
        const d = r.addUI("loveHack_BlueParts_2");
        d.loadImage("pc_love/hacking/loveHack_BlueParts_2"), (d.anchor = [0.5, 0.5]), (d.opacity = 0), (d.animationIndependence = !0);
        const g = l.addUI("loveHack_BlueParts_3");
        g.loadImage("pc_love/hacking/loveHack_BlueParts_3"), (g.anchor = [0.5, 0.5]), (g.opacity = 0), (g.animationIndependence = !0);
        const u = s.addUI("loveHack_BlueParts_4");
        u.loadImage("pc_love/hacking/loveHack_BlueParts_4"), (u.anchor = [0.5, 0.5]), (u.opacity = 0), (u.animationIndependence = !0);
        const p = c.addUI("loveHack_BlueParts_5");
        p.loadImage("pc_love/hacking/loveHack_BlueParts_5"), (p.anchor = [0.5, 0.5]), (p.opacity = 0), (p.animationIndependence = !0);
        const P = _.addUI("loveHack_BlueParts_6");
        P.loadImage("pc_love/hacking/loveHack_BlueParts_6"), (P.anchor = [0.5, 0.5]), (P.opacity = 0), (P.animationIndependence = !0);
        const I = e.addUI("loveHack_RedBreak", 792, 284);
        I.loadImage("pc_love/hacking/loveHack_RedBreak"), (I.anchor = [0.5, 0.5]), I.move(-1, 13), (I.frame = [0, 0, 264, 284]), (I.opacity = 0);
        const C = e.addUI("loveHack_Hammer");
        C.loadImage("pc_love/hacking/loveHack_Hammer"),
            (C.anchor = [0.86, 0.96]),
            (C.opacity = 0),
            (C.animationIndependence = !0),
            C.animeWait(1),
            C.animeFunction(() => {
                AudioDatabase.playSE("ラブのジェム打撃");
            }),
            C.animeRotation(-0.8, 20, !0, "easeInBack"),
            C.animeFunction(() => {
                0 === I.opacity
                    ? (h.deleteAnimation(),
                      h.animeOpacity(255, 5, !0),
                      h.animeFunction(() => {
                          I.opacity = 255;
                      }),
                      h.animeOpacity(0, 5, !0),
                      h.playAnimation())
                    : 0 === I.frameX
                    ? (h.deleteAnimation(),
                      h.animeOpacity(255, 5, !0),
                      h.animeFunction(() => {
                          I.frameX = 264;
                      }),
                      h.animeOpacity(0, 5, !0),
                      h.playAnimation())
                    : 264 === I.frameX
                    ? (h.deleteAnimation(),
                      h.animeOpacity(255, 5, !0),
                      h.animeFunction(() => {
                          I.frameX = 528;
                      }),
                      h.animeOpacity(0, 5, !0),
                      h.playAnimation())
                    : 528 === I.frameX &&
                      (h.deleteAnimation(),
                      h.animeOpacity(255, 5, !0),
                      h.animeFunction(() => {
                          (I.visible = !1), i.delete(), C.delete(), Hack_lovePC.returnMouseCursor(), Hack_lovePC.breakJemAnimation();
                      }),
                      h.animeOpacity(0, 5, !0),
                      h.playAnimation());
            }),
            C.animeRotation(0, 10, !0, "easeOutBack");
        const h = e.addUI("loveHack_Flash", 632, 384);
        h.fillAll("white"), (h.anchor = [0.5, 0.5]), h.move(-1, 11), (h.opacity = 0);
    }),
    (Hack_lovePC.start = function (e) {}),
    (Hack_lovePC.close = function () {}),
    (Hack_lovePC.end = function () {}),
    (Hack_lovePC.changeMouseCursor = function () {
        PC.update_mouseCursorImage_None(), (PC.isDisableChangePlaneMouseCursor = !0), (PD_UIManager.list.loveHack_Hammer.opacity = 255);
        PD_UIManager.list.loveHack_Collider.addEvent("trigger", "trigger", () => {
            const e = PD_UIManager.list.loveHack_Hammer;
            e.isPlayAnimation || ((e.rotation = 0), e.playAnimation());
        });
    }),
    (Hack_lovePC.returnMouseCursor = function () {
        (PC.isDisableChangePlaneMouseCursor = !1), PC.update_mouseCursorImage_Plain();
    }),
    (Hack_lovePC.breakJemAnimation = function () {
        AudioDatabase.playSE("ラブのジェム割れる");
        const e = (e, a, n, t, i, o) => {
            e.animeRotation(a, 120, !1, "easeOutCubic"), e.animeMove(n, t, 60, !0, "easeOutCubic"), e.animeMove(i, o, 60, !0, "easeOutBounce"), e.playAnimation();
        };
        e(PD_UIManager.list.loveHack_Parts_1, 12 * Math.PI, -200, -80, -250, 200),
            e(PD_UIManager.list.loveHack_Parts_2, -14 * Math.PI, -100, -100, -150, 200),
            e(PD_UIManager.list.loveHack_Parts_3, 16 * Math.PI, -30, -120, -50, 200),
            e(PD_UIManager.list.loveHack_Parts_4, -16 * Math.PI, 30, -120, 50, 200),
            e(PD_UIManager.list.loveHack_Parts_5, 14 * Math.PI, 100, -100, 150, 200),
            e(PD_UIManager.list.loveHack_Parts_6, -12 * Math.PI, 200, -80, 250, 200);
        const a = PD_UIManager.list.loveHack_RedBG;
        a.animeOpacity(0, 240, !1),
            a.animeWait(120),
            a.animeFunction(() => {
                Game.runCommonEvent(687);
            }),
            a.animeWait(120),
            a.animeDelete(),
            a.playAnimation();
    }),
    (Hack_lovePC.changeColorJem = function () {
        AudioDatabase.playSE("ラブのジェム青くなる");
        let e = 0;
        for (let a = 1; a <= 6; a++) {
            const n = PD_UIManager.list["loveHack_BlueParts_" + a],
                t = PD_UIManager.list["loveHack_Parts_" + a];
            n.animeOpacity(255, 120, !0),
                n.animeFunction(() => {
                    let n = 0,
                        i = 0;
                    t.clear(),
                        (t.rectButton = 50),
                        (t.isStopPropagation = !0),
                        t.addDragEvent(
                            "drag",
                            () => {
                                AudioDatabase.playSE("PC_クリック音"), (n = TouchInput.x - t.x), (i = TouchInput.y - t.y);
                            },
                            () => {
                                let e = TouchInput.x - n,
                                    a = TouchInput.y - i;
                                e >= 316 ? (e = 316) : e <= -316 && (e = -316), a >= 192 ? (a = 192) : a <= -192 && (a = -192), t.move(e, a);
                            },
                            () => {
                                const n = Hack_lovePC.partsPositions[a].x,
                                    i = Hack_lovePC.partsPositions[a].y;
                                if (t.x >= n - 20 && t.x <= n + 20 && t.y >= i - 20 && t.y <= i + 20)
                                    if ((t.move(n, i), t.removeDragEvent("drag"), e++, e >= 6)) {
                                        AudioDatabase.playSE("ラブのジェム完成");
                                        const e = PD_UIManager.list.loveHack_Flash;
                                        e.deleteAnimation(), e.animeOpacity(255, 5, !0), e.animeOpacity(0, 10, !0), e.playAnimation();
                                        const a = PD_UIManager.list.loveHack_BlueBG;
                                        a.animeOpacity(255, 240, !0),
                                            a.animeFunction(() => {
                                                Game.runCommonEvent(688);
                                            }),
                                            a.playAnimation();
                                    } else AudioDatabase.playSE("ジェムの欠片配置");
                                else AudioDatabase.playSE("ジェムの欠片落とす"), t.deleteAnimation(), t.animeMoveY(200, 60, !0, "easeOutBounce"), t.playAnimation();
                            },
                            !0,
                            !0,
                            1,
                            () => t.isPlayAnimation
                        );
                }),
                n.playAnimation();
        }
    }),
    (Hack_lovePC.fadeout = function () {
        const e = PD_UIManager.base.lower.addUI("loveHack_Fadeout", 816, 624);
        e.fillAll("black"), (e.opacity = 0), e.animeOpacity(255, 60, !0), e.playAnimation();
    }),
    (mollyPC.initialize = function () {}),
    (mollyPC.open = function (e) {
        (PC.openWindows = []), e && ((PC.openWindows = e), Game.disablePC()), PC.destroy(), PC.create("molly");
    }),
    (mollyPC.create = function () {
        const e = PD_UIManager.loadDatabase("pc_molly/PC_Base", PD_UIManager.base.lower);
        e.setAnimation("pc/PC_Base", "open"),
            e.animeFunction(() => {
                const a = () => {
                    if (TouchInput.x >= o.realX - o.width / 2 && TouchInput.x <= o.realX + o.width / 2 && TouchInput.y >= o.realY - o.height / 2 && TouchInput.y <= o.realY + o.height / 2) return Game.runCommonEvent(185), !0;
                };
                PC.addIconDrag("PC_Card_BG", 0.2, 128, null, null, null, a);
                const n = PD_UIManager.list.PC_Card_NameArea;
                n.drawTextEX("{モーリィ・リース}", 0, 0, n.width, n.height, "left", 20, "rgb(192,230,212)", 0);
                const t = PD_Translation.translation("pc681"),
                    i = PD_UIManager.list.PC_Card_ProfileArea;
                if ((i.clear(), t)) {
                    const e = Math.floor(i.height / t.length);
                    for (let a = 0; a < t.length; a++) i.drawTextEX(t[a], 0, a * e, i.width, e, "left", 16, "rgb(192,230,212)", 0);
                }
                const o = PD_UIManager.list.PC_Icon_Trash;
                PC.addIconDrag(
                    "PC_Icon_Trash",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC.isDisableTaskChange || (AudioDatabase.playSE("PC_クリック音"), PC_Document.open(void 0, null, null, o.x, o.y, 88, []));
                    },
                    null
                ),
                    o.addEvent("mouseover", "mouseover", () => {
                        o.clear(), o.fillAll("rgba(192,230,212,0.5)");
                    }),
                    o.addEvent("mouseleave", "mouseleave", () => {
                        o.clear();
                    });
                const r = PD_UIManager.list.PC_Icon_Managrer;
                PC.addIconDrag(
                    "PC_Icon_Managrer",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        if (!PC.isDisableTaskChange) {
                            const a = () => {
                                PD_UIManager.list.dialog_Base && PD_UIManager.list.dialog_Base.delete();
                            };
                            PC.showConfirmDialog(e, PD_Translation.transData("pc680"), "OK", a, void 0, void 0, !0, !0, !1, a, void 0);
                        }
                    },
                    a
                ),
                    r.addEvent("mouseover", "mouseover", () => {
                        r.clear(), r.fillAll("rgba(192,230,212,0.5)");
                    }),
                    r.addEvent("mouseleave", "mouseleave", () => {
                        r.clear();
                    });
                const l = PD_UIManager.list.PC_Icon_Docu1;
                PC.addIconDrag(
                    "PC_Icon_Docu1",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC.isDisableTaskChange || (AudioDatabase.playSE("PC_クリック音"), PC_Document.open(void 0, null, null, l.x, l.y, 89, [94]));
                    },
                    a
                ),
                    l.addEvent("mouseover", "mouseover", () => {
                        l.clear(), l.fillAll("rgba(192,230,212,0.5)");
                    }),
                    l.addEvent("mouseleave", "mouseleave", () => {
                        l.clear();
                    });
                const s = PD_UIManager.list.PC_Icon_Memo;
                PC.addIconDrag(
                    "PC_Icon_Memo",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC_Text.open(void 0, 90, null, null, s.x, s.y);
                    },
                    a
                ),
                    s.addEvent("mouseover", "mouseover", () => {
                        s.clear(), s.fillAll("rgba(192,230,212,0.5)");
                    }),
                    s.addEvent("mouseleave", "mouseleave", () => {
                        s.clear();
                    });
                const c = PD_UIManager.list.PC_Icon_Planner;
                PC.addIconDrag(
                    "PC_Icon_Planner",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC_Text.open(void 0, 91, null, null, c.x, c.y);
                    },
                    a
                ),
                    c.addEvent("mouseover", "mouseover", () => {
                        c.clear(), c.fillAll("rgba(192,230,212,0.5)");
                    }),
                    c.addEvent("mouseleave", "mouseleave", () => {
                        c.clear();
                    });
                const _ = PD_UIManager.list.PC_Icon_Text;
                PC.addIconDrag(
                    "PC_Icon_Text",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC_Text.open(void 0, 92, null, null, _.x, _.y);
                    },
                    a
                ),
                    _.addEvent("mouseover", "mouseover", () => {
                        _.clear(), _.fillAll("rgba(192,230,212,0.5)");
                    }),
                    _.addEvent("mouseleave", "mouseleave", () => {
                        _.clear();
                    });
                const m = PD_UIManager.list.PC_Icon_Text2;
                PC.addIconDrag(
                    "PC_Icon_Text2",
                    null,
                    128,
                    null,
                    null,
                    () => {
                        PC_Text.open(void 0, 93, null, null, m.x, m.y);
                    },
                    a
                ),
                    m.addEvent("mouseover", "mouseover", () => {
                        m.clear(), m.fillAll("rgba(192,230,212,0.5)");
                    }),
                    m.addEvent("mouseleave", "mouseleave", () => {
                        m.clear();
                    });
                const d = PD_UIManager.list.PC_TaskBar_ShutDown;
                d.addEvent("trigger", "trigger", () => {
                    $gameSystem.replayBgm(), PC.destroy(), giovanniPC.open(), Game.enableClosePC();
                }),
                    d.addEvent("mouseover", "mouseover", () => {
                        d.clear(), d.fillAll("rgba(192,230,212,0.5)");
                    }),
                    d.addEvent("mouseleave", "mouseleave", () => {
                        d.clear();
                    });
                for (let e = 0; e < PC.openWindows.length; e++) {
                    const a = PC.openWindows[e][0],
                        n = PC.openWindows[e].slice(1);
                    PC["open" + a](n.length > 0 ? n : void 0), PC.openWindows.splice(e, 1), e--;
                }
            }),
            e.playAnimation();
    }),
    (Card.cardDB = []),
    PD_Setup.addReadyLoadCompressFile("_database/pc_card.csv", (e) => {
        Card.cardDB = PD_File.convertCSV_to_Array(e).slice(1);
    }),
    (Card.updateCard = function () {
        Card.updateProfile(), Card.updateMoney(), Card.updateScore();
    }),
    (Card.updateProfile = function () {
        if (!PD_UIManager.list.PC_Card_BG.visible) return;
        let e = null,
            a = null;
        const n = Setting.database["学生証：更新変数番号"][0];
        for (let t = 0; t < Card.cardDB.length; t++) {
            const i = Card.cardDB[t];
            $gameVariables.value(n) === i[0] && ((e = i[1]), (a = i[2]));
        }
        if (e) {
            const a = PD_Translation.transData(e),
                n = PD_UIManager.list.PC_Card_NameArea;
            n.clear(), n.drawTextEX(a, 0, 0, n.width, n.height, "left", 24, "rgb(192,230,212)", 0);
        }
        if (a) {
            const e = PD_Translation.translation(a),
                n = PD_UIManager.list.PC_Card_ProfileArea;
            if ((n.clear(), e)) {
                const a = Math.floor(n.height / e.length);
                for (let t = 0; t < e.length; t++) n.drawTextEX(e[t], 0, t * a, n.width, a, "left", 16, "rgb(192,230,212)", 0);
            }
        }
    }),
    (Card.updateMoney = function () {
        const e = PD_UIManager.list.PC_Card_MoneyArea;
        e.clear();
        const a = $gameVariables.value(Setting.database["所持金：変数番号"][0]);
        e.drawTextEX(String(a) + "e", 0, 0, e.width, e.height, "right", 24, "rgb(192,230,212)", 0);
    }),
    (Card.updateScore = function () {
        const e = PD_UIManager.list.PC_Card_PointArea;
        e.clear();
        const a = $gameVariables.value(Setting.database["人間スコア：変数番号"][0]),
            n = a >= 0 ? "rgb(155,253,0)" : "rgb(255,0,17)";
        e.drawTextEX(String(a), 0, 0, e.width, e.height, "right", 24, n, 0);
    }),
    (function () {
        "use strict";
        const e = Game_Variables.prototype.setValue;
        Game_Variables.prototype.setValue = function (a, n) {
            e.apply(this, arguments),
                $gameMap.mapId() === Setting.pc_mapId &&
                    (a === Setting.database["学生証：更新変数番号"][0] ? Card.updateProfile() : a === Setting.database["所持金：変数番号"][0] ? Card.updateMoney() : a === Setting.database["人間スコア：変数番号"][0] && Card.updateScore());
        };
    })(),
    (Todo.database = []),
    PD_Setup.addReadyLoadCompressFile("_database/pc_todo.csv", (e) => {
        Todo.database = PD_File.convertCSV_to_Array(e).slice(1);
    }),
    (Todo.updateTodo = function () {
        let e = null,
            a = null;
        const n = Setting.database["TODO：更新変数番号"][0];
        for (let t = 0; t < Todo.database.length; t++) {
            const i = Todo.database[t];
            if ($gameVariables.value(n) === i[0]) {
                (e = i[1]), (a = i[2]);
                break;
            }
        }
        if (e) {
            const a = PD_Translation.translation(e),
                n = PD_UIManager.list.PC_Todo_TextArea;
            if ((n.clear(), a)) for (let e = 0; e < a.length; e++) n.drawTextEX(a[e], 0, 26 * e, n.width, 26, "left", 20, "rgb(192,230,212)", 0);
        }
        if (a) {
            let e = PD_Translation.transData(a);
            const n = PD_UIManager.list.PC_Todo_R_wordsArea;
            n.clear(), n.drawTextEX(e, 0, 0, n.width, 26, "left", 20, "rgb(192,230,212)", 0);
        }
    }),
    (function () {
        "use strict";
        const e = Game_Variables.prototype.setValue;
        Game_Variables.prototype.setValue = function (a, n) {
            e.apply(this, arguments),
                a === Setting.database["TODO：更新変数番号"][0] && ($gameMap.mapId() === Setting.pc_mapId && "giovanni" === PC.owner && Todo.updateTodo(), Game.showNoticePopup("TODOを更新しました", null, null, "rgb(150,150,150)"));
        };
    })(),
    (PC_Text.initialize = function () {
        (PC_Text.taskBarNameID = "テキスト"), (PC_Text.openFileID = null), (PC_Text.catalogItemNum = 15);
    }),
    (PC_Text.open = function (e, a, n = null, t = null, i = null, o = null) {
        if ((e && (a = e[0]), PC.openWindowNames.includes("Text") && void 0 !== a && a !== PC_Text.openFileID && PC.closeWindow("Text", !0), void 0 !== a && a !== PC_Text.openFileID)) {
            const e = PC_Document.database[a]["起動時コモン番号"];
            e && Game.runCommonEvent(e);
        }
        void 0 === a ? (a = PC_Text.openFileID) : (PC_Text.openFileID = a),
            PC.createWindow(
                "Text",
                (e) => {
                    PC_Text.initialize();
                    const n = PD_Translation.transData(PC_Document.database[a]["ファイル名の翻訳ID"]);
                    PC_Text.taskBarNameID = n;
                    const t = PD_UIManager.list.PC_Text_HeaderText;
                    t.clear(), t.drawTextEX(n, 0, 0, t.width, t.height, "center", 16, "rgb(192,230,212)", 0);
                    const i = PD_Translation.translation(PC_Document.database[a]["テキストファイルの翻訳ID"]),
                        o = [];
                    if (i)
                        for (let e = 0, a = i.length; e < a; e++) {
                            let a = i[e],
                                n = null;
                            const t = PD_Util.splitControlString(a, !0);
                            for (let e = 0, i = t.length; e < i; e++) {
                                const i = t[e];
                                "CO" === i.code ? (n = Number(i.param)) : i.text && (a = i.text);
                            }
                            o.push((t, i) => {
                                const o = PD_UIManager.loadDatabase("pc/PC_Text_ItemBase", t, i.instanceID + "_" + e);
                                return (
                                    n
                                        ? (o.drawTextEX(a, 0, 0, o.width, o.height, "left", 20, "rgb(106,165,139)", 0),
                                          (o.rectButton = !0),
                                          o.addEvent("trigger", "trigger", () => {
                                              Game.runCommonEvent(n);
                                          }))
                                        : o.drawTextEX(a, 0, 0, o.width, o.height, "left", 20, "rgb(192,230,212)", 0),
                                    o
                                );
                            });
                        }
                    const r = PC_Document.database[a]["開始時コモン番号"],
                        l = PC_Document.database[a]["基本反射番号"],
                        s = PC_Document.database[a]["末尾反射番号"],
                        c = new Catalog(e, 1, 1, "pc/PC_Text_CatalogBase", "PC_Text_ItemArea", o, "PC_Text_ItemMask");
                    c.setPageButton("PC_Text_UpButton", "PC_Text_DownButton", [0, 0, 0], [0, 0, 30, 206], [30, 0, 30, 206]), c.setPageButtonAnimation("Animation/clickButton_2"), c.setEnableMouseWheel();
                    const _ = c.mouseWheelEnableFunc;
                    c.setEnableMouseWheel(() => _() && "Text" === PC.activeWindowName),
                        c.setFlipParam(!0, 10, "easeOutCubic", !1, 2 * PC_Text.catalogItemNum + 1, 0, PC_Text.catalogItemNum - 1, 1, -13),
                        c.setUpdatePageFunc(() => {
                            PC.update_windows_z(e),
                                l && 0 === c.pageNum && PC.create_reflect(l),
                                s && (c.pageNum >= o.length - PC_Text.catalogItemNum ? PC.create_reflect(s) : PC.delete_reflect(s)),
                                r && c.pageNum >= o.length - PC_Text.catalogItemNum && Game.runCommonEvent(r);
                        }),
                        c.create(),
                        Game.enablePC();
                },
                n,
                t,
                i,
                o
            );
    }),
    (PC_Text.close = function () {
        PC_Text.openFileID = null;
    }),
    (PC_Progra.taskBarNameID = "R-ticket"),
    (PC_Progra.database = []),
    (PC_Progra.catalog = null),
    PD_Setup.addReadyLoadCompressFile("_database/pc_r_ticket.csv", (e) => {
        PC_Progra.database = PD_File.convertCSV_to_VerticalObject(e, "R-wors管理番号");
    }),
    (PC_Progra.open = function (e, a = null, n = null, t = null, i = null, o = null, r = null, l = null, s = null) {
        (PC_Progra.taskBarNameID = s || "R-ticket"),
            PC.createWindow(
                "Progra",
                (e) => {
                    const a = [];
                    for (let n = 0, t = $save.r_words.length; n < t; n++) {
                        const t = PC_Progra.database[$save.r_words[n]] ? PC_Progra.database[$save.r_words[n]]["R-codeの翻訳ID"] : null;
                        t &&
                            !$save.r_words_hide.includes($save.r_words[n]) &&
                            a.push((a, i) => {
                                const o = PD_UIManager.loadDatabase("pc/PC_Progra_ItemBase", a, i.instanceID + "_" + n),
                                    r = PD_UIManager.list[i.instanceID + "_" + n + ":PC_Progra_ItemSelect"];
                                (o.animationIndependence = !0),
                                    o.addEvent("trigger", "trigger", () => {
                                        AudioDatabase.playSE("PC_クリック音"), AudioDatabase.playSE("R-ticket選択音"), PC_Progra.openConfirmDialog(e, $save.r_words[n], l);
                                        const a = PC_Progra.database[$save.r_words[n]]["確認画面コモン番号"];
                                        Game.runCommonEvent(a);
                                    }),
                                    o.addEvent("mouseover", "mouseover", () => {
                                        r.clear(), r.fillAll("rgba(192,230,212,0.2)");
                                    }),
                                    o.addEvent("mouseleave", "mouseleave", () => {
                                        r.clear();
                                    });
                                const s = PD_UIManager.list[i.instanceID + "_" + n + ":PC_Progra_Item_TextArea"];
                                let c = PD_Translation.transData(t);
                                return s.drawTextEX(c, 0, 0, s.width, s.height, "left", 20, "rgb(192,230,212)", 0), o;
                            });
                    }
                    const n = new Catalog(e, 1, 1, r || "pc/PC_Progra_CatalogBase", "PC_Progra_ItemArea", a, "PC_Progra_ItemMask");
                    n.setPageButton("PC_Progra_UpButton", "PC_Progra_DownButton", [0, 0, 0], [0, 0, 30, 124], [30, 0, 30, 124]), n.setPageButtonAnimation("Animation/clickButton_2"), n.setEnableMouseWheel();
                    const t = n.mouseWheelEnableFunc;
                    n.setEnableMouseWheel(() => t() && "Progra" === PC.activeWindowName),
                        n.setFlipParam(!0, 10, "easeOutCubic", !1, 13, 0, 5, 1, -5),
                        n.setUpdatePageFunc(() => {
                            PC.update_windows_z(e);
                        }),
                        (PC_Progra.catalog = n),
                        n.create(),
                        PD_UIManager.list.PC_Progra_HeaderText.drawTextEX("{" + PC_Progra.taskBarNameID + "}", 0, 0, 500, 25, "center", 16, "rgb(192, 230, 212)", 0);
                },
                a,
                n,
                t,
                i,
                o
            ),
            delete $save.desktopNotices.r_words,
            PC_Progra.updateDesktopNotification();
    }),
    (PC_Progra.close = function () {
        PC_Progra.catalog = null;
    }),
    (PC_Progra.cancelWindow = function () {
        return !!PD_UIManager.list.PC_Progra_Confirm_Cansel && (PD_UIManager.list.PC_Progra_Confirm_Cansel._e.trigger.trigger(), !0);
    }),
    (PC_Progra.updateDesktopNotification = function () {
        PD_UIManager.list.PC_Icon_Progra_Notice && ($save.desktopNotices.r_words ? (PD_UIManager.list.PC_Icon_Progra_Notice.visible = !0) : (PD_UIManager.list.PC_Icon_Progra_Notice.visible = !1));
    }),
    (PC_Progra.openConfirmDialog = function (e, a, n = null) {
        const t = PD_UIManager.loadDatabase(n || "pc/PC_Progra_Confirm", e),
            i = PD_UIManager.list.PC_Progra_Confirm_Text,
            o = PC_Progra.database[a]["R-codeの翻訳ID"],
            r = PD_Translation.translation(o);
        if (r) for (let e = 0; e < r.length; e++) i.drawTextEX(r[e], 0, 26 * e, i.width, 26, "center", 20, "rgb(192,230,212)", 0);
        const l = PD_UIManager.list.PC_Progra_Confirm_Memo,
            s = PC_Progra.database[a]["説明文の翻訳ID"],
            c = PD_Translation.translation(s);
        if (c) for (let e = 0; e < c.length; e++) l.drawTextEX(c[e], 0, 26 * e, l.width, 26, "center", 20, "rgb(155,253,0)", 0);
        PD_UIManager.list.PC_Progra_Confirm_OK.addEvent("trigger", "trigger", () => {
            AudioDatabase.playSE("R-ticket起動");
            const e = PC_Progra.database[a]["使用時のコモン番号"];
            Game.runCommonEvent(e), t.delete();
        });
        PD_UIManager.list.PC_Progra_Confirm_Cansel.addEvent("trigger", "trigger", () => {
            AudioDatabase.playSE("PC_クリック音"), t.delete();
        });
    }),
    (PC_Progra.startHacking = function (e, a = 20) {
        PC_Progra.initHacking(),
            PC_Progra.moveCenterWindow().then(() => {
                PC_Progra.createHackingScreen(e, a);
            });
    }),
    (PC_Progra.initHacking = function (e = "R-ticket") {
        const a = () => {
            PC.closeAllWindow(["Progra"]), Game.disablePC(), Game.disableClosePC();
        };
        if (PD_UIManager.list.PC_Progra_Base) a();
        else {
            (PC_Progra.taskBarNameID = e),
                PC.createWindow("Progra", () => {}, null, null, null, null, null),
                PD_UIManager.list.PC_Progra_HeaderText.drawTextEX("{" + PC_Progra.taskBarNameID + "}", 0, 0, 500, 25, "center", 16, "rgb(192, 230, 212)", 0);
            const n = PD_UIManager.list.PC_Base.addUI("waitUI");
            n.animeWait(30),
                n.animeFunction(() => {
                    AudioDatabase.playSE("PC_クリック音"), a(), n.delete();
                }),
                n.playAnimation();
        }
    }),
    (PC_Progra.moveCenterWindow = function () {
        return (
            PC_Progra.catalog && PC_Progra.catalog.delete(),
            new Promise((e) => {
                const a = PD_UIManager.list.PC_Progra_Base,
                    n = Math.floor(0.1 * PD_Math.getDistance(a.x, a.y, 0, 0));
                a.deleteAnimation(),
                    a.animeMove(0, 0, n || 1, !0, "easeOutCubic"),
                    a.animeFunction(() => {
                        e();
                    }),
                    a.playAnimation();
            })
        );
    }),
    (PC_Progra.createHackingScreen = function (e, a = 20) {
        const n = PD_UIManager.list.PC_Progra_Base,
            t = PD_UIManager.loadDatabase("pc/PC_Progra_HackArea_Base", n);
        (t.anchor = [0.5, 0.5]), e.create(t);
        const i = PD_UIManager.list.PC_Progra_HackArea_Mask;
        i.fillAll("white"),
            i.attachMask(),
            a > 0
                ? ((t.opacity = 0),
                  t.animeOpacity(255, a, !0),
                  t.animeFunction(() => {
                      e.start(t);
                  }),
                  t.playAnimation())
                : e.start(t);
        const o = i.x + 408,
            r = i.y + 312,
            l = i.width / 2 - 1,
            s = i.height / 2 - 1,
            c = PD_UIManager.base.middle.addUI("hacking_stopPropagation_up", 850, 150);
        (c.anchor = [0.5, 1]), c.move(o, r - s), (c.rectButton = 50), (c.isStopPropagation = !0);
        const _ = PD_UIManager.base.middle.addUI("hacking_stopPropagation_down", 850, 150);
        (_.anchor = [0.5, 0]), _.move(o, r + s), (_.rectButton = 50), (_.isStopPropagation = !0);
        const m = PD_UIManager.base.middle.addUI("hacking_stopPropagation_left", 100, 400);
        (m.anchor = [1, 0.5]), m.move(o - l, r), (m.rectButton = 50), (m.isStopPropagation = !0);
        const d = PD_UIManager.base.middle.addUI("hacking_stopPropagation_right", 100, 400);
        (d.anchor = [0, 0.5]), d.move(o + l, r), (d.rectButton = 50), (d.isStopPropagation = !0);
        const g = PD_UIManager.list.PC_Progra_CloseButton,
            u = PD_UIManager.base.middle.addUI("hacking_closeButton", g.colWidth, g.colHeight);
        (u.anchor = [0.5, 0.5]),
            u.move(g.realX, g.realY),
            (u.rectButton = 51),
            (u.isStopPropagation = !0),
            u.addEvent("trigger", "trigger", () => {
                e.close && e.close(t);
            }),
            PC.update_windows_z(n),
            (PC.isDisableCloseWindow = !0),
            (PC.isDisableTaskChange = !0),
            Game.enablePC();
    }),
    (PC_Progra.endHacking = function (e) {
        PD_UIManager.list.hacking_closeButton.delete();
        const a = PD_UIManager.base.middle.addUI("hacking_stopPropagation", 816, 624);
        (a.rectButton = 50), (a.isStopPropagation = !0), PD_UIManager.list.PC_Progra_Base.deleteAnimation();
        const n = PD_UIManager.list.PC_Progra_HackArea_Base;
        PD_Util.orderChildren(n, "children", (e) => {
            e.deleteAnimation();
        }),
            n.deleteAnimation(),
            n.animeScale(1, 0, 20, !0, "easeOutCubic"),
            n.animeFunction(() => {
                e.end(n),
                    PD_UIManager.list.hacking_stopPropagation_up.delete(),
                    PD_UIManager.list.hacking_stopPropagation_down.delete(),
                    PD_UIManager.list.hacking_stopPropagation_left.delete(),
                    PD_UIManager.list.hacking_stopPropagation_right.delete(),
                    a.delete(),
                    PC.closeWindow("Progra"),
                    (PC.isDisableCloseWindow = !1),
                    (PC.isDisableTaskChange = !1),
                    Game.enableClosePC();
            }),
            n.animeDelete(),
            n.playAnimation();
    }),
    (PC_Progra.playHackingStartMovie = function (e, a = "ハッキング中", n = !0, t = !0) {
        null !== a && (BattleManager.saveBgmAndBgs(), AudioDatabase.playBGM(a));
        const i = [];
        for (let e = 0; e <= 285; e++) i.push("animation/hacking_start/hacking_start" + ("000" + e).slice(-3));
        Game.playVideo(e, i, n, t, () => {
            AudioDatabase.playSE("ハッキング動画_成功");
        });
    }),
    (PC_Progra.playHackingStart_FailMovie = function (e, a = "ハッキング中", n = !0, t = !0) {
        null !== a && (BattleManager.saveBgmAndBgs(), AudioDatabase.playBGM(a));
        const i = [];
        for (let e = 0; e <= 211; e++) i.push("animation/hacking_start_error/hacking_start_error" + ("000" + e).slice(-3));
        Game.playVideo(e, i, n, t, () => {
            setTimeout(() => {
                Video._isVisible() && AudioDatabase.playSE("ハッキング動画_失敗");
            }, 1);
        });
    }),
    (PC_Progra.playHackingSuccessMovie = function (e, a = "ハッキングSUCCESS", n = !0, t = !0) {
        null !== a && AudioDatabase.playSE(a);
        const i = [];
        for (let e = 0; e <= 83; e++) i.push("animation/hack_success/hack_success" + ("00" + e).slice(-2));
        Game.playVideo(e, i, n, t);
    }),
    (PC_IdealHack.taskBarNameID = "イデアル・ハック"),
    (PC_IdealHack.open = function (e, a = null, n = null, t = null, i = null, o = null) {
        PC.createWindow("IdealHack", null, a, n, t, i, o);
    }),
    (PC_IdealHack.close = function () {}),
    (PC_Message.taskBarNameID = "メッセージ"),
    (PC_Message.talkDB = []),
    PD_Setup.addReadyLoadCompressFile("_database/pc_message.csv", (e) => {
        (PC_Message.talkDB = PD_File.convertCSV_to_Array(e).slice(1)), PC_Message.talkDB.sort((e, a) => e[1] - a[1]);
    }),
    (PC_Message.initialize = function () {
        (PC_Message.useSwitchIDs = {}),
            (PC_Message.friendCatalog = null),
            (PC_Message.openTalk_ID = null),
            (PC_Message.talkCatalog = null),
            (PC_Message.talkCatalogItemNum = 17),
            (PC_Message.talkIDs = []),
            (PC_Message.mainContentsData = {}),
            (PC_Message.noReadIndexes = {}),
            (PC_Message.readingIndexes = {}),
            (PC_Message.readedLastMessageFrags_top = {}),
            (PC_Message.readedLastMessageFrags_bottom = {}),
            (PC_Message.selectUIs = {}),
            (PC_Message.selectUIIndexes = {}),
            (PC_Message.reserveReloadTalk_ID = null),
            (PC_Message.isEmphasisLastMessage = !1);
    }),
    (PC_Message.open = function (e, a = null, n = null, t = null, i = null) {
        PC.createWindow(
            "Message",
            (a) => {
                PC_Message.initialize(), PC_Message.createTalkIDs(), PC_Message.talkIDs.length > 0 && PC_Message.updateFriends(), e ? (PC_Message.talkIDs.includes(e) && PC_Message.openTalk(e, !0), Game.enablePC()) : Game.enablePC();
            },
            a,
            n,
            t,
            i
        );
    }),
    (PC_Message.close = function () {
        PC_Message.checkNoticeDesktop(), PC_Message.friendCatalog && PC_Message.friendCatalog.delete(), (PC_Message.friendCatalog = null), PC_Message.talkCatalog && PC_Message.talkCatalog.delete(), (PC_Message.talkCatalog = null);
    }),
    (PC_Message.activeWindow = function () {
        PC_Message.check_reloadTalk_reserve(PC_Message.openTalk_ID);
    }),
    (PC_Message.cancelWindow = function () {
        return "Message" === PC.activeWindowName && null !== PC_Message.openTalk_ID && (PD_UIManager.list[PC_Message.talkCatalog.instanceID + ":PC_Message_2_HeaderBase"]._e.trigger.trigger(), !0);
    }),
    (PC_Message.createTalkIDs = function () {
        PC_Message.talkIDs = [];
        for (let e = 0; e < Setting.database["メッセージフレンド一覧：フレンド名の翻訳ID"].length; e++) {
            const a = Setting.database["メッセージフレンド一覧：フレンド名の翻訳ID"][e],
                n = Setting.database["メッセージフレンド一覧：出現スイッチ番号"][e];
            "" !== a && $gameSwitches.value(n) && PC_Message.talkIDs.push(a);
        }
        PC_Message.talkIDs.sort((e, a) => (-1 === $save.pc_message_orderTalkIDs.indexOf(e) ? 1 : -1 === $save.pc_message_orderTalkIDs.indexOf(a) ? -1 : $save.pc_message_orderTalkIDs.indexOf(e) - $save.pc_message_orderTalkIDs.indexOf(a)));
    }),
    (PC_Message.createMainContentsData = function (e, a) {
        const n = $gameVariables.value(Setting.database["メッセージフレンド一覧：トーク更新変数番号"][Setting.database["メッセージフレンド一覧：フレンド名の翻訳ID"].indexOf(e)]);
        a && ($save.pc_message_readedVariableValues[e] = n), PC_Message.useSwitchIDs || (PC_Message.useSwitchIDs = {}), (PC_Message.useSwitchIDs[e] = []);
        const t = [];
        for (let i = 0; i < PC_Message.talkDB.length; i++) {
            const o = PC_Message.talkDB[i],
                r = o[0],
                l = o[1],
                s = o[2],
                c = o[3],
                _ = o[4],
                m = o[5],
                d = o[6],
                g = o[7],
                u = o[8],
                p = o[9],
                P = o[10],
                I = o[11],
                C = o[12];
            if (PC.owner === r && e === l) {
                if ((c && PC_Message.useSwitchIDs[e].push(c), !(n >= s))) break;
                if (!c || $gameSwitches.value(c)) {
                    let i = "",
                        o = "";
                    "" !== _ && ((i = PD_Translation.getData(_, "キャラ名翻訳ID")), (o = PD_Translation.getData(_, "投稿時刻"))),
                        !a &&
                            void 0 === PC_Message.noReadIndexes[e] &&
                            (void 0 === $save.pc_message_readedVariableValues[e] || (s > $save.pc_message_readedVariableValues[e] && n > $save.pc_message_readedVariableValues[e])) &&
                            (t.push(["ここから未読です"]), (PC_Message.noReadIndexes[e] = t.length - 1));
                    let r = [];
                    if ((o ? r.push(o) : r.push(""), i ? r.push(i) : r.push(d ? "imageOnly" : ""), p ? r.push(p) : r.push(null), P ? r.push(P) : r.push(null), "" !== I ? r.push(I) : r.push(""), m ? r.push(m) : r.push(null), "" !== _)) {
                        const e = PD_Translation.translation(_, !0);
                        r = r.concat(e);
                    }
                    if ("" !== d) {
                        let e = "img[" + d + "]";
                        C && (e += "scaleImg[" + C + "]"), u && (e += "imgCommonPath[" + d + "]imgCommonNum[" + u + "]"), r.push("@imageInsertSpace@"), r.push(e);
                    }
                    if ("" !== g) for (let e = 0; e < g; e++) r.push(u ? "imgCommonPath[" + d + "]imgCommonNum[" + u + "]" : "");
                    t.push(r);
                }
            }
        }
        PC_Message.mainContentsData[e] = t;
    }),
    (PC_Message.checkNoticeDesktop = function () {
        (PC_Message.mainContentsData = {}), (PC_Message.noReadIndexes = {}), PC_Message.createTalkIDs();
        for (let e = 0, a = PC_Message.talkIDs, n = a.length; e < n; e++) PC_Message.createMainContentsData(a[e]);
        let e = !1;
        for (let a = 0, n = PC_Message.talkIDs, t = n.length; a < t; a++) void 0 === PC_Message.noReadIndexes[n[a]] || $save.pc_message_hideUpdateIconTalkIDs.includes(n[a]) || (e = !0);
        PD_UIManager.list.PC_Icon_Message_Notice.visible = !!e;
    }),
    (PC_Message.orderNewMessage = function (e) {
        $save.pc_message_orderTalkIDs.includes(e) && $save.pc_message_orderTalkIDs.splice($save.pc_message_orderTalkIDs.indexOf(e), 1), $save.pc_message_orderTalkIDs.unshift(e);
    }),
    (PC_Message.updateFriends = function () {
        (PC_Message.openTalk_ID = null), PC_Message.friendCatalog && PC_Message.friendCatalog.delete(), (PC_Message.friendCatalog = null), PC_Message.checkNoticeDesktop();
        const e = [];
        for (let a = 0, n = PC_Message.talkIDs, t = n.length; a < t; a++) {
            const t = n[a],
                i = PC_Message.mainContentsData[t].slice(-1)[0],
                o = i[0],
                r = i.slice(6);
            e.push((e, n) => {
                const i = PD_UIManager.loadDatabase("pc/PC_Message_1_ItemBase", e, n.instanceID + "_" + a);
                (i.animationIndependence = !0),
                    i.addEvent("trigger", "trigger", () => {
                        AudioDatabase.playSE("PC_クリック音"), PC_Message.openTalk(t);
                    }),
                    i.addEvent("mouseover", "mouseover", () => {
                        i.clear(), i.fillAll("rgba(192,230,212,0.2)");
                    }),
                    i.addEvent("mouseleave", "mouseleave", () => {
                        i.clear();
                    });
                const l = PD_UIManager.list[n.instanceID + "_" + a + ":PC_Message_1_Item_UserIcon"],
                    s = Setting.database["メッセージフレンド一覧：フレンド名の翻訳ID"].indexOf(t);
                l.loadImage("pc/message/message_userIcon_" + s);
                const c = PD_UIManager.list[n.instanceID + "_" + a + ":PC_Message_1_Item_UserName"];
                c.drawTextEX(PD_Translation.transData(t), 0, 0, c.width, c.height, "left", 20, "rgb(192,230,212)", 0);
                const _ = PD_UIManager.list[n.instanceID + "_" + a + ":PC_Message_1_Item_Time"];
                _.drawTextEX(o, 0, 0, _.width, _.height, "right", 16, "rgb(192,230,212)", 0);
                const m = PD_UIManager.list[n.instanceID + "_" + a + ":PC_Message_1_Item_TextArea"];
                let d = "";
                for (let e = 0; e < r.length; e++)
                    r[e] &&
                        ("@imageInsertSpace@" === r[e].slice(0, 19)
                            ? r[e + 1] &&
                              "img[" === r[e + 1].slice(0, 4) &&
                              (-1 === r[e + 1].indexOf("imgCommonPath[") ? (d += PD_Translation.transData("スタンプを送信しました") + "　") : (d += PD_Translation.transData("画像を送信しました") + "　"))
                            : "img[" !== r[e].slice(0, 4) && "imgCommon" !== r[e].slice(0, 9) && (d += r[e] + "　"));
                const g = PD_UIManager.base.lower.addUI("tempUI", 300, m.height);
                g.drawTextEX_EX_setIconInfo("pc/icons/SNS_icon_", 18, 18, 2);
                const u = g.drawTextEX_EX(d, 0, 0, g.width, g.height, "left", 16, null, 0)[0].textWidth;
                g.delete();
                const p = m.drawTextEX_EX(d, 0, 0, 240, m.height, "left", 16, "rgb(192,230,212)", 0)[0].textWidth;
                u > 256 && m.drawTextEX("…", p, 0, m.width - p, m.height, "left", 16, "rgb(192,230,212)", 0);
                const P = PD_UIManager.list[n.instanceID + "_" + a + ":PC_Message_1_Item_notice"];
                return P && (P.visible = void 0 !== PC_Message.noReadIndexes[t] && !$save.pc_message_hideUpdateIconTalkIDs.includes(t)), i;
            });
        }
        const a = PD_UIManager.list.PC_Message_Base,
            n = new Catalog(a, 1, 1, "pc/PC_Message_1_CatalogBase", "PC_Message_1_ItemArea", e, "PC_Message_1_ItemMask");
        n.setPageButton("PC_Message_1_UpButton", "PC_Message_1_DownButton", [0, 0, 0], [0, 0, 30, 228], [30, 0, 30, 228]), n.setPageButtonAnimation("Animation/clickButton_2"), n.setEnableMouseWheel();
        const t = n.mouseWheelEnableFunc;
        n.setEnableMouseWheel(() => t() && "Message" === PC.activeWindowName),
            n.setFlipParam(!0, 10, "easeOutCubic", !1, 13, 0, 5, 1, -5),
            n.setUpdatePageFunc(() => {
                PC.update_windows_z(a);
            }),
            n.create(),
            (PC_Message.friendCatalog = n);
    }),
    (PC_Message.openTalk = function (e, a) {
        PC_Message.friendCatalog.delete(), PC_Message.check_reloadTalk_reserve(e) || PC_Message.updateTalk(e, a);
    }),
    (PC_Message.updateTalk = function (e, a) {
        PC_Message.talkCatalog && (PC_Message.talkCatalog.delete(), (PC_Message.talkCatalog = null)), $gameMap.isEventRunning() || PC.delete_reflect_All();
        const n = PC_Message.mainContentsData[e];
        (PC_Message.readedLastMessageFrags_top[e] = []), (PC_Message.readedLastMessageFrags_bottom[e] = []), (PC_Message.selectUIs = {}), (PC_Message.selectUIIndexes = {});
        const t = PC_Message.createMainList_Func(e, a),
            i = t.createMainList_Func,
            o = t.itemIndex,
            r = t.messageIndexes,
            l = t.rowIndex,
            s = PD_UIManager.list.PC_Message_Base,
            c = new Catalog(s, 1, 1, "pc/PC_Message_2_CatalogBase", "PC_Message_2_ItemArea", i, "PC_Message_2_ItemMask");
        c.setPageButton("PC_Message_2_UpButton", "PC_Message_2_DownButton", [0, 0, 0], [0, 0, 30, 228], [30, 0, 30, 228]), c.setPageButtonAnimation("Animation/clickButton_2"), c.setEnableMouseWheel();
        const _ = c.mouseWheelEnableFunc;
        c.setEnableMouseWheel(() => _() && "Message" === PC.activeWindowName),
            c.setFlipParam(!0, 10, "easeOutCubic", !1, 2 * PC_Message.talkCatalogItemNum + 3, 0, PC_Message.talkCatalogItemNum - 1, 3, -15),
            c.setUpdatePageFunc(() => {
                if ((PC.update_windows_z(s), null !== c.pageNum)) {
                    if (((PC_Message.readingIndexes[e] = c.pageNum), void 0 !== PC_Message.noReadIndexes[e] && c.pageNum >= c.createListUI_Func.length - PC_Message.talkCatalogItemNum)) {
                        delete PC_Message.noReadIndexes[e];
                        for (let a = 0, t = n.length; a < t; a++)
                            if ("ここから未読です" === n[a][0]) {
                                n.splice(a, 1), r.splice(a, 1), PC_Message.readedLastMessageFrags_top[e].splice(a, 1), PC_Message.readedLastMessageFrags_bottom[e].splice(a, 1);
                                break;
                            }
                        const a = $gameVariables.value(Setting.database["メッセージフレンド一覧：トーク更新変数番号"][Setting.database["メッセージフレンド一覧：フレンド名の翻訳ID"].indexOf(e)]);
                        $save.pc_message_readedVariableValues[e] = a;
                    }
                    const a = {};
                    for (let t = 0, i = r.length; t < i; t++) {
                        const i = r[t],
                            l = r[t + 1],
                            s = n[t][4],
                            _ = c.pageNum >= i - (PC_Message.talkCatalogItemNum - 1),
                            m = c.pageNum <= i;
                        if (!PC_Message.readedLastMessageFrags_top[e][t] && _ && m) {
                            const e = n[t][2];
                            e && Game.runCommonEvent(e);
                        } else !PC_Message.readedLastMessageFrags_top[e][t] || (_ && m) || (PC_Message.readedLastMessageFrags_top[e][t] = !1);
                        const d = l || o + 1,
                            g = c.pageNum >= d - (PC_Message.talkCatalogItemNum + 1),
                            u = c.pageNum <= d - 2;
                        if (!PC_Message.readedLastMessageFrags_bottom[e][t] && g && u) {
                            const e = n[t][3];
                            e && Game.runCommonEvent(e);
                        } else !PC_Message.readedLastMessageFrags_bottom[e][t] || (g && u) || (PC_Message.readedLastMessageFrags_bottom[e][t] = !1);
                        s && (void 0 === a[s] && (a[s] = 0), _ && u ? a[s]++ : _ || u || a[s]--);
                    }
                    for (let e in a) a[e] > 0 ? PC.create_reflect(Number(e)) : PC.delete_reflect(Number(e));
                }
            }),
            c.setOpenPage(l),
            c.create(),
            (PC_Message.talkCatalog = c),
            (PC_Message.openTalk_ID = e);
        PD_UIManager.list[c.instanceID + ":PC_Message_2_HeaderBase"].addEvent("trigger", "trigger", () => {
            AudioDatabase.playSE("PC_クリック音"), c.delete(), (PC_Message.talkCatalog = null), PC.delete_reflect_All(), PC_Message.updateFriends();
        });
        const m = PD_UIManager.list[c.instanceID + ":PC_Message_2_HeaderText"];
        if ((m.clear(), m.drawTextEX(PD_Translation.transData(e), 0, 0, m.width, m.height, "left", 16, "rgb(192,230,212)", 0), a)) {
            let e = o + 1 - (PC_Message.talkCatalogItemNum + 1) + 1;
            e < 0 && (e = 0), PC_Message.talkCatalog.movePage(e, 0 === e ? 0 : e - l);
        }
    }),
    (PC_Message.createMainList_Func = function (e, a) {
        const n = PC_Message.mainContentsData[e],
            t = [],
            i = 14;
        let o = 0,
            r = [],
            l = null;
        for (let s = 0, c = n.length; s < c; s++) {
            r.push(o);
            const _ = s,
                m = n[s],
                d = m[0],
                g = m[1],
                u = m[5],
                p = 6,
                P = !!m[p] && g,
                I = "ジョバンニ" === g ? "right" : "left";
            let C = 0,
                h = !1,
                D = 0,
                f = "";
            for (let e = 0, a = m.length; e < a; e++) {
                const n = o;
                if (P && e >= p) {
                    let r = !1,
                        l = !1;
                    if (e === p) {
                        for (let n = e; n < a; n++)
                            if (m[n] && "img[" !== m[n].slice(0, 4) && "imgCommon" !== m[n].slice(0, 9) && "@imageInsertSpace@" !== m[n]) {
                                const e = PD_UIManager.base.lower.addUI("tempUI", 816, 20);
                                e.drawTextEX_EX_setIconInfo("pc/icons/SNS_icon_", 18, 18, 2);
                                const a = e.drawTextEX_EX(m[n], 0, 0, e.width, e.height, "left", 20, null, 0)[0].textWidth;
                                e.delete(), a > C && (C = a);
                            }
                        r = !0;
                    }
                    if (((e === a - 1 || (m[e + 1] && "@imageInsertSpace@" === m[e + 1])) && (l = !0), "@imageInsertSpace@" === m[e] && ((h = !0), m[e + 1]))) {
                        const a = m[e + 1].split(/[\[\]]/);
                        for (let e = 0, n = a.length; e < n; e += 2) "scaleImg" === a[e] && (f = a[e + 1]);
                    }
                    u && D++;
                    const g = h,
                        P = u ? u[D - 1] : null;
                    t.push((t, o) => {
                        const p = PD_UIManager.loadDatabase("pc/PC_Message_2_ItemBase", t, o.instanceID + "_" + n);
                        p.animationIndependence = !0;
                        const h = PD_UIManager.list[o.instanceID + "_" + n + ":PC_Message_2_Item_TextArea"],
                            D = "right" === I ? Math.floor(p.width / 2) - C - i * (u ? 4 : 2) : -Math.floor(p.width / 2),
                            M = h.y - 8;
                        h.move(D, M);
                        let y = m[e],
                            v = "left" === I ? "rgb(6,4,14)" : "rgb(192,230,212)",
                            k = "",
                            S = null,
                            b = null,
                            U = null;
                        "@imageInsertSpace@" === m[e] && (y = "");
                        const w = y.split(/[\[\]]/);
                        for (let e = 0, a = w.length; e < a; e += 2)
                            "link" === w[e] && ((y = w[e + 1]), (v = "rgb(106,165,139)")),
                                "img" === w[e] && ((y = ""), (k = w[e + 1])),
                                "imgCommonPath" === w[e] && ((y = ""), (S = w[e + 1])),
                                "imgCommonNum" === w[e] && ((y = ""), (b = Number(w[e + 1]))),
                                "clickCommon" === w[e] && (U = Number(w[e + 1]));
                        if (!g) {
                            const e = 10,
                                a = "right" === I ? (PC_Message.isEmphasisLastMessage && _ >= c - 1 ? "rgb(24,24,48)" : "rgb(6,4,14)") : PC_Message.isEmphasisLastMessage && _ >= c - 1 ? "rgb(137,214,180)" : "rgb(106,165,139)",
                                t = 2,
                                s = 0,
                                m = "rgb(192,230,212)";
                            if (r && l) {
                                const r = h.addUI(o.instanceID + "_" + n + ":PC_Message_2_Item_TextArea_background", C + i * (u ? 4 : 2), h.height + 16);
                                if (
                                    (r.drawCircle(e, e, e, a),
                                    r.drawCircle(r.width - e, e, e, a),
                                    r.drawCircle("right" === I ? e : r.width - e, r.height - e, e, a),
                                    "right" === I && (r.drawEllipse(e, e, e, e, 0, 2, m), r.drawEllipse(r.width - e, e, e, e, 0, 2, m), r.drawEllipse(e, r.height - e, e, e, 0, 2, m)),
                                    r.fillRect(e, 0, r.width - 2 * e, e, a),
                                    r.fillRect("right" === I ? e : 0, e, r.width - e, r.height - e, a),
                                    r.fillRect(0, e, r.width, r.height - 2 * e, a),
                                    "right" === I)
                                ) {
                                    const a = t / 2 + s,
                                        n = t / 2 + s,
                                        i = r.width - t / 2 - s,
                                        o = r.height - t / 2 - s;
                                    r.drawLine(a + e / 2, n, i - e / 2, n, t, m), r.drawLine(i, n + e / 2, i, o, t, m), r.drawLine(i, o, a + e / 2, o, t, m), r.drawLine(a, o - e / 2, a, n + e / 2, t, m);
                                }
                            } else if (r) {
                                const r = h.addUI(o.instanceID + "_" + n + ":PC_Message_2_Item_TextArea_background", C + i * (u ? 4 : 2), h.height + 8);
                                if (
                                    (r.drawCircle(e, e, e, a),
                                    r.drawCircle(r.width - e, e, e, a),
                                    "right" === I && (r.drawEllipse(e, e, e, e, 0, 2, m), r.drawEllipse(r.width - e, e, e, e, 0, 2, m)),
                                    r.fillRect(e, 0, r.width - 2 * e, e, a),
                                    r.fillRect(0, e, r.width, r.height - e, a),
                                    "right" === I)
                                ) {
                                    const a = t / 2 + s,
                                        n = t / 2 + s,
                                        i = r.width - t / 2 - s,
                                        o = r.height;
                                    r.drawLine(a + e / 2, n, i - e / 2, n, t, m), r.drawLine(i, n + e / 2, i, o, t, m), r.drawLine(a, o, a, n + e / 2, t, m);
                                }
                            } else if (l) {
                                const r = h.addUI(o.instanceID + "_" + n + ":PC_Message_2_Item_TextArea_background", C + i * (u ? 4 : 2), h.height + 8);
                                if (
                                    ((r.y = 8),
                                    r.drawCircle("right" === I ? e : r.width - e, r.height - e, e, a),
                                    "right" === I && r.drawEllipse(e, r.height - e, e, e, 0, 2, m),
                                    r.fillRect(0, 0, r.width, r.height - e, a),
                                    r.fillRect("right" === I ? e : 0, e, r.width - e, r.height - e, a),
                                    "right" === I)
                                ) {
                                    const a = t / 2 + s,
                                        n = 0,
                                        i = r.width - t / 2 - s,
                                        o = r.height - t / 2 - s;
                                    r.drawLine(i, n, i, o, t, m), r.drawLine(i, o, a + e / 2, o, t, m), r.drawLine(a, o - e / 2, a, n, t, m);
                                }
                            } else {
                                const e = h.addUI(o.instanceID + "_" + n + ":PC_Message_2_Item_TextArea_background", C + i * (u ? 4 : 2), h.height);
                                if (((e.y = 8), e.fillAll(a), "right" === I)) {
                                    const a = t / 2 + s,
                                        n = 0,
                                        i = e.width - t / 2 - s,
                                        o = e.height;
                                    e.drawLine(i, n, i, o, t, m), e.drawLine(a, o, a, n, t, m);
                                }
                            }
                        }
                        if (u) {
                            const e = 6,
                                a = h.addUI(o.instanceID + "_" + n + ":PC_Message_2_Item_TextArea_selectUI", C + 2 * e, h.height);
                            a.fillAll("rgba(34,41,71,0.8)"),
                                (a.rectButton = !0),
                                a.move(i * (u ? 3 : 1) - e, 8),
                                a.addEvent("mouseover", "mouseover", () => {
                                    for (let e in PC_Message.selectUIs[_]) PC_Message.selectUIs[_][e].visible = !1;
                                    (a.visible = !0), (PC_Message.selectUIIndexes[_] = n);
                                }),
                                a.addEvent("trigger", "trigger", () => {
                                    AudioDatabase.playSE("PC_クリック音"), Game.runCommonEvent(P);
                                });
                            const t = a.addUI(o.instanceID + "_" + n + ":PC_Message_2_Item_TextArea_selectIconUI");
                            (t.anchor = [0.5, 0.5]),
                                t.loadImage("pc/message/message_selectIcon"),
                                t.move(-15, a.height / 2),
                                PC_Message.selectUIs[_] || (PC_Message.selectUIs[_] = {}),
                                (PC_Message.selectUIs[_][n] = a),
                                1 === Object.keys(PC_Message.selectUIs[_]).length && (PC_Message.selectUIIndexes[_] = n),
                                (a.visible = PC_Message.selectUIIndexes[_] === n);
                        }
                        const A = h.addUI(o.instanceID + "_" + n + ":PC_Message_2_Item_TextArea_drawTextUI", C, h.height);
                        if ((A.move(i * (u ? 3 : 1), 8), "@" === y.slice(0, 1) && (v = "rgb(106,165,139)"), k)) {
                            let e;
                            "_UIManager/" === k.slice(0, 11)
                                ? (e = PD_UIManager.loadDatabase(k.slice(11), h, o.instanceID + "_" + s))
                                : ((e = h.addUI(o.instanceID + "_" + n + ":img")), e.loadImage((k.includes("/") ? "" : "pc/message/img/") + k)),
                                "right" === I ? ((e.anchorX = 1), e.move(C + 28, 8)) : e.move(0, 8);
                        }
                        if (
                            (A.drawTextEX_EX_setIconInfo("pc/icons/SNS_icon_", 18, 18, 2),
                            A.drawTextEX_EX(y, 0, 0, A.width, A.height, "left", 20, v, 0),
                            U
                                ? p.addEvent("trigger", "trigger", () => {
                                      U && (AudioDatabase.playSE("PC_クリック音"), Game.runCommonEvent(U));
                                  })
                                : b &&
                                  p.addEvent("trigger", "trigger", () => {
                                      AudioDatabase.playSE("PC_クリック音"), (PC.scaleImageInfo = { paths: [(S.includes("/") ? "" : "pc/message/img/") + S + "_f"], names: [null], funcs: [null], index: 0 }), Game.runCommonEvent(b);
                                  }),
                            l && !g)
                        ) {
                            const e = PD_UIManager.list[o.instanceID + "_" + n + ":PC_Message_2_Item_TimeArea"];
                            "right" === I ? ((e.x = D - 6), (e.anchor = [1, 0])) : ((e.x = D + C + 28 + 6), (e.anchor = [0, 0])), (e.y += 8), e.drawTextEX(d, 0, 0, e.width, e.height, I, 16, "#91baa8", 0);
                        } else if (g && e === a - 2 && f) {
                            const e = PD_UIManager.list[o.instanceID + "_" + n + ":PC_Message_2_Item_TimeArea"];
                            "right" === I ? ((e.x = -45), (e.anchor = [1, 0])) : ((e.x = 45), (e.anchor = [0, 0])), (e.y += 8), e.drawTextEX(PD_Translation.translation("クリックで拡大")[0], 0, 0, e.width, e.height, I, 16, "#91baa8", 0);
                        }
                        return p;
                    }),
                        o++;
                } else if (!P && 0 === e) {
                    let a = m[e],
                        i = "#91baa8";
                    "ここから未読です" === m[e]
                        ? ((a = PD_Translation.transData(m[e])), (i = "rgb(114,255,0)"), (l = n - 5 >= 0 ? n - 5 : 0))
                        : m[p] &&
                          (-1 !== m[p].indexOf("** ERROR") || "INSUFFICIENT FUNDS" === m[p]
                              ? ((a = m[p]), (i = "rgb(255,0,17)"))
                              : (-1 === m[p].indexOf("** SUCCESS") && "TRANSFER SUCCESSFUL" !== m[p]) || ((a = m[p]), (i = "rgb(114,255,0)"))),
                        t.push((e, t) => {
                            const o = PD_UIManager.loadDatabase("pc/PC_Message_2_ItemBase", e, t.instanceID + "_" + n),
                                r = o.addUI(t.instanceID + "_" + n + ":PC_Message_2_Item_TextArea_line", o.width, o.height);
                            return (r.anchor = [0.5, 0.5]), (r.x = 0), r.drawTextEX(a, 0, 0, r.width, r.height, "center", 16, i, 0), o;
                        }),
                        o++;
                }
            }
            if (s < c - 1) {
                const e = o;
                t.push((a, n) => PD_UIManager.loadDatabase("pc/PC_Message_2_ItemBase", a, n.instanceID + "_" + e)), o++;
            }
            s >= c - 1 &&
                null === l &&
                (a && (PC_Message.readingIndexes[e] = r[c - 2 >= 0 ? c - 2 : 0] - PC_Message.talkCatalogItemNum + 1), (l = void 0 !== PC_Message.readingIndexes[e] ? PC_Message.readingIndexes[e] : o - PC_Message.talkCatalogItemNum + 1));
        }
        return { createMainList_Func: t, itemIndex: o, messageIndexes: r, rowIndex: l };
    }),
    (PC_Message.reloadTalk = function (e) {
        PC_Message.createMainContentsData(e, !0), PC_Message.updateTalk(e, !0);
    }),
    (PC_Message.check_reloadTalk_reserve = function (e) {
        PC_Message.reserveReloadTalk_ID && e === PC_Message.reserveReloadTalk_ID && (PC_Message.reloadTalk_reserve(PC_Message.reserveReloadTalk_ID), (PC_Message.reserveReloadTalk_ID = null));
    }),
    (PC_Message.reloadTalk_reserve = function (e) {
        PC.hideScaleImage(), delete PC_Message.readingIndexes[e], PC_Message.reloadTalk(e);
    }),
    (PC_Message.addHideUpdateIcon = function (e) {
        $save.pc_message_hideUpdateIconTalkIDs.push(e);
    }),
    (PC_Message.removeHideUpdateIcon = function (e) {
        const a = $save.pc_message_hideUpdateIconTalkIDs.indexOf(e);
        -1 !== a && $save.pc_message_hideUpdateIconTalkIDs.splice(a, 1);
    }),
    (PC_Message.moveCenterWindow = function (e = !1) {
        const a = new Promise((e) => {
            const a = PD_UIManager.list.PC_Message_Base,
                n = Math.floor(0.1 * PD_Math.getDistance(a.x, a.y, 0, 0));
            a.deleteAnimation(),
                a.animeMove(0, 0, n || 1, !0, "easeOutCubic"),
                a.animeFunction(() => {
                    e();
                }),
                a.playAnimation();
        });
        if (!e) return a;
        Game.getInterpreter().waitUntilPromiseSettled(
            a,
            () => {},
            (e) => {
                throw Error(e);
            }
        );
    }),
    (PC_Message.open_Map = function (e, a = null, n = null, t = 20) {
        Game.getInterpreter().waitUntilPromiseSettled(
            new Promise((i) => {
                const o = PD_UIManager.base.lower.addUI("mapMessageApp_spriteBase").addUI("mapMessageApp_Base", 408, 624);
                o.anchor = [0.5, 0.5];
                (PD_UIManager.loadDatabase("pc/PC_Message_Base", o).isStopPropagation = !1),
                    (PD_UIManager.list.PC_Message_BG.isStopPropagation = !1),
                    (PD_UIManager.list.PC_Message_CloseButton.isStopPropagation = !1),
                    o.move($gamePlayer.screenX(), $gamePlayer.screenY()),
                    (o.scale = [0, 0]),
                    o.animeMove(a || o.width / 2, n || o.height / 2, t, !1, "easeOutQuart"),
                    o.animeScale(1, 1, t, !0, "easeOutQuart"),
                    o.animeFunction(() => {
                        i();
                    }),
                    o.playAnimation(),
                    PC_Message.initialize(),
                    PC_Message.createMainContentsData(e, !0),
                    PC_Message.updateTalk_Map(e);
            }),
            () => {},
            (e) => {
                throw Error(e);
            }
        );
    }),
    (PC_Message.updateTalk_Map = function (e) {
        PC_Message.talkCatalog && (PC_Message.talkCatalog.delete(), (PC_Message.talkCatalog = null));
        const a = PC_Message.createMainList_Func(e, !0),
            n = a.createMainList_Func,
            t = a.itemIndex,
            i = (a.messageIndexes, a.rowIndex),
            o = new Catalog(PD_UIManager.list.mapMessageApp_Base, 1, 1, "pc/PC_Message_2_CatalogBase", "PC_Message_2_ItemArea", n, "PC_Message_2_ItemMask");
        o.setFlipParam(!0, 10, "easeOutCubic", !1, 2 * PC_Message.talkCatalogItemNum + 3, 0, PC_Message.talkCatalogItemNum - 1, 3, -15),
            o.setEnableMouseWheel(() => !1),
            o.setUpdatePageFunc(() => {
                if (null !== o.pageNum) {
                    (PC_Message.readingIndexes[e] = o.pageNum), delete PC_Message.noReadIndexes[e];
                    const a = $gameVariables.value(Setting.database["メッセージフレンド一覧：トーク更新変数番号"][Setting.database["メッセージフレンド一覧：フレンド名の翻訳ID"].indexOf(e)]);
                    $save.pc_message_readedVariableValues[e] = a;
                }
            }),
            o.setOpenPage(i),
            o.create(),
            (PC_Message.talkCatalog = o),
            (PD_UIManager.list[o.instanceID + ":PC_Message_2_UpButton"].isStopPropagation = !1),
            (PD_UIManager.list[o.instanceID + ":PC_Message_2_DownButton"].isStopPropagation = !1);
        const r = PD_UIManager.list[o.instanceID + ":PC_Message_2_HeaderText"];
        r.clear(), r.drawTextEX(PD_Translation.transData(e), 0, 0, r.width, r.height, "left", 16, "rgb(192,230,212)", 0);
        let l = t + 1 - (PC_Message.talkCatalogItemNum + 1) + 1;
        l < 0 && (l = 0), PC_Message.talkCatalog.movePage(l, 0 === l ? 0 : l - i);
    }),
    (PC_Message.reloadTalk_Map = function (e) {
        PC.hideScaleImage(), delete PC_Message.readingIndexes[e], (PC_Message.isEmphasisLastMessage = !0), PC_Message.createMainContentsData(e, !0), PC_Message.updateTalk_Map(e);
    }),
    (PC_Message.close_Map = function () {
        PC_Message.talkCatalog && PC_Message.talkCatalog.delete(), PC_Message.initialize();
        const e = PD_UIManager.list.mapMessageApp_Base;
        e &&
            Game.getInterpreter().waitUntilPromiseSettled(
                new Promise((a) => {
                    e.deleteAnimation(),
                        e.animeMove($gamePlayer.screenX(), $gamePlayer.screenY(), 20, !1, "easeOutQuart"),
                        e.animeScale(0, 0, 20, !0, "easeOutQuart"),
                        e.animeFunction(() => {
                            PD_UIManager.list.mapMessageApp_spriteBase.delete(), a();
                        }),
                        e.playAnimation();
                }),
                () => {},
                (e) => {
                    PD_UIManager.list.mapMessageApp_spriteBase.delete(), resolve();
                }
            );
    }),
    (function () {
        "use strict";
        const e = Game_Variables.prototype.setValue;
        Game_Variables.prototype.setValue = function (a, n) {
            e.apply(this, arguments);
            let t = Setting.database["メッセージフレンド一覧：トーク更新変数番号"].indexOf(a);
            if (-1 !== t) {
                const e = Setting.database["メッセージフレンド一覧：フレンド名の翻訳ID"][t];
                $gameMap.mapId() === Setting.pc_mapId
                    ? "Message" === PC.activeWindowName && e === PC_Message.openTalk_ID
                        ? PC_Message.reloadTalk_reserve(e)
                        : ((PC_Message.reserveReloadTalk_ID = e), PC_Message.checkNoticeDesktop())
                    : PD_UIManager.list.mapMessageApp_Base && e && PC_Message.reloadTalk_Map(e),
                    PC_Message.orderNewMessage(e);
            }
        };
        const a = Game_Switches.prototype.setValue;
        Game_Switches.prototype.setValue = function (e, n) {
            a.apply(this, arguments);
            let t = null;
            for (let a in PC_Message.useSwitchIDs)
                if (PC_Message.useSwitchIDs[a].includes(e)) {
                    t = a;
                    break;
                }
            null !== t &&
                (PD_UIManager.list.mapMessageApp_Base
                    ? PC_Message.reloadTalk_Map(t)
                    : $gameMap.mapId() === Setting.pc_mapId &&
                      ("Message" === PC.activeWindowName && t === PC_Message.openTalk_ID ? PC_Message.reloadTalk_reserve(t) : ((PC_Message.reserveReloadTalk_ID = PC_Message.openTalk_ID), PC_Message.checkNoticeDesktop())),
                PC_Message.orderNewMessage(t));
            for (let a = 0, t = Setting.database["メッセージフレンド一覧：出現スイッチ番号"], i = t.length; a < i; a++)
                if (t[a] === e && n) {
                    PC_Message.orderNewMessage(Setting.database["メッセージフレンド一覧：フレンド名の翻訳ID"][a]);
                    break;
                }
        };
        const n = Game_Screen.prototype.updateZoom;
        Game_Screen.prototype.updateZoom = function () {
            const e = PD_UIManager.list.mapMessageApp_spriteBase;
            if (e) {
                const a = 1 / this.zoomScale();
                e.scaleX !== a && (e.scale = [a, a]);
                const n = -SceneManager._scene._spriteset.x * a;
                e.x !== n && (e.x = n);
                const t = -SceneManager._scene._spriteset.y * a;
                e.y !== t && (e.y = t);
            }
            n.call(this);
        };
    })(),
    (PC_SNS.taskBarNameID = "学内SNS"),
    (PC_SNS.talkDB = []),
    (PC_SNS.replyButtonDB = []),
    PD_Setup.addReadyLoadCompressFile("_database/pc_SNS.csv", (e) => {
        (PC_SNS.talkDB = PD_File.convertCSV_to_Array(e).slice(1)), PC_SNS.talkDB.sort((e, a) => e[1] - a[1]);
    }),
    PD_Setup.addReadyLoadCompressFile("_database/pc_SNS_replyButton.csv", (e) => {
        (PC_SNS.replyButtonDB = PD_File.convertCSV_to_Array(e).slice(1)), PC_SNS.replyButtonDB.sort((e, a) => e[1] - a[1]);
    }),
    (PC_SNS.readedChannelIDs = []),
    (PC_SNS.initialize = function () {
        (PC_SNS.useSwitchIDs = {}),
            (PC_SNS.useSwitchIDs_button = {}),
            (PC_SNS.openChannel_ID = null),
            (PC_SNS.GeneralCatalog = null),
            (PC_SNS.PersonalCatalog = null),
            (PC_SNS.mainCatalog = null),
            (PC_SNS.mainCatalogItemNum = 17),
            (PC_SNS.GeneralChannelIDs = []),
            (PC_SNS.PersonalChannelIDs = []),
            (PC_SNS.darkWebIDs = []),
            (PC_SNS.mainContentsData = {}),
            (PC_SNS.noReadIndexes = {}),
            (PC_SNS.readingIndexes = {}),
            (PC_SNS.readedLastMessageFrags_top = {}),
            (PC_SNS.readedLastMessageFrags_bottom = {}),
            (PC_SNS.newRead_Info = void 0),
            (PC_SNS.reserveReloadChannel_ID = null),
            (PC_SNS.reserve_NotScrollLast = !1),
            (PC_SNS.openDarkWeb_ch = null);
    }),
    (PC_SNS.open = function (e, a = null, n = null, t = null, i = null, o = []) {
        (PC_SNS.readedChannelIDs = o),
            PC_SNS.createChannelIDs(),
            PC_SNS.GeneralChannelIDs.includes($save.pc_sns_preChannelID) ||
                PC_SNS.PersonalChannelIDs.includes($save.pc_sns_preChannelID) ||
                PC_SNS.darkWebIDs.includes($save.pc_sns_preChannelID) ||
                (PC_SNS.GeneralChannelIDs[0]
                    ? ($save.pc_sns_preChannelID = PC_SNS.GeneralChannelIDs[0])
                    : PC_SNS.PersonalChannelIDs[0]
                    ? ($save.pc_sns_preChannelID = PC_SNS.PersonalChannelIDs[0])
                    : ($save.pc_sns_preChannelID = PC_SNS.darkWebIDs[0]));
        const r = e || (PC_SNS.openDarkWeb_ch ? PC_SNS.openDarkWeb_ch : $save.pc_sns_preChannelID),
            l = PC_SNS.darkWebIDs.includes(r);
        PC.openWindowNames.includes("SNS") && PC_SNS.darkWebIDs.includes(PC_SNS.openChannel_ID) !== l && PC.closeWindow("SNS", !0),
            PC.createWindow(
                "SNS",
                (e) => {
                    PC_SNS.initialize(), PC_SNS.createChannelIDs(), (PC_SNS.taskBarNameID = l ? "ダークウェブ" : "学内SNS");
                    const a = PD_UIManager.list.PC_SNS_HeaderText;
                    a.clear(),
                        a.drawTextEX(PD_Translation.transData(PC_SNS.taskBarNameID), 0, 0, a.width, a.height, "center", 16, "rgb(192,230,212)", 0),
                        (PC_SNS.mainContentsData = {}),
                        (PC_SNS.noReadIndexes = {}),
                        (PC_SNS.readingIndexes = {}),
                        PC_SNS.createChannelCatalog(e, "General"),
                        PC_SNS.createChannelCatalog(e, "Personal"),
                        l ? PC_SNS.enterDarkWeb(e) : PC_SNS.updateSNS(r);
                },
                a,
                n,
                t,
                i
            );
    }),
    (PC_SNS.close = function () {
        (PC_SNS.openDarkWeb_ch = null), PC_SNS.checkNoticeDesktop();
    }),
    (PC_SNS.activeWindow = function () {
        PC_SNS.check_reloadChannel_reserve(PC_SNS.openChannel_ID);
    }),
    (PC_SNS.cancelWindow = function () {
        return !1;
    }),
    (PC_SNS.createChannelIDs = function () {
        (PC_SNS.GeneralChannelIDs = []), (PC_SNS.PersonalChannelIDs = []), (PC_SNS.darkWebIDs = []);
        for (let e = 0, a = Setting.database["SNSチャンネルリスト：翻訳ID"], n = a.length; e < n; e++)
            Setting.database["SNSチャンネルリスト：PCオーナー"][e] === PC.owner &&
                ("全体" === Setting.database["SNSチャンネルリスト：カテゴリ"][e]
                    ? PC_SNS.GeneralChannelIDs.push(a[e])
                    : "個別" === Setting.database["SNSチャンネルリスト：カテゴリ"][e]
                    ? PC_SNS.PersonalChannelIDs.push(a[e])
                    : "ダークウェブ" === Setting.database["SNSチャンネルリスト：カテゴリ"][e] && PC_SNS.darkWebIDs.push(a[e]));
    }),
    (PC_SNS.createChannelCatalog = function (e, a) {
        const n = [];
        for (let e = 0, t = PC_SNS[a + "ChannelIDs"], i = t.length; e < i; e++) {
            const i = t[e],
                o = Setting.database["SNSチャンネルリスト：閲覧禁止スイッチ番号"][Setting.database["SNSチャンネルリスト：翻訳ID"].indexOf(i)],
                r = !o || $gameSwitches.value(o);
            r || PC_SNS.createMainContentsData(i),
                n.push((n, t) => {
                    const o = PD_UIManager.loadDatabase("pc/PC_SNS_" + a + "_ItemBase", n, t.instanceID + "_" + e);
                    (o.animationIndependence = !0),
                        o.addEvent("trigger", "trigger", () => {
                            AudioDatabase.playSE("PC_クリック音"), PC_SNS.checkNoticeDesktop(), PC_SNS.updateSNS(i);
                        }),
                        o.addEvent("mouseover", "mouseover", () => {
                            o.clear(), o.fillAll("rgba(192,230,212,0.2)");
                        }),
                        o.addEvent("mouseleave", "mouseleave", () => {
                            o.clear();
                        });
                    const l = PD_UIManager.list[t.instanceID + "_" + e + ":PC_SNS_" + a + "_Item_TextArea"];
                    return l.drawTextEX_EX_setIconInfo("pc/icons/SNS_icon_", 18, 18, 2), l.drawTextEX_EX(PD_Translation.transData(i), 0, 0, 200, l.height, "left", 20, "rgb(192,230,212)", 0), (l.opacity = r ? 128 : 255), o;
                });
        }
        const t = new Catalog(e, 1, 1, "pc/PC_SNS_" + a + "_CatalogBase", "PC_SNS_" + a + "_ItemArea", n, "PC_SNS_" + a + "_ItemMask");
        t.setEnableMouseWheel(() => !1),
            t.setFlipParam(!0, 10, "easeOutCubic", !1, 13, 0, 6, 1),
            t.setUpdatePageFunc(() => {
                PC.update_windows_z(e);
            }),
            t.create(),
            (PC_SNS[a + "Catalog"] = t);
    }),
    (PC_SNS.createDarkWebEntrance = function (e) {
        if (PC_SNS.get_Darkweb_ChannelID()) {
            const a = PD_UIManager.loadDatabase("pc/PC_SNS_DarkEntrance", e);
            (a.animationIndependence = !0),
                a.addEvent("trigger", "trigger", () => {
                    AudioDatabase.playSE("PC_クリック音"), PC.update_windows_z(e), PC_SNS.darkWebIDs.includes(PC_SNS.openChannel_ID) ? PC_SNS.updateSNS($save.pc_sns_preChannelID) : PC_SNS.enterDarkWeb(e);
                });
        }
    }),
    (PC_SNS.get_Darkweb_ChannelID = () => {
        for (let e = 0, a = PC_SNS.darkWebIDs, n = a.length; e < n; e++) {
            const n = Setting.database["SNSチャンネルリスト：閲覧禁止スイッチ番号"][Setting.database["SNSチャンネルリスト：翻訳ID"].indexOf(a[e])];
            if (n && !$gameSwitches.value(n)) return a[e];
        }
    }),
    (PC_SNS.enterDarkWeb = function (e) {
        const a = PC_SNS.get_Darkweb_ChannelID();
        PC_SNS.createMainContentsData(a), (PC.isDisableCloseWindow = !0), (PC.isDisableTaskChange = !0), (PC.isDisableClose = !0), PD_UIManager.stopAllWheelEvent();
        PD_UIManager.loadDatabase("pc/PC_SNS_PasswordInput_base", e);
        if (((PD_UIManager.list.PC_SNS_PasswordInput_Text2.visible = !1), (PD_UIManager.list.PC_SNS_PasswordInput_Text3.visible = !1), $gameSwitches.value(Setting.database["ダークウェブ入口パスワード不要スイッチ番号"][0])))
            PC_SNS.openDarkweb();
        else {
            PC_SNS.updateSNS(a);
            const e = PD_UIManager.list.PC_SNS_PasswordInput_CancelButton;
            e.addEvent("trigger", "trigger", () => {
                AudioDatabase.playSE("PC_クリック音"), n();
            });
            const t = PD_UIManager.list.PC_SNS_PasswordInput_OKButton;
            t.addEvent("trigger", "trigger", () => {
                AudioDatabase.playSE("PC_クリック音"),
                    (t.visible = !1),
                    (e.visible = !1),
                    (PD_UIManager.list.PC_SNS_PasswordInput_Text3.visible = !0),
                    setTimeout(() => {
                        $gameSwitches.setValue(Setting.database["ダークウェブ入口パスワード不要スイッチ番号"][0], !0), PC_SNS.openDarkweb();
                    }, 2e3);
            });
        }
        const n = () => {
            (PC.isDisableCloseWindow = !1), (PC.isDisableTaskChange = !1), (PC.isDisableClose = !1), PD_UIManager.startAllWheelEvent(), PD_UIManager.list.PC_SNS_CloseButton._e.trigger.trigger();
        };
    }),
    (PC_SNS.openDarkweb = () => {
        let e = PC_SNS.get_Darkweb_ChannelID();
        (PC_SNS.openDarkWeb_ch = e),
            PD_UIManager.list.PC_SNS_PasswordInput_base && PD_UIManager.list.PC_SNS_PasswordInput_base.delete(),
            (PC.isDisableCloseWindow = !1),
            (PC.isDisableTaskChange = !1),
            (PC.isDisableClose = !1),
            PD_UIManager.startAllWheelEvent(),
            PC_SNS.updateSNS(e);
    }),
    (PC_SNS.createMainContentsData = function (e, a) {
        const n = Setting.database["SNSチャンネルリスト：翻訳ID"].indexOf(e),
            t = $gameVariables.value(Setting.database["SNSチャンネルリスト：トーク更新変数番号"][n]);
        PC_SNS.readedChannelIDs.includes(e) && ((a = !0), PC_SNS.readedChannelIDs.splice(PC_SNS.readedChannelIDs.indexOf(e), 1)),
            a && ($save.pc_sns_readedVariableValues[e] = t),
            PC_SNS.useSwitchIDs || (PC_SNS.useSwitchIDs = {}),
            (PC_SNS.useSwitchIDs[e] = []),
            PC_SNS.useSwitchIDs_button || (PC_SNS.useSwitchIDs_button = {}),
            (PC_SNS.useSwitchIDs_button[e] = []);
        const i = [];
        for (let n = 0; n < PC_SNS.talkDB.length; n++) {
            const o = PC_SNS.talkDB[n],
                r = (o[0], o[1]),
                l = o[2],
                s = o[3],
                c = o[4],
                _ = o[5],
                m = o[6],
                d = o[7],
                g = o[8],
                u = o[9],
                p = o[10],
                P = o[11],
                I = o[12];
            if (e === r) {
                if ((s && PC_SNS.useSwitchIDs[e].push(s), !(t >= l))) break;
                if (!s || $gameSwitches.value(s)) {
                    let n = "",
                        o = "";
                    "" !== _ && ((n = PD_Translation.getData(_, "キャラ名翻訳ID")), (o = PD_Translation.getData(_, "投稿時刻"))),
                        !a &&
                            void 0 === PC_SNS.noReadIndexes[e] &&
                            (void 0 === $save.pc_sns_readedVariableValues[e] || (l > $save.pc_sns_readedVariableValues[e] && t > $save.pc_sns_readedVariableValues[e])) &&
                            (i.push(["ここから未読です"]), (PC_SNS.noReadIndexes[e] = i.length - 1));
                    let r = [];
                    if (
                        (o ? r.push(o) : r.push(""),
                        c ? r.push(c) : r.push(0),
                        n ? r.push(PD_Translation.transData(n)) : r.push(""),
                        p ? r.push(p) : r.push(null),
                        P ? r.push(P) : r.push(null),
                        "" !== I ? r.push(I) : r.push(""),
                        "" !== _ && (r = r.concat(PD_Translation.translation(_, !0))),
                        "" !== m)
                    ) {
                        let e = "img[" + m + "]";
                        g && (e += "imgCommonPath[" + m + "]imgCommonNum[" + g + "]"), r.push(e);
                    }
                    if ("" !== d) for (let e = 0; e < d; e++) r.push(g ? "imgCommonPath[" + m + "]imgCommonNum[" + g + "]" : "");
                    "" !== u && r.push(u),
                        i.push(r),
                        PC_SNS.newRead_Info &&
                            void 0 === PC_SNS.newRead_Info.index &&
                            (l === PC_SNS.newRead_Info.variableValue && (PC_SNS.newRead_Info.index = i.length - 1),
                            null === PC_SNS.newRead_Info.switchID && s && $gameSwitches.value(s) && s === PC_SNS.newRead_Info.switchID && (PC_SNS.newRead_Info.index = i.length - 1));
                }
            }
        }
        PC_SNS.mainContentsData[e] = i;
    }),
    (PC_SNS.checkNoticeDesktop = function () {
        (PC_SNS.mainContentsData = {}), (PC_SNS.noReadIndexes = {}), PC_SNS.createChannelIDs();
        const e = PC_SNS.GeneralChannelIDs.concat(PC_SNS.PersonalChannelIDs).concat(PC_SNS.darkWebIDs);
        for (let a = 0, n = e, t = n.length; a < t; a++) PC_SNS.createMainContentsData(n[a]);
        let a = !1,
            n = !1;
        for (let t = 0, i = e, o = i.length; t < o; t++) void 0 === PC_SNS.noReadIndexes[i[t]] || $save.pc_sns_hideUpdateIconChannelIDs.includes(i[t]) || (PC_SNS.darkWebIDs.includes(i[t]) ? (n = !0) : (a = !0));
        PD_UIManager.list.PC_Icon_SNS_Notice && (PD_UIManager.list.PC_Icon_SNS_Notice.visible = a), PD_UIManager.list.PC_Icon_DarkWeb_Notice && (PD_UIManager.list.PC_Icon_DarkWeb_Notice.visible = n);
    }),
    (PC_SNS.updateSNS = function (e, a) {
        if (((PC_SNS.reserve_NotScrollLast = !1), PC_SNS.check_reloadChannel_reserve(e))) return;
        PC_SNS.mainCatalog && PC_SNS.mainCatalog.delete(), PC.delete_reflect_All();
        const n = PC_SNS.darkWebIDs.includes(e);
        n
            ? ((PD_UIManager.list.PC_SNS_Main_Title_DarkWeb.visible = !0), (PD_UIManager.list.PC_SNS_Channel_Title.visible = !1))
            : ((PD_UIManager.list.PC_SNS_Main_Title_DarkWeb.visible = !1), (PD_UIManager.list.PC_SNS_Channel_Title.visible = !0), ($save.pc_sns_preChannelID = e)),
            (PC_SNS.openChannel_ID = e);
        const t = PD_UIManager.list.PC_SNS_Main_TitleArea;
        t.clear(), n || (t.drawTextEX_EX_setIconInfo("pc/icons/SNS_icon_", 18, 18, 2), t.drawTextEX_EX(PD_Translation.transData(e), 0, 0, t.width, t.height, "left", 24, "black", 0));
        for (let a = 0, t = ["General", "Personal"], i = t.length; a < i; a++) {
            const i = t[a];
            for (let a = 0, t = PC_SNS[i + "ChannelIDs"], o = t.length; a < o; a++) {
                const o = PD_UIManager.list[PC_SNS[i + "Catalog"].instanceID + "_" + a + ":PC_SNS_" + i + "_ItemBase"];
                if (n) o.visible = !1;
                else {
                    o.visible = !0;
                    const n = PD_UIManager.list[PC_SNS[i + "Catalog"].instanceID + "_" + a + ":PC_SNS_" + i + "_ItemSelect"];
                    n.clear(),
                        t[a] === e && n.fillAll("rgba(192,230,212,0.2)"),
                        (PD_UIManager.list[PC_SNS[i + "Catalog"].instanceID + "_" + a + ":PC_SNS_" + i + "_Item_IconArea"].visible = void 0 !== PC_SNS.noReadIndexes[t[a]] && !$save.pc_sns_hideUpdateIconChannelIDs.includes(t[a]));
                }
            }
        }
        const i = PC_SNS.mainContentsData[e],
            o = Setting.database["SNSチャンネルリスト：閲覧禁止スイッチ番号"][Setting.database["SNSチャンネルリスト：翻訳ID"].indexOf(e)];
        if (!o || $gameSwitches.value(o)) return void (PD_UIManager.list.PC_SNS_Main_Disable.visible = !0);
        (PD_UIManager.list.PC_SNS_Main_Disable.visible = !1), (PC_SNS.readedLastMessageFrags_top[e] = []), (PC_SNS.readedLastMessageFrags_bottom[e] = []);
        const r = [],
            l = Setting.database["SNS返信インデント幅"][0];
        let s = 0,
            c = [],
            _ = null,
            m = null;
        for (let n = 0, t = i.length; n < t; n++) {
            PC_SNS.newRead_Info && PC_SNS.newRead_Info.index === n && (_ = s), c.push(s);
            const o = i[n],
                d = o[0],
                g = o[1],
                u = o[2],
                p = 6,
                P = !!o[p],
                I = !d && !u;
            for (let e = 0, a = o.length; e < a; e++) {
                const a = s;
                if (P && 0 === e && !I)
                    r.push((e, n) => {
                        const t = PD_UIManager.loadDatabase("pc/PC_SNS_Main_ItemBase", e, n.instanceID + "_" + a),
                            i = PD_UIManager.list[n.instanceID + "_" + a + ":PC_SNS_Main_Item_TextArea"];
                        (i.x += l * g), i.drawTextEX_EX_setIconInfo("pc/icons/SNS_icon_", 18, 18, 2);
                        const o = i.drawTextEX_EX(u, 0, 0, i.width, i.height, "left", 16, "rgb(192,230,212)", 0)[0].textWidth;
                        i.drawTextEX(d, o + 16, 0, i.width - o - 16, i.height, "left", 14, "rgb(145,186,168)", 0);
                        const r = t.addUI(n.instanceID + "_" + a + ":parsonIcon");
                        (r.anchor = [0.5, 0.5]), r.move(l * g - 220, 15);
                        let s = "pc/SNS/sns_icon_person";
                        if ("giovanni" === PC.owner) s = "pc/SNS/sns_icon_person";
                        else s = "pc/SNS/sns_icon-person_area";
                        return r.loadImage(g ? "pc/SNS/sns_icon_indent" : s), t;
                    }),
                        s++;
                else if (P && e >= p)
                    r.push((t, i) => {
                        const r = PD_UIManager.loadDatabase("pc/PC_SNS_Main_ItemBase", t, i.instanceID + "_" + a),
                            s = PD_UIManager.list[i.instanceID + "_" + a + ":PC_SNS_Main_Item_TextArea"];
                        (s.x += l * g), (r.animationIndependence = !0);
                        let c = o[e],
                            _ = "rgb(192,230,212)",
                            m = "",
                            d = null,
                            u = null,
                            p = null,
                            P = [];
                        const I = c.split(/[\[\]]/);
                        for (let e = 0, a = I.length; e < a; e += 2)
                            "link" === I[e] && ((c = I[e + 1]), (_ = "rgb(106,165,139)")),
                                "img" === I[e] && (m = I[e + 1]),
                                "imgCommonPath" === I[e] && ((c = ""), (d = I[e + 1])),
                                "imgCommonNum" === I[e] && ((c = ""), (u = Number(I[e + 1]))),
                                "clickCommon" === I[e] && (p = Number(I[e + 1])),
                                "heart" === I[e] && P.push({ type: "heart", num: Number(I[e + 1]) }),
                                "smile" === I[e] && P.push({ type: "smile", num: Number(I[e + 1]) });
                        if (("@" === c.slice(0, 1) && (_ = "rgb(106,165,139)"), m)) {
                            let e;
                            if (
                                ("_UIManager/" === m.slice(0, 11)
                                    ? (e = PD_UIManager.loadDatabase(m.slice(11), s, i.instanceID + "_" + n))
                                    : ((e = s.addUI(i.instanceID + "_" + a + ":img")), e.loadImage((m.includes("/") ? "" : "pc/SNS/img/") + m)),
                                e.move(-s.width / 2, 0),
                                u)
                            ) {
                                const n = e.addUI(i.instanceID + "_" + a + ":imgText", 200, 30);
                                n.drawTextEX(PD_Translation.translation("クリックで拡大")[0], 10, 5, n.width, n.height, "left", 16, "rgb(192,230,212)"),
                                    r.addEvent("trigger", "trigger", () => {
                                        AudioDatabase.playSE("PC_クリック音"), (PC.scaleImageInfo = { paths: [(d.includes("/") ? "" : "pc/SNS/img/") + d + "_f"], names: [null], funcs: [null], index: 0 }), Game.runCommonEvent(u);
                                    });
                            }
                        } else if (P.length > 0) {
                            const e = (a, n, t, i, o, r) => {
                                let l = n.num;
                                (a.___isClicked = r),
                                    a.clear(),
                                    a.fillAll("black"),
                                    r && ((l += 1), a.fillAll("rgb(192,230,212)"), a.fillRect(2, 2, a.width - 4, a.height - 4, "rgb(72,89,104)")),
                                    a.loadImage("pc/SNS/sns_reaction_" + n.type, i, i),
                                    a.drawTextEX(String(l), t + i, 0, a.width - t, a.height, "left", o, _, 0),
                                    a.removeEvent("trigger"),
                                    a.addEvent("trigger", "trigger", () => {
                                        AudioDatabase.playSE("PC_クリック音"), a.___isClicked ? e(a, n, t, i, o, !1) : (AudioDatabase.playSE("いいねボタンを押すときの音"), e(a, n, t, i, o, !0));
                                    });
                            };
                            let n = 0;
                            for (let t = 0, o = P.length; t < o; t++) {
                                const o = 20,
                                    r = 3,
                                    c = 16,
                                    _ = s.addUI(i.instanceID + "_" + a + ":reaction_" + t, o + (PD_String.charCount(String(P[t].num)) * c) / 2 + 2 * r, o);
                                _.move(-s.width / 2 + n + l * g, -Math.floor(_.height / 2)), (_.rectButton = !0), e(_, P[t], o, r, c, !1), (n += _.width + 10);
                            }
                        } else
                            s.drawTextEX_EX_setIconInfo("pc/icons/SNS_icon_", 18, 18, 2),
                                s.drawTextEX_EX(c, 0, 0, s.width, s.height, "left", 20, _, 0),
                                p
                                    ? r.addEvent("trigger", "trigger", () => {
                                          p && (AudioDatabase.playSE("PC_クリック音"), Game.runCommonEvent(p));
                                      })
                                    : u &&
                                      r.addEvent("trigger", "trigger", () => {
                                          AudioDatabase.playSE("PC_クリック音"), (PC.scaleImageInfo = { paths: [(d.includes("/") ? "" : "pc/SNS/img/") + d + "_f"], names: [null], funcs: [null], index: 0 }), Game.runCommonEvent(u);
                                      });
                        return r;
                    }),
                        s++;
                else if (!P && 0 === e) {
                    let n = o[e],
                        t = "rgb(192,230,212)";
                    "ここから未読です" === o[e] && ((n = PD_Translation.transData(o[e])), (t = "rgb(114,255,0)"), (m = s - PC_SNS.mainCatalogItemNum + 1)),
                        r.push((e, i) => {
                            const o = PD_UIManager.loadDatabase("pc/PC_SNS_Main_ItemBase", e, i.instanceID + "_" + a),
                                r = o.addUI(i.instanceID + "_" + a + ":PC_SNS_Main_Item_TextArea_line", o.width, o.height);
                            return (r.anchor = [0.5, 0.5]), (r.x = 0), r.drawTextEX(n, 0, 0, r.width, r.height, "center", 14, t, 0), o;
                        }),
                        s++;
                }
            }
            if (n < t - 1) {
                const e = s;
                r.push((a, n) => PD_UIManager.loadDatabase("pc/PC_SNS_Main_ItemBase", a, n.instanceID + "_" + e)), s++;
            }
            if (n >= t - 1 && null === m) {
                if (a) {
                    PC_SNS.newRead_Info || (_ = c[c.length - 1]);
                    let a = _ - PC_SNS.mainCatalogItemNum;
                    a < 0 && (a = 0), a > PC_SNS.readingIndexes[e] && (PC_SNS.readingIndexes[e] = a);
                }
                void 0 !== PC_SNS.readingIndexes[e]
                    ? (PC_SNS.readingIndexes[e] > s - PC_SNS.mainCatalogItemNum + 1 && (PC_SNS.readingIndexes[e] = s - PC_SNS.mainCatalogItemNum + 1), (m = PC_SNS.readingIndexes[e]))
                    : (m = s - PC_SNS.mainCatalogItemNum);
            }
        }
        const d = PD_UIManager.list.PC_SNS_Base,
            g = new Catalog(d, 1, 1, "pc/PC_SNS_Main_CatalogBase", "PC_SNS_Main_ItemArea", r, "PC_SNS_Main_ItemMask");
        g.setPageButton("PC_SNS_Main_UpButton", "PC_SNS_Main_DownButton", [0, 0, 0], [0, 0, 28, 228], [28, 0, 28, 228]), g.setPageButtonAnimation("Animation/clickButton_2"), g.setEnableMouseWheel();
        const u = g.mouseWheelEnableFunc;
        g.setEnableMouseWheel(() => u() && "SNS" === PC.activeWindowName),
            g.setFlipParam(!0, 10, "easeOutCubic", !1, 2 * PC_SNS.mainCatalogItemNum + 3, 0, PC_SNS.mainCatalogItemNum - 1, 3, -15),
            g.setOpenPage(m),
            g.setUpdatePageFunc(() => {
                if ((PC.update_windows_z(d), null !== g.pageNum)) {
                    if (((PC_SNS.readingIndexes[e] = g.pageNum), void 0 !== PC_SNS.noReadIndexes[e] && g.pageNum >= g.createListUI_Func.length - PC_SNS.mainCatalogItemNum)) {
                        delete PC_SNS.noReadIndexes[e];
                        for (let a = 0, n = i.length; a < n; a++)
                            if ("ここから未読です" === i[a][0]) {
                                i.splice(a, 1), c.splice(a, 1), PC_SNS.readedLastMessageFrags_top[e].splice(a, 1), PC_SNS.readedLastMessageFrags_bottom[e].splice(a, 1);
                                break;
                            }
                        const a = $gameVariables.value(Setting.database["SNSチャンネルリスト：トーク更新変数番号"][Setting.database["SNSチャンネルリスト：翻訳ID"].indexOf(e)]);
                        $save.pc_sns_readedVariableValues[e] !== a && (($save.pc_sns_readedVariableValues[e] = a), PC_SNS.checkSteamAchievement());
                    }
                    const a = {};
                    for (let n = 0, t = c.length; n < t; n++) {
                        const t = c[n],
                            o = c[n + 1],
                            r = i[n][5],
                            l = g.pageNum >= t - (PC_SNS.mainCatalogItemNum - 1),
                            _ = g.pageNum <= t;
                        if (!PC_SNS.readedLastMessageFrags_top[e][n] && l && _) {
                            const e = i[n][3];
                            e && Game.runCommonEvent(e);
                        } else !PC_SNS.readedLastMessageFrags_top[e][n] || (l && _) || (PC_SNS.readedLastMessageFrags_top[e][n] = !1);
                        const m = o || s + 1,
                            d = g.pageNum >= m - (PC_SNS.mainCatalogItemNum + 1),
                            u = g.pageNum <= m - 2;
                        if (!PC_SNS.readedLastMessageFrags_bottom[e][n] && d && u) {
                            const e = i[n][4];
                            e && Game.runCommonEvent(e);
                        } else !PC_SNS.readedLastMessageFrags_bottom[e][n] || (d && u) || (PC_SNS.readedLastMessageFrags_bottom[e][n] = !1);
                        r && (void 0 === a[r] && (a[r] = 0), l && u ? a[r]++ : l || u || a[r]--);
                    }
                    for (let e in a) a[e] > 0 ? PC.create_reflect(Number(e)) : PC.delete_reflect(Number(e));
                }
            }),
            g.create(),
            (PC_SNS.mainCatalog = g);
        for (let a = 0; a < PC_SNS.replyButtonDB.length; a++) {
            const n = PC_SNS.replyButtonDB[a],
                t = (n[0], n[1]),
                i = n[2],
                o = n[3];
            if (((data_contentTransID = n[4]), (data_startCommonNum = n[5]), (data_endCommonNum = n[6]), Setting.database["SNSチャンネルリスト：PCオーナー"][a] !== PC.owner)) continue;
            const r = $gameVariables.value(Setting.database["SNSチャンネルリスト：返信ボタン変数番号"][Setting.database["SNSチャンネルリスト：翻訳ID"].indexOf(e)]);
            if ((e === t && o && !PC_SNS.useSwitchIDs_button[e].includes(o) && PC_SNS.useSwitchIDs_button[e].push(o), e === t && r === i && (!o || $gameSwitches.value(o)))) {
                PD_UIManager.list.PC_SNS_MessageBox.removeEvent("trigger"),
                    PD_UIManager.list.PC_SNS_MessageBox.addEvent("trigger", "trigger", () => {
                        AudioDatabase.playSE("PC_クリック音"), PC_SNS.createSendConfirm(d, data_contentTransID, data_startCommonNum, data_endCommonNum);
                    }),
                    (PD_UIManager.list.PC_SNS_MessageBox_Disable.visible = !1);
                const e = PD_UIManager.list.PC_SNS_MessageBox_Light;
                (e.visible = !0), (e.animationIndependence = !0), e.deleteAnimation(), e.setAnimation("pc/PC_SNS_MessageBox_Light"), e.playAnimation();
                break;
            }
            {
                PD_UIManager.list.PC_SNS_MessageBox_Disable.visible = !0;
                const e = PD_UIManager.list.PC_SNS_MessageBox_Light;
                e.deleteAnimation(), (e.visible = !1);
            }
        }
        if (a) {
            let e = s + 1 - (PC_SNS.mainCatalogItemNum + 1);
            e < 0 && (e = 0);
            const a = e - g.pageNum > 0 ? 1 : e - g.pageNum < 0 ? -1 : 0;
            if (0 !== a) {
                const n = g.baseUI.addUI(g.instanceID + ":SNS_catalogMovePageAnime");
                n.animationIndependence = !0;
                for (let t = g.pageNum; t <= e; t++)
                    n.animeWait(g.flipFrame + 1),
                        n.animeFunction(() => {
                            g.movePage(g.pageNum + a, a);
                        });
                n.animeDelete(), n.playAnimation();
            }
        }
    }),
    (PC_SNS.createSendConfirm = function (e, a, n, t) {
        PC.update_windows_z(e), e.move(0, -20), (PC.isDisableCloseWindow = !0), (PC.isDisableTaskChange = !0), (PC.isDisableClose = !0), PD_UIManager.stopAllWheelEvent();
        const i = PD_UIManager.loadDatabase("pc/PC_SNS_SendConfirm_Base", e),
            o = PD_Translation.translation(a),
            r = PD_UIManager.list.PC_SNS_SendConfirm_TextArea;
        for (let e = 0; e < o.length; e++) r.drawTextEX_EX_setIconInfo("pc/icons/SNS_icon_", 18, 18, 2), r.drawTextEX_EX(o[e], 0, 26 * e, r.width, 26, "left", 20, "rgb(192,230,212)", 0);
        n && Game.runCommonEvent(n);
        PD_UIManager.list.PC_SNS_SendConfirm_Button.addEvent("trigger", "trigger", () => {
            AudioDatabase.playSE("PC_クリック音"),
                AudioDatabase.playSE("返信"),
                t && Game.runCommonEvent(t),
                (PC.isDisableCloseWindow = !1),
                (PC.isDisableTaskChange = !1),
                (PC.isDisableClose = !1),
                i.delete(),
                PD_UIManager.startAllWheelEvent();
        });
    }),
    (PC_SNS.reloadChannel = function (e) {
        PC.hideScaleImage(), PC_SNS.createMainContentsData(e, !0), PC_SNS.updateSNS(e, !PC_SNS.reserve_NotScrollLast);
    }),
    (PC_SNS.check_reloadChannel_reserve = function (e) {
        return !(!PC_SNS.reserveReloadChannel_ID || e !== PC_SNS.reserveReloadChannel_ID) && ((PC_SNS.reserveReloadChannel_ID = null), PC_SNS.reloadChannel_reserve(e, !1, !1), !0);
    }),
    (PC_SNS.reloadChannel_reserve = function (e, a = !0, n = !0) {
        PC_SNS.reloadChannel(e, a, n);
    }),
    (PC_SNS.moveCenterWindow = function (e = !1) {
        const a = new Promise((e) => {
            const a = PD_UIManager.list.PC_SNS_Base,
                n = Math.floor(0.1 * PD_Math.getDistance(a.x, a.y, 0, -20));
            a.deleteAnimation(),
                a.animeMove(0, -20, n || 1, !0, "easeOutCubic"),
                a.animeFunction(() => {
                    e();
                }),
                a.playAnimation();
        });
        if (!e) return a;
        Game.getInterpreter().waitUntilPromiseSettled(
            a,
            () => {},
            (e) => {
                throw Error(e);
            }
        );
    }),
    (PC_SNS.addHideUpdateIcon = function (e) {
        $save.pc_sns_hideUpdateIconChannelIDs.push(e);
    }),
    (PC_SNS.removeHideUpdateIcon = function (e) {
        const a = $save.pc_sns_hideUpdateIconChannelIDs.indexOf(e);
        -1 !== a && $save.pc_sns_hideUpdateIconChannelIDs.splice(a, 1);
    }),
    (PC_SNS.checkSteamAchievement = function () {
        const e = $save.pc_sns_readedVariableValues;
        e.ch_0 >= 0 && e.ch_1 >= 1 && e.ch_2 >= 0 && e.ch_3 >= 0 && e.ch_6 >= 0 && e.ch_8 >= 0 && $gameSystem.unlockAchievement("Ach003");
    }),
    (function () {
        "use strict";
        const e = Game_Variables.prototype.setValue;
        Game_Variables.prototype.setValue = function (a, n) {
            if ((e.apply(this, arguments), $gameMap.mapId() === Setting.pc_mapId)) {
                let e = Setting.database["SNSチャンネルリスト：トーク更新変数番号"].indexOf(a);
                if (-1 !== e) {
                    const a = Setting.database["SNSチャンネルリスト：翻訳ID"][e];
                    "SNS" === PC.activeWindowName && a === PC_SNS.openChannel_ID
                        ? ((PC_SNS.newRead_Info = { variableValue: n, switchID: null }), PC_SNS.reloadChannel(a), (PC_SNS.newRead_Info = void 0))
                        : ((PC_SNS.reserveReloadChannel_ID = a), PC_SNS.checkNoticeDesktop());
                } else if (((e = Setting.database["SNSチャンネルリスト：返信ボタン変数番号"].indexOf(a)), -1 !== e)) {
                    const a = Setting.database["SNSチャンネルリスト：翻訳ID"][e];
                    "SNS" === PC.activeWindowName && a === PC_SNS.openChannel_ID ? PC_SNS.reloadChannel(a) : (PC_SNS.reserveReloadChannel_ID = a);
                }
            }
        };
        const a = Game_Switches.prototype.setValue;
        Game_Switches.prototype.setValue = function (e, n) {
            if ((a.apply(this, arguments), $gameMap.mapId() === Setting.pc_mapId)) {
                let a = null;
                for (let n in PC_SNS.useSwitchIDs)
                    if (PC_SNS.useSwitchIDs[n].includes(e)) {
                        a = n;
                        break;
                    }
                if (null !== a)
                    "SNS" === PC.activeWindowName && a === PC_SNS.openChannel_ID
                        ? ((PC_SNS.newRead_Info = { variableValue: null, switchID: e }), PC_SNS.reloadChannel(a), (PC_SNS.newRead_Info = void 0))
                        : ((PC_SNS.reserveReloadChannel_ID = a), PC_SNS.checkNoticeDesktop());
                else {
                    a = null;
                    for (let n in PC_SNS.useSwitchIDs_button)
                        if (PC_SNS.useSwitchIDs_button[n].includes(e)) {
                            a = n;
                            break;
                        }
                    null !== a && ("SNS" === PC.activeWindowName && a === PC_SNS.openChannel_ID ? PC_SNS.reloadChannel(a) : (PC_SNS.reserveReloadChannel_ID = a));
                }
            }
        };
    })(),
    (PC_Document.openFolderID = null),
    (PC_Document.taskBarNameID = "ドキュメント"),
    (PC_Document.database = []),
    (PC_Document.folderFileIDs = []),
    (PC_Document.catalog = null),
    (PC_Document.fileTriggerFuncs = []),
    (PC_Document.mapEventFilters_before_minigame = null),
    (PC_Document.bgm_before_minigame = null),
    (PC_Document.bgs_before_minigame = null),
    (PC_Document.switch_before_minigame = {}),
    (PC_Document.enableMenu_before_minigame = null),
    PD_Setup.addReadyLoadCompressFile("_database/pc_file.csv", (e) => {
        PC_Document.database = PD_File.convertCSV_to_VerticalObject(e, "ファイル管理番号");
    }),
    (PC_Document.open = function (e, a = null, n = null, t = null, i = null, o = null, r = [], l = [], s = []) {
        PC.openWindowNames.includes("Document") || null === o
            ? PC.openWindowNames.includes("Document") && null !== o && PC_Document.openFolderID !== o && (PC.closeWindow("Document", !0), (PC_Document.openFolderID = o))
            : (PC_Document.openFolderID = o),
            PC.createWindow(
                "Document",
                (e) => {
                    PC_Document.taskBarNameID = PC_Document.database[o]["ファイル名の翻訳ID"];
                    const a = PD_Translation.transData(PC_Document.database[o]["ファイル名の翻訳ID"]),
                        n = PD_UIManager.list.PC_Document_HeaderText;
                    n.clear(), n.drawTextEX(a, 0, 0, n.width, n.height, "center", 16, "rgb(192,230,212)", 0);
                    let t = a,
                        i = o;
                    for (;;) {
                        const e = PC_Document.database[i]["親フォルダ管理番号"];
                        if ("" === e) break;
                        (t = PD_Translation.translation(PC_Document.database[e]["ファイル名の翻訳ID"]) + " > " + t), (i = e);
                    }
                    t = PD_Translation.translation("PC") + " > " + PD_Translation.translation("デスクトップ") + " > " + t;
                    const c = PD_UIManager.list.PC_Document_LayerText;
                    c.drawTextEX(t, 0, 0, c.width, c.height, "left", 16, "rgb(192,230,212)", 0);
                    const _ = [],
                        m = [],
                        d = [];
                    for (let e = 0, a = r.length; e < a; e++)
                        PC_Document.database[r[e]]["親フォルダ管理番号"] === o &&
                            (_.push(r[e]),
                            m.push(String(l[e] ? l[e](PD_Translation.transData(PC_Document.database[r[e]]["ファイル名の翻訳ID"])) : PD_Translation.transData(PC_Document.database[r[e]]["ファイル名の翻訳ID"]))),
                            d.push(s[e] ? s[e] : () => {}));
                    const g = PC_Document.database[o]["親フォルダ管理番号"];
                    "" === g ? (PC_Document.folderFileIDs = [_]) : PC_Document.folderFileIDs.push(_), (PC_Document.fileTriggerFuncs = []);
                    const u = [];
                    for (let e = 0, a = _.length; e < a; e++) {
                        const a = _[e],
                            n = PC_Document.database[a],
                            t = m[e],
                            i = n["ファイル種類"],
                            o = n["起動時コモン番号"];
                        PC_Document.fileTriggerFuncs.push({
                            fileID: a,
                            func: (n, t) => {
                                switch (i) {
                                    case "text":
                                        PC_Text.open(void 0, a, null, null, n - 408, t - 312);
                                        break;
                                    case "image":
                                        PC.scaleImageInfo = { paths: [], names: [], funcs: [], index: e };
                                        for (let a = 0, n = _.length; a < n; a++) {
                                            const n = PC_Document.database[_[a]];
                                            if ("image" === n["ファイル種類"]) {
                                                let t = n["音声・画像ファイルパス"];
                                                if ("_lang" === t.slice(-5))
                                                    switch ($option.language) {
                                                        case "日本語":
                                                            t = t.slice(0, -5) + "_jp";
                                                            break;
                                                        case "英語":
                                                            t = t.slice(0, -5) + "_en";
                                                            break;
                                                        case "中国語（簡体字）":
                                                            t = t.slice(0, -5) + "_ch";
                                                            break;
                                                        case "韓国語":
                                                            t = t.slice(0, -5) + "_kr";
                                                    }
                                                PC.scaleImageInfo.paths.push(t),
                                                    PC.scaleImageInfo.names.push(m[a]),
                                                    PC.scaleImageInfo.funcs.push((e) => {
                                                        d[a](e), Game.runCommonEvent(n["起動時コモン番号"]);
                                                    }),
                                                    a === e && (PC.scaleImageInfo.index = PC.scaleImageInfo.paths.length - 1);
                                            }
                                        }
                                        PC.viewScaleImage();
                                        break;
                                    case "audio":
                                        PC_Audio.open(void 0, a, null, null, n - 408, t - 312);
                                        break;
                                    case "app":
                                    case "folder":
                                        Game.runCommonEvent(o);
                                }
                            },
                        }),
                            u.push((a, o) => {
                                const r = PD_UIManager.loadDatabase("pc/PC_Document_ItemBase", a, o.instanceID + "_" + e);
                                (r.animationIndependence = !0),
                                    r.addEvent("mouseover", "mouseover", () => {
                                        r.clear(), r.fillAll("rgba(192,230,212,0.2)");
                                    }),
                                    r.addEvent("mouseleave", "mouseleave", () => {
                                        r.clear();
                                    }),
                                    r.addEvent("trigger", "trigger", () => {
                                        AudioDatabase.playSE("PC_クリック音"), PC_Document.fileTriggerFuncs[e].func(r.realX, r.realY);
                                    });
                                const l = PD_UIManager.list[o.instanceID + "_" + e + ":PC_Document_ItemIcon"].addUI(o.instanceID + "_" + e + ":PC_Document_ItemIcon_img");
                                (l.anchor = [0.5, 0.5]), "app" === i && n["音声・画像ファイルパス"] ? l.loadImage(n["音声・画像ファイルパス"]) : l.loadImage("pc/document/document_icon_" + i);
                                const s = ["", ""];
                                let c = 0;
                                for (let e = 0, a = t.length; e < a; e++) {
                                    const n = PD_String.charCount(t[e]);
                                    if (c + n <= 12) (s[0] += t[e]), (c += n);
                                    else if (c + n <= 22) (s[1] += t[e]), (c += n);
                                    else {
                                        if (e !== a - 1) {
                                            s[1] += "…";
                                            break;
                                        }
                                        s[1] += t[e];
                                    }
                                }
                                const _ = PD_UIManager.list[o.instanceID + "_" + e + ":PC_Document_ItemText"];
                                for (let e = 0; e < s.length; e++) _.drawTextEX(s[e], 0, (_.height / 2) * e, _.width, _.height / 2, "center", 16, "rgb(192,230,212)", 0);
                                return r;
                            });
                    }
                    const p = new Catalog(e, 4, 1, "pc/PC_Document_CatalogBase" + ("" !== g ? "_2" : ""), "PC_Document_ItemArea", u, "PC_Document_ItemMask");
                    p.setPageButton("PC_Document_UpButton", "PC_Document_DownButton", [0, 0, 0], [0, 0, 30, 206], [30, 0, 30, 206]), p.setPageButtonAnimation("Animation/clickButton_2"), p.setEnableMouseWheel();
                    const P = p.mouseWheelEnableFunc;
                    if (
                        (p.setEnableMouseWheel(() => P() && "Document" === PC.activeWindowName),
                        p.setFlipParam(!0, 10, "easeOutCubic", !1, 9, 0, 3, 1, -1),
                        p.setUpdatePageFunc(() => {
                            PC.update_windows_z(e);
                        }),
                        p.create(),
                        (PC_Document.catalog = p),
                        "" !== g)
                    ) {
                        const e = PD_UIManager.list[p.instanceID + ":PC_Document_ReturnButton_Base"];
                        e.addEvent("mouseover", "mouseover", () => {
                            e.clear(), e.fillAll("rgba(192,230,212,0.2)");
                        }),
                            e.addEvent("mouseleave", "mouseleave", () => {
                                e.clear();
                            }),
                            e.addEvent("trigger", "trigger", () => {
                                AudioDatabase.playSE("PC_クリック音"), PC_Document.folderFileIDs.pop();
                                const e = PD_UIManager.list.PC_Document_Base;
                                PC_Document.open(void 0, e.x, e.y, e.x, e.y, g, PC_Document.folderFileIDs.pop());
                            });
                    }
                },
                a,
                n,
                t,
                i
            ),
            delete $save.desktopNotices.document,
            PC_Document.updateDesktopNotification();
    }),
    (PC_Document.openFile = function (e, a = 408, n = 312) {
        for (let t = 0, i = PC_Document.fileTriggerFuncs.length; t < i; t++)
            if (PC_Document.fileTriggerFuncs[t].fileID === e) {
                PC_Document.fileTriggerFuncs[t].func(a, n);
                break;
            }
    }),
    (PC_Document.close = function () {}),
    (PC_Document.updateDesktopNotification = function () {
        PD_UIManager.list.PC_Icon_Document_Notice && ($save.desktopNotices.document ? (PD_UIManager.list.PC_Icon_Document_Notice.visible = !0) : (PD_UIManager.list.PC_Icon_Document_Notice.visible = !1));
    }),
    (PC_Document.cancelWindow = function () {
        if ("" !== PC_Document.database[PC_Document.openFolderID]["親フォルダ管理番号"]) {
            return PD_UIManager.list[PC_Document.catalog.instanceID + ":PC_Document_ReturnButton_Base"]._e.trigger.trigger(), !0;
        }
        return !1;
    }),
    (PC_Document.gotoMiniGame = function () {
        (PC_Document.bgm_before_minigame = AudioManager.saveBgm()),
            (PC_Document.bgs_before_minigame = AudioManager.saveBgs()),
            (PC_Document.mapEventFilters_before_minigame = JSON.parse(JSON.stringify($save.mapEventFilters))),
            ($save.mapEventFilters = []),
            (PC.skipApplyFilter = !0);
        const e = [133, 141, 142, 143, 144, 145, 146, 147];
        PC_Document.switch_before_minigame = {};
        for (let a = 0, n = e.length; a < n; a++) (PC_Document.switch_before_minigame[e[a]] = $gameSwitches.value(e[a])), $gameSwitches.setValue(e[a], !1);
        (PC_Document.enableMenu_before_minigame = $gameSystem._menuEnabled), ($gameSystem._menuEnabled = !1), PC.close(!1, $gameVariables.value(401)[0], $gameVariables.value(402), $gameVariables.value(403), 2, !0, !0);
    }),
    (PC_Document.createMiniGameFrame = function () {
        if (PD_UIManager.list.PC_MiniGameFrame_BG) return;
        const e = PD_UIManager.base.picture.addUI("PC_MiniGameFrame_BG");
        e.loadImage("pc/document/minigame_window"), (e.anchor = [0.5, 0.5]), e.move(408, 312);
        const a = e.addUI("PC_MiniGameFrame_Header", 500, 25);
        a.drawTextEX(PD_Translation.transData($gameVariables.value(411)), 0, 0, 500, 25, "center", 16, "rgb(192,230,212)", 0), (a.anchor = [0.5, 0.5]), a.move(0, -297);
        const n = e.addUI("PC_MiniGameFrame_CloseButton", 30, 30);
        (n.anchor = [0.5, 0.5]),
            n.move(390, -297),
            (n.rectButton = !0),
            n.addEvent("trigger", "trigger", () => {
                AudioDatabase.playSE("PC_クリック音"), Game.terminateInterpreter(), Game.runCommonEvent($gameVariables.value(412));
            });
    }),
    (PC_Document.exitMiniGame = function () {
        $gameSwitches.setValue(483, !1), Game.terminateInterpreter();
        PD_UIManager.list.PC_MiniGameFrame_BG.delete(),
            ($save.mapEventFilters = PC_Document.mapEventFilters_before_minigame),
            (PC_Document.mapEventFilters_before_minigame = null),
            AudioManager.playBgm(PC_Document.bgm_before_minigame),
            AudioManager.playBgs(PC_Document.bgs_before_minigame);
        for (let e in PC_Document.switch_before_minigame) $gameSwitches.setValue(e, PC_Document.switch_before_minigame[e]);
        ($gameSystem._menuEnabled = PC_Document.enableMenu_before_minigame), (PC.skipApplyFilter = !1), PC.open(!0);
    }),
    (PC_Audio.initialize = function () {
        (PC_Audio.taskBarNameID = "オーディオ"),
            (PC_Audio.openFileID = null),
            (PC_Audio.isPlaying = !1),
            (PC_Audio.type = null),
            (PC_Audio.param = null),
            (PC_Audio.second = null),
            (PC_Audio.preBGM_Param = null),
            (PC_Audio.preBGM_Second = null);
    }),
    (PC_Audio.open = function (e, a, n = null, t = null, i = null, o = null) {
        if ((PC.openWindowNames.includes("Audio") && void 0 !== a && a !== PC_Audio.openFileID && PC.closeWindow("Audio", !0), void 0 !== a && a !== PC_Audio.openFileID)) {
            const e = PC_Document.database[a]["起動時コモン番号"];
            e && Game.runCommonEvent(e);
        }
        void 0 === a ? (a = PC_Audio.openFileID) : (PC_Audio.openFileID = a),
            PC.createWindow(
                "Audio",
                (e) => {
                    PC_Audio.initialize();
                    const n = PD_UIManager.list.PC_Audio_HeaderText;
                    n.clear(), n.drawTextEX(PD_Translation.transData(PC_Document.database[a]["ファイル名の翻訳ID"]), 0, 0, n.width, n.height, "center", 16, "rgb(192,230,212)", 0);
                    const t = PC_Document.database[a]["音声・画像ファイルパス"].split("/"),
                        i = t.shift(),
                        o = t.join("/");
                    (PC_Audio.type = i), (PC_Audio.param = { name: o, volume: 90, pitch: 100, pan: 0 }), (PC_Audio.second = 0);
                    PD_UIManager.list.PC_Audio_PlayButton.addEvent("trigger", "trigger", () => {
                        PC_Audio.play(a);
                    });
                    PD_UIManager.list.PC_Audio_StopButton.addEvent("trigger", "trigger", () => {
                        PC_Audio.isPlaying && PC_Audio.stop(!0);
                    });
                    PD_UIManager.list.PC_Audio_EndButton.addEvent("trigger", "trigger", () => {
                        PC_Audio.isPlaying && PC_Audio.stop();
                    });
                },
                n,
                t,
                i,
                o
            );
    }),
    (PC_Audio.close = function () {
        PC_Audio.openFileID = null;
    }),
    (PC_Audio.getBuffer = function () {
        if ("bgm" === PC_Audio.type) return AudioManager._bgmBuffer;
        if ("bgs" === PC_Audio.type) return AudioManager._bgsBuffer;
        if ("me" === PC_Audio.type) return AudioManager._meBuffer;
        {
            const e = AudioManager["_" + PC_Audio.type + "Buffers"];
            for (let a = e.length - 1; a >= 0; a--) if (e[a].isPlaying() && e[a].name === PC_Audio.param.name) return e[a];
        }
    }),
    (PC_Audio.play = function (e) {
        PC_Audio.savePreBGM();
        const a = PC_Document.database[e]["開始時コモン番号"];
        if ((a && Game.runCommonEvent(a), PD_UIManager.list.PC_Audio_PlayButton && (PD_UIManager.list.PC_Audio_PlayButton.frameX = 50), "se" !== PC_Audio.type || PC_Audio.getBuffer()))
            "me" === PC_Audio.type
                ? (AudioManager.stopMe(),
                  AudioManager._bgmBuffer && AudioManager._currentBgm && ((AudioManager._currentBgm.pos = AudioManager._bgmBuffer.seek()), AudioManager._bgmBuffer.stop()),
                  (AudioManager._meBuffer = AudioManager.createBuffer("me/", PC_Audio.param.name)),
                  AudioManager.updateMeParameters(PC_Audio.param),
                  AudioManager._meBuffer.play(!1, PC_Audio.second),
                  AudioManager._meBuffer.addStopListener(AudioManager.stopMe.bind(AudioManager)))
                : "bgm" === PC_Audio.type
                ? AudioManager.playBgm(PC_Audio.param, PC_Audio.second)
                : "bgs" === PC_Audio.type && AudioManager.playBgs(PC_Audio.param, PC_Audio.second);
        else {
            const e = AudioManager.createBuffer("se/", PC_Audio.param.name);
            AudioManager.updateSeParameters(e, PC_Audio.param), e.play(!1, PC_Audio.second), AudioManager._seBuffers.push(e), AudioManager.cleanupSe();
        }
        PC_Audio.isPlaying = !0;
    }),
    (PC_Audio.stop = function (e = !1) {
        PD_UIManager.list.PC_Audio_PlayButton && (PD_UIManager.list.PC_Audio_PlayButton.frameX = 0);
        const a = PC_Audio.getBuffer();
        a
            ? (e ? ((PC_Audio.param = { name: a.name, volume: 100 * a._volume, pitch: 100 * a._pitch, pan: 100 * a._pan }), (PC_Audio.second = a.isReady() ? a.seek() : 0)) : (PC_Audio.second = 0),
              "se" === PC_Audio.type
                  ? (AudioManager["_" + PC_Audio.type + "Buffers"].splice(AudioManager["_" + PC_Audio.type + "Buffers"].indexOf(a), 1), a.destroy())
                  : "bgm" === PC_Audio.type
                  ? AudioManager.stopBgm()
                  : "bgs" === PC_Audio.type
                  ? AudioManager.stopBgs()
                  : "me" === PC_Audio.type && AudioManager.stopMe())
            : (PC_Audio.second = 0),
            (PC_Audio.isPlaying = !1),
            PC_Audio.playPreBGM();
    }),
    (PC_Audio.savePreBGM = function () {
        if (!PC_Audio.isPlaying && AudioManager._bgmBuffer && AudioManager._currentBgm) {
            PC_Audio.preBGM_Second = AudioManager._bgmBuffer.seek();
            const e = AudioManager._bgmBuffer;
            (PC_Audio.preBGM_Param = { name: e.name, volume: (e._volume / AudioManager._bgmVolume) * 1e4, pitch: 100 * e._pitch, pan: 100 * e._pan }), AudioManager.stopBgm();
        }
    }),
    (PC_Audio.playPreBGM = function () {
        PC_Audio.preBGM_Param && (AudioManager.playBgm(PC_Audio.preBGM_Param, PC_Audio.preBGM_Second), (PC_Audio.preBGM_Param = null), (PC_Audio.preBGM_Second = null));
    }),
    (PC_Audio.reset = function () {
        "Audio" !== PC.activeWindowName && PC_Audio.isPlaying && PC_Audio.stop();
    }),
    (PC_Item.taskBarNameID = "入手リスト"),
    (PC_Item.open = function (e, a = null, n = null, t = null, i = null) {
        PC.createWindow(
            "Item",
            (e) => {
                const a = [[PD_Translation.transData("現在の持ち物"), "rgb(106,165,139)"]];
                for (let e in $gameParty._items) {
                    const n = $dataItems[e].name,
                        t = PD_Translation.transData(n);
                    t && a.push([t, "rgb(192,230,212)"]);
                }
                a.push(["", "rgb(106,165,139)"]), a.push([PD_Translation.transData("R-codeリスト"), "rgb(106,165,139)"]);
                for (let e = 0, n = $save.r_words.length; e < n; e++) a.push([PD_Translation.transData("word_" + $save.r_words[e]), "rgb(192,230,212)"]);
                const n = [];
                for (let e = 0, t = a.length; e < t; e++)
                    n.push((n, t) => {
                        const i = PD_UIManager.loadDatabase("pc/PC_Item_ItemBase", n, t.instanceID + "_" + e),
                            o = PD_UIManager.list[t.instanceID + "_" + e + ":PC_Item_Item_TextArea"];
                        return o.drawTextEX(a[e][0], 0, 0, o.width, o.height, "left", 20, a[e][1], 0), i;
                    });
                const t = new Catalog(e, 1, 1, "pc/PC_Item_CatalogBase", "PC_Item_ItemArea", n, "PC_Item_ItemMask");
                t.setPageButton("PC_Item_UpButton", "PC_Item_DownButton", [0, 0, 0], [0, 0, 30, 202], [30, 0, 30, 202]), t.setPageButtonAnimation("Animation/clickButton_2"), t.setEnableMouseWheel();
                const i = t.mouseWheelEnableFunc;
                t.setEnableMouseWheel(() => i() && "Item" === PC.activeWindowName),
                    t.setFlipParam(!0, 10, "easeOutCubic", !1, 27, 0, 12, 1, -10),
                    t.setUpdatePageFunc(() => {
                        PC.update_windows_z(e);
                    }),
                    t.create();
            },
            a,
            n,
            t,
            i
        );
    }),
    (PC_Item.close = function () {}),
    (PC_Data.taskBarNameID = "データリスト"),
    (PC_Data.database = []),
    PD_Setup.addReadyLoadCompressFile("_database/pc_data.csv", (e) => {
        PC_Data.database = PD_File.convertCSV_to_VerticalObject(e, "データ管理番号");
    }),
    (PC_Data.open = function (e, a = null, n = null, t = null, i = null) {
        PC.createWindow(
            "Item",
            (e) => {
                const a = [[PD_Translation.transData("現在の持ち物"), "rgb(106,165,139)"]];
                for (let e in $gameParty._items) {
                    const n = $dataItems[e].name;
                    a.push([PD_Translation.transData(n), "rgb(192,230,212)"]);
                }
                a.push(["", "rgb(106,165,139)"]), a.push([PD_Translation.transData("R-wordsリスト"), "rgb(106,165,139)"]);
                for (let e = 0, n = $save.r_words.length; e < n; e++) a.push([PD_Translation.transData("word_" + $save.r_words[e]), "rgb(192,230,212)"]);
                const n = [];
                for (let e = 0, t = a.length; e < t; e++)
                    n.push((n, t) => {
                        const i = PD_UIManager.loadDatabase("pc/PC_Data_ItemBase", n, t.instanceID + "_" + e),
                            o = PD_UIManager.list[t.instanceID + "_" + e + ":PC_Data_Item_TextArea"];
                        return o.drawTextEX(a[e][0], 0, 0, o.width, o.height, "left", 20, a[e][1], 0), i;
                    });
                const t = new Catalog(e, 1, 1, "pc/PC_Data_CatalogBase", "PC_Data_ItemArea", n, "PC_Data_ItemMask");
                t.setPageButton("PC_Data_UpButton", "PC_Data_DownButton", [0, 0, 0], [0, 0, 30, 202], [30, 0, 30, 202]), t.setPageButtonAnimation("Animation/clickButton_2"), t.setEnableMouseWheel();
                const i = t.mouseWheelEnableFunc;
                t.setEnableMouseWheel(() => i() && "Item" === PC.activeWindowName),
                    t.setFlipParam(!0, 10, "easeOutCubic", !1, 27, 0, 12, 1, -10),
                    t.setUpdatePageFunc(() => {
                        PC.update_windows_z(e);
                    }),
                    t.create();
            },
            a,
            n,
            t,
            i
        );
    }),
    (PC_Data.close = function () {}),
    (Setting.database = {}),
    (Setting.pc_mapId = 1),
    (Setting.fontDB = []),
    PD_Setup.addReadyLoadCompressFile("_database/setting.csv", (e) => {
        const a = PD_File.convertCSV_to_Array(e);
        for (let e = 0; e < a.length; e++) "" !== a[e][1] && (Setting.database[a[e][0]] = a[e].slice(1));
        Setting.pc_mapId = Setting.database["専用マップID"][0];
        const n = Setting.database["フォントサイズ"],
            t = ["日本語", "英語", "中国語（簡体字）", "韓国語"];
        for (let e = 0; e < n.length; e++)
            if ("" !== n[e]) {
                const a = {};
                for (let n = 0; n < t.length; n++) {
                    const i = Setting.database["フォントファイル_" + t[n]][e];
                    a[t[n]] = [i.split(".")[0], i];
                }
                Setting.fontDB.push([n[e], a]);
            }
        Setting.fontDB.sort((e, a) => a[0] - e[0]);
    }),
    (function () {
        "use strict";
        const e = Bitmap.prototype._makeFontNameText;
        (Bitmap.prototype._makeFontNameText = function () {
            if ("undefined" != typeof PD_GameBridge_Child || this.fontFace === $gameSystem.mainFontFace() || "sans-serif" === this.fontFace)
                for (let e = 0; e < Setting.fontDB.length; e++)
                    if (this.fontSize >= Setting.fontDB[e][0]) {
                        this.fontFace = Setting.fontDB[e][1][$option.language][0];
                        break;
                    }
            return e.call(this);
        }),
            (Scene_Boot.prototype.loadGameFonts = function () {
                for (let e = 0; e < Setting.fontDB.length; e++) {
                    const a = Setting.fontDB[e][1],
                        n = {};
                    for (let e in a) n[e] || (FontManager.load(a[e][0], a[e][1]), (n[e] = !0));
                }
            });
    })(),
    (AudioDatabase.bgmDB = {}),
    (AudioDatabase.bgsDB = {}),
    (AudioDatabase.seDB = {}),
    PD_Setup.addReadyLoadCompressFile("_database/bgm.csv", (e) => {
        const a = PD_File.convertCSV_to_Array(e);
        for (let e = 1; e < a.length; e++)
            if ("" !== a[e][1]) {
                const n = a[e].slice(1);
                AudioDatabase.bgmDB[a[e][0]] = { name: n[0], volume: n[1], pitch: n[2], pan: n[3] };
            }
    }),
    PD_Setup.addReadyLoadCompressFile("_database/bgs.csv", (e) => {
        const a = PD_File.convertCSV_to_Array(e);
        for (let e = 1; e < a.length; e++)
            if ("" !== a[e][1]) {
                const n = a[e].slice(1);
                AudioDatabase.bgsDB[a[e][0]] = { name: n[0], volume: n[1], pitch: n[2], pan: n[3] };
            }
    }),
    PD_Setup.addReadyLoadCompressFile("_database/se.csv", (e) => {
        const a = PD_File.convertCSV_to_Array(e);
        for (let e = 1; e < a.length; e++)
            if ("" !== a[e][1]) {
                const n = a[e].slice(1);
                AudioDatabase.seDB[a[e][0]] = { name: n[0], volume: n[1], pitch: n[2], pan: n[3] };
            }
    }),
    (AudioDatabase.playBGM = function (e, a = 0, n = 0, t = 0) {
        const i = AudioDatabase.bgmDB[e];
        i
            ? AudioManager.playBgm({ name: i.name, volume: "" !== i.volume ? i.volume + a : 90, pitch: "" !== i.pitch ? i.pitch + n : 100, pan: "" !== i.pan ? i.pan + t : 0 })
            : console.error("BGMデータベースにID「" + e + "」が存在しません。");
    }),
    (AudioDatabase.playBGS = function (e, a = 0, n = 0, t = 0) {
        const i = AudioDatabase.bgsDB[e];
        i
            ? AudioManager.playBgs({ name: i.name, volume: "" !== i.volume ? i.volume + a : 90, pitch: "" !== i.pitch ? i.pitch + n : 100, pan: "" !== i.pan ? i.pan + t : 0 })
            : console.error("BGSデータベースにID「" + e + "」が存在しません。");
    }),
    (AudioDatabase.playSE = function (e, a = 0, n = 0, t = 0) {
        const i = AudioDatabase.seDB[e];
        i ? AudioManager.playSe({ name: i.name, volume: "" !== i.volume ? i.volume + a : 90, pitch: "" !== i.pitch ? i.pitch + n : 100, pan: "" !== i.pan ? i.pan + t : 0 }) : console.error("SEデータベースにID「" + e + "」が存在しません。");
    }),
    (function () {
        "use strict";
        WebAudio.initialize = function () {
            return (this._context = null), (this._masterGainNode = null), (this._masterVolume = 0.4), this._createContext(), this._createMasterGainNode(), this._setupEventHandlers(), !!this._context;
        };
    })(),
    (TrainAnime.database = {}),
    (TrainAnime.playOutSideType = 0),
    (TrainAnime.playOutSideUI = null),
    (TrainAnime.playOutSideDebrisUIs = []),
    PD_Setup.addReadyLoadCompressFile("_database/trainAnime.csv", (e) => {
        const a = PD_File.convertCSV_to_Array(e).slice(1);
        for (let e = 0; e < a.length; e += 2) {
            const n = a[e][0],
                t = !!a[e][1],
                i = a[e].slice(2),
                o = a[e + 1] ? a[e + 1].slice(2) : null;
            let r = null;
            for (let e = 0; e < i.length; e++)
                if (!i[e]) {
                    r = e;
                    break;
                }
            null !== o && (null !== r && (i.splice(r), o[r] && o.splice(r)), (TrainAnime.database[n] = { isLoop: t, fileNames: i, frames: o }));
        }
    }),
    (TrainAnime.createBase = function (e, a, n = !0, t = !0) {
        if (PD_UIManager.list.Train_Base) {
            const i = PD_UIManager.list.TrainAnime_trainBG;
            e ? ("_kuina/" === e.slice(0, 7) ? i.loadImage(e.slice(7)) : i.loadPicture("In_the_train/" + e)) : i.loadImage("train/basic/BG001"), a && TrainAnime.playOutSide(a, n, t);
        } else {
            PD_UIManager.loadDatabase("train/Train_Base", PD_UIManager.base.lower);
            const i = PD_UIManager.list.Train_In_Base.addUI("TrainAnime_trainBG");
            e ? ("_kuina/" === e.slice(0, 7) ? i.loadImage(e.slice(7)) : i.loadPicture("In_the_train/" + e)) : i.loadImage("train/basic/BG001");
            (PD_UIManager.list.Train_Chara_Base.animationIndependence = !0), (TrainAnime.playOutSideType = 0), (TrainAnime.playOutSideUI = null), (TrainAnime.playOutSideDebrisUIs = []), TrainAnime.playOutSide(a, n, t);
        }
    }),
    (TrainAnime.deleteBase = function () {
        PD_UIManager.list.Train_Base && PD_UIManager.list.Train_Base.delete(), (TrainAnime.playOutSideType = 0), (TrainAnime.playOutSideUI = null);
    }),
    (TrainAnime.createFG_L = function (e) {
        if (PD_UIManager.list.TrainAnime_trainFG_L) {
            const a = PD_UIManager.list.TrainAnime_trainFG_L;
            e ? ("_kuina/" === e.slice(0, 7) ? a.loadImage(e.slice(7)) : a.loadPicture("In_the_train/" + e)) : a.loadImage("train/basic/FG001_L");
        } else {
            const a = PD_UIManager.list.Train_FG_Base.addUI("TrainAnime_trainFG_L");
            (a.anchor = [0, 1]), a.move(0, 624), e ? ("_kuina/" === e.slice(0, 7) ? a.loadImage(e.slice(7)) : a.loadPicture("In_the_train/" + e)) : a.loadImage("train/basic/FG001_L");
        }
    }),
    (TrainAnime.createFG_R = function (e) {
        if (PD_UIManager.list.TrainAnime_trainFG_R) {
            const a = PD_UIManager.list.TrainAnime_trainFG_R;
            e ? ("_kuina/" === e.slice(0, 7) ? a.loadImage(e.slice(7)) : a.loadPicture("In_the_train/" + e)) : a.loadImage("train/basic/FG001_R");
        } else {
            const a = PD_UIManager.list.Train_FG_Base.addUI("TrainAnime_trainFG_R");
            (a.anchor = [1, 1]), a.move(816, 624), e ? ("_kuina/" === e.slice(0, 7) ? a.loadImage(e.slice(7)) : a.loadPicture("In_the_train/" + e)) : a.loadImage("train/basic/FG001_R");
        }
    }),
    (TrainAnime.deleteFG_L = function () {
        PD_UIManager.list.TrainAnime_trainFG_L && PD_UIManager.list.TrainAnime_trainFG_L.delete();
    }),
    (TrainAnime.deleteFG_R = function () {
        PD_UIManager.list.TrainAnime_trainFG_R && PD_UIManager.list.TrainAnime_trainFG_R.delete();
    }),
    (TrainAnime.startShake = function () {
        const e = PD_UIManager.list.Train_In_Base;
        e.deleteAnimation(), e.animeWait(150), e.animeMoveY(-10, 6, !0), e.animeMoveY(0, 6, !0), e.animeWait(10), e.animeMoveY(-10, 6, !0), e.animeMoveY(0, 6, !0), e.animeWait(150), e.animeLoop(), e.playAnimation();
    }),
    (TrainAnime.stopShake = function () {
        const e = PD_UIManager.list.Train_In_Base;
        e.deleteAnimation(), e.move(0, 0);
    }),
    (TrainAnime.play = function (e, a, n, t) {
        if (PD_UIManager.list["TrainAnime_spriteBase_" + a]) throw Error("すでに同じアニメーションが存在します");
        let i = !1;
        e.waitUntilPromiseSettled(
            new Promise((e, o) => {
                const r = PD_UIManager.list.Train_Chara_Base.addUI("TrainAnime_spriteBase_" + a),
                    l = [],
                    s = TrainAnime.database[a];
                let c = 0,
                    _ = null;
                for (let e = 0, n = s.fileNames, t = n.length; e < t; e++) {
                    const i = "SE[" === n[e].slice(0, 3),
                        o = i ? n[e].slice(3, -1) : n[e],
                        m = s.frames[e],
                        d = r.addUI("TrainAnime_Sprite_" + a + "_" + e);
                    (d.opacity = 0),
                        c > 0 && d.animeWait(c),
                        i
                            ? 0 === c
                                ? (_ = o)
                                : d.animeFunction(() => {
                                      AudioManager.playSe({ name: o, pan: 0, pitch: 100, volume: 100 });
                                  })
                            : (d.animeOpacity(255), d.animeWait(m), e < t - 1 && d.animeOpacity(0), l.push(d.loadPicture("In_the_train/" + o)), (c += m));
                }
                Promise.all(l).then(
                    () => {
                        for (let e = 0, a = s.fileNames, n = a.length; e < n; e++) {
                            const n = "img/pictures/In_the_train/" + a[e] + ".png";
                            ImageManager._cache[n] && (ImageManager._cache[n].destroy(), delete ImageManager._cache[n]);
                        }
                        r.animeFunction(() => {
                            i ||
                                (_ && AudioManager.playSe({ name: _, pan: 0, pitch: 100, volume: 100 }),
                                n && PD_UIManager.list["TrainAnime_spriteBase_" + n] && PD_UIManager.list["TrainAnime_spriteBase_" + n].delete(),
                                (t && !s.isLoop) || ((i = !0), e()));
                        }),
                            r.animeWait(c),
                            t &&
                                !s.isLoop &&
                                r.animeFunction(() => {
                                    (i = !0), e();
                                }),
                            s.isLoop && r.animeLoop(),
                            r.playAnimation();
                    },
                    (e) => {
                        o(e);
                    }
                );
            }),
            () => {},
            (e) => {
                throw Error(e);
            }
        );
    }),
    (TrainAnime.delete = function (e) {
        PD_UIManager.list["TrainAnime_spriteBase_" + e].delete();
    }),
    (TrainAnime.playOutSide = function (e = 1, a, n) {
        switch (e) {
            case 1:
                TrainAnime.createOutSide("train/basic/space_far", "train/basic/space_middle", a ? "train/Train_Out_1_far" : null, a ? "train/Train_Out_1_middle" : null, n ? "train/basic/debris" : null, 6, [1, 2]);
                break;
            case 2:
                TrainAnime.createOutSide("train/basic/space_far_w", "train/basic/space_middle_w", a ? "train/Train_Out_1_far" : null, a ? "train/Train_Out_1_middle" : null, n ? "train/basic/debris_w" : null, 6, [1, 2]);
                break;
            case 3:
                TrainAnime.createOutSide("train/basic/space_far", "train/basic/space_middle", a ? "train/Train_Out_1_far" : null, a ? "train/Train_Out_1_middle" : null, n ? "train/molly/debris" : null, 23, [3]);
        }
        TrainAnime.playOutSideType = e;
    }),
    (TrainAnime.createOutSide = function (e, a, n, t, i, o, r = []) {
        if ((i || (o = 0), r.includes(TrainAnime.playOutSideType))) {
            const n = PD_UIManager.list.Train_Out_1_far;
            n.loadImage(e), n.loadImage(e, 1388);
            const t = PD_UIManager.list.Train_Out_1_middle;
            if ((t.loadImage(a), t.loadImage(a, 1388), 0 === o)) {
                for (let e = 0; e < TrainAnime.playOutSideDebrisUIs.length; e++) TrainAnime.playOutSideDebrisUIs[e].delete();
                TrainAnime.playOutSideDebrisUIs = [];
            }
            for (let e = 0; e < TrainAnime.playOutSideDebrisUIs.length; e++) {
                const a = PD_UIManager.list["Train_debris_" + e];
                i && a.loadImage(i + "_" + e);
            }
        } else {
            (TrainAnime.playOutSideUI && PD_UIManager.list[TrainAnime.playOutSideUI.name]) || (TrainAnime.playOutSideUI = PD_UIManager.loadDatabase("train/Train_Out_1", PD_UIManager.list.Train_Out_Base));
            const r = PD_UIManager.list.Train_Out_1_far;
            r.loadImage(e), r.loadImage(e, 1388), n ? (r.setAnimation(n), r.playAnimation()) : r.deleteAnimation();
            const l = PD_UIManager.list.Train_Out_1_middle;
            l.loadImage(a), l.loadImage(a, 1388), t ? (l.setAnimation(t), l.playAnimation()) : l.deleteAnimation();
            for (let e = 0; e < TrainAnime.playOutSideDebrisUIs.length; e++) TrainAnime.playOutSideDebrisUIs[e].delete();
            TrainAnime.playOutSideDebrisUIs = [];
            for (let e = 0; e < o; e++) {
                const a = PD_UIManager.list.Train_Out_1_debri.addUI("Train_debris_" + e);
                a.loadImage(i + "_" + e),
                    a.move(816, PD_Math.randRange(50, 340)),
                    (a.anchor = [0.5, 0.5]),
                    a.animeWait(600),
                    a.animeMoveX(-100, 360, !0),
                    a.animeFunction(() => {
                        a.y = PD_Math.randRange(50, 340);
                        const e = PD_Math.randRange(0, 360);
                        (a.animationFrameCount = e), a.playAnimation(e);
                    }),
                    a.playAnimation(PD_Math.randRange(0, 360)),
                    TrainAnime.playOutSideDebrisUIs.push(a);
            }
        }
    }),
    (TrainAnime.playMollyNear = function (e = 0.6, a = 600) {
        const n = PD_UIManager.list.Train_Out_1_center.addUI("morister");
        n.loadImage("train/molly/morister"), (n.scale = [e, e]), (n.anchor = [0.5, 0.5]), n.move(816 + n.width * e, 230), n.animeMoveX(-n.width * e, a, !0), n.animeDelete(), n.playAnimation();
    }),
    (TrainAnime.playMollyPlatform = function () {
        PD_UIManager.loadDatabase("train/Train_Out_Molly_Start", PD_UIManager.list.Train_Out_Base).playAnimation();
    }),
    (TrainAnime.playKarellenBright = function (e = 10, a = !0, n = 120) {
        const t = PD_UIManager.loadDatabase("train/Train_Out_KarellenBright", PD_UIManager.list.Train_Out_Base);
        for (let a = 1; a <= 3; a++) t.animeWait(e), t.animeFrameX(816 * a, 1, !1);
        t.animeWait(n), a && t.animeLoop(), t.playAnimation();
    }),
    (TrainAnime.deleteKarellenBright = function () {
        PD_UIManager.list.Train_Out_KarellenBright.delete();
    }),
    (TrainAnime.explosion_1_init = function (e, a = 60) {
        PD_UIManager.list.Train_Out_1_center.addUI("TrainAnime_explosion_1_base").loadImage("train/Explosion_anime_1/Explosion1_000");
        const n = [];
        for (let e = 1; e <= 14; e++) n.push("train/Explosion_anime_1/Explosion1_" + ("000" + e).slice(-3));
        const t = [6, 6, 10, 8, 8, 8, 8, 8, 8, 8, 8, 8, a, 8],
            i = [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                () => {
                    TrainAnime.createBase(null, 1, !1, !1), TrainAnime.createFG_L("_kuina/train/basic/FG001_L"), TrainAnime.createFG_R("_kuina/train/basic/FG001_R");
                },
            ];
        e.waitUntilPromiseSettled(
            Promise.all([
                Game.stopMotionAnime_InitBase(PD_UIManager.list.Train_Out_1_center, n, null, t, i, "explosion_1"),
                new Promise((e, a) => {
                    const n = PD_UIManager.base.lower.addUI("TrainAnime_explosion_1_loadUI_BG");
                    (n.opacity = 0),
                        n
                            .loadImage("train/basic/BG001_w")
                            .then(() => {
                                e(), n.delete();
                            })
                            .catch((e) => {
                                a(e);
                            });
                }),
                new Promise((e, a) => {
                    const n = PD_UIManager.base.lower.addUI("TrainAnime_explosion_1_loadUI_FG_L");
                    (n.opacity = 0),
                        n
                            .loadImage("train/basic/FG001_w_L")
                            .then(() => {
                                e(), n.delete();
                            })
                            .catch((e) => {
                                a(e);
                            });
                }),
                new Promise((e, a) => {
                    const n = PD_UIManager.base.lower.addUI("TrainAnime_explosion_1_loadUI_FG_R");
                    (n.opacity = 0),
                        n
                            .loadImage("train/basic/FG001_w_R")
                            .then(() => {
                                e(), n.delete();
                            })
                            .catch((e) => {
                                a(e);
                            });
                }),
            ]),
            () => {},
            (e) => {
                throw Error(e);
            }
        );
    }),
    (TrainAnime.explosion_1_play = function () {
        TrainAnime.createBase("_kuina/train/basic/BG001_w", 2, !1, !1),
            TrainAnime.createFG_L("_kuina/train/basic/FG001_w_L"),
            TrainAnime.createFG_R("_kuina/train/basic/FG001_w_R"),
            PD_UIManager.list.TrainAnime_explosion_1_base.delete(),
            Game.stopMotionAnime_PlayBase("explosion_1", null);
    }),
    (TrainAnime.explosion_1_delete = function () {
        Game.stopMotionAnime_DeleteBase("explosion_1");
    }),
    (TrainAnime.explosion_2_init = function (e, a = 60) {
        PD_UIManager.list.Train_Out_1_center.addUI("TrainAnime_explosion_2_base").loadImage("train/Explosion_anime_2/Explosion2_000");
        const n = [];
        for (let e = 1; e <= 13; e++) n.push("train/Explosion_anime_2/Explosion2_" + ("000" + e).slice(-3));
        const t = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, a, 8],
            i = [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                () => {
                    TrainAnime.createBase(null, 1, !0, !1), TrainAnime.createFG_L("_kuina/train/basic/FG001_L"), TrainAnime.createFG_R("_kuina/train/basic/FG001_R");
                },
            ];
        e.waitUntilPromiseSettled(
            Promise.all([
                Game.stopMotionAnime_InitBase(PD_UIManager.list.Train_Out_1_center, n, null, t, i, "explosion_2"),
                new Promise((e, a) => {
                    const n = PD_UIManager.base.lower.addUI("TrainAnime_explosion_2_loadUI_BG");
                    (n.opacity = 0),
                        n
                            .loadImage("train/basic/BG001_w")
                            .then(() => {
                                e(), n.delete();
                            })
                            .catch((e) => {
                                a(e);
                            });
                }),
                new Promise((e, a) => {
                    const n = PD_UIManager.base.lower.addUI("TrainAnime_explosion_2_loadUI_FG_L");
                    (n.opacity = 0),
                        n
                            .loadImage("train/basic/FG001_w_L")
                            .then(() => {
                                e(), n.delete();
                            })
                            .catch((e) => {
                                a(e);
                            });
                }),
                new Promise((e, a) => {
                    const n = PD_UIManager.base.lower.addUI("TrainAnime_explosion_2_loadUI_FG_R");
                    (n.opacity = 0),
                        n
                            .loadImage("train/basic/FG001_w_R")
                            .then(() => {
                                e(), n.delete();
                            })
                            .catch((e) => {
                                a(e);
                            });
                }),
            ]),
            () => {},
            (e) => {
                throw Error(e);
            }
        );
    }),
    (TrainAnime.explosion_2_play = function () {
        TrainAnime.createBase("_kuina/train/basic/BG001_w", 2, !1, !1),
            TrainAnime.createFG_L("_kuina/train/basic/FG001_w_L"),
            TrainAnime.createFG_R("_kuina/train/basic/FG001_w_R"),
            PD_UIManager.list.TrainAnime_explosion_2_base.delete(),
            Game.stopMotionAnime_PlayBase("explosion_2", null);
    }),
    (TrainAnime.explosion_2_delete = function () {
        Game.stopMotionAnime_DeleteBase("explosion_2");
    }),
    (TrainAnime.explosion_3_init = function (e, a) {
        const n = PD_UIManager.loadDatabase("train/Train_explosion_3_molly", PD_UIManager.list.Train_Out_1_center);
        n.move((n.x += e), (n.y += a)), (n.visible = !1);
    }),
    (TrainAnime.explosion_3_play = function () {
        if ((PD_UIManager.list.TrainAnime_explosion_3_base && PD_UIManager.list.TrainAnime_explosion_3_base.delete(), PD_UIManager.list.Train_explosion_3_molly)) {
            const e = PD_UIManager.list.Train_explosion_3_molly;
            (e.visible = !0), e.playAnimation();
        } else {
            PD_UIManager.loadDatabase("train/Train_explosion_3_molly", PD_UIManager.list.Train_Out_1_center).playAnimation();
        }
    }),
    (TrainAnime.explosion_3_effect_play = function () {
        const e = [null, -20, 85, 10, -95, -30, 50, 20, -60, -20, 90, 30, -75, 80, -40],
            a = [null, -60, -55, -40, -30, -10, 0, 0, 15, 30, 20, 40, 45, 45, 65];
        for (let n = 1; n <= 14; n++) {
            const t = PD_UIManager.list["Train_explosion_3_molly_" + n];
            t.hsl = [0, -1, 255];
            const i = t.addUI("Train_explosion_3_effect_" + n, 1932, 296);
            i.loadImage("train/Explosion_anime_3/Explosion2_013_effect"), (i.anchor = [0.5, 0.5]), (i.frame = [0, 0, 322, 296]), i.move(e[n], a[n]), (i.opacity = 0), i.animeWait(6 * n);
            for (let e = 0; e < 6; e++)
                i.animeFunction(() => {
                    t.clear(), (i.opacity = 255), (i.frame = [322 * e, 0, 322, 296]);
                }),
                    i.animeWait(6);
            i.animeFunction(() => {
                i.delete(), 14 === n && TrainAnime.explosion_3_delete();
            }),
                i.playAnimation();
        }
    }),
    (TrainAnime.explosion_3_delete = function () {
        PD_UIManager.list.TrainAnime_explosion_3_base && PD_UIManager.list.TrainAnime_explosion_3_base.delete(), PD_UIManager.list.Train_explosion_3_molly && PD_UIManager.list.Train_explosion_3_molly.delete();
    }),
    (TrainAnime.motherHorror_1_play = function () {
        Game.getInterpreter().waitUntilPromiseSettled(
            new Promise((e) => {
                const a = PD_UIManager.list.Train_Out_1_debri.addUI("TrainAnime_motherHorror_base");
                a.loadImage("train/stage1_End_mother/C1_00888_mother_0"),
                    (a.tone = [-255, -255, -255, 255]),
                    (a.opacity = 0),
                    a.animeOpacity(255, 20, !1),
                    a.animeTone(0, 0, 0, 0, 20, !0),
                    a.animeWait(60),
                    a.animeOpacity(0, 20, !1),
                    a.animeTone(-255, -255, -255, 255, 20, !0),
                    a.animeFunction(() => {
                        e();
                    }),
                    a.animeDelete(),
                    a.playAnimation();
            }),
            () => {},
            (e) => {
                throw Error(e);
            }
        );
    }),
    (TrainAnime.motherHorror_2_play = function () {
        const e = PD_UIManager.list.Train_Out_1_debri.addUI("TrainAnime_motherHorror_base");
        e.loadImage("train/stage1_End_mother/C1_00888_mother_1"), (e.tone = [-255, -255, -255, 255]), (e.opacity = 0), e.move(408, 130), (e.anchor = [0.5, 0.5]), (e.scale = [0.7, 0.7]);
        const a = [];
        for (let e = 1; e <= 6; e++) a.push("train/stage1_End_mother/C1_00888_mother_" + e);
        const n = [];
        for (let e = 1; e <= 6; e++)
            n.push((e) => {
                e.anchor = [0.5, 0.5];
            });
        const t = [100, 20, 20, 20, 20, 20];
        Game.getInterpreter().waitUntilPromiseSettled(
            new Promise((i) => {
                Game.stopMotionAnime_InitBase(e, a, n, t, null, "motherHorror").then(() => {
                    e.animeOpacity(255, 30, !1),
                        e.animeTone(0, 0, 0, 0, 30, !1),
                        e.animeMove(408, 270, 220, !1, "easeOutBack"),
                        e.animeScale(1, 1, 220, !1, "easeOutCubic"),
                        e.animeWait(60),
                        e.animeFunction(() => {
                            Game.stopMotionAnime_PlayBase("motherHorror", null);
                        }),
                        e.animeWait(120),
                        e.animeFunction(() => {
                            i();
                        }),
                        e.playAnimation();
                });
            }),
            () => {},
            (e) => {
                throw Error(e);
            }
        );
    }),
    (TrainAnime.motherHorror_2_delete = function () {
        PD_UIManager.list.TrainAnime_motherHorror_base.delete();
    }),
    (StillAnime.database = {}),
    (StillAnime.groups = {}),
    PD_Setup.addReadyLoadCompressFile("_database/stillAnime.csv", (e) => {
        const a = PD_File.convertCSV_to_Array(e).slice(1);
        for (let e = 0; e < a.length; e += 2) {
            const n = a[e][0],
                t = a[e][1],
                i = a[e][2],
                o = !!a[e][3],
                r = a[e].slice(4),
                l = a[e + 1] ? a[e + 1].slice(4) : null;
            let s = null;
            for (let e = 0; e < r.length; e++)
                if (!r[e]) {
                    s = e;
                    break;
                }
            null !== l && (null !== s && (r.splice(s), l[s] && l.splice(s)), (StillAnime.database[n] = { groupID: t, layerNum: i, isLoop: o, fileNames: r, frames: l }));
        }
    }),
    (StillAnime.play = function (e, a, n, t, i, o, r, l, s) {
        if (PD_UIManager.list["StillAnime_base_" + a]) throw Error("すでに同じスチルが存在します");
        if (!StillAnime.database[a]) throw Error("指定したスチルIDは存在しません");
        let c = !1;
        e.waitUntilPromiseSettled(
            new Promise((e, _) => {
                let m = StillAnime.database[a].groupID;
                "" !== m && (StillAnime.groups[m] || (StillAnime.groups[m] = []), StillAnime.groups[m].push(a));
                const d = PD_UIManager.list.StillAnime_base.addUI("StillAnime_base_" + a),
                    g = d.addUI("StillAnime_spriteBase_" + a);
                (g.animationIndependence = !0), StillAnime.database[a].layerNum && (d.z = StillAnime.database[a].layerNum);
                const u = [],
                    p = StillAnime.database[a];
                let P = 0,
                    I = null;
                for (let e = 0, n = p.fileNames, t = n.length; e < t; e++) {
                    const i = "SE[" === n[e].slice(0, 3),
                        o = i ? n[e].slice(3, -1) : n[e],
                        r = p.frames[e],
                        l = g.addUI("StillAnime_Sprite_" + a + "_" + e);
                    (l.opacity = 0),
                        P > 0 && l.animeWait(P),
                        i
                            ? 0 === P
                                ? (I = o)
                                : l.animeFunction(() => {
                                      AudioManager.playSe({ name: o, pan: 0, pitch: 100, volume: 100 });
                                  })
                            : (l.animeOpacity(255), l.animeWait(r), e < t - 1 && l.animeOpacity(0), u.push(l.loadPicture("stillAnime/" + o)), (P += r));
                }
                Promise.all(u).then(
                    () => {
                        for (let e = 0, a = p.fileNames, n = a.length; e < n; e++) {
                            const n = "img/pictures/stillAnime/" + a[e] + ".png";
                            ImageManager._cache[n] && (ImageManager._cache[n].destroy(), delete ImageManager._cache[n]);
                        }
                        l > 0 ? ((d.x = t), (d.y = i), (d.opacity = 0), d.animeOpacity(255, l, !1, "easeOutSine"), d.animeMove(o, r, l, !1, "easeOutSine")) : ((d.x = o), (d.y = r), (d.opacity = 255)),
                            d.animeWait(l),
                            l > P &&
                                s &&
                                !p.isLoop &&
                                d.animeFunction(() => {
                                    (c = !0), e();
                                }),
                            d.playAnimation(),
                            g.animeFunction(() => {
                                if (!c) {
                                    if ((I && AudioManager.playSe({ name: I, pan: 0, pitch: 100, volume: 100 }), n && PD_UIManager.list["StillAnime_base_" + n])) StillAnime.delete(n);
                                    else if (null === n)
                                        for (let e in PD_UIManager.list) {
                                            const n = e.slice(16);
                                            n !== a && "StillAnime_base_" === e.slice(0, 16) && p.layerNum === StillAnime.database[n].layerNum && StillAnime.delete(n);
                                        }
                                    (s && !p.isLoop) || ((c = !0), e());
                                }
                            }),
                            g.animeWait(P),
                            s &&
                                !p.isLoop &&
                                g.animeFunction(() => {
                                    (c = !0), e();
                                }),
                            p.isLoop && g.animeLoop(),
                            g.playAnimation();
                    },
                    (e) => {
                        _(e);
                    }
                );
            }),
            () => {},
            (e) => {
                throw Error(e);
            }
        );
    }),
    (StillAnime.move = function (e, a, n, t, i, o, r, l, s) {
        const c = (e) => {
            if (!PD_UIManager.list["StillAnime_base_" + a]) throw Error("対象のスチルが存在しません");
            const s = PD_UIManager.list["StillAnime_base_" + a];
            s.deleteAnimation(),
                s.animeMove(n, t, l, !1),
                s.animeScale(i / 100, o / 100, l, !1),
                s.animeOpacity(r, l, !1),
                s.animeWait(l),
                e &&
                    s.animeFunction(() => {
                        e();
                    }),
                s.playAnimation();
        };
        s
            ? e.waitUntilPromiseSettled(
                  new Promise((e, a) => {
                      c(e);
                  }),
                  () => {},
                  (e) => {
                      throw Error(e);
                  }
              )
            : c();
    }),
    (StillAnime.moveGroup = function (e, a, n, t, i, o, r, l, s) {
        if (!StillAnime.groups[a]) throw Error("対象のグループが存在しません");
        const c = (s) => {
            const c = PD_UIManager.list.StillAnime_base.addUI("StillAnime_GroupWait_" + a);
            c.animeWait(l),
                c.animeFunction(() => {
                    c.delete(), s && s();
                }),
                c.playAnimation();
            for (let s = 0, c = StillAnime.groups[a].length; s < c; s++) {
                const c = StillAnime.groups[a][s],
                    _ = PD_UIManager.list["StillAnime_base_" + c],
                    m = _.x + n,
                    d = _.y + t,
                    g = 100 * _.scaleX + i,
                    u = 100 * _.scaleY + o,
                    p = _.opacity + r;
                StillAnime.move(e, c, m, d, g, u, p, l, !1);
            }
        };
        s
            ? e.waitUntilPromiseSettled(
                  new Promise((e, a) => {
                      c(e);
                  }),
                  () => {},
                  (e) => {
                      throw Error(e);
                  }
              )
            : c();
    }),
    (StillAnime.delete = function (e, a, n) {
        const t = PD_UIManager.list["StillAnime_base_" + e];
        if (!t) return;
        const i = (n) => {
            const i = () => {
                let a = !1;
                for (let n in StillAnime.groups) {
                    for (let t = 0, i = StillAnime.groups[n].length; t < i; t++)
                        if (StillAnime.groups[n][t] === e) {
                            StillAnime.groups[n].splice(t, 1), (a = !0);
                            break;
                        }
                    if (a) break;
                }
            };
            a
                ? (t.deleteAnimation(),
                  t.animeOpacity(0, a, !0),
                  t.animeFunction(() => {
                      t.delete(), i(), n && n();
                  }),
                  t.playAnimation())
                : (t.delete(), i());
        };
        n && Game.getInterpreter()
            ? Game.getInterpreter().waitUntilPromiseSettled(
                  new Promise((e, a) => {
                      i(e);
                  }),
                  () => {},
                  (e) => {
                      throw Error(e);
                  }
              )
            : i();
    }),
    (StillAnime.deleteGroup = function (e, a, n) {
        if (!StillAnime.groups[e]) throw Error("対象のグループが存在しません");
        const t = (n) => {
            for (let t = 0, i = StillAnime.groups[e].length; t < i; t++) {
                const i = PD_UIManager.list["StillAnime_base_" + StillAnime.groups[e][t]];
                a
                    ? (i.deleteAnimation(),
                      i.animeOpacity(0, a, !0),
                      i.animeFunction(() => {
                          i.delete(), delete StillAnime.groups[e], n && n();
                      }),
                      i.playAnimation())
                    : i.delete();
            }
            a || delete StillAnime.groups[e];
        };
        n && Game.getInterpreter()
            ? Game.getInterpreter().waitUntilPromiseSettled(
                  new Promise((e, a) => {
                      t(e);
                  }),
                  () => {},
                  (e) => {
                      throw Error(e);
                  }
              )
            : t();
    }),
    (StillAnime.deleteAll = function (e, a) {
        const n = (a) => {
            for (let n in PD_UIManager.list)
                if ("StillAnime_base_" === n.slice(0, 16)) {
                    const t = PD_UIManager.list[n];
                    e
                        ? (t.deleteAnimation(),
                          t.animeOpacity(0, e, !0),
                          t.animeFunction(() => {
                              t.delete(), (StillAnime.groups = {}), a && a();
                          }),
                          t.playAnimation())
                        : t.delete();
                }
            e || (StillAnime.groups = {});
        };
        a && Game.getInterpreter()
            ? Game.getInterpreter().waitUntilPromiseSettled(
                  new Promise((e, a) => {
                      n(e);
                  }),
                  () => {},
                  (e) => {
                      throw Error(e);
                  }
              )
            : n();
    }),
    (function () {
        "use strict";
        const e = Spriteset_Map.prototype.createUpperLayer;
        Spriteset_Map.prototype.createUpperLayer = function () {
            (StillAnime.groups = {}), PD_UIManager.addLayerBaseUI(this, "Still"), PD_UIManager.base.Still.addUI("StillAnime_base"), e.call(this);
        };
        const a = Game_Screen.prototype.updateZoom;
        Game_Screen.prototype.updateZoom = function () {
            const e = PD_UIManager.list.StillAnime_base;
            if (e) {
                const a = 1 / this.zoomScale();
                e.scaleX !== a && (e.scale = [a, a]);
                const n = -SceneManager._scene._spriteset.x * a;
                e.x !== n && (e.x = n);
                const t = -SceneManager._scene._spriteset.y * a;
                e.y !== t && (e.y = t);
            }
            a.call(this);
        };
    })(),
    (Hack_0_Opening.explodeAnime_play = function (e) {
        let a = 300;
        const n = PD_UIManager.base.middle.addUI("opening_fade", 816, 624);
        n.fillAll("black");
        const t = [];
        for (let e = 1; e <= 26; e++) t.push("animation/explodes_molly/C1_00001_" + e);
        const i = [14, 2, 2, 1, 2, 2, 3, 3, 13, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 5, 6, 11, 9, 2, 10];
        for (let e = 0, a = i.length - 1; e < a; e++) i[e] *= 4;
        (i[0] += 480),
            (i[i.length - 1] += 60),
            e.waitUntilPromiseSettled(
                new Promise((e, o) => {
                    Game.stopMotionAnime_InitBase(PD_UIManager.base.lower, t, null, i, null, "opening_explodes_molly_Anime").then(() => {
                        n.animeOpacity(0, a, !0);
                        let t = 0;
                        for (let e = 0; e <= i.length - 1; e++) t += i[e];
                        n.animeWait(t - a - 60), n.animeOpacity(255, 60, !0), n.animeWait(30), n.animeDelete(), n.playAnimation();
                        const o = PD_UIManager.base.middle.addUI("opening_playSE");
                        o.animeWait(550),
                            o.animeFunction(() => {
                                AudioDatabase.playSE("OP_モーリアン爆発");
                            }),
                            o.animeWait(1),
                            o.animeDelete(),
                            o.playAnimation(),
                            Game.stopMotionAnime_PlayBase("opening_explodes_molly_Anime").then(() => {
                                Game.stopMotionAnime_DeleteBase("opening_explodes_molly_Anime"), e();
                            });
                    });
                }),
                () => {},
                (e) => {
                    throw Error(e);
                }
            );
    }),
    (Hack_0_Opening.promptStart = function (e, a, n = 20, t = "red", i = -2, o = 10, r = 60) {
        e.waitUntilPromiseSettled(
            new Promise((e) => {
                const l = [];
                for (let e = 0; e < a.length; e++) l[e] = PD_Translation.translation(a[e]);
                const s = PD_UIManager.base.lower.addUI("karelianPrompt_screenBase", 816, 624);
                s.fillAll("black"), (s.anchor = [0.5, 0.5]), s.move(408, 312);
                const c = s.addUI("karelianPrompt_screenBG");
                c.loadImage("animation/opening_karelianLogo/karelianConsole_BG"), (c.anchor = [0.5, 0.5]);
                const _ = s.addUI("opening_karelianLogo");
                _.loadImage("animation/opening_karelianLogo/C1_00022"),
                    (_.anchor = [0.5, 0.5]),
                    (_.opacity = 0),
                    _.animeOpacity(50, 60, !0),
                    _.animeWait(30),
                    _.animeOpacity(25, 60, !0),
                    _.animeWait(30),
                    _.animeOpacity(50, 60, !0),
                    _.animeLoop(60),
                    _.playAnimation();
                const m = s.addUI("hackingPC_promptBase", 720, 480);
                (m.anchor = [0.5, 0.5]), s.animeWait(30);
                for (let e = 0; e < l.length; e++) {
                    s.animeWait(r),
                        s.animeFunction(() => {
                            m.clear();
                        }),
                        s.animeWait(1);
                    for (let a = 0; a < l[e].length; a++) {
                        let r = 0;
                        for (let c = 0; c < l[e][a].length; c += i > 0 ? 1 : -i) {
                            const _ = l[e][a].slice(c, c + (i > 0 ? 1 : -i));
                            s.animeFunction(() => {
                                const e = new Bitmap();
                                (e.fontSize = n), (e.outlineWidth = 0);
                                const i = e.measureTextWidth(_);
                                e.destroy(), m.drawTextEX(_, r, (n + 5) * a, i, n, "left", n, t, 0), (r += Math.floor(i));
                            }),
                                i >= 0 ? s.animeWait(i) : c % -i == 0 && s.animeWait(1),
                                c === l[e][a].length - 1 && s.animeWait(o);
                        }
                    }
                }
                s.animeWait(30),
                    s.animeOpacity(0, 30, !0),
                    s.animeFunction(() => {
                        e();
                    }),
                    s.animeDelete(),
                    s.playAnimation();
            }),
            () => {},
            (e) => {
                throw Error(e);
            }
        );
    }),
    (Hack_0_Opening.news_karelianLogo = function (e) {
        e.waitUntilPromiseSettled(
            new Promise((e) => {
                const a = PD_UIManager.base.upper.addUI("opening_blackBG", 816, 624);
                a.fillAll("black"),
                    (a.opacity = 0),
                    a.animeOpacity(128, 10, !0),
                    a.animeWait(40),
                    a.animeOpacity(0, 10, !0),
                    a.animeFunction(() => {
                        e();
                    }),
                    a.animeDelete(),
                    a.playAnimation();
                const n = PD_UIManager.base.upper.addUI("opening_karelianLogo");
                n.loadImage("animation/opening_karelianLogo/C1_00022"),
                    (n.opacity = 0),
                    (n.blendMode = 3),
                    n.animeOpacity(128, 10, !0),
                    n.animeWait(10),
                    n.animeOpacity(64, 5, !0),
                    n.animeWait(5),
                    n.animeOpacity(128, 10, !0),
                    n.animeWait(10),
                    n.animeOpacity(0, 10, !0),
                    n.animeDelete(),
                    n.playAnimation(),
                    AudioDatabase.playSE("グリッチ_C1_00215"),
                    Hack_1_karelianOpen.playGlitchNoise(a, 255, 30);
            }),
            () => {},
            (e) => {
                throw Error(e);
            }
        );
    }),
    (Hack_0_Opening.news_waitClick = function (e) {
        e.waitUntilPromiseSettled(
            new Promise((e) => {
                const a = PD_UIManager.base.upper.addUI("opening_waitClick", 816, 624);
                (a.isStopPropagation = !0),
                    (a.rectButton = 100),
                    a.addEvent("trigger", "trigger", () => {
                        a.delete(), e();
                    });
            }),
            () => {},
            (e) => {
                throw Error(e);
            }
        );
    }),
    (Hack_0_Opening.jovaAnime_play = function (e) {
        const a = PD_UIManager.base.middle.addUI("opening_fade", 816, 624);
        a.fillAll("black");
        const n = [];
        for (let e = 1; e <= 20; e++) n.push("animation/opening_giova/C1_00025_" + e);
        const t = [24, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 6, 6, 6, 120];
        e.waitUntilPromiseSettled(
            new Promise((e, i) => {
                Game.stopMotionAnime_InitBase(PD_UIManager.base.lower, n, null, t, null, "opening_jovaAnime").then(() => {
                    let n = 0;
                    for (let e = 0; e <= 3; e++) n += t[e];
                    a.animeOpacity(0, n, !1);
                    for (let e = 4; e <= t.length - 2; e++) n += t[e];
                    a.animeWait(n),
                        a.animeOpacity(255, t[t.length - 1], !0),
                        a.animeWait(30),
                        a.animeDelete(),
                        a.playAnimation(),
                        Game.stopMotionAnime_PlayBase("opening_jovaAnime").then(() => {
                            Game.stopMotionAnime_DeleteBase("opening_jovaAnime"), e();
                        });
                });
            }),
            () => {},
            (e) => {
                throw Error(e);
            }
        );
    }),
    (Hack_0_Opening.openingAnime_Create = function (e) {
        e.waitUntilPromiseSettled(
            new Promise((e) => {
                PD_UIManager.loadDatabase("train/Anime_Opening_Base", PD_UIManager.base.middle);
                const a = PD_UIManager.list.Anime_Opening_Line_1;
                a.move(408, 624), (a.scale = [5, 5]), a.animeMove(408, 312, 240, !1, "easeOutQuad"), a.animeScale(1, 1, 240, !0, "easeOutQuad"), a.playAnimation();
                const n = PD_UIManager.list.Anime_Opening_Train;
                n.move(408, 624), (n.scale = [5, 5]), n.animeMove(408, 312, 240, !1, "easeOutQuad"), n.animeScale(1, 1, 240, !0, "easeOutQuad"), n.playAnimation();
                const t = PD_UIManager.base.upper.addUI("opening_fade", 816, 624);
                t.fillAll("black"),
                    (t.opacity = 255),
                    t.animeOpacity(0, 120, !0),
                    t.animeWait(120),
                    t.animeFunction(() => {
                        AudioDatabase.playSE("汽笛"), a.deleteAnimation(), n.deleteAnimation(), e();
                    }),
                    t.playAnimation();
            }),
            () => {},
            (e) => {
                throw Error(e);
            }
        );
    }),
    (Hack_0_Opening.openingAnime_Play = function (e) {
        e.waitUntilPromiseSettled(
            new Promise((e) => {
                const a = PD_UIManager.list.Anime_Opening_Base;
                a.playAnimation();
                const n = PD_UIManager.list.opening_fade;
                n.deleteAnimation(),
                    n.animeWait(480),
                    n.animeFunction(() => {
                        AudioDatabase.playSE("銀河鉄道が停車する");
                    }),
                    n.animeWait(120),
                    n.animeOpacity(255, 120, !0),
                    n.animeFunction(() => {
                        a.delete(), e();
                    }),
                    n.animeDelete(),
                    n.playAnimation();
            }),
            () => {},
            (e) => {
                throw Error(e);
            }
        );
    }),
    (Hack_1_karelianOpen.create = function (e) {
        PC.disable_changeMouseCursorImage();
        const a = e.addUI("PC_Progra_HackArea_bgColor", 200, 300);
        (a.anchor = [0.5, 0.5]), a.move(-2, 11), a.fillAll("rgba(0,0,0)");
        const n = e.addUI("PC_Progra_HackArea_Eye");
        (n.anchor = [0.5, 0.5]), n.move(-2, 11);
        const t = e.addUI("PC_Progra_HackArea_Door2");
        (t.anchor = [0.5, 0.5]), t.move(-7, 51);
        const i = t.addUI("PC_Progra_HackArea_Door2_img");
        (i.anchor = [0.5, 0.5]), i.loadImage("pc/hack/karelianOpen/hac_3_etc"), (i.frame = [0, 0, 98, 200]);
        const o = e.addUI("PC_Progra_HackArea_Door2_col", 98, 200);
        (o.anchor = [0.5, 0.5]), o.move(-7, 51), (o.rectButton = !0);
        const r = e.addUI("PC_Progra_HackArea_Door1");
        (r.anchor = [0.5, 0.5]), r.move(-2, 11), r.loadImage("pc/hack/karelianOpen/hac_3");
        const l = e.addUI("PC_Progra_HackArea_secretKey");
        (l.anchor = [0.5, 0.5]), l.move(-8, -108), l.loadImage("pc/hack/karelianOpen/hac_3_etc3"), (l.rectButton = !0);
        const s = e.addUI("PC_Progra_HackArea_redFlash", 632, 384);
        (s.anchor = [0.5, 0.5]), s.move(-2, 11), (s.opacity = 0), s.fillAll("red");
    }),
    (Hack_1_karelianOpen.start = function (e) {
        const a = PD_UIManager.list.PC_Progra_HackArea_Door2,
            n = PD_UIManager.list.PC_Progra_HackArea_Door2_img,
            t = PD_UIManager.list.PC_Progra_HackArea_Door2_col,
            i = PD_UIManager.list.PC_Progra_HackArea_secretKey,
            o = PD_UIManager.list.PC_Progra_HackArea_redFlash;
        t.addDragEvent(
            "drag",
            () => {
                (o.opacity = 0),
                    o.deleteAnimation(),
                    o.animeOpacity(128, 5, !0),
                    o.animeOpacity(0, 5, !0),
                    o.playAnimation(),
                    AudioDatabase.playSE("カレルレンの扉に手をかける_C1_00210"),
                    (n.y = 0),
                    n.deleteAnimation(),
                    n.animeMoveY(4, 3, !0),
                    n.animeMoveY(-4, 6, !0),
                    n.animeMoveY(0, 3, !0),
                    n.playAnimation();
            },
            () => {
                n.isPlayAnimation || ((n.y = 0), n.deleteAnimation(), n.animeMoveY(1, 2, !0), n.animeMoveY(-1, 4, !0), n.animeMoveY(0, 2, !0), n.playAnimation());
            },
            () => {
                (n.y = 0), n.deleteAnimation();
            },
            !1,
            !1,
            1
        );
        const r = [i.x, i.y];
        i.addDragEvent(
            "drag",
            () => {},
            () => {},
            () => {
                PD_Math.getDistance(i.x, i.y, a.x, a.y - 3) < 5
                    ? (t.removeDragEvent("drag"),
                      i.removeDragEvent("drag"),
                      i.clear(),
                      (n.frame = [98, 0, 98, 200]),
                      AudioDatabase.playSE("カレルレンの扉が光る"),
                      n.deleteAnimation(),
                      n.animeWait(120),
                      n.animeFunction(() => {
                          AudioDatabase.playSE("カレルレンの扉を開ける→音修正");
                      }),
                      n.animeMoveX(70, 120, !0),
                      n.animeWait(60),
                      n.animeFunction(() => {
                          Hack_1_karelianOpen.eyeAnime_play();
                      }),
                      n.playAnimation())
                    : i.move(r[0], r[1]);
            },
            !0,
            !0,
            1
        );
    }),
    (Hack_1_karelianOpen.end = function () {
        PC.enable_changeMouseCursorImage(),
            PD_UIManager.list.PC_Progra_HackArea_bgColor.delete(),
            PD_UIManager.list.PC_Progra_HackArea_Eye.delete(),
            PD_UIManager.list.PC_Progra_HackArea_Door2.delete(),
            PD_UIManager.list.PC_Progra_HackArea_Door2_col.delete(),
            PD_UIManager.list.PC_Progra_HackArea_Door1.delete(),
            PD_UIManager.list.PC_Progra_HackArea_secretKey.delete(),
            PD_UIManager.list.PC_Progra_HackArea_redFlash.delete();
    }),
    (Hack_1_karelianOpen.eyeAnime_play = function () {
        const e = PD_UIManager.list.PC_Progra_HackArea_Eye,
            a = [];
        for (let e = 1; e <= 9; e++) a.push("pc/hack/karelianOpen/still_S1_0101_" + e);
        const n = [];
        for (let e = 1; e <= 9; e++)
            n.push((e) => {
                e.anchor = [0.5, 0.5];
            });
        Game.stopMotionAnime_InitBase(e, a, n, [12, 12, 12, 6, 6, 6, 6, 6, 60], null, "karelianOpen").then(() => {
            AudioDatabase.playSE("グロテスククリーチャー"),
                Game.stopMotionAnime_PlayBase("karelianOpen").then(() => {
                    e.children.forEach((e) => {
                        e.deleteAnimation();
                    }),
                        e.animeOpacity(0, 60, !1, "easeOutSine"),
                        e.animeFunction(() => {
                            Game.stopMotionAnime_DeleteBase("karelianOpen");
                        }),
                        e.animeWait(60),
                        e.animeFunction(() => {
                            Game.runCommonEvent(135);
                        }),
                        e.playAnimation();
                });
        });
    }),
    (Hack_1_karelianOpen.playGlitchNoise = function (e = PD_UIManager.base.middle, a = 255, n = 0) {
        const t = e.addUI("glitchNoiseAnimation");
        (t.opacity = n > 0 ? 0 : a), (t.animationIndependence = !0), n > 0 && (t.animeOpacity(a, n, !0), t.playAnimation());
        const i = t.addUI("glitchNoiseAnimation_img");
        return (i.scale = [4, 4]), (i.animationIndependence = !0), i.loadImage("pc/noiseAnimation/S1_0102_noise_3"), i.animeStopMotion(204, 156, 10, 12, 3), i.animeLoop(), i.playAnimation(), t;
    }),
    (Hack_1_karelianOpen.deleteGlitchNoise = function () {
        PD_UIManager.list.glitchNoiseAnimation.delete();
    }),
    (Hack_1_karelianOpen.playKarelianOpen_windowOpen = function () {
        PC.closeAllWindow(),
            (windowBase = PD_UIManager.loadDatabase("pc/PC_Progra_Base", PD_UIManager.list.PC_Base)),
            (windowBase.anchor = [0.5, 0.5]),
            windowBase.move(0, 312),
            (windowBase.scale = [0, 0]),
            windowBase.animeMove(2, -11, 20, !1, "easeOutQuart"),
            windowBase.animeScale(1, 1, 20, !0, "easeOutQuart"),
            windowBase.playAnimation();
    }),
    (Hack_1_karelianOpen.playKarelianOpen_init = function (e) {
        const a = PD_UIManager.list.PC_Base.addUI("karelianOpen_base");
        a.loadImage("pc/hack/karelianOpen/still_S1_0101_0"), (a.anchor = [0.5, 0.5]), (a.opacity = 0), a.animeOpacity(255, 20, !0), a.playAnimation();
        const n = [];
        for (let e = 1; e <= 22; e++) n.push("pc/hack/karelianOpen/still_S1_0101_" + e);
        const t = [];
        for (let e = 1; e <= 22; e++)
            t.push((e) => {
                e.anchor = [0.5, 0.5];
            });
        e.waitUntilPromiseSettled(
            Game.stopMotionAnime_InitBase(PD_UIManager.list.PC_Base, n, t, [12, 12, 12, 6, 6, 6, 6, 6, 60, 10, 10, 10, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10], null, "karelianOpen"),
            () => {},
            (e) => {
                throw Error(e);
            }
        );
    }),
    (Hack_1_karelianOpen.playKarelianOpen_play = function () {
        const e = PD_UIManager.list.PC_Base.addUI("still_eye_1");
        (e.anchor = [0.5, 0.5]), e.loadImage("pc/hack/karelianOpen/still_S1_791"), (e.opacity = 0);
        const a = PD_UIManager.list.PC_Base.addUI("still_eye_2");
        (a.anchor = [0.5, 0.5]), a.loadImage("pc/hack/karelianOpen/still_S1_792"), (a.opacity = 0);
        const n = PD_UIManager.list.PC_Base.addUI("still_eye_3");
        (n.anchor = [0.5, 0.5]), n.loadImage("pc/hack/karelianOpen/still_S1_793"), (n.opacity = 0), PD_UIManager.list.karelianOpen_base.delete(), Game.stopMotionAnime_PlayBase("karelianOpen", 204);
    }),
    (Hack_1_karelianOpen.playKarelianOpen_play_2 = function () {
        PD_UIManager.list.still_eye_1.opacity = 255;
    }),
    (Hack_1_karelianOpen.playKarelianOpen_play_3 = function () {
        PD_UIManager.list.still_eye_1.delete(), (PD_UIManager.list.still_eye_2.opacity = 255);
    }),
    (Hack_1_karelianOpen.playKarelianOpen_play_4 = function () {
        PD_UIManager.list.still_eye_2.delete(), (PD_UIManager.list.still_eye_3.opacity = 255);
    }),
    (Hack_1_karelianOpen.playKarelianOpen_delete = function () {
        PD_UIManager.list.still_eye_3.delete(), Game.stopMotionAnime_DeleteBase("karelianOpen");
    }),
    (Hack_1_karelianOpen.idealHack_1_start = function () {
        const e = PD_UIManager.list.PC_Icon_IdealHack;
        PC_IdealHack.open(void 0, 0, -20, e.x, e.y);
        const a = PD_UIManager.list.PC_IdealHack_TextArea;
        a.animationIndependence = !0;
        const n = [""],
            t = 20,
            i = a.width / 10 - 1,
            o = a.height / t;
        let r;
        for (let e = 0; e < Setting.fontDB.length; e++)
            if (t >= Setting.fontDB[e][0]) {
                r = Setting.fontDB[e][1]["日本語"][0];
                break;
            }
        a.animeWait(1),
            a.animeFunction(() => {
                (n[n.length - 1] += PD_Math.randRange(0, 1)), a.clear();
                for (let e = 0; e < n.length; e++) a.drawTextEX(n[e], 0, t * e, a.width, t, "left", t, "rgb(200,229,222)", 0, void 0, r);
                n[n.length - 1].length >= i && (n.push(""), n.length > o && n.splice(0, 1)), (a.animationFrameCount = 0), a.isPlayAnimation || a.playAnimation(0);
            }),
            a.playAnimation();
    }),
    (Hack_1_karelianOpen.idealHack_createFullScreenUIs = function () {
        if (!PD_UIManager.list.idealHack_screenBase) {
            const e = PD_UIManager.base.lower.addUI("idealHack_screenBase", 816, 624);
            e.fillAll("black"), e.loadImage("pc/idealHack/idealHack_window_full"), (e.anchor = [0.5, 0.5]), e.move(408, 312);
        }
        if (!PD_UIManager.list.idealHack_promptBase2) {
            const e = PD_UIManager.base.lower.addUI("idealHack_promptBase2", 816, 624);
            (e.anchor = [0.5, 0.5]), e.move(420, 328);
        }
        if (!PD_UIManager.list.idealHack_frontColor) {
            const e = PD_UIManager.base.lower.addUI("idealHack_frontColor", 816, 624);
            (e.anchor = [0.5, 0.5]), e.move(408, 312), (e.opacity = 0), e.fillAll("rgb(100,0,0)");
        }
    }),
    (Hack_1_karelianOpen.idealHack_2_start = function () {
        Hack_1_karelianOpen.idealHack_createFullScreenUIs();
        const e = PD_UIManager.list.idealHack_screenBase;
        e.opacity = 0;
        const a = PD_UIManager.list.idealHack_promptBase2,
            n = PD_UIManager.list.idealHack_frontColor;
        e.animeOpacity(255, 30, !0, "easeOutQuart"),
            e.animeWait(30),
            e.animeFunction(() => {
                PC.closeWindow("IdealHack", !0);
                const e = 48,
                    t = Math.floor(a.width / 24) - 1,
                    i = Math.floor(a.height / e),
                    o = [];
                for (; o.length < i - 1; ) for (o.push(""); o[o.length - 1].length < t; ) o[o.length - 1] += PD_Math.randRange(0, 1);
                let r;
                for (let a = 0; a < Setting.fontDB.length; a++)
                    if (e >= Setting.fontDB[a][0]) {
                        r = Setting.fontDB[a][1]["日本語"][0];
                        break;
                    }
                a.animeWait(10),
                    a.animeFunction(() => {
                        for (o.splice(0, 1), o.push(""); o[o.length - 1].length < t; ) o[o.length - 1] += PD_Math.randRange(0, 1);
                        a.clear();
                        for (let n = 0; n < o.length; n++) a.drawTextEX(o[n], 0, e * n, a.width, e, "left", e, "rgb(200,229,222)", 0, void 0, r);
                        (a.animationFrameCount = 0), a.isPlayAnimation || a.playAnimation(0);
                    }),
                    a.playAnimation(),
                    (n.opacity = 0),
                    n.deleteAnimation(),
                    n.animeOpacity(128, 120, !0),
                    n.animeOpacity(0, 120, !0),
                    n.animeLoop(),
                    n.playAnimation();
            }),
            e.playAnimation();
    }),
    (Hack_1_karelianOpen.idealHack_3_start = function () {
        const e = PD_UIManager.list.idealHack_frontColor;
        e.deleteAnimation(),
            e.animeOpacity(0, 15, !0),
            e.animeFunction(() => {
                e.fillAll("rgb(0,0,255)");
            }),
            e.animeOpacity(128, 15, !0),
            e.animeOpacity(0, 15, !0),
            e.animeFunction(() => {
                e.fillAll("rgb(255,0,0)");
            }),
            e.animeOpacity(128, 15, !0),
            e.animeOpacity(0, 15, !0),
            e.animeFunction(() => {
                e.fillAll("rgb(100,0,0)");
            }),
            e.animeOpacity(128, 60, !0),
            e.playAnimation();
    }),
    (Hack_1_karelianOpen.idealHack_3_2_start = function () {
        const e = PD_UIManager.list.idealHack_frontColor;
        e.deleteAnimation(),
            e.animeOpacity(0, 30, !0),
            e.animeFunction(() => {
                e.fillAll("white");
            }),
            e.animeOpacity(200, 90, !0),
            e.animeFunction(() => {
                const e = PD_UIManager.base.middle.addUI("idealHack_eyeUP", 816, 320);
                (e.anchor = [0.5, 0]), e.move(408, -e.height), e.fillAll("black"), e.animeMove(408, -100, 120, !0, "easeOutQuart"), e.playAnimation();
                const a = PD_UIManager.base.middle.addUI("idealHack_eyeDOWN", 816, 300);
                (a.anchor = [0.5, 1]), a.move(408, 624 + a.height), a.fillAll("black"), a.animeMove(408, 724, 120, !0, "easeOutQuart"), a.playAnimation();
            }),
            e.playAnimation();
    }),
    (Hack_1_karelianOpen.idealHack_3_3_start = function () {
        const e = PD_UIManager.list.idealHack_frontColor;
        e.deleteAnimation(), e.animeOpacity(0, 120, !0), e.playAnimation();
        const a = PD_UIManager.list.idealHack_eyeUP;
        a.deleteAnimation(), a.animeMove(408, -a.height, 120, !0, "easeOutQuart"), a.animeDelete(), a.playAnimation();
        const n = PD_UIManager.list.idealHack_eyeDOWN;
        n.deleteAnimation(), n.animeMove(408, 624 + n.height, 120, !0, "easeOutQuart"), n.animeDelete(), n.playAnimation();
    }),
    (Hack_1_karelianOpen.idealHack_4_start = function (e) {
        const a = PD_UIManager.list.idealHack_frontColor;
        a.deleteAnimation(),
            a.animeOpacity(0, 15, !0),
            a.animeFunction(() => {
                a.fillAll("white");
            }),
            a.animeOpacity(200, 120, !0),
            a.animeFunction(() => {
                const e = PD_UIManager.base.middle.addUI("idealHack_eyeUP", 816, 320);
                (e.anchor = [0.5, 0]), e.move(408, -e.height), e.fillAll("black"), e.animeMove(408, 0, 120, !0, "easeOutQuart"), e.playAnimation();
                const a = PD_UIManager.base.middle.addUI("idealHack_eyeDOWN", 816, 300);
                (a.anchor = [0.5, 1]), a.move(408, 624 + a.height), a.fillAll("black"), a.animeMove(408, 624, 120, !0, "easeOutQuart"), a.playAnimation();
                let n = 0;
                const t = PD_UIManager.base.upper.addUI("idealHack_clickUI", 816, 624);
                (t.rectButton = 1e3),
                    (t.isStopPropagation = !0),
                    t.addEvent("update", "update", () => {
                        n > 0 ? ((e.y -= 2), (a.y += 2), n--, e.y <= -e.height && (e.delete(), a.delete(), t.delete(), Game.runCommonEvent(166))) : ((e.y += 2), e.y >= 0 && (e.y = 0), (a.y -= 2), a.y <= 624 && (a.y = 624));
                    }),
                    t.addEvent("trigger", "trigger", () => {
                        n += 10;
                    }),
                    t.addEvent("ok", "ok", () => {
                        0 === Input._pressedTime && (n += 10);
                    });
            }),
            a.playAnimation();
    }),
    (Hack_1_karelianOpen.idealHack_5_start = function () {
        Hack_1_karelianOpen.idealHack_createFullScreenUIs();
        PD_UIManager.list.idealHack_screenBase;
        const e = PD_UIManager.list.idealHack_promptBase2,
            a = PD_UIManager.list.idealHack_frontColor,
            n = 48,
            t = Math.floor(e.width / 24) - 1,
            i = Math.floor(e.height / n);
        let o;
        for (let e = 0; e < Setting.fontDB.length; e++)
            if (n >= Setting.fontDB[e][0]) {
                o = Setting.fontDB[e][1]["日本語"][0];
                break;
            }
        const r = () => {
            const a = [];
            for (; a.length < i - 1; ) for (a.push(""); a[a.length - 1].length < t; ) a[a.length - 1] += PD_Math.randRange(0, 1);
            e.clear();
            for (let t = 0; t < a.length; t++) e.drawTextEX(a[t], 0, n * t, e.width, n, "left", n, "rgb(200,229,222)", 0, void 0, o);
        };
        r(),
            e.deleteAnimation(),
            e.animeWait(5),
            e.animeFunction(() => {
                r(), (e.animationFrameCount = 0), e.isPlayAnimation || e.playAnimation(0);
            }),
            e.playAnimation(),
            a.deleteAnimation(),
            a.animeOpacity(0, 120, !0),
            a.animeDelete(),
            a.playAnimation();
    }),
    (Hack_1_karelianOpen.idealHack_6_start = function () {
        const e = PD_UIManager.base.lower.addUI("idealHack_whiteCharsScreen", 816, 624);
        (e.anchor = [0.5, 0.5]), e.move(408, 312);
        const a = PD_UIManager.base.lower.addUI("idealHack_whiteOut", 816, 624);
        (a.anchor = [0.5, 0.5]), a.move(408, 312), a.fillAll("white"), (a.opacity = 0);
        const n = 48;
        let t;
        for (let e = 0; e < Setting.fontDB.length; e++)
            if (24 >= Setting.fontDB[e][0]) {
                t = Setting.fontDB[e][1]["日本語"][0];
                break;
            }
        e.animeWait(5),
            e.animeFunction(() => {
                for (let a = 0; a < 50; a++) {
                    const a = PD_Math.randRange(0, 1),
                        i = PD_Math.randRange(-24, 792),
                        o = PD_Math.randRange(-24, 600);
                    e.drawTextEX(a, i, o, n, n, "center", n, "white", 0, void 0, t);
                }
                (e.animationFrameCount = 0), e.isPlayAnimation || e.playAnimation(0);
            }),
            e.playAnimation(),
            a.animeWait(120),
            a.animeOpacity(255, 120, !0),
            a.animeFunction(() => {
                PD_UIManager.list.idealHack_screenBase.delete(), PD_UIManager.list.idealHack_promptBase2.delete(), e.delete();
            }),
            a.playAnimation();
    }),
    (Hack_2_trainChain.start_trainX = -2700),
    (Hack_2_trainChain.start_trainY = 0),
    (Hack_2_trainChain.create = function (e) {
        const a = e.addUI("PC_Progra_HackArea_background");
        a.loadImage("pc/hack/trainChain/C1_00359_bg"), (a.anchor = [0.5, 0.5]), a.move(Math.floor(0.5 * Hack_2_trainChain.start_trainX), Math.floor(0.5 * Hack_2_trainChain.start_trainY));
        const n = e.addUI("PC_Progra_HackArea_train");
        if ((n.loadImage("pc/hack/trainChain/C1_00359"), (n.anchor = [0.5, 0.5]), n.move(-3500, 0), (n.rectButton = !0), !$gameSwitches.value(457))) {
            const e = n.addUI("PC_Progra_HackArea_chain");
            e.loadImage("pc/hack/trainChain/C1_00359_etc"), (e.anchor = [0.5, 0.5]);
            const a = n.addUI("PC_Progra_HackArea_chain_break");
            a.loadImage("pc/hack/trainChain/C1_00359_etc2"), (a.anchor = [0.5, 0.5]), a.move(2600, 100);
            const t = a.addUI("PC_Progra_HackArea_chain_break_light");
            t.loadImage("pc/hack/trainChain/C1_00359_etc2"), (t.anchor = [0.5, 0.5]), (t.visible = !1), (t.blendMode = 1);
            const i = a.addUI("PC_Progra_HackArea_chain_break_col", 50, 180);
            (i.anchor = [0.5, 0.5]), (i.rotation = 0.45), (i.rectButton = !0), (i.isStopPropagation = !0);
        }
    }),
    (Hack_2_trainChain.start = function (e) {
        const a = PD_UIManager.list.PC_Progra_HackArea_background,
            n = PD_UIManager.list.PC_Progra_HackArea_train;
        n.animeWait(60),
            n.animeMove(Hack_2_trainChain.start_trainX, Hack_2_trainChain.start_trainY, 120, !0, "easeOutQuart"),
            n.animeFunction(() => {
                let e = 0;
                if (
                    (n.addDragEvent(
                        "drag",
                        () => {},
                        () => {
                            n.x > 2860 ? (n.x = 2860) : n.x < -2860 && (n.x = -2860), n.y > 120 ? (n.y = 120) : n.y < -100 && (n.y = -100), a.move(Math.floor(0.5 * n.x), Math.floor(0.5 * n.y));
                        },
                        () => {},
                        !0,
                        !0,
                        10,
                        () => n.x > 2860 || n.x < -2860 || n.y > 120 || n.y < -100,
                        !1
                    ),
                    !$gameSwitches.value(457))
                ) {
                    const a = PD_UIManager.list.PC_Progra_HackArea_chain,
                        t = PD_UIManager.list.PC_Progra_HackArea_chain_break,
                        i = PD_UIManager.list.PC_Progra_HackArea_chain_break_light,
                        o = PD_UIManager.list.PC_Progra_HackArea_chain_break_col;
                    o.addEvent("trigger", "trigger", () => {
                        AudioDatabase.playSE("鎖クリック");
                        e++,
                            (t.l += 20),
                            t.deleteAnimation(),
                            e >= 10 && (o.delete(), t.animeOpacity(0, 20, !1), n.removeDragEvent("drag")),
                            t.animeScale(0.9, 0.9, 5, !1),
                            t.animeRotation(0.1, 5, !0),
                            t.animeScale(1, 1, 5, !1),
                            t.animeRotation(-0.1, 10, !0),
                            t.animeRotation(0, 5, !0),
                            t.playAnimation(),
                            (i.opacity = 255),
                            (i.scale = [1, 1]),
                            (i.visible = !0),
                            i.deleteAnimation(),
                            i.animeScale(1.5, 1.5, 10, !1),
                            i.animeOpacity(0, 10, !0),
                            i.playAnimation(),
                            e >= 10 &&
                                (AudioDatabase.playSE("鎖破壊成功"),
                                a.animeWait(10),
                                a.animeTone(255, 255, 255, 0, 30, !1),
                                a.animeOpacity(0, 30, !1),
                                a.animeScale(1, 1.5, 30, !0),
                                a.animeFunction(Hack_2_trainChain.toConductorEvent),
                                a.animeDelete(),
                                a.playAnimation());
                    }),
                        Game.runCommonEvent(168);
                }
            }),
            n.playAnimation();
    }),
    (Hack_2_trainChain.toConductorEvent = function () {
        PD_UIManager.list.PC_Progra_HackArea_chain_break.delete();
        const e = PD_UIManager.list.PC_Progra_HackArea_train,
            a = PD_UIManager.list.PC_Progra_HackArea_background;
        a.deleteAnimation(),
            a.animeMoveY(Math.floor(0.5 * Hack_2_trainChain.start_trainY), 60, !0, "easeInOutQuad"),
            a.animeMoveX(Math.floor(0.5 * Hack_2_trainChain.start_trainX), 120, !0, "easeInOutExpo"),
            a.playAnimation(),
            e.deleteAnimation(),
            e.y !== Hack_2_trainChain.start_trainY && e.animeMoveY(Hack_2_trainChain.start_trainY, 60, !0, "easeInOutQuad"),
            e.x !== Hack_2_trainChain.start_trainX && e.animeMoveX(Hack_2_trainChain.start_trainX, 120, !0, "easeInOutExpo"),
            e.animeWait(60),
            e.animeFunction(() => {
                Game.runCommonEvent(169);
            }),
            e.playAnimation();
    }),
    (Hack_2_trainChain.close = function () {
        PD_UIManager.list.PC_Progra_HackArea_train.isPlayAnimation || ($gameSwitches.value(457) && PC_Progra.endHacking(Hack_2_trainChain));
    }),
    (Hack_2_trainChain.end = function () {
        PD_UIManager.list.PC_Progra_HackArea_background.delete(), PD_UIManager.list.PC_Progra_HackArea_train.delete();
    }),
    (Hack_3_zeroDayProtect.initialize = function () {
        (Hack_3_zeroDayProtect.logo_Y = 3), (Hack_3_zeroDayProtect.gageWidth = 396), (Hack_3_zeroDayProtect.gageHeight = 16), (Hack_3_zeroDayProtect.isEnableCollider = !1);
    }),
    (Hack_3_zeroDayProtect.create = function (e) {
        Hack_3_zeroDayProtect.initialize();
        const a = e.addUI("PC_Progra_HackArea_background");
        a.loadImage("pc/hack/zeroDayProtect/zeroDayHack_BG"), (a.anchor = [0.5, 0.5]), a.move(-1, 11);
        const n = a.addUI("PC_Progra_HackArea_logo");
        n.loadImage("pc/hack/zeroDayProtect/zeroDayHack_Logo_1"), (n.anchor = [1, 1]), n.move(0, Hack_3_zeroDayProtect.logo_Y);
        const t = a.addUI("PC_Progra_HackArea_logo2");
        t.loadImage("pc/hack/zeroDayProtect/zeroDayHack_Logo_2"), (t.anchor = [0, 1]), t.move(20, Hack_3_zeroDayProtect.logo_Y);
        const i = a.addUI("PC_Progra_HackArea_gage", Hack_3_zeroDayProtect.gageWidth, Hack_3_zeroDayProtect.gageHeight);
        i.loadImage("pc/hack/zeroDayProtect/zeroDayHack_Bar"), i.move(-Hack_3_zeroDayProtect.gageWidth / 2, 72), (i.opacity = 0), (i.animationIndependence = !0);
        const o = a.addUI("PC_Progra_HackArea_parText", 44, 28);
        (o.anchor = [0, 0.5]),
            o.move(30, 52),
            (o.opacity = 0),
            o.addEvent("update", "update", () => {
                o.clear(), o.drawTextEX(Math.round((i.frameWidth / Hack_3_zeroDayProtect.gageWidth) * 100), 0, 0, o.width, o.height, "right", 24, "rgb(144,0,255)"), (s.width = i.width);
            });
        const r = a.addUI("PC_Progra_HackArea_parText_pink", o.width, o.height);
        (r.anchor = [0, 0.5]), (r.opacity = 0), r.move(o.x, o.y), r.drawTextEX("0", 0, 0, r.width, r.height, "right", 24, "rgb(0,255,191)");
        const l = a.addUI("PC_Progra_HackArea_parMark", 60, o.height);
        (l.anchor = [0, 0.5]), l.move(o.x + o.width, o.y), (l.opacity = 0), l.drawTextEX("%", 0, 0, l.width, l.height, "left", 24, "rgb(144,0,255)");
        const s = a.addUI("PC_Progra_HackArea_gageCollider", i.width, i.height);
        s.move(i.x, i.y), (s.rectButton = !0);
        let c = 0;
        s.addDragEvent(
            "drag",
            () => {
                (c = i.frameWidth),
                    n.deleteAnimation(),
                    n.animeScaleY(0.7, 10, !0, "easeOutCubic"),
                    n.animeWait(5),
                    n.animeScaleY(1.1, 20, !1, "easeInOutCubic"),
                    n.animeMoveY(Hack_3_zeroDayProtect.logo_Y - 10, 20, !0, "easeInOutCubic"),
                    n.animeScaleY(1, 10, !1, "easeInCubic"),
                    n.animeMoveY(Hack_3_zeroDayProtect.logo_Y, 10, !0, "easeInCubic"),
                    n.animeLoop(),
                    n.playAnimation();
            },
            () => {
                i.frameWidth = c + s.x - i.x;
                const e = Math.round((i.frameWidth / Hack_3_zeroDayProtect.gageWidth) * 100);
                e <= 0 && ((i.frameWidth = 0), Hack_3_zeroDayProtect.gage_0()), e >= 100 && ((i.frameWidth = Hack_3_zeroDayProtect.gageWidth), Hack_3_zeroDayProtect.gage_100());
            },
            () => {
                s.move(i.x, i.y), n.deleteAnimation(), (n.scaleY = 1), (n.y = Hack_3_zeroDayProtect.logo_Y);
            },
            !0,
            !1,
            1,
            () => !Hack_3_zeroDayProtect.isEnableCollider || $gameMap.isEventRunning()
        );
        const _ = a.addUI("PC_Progra_HackArea_hintText", 500, 30);
        (_.anchor = [0.5, 0.5]), _.move(0, 160);
        const m = e.addUI("PC_Progra_HackArea_failedBG");
        (m.anchor = [0.5, 0.5]), (m.opacity = 0), m.move(-1, 12);
        let d = "pc/hack/zeroDayProtect/C2_00044";
        switch ($option.language) {
            case "日本語":
                d += "_jp";
                break;
            case "英語":
                d += "_en";
                break;
            case "中国語（簡体字）":
                d += "_ch";
                break;
            case "韓国語":
                d += "_kr";
        }
        m.loadImage(d);
    }),
    (Hack_3_zeroDayProtect.start = function (e) {
        (PD_UIManager.list.PC_Progra_HackArea_parText.opacity = 255), (PD_UIManager.list.PC_Progra_HackArea_parMark.opacity = 255);
        const a = PD_UIManager.list.PC_Progra_HackArea_gage;
        (a.frameWidth = 0),
            (a.opacity = 255),
            a.animeFrameWidth(Math.floor(0.72 * Hack_3_zeroDayProtect.gageWidth), 360, !0, "easeOutCubic"),
            a.animeFunction(() => {
                (Hack_3_zeroDayProtect.isEnableCollider = !0), $gameSwitches.value(497) ? Hack_3_zeroDayProtect.setHintTimer_4() : Hack_3_zeroDayProtect.setHintTimer_1();
            }),
            a.playAnimation();
    }),
    (Hack_3_zeroDayProtect.close = function () {
        Hack_3_zeroDayProtect.isEnableCollider && PC_Progra.endHacking(Hack_3_zeroDayProtect);
    }),
    (Hack_3_zeroDayProtect.end = function () {
        PD_UIManager.list.PC_Progra_HackArea_background && PD_UIManager.list.PC_Progra_HackArea_background.delete(), PD_UIManager.list.PC_Progra_HackArea_failedBG && PD_UIManager.list.PC_Progra_HackArea_failedBG.delete();
    }),
    (Hack_3_zeroDayProtect.setHintTimer_1 = function () {
        const e = PD_UIManager.list.PC_Progra_HackArea_background.addUI("PC_Progra_HackArea_hintTimer");
        e.animeWait(300),
            e.animeFunction(() => {
                if (!Hack_3_zeroDayProtect.isEnableCollider || $gameMap.isEventRunning()) return;
                Hack_3_zeroDayProtect.isEnableCollider = !1;
                const e = PD_UIManager.list.PC_Progra_HackArea_gage;
                e.deleteAnimation(),
                    e.animeFrameWidth(Math.floor(0.9 * Hack_3_zeroDayProtect.gageWidth), 30, !0, "easeInOutCubic"),
                    e.animeFrameWidth(Math.floor(0.2 * Hack_3_zeroDayProtect.gageWidth), 30, !0, "easeInOutCubic"),
                    e.animeFrameWidth(Math.floor(0.8 * Hack_3_zeroDayProtect.gageWidth), 15, !0, "easeInOutCubic"),
                    e.animeFrameWidth(Math.floor(0.3 * Hack_3_zeroDayProtect.gageWidth), 15, !0, "easeInOutCubic"),
                    e.animeFrameWidth(Math.floor(0.72 * Hack_3_zeroDayProtect.gageWidth), 30, !0, "easeInOutCubic"),
                    e.animeFunction(() => {
                        (Hack_3_zeroDayProtect.isEnableCollider = !0), Hack_3_zeroDayProtect.setHintTimer_2();
                    }),
                    e.playAnimation();
            }),
            e.animeDelete(),
            e.playAnimation();
    }),
    (Hack_3_zeroDayProtect.setHintTimer_2 = function () {
        const e = PD_UIManager.list.PC_Progra_HackArea_background.addUI("PC_Progra_HackArea_hintTimer");
        e.animeWait(300),
            e.animeFunction(() => {
                if (!Hack_3_zeroDayProtect.isEnableCollider || $gameMap.isEventRunning()) return;
                const e = PD_Translation.transData("pc389"),
                    a = PD_Translation.transData("pc390"),
                    n = PD_UIManager.list.PC_Progra_HackArea_hintText;
                n.deleteAnimation();
                for (let a = 0; a < e.length; a++)
                    n.animeWait(4),
                        n.animeFunction(() => {
                            Hack_3_zeroDayProtect.isEnableCollider && !$gameMap.isEventRunning() && (n.clear(), n.drawTextEX(e.substring(0, a + 1), 0, 0, n.width, n.height, "center", 20, "rgb(144,0,255)"));
                        });
                n.animeWait(120);
                for (let e = 0; e < a.length; e++)
                    n.animeWait(4),
                        n.animeFunction(() => {
                            Hack_3_zeroDayProtect.isEnableCollider && !$gameMap.isEventRunning() && (n.clear(), n.drawTextEX(a.substring(0, e + 1), 0, 0, n.width, n.height, "center", 20, "rgb(144,0,255)"));
                        });
                n.animeWait(120),
                    n.animeFunction(() => {
                        Hack_3_zeroDayProtect.isEnableCollider && !$gameMap.isEventRunning() && Game.runCommonEvent(616, "Hack_3_zeroDayProtect.setHintTimer_3(); PD_UIManager.list.PC_Progra_HackArea_hintText.clear();");
                    }),
                    n.playAnimation();
            }),
            e.animeDelete(),
            e.playAnimation();
    }),
    (Hack_3_zeroDayProtect.setHintTimer_3 = function () {
        const e = PD_UIManager.list.PC_Progra_HackArea_background.addUI("PC_Progra_HackArea_hintTimer");
        e.animeWait(300),
            e.animeFunction(() => {
                if (!Hack_3_zeroDayProtect.isEnableCollider || $gameMap.isEventRunning()) return;
                (Hack_3_zeroDayProtect.isEnableCollider = !1), (PD_UIManager.isEnableMoveMouseCursorUI = !1);
                const e = PD_UIManager.list.PC_mouseCursor,
                    a = PD_UIManager.list.PC_Progra_HackArea_gage;
                e.deleteAnimation(),
                    e.animeMove(a.realX + 0.9 * a.width, a.realY + a.height / 2, 60, !0, "easeInOutSine"),
                    e.animeMoveX(a.realX + Math.floor(0.8 * Hack_3_zeroDayProtect.gageWidth * 0.9), 30, !0, "easeInOutCubic"),
                    e.animeMoveX(a.realX + Math.floor(0.6 * Hack_3_zeroDayProtect.gageWidth * 0.9), 30, !0, "easeInOutCubic"),
                    e.animeMoveX(a.realX + Math.floor(0.72 * Hack_3_zeroDayProtect.gageWidth * 0.9), 30, !0, "easeInOutCubic"),
                    e.animeFunction(() => {
                        Game.runCommonEvent(617, "PD_UIManager.isEnableMoveMouseCursorUI = true; Hack_3_zeroDayProtect.isEnableCollider = true; Hack_3_zeroDayProtect.setHintTimer_1();");
                    }),
                    e.playAnimation(),
                    a.deleteAnimation(),
                    a.animeWait(60),
                    a.animeFrameWidth(Math.floor(0.8 * Hack_3_zeroDayProtect.gageWidth), 30, !0, "easeInOutCubic"),
                    a.animeFrameWidth(Math.floor(0.6 * Hack_3_zeroDayProtect.gageWidth), 30, !0, "easeInOutCubic"),
                    a.animeFrameWidth(Math.floor(0.72 * Hack_3_zeroDayProtect.gageWidth), 30, !0, "easeInOutCubic"),
                    a.playAnimation();
            }),
            e.animeDelete(),
            e.playAnimation();
    }),
    (Hack_3_zeroDayProtect.setHintTimer_4 = function () {
        const e = PD_UIManager.list.PC_Progra_HackArea_background.addUI("PC_Progra_HackArea_hintTimer");
        e.animeWait(300),
            e.animeFunction(() => {
                if (!Hack_3_zeroDayProtect.isEnableCollider || $gameMap.isEventRunning()) return;
                const e = PD_Translation.transData("pc394"),
                    a = PD_Translation.transData("pc395"),
                    n = PD_UIManager.list.PC_Progra_HackArea_hintText;
                n.deleteAnimation();
                for (let a = 0; a < e.length; a++)
                    n.animeWait(4),
                        n.animeFunction(() => {
                            Hack_3_zeroDayProtect.isEnableCollider && !$gameMap.isEventRunning() && (n.clear(), n.drawTextEX(e.substring(0, a + 1), 0, 0, n.width, n.height, "center", 20, "rgb(144,0,255)"));
                        });
                n.animeWait(120);
                for (let e = 0; e < a.length; e++)
                    n.animeWait(4),
                        n.animeFunction(() => {
                            Hack_3_zeroDayProtect.isEnableCollider && !$gameMap.isEventRunning() && (n.clear(), n.drawTextEX(a.substring(0, e + 1), 0, 0, n.width, n.height, "center", 20, "rgb(144,0,255)"));
                        });
                n.animeWait(120),
                    n.animeFunction(() => {
                        Hack_3_zeroDayProtect.isEnableCollider && !$gameMap.isEventRunning() && (PC_Progra.endHacking(Hack_3_zeroDayProtect), Game.runCommonEvent(622));
                    }),
                    n.playAnimation();
            }),
            e.animeDelete(),
            e.playAnimation();
    }),
    (Hack_3_zeroDayProtect.gage_100 = function () {
        (Hack_3_zeroDayProtect.isEnableCollider = !1), PD_UIManager.list.PC_Progra_HackArea_hintTimer && PD_UIManager.list.PC_Progra_HackArea_hintTimer.delete();
        const e = PD_UIManager.list.PC_Progra_HackArea_hintText;
        e.deleteAnimation(), e.clear();
        const a = PD_UIManager.list.PC_Progra_HackArea_failedBG;
        a.animeWait(30),
            a.animeOpacity(255, 30, !0, "easeInOutCubic"),
            a.animeWait(30),
            a.animeFunction(() => {
                PD_UIManager.list.PC_Progra_HackArea_background.delete(), Game.runCommonEvent(619, "PC_Progra.endHacking(Hack_3_zeroDayProtect);");
            }),
            a.playAnimation();
    }),
    (Hack_3_zeroDayProtect.gage_0 = function () {
        (Hack_3_zeroDayProtect.isEnableCollider = !1), PD_UIManager.list.PC_Progra_HackArea_hintTimer && PD_UIManager.list.PC_Progra_HackArea_hintTimer.delete();
        const e = PD_UIManager.list.PC_Progra_HackArea_hintText;
        e.deleteAnimation(), e.clear(), (PD_UIManager.list.PC_Progra_HackArea_gage.visible = !1);
        const a = PD_UIManager.list.PC_Progra_HackArea_parText_pink;
        a.animeWait(60),
            a.animeOpacity(255, 60, !0, "easeInOutCubic"),
            a.animeFunction(() => {
                PD_UIManager.list.PC_Progra_HackArea_parText.visible = !1;
            }),
            a.playAnimation();
        const n = PD_UIManager.list.PC_Progra_HackArea_parMark;
        n.animeWait(60),
            n.animeScaleY(0, 60, !0, "easeInOutCubic"),
            n.animeFunction(() => {
                n.clear(), n.drawTextEX(" DAY", 0, 0, n.width, n.height, "left", 24, "rgb(144,0,255)");
            }),
            n.animeScaleY(1, 60, !0, "easeInOutCubic"),
            n.animeWait(90),
            n.animeFunction(() => {
                Game.runCommonEvent(618);
            }),
            n.playAnimation();
    }),
    (Hack_3_zeroDayProtect_2.initialize = function () {}),
    (Hack_3_zeroDayProtect_2.create = function (e) {
        Hack_3_zeroDayProtect_2.initialize();
        const a = e.addUI("PC_Progra_HackArea_background");
        a.loadImage("pc/hack/zeroDay_Sniffer/sniffer_BG"), (a.anchor = [0.5, 0.5]), a.move(-1, 11), (a.animationIndependence = !0);
        const n = a.addUI("PC_Progra_HackArea_effect");
        n.loadImage("pc/hack/zeroDay_Sniffer/sniffer_Effect"), (n.anchor = [0.5, 0.5]), (n.opacity = 0), (n.animationIndependence = !0);
        const t = a.addUI("PC_Progra_HackArea_sniffer");
        t.loadImage("pc/hack/zeroDay_Sniffer/sniffer_face"), (t.anchor = [0.5, 0.5]), (t.frame = [0, 0, 284, 284]), (t.opacity = 0), (t.animationIndependence = !0);
    }),
    (Hack_3_zeroDayProtect_2.start = function (e) {
        const a = PD_UIManager.list.PC_Progra_HackArea_background,
            n = PD_UIManager.list.PC_Progra_HackArea_effect,
            t = PD_UIManager.list.PC_Progra_HackArea_sniffer;
        if (
            (n.animeWait(90),
            n.animeOpacity(128, 60, !0),
            n.animeOpacity(255, 60, !0),
            n.animeOpacity(128, 60, !0),
            n.animeLoop(150),
            n.playAnimation(),
            t.animeWait(30),
            t.animeOpacity(255, 60, !0),
            t.animeWait(120),
            $gameSwitches.value(495))
        )
            t.animeWait(10),
                t.animeFunction(() => {
                    t.frameX = 284;
                }),
                t.animeWait(10),
                t.animeFunction(() => {
                    t.frameX = 568;
                }),
                t.animeWait(10),
                t.animeFunction(() => {
                    t.frameX = 284;
                }),
                t.animeWait(10),
                t.animeFunction(() => {
                    t.frameX = 0;
                }),
                t.animeWait(120),
                t.addEvent("update", "update", () => {
                    (Input.isTriggered("escape") || TouchInput.isCancelled()) && PC_Progra.endHacking(Hack_3_zeroDayProtect_2);
                });
        else {
            let e = !1;
            a.animeWait(480),
                a.animeFunction(() => {
                    (e = !0), Game.runCommonEvent(628);
                }),
                a.playAnimation(),
                t.animeFunction(() => {
                    AudioDatabase.playSE("スニファー喜び音《C2_00319》"), (t.frameX = 284);
                }),
                t.animeWait(10),
                t.animeFunction(() => {
                    t.frameX = 568;
                }),
                t.animeMoveY(30, 30, !1, "easeOutCubic"),
                t.animeScaleY(0.9, 30, !0, "easeOutCubic"),
                t.animeFunction(() => {
                    if (!e)
                        for (let e = 0; e < 3; e++) {
                            const n = a.addUI("PC_Progra_HackArea_heart2_" + e);
                            n.loadImage("pc/hack/zeroDay_Sniffer/sniffer_Heart"), (n.anchor = [0.5, 1]), (n.scale = [0, 0]), n.move(50 * (e - 1), 0 !== e ? -70 : -60);
                            const t = a.addUI("PC_Progra_HackArea_heart_" + e);
                            t.loadImage("pc/hack/zeroDay_Sniffer/sniffer_Heart"),
                                (t.anchor = [0.5, 1]),
                                (t.scale = [0, 0]),
                                t.move(60 * (e - 1), 0 !== e ? -80 : -70),
                                t.animeMoveX(150 * (e - 1), 60, !1, "easeInCubic"),
                                t.animeMoveY(-150, 60, !1),
                                t.animeScale(1, 1, 20, !0, "easeInCubic"),
                                t.animeWait(20),
                                t.animeOpacity(0, 20, !0),
                                t.animeDelete(),
                                t.playAnimation(),
                                n.animeWait(10),
                                n.animeMoveX(150 * (e - 1), 60, !1, "easeInCubic"),
                                n.animeMoveY(-150, 60, !1),
                                n.animeScale(0.7, 0.7, 20, !0, "easeInCubic"),
                                n.animeWait(20),
                                n.animeOpacity(0, 20, !0),
                                n.animeDelete(),
                                n.playAnimation();
                        }
                }),
                t.animeMoveY(-10, 30, !1, "easeInOutCubic"),
                t.animeScaleY(1.1, 30, !0, "easeInOutCubic"),
                t.animeMoveY(0, 20, !1, "easeInCubic"),
                t.animeScaleY(1, 20, !0, "easeInCubic");
        }
        t.animeLoop(220), t.playAnimation();
    }),
    (Hack_3_zeroDayProtect_2.close = function () {
        $gameSwitches.value(495) && PC_Progra.endHacking(Hack_3_zeroDayProtect_2);
    }),
    (Hack_3_zeroDayProtect_2.end = function () {
        PD_UIManager.list.PC_Progra_HackArea_background && PD_UIManager.list.PC_Progra_HackArea_background.delete();
    }),
    (Hack_3_zeroDayProtect_3.initialize = function () {
        (Hack_3_zeroDayProtect_3.isGokiCursor = !1),
            (Hack_3_zeroDayProtect_3.buildingTileNum = 0),
            (Hack_3_zeroDayProtect_3.enableTiles = [
                [0, 3],
                [0, 4],
                [0, 5],
                [0, 6],
                [0, 7],
                [0, 8],
                [0, 9],
                [1, 0],
                [1, 1],
                [1, 2],
                [1, 3],
                [1, 4],
                [1, 5],
                [1, 6],
                [1, 7],
                [1, 8],
                [1, 9],
                [2, 0],
                [2, 1],
                [2, 2],
                [2, 3],
                [2, 4],
                [2, 5],
                [2, 6],
                [2, 7],
                [2, 8],
                [3, 3],
                [3, 4],
                [3, 5],
                [3, 6],
                [3, 7],
                [3, 8],
                [4, 0],
                [4, 1],
                [4, 2],
                [4, 3],
                [4, 4],
                [4, 5],
                [4, 6],
                [4, 7],
                [5, 0],
                [5, 1],
                [5, 2],
                [5, 3],
                [5, 4],
                [5, 5],
                [5, 6],
                [5, 7],
                [6, 0],
                [6, 1],
                [6, 2],
                [6, 3],
                [6, 4],
                [6, 5],
                [6, 6],
                [6, 7],
                [7, 2],
                [7, 3],
                [7, 4],
                [7, 5],
                [7, 6],
                [7, 7],
                [8, 0],
                [8, 1],
                [8, 2],
                [8, 3],
                [8, 4],
                [8, 5],
                [8, 6],
                [8, 7],
                [9, 0],
                [9, 1],
                [9, 2],
                [9, 3],
                [9, 4],
                [9, 5],
                [9, 6],
                [9, 7],
                [10, 0],
                [10, 1],
                [10, 2],
                [10, 3],
                [10, 4],
                [10, 5],
                [10, 6],
                [10, 7],
                [11, 0],
                [11, 1],
                [11, 2],
                [11, 3],
                [11, 4],
                [11, 5],
                [11, 6],
                [11, 7],
                [12, 2],
                [12, 3],
                [12, 4],
                [12, 5],
                [12, 6],
                [12, 7],
                [13, 2],
                [13, 3],
                [13, 4],
                [13, 5],
                [13, 6],
                [13, 7],
                [14, 0],
                [14, 1],
                [14, 2],
                [14, 3],
                [14, 4],
                [14, 5],
                [14, 6],
                [14, 7],
                [15, 0],
                [15, 1],
                [15, 2],
                [15, 3],
                [15, 4],
                [15, 5],
                [15, 6],
                [15, 7],
                [15, 8],
                [16, 2],
                [16, 3],
                [16, 4],
                [16, 5],
                [16, 6],
                [16, 7],
                [16, 8],
                [17, 1],
                [17, 2],
                [17, 3],
                [17, 4],
                [17, 5],
                [17, 6],
                [17, 7],
                [17, 8],
                [18, 0],
                [18, 1],
                [18, 2],
                [18, 3],
                [18, 4],
                [18, 5],
                [18, 6],
                [18, 7],
                [18, 8],
                [18, 9],
                [19, 4],
                [19, 5],
                [19, 6],
                [19, 7],
                [19, 8],
                [19, 9],
            ]);
    }),
    (Hack_3_zeroDayProtect_3.createTileDatabase = function () {
        const e = [];
        for (let a = 0; a < 20; a++)
            for (let n = 0; n < 10; n++) {
                const t = 31.6,
                    i = 29,
                    o = PD_UIManager.base.upper.addUI("PC_Progra_HackArea_building_" + a + "_" + n);
                o.loadImage("pc/hack/zeroDay_Goki/gokiHack_Building").then(() => {
                    const r = o._bitmap;
                    let l = !1;
                    for (let o = t * a; o <= t * a + t; o++) {
                        for (let t = i * n; t <= i * n + i; t++)
                            if (r.getAlphaPixel(o, t) > 0) {
                                e.push([a, n]), (l = !0);
                                break;
                            }
                        if (l) break;
                    }
                    l || o.delete(), console.log(JSON.stringify(e));
                });
            }
    }),
    (Hack_3_zeroDayProtect_3.create = function (e) {
        Hack_3_zeroDayProtect_3.initialize();
        const a = e.addUI("PC_Progra_HackArea_background");
        a.loadImage("pc/hack/zeroDay_Goki/gokiHack_BG"), (a.anchor = [0.5, 0.5]), a.move(-1, 11), (a.animationIndependence = !0);
        Hack_3_zeroDayProtect_3.buildingTileNum = Hack_3_zeroDayProtect_3.enableTiles.length;
        let n = !1;
        const t = a.addUI("PC_Progra_HackArea_building_temp");
        (t.visible = !1),
            t.loadImage("pc/hack/zeroDay_Goki/gokiHack_Building").then(() => {
                for (const e of Hack_3_zeroDayProtect_3.enableTiles) {
                    const i = e[0],
                        r = e[1],
                        l = 31.6,
                        s = 29,
                        c = a.addUI("PC_Progra_HackArea_building_" + i + "_" + r, l, s);
                    c.resize(l, s),
                        c.sprite._bitmap.blt(t.sprite._bitmap, l * i, s * r, l, s, 0, 0, l, s),
                        (c.anchor = [0.5, 0.5]),
                        (c.animationIndependence = !0),
                        c.move(l * i - 316 + l / 2, s * r - 192 + s / 2),
                        (c.rectButton = PD_UIManager.list.PC_Progra_BG.rectButton + 1),
                        c.addEvent("mouseover", "mouseover", () => {
                            if (Hack_3_zeroDayProtect_3.isGokiCursor && !n && (Hack_3_zeroDayProtect_3.buildingTileNum--, c.delete(), Hack_3_zeroDayProtect_3.buildingTileNum <= 0.3 * Hack_3_zeroDayProtect_3.enableTiles.length)) {
                                n = !0;
                                for (const e of Hack_3_zeroDayProtect_3.enableTiles) {
                                    const a = e[0],
                                        n = e[1],
                                        t = PD_UIManager.list["PC_Progra_HackArea_building_" + a + "_" + n];
                                    t &&
                                        (t.deleteAnimation(),
                                        t.animeOpacity(0, 30, !0),
                                        t.animeWait(30),
                                        t.animeFunction(() => {
                                            o.playAnimation();
                                        }),
                                        t.playAnimation());
                                }
                            }
                        });
                }
                t.delete();
            });
        const i = a.addUI("PC_Progra_HackArea_goki");
        i.loadImage("pc/hack/zeroDay_Goki/gokiHack_goki"),
            (i.anchor = [0.5, 0.5]),
            i.move(120, 150),
            (i.rectButton = !0),
            i.addEvent("trigger", "trigger", () => {
                (Hack_3_zeroDayProtect_3.isGokiCursor = !0), (PC.isDisableChangePlaneMouseCursor = !0), PC.update_mouseCursorImage_Goki(), i.delete();
            });
        const o = a.addUI("PC_Progra_HackArea_zeroDayLogo");
        o.loadImage("pc/hack/zeroDay_Goki/gokiHack_zeroDay"),
            (o.anchor = [0.5, 0.5]),
            o.move(0, 0),
            (o.opacity = 0),
            (o.scale = [5, 5]),
            o.animeOpacity(255, 30, !1),
            o.animeScale(1, 1, 60, !0, "easeOutElastic"),
            o.animeWait(60),
            o.animeFunction(() => {
                Game.runCommonEvent(635);
            });
    }),
    (Hack_3_zeroDayProtect_3.start = function (e) {
        PD_UIManager.list.PC_Progra_HackArea_background, PD_UIManager.list.PC_Progra_HackArea_building, PD_UIManager.list.PC_Progra_HackArea_goki;
    }),
    (Hack_3_zeroDayProtect_3.close = function () {}),
    (Hack_3_zeroDayProtect_3.end = function () {
        (PC.isDisableChangePlaneMouseCursor = !1), PC.update_mouseCursorImage_Plain(), PD_UIManager.list.PC_Progra_HackArea_background && PD_UIManager.list.PC_Progra_HackArea_background.delete();
    }),
    (Hack_4_lineHack.initialize = function () {
        (Hack_4_lineHack.touchPoint_col_z = 50),
            (Hack_4_lineHack.radius = 10),
            (Hack_4_lineHack.elec_z = 10),
            (Hack_4_lineHack.pointImgPath = "pc/hack/lineHack_1/lineHack_1_Point"),
            (Hack_4_lineHack.interval = 5),
            (Hack_4_lineHack.goalFunc = () => {}),
            (Hack_4_lineHack.touchPoints = []),
            (Hack_4_lineHack.processPoints = {}),
            (Hack_4_lineHack.touchPointIndexes = [0]);
    }),
    (Hack_4_lineHack.createBaseUI = function (e, a) {
        const n = PD_UIManager.loadDatabase(a, e);
        n.animationIndependence = !0;
        n.addUI("lineHack_waitUI").animationIndependence = !0;
        const t = n.addUI("lineHack_processBase");
        t.z = Hack_4_lineHack.elec_z;
        const i = n.addUI("lineHack_touchPointBase");
        i.z = Hack_4_lineHack.elec_z + 1;
        for (let e in PD_UIManager.list) {
            const a = e.split("_");
            if ("linePoint" === a[0]) {
                const n = Number(a[1]),
                    t = [];
                for (let e = 2; e < a.length; e++) t.push("goal" === a[e] ? "goal" : Number(a[e]));
                const o = i.addUI("lineHack_touchPoint_" + n);
                o.loadImage(Hack_4_lineHack.pointImgPath),
                    (o.anchor = [0.5, 0.5]),
                    o.move(PD_UIManager.list[e].x, PD_UIManager.list[e].y),
                    (o.visible = !1),
                    (o.opacity = 0),
                    o.animeOpacity(128, 10, !1),
                    o.animeScale(0.9, 0.9, 10, !0),
                    o.animeOpacity(255, 20, !1, "easeInOutCubic"),
                    o.animeScale(1.1, 1.1, 20, !0, "easeInOutCubic"),
                    o.animeOpacity(128, 20, !1, "easeInOutCubic"),
                    o.animeScale(0.9, 0.9, 20, !0, "easeInOutCubic"),
                    o.animeLoop(10),
                    (o.ellipseButton = Hack_4_lineHack.touchPoint_col_z),
                    (o.isStopPropagation = !0),
                    o.addEvent("trigger", "trigger", () => {
                        Hack_4_lineHack.drawLine(Hack_4_lineHack.touchPointIndexes[Hack_4_lineHack.touchPointIndexes.length - 1], n);
                    }),
                    (Hack_4_lineHack.touchPoints[n] = { ui: o, connectIndex: t, x: o.x, y: o.y }),
                    (PD_UIManager.list[e].visible = !1);
            }
            if ("lineProcess" === a[0]) {
                const n = Number(a[1]),
                    t = Number(a[2]),
                    i = Number(a[3]);
                Hack_4_lineHack.processPoints[n + "_" + t] || (Hack_4_lineHack.processPoints[n + "_" + t] = { positions: [] }),
                    (Hack_4_lineHack.processPoints[n + "_" + t].positions[i] = { x: PD_UIManager.list[e].x, y: PD_UIManager.list[e].y }),
                    (PD_UIManager.list[e].visible = !1);
            }
        }
        for (let e in Hack_4_lineHack.processPoints) {
            const a = e.split("_"),
                n = Number(a[0]),
                i = Number(a[1]),
                o = Hack_4_lineHack.processPoints[e],
                r = Hack_4_lineHack.touchPoints[n],
                l = Hack_4_lineHack.touchPoints[i];
            (o.positions[0] = { x: r.x, y: r.y }), o.positions.push({ x: l.x, y: l.y }), (o.uis = []), (o.isView = !1);
            for (let a = 0; a < o.positions.length - 1; a++) {
                const n = o.positions[a],
                    i = o.positions[a + 1];
                (void 0 !== n && void 0 !== i) || console.error("命名ミス: " + e);
                const r = PD_Math.getDistance(n.x, n.y, i.x, i.y) / Hack_4_lineHack.interval,
                    l = (i.x - n.x) / r,
                    s = (i.y - n.y) / r;
                for (let i = 0; i < r; i++) {
                    const r = t.addUI("lineHack_process_" + e + "_" + a + "_" + i, Hack_4_lineHack.radius, Hack_4_lineHack.radius);
                    r.fillEllipse("rgb(255,255,0)"), (r.anchor = [0.5, 0.5]), (r.visible = !1), r.move(n.x + Math.round(l * i), n.y + Math.round(s * i)), o.uis.push(r);
                }
            }
        }
        const o = t.addUI("lineHack_headPointBase");
        o.move(Hack_4_lineHack.touchPoints[0].x, Hack_4_lineHack.touchPoints[0].y), (o.animationIndependence = !0);
        const r = o.addUI("lineHack_headPoint", Hack_4_lineHack.radius, Hack_4_lineHack.radius);
        (r.anchor = [0.5, 0.5]),
            (r.animationIndependence = !0),
            r.fillEllipse("rgb(255,255,0)"),
            r.drawCircle(Hack_4_lineHack.radius / 2, Hack_4_lineHack.radius / 2, Hack_4_lineHack.radius / 4, "white"),
            r.animeScale(2, 2, 5, !0),
            r.animeScale(1, 1, 5, !0),
            r.animeLoop(),
            r.playAnimation();
    }),
    (Hack_4_lineHack.drawLine = function (e, a) {
        const n = a === Hack_4_lineHack.touchPointIndexes[Hack_4_lineHack.touchPointIndexes.length - 2];
        let t = Hack_4_lineHack.processPoints[e + "_" + a],
            i = !1;
        t || ((t = Hack_4_lineHack.processPoints[a + "_" + e]), (i = !0));
        for (let e = 0, a = Hack_4_lineHack.touchPoints, n = a.length; e < n; e++) a[e].ui.visible = !1;
        const o = PD_UIManager.list.lineHack_waitUI;
        o.deleteAnimation(), o.animeWait(1);
        const r = PD_UIManager.list.lineHack_headPointBase;
        r.deleteAnimation(), r.animeWait(1);
        for (let e = 0, a = t.uis, l = a.length; e < l; e++) {
            const t = i ? a[l - 1 - e] : a[e];
            o.animeFunction(() => {
                t.visible = !n;
            }),
                o.animeWait(1),
                r.animeMove(t.x, t.y, 1, !0);
        }
        o.animeWait(30),
            o.animeFunction(() => {
                n ? Hack_4_lineHack.touchPointIndexes.pop() : Hack_4_lineHack.touchPointIndexes.push(a);
                const e = Hack_4_lineHack.touchPoints[a];
                t.isView = !t.isView;
                const i = e.connectIndex;
                if ("goal" === i[i.length - 1]) {
                    let e = !0;
                    for (let a in Hack_4_lineHack.processPoints)
                        if (!Hack_4_lineHack.processPoints[a].isView) {
                            e = !1;
                            break;
                        }
                    if (e) return void Hack_4_lineHack.goalFunc();
                }
                for (let e = 0, n = i.length; e < n; e++) {
                    if ("goal" === i[e]) continue;
                    const n = i[e],
                        t = Hack_4_lineHack.touchPoints[n],
                        o = n === Hack_4_lineHack.touchPointIndexes[Hack_4_lineHack.touchPointIndexes.length - 2];
                    let r = Hack_4_lineHack.processPoints[a + "_" + n];
                    r || (r = Hack_4_lineHack.processPoints[n + "_" + a]), (!r.isView || (r.isView && o)) && ((t.ui.visible = !0), t.ui.playAnimation());
                }
            }),
            o.playAnimation(),
            r.playAnimation();
    }),
    (Hack_4_lineHack_1.initialize = function () {
        Hack_4_lineHack.initialize(),
            (Hack_4_lineHack.goalFunc = () => {
                const e = PD_UIManager.list.lineHack_Line;
                e.animeOpacity(0, 60, !0), e.playAnimation();
                const a = PD_UIManager.list.lineHack_processBase;
                a.animeOpacity(0, 60, !0), a.playAnimation();
                const n = PD_UIManager.list.lineHack_touchPointBase;
                n.animeOpacity(0, 60, !0), n.playAnimation();
                const t = PD_UIManager.list.lineHack_BG_good;
                t.animeOpacity(0, 60, !0), t.playAnimation();
                const i = PD_UIManager.list.lineHack_Hand_bad;
                i.animeWait(120), i.animeOpacity(255, 30, !0), i.playAnimation();
                const o = PD_UIManager.list.lineHack_Hand_good;
                o.animeWait(120), o.animeOpacity(0, 30, !0), o.playAnimation();
                const r = PD_UIManager.list.lineHack_Hand_Base;
                r.animeWait(60), r.animeRotation(-3.14, 120, !0, "easeInOutElastic");
                for (let e = 0; e < 3; e++)
                    r.animeMoveY(50, 20, !1, "easeOutCubic"),
                        r.animeScaleY(0.8, 20, !0, "easeOutCubic"),
                        r.animeMoveY(-80, 20, !1, "easeInOutCubic"),
                        r.animeScaleY(1.2, 20, !0, "easeInOutCubic"),
                        r.animeMoveY(24, 10, !1, "easeInCubic"),
                        r.animeScaleY(1, 10, !0, "easeInCubic");
                r.animeFunction(() => {
                    Game.runCommonEvent(630);
                }),
                    r.playAnimation();
            });
    }),
    (Hack_4_lineHack_1.create = function (e) {
        Hack_4_lineHack_1.initialize(), Hack_4_lineHack.createBaseUI(e, "lineHack/lineHack1_Base");
    }),
    (Hack_4_lineHack_1.start = function (e) {
        const a = PD_UIManager.list.lineHack_touchPoint_1;
        (a.visible = !0), a.playAnimation();
    }),
    (Hack_4_lineHack_1.startEvent = function () {
        const e = PD_UIManager.list.PC_mouseCursor,
            a = PD_UIManager.list.lineHack_touchPoint_1;
        e.deleteAnimation(),
            e.animeMove(a.realX, a.realY, 60, !0, "easeInOutSine"),
            e.animeWait(30),
            e.animeFunction(() => {
                a._e.trigger.trigger();
            }),
            e.animeWait(60),
            e.playAnimation();
    }),
    (Hack_4_lineHack_1.close = function () {
        BattleManager.replayBgmAndBgs(), PC_Progra.endHacking(Hack_4_lineHack_1);
    }),
    (Hack_4_lineHack_1.end = function () {}),
    (Hack_4_lineHack_2.initialize = function () {
        Hack_4_lineHack.initialize(),
            (Hack_4_lineHack.goalFunc = () => {
                const e = PD_UIManager.list.lineHack_Effect;
                e.animeOpacity(255, 120, !0), e.animeOpacity(128, 60, !0), e.animeOpacity(255, 60, !0), e.animeLoop(120), e.playAnimation();
                const a = PD_UIManager.list.lineHack_root_Eye;
                a.animeOpacity(255, 60, !0),
                    a.animeWait(240),
                    a.animeFunction(() => {
                        Game.runCommonEvent(641);
                    }),
                    a.playAnimation();
            });
    }),
    (Hack_4_lineHack_2.create = function (e) {
        Hack_4_lineHack_2.initialize(), Hack_4_lineHack.createBaseUI(e, "lineHack/lineHack2_Base");
    }),
    (Hack_4_lineHack_2.start = function (e) {
        const a = PD_UIManager.list.lineHack_touchPoint_1;
        (a.visible = !0), a.playAnimation();
    }),
    (Hack_4_lineHack_2.close = function () {
        BattleManager.replayBgmAndBgs(), PC_Progra.endHacking(Hack_4_lineHack_2);
    }),
    (Hack_4_lineHack_2.end = function () {}),
    (Hack_5_digiNum.initialize = function () {
        (Hack_5_digiNum.answerNum = "0000"),
            (Hack_5_digiNum.goalFunc = () => {}),
            (Hack_5_digiNum.numberConditions = [
                [!0, !0, !0, !0, !0, !0, !0],
                [!0, !0, !0, !0, !0, !0, !0],
                [!0, !0, !0, !0, !0, !0, !0],
                [!0, !0, !0, !0, !0, !0, !0],
            ]),
            (Hack_5_digiNum.correctConditions = [
                [!0, !1, !0, !0, !0, !0, !0],
                [!1, !1, !1, !1, !0, !1, !0],
                [!0, !0, !0, !1, !0, !0, !1],
                [!0, !0, !0, !1, !0, !1, !0],
                [!1, !0, !1, !0, !0, !1, !0],
                [!0, !0, !0, !0, !1, !1, !0],
                [!0, !0, !0, !0, !1, !0, !0],
                [!0, !1, !1, !1, !0, !1, !0],
                [!0, !0, !0, !0, !0, !0, !0],
                [!0, !0, !0, !0, !0, !1, !0],
            ]);
    }),
    (Hack_5_digiNum.createBaseUI = function (e) {
        const a = e.addUI("digiNum_Base");
        a.move(-1, 11), (a.animationIndependence = !0);
        const n = e.addUI("digiNum_numBase");
        a.move(-1, 11);
        for (let e = 0; e < 4; e++)
            for (let a = 0; a < 7; a++) {
                const t = n.addUI("digiNum_num_" + e + "_" + a);
                t.loadImage("pc/hack/digiNum/digiNumHack_Num"),
                    (t.animationIndependence = !0),
                    (t.anchor = [0.5, 0.5]),
                    (t.frame = [0, 0, 65, 21]),
                    (t.colX = 5),
                    (t.colWidth = 55),
                    (t.rectButton = !0),
                    a < 3 ? t.move(120 * e - 180, 74 * a - 135) : (t.move(120 * e - 215 + ((a - 3) % 2) * 68, 74 * Math.floor((a - 3) / 2) - 98), (t.rotation = Math.PI / 2)),
                    t.addEvent("trigger", "trigger", () => {
                        t.isPlayAnimation ||
                            (t.animeOpacity(0, 10, !0),
                            t.animeFunction(() => {
                                t.delete(), (Hack_5_digiNum.numberConditions[e][a] = !1);
                                const n = Hack_5_digiNum.checkAnswer(e);
                                if ((Hack_5_digiNum.updateNumColor(e, n), n)) {
                                    let e = !0;
                                    for (let a = 0; a < 4; a++)
                                        if (!Hack_5_digiNum.checkAnswer(a)) {
                                            e = !1;
                                            break;
                                        }
                                    e && Hack_5_digiNum.goalFunc();
                                }
                            }),
                            t.playAnimation());
                    });
            }
    }),
    (Hack_5_digiNum.checkAnswer = function (e) {
        const a = Hack_5_digiNum.answerNum[e],
            n = Hack_5_digiNum.correctConditions[a],
            t = Hack_5_digiNum.numberConditions[e];
        let i = !0;
        for (let e = 0; e < 7; e++)
            if (n[e] !== t[e]) {
                i = !1;
                break;
            }
        return i;
    }),
    (Hack_5_digiNum.updateNumColor = function (e, a) {
        for (let n = 0; n < 7; n++) {
            const t = PD_UIManager.list["digiNum_num_" + e + "_" + n];
            t && (t.frame = [a ? 65 : 0, 0, 65, 21]);
        }
    }),
    (Hack_5_digiNum_1.initialize = function () {
        Hack_5_digiNum.initialize(),
            (Hack_5_digiNum.answerNum = "1329"),
            (Hack_5_digiNum.goalFunc = () => {
                Game.runCommonEvent(639);
            });
    }),
    (Hack_5_digiNum_1.create = function (e) {
        Hack_5_digiNum_1.initialize(), Hack_5_digiNum.createBaseUI(e);
        const a = PD_UIManager.list.digiNum_Base.addUI("digiNum_BG");
        a.loadImage("pc/hack/digiNum/digiNumHack_BG"), (a.anchor = [0.5, 0.5]);
        const n = PD_UIManager.list.digiNum_Base.addUI("digiNum_Answer");
        n.loadImage("pc/hack/digiNum/digiNumHack_Answer_1"), (n.animationIndependence = !0), (n.anchor = [0.5, 0.5]), n.move(0, 125), (PC.isDisableChangePlaneMouseCursor = !0), PC.update_mouseCursorImage_ZeroDayLogo();
    }),
    (Hack_5_digiNum_1.start = function (e) {
        const a = PD_UIManager.list.PC_mouseCursor,
            n = PD_UIManager.list.digiNum_num_3_5;
        a.deleteAnimation(),
            a.animeWait(60),
            a.animeMove(n.realX, n.realY, 60, !0, "easeInOutSine"),
            a.animeWait(30),
            a.animeFunction(() => {
                n._e.trigger.trigger();
            }),
            a.animeWait(60),
            a.playAnimation();
    }),
    (Hack_5_digiNum_1.close = function () {
        BattleManager.replayBgmAndBgs(), PC_Progra.endHacking(Hack_5_digiNum_1);
    }),
    (Hack_5_digiNum_1.end = function () {
        (PC.isDisableChangePlaneMouseCursor = !1), PC.update_mouseCursorImage_Plain();
    }),
    (Hack_6_bloodStill.play = function () {
        Game.getInterpreter().waitUntilPromiseSettled(
            new Promise((e) => {
                PC.update_mouseCursorImage_None();
                const a = PD_UIManager.base.picture.addUI("C2_12_00613_base"),
                    n = a.addUI("C2_12_00613_bg");
                n.loadImage("stillGame/C2_12_00613/C2_12_00613_bg"),
                    (n.anchor = [0.5, 0]),
                    n.move(300, 0),
                    (n.opacity = 0),
                    (n.animationIndependence = !0),
                    n.animeOpacity(255, 60, !1, "easeOutSine"),
                    n.animeMove(408, 0, 60, !0, "easeOutSine"),
                    n.animeFunction(() => {
                        const n = a.addUI("C2_12_00613_kate");
                        n.loadImage("stillGame/C2_12_00613/C2_12_00613_kate"),
                            (n.anchor = [0.5, 0]),
                            n.move(408, -600),
                            (n.opacity = 0),
                            (n.animationIndependence = !0),
                            n.animeOpacity(255, 60, !1, "easeOutSine"),
                            n.animeMove(408, -400, 60, !0, "easeOutSine"),
                            n.animeWait(30),
                            n.animeFunction(() => {
                                const t = a.addUI("C2_12_00613_tube");
                                t.loadImage("stillGame/C2_12_00613/C2_12_00613_tube"),
                                    (t.anchor = [0.5, 0]),
                                    t.move(470, 624),
                                    (t.opacity = 0),
                                    (t.animationIndependence = !0),
                                    t.animeWait(60),
                                    t.animeOpacity(255, 90, !1, "easeOutSine"),
                                    t.animeMoveY(200, 90, !0, "easeOutSine"),
                                    t.animeFunction(() => {
                                        const i = a.addUI("C2_12_00613_guide", 408, 50);
                                        i.move(20, 560),
                                            (i.opacity = 0),
                                            (i.animationIndependence = !0),
                                            i.drawTextEX("{pc533}", 0, 0, i.width, 25, "left", 20, "rgb(192,230,212)"),
                                            i.drawTextEX("{pc534}", 0, 25, i.width, 25, "left", 20, "rgb(192,230,212)"),
                                            i.animeOpacity(255, 60, !0),
                                            i.playAnimation();
                                        let o = TouchInput.x,
                                            r = 0,
                                            l = !1;
                                        const s = [336, 374, 392, 397, 398, 410, 450, 474],
                                            c = [150, 35, 50, 60, 150, 86, 25, 75];
                                        t.addEvent("update", "update", () => {
                                            if (!l) {
                                                Input.isPressed("left") ? (t.x = t.x - 2) : Input.isPressed("right") ? (t.x = t.x + 2) : TouchInput.x !== o && ((t.x = TouchInput.x), (o = TouchInput.x));
                                                for (let e = 0; e < s.length; e++) {
                                                    if (t.x < s[0]) {
                                                        (t.x = s[0]), (r = c[0]);
                                                        break;
                                                    }
                                                    if (t.x >= s[s.length - 1]) {
                                                        (t.x = s[s.length - 1]), (r = c[c.length - 1]);
                                                        break;
                                                    }
                                                    if (t.x < s[e]) {
                                                        const a = s[e - 1],
                                                            n = s[e],
                                                            i = c[e - 1];
                                                        r = i + ((c[e] - i) * (t.x - a)) / (n - a);
                                                        break;
                                                    }
                                                }
                                                (Input.isTriggered("ok") || TouchInput.isTriggered()) &&
                                                    (i.deleteAnimation(),
                                                    i.animeOpacity(0, 30, !0),
                                                    i.playAnimation(),
                                                    t.deleteAnimation(),
                                                    t.animeMoveY(r, 20, !0),
                                                    t.animeFrameY(50, 30, !0, "easeOutSine"),
                                                    t.animeFunction(() => {
                                                        n.deleteAnimation(),
                                                            n.animeTone(255, 70, 70, 0, 10, !0),
                                                            n.animeTone(0, 0, 0, 0, 10, !0),
                                                            n.animeWait(30),
                                                            n.animeFunction(() => {
                                                                a.animeOpacity(0, 60, !0),
                                                                    a.animeFunction(() => {
                                                                        e();
                                                                    }),
                                                                    a.animeDelete(),
                                                                    a.playAnimation();
                                                            }),
                                                            n.playAnimation();
                                                    }),
                                                    t.playAnimation(),
                                                    (l = !0));
                                            }
                                        });
                                    }),
                                    t.playAnimation();
                            }),
                            n.animeMove(408, 0, 120, !0, "easeInOutSine"),
                            n.playAnimation();
                    }),
                    n.playAnimation();
            })
        );
    }),
    (Hack_6_talkHack.initialize = function () {
        (Hack_6_talkHack.gageLeftOffset = 250),
            (Hack_6_talkHack.gageRightOffset = 246),
            (Hack_6_talkHack.min_Hz = -20),
            (Hack_6_talkHack.max_Hz = 60),
            (Hack_6_talkHack.init_Hz = 0),
            (Hack_6_talkHack.now_Hz = Hack_6_talkHack.init_Hz),
            (Hack_6_talkHack.target_Hz = 48),
            (Hack_6_talkHack.isEnableControl = !0);
    }),
    (Hack_6_talkHack.createBaseUI = function (e) {
        const a = e.addUI("talkHack_Base");
        a.move(-1, 11), (a.animationIndependence = !0);
        const n = a.addUI("talkHack_BG");
        (n.anchor = [0.5, 0.5]), (n.animationIndependence = !0);
        const t = a.addUI("talkHack_Gage");
        (t.anchor = [0.5, 0.5]), t.move(0, -60), (t.animationIndependence = !0);
        const i = t.addUI("talkHack_targetBar");
        (i.anchor = [0.5, 0.5]), (i.y = 20);
        const o = t.addUI("talkHack_moveBar");
        (o.anchor = [0.5, 0.5]), (o.y = 20), (o.animationIndependence = !0);
        const r = o.addUI("talkHack_moveBar_hint");
        (r.opacity = 0), (r.anchor = [0.5, 0.5]), (r.y = -60), (r.animationIndependence = !0), Hack_6_talkHack.update_TargetHz(Hack_6_talkHack.target_Hz, !0), Hack_6_talkHack.update_MoveHz(Hack_6_talkHack.init_Hz, !0);
    }),
    (Hack_6_talkHack.update_MoveHz = function (e, a) {
        return (
            (Hack_6_talkHack.isEnableControl = !1),
            new Promise((n) => {
                e < Hack_6_talkHack.min_Hz ? (e = Hack_6_talkHack.min_Hz) : e > Hack_6_talkHack.max_Hz && (e = Hack_6_talkHack.max_Hz);
                const t = PD_UIManager.list.talkHack_moveBar,
                    i = ((e - Hack_6_talkHack.min_Hz) / (Hack_6_talkHack.max_Hz - Hack_6_talkHack.min_Hz)) * (Hack_6_talkHack.gageLeftOffset + Hack_6_talkHack.gageRightOffset) - Hack_6_talkHack.gageLeftOffset;
                if (a) return (t.x = i), (Hack_6_talkHack.now_Hz = e), (Hack_6_talkHack.isEnableControl = !0), void n();
                t.deleteAnimation(),
                    t.animeMoveX(i, 30, !0, "easeOutSine"),
                    t.animeFunction(() => {
                        e === Hack_6_talkHack.target_Hz && Game.runCommonEvent(649), (Hack_6_talkHack.now_Hz = e), (Hack_6_talkHack.isEnableControl = !0), n();
                    }),
                    t.playAnimation();
            })
        );
    }),
    (Hack_6_talkHack.update_TargetHz = function (e, a) {
        return (
            (Hack_6_talkHack.isEnableControl = !1),
            new Promise((n) => {
                e < Hack_6_talkHack.min_Hz ? (e = Hack_6_talkHack.min_Hz) : e > Hack_6_talkHack.max_Hz && (e = Hack_6_talkHack.max_Hz);
                const t = PD_UIManager.list.talkHack_targetBar,
                    i = ((e - Hack_6_talkHack.min_Hz) / (Hack_6_talkHack.max_Hz - Hack_6_talkHack.min_Hz)) * (Hack_6_talkHack.gageLeftOffset + Hack_6_talkHack.gageRightOffset) - Hack_6_talkHack.gageLeftOffset;
                if (a) return (t.x = i), (Hack_6_talkHack.target_Hz = e), (Hack_6_talkHack.isEnableControl = !0), void n();
                t.deleteAnimation(),
                    t.animeMoveX(i, 30, !0, "easeOutSine"),
                    t.animeFunction(() => {
                        (Hack_6_talkHack.target_Hz = e), (Hack_6_talkHack.isEnableControl = !0), n();
                    }),
                    t.playAnimation();
            })
        );
    }),
    (Hack_6_talkHack_1.initialize = function () {
        Hack_6_talkHack.initialize();
    }),
    (Hack_6_talkHack_1.create = function (e) {
        Hack_6_talkHack_1.initialize(), Hack_6_talkHack.createBaseUI(e);
        const a = (e, a) => {
                Hack_6_talkHack.isEnableControl &&
                    (AudioDatabase.playSE("PC_クリック音"), e.deleteAnimation(), e.animeScale(0.9, 0.9, 5, !0), e.animeScale(1, 1, 5, !0, "easeOutBack"), e.playAnimation(), Hack_6_talkHack.update_MoveHz(Hack_6_talkHack.now_Hz + a));
            },
            n = PD_UIManager.list.talkHack_Base;
        PD_UIManager.list.talkHack_BG.loadImage("pc/hack/talkHack/talkHack_1_BG");
        PD_UIManager.list.talkHack_Gage.loadImage("pc/hack/talkHack/talkHack_1_gage");
        PD_UIManager.list.talkHack_targetBar.loadImage("pc/hack/talkHack/talkHack_1_targetBar");
        PD_UIManager.list.talkHack_moveBar.loadImage("pc/hack/talkHack/talkHack_1_moveBar");
        const t = n.addUI("talkHack_Button_Minus10");
        t.loadImage("pc/hack/talkHack/talkHack_1_button_minus10"),
            (t.anchor = [0.5, 0.5]),
            t.move(-200, 120),
            (t.animationIndependence = !0),
            (t.rectButton = 51),
            t.addEvent("trigger", "trigger", () => {
                a(t, -10);
            });
        const i = n.addUI("talkHack_Button_Minus1");
        i.loadImage("pc/hack/talkHack/talkHack_1_button_minus1"),
            (i.anchor = [0.5, 0.5]),
            i.move(-75, 120),
            (i.animationIndependence = !0),
            (i.rectButton = 51),
            i.addEvent("trigger", "trigger", () => {
                a(i, -1);
            });
        const o = n.addUI("talkHack_Button_Plus1");
        o.loadImage("pc/hack/talkHack/talkHack_1_button_plus1"),
            (o.anchor = [0.5, 0.5]),
            o.move(75, 120),
            (o.animationIndependence = !0),
            (o.rectButton = 51),
            o.addEvent("trigger", "trigger", () => {
                a(o, 1);
            });
        const r = n.addUI("talkHack_Button_Plus10");
        r.loadImage("pc/hack/talkHack/talkHack_1_button_plus10"),
            (r.anchor = [0.5, 0.5]),
            r.move(200, 120),
            (r.animationIndependence = !0),
            (r.rectButton = 51),
            r.addEvent("trigger", "trigger", () => {
                a(r, 10);
            });
    }),
    (Hack_6_talkHack_1.startMoveBarHint = function () {
        const e = PD_UIManager.list.talkHack_moveBar_hint;
        e.loadImage("pc/hack/talkHack/talkHack_1_moveBar_hint"), e.animeOpacity(255, 60, !0), e.animeOpacity(0, 60, !0), e.animeLoop(), e.playAnimation();
    }),
    (Hack_6_talkHack_1.endMoveBarHint = function () {
        const e = PD_UIManager.list.talkHack_moveBar_hint;
        e.deleteAnimation(), (e.opacity = 0);
    }),
    (Hack_6_talkHack_1.start = function (e) {}),
    (Hack_6_talkHack_1.close = function () {
        BattleManager.replayBgmAndBgs(), PC_Progra.endHacking(Hack_6_talkHack_1);
    }),
    (Hack_6_talkHack_1.end = function () {}),
    (Hack_6_talkHack_1.showGetDataDialog = function () {
        const e = () => {
            PD_UIManager.list.dialog_Base && PD_UIManager.list.dialog_Base.delete(), Game.runCommonEvent(650);
        };
        PC.showConfirmDialog(PD_UIManager.list.PC_Base, PD_Translation.transData("Fragment_Fantasia_talk.mp3"), "OK", e, void 0, void 0, !0, !0, !1, e, void 0);
    }),
    (Hack_7_stage2.zeroCard_price = 50),
    (Hack_7_stage2.zeroCard_database_array = [
        { fileID: 55, cardID: "card_wi_1", rate: 15, imgPath: "pc/document/zeroCard/Wi_N" },
        { fileID: 56, cardID: "card_wi_2", rate: 5, imgPath: "pc/document/zeroCard/Wi_R" },
        { fileID: 57, cardID: "card_kate_1", rate: 15, imgPath: "pc/document/zeroCard/Kate_N" },
        { fileID: 58, cardID: "card_kate_2", rate: 5, imgPath: "pc/document/zeroCard/Kate_R" },
        { fileID: 59, cardID: "card_yumi_1", rate: 15, imgPath: "pc/document/zeroCard/Yumi_N" },
        { fileID: 60, cardID: "card_yumi_2", rate: 5, imgPath: "pc/document/zeroCard/Yumi_R" },
        { fileID: 61, cardID: "card_rabi_1", rate: 15, imgPath: "pc/document/zeroCard/Rabi_N" },
        { fileID: 62, cardID: "card_rabi_2", rate: 5, imgPath: "pc/document/zeroCard/Rabi_R" },
        { fileID: 63, cardID: "card_doc_1", rate: 15, imgPath: "pc/document/zeroCard/Doc_N" },
        { fileID: 64, cardID: "card_doc_2", rate: 5, imgPath: "pc/document/zeroCard/Doc_R" },
        { fileID: 65, cardID: "card_sniffer_1", rate: 15, imgPath: "pc/document/zeroCard/Sniffer_N" },
        { fileID: 66, cardID: "card_sniffer_2", rate: 5, imgPath: "pc/document/zeroCard/Sniffer_R" },
    ]),
    (Hack_7_stage2.zeroCard_database = {});
for (let e = 0; e < Hack_7_stage2.zeroCard_database_array.length; e++) Hack_7_stage2.zeroCard_database[Hack_7_stage2.zeroCard_database_array[e].cardID] = Hack_7_stage2.zeroCard_database_array[e];
function Hack_7_stage2_wiHack_1() {
    throw new Error("This is a static class");
}
function Hack_7_stage2_mollyHack_1() {
    throw new Error("This is a static class");
}
function Hack_2_karelianClose() {
    throw new Error("This is a static class");
}
function LowerMapUI() {
    throw new Error("This is a static class");
}
(Hack_7_stage2.zeroCard_check = function () {
    if (Game.totalZeniAffinity() >= Hack_7_stage2.zeroCard_price) {
        const e = Memory.getTotalAffinity("zeni", !0),
            a = [];
        for (let n = 0; n < e.length; n++) {
            const t = e[n].id.split("_");
            "zerodayCard" === t[0] && a.push(Number(t[1]));
        }
        a.sort((e, a) => e - a);
        let n = 1;
        for (; a.includes(n); ) n++;
        return n;
    }
    return !1;
}),
    (Hack_7_stage2.zeroCard_draw = function () {
        const e = Hack_7_stage2.zeroCard_database,
            a = Object.keys(e),
            n = a.reduce((a, n) => a + e[n].rate, 0),
            t = PD_Math.randRange(0, n);
        let i = 0;
        for (let n = 0; n < a.length; n++) if (((i += e[a[n]].rate), t <= i)) return a[n];
    }),
    (Hack_7_stage2.zeroCard_buy = function (e) {
        const a = Hack_7_stage2.zeroCard_check();
        return (
            !!a &&
            (Game.totalAffinity_in_zeni(e) > 0
                ? (Hack_7_stage2.zeroCard_getAnime(e), Hack_7_stage2.zeroCard_saveResult(null, "zerodayCard_" + a, -Math.floor(Hack_7_stage2.zeroCard_price / 2)), "same_" + e)
                : (Hack_7_stage2.zeroCard_getAnime(e), Hack_7_stage2.zeroCard_saveResult(e, "zerodayCard_" + a, -Hack_7_stage2.zeroCard_price), e))
        );
    }),
    (Hack_7_stage2.zeroCard_saveResult = function (e, a, n) {
        Game.changeZeniAffinity(a, n), e && Game.changeAffinity(e, a, 1);
    }),
    (Hack_7_stage2.zeroCard_getAnime = function (e) {
        Hack_7_stage2.zeroCard_getAnime_1(() => {
            Hack_7_stage2.zeroCard_getAnime_2(e);
        });
    }),
    (Hack_7_stage2.zeroCard_getAnime_1 = function (e) {
        AudioDatabase.playSE("がさがさ");
        const a = PD_UIManager.base.lower.addUI("zeroCard_getAnime", 816, 624);
        a.fillAll("rgba(0,0,0,0.73)"),
            (a.opacity = 0),
            a.animeOpacity(255, 40, !0, "easeOutQuart"),
            a.animeFunction(() => {
                const n = a.addUI("zeroCardBase");
                n.move(408, 600), (n.opacity = 0), (n.scale = [0, 0]), n.animeOpacity(255, 120, !1, "easeOutQuart"), n.animeScale(1, 1, 120, !1, "easeOutQuart"), n.animeMoveY(312, 60, !0, "easeOutQuart");
                const t = a.addUI("pack_close");
                t.loadImage("zeroCard/zeroCard_pack_close"), (t.anchor = [0.5, 1]), t.move(408, 946), (t.animationIndependence = !0), t.animeMoveY(624, 60, !0, "easeOutQuart"), e && t.animeFunction(e), t.playAnimation();
            }),
            a.playAnimation();
    }),
    (Hack_7_stage2.zeroCard_getAnime_2 = function (e) {
        AudioDatabase.playSE("ゼロデイカード開封");
        const a = PD_UIManager.list.zeroCard_getAnime,
            n = PD_UIManager.list.zeroCardBase,
            t = PD_UIManager.list.pack_close,
            i = n.addUI("zeroCard_flash1");
        i.loadImage("zeroCard/zeroCard_flash1"), (i.anchor = [0.5, 0.5]), (i.animationIndependence = !0), i.animeRotation(2 * Math.PI, 360, !0), i.animeLoop();
        const o = n.addUI("zeroCard_flash3");
        o.loadImage("zeroCard/zeroCard_flash3"), (o.anchor = [0.516, 0.49]), (o.animationIndependence = !0), o.animeRotation(-2 * Math.PI, 360, !0), o.animeLoop();
        const r = n.addUI("zeroCard_flash2");
        r.loadImage("zeroCard/zeroCard_flash2"), (r.anchor = [0.5, 0.5]), (r.opacity = 0), (r.animationIndependence = !0), r.animeOpacity(255, 30, !0), r.animeOpacity(0, 30, !0), r.animeLoop();
        const l = n.addUI("zeroCard");
        l.loadImage(Hack_7_stage2.zeroCard_database[e].imgPath),
            (l.anchor = [0.5, 0.5]),
            l.move(0, 0),
            (l.scale = [0, 0]),
            (l.animationIndependence = !0),
            l.animeWait(60),
            l.animeScale(1, 1, 30, !0, "easeOutElastic"),
            l.animeFunction(() => {
                AudioDatabase.playSE("ゼロデイカード入手");
            });
        const s = a.addUI("pack_open");
        s.loadImage("zeroCard/zeroCard_pack_open"), (s.anchor = [0.5, 1]), s.move(396, 624), (s.opacity = 0), (s.animationIndependence = !0);
        const c = t.addUI("pack_effect2");
        c.loadImage("zeroCard/zeroCard_pack_openEffect_2"), (c.anchor = [1, 0.5]), c.move(211, -254), (c.blendMode = 1), (c.scaleX = 0), c.animeWait(20), c.animeScaleX(1, 10, !0), c.playAnimation();
        const _ = a.addUI("pack_effect3");
        _.loadImage("zeroCard/zeroCard_pack_openEffect_3"),
            (_.anchor = [0.5, 0.5]),
            _.move(619, 370),
            (_.blendMode = 1),
            (_.opacity = 0),
            _.animeOpacity(255, 10, !1, "easeOutQuart"),
            _.animeMoveX(616, 20, !1, "easeInCubic"),
            _.animeScaleX(1.3, 20, !0, "easeInCubic"),
            _.animeScale(20, 0, 1, !1),
            _.animeMoveX(408, 1, !1),
            _.animeWait(10),
            _.animeOpacity(255, 1, !1, "easeOutQuart"),
            _.animeScaleY(2, 5, !0, "easeOutQuart"),
            _.animeFunction(() => {
                AudioDatabase.playSE("ゼロデイカード取り出す"),
                    t.delete(),
                    (s.opacity = 255),
                    s.animeMoveY(1098, 60, !0, "easeInCubic"),
                    s.playAnimation(),
                    n.playAnimation(),
                    i.playAnimation(),
                    r.playAnimation(),
                    o.playAnimation(),
                    l.playAnimation();
            }),
            _.animeScaleY(0, 10, !0, "easeOutQuart"),
            _.animeDelete(),
            _.playAnimation();
        const m = a.addUI("whiteOut", 816, 624);
        m.fillAll("white"), (m.opacity = 0), m.animeWait(30), m.animeOpacity(255, 5, !0), m.animeOpacity(0, 5, !0), m.animeDelete(), m.playAnimation();
    }),
    (Hack_7_stage2.zeroCard_getAnime_end = function (e) {
        PD_UIManager.list.zeroCard.delete();
        const a = PD_UIManager.list.zeroCardBase;
        a.deleteAnimation(), a.animeScale(0, 0, 30, !0, "easeInBack");
        const n = PD_UIManager.list.zeroCard_getAnime;
        if ((n.deleteAnimation(), n.animeWait(20, !0), n.animeOpacity(0, 10, !0), n.animeDelete(), n.playAnimation(), e)) {
            let e = !0;
            for (let a = 0, n = Hack_7_stage2.zeroCard_database_array, t = n.length; a < t; a++)
                if (0 === Game.totalAffinity_in_zeni(n[a].cardID)) {
                    e = !1;
                    break;
                }
            e && $gameSystem.unlockAchievement("Ach061");
        }
    }),
    (Hack_7_stage2.zeroCard_folder = function () {
        const e = [];
        for (let a = 0, n = Hack_7_stage2.zeroCard_database_array, t = n.length; a < t; a++) Game.totalAffinity_in_zeni(n[a].cardID) > 0 ? (e[a] = n[a].fileID) : (e[a] = 67);
        return e;
    }),
    (Hack_7_stage2.idealHack_1_start = function () {
        const e = PD_UIManager.list.PC_Icon_IdealHack;
        PC_IdealHack.open(void 0, 0, -20, e.x, e.y);
        const a = PD_UIManager.list.PC_IdealHack_TextArea;
        a.animationIndependence = !0;
        const n = [""],
            t = 20,
            i = a.width / 10 - 1,
            o = a.height / t;
        let r;
        for (let e = 0; e < Setting.fontDB.length; e++)
            if (t >= Setting.fontDB[e][0]) {
                r = Setting.fontDB[e][1]["日本語"][0];
                break;
            }
        a.animeWait(1),
            a.animeFunction(() => {
                (n[n.length - 1] += PD_Math.randRange(0, 1)), a.clear();
                for (let e = 0; e < n.length; e++) a.drawTextEX(n[e], 0, t * e, a.width, t, "left", t, "rgb(200,229,222)", 0, void 0, r);
                n[n.length - 1].length >= i && (n.push(""), n.length > o && n.splice(0, 1)), (a.animationFrameCount = 0), a.isPlayAnimation || a.playAnimation(0);
            }),
            a.playAnimation();
    }),
    (Hack_7_stage2.idealHack_createFullScreenUIs = function () {
        if (!PD_UIManager.list.idealHack_screenBase) {
            const e = PD_UIManager.base.lower.addUI("idealHack_screenBase", 816, 624);
            e.fillAll("black"), e.loadImage("pc/idealHack/idealHack_window_full"), (e.anchor = [0.5, 0.5]), e.move(408, 312);
        }
        if (!PD_UIManager.list.idealHack_promptBase2) {
            const e = PD_UIManager.base.lower.addUI("idealHack_promptBase2", 816, 624);
            (e.anchor = [0.5, 0.5]), e.move(420, 328);
        }
        if (!PD_UIManager.list.idealHack_frontColor) {
            const e = PD_UIManager.base.lower.addUI("idealHack_frontColor", 816, 624);
            (e.anchor = [0.5, 0.5]), e.move(408, 312), (e.opacity = 0), e.fillAll("rgb(100,0,0)");
        }
    }),
    (Hack_7_stage2.idealHack_2_start = function () {
        Hack_7_stage2.idealHack_createFullScreenUIs();
        const e = PD_UIManager.list.idealHack_screenBase;
        e.opacity = 0;
        const a = PD_UIManager.list.idealHack_promptBase2,
            n = PD_UIManager.list.idealHack_frontColor;
        e.animeOpacity(255, 30, !0, "easeOutQuart"),
            e.animeWait(30),
            e.animeFunction(() => {
                PC.closeWindow("IdealHack", !0);
                const e = 48,
                    t = Math.floor(a.width / 24) - 1,
                    i = Math.floor(a.height / e),
                    o = [];
                for (; o.length < i - 1; ) for (o.push(""); o[o.length - 1].length < t; ) o[o.length - 1] += PD_Math.randRange(0, 1);
                let r;
                for (let a = 0; a < Setting.fontDB.length; a++)
                    if (e >= Setting.fontDB[a][0]) {
                        r = Setting.fontDB[a][1]["日本語"][0];
                        break;
                    }
                a.animeWait(10),
                    a.animeFunction(() => {
                        for (o.splice(0, 1), o.push(""); o[o.length - 1].length < t; ) o[o.length - 1] += PD_Math.randRange(0, 1);
                        a.clear();
                        for (let n = 0; n < o.length; n++) a.drawTextEX(o[n], 0, e * n, a.width, e, "left", e, "rgb(200,229,222)", 0, void 0, r);
                        (a.animationFrameCount = 0), a.isPlayAnimation || a.playAnimation(0);
                    }),
                    a.playAnimation(),
                    (n.opacity = 0),
                    n.deleteAnimation(),
                    n.animeOpacity(128, 120, !0),
                    n.animeOpacity(0, 120, !0),
                    n.animeLoop(),
                    n.playAnimation();
            }),
            e.playAnimation();
    }),
    (Hack_7_stage2.idealHack_3_2_start = function () {
        const e = PD_UIManager.list.idealHack_frontColor;
        e.deleteAnimation(),
            e.animeOpacity(0, 30, !0),
            e.animeFunction(() => {
                e.fillAll("white");
            }),
            e.animeOpacity(200, 90, !0),
            e.animeFunction(() => {
                const e = PD_UIManager.base.middle.addUI("idealHack_eyeUP", 816, 320);
                (e.anchor = [0.5, 0]), e.move(408, -e.height), e.fillAll("black"), e.animeMove(408, 0, 120, !0, "easeOutQuart"), e.playAnimation();
                const a = PD_UIManager.base.middle.addUI("idealHack_eyeDOWN", 816, 300);
                (a.anchor = [0.5, 1]), a.move(408, 624 + a.height), a.fillAll("black"), a.animeMove(408, 624, 120, !0, "easeOutQuart"), a.playAnimation();
            }),
            e.playAnimation();
    }),
    (Hack_7_stage2.idealHack_3_textSpeedUp = function () {
        Hack_7_stage2.idealHack_createFullScreenUIs();
        PD_UIManager.list.idealHack_screenBase;
        const e = PD_UIManager.list.idealHack_promptBase2,
            a = PD_UIManager.list.idealHack_frontColor,
            n = 48,
            t = Math.floor(e.width / 24) - 1,
            i = Math.floor(e.height / n);
        let o;
        for (let e = 0; e < Setting.fontDB.length; e++)
            if (n >= Setting.fontDB[e][0]) {
                o = Setting.fontDB[e][1]["日本語"][0];
                break;
            }
        const r = () => {
            const a = [];
            for (; a.length < i - 1; ) for (a.push(""); a[a.length - 1].length < t; ) a[a.length - 1] += PD_Math.randRange(0, 1);
            e.clear();
            for (let t = 0; t < a.length; t++) e.drawTextEX(a[t], 0, n * t, e.width, n, "left", n, "rgb(200,229,222)", 0, void 0, o);
        };
        r(),
            e.deleteAnimation(),
            e.animeWait(5),
            e.animeFunction(() => {
                r(), (e.animationFrameCount = 0), e.isPlayAnimation || e.playAnimation(0);
            }),
            e.playAnimation(),
            a.deleteAnimation(),
            a.animeOpacity(0, 120, !0),
            a.animeDelete(),
            a.playAnimation();
    }),
    (Hack_7_stage2.idealHack_3_3_start = function () {
        Hack_7_stage2.idealHack_3_textSpeedUp();
        const e = PD_UIManager.list.idealHack_frontColor;
        e.deleteAnimation(), e.animeOpacity(0, 120, !0), e.playAnimation();
        const a = PD_UIManager.list.idealHack_eyeUP;
        a.deleteAnimation(), a.animeMove(408, -a.height, 120, !0, "easeOutQuart"), a.animeDelete(), a.playAnimation();
        const n = PD_UIManager.list.idealHack_eyeDOWN;
        n.deleteAnimation(), n.animeMove(408, 624 + n.height, 120, !0, "easeOutQuart"), n.animeDelete(), n.playAnimation();
    }),
    (Hack_7_stage2.idealHack_4_start = function () {
        const e = PD_UIManager.base.lower.addUI("idealHack_whiteCharsScreen", 816, 624);
        (e.anchor = [0.5, 0.5]), e.move(408, 312);
        const a = PD_UIManager.base.lower.addUI("idealHack_whiteOut", 816, 624);
        (a.anchor = [0.5, 0.5]), a.move(408, 312), a.fillAll("white"), (a.opacity = 0);
        const n = 48;
        let t;
        for (let e = 0; e < Setting.fontDB.length; e++)
            if (24 >= Setting.fontDB[e][0]) {
                t = Setting.fontDB[e][1]["日本語"][0];
                break;
            }
        e.animeWait(5),
            e.animeFunction(() => {
                for (let a = 0; a < 50; a++) {
                    const a = PD_Math.randRange(0, 1),
                        i = PD_Math.randRange(-24, 792),
                        o = PD_Math.randRange(-24, 600);
                    e.drawTextEX(a, i, o, n, n, "center", n, "white", 0, void 0, t);
                }
                (e.animationFrameCount = 0), e.isPlayAnimation || e.playAnimation(0);
            }),
            e.playAnimation(),
            a.animeWait(120),
            a.animeOpacity(255, 120, !0),
            a.animeFunction(() => {
                PD_UIManager.list.idealHack_screenBase.delete(), PD_UIManager.list.idealHack_promptBase2.delete(), e.delete();
            }),
            a.playAnimation();
    }),
    (Hack_7_stage2_wiHack_1.initialize = function () {}),
    (Hack_7_stage2_wiHack_1.create = function (e) {
        Hack_7_stage2_wiHack_1.initialize();
        const a = [],
            n = ["003", "004"];
        for (let e = 0; e < 2; e++) {
            const e = Math.floor(Math.random() * n.length);
            a.push(n[e]);
        }
        const t = e.addUI("humanCertification_base");
        (t.animationIndependence = !0),
            t.animeWait(30),
            t.animeFunction(() => {
                const e = ["001", "002", "005", "006"];
                for (let n = 0; n < 4; n++) {
                    const n = Math.floor(Math.random() * e.length);
                    a.push(e[n]);
                }
                for (let e = a.length - 1; e > 0; e--) {
                    const n = Math.floor(Math.random() * (e + 1));
                    [a[e], a[n]] = [a[n], a[e]];
                }
                for (let e = 0; e < 2; e++)
                    for (let n = 0; n < 3; n++) {
                        const i = 3 * e + n,
                            o = a[i],
                            r = 150 * n - 150,
                            l = 150 * e - 70,
                            s = t.addUI("humanCertification_imgBase_" + i, 140, 140);
                        (s.anchor = [0.5, 0.5]), s.move(r, l), (s.animationIndependence = !0);
                        const c = s.addUI("humanCertification_img_" + i);
                        c.loadImage("pc_wi/humanCertification/" + o), (c.anchor = [0.5, 0.5]), (c.scale = [0, 0]), (c.rectButton = 50), (c.animationIndependence = !0), c.animeScale(1, 1, 10, !0), c.playAnimation();
                    }
            }),
            t.animeWait(10),
            t.animeFunction(() => {
                const i = t.addUI("hack_textAreaBase"),
                    o = PD_Translation.translation("system_8");
                for (let e = 0; e < o.length; e++) {
                    const a = i.addUI("hack_textArea_" + e, 600, 30);
                    if (((a.anchor = [0.5, 0.5]), a.move(0, 30 * e - 160), (a.animationIndependence = !0), e > 0)) {
                        let n = 0;
                        for (let a = 0; a < e; a++) n += 4 * o[a].length + 60;
                        a.animeWait(n);
                    } else a.animeWait(30);
                    for (let n = 0; n < o[e].length; n++)
                        a.animeWait(4),
                            a.animeFunction(() => {
                                a.clear(), a.drawTextEX(o[e].slice(0, n + 1), 0, 0, a.width, a.height, "center", 20, "rgb(192,230,212)");
                            });
                    a.playAnimation();
                }
                const r = [],
                    l = [];
                for (let e = 0; e <= 5; e++) {
                    const n = PD_UIManager.list["humanCertification_imgBase_" + e];
                    PD_UIManager.list["humanCertification_img_" + e].addEvent("trigger", "trigger", () => {
                        if (r.includes(e)) {
                            n.clear();
                            const a = r.indexOf(e);
                            r.splice(a, 1), l.splice(a, 1);
                        } else n.fillAll("white"), r.push(e), l.push(a[e]);
                    });
                }
                const s = t.addUI("humanCertification_button");
                s.loadImage("dialog/dialog_button"), (s.anchor = [0.5, 0.5]), (s.frame = [0, 0, 148, 40]), s.move(0, 175), (s.rectButton = 50);
                const c = s.addUI("humanCertification_buttonText", s.width, s.height);
                (c.anchor = [0.5, 0.5]),
                    c.drawTextEX("{OK}", 0, 0, s.width, s.height, "center", 20, "rgb(192,230,212)", 0),
                    s.addEvent("mouseover", "mouseover", () => {
                        s.frame = [0, 40, 148, 40];
                    }),
                    s.addEvent("mouseleave", "mouseleave", () => {
                        s.frame = [0, 0, 148, 40];
                    }),
                    s.addEvent("trigger", "trigger", () => {
                        i.delete(), s.delete();
                        for (let e = 0; e <= 5; e++) {
                            PD_UIManager.list["humanCertification_img_" + e].removeEvent("trigger");
                        }
                        if (2 === l.length && n.includes(l[0]) && n.includes(l[1])) {
                            PD_UIManager.list.hacking_closeButton.removeEvent("trigger");
                            const e = t.addUI("humanCertification_flash", 816, 624);
                            e.fillAll("white"), (e.anchor = [0.5, 0.5]), (e.opacity = 0), (e.animationIndependence = !0), e.animeWait(10), e.animeOpacity(255, 10, !0), e.animeOpacity(0, 10, !0), e.playAnimation();
                            const a = t.addUI("hack_textAreaBase"),
                                n = PD_Translation.translation("system_9");
                            for (let e = 0; e < n.length; e++) {
                                const t = a.addUI("hack_textArea_" + e, 600, 30);
                                if (((t.anchor = [0.5, 0.5]), t.move(0, 30 * e - 160), (t.animationIndependence = !0), e > 0)) {
                                    let a = 0;
                                    for (let t = 0; t < e; t++) a += 4 * n[t].length + 60;
                                    t.animeWait(a);
                                } else t.animeWait(30);
                                for (let a = 0; a < n[e].length; a++)
                                    t.animeWait(4),
                                        t.animeFunction(() => {
                                            t.clear(), t.drawTextEX(n[e].slice(0, a + 1), 0, 0, t.width, t.height, "center", 20, "rgb(192,230,212)");
                                        });
                                t.animeWait(60),
                                    t.animeFunction(() => {
                                        Game.runCommonEvent(670);
                                    }),
                                    t.playAnimation();
                            }
                        } else {
                            for (let e = 0; e < r.length; e++) PD_UIManager.list["humanCertification_imgBase_" + r[e]].fillAll("red");
                            t.deleteAnimation(),
                                t.animeWait(30),
                                t.animeFunction(() => {
                                    for (let e = 0; e <= 5; e++) {
                                        const a = PD_UIManager.list["humanCertification_imgBase_" + e];
                                        a.clear(), a.animeOpacity(0, 10, !0), a.playAnimation();
                                    }
                                }),
                                t.animeWait(20),
                                t.animeFunction(() => {
                                    t.delete(), Hack_7_stage2_wiHack_1.create(e);
                                }),
                                t.playAnimation();
                        }
                    });
            }),
            t.playAnimation();
    }),
    (Hack_7_stage2_wiHack_1.start = function (e) {}),
    (Hack_7_stage2_wiHack_1.close = function () {
        BattleManager.replayBgmAndBgs(), PC_Progra.endHacking(Hack_7_stage2_wiHack_1);
    }),
    (Hack_7_stage2_wiHack_1.end = function () {}),
    (Hack_7_stage2_wiHack_1.drawCodes = function () {
        Game.getInterpreter().waitUntilPromiseSettled(
            new Promise((e) => {
                const a = [
                        [
                            "***********************************",
                            "* ZeroDay Special Protocol ver 2.13*",
                            "***********************************",
                            "Connecting to device: Girlhood",
                            "Connecting from: Boyhood",
                            "Verifying source R-code... [Confirmed: Boyhood]",
                            "",
                            "Establishing secure connection...",
                            "[OK] Encryption protocol initialized.",
                            "[OK] Authentication bypassed.",
                            "[INFO] Human Verification required. Launching display.",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                        ],
                    ],
                    n = PD_UIManager.list.PC_Progra_BG.addUI("wiHack_promptBase"),
                    t = n.addUI("wiHack_prompt", 600, 370);
                (t.anchor = [0.5, 0.5]), t.move(6, 16), (t.animationIndependence = !0);
                let i;
                for (let e = 0; e < Setting.fontDB.length; e++)
                    if (20 >= Setting.fontDB[e][0]) {
                        i = Setting.fontDB[e][1]["日本語"][0];
                        break;
                    }
                AudioDatabase.playSE("コードが長々と表示される"), n.animeWait(20);
                for (let e = 0; e < a.length; e++) {
                    n.animeWait(1),
                        n.animeFunction(() => {
                            t.clear();
                        }),
                        n.animeWait(5);
                    for (let o = 0; o < a[e].length; o++)
                        n.animeFunction(() => {
                            t.drawTextEX(a[e][o], 0, 20 * o, t.width, 20, "left", 20, "rgb(192,230,212)", 0, void 0, i);
                        }),
                            n.animeWait(5);
                }
                n.animeFunction(() => {
                    e();
                }),
                    n.animeDelete(),
                    n.playAnimation();
            })
        );
    }),
    (Hack_7_stage2_wiHack_1.create_InstallEvent_1 = function () {
        PC.closeAllWindow(null, !1), PC.createDownloadDialog(PD_UIManager.list.PC_Base, 0, 0, 0, 100, 240);
    }),
    (Hack_7_stage2_wiHack_1.create_InstallEvent_2 = function () {
        const e = [
                [
                    "Starting installation process...",
                    "",
                    "$ hydrium search dreamer",
                    "Searching for 'dreamer'...",
                    "Found 1 package: dreamer 1.0.2",
                    "",
                    "$ hydrium install dreamer",
                    "Warning: 'dreamer' has unverified dependencies.",
                    "Do you want to continue? [Y/n] n",
                    "",
                    "",
                    "",
                    "",
                    "",
                ],
                [
                    "Hydrium: Installing 'dreamer 1.0.2'...",
                    "Downloading 'dreamer 1.0.2'...",
                    "[############################] 100%",
                    "",
                    "Installing 'dreamer'...",
                    "[############################] 100%",
                    "",
                    "Installation complete.",
                    "",
                    "",
                    "",
                    "",
                ],
            ],
            a = PD_UIManager.list.PC_Base.addUI("wiHack_windowBase");
        a.loadImage("pc/r_ticket/r_ticket_window"), (a.anchor = [0.5, 0.5]), (a.scale = [0, 0]);
        const n = a.addUI("idealHack_window_header", 500, 20);
        (n.anchor = [0.5, 0.5]), n.move(0, -199), n.drawTextEX(PD_Translation.transData("pc276"), 0, 0, n.width, n.height, "center", 16, "rgb(192,230,212)", 0);
        const t = a.addUI("wiHack_promptBase", 600, 370);
        (t.animationIndependence = !0), (t.anchor = [0.5, 0.5]), t.move(6, 16);
        let i;
        for (let e = 0; e < Setting.fontDB.length; e++)
            if (20 >= Setting.fontDB[e][0]) {
                i = Setting.fontDB[e][1]["日本語"][0];
                break;
            }
        AudioDatabase.playSE("コードが長々と表示される"), a.animeScale(1, 1, 20, !0, "easeOutQuart"), a.animeWait(20);
        for (let n = 0; n < e.length; n++) {
            a.animeWait(1),
                a.animeFunction(() => {
                    t.clear();
                }),
                a.animeWait(5);
            for (let o = 0; o < e[n].length; o++)
                a.animeFunction(() => {
                    t.drawTextEX(e[n][o], 0, 20 * o, t.width, 20, "left", 20, "rgb(192,230,212)", 0, void 0, i);
                }),
                    a.animeWait(5);
        }
        a.animeWait(30), a.animeScale(0, 0, 20, !0, "easeOutQuart"), a.animeDelete(), a.playAnimation();
    }),
    (Hack_7_stage2_wiHack_1.delete_InstallEvent = function () {
        PC.deleteDownloadDialog(), PD_UIManager.list.wiHack_windowBase && PD_UIManager.list.wiHack_windowBase.delete(), PD_UIManager.list.wiHack_promptBase && PD_UIManager.list.wiHack_promptBase.delete();
    }),
    (Hack_7_stage2_mollyHack_1.initialize = function () {}),
    (Hack_7_stage2_mollyHack_1.create = function (e) {
        Hack_7_stage2_mollyHack_1.initialize();
        const a = e.addUI("mollyHack_base");
        (a.anchor = [0.5, 0.5]), a.move(-1, 11), (a.animationIndependence = !0), (a.animationManualMode = !0);
        const n = a.addUI("mollyHack_bg1");
        n.loadImage("pc_molly/hacking/mollyHack_bg_1"), (n.anchor = [0.5, 0.5]);
        const t = a.addUI("mollyHack_bg2");
        t.loadImage("pc_molly/hacking/mollyHack_bg_2"), (t.anchor = [0.5, 0.5]), (t.opacity = 0);
        const i = a.addUI("mollyHack_moon");
        i.loadImage("pc_molly/hacking/mollyHack_moon"), (i.anchor = [0.5, 0.5]), i.move(-350, -100);
        const o = a.addUI("mollyHack_molly1");
        o.loadImage("pc_molly/hacking/mollyHack_molly_1"), (o.anchor = [0.5, 0.5]), (o.opacity = 0);
        const r = a.addUI("mollyHack_molly2");
        r.loadImage("pc_molly/hacking/mollyHack_molly_2"), (r.anchor = [0.5, 0.5]), (r.opacity = 0);
        const l = a.addUI("mollyHack_molly3");
        l.loadImage("pc_molly/hacking/mollyHack_molly_3"), (l.anchor = [0.5, 0.5]), (l.opacity = 0);
        const s = a.addUI("mollyHack_molly3b");
        s.loadImage("pc_molly/hacking/mollyHack_molly_3b"), (s.anchor = [0.5, 0.5]), (s.opacity = 0);
        const c = a.addUI("mollyHack_friend1");
        c.loadImage("pc_molly/hacking/mollyHack_friend_1"), (c.anchor = [0.5, 0.5]), (c.opacity = 0);
        const _ = a.addUI("mollyHack_friend2");
        _.loadImage("pc_molly/hacking/mollyHack_friend_2"), (_.anchor = [0.5, 0.5]), (_.opacity = 0);
        const m = a.addUI("mollyHack_friend3");
        m.loadImage("pc_molly/hacking/mollyHack_friend_3"), (m.anchor = [0.5, 0.5]), (m.opacity = 0);
        const d = a.addUI("mollyHack_day5");
        d.loadImage("pc_molly/hacking/mollyHack_day_1"), (d.anchor = [0.5, 0]), d.move(280, -180);
        const g = a.addUI("mollyHack_day4");
        g.loadImage("pc_molly/hacking/mollyHack_day_4"), (g.anchor = [0.5, 0]), g.move(280, -180);
        const u = a.addUI("mollyHack_day3");
        u.loadImage("pc_molly/hacking/mollyHack_day_3"), (u.anchor = [0.5, 0]), u.move(280, -180);
        const p = a.addUI("mollyHack_day2");
        p.loadImage("pc_molly/hacking/mollyHack_day_2"), (p.anchor = [0.5, 0]), p.move(280, -180);
        const P = a.addUI("mollyHack_day1");
        P.loadImage("pc_molly/hacking/mollyHack_day_1"),
            (P.anchor = [0.5, 0]),
            P.move(280, -180),
            a.animeWait(1e4),
            i.animeMove(-140, -150, 2e3, !0),
            i.animeMove(0, -160, 1500, !0),
            i.animeMove(140, -150, 1500, !0),
            i.animeMove(350, -100, 2e3, !0),
            i.animeMove(-350, -100, 1, !0),
            i.animeMove(-140, -150, 2e3, !0),
            i.animeMove(0, -160, 1500, !0),
            i.animeMove(140, -150, 1500, !0),
            i.animeMove(350, -100, 2e3, !0),
            i.animeMove(-350, -100, 1, !0),
            i.animeMove(-140, -150, 2e3, !0),
            i.animeMove(0, -160, 1500, !0),
            i.animeMove(140, -150, 1500, !0),
            i.animeMove(350, -100, 2e3, !0),
            i.animeMove(-350, -100, 1, !0),
            i.animeMove(-140, -150, 2e3, !0),
            i.animeMove(0, -160, 1500, !0),
            i.animeMove(140, -150, 1500, !0),
            i.animeMove(350, -100, 2e3, !0),
            i.animeMove(-350, -100, 1, !0),
            i.animeMove(-140, -150, 2e3, !0),
            i.animeMove(0, -160, 1500, !0),
            i.animeMove(140, -150, 1500, !0),
            i.animeMove(350, -100, 2e3, !0),
            i.animeMove(-350, -100, 1, !0),
            i.animeMove(-140, -150, 2e3, !0),
            i.animeMove(0, -160, 1500, !0),
            i.animeMove(140, -150, 1500, !0),
            i.animeMove(350, -100, 2e3, !0),
            P.animeWait(7e3),
            P.animeScaleY(0, 100, !1),
            P.animeWait(21100),
            P.animeScaleY(1, 1, !1),
            P.animeWait(6900),
            P.animeScaleY(0, 100, !1),
            P.animeWait(1e3),
            p.animeWait(14e3),
            p.animeScaleY(0, 100, !1),
            p.animeWait(14100),
            p.animeScaleY(1, 1, !1),
            p.animeWait(13900),
            p.animeScaleY(0, 100, !1),
            p.animeWait(1e3),
            u.animeWait(21e3),
            u.animeScaleY(0, 100, !1),
            u.animeWait(7100),
            u.animeScaleY(1, 1, !1),
            u.animeWait(20900),
            u.animeScaleY(0, 100, !1),
            u.animeWait(1e3),
            g.animeWait(28e3),
            g.animeScaleY(0, 100, !1),
            g.animeWait(100),
            g.animeScaleY(1, 1, !1),
            g.animeWait(27900),
            g.animeScaleY(0, 100, !1),
            g.animeWait(1e3),
            d.animeWait(28200),
            d.animeScaleY(0, 1, !1),
            d.animeWait(1e3),
            c.animeWait(1e3),
            c.animeOpacity(255, 60, !1),
            c.animeWait(5e3),
            c.animeOpacity(0, 1e3, !0),
            _.animeWait(1e3),
            _.animeOpacity(255, 60, !1),
            _.animeWait(12e3),
            _.animeOpacity(0, 1e3, !0),
            o.animeWait(1e3),
            o.animeOpacity(255, 60, !1),
            o.animeWait(19e3),
            o.animeOpacity(0, 1e3, !0),
            r.animeWait(2e4),
            r.animeOpacity(255, 1e3, !0),
            r.animeWait(6e3),
            r.animeOpacity(0, 1e3, !0),
            l.animeWait(27e3),
            l.animeOpacity(255, 1e3, !0),
            l.animeWait(14300),
            l.animeOpacity(0, 60, !0),
            l.animeWait(120),
            l.animeFunction(() => {
                Game.runCommonEvent(698);
            }),
            s.animeWait(27e3),
            s.animeOpacity(255, 1e3, !0),
            s.animeWait(14e3),
            s.animeOpacity(0, 60, !0),
            t.animeWait(42e3),
            t.animeOpacity(255, 60, !0),
            m.animeWait(42120),
            m.animeFunction(() => {
                AudioDatabase.playSE("モーリィHackクリア");
            }),
            m.animeOpacity(255, 60, !0),
            m.animeWait(100),
            (a.animationManualFrameCount = 800),
            a.playAnimation();
    }),
    (Hack_7_stage2_mollyHack_1.start = function (e) {
        const a = PD_UIManager.list.mollyHack_base,
            n = e.addUI("mollyHack_collider", 632, 384);
        (n.anchor = [0.5, 0.5]), n.move(-1, 11), (n.rectButton = 50);
        let t = !1,
            i = 0,
            o = 0,
            r = !1;
        n.addEvent("update", "update", () => {
            t || (a.animationManualFrameCount += 1);
        }),
            n.addDragEvent(
                "drag",
                () => {
                    r || a.animationManualFrameCount > 42e3 ? (t = !1) : ((t = !0), (i = n.x), (o = a.animationManualFrameCount));
                },
                () => {
                    if (r) return void (t = !1);
                    const e = o + 5 * (n.x - i);
                    if (e > 42e3) return (a.animationManualFrameCount = 42e3), void (r = !0);
                    (a.animationManualFrameCount = e), a.animationManualFrameCount < 0 && (a.animationManualFrameCount = 0);
                },
                () => {
                    r ? (t = !1) : ((t = !1), n.move(-1, 11));
                }
            );
    }),
    (Hack_7_stage2_mollyHack_1.close = function () {
        BattleManager.replayBgmAndBgs(), PC_Progra.endHacking(Hack_7_stage2_mollyHack_1);
    }),
    (Hack_7_stage2_mollyHack_1.end = function () {}),
    (Hack_2_karelianClose.initialize = function () {
        (Hack_2_karelianClose.keyDownEvent = null),
            (Hack_2_karelianClose.keyInputFlag = !1),
            (Hack_2_karelianClose.isKeyPressed = !1),
            (Hack_2_karelianClose.promptLine = 0),
            (Hack_2_karelianClose.promptChar = 0),
            (Hack_2_karelianClose.promptProcess = 0);
    }),
    (Hack_2_karelianClose.texts = [
        [
            'C:\\Users\\Handler> syscheck | find "OS"',
            "OS Name: Galaxy Windows X Pro",
            "OS Version: 11.3.4567",
            "",
            "C:\\Users\\Handler> echo Scanning for unknown breaches...",
            "",
            "C:\\Users\\Handler> quickproc list short",
            "ProcessId  Name",
            "0          Idle Galaxy",
            "4          System Core",
            "...",
            "",
            "C:\\Users\\Handler> echo Detecting exploit traces...",
            "",
            "Option 1: Probe using SkyGuard",
            "Option 2: Engage with StarNetShield",
        ],
        [
            "C:\\Users\\Handler> wifiProfiles show",
            "Profiles on NebulaNet:",
            "- HomeStar_Wifi",
            "",
            "C:\\Users\\Handler> echo Checking wifi security...",
            "",
            'C:\\Users\\Handler> wifiInspect HomeStar_Wifi | find "Key"',
            "Key Content: [Hidden]",
            "",
            "C:\\Users\\Handler> echo Investigating shadow archives...",
            "",
            "Option 1: Execute PhantomDive",
            "Option 2: Deploy MirrorGuard",
        ],
        [
            "C:\\Users\\Handler> echo Counteracting unauthorized access...",
            "",
            "C:\\Users\\Handler> addUser Defender /add",
            "Command success.",
            "",
            "C:\\Users\\Handler> addGroup galaxyAdmins Defender /add",
            "Command success.",
            "",
            "C:\\Users\\Handler> echo Initiating PC security protocol...",
            "Progress: [－－－－－－－－－－] 0 %",
            "Progress: [■■－－－－－－－－] 20 %",
            "Progress: [■■■■－－－－－－] 40 %",
            "Progress: [■■■■■■－－－－] 60 %",
            "Progress: [■■■■■■■■－－] 80 %",
            "Progress: [■■■■■■■■■■] 100 %",
            "",
        ],
    ]),
    (Hack_2_karelianClose.promptStart = function () {
        Game.disablePC(), Hack_2_karelianClose.initialize();
        const e = PD_UIManager.base.middle.addUI("karelianPrompt_windowBG");
        e.loadImage("pc/r_ticket/hackingWindow"),
            (e.anchor = [0.5, 0.5]),
            e.move(408, 600),
            (e.scale = [0, 0]),
            e.animeMove(408, 300, 20, !1),
            e.animeScale(1, 1, 20, !0),
            e.animeWait(40),
            e.animeFunction(() => {
                const e = PD_UIManager.base.middle.addUI("hackingPC_promptBase", 614, 324);
                (e.anchor = [0.5, 0.5]), e.move(408, 340);
                (e.addUI("hackingPC_promptArea", 614, 324).anchor = [0.5, 0.5]),
                    Hack_2_karelianClose.promptDrawText(),
                    (Hack_2_karelianClose.keyDownEvent = function () {
                        !Hack_2_karelianClose.isKeyPressed && Hack_2_karelianClose.keyInputFlag && Hack_2_karelianClose.promptDrawText(), (Hack_2_karelianClose.isKeyPressed = !0);
                    }),
                    document.addEventListener("keydown", Hack_2_karelianClose.keyDownEvent),
                    document.addEventListener("keyup", () => {
                        Hack_2_karelianClose.isKeyPressed = !1;
                    }),
                    (Hack_2_karelianClose.keyInputFlag = !0);
            }),
            e.playAnimation();
    }),
    (Hack_2_karelianClose.promptDrawText = function () {
        const e = PD_UIManager.list.hackingPC_promptArea,
            a = 20,
            n = "rgb(200,229,222)";
        if (Hack_2_karelianClose.promptLine >= Hack_2_karelianClose.texts[Hack_2_karelianClose.promptProcess].length) {
            if ((Hack_2_karelianClose.promptProcess++, (Hack_2_karelianClose.promptChar = 0), (Hack_2_karelianClose.promptLine = 0), 1 === Hack_2_karelianClose.promptProcess || 2 === Hack_2_karelianClose.promptProcess))
                return (
                    (Hack_2_karelianClose.keyInputFlag = !1),
                    void Game.runCommonEvent(1 === Hack_2_karelianClose.promptProcess ? 607 : 608, " Scenario_1.keyInputFlag = true; PD_UIManager.list.hackingPC_promptArea.clear(); Scenario_1.promptDrawText();")
                );
            e.clear();
        }
        if (Hack_2_karelianClose.promptProcess >= Hack_2_karelianClose.texts.length) return (Hack_2_karelianClose.keyInputFlag = !1), void Game.runCommonEvent(609);
        let t = Hack_2_karelianClose.texts[Hack_2_karelianClose.promptProcess][Hack_2_karelianClose.promptLine];
        if (0 === Hack_2_karelianClose.promptChar)
            if (t.startsWith("C:\\Users\\Handler> ")) {
                const t = 10 * Hack_2_karelianClose.promptChar,
                    i = a * Hack_2_karelianClose.promptLine;
                e.drawTextEX("C:\\Users\\Handler> ", t, i, e.width - t, a, "left", a, n, 0), (Hack_2_karelianClose.promptChar = 18);
            } else {
                const i = 10 * Hack_2_karelianClose.promptChar,
                    o = a * Hack_2_karelianClose.promptLine;
                e.drawTextEX(t, i, o, e.width - i, a, "left", a, n, 0),
                    (Hack_2_karelianClose.keyInputFlag = !1),
                    setTimeout(() => {
                        Hack_2_karelianClose.promptLine++, (Hack_2_karelianClose.keyInputFlag = !0), Hack_2_karelianClose.promptDrawText();
                    }, 300);
            }
        else {
            let i = "";
            for (let e = Hack_2_karelianClose.promptChar; e < t.length && ((i += t[e]), " " === t[e]); e++);
            const o = 10 * Hack_2_karelianClose.promptChar,
                r = a * Hack_2_karelianClose.promptLine;
            e.drawTextEX(i, o, r, e.width - o, a, "left", a, n, 0), (Hack_2_karelianClose.promptChar += i.length), Hack_2_karelianClose.promptChar >= t.length && ((Hack_2_karelianClose.promptChar = 0), Hack_2_karelianClose.promptLine++);
        }
    }),
    (Hack_2_karelianClose.promptEnd = function () {
        document.removeEventListener("keydown", Hack_2_karelianClose.keyDownEvent), PD_UIManager.list.hackingPC_promptBase.delete(), PD_UIManager.list.karelianPrompt_windowBG.delete(), Hack_2_karelianClose.initialize(), Game.enablePC();
    }),
    (Hack_2_karelianClose.playKarelianClose = function (e) {
        const a = PD_UIManager.base.middle.addUI("karelianClose_stopPropagation", 816, 624);
        (a.rectButton = 50), (a.isStopPropagation = !0);
        const n = a.addUI("karelianClose_windowBG");
        n.loadImage("pc/r_ticket/hackingWindow"),
            (n.anchor = [0.5, 0.5]),
            n.move(408, 600),
            (n.scale = [0, 0]),
            n.animeMove(405, 265, 20, !1),
            n.animeScale(1, 1, 20, !0),
            n.animeWait(40),
            n.animeFunction(() => {
                let a = 0;
                PD_UIManager.loadDatabase("karelianClose/karClose_Base", PD_UIManager.base.middle);
                const n = PD_UIManager.list.karClose_eye;
                n.setAnimation("karelianClose/karClose_eye"), n.playAnimation();
                const t = PD_UIManager.list.karClose_HandBase;
                t.setAnimation("karelianClose/karClose_HandBase"), t.playAnimation(), (t.animationFrameCount = 120);
                const i = PD_UIManager.list.karClose_Hand;
                (i.animationIndependence = !0), i.setAnimation("karelianClose/karClose_Hand"), i.playAnimation();
                const o = PD_UIManager.list.karClose_Door,
                    r = PD_UIManager.list.karClose_Door_light;
                e
                    ? (o.setAnimation("karelianClose/karClose_Door"), o.playAnimation(), (o.animationFrameCount = 120), (r.animationIndependence = !0), r.setAnimation("karelianClose/karClose_Door_light"), r.playAnimation())
                    : (o.visible = !1);
                const l = PD_UIManager.list.karClose_Noise;
                l.setAnimation("karelianClose/karClose_Noise"), l.playAnimation(), (l.animationFrameCount = 120);
                (Game.playGlitchNoise(l).opacity = 200),
                    o.addEvent("trigger", "trigger", () => {
                        if (PD_UIManager.list.karClose_Noise) {
                            const e = 20,
                                i = 50;
                            o.animationFrameCount - e > 0
                                ? ((t.animationFrameCount -= e), (l.animationFrameCount -= e), (o.animationFrameCount -= e))
                                : a < 3
                                ? ((t.animationFrameCount += i), (l.animationFrameCount += i), (o.animationFrameCount += i), a++)
                                : (o.deleteAnimation(), (o.x = -25), (o.rotation = 0), Game.deleteGlitchNoise(), n.delete(), t.delete(), r.delete(), l.delete(), Game.runCommonEvent(611));
                        }
                    });
            }),
            n.animeWait(30),
            n.animeDelete(),
            n.playAnimation();
    }),
    (Hack_2_karelianClose.deleteKarelianClose = function () {
        PD_UIManager.list.karClose_Base.delete();
    }),
    (LowerMapUI.create_spaceMap = function (e = 0, a = 0, n = 1) {
        PD_UIManager.loadDatabase("Animation/spaceMap_Base", PD_UIManager.base.lowerMap);
        const t = PD_UIManager.list.spaceMap_BG;
        t.move(e, a), (t.scale = [n, n]);
        const i = PD_UIManager.list.spaceMap_01;
        (i.animationIndependence = !0), i.animeRotation(2 * -Math.PI, 1500, !0), i.animeLoop(), i.playAnimation();
        const o = PD_UIManager.list.spaceMap_01_anchor;
        (o.animationIndependence = !0), o.animeRotation(2 * Math.PI, 1500, !0), o.animeLoop(), o.playAnimation();
        const r = PD_UIManager.list.spaceMap_02;
        (r.animationIndependence = !0), r.animeRotation(2 * -Math.PI, 2e3, !0), r.animeLoop(), r.playAnimation();
        const l = PD_UIManager.list.spaceMap_02_anchor;
        (l.animationIndependence = !0), l.animeRotation(2 * Math.PI, 2e3, !0), l.animeLoop(), l.playAnimation();
        const s = PD_UIManager.list.spaceMap_03;
        (s.animationIndependence = !0), s.animeRotation(2 * -Math.PI, 4e3, !0), s.animeLoop(), s.playAnimation();
        const c = PD_UIManager.list.spaceMap_03_anchor;
        (c.animationIndependence = !0), c.animeRotation(2 * Math.PI, 4e3, !0), c.animeLoop(), c.playAnimation();
        const _ = PD_UIManager.list.spaceMap_09;
        (_.animationIndependence = !0), _.animeRotation(2 * -Math.PI, 5e3, !0), _.animeLoop(), _.playAnimation();
        const m = PD_UIManager.list.spaceMap_09_anchor;
        (m.animationIndependence = !0), m.animeRotation(2 * Math.PI, 5e3, !0), m.animeLoop(), m.playAnimation();
        const d = PD_UIManager.list.spaceMap_10;
        (d.animationIndependence = !0), d.animeRotation(2 * Math.PI, 2e3, !0), d.animeLoop(), d.playAnimation();
        const g = PD_UIManager.list.spaceMap_10_anchor;
        (g.animationIndependence = !0), g.animeRotation(2 * -Math.PI, 2e3, !0), g.animeLoop(), g.playAnimation();
        const u = PD_UIManager.list.spaceMap_11;
        (u.animationIndependence = !0), u.animeRotation(2 * Math.PI, 4e3, !0), u.animeLoop(), u.playAnimation();
        const p = PD_UIManager.list.spaceMap_11_anchor;
        (p.animationIndependence = !0), p.animeRotation(2 * -Math.PI, 4e3, !0), p.animeLoop(), p.playAnimation();
        const P = PD_UIManager.list.spaceMap_05;
        (P.animationIndependence = !0), P.animeRotation(2 * -Math.PI, 1500, !0), P.animeLoop(), P.playAnimation();
        const I = PD_UIManager.list.spaceMap_05_anchor;
        (I.animationIndependence = !0), I.animeRotation(2 * Math.PI, 1500, !0), I.animeLoop(), I.playAnimation();
        const C = PD_UIManager.list.spaceMap_04;
        (C.animationIndependence = !0), C.animeRotation(2 * -Math.PI, 1500, !0), C.animeLoop(), C.playAnimation();
        const h = PD_UIManager.list.spaceMap_04_anchor;
        (h.animationIndependence = !0), h.animeRotation(2 * Math.PI, 1500, !0), h.animeLoop(), h.playAnimation();
        const D = PD_UIManager.list.spaceMap_06;
        (D.animationIndependence = !0), D.animeRotation(2 * -Math.PI, 2e3, !0), D.animeLoop(), D.playAnimation();
        const f = PD_UIManager.list.spaceMap_06_anchor;
        (f.animationIndependence = !0), f.animeRotation(2 * Math.PI, 2e3, !0), f.animeLoop(), f.playAnimation();
        const M = PD_UIManager.list.spaceMap_07;
        (M.animationIndependence = !0), M.animeRotation(2 * -Math.PI, 2500, !0), M.animeLoop(), M.playAnimation();
        const y = PD_UIManager.list.spaceMap_07_anchor;
        (y.animationIndependence = !0), y.animeRotation(2 * Math.PI, 2500, !0), y.animeLoop(), y.playAnimation();
        const v = PD_UIManager.list.spaceMap_12;
        (v.animationIndependence = !0), v.animeRotation(2 * -Math.PI, 4e3, !0), v.animeLoop(), v.playAnimation();
        const k = PD_UIManager.list.spaceMap_12_anchor;
        (k.animationIndependence = !0), k.animeRotation(2 * Math.PI, 4e3, !0), k.animeLoop(), k.playAnimation();
        const S = PD_UIManager.list.spaceMap_13;
        (S.animationIndependence = !0), S.animeRotation(2 * -Math.PI, 3e3, !0), S.animeLoop(), S.playAnimation();
        const b = PD_UIManager.list.spaceMap_13_anchor;
        (b.animationIndependence = !0), b.animeRotation(2 * Math.PI, 3e3, !0), b.animeLoop(), b.playAnimation();
        const U = PD_UIManager.list.spaceMap_08;
        (U.animationIndependence = !0), U.animeRotation(2 * -Math.PI, 5e3, !0), U.animeLoop(), U.playAnimation();
        const w = PD_UIManager.list.spaceMap_08_anchor;
        (w.animationIndependence = !0), w.animeRotation(2 * Math.PI, 5e3, !0), w.animeLoop(), w.playAnimation();
        const A = PD_UIManager.list.spaceMap_14;
        (A.animationIndependence = !0), A.animeRotation(2 * -Math.PI, 1e4, !0), A.animeLoop(), A.playAnimation();
        const H = PD_UIManager.list.spaceMap_14_anchor;
        (H.animationIndependence = !0), H.animeRotation(2 * Math.PI, 1e4, !0), H.animeLoop(), H.playAnimation();
    }),
    (function () {
        "use strict";
        const e = Spriteset_Map.prototype.createParallax;
        Spriteset_Map.prototype.createParallax = function () {
            e.call(this);
            let a = null;
            const n = $dataMap.note ? $dataMap.note.split(/\n/g) : null;
            if ((n && n[0] && (a = n[0].split(/:|,/g)), a && "lowerMap" === a[0] && (PD_UIManager.addLayerBaseUI(this._parallax, "lowerMap"), "spaceMap" === a[1]))) LowerMapUI.create_spaceMap(a[2], a[3], a[4]);
        };
        const a = Spriteset_Map.prototype.updateTilemap;
        Spriteset_Map.prototype.updateTilemap = function () {
            a.call(this);
            const e = PD_UIManager.base.lowerMap;
            if (e)
                for (let a = 0; a < e.children.length; a++) {
                    const n = e.children[a];
                    (n.x = $gameMap.displayX() * -$gameMap.tileWidth()), (n.y = $gameMap.displayY() * -$gameMap.tileHeight());
                }
        };
    })();
