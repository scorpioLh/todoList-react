const defaultState = {
	inputValue: '123',
	list: [1, 2]
}

// reducer可以接收state，不能修改（需拷贝）
export default (state = defaultState, action) => {
	console.log(state, action) // state：上一次存储的数据  action：用户传递过来的action
	if(action.type === 'change_input_value') {
		const newState = JSON.parse(JSON.stringify(state))
		newState.inputValue = action.value
		return newState
	}
	if(action.type === 'add_todo_item') {
		const newState = JSON.parse(JSON.stringify(state))
		newState.list = [...newState.list, newState.inputValue]
		newState.inputValue = ''
		return newState
	}
	return state
}