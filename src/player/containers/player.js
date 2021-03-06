import React, {Component} from 'react'
import {StyleSheet, ActivityIndicator} from 'react-native'
import Video from 'react-native-video'
import Layout from '../components/layout'

class Player extends Component {
    state={    
        loading: true,
        fullScreen: false
    }
    onBuffer = ({isBuffering})=> {
        this.setState({
            loading:isBuffering
        })
    }


    render(){
        return(
            <Layout
                loading={this.state.loading}
                video={
                    <Video                        
                        source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
                        style={styles.video}
                        resizeMode="contain"
                        onBuffer={this.onBuffer}
                        onFullscreenPlayerWillDismiss={this.fullScreenPlayerWillDismiss}
                        />
                }
                loader={
                    <ActivityIndicator color="red"/>
                }
              
            />   
        )
    }
}
const styles= StyleSheet.create({
    video:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    }
})
export default Player