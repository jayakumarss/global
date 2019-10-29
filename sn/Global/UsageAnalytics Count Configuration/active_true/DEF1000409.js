/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2017-08-17 01:00:16
 * Created By  : admin
 * Updated On  : 2019-05-25 14:41:02
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=b535723ae7a0030007a64caac2f6a969
 */
var aggregator = new OutboundUsageMetricsAggregator();
var sum = aggregator.getTransactionCountForLast30Days('sys_hub_step_instance', true);
answer = sum;
