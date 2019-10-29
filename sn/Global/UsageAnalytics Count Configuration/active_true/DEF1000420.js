/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2017-10-30 20:00:06
 * Created By  : admin
 * Updated On  : 2019-05-25 14:41:02
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=c66e7bbab3020300176b051a16a8dc5e
 */
function getOrchMaxCount(){
	var maxCnt=0;
	if(GlidePluginManager.isActive('com.snc.runbook_automation.runtime')) {
		// Last 12 months
		var queryString = "sys_created_onBETWEENjavascript:gs.monthsAgoStart(12)@javascript:gs.endOfLastMonth()";
		var monthlyTrend = new global.OrchCoreTransactionQuery().getTransactionsCountMonthlyTrend(queryString);
		
		for(var i=0; i<monthlyTrend.length; i++){
			var monthlyCount = monthlyTrend[i].count;
			var month = monthlyTrend[i].month;
			var monthlyQueryString = "sys_created_onBETWEENjavascript:gs.monthsAgoStart(" + month + ")@javascript:gs.monthsAgoStart(" + month-1 + ")";
			var sampCnt = new global.SAMPTXCounter().getReclamationTXCount(monthlyQueryString);
			monthlyCount = monthlyCount - sampCnt;
			if (monthlyCount > maxCnt)
				maxCnt = monthlyCount;
		}
	}
	return maxCnt;
}

function getIHMaxCount(){
	var aggregator = new OutboundUsageMetricsAggregator();
	var sums = aggregator.getTransactionCountByMonth('sys_hub_step_instance', true);
	var maxCount = 0;
	while (sums.next()) {
		var currentCount = parseInt(sums.getAggregate('SUM', 'agg_value'));
		if(currentCount > maxCount)
			maxCount = currentCount;
	}
	return maxCount;
}
answer = getOrchMaxCount()+getIHMaxCount();
