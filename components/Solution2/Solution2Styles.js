import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 200
  },
  text: {
    fontSize: 30,
    padding: 20,
    color: '#4287f5'
  },
  input: {
    height: 50,
    marginHorizontal: 20,
    marginVertical: 10,
    alignSelf: 'stretch',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    fontSize: 20,
  },
  btn: {
    height: 50,
    elevation: 7,
    marginHorizontal: 20,
    alignSelf: 'stretch',
    backgroundColor: "#4287f5",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    letterSpacing: 3,
    fontSize: 20
  }
});