/* 
 * Application : Global
 * ClassName   : sys_script
 * Created On  : 2016-03-03 23:49:05
 * Created By  : will.swift
 * Updated On  : 2019-05-24 16:35:00
 * Updated By  : system
 * URL         : /sys_script.do?sys_id=2450c0003702120069da03488e41f1d5
 */
(function executeRule(current, previous /*null when async*/) {
	var query = current.getEncodedQuery();
	if (query.indexOf('agent') != -1) {
		var agent = '';
		var queryArr = query.split('^');
		for (var i = 0; i < queryArr.length; i++)
			if (queryArr[i].indexOf('agent') != -1)
				agent = queryArr[i].split('=')[1];
		
		var mid = MIDServer.getByName(agent);

		if (mid && mid.isPreGeneva())
			current.addQuery('topic', 'IN', ['SystemCommand', 'HeartbeatProbe']);
	}

})(current, previous);
