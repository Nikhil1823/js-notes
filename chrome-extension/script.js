let myLeads = JSON.parse(localStorage.getItem("leads"))
  ? JSON.parse(localStorage.getItem("leads"))
  : [];

const inputField = document.querySelector(".input-el");
const saveButton = document.querySelector(".save");
const listItems = document.querySelector(".result");
const clearButton = document.querySelector(".clear");
const tabButton=document.querySelector('.save-tab')

const populateDom = (myList) => {
  const list = myList.reduce((acc, item) => {
    return (acc += `<li class='item'><a> ${item} </a></li>`);
  }, "");
  clearButton.style.display = "inline-block";

  listItems.innerHTML = list;
}; 
if (myLeads.length) {
  populateDom(myLeads);
}
saveButton.addEventListener("click", () => {
  if (inputField.value.length > 0) {
    myLeads.push(inputField.value);
    populateDom(myLeads);
    localStorage.setItem("leads", JSON.stringify(myLeads));
    inputField.value = "";
  }
});

clearButton.addEventListener("click", () => {
    myLeads=[]
  localStorage.clear();
  populateDom(myLeads)
  clearButton.style.display='none'
  
});

tabButton.addEventListener('click',()=>{
    chrome.tabs.query({active:true,currentWindow:true},(tab)=>{
        myLeads.push(tab[0].url);
        populateDom(myLeads);
        localStorage.setItem("leads", JSON.stringify(myLeads));
    })
})