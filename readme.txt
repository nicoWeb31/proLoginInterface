Auth 
https://github.com/bartosz-io/jwt-auth-angular/blob/master/src/app/auth/services/auth.service.ts



Body de la req pour OAuth:


   const bodytest = {
      "grant_type":"password",
      "username":"testuser",
      "password":"testpass",
      "client_id":"prosoluce_gui"
  }

reponse:   

            {
    "access_token": "3b7bc2a48e6b1c7c76dd3669a3dfc80c732ce808",
    "expires_in": 600,
    "token_type": "Bearer",
    "scope": null,
    "refresh_token": "cdc6e8243e4e0296b1f9ed341773296f76d12693"
}


---------------------------------------------------------------------------------------------------------------------

Body pour la req de reflesh token 


{

    "grant_type":"refresh_token",
      "refresh_token":"0814c098a98ac7b8c79bca3fdd8d9bde7b57b6b0",
      "client_id":"prosoluce_gui"

}

-----> si valide :

            {
    "access_token": "e920898acd7db7d3503e678411ced261c4f9f249",
    "expires_in": 600,
    "token_type": "Bearer",
    "scope": null,
    "refresh_token": "a4a09d43f3f4059f38e3fd172f0777be6ac1a5ac"
}




----->  si erreur : 
{
    "type": "http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html",
    "title": "invalid_grant",
    "status": 400,
    "detail": "Invalid refresh token"
}
