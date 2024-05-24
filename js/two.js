// Get all the box element
const boxes = document.querySelectorAll('.box');

//loop through each .box element
boxes.forEach(box=> {
    //add event listener for mouseenter event
    box.addEventListener('mouseenter', () => {
        // Change background color of the .container element when hovered
        document.querySelector('.container').style.backgroundColor = 'lightblue';
    }) 

    //add event listner for mouseleave event

box.addEventListener('mouseleave', () => {
    //Reset background color of .contaner when not hovered
    document.querySelector('.container').style.backgroundColor = '';
    })
})


//number 6

function addBox() {
    // Create a new div element
    var newBox = document.createElement('div')
    //Add class "box" to the new div
    newBox.classList.add('box');
    //set some text content
    newBox.textContent = 'Thank you for taking the time to process your Passport Application'
    //Appemd the new box to the container
    document.querySelector('.container').appendChild(newBox)

}

//Add Event listner to the button
document.getElementById('addBox').addEventListener('click', addBox);



//number 7
document.getElementById('less').style.display = 'none'
function show() {
    var moreText = document.getElementById("less");
    var showMoreButton = document.getElementById("showMore");

    if (moreText.style.display ==="none") {
        moreText.style.display = "inline";
        showMoreButton.textContent = "show less..."
        
    } else {
            moreText.style.display = "none"
            showMoreButton.textContent = "show more...";
        }
    }


    //number 8
    function show() {
        var moreText = document.getElementById("less")
        var showMoreLink = document.getElementById('showMore');
        
        if (moreText.style.display === "none") {
            moreText.style.display = "inline";
            showMoreLink.style.color = "green"; //change the color of the show more text
        } else {
            moreText.style.display = "none"
            showMoreLink.style.color = ""; //revert the color back to it original or default
        }
    }

