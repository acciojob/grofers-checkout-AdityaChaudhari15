const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let tr = document.createElement("tr");
	let td1 = document.createElement("td");
	let td2 = document.createElement("td");


const getSum = () => {
//Add your code here
  let price = document.querySelectorAll(".price");
	let sum = 0;
	for(let i=0; i<price.length; i++){
		sum = sum+parseInt(price[i].textContent);
	}
	
	td1.textContent = `Total : ${sum}`
	// td2.textContent = sum;
	let table = document.getElementsByTagName("table");
	tr.appendChild(td1)
	table[0].appendChild(tr);
};
getSumBtn.addEventListener("click", getSum);

