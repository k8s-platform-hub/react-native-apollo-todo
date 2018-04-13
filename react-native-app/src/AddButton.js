import React, { Component } from 'react';
import {INSERT_TODO, FETCH_TODOS} from './queries';
import { graphql, Mutation } from 'react-apollo';
import {Button, Keyboard} from 'react-native';

export default class AddButton extends React.Component {
  render () {
    return (
      <Mutation
        mutation={INSERT_TODO}
        update= {(cache, {data: {insert_todos}}) => {
          const data = cache.readQuery({ query: FETCH_TODOS});
          const newTodo = {
            task: this.props.task,
            completed: false,
            user_id: this.props.userId,
            id: insert_todos.returning[0].id
          }
          data.todos.push(newTodo);
          cache.writeQuery({query: FETCH_TODOS, data})
        }}
      >
        {(insert_todos, {data}) => (
          <Button
            title="Insert Todo"
            style={this.props.style}
            onPress={() => {
              insert_todos({
                variables: {
                  objects: [{
                    task: this.props.task,
                    completed: false,
                    user_id: this.props.userId
                  }]
                }
              });
              Keyboard.dismiss();
            }}
          />
        )}
      </Mutation>
    )
  }
}
