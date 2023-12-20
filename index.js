let prudactName=document.getElementById("name");
let prudactCategore=document.getElementById("categore");
let prudactPrice=document.getElementById("price");
let prudactDes = document.getElementById("des");
let prudect = document.getElementById("prudect");
let ubdate=document.getElementById("ubdate");
let arr = [];
if (localStorage.getItem("aray")) {
  arr=JSON.parse(localStorage.getItem("aray"));
  display();
}
function getInputValue(){
let product={
  name:prudactName.value,
  categore:prudactCategore.value,
  price:prudactPrice.value,
  des:prudactDes.value

}
  arr.push(product);
  localStorage.setItem("aray", JSON.stringify(arr));
  display();
clearinput()
}
function display() {
  let cartona=``;
for(let i=0;i<arr.length;i++){
  cartona+=`
  <tr>
      <td>${i}</td>
      <td>${arr[i].name}</td>
      <td>${arr[i].categore}</td>
      <td>${arr[i].price}</td>
      <td>${arr[i].des}</td>
      <td><button class="btn btn-danger" onclick="deleteItem(${i})">delete</button></td>
      <td><button class="btn btn-warning "onclick="updateItem(${i})">update</button></td>
    </tr>
  `
}
document.getElementById("ineer").innerHTML=cartona;
}
function clearinput() {
  prudactName.value = "";
  prudactCategore.value = "";
  prudactPrice.value = "";
  prudactDes.value="";
}
function deleteItem(idx) {
  arr.splice(idx, 1);
  display(arr);
  localStorage.setItem("aray",JSON.stringify(arr));
}

function search(ele) {
  let cartona = "";
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i].name.toLowerCase().includes(ele.toLowerCase()) ) {
      cartona+=`
    <tr>
      <td>${i}</td>
      <td>${arr[i].name}</td>
      <td>${arr[i].categore}</td>
      <td>${arr[i].price}</td>
      <td>${arr[i].des}</td>
      <td><button class="btn btn-danger" onclick="deleteItem(${i})">delete</button></td>
      <td><button class="btn btn-warning "onclick="updateItem(${i})">update</button></td>
    </tr>
  `
    }
  }
  document.getElementById("ineer").innerHTML=cartona;
}
let index;
function updateItem(idx) {
  index = idx;
  prudactName.value = arr[idx].name;
  prudactCategore.value = arr[idx].categore;
  prudactPrice.value = arr[idx].price;
  prudactDes.value = arr[idx].des;
  prudect.classList.add("d-none");
  ubdate.classList.remove("d-none");

}
function getUpdateValue() {
  let demo = {
    name:prudactName.value,
  categore:prudactCategore.value,
  price:prudactPrice.value,
  des:prudactDes.value
  }
  arr.splice(index, 1, demo);
  localStorage.setItem("aray", JSON.stringify(arr));
  display(arr);
  clearinput();
  prudect.classList.remove("d-none");
  ubdate.classList.add("d-none");
}