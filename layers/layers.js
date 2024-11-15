var wms_layers = [];

var format_batas_desa_0 = new ol.format.GeoJSON();
var features_batas_desa_0 = format_batas_desa_0.readFeatures(json_batas_desa_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_desa_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_desa_0.addFeatures(features_batas_desa_0);
var lyr_batas_desa_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batas_desa_0, 
                style: style_batas_desa_0,
                popuplayertitle: "batas_desa",
                interactive: true,
                title: '<img src="styles/legend/batas_desa_0.png" /> batas_desa'
            });
var format_sawah_hutan_1 = new ol.format.GeoJSON();
var features_sawah_hutan_1 = format_sawah_hutan_1.readFeatures(json_sawah_hutan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawah_hutan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah_hutan_1.addFeatures(features_sawah_hutan_1);
var lyr_sawah_hutan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawah_hutan_1, 
                style: style_sawah_hutan_1,
                popuplayertitle: "sawah_hutan",
                interactive: true,
    title: 'sawah_hutan<br />\
    <img src="styles/legend/sawah_hutan_1_0.png" /> hutan<br />\
    <img src="styles/legend/sawah_hutan_1_1.png" /> sawah<br />'
        });
var format_rt_rw_2 = new ol.format.GeoJSON();
var features_rt_rw_2 = format_rt_rw_2.readFeatures(json_rt_rw_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_2.addFeatures(features_rt_rw_2);
var lyr_rt_rw_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_2, 
                style: style_rt_rw_2,
                popuplayertitle: "rt_rw",
                interactive: true,
    title: 'rt_rw<br />\
    <img src="styles/legend/rt_rw_2_0.png" /> RT 1 RW 1<br />\
    <img src="styles/legend/rt_rw_2_1.png" /> RT 1 RW 2<br />\
    <img src="styles/legend/rt_rw_2_2.png" /> RT 1 RW 3<br />\
    <img src="styles/legend/rt_rw_2_3.png" /> RT 1 RW 4<br />\
    <img src="styles/legend/rt_rw_2_4.png" /> RT 1 RW 5<br />\
    <img src="styles/legend/rt_rw_2_5.png" /> RT 1 RW 6<br />\
    <img src="styles/legend/rt_rw_2_6.png" /> RT 10 RW 3<br />\
    <img src="styles/legend/rt_rw_2_7.png" /> RT 2 RW 1<br />\
    <img src="styles/legend/rt_rw_2_8.png" /> RT 2 RW 2<br />\
    <img src="styles/legend/rt_rw_2_9.png" /> RT 2 RW 3<br />\
    <img src="styles/legend/rt_rw_2_10.png" /> RT 2 RW 4<br />\
    <img src="styles/legend/rt_rw_2_11.png" /> RT 2 RW 5<br />\
    <img src="styles/legend/rt_rw_2_12.png" /> RT 2 RW 6<br />\
    <img src="styles/legend/rt_rw_2_13.png" /> RT 3 RW 1<br />\
    <img src="styles/legend/rt_rw_2_14.png" /> RT 3 RW 2<br />\
    <img src="styles/legend/rt_rw_2_15.png" /> RT 3 RW 3<br />\
    <img src="styles/legend/rt_rw_2_16.png" /> RT 3 RW 4<br />\
    <img src="styles/legend/rt_rw_2_17.png" /> RT 3 RW 5<br />\
    <img src="styles/legend/rt_rw_2_18.png" /> RT 3 RW 6<br />\
    <img src="styles/legend/rt_rw_2_19.png" /> RT 4 RW 1<br />\
    <img src="styles/legend/rt_rw_2_20.png" /> RT 4 RW 2<br />\
    <img src="styles/legend/rt_rw_2_21.png" /> RT 4 RW 3<br />\
    <img src="styles/legend/rt_rw_2_22.png" /> RT 4 RW 4<br />\
    <img src="styles/legend/rt_rw_2_23.png" /> RT 4 RW 5<br />\
    <img src="styles/legend/rt_rw_2_24.png" /> RT 5 RW 1<br />\
    <img src="styles/legend/rt_rw_2_25.png" /> RT 5 RW 2<br />\
    <img src="styles/legend/rt_rw_2_26.png" /> RT 5 RW 3<br />\
    <img src="styles/legend/rt_rw_2_27.png" /> RT 5 RW 5<br />\
    <img src="styles/legend/rt_rw_2_28.png" /> RT 6 RW 1<br />\
    <img src="styles/legend/rt_rw_2_29.png" /> RT 6 RW 2<br />\
    <img src="styles/legend/rt_rw_2_30.png" /> RT 6 RW 3<br />\
    <img src="styles/legend/rt_rw_2_31.png" /> RT 7 RW 2<br />\
    <img src="styles/legend/rt_rw_2_32.png" /> RT 7 RW 3<br />\
    <img src="styles/legend/rt_rw_2_33.png" /> RT 8 RW 2<br />\
    <img src="styles/legend/rt_rw_2_34.png" /> RT 8 RW 3<br />\
    <img src="styles/legend/rt_rw_2_35.png" /> RT 9 RW 3<br />'
        });
