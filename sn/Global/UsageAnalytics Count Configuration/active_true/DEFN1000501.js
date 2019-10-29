/* 
 * Application : Global
 * ClassName   : usageanalytics_count_cfg
 * Created On  : 2017-08-24 19:25:02
 * Created By  : system
 * Updated On  : 2019-10-11 23:51:46
 * Updated By  : developer.program@snc
 * URL         : /usageanalytics_count_cfg.do?sys_id=49357655db74030066e778b5ae9619d7
 */
answer = JSON.stringify(conversationCount());

function conversationCount() {
    var result = {};
    if (!GlideTableDescriptor.isValid('sys_cs_conversation')) {
      return result;
    }
    var ga = new GlideAggregate('sys_cs_conversation');
    ga.addAggregate('COUNT', 'state');
    ga.query();

    var count = 0;
    var stateCount = 0;
    while (ga.next()) {
      stateCount = parseInt(ga.getAggregate('COUNT', 'state'));
      result[ga.state] = stateCount;
      count += stateCount;
    }
    result.count = count;
    return result;
}
