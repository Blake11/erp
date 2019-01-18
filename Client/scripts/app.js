const api_url = "http://192.168.100.4:5000";

if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
    getCategories();
    getProducts(false);
}

if (window.location.pathname === "/stoc.html") {
    getProducts(true);
}

if (window.location.pathname === "/addproduct.html") {
    getCategories();
    $(".addproduct").click(() => {
        window.location.href = "/stoc.html?addedproduct=true";
    })
}

if (window.location.search === "?addedproduct=true") {
    $(".notificari").append("<div class=\"alert alert-success mt-3 text-center\" role=\"alert\">\n" +
        "  Product has been created!\n" +
        "</div>");
}

if (window.location.pathname === "/productedit.html") {
    getCategories();
    renderCategoriesSelect();
    getProductById(sessionStorage.getItem("produs-id"));
    $("#save").click((e) => {
            e.preventDefault();
            saveProdoctChanges();
        }
    );
    $("#delete").click((e) => {
            e.preventDefault();
            deleteProduct();
        }
    );
}

if (window.location.pathname === "/angajati.html") {
    getAngajati();
}

if (window.location.pathname === "/addangajat.html") {
    $("#save").click((e) => {
        e.preventDefault();
        addAngajat();
        window.location.href = "/angajati.html?addedangajat=true";
    })
}

if (window.location.search === "?addedangajat=true") {
    $(".notificari").append("<div class=\"alert alert-success mt-3 text-center\" role=\"alert\">\n" +
        "  You have been downgraded from client \n" +
        "</div>");
}


if (window.location.pathname === "/cos.html") {
    adaugareInCos();
}
