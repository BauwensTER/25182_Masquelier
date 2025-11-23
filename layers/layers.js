var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_Cadastralparcelcopie_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ccff02.minfin.fgov.be/geoservices/arcgis/services/WMS/Cadastral_Layers/MapServer/WMSServer",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Cadastral_parcel",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Cadastral parcel copie',
                            popuplayertitle: 'Cadastral parcel copie',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Cadastralparcelcopie_2, 0]);
var format_Implantation_batiment_3 = new ol.format.GeoJSON();
var features_Implantation_batiment_3 = format_Implantation_batiment_3.readFeatures(json_Implantation_batiment_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Implantation_batiment_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Implantation_batiment_3.addFeatures(features_Implantation_batiment_3);
var lyr_Implantation_batiment_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Implantation_batiment_3, 
                style: style_Implantation_batiment_3,
                popuplayertitle: 'Implantation_batiment',
                interactive: false,
    title: 'Implantation_batiment<br />\
    <img src="styles/legend/Implantation_batiment_3_0.png" /> 3<br />\
    <img src="styles/legend/Implantation_batiment_3_1.png" /> 4<br />\
    <img src="styles/legend/Implantation_batiment_3_2.png" /> 5<br />\
    <img src="styles/legend/Implantation_batiment_3_3.png" /> <br />' });
var format_Arbres_4 = new ol.format.GeoJSON();
var features_Arbres_4 = format_Arbres_4.readFeatures(json_Arbres_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arbres_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arbres_4.addFeatures(features_Arbres_4);
var lyr_Arbres_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arbres_4, 
                style: style_Arbres_4,
                popuplayertitle: 'Arbres',
                interactive: true,
    title: 'Arbres<br />\
    <img src="styles/legend/Arbres_4_0.png" /> Arbres sans avenir<br>(défauts mécaniques et/ou maladies impactant son espérance de maintien)<br />\
    <img src="styles/legend/Arbres_4_1.png" /> Arbre accompagnant les arbres d\'avenir et objectifs<br />\
    <img src="styles/legend/Arbres_4_2.png" /> Arbre d\'avenir ayant une bonne confomartion pour un dev. à long terme<br />\
    <img src="styles/legend/Arbres_4_3.png" /> Arbre objectif bien implanté dont le développement est à favoriser<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_Cadastralparcelcopie_2.setVisible(true);lyr_Implantation_batiment_3.setVisible(true);lyr_Arbres_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelliteHybrid_1,lyr_Cadastralparcelcopie_2,lyr_Implantation_batiment_3,lyr_Arbres_4];
lyr_Implantation_batiment_3.set('fieldAliases', {'fid': 'fid', });
lyr_Arbres_4.set('fieldAliases', {'fid': 'fid', '_record_id': '_record_id', 'pos_statut': 'pos_statut', 'pos_id': 'Numero arbre', 'id_visuel': 'id_visuel', 'sta_photo': 'sta_photo', 'sta_photo_captions': 'sta_photo_captions', 'sta_photo_urls': 'sta_photo_urls', 'arb_ess': 'arb_ess', 'arb_vern': 'Espèce', 'arb_brin_nb': 'Nombre de troncs', 'arb_circ_tmp': 'arb_circ_tmp', 'arb_circ': 'Circonference (cm)', 'ges_pot': 'Statut arbre', 'ges_comment': 'Commentaires', 'Xrel': 'Xrel', 'Yrel': 'Yrel', 'X_L08': 'X_L08', 'Y_L08': 'Y_L08', 'photo_url': 'photo_url', });
lyr_Implantation_batiment_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_Arbres_4.set('fieldImages', {'fid': 'Hidden', '_record_id': 'TextEdit', 'pos_statut': 'Hidden', 'pos_id': 'TextEdit', 'id_visuel': 'Hidden', 'sta_photo': 'Hidden', 'sta_photo_captions': 'Hidden', 'sta_photo_urls': 'TextEdit', 'arb_ess': 'TextEdit', 'arb_vern': 'TextEdit', 'arb_brin_nb': 'Range', 'arb_circ_tmp': 'Range', 'arb_circ': 'Range', 'ges_pot': 'TextEdit', 'ges_comment': 'TextEdit', 'Xrel': 'TextEdit', 'Yrel': 'TextEdit', 'X_L08': 'TextEdit', 'Y_L08': 'TextEdit', 'photo_url': '', });
lyr_Implantation_batiment_3.set('fieldLabels', {'fid': 'no label', });
lyr_Arbres_4.set('fieldLabels', {'_record_id': 'no label', 'pos_id': 'inline label - always visible', 'sta_photo_urls': 'inline label - visible with data', 'arb_ess': 'inline label - visible with data', 'arb_vern': 'inline label - visible with data', 'arb_brin_nb': 'inline label - visible with data', 'arb_circ_tmp': 'inline label - visible with data', 'arb_circ': 'inline label - visible with data', 'ges_pot': 'inline label - visible with data', 'ges_comment': 'inline label - visible with data', 'Xrel': 'no label', 'Yrel': 'no label', 'X_L08': 'no label', 'Y_L08': 'no label', 'photo_url': 'inline label - visible with data', });
lyr_Arbres_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});