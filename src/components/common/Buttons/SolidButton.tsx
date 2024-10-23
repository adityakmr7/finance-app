import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import React from "react";
import {COLORS} from "../../../constants";

interface SolidButtonProps extends TouchableOpacityProps{
    label: string,
    onPress:() => void
}
const SolidButton = ({label,onPress,...props}:SolidButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress}  {...props} style={styles.getStartedButton}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    getStartedButton: {
        backgroundColor: COLORS.dark,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 'auto',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        fontFamily:'Sf-Medium'
    },
})
export default SolidButton;
