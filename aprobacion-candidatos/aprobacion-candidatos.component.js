'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('aprobacionCandidatos').
  component('aprobacionCandidatos', {
    // Note: The URL is relative to our `index.html` file
    templateUrl: 'aprobacion-candidatos/aprobacion-candidatos.template.html',
    controller: ['$routeParams', 'Aprobacion',
      function AprobacionCandidatosController($routeParams, Aprobacion) {
        var self = this;

        self.aprobaciones = Aprobacion.query({candidatoId: $routeParams.candidatoId}, function(aprobaciones){
          //self.graficoAprobacion(aprobaciones);
        });

        
/*
        self.graficoAprobacion = function graficoAprobacion(aprobaciones) {
          // Load the Visualization API and the piechart package.
          google.charts.load('current', {'packages':['corechart']});
          // Set a callback to run when the Google Visualization API is loaded.
          google.charts.setOnLoadCallback(self.drawChart);

          var jsonData = $.ajax({
          	url: "http://localhost:8080/votweet-backend-master/metricasCandidatos/1/aprobacionNacional",
          	dataType: "json",
          	async: false
          }).responseJSON;

          var datosFinal = self.procesarArray(aprobaciones);
          self.drawChart(datosFinal);
        };

        self.procesarArray = function procesarArray(jsonData) {
          var datos = [];
          for (var i = 0, l = jsonData.length; i < l; i++) {
            datos.push("{ \"c\": [ {\"v\": \"" + jsonData[i].fecha + "\"}, {\"v\": " + jsonData[i].aprobacion + "}, {\"v\": " + jsonData[i].desaprobacion + "}]}");
          }
          var datosFinal = "{\"cols\": [ {\"id\": \"f\", \"label\": \"Fecha\", \"type\": \"string\"}, {\"id\": \"s\", \"label\": \"Aprobación\", \"type\": \"number\"}, {\"id\": \"r\", \"label\": \"Desaprobación\", \"type\": \"number\"} ], \"rows\": [" + datos + " ]}";
          return datosFinal;
        };

        self.drawChart = function drawChart(datosFinal) {
        	var options = {
        	  title : 'Grafica Historica de Aprobación',
        	  vAxis: {title: 'Porcentaje'},
        	  hAxis: {title: 'Fecha'},
        	  seriesType: 'bars'
        	};
        	var data = new google.visualization.DataTable(datosFinal);
          console.log(data);

        	// Instantiate and draw our chart, passing in some options.
        	var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        	chart.draw(data, options);
        };
*/
      }
    ]
  });