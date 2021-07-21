window.onload = function(){
    getPosts();
}

let sectionToAppend = document.getElementById('posts');

async function getPosts(){
    let postData = await fetch("http://localhost:3000/posts");
    console.log(postData);
    let json = await postData.json();
    console.log(json);
    renderPosts(json.allPosts);
}

function renderPosts(postArray){
    //append in order of most recently added to db
    postArray.reverse();
    //append a maximum of 10 posts
    let postsToLoop = postArray.slice(0,10);
    //create a card for each post in db 
    postsToLoop.forEach(e => {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.classList.add('pt-3');
        cardDiv.classList.add('text-center');
        let cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        cardHeader.textContent = e.title;
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        let blockquote = document.createElement('blockquote');
        blockquote.classList.add('blockquote');
        blockquote.classList.add('mb-0');
        let para = document.createElement('p');
        para.textContent = e.body;
        let gif = document.createElement('img');
        let footer = document.createElement('footer');
        footer.classList.add('blockquote-footer');
        footer.textContent = e.pseudonym;
        blockquote.append(para);
        if (e.gif){
            gif.src = e.gif
            blockquote.append(gif);
        }
        blockquote.append(footer);
        cardBody.append(blockquote);
        cardDiv.append(cardHeader);
        cardDiv.append(cardBody);
        sectionToAppend.append(cardDiv);
    })
}