
const latestPost = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
    const data = await res.json()
    displaylastPost(data)
}

const displaylastPost = (data) => {
    const latestCard = $("latest_card");
    data.map((item) => {
        const div = md("div")
        div.innerHTML = `
            <div class="p-6 bg-gray-100 rounded-lg space-y-3">
                <figure>
                    <img src=${item.cover_image} alt="">
                </figure>
                <h4 class="space-x-3"><i class="fa-regular fa-calendar"></i> <span>${item.author.posted_date}</span></h4>
                <h3 class="text-lg font-bold">${item.title}</h3>
                <p>${item.description}</p>
                <div class="flex gap-4">
                    <p class="w-10 h-10" ><img class="rounded-full" src=${item.profile_image} alt=""></p>
                    <div>
                        <h3 class="text-xl font-bold">${item.author.name}</h3>
                        <p>${item.author.designation}</p>
                    </div >
                </div >
            </div >
    `
        console.log(item)
        latestCard.appendChild(div)
    })
}

latestPost()