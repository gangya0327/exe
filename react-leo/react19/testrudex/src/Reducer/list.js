import {
    TabInit
} from './initState'
import { add, remove } from './initFn'
import createReducer from './createReducer'

let list = createReducer(TabInit.a, { "add": add, "remove": remove })
export default list

// export default function list(state = TabInit.a, action) {
//     // if (action.type === "add") {
//     //     // return state.concat(action.text)
//     //     return add(state, action.text)
//     // } else if (action.type === "remove") {
//     //     return remove(state, action.index)
//     // } else {
//     //     return state
//     // }
//     switch (action.type) {
//         case "add":
//             return add(state, action.text)
//         case "remove":
//             return remove(state,action.index)
//         default:
//             return state
//     }
// }

