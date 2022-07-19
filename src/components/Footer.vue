<template>
    <footer id="footer">
        <p>Gracias por usar nuestra página</p>
        <img src="..//assets/icono.png" alt="icono" id="img_foot">
    </footer>
</template>

<script>
export default{
   name:"Footer"
}
</script>

<style>
    #footer{
        height:200px;
        background-color:black;
        display:flex;
        color:white;
        align-items: center;
        justify-content:right;
        width:100%;  
        padding-right: 100px;      
    }
    #img_foot{
        height: 50px;
        width: 50px;
        filter: grayscale(1);
    }
</style>
