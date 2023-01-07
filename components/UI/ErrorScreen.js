import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import IconRender from "./IconRender";
import Icons from "../../assets/UI/Icons";

const ErrorScreen = ({colors}) => {
    const {errorIcon} = Icons()
    return (
        <View style={styles.parent}>
        <IconRender icon={errorIcon} />
            <Text style={{color: colors.text, marginBottom: 4}}>Error Occurred</Text>
            <Button title="Read Offline News" color={colors.accent} />
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        alignItems: "center",
        justifyContent: "center",
        height: "90%",
    }
})

export default ErrorScreen