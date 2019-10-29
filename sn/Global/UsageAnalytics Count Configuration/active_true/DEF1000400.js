/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2017-08-10 00:13:32
 * Created By  : admin
 * Updated On  : 2019-05-25 14:41:02
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=8d67a6a4e720030007a64caac2f6a936
 */
var aggregator = new OutboundUsageMetricsAggregator();
var sums = aggregator.getTransactionCountByMonth('sys_hub_step_instance', true);
var totalSum = 0;
while (sums.next()) {  
  totalSum = totalSum + parseInt(sums.getAggregate('SUM', 'agg_value'), 10);
}

answer = totalSum/12;
