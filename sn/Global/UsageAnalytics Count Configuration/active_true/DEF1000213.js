/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2016-08-04 23:11:02
 * Created By  : admin
 * Updated On  : 2019-10-11 23:51:46
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=34d83c2dcb012200467d3682634c9ca0
 */
var rowCount = 0;
var value='';
var gra = new GlideAggregate('orch_execution');
if (gra.isValid()) {
  gra.addAggregate('COUNT(distinct', 'node_id');
  gra.addQuery('sys_updated_on', '>=', gs.daysAgoStart(365));
  gra.query();
  if (gra.next())
  rowCount = gra.getRowCount();
}
else {
  value='No Table';
}

answer = rowCount;
