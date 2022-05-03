

function managerCard (manager){
   return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
      <i class="fa-solid fa-mug-hot"></i>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${manager.name}</li>
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item email">Email: <a href="mailto:${manager.email}"> ${manager.email}</a></li>
      <li class="list-group-item">Office Number: ${manager.officeNo}</li>
    </ul>
  </div>
    `;
}

function engineerCard (engineer){
    return `<div class="card" style="width: 18rem;">
     <div class="card-body">
       <h5 class="card-title">Engineer</h5>
       <i class="fa-solid fa-glasses"></i>
     </div>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">Name: ${engineer.name}</li>
       <li class="list-group-item">ID: ${engineer.id}</li>
       <li class="list-group-item email">Email: <a href="mailto:${engineer.email}"> ${engineer.email}</a></li>
       <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" class="card-link"> ${engineer.github}</a></li>
     </ul>
   </div>
     `;
 }

 function internCard (intern){
    return `<div class="card" style="width: 18rem;">
     <div class="card-body">
       <h5 class="card-title">Intern</h5>
       <i class="fa-solid fa-book"></i>
     </div>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">Name: ${intern.name}</li>
       <li class="list-group-item">ID: ${intern.id}</li>
       <li class="list-group-item email">Email: <a href="mailto:${intern.email}"> ${intern.email}</a></li>
       <li class="list-group-item">School: ${intern.school}</li>
     </ul>
   </div>
     `;
 }

 createHTML = (data) => {

    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const employeeRole = employee.getRole(); 


        if (employeeRole === 'Manager') {
            const manageCard = managerCard(employee);

            pageArray.push(manageCard);
        }

   
        if (employeeRole === 'Engineer') {
            const engineeCard = engineerCard(employee);

            pageArray.push(engineeCard);
        }

        if (employeeRole === 'Intern') {
            const interCard = internCard(employee);

            pageArray.push(interCard);
        }
        
    }

   
    const teamProfiles = pageArray.join('')
    const generateProfiles = createPage(teamProfiles); 
    return generateProfiles;

}

function createPage(teamProfiles){
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="./styles.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body>

        <nav>
            <h1>MY TEAM PROFILE</h1>
        </nav>

        <main>
           <div class="main-container">
           ${teamProfiles}
           </div>
        </main>
    </body>
    <script src="https://kit.fontawesome.com/2d9e8320eb.js" crossorigin="anonymous"></script>
    </html>
    `;
}

module.exports = createHTML;