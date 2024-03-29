const validateEmail = () => {
    const inputText = document.getElementById("email").value;
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(regEx)) {
        if (typeof (Storage) != "undefined") {
            localStorage.setItem("EmailAddress", inputText);
            alert('Email address is locally stored successfully- ' + localStorage.getItem("EmailAddress"));
        } else {
            document.getElementById("result").innerHTML = "Local Storage functionality is not supported";
        }
    }
    else {
        alert("Invalid email address.");
    }
};
const validatePostedDate = date => {
    if (date != null) {
        return date.slice(0, 10);
    }
    return 'No date available';
};
const validateAuthor = author => {
    if (author != null) {
        return author;
    }
    return 'No info available';
};
const validateDescription = description => {
    if (description === null) {
        return 'No description available...';
    }
    if (description.length > 240) {
        return description.slice(0, 240) + '....';
    }
    return description;
};