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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  input: {
    height: 50,
    width: '70%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 20,
    fontSize: 20
  },
  btn: {
    height: 50,
    elevation: 7,
    width: '30%',
    backgroundColor: "#4287f5",
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    letterSpacing: 2,
    fontSize: 20
  }
})