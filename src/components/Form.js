import React from 'react';
import ListItems from "./ListItems"
import Button from "./Button"

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          items:[],
          currentItem:{
            text:'',
            key:''
          }
        }
        if (window.performance) {
          if (performance.navigation.type == 1) {
          //alert( "This page is reloaded" );
          const arr=[...Array(localStorage.length)].map(x => 0);
          for(let i=0;i<localStorage.length;i++){
            this.state={
              currentItem:{
                text:localStorage.getItem( localStorage.key( i ) ),
                key:parseInt(localStorage.key( i ))
              }
            }
            arr[i]=this.state.currentItem
          }
          this.state.items=arr
        }
      }


        this.addItem = this.addItem.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
        this.saveItems=this.saveItems.bind(this)
       
        
  }

  saveItems(){
    const l=this.state.items.length
    for(let i=0;i<l;i++){
      localStorage.setItem(JSON.stringify(this.state.items[i].key),this.state.items[i].text)
    }

  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
      
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    localStorage.removeItem(JSON.stringify(key))
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
  }
  render(){
    return (
      <div>
          <form id="form-todo" onSubmit={this.addItem}>
            <input type="text" 
                placeholder="Enter task" 
                value= {this.state.currentItem.text} 
                onChange={this.handleInput}></input>
          </form>
          <p>{this.state.items.text}</p>
          <Button saveItems={this.saveItems}></Button>
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
          
          
      </div>
    );
}
}

export default Form