//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slideshow from 'react-native-image-slider-show';


  export default class SlideshowTest extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        containerStyl:
        {borderRadius:
          20
        },
        position: 1,
        interval: null,
        height: 170,
        dataSource: [
          {
            url: 'https://cdn.vox-cdn.com/thumbor/diUZoKqsmfjbhUadzj-VxUwKa3U=/0x0:900x598/920x613/filters:focal(378x227:522x371):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/54845105/6805312050_d177ea0691_o.0.png',
          }, {
            url: 'https://i.imgur.com/8IkDdx0.png',
          }, {
            url: 'https://i.imgur.com/0rI72pu.png',
          },
        ],
      };
    }
  
    UNSAFE_componentWillMount() {
      this.setState({
        interval: setInterval(() => {
          this.setState({
            position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
          });
        }, 3000)
      });
    }
  
    UNSAFE_componentWillUnmount() {
      clearInterval(this.state.interval);
    }
  
    render() {
      return (
          <View style = {styles.container}>
      <Slideshow 
          
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })}
          height ={this.state.height}
          borderRadius = {this.state.containerStyle}

          />
          </View>
      );
    }
  } 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 10,
        height: 50,
        arrowSize: 0,
    },
});

//pormaporma
//0xe0f21fac8d3a71c1