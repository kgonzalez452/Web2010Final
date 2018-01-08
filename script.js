const viewDog = document.querySelector("#viewDog")
const selectBreed = document.querySelector("#selectBreed")
const DOG_API = 'https://dog.ceo/api/breeds/list'



$.ajax({
    type: 'GET',
    url: DOG_API,
    async: true,
    dataType: 'json',
    success: (data) => {
        console.log(data);
        console.log(data.message);

        for (let i in data.message) {
            console.log(data.message[i]);
            selectBreed.innerHTML +=
                `<option value="${data.message[i]}">${data.message[i]}</option>`
        }
    },
    error: (Errr) => {
        console.log('There was an error');
    }
})

viewDog.addEventListener("click", function () {
    const breedName = selectBreed.options[selectBreed.selectedIndex] //Note to self... selectedIndex property sets or returns the index of the selected option in a drop-down list.The index starts at 0.
    // console.log(breedName);
})
let breedName = selectBreed.options[selectBreed.selectedIndex]

const dog_pics = `https://dog.ceo/api/breed/${breedName}/images/random`


$.ajax({
    type: 'GET',
    url: dog_pics,
    async: true,
    dataType: 'json',
    success: (data) => {
        console.log(data);


    },
    error: (err) => {
        console.log("There was an Error");
    }

})