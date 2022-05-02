

function managerCard (manager){
   return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${manager.name}</li>
      <li class="list-group-item">${manager.id}</li>
      <li class="list-group-item" <a href="mailto:${manager.email}" class="card-link">${manager.email}</a>></li>
      <li class="list-group-item">${manager.officeNo}</li>
    </ul>
  </div>
    `;
}

function engineerCard (engineer){
    return `<div class="card" style="width: 18rem;">
     <div class="card-body">
       <h5 class="card-title">Manager</h5>
     </div>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">${engineer.name}</li>
       <li class="list-group-item">${engineer.id}</li>
       <li class="list-group-item" <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a>></li>
       <li class="list-group-item"><a href="https://github.com/${engineer.github}" class="card-link">${engineer.github}</a></li>
     </ul>
   </div>
     `;
 }

 function internCard (intern){
    return `<div class="card" style="width: 18rem;">
     <div class="card-body">
       <h5 class="card-title">Manager</h5>
     </div>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">${intern.name}</li>
       <li class="list-group-item">${intern.id}</li>
       <li class="list-group-item" <a href="mailto:${intern.email}" class="card-link">${intern.email}</a>></li>
       <li class="list-group-item">${intern.school}</li>
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

        if (role === 'Intern') {
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
        <link rel="stylesheet" href="dist/styles.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body>

        <nav>
            <h1>My team profile</h1>
        </nav>

        <main>
           <div class="main-container">
           ${teamProfiles}
           </div>
        </main>
    </body>
    </html>
    `;
}

module.exports = createHTML;