import React from 'react'
import './Topbar.css'
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">admindashboard</span>

            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
