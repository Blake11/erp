const addAngajat = () => {
    let fn = $("#exampleFormControlInput1").val();
    let ln = $("#exampleFormControlInput2").val();
    let user = $("#exampleFormControlInput6").val();
    let password = $("#exampleFormControlInput7").val();
    let pn = $("#exampleFormControlInput5").val();


    // fetch(api_url + "/user", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     data: JSON.stringify({
    //         "firstname": "jesus",
    //         "lastname": "christ",
    //         "username": "jesuschrist",
    //         "password": "asdasdasdas",
    //         "phonenumber": "asdasdasdas"
    //     })
    // })
    //     .then()

    var data = JSON.stringify({
        "firstname": fn,
        "lastname": ln,
        "username": user,
        "password": password,
        "phonenumber": pn
    });

    var xhr = new XMLHttpRequest();

    xhr.open("POST", api_url + "/user");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    console.log(data);
    xhr.send(data);
    window.location.href = "/angajati.html?addedangajat=true";
};