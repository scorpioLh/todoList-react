import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = store.getState()
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleItemClick = this.handleItemClick.bind(this)
		store.subscribe(this.handleStoreChange) // 只要store发生改变，就会执行参数内的方法
	}

	render() {
		return (
			<TodoListUI
				inputValue={this.state.inputValue}
				handleInputChange={this.handleInputChange}
				handleBtnClick={this.handleBtnClick}
				list={this.state.list}
				handleItemClick={this.handleItemClick}
			/>
		)
	}

	componentDidMount() {
		axios.get('/list.json').then(res => {
			const data = res.data
			const action = initListAction(data)
			store.dispatch(action)
		})
	}

	handleStoreChange() {
		this.setState(store.getState())
	}

	handleInputChange(e) {
		const action = getInputChangeAction(e.target.value)
		store.dispatch(action) // 提交事件给store,store会自动将他传给reducer
	}

	handleBtnClick() {
		const action = getAddItemAction()
		store.dispatch(action)
	}

	handleItemClick(index) {
		const action = getDeleteItemAction(index)
		store.dispatch(action)
	}
}

export default TodoList