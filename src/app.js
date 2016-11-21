/**
 * @Author: chenweizhi
 * @Date:   2016-11-21
 */

import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Header from './container/header.jsx'
import Content from './container/content.jsx'
import Footer from './container/Footer.jsx'

const MOUNT_NODE = document.getElementById('app')

class App extends Component{
	
	render (){
        return(
            <div>
        		<Header />
        		<Content name="哈ni"/>
        		<Footer />
            </div> 
        )
    }
}

ReactDom.render(<App />,MOUNT_NODE)
