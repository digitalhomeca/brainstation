import React, {Component} from 'react';

class Tasks extends Component {
	constructor(){
		super();
		this.state = {
			status: "all",
			tdNum: 5, 
			newTask: '',
			todos:[
	            {text: 'learn angular', done: false, id: 1},
	            {text: 'write the content for the next module', done: false, id: 2},
	            {text: 'buy cheese', done: true, id: 3},
	            {text: 'buy milk', done: true, id: 4}
			]
			
		}
		this.onInput = this.onInput.bind(this);
		this.onAdd = this.onAdd.bind(this);
		this.onStatusUpdate = this.onStatusUpdate.bind(this);
		this.onTaskComplete = this.onTaskComplete.bind(this);
		this.onClearComplete = this.onClearComplete.bind(this);
		this.setLocalStorage = this.setLocalStorage.bind(this);
		this.getLocalStorage = this.getLocalStorage.bind(this);
		
	}

	onInput(inputString) {
		this.setState({newTask: inputString.target.value})
	}

	onAdd(event) {
		 event.preventDefault();
		if (this.state.newTask !== "") {
			 let newArr = this.state.todos;
			 newArr.push({text: this.state.newTask, done: false, id: this.state.tdNum });
			 this.setState({
				 todos: newArr,
				 status: "all",
				 newTask: "",
				 tdNum: this.state.tdNum + 1});
				this.setLocalStorage();

		} else {
			alert("Nothing to add. Please enter some text.");
		}
	}

	onStatusUpdate(event) {
		localStorage.setItem("dropdown",event.target.value);
		this.setState({status: event.target.value})
		
	}

	onTaskComplete(event) {
		let newArr = this.state.todos;
		for (let i=0; i < newArr.length; i++) {
			if (newArr[i].id === Number(event.target.value)) {
				newArr[i].done = !newArr[i].done 
			};
		}
		this.setState({todos: newArr});	
		this.setLocalStorage();
	}

	onClearComplete(e) {
		let newArr = this.state.todos;
		for (let i=0; i < newArr.length ; i++) {
			if (newArr[i].done === true) {
				newArr.splice(i,1);
				i--;
				console.log(newArr);
			};
		}
		this.setState({todos: newArr});
		this.setLocalStorage();

	}
	setLocalStorage () {
		console.log(this.state.todos);
		localStorage.setItem("todos",JSON.stringify(this.state.todos));
		localStorage.setItem("dropdown",this.state.status);
	}

	getLocalStorage (ls) {
		this.setState({todos: ls});
		this.setState({status: localStorage.getItem("dropdown") });
	}
	
	render(){
		return(
			<div className="container">
				<h1 className='text-center'>todos</h1>
				<AddToDo onInput={this.onInput}
						 onAdd={this.onAdd} 
						 newTask={this.state.newTask}
						  getLS={this.getLocalStorage} />
				<ToDoList 	list={this.state.todos} 
							status={this.state.status}
							toggleTask={this.onTaskComplete} />
				<Footer status={this.state.status}
						onStatusUpdate={this.onStatusUpdate}
						onClearComplete={this.onClearComplete} />
			</div>
		)
	}
}

class AddToDo extends Component {
	
componentWillMount() {
		let ls = JSON.parse(localStorage.getItem("todos"));
		if ( ls !== null) {
			this.props.getLS(ls);
	}

 	}	
	render () {
	return (
		<div>
			<form>
			<div className="input-group">
				<span className="input-group-btn">
					<button className="btn btn-primary" type="submit" onClick={this.props.onAdd}>Add</button>
				</span>
				<input className="form-control" placeholder="add a todo" value={this.props.newTask} onChange={this.props.onInput} />
			</div>
			</form>
		</div>
	)
	}
}

class ToDoList extends Component {
	render () {

		let tdList = this.props.list.filter(task => { if (this.props.status === 'all') { return task;} else if (this.props.status === 'active') {return task.done === false;} else { return task.done === true;};}).map((task,i) => {
			return (
				<ToDo task={task.id}
					  text={task.text}
					  done={task.done} 
					  onTaskComplete={this.props.toggleTask}/>

			);
		})	

	return (
		
		<ul className='list-group'>
		    {tdList}
		</ul>

	)
	}
}

class ToDo extends Component {
	render () {
		return (
			<li className="list-group-item">
				<input type="checkbox" value={this.props.task} checked={this.props.done === true ? "Checked" : false} onChange={this.props.onTaskComplete}/>
				<label className={this.props.done === true ? "done" : ""} >{this.props.text}</label>
			</li>
		)
	}
}


class Footer extends Component {
	render () {
		return (
			<div className="footer">
				  <select name = "taskType" value={this.props.status} onChange={this.props.onStatusUpdate}>  
					<option value="all">all</option>
					<option value="active">active</option>
					<option value="complete">complete</option>
				</select>
				<button className="pull-right btn btn-default" type="submit" onClick={this.props.onClearComplete}>Clear Complete</button>
			</div>
		);
		}
    }
    
export default Tasks;