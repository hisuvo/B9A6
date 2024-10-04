
const bannerForm = [
    { title: "Registered Users", id: "01" },
    { title: "Forum", id: "05" },
    { title: "Topics", id: "01" },
    { title: "Replies", id: "01" },
    { title: "player", id: "11" },
    { title: "drow", id: "03" },
    { title: "art", id: "07" },
    { title: "Repeat", id: "05" },
]


const banner = $("banner_form");
console.log(banner)
bannerForm.map((item) => {
    const list = md("p");
    list.classList = "text-xl"
    list.innerHTML = ` <li class="flex justify-between items-center gap-4" ><span> ${item.title} </span> <span> ${item.id} </span> </li> `

    banner.append(list)
})
