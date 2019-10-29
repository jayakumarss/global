/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2017-08-10 00:09:40
 * Created By  : admin
 * Updated On  : 2019-05-25 14:41:03
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=d736a2a4e720030007a64caac2f6a93a
 */
var aggregator = new OutboundUsageMetricsAggregator();
var sums = aggregator.getTransactionCountByMonth('sys_hub_step_instance', true);
var maxCount = 0;
while (sums.next()) {  
  var currentCount = parseInt(sums.getAggregate('SUM', 'agg_value'));
  if(currentCount > maxCount) 
    maxCount = currentCount;
}
answer = maxCount;


