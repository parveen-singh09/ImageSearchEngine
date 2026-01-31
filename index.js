const searchinput = document.querySelector(".imge"); 
const searchbtn = document.querySelector(".btn");
const showmore = document.querySelector(".extbtn");
const second = document.querySelector(".second");

const access = "nFD22E0uRMTjfrX3HdR9zTTsC_P6l6uUv1mwsNNunbk";
let keyword = "";
let page = 1;

async function searchimages(){
    keyword = searchinput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if(page == 1){second.innerHTML = "";}

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        second.appendChild(imageLink);
    })
    showmore.style.display = "block";

}

searchbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    page = 1;         
    searchimages();
})
showmore.addEventListener("click", ()=>{
    page++;
    searchimages();
})
