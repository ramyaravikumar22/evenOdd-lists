let usersWord = "" 
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")


    function updateWord(element) {
      usersWord = element.value

    }

    function handleSubmit() {
        let newListItem = document.createElement('LI')
        newListItem.innerText = usersWord
        console.log(usersWord.length)

        if(usersWord.length % 2 ===0){
            document.getElementById("even").appendChild(newListItem)
        } else {
            document.getElementById("odd").appendChild(newListItem)
        }


        usersWord = ""
        document.getElementById("even-odd-form").reset() //reset is a built in js. figure out a html element
      }

      //adding a reset function
      
     /* function reset() {
        alert("reset")
        document.getElementById("even").innerHTML = ""
        document.getElementById("odd").innerHTML = ""
        }*/