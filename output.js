//Mon Aug 25 2025 11:11:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  use_legacy_floaty_conf: drp_AdA_lovElAce,
  use_minimal_floaty_conf: drp_ScRipt_KiDdo
} = hamibot.env;
var drp_DeMoscEnE;
var drp_DiStinCtIon;
var drp_CoMputEr_Science;
var drp_PaDdinGtOn;
if (drp_AdA_lovElAce) {
  drp_DeMoscEnE = floaty.window("\n                <vertical id=\"main_window\" bg=\"#000000\" alpha=\"0.9\" w=\"100\">\n                    <text id=\"title\" text=\"Dr. PopMart\" gravity=\"center\" textColor=\"#66ccff\" textStyle=\"bold\" />\n                    <horizontal>\n                        <button id=\"start\" text=\"运行\" bg=\"#00FFFF\" w=\"100\" visibility=\"visible\" />\n                        <button id=\"end\" text=\"停止\" bg=\"#FF0000\" w=\"100\" visibility=\"gone\" />\n                    </horizontal>\n                    <button text=\"\" bg=\"#111111\" w=\"50\" h=\"10\" />\n                    <horizontal>\n                        <button id=\"type_settings\" text=\"方式\" bg=\"#66ccff\" w=\"50\" h=\"40\" />\n                        <button id=\"number_settings\" text=\"数量\" bg=\"#f0ff0f\" w=\"50\" h=\"40\" />\n                    </horizontal>\n                    <button text=\"\" bg=\"#111111\" w=\"50\" h=\"10\" />\n                    <horizontal>\n                        <button id=\"move_start\" text=\"移动\" bg=\"#f0ff0f\" w=\"100\" h=\"40\" visibility=\"visible\" />\n                        <button id=\"move_end\" text=\"固定\" bg=\"#00FFFF\" w=\"100\" h=\"40\" visibility=\"gone\" />\n                    </horizontal>\n                </vertical>\n                ");
} else {
  drp_ScRipt_KiDdo ? drp_DiStinCtIon = floaty.rawWindow("<frame>\n                    <img id=\"drag\" src=\"@drawable/ic_launcher\" circle=\"true\" tint=\"#66ccff\" bg=\"#00000000\" padding=\"2\" w=\"75\" h=\"75\" />\n                    <text id=\"text_status\" text=\"启动\" textColor=\"#FFFFFF\" textSize=\"14sp\" layout_gravity=\"center\" gravity=\"center\" bg=\"#00000000\" />\n                </frame>") : drp_CoMputEr_Science = floaty.window("<vertical id=\"main_window\" bg=\"#000000\" alpha=\"0.9\" w=\"100\">\n                    <text id=\"title\" text=\"Dr. PopMart\" gravity=\"center\" textColor=\"#66ccff\" textStyle=\"bold\" />\n                    <horizontal>\n                        <button id=\"start\" text=\"运行\" bg=\"#00FFFF\" w=\"100\" visibility=\"visible\" />\n                        <button id=\"end\" text=\"停止\" bg=\"#FF0000\" w=\"100\" visibility=\"gone\" />\n                    </horizontal>\n                    <button text=\"\" bg=\"#111111\" w=\"50\" h=\"3\" />\n                    <horizontal>\n                        <button id=\"config_settings\" text=\"配置\" bg=\"#66ccff\" w=\"100\" h=\"40\" />\n                    </horizontal>\n                    <button text=\"\" bg=\"#111111\" w=\"50\" h=\"3\" />\n                    <horizontal>\n                        <button id=\"move_start\" text=\"移动\" bg=\"#f0ff0f\" w=\"100\" h=\"40\" visibility=\"visible\" />\n                        <button id=\"move_end\" text=\"固定\" bg=\"#00FFFF\" w=\"100\" h=\"40\" visibility=\"gone\" />\n                    </horizontal>\n                </vertical>");
}
drp_PaDdinGtOn = floaty.rawWindow("<vertical id=\"config_main\" bg=\"#000000\" alpha=\"0.95\" padding=\"10\" w=\"1px\" h=\"1px\">\n                <text text=\"⚙️ 临时配置设置\" gravity=\"center\" textColor=\"#66ccff\" textStyle=\"bold\" textSize=\"18\" />\n                <button text=\"关闭\" id=\"close_config\" bg=\"#F44336\" w=\"*\" h=\"40\" margin=\"0 10\" />\n                <button text=\"本地配置预设\" id=\"preset_config\" bg=\"#FFD700\" w=\"*\" h=\"40\" />\n                <button text=\"\" bg=\"#111111\" w=\"10\" h=\"10\" />\n                <scroll>\n                    <vertical>\n                        <button id=\"delivery_type_config\" text=\"\" bg=\"#66ccff\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button id=\"delivery_number_config\" text=\"\" bg=\"#66ccff\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button id=\"specs_config\" text=\"\" bg=\"#66ccff\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button id=\"extra_selection_regex_config\" text=\"\" bg=\"#66ccff\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"10\" h=\"10\" />\n\n                        <button id=\"refresh_delay_config\" text=\"\" bg=\"#4CAF50\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button id=\"enable_random_delay_config\" text=\"\" bg=\"#4CAF50\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button id=\"random_delay_lower_config\" text=\"\" bg=\"#4CAF50\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button id=\"random_delay_upper_config\" text=\"\" bg=\"#4CAF50\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button id=\"max_refresh_time_config\" text=\"\" bg=\"#4CAF50\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button id=\"rage_stock_refresh_config\" text=\"\" bg=\"#4CAF50\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button id=\"payment_password_config\" text=\"\" bg=\"#4CAF50\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"10\" h=\"10\" />\n\n\n                        <button id=\"extra_delay_config\" text=\"\" bg=\"#2196F3\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button id=\"ack_delay_config\" text=\"\" bg=\"#2196F3\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button text=\"\" bg=\"#111111\" w=\"10\" h=\"10\" />\n\n                        <button id=\"ignore_ack_config\" text=\"\" bg=\"#E91E63\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button id=\"special_confirm_delay_config\" text=\"\" bg=\"#E91E63\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button id=\"ignore_ack_click_delay_config\" text=\"\" bg=\"#E91E63\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button id=\"shield_breaker_mode_config\" text=\"\" bg=\"#E91E63\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button id=\"ignore_ack_panic_timer_config\" text=\"\" bg=\"#E91E63\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button id=\"panic_timer_config\" text=\"\" bg=\"#E91E63\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"10\" h=\"10\" />\n                        \n\n                        <button id=\"vibrate_time_config\" text=\"\" bg=\"#3F51B5\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button id=\"main_window_alpha_config\" text=\"\" bg=\"#3F51B5\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button id=\"auto_click_notification_config\" text=\"\" bg=\"#3F51B5\" w=\"*\" h=\"50\" />\n                        <button text=\"\" bg=\"#111111\" w=\"*\" h=\"5\" />\n                        <button id=\"reset_floaty_position_config\" text=\"\" bg=\"#3F51B5\" w=\"*\" h=\"50\" />\n                    </vertical>\n                </scroll>\n            </vertical>");
var drp_mINd_thE_gAp = "Ada lovelace";
var drp_dARk_soUlS = "See it, say it, sorted.";
var drp_cOMputEr_Science = "King's Cross";
var drp_aDA_lovElAce;
var drp_dIStinCtIon;
var drp_tENsorFlOw;
var drp_pADdinGtOn;
var drp_sCRipt_KiDdo;
var drp_dEMoscEnE;
var drp_nOTtinGhAm;
var drp_DIStinCtIon = "Never Settle.";
var drp_DIStinCtIon = "lGTW1pMWlUUXVKTWJGZ1Y0aFF2ZllreUdIYnJaL2pJbFYwMFBncmdnUUVYZEJNNjdICkRUYWpqczVUSGJ4eTNIMENCU0pGNVI2WXBTdk9Ed25GeDBOdjN3T2R1TVDMzFQNm2JmeVZadnpRT2JuWGd1V3ptUEVxTE9PZ3lqd05mZWEwQW8zU295S2YxU3FoRW1YQ3ZwZHRDbkJJam9jTUZPNk9QR1VUVGE2Q1AgUT54dH4gRFpIUk9zdU5GTk5vSzluV08hdko4aTFpVFF1Sk1iRmdWNGhRdmZZa3lHSGJyWi9qSWxWMDBQZ3JnZ1FFWGRCTTY3SApEVGFqanM1VEhieHkzSDBDQlNKRjVSNllwU3ZPRHduRngwTnYzd09kdUwvTFlLMXJrN0RB" + drp_DIStinCtIon;
var drp_PADdinGtOn = "Practice makes perfect.";
drp_PADdinGtOn = "47cf4380-5bda-40a3-9ab3-74e0cdd5b079";
function drp_COMputEr_Science(pADdInGtOn, mINd_ThE_gAp) {
  var pADdInGtOn = pADdInGtOn + 10000;
  drp_aDA_lovElAce = hamibot;
  drp_dIStinCtIon = hamibot;
  drp_tENsorFlOw = drp_dIStinCtIon.exit;
  drp_dEMoscEnE = exit;
  drp_nOTtinGhAm = exit;
  drp_DIStinCtIon = "VTNwU1ZVMTZSazVWVlZaRVRYcEdVVTV0Y0RGalJrWnNVVlpPYUdScmJ6Uk5helF5WVdwS05WZFhaRFpWTWtwdFpWWmFZV1J1Y0ZKVU1rcDFWMGRrTVZZemNIUlZSVlo0VkVVNVVGb3piSEZrTURWdFdsZEZkMUZYT0hwVk1qazFVekpaZUZVelJtOVNWekZaVVROYWQxcElVa1JpYTBwS1lXMDVhbFJWV2xCT2F6bFJVakZXVlZaSFJUSlJNVUZuVlZRMU5HUklOR2RTUm5CSlZXczVlbVJWTlVkVWF6VjJVM3BzZFZZd09IaGxSelV4VW0xMFZFd3hXWEpVUm14SFZGY3hjRTFYYkZWVldGWkxWRmRLUjFveFdUQmhSa1l5V214c2NtVlZaRWxaYmtwaFRESndTbUpHV1hkTlJrSnVZMjFrYmxWVlZsbGFSVXBPVG1wa1NVTnJVbFZaVjNCeFkzcFdWVk5IU2pSbFZFNUpUVVZPUTFVd2NFZE9Wa2t5VjFoQ1ZHUnJPVVZrTWpWSFpVUkNUMlJxVGpOVU1sSXhWRU01VFZkVmMzaGpiWE16VWtWRlBRPT0=";
  drp_PADdinGtOn = "42f93ddc-1c6f-40fc-82d7-5578a4596cd7";
}
for (let drp_PADdInGtOn = 0; drp_PADdInGtOn < 5; drp_PADdInGtOn++) {
  drp_COMputEr_Science(drp_PADdInGtOn, auto);
}
auto.waitFor();
console.error("[无障碍] 状态正常");
function drp_DARk_soUlS() {
  drp_pADdinGtOn = drp_aDA_lovElAce.env;
  drp_sCRipt_KiDdo = drp_pADdinGtOn;
  drp_DIStinCtIon = "U3pSVU16Rk5VVVZETXpGUU5tcDFjRkZsUVZOaGRrbzRNazQyYWpKNVdXZDZVMkptZVZaYWRucFJUMkp1V0dkMVYzcHRVRVZ4VEU5UFozbHFkMDVtWldFd1FXOHpVMjk1UzJZeFUzRm9SVzFZUTNad1pIUkRia0pKYW05alRVWlBOazlRUjFWVVZHRTJRMUFnVVQ1NGRINGdSRnBJVWs5emRVNUdUazV2U3psdVYwOHhlRzUxUm10VEwxWXJURmxHVFcxcE1XbFVVWFZLVFdKR1oxWTBhRkYyWmxscmVVZElZbkphTDJwSmJGWXdNRkJuY21kblVVVllaRUpOTmpkSUNrUlVZV3BxY3pWVVNHSjRlVE5JTUVOQ1UwcEdOVkkyV1hCVGRrOUVkMjVHZURCT2RqTjNUMlIxVEM5TVdVc3hjbXMzUkVFPQ==";
  drp_PADdinGtOn = "d2143c10-f1e5-4fe1-8055-0d07a77b63da";
}
drp_DARk_soUlS();
const {
  delivery: drp_MINd_thE_gAp,
  specs_conf: drp_TENsorFlOw,
  purchase_count_conf: drp_DEMoscEnE,
  type_conf: drp_ADA_lovElAce,
  extra_delay_conf: drp_SCRipt_KiDdo,
  delay_conf: drp_NOTtinGhAm,
  enable_random_delay_conf: drp_minD_thE_gAp,
  random_delay_lower_conf: drp_disTinCtIon,
  random_delay_upper_conf: drp_padDinGtOn,
  max_refresh_time_conf: drp_comPutEr_Science,
  auto_click_notification_conf: drp_darK_soUlS,
  click_new_notification_conf: drp_notTinGhAm,
  hide_console_conf: drp_tenSorFlOw,
  disable_click: drp_ada_LovElAce,
  ack_delay_conf: drp_scrIpt_KiDdo,
  debug_mode_conf: drp_demOscEnE,
  ignore_ack_conf: drp_MinD_thE_gAp,
  main_window_alpha_conf: drp_DisTinCtIon,
  reset_floaty_position_conf: drp_PadDinGtOn,
  ignore_ack_click_delay_conf: drp_NotTinGhAm,
  sku_result_toast_conf: drp_DarK_soUlS,
  rage_stock_refresh_conf: drp_ComPutEr_Science,
  vibrate_time_conf: drp_Ada_LovElAce,
  special_confirm_delay_conf: drp_ScrIpt_KiDdo,
  special_click_confirm_conf: drp_DemOscEnE,
  extra_selection_regex_conf: drp_TenSorFlOw,
  payment_password_conf: drp_pAdDinGtOn,
  shield_breaker_mode_conf: drp_tEnSorFlOw,
  panic_timer_conf: drp_sCrIpt_KiDdo,
  ignore_ack_panic_timer_conf: drp_nOtTinGhAm,
  keep_screen_on_conf: drp_mInD_thE_gAp,
  run_on_boot_conf: drp_dEmOscEnE,
  notification_based_control_conf: drp_aDa_LovElAce,
  monitored_titles_conf: drp_dIsTinCtIon
} = drp_pADdinGtOn;
const {
  onFreeTrial: drp_dArK_soUlS
} = drp_aDA_lovElAce.plan;
var drp_cOmPutEr_Science = drp_dArK_soUlS;
const drp_NOtTinGhAm = new Date(drp_pADdinGtOn.TIMESTAMP);
const drp_PAdDinGtOn = new Date();
const drp_DEmOscEnE = Math.abs(drp_PAdDinGtOn - drp_NOtTinGhAm);
const drp_COmPutEr_Science = 60000;
var drp_mINd_thE_gAp;
var drp_dARk_soUlS;
var drp_cOMputEr_Science;
drp_DEmOscEnE > drp_COmPutEr_Science ? (sleep(4000), exit()) : (drp_mINd_thE_gAp = drp_aDA_lovElAce.scriptId, drp_dARk_soUlS = drp_aDA_lovElAce.scriptName, drp_cOMputEr_Science = drp_aDA_lovElAce.plan.name, drp_PADdinGtOn = "2507cf26-ae50-4db9-8bd7-215be2663501");
function drp_SCrIpt_KiDdo() {
  drp_sCRipt_KiDdo = drp_pADdinGtOn.JWT_TOKEN;
  drp_PADdinGtOn = "57901f92-ae0f-41d1-aabd-8e7a4d3200cd";
  return drp_sCRipt_KiDdo + drp_mINd_thE_gAp + drp_cOMputEr_Science;
}
var drp_MInD_thE_gAp;
var drp_DArK_soUlS;
var drp_DIsTinCtIon;
drp_sCRipt_KiDdo = drp_mINd_thE_gAp;
drp_sCRipt_KiDdo = drp_mINd_thE_gAp + drp_cOMputEr_Science;
drp_MInD_thE_gAp = drp_SCrIpt_KiDdo();
drp_DArK_soUlS = http;
drp_DIsTinCtIon = http.get;
drp_DIStinCtIon = "N0lRcHJuVDdyNXlMZkpId01Ub1RERWZaaGFUNEhXTGtKc2xYRUJYNWFMVkQ0ckpxTUZEdTRNTGV2N3FOcFRWck9HMnBtb2hyV1hWekFBbmxRWFhtSDdmNGFLZjNLZ2RUQ0V6c2A5SnU7OCxQPiQxVz83QT5XLzdmMTJxb2ZaOXd1K280dVliSGxpdnExRWxlY053Qk5YelIwazZRejBrbjdUYS9CMm9SNklZRkNIczlmRkxkUk8wWmlRMG5JK2dnCmYxSzQ4QlZkZUh1MENyd3E3Z1RZdEd4TWxJWU1zZmNqQk1JWU5ySmR1V2hPMy95aVZkdUI=";
!drp_pADdinGtOn.JWT_TOKEN ? drp_nOTtinGhAm() : drp_DIStinCtIon = base64.decode(drp_DIStinCtIon);
!drp_tenSorFlOw && console.show();
var drp_ADa_LovElAce = 0;
var drp_TEnSorFlOw = drp_MINd_thE_gAp || "到店取";
var drp_paDDinGtOn = parseInt(drp_DEMoscEnE) || 1;
var drp_miND_thE_gAp = drp_TENsorFlOw || "单个";
var drp_scRIpt_KiDdo = parseInt(drp_NOTtinGhAm) || 300;
var drp_adA_LovElAce = parseInt(drp_SCRipt_KiDdo) || 0;
var drp_daRK_soUlS = parseFloat(drp_comPutEr_Science) || 0;
var drp_coMPutEr_Science = parseInt(drp_scrIpt_KiDdo) || 0;
var drp_teNSorFlOw = drp_darK_soUlS || false;
var drp_deMOscEnE = Math.max(parseInt(drp_disTinCtIon) || 10, 1);
var drp_noTTinGhAm = Math.max(parseInt(drp_padDinGtOn) || 150, 1);
var drp_diSTinCtIon = Math.min(Math.max(parseFloat(drp_DisTinCtIon) || 0.9, 0), 1);
var drp_AdA_LovElAce = parseInt(drp_NotTinGhAm) || 200;
var drp_NoTTinGhAm = 0;
var drp_ScRIpt_KiDdo = 0;
var drp_DaRK_soUlS = Date.now();
var drp_MiND_thE_gAp = parseInt(drp_Ada_LovElAce) || 3000;
var drp_PaDDinGtOn = parseInt(drp_ScrIpt_KiDdo) || 1750;
var drp_TeNSorFlOw = drp_PadDinGtOn || false;
var drp_CoMPutEr_Science = drp_minD_thE_gAp || false;
var drp_DeMOscEnE = drp_MinD_thE_gAp || false;
var drp_mIND_thE_gAp = drp_AdA_lovElAce || false;
var drp_dEMOscEnE = drp_ScRipt_KiDdo || false;
var drp_sCRIpt_KiDdo = drp_notTinGhAm || false;
var drp_tENSorFlOw = drp_ComPutEr_Science || false;
var drp_pADDinGtOn = drp_DemOscEnE || false;
var drp_dISTinCtIon = drp_TenSorFlOw || "";
var drp_nOTTinGhAm = drp_pAdDinGtOn || "";
var drp_cOMPutEr_Science = false;
var drp_dARK_soUlS = drp_tEnSorFlOw || false;
var drp_aDA_LovElAce = drp_sCrIpt_KiDdo || 0;
var drp_DARK_soUlS = drp_nOtTinGhAm || 0;
var drp_SCRIpt_KiDdo = drp_mInD_thE_gAp || false;
var drp_TENSorFlOw = drp_dEmOscEnE || false;
var drp_COMPutEr_Science = drp_aDa_LovElAce || false;
var drp_MIND_thE_gAp = drp_dIsTinCtIon || "";
drp_MIND_thE_gAp = drp_MIND_thE_gAp.split(/[,，]/);
if (drp_COMPutEr_Science) {
  try {
    events.observeNotification();
    console.error("[控制] 正在监听微信消息通知");
    console.error("[控制] 正在监控的群组: " + drp_MIND_thE_gAp.join(", "));
  } catch (drp_DIStInCtIon) {
    console.error("[控制] 监听微信消息失败，请确认已开启hamibot的通知读取权限");
  }
}
drp_TENSorFlOw && console.info("[提示] 脚本已设置为开机自启动");
drp_SCRIpt_KiDdo && (device.keepScreenOn(7200000000), console.info("[提示] 屏幕已保持常亮"));
function drp_PADDinGtOn() {
  return drp_sCRipt_KiDdo ? 200 : 1210;
}
var drp_DISTinCtIon;
var drp_DEMOscEnE;
var drp_ADA_LovElAce;
drp_ADA_LovElAce = "Bear";
drp_DEMOscEnE = drp_ADA_LovElAce;
drp_DEMOscEnE = "https://internal.alibaba.com/verify/2507cf26-ae50-4db9-8bd7-215be2663501/response";
function drp_NOTTinGhAm(TENsOrFlOw, scrIPt_KiDdo, ada_LOvElAce) {
  let padDInGtOn = TENsOrFlOw.substring(ada_LOvElAce, ada_LOvElAce + 16);
  let demOScEnE = TENsOrFlOw.substring(ada_LOvElAce + 16);
  return aes.decrypt(demOScEnE, scrIPt_KiDdo, padDInGtOn);
}
function drp_dark_SoUlS() {
  return drp_NOTTinGhAm(drp_DIStinCtIon, drp_PADdinGtOn, drp_PADDinGtOn() / 2);
}
drp_ADA_LovElAce += "er ";
drp_DEMOscEnE = drp_dark_SoUlS();
function drp_ada_lOvElAce() {
  try {
    drp_DEMOscEnE = base64.decode(drp_DEMOscEnE);
    let MinD_ThE_gAp = {
      DarK_SoUlS: drp_ADA_LovElAce + drp_sCRipt_KiDdo
    };
    var DemOScEnE = "yRFxy902vYq9Kotiy4bU6LIWIx1TlMc07SKjZNXIeV3wAkXEMhzvwlY9y1ekT6C7dp4rvWSlAnUbAMeFOrXUq87xvFnA4U4ftGg3TRLG0{SV{tEy,:m*PNMHFupL79ugesPUPOHhOw==";
    var DarK_SoUlS = drp_NOTTinGhAm(DemOScEnE, drp_PADdinGtOn, drp_PADDinGtOn() / 2);
    var TenSOrFlOw = {
      headers: MinD_ThE_gAp
    };
    let Ada_LOvElAce = drp_DIsTinCtIon(drp_DEMOscEnE, TenSOrFlOw);
    drp_dArK_soUlS && (drp_cOMPutEr_Science = false);
    drp_DISTinCtIon = Ada_LOvElAce.statusCode;
    return drp_DISTinCtIon === drp_PADDinGtOn();
  } catch (NotTInGhAm) {}
}
let drp_distInCtIon = drp_ada_lOvElAce();
if (!drp_distInCtIon) {
  drp_PADDinGtOn();
  drp_tENsorFlOw();
} else {
  if (drp_DIsTinCtIon) {
    let drp_dIsTInCtIon = console;
  }
}
console.info("[欢迎使用] Dr. PopMart 辅助脚本");
drp_dArK_soUlS ? (console.error("目前为免费试用版, 功能受到限制，如果觉得好用请重新订阅后再次购买!"), console.error("在试用期间, 刷新速度的配置选项将无效, 固定为1000ms(1秒)"), drp_scRIpt_KiDdo = 1000) : (console.error("您目前使用的是本脚本的付费版, 功能将不会受到限制!"), console.error("非常感谢您的支持! 目前脚本将全速运行!"), console.error("有任何问题或功能建议，欢迎您发工单"));
drp_DISTinCtIon / 2 != 100 && drp_tENsorFlOw();
if (drp_mIND_thE_gAp) {
  var drp_nottInGhAm = storages.create("DRP");
  var drp_compUtEr_Science = drp_DeMoscEnE;
  drp_compUtEr_Science.main_window.attr("alpha", drp_diSTinCtIon);
  function drp_dArK_SoUlS() {
    drp_ADa_LovElAce = 1;
    drp_compUtEr_Science.end.attr("visibility", "visible");
    drp_compUtEr_Science.start.attr("visibility", "gone");
  }
  function drp_sCrIPt_KiDdo() {
    drp_ADa_LovElAce = 0;
    drp_compUtEr_Science.end.attr("visibility", "gone");
    drp_compUtEr_Science.start.attr("visibility", "visible");
  }
  drp_compUtEr_Science.start.click(function () {
    drp_dArK_SoUlS();
    console.error("[状态] 辅助脚本启动");
    !drp_cOMPutEr_Science && (console.log("[提示] 如果脚本没反应，请重启hamibot和微信"), drp_cOMPutEr_Science = true);
  });
  drp_compUtEr_Science.end.click(function () {
    drp_sCrIPt_KiDdo();
    console.error("[状态] 辅助脚本停止");
  });
  drp_compUtEr_Science.move_start.click(function () {
    drp_compUtEr_Science.setAdjustEnabled(true);
    drp_compUtEr_Science.move_start.attr("visibility", "gone");
    drp_compUtEr_Science.move_end.attr("visibility", "visible");
  });
  drp_compUtEr_Science.move_end.click(function () {
    drp_compUtEr_Science.setAdjustEnabled(false);
    drp_compUtEr_Science.move_start.attr("visibility", "visible");
    drp_compUtEr_Science.move_end.attr("visibility", "gone");
    var DIsTInCtIon = drp_compUtEr_Science.getX();
    var PAdDInGtOn = drp_compUtEr_Science.getY();
    drp_nottInGhAm.put("floaty_position_x", DIsTInCtIon);
    drp_nottInGhAm.put("floaty_position_y", PAdDInGtOn);
    console.warn("[提示] 悬浮窗位置已记录");
  });
  drp_compUtEr_Science.type_settings.click(function () {
    "ui";

    const DEmOScEnE = ["送到家", "到店取", "来回刷", "来回刷（到店取）", "来回刷（送到家）"];
    var SCrIPt_KiDdo = DEmOScEnE.indexOf(drp_TEnSorFlOw);
    dialogs.singleChoice("请选择配送方案", DEmOScEnE, SCrIPt_KiDdo).then(TEnSOrFlOw => {
      switch (TEnSOrFlOw) {
        case 0:
          drp_TEnSorFlOw = "送到家";
          break;
        case 1:
          drp_TEnSorFlOw = "到店取";
          break;
        case 2:
          drp_TEnSorFlOw = "来回刷";
          break;
        case 3:
          drp_TEnSorFlOw = "来回刷（到店取）";
          break;
        case 4:
          drp_TEnSorFlOw = "来回刷（送到家）";
          break;
      }
      console.info("目前的购买方案为: ", drp_TEnSorFlOw);
      console.info("如果已在运行状态，请停止后重新运行");
    });
  });
  drp_compUtEr_Science.number_settings.click(function () {
    "ui";

    const teNSOrFlOw = ["1", "2", "手动输入"];
    dialogs.singleChoice("请选择购买数量", teNSOrFlOw).then(diSTInCtIon => {
      diSTInCtIon === 2 ? dialogs.rawInput("请输入购买数量", drp_paDDinGtOn).then(TeNSOrFlOw => {
        {
          parseInt(TeNSOrFlOw) > 0 ? (drp_paDDinGtOn = parseInt(TeNSOrFlOw), console.info("目前的购买数量为: ", drp_paDDinGtOn), console.info("如果已在运行状态，请停止后重新运行")) : console.info("请输入正整数, [", TeNSOrFlOw, "]不符合规范");
        }
      }) : (drp_paDDinGtOn = diSTInCtIon + 1, console.info("目前的购买数量为: ", drp_paDDinGtOn), console.info("如果已在运行状态，请停止后重新运行"));
    });
  });
  var drp_tensOrFlOw = drp_nottInGhAm.get("floaty_position_x");
  var drp_paddInGtOn = drp_nottInGhAm.get("floaty_position_y");
  var drp_demoScEnE = device.width / 2 + 100;
  var drp_scriPt_KiDdo = drp_compUtEr_Science.getY() + 100;
  drp_TENSorFlOw && ui.post(() => {
    drp_dArK_SoUlS();
  });
  typeof drp_tensOrFlOw === "number" && typeof drp_paddInGtOn === "number" && drp_tensOrFlOw >= 0 && drp_tensOrFlOw + 100 <= device.width ? (console.warn("[提示] 悬浮窗位置已读取"), drp_compUtEr_Science.setPosition(drp_tensOrFlOw, drp_paddInGtOn)) : drp_compUtEr_Science.setPosition(drp_demoScEnE, drp_scriPt_KiDdo);
} else {
  var drp_nottInGhAm = storages.create("DRP");
  if (drp_dEMOscEnE) {
    var drp_compUtEr_Science = drp_DiStinCtIon;
    drp_compUtEr_Science.setTouchable(true);
    var drp_ADa_LovElAce = 0;
    let drp_MIND_ThE_gAp;
    let drp_COMPUtEr_Science;
    let drp_TENSOrFlOw;
    let drp_PADDInGtOn;
    let drp_ADA_LOvElAce = 0;
    const drp_DARK_SoUlS = 200;
    const drp_NOTTInGhAm = 600;
    const drp_SCRIPt_KiDdo = 10;
    let drp_DEMOScEnE;
    let drp_DISTInCtIon = false;
    drp_compUtEr_Science.drag.setOnTouchListener(function (scripT_KiDdo, mind_tHE_gAp) {
      switch (mind_tHE_gAp.getAction()) {
        case mind_tHE_gAp.ACTION_DOWN:
          drp_MIND_ThE_gAp = mind_tHE_gAp.getRawX();
          drp_COMPUtEr_Science = mind_tHE_gAp.getRawY();
          drp_TENSOrFlOw = drp_compUtEr_Science.getX();
          drp_PADDInGtOn = drp_compUtEr_Science.getY();
          drp_ADA_LOvElAce = new Date().getTime();
          drp_DEMOScEnE = setTimeout(() => {
            drp_DISTInCtIon = true;
            drp_compuTEr_Science();
          }, drp_NOTTInGhAm);
          return true;
        case mind_tHE_gAp.ACTION_MOVE:
          let NottiNGhAm = mind_tHE_gAp.getRawX() - drp_MIND_ThE_gAp;
          let Dark_sOUlS = mind_tHE_gAp.getRawY() - drp_COMPUtEr_Science;
          drp_compUtEr_Science.setPosition(drp_TENSOrFlOw + NottiNGhAm, drp_PADDInGtOn + Dark_sOUlS);
          (Math.abs(NottiNGhAm) > drp_SCRIPt_KiDdo || Math.abs(Dark_sOUlS) > drp_SCRIPt_KiDdo) && (clearTimeout(drp_DEMOScEnE), drp_DISTInCtIon = false);
          return true;
        case mind_tHE_gAp.ACTION_UP:
          let CompuTEr_Science = new Date().getTime();
          CompuTEr_Science - drp_ADA_LOvElAce < drp_DARK_SoUlS && (drp_dark_sOUlS(), drp_DISTInCtIon = false, clearTimeout(drp_DEMOScEnE));
          return true;
      }
      return false;
    });
    function drp_compuTEr_Science() {
      try {
        if (!drp_mind_ThE_gAp) {
          {
            drp_mind_ThE_gAp = drp_nOTTInGhAm();
            var dEmosCEnE = String(device.width * 0.8) + "px";
            var dIstiNCtIon = String(device.height * 0.8) + "px";
            drp_mind_ThE_gAp.config_main.attr("w", dEmosCEnE);
            drp_mind_ThE_gAp.config_main.attr("h", dIstiNCtIon);
            sleep(500);
          }
        }
        drp_dARK_SoUlS();
      } catch (scRipT_KiDdo) {
        log("Error in config button click: " + scRipT_KiDdo);
      }
    }
    function drp_dark_sOUlS() {
      if (drp_ADa_LovElAce == 1) {
        console.error("[状态] 辅助脚本停止");
        drp_compUtEr_Science.text_status.setText("启动");
        try {
          drp_compUtEr_Science.drag.attr("tint", "#66ccff");
        } catch (DaRk_sOUlS) {
          console.error("Failed to set image tint:", DaRk_sOUlS);
        }
        drp_ADa_LovElAce = 0;
      } else {
        console.error("[状态] 辅助脚本启动");
        !drp_cOMPutEr_Science && (console.log("[提示] 如果脚本没反应，请重启hamibot和微信"), drp_cOMPutEr_Science = true);
        drp_compUtEr_Science.text_status.setText("停止");
        try {
          drp_compUtEr_Science.drag.attr("tint", "#FF4444");
        } catch (MiNd_tHE_gAp) {
          console.error("Failed to set image tint:", MiNd_tHE_gAp);
        }
        drp_ADa_LovElAce = 1;
      }
    }
    drp_TENSorFlOw && ui.post(() => {
      drp_dark_sOUlS();
    });
  } else {
    var drp_compUtEr_Science = drp_CoMputEr_Science;
    drp_compUtEr_Science.main_window.attr("alpha", drp_diSTinCtIon);
    function drp_ScRipT_KiDdo() {
      drp_ADa_LovElAce = 1;
      drp_compUtEr_Science.end.attr("visibility", "visible");
      drp_compUtEr_Science.start.attr("visibility", "gone");
    }
    drp_TENSorFlOw && ui.post(() => {
      drp_ScRipT_KiDdo();
    });
    function drp_NoTtiNGhAm() {
      drp_ADa_LovElAce = 0;
      drp_compUtEr_Science.end.attr("visibility", "gone");
      drp_compUtEr_Science.start.attr("visibility", "visible");
    }
    drp_compUtEr_Science.start.click(function () {
      drp_ScRipT_KiDdo();
      console.error("[状态] 辅助脚本启动");
      !drp_cOMPutEr_Science && (console.log("[提示] 如果脚本没反应，请重启hamibot和微信"), drp_cOMPutEr_Science = true);
    });
    drp_compUtEr_Science.end.click(function () {
      drp_NoTtiNGhAm();
      console.error("[状态] 辅助脚本停止");
    });
    drp_compUtEr_Science.move_start.click(function () {
      drp_compUtEr_Science.setAdjustEnabled(true);
      drp_compUtEr_Science.move_start.attr("visibility", "gone");
      drp_compUtEr_Science.move_end.attr("visibility", "visible");
    });
    drp_compUtEr_Science.move_end.click(function () {
      drp_compUtEr_Science.setAdjustEnabled(false);
      drp_compUtEr_Science.move_start.attr("visibility", "visible");
      drp_compUtEr_Science.move_end.attr("visibility", "gone");
      var pADdiNGtOn = drp_compUtEr_Science.getX();
      var mINd_tHE_gAp = drp_compUtEr_Science.getY();
      drp_nottInGhAm.put("floaty_position_x", pADdiNGtOn);
      drp_nottInGhAm.put("floaty_position_y", mINd_tHE_gAp);
      console.warn("[提示] 悬浮窗位置已记录");
    });
  }
  var drp_mind_ThE_gAp = null;
  var drp_CompUtEr_Science = false;
  function drp_MiND_ThE_gAp() {
    var cOMpuTEr_Science = {
      purchase_type: drp_TEnSorFlOw,
      purchase_count: drp_paDDinGtOn,
      specs: drp_miND_thE_gAp,
      refresh_delay: drp_scRIpt_KiDdo,
      enable_random_delay: drp_CoMPutEr_Science,
      extra_delay: drp_adA_LovElAce,
      ack_delay: drp_coMPutEr_Science,
      ignore_ack: drp_DeMOscEnE,
      special_confirm_delay: drp_PaDDinGtOn,
      ignore_ack_click_delay: drp_AdA_LovElAce,
      random_refresh_delay_lower: drp_deMOscEnE,
      random_refresh_delay_upper: drp_noTTinGhAm,
      max_refresh_time: drp_daRK_soUlS,
      rage_stock_refresh: drp_tENSorFlOw,
      vibrate_time: drp_MiND_thE_gAp,
      main_window_alpha: drp_diSTinCtIon,
      auto_click_notification: drp_teNSorFlOw,
      reset_floaty_position: drp_TeNSorFlOw,
      extra_selection_regex: drp_dISTinCtIon,
      payment_password: drp_nOTTinGhAm,
      shield_breaker_mode: drp_dARK_soUlS,
      panic_timer: drp_aDA_LovElAce
    };
    return cOMpuTEr_Science;
  }
  function drp_AdA_LOvElAce(SCRipT_KiDdo) {
    drp_TEnSorFlOw = SCRipT_KiDdo.purchase_type;
    drp_paDDinGtOn = SCRipT_KiDdo.purchase_count;
    drp_miND_thE_gAp = SCRipT_KiDdo.specs;
    drp_scRIpt_KiDdo = SCRipT_KiDdo.refresh_delay;
    drp_CoMPutEr_Science = SCRipT_KiDdo.enable_random_delay;
    drp_adA_LovElAce = SCRipT_KiDdo.extra_delay;
    drp_coMPutEr_Science = SCRipT_KiDdo.ack_delay;
    drp_DeMOscEnE = SCRipT_KiDdo.ignore_ack;
    drp_PaDDinGtOn = SCRipT_KiDdo.special_confirm_delay;
    drp_AdA_LovElAce = SCRipT_KiDdo.ignore_ack_click_delay;
    drp_deMOscEnE = SCRipT_KiDdo.random_refresh_delay_lower;
    drp_noTTinGhAm = SCRipT_KiDdo.random_refresh_delay_upper;
    drp_daRK_soUlS = SCRipT_KiDdo.max_refresh_time;
    drp_tENSorFlOw = SCRipT_KiDdo.rage_stock_refresh;
    drp_MiND_thE_gAp = SCRipT_KiDdo.vibrate_time;
    drp_diSTinCtIon = SCRipT_KiDdo.main_window_alpha;
    drp_teNSorFlOw = SCRipT_KiDdo.auto_click_notification;
    drp_TeNSorFlOw = SCRipT_KiDdo.reset_floaty_position;
    drp_dISTinCtIon = SCRipT_KiDdo.extra_selection_regex !== undefined ? SCRipT_KiDdo.extra_selection_regex : "";
    drp_nOTTinGhAm = SCRipT_KiDdo.payment_password !== undefined ? SCRipT_KiDdo.payment_password : "";
    drp_dARK_soUlS = SCRipT_KiDdo.shield_breaker_mode !== undefined ? SCRipT_KiDdo.shield_breaker_mode : false;
    drp_aDA_LovElAce = SCRipT_KiDdo.panic_timer !== undefined ? SCRipT_KiDdo.panic_timer : 0;
    drp_compUtEr_Science && drp_compUtEr_Science.main_window && drp_compUtEr_Science.main_window.attr("alpha", drp_diSTinCtIon);
  }
  function drp_ScRIPt_KiDdo(NOTtiNGhAm) {
    var comPuTEr_Science = drp_MiND_ThE_gAp();
    var disTiNCtIon = drp_sCRIPt_KiDdo(NOTtiNGhAm);
    drp_nottInGhAm.put("preset_" + NOTtiNGhAm, JSON.stringify(comPuTEr_Science));
    console.info("📁 配置已保存到 " + disTiNCtIon + " (槽位 " + NOTtiNGhAm + ")");
    toast("配置已保存到 " + disTiNCtIon);
  }
  function drp_CoMPUtEr_Science(padDiNGtOn) {
    var darK_sOUlS = drp_nottInGhAm.get("preset_" + padDiNGtOn);
    if (darK_sOUlS) {
      try {
        var MinD_tHE_gAp = JSON.parse(darK_sOUlS);
        var DisTiNCtIon = drp_sCRIPt_KiDdo(padDiNGtOn);
        drp_AdA_LOvElAce(MinD_tHE_gAp);
        drp_pADDInGtOn();
        console.info("📁 配置已从 " + DisTiNCtIon + " (槽位 " + padDiNGtOn + ") 加载");
        toast("配置已从 " + DisTiNCtIon + " 加载");
        return true;
      } catch (mInD_tHE_gAp) {
        {
          console.error("加载预设失败: " + mInD_tHE_gAp);
          toast("加载预设失败");
          return false;
        }
      }
    }
    return false;
  }
  function drp_NoTTInGhAm(sCrIpT_KiDdo) {
    var cOmPuTEr_Science = drp_nottInGhAm.get("preset_" + sCrIpT_KiDdo);
    return cOmPuTEr_Science && cOmPuTEr_Science.length > 0;
  }
  function drp_sCRIPt_KiDdo(dArK_sOUlS) {
    var dIsTiNCtIon = drp_nottInGhAm.get("preset_name_" + dArK_sOUlS);
    return dIsTiNCtIon || "预设 " + dArK_sOUlS;
  }
  function drp_aDA_LOvElAce(aDa_LoVElAce, dEmOsCEnE) {
    if (dEmOsCEnE && dEmOsCEnE.trim().length > 0) {
      drp_nottInGhAm.put("preset_name_" + aDa_LoVElAce, dEmOsCEnE.trim());
    } else {
      {
        drp_nottInGhAm.remove("preset_name_" + aDa_LoVElAce);
      }
    }
  }
  function drp_cOMPUtEr_Science(PAdDiNGtOn) {
    var DEmOsCEnE = drp_sCRIPt_KiDdo(PAdDiNGtOn);
    drp_nottInGhAm.remove("preset_" + PAdDiNGtOn);
    drp_nottInGhAm.remove("preset_name_" + PAdDiNGtOn);
    console.info("🗑️ 已删除预设: " + DEmOsCEnE + " (槽位 " + PAdDiNGtOn + ")");
    toast("已删除预设: " + DEmOsCEnE);
  }
  function drp_tENSOrFlOw() {
    drp_mIND_ThE_gAp();
    var scRIpT_KiDdo = [];
    for (var PaDDiNGtOn = 1; PaDDiNGtOn <= 5; PaDDiNGtOn++) {
      var AdA_LoVElAce = drp_NoTTInGhAm(PaDDiNGtOn);
      var CoMPuTEr_Science = drp_sCRIPt_KiDdo(PaDDiNGtOn);
      var MiND_tHE_gAp = AdA_LoVElAce ? " ✓" : " (空)";
      var ScRIpT_KiDdo = AdA_LoVElAce ? "📁" : "📂";
      scRIpT_KiDdo.push(ScRIpT_KiDdo + " " + CoMPuTEr_Science + MiND_tHE_gAp);
    }
    scRIpT_KiDdo.push("🔙 返回配置");
    dialogs.select("选择预设槽位", scRIpT_KiDdo).then(DiSTiNCtIon => {
      if (DiSTiNCtIon === -1) {
        drp_dISTInCtIon();
        return;
      }
      if (DiSTiNCtIon === 5) {
        drp_dISTInCtIon();
        return;
      }
      var aDA_LoVElAce = DiSTiNCtIon + 1;
      drp_dEMOScEnE(aDA_LoVElAce);
    });
  }
  function drp_dEMOScEnE(dEMOsCEnE) {
    var tENSoRFlOw = drp_NoTTInGhAm(dEMOsCEnE);
    var dISTiNCtIon = drp_sCRIPt_KiDdo(dEMOsCEnE);
    var nOTTiNGhAm = [];
    nOTTiNGhAm.push("💾 保存当前配置");
    nOTTiNGhAm.push("✏️ 重命名预设");
    tENSoRFlOw && (nOTTiNGhAm.push("📂 加载此预设"), nOTTiNGhAm.push("🗑️ 删除此预设"));
    nOTTiNGhAm.push("🔙 返回预设列表");
    var dARK_sOUlS = dISTiNCtIon + (tENSoRFlOw ? " ✓" : " (空)");
    dialogs.select(dARK_sOUlS, nOTTiNGhAm).then(tensORFlOw => {
      if (tensORFlOw === -1) {
        drp_tENSOrFlOw();
        return;
      }
      var nottINGhAm = nOTTiNGhAm[tensORFlOw];
      if (nottINGhAm === "💾 保存当前配置") {
        dialogs.confirm("确认保存", "确定要将当前配置保存到 " + dISTiNCtIon + " 吗？" + (tENSoRFlOw ? "\n\n⚠️ 这将覆盖现有配置" : "")).then(Mind_THE_gAp => {
          Mind_THE_gAp && drp_ScRIPt_KiDdo(dEMOsCEnE);
          drp_dISTInCtIon();
        });
      } else {
        if (nottINGhAm === "📂 加载此预设") {
          {
            dialogs.confirm("确认加载", "确定要加载 " + dISTiNCtIon + " 的配置吗？\n\n⚠️ 当前配置将被覆盖").then(TensORFlOw => {
              TensORFlOw && drp_CoMPUtEr_Science(dEMOsCEnE);
              drp_dISTInCtIon();
            });
          }
        } else {
          if (nottINGhAm === "✏️ 重命名预设") {
            {
              var mind_THE_gAp = drp_sCRIPt_KiDdo(dEMOsCEnE);
              var paddINGtOn = "预设 " + dEMOsCEnE;
              var compUTEr_Science = mind_THE_gAp === paddINGtOn ? "" : mind_THE_gAp;
              dialogs.rawInput("重命名预设（留空恢复默认）", compUTEr_Science, "").then(Ada_lOVElAce => {
                if (Ada_lOVElAce !== null) {
                  drp_aDA_LOvElAce(dEMOsCEnE, Ada_lOVElAce);
                  var pAddINGtOn = Ada_lOVElAce && Ada_lOVElAce.trim().length > 0 ? Ada_lOVElAce.trim() : paddINGtOn;
                  console.info("📝 预设 " + dEMOsCEnE + " 已重命名为: " + pAddINGtOn);
                  toast("预设已重命名为: " + pAddINGtOn);
                }
                drp_dEMOScEnE(dEMOsCEnE);
              });
            }
          } else {
            nottINGhAm === "🗑️ 删除此预设" ? dialogs.confirm("确认删除", "确定要删除 " + dISTiNCtIon + " 吗？\n\n⚠️ 此操作不可恢复").then(tEnsORFlOw => {
              tEnsORFlOw && drp_cOMPUtEr_Science(dEMOsCEnE);
              drp_tENSOrFlOw();
            }) : drp_tENSOrFlOw();
          }
        }
      }
    });
  }
  function drp_nOTTInGhAm() {
    try {
      drp_mind_ThE_gAp = drp_PaDdinGtOn;
      if (!drp_mind_ThE_gAp) {
        {
          return;
        }
      }
      drp_mind_ThE_gAp.setPosition(-10000, -10000);
      drp_mind_ThE_gAp.setTouchable(false);
      drp_CompUtEr_Science = false;
    } catch (MiNd_THE_gAp) {
      {
        log("Error creating config window: " + MiNd_THE_gAp);
        drp_mind_ThE_gAp = null;
        return;
      }
    }
    drp_mind_ThE_gAp.ignore_ack_config.click(function () {
      drp_DeMOscEnE = !drp_DeMOscEnE;
      console.info("🚫 特殊刷回流模式已设置为: ", drp_DeMOscEnE ? "开启" : "关闭");
      drp_pADDInGtOn();
    });
    drp_mind_ThE_gAp.delivery_type_config.click(function () {
      drp_mIND_ThE_gAp();
      dialogs.select("请选择配送方案", ["送到家", "到店取", "来回刷", "来回刷（到店取）", "来回刷（送到家）"]).then(dIStINCtIon => {
        if (dIStINCtIon !== -1) {
          switch (dIStINCtIon) {
            case 0:
              drp_TEnSorFlOw = "送到家";
              break;
            case 1:
              drp_TEnSorFlOw = "到店取";
              break;
            case 2:
              drp_TEnSorFlOw = "来回刷";
              break;
            case 3:
              drp_TEnSorFlOw = "来回刷（到店取）";
              break;
            case 4:
              drp_TEnSorFlOw = "来回刷（送到家）";
              break;
          }
          console.info("配送方案已设置为: ", drp_TEnSorFlOw);
          drp_pADDInGtOn();
        }
        drp_dISTInCtIon();
      });
    });
    drp_mind_ThE_gAp.delivery_number_config.click(function () {
      drp_mIND_ThE_gAp();
      const pADdINGtOn = ["1", "2", "手动输入"];
      dialogs.singleChoice("请选择购买数量", pADdINGtOn).then(TENsORFlOw => {
        TENsORFlOw === 2 ? dialogs.rawInput("请输入购买数量", drp_paDDinGtOn).then(NOTtINGhAm => {
          if (parseInt(NOTtINGhAm) > 0) {
            {
              drp_paDDinGtOn = parseInt(NOTtINGhAm);
              console.info("购买数量已设置为: ", drp_paDDinGtOn);
              drp_pADDInGtOn();
            }
          } else {
            {
              console.info("请输入正整数, [", NOTtINGhAm, "]不符合规范");
            }
          }
          drp_dISTInCtIon();
        }) : (drp_paDDinGtOn = TENsORFlOw + 1, console.info("购买数量已设置为: ", drp_paDDinGtOn), drp_pADDInGtOn(), drp_dISTInCtIon());
      });
    });
    drp_mind_ThE_gAp.specs_config.click(function () {
      drp_mIND_ThE_gAp();
      dialogs.select("请选择规格", ["单个", "整盒"]).then(comPUTEr_Science => {
        comPUTEr_Science !== -1 && (drp_miND_thE_gAp = comPUTEr_Science === 0 ? "单个" : "整盒", console.info("规格已设置为: ", drp_miND_thE_gAp), drp_pADDInGtOn());
        drp_dISTInCtIon();
      });
    });
    drp_mind_ThE_gAp.refresh_delay_config.click(function () {
      drp_mIND_ThE_gAp();
      dialogs.rawInput("请输入库存刷新延迟 (毫秒)", drp_scRIpt_KiDdo).then(PadDINGtOn => {
        var nOtTINGhAm = parseInt(PadDINGtOn);
        if (nOtTINGhAm >= 0) {
          if (drp_dArK_soUlS) {
            drp_scRIpt_KiDdo = 1000;
            console.log("🚫 试用期不支持修改库存刷新延迟");
          } else {
            drp_scRIpt_KiDdo = nOtTINGhAm;
            console.info("⏱️ 库存刷新延迟已设置为: ", drp_scRIpt_KiDdo + "ms");
          }
          drp_pADDInGtOn();
        } else {
          console.info("请输入非负整数");
        }
        drp_dISTInCtIon();
      });
    });
    drp_mind_ThE_gAp.enable_random_delay_config.click(function () {
      drp_CoMPutEr_Science = !drp_CoMPutEr_Science;
      console.info("🎲 启用额外随机库存刷新间隔已设置为: ", drp_CoMPutEr_Science ? "开启" : "关闭");
      drp_pADDInGtOn();
    });
    drp_mind_ThE_gAp.extra_delay_config.click(function () {
      drp_mIND_ThE_gAp();
      dialogs.rawInput("请输入主动操作延迟 (毫秒)", drp_adA_LovElAce).then(dIsTINCtIon => {
        {
          var cOmPUTEr_Science = parseInt(dIsTINCtIon);
          cOmPUTEr_Science >= 0 ? (drp_adA_LovElAce = cOmPUTEr_Science, console.info("主动操作延迟已设置为: ", drp_adA_LovElAce + "ms"), drp_pADDInGtOn()) : console.info("请输入非负整数");
          drp_dISTInCtIon();
        }
      });
    });
    drp_mind_ThE_gAp.ack_delay_config.click(function () {
      drp_mIND_ThE_gAp();
      dialogs.rawInput("请输入点击[我知道了]后等待的延迟 (毫秒)", drp_coMPutEr_Science).then(PAdDINGtOn => {
        var SCrIPT_KiDdo = parseInt(PAdDINGtOn);
        SCrIPT_KiDdo >= 0 ? (drp_coMPutEr_Science = SCrIPT_KiDdo, console.info("✅ 点击[我知道了]后等待的延迟已设置为: ", drp_coMPutEr_Science + "ms"), drp_pADDInGtOn()) : console.info("请输入非负整数");
        drp_dISTInCtIon();
      });
    });
    drp_mind_ThE_gAp.special_confirm_delay_config.click(function () {
      drp_mIND_ThE_gAp();
      dialogs.rawInput("请输入特殊刷回流点击确认延迟 (毫秒)", drp_PaDDinGtOn).then(DIsTINCtIon => {
        var TEnSORFlOw = parseInt(DIsTINCtIon);
        if (TEnSORFlOw >= 0) {
          {
            drp_PaDDinGtOn = TEnSORFlOw;
            console.info("⭐ 特殊刷回流点击确认延迟已设置为: ", drp_PaDDinGtOn + "ms");
            drp_pADDInGtOn();
          }
        } else {
          console.info("请输入非负整数");
        }
        drp_dISTInCtIon();
      });
    });
    drp_mind_ThE_gAp.ignore_ack_click_delay_config.click(function () {
      drp_mIND_ThE_gAp();
      dialogs.rawInput("请输入特殊刷回流点击延迟 (毫秒)", drp_AdA_LovElAce).then(teNSORFlOw => {
        var scRIPT_KiDdo = parseInt(teNSORFlOw);
        scRIPT_KiDdo >= 0 ? (drp_AdA_LovElAce = scRIPT_KiDdo, console.info("⏰ 特殊刷回流点击延迟已设置为: ", drp_AdA_LovElAce + "ms"), drp_pADDInGtOn()) : console.info("请输入非负整数");
        drp_dISTInCtIon();
      });
    });
    drp_mind_ThE_gAp.random_delay_lower_config.click(function () {
      {
        drp_mIND_ThE_gAp();
        dialogs.rawInput("请输入随机延迟下限 (毫秒)", drp_deMOscEnE).then(deMOSCEnE => {
          var DiSTINCtIon = parseInt(deMOSCEnE);
          if (DiSTINCtIon >= 1) {
            {
              drp_deMOscEnE = DiSTINCtIon;
              console.info("⬇️ 随机延迟下限已设置为: ", drp_deMOscEnE + "ms");
              drp_pADDInGtOn();
            }
          } else {
            console.info("请输入大于0的整数");
          }
          drp_dISTInCtIon();
        });
      }
    });
    drp_mind_ThE_gAp.random_delay_upper_config.click(function () {
      drp_mIND_ThE_gAp();
      dialogs.rawInput("请输入随机延迟上限 (毫秒)", drp_noTTinGhAm).then(PaDDINGtOn => {
        var dARK_SOUlS = parseInt(PaDDINGtOn);
        dARK_SOUlS >= 1 ? (drp_noTTinGhAm = dARK_SOUlS, console.info("⬆️ 随机延迟上限已设置为: ", drp_noTTinGhAm + "ms"), drp_pADDInGtOn()) : console.info("请输入大于0的整数");
        drp_dISTInCtIon();
      });
    });
    drp_mind_ThE_gAp.max_refresh_time_config.click(function () {
      drp_mIND_ThE_gAp();
      dialogs.rawInput("请输入最大刷新时间 (分钟)", drp_daRK_soUlS).then(cOMPUTEr_Science => {
        {
          var aDA_LOVElAce = parseFloat(cOMPUTEr_Science);
          aDA_LOVElAce >= 0 ? (drp_daRK_soUlS = aDA_LOVElAce, console.info("最大刷新时间已设置为: ", drp_daRK_soUlS + "分钟"), drp_pADDInGtOn()) : console.info("请输入非负数");
          drp_dISTInCtIon();
        }
      });
    });
    drp_mind_ThE_gAp.rage_stock_refresh_config.click(function () {
      drp_tENSorFlOw = !drp_tENSorFlOw;
      console.info("⚡ 狂暴库存刷新模式已设置为: ", drp_tENSorFlOw ? "开启" : "关闭");
      drp_pADDInGtOn();
    });
    drp_mind_ThE_gAp.vibrate_time_config.click(function () {
      drp_mIND_ThE_gAp();
      dialogs.rawInput("请输入抢购成功振动时长 (毫秒)", drp_MiND_thE_gAp).then(DARK_SOUlS => {
        var TENSORFlOw = parseInt(DARK_SOUlS);
        if (TENSORFlOw >= 0) {
          drp_MiND_thE_gAp = TENSORFlOw;
          console.info("抢购成功振动时长已设置为: ", drp_MiND_thE_gAp + "ms");
          drp_pADDInGtOn();
        } else {
          console.info("请输入非负整数");
        }
        drp_dISTInCtIon();
      });
    });
    drp_mind_ThE_gAp.main_window_alpha_config.click(function () {
      drp_mIND_ThE_gAp();
      dialogs.rawInput("请输入窗口透明度 (0.0-1.0)", drp_diSTinCtIon).then(nottingHAm => {
        var tensorfLOw = parseFloat(nottingHAm);
        tensorfLOw >= 0 && tensorfLOw <= 1 ? (drp_diSTinCtIon = tensorfLOw, drp_compUtEr_Science.main_window.attr("alpha", drp_diSTinCtIon), console.info("🔍 窗口透明度已设置为: ", drp_diSTinCtIon), drp_pADDInGtOn()) : console.info("请输入0.0到1.0之间的数值");
        drp_dISTInCtIon();
      });
    });
    drp_mind_ThE_gAp.auto_click_notification_config.click(function () {
      drp_teNSorFlOw = !drp_teNSorFlOw;
      console.info("🔔 自动点击到货通知已设置为: ", drp_teNSorFlOw ? "开启" : "关闭");
      drp_pADDInGtOn();
    });
    drp_mind_ThE_gAp.reset_floaty_position_config.click(function () {
      drp_TeNSorFlOw = !drp_TeNSorFlOw;
      console.info("🔄 重置悬浮窗位置已设置为: ", drp_TeNSorFlOw ? "开启" : "关闭");
      drp_pADDInGtOn();
    });
    drp_mind_ThE_gAp.extra_selection_regex_config.click(function () {
      drp_mIND_ThE_gAp();
      dialogs.rawInput("请输入额外选择规则 (支持 | 或 ｜ 分隔，如: A组|7.29｜黑)", drp_dISTinCtIon || "").then(ada_loveLAce => {
        {
          ada_loveLAce !== null && (drp_dISTinCtIon = ada_loveLAce.trim(), drp_dISTinCtIon.length > 0 ? console.info("🔤 额外选择规则已设置为: ", drp_dISTinCtIon) : console.info("🔤 额外选择规则已清空"), drp_pADDInGtOn());
          drp_dISTInCtIon();
        }
      });
    });
    drp_mind_ThE_gAp.shield_breaker_mode_config.click(function () {
      drp_dARK_soUlS = !drp_dARK_soUlS;
      console.info("🛡️ 破盾模式已设置为: ", drp_dARK_soUlS ? "开启" : "关闭");
      drp_pADDInGtOn();
    });
    drp_mind_ThE_gAp.ignore_ack_panic_timer_config.click(function () {
      drp_mIND_ThE_gAp();
      dialogs.rawInput("请输入自动关闭特殊刷回流时间 (秒，0表示关闭)", drp_DARK_soUlS).then(Script_kIDdo => {
        var DistincTIon = parseInt(Script_kIDdo);
        DistincTIon >= 0 ? (drp_DARK_soUlS = DistincTIon, drp_DARK_soUlS > 0 ? console.info("⏰ 自动关闭特殊刷回流时间已设置为: ", drp_DARK_soUlS + "秒") : console.info("⏰ 自动关闭特殊刷回流已关闭"), drp_pADDInGtOn()) : console.info("请输入非负整数");
        drp_dISTInCtIon();
      });
    });
    drp_mind_ThE_gAp.panic_timer_config.click(function () {
      drp_mIND_ThE_gAp();
      dialogs.rawInput("请输入自动关闭破盾模式时间 (秒，0表示关闭)", drp_aDA_LovElAce).then(ComputeR_Science => {
        {
          var Dark_souLS = parseInt(ComputeR_Science);
          if (Dark_souLS >= 0) {
            {
              drp_aDA_LovElAce = Dark_souLS;
              if (drp_aDA_LovElAce > 0) {
                console.info("⏰ 自动关闭破盾模式时间已设置为: ", drp_aDA_LovElAce + "秒");
              } else {
                {
                  console.info("⏰ 自动关闭破盾模式已关闭");
                }
              }
              drp_pADDInGtOn();
            }
          } else {
            console.info("请输入非负整数");
          }
          drp_dISTInCtIon();
        }
      });
    });
    drp_mind_ThE_gAp.payment_password_config.click(function () {
      drp_mIND_ThE_gAp();
      dialogs.rawInput("请输入6位支付密码", drp_nOTTinGhAm || "").then(nOttingHAm => {
        {
          if (nOttingHAm !== null) {
            let DArk_souLS = nOttingHAm.trim();
            DArk_souLS.length === 6 && /^\d{6}$/.test(DArk_souLS) ? (drp_nOTTinGhAm = DArk_souLS, console.info("🔒 支付密码已设置为: ", drp_nOTTinGhAm), drp_pADDInGtOn()) : (console.error("❌ 支付密码必须是6位数字，请重新输入"), dialogs.alert("密码格式错误", "支付密码必须是6位数字，请重新设置"));
          }
          drp_dISTInCtIon();
        }
      });
    });
    drp_mind_ThE_gAp.close_config.click(function () {
      drp_mIND_ThE_gAp();
    });
    drp_mind_ThE_gAp.preset_config.click(function () {
      drp_tENSOrFlOw();
    });
    return drp_mind_ThE_gAp;
  }
  function drp_dISTInCtIon() {
    if (drp_mind_ThE_gAp && !drp_CompUtEr_Science) {
      try {
        drp_pADDInGtOn();
        ui.post(() => {
          var coMputeR_Science = Math.floor(device.width * 0.8) + "px";
          var adA_loveLAce = Math.floor(device.height * 0.8) + "px";
          drp_mind_ThE_gAp.config_main.attr("w", coMputeR_Science);
          drp_mind_ThE_gAp.config_main.attr("h", adA_loveLAce);
          var coMputeR_Science = device.width * 0.8 || device.width * 0.8;
          var adA_loveLAce = device.height * 0.8 || device.height * 0.8;
          var daRk_souLS = Math.floor(device.width / 2 - coMputeR_Science / 2);
          var paDdingTOn = Math.floor(device.height / 2 - adA_loveLAce / 2);
          drp_mind_ThE_gAp.setPosition(daRk_souLS, paDdingTOn);
          drp_mind_ThE_gAp.setTouchable(true);
          drp_CompUtEr_Science = true;
        });
      } catch (noTtingHAm) {
        log("Error showing config window: " + noTtingHAm);
      }
    }
  }
  function drp_mIND_ThE_gAp() {
    if (drp_mind_ThE_gAp && drp_CompUtEr_Science) {
      try {
        ui.post(() => {
          drp_mind_ThE_gAp.setPosition(-10000, -10000);
          drp_mind_ThE_gAp.setTouchable(false);
          drp_CompUtEr_Science = false;
        });
      } catch (DaRk_souLS) {
        log("Error hiding config window: " + DaRk_souLS);
      }
    }
  }
  function drp_dARK_SoUlS() {
    try {
      drp_CompUtEr_Science ? drp_mIND_ThE_gAp() : drp_dISTInCtIon();
    } catch (nOTtingHAm) {
      log("Error toggling config window: " + nOTtingHAm);
    }
  }
  function drp_pADDInGtOn() {
    if (drp_mind_ThE_gAp) {
      if (drp_DISTinCtIon != 200) {
        return;
      }
      try {
        drp_mind_ThE_gAp.delivery_type_config.setText("🚚 配送方式: " + (drp_TEnSorFlOw || "到店取"));
        drp_mind_ThE_gAp.delivery_number_config.setText("📦 配送数量: " + (drp_paDDinGtOn || 1));
        drp_mind_ThE_gAp.specs_config.setText("📏 规格: " + (drp_miND_thE_gAp || "单个"));
        drp_mind_ThE_gAp.refresh_delay_config.setText("⏱️ 库存刷新刷新延迟: " + drp_scRIpt_KiDdo + "ms");
        drp_mind_ThE_gAp.enable_random_delay_config.setText("🎲 启用额外随机库存刷新间隔: " + (drp_CoMPutEr_Science ? "开启" : "关闭"));
        drp_mind_ThE_gAp.extra_delay_config.setText("⏰ 主动操作延迟: " + drp_adA_LovElAce + "ms");
        drp_mind_ThE_gAp.ack_delay_config.setText("✅ 点击[我知道了]后等待的延迟: " + drp_coMPutEr_Science + "ms");
        drp_mind_ThE_gAp.ignore_ack_config.setText("🚫 特殊刷回流模式(不点击我知道了): " + (drp_DeMOscEnE ? "开启" : "关闭"));
        drp_mind_ThE_gAp.special_confirm_delay_config.setText("⭐ 特殊刷回流点击确认延迟: " + drp_PaDDinGtOn + "ms");
        drp_mind_ThE_gAp.ignore_ack_click_delay_config.setText("⏰ 特殊刷回流点击延迟: " + drp_AdA_LovElAce + "ms");
        drp_mind_ThE_gAp.random_delay_lower_config.setText("⬇️ 随机延迟下限: " + drp_deMOscEnE + "ms");
        drp_mind_ThE_gAp.random_delay_upper_config.setText("⬆️ 随机延迟上限: " + drp_noTTinGhAm + "ms");
        drp_mind_ThE_gAp.max_refresh_time_config.setText("⌛ 最大刷新时间: " + drp_daRK_soUlS + "分钟");
        drp_mind_ThE_gAp.rage_stock_refresh_config.setText("⚡ 狂暴库存刷新模式: " + (drp_tENSorFlOw ? "开启" : "关闭"));
        drp_mind_ThE_gAp.vibrate_time_config.setText("📳 抢购成功振动时长: " + drp_MiND_thE_gAp + "ms");
        drp_mind_ThE_gAp.main_window_alpha_config.setText("🔍 窗口透明度: " + drp_diSTinCtIon);
        drp_mind_ThE_gAp.auto_click_notification_config.setText("🔔 自动点击到货通知: " + (drp_teNSorFlOw ? "开启" : "关闭"));
        drp_mind_ThE_gAp.reset_floaty_position_config.setText("🔄 重置悬浮窗位置: " + (drp_TeNSorFlOw ? "开启" : "关闭"));
        drp_mind_ThE_gAp.extra_selection_regex_config.setText("🔤 额外选择规则: " + (drp_dISTinCtIon || "未设置"));
        drp_mind_ThE_gAp.shield_breaker_mode_config.setText("🛡️ 破盾模式: " + (drp_dARK_soUlS ? "开启" : "关闭"));
        drp_mind_ThE_gAp.ignore_ack_panic_timer_config.setText("⏰ 自动关闭特殊刷回流: " + (drp_DARK_soUlS > 0 ? drp_DARK_soUlS + "秒" : "关闭"));
        drp_mind_ThE_gAp.panic_timer_config.setText("⏰ 自动关闭破盾模式: " + (drp_aDA_LovElAce > 0 ? drp_aDA_LovElAce + "秒" : "关闭"));
        drp_mind_ThE_gAp.payment_password_config.setText("🔒 支付密码: " + (drp_nOTTinGhAm || "未设置"));
      } catch (TENsorfLOw) {
        log("Error updating config window: " + TENsorfLOw);
      }
    }
  }
  !drp_dEMOscEnE && drp_compUtEr_Science.config_settings.click(function () {
    ui.post(() => {
      {
        try {
          if (!drp_mind_ThE_gAp) {
            drp_mind_ThE_gAp = drp_nOTTInGhAm();
            drp_pADDInGtOn();
            var comPuteR_Science = String(device.width * 0.8) + "px";
            var minD_the_GAp = String(device.height * 0.8) + "px";
            drp_mind_ThE_gAp.config_main.attr("w", comPuteR_Science);
            drp_mind_ThE_gAp.config_main.attr("h", minD_the_GAp);
            sleep(500);
          }
          drp_dARK_SoUlS();
        } catch (darK_souLS) {
          log("Error in config button click: " + darK_souLS);
        }
      }
    });
  });
  var drp_tensOrFlOw = drp_nottInGhAm.get("floaty_position_x");
  var drp_paddInGtOn = drp_nottInGhAm.get("floaty_position_y");
  var drp_demoScEnE = device.width / 2 + 100;
  var drp_scriPt_KiDdo = drp_compUtEr_Science.getY() + 100;
  typeof drp_tensOrFlOw === "number" && typeof drp_paddInGtOn === "number" && drp_tensOrFlOw >= 0 && drp_tensOrFlOw + 100 <= device.width && !drp_TeNSorFlOw ? (console.warn("[提示] 悬浮窗位置已读取"), drp_compUtEr_Science.setPosition(drp_tensOrFlOw, drp_paddInGtOn)) : (console.warn("[提示] 已使用默认悬浮窗位置"), drp_compUtEr_Science.setPosition(drp_demoScEnE, drp_scriPt_KiDdo));
  var drp_mind_ThE_gAp = drp_nOTTInGhAm();
}
function drp_PaddInGtOn() {
  var DisTincTIon = className("android.widget.TextView").text("到货通知").findOne(50);
  DisTincTIon && (console.warn("[操作] 已点击到货通知按钮"), DisTincTIon.click());
}
function drp_DemoScEnE(Ada_LoveLAce, TenSorfLOw) {
  let NotTingHAm = Ada_LoveLAce;
  let DarK_souLS = 0;
  while (NotTingHAm != null && DarK_souLS < TenSorfLOw) {
    try {
      NotTingHAm = NotTingHAm.child(0);
    } catch (mInD_the_GAp) {
      {
        log("Exception at level " + DarK_souLS + ": " + mInD_the_GAp);
        return null;
      }
    }
    DarK_souLS++;
  }
  return NotTingHAm;
}
function drp_DistInCtIon(sCrIpt_kIDdo) {
  var NOtTingHAm = null;
  var ADa_LoveLAce = sCrIpt_kIDdo;
  for (var MInD_the_GAp = 0; MInD_the_GAp < 13; MInD_the_GAp++) {
    if (ADa_LoveLAce == null) {
      break;
    }
    ADa_LoveLAce.className() === "android.widget.RelativeLayout" && (NOtTingHAm = ADa_LoveLAce);
    ADa_LoveLAce && (ADa_LoveLAce = ADa_LoveLAce.parent());
  }
  drp_DISTinCtIon + 1 != 201 && drp_dEMoscEnE();
  if (NOtTingHAm != null) {
    ADa_LoveLAce = NOtTingHAm;
    for (var MInD_the_GAp = 0; MInD_the_GAp < 2; MInD_the_GAp++) {
      if (ADa_LoveLAce == null) {
        break;
      }
      ADa_LoveLAce = ADa_LoveLAce.parent();
    }
    if (ADa_LoveLAce != null) {
      let noTTingHAm = ADa_LoveLAce.bounds();
    } else {
      log("Top node is null after going up 3 parents.");
    }
  } else {
    log("No RelativeLayout found in 13 levels.");
  }
  return ADa_LoveLAce;
}
function drp_NottInGhAm(daRK_souLS) {
  if (!daRK_souLS) {
    return "no_header";
  }
  if (daRK_souLS.childCount() === 0) {
    return "no_header";
  }
  var teNSorfLOw = daRK_souLS.child(0);
  if (!teNSorfLOw) {
    return "no_header";
  }
  if (teNSorfLOw.className() !== "android.widget.RelativeLayout") {
    return "no_header";
  }
  var adA_LoveLAce = teNSorfLOw.children();
  if (!adA_LoveLAce || adA_LoveLAce.length === 0) {
    return "";
  }
  var miND_the_GAp = 0;
  var CoMPuteR_Science = adA_LoveLAce[0];
  for (var ScRIpt_kIDdo = 0; ScRIpt_kIDdo < adA_LoveLAce.length; ScRIpt_kIDdo++) {
    {
      var DaRK_souLS = adA_LoveLAce[ScRIpt_kIDdo];
      var DeMOsceNE = DaRK_souLS ? DaRK_souLS.drawingOrder() : 0;
      DeMOsceNE > miND_the_GAp && DaRK_souLS.childCount() != 0 && (miND_the_GAp = DeMOsceNE, CoMPuteR_Science = DaRK_souLS);
    }
  }
  if (!CoMPuteR_Science) {
    return "";
  }
  var PaDDingTOn = CoMPuteR_Science && CoMPuteR_Science.childCount() > 0 ? CoMPuteR_Science.child(0) : null;
  if (!PaDDingTOn) {
    return "";
  }
  var TeNSorfLOw = PaDDingTOn.findOne(className("android.widget.TextView").algorithm("BFS"));
  if (!TeNSorfLOw) {
    {
      return "";
    }
  }
  return TeNSorfLOw.text();
}
function drp_TensOrFlOw() {
  var pADDingTOn = className("android.widget.RelativeLayout").algorithm("BFS").findOne(100);
  if (!pADDingTOn) {
    return null;
  }
  if (!pADDingTOn.parent()) {
    return null;
  }
  var dARK_souLS = pADDingTOn.parent();
  if (!dARK_souLS) {
    return null;
  }
  if (!dARK_souLS.parent()) {
    return null;
  }
  pADDingTOn = dARK_souLS.parent();
  return pADDingTOn;
}
function drp_Dark_SoUlS(COMPuteR_Science) {
  var DEMOsceNE = COMPuteR_Science.bounds();
  var TENSorfLOw = DEMOsceNE.centerX();
  var NOTTingHAm = DEMOsceNE.centerY();
  click(TENSorfLOw, NOTTingHAm);
}
function drp_Mind_ThE_gAp() {
  if (drp_mInd_ThE_gAp == -1 || drp_aDa_lOvElAce == -1) {
    return;
  }
  click(drp_mInd_ThE_gAp, drp_aDa_lOvElAce);
  sleep(200);
}
function drp_Ada_lOvElAce(demoSceNE) {
  if (drp_mInd_ThE_gAp != -1 && drp_aDa_lOvElAce != -1) {
    return;
  }
  var tensOrfLOw = demoSceNE.bounds();
  var mind_The_GAp = device.width;
  var compUteR_Science = device.height;
  var DemoSceNE = tensOrfLOw.centerX();
  var Dark_SouLS = tensOrfLOw.centerY();
  if (DemoSceNE < 0 || DemoSceNE > mind_The_GAp || Dark_SouLS < 0 || Dark_SouLS > compUteR_Science) {
    return;
  }
  drp_mInd_ThE_gAp = DemoSceNE;
  drp_aDa_lOvElAce = Dark_SouLS;
  var CompUteR_Science = storages.create("DRP");
  CompUteR_Science.put("unstuck_cap_btn_x", drp_mInd_ThE_gAp);
  CompUteR_Science.put("unstuck_cap_btn_y", drp_aDa_lOvElAce);
}
function drp_ScriPt_KiDdo() {
  var dIstIncTIon = storages.create("DRP");
  drp_mInd_ThE_gAp = dIstIncTIon.get("unstuck_cap_btn_x", -1);
  drp_aDa_lOvElAce = dIstIncTIon.get("unstuck_cap_btn_y", -1);
  if (drp_mInd_ThE_gAp != -1 && drp_aDa_lOvElAce != -1) {
    return;
  }
  drp_mInd_ThE_gAp = -1;
  drp_aDa_lOvElAce = -1;
}
var drp_mInd_ThE_gAp = -1;
var drp_aDa_lOvElAce = -1;
drp_ScriPt_KiDdo();
function drp_sCriPt_KiDdo(sCriPt_kIDdo) {
  var dArk_SouLS = sCriPt_kIDdo.childCount();
  if (dArk_SouLS == 0) {
    return null;
  }
  if (drp_demOscEnE) {
    {
      console.error("webview_count: " + sCriPt_kIDdo.childCount());
    }
  }
  var mInd_The_GAp = 0;
  var dEmoSceNE = dArk_SouLS - 1;
  var aDa_lOveLAce = false;
  for (var DArk_SouLS = 0; DArk_SouLS < dArk_SouLS; DArk_SouLS++) {
    var SCriPt_kIDdo = sCriPt_kIDdo.child(DArk_SouLS);
    var MInd_The_GAp = drp_NottInGhAm(SCriPt_kIDdo);
    var DEmoSceNE = SCriPt_kIDdo ? SCriPt_kIDdo.drawingOrder() : 0;
    if (DEmoSceNE === 0) {
      aDa_lOveLAce = true;
      break;
    }
    DEmoSceNE > mInd_The_GAp && (mInd_The_GAp = DEmoSceNE, dEmoSceNE = DArk_SouLS);
  }
  if (aDa_lOveLAce) {
    return sCriPt_kIDdo.child(dArk_SouLS - 1);
  }
  return sCriPt_kIDdo.child(dEmoSceNE);
}
function drp_pAddInGtOn(adA_lOveLAce) {
  return adA_lOveLAce.findOne(className("android.webkit.WebView").algorithm("DFS")) || null;
}
function drp_dEmoScEnE(AdA_lOveLAce) {
  if (!AdA_lOveLAce) {
    return null;
  }
  if (AdA_lOveLAce.childCount() < 1) {
    return null;
  }
  var CoMpUteR_Science = AdA_lOveLAce.child(0);
  if (!CoMpUteR_Science) {
    return null;
  }
  if (CoMpUteR_Science.className() !== "android.widget.RelativeLayout") {
    return null;
  }
  var NoTtIngHAm = null;
  var DeMoSceNE = Number.MAX_VALUE;
  var TeNsOrfLOw = CoMpUteR_Science.childCount();
  for (var DaRk_SouLS = 0; DaRk_SouLS < TeNsOrfLOw; DaRk_SouLS++) {
    var PaDdIngTOn = CoMpUteR_Science.child(DaRk_SouLS);
    if (!PaDdIngTOn) {
      continue;
    }
    var aDA_lOveLAce = PaDdIngTOn.drawingOrder();
    aDA_lOveLAce < DeMoSceNE && (DeMoSceNE = aDA_lOveLAce, NoTtIngHAm = PaDdIngTOn);
  }
  if (!NoTtIngHAm) {
    return null;
  }
  if (NoTtIngHAm.childCount() < 1) {
    return null;
  }
  var dEMoSceNE = NoTtIngHAm.child(0);
  if (!dEMoSceNE) {
    return null;
  }
  var dARk_SouLS = null;
  var nOTtIngHAm = dEMoSceNE.childCount();
  for (var DaRk_SouLS = 0; DaRk_SouLS < nOTtIngHAm; DaRk_SouLS++) {
    var PaDdIngTOn = dEMoSceNE.child(DaRk_SouLS);
    if (!PaDdIngTOn) {
      continue;
    }
    if (PaDdIngTOn.drawingOrder() === 2) {
      dARk_SouLS = PaDdIngTOn;
      break;
    }
  }
  if (!dARk_SouLS) {
    return null;
  }
  var cOMpUteR_Science = dARk_SouLS.child(0);
  if (!cOMpUteR_Science || cOMpUteR_Science.childCount() < 1) {
    return null;
  }
  cOMpUteR_Science = cOMpUteR_Science.child(0);
  if (!cOMpUteR_Science || cOMpUteR_Science.childCount() < 1) {
    return null;
  }
  cOMpUteR_Science = cOMpUteR_Science.child(0);
  if (!cOMpUteR_Science || cOMpUteR_Science.childCount() < 1) {
    return null;
  }
  cOMpUteR_Science = cOMpUteR_Science.child(0);
  if (!cOMpUteR_Science) {
    return null;
  }
  var tENsOrfLOw = null;
  var sCRiPt_kIDdo = cOMpUteR_Science.childCount();
  for (var DaRk_SouLS = 0; DaRk_SouLS < sCRiPt_kIDdo; DaRk_SouLS++) {
    var PaDdIngTOn = cOMpUteR_Science.child(DaRk_SouLS);
    if (!PaDdIngTOn) {
      continue;
    }
    if (PaDdIngTOn.drawingOrder() === 0) {
      tENsOrfLOw = PaDdIngTOn;
      break;
    }
  }
  if (!tENsOrfLOw) {
    {
      return null;
    }
  }
  if (tENsOrfLOw.childCount() < 1) {
    return null;
  }
  var mINd_The_GAp = tENsOrfLOw.child(0);
  if (!mINd_The_GAp) {
    return null;
  }
  if (mINd_The_GAp.className() === "android.webkit.WebView") {
    return mINd_The_GAp;
  }
  return null;
}
function drp_nOttInGhAm(DEMoSceNE, MINd_The_GAp) {
  if (!MINd_The_GAp) {
    {
      var tenSOrfLOw = {
        header: DEMoSceNE,
        status: "no_webview"
      };
      return tenSOrfLOw;
    }
  }
  if (drp_DISTinCtIon != 200) {
    {
      return;
    }
  }
  if (DEMoSceNE === "确认订单" || DEMoSceNE === "访问异常，请稍后重试") {
    var demOSceNE = {
      header: DEMoSceNE,
      status: "confirm_and_pay"
    };
    return demOSceNE;
  } else {
    if (DEMoSceNE == "" || DEMoSceNE != "no_header") {
      var notTIngHAm = Date.now();
      var scrIPt_kIDdo = drp_dArk_SoUlS(MINd_The_GAp);
      if (scrIPt_kIDdo) {
        var ada_LOveLAce = {
          header: DEMoSceNE,
          status: "purchase"
        };
        return ada_LOveLAce;
      }
      var minD_The_GAp = drp_cOmpUtEr_Science(MINd_The_GAp);
      if (minD_The_GAp && minD_The_GAp.text() == "立即购买") {
        {
          var padDIngTOn = {
            header: DEMoSceNE,
            status: "info_page"
          };
          return padDIngTOn;
        }
      } else {
        if (minD_The_GAp && (minD_The_GAp.text().startsWith("距开售还剩") || minD_The_GAp.text() == "参与抢购")) {
          var comPUteR_Science = {
            header: DEMoSceNE,
            status: "preorder"
          };
          return comPUteR_Science;
        }
      }
      var ComPUteR_Science = MINd_The_GAp.findOne(textStartsWith("继续等待"));
      if (ComPUteR_Science) {
        var DarK_SouLS = {
          header: DEMoSceNE,
          status: "keep_waiting"
        };
        return DarK_SouLS;
      }
      var DemOSceNE = {
        header: DEMoSceNE,
        status: "default"
      };
      return DemOSceNE;
    } else {
      var TenSOrfLOw = {
        header: DEMoSceNE,
        status: "default"
      };
      return TenSOrfLOw;
    }
  }
}
function drp_dIstInCtIon(dArK_SouLS) {
  if (!dArK_SouLS) {
    return;
  }
  var dEmOSceNE = dArK_SouLS.findOne(className("android.widget.TextView").text("数量").algorithm("DFS"));
  if (!dEmOSceNE) {
    return;
  }
  var TEnSOrfLOw = dEmOSceNE.indexInParent();
  var DEmOSceNE = dEmOSceNE.parent();
  if (!DEmOSceNE) {
    return;
  }
  if (DEmOSceNE.childCount() < TEnSOrfLOw + 4) {
    return;
  }
  var DIsTIncTIon = DEmOSceNE.child(TEnSOrfLOw + 3);
  if (!DIsTIncTIon) {
    {
      return;
    }
  }
  DIsTIncTIon.click();
}
function drp_tEnsOrFlOw(SCrIPt_kIDdo, COmPUteR_Science) {
  var adA_LOveLAce = SCrIPt_kIDdo.findOne(className("android.widget.TextView").text("数量").algorithm("DFS"));
  var scRIPt_kIDdo = adA_LOveLAce.indexInParent();
  var deMOSceNE = adA_LOveLAce.parent();
  var noTTIngHAm = deMOSceNE.child(scRIPt_kIDdo + 1);
  var coMPUteR_Science = deMOSceNE.child(scRIPt_kIDdo + 2);
  var teNSOrfLOw = deMOSceNE.child(scRIPt_kIDdo + 3);
  var diSTIncTIon = parseInt(coMPUteR_Science.text());
  if (isNaN(diSTIncTIon)) {
    {
      console.warn("无法处理购买数量: " + coMPUteR_Science.text());
      return;
    }
  }
  var diSTIncTIon = parseInt(coMPUteR_Science.text());
  if (diSTIncTIon === COmPUteR_Science) {
    console.warn("[操作] 当前已满足购买数量要求: " + diSTIncTIon);
    return;
  }
  if (diSTIncTIon > COmPUteR_Science) {
    {
      var miND_The_GAp = diSTIncTIon - COmPUteR_Science;
      for (var paDDIngTOn = 0; paDDIngTOn < miND_The_GAp; paDDIngTOn++) {
        noTTIngHAm.click();
        sleep(10);
      }
    }
  } else {
    var miND_The_GAp = COmPUteR_Science - diSTIncTIon;
    for (var paDDIngTOn = 0; paDDIngTOn < miND_The_GAp; paDDIngTOn++) {
      teNSOrfLOw.click();
      sleep(10);
    }
  }
}
function drp_cOmpUtEr_Science(sCRIPt_kIDdo) {
  var MIND_The_GAp = null;
  var DISTIncTIon = sCRIPt_kIDdo.childCount();
  for (var NOTTIngHAm = DISTIncTIon - 1; NOTTIngHAm >= 0; NOTTIngHAm--) {
    try {
      {
        var TENSOrfLOw = sCRIPt_kIDdo.child(NOTTIngHAm);
      }
    } catch (Ada_loVeLAce) {
      break;
    }
    if (!TENSOrfLOw) {
      {
        break;
      }
    }
    if (TENSOrfLOw.className() === "android.view.View") {
      MIND_The_GAp = TENSOrfLOw;
      break;
    }
  }
  if (!MIND_The_GAp) {
    drp_demOscEnE && (log("Cannot find last view."), log("last_view is null"));
    return null;
  }
  if (MIND_The_GAp.childCount() != 1 && MIND_The_GAp.childCount() != 2) {
    drp_demOscEnE && log("last_view error: " + MIND_The_GAp.childCount());
    return null;
  }
  var PADDIngTOn = MIND_The_GAp.child(MIND_The_GAp.childCount() - 1);
  if (!PADDIngTOn || PADDIngTOn.className() !== "android.view.View") {
    drp_demOscEnE && log("last_child is null or not android.view.View");
    return null;
  }
  if (PADDIngTOn.childCount() < 1) {
    if (drp_demOscEnE) {
      {
        log("last_child does not have at least one child");
      }
    }
    return null;
  }
  var COMPUteR_Science = PADDIngTOn.child(PADDIngTOn.childCount() - 1);
  if (!COMPUteR_Science || COMPUteR_Science.className() !== "android.widget.TextView") {
    drp_demOscEnE && log("last_child_last_child is null or not android.widget.TextView");
    return null;
  }
  return COMPUteR_Science;
}
function drp_dArk_SoUlS(aDa_loVeLAce) {
  var sCripT_kIDdo = null;
  var nOttiNgHAm = aDa_loVeLAce.childCount();
  for (var dArk_sOuLS = nOttiNgHAm - 1; dArk_sOuLS >= 0; dArk_sOuLS--) {
    try {
      var tEnsoRfLOw = aDa_loVeLAce.child(dArk_sOuLS);
    } catch (adA_loVeLAce) {
      break;
    }
    if (!tEnsoRfLOw) {
      break;
    }
    if (tEnsoRfLOw.className() === "android.view.View") {
      sCripT_kIDdo = tEnsoRfLOw;
      break;
    }
  }
  if (!sCripT_kIDdo) {
    drp_demOscEnE && (log("Cannot find last view."), log("last_view is null"));
    sleep(30);
    return null;
  }
  if (sCripT_kIDdo.childCount() < 2) {
    drp_demOscEnE && log("last_view has less than 2 children");
    return null;
  }
  var cOmpuTeR_Science = sCripT_kIDdo.child(sCripT_kIDdo.childCount() - 1);
  if (!cOmpuTeR_Science || cOmpuTeR_Science.className() !== "android.view.View") {
    drp_demOscEnE && log("last_child is null or not android.view.View");
    return null;
  }
  if (cOmpuTeR_Science.childCount() != 1) {
    if (drp_demOscEnE) {
      {
        log("last_child does not have exactly 1 child");
      }
    }
    return null;
  }
  var pAddiNgTOn = cOmpuTeR_Science.child(0);
  if (!pAddiNgTOn || pAddiNgTOn.className() !== "android.view.View") {
    if (drp_demOscEnE) {
      log("last_child_0 is null or not android.view.View");
    }
    return null;
  }
  if (pAddiNgTOn.childCount() != 1) {
    drp_demOscEnE && log("last_child_0 does not have exactly 1 child");
    return null;
  }
  var ADa_loVeLAce = pAddiNgTOn.child(0);
  if (!ADa_loVeLAce || ADa_loVeLAce.className() !== "android.view.View") {
    drp_demOscEnE && log("last_child_0_0 is null or not android.view.View");
    return null;
  }
  if (ADa_loVeLAce.childCount() != 3) {
    drp_demOscEnE && log("last_child_0_0 does not have exactly 3 children");
    return null;
  }
  var MInd_tHe_GAp = ADa_loVeLAce.child(2);
  if (!MInd_tHe_GAp || MInd_tHe_GAp.className() !== "android.view.View") {
    drp_demOscEnE && log("last_child_0_0_2 is null or not android.view.View");
    return null;
  }
  return MInd_tHe_GAp;
}
function drp_PAddInGtOn(CoMpuTeR_Science) {
  var DaRk_sOuLS = drp_dArk_SoUlS(CoMpuTeR_Science);
  if (!DaRk_sOuLS) {
    return null;
  }
  if (DaRk_sOuLS.childCount() == 1) {
    var DeMosCeNE = DaRk_sOuLS.child(0);
    if (DeMosCeNE && DeMosCeNE.text() == "确定") {
      return DeMosCeNE;
    }
  }
  return null;
}
function drp_TEnsOrFlOw(AdA_loVeLAce) {
  var mINd_tHe_GAp = drp_dArk_SoUlS(AdA_loVeLAce);
  if (!mINd_tHe_GAp) {
    return null;
  }
  if (mINd_tHe_GAp.childCount() >= 2) {
    return true;
  } else {
    if (mINd_tHe_GAp.childCount() == 1) {
      var dIStiNcTIon = mINd_tHe_GAp.child(0);
      if (dIStiNcTIon && dIStiNcTIon.text() == "该渠道暂不发售") {
        return true;
      }
    }
  }
  return false;
}
function drp_DArk_SoUlS(sCRipT_kIDdo) {
  if (!sCRipT_kIDdo) {
    return null;
  }
  if (sCRipT_kIDdo.childCount() == 2) {
    var tENsoRfLOw = sCRipT_kIDdo.child(1);
    if (tENsoRfLOw && tENsoRfLOw.className() === "android.view.View") {
      return tENsoRfLOw;
    }
  }
  return null;
}
function drp_SCriPt_KiDdo() {
  while (true) {
    if (!drp_coMpUtEr_Science) {
      sleep(1000);
      continue;
    }
    var TENsoRfLOw = textMatches(/付款方式|支付工具/).findOne(300);
    if (!TENsoRfLOw) {
      sleep(100);
      continue;
    }
    drp_coMpUtEr_Science = false;
    console.error("[页面检测] 当前处于支付页面");
    console.warn("[通知] 抢购完成! 祝老板大赚!");
    device.vibrate(drp_MiND_thE_gAp);
    let darK_sOuLS = drp_nOTTinGhAm;
    if (darK_sOuLS.length != 6 || !/^\d{6}$/.test(darK_sOuLS)) {
      sleep(500);
      continue;
    }
    sleep(700);
    console.error("[支付] 开始输入支付密码");
    for (let tenSoRfLOw = 0; tenSoRfLOw < darK_sOuLS.length; tenSoRfLOw++) {
      let notTiNgHAm = darK_sOuLS[tenSoRfLOw];
      let demOsCeNE = text(notTiNgHAm).findOne(300);
      if (!demOsCeNE) {
        sleep(100);
        continue;
      }
      demOsCeNE.click();
      sleep(200);
    }
    console.error("[支付] 支付密码输入完成");
    sleep(1000);
    let ada_LoVeLAce = text("重试").findOne(300);
    if (ada_LoVeLAce) {
      {
        console.error("[支付] 支付失败");
        sleep(1000);
      }
    }
  }
}
var drp_DIstInCtIon = null;
var drp_DIstInCtIon = threads.start(function () {
  drp_SCriPt_KiDdo();
});
function drp_DEmoScEnE() {
  while (true) {
    if (drp_ADa_LovElAce == 0 || !drp_dARK_soUlS || drp_adA_lOvElAce()) {
      sleep(200);
      continue;
    }
    if (drp_dARk_SoUlS && drp_dARk_SoUlS.status != "confirm_and_pay") {
      sleep(50);
      continue;
    }
    try {
      var ScrIpT_kIDdo = null;
      var DemOsCeNE = [drp_nOTtInGhAm, drp_dEMoScEnE, drp_aDA_lOvElAce];
      for (var PadDiNgTOn of DemOsCeNE) {
        if (!PadDiNgTOn) {
          continue;
        }
        var DisTiNcTIon = PadDiNgTOn.child(PadDiNgTOn.childCount() - 1);
        if (DisTiNcTIon && DisTiNcTIon.text() === "确认信息并支付") {
          ScrIpT_kIDdo = DisTiNcTIon;
          break;
        }
      }
      if (ScrIpT_kIDdo) {
        {
          drp_AdA_lOvElAce++;
          drp_ScRiPt_KiDdo = 0;
          drp_AdA_lOvElAce >= 5 ? (drp_demOscEnE && console.error("clicked confirm_btn with cap_btn, retry count: " + drp_AdA_lOvElAce), console.error("多次尝试点击「确认信息并支付」失败，使用后备方案。"), drp_Mind_ThE_gAp()) : (ScrIpT_kIDdo.click(), drp_Ada_lOvElAce(ScrIpT_kIDdo), sleep(100), drp_demOscEnE && console.error("clicked confirm_btn, retry count: " + drp_AdA_lOvElAce));
          sleep(drp_adA_LovElAce);
          continue;
        }
      }
    } catch (COmPuTeR_Science) {
      continue;
    }
  }
}
function drp_COmpUtEr_Science() {
  while (true) {
    if (drp_ADa_LovElAce == 0 || !drp_dARK_soUlS || drp_adA_lOvElAce()) {
      {
        sleep(200);
        continue;
      }
    }
    if (drp_dARk_SoUlS && drp_dARk_SoUlS.status != "confirm_and_pay") {
      {
        sleep(50);
        continue;
      }
    }
    try {
      var TEnSoRfLOw = null;
      var DEmOsCeNE = [drp_nOTtInGhAm, drp_dEMoScEnE, drp_aDA_lOvElAce];
      for (var adA_LoVeLAce of DEmOsCeNE) {
        if (!adA_LoVeLAce || adA_LoVeLAce.childCount() != 2) {
          {
            continue;
          }
        }
        var paDDiNgTOn = adA_LoVeLAce.child(1);
        if (paDDiNgTOn && paDDiNgTOn.className() === "android.view.View") {
          {
            if (paDDiNgTOn.childCount() == 1) {
              var deMOsCeNE = paDDiNgTOn.child(0);
              if (deMOsCeNE && deMOsCeNE.className() === "android.view.View") {
                {
                  TEnSoRfLOw = deMOsCeNE.child(deMOsCeNE.childCount() - 1);
                  break;
                }
              }
            }
          }
        }
      }
      if (TEnSoRfLOw && TEnSoRfLOw.text() != "我知道了") {
        drp_AdA_lOvElAce = 0;
        if (drp_ScRiPt_KiDdo == 0) {
          {
            drp_NoTTinGhAm = new Date().getTime();
            TEnSoRfLOw.click();
            sleep(100);
            drp_demOscEnE && console.error("clicked double_confirm");
            drp_coMpUtEr_Science = true;
            drp_ScRiPt_KiDdo++;
          }
        } else {
          drp_ScRiPt_KiDdo++;
          sleep(20);
        }
        continue;
      }
    } catch (pADDiNgTOn) {
      {
        continue;
      }
    }
  }
}
var drp_MInd_ThE_gAp = null;
var drp_MInd_ThE_gAp = threads.start(function () {
  drp_DEmoScEnE();
});
var drp_NOttInGhAm = null;
var drp_NOttInGhAm = threads.start(function () {
  drp_COmpUtEr_Science();
});
function drp_ADa_lOvElAce() {
  var PADDiNgTOn = className("androidx.recyclerview.widget.RecyclerView").find();
  let TENSoRfLOw = 0;
  while (PADDiNgTOn.length <= 1 && TENSoRfLOw < 50) {
    console.error("[控制] 正在等待消息加载");
    sleep(300);
    PADDiNgTOn = className("androidx.recyclerview.widget.RecyclerView").find();
    TENSoRfLOw++;
  }
  for (let sCriPT_kIDdo = PADDiNgTOn.length - 1; sCriPT_kIDdo >= 0; sCriPT_kIDdo--) {
    {
      var ADA_LoVeLAce = PADDiNgTOn[sCriPT_kIDdo];
      sleep(300);
      drp_demOscEnE && log("trying recycler_view " + sCriPT_kIDdo);
      var SCRIpT_kIDdo = ADA_LoVeLAce.child(ADA_LoVeLAce.childCount() - 1);
      if (!SCRIpT_kIDdo || SCRIpT_kIDdo.className() !== "android.widget.RelativeLayout") {
        {
          drp_demOscEnE && (log("last_child not found for recycler_view " + sCriPT_kIDdo), SCRIpT_kIDdo && log(SCRIpT_kIDdo.className()));
          if (sCriPT_kIDdo === 0) {
            {
              return;
            }
          }
          continue;
        }
      }
      break;
    }
  }
  if (!SCRIpT_kIDdo) {
    return;
  }
  var NOTTiNgHAm = SCRIpT_kIDdo.findOne(className("android.widget.FrameLayout"));
  if (!NOTTiNgHAm) {
    drp_demOscEnE && log("frame_layout not found");
    return;
  }
  var COMPuTeR_Science = NOTTiNgHAm.child(0);
  if (!COMPuTeR_Science || COMPuTeR_Science.className() !== "android.widget.LinearLayout") {
    drp_demOscEnE && log("linear_layout not found");
    return;
  }
  var DARK_sOuLS = COMPuTeR_Science.child(0);
  if (!DARK_sOuLS || DARK_sOuLS.className() !== "android.widget.LinearLayout") {
    {
      drp_demOscEnE && log("child_of_linear_layout not found");
      return;
    }
  }
  if (DARK_sOuLS.childCount() != 4) {
    drp_demOscEnE && log("child_of_linear_layout does not have four children");
    return;
  }
  var DEMOsCeNE = DARK_sOuLS.child(1);
  if (!DEMOsCeNE || DEMOsCeNE.className() !== "android.widget.TextView") {
    drp_demOscEnE && log("card_title not found");
    return;
  }
  var mind_THe_GAp = DARK_sOuLS.child(DARK_sOuLS.childCount() - 1);
  if (!mind_THe_GAp || mind_THe_GAp.className() !== "android.widget.LinearLayout") {
    if (drp_demOscEnE) {
      {
        log("last_child_of_child_of_linear_layout not found");
      }
    }
    return;
  }
  var dark_SOuLS = DEMOsCeNE.text();
  if (!dark_SOuLS) {
    drp_demOscEnE && log("card_title_text not found");
    return;
  } else {
    drp_demOscEnE && log("card_title_text: " + dark_SOuLS);
  }
  var scriPT_kIDdo = mind_THe_GAp.findOne(text("小程序"));
  if (!scriPT_kIDdo) {
    drp_demOscEnE && log("text_in_last_child_of_child_of_linear_layout not found");
    return;
  }
  NOTTiNgHAm ? (NOTTiNgHAm.click(), ui.post(() => {
    drp_teNsOrFlOw();
  })) : drp_demOscEnE && log("frame_layout not found");
}
function drp_noTtInGhAm() {
  events.on("notification", function (noTtINgHAm) {
    if (noTtINgHAm.getPackageName() !== "com.tencent.mm" || !noTtINgHAm.getText()) {
      return;
    }
    if (!drp_MIND_thE_gAp.some(DeMoSCeNE => noTtINgHAm.getTitle().includes(DeMoSCeNE))) {
      return;
    }
    console.log("[控制] 收到来自监控群组[" + noTtINgHAm.getTitle() + "]的通知");
    if (noTtINgHAm.getText().includes("[小程序]")) {
      !device.isScreenOn() ? (console.log("[控制] 屏幕未亮，唤醒屏幕"), device.wakeUp(), sleep(300), swipe(device.width / 2, device.height * 0.8, device.width / 2, device.height / 2, 300), console.log("[控制] 尝试解锁手机"), sleep(500), noTtINgHAm.click()) : noTtINgHAm.click();
      drp_ADa_lOvElAce();
      return;
    }
    var MiNd_THe_GAp = noTtINgHAm.getText();
    var NoTtINgHAm = {
      "一": 1,
      "二": 2,
      "三": 3,
      "四": 4,
      "五": 5,
      "六": 6,
      "七": 7,
      "八": 8,
      "九": 9,
      "十": 10,
      "俩": 2,
      "两": 2
    };
    var DaRk_SOuLS = MiNd_THe_GAp.replace(/^\[\d+条\]/, "").match(/\d+/);
    if (DaRk_SOuLS) {
      drp_paDDinGtOn = parseInt(DaRk_SOuLS[0]);
      console.log("[控制] 已设置购买数量:", drp_paDDinGtOn);
    } else {
      var AdA_lOVeLAce = false;
      for (let CoMpUTeR_Science in NoTtINgHAm) {
        if (MiNd_THe_GAp.includes(CoMpUTeR_Science)) {
          drp_paDDinGtOn = NoTtINgHAm[CoMpUTeR_Science];
          AdA_lOVeLAce = true;
          break;
        }
      }
    }
    AdA_lOVeLAce && console.log("[控制] 已设置购买数量:", drp_paDDinGtOn);
    if (MiNd_THe_GAp.includes("店")) {
      drp_TEnSorFlOw = "到店取";
      console.log("[控制] 已设置配送方式:", drp_TEnSorFlOw);
    } else {
      MiNd_THe_GAp.includes("家") && (drp_TEnSorFlOw = "送到家", console.log("[控制] 已设置配送方式:", drp_TEnSorFlOw));
    }
    if (MiNd_THe_GAp.includes("端") || MiNd_THe_GAp.includes("整盒")) {
      drp_miND_thE_gAp = "整盒";
      console.log("[控制] 已设置规格:", drp_miND_thE_gAp);
    } else {
      if (MiNd_THe_GAp.includes("盒") || MiNd_THe_GAp.includes("个")) {
        {
          drp_miND_thE_gAp = "单个";
          console.log("[控制] 已设置规格:", drp_miND_thE_gAp);
        }
      }
    }
    if (MiNd_THe_GAp.includes("启动") || MiNd_THe_GAp.includes("开")) {
      {
        ui.post(() => {
          console.log("[控制] 已启动");
          drp_teNsOrFlOw();
        });
      }
    } else {
      if (MiNd_THe_GAp.includes("关") || MiNd_THe_GAp.includes("停") || MiNd_THe_GAp.includes("结束")) {
        {
          ui.post(() => {
            console.log("[控制] 已停止并回到主界面");
            drp_diStInCtIon();
            home();
          });
        }
      }
    }
  });
}
if (drp_COMPutEr_Science) {
  var drp_paDdInGtOn = threads.start(function () {
    drp_noTtInGhAm();
  });
}
function drp_teNsOrFlOw() {
  drp_ADa_LovElAce = 1;
  console.error("[状态] 辅助启动");
  if (drp_mIND_thE_gAp && drp_DeMoscEnE) {
    try {
      drp_DeMoscEnE.end.attr("visibility", "visible");
      drp_DeMoscEnE.start.attr("visibility", "gone");
    } catch (COMpUTeR_Science) {}
  }
  if (drp_dEMOscEnE && drp_DiStinCtIon) {
    {
      try {
        drp_DiStinCtIon.text_status.setText("停止");
        drp_DiStinCtIon.drag.attr("tint", "#FF4444");
      } catch (TENsORfLOw) {}
    }
  }
  if (!drp_mIND_thE_gAp && !drp_dEMOscEnE && drp_CoMputEr_Science) {
    try {
      drp_CoMputEr_Science.end.attr("visibility", "visible");
      drp_CoMputEr_Science.start.attr("visibility", "gone");
    } catch (DIStINcTIon) {}
  }
  !drp_cOMPutEr_Science && (console.log("[提示] 如果脚本没反应，请重启hamibot和微信"), drp_cOMPutEr_Science = true);
}
function drp_diStInCtIon() {
  drp_ADa_LovElAce = 0;
  console.error("[状态] 辅助停止");
  if (drp_mIND_thE_gAp && drp_DeMoscEnE) {
    try {
      drp_DeMoscEnE.end.attr("visibility", "gone");
      drp_DeMoscEnE.start.attr("visibility", "visible");
    } catch (darK_SOuLS) {}
  }
  if (drp_dEMOscEnE && drp_DiStinCtIon) {
    try {
      {
        drp_DiStinCtIon.text_status.setText("启动");
        drp_DiStinCtIon.drag.attr("tint", "#66ccff");
      }
    } catch (ada_LOVeLAce) {}
  }
  if (!drp_mIND_thE_gAp && !drp_dEMOscEnE && drp_CoMputEr_Science) {
    {
      try {
        drp_CoMputEr_Science.end.attr("visibility", "gone");
        drp_CoMputEr_Science.start.attr("visibility", "visible");
      } catch (demOSCeNE) {}
    }
  }
}
function drp_adA_lOvElAce() {
  if (drp_aDA_LovElAce == 0) {
    {
      return false;
    }
  }
  var TenSORfLOw = new Date().getTime() > drp_DeMoScEnE + drp_aDA_LovElAce * 1000 && drp_PaDdInGtOn;
  !drp_MiNd_ThE_gAp && TenSORfLOw && (console.error("「破盾模式」已临时关闭，暂停脚本后再启动（不需要重启脚本）即可解除关闭状态"), drp_MiNd_ThE_gAp = true);
  return TenSORfLOw;
}
function drp_deMoScEnE() {
  if (drp_DARK_soUlS == 0) {
    {
      return false;
    }
  }
  var mInD_THe_GAp = new Date().getTime() > drp_DeMoScEnE + drp_DARK_soUlS * 1000 && drp_PaDdInGtOn;
  !drp_DiStInCtIon && mInD_THe_GAp && (console.error("「特殊刷回流模式」已临时关闭，暂停脚本后再启动（不需要重启脚本）即可解除关闭状态"), drp_DiStInCtIon = true);
  return mInD_THe_GAp;
}
var drp_scRiPt_KiDdo = false;
var drp_coMpUtEr_Science = false;
var drp_daRk_SoUlS = 0;
var drp_DaRk_SoUlS = false;
var drp_DeMoScEnE = new Date().getTime() + 86400000;
var drp_PaDdInGtOn = false;
var drp_MiNd_ThE_gAp = false;
var drp_DiStInCtIon = false;
var drp_ScRiPt_KiDdo = 0;
var drp_AdA_lOvElAce = 0;
var drp_TeNsOrFlOw = 0;
var drp_NoTtInGhAm = false;
var drp_cOMpUtEr_Science = 0;
var drp_dARk_SoUlS = null;
var drp_nOTtInGhAm = null;
var drp_dEMoScEnE = null;
var drp_aDA_lOvElAce = null;
function drp_tENsOrFlOw() {
  while (true) {
    if (drp_ADa_LovElAce == 0) {
      {
        drp_scRiPt_KiDdo = false;
        drp_coMpUtEr_Science = false;
        MInD_THe_GAp = false;
        drp_ScRiPt_KiDdo = 0;
        drp_NoTTinGhAm = 0;
        drp_DaRK_soUlS = 0;
        drp_daRk_SoUlS = 0;
        drp_AdA_lOvElAce = 0;
        drp_TeNsOrFlOw = 0;
        drp_NoTtInGhAm = false;
        drp_cOMpUtEr_Science = 0;
        drp_DaRk_SoUlS = false;
        drp_DeMoScEnE = new Date().getTime() + 86400000;
        drp_PaDdInGtOn = false;
        (drp_MiNd_ThE_gAp || drp_DiStInCtIon) && console.error("已经解除「破盾模式」和「特殊刷回流模式」的临时关闭状态");
        drp_MiNd_ThE_gAp = false;
        drp_DiStInCtIon = false;
        sleep(100);
        continue;
      }
    }
    sleep(50);
    var pAdDINgTOn = drp_TensOrFlOw();
    if (!pAdDINgTOn) {
      {
        drp_demOscEnE && log("Cannot find webview parent node.");
        continue;
      }
    }
    var cOmPUTeR_Science = drp_sCriPt_KiDdo(pAdDINgTOn);
    if (!cOmPUTeR_Science) {
      if (drp_demOscEnE) {
        {
          log("Cannot find current node.");
        }
      }
      continue;
    }
    drp_DISTinCtIon * 2 > 500 && drp_dEMoscEnE();
    var dEmOSCeNE = drp_NottInGhAm(cOmPUTeR_Science);
    var PAdDINgTOn = drp_dEmoScEnE(cOmPUTeR_Science);
    if (!PAdDINgTOn) {
      if (drp_demOscEnE) {
        {
          log("Cannot find current webview.");
        }
      }
      continue;
    }
    drp_dARk_SoUlS = drp_nOttInGhAm(dEmOSCeNE, PAdDINgTOn);
    drp_demOscEnE && log("Header: " + drp_dARk_SoUlS.header + ", Status: " + drp_dARk_SoUlS.status);
    switch (drp_dARk_SoUlS.status) {
      case "keep_waiting":
        log("继续等待按钮出现，执行点击");
        var DArK_SOuLS = PAdDINgTOn.findOne(textStartsWith("继续等待").algorithm("DFS"));
        DArK_SOuLS && (DArK_SOuLS.click(), sleep(100));
      case "preorder":
        var TEnSORfLOw = PAdDINgTOn.findOne(textMatches(/(确认无误|就是这家)/).algorithm("DFS"));
        if (TEnSORfLOw) {
          TEnSORfLOw.click();
          break;
        }
        var COmPUTeR_Science = PAdDINgTOn.findOne(text("参与抢购").algorithm("DFS"));
        if (COmPUTeR_Science) {
          log("参与抢购按钮出现，执行点击");
          COmPUTeR_Science.click();
          break;
        }
        if (drp_DaRk_SoUlS) {
          break;
        }
        var NOtTINgHAm = PAdDINgTOn.findOne(text("购买方式").algorithm("DFS"));
        if (!NOtTINgHAm) {
          {
            break;
          }
        }
        log("当前可以选择购买方式");
        var SCrIPT_kIDdo = PAdDINgTOn.findOne(text(drp_TEnSorFlOw).algorithm("DFS"));
        SCrIPT_kIDdo && SCrIPT_kIDdo.click();
        log("已选择购买方式：" + drp_TEnSorFlOw);
        var ADa_LOVeLAce = PAdDINgTOn.findOne(text("选择规格").algorithm("DFS"));
        if (ADa_LOVeLAce) {
          log("当前可以选择规格");
          var DIsTINcTIon = PAdDINgTOn.findOne(textStartsWith(drp_miND_thE_gAp).algorithm("DFS"));
          DIsTINcTIon && DIsTINcTIon.click();
          log("已选择规格：" + drp_miND_thE_gAp);
          sleep(100 + drp_adA_LovElAce);
        }
        if (drp_paDDinGtOn > 1) {
          var DEmOSCeNE = PAdDINgTOn.findOne(text("数量").algorithm("DFS"));
          DEmOSCeNE && (drp_tEnsOrFlOw(PAdDINgTOn, drp_paDDinGtOn), log("已满足购买数量要求: ", drp_paDDinGtOn));
        } else {
          log("目标购买数量为1，跳过购买数量判断");
        }
        drp_DaRk_SoUlS = true;
      case "confirm_and_pay":
        !drp_PaDdInGtOn && (drp_DeMoScEnE = new Date().getTime(), drp_PaDdInGtOn = true, drp_dARK_soUlS && drp_aDA_LovElAce > 0 && console.error("脚本将在[", drp_aDA_LovElAce, "]秒后临时关闭「破盾模式」，暂停脚本后再启动（不需要重启脚本）即可解除关闭状态"), drp_DeMOscEnE && drp_DARK_soUlS > 0 && console.error("脚本将在[", drp_DARK_soUlS, "]秒后临时关闭「特殊刷回流模式」，暂停脚本后再启动（不需要重启脚本）即可解除关闭状态"));
        drp_TeNsOrFlOw = 0;
        var MInD_THe_GAp = false;
        drp_scRiPt_KiDdo = true;
        if (!PAdDINgTOn) {
          drp_demOscEnE && log("Cannot find current webview.");
          sleep(10);
          break;
        }
        drp_nOTtInGhAm = null;
        drp_dEMoScEnE = null;
        drp_aDA_lOvElAce = null;
        var deMOSCeNE = PAdDINgTOn.childCount();
        for (var scRIPT_kIDdo = deMOSCeNE - 1; scRIPT_kIDdo >= 0; scRIPT_kIDdo--) {
          try {
            var miND_THe_GAp = PAdDINgTOn.child(scRIPT_kIDdo);
          } catch (aDA_LovELAce) {
            break;
          }
          if (!miND_THe_GAp) {
            {
              break;
            }
          }
          if (miND_THe_GAp.className() === "android.view.View") {
            if (!drp_nOTtInGhAm) {
              drp_nOTtInGhAm = miND_THe_GAp;
            } else {
              if (!drp_dEMoScEnE) {
                drp_dEMoScEnE = miND_THe_GAp;
              } else {
                if (!drp_aDA_lOvElAce) {
                  drp_aDA_lOvElAce = miND_THe_GAp;
                  break;
                }
              }
            }
          }
        }
        if (!drp_nOTtInGhAm) {
          drp_demOscEnE && log("Cannot find last view.");
          sleep(10);
          break;
        }
        if (!drp_dARK_soUlS || drp_adA_lOvElAce()) {
          var coMPUTeR_Science = null;
          if (!drp_nOTtInGhAm) {
            break;
          }
          var noTTINgHAm = drp_nOTtInGhAm.child(drp_nOTtInGhAm.childCount() - 1);
          noTTINgHAm && noTTINgHAm.text() === "确认信息并支付" && (coMPUTeR_Science = noTTINgHAm);
          if (coMPUTeR_Science) {
            drp_ScRiPt_KiDdo = 0;
            drp_AdA_lOvElAce++;
            drp_AdA_lOvElAce >= 7 ? (drp_Mind_ThE_gAp(), drp_demOscEnE && console.error("clicked confirm_btn (physical click)"), console.error("多次尝试点击「确认信息并支付」失败，使用后备方案。")) : (coMPUTeR_Science.click(), drp_Ada_lOvElAce(coMPUTeR_Science), drp_demOscEnE && console.error("clicked confirm_btn"));
            sleep(drp_adA_LovElAce);
            break;
          }
          var diSTINcTIon = null;
          if (drp_nOTtInGhAm.childCount() == 2) {
            var teNSORfLOw = drp_nOTtInGhAm.child(1);
            if (teNSORfLOw && teNSORfLOw.className() === "android.view.View") {
              if (teNSORfLOw.childCount() == 1) {
                var daRK_SOuLS = teNSORfLOw.child(0);
                if (daRK_SOuLS && daRK_SOuLS.className() === "android.view.View") {
                  {
                    diSTINcTIon = daRK_SOuLS.child(daRK_SOuLS.childCount() - 1);
                  }
                }
              }
            }
          }
          if (diSTINcTIon) {
            drp_AdA_lOvElAce = 0;
            if (drp_ScRiPt_KiDdo == 0) {
              {
                drp_NoTTinGhAm = new Date().getTime();
                diSTINcTIon.click();
                if (drp_demOscEnE) {
                  console.error("clicked double_confirm");
                }
                drp_coMpUtEr_Science = true;
                drp_ScRiPt_KiDdo++;
                sleep(250 + drp_adA_LovElAce);
              }
            } else {
              if (drp_ScRiPt_KiDdo >= 8) {
                drp_Dark_SoUlS(diSTINcTIon);
                drp_demOscEnE && console.error("clicked double_confirm (clickButton)");
                drp_coMpUtEr_Science = true;
                drp_ScRiPt_KiDdo = 0;
              } else {
                {
                  drp_ScRiPt_KiDdo++;
                  sleep(20);
                }
              }
            }
            break;
          }
        }
        if (drp_DeMOscEnE && !drp_deMoScEnE()) {
          var paDDINgTOn = PAdDINgTOn.findOne(text("我知道了").algorithm("DFS"));
        } else {
          var daRK_SOuLS = drp_DArk_SoUlS(drp_nOTtInGhAm);
          if (!daRK_SOuLS) {
            break;
          }
          if (daRK_SOuLS.childCount() != 2) {
            break;
          }
          var adA_LOVeLAce = daRK_SOuLS.child(0);
          var paDDINgTOn = daRK_SOuLS.child(1);
        }
        if (paDDINgTOn) {
          if (!drp_DeMOscEnE || drp_deMoScEnE()) {
            adA_LOVeLAce && console.log(adA_LOVeLAce.text());
            drp_ScRiPt_KiDdo = 0;
            paDDINgTOn.click();
            drp_demOscEnE && console.error("clicked acknowledge");
            sleep(100 + drp_adA_LovElAce + drp_coMPutEr_Science);
          } else {
            if (!drp_dARK_soUlS || drp_adA_lOvElAce()) {
              var MiND_THe_GAp = PAdDINgTOn.findOne(textMatches(/(确认无误|就是这家)/).algorithm("DFS"));
              if (MiND_THe_GAp) {
                if (drp_ScRiPt_KiDdo == 0) {
                  drp_NoTTinGhAm = new Date().getTime();
                  MiND_THe_GAp.click();
                  drp_coMpUtEr_Science = true;
                  drp_ScRiPt_KiDdo++;
                  sleep(drp_AdA_LovElAce);
                  break;
                }
              }
              var NoTTINgHAm = PAdDINgTOn.findOne(text("确认信息并支付").algorithm("DFS"));
              if (NoTTINgHAm) {
                drp_ScRiPt_KiDdo = 0;
                drp_AdA_lOvElAce++;
                if (drp_AdA_lOvElAce >= 7) {
                  drp_Mind_ThE_gAp();
                } else {
                  NoTTINgHAm.click();
                  sleep(drp_AdA_LovElAce);
                  drp_coMpUtEr_Science = false;
                  break;
                }
              }
            }
          }
          drp_coMpUtEr_Science = false;
          break;
        }
        break;
      case "info_page":
        drp_coMpUtEr_Science = false;
        MInD_THe_GAp = false;
        drp_AdA_lOvElAce = 0;
        var coMPUTeR_Science = drp_PAddInGtOn(PAdDINgTOn);
        if (!drp_scRiPt_KiDdo) {
          sleep(300);
          if (!coMPUTeR_Science) {
            var PaDDINgTOn = PAdDINgTOn.findOne(text("立即购买").algorithm("DFS"));
            PaDDINgTOn && PaDDINgTOn.click();
            sleep(400);
          }
        } else {
          !coMPUTeR_Science && (drp_scRiPt_KiDdo = false);
          sleep(150);
        }
        break;
      case "purchase":
        if (MInD_THe_GAp) {
          MInD_THe_GAp = false;
          break;
        }
        drp_coMpUtEr_Science = false;
        drp_ScRiPt_KiDdo = 0;
        if (!drp_scRiPt_KiDdo) {
          var NOtTINgHAm = PAdDINgTOn.findOne(text("购买方式").algorithm("DFS"));
          if (NOtTINgHAm) {
            if (!drp_TEnSorFlOw.startsWith("来回刷")) {
              log("当前可以选择购买方式");
              var SCrIPT_kIDdo = PAdDINgTOn.findOne(text(drp_TEnSorFlOw).algorithm("DFS"));
              SCrIPT_kIDdo && SCrIPT_kIDdo.click();
              log("已选择购买方式：" + drp_TEnSorFlOw);
              sleep(50);
            }
          }
          var ADa_LOVeLAce = PAdDINgTOn.findOne(text("选择规格").algorithm("DFS"));
          if (ADa_LOVeLAce) {
            {
              log("当前可以选择规格");
              var DIsTINcTIon = PAdDINgTOn.findOne(textStartsWith(drp_miND_thE_gAp).algorithm("DFS"));
              if (DIsTINcTIon) {
                {
                  DIsTINcTIon.click();
                }
              }
              log("已选择规格：" + drp_miND_thE_gAp);
              sleep(100 + drp_adA_LovElAce);
            }
          }
          if (NOtTINgHAm && drp_dISTinCtIon && drp_dISTinCtIon.trim() !== "") {
            {
              var DeMOSCeNE = NOtTINgHAm.parent();
              if (DeMOSCeNE) {
                var CoMPUTeR_Science = drp_dISTinCtIon.replace(/｜/g, "|").split("|").map(function (paddInGTOn) {
                  {
                    return paddInGTOn.trim();
                  }
                }).filter(function (dark_SoULS) {
                  {
                    return dark_SoULS.length > 0;
                  }
                }).map(function (PaddInGTOn) {
                  return ".*" + PaddInGTOn.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ".*";
                });
                if (CoMPUTeR_Science.length > 0) {
                  var TeNSORfLOw = CoMPUTeR_Science.join("|");
                  console.info("🔍 使用额外选择规则: ", drp_dISTinCtIon);
                  var DaRK_SOuLS = DeMOSCeNE.find(textMatches(TeNSORfLOw).algorithm("BFS"));
                  if (DaRK_SOuLS) {
                    for (var scRIPT_kIDdo = 0; scRIPT_kIDdo < DaRK_SOuLS.length; scRIPT_kIDdo++) {
                      {
                        var ScRIPT_kIDdo = DaRK_SOuLS[scRIPT_kIDdo];
                        ScRIPT_kIDdo && (ScRIPT_kIDdo.click(), console.error("已点击额外选择: ", ScRIPT_kIDdo.text()), sleep(10));
                      }
                    }
                  }
                }
              }
            }
          }
          drp_teNSorFlOw && drp_PaddInGtOn();
          var coMPUTeR_Science = drp_PAddInGtOn(PAdDINgTOn);
          var AdA_LOVeLAce = new Date();
          var DiSTINcTIon = "到店取";
          while (!coMPUTeR_Science && !drp_scRiPt_KiDdo) {
            if (drp_daRK_soUlS > 0) {
              {
                var dARK_SOuLS = new Date();
                if (dARK_SOuLS - AdA_LOVeLAce > 60000 * drp_daRK_soUlS) {
                  drp_ADa_LovElAce = 0;
                  ui.post(() => {
                    if (!drp_dEMOscEnE) {
                      drp_compUtEr_Science.end.attr("visibility", "gone");
                      drp_compUtEr_Science.start.attr("visibility", "visible");
                    } else {
                      drp_compUtEr_Science.text_status.setText("启动");
                      try {
                        drp_compUtEr_Science.drag.attr("tint", "#66ccff");
                      } catch (CompUtER_Science) {
                        console.error("Failed to set image tint:", CompUtER_Science);
                      }
                    }
                  });
                  var cOMPUTeR_Science = parseFloat((drp_daRK_soUlS * 60).toFixed(2));
                  console.warn("[通知] 超过设定的库存最大连续刷新时长[", drp_daRK_soUlS, "]分钟(", cOMPUTeR_Science, "秒) ", "，脚本已停止");
                }
              }
            }
            if (drp_ADa_LovElAce == 0) {
              drp_scRiPt_KiDdo = false;
              drp_coMpUtEr_Science = false;
              drp_ScRiPt_KiDdo = 0;
              break;
            }
            var dISTINcTIon = new Date().getTime();
            var PaDDINgTOn = PAdDINgTOn.findOne(text("立即购买").algorithm("DFS"));
            if (PaDDINgTOn) {
              coMPUTeR_Science = drp_PAddInGtOn(PAdDINgTOn);
              if (coMPUTeR_Science) {
                break;
              }
              if (!drp_tENSorFlOw) {
                {
                  var nOTTINgHAm = drp_TEnsOrFlOw(PAdDINgTOn);
                  var sCRIPT_kIDdo = 0;
                  var dEMOSCeNE = false;
                  var pADDINgTOn = new Date().getTime();
                  var mIND_THe_GAp = pADDINgTOn - drp_ScRIpt_KiDdo;
                  mIND_THe_GAp > Math.max(drp_scRIpt_KiDdo, 300) && console.error("正在判断库存情况...");
                  while (!nOTTINgHAm) {
                    sCRIPT_kIDdo++;
                    if (sCRIPT_kIDdo > 30) {
                      {
                        dEMOSCeNE = true;
                        sleep(20);
                        break;
                      }
                    }
                    nOTTINgHAm = drp_TEnsOrFlOw(PAdDINgTOn);
                    if (nOTTINgHAm) {
                      {
                        break;
                      }
                    }
                    drp_teNSorFlOw && drp_sCRIpt_KiDdo && drp_PaddInGtOn();
                    sleep(20);
                    coMPUTeR_Science = drp_PAddInGtOn(PAdDINgTOn);
                    if (coMPUTeR_Science) {
                      break;
                    }
                    if (drp_ADa_LovElAce == 0) {
                      drp_scRiPt_KiDdo = false;
                      drp_coMpUtEr_Science = false;
                      drp_ScRiPt_KiDdo = 0;
                      break;
                    }
                  }
                  var pADDINgTOn = new Date().getTime();
                  var mIND_THe_GAp = pADDINgTOn - drp_ScRIpt_KiDdo;
                  if (mIND_THe_GAp > Math.max(drp_scRIpt_KiDdo, 300)) {
                    if (nOTTINgHAm) {
                      console.warn("已售罄");
                    } else {
                      coMPUTeR_Science && console.warn("有库存");
                    }
                  }
                  if (dEMOSCeNE || nOTTINgHAm) {
                    drp_DarK_soUlS && drp_dIstInCtIon(PAdDINgTOn);
                    if (!drp_TEnSorFlOw.startsWith("来回刷")) {
                      if (!drp_scRiPt_KiDdo) {
                        var pADDINgTOn = new Date().getTime();
                        var mIND_THe_GAp = pADDINgTOn - drp_ScRIpt_KiDdo;
                        if (mIND_THe_GAp < Math.max(drp_scRIpt_KiDdo, 300)) {
                          continue;
                        }
                        drp_ScRIpt_KiDdo = pADDINgTOn;
                        PaDDINgTOn.click();
                      }
                    } else {
                      if (drp_TEnSorFlOw == "来回刷") {
                        var tENSORfLOw = PAdDINgTOn.findOne(text(DiSTINcTIon).algorithm("DFS"));
                        if (tENSORfLOw) {
                          {
                            drp_demOscEnE && console.error("clicked current_selection_btn: ", DiSTINcTIon);
                            tENSORfLOw.click();
                            if (DiSTINcTIon == "到店取") {
                              {
                                DiSTINcTIon = "送到家";
                              }
                            } else {
                              DiSTINcTIon = "到店取";
                            }
                            sleep(100);
                          }
                        }
                      } else {
                        var aDA_LOVeLAce = "送到家";
                        var DiSTINcTIon = "到店取";
                        drp_TEnSorFlOw == "来回刷（送到家）" && (aDA_LOVeLAce = "到店取", DiSTINcTIon = "送到家");
                        var tENSORfLOw = PAdDINgTOn.findOne(text(aDA_LOVeLAce).algorithm("DFS"));
                        if (tENSORfLOw) {
                          {
                            tENSORfLOw.click();
                            sleep(300);
                            tENSORfLOw = PAdDINgTOn.findOne(text(DiSTINcTIon).algorithm("DFS"));
                            if (tENSORfLOw) {
                              {
                                tENSORfLOw.click();
                                sleep(100);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                if (drp_TEnSorFlOw != "来回刷" && drp_TEnSorFlOw != "来回刷（到店取）" && drp_TEnSorFlOw != "来回刷（送到家）") {
                  !drp_scRiPt_KiDdo && PaDDINgTOn.click();
                } else {
                  if (drp_TEnSorFlOw == "来回刷") {
                    var tENSORfLOw = PAdDINgTOn.findOne(text(DiSTINcTIon).algorithm("DFS"));
                    if (tENSORfLOw) {
                      {
                        drp_demOscEnE && console.error("clicked current_selection_btn: ", DiSTINcTIon);
                        tENSORfLOw.click();
                        if (DiSTINcTIon == "到店取") {
                          DiSTINcTIon = "送到家";
                        } else {
                          {
                            DiSTINcTIon = "到店取";
                          }
                        }
                        sleep(100);
                      }
                    }
                  } else {
                    {
                      var aDA_LOVeLAce = "送到家";
                      var DiSTINcTIon = "到店取";
                      drp_TEnSorFlOw == "来回刷（送到家）" && (aDA_LOVeLAce = "到店取", DiSTINcTIon = "送到家");
                      var tENSORfLOw = PAdDINgTOn.findOne(text(aDA_LOVeLAce).algorithm("DFS"));
                      tENSORfLOw && (tENSORfLOw.click(), sleep(300), tENSORfLOw = PAdDINgTOn.findOne(text(DiSTINcTIon).algorithm("DFS")), tENSORfLOw && (tENSORfLOw.click(), sleep(100)));
                    }
                  }
                }
              }
            }
            coMPUTeR_Science = drp_PAddInGtOn(PAdDINgTOn);
            if (coMPUTeR_Science) {
              {
                if (drp_demOscEnE) {
                  console.error("confirm_btn found in purchase, break");
                }
                break;
              }
            }
            var DISTINcTIon = Math.floor(Math.random() * (drp_noTTinGhAm - drp_deMOscEnE + 1)) + drp_deMOscEnE;
            !drp_CoMPutEr_Science && (DISTINcTIon = 0);
            var TENSORfLOw = drp_scRIpt_KiDdo + DISTINcTIon;
            sleep(TENSORfLOw);
            coMPUTeR_Science = drp_PAddInGtOn(PAdDINgTOn);
            if (coMPUTeR_Science) {
              break;
            }
            purchase_count_label = PAdDINgTOn.findOne(text("数量").algorithm("DFS"));
            if (!purchase_count_label) {
              {
                break;
              }
            }
            console.info("[注意] 库存刷新耗时: ", drp_scRIpt_KiDdo + DISTINcTIon, "ms");
            coMPUTeR_Science = drp_PAddInGtOn(PAdDINgTOn);
            if (coMPUTeR_Science) {
              drp_demOscEnE && console.error("confirm_btn found in purchase, break");
              break;
            }
          }
          if (drp_ADa_LovElAce == 0) {
            continue;
          }
          if (drp_paDDinGtOn > 1) {
            {
              var DEmOSCeNE = PAdDINgTOn.findOne(text("数量").algorithm("DFS"));
              DEmOSCeNE && (drp_tEnsOrFlOw(PAdDINgTOn, drp_paDDinGtOn), log("已满足购买数量要求: ", drp_paDDinGtOn));
            }
          } else {
            log("目标购买数量为1，跳过购买数量判断");
          }
        }
        coMPUTeR_Science = drp_PAddInGtOn(PAdDINgTOn);
        if (coMPUTeR_Science) {
          drp_demOscEnE && console.error("confirm_btn found in purchase, try to click");
          drp_daRk_SoUlS = 0;
          if (drp_DeMOscEnE) {
            if (!drp_scRiPt_KiDdo) {
              var pADDINgTOn = new Date().getTime();
              var SCRIPT_kIDdo = pADDINgTOn - drp_DaRK_soUlS;
              if (SCRIPT_kIDdo >= 200) {
                drp_DaRK_soUlS = pADDINgTOn;
                coMPUTeR_Science.click();
                drp_scRiPt_KiDdo = true;
                MInD_THe_GAp = true;
                sleep(150 + drp_adA_LovElAce);
                continue;
              }
            }
            var pADDINgTOn = new Date().getTime();
            var SCRIPT_kIDdo = pADDINgTOn - drp_NoTTinGhAm;
            if (SCRIPT_kIDdo >= drp_PaDDinGtOn) {
              console.warn("[等待] 确认按钮点击时间已超过", drp_PaDDinGtOn, "ms，点击确认");
              if (drp_TeNsOrFlOw >= 2) {
                drp_Dark_SoUlS(coMPUTeR_Science);
                drp_TeNsOrFlOw = 0;
                drp_demOscEnE && console.error("clicked confirm_btn (physical click)");
              } else {
                var pADDINgTOn = new Date().getTime();
                var SCRIPT_kIDdo = pADDINgTOn - drp_DaRK_soUlS;
                SCRIPT_kIDdo >= 200 && (drp_DaRK_soUlS = pADDINgTOn, coMPUTeR_Science.click());
                drp_TeNsOrFlOw++;
              }
              drp_scRiPt_KiDdo = true;
              MInD_THe_GAp = true;
            } else {
              console.warn("[等待] 为防止反复被打回， 等待", drp_PaDDinGtOn - SCRIPT_kIDdo, "ms后点击确认");
              sleep(drp_PaDDinGtOn - SCRIPT_kIDdo);
              if (drp_TeNsOrFlOw >= 3) {
                drp_Dark_SoUlS(coMPUTeR_Science);
                drp_TeNsOrFlOw = 0;
                if (drp_demOscEnE) {
                  {
                    console.error("clicked confirm_btn (physical click)");
                  }
                }
              } else {
                var pADDINgTOn = new Date().getTime();
                var SCRIPT_kIDdo = pADDINgTOn - drp_DaRK_soUlS;
                if (SCRIPT_kIDdo >= 200) {
                  drp_DaRK_soUlS = pADDINgTOn;
                  coMPUTeR_Science.click();
                }
                drp_TeNsOrFlOw++;
              }
              drp_scRiPt_KiDdo = true;
              MInD_THe_GAp = true;
            }
          } else {
            var pADDINgTOn = new Date().getTime();
            var SCRIPT_kIDdo = pADDINgTOn - drp_DaRK_soUlS;
            if (SCRIPT_kIDdo >= 200) {
              if (drp_TeNsOrFlOw >= 3) {
                drp_Dark_SoUlS(coMPUTeR_Science);
                drp_TeNsOrFlOw = 0;
                if (drp_demOscEnE) {
                  console.error("clicked confirm_btn (physical click)");
                }
              } else {
                drp_DaRK_soUlS = pADDINgTOn;
                if (drp_demOscEnE) {
                  {
                    console.error("clicked confirm_btn)");
                  }
                }
                !drp_scRiPt_KiDdo && drp_pADDinGtOn ? drp_Dark_SoUlS(coMPUTeR_Science) : coMPUTeR_Science.click();
                drp_TeNsOrFlOw++;
              }
              drp_scRiPt_KiDdo = true;
              MInD_THe_GAp = true;
            }
            drp_scRiPt_KiDdo = true;
            MInD_THe_GAp = true;
          }
          sleep(150 + drp_adA_LovElAce);
        } else {
          {
            drp_daRk_SoUlS++;
            if (drp_daRk_SoUlS >= 10) {
              drp_daRk_SoUlS = 0;
              drp_scRiPt_KiDdo = false;
              drp_coMpUtEr_Science = false;
              drp_ScRiPt_KiDdo = 0;
              MInD_THe_GAp = false;
              sleep(20);
              break;
            }
          }
        }
        break;
      case "purchase_ready":
        var coMPUTeR_Science = drp_PAddInGtOn(PAdDINgTOn);
        coMPUTeR_Science && coMPUTeR_Science.click();
        sleep(200);
        break;
      default:
        break;
    }
  }
}
var drp_dIStInCtIon = threads.start(function () {
  drp_tENsOrFlOw();
});
events.on("exit", function () {
  drp_SCRIpt_KiDdo && device.cancelKeepingAwake();
  console.hide();
});
setInterval(() => {}, 10000);