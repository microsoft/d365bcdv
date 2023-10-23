function InvokeAction() { 
	var salesOrderId = Xrm.Page.data.entity.getId().replace('{', '').replace('}',''); 
	var req = {}; 
	var target = {entityType: "dyn365bc_salesorder_v2_0", id: salesOrderId}; 
	req.entity = target; 
	req.getMetadata = function () { 
		return { 
			boundParameter: "entity", 
			operationType: 0, 
			operationName: "dyn365bc_salesorder_v2_0_shipAndInvoice", 
			parameterTypes: { 
				"entity": { 
					"typeName": "mscrm.dyn365bc_salesorder_v2_0", 
					"structuralProperty": 5 
				} 
			} 
		} 
	} 
	Xrm.Utility.showProgressIndicator(); 
	Xrm.WebApi.online.execute(req).then ( 
		function() { 
			Xrm.Utility.closeProgressIndicator(); 
			Xrm.Page.ui.setFormNotification("Sales order was succesfully posted", "INFO", "SOPosted"); 
		}, 
		function (error) { 
			Xrm.Utility.closeProgressIndicator(); 
			console.log(error.message); 
		} 
	) 
}