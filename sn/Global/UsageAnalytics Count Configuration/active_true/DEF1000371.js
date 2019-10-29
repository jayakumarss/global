/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2017-04-28 22:42:33
 * Created By  : admin
 * Updated On  : 2019-10-11 23:51:46
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=3fc6ffd32f9232009ac402d3c18c95a6
 */
var count = new global.OrchCoreTransactionQuery().getTransactionsCount("sys_created_onONLast month@javascript:gs.beginningOfLastMonth()@javascript:gs.endOfLastMonth()");

// get SAMP TX and substract SAMP TX 
var sampCount = new global.SAMPTXCounter().getReclamationTXCountForLastMonth();
count = count - sampCount; 

answer = count;
