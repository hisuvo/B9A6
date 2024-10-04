const nav = [
    {
        "logo": "ReTro",
        "singIn": "Sing In",
    }
]


// Get access navigation conatiner
const navItems = $("nav_items");

nav.map((item) => {
    // nav logo
    const navLogo = md("h2")
    navLogo.classList = "text-2xl font-bold"
    navLogo.innerText = `${item.logo}`
    navItems.appendChild(navLogo)
})

const nav_icon = [
    '<i class="fa-solid fa-house"></i>',
    '<i class="fa-solid fa-user"></i>',
    '<i class="fa-solid fa-pencil"></i>',
    '<i class="fa-brands fa-font-awesome"></i>',
    '<i class="fa-brands fa-phoenix-framework"></i>',
    '<i class="fa-solid fa-phone-flip"></i>',
    'Sing In',
]

// nav menu
const menu = md("ul");
menu.classList = "flex justify-center items-center gap-4";
navItems.appendChild(menu);

nav_icon.map((item) => {
    const list = md("li")

    list.innerHTML = `${item === "Sing In" ? `<button class="btn px-5 btn-info rounded-full text-white"> ${item} </button>` : `<button class="btn btn-circle"> ${item} </button>`}`
    menu.appendChild(list)
})
