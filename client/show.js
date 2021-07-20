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
    postArray.forEach(e => {
        let title = document.createElement('h3');
        let pseudonym = document.createElement('h4');
        let body = document.createElement('p');
        title.textContent = e.title;
        pseudonym.textContent = e.pseudonym;
        body.textContent = e.body;
        sectionToAppend.append(title);
        sectionToAppend.append(pseudonym);
        sectionToAppend.append(body);
    })  
}