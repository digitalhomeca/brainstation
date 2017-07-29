
class App extends React.Component{
	constructor(){
		super();
		this.state = {
			status: "all",
			tdNum: 4, 
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
	}

	onInput(inputString) {
		this.setState({newTask: inputString.target.value})
	}

	onAdd(addTask) {
		event.preventDefault();
			if (this.state.newTask !== "") {
			this.state.tdNum = this.state.tdNum + 1;
			this.state.todos.push({text: this.state.newTask, done: false, id: this.state.tdNum});
			this.setState({newTask: ''});	
		} else {
			alert("Nothing to add. Please enter some text.");
		}
	}

	onStatusUpdate(statusString) {
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
	
		
	}

	onClearComplete(e) {
		for (let i=0; i < this.state.todos.length; i++) {
			if (this.state.todos[i].done === true) {
				this.state.todos.splice([i]);
			}
		}
		this.setState({newTask: ''});	
	}

	render(){
		return(
			<div className="container">
				<Header />
				<AddToDo onInput={this.onInput}
						 onAdd={this.onAdd} 
						 newTask={this.state.newTask}/>
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

class AddToDo extends React.Component {
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

class ToDoList extends React.Component {
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

class ToDo extends React.Component {
	render () {
		return (
			<li className="list-group-item">
				<input type="checkbox" value={this.props.task} checked={this.props.done === true ? "Checked" : false} onChange={this.props.onTaskComplete}/>
				<label className={this.props.done === true ? "done" : ""} >{this.props.text}</label>
			</li>
		)
	}
}


class Footer extends React.Component {
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

function Header (props) {
  return (
          <h1 className='text-center'>todos</h1>
);
}



ReactDOM.render(<App />, document.getElementById('app'));