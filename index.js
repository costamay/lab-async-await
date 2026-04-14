// Write your code here!
let BASE_URL = "https://jsonplaceholder.typicode.com/posts"
let ul = document.getElementById('post-list')

async function getPosts(){

    let response  = await fetch(BASE_URL)

    if(!response.ok){
        console.error("Something went wrong")
    }

    let posts = await response.json()

    displayPosts(posts)




}
getPosts()

function displayPosts(posts){
    posts.forEach(post =>{

        let li = document.createElement('li')

        let h1 = document.createElement('h1')
        h1.textContent = post.title

        let p = document.createElement('p')
        p.textContent = post.body

        li.append(h1)
        li.append(p)

        ul.append(li)

        
    })

    // for(let post of posts){

    //     let li = document.createElement('li')

    //     let h1 = document.createElement('h1')
    //     h1.textContent = post.title

    //     let p = document.createElement('p')
    //     p.textContent = post.body

    //     li.append(h1)
    //     li.append(p)

    //     ul.append(li)

    // }

}

console.log(document.querySelector('h1'))