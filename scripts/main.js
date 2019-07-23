// TO DO:
// grab ToDo output container from html
const todoOutputContainer = document.querySelector("#todoOutput")

// fetch ToDodata from api
// const getAndPostTodos = () => {
fetch('https://jsonplaceholder.typicode.com/todos?_limit=30')
  .then(response => response.json())
  .then(todos => {
    console.log("todo", todos)
    todos.forEach(todo => postToDoToDOM(todo))
    return todos
  }
  )
// }

// getAndPostTodos()



// make ToDo HTML from data object
const makeToDoHTML = (todoObject) => {
  let checked = ''
  if (todoObject.completed === true) {
    checked = 'checked'
  }
  const todoHTML = `
      <p class="todo_item"><input type="checkbox" ${checked}>${todoObject.title}</p>
    `
  return todoHTML
}

// post ToDo to DOM
const postToDoToDOM = (todoObject) => {
  todoOutputContainer.innerHTML += makeToDoHTML(todoObject)
}



// POSTS:
// grab Post output container from html
const postOutputContainer = document.querySelector("#postOutput")

const getAndPostPosts = () => {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
    .then(response => response.json())
    .then(posts => {
      console.log("posts", posts)
      posts.forEach(post => postPostToDOM(post))
      return posts
    })
}

// invoke function
getAndPostPosts()

// make Posts HTML from data object
const makePostHTML = (postObject) => {
  const postHTML = `
      <div class="post_item">
        <h1>${postObject.title}</h1>
        <p>${postObject.body}</p>
      </div>
    `
  return postHTML
}

// post Post to DOM
const postPostToDOM = (postObject) => {
  postOutputContainer.innerHTML += makePostHTML(postObject)
}


// Photos:
// grab photo output container from html
const photoOutputContainer = document.querySelector("#photoOutput")

fetch('https://jsonplaceholder.typicode.com/photos?_limit=50')
  .then(response => response.json())
  .then(photos => {
    console.log("photos", photos)
    photos.forEach(photo => postPhotoToDOM(photo))
    return photos
  })

// make Photo HTML from data object
const makePhotoHTML = photoObject => `<a href=${photoObject.url} class="photo_item">
        <img src=${photoObject.thumbnailUrl} alt=${photoObject.title}></a>
    `


// post Photo to DOM
const postPhotoToDOM = (photoObject) => {
  photoOutputContainer.innerHTML += makePhotoHTML(photoObject)
}