import React, { Component } from 'react';
 
import { StyleSheet,View, FlatList, Text, Alert , Linking} from 'react-native';
 
export default class Help extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Help",
  });
  
  constructor(props)
  {
    super(props);
 
    this.state = { FlatListItems: [

      {key: ''},
      {key: 'ส่งคำติชม'},
      {key: 'รายงานปัญหา'},
      {key: ''},

    ]}
  }
 
FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }
 
  GetItem (item) {
   
  Alert.alert(item);
 
  }

 
  render() {
    return (
        <View style = {{ flex:1, backgroundColor: "#425273" }}>
          <View style={styles.MainContainer}>
        
            <FlatList
            
                data={ this.state.FlatListItems }

                ItemSeparatorComponent = {this.FlatListItemSeparator}
      
                renderItem={({item}) => <Text style={styles.FlatList_Item} 
                //onPress={() => Linking.openURL('https://www.facebook.com/messages/t/444389445965747')} 
                > {item.key} </Text>}


              />
          
            </View>  
        </View>
            
    );
  }
}
 
const styles = StyleSheet.create({
 
MainContainer :{

flex:1,
//marginTop: 10,
 
},
 
FlatList_Item: {
    padding: 10,
    fontSize: 20,
    height: 50,
    left: 30,
    color: "white",
},
 
});