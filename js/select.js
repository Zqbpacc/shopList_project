class SelectList{
    constructor(tbody){
        this.tbody = document.querySelector(tbody);
        //默认处于第一页
        this.pageIndex = 1;
        Object.defineProperty(this,"count",{
            writable : false,
            //四列为一页
            value : 4
        });
        //默认的总页数为1
        this.pageCount = 1;
    }
    init(){
        tools.ajaxGetPromise("../api/v1/select.php",{pageIndex,count}).then(data =>{
            console.log(data);
            if(data.res_code === 1){
                this.render(date.res_body.data);
                this.pageCount = data.res_body.pageCount;
                pagination.render(this);
            }else{
                //查询失败显示弹窗信息
                alert(data.res_message);
            }
        })
    }
    render(list){
        let html = "";
        list.forEach((shop,index) =>{
            html += `
            <tr data-id="${shop.id}">
                <td>${(this.pageIndex-1)* this.count + index +1 }</td>
                <td>
                    <span>${shop.price}</span>
                    <input type="text" class="inputPrice">
                </td>
                <td>
                    <span>${shop.num}</span>
                    <input type="text" class="inputNum">
                </td>
                <td>
                    <button type="button" class="btn btn-xs btn-edit btn-success">编辑</button>
                    <button type="button" class="btn btn-xs btn-del btn-danger">删除</button>
                    <button type="button" class="btn btn-xs btn-ok btn-info">确定</button>
                    <button type="button" class="btn btn-xs btn-cancel btn-warning">取消</button>
                </td>
            </tr>
            `;
        });
        this.tbody.innerHTML = html;
    }
}
let getShop = new SelectList("#tbody");