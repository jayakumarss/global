/* 
 * Application : Loaner Request
 * ClassName   : sys_variable_value
 * Created On  : 2019-07-07 23:22:23
 * Created By  : admin
 * Updated On  : 2019-07-07 23:22:23
 * Updated By  : admin
 * URL         : /sys_variable_value.do?sys_id=13c73bb8dba233000510196c29961981
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
