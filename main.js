const todoList = document.querySelector('.todo-list-ul');
const emptyContent = document.querySelector('.empty-content');
const count = document.getElementById('count');
const dlist = todoList.children;

const dragList = []
let counter = 0;
const emptyTodo = document.getElementById('empty-todo');

function app() {
    const createTodoButton = document.querySelector('.check-button')
    const allButton = document.querySelectorAll('.all');
    const activeButton = document.querySelectorAll('.active');
    const completedButton = document.querySelectorAll('.completed');
    const clearCompletedButton = document.querySelectorAll('.clear-completed');
    const body = document.querySelector('body');
    const todoListDiv = document.querySelector('.todo-list');
    const mobileLinks = document.querySelector('.mobile-links');
    const searchInput = document.querySelector('.search-input')
    const checkButton = document.querySelector('.check-button');
    let draggedItem = null;

   
    

    
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    const darkmodeButton = document.getElementById('darkmode-button');
    function allHandler(event) {
        const target = event.currentTarget;
        const todoArray = Array.from(todoList.children);
        const actives = document.querySelectorAll('.active');
        const completeds = document.querySelectorAll('.completed');
        if (event.currentTarget) {
            target.classList.add('active-link')
        }
        emptyContent.textContent = 'active'
       
        // target.classList.add('active-link');
        completeds.forEach(cp => {
            if (cp.classList.contains('active-link')) {
                cp.classList.remove('active-link');
            }
        })
        actives.forEach(cp => {
            if (cp.classList.contains('active-link')) {
                cp.classList.remove('active-link');
            }
        })
        todoArray.forEach(td => {
            if (td.style.display === 'none') {
                td.style.display = 'flex';

                // Check if the last element is initially hidden, then toggle it
                if (todoList.children[todoList.children.length - 1].style.display === 'flex') {
                    todoList.children[todoList.children.length - 1].style.display = 'none';
                }
            } 
            
        });
        
   
    }
    function activeListener(e) {
        const target = e.target;
        const todoArray = Array.from(todoList.children);
        const numOfArr = todoList.querySelectorAll('.activated').length;
        const alls = document.querySelectorAll('.all');
        const completeds = document.querySelectorAll('.completed');
        allHandler(target);
        emptyContent.textContent = 'active';
        if (numOfArr >= counter && counter === 0 ) {
            emptyTodo.style.display = 'flex'
        } else {
            emptyTodo.style.display = 'none'
        }
        target.classList.add('active-link');
        completeds.forEach(cp => {
            if (cp.classList.contains('active-link')) {
                cp.classList.remove('active-link');
            } 
        })
        alls.forEach(cp => {
            if (cp.classList.contains('active-link')) {
                cp.classList.remove('active-link');
            } 
        })
        todoArray.forEach(td => {
            if (td.classList.contains('activated') ) {
                
               
                // counter--
                if (td.classList.contains('activated') && td.style.display === 'none') {
                    td.style.display = 'flex';
                } else {
                    td.style.display = 'none';
                }
            } 
        })

    }
    function completedListener(event) {
        const target = event.currentTarget
        const todoArray = Array.from(todoList.children);
        const numOfArr = document.querySelectorAll('.activated').length;
        const actives = document.querySelectorAll('.active');
        const activessss = document.querySelectorAll('.activated');
        const alls = document.querySelectorAll('.all');
        target.classList.add('active-link')
        alls.forEach(cp => {
            if (cp.classList.contains('active-link')) {
                cp.classList.remove('active-link');
            }
        })
        actives.forEach(cp => {
            if (cp.classList.contains('active-link')) {
                cp.classList.remove('active-link');
            }
        })
        if (numOfArr < 1) {
            emptyTodo.style.display = 'flex';
            emptyContent.textContent = 'completed'
        } else {
            emptyTodo.style.display = 'none';
            emptyContent.textContent = 'active'
        }

        todoArray.forEach(td => {
            if (td.classList.contains('activated')) {
                td.style.display = 'flex';
            } else {
                td.style.display = 'none';
            }
        });
        if (numOfArr < 1) {
            emptyTodo.style.display = 'flex';
           
        } else {
            emptyTodo.style.display = 'none';
        }
    }
    function clearCompletedListener() {
        // const todoList = document.getElementById('todoList'); // Assuming 'todoList' is the id of the parent element
        const todoArray = Array.from(todoList.children);
        const numOfArr = document.querySelectorAll('.activated').length;
        if ((numOfArr <= 1) && counter < 1) {
            emptyTodo.style.display = 'flex';
            emptyTodo.classList.remove('hidden')
        } else {
            emptyTodo.style.display = 'none';
            emptyTodo.classList.add('hidden')
           
        }

        todoArray.forEach(td => {
            if (td.classList.contains('activated')) {
                td.remove();
               
            }
        });

        // if (numOfArr < 1) {
        //     emptyTodo.style.display = 'flex';
        // } else {
        //     emptyTodo.style.display = 'none';
        // }
    }

    allButton.forEach(all => all.addEventListener('click', (event) => (allHandler(event))));

    activeButton.forEach(all => all.addEventListener('click', (event) => (activeListener(event))))
    completedButton.forEach(all => all.addEventListener('click', (event) => (completedListener(event))))
    clearCompletedButton.forEach(all => all.addEventListener('click', clearCompletedListener))
    function lightModeToggleHandler() {
        checkButton.classList.toggle('active');
        mobileLinks.classList.toggle('active');
        if (moon.classList.contains('hidden')) {
            moon.classList.remove('hidden');
            sun.classList.add('hidden');
            body.classList.add('active')
            todoListDiv.classList.add('active');
            searchInput.classList.add('active');
        } else {
            moon.classList.add('hidden');
            sun.classList.remove('hidden');
            body.classList.remove('active')

            todoListDiv.classList.remove('active');
            searchInput.classList.remove('active');
        }
    }
    darkmodeButton.addEventListener('click', lightModeToggleHandler)

    const createTodoList = () => {

        
        if (searchInput.value.length > 1) {
            // emptyTodo.classList.add('hidden')
            emptyTodo.style.display = 'none';
            const todoItem = document.createElement('li');
            todoItem.id = 'lists';
            todoItem.classList.add('draggable')
            todoItem.setAttribute('draggable', 'true');
            dragList.push(todoItem)
           
            // Get the current value of the input
            let inputValue = searchInput.value;

            // Make the first letter uppercase
            inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);

            // Set the modified value back to the input
            searchInput.value = inputValue;

           
            
            counter = todoList.children.length;

            count.innerHTML = counter
            
            todoItem.innerHTML = `<span><button class='check' onclick='checkHandler(event)'>
    <img src="./images/icon-check.svg" alt="" class='hidden' id='checks' onclick='check2Handler(event)'>
  </button> <p>${searchInput.value}</p> </span> <button id='remove-todo' onclick="removeTask(this)"><img src='./images/icon-cross.svg'></button>`;

            // todoItem.addEventListener('dragstart', (e) => {
            //     // e.dataTransfer.effectAllowed = 'move';
            //     // e.dataTransfer.setData('text/plain', null);
            //     const elem = e.target;
            //     elem.classList.add('dragging')
            // });
            // todoItem.addEventListener('dragend', e => {
            //     const elem = e.target;
            //     elem.classList.remove('dragging')
            // });
            // todoList.addEventListener('dragover', e => {
            //     e.preventDefault();
            //     const afterElements = getDragAfterElement(todoList, e.clientY)
            //     const draggable = document.querySelector('.dragging');
            //     todoList.appendChild(draggable)
            // })
            // function getDragAfterElement(container, y) {
            //     const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
            //     // draggableElements.reduce((closest, child) => {

            //     // }, {offset: Number.POSITIVE_INFINITY})
            // }


           
            todoList.prepend(todoItem);
            searchInput.value = ''
        }
        else {
            alert('add a task name with 2 characters upward and a maximum character of 30')
       }
    }

    function keyUpEventListener(e) {
        if (e.key === 'Enter') {
            createTodoList()
        }
       
    }
   
    createTodoButton.addEventListener("click", createTodoList);
    document.addEventListener('keyup', keyUpEventListener);


    
}
app()

