// export default function counter(state = 0, action) {
//     if (action.type === "cut") {
//         return state - 1
//     } else if (action.type === "add") {
//         return state + 1
//     } else {
//         return state
//     }
// }

export default function list(state = [], action) {
    if (action.type === "remove") {
        state.splice(action["text"], 1)
        return state
    } else if (action.type === "add") {
        return state.concat(action["text"])
    } else {
        return state
    }
}