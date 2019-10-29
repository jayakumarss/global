/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2017-02-28 10:21:40
 * Created By  : admin
 * Updated On  : 2019-10-11 23:51:46
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=372711980bd13200b7d0c32c15673a0f
 */
var maxConfigs = 0;

var ga = new GlideAggregate('planned_task_custom_console');
ga.groupBy('owner');
ga.addAggregate('COUNT');
ga.query();

while(ga.next()) {
	if(parseInt(ga.getAggregate('COUNT')) > maxConfigs) {
		maxConfigs = parseInt(ga.getAggregate('COUNT'));
	}
}

answer = maxConfigs;
