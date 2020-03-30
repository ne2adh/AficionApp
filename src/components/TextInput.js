import React from 'react'
import { Input } from 'react-native-elements'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors  from '../config/colors';

const TextInput = ({
    iconNameLeft,
    iconNameRight,
    iconColor,
    secureTextEntry,
    keyboardType,
    name,
    placeholder,
    value,    
    bolGone,
    onPress,
    ...rest
  }) => (
    <View style={styles.inputContainer}>
      <Input
        {...rest}
        leftIcon={<Icon name={iconNameLeft} size={24} color={iconColor} type={'font-awesome'} />}
        leftIconContainerStyle={styles.iconStyle}        
        rightIcon={bolGone ?
          <TouchableOpacity activeOpacity={0.8} style={styles.btnVisibility} onPress={onPress}>
             <Icon name={(secureTextEntry)? 'eye-slash':'eye'} size={24} color={iconColor} type={'font-awesome'} />
          </TouchableOpacity>:
          <Icon name={iconNameRight} size={24} color={iconColor} type={'font-awesome'} />
        }
        placeholderTextColor={colors.lightishgray}
        placeholder={placeholder}
        name={name}
        value={value}
        style={styles.input}        
        inputStyle={{ fontSize: 16, paddingVertical: 7, paddingHorizontal:7,color: colors.ypsDark }}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onPress={onPress}
      />
    </View>
  )
  
  const styles = StyleSheet.create({
    inputContainer: {
      margin: 10,
      width: '100%',
      paddingHorizontal: 20,
    },
    iconStyle: {
      marginLeft: 0,
    },
    input: {
        alignItems: 'center',
    },
    btnVisibility: {

    }
  })

  export default TextInput;