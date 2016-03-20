var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
    getInitialState: function(){
        return {items: [], newItemText: ''};
    },

    onChange: function(e){
        this.setState({newItemText: e.target.value});
    },
    handleSubmit: function(e){
        e.preventDefault();
        //reference to the item array
        var currentItems = this.state.items;
        //push new item to the array
        currentItems.push(this.state.newItemText);
        //set the items array with the change
        this.setState({items:currentItems, newItemText:''});
    },


    render: function(){

        //interpolation to div below
        var divStyle = {
            marginTop : 10
        };

        //default panel heading color as bootstrap blue
        var headingStyle = {
           //backgoundColor : '#ffffff'
        }

        if(this.props.headingColor){
            headingStyle.backgoundColor = this.props.headingColor;
        }

        //onChange is called on user keystrokes
        //value is what user sees in the input box
        return(
            <div className="col-sm-4" style={divStyle}>
                <div className="panel panel-primary">
                    <div style={headingStyle} className="panel-heading" >
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="row panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="col-sm-9">
                                <input className="form-control" onChange = {this.onChange} value ={this.state.newItemText}/>
                            </div>
                            <div className="col-sm-3">
                                <button className="btn btn-primary glyphicon-plus-sign"> Add</button>
                            </div>
                        </form>
                    </div>
                    <div className="panel-footer">
                        <List items={this.state.items}/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ListManager;