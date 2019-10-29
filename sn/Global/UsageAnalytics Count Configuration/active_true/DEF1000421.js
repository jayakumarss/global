/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2017-10-30 20:08:48
 * Created By  : admin
 * Updated On  : 2019-05-25 14:41:02
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=67b180cbb3020300176b051a16a8dca4
 */
// Orchestration Transactions LastMonth
var orchTxLastMonth = 0;
if(GlidePluginManager.isActive('com.snc.runbook_automation.runtime')) {
	orchTxLastMonth = new global.OrchCoreTransactionQuery().getTransactionsCount("sys_created_onONLast month@javascript:gs.beginningOfLastMonth()@javascript:gs.endOfLastMonth()");
	// get SAMP TX and substract SAMP TX 
	var sampCount = new global.SAMPTXCounter().getReclamationTXCountForLastMonth();
	orchTxLastMonth = orchTxLastMonth - sampCount;
} 
// IntegrationHub Transaction LastMonth
var ihTxLastMonth = new OutboundUsageMetricsAggregator().getTransactionCountForLastMonth('sys_hub_step_instance', true);

answer = orchTxLastMonth+ihTxLastMonth;