var format_kaliwedipoly_3 = new ol.format.GeoJSON();
var features_kaliwedipoly_3 = format_kaliwedipoly_3.readFeatures(json_kaliwedipoly_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kaliwedipoly_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kaliwedipoly_3.addFeatures(features_kaliwedipoly_3);
var lyr_kaliwedipoly_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kaliwedipoly_3, 
                style: style_kaliwedipoly_3,
                popuplayertitle: "kaliwedi-poly",
                interactive: true,
                title: '<img src="styles/legend/kaliwedipoly_3.png" /> kaliwedi-poly'
            });
var format_dusun_4 = new ol.format.GeoJSON();
var features_dusun_4 = format_dusun_4.readFeatures(json_dusun_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dusun_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dusun_4.addFeatures(features_dusun_4);
var lyr_dusun_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dusun_4, 
                style: style_dusun_4,
                popuplayertitle: "dusun",
                interactive: true,
                title: '<img src="styles/legend/dusun_4.png" /> dusun'
            });
var format_nama_rt_rw_5 = new ol.format.GeoJSON();
var features_nama_rt_rw_5 = format_nama_rt_rw_5.readFeatures(json_nama_rt_rw_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nama_rt_rw_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nama_rt_rw_5.addFeatures(features_nama_rt_rw_5);
var lyr_nama_rt_rw_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nama_rt_rw_5, 
                style: style_nama_rt_rw_5,
                popuplayertitle: "nama_rt_rw",
                interactive: true,
                title: 'nama_rt_rw'
            });
var format_jalurkeretaapi_6 = new ol.format.GeoJSON();
var features_jalurkeretaapi_6 = format_jalurkeretaapi_6.readFeatures(json_jalurkeretaapi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalurkeretaapi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalurkeretaapi_6.addFeatures(features_jalurkeretaapi_6);
var lyr_jalurkeretaapi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalurkeretaapi_6, 
                style: style_jalurkeretaapi_6,
                popuplayertitle: "jalur-kereta-api",
                interactive: true,
                title: '<img src="styles/legend/jalurkeretaapi_6.png" /> jalur-kereta-api'
            });
var format_gang_desa_7 = new ol.format.GeoJSON();
var features_gang_desa_7 = format_gang_desa_7.readFeatures(json_gang_desa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gang_desa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gang_desa_7.addFeatures(features_gang_desa_7);
var lyr_gang_desa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gang_desa_7, 
                style: style_gang_desa_7,
                popuplayertitle: "gang_desa",
                interactive: true,
                title: '<img src="styles/legend/gang_desa_7.png" /> gang_desa'
            });
