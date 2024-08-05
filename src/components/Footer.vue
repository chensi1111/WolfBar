<template>
    <div class="footer">
        <h1>Contact us
        </h1>
        <p id="facebook"><a href="https://www.facebook.com/" target="_blank"><img src="../assets/facebook.png"></a>
        </p>
        <p id="instagram"><a href="https://www.instagram.com/" target="_blank"><img src="../assets/instagram.png"></a>
        </p>
        <p id="twitter"><a href="https://www.twitter.com/" target="_blank"><img src="../assets/twitter.png"></a>
        </p>
        <p>&copy;2023 Little-Wolf</p>
    </div>
</template>

<script>
export default {
    name: 'MyFooter'

}
</script>

<style>
.footer {
    clear: both;
    background-color: black;
    text-align: center;
    padding: 5px 0 50px 0;
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-top: auto;
    color: white;
}

.footer h1 {
    display: block;
    clear: both;
}

#facebook,
#instagram,
#twitter {
    display: inline-block;
    margin: 5px 15px 0 15px;
}
@media screen and (max-width:767px){
    .footer h1{
        font-size: 25px;
    }
    .footer img{
        width: 45px;
        height: 45px;
    }
}
</style>