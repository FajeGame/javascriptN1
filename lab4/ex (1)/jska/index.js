function ask_password(login, password, success, failure){
    let vowels = "aeiouy"
    let consonants = ""
    let stack = []
    let temp = 0
    let w1 = false, w2 = false

    login = login.toLowerCase();
    password = password.toLowerCase();

    for(let i in login){
        if(!(vowels.includes(login[i]))){
            consonants += login[i]
        }
    }

    for(let i in password){
        if(vowels.includes(password[i])){
            temp++
        }
    }

    if(temp != 3){ w1 = true}
    temp = 0
    for(let i = 0; i < password.length; i++){
        if(!(vowels.includes(password[i]))){
            if(password[i] != consonants[temp]){
                w2 = true
            }
            temp++
        }
    }
    if(w1 && w2){
        failure(login, "Everything is wrong")
    } else if(w1 && !w2){
        failure(login, "Wrong number of vowels")
    } else if(!w1 && w2){
        failure(login, "Wrong consonants")
    } else{ success(login )}
}
function success(login){
    console.log(`Привет, ${login}!`)
}

function failure(login, text){
    console.log(`Кто-то пытался притвориться пользователем ${login}, но в пароле допустил ошибку: ` + text.toUpperCase())
}

function main(){
    ask_password("login", "aaalgn", success, failure)
    ask_password("login", "luagon", success, failure)
    ask_password("login", "gualon", success, failure)
    ask_password("login", "lugon", success, failure)
    ask_password("login", "gulon", success, failure)
}

main()