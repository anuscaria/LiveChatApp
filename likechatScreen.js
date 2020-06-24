import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TextInput,
  Image
} from 'react-native';
import { Card,CardItem,Thumbnail,Body, Left, Right, Button, Icon} from 'native-base'
var likedChatArray = [];
class LikeTab extends React.Component{
    static defaultNavigationOptions = {
        title: 'Liked Chats',
        headerStyle:{height: 30,backgroundColor: '#3eb549',maxWidth:'95%'},
        // header: null,
         gesturesEnabled: true,
         
        };
        constructor() {
            super();
        this.state = {
           commant : []
        }
    }
        componentDidMount(){
            likedChatArray.push(this.props. navigation.getParam('chatContent', 'NO-ID'));
            this.setState({
                commant : likedChatArray
            })
        }
        _keyExtractor = (item, index) => index.toString();
    render(){
        
        return(
            <View style={styles.container}>
                <Image source ={require('../../assets/background.png')}style={styles.backgroundImage} resizeMode="cover"/>
                <FlatList 
                    data={this.state.commant}
                    initialNumToRender={0}
                    keyExtractor={this._keyExtractor}
                    renderItem={({item}) =>
                        <View style={{marginTop:'1%',flexDirection: 'row',width:'100%',paddingLeft:'2%'}}>
                            <View style={{
                               // flex: -1,
                               
                                
                                marginTop:'2%',
                                backgroundColor: '#d7f2bf',
                                borderRadius: 10,
                                padding: 5,
                                }}>
                                    <TextInput style={{color:'blue'}} editable = {false} multiline={true} numberOfLines={2}>
                                    You liked : <Text style={{fontWeight:'bold'}}>{item}</Text>
                                    </TextInput>
                            </View>
                        </View>
                    }
                />
            </View>
        )
    }
}
export default LikeTab;
const styles = StyleSheet.create({
    container:{
        flex:1,
         //alignItems:'center',
        justifyContent:'center',
        //margin:"5%",
        width:"100%"
    },
      backgroundImage:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.3,
        width:'100%',
        height:'100%'
    },
})