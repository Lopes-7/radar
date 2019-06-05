import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import { Button, ButtonGroup, InputGroup, Tag } from "@blueprintjs/core";

import {changeAlertsSearch} from '../actions/actionCreators';

export class DisplayHeader extends Component {
    render() { 
        const {changeAlertsSearch, alertsSearchValue} = this.props;
         
        return ( 
            <div className="display-header">
                    <InputGroup className="ipg"
                        className="bp3-round"
                        leftIcon="search"
                        placeholder="Search for Alerts"
                        rightElement={tag}
                        onChange={(e)=>{changeAlertsSearch(e.target.value)}}>
                    </InputGroup>
                    <ButtonGroup className="buttons">
                        <Button icon="list" minimal={true} active={true} intent="primary" >List</Button>
                        <Button className="button-trader" icon="grid-view" minimal={true}>Group By Trader</Button>
                        <Button className="button-action" disabled={true}>Take Action</Button>    
                    </ButtonGroup>
            </div>
        );
    }
}

const tag = <Tag minimal={true}>152</Tag>

const mapStateToProps = store => ({
    alertsSearchValue: store.alertsSearchState.alertsSearchValue 
})
    
const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeAlertsSearch }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(DisplayHeader);