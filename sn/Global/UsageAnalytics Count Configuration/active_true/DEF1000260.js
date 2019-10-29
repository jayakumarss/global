/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2017-02-28 10:31:45
 * Created By  : admin
 * Updated On  : 2019-10-11 23:51:46
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=ec6815980bd13200b7d0c32c15673a3f
 */
var maxShares = 0;

var ga = new GlideAggregate('planned_task_custom_console_member');
ga.groupBy('console');
ga.addAggregate('COUNT');
ga.query();

while(ga.next()) {
	if(parseInt(ga.getAggregate('COUNT')) > maxShares) {
		maxShares = parseInt(ga.getAggregate('COUNT'));
	}
}

answer = maxShares;
