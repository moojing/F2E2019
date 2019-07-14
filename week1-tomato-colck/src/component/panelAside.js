import React ,{ useState,useEffect } from 'react';
import { Route, Link } from "react-router-dom";
import Icon from '../component/Icon'
import SidebarToggler from '../component/SidebarToggler'
import useRouter from '../hook/useRouter'
import AddTask from '../page/AddTask'
import TaskList from '../page/TaskList'
import AnalysisReport from '../page/AnalysisReport' 
import Ring from '../page/Ring' 

function PanelAside (){
    const routeIcons = ['Add','List','Analysis','Ring']
    const {location} = useRouter()
    const [currentIcon,setCurrentIcon] = useState(location.pathname.slice(1))
    
    useEffect(()=>{
      setCurrentIcon(location.pathname.slice(1))
    },[location.pathname])
    
    const isActive = (icon)=>{
        return  icon === currentIcon
    }
    
    return ( 
      <>
        <div className="panel-aside-tools bg-dark"> 
          { routeIcons.map((iconName,index)=>(
             <Link to={iconName} key={index}>
                <div 
                  className="icon" 
                  onClick={()=>{setCurrentIcon(iconName)}}>

                <Icon 
                  name={iconName}
                  className={`icon-svg ${isActive(iconName)?'active':''}`}/>
              </div>
             </Link>
          ))
          }
          <SidebarToggler/>
        </div>

        <div className=" panel-aside-main bg-dark text-white"> 
          
            <Route path="/" exact component={AddTask} />
            <Route path="/add"  component={AddTask} />
            <Route path="/list"  component={TaskList} />
            <Route path="/analysis"  component={AnalysisReport} />
            <Route path="/ring"  component={Ring} />
          
          
        </div>
      </>
    )   
}

export  default PanelAside