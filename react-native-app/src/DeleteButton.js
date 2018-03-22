import React, { Component } from 'react';
import {DELETE_TODO, FETCH_TODOS} from './queries';
import { graphql } from 'react-apollo';
import {Button} from 'react-native';

export default graphql(DELETE_TODO)((props) => {
  return (
    <Button
      title="Delete"
      onPress={() => {
        props.mutate({
          variables: {
            todo_id: props.todo.id
          },
          update: (proxy, {data: {insert_todos}}) => {
            const data = proxy.readQuery({ query: FETCH_TODOS});
            proxy.writeQuery({
              query: FETCH_TODOS,
              data: {
                ...data,
                todos: data.todos.filter((todo) => (props.todo.id !== todo.id))
              }
            })
          }
        });
      }}
    />
  );
});
