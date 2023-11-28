// Constants
const user = {
    name:'Gabriel Medina',
    image:'https://pbs.twimg.com/profile_images/750391781901164545/xA8M-3pB_400x400.jpg',
    role:"Funcionário"
}

const postsList = [
    {
    image:'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2022/02/02/1922049032-f64ca4a-como-tocar-guitarra.jpg',
    username:'Ana Maria',
    description:'Tocando minha música favorita',
    date:8
  },
  {
    image:'https://odia.ig.com.br/_midias/jpg/2023/01/05/1200x750/1_francisco_massaranduba_ufc_mma-27618109.jpg',
    username:'João Pedro',
    description:'Me preparando pra luta de sábado',
    date:3
  },
  {
    image:'https://s2.glbimg.com/v4dafND9ioyvKL4_nbvfacals-k=/smart/e.glbimg.com/og/ed/f/original/2020/04/01/gq104_skate_01.png',
    username:'Pedro Barros',
    description:'Mandando uma manobra de skate',
    date:1
  },
  {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyi9aWoW4HO_KWbeNojiY4ub8r_l9romPA8TXXb-f5AdX7bF4WuJikgmYG7hPZIycDbgw&usqp=CAU',
    username:'Maria Paula',
    description:'Esse período a PSET ta sinistra',
    date:10
  },
  {
    image:'https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/vqys54onceefbza1qu9p',
    username:'Neymar JR',
    description:'Curtindo um frio',
    date:2
  },
  ]

const pagesEnum = ["feed", "criar-publicacao", "perfil", "contatos"];

// Components
const Header = () => {
    return `<header>
    </header>`
}


const Drawer = (pageName) => {
    return `<div id='drawer'>
    <div class='user-content'>
    <img class='user-image' src="${user.image}"/>
    <div class='user-data'>
    <h4>${user.name}</h4>
    <h5>${user.role}</h5>
    </div>
    </div>
    <div class='links-content'>
    ${pageName!== pagesEnum[0] ? `<a class='link-text' href="Home.html"><li>Feed</li></a>` : ""}
    ${pageName!== pagesEnum[1] ? `<a class='link-text' href="CreatePost.html"><li>Criar Publicação</li></a>` : ""}
    ${pageName!== pagesEnum[2] ? `<a class='link-text'  href="Profile.html"><li>Perfil</li></a>` : ""}
    ${pageName!== pagesEnum[3] ? `<a class='link-text'  href="Contacts.html"><li>Contatos</li></a>` : ""}
    </div>
    </div>`
}

const Checkbox = (label) => {
    return `<label class="checkbox-content">
    <input type="checkbox" />
    ${label ||'Label'}
    </label>`
}

const Post = (user, index) =>{
    const {image, username, description, date} = user;
    return `
    <li onclick='postClick(${index})' class="post-content" key="${'post-item'+index}" id="${index}">
    <img src="${image}"
        class="post-image" />
    <div class="instagram-bar">
        <span id="instagram-bar-left-content">
            <button class="icon-button">
                <i class="far fa-heart"></i>
            </button>
            <button class="icon-button">
                <i class="far fa-comment"></i>
            </button>
        </span>
        <button class="icon-button">
            <i class="far fa-bookmark"></i>
        </button>
    </div>
    <div class="post-data-container">
        <h4 class="post-username">${username}</h4>
        <h5 class="post-description">${description}</h5>
        <h6 class="post-date">${date}m ago</h6>
    </div>
</li>`
}

const PostContent = (user) =>{
    const {image, username} = user;

    return `
    <div id="post-content">
    <img class="post-content-image" src="${image}" alt="Post Image">
    <div class="instagram-bar">
        <span id="instagram-bar-left-content">
            <button class="icon-button">
                <i class="far fa-heart"></i>
            </button>
            <button class="icon-button">
                <i class="far fa-comment"></i>
            </button>
        </span>
        <button class="icon-button">
            <i class="far fa-bookmark"></i>
        </button>
    </div>
    </div>
    <div class="post-data-content">
    <div class="post-user-content">
        <i id="user-logo" class="fa-sharp fa-solid fa-circle-user"></i>
        <h2>${username}</h2>
    </div>
    <div class="comment-list">
                <div class="comment">
                  <img class="user-avatar" src="https://conteudo.imguol.com.br/c/esporte/dd/2023/02/09/kelly-slater-surfista-americano-1675962742370_v2_1x1.jpg" alt="User Avatar">
                  <div class="comment-content">
                    <h4 class="username">Kelly Slater</h4>
                    <p class="comment-text">Adorei essa foto! As cores estão incríveis. 😍</p>
                  </div>
                </div>
                <div class="comment">
                  <img class="user-avatar" src="https://i.discogs.com/sgSLhUkz57DDiBd1RC5Xjv_m0xTEEJvWWwT1E5XDcsk/rs:fit/g:sm/q:90/h:480/w:443/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTQwOTY3/MC0xNDUwMzkyNzQ0/LTEwMDcuanBlZw.jpeg" alt="User Avatar">
                  <div class="comment-content">
                    <h4 class="username">Rob Machado</h4>
                    <p class="comment-text">Que vista maravilhosa! Dá vontade de estar lá. 🌅</p>
                  </div>
                </div>
    </div>
    `
}

const localStorageManager = (window) => {
  if(!window.localStorage.getItem('posts')){
    window.localStorage.setItem('posts', JSON.stringify(postsList))
  }
}

const getPosts = (window)=>{
  const posts = window.localStorage.getItem('posts')
  return JSON.parse(posts)
}

export { Header, Drawer, Checkbox, Post, postsList, PostContent, localStorageManager, getPosts, pagesEnum}