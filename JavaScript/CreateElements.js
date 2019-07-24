function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
}
function createSelectTextNode(text){
    return document.createTextNode(text); //Add text to the select type element
}
function createHeader(mainWrapper){
    //Header tag and element formation
    const header = createNode('div');
    header.className = 'header';
    document.body.appendChild(header);

    //Header para formation
    const headerPara = createNode('p');
    header.appendChild(headerPara);

    const headerTitle = createNode('h2');
    headerTitle.textContent = 'NEWSFEED ';
    headerPara.appendChild(headerTitle);

    const headerSubTitle = createNode('h6');
    headerSubTitle.textContent = ' Yet another newsfeed';
    headerPara.appendChild(headerSubTitle);
    createSubscribe(header);
    mainWrapper.appendChild(header);
}
function createFooter(mainWrapper){
    const footer = createNode('div');
    document.body.appendChild(footer);

    const footerPara = createNode('p');
    footerPara.className = 'footer';
    footer.appendChild(footerPara);

    const footerText = createNode('h6');
    footerText.innerHTML = '&copy; NewsFeed 2019';
    footerPara.appendChild(footerText);
    mainWrapper.appendChild(footer);
}
function createPopupSection(contentSection){
    const popup = createNode('div');
    popup.id = 'popupSection';
    popup.className = 'popup';
    contentSection.appendChild(popup);

    //Popup Content Div
    const popupContent = createNode('div');
    popupContent.className = 'popup-content';
    popup.appendChild(popupContent);

    //Popup close
    const popupClose = createNode('span');
    popupClose.className = 'close';
    popupClose.id = 'close';
    popupClose.onclick = function () { closePopUp() };
    popupClose.innerHTML = "&times;"
    popupContent.appendChild(popupClose);

    const popupSection = createNode('div');
    popupContent.appendChild(popupSection);

    const popupTitle = createNode('p');
    popupTitle.id = 'popupTitle';
    popupTitle.className = "popup-title";
    popupSection.appendChild(popupTitle);

    const popupCategory = createNode('p');
    popupCategory.id = 'popupCategory';
    popupCategory.className = 'category';
    popupSection.appendChild(popupCategory);

    const popupTextContent = createNode('p');
    popupTextContent.id = 'popupTextContent';
    popupTextContent.className = 'content';
    popupSection.appendChild(popupTextContent);
}
function createOptions(dataLength){
    createOption('All News', 0);
    for (let i = 1; i <= dataLength; i++) {
        createOption('News - ' + [i], i);
    }
}
function createOption(text, value){
    let option = createNode("option");
    option.setAttribute("value", value);
    let categoryText = createSelectTextNode(text);
    option.appendChild(categoryText);
    document.getElementById("selectCategory").appendChild(option);
}
function createContentSection(mainWrapper, data){
    const contentSection = createNode('div');
    contentSection.className = 'content-section';
    mainWrapper.appendChild(contentSection);

    for (let i = 0; i < data.length; i++) {
        const section = document.createElement('div');
        section.id = 'title' + (i+1);
        section.className = 'section';
        if (i != 0) {
            section.className = 'section line';
        }
        contentSection.appendChild(section);

        const image = createNode('p');
        image.className = 'news-logo';
        const img = createNode('img');
        img.src = data[i].urlToImage;
        img.className = 'img-size';
        img.alt = ' ';
        image.appendChild(img);
        section.appendChild(image);

        const contentdiv = createNode('div');
        contentdiv.className = 'content-text';
        section.appendChild(contentdiv);

        const title = createNode('p');
        title.textContent = data[i].title;
        title.className = 'channel-name';
        title.id = 'newsName' + i;
        contentdiv.appendChild(title);

        const category = createNode('p');
        category.className = 'category';
        category.id = 'postedCategory' + i;
        const postedDate = validatePostedDate(data[i].publishedAt);
        const author = validateAuthor(data[i].author);
        category.textContent = 'Posted on: ' + postedDate + ' // Author: ' + author;
        contentdiv.appendChild(category);

        const content = createNode('p');
        content.className = 'content';
        content.id = 'newsContent' + i;
        content.textContent = validateDescription(data[i].description);
        contentdiv.appendChild(content);

        const continuereading = createNode('button');
        continuereading.className = 'continue-reading';
        continuereading.textContent = 'Continue Reading';
        continuereading.value = i;
        continuereading.onclick = function () { openPopUp(this.value, data[i].description) };
        contentdiv.appendChild(continuereading);
    }
    return contentSection;
}
function createCategorySection(mainWrapper, data){

    const categorySubscribe = createNode('div');
    categorySubscribe.className = 'category-subscribe';
    mainWrapper.appendChild(categorySubscribe);

    const selectCategory = createNode('div');
    selectCategory.className = 'category-text';
    selectCategory.textContent = 'SELECT CATEGORY';
    categorySubscribe.appendChild(selectCategory);

    const select = createNode('select');
    select.setAttribute("id", "selectCategory");
    select.className = 'select-category';
    select.onchange = function () { openCategory(data.length) };
    categorySubscribe.appendChild(select);
    
    //Create Category Option drop down
    createOptions(data.length);

    
    //createSubscribe(categorySubscribe);
}

function createSubscribe(categorySubscribe){
    // const subscribeSection = createNode('div');
    // subscribeSection.className = 'subscribe-text';
    // subscribeSection.textContent = 'SUBSCRIBE';
    // categorySubscribe.appendChild(subscribeSection);

    const emailSection = createNode('div');
    emailSection.className = 'email';
    categorySubscribe.appendChild(emailSection);

    const emailAddress = createNode('input');
    emailAddress.type = 'text';
    emailAddress.id = 'email';
    emailAddress.textContent = 'search';
    emailAddress.placeholder = 'Email Address';
    emailAddress.className = 'email-address';
    emailSection.appendChild(emailAddress);

    const subscribe = createNode('button');
    subscribe.className = 'subscribe';
    subscribe.type = 'submit';
    subscribe.textContent = 'Subscribe';
    subscribe.onclick = function () { validateEmail() };
    emailSection.appendChild(subscribe);
}