function getUserData() {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const user = data.results[0];
        const firstName = user.name.first;
        const lastName = user.name.last;
        const email = user.email;
        const age = user.dob.age;
        const country = user.location.country;
        const picture = user.picture.large;

        displayUser(firstName, lastName, email, age, country, picture);
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    });
}
function displayUser(firstName, lastName, email, age, country, picture) { //Əsas proses
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = `
        <div class="user-card">
            <img src="${picture}" alt="User Image">
            <h2>${firstName} ${lastName}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Country:</strong> ${country}</p>
        </div>
        `;
}
getUserData();
