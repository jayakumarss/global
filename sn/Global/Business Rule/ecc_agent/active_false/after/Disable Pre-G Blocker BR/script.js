/* 
 * Application : Global
 * ClassName   : sys_script
 * Created On  : 2016-03-04 00:43:15
 * Created By  : will.swift
 * Updated On  : 2019-05-24 16:35:00
 * Updated By  : system
 * URL         : /sys_script.do?sys_id=210c00803702120069da03488e41f1e4
 */
(function executeRule(current, previous /*null when async*/) {
	if (checkAllMidsUpgraded()) {
		var eccBrGr = new GlideRecord('sys_script');
		eccBrGr.addQuery('sys_id', 'IN', ['2450c0003702120069da03488e41f1d5', '210c00803702120069da03488e41f1e4']);
		eccBrGr.setValue('active', false);
		eccBrGr.updateMultiple();
	}
})(current, previous);

function checkAllMidsUpgraded() {
	var gr = new GlideRecord('ecc_agent');
	gr.query();
	while (gr.next())
		if (MIDServer.getByName(gr.name).isPreGeneva())
			return false;
	
	return true;
}
