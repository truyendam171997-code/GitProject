let listProduct = ["sámung", "xiaomi"];

// hàm hiền thị sản phẩm
function showlistProduct (){
    let html = "";
    for (let i = 0; i < listProduct.length; i++) {
        html += '<tr class="product_tr">';
        html += "<td>" + (i + 1) + "</td>";
        html += "<td class='name'>" + listProduct[i] + "</td>";
        html += "<td class='product_td'>" + "<button class='btn'" + " onclick='" + "deleteProduct(" + i + ")'" + ">" + "delete" + "</button>" + "</td>"
        html += "<td class='product_td'> " + "<button class='btn'" + " onclick='" + "updateProducts(" + i + ")'" + ">" + "edit" + "</button>" + "</td>"
        html += "<td>" + "</td>";
        html += "</tr>";
    }
    document.getElementById("list_Product").innerHTML = html + "<tr> <th colSpan='4' class='total' id='totalProduct'>TOTAL</th></tr>";

}

// hàm xóa sản phảm
function deleteProduct(index) {
    if(!confirm("Are you sure you want to delete this product?")){
        return;
    }
    else {
        listProduct.splice(index, 1);
        alert("you went delete product");
    }
    showlistProduct ();
}
// hàm thêm sản phẩm
function addProduct () {
    let btnProduct = document.getElementById("addProduct").value;
    if (btnProduct==="") {
        return;
    }
    else {
        listProduct.push(btnProduct);
        showlistProduct ();
        totalProducts ();
    }

}
// hàm cập nhật
function updateProducts (index) {
    let editproduct = prompt("Enter product name");
    listProduct[index] = editproduct;
    showlistProduct ();
    totalProducts ();
}

// hàm tính tổng
function totalProducts () {
    let total = 0;
    for (let i = 0; i < listProduct.length; i++) {
        total ++;
    }
    document.getElementById("totalProduct").innerHTML = "TOTAL: " + total;
}

showlistProduct ();
totalProducts ();