import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {tasks:[]};

        this.taskId=-1;
    }

   
    onChange = (e) => {
        if (!e || !e.target || !e.target || !e.target.value) { return; }

        this.state = { ...this.state, taskName: e.target.value}
    }
    onClick = (e) => {        
        let newArr = [...this.state.tasks];
        newArr.push({ taskName: this.state.taskName, id: this.taskId+=1});
        this.setState( { ...this.state, tasks: newArr});
    }

    onRemove = (item) => {     
        let arr = this.state.tasks.filter(s=>s.id!==item.id);
        this.setState({...this.state,tasks:arr});
    }
    done = (item) =>{
        let oldItem = this.state.tasks.filter(s => s.id === item.id);
        oldItem[0] = item;
        oldItem[0].done=true;
        this.setState({ ...this.state});
    }

    itemsList(){
        if (this.state && this.state.tasks && Array.isArray(this.state.tasks) && this.state.tasks.length>0){            
            return(
                <div>
                    {this.state.tasks.map((s)=> 
                        <TodoListItem task={s} onRemove={this.onRemove} done={this.done}/>
                    )}
                </div>
            )
        }

        return null;
    }

    render(){
        return(
            <div>
                <div>
                    <input type="text" onChange={this.onChange}/>
                    <button onClick={this.onClick}>Add task</button>
                </div>
                <div>
                    {this.itemsList()}
                </div>
            </div>            
        )
    }
}

class TodoListItem extends Component{
    constructor(props){
        super(props);

        //this.state = { task: props.task};
    }

    onChange = (e) =>
    {
        console.log('onChange')
        if (!e || !e.target || !e.target.value) { return; }
        
        this.state={...this.state, comment : e.target.value};
    }

    onClick = (e) =>
    {
        console.log('onClick')
        if(!e || !e.target || !e.target){return;}
        this.props.done(this.props.task)
    }
    remove =(e)=>{
        console.log('remove')

        this.props.onRemove(this.props.task);
    }
    inputOrTask = () => {
        if (this.props.task.done){
            return(
                <div>
                    &lt;-
                    {this.props.comment}
                    ->
                    {this.props.task.taskName}
                </div>
            )
        }else{
            return(
                <div>
                    ->
                    {this.props.task.taskName}
                    <input type="text" onChange={this.onChange}></input>
                    <button onClick={this.onClick}>Done</button>
                    <button onClick={this.remove}>Remove</button>
                </div>
            )
        }
    }
    render(){
        if (this.props.task) {
            const done = this.props.task.done;
            return(            
                <div>             
                    {this.inputOrTask()}                    
                </div>            
            )
        }

        return null;
    }
}

export { TodoListItem, TodoList}