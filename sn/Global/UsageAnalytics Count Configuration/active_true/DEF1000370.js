/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2017-04-28 22:41:21
 * Created By  : admin
 * Updated On  : 2019-10-11 23:51:46
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=5e86bfd32f9232009ac402d3c18c95ed
 */
var count = new global.OrchCoreTransactionQuery().getTransactionsCount("sys_created_onONThis year@javascript:gs.beginningOfThisYear()@javascript:gs.endOfThisYear()");
// get SAMP TX and substract SAMP TX 
var sampCount = new global.SAMPTXCounter().getReclamationTXCountForThisYear();
count = count - sampCount; 

answer = count;
