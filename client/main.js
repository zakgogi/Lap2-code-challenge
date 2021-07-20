let submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', sendData);

async function sendData(e){
    e.preventDefault();
    try {
        let title = document.getElementById('articleTitle');
        let pseudonym = document.getElementById('articlePseudonym');
        let body = document.getElementById('articleBody');
        let toSend = { 
            title: title.value,
            pseudonym: pseudonym.value,
            body: body.value
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