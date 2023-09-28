var date = document.lastModified;
document.getElementById("lastModified").innerHTML = "The document was last modified on : " + date; 

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
