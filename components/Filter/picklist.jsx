import React from 'react';
import Option from './option.jsx';
 
export default class Picklist extends React.Component {
constructor(props) {
    super(props);
    this.changeHandler=this.changeHandler.bind(this); 
}

changeHandler(event){
    console.log("settingfilter");
    this.props.setfilter({[event.target.id] : event.target.value });
}


    render() {
    //hice id = this.props.id no queria agarrar asi que yolo
    var id = this.props.id;
    const pickListArray = this.props.picklistdata.map(x => x[id]).reduce((acc, nextValue) => {
        
        return acc.indexOf(nextValue) === -1 ? acc.concat(nextValue) : acc;
    }, []);   
    
    const optionList = pickListArray.map((value) => {
        return (<Option key={value} value={value}/>);
        });
    
    return (
        <div>
            <span>{this.props.filter} :  {"   "}
                <select className="k-input" id={this.props.id} onChange={this.changeHandler}>
                    {optionList}
                </select>
            </span>
        </div>
    );
    }


}