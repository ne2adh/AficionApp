import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {containers} from '../config/styles';

export default class MainScreen extends Component {
    render(){
        return(
            <SafeAreaView  style={containers.safeareaview} >
                <View>
                    <Text> Principal</Text>
                </View>
            </SafeAreaView>
        )
    }
}    
    