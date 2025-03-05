import React, { useContext,useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { context } from '../../context/context';

const Sidebar = () => {

    const [Extended, setExtended] = useState(false);
    const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(context)

    const loadPrompt = async(prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
  return (
    <div className="sidebar">
        <div className="top">
            <img className='menu' onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon} alt="" />
            <div onClick={ ()=> newChat()} className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {Extended?<p>New Chat</p>:null}
            </div>

            {Extended
            ?<div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompts.map((item, index) => (
                    <div onClick={()=>loadPrompt(item)} className="recent-entry"> {/* Ensure key is unique */}
                        <img src={assets.message_icon} alt="" />
                        <p>{item.slice(0, 18)} ...</p>
                    </div>
                ))}

                
            </div>
            :null}
            
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {Extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {Extended?<p>Activity</p>:null} 
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {Extended?<p>Setting</p>:null} 
            </div>
        </div>
    </div>
    )
}

export default Sidebar