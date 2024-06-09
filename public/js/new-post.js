async function theRest() {
    let seenMovie = document.querySelector('#seen-movie-checkbox').checked;
   console.log(seenMovie);
    if(seenMovie) {
        
        let seen = {
            title: document.querySelector('#movieTitle').value,
            review: document.querySelector('#reviewField').value,
            user_id: 1,
        };

        const response = await fetch('/post/seen', {
            method: 'POST',
            body: JSON.stringify(seen),
            headers: {'Content-Type': 'application/json'},
        });

    }else{
        console.log("you are here");
        let wish = {
            title: document.querySelector('#movieTitle').value,
            user_id: 1,
        };

        const response = await fetch('/post/wish', {
            method: 'POST',
            body: JSON.stringify(wish),
            headers: {'Content-Type': 'application/json'},
        });

    }
};

document.getElementById('submitForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    let post = {
        title: document.querySelector('#postTitle').value,
        content: document.querySelector('#content').value,
        user_id: 1,
    };
    console.log(JSON.stringify(post));
    const response = await fetch('/post', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {'Content-Type': 'application/json'},
   }).then(theRest());

});