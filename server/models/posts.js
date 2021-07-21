const db = require ('../dbConfig')

class Post {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.pseudonym = data.pseudonym;
        this.body = data.body;
        this.gif = data.gif;
    };

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const postData = await db.query(`SELECT * FROM posts;`);
                const posts = postData.rows.map(p => new Post(p))
                resolve(posts);
            } catch (err) {
                reject("Error retrieving posts")
            }
        })
    }

    static create(data){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`INSERT INTO posts (title, pseudonym, body, gif) VALUES ($1, $2, $3, $4) RETURNING *;`, [ data.title, data.pseudonym, data.body, data.gif ]);
                let newPost = new Post(postData.rows[0]);
                resolve (newPost);
            } catch (err) {
                reject('Error creating post');
            }
        });
    }
};

module.exports = Post;