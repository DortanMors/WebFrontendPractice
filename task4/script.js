function addBlock() {
    // Получаем значения из полей ввода
    let name = document.getElementById("inputFieldName").value;
    let imgUri = document.getElementById("inputFieldImg").value;
    let description = document.getElementById("inputFieldDescription").value;
    let other = document.getElementById("inputFieldOther").value;

    // Создаем новый блок с введенными данными
    let resultBlock = document.createElement("div");
    resultBlock.className = "result-block";
    resultBlock.innerHTML = "<div class=\"card\">\n" +
        "            <div>\n" +
        "              <div class=\"card-other\">Id: 134</div>\n" +
        "                <div class=\"photo-and-name\">\n" +
        "                  <img class=\"card-photo\" alt=\"card photo\" src=\"https://aboba.ru/wp-content/uploads/2021/06/ac1jzh4-removebg-preview1.png\">\n" +
        "                  <div class=\"card-name\">Товар</div>\n" +
        "                </div>\n" +
        "              <div class=\"card-description\">Описание</div>\n" +
        "            </div>\n" +
        "          </div>"

    // Добавляем блок в правую половину
    document.querySelector('.cards-container').appendChild(resultBlock);

    // Очищаем поля ввода
    document.getElementById("inputFieldName").value = "";
    document.getElementById("inputFieldImg").value = "";
    document.getElementById("inputFieldDescription").value = "";
    document.getElementById("inputFieldOther").value = "";
}