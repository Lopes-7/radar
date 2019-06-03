import React, { Component } from 'react';

import {Classes,Icon,Navbar,NavbarGroup,NavbarHeading } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

export class SidebarHeader extends Component{
    render() { 
        return ( 
        <div >
            <Navbar>
                <NavbarGroup className="container grid grid-template-columns-3">
                    <Icon  icon={IconNames.CIRCLE} />
                    <NavbarHeading >RADAR</NavbarHeading>
                    <div >
                        <Icon icon={IconNames.USER} />
                        <Icon icon={IconNames.NOTIFICATIONS} />
                        <Icon icon={IconNames.HELP} />
                    </div>
                    
                </NavbarGroup>
            </Navbar> 
            <div className="SetsContainer">    
                <div className="Sets">
                    <Icon icon={IconNames.CHEVRON_LEFT} />
                    Sets
                </div>
                <p className={"SetsTitle"}>OPEN FLAGS</p>
            </div>
        </div>
         );
    }
}
