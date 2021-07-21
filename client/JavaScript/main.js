let submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', sendData);
let giphyButton = document.getElementById('gifSearch');
giphyButton.addEventListener('click', searchGif);
let postTitle = document.getElementById('articleTitle');
let postContent = document.getElementById('articleBody');
let postPseudonym = document.getElementById('articlePseudonym');
postTitle.addEventListener('change', enableButton);
postContent.addEventListener('change', enableButton);
postPseudonym.addEventListener('change', enableButton);
let viewPostsButton = document.getElementById('viewPosts');
viewPostsButton.addEventListener('click', navigateToPosts);

function navigateToPosts(){
    window.location.assign(`./show.html`);
}

function enableButton(){
    if (postTitle.value && postContent.value && postPseudonym.value){
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

const API_KEY = "MjgWi5LAv7OcAlh9hzV3qtIF8G9eb4o3";

async function searchGif(e){
    e.preventDefault();
    let searchQuery = document.getElementById('giphyFinder').value;
    if (!searchQuery) return
    try {
        let giphyAPIURL = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&rating=g&api_key=${API_KEY}&limit=15`;
        let fetchedData = await fetch(giphyAPIURL);
        let dataJson = await fetchedData.json();
        console.log(dataJson);
        appendGifs(dataJson);
    } catch (error) {
        console.log(error)
    } 
}

function appendGifs(json){
    let sectionToAppend = document.getElementById('gifSection');
    sectionToAppend.style.display = "block";
    document.getElementById('gifSection').innerHTML = "";
    for (let i=0; i<json.data.length; i++){
        let imgPath = json.data[i].images.fixed_height.url;
        let img = document.createElement('img');
        let imgButton = document.createElement('button'); 
        imgButton.id = `imgBtn${i+1}`;
        let id = imgButton.id;   
        imgButton.classList.add("removeBorder");
        imgButton.addEventListener('click', (e)=>{
            e.preventDefault();
            changeBorder(id, json);
        });
        img.setAttribute("src", imgPath);
        imgButton.append(img);
        sectionToAppend.append(imgButton);
    };
    
}

function changeBorder(id, json){
    for (let i=0; i<json.data.length; i++){
        let resetButton = document.getElementById(`imgBtn${i+1}`);
        resetButton.classList.remove("selected");
        resetButton.classList.add("removeBorder");
    }
    let selected = document.getElementById(id);
    selected.classList.remove("removeBorder");
    selected.classList.add("selected");
}



async function sendData(e){
    e.preventDefault();
    try {
        let title = document.getElementById('articleTitle');
        let pseudonym = document.getElementById('articlePseudonym');
        let body = document.getElementById('articleBody');
        let selectedGif = document.querySelector('button[class="selected"] img');
        let source = "";
        if (selectedGif){
            source = selectedGif.getAttribute("src");
        }
        let toSend = { 
            title: title.value,
            pseudonym: pseudonym.value,
            body: body.value,
            gif: source
        }
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(toSend)
        }
        console.log(toSend);
        const response = await fetch('http://localhost:3000/posts', options);
        window.location.assign(`./show.html`);
    } catch (err) {
        console.log(err);
    }
}