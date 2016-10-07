<script>
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

$(function(){
    var defSalesOrder = $.Deferred(),
        defAssigned = $.Deferred(),
        defAccount= $.Deferred();

  rbf_selectQuery("SELECT name, CRM_SO_saleDate, CRM_SO_saleTotal, R39822, R48015, status#value, CRM_SO_dispatchDate, CRM_SO_dispatchNoteNumber, CRM_SQ_expectedDeliveryTime, CRM_SO_billDate, CRM_SO_billNumber, R38334 , id FROM CRM_salesOrder", 5000, function (array) {


        mappedArray= array.map(element=>{

        return{
          id:element[12],
          values:{
                id:element[0],
                date:element[1],
                amount:element[2],
                account:element[3],
                assigned:element[4],
                WorkflowStatus:element[5],
                datedispatch:element[6],
                dispatchnumber:element[7],
                datedelivery:element[8],
                datebill:element[9],
                numberbill:element[10], 
                invoice:element[11]
          }
            }

        });
       
        defSalesOrder.resolve(mappedArray);
    });

    rbf_selectQuery("SELECT name, id FROM CRM_account5", 5000, function (array) {


        mappedArray= array.map(element=>{

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


        mappedArray= array.map(element=>{

        return{
          id:element[2],
          values:{
                id:element[0] +" "+ element[1]
          }
            }

        });
       
        defAssigned.resolve(mappedArray);
    });

 $.when(defSalesOrder,defAccount,defAssigned).then(function (salesOrder, account, assigned) {


        salesOrder=accountIDtoValue(salesOrder,account);
        salesOrder=assignedIDtoValue(salesOrder,assigned);
        //var salesOrders = JSON.stringify(salesOrder);
       console.log(salesOrder);
       console.log(account);
       console.log(assigned);
    });
});

</script>