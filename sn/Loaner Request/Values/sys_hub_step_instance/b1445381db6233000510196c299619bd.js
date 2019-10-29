/* 
 * Application : Loaner Request
 * ClassName   : sys_variable_value
 * Created On  : 2019-07-08 15:25:39
 * Created By  : admin
 * Updated On  : 2019-07-08 15:25:39
 * Updated By  : admin
 * URL         : /sys_variable_value.do?sys_id=b1445381db6233000510196c299619bd
 */
(function execute(inputs, outputs) {
  if(inputs.status_code == 200) {
    outputs.status = "Success";
    outputs.attachment_sys_id = inputs.response; 
  }
  else
    outputs = new DocuSignErrorHandler().attachmentErrorHandler(inputs, outputs); 
})(inputs, outputs);

