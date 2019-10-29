/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2017-04-25 21:32:05
 * Created By  : admin
 * Updated On  : 2019-10-11 23:51:46
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=96e94ce22f5e32009ac402d3c18c952b
 */
var maxCnt=0;
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
answer = maxCnt;
