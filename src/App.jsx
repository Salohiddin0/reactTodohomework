// import React, { Component } from 'react'
// // import Skeleton from 'react-loading-skeleton'
// // import axios from './../node_modules/axios/lib/axios'

// export default class App extends Component {
//   render () {
//     return (
//       <>
//        {/* <Skeleton count={4} />
//         for (const element of object ) {

//         } */}

//       </>
//     )
//   }
// }

// =====================================================

import React, { useState } from 'react'

function TodoApp () {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [editTodoId, setEditTodoId] = useState(null)
  const [editTodoText, setEditTodoText] = useState('')

  // Yangi To-Do qo'shish
  const addTodo = () => {
    if (newTodo.trim() === '') return
    setTodos([...todos, { id: Date.now(), text: newTodo }])
    setNewTodo('') // Inputni tozalash
  }

  // To-Do ni tahrirlash rejimiga o'tish
  const startEditTodo = (id, text) => {
    setEditTodoId(id)
    setEditTodoText(text)
  }

  // Tahrirlangan To-Do ni saqlash
  const updateTodo = () => {
    setTodos(
      todos.map(todo =>
        todo.id === editTodoId ? { ...todo, text: editTodoText } : todo
      )
    )
    setEditTodoId(null)
    setEditTodoText('')
  }

  // To-Do ni o'chirish
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>To-Do App</h1>
      <div style={styles.addTodoSection}>
        <input
          type='text'
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder='Add a new to-do'
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addButton}>
          Add
        </button>
      </div>

      <ul style={styles.todoList}>
        {todos.map(todo => (
          <li key={todo.id} style={styles.todoItem}>
            {editTodoId === todo.id ? (
              <>
                <input
                  type='text'
                  value={editTodoText}
                  onChange={e => setEditTodoText(e.target.value)}
                  style={styles.editInput}
                />
                <button onClick={updateTodo} style={styles.saveButton}>
                  Save
                </button>
                <button
                  onClick={() => setEditTodoId(null)}
                  style={styles.cancelButton}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span style={styles.todoText}>{todo.text}</span>
                <button
                  onClick={() => startEditTodo(todo.id, todo.text)}
                  style={styles.editButton}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  style={styles.deleteButton}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
        {todos.length === 0 && (
          <li style={styles.noTodos}>No To-Do items found!</li>
        )}
      </ul>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: '#f7f9fc',
    minHeight: '100vh'
  },
  title: {
    fontSize: '36px',
    color: '#333',
    marginBottom: '20px'
  },
  addTodoSection: {
    marginBottom: '20px'
  },
  input: {
    padding: '10px',
    width: '250px',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  todoList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  todoItem: {
    display: 'flex',
    justifyContent: 'space-end',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '10px 15px',
    margin: '10px 0',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  todoText: {
    flex: 1,
    textAlign: 'left'
  },
  editInput: {
    padding: '8px',
    width: '60%',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  saveButton: {
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  cancelButton: {
    padding: '8px 12px',
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '5px'
  },
  editButton: {
    padding: '8px 12px',
    backgroundColor: '#ffc107',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '10px'
  },
  deleteButton: {
    padding: '8px 12px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '5px'
  },
  noTodos: {
    padding: '10px',
    backgroundColor: '#e9ecef',
    borderRadius: '4px',
    textAlign: 'center'
  }
}

export default TodoApp