function removeTask(button) {

    const taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
    if (!taskItem.classList.contains('.activated')) {
        counter--
    } else {
        counter--
    }
    
   
    if (todoList.children.length - 1 > 0) {
        count.innerHTML = todoList.children.length - 1;
        // if()
        emptyTodo.style.display = 'none';
        if (!taskItem.classList.contains('.activated')) { 
            counter = todoList.children.length - 1
        }
    } else {
        count.innerHTML = 0;
       
        emptyTodo.style.display = 'flex';
    }
  
    // count.innerHtml = todoList.children.length
}

function checkHandler(e) {
    const btn = e.target
    const buttonElements = e.target.children;
    const spanElements = e.target.parentNode;
    const libtn = e.target.parentNode.parentNode;
    const spanElement = e.target.parentNode.children;
    if (libtn.tagName.toLowerCase() === 'li') {
        if (libtn.classList.contains('activated')) {
            libtn.classList.remove('activated')
        } else {
            libtn.classList.add('activated')
        }
    }
   
    
    for (const span of spanElement) {
        // if (spanElements.classList.contains('show')) {
        span.classList.toggle('line-through')
        
        // } else {
            // span.classList.remove('line-through')
        // }
} 
     
   
    // Loop through each child element and remove the 'hidden' class
    for (const buttonElement of buttonElements) {
        
        buttonElement.classList.add('set-width');
        if (buttonElement.classList.contains('hidden')) {

            buttonElement.classList.remove('hidden');
            btn.id = 'btn-button';
            
            spanElements.classList.remove('show');
            if (counter <= 0) {
                counter = 0
            } else {
                counter--;
            }
        } else {

            buttonElement.classList.add('hidden');
            btn.id = 'nothing';
            counter++;
            
            spanElements.classList.add('show')
        }
       
    }
    count.innerHTML = counter
   

}

