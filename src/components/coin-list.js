/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

function Item({title}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function coinList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    // (async function getList() {
    //   const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/list');

    //   setList(data);
    // })();
    const data = [{"id":"01coin","symbol":"zoc","name":"01coin"},{"id":"02-token","symbol":"o2t","name":"O2 Token"},{"id":"0chain","symbol":"zcn","name":"0chain"},{"id":"0x","symbol":"zrx","name":"0x"},{"id":"0xcert","symbol":"zxc","name":"0xcert"},{"id":"0xdark","symbol":"oxd","name":"0xDark"},{"id":"10m-token","symbol":"10mt","name":"10M Token"},{"id":"12ships","symbol":"TSHP","name":"12Ships"},{"id":"1337","symbol":"1337","name":"Elite"},{"id":"1irstcoin","symbol":"fst","name":"1irstcoin"},{"id":"1million-token","symbol":"1mt","name":"1Million Token"},{"id":"1sg","symbol":"1sg","name":"1SG"},{"id":"1world","symbol":"1wo","name":"1World"},{"id":"1x2-coin","symbol":"1x2","name":"1X2 Coin"},{"id":"2345-star-coin","symbol":"stc","name":"2345 Star Coin"},{"id":"2acoin","symbol":"arms","name":"2ACoin"},{"id":"2give","symbol":"2give","name":"2GIVE"},{"id":"2x2","symbol":"2x2","name":"2X2"},{"id":"300cubits","symbol":"teu","name":"300cubits"},{"id":"300fit","symbol":"fit","name":"300FIT"},{"id":"300token","symbol":"300","name":"300 Token"},{"id":"360-tribe","symbol":"tribe","name":"360 Tribe"},{"id":"3d-chain","symbol":"3dc","name":"3D-Chain"},{"id":"404","symbol":"404","name":"404"},{"id":"42-coin","symbol":"42","name":"42-coin"},{"id":"4a-coin","symbol":"4ac","name":"4A Coin"},{"id":"4hiphop","symbol":"hiphop","name":"4Hiphop"},{"id":"4new","symbol":"kwatt","name":"4New"},{"id":"4xbit","symbol":"4xb","name":"4xBit"},{"id":"502-bad-gateway-token","symbol":"z502","name":"502 Bad Gateway Token"},{"id":"520","symbol":"520","name":"520"},{"id":"777-bingo","symbol":"777","name":"777.Bingo"},{"id":"7eleven","symbol":"7e","name":"7ELEVEN"},{"id":"808coin","symbol":"808","name":"808Coin"},{"id":"808ta-token","symbol":"808ta","name":"808TA Token"},{"id":"8848-chain","symbol":"vec","name":"8848 Chain"},{"id":"888tron","symbol":"888","name":"888tron"},{"id":"8bit","symbol":"8bit","name":"8Bit"},{"id":"8x8-protocol","symbol":"exe","name":"8X8 Protocol"},{"id":"99masternodes","symbol":"nmn","name":"99Masternodes"}];

    setList(data);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={({item}) => <Item title={item.name} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
