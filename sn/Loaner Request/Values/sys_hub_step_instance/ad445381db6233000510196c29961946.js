/* 
 * Application : Loaner Request
 * ClassName   : sys_variable_value
 * Created On  : 2019-07-08 15:25:38
 * Created By  : admin
 * Updated On  : 2019-07-08 15:25:38
 * Updated By  : admin
 * URL         : /sys_variable_value.do?sys_id=ad445381db6233000510196c29961946
 */
(function execute(inputs, outputs) {
  var type = inputs.envelope.getTableName()
  if (type != 'sn_docusign_spoke_envelopes') 
      throw new Error("Value provided for Envelope is invalid.");
  if(typeof inputs.document_name == "object")
      throw new Error("Document Name should be a string");
  inputs = new DocuSignUtils().trimStringInputs(inputs);
  outputs.document_id = inputs.document_id;
  outputs.document_name = inputs.document_name;
  if (!outputs.document_name)
    throw new Error("Value provided to Document Name is either empty or is invalid.");
 	
	  
})(inputs, outputs);
