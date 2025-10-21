let dsDienThoai = [
    new phones("DT01", "iPhone 17", "Apple", 25000000),
    new phones("DT02", "Galaxy S24", "Samsung", 23000000),
    new phones("DT03", "Xiaomi 17", "Xiaomi", 18000000),
    ];

function showListPhone() {
        dsDienThoai.sort((a, b) => a.name.localeCompare(b.name));
        let listphone =  document.getElementById("listphone")
    listphone.innerHTML = "";
    for (let dt of dsDienThoai) {
            let html =
            "<tr>" +
                "<td>" + dt.id + "</td>" +
                "<td>" + dt.name+ "</td>" +
                "<td>" + dt.brand+ "</td>" +
                "<td>" + dt.price+ "vnd"+ "</td>" +
            "</tr>";
        listphone.innerHTML += html;
        }
}

function addPhone() {
    let id  = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let brand = document.getElementById("brand").value;
    let price = +(document.getElementById("price").value)
    if (id==="" || name==="" || brand==="" || price==="") {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
    }
    let phone = new phones(id, name, brand, price);
    dsDienThoai.push(phone);
    showListPhone()
}

    showListPhone()
