<?php
    include("../config.php");

    $id = $_GET["id"];

    $sql = "delete from shop where id=$id";
    $res = mysql_query($sql);
    
    if($res){
        echo json_encode(array(
            "res_code" => 1,
            "res_message" => "删除成功"
        ));
    }else{
        echo json_encode(array(
            "res_code" => 0,
            "res_message" =>"删除失败请重试"
        ));
    }
?>