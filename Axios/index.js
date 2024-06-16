const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
      // Write your code here
      axios.get('https://crudcrud.com/api/c13468ccef75444b8cbde2e4c6a71687/userinfo')
      .then((result)=>{
        console.log(result.data)
      })
      .catch((error)=>{
        console.log(error)
      })
}

  function postTodo() {
  // Write your code here
      axios
      .post('https://crudcrud.com/api/c13468ccef75444b8cbde2e4c6a71687/userInfo',{
      "task" : 'buy Shoes',
      'type' : 'personal' ,
      "completed": false, 
      }).then((result) => {
      console.log(result)
      }).catch((err) => {
      console.log(err)
      });
  }

function putTodo() {
  // Write your code here
  axios
  .put('https://crudcrud.com/api/c13468ccef75444b8cbde2e4c6a71687/userInfo/6640f4073207ed03e8c932b5',{
  "name": "Hazard",
  "age": 16,
  "Score": 99
  })
  .then((result)=>{
  console.log(result.data)
  })
  .catch((error)=>{
    console.log(error)
    })
  }

function deleteTodo() {
  // Write your code here
  axios
  .delete('https://crudcrud.com/api/c13468ccef75444b8cbde2e4c6a71687/userInfo/6641150c3207ed03e8c932c9')
  .then((result)=>{
    console.log(result.data)
})
.catch((error)=>{
  console.log(error)
})
}