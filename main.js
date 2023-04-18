var kata  = prompt("Masukan Nama anda: ");
document.getElementById("Kata").innerHTML = kata;

//validationForm
function validationForm(event) {
    event.preventDefault();
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const message = document.forms["message-form"]["message"].value;

    if (name == "" || birthDate == "" || gender == "" || message == "") {
        alert("Maaf, tidak boleh ada yang kosong");
        return false;
    }

    document.getElementById("sender-full-name").innerText = name ;
    document.getElementById("sender-birth-date").innerText= birthDate;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-message").innerText = message;

    return true;
}
