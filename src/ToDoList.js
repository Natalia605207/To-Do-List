import { Component } from "react";
import doneCircle from './doneCircle.png';

export class ToDoList extends Component {
    state = {
        userInput: '',
        tasksList: [],
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addItem(newItem) {
        if (newItem === '') {
            alert ("Please, enter your task.")
        } else {
        let listArray = this.state.tasksList;
        listArray.push(newItem);
        this.setState({tasksList: listArray, userInput: ''})
        }
    }

    deleteItem() {
        let listArray = this.state.tasksList;
        listArray = [];
        this.setState({tasksList: listArray})
    }

    crossedWord(e) {
        const li = e.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render () {
        return <form onSubmit={this.onFormSubmit}>
            <div className="Center">
            <input type="text" placeholder = "Write your task here..."
            onChange = {(e) => {this.onChangeEvent(e.target.value)}} 
            value={this.state.userInput} />
            </div>
            <div className="Center">
            <button onClick = {() => this.addItem(this.state.userInput)} className="btn add"><span>+</span> Add a Task</button>
            </div>
            <ul>
                {this.state.tasksList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}><img className="circle" src={doneCircle} alt="empty circle" />{item}</li>
                ))}
            </ul>
            <div className="Center">
                <button onClick={() => this.deleteItem()} className="btn delete">Delete All</button>
            </div>
        </form>
    }
}