function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo) + minimo );
	return numero;
}
var piedra=0;
var papel=1;
var tijera=2;
var lagarto=3;
var spock=4;
var contador = 0;
var opciones=["piedra", "papel", "tijera", "lagarto", "spock"]
var opcionMaquina= 0;

do
{
	var opcionUsuario= prompt("Que opcion eliges\n 0 - Piedra \n 1 - Papel \n 2 - Tijera \n 3 - Lagarto \n 4 - Spock", 0);
	if (opcionUsuario!= "0" && opcionUsuario!= "1" && opcionUsuario!= "2" && opcionUsuario!= "3" && opcionUsuario!= "4") 
	{
			alert("ingresaste un numero no valido, ingresa nuevamente el numero");
	}
	else
	{
		contador= 1;
	}
		
} while(contador==0)

alert("Has elegido " + opciones[opcionUsuario] + "\nLa maquina ha elegido " + opciones[opcionMaquina]);


if (opciones[opcionUsuario]== "piedra")
{
	if (opciones[opcionMaquina]== "piedra")
	{
		alert("EMPATE");
	}
	else if (opciones[opcionMaquina]== "papel")
	{
		alert("El papel cubre la piedra, ¡HAS PERDIDO!");
	}
	else if (opciones[opcionMaquina]== "tijera")
	{
		alert("La piedra aplasta las tijeras, ¡HAS GANADO!");
	}
	else if (opciones[opcionMaquina]== "lagarto")
	{
		alert("La piedra aplasta al lagarto, ¡HAS GANADO!");
	}
	else if (opciones[opcionMaquina]== "spock")
	{
		alert("Spock vaporiza la piedra, ¡HAS PERDIDO!");
	}

}

else if (opciones[opcionUsuario]=="papel")
{
	if (opciones[opcionMaquina]== "papel")
	{
		alert("EMPATE");
	}
	else if (opciones[opcionMaquina]== "piedra")
	{
		alert("El papel cubre la piedra, ¡HAS GANADO!");
	}
	else if (opciones[opcionMaquina]== "tijera")
	{
		alert("Ls tijeras cortan el papel, ¡HAS PERDIDO!");
	}
	else if (opciones[opcionMaquina]== "lagarto")
	{
		alert("El lagarto se come el papel, ¡HAS PERDIDO!");
	}
	else if (opciones[opcionMaquina]== "spock")
	{
		alert("El papel refura a Spock, ¡HAS GANADO!");
	}
}

else if (opciones[opcionUsuario]=="tijera")
{
	if (opciones[opcionMaquina]== "tijera")
	{
		alert("EMPATE");
	}
	else if (opciones[opcionMaquina]== "papel")
	{
		alert("La tijera corta el papel, ¡HAS GANADO!");
	}
	else if (opciones[opcionMaquina]== "piedra")
	{
		alert("La piedra aplasta las tijeras, ¡HAS PERDIDO!");
	}
	else if (opciones[opcionMaquina]== "lagarto")
	{
		alert("Las tijeras decapitan al lagarto, ¡HAS GANADO!");
	}
	else if (opciones[opcionMaquina]== "spock")
	{
		alert("Spock destroza las tijeras, ¡HAS PERDIDO!");
	}
}

else if (opciones[opcionUsuario]=="lagarto")
{
	if (opciones[opcionMaquina]=="lagarto")
	{
		alert("EMPATE");
	}
	else if (opciones[opcionMaquina]== "papel")
	{
		alert("El lagarto se come el papel, ¡HAS GANADO!");
	}
	else if (opciones[opcionMaquina]== "tijera")
	{
		alert("Las tijeras decapitan al lagarto, ¡HAS PERDIDO!");
	}
	else if (opciones[opcionMaquina]== "piedra")
	{
		alert("La piedra aplasta al lagarto, ¡HAS PERDIDO!");
	}
	else if (opciones[opcionMaquina]== "spock")
	{
		alert("El lagarto envenena a spock, ¡HAS GANADO!");
	}
}

else if (opciones[opcionUsuario]=="spock")
{
	if (opciones[opcionMaquina]== "spock")
	{
		alert("EMPATE");
	}
	else if (opciones[opcionMaquina]== "papel")
	{
		alert("El papel refuta a spock, ¡HAS PERDIDO!");
	}
	else if (opciones[opcionMaquina]== "tijera")
	{
		alert("Spock destroza las tijeras, ¡HAS GANADO!");
	}
	else if (opciones[opcionMaquina]== "lagarto")
	{
		alert("El lagarto envenena a spock, ¡HAS PERDIDO!");
	}
	else if (opciones[opcionMaquina]== "piedra")
	{
		alert("Spock vaporiza la piedra, ¡HAS GANADO!");
	}
}

