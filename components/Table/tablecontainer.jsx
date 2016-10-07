import React from 'react';
import Table from './table.jsx';
import TableTotals from './tabletotals.jsx';
import Controls from './controls.jsx';


export default class TableContainer extends React.Component {
   constructor(props) {
        super(props);

this.state={currentPage:1, recordsPerPage:4, numberOfRecords:this.props.rowdata.length, fullQuantity:"",accumulatedQuantity:"", singleQuantity:""};


this.totalAmount=this.totalAmount.bind(this);
this.totalsingle=this.totalsingle.bind(this);
this.totalaccumulated=this.totalaccumulated.bind(this);
this.pageinc=this.pageinc.bind(this);    
this.recordsPerPageChange=this.recordsPerPageChange.bind(this);
}   


componentWillMount() {
      
this.setState({
                    numberOfRecords:this.props.rowdata.length,
                    fullTotal:this.totalAmount(this.props.rowdata, "amount"),
                    accumulatedTotal:this.totalaccumulated(this.props.rowdata, "amount"),
                    singleTotal:this.totalsingle(this.props.rowdata, "amount")
                    });

if(this.props.object==="products"){
    this.setState({
                    fullQuantity:this.totalAmount(this.props.rowdata, "quantity"),
                    accumulatedQuantity:this.totalaccumulated(this.props.rowdata, "quantity"),
                    singleQuantity:this.totalsingle(this.props.rowdata, "quantity")
                });
}

}

componentWillReceiveProps(nextProps) {

 //var valuesArray= nextProps.rowdata.map(el=>parseInt(el.amount));

      this.setState({currentPage:1},
       function() {

        this.setState({
                    numberOfRecords:nextProps.rowdata.length,

                    fullTotal:this.totalAmount(nextProps.rowdata, "amount"),
                    accumulatedTotal:this.totalaccumulated(nextProps.rowdata, "amount"),
                    singleTotal:this.totalsingle(nextProps.rowdata, "amount"),
});

    if(this.props.object==="products"){
    this.setState({
                    fullQuantity:this.totalAmount(this.props.rowdata, "quantity"),
                    accumulatedQuantity:this.totalaccumulated(this.props.rowdata, "quantity"),
                    singleQuantity:this.totalsingle(this.props.rowdata, "quantity")
                });
}

        });
}


totalAmount(rowData, key){

//Returns the total amount. It maps the record array to their amount and then reduces them to a single value
return rowData.map(el=>parseInt(el[key])).reduce(( prev , next)=>{

                            return prev + next;
                        },0);
} 


totalaccumulated(rowData, key){

var counter=this.state.currentPage*this.state.recordsPerPage;

return rowData.slice(0,counter).map(el=>parseInt(el[key])).reduce(( prev , next)=>{

                            return prev + next;
                        },0);

} 


totalsingle(rowData, key){

var counter=this.state.currentPage*this.state.recordsPerPage;

return rowData.slice(counter-this.state.recordsPerPage,counter).map(el=>parseInt(el[key])).reduce(( prev , next)=>{

                            return prev + next;
                        },0);


}


pageinc(event){

    if(event.target.id=="+"){
       // console.log(this.state);
      //  console.log(Math.ceil(this.state.numberOfRecords/this.state.recordsPerPage));


 if (this.state.currentPage==Math.ceil(this.state.numberOfRecords/this.state.recordsPerPage)){
           /* this.setState(function(currentProps) {
            return {currentPage: Math.ceil(this.state.numberOfRecords/this.state.recordsPerPage)};
            });*/

    }else if(this.state.numberOfRecords>0){

        this.setState(function(previousState, currentProps) {
        return {currentPage: previousState.currentPage + 1};
        },
            function(){
                this.setState({
                    numberOfRecords:this.props.rowdata.length,
                    fullTotal:this.totalAmount(this.props.rowdata, "amount"),
                    accumulatedTotal:this.totalaccumulated(this.props.rowdata, "amount"),
                    singleTotal:this.totalsingle(this.props.rowdata, "amount"),
                    });

                if(this.props.object==="products"){

                    this.setState({fullQuantity:this.totalAmount(this.props.rowdata, "quantity"),
                    accumulatedQuantity:this.totalaccumulated(this.props.rowdata, "quantity"),
                    singleQuantity:this.totalsingle(this.props.rowdata, "quantity")})

                }
            }
        );

    }
    
       

}else{
 this.setState(function(previousState, currentProps) {
  return {currentPage: (previousState.currentPage==1 )? 1 : (previousState.currentPage -1)};
},
            function(){
                this.setState({
                    numberOfRecords:this.props.rowdata.length,
                    fullTotal:this.totalAmount(this.props.rowdata, "amount"),
                    accumulatedTotal:this.totalaccumulated(this.props.rowdata, "amount"),
                    singleTotal:this.totalsingle(this.props.rowdata, "amount")
                    });
            
                 if(this.props.object==="products"){

                    this.setState({fullQuantity:this.totalAmount(this.props.rowdata, "quantity"),
                    accumulatedQuantity:this.totalaccumulated(this.props.rowdata, "quantity"),
                    singleQuantity:this.totalsingle(this.props.rowdata, "quantity")})

                }
            }
        );
  }

    
}

//Unused for now
recordsPerPageChange(event){

    this.setState(function() {
        return {recordsPerPage: event.target.value};
        });
        if (this.state.recordsPerPage>this.state.numberOfRecords){
            this.setState(function() {
            return {recordsPerPage:this.state.numberOfRecords};
            });
    }

}


        render() {


            var totalRowArray=[' $' + this.state.singleTotal.toLocaleString("en-US"),' $' +this.state.accumulatedTotal.toLocaleString("en-US"), ' $' + this.state.fullTotal.toLocaleString("en-US")];
            var quantityRowArray=this.state.singleQuantity!==""?[this.state.singleQuantity, this.state.accumulatedQuantity, this.state.fullQuantity]:[];
            return (<div className="row">
            
           <div className="col-md-4 col-md-offset-4 col-xs-4 col-xs-offset-4"><TableTotals className={this.props.className} totalsData={totalRowArray} quantityData={this.props.object==="products"?quantityRowArray:"empty"}/></div>
           <br/>
           <div className="col-md-6 col-md-offset-3 col-xs-6 col-xs-offset-3"><h3>Report Table</h3></div>
        <div className="col-md-12 col-xs-12"><Table className={this.props.className} hrow={this.props.hrow} rowdata={this.props.rowdata} pageCounter={this.state.currentPage*this.state.recordsPerPage} itemsPerPage={this.state.recordsPerPage}/></div>
           <div className="col-md-6 col-md-offset-3 col-xs-6 col-xs-offset-3"> <Controls currentPage={this.state.currentPage} maxPages={Math.ceil(this.state.numberOfRecords/this.state.recordsPerPage)} pageinc={this.pageinc} recordsPerPage={this.state.recordsPerPage} recordsPerPageChange={this.recordsPerPageChange} numberOfRecords={this.state.numberOfRecords} /></div>
            
            </div>)
    }

}