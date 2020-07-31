import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import styles from './HomeStyles';
import {ScrollView} from 'react-native-gesture-handler';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      dataSource: [],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => console.log(error)); //to catch the errors if any
  }
  country = (text) => {
    this.setState({country: text});
  };
  renderItem = (data) => (
    <TouchableOpacity style={styles.list}>
      <Text style={styles.lightText}>{data.item.name}</Text>
      <Text style={styles.lightText}>{data.item.email}</Text>
      <Text style={styles.lightText}>{data.item.company.name}</Text>
    </TouchableOpacity>
  );
  render() {
    return (
      <View styles={styles.mainContainer} pointerEvents="box-none">
        <ScrollView>
          <View styles={styles.innerContainer} pointerEvents="box-none">
            <TextInput
              style={styles.textInput}
              placeholder="Enter country"
              onChangeText={this.country}
              keyboardType="default"
              editable={true}
              value={this.state.country}
            />
            <TouchableOpacity style={styles.submitButton} onPress={this.submit}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={(item) => this.renderItem(item)}
            keyExtractor={(item) => item.id.toString()}
          />
        </ScrollView>
      </View>
    );
  }
}
