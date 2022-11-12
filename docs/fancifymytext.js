function enlargeText() {
    document.getElementById("text_field").style.fontSize = "24px";
}

function changeText() {

    var fancy_radio = document.getElementById("FancyShmancy");
    var text_field = document.getElementById("text_field");

    if (fancy_radio.checked) {
        text_field.style.fontWeight = "bold";
        text_field.style.color = "blue";
        text_field.style.textDecorationLine = "underline"
    } else {
        text_field.style.fontWeight = "initial";
        text_field.style.color = "initial";
        text_field.style.textDecorationLine = "initial"
    }
}

function addMoo() {

    var text_field = document.getElementById("text_field");
    
    var user_value = text_field.value;
    var user_value_split = user_value.split(".");
    var moo_user_value = user_value_split.join("-Moo.");
    
    text_field.value = moo_user_value;

}