import React, { Component } from 'react';

import { Button, ButtonGroup, InputGroup } from "@blueprintjs/core";

export class DisplayHeader extends Component {

    render() { 
        return ( 
            <div className="DisplayHeader">
                <div className="SearchInput">
                    <InputGroup 
                    className="bp3-round"
                    leftIcon="search"
                    placeholder="Search for Alerts"
                    ></InputGroup>
                    
                </div>
                
                
                <div className="ButtonGroup">
                    <ButtonGroup >
                        <Button icon="list" minimal={true}>List</Button>
                        <Button icon="grid-view" minimal={true}>Group By Trader</Button>
                        <Button minimal={true} disabled={true}>Take Action</Button>    
                    </ButtonGroup>
                    
                </div>
            </div>
        );
    }
}
