/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2017-04-28 20:50:43
 * Created By  : admin
 * Updated On  : 2019-10-11 23:51:46
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=a13dd75f2f5232009ac402d3c18c954d
 */
var count = new global.OrchCoreTransactionQuery().getTransactionsCount("sys_created_onBETWEENjavascript:gs.daysAgoStart(30)@javascript:gs.daysAgoEnd(1)");

// get SAMP TX and substract SAMP TX 
var sampCount = new global.SAMPTXCounter().getReclamationTXCountForLast30Days();
count = count - sampCount;  

answer = count;
