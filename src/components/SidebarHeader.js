import React, { Component } from 'react';

import { Icon, Navbar, NavbarGroup, NavbarHeading } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

export class SidebarHeader extends Component{
    render() { 
        return ( 
            <div>
                <Navbar className="radar">
                    <NavbarGroup>
                        <Icon  icon={IconNames.CIRCLE} />
                        <NavbarHeading className="radar-title">RADAR</NavbarHeading>
                        <div className="icons">
                            <Icon className="icon-user" icon={IconNames.USER} />
                            <Icon className="icon-notif" icon={IconNames.NOTIFICATIONS} />
                            <Icon className="icon-help" icon={IconNames.HELP} />
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
