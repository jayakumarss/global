/* 
 * Application : Loaner Request
 * ClassName   : sys_variable_value
 * Created On  : 2019-07-08 14:37:06
 * Created By  : admin
 * Updated On  : 2019-07-08 14:37:06
 * Updated By  : admin
 * URL         : /sys_variable_value.do?sys_id=fa290749db2233000510196c299619cd
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
