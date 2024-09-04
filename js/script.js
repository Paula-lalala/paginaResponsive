

function cambiarImagenes() {
    if (window.matchMedia('(min-width: 950px)').matches) {
        const imgTypeScript = document.getElementById('img-typescript');
        const imgAngular = document.getElementById('img-angular');
        const imgIonic = document.getElementById('img-ionic');

        imgTypeScript.src = 'rest/imagenes/TypescriptTexto.png'; 
        imgAngular.src = 'rest/imagenes/AngularTexto.png'; 
        imgIonic.src = 'rest/imagenes/ionicTexto.png'; 

        document.querySelectorAll('.navegador__boton .label').forEach(function(label) {
            label.style.display = 'none'; 
        });

        } else {
            const imgTypeScript = document.getElementById('img-typescript');
            const imgAngular = document.getElementById('img-angular');
            const imgIonic = document.getElementById('img-ionic');
            
            imgTypeScript.src = 'rest/imagenes/Typescript.png'; 
            imgAngular.src = 'rest/imagenes/Angular.png'; 
            imgIonic.src = 'rest/imagenes/ionic.png'; 

            document.querySelectorAll('.navegador__boton .label').forEach(function(label) {
                label.style.display = ''; 
            });
        }
    }
    window.addEventListener('resize', cambiarImagenes);

    window.onload = cambiarImagenes;

   
