import React from 'react';
import Table from './table.jsx';
import TableTotals from './tabletotals.jsx';
import Controls from './controls.jsx';


export default class TableContainer extends React.Component {
   constructor(props) {
        super(props);

this.state={currentPage:1, recordsPerPage:4, numberOfRecords:this.props.rowdata.length};


this.totalAmount=this.totalAmount.bind(this);
this.totalsingle=this.totalsingle.bind(this);
this.totalaccumulated=this.totalaccumulated.bind(this);
this.pageinc=this.pageinc.bind(this);    
this.recordsPerPageChange=this.recordsPerPageChange.bind(this);
}   


componentWillMount() {
      
this.setState({
                    numberOfRecords:this.props.rowdata.length,
                    fullTotal:this.totalAmount(this.props.rowdata),
                    accumulatedTotal:this.totalaccumulated(this.props.rowdata),
                    singleTotal:this.totalsingle(this.props.rowdata)
                    });

}

componentWillReceiveProps(nextProps) {

 //var valuesArray= nextProps.rowdata.map(el=>parseInt(el.amount));

      this.setState({currentPage:1},
       function() {

        this.setState({
                    numberOfRecords:nextProps.rowdata.length,
                    fullTotal:this.totalAmount(nextProps.rowdata),
                    accumulatedTotal:this.totalaccumulated(nextProps.rowdata),
                    singleTotal:this.totalsingle(nextProps.rowdata)
                    })
        });


}


totalAmount(rowData){

//Returns the total amount. It maps the record array to their amount and then reduces them to a single value
return rowData.map(el=>parseInt(el.amount)).reduce(( prev , next)=>{

                            return prev + next;
                        },0);
} 


totalaccumulated(rowData){

var counter=this.state.currentPage*this.state.recordsPerPage;

return rowData.slice(0,counter).map(el=>parseInt(el.amount)).reduce(( prev , next)=>{

                            return prev + next;
                        },0);

} 


totalsingle(rowData){

var counter=this.state.currentPage*this.state.recordsPerPage;

return rowData.slice(counter-this.state.recordsPerPage,counter).map(el=>parseInt(el.amount)).reduce(( prev , next)=>{

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
                    fullTotal:this.totalAmount(this.props.rowdata),
                    accumulatedTotal:this.totalaccumulated(this.props.rowdata),
                    singleTotal:this.totalsingle(this.props.rowdata)
                    })
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
                    fullTotal:this.totalAmount(this.props.rowdata),
                    accumulatedTotal:this.totalaccumulated(this.props.rowdata),
                    singleTotal:this.totalsingle(this.props.rowdata)
                    })
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
            return (<div className="row">
            
           <div className="col-md-4 col-md-offset-4 col-xs-4 col-xs-offset-4"><TableTotals className={this.props.className} rowdata={[' $' + this.state.singleTotal.toLocaleString("en-US"),' $' +this.state.accumulatedTotal.toLocaleString("en-US"), ' $' + this.state.fullTotal.toLocaleString("en-US")]} /></div>
           <br/>
           <div className="col-md-4 col-md-offset-4 col-xs-4 col-xs-offset-4"><h3>Report Table</h3></div>
        <div className="col-md-10 col-md-offset-1 col-xs-12"><Table className={this.props.className} hrow={this.props.hrow} rowdata={this.props.rowdata} pageCounter={this.state.currentPage*this.state.recordsPerPage} itemsPerPage={this.state.recordsPerPage}/></div>
           <div className="col-md-6 col-md-offset-3 col-xs-6 col-xs-offset-3"> <Controls currentPage={this.state.currentPage} pageinc={this.pageinc} recordsPerPage={this.state.recordsPerPage} recordsPerPageChange={this.recordsPerPageChange} numberOfRecords={this.state.numberOfRecords} /></div>
            
            </div>)
    }

}