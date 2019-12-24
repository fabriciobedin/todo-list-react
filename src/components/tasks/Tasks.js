import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from './list/List';
import CreateTask from './create_tasks/CreateTasks';
import Button from 'react-bootstrap/Button';


class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.loadTasks = this.loadTasks.bind(this);
    this.deleteAllDone = this.deleteAllDone.bind(this);
  }

  async loadTasks() {
    let response = await fetch(`http://localhost:3001/tasks`);
    const tasks = await response.json();
    this.setState({ tasks: tasks });
  }

  async deleteAllDone() {
    if (window.confirm(`Are you sure you want to delete all tasks done?`)) {
      await fetch(`http://localhost:3001/tasks/delete_all_done`, { method: 'DELETE' });
      this.loadTasks();
    }
  }

  componentDidMount() {
    this.loadTasks();
  }

  render() {
    return (
      <Row>
        <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
          <p className="title">To-do</p>
          <List loadTasks={this.loadTasks} tasks={this.state.tasks.filter((task) => task.done !== true)} />
          <CreateTask loadTasks={this.loadTasks} />
        </Col>
        <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
          <p className="title">Done</p>
          <List loadTasks={this.loadTasks} tasks={this.state.tasks.filter((task) => task.done === true)} />
          <Button onClick={() => this.deleteAllDone()} variant="red" className="float-right remove_all_btn">Remove all done</Button>
        </Col>
      </Row>
    );
  }
}

export default Tasks;