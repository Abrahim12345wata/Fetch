const url = ("https://jsonplaceholder.typicode.com/users");

fetch(url)
    .then(response => response.json())
    .then(data => {
        const usersContainer = document.getElementById('users');

        data.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user-card');

            userDiv.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
                <p><strong>Username:</strong> ${user.username}</p>
                
                `;

            usersContainer.appendChild(userDiv);
        });
    })

   .catch (error => { 
            console.error('Error fetching data:',error)
   })
    
    