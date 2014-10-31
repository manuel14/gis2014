    
      //diccionario de capas
      var capas = new Array();
      capas[1]='Actividades_Agropecuarias';
      capas[2]='Actividades_Economicas';
      capas[3]='Complejo_de_Energia_Ene';
      capas[4]='Curso_de_Agua_Hid';
      capas[5]='Curvas_de_Nivel';
      capas[6]='Edif_Construcciones_Turisticas';
      capas[7]='Edif_Depor_y_Esparcimiento';
      capas[8]='Edif_Educacion';
      capas[9]='Edificio_de_Salud_IPS';
      capas[10]='Edificio_de_Seguridad_IPS';
      capas[11]='Edificio_Publico_IPS';
      capas[12]='Edificios_Ferroviarios';
      capas[13]='Edif_Religiosos';
      capas[14]='Ejido';
      capas[15]='Espejo_de_Agua_Hid';
      capas[16]='Estructuras_portuarias';
      capas[17]='Infraestructura_Aeroportuaria_Punto';
      capas[18]='Infraestructura_Hidro';
      capas[19]='Isla';
      capas[20]='Limite_Politico_Administrativo_Lim';
      capas[21]='Localidades';
      capas[22]='L├нneas_de_Conducci├│n_Ene';
      capas[23]='Marcas_y_Se├▒ales';
      capas[24]='Muro_Embalse';
      capas[25]='Obra_de_Comunicaci├│n';
      capas[26]='Obra_Portuaria';
      capas[27]='Otras_Edificaciones';
      capas[28]='Pais_Lim';
      capas[29]='Provincias';
      capas[30]='Puente_Red_Vial_Puntos';
      capas[31]='Puntos_de_Alturas_Topograficas';
      capas[32]='Puntos_del_Terreno';
      capas[33]='Red_ferroviaria';
      capas[34]='Red_Vial';
      capas[35]='Salvado_de_Obstaculo';
      capas[36]='Se├▒alizaciones';
      capas[37]='Sue_congelado';
      capas[38]='Sue_consolidado';
      capas[39]='Sue_Costero';
      capas[40]='Sue_Hidromorfologico';
      capas[41]='Sue_No_Consolidado';
      capas[42]='Veg_Arborea';
      capas[43]='Veg_Arbustiva';
      capas[44]='Veg_Cultivos';
      capas[45]='veg_Hidrofila';
      capas[46]='Veg_Suelo_Desnudo';
      capas[47]='Vias_Secundarias';

    //funcion que devuelve un arreglo de capas  
      function listarcapas(){
        var i = 1; 
        var capa = new ol.layer.Tile({
            title: "Global Imagery",
            source: new ol.source.TileWMS({
              url: 'http://maps.opengeo.org/geowebcache/service/wms',
              params: { 
              LAYERS: 'bluemarble',
              VERSION: '1.1.1'
              }
            })
          })

        var layer = new Array();
        layer[0] = capa;

        for (i=1;i<=47;i++) {
          var capa = new ol.layer.Image({  
            title: capas[i],
            source: new ol.source.ImageWMS({
            url: '/cgi-bin/qgis_mapserv.fcgi?map=/home/user/proyectoqgislaboratorioqgisserver.qgs',
            params: {LAYERS: capas[i]}
            })
          })
          
      layer[i] = capa;
        
      }
      return layer;
    }
	// definicion del mapa 
      
      var map = new ol.Map({
        target: 'map', 
        layers: listarcapas() ,
        view: new ol.View({
          projection: 'EPSG:4326',
          center: [-59, -27.5],
          zoom: 4
        })
        });

      