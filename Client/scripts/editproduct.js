const getProductById = (id) => {
    let url = api_url + "/product/" + id;
    fetch(url, {cache: "force-cache"})
        .then(function (data) {
            data.json().then(function (res) {
                renderProduct(res);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
};

const renderProduct = (data) => {
    $("#hiddenid").attr("value", data._id);
    $("#exampleFormControlInput1").attr("value", data.title);
    $("#exampleFormControlInput2").attr("value", data.description);
    $("#exampleFormControlSelect2").attr("value", data.category);
    $("#exampleFormControlInput4").attr("value", data.price);
    $("#exampleFormControlInput5").attr("value", data.SKU);
    $("#productimage").attr("src", `data:image/png;base64, ${data.image}`);

};


const saveProdoctChanges = () => {
    let data = {
        "title": $("#exampleFormControlInput1").val(),
        "description": $("#exampleFormControlInput2").val(),
        "price": $("#exampleFormControlInput4").val(),
        "category": $("#exampleFormControlSelect2 option:selected").val()
    };

    fetch(api_url + "/product/" + $("#hiddenid").val(), {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(function (data) {
            data.json().then(function () {
                $("#form").append("<div class=\"alert alert-success mt-3 text-center\" role=\"alert\">\n" +
                    "  Product has been updated!\n" +
                    "</div>");
                setInterval(() => {
                    location.reload();
                }, 2500);
            });
        })
        .catch(function (error) {
            console.log(error);
        });

};

const deleteProduct = () => {
    fetch(api_url + "/product/" + $("#hiddenid").val(), {
        method: 'DELETE',
    })
        .then(function () {
            $("#form").append("<div class=\"alert alert-danger mt-3 text-center\" role=\"alert\">\n" +
                "  Product has been deleted!\n" +
                "</div>");
            setInterval(() => {
                window.location = "/stoc.html";
            }, 2500);
        })
        .catch(function (error) {
            console.log(error);
        });

};
