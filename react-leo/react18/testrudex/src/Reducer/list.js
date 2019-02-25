export default function list(state = [1, 2, 3], action) {
    if (action.type === "add") {
        return state.concat(action.text)
    } else if (action.type === "remove") {
        console.log(action.index)
        state.splice(action.index,1)
        return state
    } else {
        return state
    }
}