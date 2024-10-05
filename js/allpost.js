
const postCard = $("post_card");
const postHistory = $("post_history");


const allPost = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    const data = await res.json()
    postDisplay(data["posts"]);
}

function postDisplay(prams) {

    for (let item of prams) {
        const displayPostCard = md("div")
        displayPostCard.classList = "w-full flex justify-start items-start gap-8 p-6 rounded-2xl bg-gray-100"

        displayPostCard.innerHTML = `
        <div class="avatar ${item.isActive ? "online" : "offline"}">
            <div class="w-24 rounded-full">
                <img src=${item.image} />
            </div>
        </div>

        <div class="space-y-2 w-full">
            <h4 class="flex gap-4">
                <p>#${item.category}</p>
                <p>Author: ${item.author.name}</p>
            </h4>
            <h2 class="text-xl font-bold">${item.title}</h2>
            <p class="py-2 border-b-2 border-dashed">${item.description}</p>
            <div class="flex justify-between items-center ">
                <h4 class="flex justify-center items-center gap-8">
                    <p class=""><i class="fa-regular fa-comment"></i> ${item.comment_count} </p>
                    <p class=""><i class="fa-regular fa-eye"></i> ${item.view_count} </p>
                    <p class=""><i class="fa-regular fa-clock"></i> ${item.posted_time} min</p>
                </h4>
                <h4>
                    <button onclick='makeAsRead("${item.description}", "${item.view_count}")' class="btn btn-success rounded-full text-white">
                        <i class="fa-regular fa-envelope-open"> </i>
                    </button>
                </h4>
            </div>
        </div>

            `
        postCard.appendChild(displayPostCard);

    }
}

let sum = 0;
const makeAsRead = (description, view) => {
    const postHistry = $("post_history");
    const displayPostHostory = md("div");
    console.log(displayPostHostory)
    displayPostHostory.classList = "text-gray-500";

    displayPostHostory.innerHTML = `
        <h4 class="flex justify-between items-center mb-2 bg-white rounded-lg p-2">
            <p class="w-3/4 text-sm"> ${description} </p>
            <p class=""><i class="fa-regular fa-eye"></i> ${view} </p>
        </h4>
    `
    postHistry.appendChild(displayPostHostory)
    sum += 1

    $("post_history_counter").innerHTML = sum

}

allPost();