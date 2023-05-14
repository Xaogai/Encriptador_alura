function encriptar()
{
    cpymostrar();
    var palabras = document.getElementById("texto").value;
    palabras.toLowerCase();
    
    let destino='';
    for(var x=0;x<palabras.length;x++)
    {
        switch(palabras[x])
        {
            case 'a':
	            var a1= palabras.replace('a','ai');
                destino+=a1;
                break;
            case 'e':
	            var a1= palabras.replace('e','enter');
                destino+=a1;
                break;
            case 'i':
                var a1= palabras.replace('i','imes');
                destino+=a1;
                break;
            case 'o':
                var a1= palabras.replace('o','ober');
                destino+=a1;
                break;
            case 'u':
                var a1= palabras.replace('u','ufat');
                destino+=a1;
                break;
	    }
    }
   document.querySelector('#resultado').value=destino;
}

function desencriptar()
{
    cpymostrar();
    var encriptado=document.getElementById("texto").value;
    encriptado.toLowerCase();
    let desencriptado=encriptado
    .replaceAll('ai','a')
    .replaceAll('enter','e')
    .replaceAll('imes','i')
    .replaceAll('ober','o')
    .replaceAll('ufat','u');
    document.querySelector('#resultado').value=desencriptado;
}

function cpyocultar()
{
    document.getElementById('copiar').style.display='none';
}

function cpymostrar()
{
    document.getElementById('copiar').style.display='inline-block';
}

function copiarelm()
{
    var mensaje = document.querySelector('#resultado').value;
    var tempInput = document.createElement('textarea');
    tempInput.value = mensaje;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');  
    document.body.removeChild(tempInput);
  
  alert("Copiado");
}