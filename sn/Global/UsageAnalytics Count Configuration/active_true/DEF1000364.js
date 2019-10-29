/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2017-03-24 22:17:46
 * Created By  : admin
 * Updated On  : 2019-10-11 23:51:46
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=ef71e7cc2f3132003a8a02d3c18c9508
 */
var maxCnt = 0; 
var exeGr = new GlideAggregate("orch_execution");  
exeGr.addTrend("sys_created_on","Month");  
exeGr.addAggregate("COUNT");  
exeGr.addEncodedQuery("sys_created_onBETWEENjavascript:gs.monthsAgoStart(12)@javascript:gs.endOfLastMonth()");
exeGr.query();  
while(exeGr.next()) {  
  var currentCnt = parseInt(exeGr.getAggregate("COUNT"));
  if (currentCnt > maxCnt)
          maxCnt = currentCnt;  
}

answer = maxCnt;
