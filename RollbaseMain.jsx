import React from 'react';
import ReactDOM from 'react-dom';
import App from './main.jsx';


   function accountIDtoValue(object, account){

            object=object.map(function(element){


                            account.forEach(function (account) {
                    
                    if (element.values.account == -1 || element.values.account == null) {
                        element.values.account = "No Account";
                    } else if (element.values.account == account.id) {
                        element.values.account = account.values.id;
                    }
            }
            );

return element;
            });


    return object; }



    function assignedIDtoValue(object, assigned){

            object=object.map(function(element){


                            assigned.forEach(function (assigned) {
                    
                    if (element.values.assigned == -1 || element.values.assigned == null) {
                        element.values.assigned = "Not Assigned";
                    } else if (element.values.assigned == assigned.id) {
                        element.values.assigned = assigned.values.id;
                    }
            }
            );

return element;
            });

    return object; }


 function lineItemFillFromSalesOrder(object, salesOrder){

            object=object.map(function(element){


                            salesOrder.forEach(function (salesOrder) {
                    
                  /*  if (element.values.assigned == -1 || element.values.assigned == null) {
                        element.values.assigned = "N/A";
                    } else */ 
                    
                    if (element.values.invoice == salesOrder.id) {
                        
                        element.values.assigned = salesOrder.values.assigned;
                        element.values.account = salesOrder.values.account;
                        element.values.date = salesOrder.values.date;
                    }
            

            }
            );

return element;
            });


    return object; }



rb.newui.util.addEventListener(rb.newui.util.customEvents.rbs_pageRender, function () {
    var defSalesOrder = $.Deferred(),
        defLineItems = $.Deferred(),
        defAssigned = $.Deferred(),
        defAccount= $.Deferred();

  rbf_selectQuery("SELECT name, createdAt, CRM_SO_saleTotal, R39822, R48015, status#value, CRM_SO_dispatchDate, CRM_SO_dispatchNoteNumber, CRM_SQ_expectedDeliveryTime, CRM_SO_billDate, CRM_SO_billNumber, R38334 , id, CRM_SO_purchaseOrderDate, CRM_SO_purchaseOrderNumber FROM CRM_salesOrder", 5000, function (array) {


        var mappedArray= array.map(element=>{

        	var correctedDate= rbf_formatDate(element[1], rbf_getPageContext().getPageLocalization().getDateFormat());
        	var correctedRequestDate= rbf_formatDate(element[13], rbf_getPageContext().getPageLocalization().getDateFormat());
        	var correctedBillDate= rbf_formatDate(element[9], rbf_getPageContext().getPageLocalization().getDateFormat());
        	var correctedDeliveryDate= rbf_formatDate(element[8], rbf_getPageContext().getPageLocalization().getDateFormat());
        	var correctedDispatchDate= rbf_formatDate(element[6], rbf_getPageContext().getPageLocalization().getDateFormat());
        

        return{
          id:element[12],
          values:{

/*
invoice:"INVOICE N°", /si
date:"DATE",
id:"ID",
account:"ACCOUNT",
amount:"AMOUNT",
assigned:"ASSIGNED TO",
WorkflowStatus:"STATUS",
daterequest:"REQUESTED AT",
numberrequest:"REQUEST N°",
datedispatch:"DISPATCHED AT",
numberdispatch:"DISPATCH N°",
datedelivery:"DELIVERED AT",
numberdelivery:"DELIVERY N°",
datebill:"BILLED AT",
numberbill:"BILL N°"


*/


invoice:element[11] || "N/A",
  date:correctedDate,
   id:element[0],             
           account:element[3],   
                amount:element[2],
                assigned:element[4],
                WorkflowStatus:element[5],
                daterequest: correctedRequestDate|| "N/A",
                numberrequest:element[14] || "N/A",
                datedispatch:correctedDispatchDate || "N/A",
                numberdispatch:element[7] || "N/A",
                datedelivery:correctedDeliveryDate || "N/A",      
                datebill:correctedBillDate || "N/A",
                numberbill:element[10] || "N/A"
                
          }
            }

        });
       
        defSalesOrder.resolve(mappedArray);
    });

//lineItemProducts
    rbf_selectQuery("SELECT CRM_L_lineCode, CRM_L_productCode, CRM_L_itemQuantity,  CRM_L_lineTotal, name, R29223, id FROM CRM_lineItem", 5000, function (array) {


        var mappedArray= array.map(element=>{


        return{
          id:element[6],
          values:{
                date:"", //from Sales Order
                invoice:element[5], //Initially, sales order ID to extract all other data
                assigned:"", //from Sales Order
                id:element[0],
                account:"", //from Sales Order
                code:element[1] || "N/A", 
                product:element[4].toString().split("X")[1] || "N/A",
                quantity:element[2],
                amount:element[3]
          }
            }

        });
       
        defLineItems.resolve(mappedArray);
    });

//Accounts
    rbf_selectQuery("SELECT name, id FROM CRM_account5", 50000, function (array) {


        var mappedArray= array.map(element=>{

        return{
          id:element[1],
          values:{
                id:element[0]
          }
            }

        });
        defAccount.resolve(mappedArray);
    });

    rbf_selectQuery("SELECT firstName, lastName, id FROM USER", 5000, function (array) {


        var mappedArray= array.map(element=>{

        return{
          id:element[2],
          values:{
                id:element[0] +" "+ element[1]
          }
            }

        });
       
        defAssigned.resolve(mappedArray);
    });

 $.when(defSalesOrder, defLineItems, defAccount, defAssigned).then(function (salesOrder, lineItems, account, assigned) {


        salesOrder=accountIDtoValue(salesOrder,account);
        salesOrder=assignedIDtoValue(salesOrder,assigned);
        lineItems=lineItemFillFromSalesOrder(lineItems,salesOrder);
        //var salesOrders = JSON.stringify(salesOrder);
    

        salesOrder=salesOrder.map(function(object){
            return object.values;
        });

        var salesOrdersNames={
invoice:"INVOICE N°",
date:"DATE",
id:"ID",
account:"ACCOUNT",
amount:"AMOUNT",
assigned:"ASSIGNED TO",
WorkflowStatus:"STATUS",
daterequest:"REQUESTED AT",
numberrequest:"REQUEST N°",
datedispatch:"DISPATCHED AT",
numberdispatch:"DISPATCH N°",
datedelivery:"DELIVERED AT",
datebill:"BILLED AT",
numberbill:"BILL N°"
};


        lineItems=lineItems.map(function(object){
            return object.values;
        });

        var productsNames={date:"DATE",
invoice:"INVOICE N°",
assigned:"VENDOR",
id:"ID",
account:"ACCOUNT",
code:"CODE",
product:"PRODUCT",
quantity:"QUANTITY",
amount:"TOTAL"
};


       var objectsStructure={
	sales:
	{names:salesOrdersNames,
		records:salesOrder
	},
	products:
	{
		names:productsNames,
		records:lineItems
	}
};


       ReactDOM.render(<App objectsStructure={objectsStructure}/>,document.getElementById('Selector'));
    });
});














if (module.hot) {
  module.hot.accept();
}