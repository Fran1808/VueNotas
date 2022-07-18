<template>
    <nav class="navbar navbar-expand-lg" style="background-color: black; " id="nav">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">{{name}}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="color:white">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">          
                <li class="nav-item">
                    <a class="nav-link" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Perfil</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Editar etiquetas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Notas</a>
                </li>
            </ul>       
        </div>
    </div>
    </nav>
</template>

<script>
export default{
    name:"Navbar",
    data (){
        return{
            name: "Proyecto Notas",
        }
    },
    methods: {
        rename(){
            this.name="Notas"
        },
        mostrar_compo:function (components) {
            this.componentselect
        }
    }
}
</script>
<style scoped>
    #nav{
        padding: 15px 50px ;
        display: flex;
        justify-content: flex-end;
        color: white;
    }
    a{
        color: white;
    }

</style>