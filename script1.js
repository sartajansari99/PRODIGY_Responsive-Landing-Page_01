// const sartaj = document.getElementById("manage");

// sartaj.textContent = "this is something else"
// console.log(sartaj.textContent);

// const sartaj = document.querySelector("#manage")
// sartaj.style.color = "red"
// sartaj.style.backgroundColor = "blue"
// console.log(sartaj);

// const sartaj1 = document.querySelector("a")
// sartaj1.getAttribute("href")
// sartaj1.setAttribute("href", "http://google.com")
// console.log(sartaj1);
// sartaj.setAttribute("dsar")
// console.log(sartaj);

// const sartaj = document.querySelector(".btn a")
// sartaj.getAttribute("href")
// sartaj.setAttribute("href", "http://google.com")
// console.log(sartaj);
// const sartaj2=document.querySelector(".btn")

// const sartaj = document.getElementsByClassName("navright")
// for (let i = 0; i < sartaj.length; i++) {
//     let sa = sartaj[i];
//     sa.style.color = "red"

// let sartaj = document.querySelectorAll(".but")
// for (let i = 0; i < sartaj.length; i++) {
//     let sa = sartaj[i]
//     sa.style.color = "red";
// }


// let sartaj = document.querySelector(".plan h1")
// console.log(sartaj);

// let sartaj = document.getRootNode()
// console.log(sartaj);

// let sartaj = document.querySelector(".info")
// console.log(sartaj.classList);
// // sartaj.classList.add("formgroup")
// let ans = sartaj.classList.contains("sartaj");
// console.log(ans);

// const sartaj=document.querySelector(".todo")
// console.log(sartaj.innerHTML);
// sartaj.innerHTML="<li>sartaj web dev</li>"
// sartaj.innerHTML=sartaj.innerHTML+="<li>sartaj1</li>"

// const createElements = document.createElement("li")
// createElements.textContent="sartajansrit"
// const todo = document.querySelector(".todo")
// todo.prepend(createElements)

// const todo=document.querySelector(".todo")
// todo.remove()
// console.log(todo);

// const createElements = document.createElement("li")
// const createtext = document.createTextNode("sartajansrit")
// const todo = document.querySelector(".todo")
// createElements.append(createtext)
// todo.after(createElements)
// console.log(createElements);

// const sartaj=document.querySelector(".todo")
// console.log(sartaj);
// sartaj.insertAdjacentHTML("afterend","<li>Teach studients</li>")

// const ui=document.querySelector(".todo")
// const li=document.createElement("li")
// li.textContent="tech students"
// const li2=li.cloneNode(true);
// ui.append(li)
// ui.prepend(li2)


// const todo=document.querySelector(".todo")
// const li=document.createElement("li")
// li.textContent="techstudentssartaj"
// todo.appendChild(li)

// const sartaj = document.querySelectorAll(".todo li")
// const item7 = document.createElement("li")
// item7.textContent = "item7"
// const todo=document.querySelector(".todo")
// todo.append(item7)

// console.log(sartaj);

// const todo = document.querySelector(".todo")
// const sartaj =todo.getElementsByTagName("li");
// // console.log(sartaj);
// const create = document.createElement("li")
// create.textContent = "item7"
// todo.append(create)
// console.log(sartaj);
// const sartaj=document.getElementsByClassName("signup")
// const sa=sartaj.getBoundingClientsRect().width;
// console.log(sa);

// const sartaj=document.querySelector(".inp .btn")

// sartaj.addEventListener("click",function(){
//     console.log("you clicked me");
//     console.log("the value of this is");
//     console.log(this);
// })

// const todo = document.querySelectorAll(".todo li")
// console.log(todo);
// for (let button of todo) {
//     button.addEventListener("click", function (e) {
//         // console.log("clicked");
//         console.log(e.target);
//     })

// }
// console.log("script starts!!!");
// const buttons = document.querySelectorAll(".buttons button")
// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         let num = 0;
//         for (let i = 0; i < 1000000000; i++) {
//             num += i;
//         }
//         console.log(e.currentTarget.textContent);
//     },)

// })
// let outervar = 0;
// for (let i = 0; i < 100000000; i++) {
//     outervar += i;

// }
// console.log("the outer var");
// console.log("script ends!!!");
// const btn=document.querySelectorAll(".buttons button")
// btn.forEach((e)=>{
//     e.addEventListener("click",(btn1)=>{
//         btn1.target.style.color="red";
//         btn1.target.style.backgroundColor="blue"
//     })
// })

// const btn = document.querySelector("button")
// const body = document.body;
// const color = document.querySelector(".container h1")
// function randomcolorgenerator() {
//     let red = Math.floor(Math.random() * 256)
//     let green = Math.floor(Math.random() * 256)
//     let blue = Math.floor(Math.random() * 256)
//     let randomcolor = `RGBA(${red},${green},${blue})`
//     return randomcolor;
// }



// btn.addEventListener("click", () => {
//     const randomcolor = randomcolorgenerator();
//     body.style.backgroundColor = randomcolor;
//     color.textContent = randomcolor;
// })
// let sartaj=document.body;
// console.log(sartaj);
// sartaj.addEventListener("keypress",(e)=>{
// console.log(e.key);
// })

// const sartaj = document.querySelector(".btn")
// sartaj.addEventListener("mouseover", () => {
//     console.log("over!!!!");
// })
// sartaj.addEventListener("mouseleave", () => {
//     console.log("leave!!!!");
// })
const inp = document.querySelector(".inp .btn")
const inpinput = document.querySelector(".inp input")
const todo = document.querySelector(".todo")

inp.addEventListener("click", () => {
    const newtodotext = inpinput.value;
    const newli = document.createElement("li")
    const newliInnerHTML = `
    <span class="todo-input">${newtodotext}</span>
    <div class="todobutton">
        <button class="add btn">Done</button>
        <button class="remove btn">Remove</button>
    </div>`

    newli.innerHTML = newliInnerHTML;
    todo.append(newli);
    inpinput.value = "";
})
todo.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        const targetedli = e.target.parentNode.parentNode;
        targetedli.remove();
    };
    if (e.target.classList.contains("add")) {
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-Through";
    };
})

// todo.addEventListener("click", (e) => {
//     console.log(e.target.parentElement);

// const inp
// })
// script.js
// const taskInput = document.getElementById("taskInput");
// const addButton = document.getElementById("addButton");
// const taskList = document.getElementById("taskList");

// addButton.addEventListener("click", addTask);

// function addTask() {
//     const taskText = taskInput.value.trim();
//     if (taskText === "") return;

//     const li = document.createElement("li");
//     const taskName = document.createElement("span");
//     taskName.textContent = taskText;
//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", deleteTask);

//     li.appendChild(taskName);
//     li.appendChild(deleteButton);
//     taskList.appendChild(li);

//     taskInput.value = "";
// }

// function deleteTask(event) {
//     const listItem = event.target.parentElement;
//     taskList.removeChild(listItem);
// }
