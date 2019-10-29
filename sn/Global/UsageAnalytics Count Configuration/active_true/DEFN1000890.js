/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2018-11-08 23:52:52
 * Created By  : system
 * Updated On  : 2019-10-11 23:51:45
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=94a73a5bdb6da70020df9f5faa961959
 */
var coeCount = new GlideAggregate('sn_hr_core_case');
coeCount.addQuery('active', 'true');
coeCount.addEncodedQuery('sys_created_onONLast 30 days@javascript:gs.beginningOfLast30Days()@javascript:gs.endOfLast30Days()');
coeCount.addAggregate('COUNT', 'sys_class_name');
coeCount.query();

var answer = coeCount.getRowCount();
