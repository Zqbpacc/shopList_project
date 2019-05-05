class Register{
    constructor(){
        this.inputName = document.querySelector("#inputName");
        this.inputPassWord = document.querySelector("#inputPassWord");
        this.btn = document.querySelector("#btn");

    }
    bindEvent(){
        this.btn.onclick=()=>{
            let username = this.inputUserName.value,
                password = this.inputPassWord.value;
            tools.ajax("POST","../api/v1/register.php",{username,password},data=>{
                console.log(data);
            })
            return false;
        }
    }
}
new Register();