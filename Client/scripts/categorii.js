let categorii = [];

const renderCategories = () => {
    categorii.forEach((categorie) => {
        $(".sidebar").append(`<li><a class="ml-3 categorie" href="#"><i class="fas fa-arrow-alt-circle-right"></i> ${categorie.title}</a></li>`);
    });
};

const renderCategoriesSelect = () => {
    categorii.forEach((categorie) => {
        $("#exampleFormControlSelect2").append(`<option value="${categorie._id}">${categorie.title}</option>`);
    });
};


const getCategories = () => {
    fetch(api_url + "/product_category/")
        .then(function (data) {
            data.json().then(function (res) {
                categorii = res._items;
                renderCategories();
                renderCategoriesSelect();
            });
        })
        .catch(function (error) {
        });
};
