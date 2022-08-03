let usersWord = "" //this is defined globally. let is allowing us to change in the course of the program
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")


    function updateWord(element) {
      usersWord = element.value

     // console.log(usersWord)
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

/*
            let newListItem = document.createElement('LI')
            newListItem.innerText = usersWord
            oddList.appendChild(newListItem)
        } else{
            let newListItem = document.createElement('LI')
            newListItem.innerText = usersWord

            evenlist.appendChild(newListItem)
        }*/
    //we are appending a child and child is a newest item. its a built in function in java script and lists the items
        
        usersWord = ""
        document.getElementById("even-odd-form").reset() //reset is a built in js. figure out a html element
      }

      //adding a reset function
      
     /* function reset() {
        alert("reset")
        document.getElementById("even").innerHTML = ""
        document.getElementById("odd").innerHTML = ""
        }*/