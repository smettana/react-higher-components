import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent){
    class Authentication extends Component{
        static contextTypes = {
            router:React.PropTypes.object
        }

        componentWillMount(){
            console.log('*');
            if(!this.props.authenticated){
                this.context.router.push('/');
            }
            
        }

        componentWillUpdate(nextProps, nextState){
            console.log(nextProps)
            if(!nextProps.authenticated){
                this.context.router.push('/');
            }
        }

        render(){
            return(
                <ComposedComponent { ...this.props }/>
            )
        }
    }

    const mapStateToProps = (state)=>{
        return {
            authenticated: state.authenticated
        }
    }

    return connect(mapStateToProps)(Authentication)
}