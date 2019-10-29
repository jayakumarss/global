/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2017-08-17 00:55:27
 * Created By  : admin
 * Updated On  : 2019-05-25 14:41:02
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=34c3faf6e7a0030007a64caac2f6a906
 */
var aggregator = new OutboundUsageMetricsAggregator();
var sums = aggregator.getTransactionCountForLastMonth('sys_hub_step_instance', true);
answer = sums;
