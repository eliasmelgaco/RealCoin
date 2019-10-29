/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {ListItem, SearchBar} from 'react-native-elements';
import axios from 'axios';

export default function coinList() {
  const [list, setList] = useState([]);
  const [listDefault, setListDefault] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // const data = [
    //   {id: '01coin', symbol: 'zoc', name: '01coin', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
    //   {id: '02-token', symbol: 'o2t', name: 'O2 Token', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}
    // ];

    // setList(data);
    (async function getList() {
      const { data } = await axios.get('https://api.coingecko.com/api/v3/exchanges');

      setList(data);
      setListDefault(data);
    })();
  }, []);

  const _refresh = () => {
    setList(listDefault.slice());
  };

  const updateSearch = (searchText) => {
    setList(list.filter((item) => item.name.includes(searchText)));
    setSearch(searchText);
  };

  return (
    <SafeAreaView>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <ListItem
            title={item.name}
            subtitle={item.country}
            leftAvatar={{ source: { uri: item.image } }}
            bottomDivider
            chevron
          />
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <SearchBar
            placeholder="Type Here..."
            platform="ios"
            onChangeText={updateSearch}
            value={search}
            showCancel={true}
            onCancel={_refresh}
          />
        }
      />
    </SafeAreaView>
  );
}
