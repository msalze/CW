clickSushi();

function clickSushi(el) {
    document.querySelector("#sushiTitle").style.backgroundColor = "white";
    document.querySelector("#drinksTitle").style.backgroundColor = "#83aaa9";
    document.querySelector("#dessertTitle").style.backgroundColor = "#83aaa9";

    document.querySelector("#sushi").style.display = "flex";
    document.querySelector("#drinks").style.display = "none";
    document.querySelector("#dessert").style.display = "none";

}

function clickDrinks(el) {
    document.querySelector("#sushiTitle").style.backgroundColor = "#83aaa9";
    document.querySelector("#drinksTitle").style.backgroundColor = "white";
    document.querySelector("#dessertTitle").style.backgroundColor = "#83aaa9";

    document.querySelector("#sushi").style.display = "none";
    document.querySelector("#drinks").style.display = "flex";
    document.querySelector("#dessert").style.display = "none";
    
}

function clickDessert(el) {
    document.querySelector("#sushiTitle").style.backgroundColor = "#83aaa9";
    document.querySelector("#drinksTitle").style.backgroundColor = "#83aaa9";
    document.querySelector("#dessertTitle").style.backgroundColor = "white";

    document.querySelector("#sushi").style.display = "none";
    document.querySelector("#drinks").style.display = "none";
    document.querySelector("#dessert").style.display = "flex";
    
}

function addRow(el) {
    let id = el.id; // id of add button
    let name = id.slice(1); // id and name of input field
    let form = document.querySelector("#" + name); // get form element
    let value = form.value;

    if (value == "") {
        return false;
    }
    
    let row = document.querySelector("#" + name + "Row"); // possible existing row
    if (row != null) { // update
        row.innerHTML = "<td>" + name + "</td><td class=\"value\">" + value + "</td>";
    } else { // create new row
        let tr = document.createElement("tr");
        tr.id = name + "Row";
        tr.innerHTML = "<td>" + name + "</td><td class=\"value\">" + value + "</td>"

        document.querySelector("tbody").appendChild(tr);
    }

    recal(); // update total
    return false;
}

function recal() {
    let values = document.querySelectorAll(".value");

    let inte = 0;

    for (index = 0; index < values.length; index ++) {
        console.log(values[index].innerHTML);
        inte += parseInt(values[index].innerHTML, 10);
    }

    if (isNaN(inte)) {
        inte = 0;
    }
    
    document.querySelector("#tot").innerHTML = (inte).toString();
}
