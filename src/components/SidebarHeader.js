import React, { Component } from 'react';

import { Icon, Navbar, NavbarGroup, NavbarHeading } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

export class SidebarHeader extends Component{
    render() { 
        return ( 
            <div>
                <Navbar className="radar">
                    <NavbarGroup>
                        <Icon  icon={IconNames.CIRCLE} />
                        <NavbarHeading>RADAR</NavbarHeading>
                        <div className="icons">
                            <Icon icon={IconNames.USER} />
                            <Icon icon={IconNames.NOTIFICATIONS} />
                            <Icon icon={IconNames.HELP} />
                        </div>     
                    </NavbarGroup>
                </Navbar> 
                <div className="open-flags">    
                    <div className="icons">
                        <Icon icon={IconNames.CHEVRON_LEFT} />
                        Sets 
                    </div>
                    <p className="open-flags-title">OPEN FLAGS</p>
                </div>
            </div>
         );
    }
}
