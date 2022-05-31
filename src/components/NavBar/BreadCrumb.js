import React, { useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import "./BreadCrumb.css"

const BreadCrumb = ()=>{

    const history = useHistory() 
    const [path, updatePath] = useState();
    useEffect(() => {
       return history.listen((location) => { 
          updatePath(location.pathname);
          console.log(`You changed the page to: ${location.pathname}`) 
       }) 
    },[history]) 
 
    return <div className='BreadCrumb'><Link >-{path}</Link></div>;
}


export default BreadCrumb;