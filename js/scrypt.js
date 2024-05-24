var headers = document.getElementsByClassName('header');
if(headers.length === 0) return;

function changeSiteBackground() {    
    
    for(let i = 0; i < headers.length; i++){    
        switch(headers[i].id) {
            case 'index-header':
                headers[i].style.backgroundImage = "linear-gradient(#1E497C, #8FBDBB, #f2f2f2)"
                break;
            case 'login-header':
                headers[i].style.backgroundImage = "linear-gradient(#1E497C, #8FBDBB, #f2f2f2)"
                break;
            case 'obsidian-header':
                headers[i].style.backgroundImage = "linear-gradient(#5125aa, #AA88EF, #f2f2f2)";
                break;
            case 'google-calendar-header':
                headers[i].style.backgroundImage = "url(../images/googlecalendar.png)"
                break;
            default:  
        }
    }
}

changeSiteBackground();