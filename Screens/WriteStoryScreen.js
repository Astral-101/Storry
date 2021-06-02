import * as React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity, ToastAndroid, KeyboardAvoidingView} from 'react-native';
import { Header } from 'react-native-elements';
import db from "../config";
import firebase from "firebase";
export default class App extends React.Component {

  constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory=()=>{
      db.collection("stories").add({
        title: this.state.title,
        author: this.state.author,
        storyText: this.state.storyText
      })

      this.setState({
        title: '',
        author: '',
        storyText: ''
      })
      
    }

  render() {
    return (
      <KeyboardAvoidingView style={styles.allText} behavior = "padding" enabled>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.titleBox}
          value = {this.state.title}
          placeholder="Title of the story"
          onChangeText = {(text)=>{
            this.setState({
              title: text
            })

          }}
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Author of the story"
          value = {this.state.author}
          onChangeText = {(text)=>{
            this.setState({
              author: text
            })

          }}
        />

        <TextInput 
                    placeholder="WRITE STORY"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}
                    onChangeText = {(text)=>{
                      this.setState({
                        storyText: text
                      })
          
                    }}
                    />

        <TouchableOpacity style={styles.submitButton} onPress = {this.submitStory()}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: 'lightgreen',
    flex: 1,
  },
  header: {
    backgroundColor: 'blue'
  },
  headerText: {
    fontFamily: 'Eras Bold ITC',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  titleBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'Eras Bold ITC',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  authorBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'Eras Bold ITC',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  storyText: {
      height: 250,
      margin: 10,
      backgroundColor : 'white',
      fontFamily : 'Eras Bold ITC',
  },
  submitButton: {
    backgroundColor: 'blue',
    width: '50%',
    height: 40,
    marginTop: 10,
    padding: 5,
    marginLeft: 80,
  },
  buttonText: {
    fontFamily: 'britannic',
    textAlign: 'center',
    fontSize: 25,
  },
});