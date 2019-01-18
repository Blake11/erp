let listaAngajati = [];

const getAngajati = () => {
    let url = api_url + "/user";
    fetch(url, {cache: "force-cache"})
        .then(function (data) {
            data.json().then(function (res) {
                listaAngajati = res._items;
                renderAngajati();
            });
        })
        .catch(function (error) {
            console.log(error);
        });
};

const role = () => {
    let functii = ["Manager", "Vanzari", "Resurse umane", "Cureirat", "Relatii clietnii", "Suport Tehnic"];
    return functii[Math.floor(Math.random() * functii.length)]
};

const renderAngajati = () => {
    listaAngajati.forEach((angajat) => {
        $("#angajati").append(`<tr>
                                    <th scope="row">${angajat.firstname}</th>
                                    <td>${angajat.lastname}</td>
                                    <td>${angajat.phonenumber}</td>
                                    <td>${angajat.username}</td>
                                    <td>${role()}</td> 
                                    <td>${1300 + Math.round(Math.random()*4000)} RON</td>
                                </tr>`);
    });

};