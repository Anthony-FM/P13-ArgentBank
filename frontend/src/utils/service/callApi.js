// Post: récupération des donnée de connection pour prendre le token
export async function postJSONAuthentification(data) {   
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    });
    const result = await response.json()
    return result
}

// Post: Récupération des données du l'utilisateur grâce au token
export async function tokenAuthentification(token){
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
        "Authorization": token
    }
    });

    const tokenResult = await response.json()
    return tokenResult
}

// Put: Modification des données dans la base de donnée 
// grâce au token et aux données fourni en paramètres
export async function fetchPutMethodName(data, token){
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT", 
    headers: {
        "Content-Type": "application/json",
        "Authorization": token
    },
    body: JSON.stringify(data)
    });

    const tokenResult = await response.json()
    return tokenResult
}
  

  