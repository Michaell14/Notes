import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, {useEffect} from "react";

let i=1;

function Home() {
  
  return (
    <>
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>

      <Head>
        <title>Notes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <button className={styles.button} onClick={addDiv}>add</button>

        <div className="css0">
          <div className="wrapper" id="wrapper">
            <div class="container" id="container-0" onClick={openModal}>
              <h3 id="title-0">Title</h3>
              <p id="content-0">Ideas</p>
            </div>
          </div>
        </div>
      </main>

      <div id="myModal" class="modal">

        <div class="modal-content">
          <span class="close">&times;</span>
          <h5>Enter title:</h5>
          <input type="text" id="modalTitleVal" defaultValue="enter text:"></input>
          <textarea id="modalContent" rows="5" cols="100" defaultValue="Ideas"></textarea>

          <button type="button" id="0" onClick={changeVals}>Save Changes</button>
        </div>

      </div>
    </>
  )
}
//Setting the values of the container with the values in the modal
const changeVals = (event) => {
  let id=event.target.id;

  let title= document.getElementById("modalTitleVal").value;
  let content=document.getElementById("modalContent").value;

  document.getElementById("title-"+id).innerHTML=title;
  document.getElementById("content-"+id).innerHTML = content;
}

//Opens the modal when a container is clicked
const openModal = (event) => {
  let id=event.target.id.slice(-1);
  
  // Get the modal
  var modal = document.getElementById("myModal");
  modal.querySelector("button").id=id;
  
  document.getElementById("modalTitleVal").value=document.getElementById("title-"+id).innerHTML;
  document.getElementById("modalContent").value=document.getElementById("content-"+id).innerHTML;

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal
  modal.style.display="block";
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function addDiv(){
  
  let grid=document.getElementById('wrapper');

  //Creating new Div
  var newDiv=document.createElement("div");
  newDiv.className = "container";
  newDiv.id="container-" + i;
  newDiv.onclick  =openModal;

  //Adding h3 title tag into the newly created div element
  var newH3 = document.createElement("h3");
  newH3.innerHTML="Title";
  newH3.id="title-"+i;
  newDiv.append(newH3);

  //Adding p tag into the newly created div element
  var newP = document.createElement("p");
  newP.innerHTML = "Ideas";
  newP.id = "content-"+i;
  newDiv.append(newP);
  
  //grid.innerHTML += template;
  grid.append(newDiv);
  i++;
}

export default Home;