var format_gang_desa_8 = new ol.format.GeoJSON();
var features_gang_desa_8 = format_gang_desa_8.readFeatures(json_gang_desa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gang_desa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gang_desa_8.addFeatures(features_gang_desa_8);
var lyr_gang_desa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gang_desa_8, 
                style: style_gang_desa_8,
                popuplayertitle: "gang_desa",
                interactive: true,
                title: '<img src="styles/legend/gang_desa_8.png" /> gang_desa'
            });
var format_jalan_desa_9 = new ol.format.GeoJSON();
var features_jalan_desa_9 = format_jalan_desa_9.readFeatures(json_jalan_desa_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_desa_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_desa_9.addFeatures(features_jalan_desa_9);
var lyr_jalan_desa_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_desa_9, 
                style: style_jalan_desa_9,
                popuplayertitle: "jalan_desa",
                interactive: true,
                title: '<img src="styles/legend/jalan_desa_9.png" /> jalan_desa'
            });
var format_JalanProvinsi_10 = new ol.format.GeoJSON();
var features_JalanProvinsi_10 = format_JalanProvinsi_10.readFeatures(json_JalanProvinsi_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanProvinsi_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanProvinsi_10.addFeatures(features_JalanProvinsi_10);
var lyr_JalanProvinsi_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanProvinsi_10, 
                style: style_JalanProvinsi_10,
                popuplayertitle: "Jalan Provinsi",
                interactive: true,
                title: '<img src="styles/legend/JalanProvinsi_10.png" /> Jalan Provinsi'
            });
var format_rumah_11 = new ol.format.GeoJSON();
var features_rumah_11 = format_rumah_11.readFeatures(json_rumah_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumah_11.addFeatures(features_rumah_11);
var lyr_rumah_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumah_11, 
                style: style_rumah_11,
                popuplayertitle: "rumah",
                interactive: true,
                title: '<img src="styles/legend/rumah_11.png" /> rumah'
            });
var format_Kaliwedi_point_12 = new ol.format.GeoJSON();
var features_Kaliwedi_point_12 = format_Kaliwedi_point_12.readFeatures(json_Kaliwedi_point_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kaliwedi_point_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kaliwedi_point_12.addFeatures(features_Kaliwedi_point_12);
var lyr_Kaliwedi_point_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kaliwedi_point_12, 
                style: style_Kaliwedi_point_12,
                popuplayertitle: "Kaliwedi_point",
                interactive: true,
                title: '<img src="styles/legend/Kaliwedi_point_12.png" /> Kaliwedi_point'
            });

