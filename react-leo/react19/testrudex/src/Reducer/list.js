import {
    TabInit
} from './initState'

export default function list(state = TabInit.a, action) {
    if (action.type === "add") {
        return state.concat(action.text)
    } else if (action.type === "remove") {
        console.log(action.index)
        state.splice(action.index, 1)
        return state
    } else {
        return state
    }
}