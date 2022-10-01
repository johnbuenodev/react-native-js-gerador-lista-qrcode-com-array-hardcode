import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {

  const arrayDataQrcode = [
    {name:"John", value:'202cb962ac59075b964b07152d234b70'},
    {name:"Mari", value:'202cb962ac59075b964b07152d234b71'},
    {name:"Marcos", value:'202cb962ac59075b964b07152d234b72'},
   ];

  const [qrCodeValue, setQrCodeValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const renderItem = ({item}) => (
    <QrcodeFunc key={item.value} name={item.name} value={item.value} />
  );

  return (
    <SafeAreaView style={{flex:1}}>
     {
      /* Exemplo de como exibir dados*** MAS ESSA FORMA SOBREPOE OS ELEMENTOS TENDO Q CRIAR UM SCROLL
         Melhor usabilidade utilizando no mobile o flalist para tal

      arrayDataQrcode.length > 0 ? arrayDataQrcode.map((qrCodeItem) => {
       return(
        <QrcodeFunc key={qrCodeItem.value} name={qrCodeItem.name} value={qrCodeItem.value} />
       )
      }) : null

      */    
     }

     <FlatList
        data={arrayDataQrcode}
        renderItem={renderItem}
        keyExtractor={item => item.value}
     />
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerQrCode: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:16,
    marginTop:16
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5
  },
  textInformation: {
    fontSize: 18,
    textAlign: 'center',
    margin: 5,
    marginBottom:16,
  },
  textInput: {
    flexDirection: 'row',
    width: '92%',
    paddingHorizontal: 8,
    height: 40,
    marginTop: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'black',
    textDecorationLine: 'none',
    textDecorationColor: 'none',
    fontSize: 18
  }
});

const QrcodeFunc = ({name, value}) => (
        <> 
        <View style={styles.containerQrCode} key={value}>
        { value ? 
        <QRCode
         value={value}
         size={250}
         color="black"
         backgroundColor="white"
         logoSize={30}
         logoMargin={2}
         logoBorderRadius={15}
         logoBackgroundColor="yellow"
        /> : null
        } 
        <Text style={styles.textInformation}> 
         {name}
        </Text> 
        </View>
        </>
);
