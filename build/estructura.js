//SALES ORDER

var salesOrders=[{
invoice:"120",
date:"10/30/2000",
id:"SO2000-#0000001",
account:"Cocacola",
amount:"10875",
assigned:"Arturo",
WorkflowStatus:"Completed",
daterequest:"10/25/2000",
numberrequest:"PO2000-#0000001",
datedispatch:"10/26/2000",
numberdispatch:"#000223",
datedelivery:"10/28/2000",
numberdelivery:"#00001",
datebill:"10/29/2000",
numberbill:"#0001"
},{

invoice:"2355",
date:"05/25/2016",
id:"SO2016-#0000002",
account:"Los Andes",
amount:"7500",
assigned:"Arturo",
WorkflowStatus:"Dispatched",
daterequest:"10/10/2016",
numberrequest:"PO2016-#0000002",
datedispatch:"10/26/2016",
numberdispatch:"#000325",
datedelivery:"10/28/2016",
numberdelivery:"#00112",
datebill:"10/29/2016",
numberbill:"#0002"
},
{

invoice:"1554",
date:"10/30/2015",
id:"SO2015-#0000003",
account:"Los Andes",
amount:"4800",
assigned:"Antonio",
WorkflowStatus:"Not billed",
daterequest:"10/25/2015",
numberrequest:"PO2015-#0000003",
datedispatch:"10/26/2015",
numberdispatch:"#000453",
datedelivery:"10/28/2015",
numberdelivery:"#0003",
datebill:"10/29/2015",
numberbill:"#0013"
},
{

invoice:"705",
date:"10/10/2013",
id:"SO2013-#0000004",
account:"Pepsi",
amount:"4800",
assigned:"Antonio",
WorkflowStatus:"Completed",
daterequest:"10/01/2013",
numberrequest:"PO2016-#0000004",
datedispatch:"10/26/2013",
numberdispatch:"#000786",
datedelivery:"10/28/2013",
numberdelivery:"#0004",
datebill:"10/29/2013",
numberbill:"#0034"
},
{

invoice:"689",
date:"10/15/2014",
id:"SO2014-#0000005",
account:"Cocacola",
amount:"6300",
assigned:"Manuel",
WorkflowStatus:"Delivered",
daterequest:"10/05/2014",
numberrequest:"PO2014-#0000005",
datedispatch:"10/26/2014",
numberdispatch:"#0000553",
datedelivery:"10/28/2014",
numberdelivery:"#0005",
datebill:"10/29/2014",
numberbill:"#0025"
},
{

invoice:"45555",
date:"01/25/2011",
id:"SO2011-#0000006",
account:"Pepsi",
amount:"4300",
assigned:"Manuel",
WorkflowStatus:"Completed",
daterequest:"10/25/2011",
numberrequest:"PO2011-#0000006",
datedispatch:"10/26/2011",
numberdispatch:"#0456",
datedelivery:"10/28/2011",
numberdelivery:"#0006",
datebill:"10/29/2011",
numberbill:"#00016"
},{

invoice:"6325",
date:"10/25/2012",
id:"SO2012-#0000007",
account:"TexasCo",
amount:"1000",
assigned:"Manuel",
WorkflowStatus:"Not billed",
daterequest:"05/16/2012",
numberrequest:"PO2012-#0000007",
datedispatch:"10/26/2012",
numberdispatch:"#665",
datedelivery:"10/28/2012",
numberdelivery:"#0007",
datebill:"10/29/2012",
numberbill:"#00047"
},{
invoice:"7777",
date:"9/21/2015",
id:"SO2015-#0000007",
account:"TexasCo",
amount:"8800",
assigned:"Jose",
WorkflowStatus:"Completed",
daterequest:"05/16/2015",
numberrequest:"PO2015-#0000008",
datedispatch:"10/26/2015",
numberdispatch:"#688",
datedelivery:"10/28/2015",
numberdelivery:"#0008",
datebill:"10/29/2015",
numberbill:"#00058"
},{
invoice:"3652",
date:"10/20/2014",
id:"SO2014-#0000007",
account:"Los Andes",
amount:"3125",
assigned:"Jose",
WorkflowStatus:"Completed",
daterequest:"05/16/2015",
numberrequest:"PO2014-#0000009",
datedispatch:"10/26/2014",
numberdispatch:"#622",
datedelivery:"10/28/2014",
numberdelivery:"#0009",
datebill:"10/29/2014",
numberbill:"#00159"
},{
invoice:"9910",
date:"9/21/2016",
id:"SO2016-#0000007",
account:"TexasCo",
amount:"5500",
assigned:"Jose",
WorkflowStatus:"Completed",
daterequest:"05/16/2016",
numberrequest:"PO2016-#0000008",
datedispatch:"10/26/2016",
numberdispatch:"#688",
datedelivery:"10/28/2016",
numberdelivery:"#0008",
datebill:"10/29/2016",
numberbill:"#00058"
}
];

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
numberdelivery:"DELIVERY N°",
datebill:"BILLED AT",
numberbill:"BILL N°"
}
var products=[{
date:"05/25/2010",
invoice:"123",
assigned:"Manuel",
id:"111",
account:"Pepsi",
code:"H001234",
product:"HEINZ COMPOTA 250GR",
quantity:"3",
amount:"3600"
},{
date:"05/25/2010",
invoice:"123",
assigned:"Manuel",
id:"222",
account:"Cocacola",
code:"K120564",
product:"KRAFT MAYONESA 500GR",
quantity:"3",
amount:"7500"
},
{
date:"02/11/2016",
invoice:"124",
assigned:"Manuel",
id:"333",
account:"Polar",
code:"CK120564",
product:"DEMASA HARINA 500GR ",
quantity:"1",
amount:"2300"
},
{
date:"03/13/2013",
invoice:"125",
assigned:"Antonio",
id:"444",
account:"Pepsi",
code:"H001234",
product:"HEINZ COMPOTA 250GR",
quantity:"9",
amount:"10800"
},
{
date:"03/14/2013",
invoice:"126",
assigned:"Antonio",
id:"555",
account:"Pepsi",
code:"H001234",
product:"HEINZ COMPOTA 250GR",
quantity:"1",
amount:"1200"
},
{
date:"05/25/2016",
invoice:"127",
assigned:"Antonio",
id:"666",
account:"Polar",
code:"B452181",
product:"BATERIA AA PACK 4",
quantity:"3",
amount:"8250"
},{
date:"06/30/2016",
invoice:"128",
assigned:"Arturo",
id:"777",
account:"Del Valle",
code:"B452181",
product:"BATERIA AA PACK 4",
quantity:"3",
amount:"8250"
},{
date:"06/30/2016",
invoice:"128",
assigned:"Arturo",
id:"888",
account:"Del Valle",
code:"P256214",
product:"HARINA DE TRIGO MULTIUSO ",
quantity:"4",
amount:"14320"
},{
date:"06/30/2016",
invoice:"128",
assigned:"Arturo",
id:"999",
account:"Del Valle",
code:"P256214",
product:"HARINA DE TRIGO MULTIUSO ",
quantity:"2",
amount:"7160"
},{
date:"10/05/2016",
invoice:"129",
assigned:"William",
id:"1100",
account:"Del Valle",
code:"P256214",
product:"HARINA DE TRIGO MULTIUSO ",
quantity:"1",
amount:"32580"
},{
date:"10/06/2016",
invoice:"130",
assigned:"William",
id:"1111",
account:"Polar",
code:"AR23125",
product:"ARROZ CRYSTAL 500GR",
quantity:"6",
amount:"11100"
}
];

var productsNames={date:"DATE",
invoice:"INVOICE N°",
assigned:"VENDOR",
id:"ID",
account:"ACCOUNT",
code:"CODE",
product:"PRODUCT",
quantity:"QUANTITY",
amount:"TOTAL"
}

var objectsStructure={
	sales:
	{names:salesOrdersNames,
		records:salesOrders
	},
	products:
	{
		names:productsNames,
		records:products
	}
}