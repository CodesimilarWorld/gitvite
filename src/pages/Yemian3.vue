<template>
  <div>
    <div class="div">
        <div class="top">
            <img src="../img/城市粉rev.jpg" alt="">
        </div>
        <div class="middle">
            <div class="msgleft">
                <div class="leftbox" style="background-color:palegoldenrod"></div>
                <div class="leftbox" style="background-color:thistle"></div>
                <div class="leftbox" style="background-color:plum"></div>
                <div class="leftbox" style="background-color:purple"></div>
            </div>
            <div class="msgright">
                <div class="msgbox" style="background-color: tan">
                <img src="../img/城市粉rev.jpg" alt="">
                </div>
                <div class="msgbox">

                </div>
                <div class="msgbox" style="background-color:plum">

                </div>
                <div class="msgbox" style="background-color:thistle">
                
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Yemian3'
}
</script>

<style scoped>
body{
        margin: 0px;
        padding: 0px;
    }
    html{
        font-size: 14px;
    }
    .div{
        width: 100%;
        height: 100%;
        background-color: palegoldenrod;
    }
    .top{
        width: 100%;
        height: 39rem;
        background-color: rgb(245, 241, 237);
    }
    .top img{
        width: 100%;
        height: 100%;
    }
    .middle{
        width: 100%;
        height: 35rem;
        background-color: papayawhip;
        position: relative;
    }
    .msgleft{
        width: 30%;
        max-width: 300px;
        min-width: 150px;
        height: 100%;
        background-color: peachpuff;
        float: left;
        display: flex;
        flex-wrap: wrap;
    }
    .msgright{
        width: 50%;
        height: 100%;
        background-color: teal;
        float: right;
        display: flex;
        flex-wrap: wrap;
    }
    .msgbox{
        width: 33.3%;
        height: 50%;
    }
    .msgbox img{
        width: 90%;
        height: 90%;
    }
    .leftbox{
        width: 50%;
        height: 50%;
    }
    @media screen and (max-width:1150px){
        .msgbox{
            width: 50%;
        }
        .leftbox{
            width: 100%;
        }
    }
    @media screen and (max-width:700px){
        .msgbox{
            width: 100%;
        }
        .leftbox{
            width: 100%;
        }
        .msgleft{
            width: 45%;
        }
    }
    @media screen and (max-width:830px){
        .top{
            height: 0%;
        }
    }
</style>