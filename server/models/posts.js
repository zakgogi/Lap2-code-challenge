const db = require ('../dbConfig')

class Post {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.pseudonym = data.pseudonym
        this.body = data.body
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
};

module.exports = Post;