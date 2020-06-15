import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const thumbnailSize = 90;

export default function Drinks({cocktail, picURL}) {
  return (
    <View style={styles.mainView}>
      <Image
        source={{uri: picURL, width: thumbnailSize, height: thumbnailSize}}
        style={styles.thumbnail}
      />
      <View style={styles.textView}>
        <Text style={styles.text}>{cocktail}</Text>
      </View>
    </View>
  );
}
Drinks.propTypes = {
  cocktail: PropTypes.string.isRequired,
  picURL: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    padding: 12,
    paddingLeft: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  thumbnail: {
    borderRadius: thumbnailSize / 2,
    margin: 15,
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
});
