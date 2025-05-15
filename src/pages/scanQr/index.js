import React, { useState, useRef, useCallback } from "react";
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

const QRScanner = () => {
    const [permission, requestPermission] = useCameraPermissions();
    const [facing, setFacing] = useState("back");
    const lockQrRead = useRef(false);
    const [isFocused, setIsFocused] = useState(false);
    const Navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            setIsFocused(true);
            lockQrRead.current = false;
            return () => {
                setIsFocused(false);
            };
        }, [])
    );

    const handleScan = ({ data }) => {
        Alert.alert("Código Escaneado", data);
        Navigation.navigate("Produtos");
    };

    if (!permission) return <View style={styles.container} />;

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Precisamos da sua permissão para usar a câmera</Text>
                <Button title="Permitir" onPress={requestPermission} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {isFocused && (
                <CameraView
                    style={styles.camera}
                    facing={facing}
                    barcodeScannerSettings={{
                        barcodeTypes: ["qr", "code128", "code39", "ean13", "ean8", "upc_a", "upc_e"],
                    }}
                    onBarcodeScanned={({ data }) => {
                        if (!lockQrRead.current) {
                            lockQrRead.current = true;
                            handleScan({ data });
                            setTimeout(() => {
                                lockQrRead.current = false;
                            }, 1500);
                        }
                    }}
                >
                    <View style={styles.overlay}>
                        <View style={styles.scanArea} />
                    </View>
                </CameraView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    message: { textAlign: "center", marginTop: 20 },
    camera: { flex: 1 },
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    scanArea: {
        width: 250,
        height: 250,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 10,
    },
    buttonContainer: {
        position: "absolute",
        bottom: 40,
        alignSelf: "center",
    },
    button: {
        backgroundColor: "#000",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});

export default QRScanner;
