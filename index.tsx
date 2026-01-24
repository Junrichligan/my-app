import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
     
      <View style={styles.greenSection}>
        <View style={styles.row}>
          <View style={[styles.box, styles.bgRed]} />
          <View style={[styles.box, styles.bgRed]} />
        </View>
      </View>

      <View style={styles.redSection}>
        <View style={styles.row}>
          <View style={[styles.box, styles.bgGreen]} />
          <View style={[styles.box, styles.bgGreen]} />
          <View style={[styles.box, styles.bgGreen]} />
        </View>
        <View style={styles.row}>
          <View style={[styles.box, styles.bgGreen]} />
          <View style={[styles.box, styles.bgGreen]} />
          <View style={[styles.box, styles.bgGreen]} />
        </View>
      </View>

     
      <View style={styles.blueSection}>
         <View style={[styles.box, styles.bgGreen, { alignSelf: 'flex-end' }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  greenSection: {
    flex: 2, 
    backgroundColor: 'green',
    justifyContent: 'center',
  },
  redSection: {
    flex: 3,
    backgroundColor: 'red',
    justifyContent: 'space-evenly',
  },
  blueSection: {
    height: 60,
    backgroundColor: 'blue',
    justifyContent: 'flex-end',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },

  box: {
    width: 50,
    height: 50,
  },
  bgRed: {
    backgroundColor: 'red',
  },
  bgGreen: {
    backgroundColor: 'green',
  },
});