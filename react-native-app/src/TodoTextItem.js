import React, { Component } from 'react';
import {UPDATE_TODO, FETCH_TODOS} from './queries';
import {StyleSheet, Text} from 'react-native';
import { graphql } from 'react-apollo';

export default graphql(UPDATE_TODO)((props) => {
  return (
    <Text
      style={props.todo.completed ? styles.completedText : styles.incompleteText}
      onPress={() => {
        props.mutate({
          variables: { todo_id: props.todo.id, completed: !props.todo.completed },
          update: (proxy, {data: {update_todos}}) => {
            const data = proxy.readQuery({ query: FETCH_TODOS});
            proxy.writeQuery({
              query: FETCH_TODOS,
              data: {
                ...data,
                todos: data.todos.map((todo) => {
                  if (todo.id === props.todo.id) {
                    return {
                      ...todo,
                      completed: !todo.completed
                    }
                  }
                  return todo;
                })
              }
            })
          }
        });
    }}>
      {props.todo.task}
    </Text>
  );
});

const styles = StyleSheet.create({
  completedText: {
    flex:1,
    textDecorationLine: 'line-through'
  },
  incompleteText: {
    flex: 1
  }
})
