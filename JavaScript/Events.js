function openCategory(dataLength) {
    const value = document.getElementById("selectCategory").value;
    if (value == 0) {
        showAllCategory(dataLength);
    }
    else {
        for (let i = 1; i <= dataLength; i++) {
            const title = document.getElementById("title" + i);
            title.className = 'section';
            if (value == i) {
                title.style.display = "block";
            }
            else {
                title.style.display = "none";
            }
        }
    }
}
function showAllCategory(dataLength) {
    for (let i = 1; i <= dataLength; i++) {
        const tittle = document.getElementById("title" + i);
        tittle.style.display = "block";
        tittle.className = 'section';
        //if second section add class line for line break
        if (i != 0) {
            tittle.className = 'section line';
        }
    }
}
function openPopUp(value, description) {
    document.getElementById("popupTextContent").innerHTML = description;
    document.getElementById("popupTitle").innerHTML = document.getElementById("newsName" + value).innerHTML;
    document.getElementById("popupCategory").innerHTML = document.getElementById("postedCategory" + value).innerHTML;
    const popup = document.getElementById("popupSection");
    popup.style.display = "block";
}
function closePopUp() {
    const popup = document.getElementById("popupSection");
    popup.style.display = "none";
}