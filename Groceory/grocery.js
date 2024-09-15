document.addEventListener("DOMContentLoaded", ()=>{
    let inp = document.querySelector("input");
    const add = document.querySelector(".add");
    const fatherDiv = document.querySelector(".list");
  
    add.addEventListener("click", ()=>{
      let child = document.createElement("div");
      child.innerHTML = `<p>${inp.value}</p>
               <span>
                <button class="edit">Edit</button>
                <button class="remove">Remove</button>
                </span>
              `;
  
      const editBtn = child.querySelector(".edit");
      const removeBtn = child.querySelector(".remove");
  
      child.classList.add("item");
      fatherDiv.appendChild(child);
      inp.value = "";
  
      // Add event listeners to the newly created buttons
      removeBtn.addEventListener("click", ()=>{
        fatherDiv.removeChild(child);
      });
  
      editBtn.addEventListener("click",()=>{
        const pTag = child.querySelector("p");
        const editText = pTag.textContent;
        child.innerHTML = `<input type="text" value="${editText}"> 
                           <span>
                            <button class="save">Save</button>
                            <button class="remove">Remove</button>
                           </span>
                         `;
  
        const saveBtn = child.querySelector(".save");
        saveBtn.addEventListener("click", ()=>{
          const inputBox = child.querySelector("input");
          pTag.textContent = inputBox.value;
          child.innerHTML = `<p>${inputBox.value}</p>
                           <span>
                            <button class="edit">Edit</button>
                            <button class="remove">Remove</button>
                           </span>
                         `;
        });
      });
    });
  });