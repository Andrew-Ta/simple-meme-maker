window.addEventListener('load', function(e){
    const memeForm = document.querySelector('form');
    const imageMenu = document.querySelector('#meme-image');
    const contentImage = document.querySelector('.meme-display img')
    const defaultImage = 'https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown';
    let topTextForm = memeForm.memeTopText;
    let bottomTextForm = memeForm.memeBottomText;
    let topTextContent = document.querySelector('p.top-text');
    let bottomTextContent = document.querySelector('p.bottom-text');
    let errorMessage = document.querySelector('.error');

    imageMenu.addEventListener('change', function(evt){
        if (imageMenu.value != 0) {
            contentImage.src = 'img/' + imageMenu.value + '.png';
        } else {
            contentImage.src = defaultImage;
        }
    })

    memeForm.addEventListener('submit',function(evt){

        if (topTextForm.value.trim() != 0 && bottomTextForm.value.trim() != 0 && imageMenu.value.trim() != 0) {
            contentImage.src = 'img/' + imageMenu.value + '.png';
            topTextContent.textContent = topTextForm.value;
            bottomTextContent.textContent = bottomTextForm.value;
            errorMessage.innerHTML = '';
        } else {
            errorMessage.innerHTML = "ERROR: All fields must have a value.";
            contentImage.src = defaultImage;
        }
        evt.preventDefault();
    })

    memeForm.addEventListener('reset', function(evt){
        contentImage.src = defaultImage;
        contentImage.alt = "Placeholder Image"
        topTextForm.value = '';
        bottomTextForm.value = '';
        topTextContent.textContent = '';
        bottomTextContent.textContent = '';
        errorMessage.innerHTML = '';
        
        evt.preventDefault();
    })
})