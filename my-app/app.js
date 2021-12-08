import React, { Component, useState, useCallback, useEffect } from "react"; // import from react

import { Window, App, Text, Button, View, StyleSheet } from "proton-native"; // import the proton-native components

const styles = StyleSheet.create({
  window: { width: 500, height: 300, backgroundColor: "#fff" },
  container: { margin: 10, flex: 1 },
  counter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  row: { flexDirection: 'row', marginBottom: 10 },
  text: { fontSize: 50, color: 'darkred' },
});

const Example = () => {
  // all Components must have a render method
  const initState = {
    count: 0,
    start: false,
    times: 1
  };
  const [count, setCount] = useState(initState.count);
  const [start, setStart] = useState(initState.start);
  const [times, setTimes] = useState(initState.times);

  const reset = () => {
    setCount(initState.count);
    setStart(initState.start);
    setTimes(initState.times);
  };

  useEffect(() => {
      if (!start) {
        return;
      }
      let id = setInterval(() => {
        setCount(count => count + 1);
      }, 1000 / times);
      return () => clearInterval(id);
    },
    [start, times]
  );

  return (
    <App>
      {/* you must always include App around everything */}
      <Window style={styles.window}>
        {/* todos os seus outros componentes vão aqui*/}
        <View style={styles.container}>
          <View
            style={styles.counter}
          >
            <Text style={{ fontSize: 55 }}>Counter</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>
              {`${count}`}
            </Text>
          </View>
          <View style={styles.row}>
            <Button onPress={() => setStart(true)} title="Start" />
            <Button onPress={() => setStart(false)} title="Pause" />
            <Button onPress={() => reset()} title="Reset" />
          </View>
        </View>
      </Window>
    </App>
    );
  }


export default Example;