const colorvalue = document.getElementById("color")
const addItemIcon = document.getElementById("+")
const mainContainer = document.getElementsByClassName("main-box-container")[0]


addItemIcon.addEventListener("click", handleAdd)

let newX = 0, newy = 0, oldY = 0, oldX = 0

function handleAdd() {
    let newBox = document.createElement("div")

    newBox.innerHTML = 
    <form class="box-container">
        <div class="box-bar">
           <span id="x">&#x2718;</span> 
        </div>
        <textarea name="ta" placeholder="Endter text. . . "></textarea>
    </form>
    
    const boxValue = newBox.querySelector(".box-bar")
    const boxContainer = newBox.querySelector(".container")
    const exitElement = newBox.querySelector("#x")
    const txtArea = newBox.querySelector("#ta")
     
    console.log( txtArea);
    
    txtArea.style.background = colorvalue.value 
    mainContainer.appendChild(newBox)
    exitElement.addEventListener("click", handleRemove)
     function handleRemove() {
        boxContainer.parentElement.remove()
     }

     boxValue.addEventListener("mousedown", handleMouseDown)
      
     function handleMouseDown(e) {
        e.preventdefault()
        oldX = e.clientX
        oldY = e.clientY

        document.addEventListener("mousemove", hanleMove)
        document.addEventListener("mouseup", handleMoveUp)
        function handleMove(e) {
            e.preventdefault()
            newY = oldY - e . clientY
            newX = oldX - e . clientX
            boxContainer.style.top = (boxContainer.getBoundingClientRect().top - newY) + "px"
            boxContainer.style.left = (boxContainer.getBoundingClientRect(). left - newX) + "px"
            oldX = e.clientX
            oldY = e.clientY

        }
        
        function handleMoveUp() {

            document.removeEventListener("mousemove", handleMove)
            document.removeEventListener("mouseup", handleMoveUp)


        }
     }

}

