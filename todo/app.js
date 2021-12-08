import React, { Component, useState, useCallback } from "react"; // import from react
import TodoList from './src/components/TodoList';
import { Window, App, View, Button, Text, TextInput, StyleSheet, TouchableOpacity } from "proton-native"; // import the proton-native components


const styles = StyleSheet.create({
  window: { width: 500, height: 600, backgroundColor: "#fff" },
  header: { 
    backgroundColor: "#00ADEF",
    color: "white",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 24,
  },
  container: { 
    flex: 1, 
    backgroundColor: "#fff", 
    alignItems: "center", 
    justifyContent: "flex-start"
  },
  todo: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    borderWidth: 2,
    borderColor: "#7F39FB",
    backgroundColor: '#fff',
    height: 40,
    width: "10%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#00ADEF',
    fontSize: 16,
  },
  input: { 
    height: 40, 
    padding: 10,
    margin: 10,
    width: "80%" 
  }
});



const Example= () => {
    // all Components must have a render method
    const [title, setTitle] = useState("");

    // iniitalize empty object todo
    const [todo, setTodo] = useState({});

    // Initalize empty array to store todos
    const [todos, setTodos] = useState([]);
    
    // function to add todo object in todo list
    const addTodo = useCallback(() => {
      if (title.length > 0) {
        // Add todo to the list
        setTodos([...todos, { key: Date.now(), name: title, isChecked: false }]);
        // clear the value of the textfield
        setTitle("");
      }
    }, [title.length, todos]);

  // function to mark todo as checked or unchecked
  const checkTodo = useCallback(id => {
    // loop through todo list and look for the the todo that matches the given id param
    // update the state using setTodos function
    setTodos(
      todos.map(todo => {
        if (todo.key === id) {
          todo.isChecked = !todo.isChecked;
        }
        return todo;
      })
    );
  }, [todos]);

  // function to delete todo from the todo list
  const deleteTodo = useCallback(id => {
    // loop through todo list and return todos that don't match the id
    // update the state using setTodos function
    const list = todos.filter(todo => {
      return todo.key !== id;
    });
    
    setTodos(list);
  }, [todos]);

  return (
    <App>
      {/* you must always include App around everything */}
      <Window style={styles.window}>
        {/* all your other components go here*/}
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>
              Todo App
            </Text>
          </View>

          <View style={styles.todo}>
            <TextInput
              placeholder="Add a todo"
              value={title}
              onChangeText={value => setTitle(value)}
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.btn}
              onPress={() => addTodo()}
            >
              <Text
                style={styles.text}
              >
                Add
              </Text>
            </TouchableOpacity> 
          </View>

        {todos.map(todo => (
          <TodoList
            key={todo.key}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
        ))}
        </View>
      </Window>
    </App>
  );
}

export default Example;
