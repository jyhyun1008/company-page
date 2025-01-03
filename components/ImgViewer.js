"use client"
import {useState} from 'react'

function ImgViewer(props) {
    
    const visibleStyle = {
        display: 'block',
        position: 'fixed',
        zIndex: 99999,
        width: '100vw',
        height: '100vh',
        padding: '20px',
        top: 0,
        left: 0,
        backgroundColor: '#000000bb'
    }

    const invisibleStyle = {
        display: 'none'
    }

    const imgStyle = {
        width: '100%',
        height: '100%',
        aspectRatio: 'unset !important',
        objectFit: 'contain',
    }

    const closeStyle = {
        position: 'absolute',
        top: 0,
        right: 0,
        color: 'white',
        zIndex: 999999,
        padding: '1rem',
    }
    
    const [viewerVis, setView] = useState(invisibleStyle)

    function viewerVisible() {
        setView(visibleStyle)
    }
    function viewerNotVisible() {
        setView(invisibleStyle)
    }
    return (
    <div>
        <img src={props.src}  onClick={viewerVisible}/>
        <div className="viewer" style={viewerVis}>
            <div style={closeStyle} onClick={viewerNotVisible}><i className="las la-times" ></i></div>
            <img src={props.src} style={imgStyle} />
        </div>
    </div>
  )
}
  
  export default ImgViewer
  