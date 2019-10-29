/* 
 * Application : Global
 * ClassName   : sys_script_include
 * Created On  : 2019-08-19 14:38:50
 * Created By  : admin
 * Updated On  : 2019-08-19 14:38:50
 * Updated By  : admin
 * URL         : /sys_script_include.do?sys_id=31b31ba6db1333000510196c299619ef
 */
var RemoveColumnPrefix = Class.create();
RemoveColumnPrefix.prototype = {
    initialize: function() {
    },
copyFields : function (source_table, target_table, extends_table) {
    var tgr = new GlideRecord(target_table);
    tgr.initialize();

    var attrs = new Packages.java.util.HashMap();

    var fields = tgr.getFields();
    for (var i = 0; i < fields.size(); i++) {
      var field = fields.get(i);
      var type = field.getED().getInternalType();
      var fname = field.getName();
      if (fname.startsWith('sys_'))
        continue;

      var dgr2 = new GlideRecord("sys_dictionary");
      dgr2.addQuery("name", source_table);
      dgr2.addQuery("element", fname);
      dgr2.query();
      if (!dgr2.next()) {
        if(fname.indexOf('u_') != 0)
		  fname = 'u_' + fname;

        var ca = new GlideColumnAttributes(fname);
        ca.setType("string");
        ca.setUsePrefix(false);
        attrs.put(fname, ca);
      }
    }

    var tc = new GlideTableCreator(source_table, source_table);
    tc.setColumnAttributes(attrs);
    if(typeof extends_table != 'undefined')
      	tc.setExtends(extends_table);
    tc.setOverrideUpdate(true);
    tc.update();
  },
    type: 'RemoveColumnPrefix'
};
