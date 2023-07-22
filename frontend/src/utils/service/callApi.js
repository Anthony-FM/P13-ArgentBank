export async function postJSONAuthentification(data) {   
    console.log(data)
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

export async function tokenAuthentification(token){
    console.log(token)
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
  

  