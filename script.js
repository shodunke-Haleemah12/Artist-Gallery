const artist = [
    {
        id: 1,
        name: "Olamide Gbenga Adedeji",
        Stagename: "BADDO",
        img: "./baddo.jpeg",
        about: "Olamide Gbenga Adedeji is a Nigerian rapper, singer, songwriter, and record executive. He is regarded as one of the most influential artists in Africa....",
        age: "35 Years",
    },

    {
        id: 2,
        name: "David Adedeji Adeleke ",
        Stagename: "Davido",
        img: "./davido.webp",
        about: " David Adedeji Adeleke is a Nigerian singer, songwriter and record producer. He is regarded as one of the most important Afrobeats artists of the 21st century, and for popularizing the genre globally. Davido is the biggest Artist in Africa that is why he goes by the name 001",
        age: "31 Years",
    },

    {
        id: 3,
        name: "Belcalis Marlenis Cephus ",
        Stagename: "Cardi B",
        img: "./cardi.webp",
        about: " Belcalis Marlenis Cephus, known professionally as Cardi B, is an American rapper. She is one of the most commercially successful female rappers of her generation. Born and raised in New York City, she first gained popularity through videos shared on Vine and Instagram. ",
        age: "31 Years",
    },

    {
        id: 4,
        name: "Damini Ebunoluwa Ogulu",
        Stagename: "Burna Boy",
        img: "./burna.jpg",
        about: "  Damini Ebunoluwa Ogulu is a Nigerian singer, songwriter and record producer. He rose to stardom in 2012 after releasing Like to Party, the lead single from his debut studio album L.I.F.E.",
        age: "33 Years",
    },

    {
        id: 5,
        name: "Adedamola Oyinlola Adefolahan ",
        Stagename: "Fireboy",
        img: "./fireboy.jpeg",
        about: " Adedamola Oyinlola Adefolahan, who is known professionally as Fireboy DML, is a Nigerian singer and songwriter. He is signed to YBNL Nation, a record label founded by rapper Olamide. His debut studio album, Laughter, Tears and Goosebumps, was released in 2019.",
        age: "28 Years",
    }
    
]

const image = document.querySelector(".baddo");
const name = document.querySelector(".name");
const stagename = document.querySelector(".stagename");
const about = document.querySelector(".about");
const age = document.querySelector(".age");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

let showpicture =0;

window.addEventListener("DOMContentLoaded", () =>{
    showpictures()
})

function showpictures(){
    const item = artist [showpicture];

    name.textContent = item.name
    stagename.textContent = item.Stagename
    about.textContent = item.about
    age.textContent = item.age
    image.src = item.img
}

previous.addEventListener("click", ()=>{
    showpicture--
    showpictures()
})


next.addEventListener("click", ()=>{
    showpicture++
    showpictures()
})