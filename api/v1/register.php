<?php
    include("./config.php");

    $username = $_POST["useername"];
    $password = $_POST["password"];

    $sql = "insert into user (username,password) value ('$username','$password')";
    $res = mysql_query($sql);

    if($res){
        echo json_encode(array(
            "res-code"=>1,
            "res_message"=>"注册成功"
        ));

    }else{
        echo json_encode(array(
            "res_code" => 0,
            "res_message" =>"注册失败请重试"
        ));
    }

?>