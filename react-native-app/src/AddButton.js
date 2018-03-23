import React, { Component } from 'react';
import {INSERT_TODO, FETCH_TODOS} from './queries';
import { graphql } from 'react-apollo';
import {Button} from 'react-native';

export default graphql(INSERT_TODO)((props) => {

  return (
    <Button
      title="Insert Todo"
      style={props.style}
      onPress={() => {
        if (props.task.length === 0) { return; }
        props.mutate({
          variables: {
            objects: [{
              task: props.task,
              completed: false,
              user_id: props.userId
            }]
          },
          update: (proxy, {data: {insert_todos}}) => {
            const data = proxy.readQuery({ query: FETCH_TODOS});
            const newTodo = {
              task: props.task,
              completed: false,
              user_id: props.userId,
              id: insert_todos.returning[0].id
            }
            data.todos.push(newTodo);
            proxy.writeQuery({query: FETCH_TODOS, data})
          }
        });
        props.handleTextChange('');
      }}
    />
  );
});
