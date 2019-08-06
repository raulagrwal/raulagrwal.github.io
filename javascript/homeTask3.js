const loadHTML = data => {
//Main Div formation
const mainWrapper = createNode('div');
mainWrapper.className = 'main-wrapper';
document.body.appendChild(mainWrapper);

//CreateHeader
createHeader(mainWrapper);

//Creation of main content section based on data array
const contentSection = createContentSection(mainWrapper, data);

//creation of popup
createPopupSection(contentSection);

//Category and Subscribe section creation
createCategorySection(mainWrapper, data);

//Footer section
createFooter(mainWrapper);
};