import { TouchableOpacity, View,StyleSheet } from "react-native"
import { COLOR } from "../../enums/Stylefonts";
import { Check } from "../../Assets/svg";

const Checkbox=(props)=>{
    const {onPress, check,check1} = props
    return(
            <TouchableOpacity onPress={onPress}>
                <View style={styles.check}>
                    { 
                        check ? <Check/>:null
                    }
                    { 
                        check1 ? <Check/>:null
                    }
                </View>
            </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    check:{
        height:18,
        width:18,
        borderWidth:1,
        borderColor:COLOR.yellow,
        borderRadius:3,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Checkbox;