lyr_batas_desa_0.setVisible(true);lyr_sawah_hutan_1.setVisible(true);lyr_rt_rw_2.setVisible(true);lyr_kaliwedipoly_3.setVisible(true);lyr_dusun_4.setVisible(true);lyr_nama_rt_rw_5.setVisible(true);lyr_jalurkeretaapi_6.setVisible(true);lyr_gang_desa_7.setVisible(true);lyr_gang_desa_8.setVisible(true);lyr_jalan_desa_9.setVisible(true);lyr_JalanProvinsi_10.setVisible(true);lyr_rumah_11.setVisible(true);lyr_Kaliwedi_point_12.setVisible(true);
var layersList = [lyr_batas_desa_0,lyr_sawah_hutan_1,lyr_rt_rw_2,lyr_kaliwedipoly_3,lyr_dusun_4,lyr_nama_rt_rw_5,lyr_jalurkeretaapi_6,lyr_gang_desa_7,lyr_gang_desa_8,lyr_jalan_desa_9,lyr_JalanProvinsi_10,lyr_rumah_11,lyr_Kaliwedi_point_12];
lyr_batas_desa_0.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_sawah_hutan_1.set('fieldAliases', {'id': 'id', 'nama_tmpat': 'nama_tmpat', });
lyr_rt_rw_2.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_kaliwedipoly_3.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'historic': 'historic', 'emergency': 'emergency', 'amenity': 'amenity', 'layer': 'layer', 'access_roo': 'access_roo', 'parking': 'parking', 'roof_mater': 'roof_mater', 'name': 'name', 'leisure': 'leisure', 'isced_leve': 'isced_leve', 'surface': 'surface', 'addr_house': 'addr_house', 'depth': 'depth', 'blockage': 'blockage', 'pump': 'pump', 'tunnel': 'tunnel', 'building_m': 'building_m', 'landuse': 'landuse', 'office': 'office', 'addr_stree': 'addr_stree', 'military': 'military', 'denominati': 'denominati', 'opening_ho': 'opening_ho', 'religion': 'religion', 'highway': 'highway', 'diameter': 'diameter', 'natural': 'natural', 'smoothness': 'smoothness', 'railway': 'railway', 'man_made': 'man_made', 'covered': 'covered', 'width': 'width', 'oneway': 'oneway', 'barrier': 'barrier', 'building': 'building', 'capacity': 'capacity', 'operator': 'operator', 'water': 'water', 'bridge': 'bridge', 'aeroway': 'aeroway', 'government': 'government', 'waterway': 'waterway', 'public_tra': 'public_tra', });
lyr_dusun_4.set('fieldAliases', {'id': 'id', 'nama_dsn': 'nama_dsn', });
lyr_nama_rt_rw_5.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_jalurkeretaapi_6.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'layer': 'layer', 'parking': 'parking', 'name': 'name', 'surface': 'surface', 'depth': 'depth', 'blockage': 'blockage', 'pump': 'pump', 'tunnel': 'tunnel', 'landuse': 'landuse', 'highway': 'highway', 'diameter': 'diameter', 'natural': 'natural', 'smoothness': 'smoothness', 'railway': 'railway', 'man_made': 'man_made', 'covered': 'covered', 'width': 'width', 'oneway': 'oneway', 'barrier': 'barrier', 'building': 'building', 'capacity': 'capacity', 'operator': 'operator', 'water': 'water', 'bridge': 'bridge', 'aeroway': 'aeroway', 'waterway': 'waterway', 'public_tra': 'public_tra', });
lyr_gang_desa_7.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'layer': 'layer', 'parking': 'parking', 'name': 'name', 'surface': 'surface', 'depth': 'depth', 'blockage': 'blockage', 'pump': 'pump', 'tunnel': 'tunnel', 'landuse': 'landuse', 'highway': 'highway', 'diameter': 'diameter', 'natural': 'natural', 'smoothness': 'smoothness', 'railway': 'railway', 'man_made': 'man_made', 'covered': 'covered', 'width': 'width', 'oneway': 'oneway', 'barrier': 'barrier', 'building': 'building', 'capacity': 'capacity', 'operator': 'operator', 'water': 'water', 'bridge': 'bridge', 'aeroway': 'aeroway', 'waterway': 'waterway', 'public_tra': 'public_tra', });
lyr_gang_desa_8.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'layer': 'layer', 'parking': 'parking', 'name': 'name', 'surface': 'surface', 'depth': 'depth', 'blockage': 'blockage', 'pump': 'pump', 'tunnel': 'tunnel', 'landuse': 'landuse', 'highway': 'highway', 'diameter': 'diameter', 'natural': 'natural', 'smoothness': 'smoothness', 'railway': 'railway', 'man_made': 'man_made', 'covered': 'covered', 'width': 'width', 'oneway': 'oneway', 'barrier': 'barrier', 'building': 'building', 'capacity': 'capacity', 'operator': 'operator', 'water': 'water', 'bridge': 'bridge', 'aeroway': 'aeroway', 'waterway': 'waterway', 'public_tra': 'public_tra', });
lyr_jalan_desa_9.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'layer': 'layer', 'parking': 'parking', 'name': 'name', 'surface': 'surface', 'depth': 'depth', 'blockage': 'blockage', 'pump': 'pump', 'tunnel': 'tunnel', 'landuse': 'landuse', 'highway': 'highway', 'diameter': 'diameter', 'natural': 'natural', 'smoothness': 'smoothness', 'railway': 'railway', 'man_made': 'man_made', 'covered': 'covered', 'width': 'width', 'oneway': 'oneway', 'barrier': 'barrier', 'building': 'building', 'capacity': 'capacity', 'operator': 'operator', 'water': 'water', 'bridge': 'bridge', 'aeroway': 'aeroway', 'waterway': 'waterway', 'public_tra': 'public_tra', });
lyr_JalanProvinsi_10.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'layer': 'layer', 'parking': 'parking', 'name': 'name', 'surface': 'surface', 'depth': 'depth', 'blockage': 'blockage', 'pump': 'pump', 'tunnel': 'tunnel', 'landuse': 'landuse', 'highway': 'highway', 'diameter': 'diameter', 'natural': 'natural', 'smoothness': 'smoothness', 'railway': 'railway', 'man_made': 'man_made', 'covered': 'covered', 'width': 'width', 'oneway': 'oneway', 'barrier': 'barrier', 'building': 'building', 'capacity': 'capacity', 'operator': 'operator', 'water': 'water', 'bridge': 'bridge', 'aeroway': 'aeroway', 'waterway': 'waterway', 'public_tra': 'public_tra', });
lyr_rumah_11.set('fieldAliases', {'id': 'id', 'nama_rumah': 'nama_rumah', });
lyr_Kaliwedi_point_12.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'historic': 'historic', 'emergency': 'emergency', 'amenity': 'amenity', 'layer': 'layer', 'access_roo': 'access_roo', 'parking': 'parking', 'roof_mater': 'roof_mater', 'name': 'name', 'leisure': 'leisure', 'isced_leve': 'isced_leve', 'surface': 'surface', 'addr_house': 'addr_house', 'depth': 'depth', 'blockage': 'blockage', 'pump': 'pump', 'tunnel': 'tunnel', 'building_m': 'building_m', 'landuse': 'landuse', 'office': 'office', 'addr_stree': 'addr_stree', 'military': 'military', 'denominati': 'denominati', 'opening_ho': 'opening_ho', 'religion': 'religion', 'highway': 'highway', 'diameter': 'diameter', 'natural': 'natural', 'smoothness': 'smoothness', 'railway': 'railway', 'man_made': 'man_made', 'covered': 'covered', 'width': 'width', 'oneway': 'oneway', 'barrier': 'barrier', 'building': 'building', 'capacity': 'capacity', 'operator': 'operator', 'water': 'water', 'bridge': 'bridge', 'aeroway': 'aeroway', 'government': 'government', 'waterway': 'waterway', 'public_tra': 'public_tra', });
lyr_batas_desa_0.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_sawah_hutan_1.set('fieldImages', {'id': 'TextEdit', 'nama_tmpat': 'TextEdit', });
lyr_rt_rw_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_kaliwedipoly_3.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'historic': 'TextEdit', 'emergency': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'access_roo': 'TextEdit', 'parking': 'TextEdit', 'roof_mater': 'TextEdit', 'name': 'TextEdit', 'leisure': 'TextEdit', 'isced_leve': 'TextEdit', 'surface': 'TextEdit', 'addr_house': 'TextEdit', 'depth': 'TextEdit', 'blockage': 'TextEdit', 'pump': 'TextEdit', 'tunnel': 'TextEdit', 'building_m': 'TextEdit', 'landuse': 'TextEdit', 'office': 'TextEdit', 'addr_stree': 'TextEdit', 'military': 'TextEdit', 'denominati': 'TextEdit', 'opening_ho': 'TextEdit', 'religion': 'TextEdit', 'highway': 'TextEdit', 'diameter': 'TextEdit', 'natural': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'man_made': 'TextEdit', 'covered': 'TextEdit', 'width': 'TextEdit', 'oneway': 'TextEdit', 'barrier': 'TextEdit', 'building': 'TextEdit', 'capacity': 'TextEdit', 'operator': 'TextEdit', 'water': 'TextEdit', 'bridge': 'TextEdit', 'aeroway': 'TextEdit', 'government': 'TextEdit', 'waterway': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_dusun_4.set('fieldImages', {'id': 'TextEdit', 'nama_dsn': 'TextEdit', });
lyr_nama_rt_rw_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_jalurkeretaapi_6.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'parking': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'depth': 'TextEdit', 'blockage': 'TextEdit', 'pump': 'TextEdit', 'tunnel': 'TextEdit', 'landuse': 'TextEdit', 'highway': 'TextEdit', 'diameter': 'TextEdit', 'natural': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'man_made': 'TextEdit', 'covered': 'TextEdit', 'width': 'TextEdit', 'oneway': 'TextEdit', 'barrier': 'TextEdit', 'building': 'TextEdit', 'capacity': 'TextEdit', 'operator': 'TextEdit', 'water': 'TextEdit', 'bridge': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_gang_desa_7.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'parking': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'depth': 'TextEdit', 'blockage': 'TextEdit', 'pump': 'TextEdit', 'tunnel': 'TextEdit', 'landuse': 'TextEdit', 'highway': 'TextEdit', 'diameter': 'TextEdit', 'natural': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'man_made': 'TextEdit', 'covered': 'TextEdit', 'width': 'TextEdit', 'oneway': 'TextEdit', 'barrier': 'TextEdit', 'building': 'TextEdit', 'capacity': 'TextEdit', 'operator': 'TextEdit', 'water': 'TextEdit', 'bridge': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_gang_desa_8.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'parking': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'depth': 'TextEdit', 'blockage': 'TextEdit', 'pump': 'TextEdit', 'tunnel': 'TextEdit', 'landuse': 'TextEdit', 'highway': 'TextEdit', 'diameter': 'TextEdit', 'natural': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'man_made': 'TextEdit', 'covered': 'TextEdit', 'width': 'TextEdit', 'oneway': 'TextEdit', 'barrier': 'TextEdit', 'building': 'TextEdit', 'capacity': 'TextEdit', 'operator': 'TextEdit', 'water': 'TextEdit', 'bridge': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_jalan_desa_9.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'parking': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'depth': 'TextEdit', 'blockage': 'TextEdit', 'pump': 'TextEdit', 'tunnel': 'TextEdit', 'landuse': 'TextEdit', 'highway': 'TextEdit', 'diameter': 'TextEdit', 'natural': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'man_made': 'TextEdit', 'covered': 'TextEdit', 'width': 'TextEdit', 'oneway': 'TextEdit', 'barrier': 'TextEdit', 'building': 'TextEdit', 'capacity': 'TextEdit', 'operator': 'TextEdit', 'water': 'TextEdit', 'bridge': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_JalanProvinsi_10.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'parking': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'depth': 'TextEdit', 'blockage': 'TextEdit', 'pump': 'TextEdit', 'tunnel': 'TextEdit', 'landuse': 'TextEdit', 'highway': 'TextEdit', 'diameter': 'TextEdit', 'natural': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'man_made': 'TextEdit', 'covered': 'TextEdit', 'width': 'TextEdit', 'oneway': 'TextEdit', 'barrier': 'TextEdit', 'building': 'TextEdit', 'capacity': 'TextEdit', 'operator': 'TextEdit', 'water': 'TextEdit', 'bridge': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_rumah_11.set('fieldImages', {'id': 'TextEdit', 'nama_rumah': 'TextEdit', });
lyr_Kaliwedi_point_12.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'historic': 'TextEdit', 'emergency': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'access_roo': 'TextEdit', 'parking': 'TextEdit', 'roof_mater': 'TextEdit', 'name': 'TextEdit', 'leisure': 'TextEdit', 'isced_leve': 'TextEdit', 'surface': 'TextEdit', 'addr_house': 'TextEdit', 'depth': 'TextEdit', 'blockage': 'TextEdit', 'pump': 'TextEdit', 'tunnel': 'TextEdit', 'building_m': 'TextEdit', 'landuse': 'TextEdit', 'office': 'TextEdit', 'addr_stree': 'TextEdit', 'military': 'TextEdit', 'denominati': 'TextEdit', 'opening_ho': 'TextEdit', 'religion': 'TextEdit', 'highway': 'TextEdit', 'diameter': 'TextEdit', 'natural': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'man_made': 'TextEdit', 'covered': 'TextEdit', 'width': 'TextEdit', 'oneway': 'TextEdit', 'barrier': 'TextEdit', 'building': 'TextEdit', 'capacity': 'TextEdit', 'operator': 'TextEdit', 'water': 'TextEdit', 'bridge': 'TextEdit', 'aeroway': 'TextEdit', 'government': 'TextEdit', 'waterway': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_batas_desa_0.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_sawah_hutan_1.set('fieldLabels', {'id': 'hidden field', 'nama_tmpat': 'no label', });
lyr_rt_rw_2.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_kaliwedipoly_3.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'historic': 'no label', 'emergency': 'no label', 'amenity': 'no label', 'layer': 'no label', 'access_roo': 'no label', 'parking': 'no label', 'roof_mater': 'no label', 'name': 'no label', 'leisure': 'no label', 'isced_leve': 'no label', 'surface': 'no label', 'addr_house': 'no label', 'depth': 'no label', 'blockage': 'no label', 'pump': 'no label', 'tunnel': 'no label', 'building_m': 'no label', 'landuse': 'no label', 'office': 'no label', 'addr_stree': 'no label', 'military': 'no label', 'denominati': 'no label', 'opening_ho': 'no label', 'religion': 'no label', 'highway': 'no label', 'diameter': 'no label', 'natural': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'man_made': 'no label', 'covered': 'no label', 'width': 'no label', 'oneway': 'no label', 'barrier': 'no label', 'building': 'no label', 'capacity': 'no label', 'operator': 'no label', 'water': 'no label', 'bridge': 'no label', 'aeroway': 'no label', 'government': 'no label', 'waterway': 'no label', 'public_tra': 'no label', });
lyr_dusun_4.set('fieldLabels', {'id': 'hidden field', 'nama_dsn': 'header label - always visible', });
lyr_nama_rt_rw_5.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', });
lyr_jalurkeretaapi_6.set('fieldLabels', {'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'layer': 'hidden field', 'parking': 'hidden field', 'name': 'no label', 'surface': 'hidden field', 'depth': 'hidden field', 'blockage': 'header label - always visible', 'pump': 'hidden field', 'tunnel': 'hidden field', 'landuse': 'hidden field', 'highway': 'hidden field', 'diameter': 'hidden field', 'natural': 'hidden field', 'smoothness': 'hidden field', 'railway': 'no label', 'man_made': 'hidden field', 'covered': 'hidden field', 'width': 'hidden field', 'oneway': 'hidden field', 'barrier': 'hidden field', 'building': 'hidden field', 'capacity': 'hidden field', 'operator': 'hidden field', 'water': 'hidden field', 'bridge': 'hidden field', 'aeroway': 'hidden field', 'waterway': 'hidden field', 'public_tra': 'hidden field', });
lyr_gang_desa_7.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'layer': 'no label', 'parking': 'no label', 'name': 'no label', 'surface': 'no label', 'depth': 'no label', 'blockage': 'no label', 'pump': 'no label', 'tunnel': 'no label', 'landuse': 'no label', 'highway': 'no label', 'diameter': 'no label', 'natural': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'man_made': 'no label', 'covered': 'no label', 'width': 'no label', 'oneway': 'no label', 'barrier': 'no label', 'building': 'no label', 'capacity': 'no label', 'operator': 'no label', 'water': 'no label', 'bridge': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'public_tra': 'no label', });
lyr_gang_desa_8.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'layer': 'no label', 'parking': 'no label', 'name': 'no label', 'surface': 'no label', 'depth': 'no label', 'blockage': 'no label', 'pump': 'no label', 'tunnel': 'no label', 'landuse': 'no label', 'highway': 'no label', 'diameter': 'no label', 'natural': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'man_made': 'no label', 'covered': 'no label', 'width': 'no label', 'oneway': 'no label', 'barrier': 'no label', 'building': 'no label', 'capacity': 'no label', 'operator': 'no label', 'water': 'no label', 'bridge': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'public_tra': 'no label', });
lyr_jalan_desa_9.set('fieldLabels', {'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'layer': 'hidden field', 'parking': 'hidden field', 'name': 'no label', 'surface': 'hidden field', 'depth': 'hidden field', 'blockage': 'hidden field', 'pump': 'no label', 'tunnel': 'no label', 'landuse': 'no label', 'highway': 'no label', 'diameter': 'no label', 'natural': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'man_made': 'no label', 'covered': 'no label', 'width': 'no label', 'oneway': 'no label', 'barrier': 'no label', 'building': 'no label', 'capacity': 'no label', 'operator': 'no label', 'water': 'no label', 'bridge': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'public_tra': 'no label', });
lyr_JalanProvinsi_10.set('fieldLabels', {'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'layer': 'hidden field', 'parking': 'hidden field', 'name': 'header label - always visible', 'surface': 'hidden field', 'depth': 'hidden field', 'blockage': 'hidden field', 'pump': 'hidden field', 'tunnel': 'hidden field', 'landuse': 'hidden field', 'highway': 'hidden field', 'diameter': 'hidden field', 'natural': 'hidden field', 'smoothness': 'hidden field', 'railway': 'hidden field', 'man_made': 'hidden field', 'covered': 'hidden field', 'width': 'hidden field', 'oneway': 'hidden field', 'barrier': 'hidden field', 'building': 'hidden field', 'capacity': 'hidden field', 'operator': 'hidden field', 'water': 'hidden field', 'bridge': 'hidden field', 'aeroway': 'hidden field', 'waterway': 'hidden field', 'public_tra': 'hidden field', });
lyr_rumah_11.set('fieldLabels', {'id': 'no label', 'nama_rumah': 'no label', });
lyr_Kaliwedi_point_12.set('fieldLabels', {'osm_id': 'hidden field', 'osm_type': 'hidden field', 'historic': 'hidden field', 'emergency': 'hidden field', 'amenity': 'hidden field', 'layer': 'hidden field', 'access_roo': 'hidden field', 'parking': 'hidden field', 'roof_mater': 'hidden field', 'name': 'header label - always visible', 'leisure': 'hidden field', 'isced_leve': 'hidden field', 'surface': 'hidden field', 'addr_house': 'hidden field', 'depth': 'hidden field', 'blockage': 'hidden field', 'pump': 'hidden field', 'tunnel': 'hidden field', 'building_m': 'hidden field', 'landuse': 'hidden field', 'office': 'hidden field', 'addr_stree': 'hidden field', 'military': 'hidden field', 'denominati': 'header label - always visible', 'opening_ho': 'hidden field', 'religion': 'hidden field', 'highway': 'hidden field', 'diameter': 'hidden field', 'natural': 'hidden field', 'smoothness': 'hidden field', 'railway': 'hidden field', 'man_made': 'hidden field', 'covered': 'hidden field', 'width': 'hidden field', 'oneway': 'hidden field', 'barrier': 'hidden field', 'building': 'hidden field', 'capacity': 'hidden field', 'operator': 'hidden field', 'water': 'hidden field', 'bridge': 'hidden field', 'aeroway': 'hidden field', 'government': 'hidden field', 'waterway': 'hidden field', 'public_tra': 'hidden field', });
lyr_Kaliwedi_point_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});