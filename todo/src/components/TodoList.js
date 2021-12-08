import React from "react"; // import from react

import { View, Text, TouchableOpacity } from "proton-native"; // import the proton-native components

const TodoList = (props) => {
  return (
    <View 
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#EEEEEE",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#666666"
      }} 
    >
    <TouchableOpacity
      style={{
        borderWidth: 2,
        borderColor: "#7F39FB",
        backgroundColor: '#EEEEEE',
      }}
      onPress={() => props.checkTodo(props.todo.key)}
    >
      <Text
        style={{
          color: '#343941',
          fontSize: 20,
        }}
      >
        {props.todo.isChecked ? "●" : "○"}
      </Text>
    </TouchableOpacity> 

    <Text>{props.todo.name}</Text>

    <TouchableOpacity
      style={{
        borderWidth: 2,
        borderColor: "#7F39FB",
        backgroundColor: '#EEEEEE',
      }}
      onPress={() => props.deleteTodo(props.todo.key)}
    >
      <Text
        style={{
          color: '#343941',
          fontSize: 20,
        }}
      >
        {`✕`}
      </Text>
    </TouchableOpacity> 
    </View>
  );
}

export default TodoList;