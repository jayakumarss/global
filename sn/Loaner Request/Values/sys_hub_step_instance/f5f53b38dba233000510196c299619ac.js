/* 
 * Application : Loaner Request
 * ClassName   : sys_variable_value
 * Created On  : 2019-07-07 23:14:21
 * Created By  : admin
 * Updated On  : 2019-07-07 23:14:21
 * Updated By  : admin
 * URL         : /sys_variable_value.do?sys_id=f5f53b38dba233000510196c299619ac
 */
(function execute(inputs, outputs) {
	if (inputs.status_code != '200' || inputs.pre_status) {
		outputs = new DocuSignErrorHandler().envelopesErrorHandler(inputs,outputs);
	} else if(inputs.response.indexOf('INVALID_EMAIL_ADDRESS_FOR_RECIPIENT') != -1 || inputs.response.indexOf('INVALID_RECIPIENT_ID') != -1) {
  		outputs = new DocuSignErrorHandler().envelopesErrorHandler(inputs,outputs);
	} else {
    	outputs.status = 'Success';    
	}
})(inputs, outputs);
