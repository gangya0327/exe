import { book_add } from './initFn'
import { bookInit } from './initState'
import createReducer from '../createReducer'

let book = createReducer(bookInit, { "book_add": book_add })
export default book