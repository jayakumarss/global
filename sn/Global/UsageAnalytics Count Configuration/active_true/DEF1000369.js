/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2017-04-28 22:38:50
 * Created By  : admin
 * Updated On  : 2019-10-11 23:51:46
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=99f5bbd32f9232009ac402d3c18c95b9
 */
var count = new global.OrchCoreTransactionQuery().getTransactionsCount("sys_created_onONLast 12 months@javascript:gs.monthsAgoStart(12)@javascript:gs.endOfThisMonth()");

// get SAMP TX and substract SAMP TX 
var sampCount = new global.SAMPTXCounter().getReclamationTXCountForLast12Months();
count = count - sampCount; 

answer = count;
