/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2017-08-17 00:14:12
 * Created By  : admin
 * Updated On  : 2019-05-25 14:41:02
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=b17a2e36e7a0030007a64caac2f6a9df
 */
var aggregator = new OutboundUsageMetricsAggregator();
var sums = aggregator.getTransactionCountByMonth('sys_hub_step_instance', false);
var maxCount = 0;
while (sums.next()) {  
  var currentCount = parseInt(sums.getAggregate('SUM', 'agg_value'));
  if(currentCount > maxCount) 
    maxCount = currentCount;
}
answer = maxCount;
