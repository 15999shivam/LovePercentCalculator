import React from "react";
import { StyleSheet, Text, View, Keyboard } from "react-native";
import { TextInput, Appbar, Button } from "react-native-paper";
import DisplayLove from "./Components/DisplayLove";

export default class App extends React.Component {
  state = {
    fname: "",
    sname: "",
    result: ""
  };
  async calculate() {
    this.setState({
      result: "Loading..."
    });
    Keyboard.dismiss();
    try {
      let data = await fetch(
        `https://love-calculator.p.rapidapi.com/getPercentage?fname=${
          this.state.fname
        }&sname=${this.state.sname}`,
        {
          headers: {
            "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
            "X-RapidAPI-Key": "YOUR API KEY GOES HERE"
          }
        }
      );
      data = await data.json();
      this.setState({
        result: data
      });
    } catch (e) {
      console.log("error is running from here " + e);
      this.setState({
        result: "error"
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title='Love % Calculator'
            style={{ alignItems: "center" }}
          />
        </Appbar.Header>

        <TextInput
          label='Person1 (Male)'
          value={this.state.fname}
          onChangeText={text => this.setState({ fname: text })}
          style={styles.input}
        />
        <TextInput
          label='Person2 (Female)'
          value={this.state.sname}
          onChangeText={text => this.setState({ sname: text })}
          style={styles.input}
        />

        <Button
          icon='mood'
          mode='contained'
          onPress={this.calculate.bind(this)}
          style={styles.button}
        >
          Calculate
        </Button>
        <DisplayLove result={this.state.result} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  input: { backgroundColor: "white", margin: 15, fontSize: 12, height: 100 },
  button: {
    margin: 15,
    padding: 7
  }
});
