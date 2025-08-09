import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, Modal } from 'react-native'
import React, { } from 'react'

export default function ConfirmModal(props: any) {


    let option = props.data

    return (
        <Modal
            supportedOrientations={['portrait', 'landscape']}
            transparent={true}
            visible={props.visible}
            style={{ flex: 1, width: '100%', height: '100%', }}
        >

            <TouchableWithoutFeedback onPress={() => props?.unVisibal()}>

                <View style={styles.mainView}>

                    <TouchableOpacity style={[styles.insideView, { position: 'relative', }]} activeOpacity={1}>

                        <TouchableOpacity onPress={() => props.unVisibal()} style={styles.crossIcon}>

                            <Text>X</Text>

                        </TouchableOpacity>

                        <View>
                            <Text style={[styles.modalTitleText, { fontSize: 12 }]}>{option?.title} <Text style={[styles.modalBodyText, { fontWeight: 'normal', fontSize: 12, color: '#000' }]}>{option?.body1}</Text></Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.modalTitleText, { fontSize: 11, color: 'gray', fontWeight: 'normal', left: 5 }]}>{option?.body}</Text>
                            </View>

                        </View>

                        <TouchableOpacity
                            style={[styles.btn, { backgroundColor: props.btn1Color ? props.btn1Color : 'red' }]}
                            onPress={() => props.btn1()}
                        >
                            <Text style={styles.btnText}>{option?.btn1}</Text>

                        </TouchableOpacity>

                        {option?.btn2 &&

                            <TouchableOpacity
                                style={[styles.btn, { backgroundColor: props.btn2Color ? props.btn2Color : '#E7E7E9' }]}
                                onPress={() => props.btn2()}
                            >
                                <Text style={[styles.btnText, { color: props.ButtonTextColor ? props.ButtonTextColor : '#8A8A8A' }]}>{option?.btn2}</Text>

                            </TouchableOpacity>

                        }

                    </TouchableOpacity>

                </View>

            </TouchableWithoutFeedback>

        </Modal>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    insideView: {
        width: '100%',
        padding: 30,
        backgroundColor: '#F2F2F8',
        elevation: 6,
    },
    modalTitleText: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },
    modalBodyText: {
        fontSize: 14,
        color: '#8A8A8A',
        marginVertical: 10
    },
    btn: {
        width: '100%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10
    },
    btnText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    crossIcon: {
        position: 'absolute',
        top: -30,
        left: 8
    }
})