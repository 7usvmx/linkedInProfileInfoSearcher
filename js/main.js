var search = document.getElementById("search"); 

search.addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });


    let profileId = document.getElementById("linkedInId").value;
    let errorMesg = document.getElementById("errorMsg");
    let lastSearch = document.getElementById("lastSearch");
    let Profile = document.getElementById("Profile");


    let langLike = /[A-Za-z ]/g;

    if( langLike.test(profileId) ){

            
        localStorage['profID'] = profileId;
        localStorage['lastSearch'] = localStorage['profID'];


        if (profileId == null || profileId.length == 0) {

            let errorMessage = "<button class='disable btn danger mt-3' style='cursor: auto'> Linkedin ID input can't be empty! </button>";
            Profile.innerHTML = "";
            errorMesg.innerHTML = errorMessage;

        } else if (profileId == null || profileId == 0 || profileId.length == 1 || profileId.length == 2) {

            let errorMessage = "<button class='disable btn danger mt-3' style='cursor: auto'> Linkedin ID must be 3 characters at least! </button>";
            Profile.innerHTML = "";
            errorMesg.innerHTML = errorMessage;
            localStorage['lastSearch'] = "";
            // setTimeout(function(){
            //     window.location.reload();
            //  }, 2000);

        } else {

            errorMesg.innerHTML = "";
            let searchUrl = 'https://linkedin.com/in/' + profileId;
            window.open(searchUrl, '_blank');
        }

    }else{

        let errorMessage = "<button class='disable btn danger mt-3' style='cursor: auto'> Linkedin ID can\'t be in arabic! </button>";
        errorMesg.innerHTML = errorMessage;
        localStorage['lastSearch'] = "";
    }



});


profileId = localStorage['profID'];
lastSearch.innerText = "Last searched ID : " + localStorage['lastSearch'];

search.onclick = () => {
    
    if( localStorage['lastSearch'].length <= 0 ){

        lastSearch.innerText = "Last searched ID : " + localStorage['profID'];
        
    }else{

        lastSearch.innerText = "Last searched ID : " + localStorage['lastSearch'];
    }
    

}



// const { RestliClient } = require('../linkedin-api-js-client-master/');

// const restliClient = new RestliClient();

// restliClient.get({

//     resourcePath: '/me',
//     accessToken: AQUWlvaQtK9H3gi-HEN17wWLGnZt1qEAamvIRAB-cK-sUISjef_un7I73uUjDEFxyGWr7QDTqNZMe-dZ_d5IIbYFRsZNoTMPGK05_SrSKxG0tV5EcP7vl6_qYjW0S0PdmpnU25ql54SoysDGP-CrxUF2ZXhLcnOdbkRjqPBiqfLKMY7fILd5WevhId3RJ9IfNC2rBL0px0-hkyaxNT4MmEarlcRpvK8XG8ktAmynR9WGa4qhVuLpf-p9aydU3uAsEki35W7BBeoA_CZqpCHzum3wppyEjfq2Dlh7oPDmrDW1aVX8G47uvx3EyH4dpqroFuWDZAksRUfVW5Gk0FESMmEN_v84Zg,

// }).then(response => {

//   const profile = response.data;
//   alert(profile)

// });

// clearEmails.addEventListener("click", async () => {

//     let emailHere = document.getElementById("");
//     emailHere.innerHTML = '<tbody id="emailHere"><tr scope="row"></tr></tbody>';

// });


