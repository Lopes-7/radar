import React, { Component } from 'react';

import {SidebarHeader} from "./SidebarHeader";
import FilterTable from "./FilterTable";

//componente 
export class Sidebar extends Component {
    
    render() { 
        return (
        <div className="sidebar">
            <SidebarHeader />
            <FilterTable /> 
        </div>
        );
    }
}
 
