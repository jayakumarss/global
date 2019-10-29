/* 
 * Application : Loaner Request
 * ClassName   : sys_variable_value
 * Created On  : 2019-07-08 14:37:05
 * Created By  : admin
 * Updated On  : 2019-07-08 14:37:05
 * Updated By  : admin
 * URL         : /sys_variable_value.do?sys_id=e6290749db2233000510196c29961987
 */
(function execute(inputs, outputs) {
    
  inputs = new DocuSignUtil().trimStringInputs(inputs);
    
 
  var recipient = {
          "signers": []
    }
  
    var signer = {}
    
  
    if(inputs.enable_embedded_signing) {
       if(inputs.user_record_email && inputs.user_record_name && inputs.user_id) {
          	signer = {
      		"email": inputs.user_record_email,
      		"name": inputs.user_record_name,
	  		"recipientId": inputs.recipient_id,
      		"roleName": inputs.role_name,
            "clientUserId": inputs.user_id ,
            
               "recipientSignatureProviders": [
        {
          "sealDocumentsWithTabsOnly": "false",
          "signatureProviderName": inputs.recipient_signature_provider,
          "signatureProviderOptions": {}
        }
       ]
    		}
    	} else if(!inputs.user_record_email || !inputs.user_record_name || !inputs.user_id)
          	outputs.pre_status = "User Record is not provided or the User Record is missing either the name, email or user ID.";
    }
    
  	if(!inputs.enable_embedded_signing) {
    	if(inputs.email && inputs.name) {
    		signer = {
      			"email": inputs.email,
      			"name": inputs.name,
	  			"recipientId": inputs.recipient_id,
      			"roleName": inputs.role_name
            }
    	} else if (!inputs.email || !inputs.name)
          	outputs.pre_status = "Either Email or Name has not been provided.";
    }
    recipient.signers.push(signer);
      
	outputs.recipient = JSON.stringify(recipient);

})(inputs, outputs);
