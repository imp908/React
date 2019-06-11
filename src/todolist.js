import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {tasks:[]};
    }

   
    onChange = (e) => {
        if (!e || !e.target || !e.target || !e.target.value) { return; }

        this.state = { ...this.state, currentTask: e.target.value}
    }
    onClick = (e) => {
        let newArr = [...this.state.tasks];
        newArr.push(this.state.currentTask);
        this.setState( { ...this.state, tasks: newArr});
    }


    itemsList(){
        if (this.state && this.state.tasks && Array.isArray(this.state.tasks) && this.state.tasks.length>0){            
            return(
                <div>
                    {this.state.tasks.map((s)=> 
                        <TodoListItem task={s} />
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

        this.state = { task: props.task};
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

        this.setState({ ...this.state,done:true});
    }

    inputOrTask = () => {
        if(this.state.done){
            return(
                <div>
                    &lt;-
                    {this.state.comment}
                    ->
                    {this.props.task}
                </div>
            )
        }else{
            return(
                <div>
                    ->
                    {this.props.task}
                    <input type="text" onChange={this.onChange}></input>
                    <button onClick={this.onClick}>Done</button>
                </div>
            )
        }
    }
    render(){
        if (this.state.task) {
            const done = this.state.done;
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