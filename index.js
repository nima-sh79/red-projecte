const codHolder = document.getElementById('code-holder');
const codButton = document.getElementById('code-button')
const ourBody = document.getElementById('my-body');
const addNewColor = (e) => {
    e.preventDefault();
    ourBody.style.backgroundColor = codHolder.value;
    console.log(codHolder.value);
}
codButton.addEventListener ('click', addNewColor);


