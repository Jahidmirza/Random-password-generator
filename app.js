const password = document.querySelector('.password');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () =>{
            const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]\:;?><,./-=";
                let passwordLength = 16;
                let password = "";
            
                for (let i = 0; i < passwordLength; i++) {
                    let randomNumber = Math.floor(Math.random() * chars.length);
                    password += chars.substring(randomNumber,randomNumber + 1);
                }
                document.querySelector('.password').value = password;
            }
)