function check2Handler(e) {
    const btn = e.target;
    const btn2 = e.target.parentNode;
    const parent = e.target.parentNode.parentNode;
    const libtn = parent.parentNode;
    const parentElement = e.target.parentNode.parentNode.children;
    if (libtn.tagName.toLowerCase() === 'li') {
        if (libtn.classList.contains('activated')) {
            libtn.classList.remove('activated')
        } else {
            libtn.classList.add('activated')
        }
    }
    for (const pelement of parentElement) {
        if (parent.classList.contains('show')) {
            pelement.classList.add('line-through');
            
        } else {
            pelement.classList.remove('line-through');
            // counter++
        }
    }

    if (!btn.classList.contains('hidden')) {
        btn.classList.add('hidden');
        parent.classList.add('show');
        counter++;
        btn2.id = 'nothing';
    } else {
        btn.classList.remove('hidden');
        parent.classList.remove('show');
        btn2.id = 'btn-button';
        if (counter <= 0) {
            counter = 0
        } else {
            counter--;
        }
       
    }

       
    count.innerHTML = counter
}
// let draggedItem = null;

// function dragStart(event) {
//     draggedItem = event.target;
//     event.dataTransfer.setData("text/plain", ''); // Required for Firefox
//     setTimeout(() => {
//         event.target.classList.add('dragged');
//     }, 0);
// }

// function allowDrop(event) {
//     event.preventDefault();
// }

// function drop(event) {
//     event.preventDefault();
//     const dropTarget = event.target;

//     if (dropTarget.tagName === 'LI') {
//         // Swap the positions of the dragged item and the drop target
//         const list = dropTarget.parentNode;
//         const dropIndex = Array.from(list.children).indexOf(dropTarget);
//         const draggedIndex = Array.from(list.children).indexOf(draggedItem);

//         list.insertBefore(draggedItem, dropIndex > draggedIndex ? dropTarget.nextSibling : dropTarget);
//     }

//     // Reset the dragged item styles
//     draggedItem.classList.remove('dragged');
//     draggedItem = null;
// }
// let draggedItem = null;

// document.addEventListener('dragstart', function (event) {
//     draggedItem = event.target;
//     event.dataTransfer.setData('text/plain', ''); // Required for Firefox
//     setTimeout(function () {
//         event.target.classList.add('dragged');
//     }, 0);
// });

// document.addEventListener('dragover', function (event) {
//     event.preventDefault();
// });

// document.addEventListener('drop', function (event) {
//     event.preventDefault();
//     const dropTarget = event.target;

//     if (dropTarget.tagName === 'LI') {
//         const list = dropTarget.parentNode;
//         const dropIndex = Array.from(list.children).indexOf(dropTarget);
//         const draggedIndex = Array.from(list.children).indexOf(draggedItem);

//         list.insertBefore(draggedItem, dropIndex > draggedIndex ? dropTarget.nextSibling : dropTarget);
//     }

//     draggedItem.classList.remove('dragged');
//     draggedItem = null;
// });
let draggedItem = null;

document.addEventListener('dragstart', function (event) {
    draggedItem = event.target;
    event.dataTransfer.setData('text/plain', ''); // Required for Firefox
    setTimeout(function () {
        event.target.classList.add('dragged');
    }, 0);
});

document.addEventListener('dragover', function (event) {
    event.preventDefault();
});

document.addEventListener('drop', function (event) {
    event.preventDefault();
    const dropTarget = event.target;

    if (dropTarget.tagName === 'LI') {
        const list = dropTarget.parentNode;
        const dropIndex = Array.from(list.children).indexOf(dropTarget);
        const draggedIndex = Array.from(list.children).indexOf(draggedItem);

        list.insertBefore(draggedItem, dropIndex > draggedIndex ? dropTarget.nextSibling : dropTarget);
    }

    draggedItem.classList.remove('dragged');
    draggedItem = null;
});

// Add touch event listeners
document.addEventListener('touchstart', function (event) {
    handleTouchStart(event);
}, false);

document.addEventListener('touchmove', function (event) {
    handleTouchMove(event);
}, false);

let touchStartX = 0;
let touchStartY = 0;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    touchStartX = firstTouch.clientX;
    touchStartY = firstTouch.clientY;
}

function handleTouchMove(event) {
    if (!touchStartX || !touchStartY) {
        return;
    }

    const touchX = event.touches[0].clientX;
    const touchY = event.touches[0].clientY;

    const deltaX = touchX - touchStartX;
    const deltaY = touchY - touchStartY;

    if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
        // Detect a significant drag
        simulateDragStart(event);
        touchStartX = 0;
        touchStartY = 0;
    }
}

function simulateDragStart(event) {
    // Your logic for simulating drag start on touch
    const targetElement = document.elementFromPoint(touchStartX, touchStartY);
    if (targetElement) {
        draggedItem = targetElement;
        targetElement.classList.add('dragged');
        event.preventDefault(); // Prevent default touchmove behavior
    }
}
