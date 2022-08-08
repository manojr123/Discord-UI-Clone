import React from "react"

const SideBarIcon = ({icon, text="tooltip 💡"}) => (
    <div className="h-16">
        <div className="sidebar-icon group">
            {icon}
            <span class="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    </div>
    
)

export default SideBarIcon;