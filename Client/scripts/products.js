let productList = [];
let listaProduse = [];

const getProducts = (embedded) => {
    let url = api_url + "/product";
    if (embedded === true)
        url = url + "?embedded={\"category\": 1}";
    fetch(url, {cache: "force-cache"})
        .then(function (data) {
            data.json().then(function (res) {
                productList = res._items;
                renderProductList();
                renderProductTable();
            });
        })
        .catch(function (error) {
            console.log(error);
        });
};

const renderProductList = () => {
    productList.forEach((product) => {
        $(".produse").append(`<div class="col-3 mb-3">
                                    <div class="card" style="width: 18rem;">
                                          <img src="data:image/png;base64, ${product.image}" class="card-img-top" alt="Product images">
                                          <div class="card-body">
                                            <h5 class="card-title">${product.title}</h5>
                                            <p class="card-text">${product.price + " RON"}</p>
                                            <a href="#" class="btn btn-primary adaugare-produs-cos" data-name="${product.title}" data-price="${product.price}">Add to cart</a>
                                          </div>
                                     </div>
                                </div>`);
    });


    $(".adaugare-produs-cos").each(function () {
        $(this).click(function () {
            listaProduse.push({
                "nume": $(this).data("name"),
                "cantitate": 1,
                "pret": $(this).data("price")
            });

            localStorage.setItem("lista-produse", JSON.stringify(listaProduse));
        });
    });
};

const renderProductTable = () => {
    productList.forEach((product) => {
        $("#produse-stoc").append(`<tr>
                                    <th scope="row">${product.title}</th>
                                    <td>${product.description}</td>
                                    <td>${product.category.title}</td>
                                    <td>${product.price}</td>
                                    <td>${product.SKU}</td>
                                    <td><a class="btn btn-info editbutton" href="productedit.html" data-id="${product._id}"><i class="far fa-edit"></i></a> 
                                </tr>`)
    });

    $(".editbutton").each(function () {
        $(this).click(function (e) {
            sessionStorage.setItem("produs-id", $(this).data("id"));
        });
    })
};

function adaugareInCos() {
    listaProduse = localStorage.getItem("lista-produse");
    listaProduse = JSON.parse(listaProduse);

    listaProduse.forEach(function (manual) {
        $(".table").append("<tr>" + "<td>" + manual.nume + "</td>" + "<td>"
            + manual.cantitate + "</td>" + "<td>" + manual.pret + "</td>" + "</tr>");
    });
}


$(".stergecos").click(function () {
    localStorage.removeItem("lista-produse");
    location.reload();
});
