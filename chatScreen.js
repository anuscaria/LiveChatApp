import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput ,
  Image,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import { Card,CardItem,Thumbnail,Body, Left, Right, Button, Icon} from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/AntDesign';
import { createSwitchNavigator } from 'react-navigation';

var messages = [];
var data = [];
var replay = [
    {label:'How are you ?'},
]
class LikeTab extends React.Component{
    constructor() {
        super();
    this.state = {
        message : '',
        msg : '',
        clicked: false,
        timePassed: false,
       
    }
}
componentDidMount(){
    messages = [];
}
    createChatMessage(){
        if(this.state.clicked == true){
            data = messages;
            return data.map((item,key) => {
                return( 
                    <View style={{marginTop:'1%'}}>
                        <View style={{alignSelf:'flex-end',marginRight:'1%',flex:1,justifyContent: 'flex-start',flexDirection:'row-reverse'}} key={key}>
                            <View style={{
                                    flex: -1,
                                    marginLeft: 5,
                                    marginRight: 5,
                                    backgroundColor: '#d7f2bf',
                                    borderRadius: 10,
                                    padding: 5,
                                    }}>
                                <Text style={{alignSelf:'flex-end',flex:7,justifyContent:'flex-end'}}>{item}            <FontAwesome5 name="check-double" size={12} color={'#00bffe'}/></Text>
                                
                            </View>
                            <Icons name="like2" size={23}  onPress = { () =>{ this.props.navigation.navigate('Details',
                            { chatContent : item });}}/>
                        </View>
                        {((data.length - 1) == key) ?  (this.state.timePassed == true) ? this.createReplayMessage():null :this.createReplayMessage()}
                    </View>
                )
            })
        }
    }
    createReplayMessage(){
        console.log("replay message...")
        return(
            <View style={{alignSelf:'flex-start',marginRight:'1%',flex:1,justifyContent: 'flex-start',flexDirection:'row-reverse',marginTop:'1%'}}>
                <View style={{
                    flex: -1,
                    marginLeft: 5,
                    marginRight: 5,
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    padding: 5,
                    }}>
                    <Text>{replay[0].label}         </Text>
                </View>
            </View>
        )
    }
ShowAlertWithDelay=()=>{
 console.log("timer called")
 this.state.timePassed = false;
    setTimeout(() =>{
       this.setState({
        timePassed:true
       });
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
     // Alert.alert("Alert Shows After 5 Seconds of Delay.")
    }, 3000);
  }
    render(){
        return(
            // <KeyboardAvoidingView style={styles.keyboardAvoidingView}  enabled   >
            <SafeAreaView style={{height:'100%'}}>
                <View style={{height:'100%',flex:1,flexDirection:'column'}}>
                    <Image source ={require('../../assets/background.png')}style={styles.backgroundImage} resizeMode="cover"/>
                        <View style={{Height:'100%',flex:10}}>
                            <ScrollView style={{Height:'90%'}} ref={ref => {this.scrollView = ref}}
                                onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}>
                                <Card style={{}}>
                                    <CardItem>
                                        <Text><Text>Hi Iam </Text><Text style={{fontWeight: "bold"}}>Riya</Text>.Your friendly <Text style={{fontWeight: "bold"}}>banking assistant</Text>.Unlike my friend Siri,Alexa and Google assistant, <Text style={{fontWeight: "bold"}}>I'm Banking expert</Text></Text>
                                    </CardItem>
                                </Card>
                                <View>
                                <View style={{alignSelf:'flex-start',marginRight:'1%',flex:1,justifyContent: 'flex-start',flexDirection:'row-reverse'}}>
                                    <View style={{
                                        flex: -1,
                                        marginLeft: 5,
                                        marginRight: 5,
                                        backgroundColor: '#ffffff',
                                        borderRadius: 10,
                                        padding: 5,
                                        }}>
                                        <Text style={{width:'80%'}}>HAI..                    </Text>
                                    </View>
                                </View>
                                    {this.createChatMessage()}
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{flex:1.1}}>
                            <View style={{alignSelf:'center',height:'5%',width:'97%',backgroundColor:'#ffffff',flex:1,flexDirection:'row',borderStyle:'solid',borderWidth:1,borderRadius:5}}>
                            <TextInput placeholder="Type something"
                                placeholderTextColor="grey"
                                numberOfLines={4}
                                multiline={true}
                                style={{width:'85%',flex:8}}
                                onChangeText={(message) => {
                                    this.setState({
                                        message,
                                    })
                                }}
                                value={this.state.message}
                            />
                            <View style={{flex:1,alignItems:'center',justifyContent:'center',top:'4%',alignContent:'space-around'}}>
                                <FontAwesome name="send" style={{flex:1}} size={20} onPress={() =>{
                                     messages.push(this.state.message);
                                    //alert(this.state.message)
                                    this.setState({
                                        msg:this.state.message,
                                        clicked:true,
                                        message:'',
                                       // count:this.state.count,
                                       // timePassed:false
                                    })
                                   
                                    {this.ShowAlertWithDelay()} 
                                    // if(!this.timerHandle){
                                    //     this.timerHandle = setTimeout(() => {  
                                    //         this.setState({ timePassed: true });        // ***
                                    //         this.timerHandle = true;                  // ***
                                    //     }, 2000);
                                    // } 
                                }}/>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
export default LikeTab;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
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
    keyboardAvoidingView: { flexGrow: 1, flexShrink: 1 },
})