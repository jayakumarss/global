/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2016-08-04 22:44:29
 * Created By  : admin
 * Updated On  : 2019-10-11 23:51:46
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=b975742dcb012200467d3682634c9c03
 */
var constants = Object.freeze({
    "wad": 'wf_activity_definition' ,
    "wea": 'wf_element_activity'
});

function getOrchActivitiesTouchedByCustomer() {
	var ga = new GlideAggregate('sys_update_xml');
	ga.addQuery('name', 'STARTSWITH', constants.wad).addOrCondition('name', 'STARTSWITH', constants.wea);
	ga.groupBy('name');
	ga.query();
	var listOfLegacySysIds = [] ;
	var listOfElementSysIds = [] ;
	while(ga.next()) {	
		if(ga.name.startsWith(constants.wad)) {
			listOfLegacySysIds.push(ga.name.substring(constants.wad.length + 1));
		} else {
			listOfElementSysIds.push(ga.name.substring(constants.wea.length + 1));
		}
	}
	return getLegacyCount(listOfLegacySysIds) + getElementCount(listOfElementSysIds);
}

function getLegacyCount(listOfLegacySysIds) {
	var listOfNonOrchPackageNames = ['Workflow Runtime Engine', 'Service Catalog Platform', 'Service Creator'];
	var ga = new GlideAggregate(constants.wad);
	ga.addQuery('sys_id', 'IN', listOfLegacySysIds);
	ga.addQuery('sys_package.name', 'NOT IN', listOfNonOrchPackageNames);
	ga.query();
	var legacyActivityCount = ga.getRowCount();
	gs.info("Legacy Activity Count: " + legacyActivityCount);
	return legacyActivityCount;
}

function getElementCount(listOfElementSysIds) {
	var ga = new GlideAggregate(constants.wea);
	ga.addQuery('sys_id', 'IN', listOfElementSysIds);
	ga.addAggregate('COUNT');
	ga.addAggregate('count(distinct','version_container_id');
	ga.query();
	var elementActivityCount = ga.getRowCount();
	gs.info("Element Activity Count: " + elementActivityCount);
	return elementActivityCount;
}

var start = new Date().getTime();
var finalActivityCount = getOrchActivitiesTouchedByCustomer();
var end = new Date().getTime();
gs.info("Total time taken: " + (end - start) + " ms");
gs.info('Final Count:' + finalActivityCount);

answer = finalActivityCount;
