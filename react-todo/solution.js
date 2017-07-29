class App extends React.Component{
	constructor(){
		super();
		this.state = {
			todos:[
	            {text: 'learn angular', done: false, id: 1},
	            {text: 'write the content for the next module', done: false, id: 2},
	            {text: 'buy cheese', done: true, id: 3},
	            {text: 'buy milk', done: true, id: 4}
			],
			value: "",
			select: "all",
			id: 5
		}
		this.addTodo = this.addTodo.bind(this);
		this.clearComplete = this.clearComplete.bind(this);
		this.onCheck = this.onCheck.bind(this);
		this.select = this.select.bind(this);
		this.inputChange = this.inputChange.bind(this);
	}
	addTodo(event){
		event.preventDefault();
		let newArray = this.state.todos;
		newArray.push({text: this.state.value, done: false, id: this.state.id})
		this.setState({
			todos: newArray,
			value: "",
			id: this.state.id + 1
		})
	}
	clearComplete(){
		let newArray = this.state.todos;
		newArray = newArray.filter(todo=>!todo.done)
		this.setState({
			todos: newArray
		})
	}
	inputChange(event){
		this.setState({
			value: event.target.value
		})
	}
	onCheck(index){
		let newTodos = this.state.todos;
		newTodos[index].done = !newTodos[index].done;
		this.setState({
			todos: newTodos
		})
	}
	select(event){
		this.setState({
			select: event.target.value
		})
	}
	render(){
		let newArray = this.state.todos;
		newArray = newArray.filter((todo, i)=>{
			todo.index = i;
			if (this.state.select === "all"){
				return todo
			} else if (this.state.select === "active"){
				return !todo.done
			} else if (this.state.select === "complete"){
				return todo.done
			}
		})
		return(
			<div className="container">
			    <h1 className="text-center">todos</h1>

				<form onSubmit={this.addTodo}>
					<div className="input-group">
						<span className="input-group-btn">
							<button className="btn btn-primary" type="submit">Add</button>
						</span>
						<input onChange={this.inputChange} 
								value={this.state.value}
								className="form-control" 
								placeholder="add a todo" />
					</div>
				</form>
				
				<ul className="list-group">
					{newArray.map((todo)=>{
						return 	<li className="list-group-item">
									<input type="checkbox" 
											onChange={()=> this.onCheck(todo.index)}
											checked={todo.done}				
											value="on" />
									<label className={todo.done ? "done" : ""}>
									{todo.text}
									</label>
								</li>
					})}
				</ul>
				
				<select onChange={this.select} value={this.state.select}>
					<option value="all">all</option>
					<option value="active">active</option>
					<option value="complete">complete</option>
				</select>
				
				<button onClick={this.clearComplete} className="pull-right btn btn-default">Clear Complete</button>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));



