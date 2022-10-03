﻿function llamaAutores(param) {
	var miTabla = "";
	var miTabla01 =
		"   <table>" +
		"        <thead>" +
		"           <tr>" +
		"               <th>ID</th>" +
		"               <th>Nombre</th>" +
		"               <th>Imagen</th>" +
		"           </tr>" +
		"        </thead>" +
		"        <tbody>";
	var miTabla02 = "";
	var miTabla03 =
		"       </tbody>" +
		"   </table>";

	var miTablaDetalle = "";
	const opciones = {
		method: 'GET'
	}
	if (param == null || param == 0) {
		//fetch('https://tupelu.es/Ajax_y_Json/ajax_northwind_mysql/ajax_actual_fetch/detail/consulta.php', opciones)
		//fetch('https://localhost:44388/Api/Autores',opciones)
		fetch('https://localhost:44388/Api/Autores', opciones)
			.then(respuesta => respuesta.json())
			.then(resultado => {
				resultado.forEach(elemento => {
					miTabla02 = miTabla02 +
						"                    <tr>" +
						"                        <td>" + elemento.id + "</td>" +
						"                        <td>" + elemento.nombre + "</td>" +
						"                        <td><img src='" + elemento.imagen + " '>" + "</td>" +
						"                        <td><input type=\"button\" value=\"Detalle\" onclick=\"llamaAutores(" + elemento.id + ")\"></td>" +
						"                    </tr>";
				});
				miTabla = miTabla01 + miTabla02 + miTabla03;
				document.getElementById("miTabla").innerHTML = miTabla;
			});
	} else {
		//fetch('https://tupelu.es/Ajax_y_Json/ajax_northwind_mysql/ajax_actual_fetch/detail/consulta.php?id=' + param, opciones)
		//fetch('https://localhost:44388/Api/Autores' + param,opciones)
		fetch('https://localhost:44388/Api/Autores' + param, opciones)
			.then(respuesta => respuesta.json())
			.then(resultado => {
				//	resultado.forEach(elemento => {            
				miTablaDetalle = miTablaDetalle +
					"   			   <table>" +
					"                    <tr>" +
					"						 <th>ID</th>" +
					/*		"                        <td>" + elemento.EmployeeID + "</td>" +*/
					/*		"                        <td>" + resultado[0].EmployeeID + "</td>" +*/
					"                        <td>" + resultado.id + "</td>" +
					"                    </tr>" +
					"                    <tr>" +
					"						 <th>Nombre</th>" +
					/*		"                        <td>" + elemento.FirstName + "</td>" +*/
					/*		"                        <td>" + resultado[0].FirstName + "</td>" +*/
					"                        <td>" + resultado.nombre + "</td>" +
					"                    </tr>" +
					"                    <tr>" +
					"						 <th>Imagen</th>" +
					/*		"                        <td><img src=\"https://tupelu.es/Ajax_y_Json/ajax_northwind_mysql/ajax_actual_fetch/detail/Images/empleado/" + elemento.EmployeeID + ".jpg\"></td>" +*/
					/*		"                        <td><img src=\"https://tupelu.es/Ajax_y_Json/ajax_northwind_mysql/ajax_actual_fetch/detail/Images/empleado/" + resultado[0].EmployeeID + ".jpg\"></td>" +*/
					//"                        <td><img src=\"https://tupelu.es/Ajax_y_Json/ajax_northwind_mysql/ajax_actual_fetch/detail/Images/empleado/" + resultado.id + ".jpg\"></td>" +
					"                        <td><img src=\"   " + resultado.id + ".jpg\"></td>" +

					"                    </tr>" +
					"                    <tr>" +
					"						 <th>Descripción</th>" +
					/*		"                        <td>" + elemento.LastName + "</td>" +*/
					/*		"                        <td>" + resultado[0].LastName + "</td>" +*/
					"                        <td>" + resultado.descripcion + "</td>" +
					"                    </tr>" +
					"                    <tr>" +
					"						 <th>Spotify</th>" +
					/*		"                        <td>" + elemento.LastName + "</td>" +*/
					/*		"                        <td>" + resultado[0].LastName + "</td>" +*/
					"                        <td>" + resultado.spotify + "</td>" +
					"                    </tr>" +
					"                    <tr>" +
					"						 <th>Twitter</th>" +
					/*		"                        <td>" + elemento.LastName + "</td>" +*/
					/*		"                        <td>" + resultado[0].LastName + "</td>" +*/
					"                        <td>" + resultado.twitter + "</td>" +
					"                    </tr>" +
					"   			   </table>";
				//	});
				//miTabla = miTabla01 + miTabla02 + miTabla03;    
				document.getElementById("miTablaDetalle").innerHTML = miTablaDetalle;
			});
	}
}