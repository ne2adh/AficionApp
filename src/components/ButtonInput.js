import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors  from '../config/colors';

const ButtonInput = ({
    iconName,    
    iconColor,
    buttonColor,
    title,
    ...rest
  }) => (
    <View style={styles.buttonContainer}>
      <TouchableOpacity>
        <Button
          {...rest}
          icon={<Icon name={iconName} size={24} color={iconColor} type={'font-awesome'} />}                          
          buttonStyle={{
            backgroundColor: buttonColor
         }}
          title={title}
      />
     </TouchableOpacity>
    </View>
  )
  
  const styles = StyleSheet.create({
    buttonContainer: {
      margin: 10,
      width: '100%',
      paddingHorizontal: 30
    },
    
  })

  export default ButtonInput;