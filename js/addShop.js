class AddShop{
    constructor(){
        this.inputName = document.querySelector("#inputName");
        this.inputPrice = document.querySelector("#inputPrice");
        this.inputNum = document.querySelector("#inputNum");
        this.addBtn = document.querySelector("#btn-shop-add");
        this.init();
    }
    init(){
        this.addBtn.onclick = () =>{
            let name = this.inputName.value,
                price = this.inputPrice.value,
                num = this.inputNum.value;
                
            if(name === "" || price === "" || num === ""){
                alert("不能为空，请重新输入！")
                return;
            }

            tools.ajaxGetPromise("api/v1/addShop.php",{name,price,num}).then(data =>{
                if(data.res_code === 1){
                    alert(data.res_message);
                    this.inputName.value = this.inputPrice.value = this.inputNum.value = "";
                    
                    // 隐藏模态框
                    $('#addModel').modal('hide');
                    getShop.init;
                }
            })
        }
    }
}
new AddShop();