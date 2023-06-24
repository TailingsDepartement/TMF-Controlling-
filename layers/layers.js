ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32647").setExtent([503439.506921, 164395.567521, 510530.577930, 168190.788625]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Joinedlayer_1 = new ol.format.GeoJSON();
var features_Joinedlayer_1 = format_Joinedlayer_1.readFeatures(json_Joinedlayer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Joinedlayer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Joinedlayer_1.addFeatures(features_Joinedlayer_1);
var lyr_Joinedlayer_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Joinedlayer_1, 
                style: style_Joinedlayer_1,
                interactive: true,
    title: 'Joined layer<br />\
    <img src="styles/legend/Joinedlayer_1_0.png" /> ATF 1A<br />\
    <img src="styles/legend/Joinedlayer_1_1.png" /> Pit Bassalt<br />\
    <img src="styles/legend/Joinedlayer_1_2.png" /> Road<br />\
    <img src="styles/legend/Joinedlayer_1_3.png" /> Southdump<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Joinedlayer_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Joinedlayer_1];
lyr_Joinedlayer_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Project': 'Project', 'Area': 'Area', 'Progress Plan': 'Progress Plan', 'Progress Aktual': 'Progress Aktual', 'Cost Aktual': 'Cost Aktual', 'layer': 'layer', 'path': 'path', 'Budget Aktual': 'Budget Aktual', 'Budget Total': 'Budget Total', 'id_2': 'id_2', 'Project_2': 'Project_2', 'Area_2': 'Area_2', 'Budget Total_2': 'Budget Total_2', 'Budget Actual': 'Budget Actual', '4-May': '4-May', '11-May': '11-May', '18-May': '18-May', '25-May': '25-May', '2-Jun': '2-Jun', '9-Jun': '9-Jun', '11-Jun': '11-Jun', '18-Jun': '18-Jun', '25-Jun': '25-Jun', '2-Jul': '2-Jul', '9-Jul': '9-Jul', '16-Jul': '16-Jul', '23-Jul': '23-Jul', '30-Jul': '30-Jul', '6-Aug': '6-Aug', '13-Aug': '13-Aug', '20-Aug': '20-Aug', '27-Aug': '27-Aug', '3-Sep': '3-Sep', '10-Sep': '10-Sep', '17-Sep': '17-Sep', '24-Sep': '24-Sep', '1-Oct': '1-Oct', '8-Oct': '8-Oct', '15-Oct': '15-Oct', '22-Oct': '22-Oct', '29-Oct': '29-Oct', '5-Nov': '5-Nov', '12-Nov': '12-Nov', '19-Nov': '19-Nov', '26-Nov': '26-Nov', '3-Dec': '3-Dec', '10-Dec': '10-Dec', '17-Dec': '17-Dec', '24-Dec': '24-Dec', '31-Dec': '31-Dec', '7-Jan': '7-Jan', '14-Jan': '14-Jan', '21-Jan': '21-Jan', '4-May_1': '4-May_1', '11-May_1': '11-May_1', '18-May_1': '18-May_1', '25-May_1': '25-May_1', '2-Jun_1': '2-Jun_1', '9-Jun_1': '9-Jun_1', '11-Jun_1': '11-Jun_1', '18-Jun_1': '18-Jun_1', '25-Jun_1': '25-Jun_1', '2-Jul_1': '2-Jul_1', '9-Jul_1': '9-Jul_1', '16-Jul_1': '16-Jul_1', '23-Jul_1': '23-Jul_1', });
lyr_Joinedlayer_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Project': 'TextEdit', 'Area': 'TextEdit', 'Progress Plan': 'TextEdit', 'Progress Aktual': 'TextEdit', 'Cost Aktual': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Budget Aktual': 'TextEdit', 'Budget Total': 'TextEdit', 'id_2': 'Range', 'Project_2': 'TextEdit', 'Area_2': 'TextEdit', 'Budget Total_2': 'TextEdit', 'Budget Actual': 'TextEdit', '4-May': 'TextEdit', '11-May': 'TextEdit', '18-May': 'TextEdit', '25-May': 'TextEdit', '2-Jun': 'TextEdit', '9-Jun': 'TextEdit', '11-Jun': 'TextEdit', '18-Jun': 'TextEdit', '25-Jun': 'TextEdit', '2-Jul': 'TextEdit', '9-Jul': 'TextEdit', '16-Jul': 'TextEdit', '23-Jul': 'TextEdit', '30-Jul': 'TextEdit', '6-Aug': 'TextEdit', '13-Aug': 'TextEdit', '20-Aug': 'TextEdit', '27-Aug': 'TextEdit', '3-Sep': 'TextEdit', '10-Sep': 'TextEdit', '17-Sep': 'TextEdit', '24-Sep': 'TextEdit', '1-Oct': 'TextEdit', '8-Oct': 'TextEdit', '15-Oct': 'TextEdit', '22-Oct': 'TextEdit', '29-Oct': 'TextEdit', '5-Nov': 'TextEdit', '12-Nov': 'TextEdit', '19-Nov': 'TextEdit', '26-Nov': 'TextEdit', '3-Dec': 'TextEdit', '10-Dec': 'TextEdit', '17-Dec': 'TextEdit', '24-Dec': 'TextEdit', '31-Dec': 'TextEdit', '7-Jan': 'TextEdit', '14-Jan': 'TextEdit', '21-Jan': 'CheckBox', '4-May_1': 'TextEdit', '11-May_1': 'TextEdit', '18-May_1': 'TextEdit', '25-May_1': 'TextEdit', '2-Jun_1': 'TextEdit', '9-Jun_1': 'TextEdit', '11-Jun_1': 'TextEdit', '18-Jun_1': 'TextEdit', '25-Jun_1': 'TextEdit', '2-Jul_1': 'TextEdit', '9-Jul_1': 'TextEdit', '16-Jul_1': 'TextEdit', '23-Jul_1': 'TextEdit', });
lyr_Joinedlayer_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Project': 'no label', 'Area': 'no label', 'Progress Plan': 'no label', 'Progress Aktual': 'no label', 'Cost Aktual': 'no label', 'layer': 'no label', 'path': 'no label', 'Budget Aktual': 'no label', 'Budget Total': 'no label', 'id_2': 'no label', 'Project_2': 'no label', 'Area_2': 'no label', 'Budget Total_2': 'no label', 'Budget Actual': 'no label', '4-May': 'no label', '11-May': 'no label', '18-May': 'no label', '25-May': 'no label', '2-Jun': 'no label', '9-Jun': 'no label', '11-Jun': 'no label', '18-Jun': 'no label', '25-Jun': 'no label', '2-Jul': 'no label', '9-Jul': 'no label', '16-Jul': 'no label', '23-Jul': 'no label', '30-Jul': 'no label', '6-Aug': 'no label', '13-Aug': 'no label', '20-Aug': 'no label', '27-Aug': 'no label', '3-Sep': 'no label', '10-Sep': 'no label', '17-Sep': 'no label', '24-Sep': 'no label', '1-Oct': 'no label', '8-Oct': 'no label', '15-Oct': 'no label', '22-Oct': 'no label', '29-Oct': 'no label', '5-Nov': 'no label', '12-Nov': 'no label', '19-Nov': 'no label', '26-Nov': 'no label', '3-Dec': 'no label', '10-Dec': 'no label', '17-Dec': 'no label', '24-Dec': 'no label', '31-Dec': 'no label', '7-Jan': 'no label', '14-Jan': 'no label', '21-Jan': 'no label', '4-May_1': 'no label', '11-May_1': 'no label', '18-May_1': 'no label', '25-May_1': 'no label', '2-Jun_1': 'no label', '9-Jun_1': 'no label', '11-Jun_1': 'no label', '18-Jun_1': 'no label', '25-Jun_1': 'no label', '2-Jul_1': 'no label', '9-Jul_1': 'no label', '16-Jul_1': 'no label', '23-Jul_1': 'no label', });
lyr_Joinedlayer_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});