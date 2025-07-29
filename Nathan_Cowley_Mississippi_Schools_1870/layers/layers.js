var wms_layers = [];


        var lyr_LightGray_0 = new ol.layer.Tile({
            'title': 'Light Gray',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Mississippischools_1 = new ol.format.GeoJSON();
var features_Mississippischools_1 = format_Mississippischools_1.readFeatures(json_Mississippischools_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mississippischools_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mississippischools_1.addFeatures(features_Mississippischools_1);
var lyr_Mississippischools_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mississippischools_1, 
                style: style_Mississippischools_1,
                popuplayertitle: 'Mississippi schools',
                interactive: true,
                title: 'Mississippi schools'
            });

lyr_LightGray_0.setVisible(true);lyr_Mississippischools_1.setVisible(true);
var layersList = [lyr_LightGray_0,lyr_Mississippischools_1];
lyr_Mississippischools_1.set('fieldAliases', {'DECADE': 'DECADE', 'NHGISNAM': 'NHGISNAM', 'NHGISST': 'NHGISST', 'NHGISCTY': 'NHGISCTY', 'ICPSRST': 'ICPSRST', 'ICPSRCTY': 'ICPSRCTY', 'ICPSRNAM': 'ICPSRNAM', 'STATENAM': 'STATENAM', 'ICPSRSTI': 'ICPSRSTI', 'ICPSRCTYI': 'ICPSRCTYI', 'ICPSRFIP': 'ICPSRFIP', 'GISJOIN': 'GISJOIN', 'GISJOIN2': 'GISJOIN2', 'STATE': 'STATE', 'COUNTY': 'COUNTY', 'PID': 'PID', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Links': 'Links', 'COUNTY_2': 'COUNTY', 'good status': 'good status', 'Income': 'Income', 'Spent': 'Spent', 'Excess moneys': 'Excess moneys', 'Color of School': 'Color of School', });
lyr_Mississippischools_1.set('fieldImages', {'DECADE': 'TextEdit', 'NHGISNAM': 'TextEdit', 'NHGISST': 'TextEdit', 'NHGISCTY': 'TextEdit', 'ICPSRST': 'TextEdit', 'ICPSRCTY': 'TextEdit', 'ICPSRNAM': 'TextEdit', 'STATENAM': 'TextEdit', 'ICPSRSTI': 'Range', 'ICPSRCTYI': 'Range', 'ICPSRFIP': 'TextEdit', 'GISJOIN': 'TextEdit', 'GISJOIN2': 'TextEdit', 'STATE': 'TextEdit', 'COUNTY': 'TextEdit', 'PID': 'TextEdit', 'X_CENTROID': 'TextEdit', 'Y_CENTROID': 'TextEdit', 'Links': 'TextEdit', 'COUNTY_2': 'TextEdit', 'good status': 'DateTime', 'Income': 'TextEdit', 'Spent': 'TextEdit', 'Excess moneys': 'TextEdit', 'Color of School': 'TextEdit', });
lyr_Mississippischools_1.set('fieldLabels', {'DECADE': 'hidden field', 'NHGISNAM': 'hidden field', 'NHGISST': 'hidden field', 'NHGISCTY': 'hidden field', 'ICPSRST': 'hidden field', 'ICPSRCTY': 'hidden field', 'ICPSRNAM': 'hidden field', 'STATENAM': 'hidden field', 'ICPSRSTI': 'hidden field', 'ICPSRCTYI': 'hidden field', 'ICPSRFIP': 'hidden field', 'GISJOIN': 'hidden field', 'GISJOIN2': 'hidden field', 'STATE': 'hidden field', 'COUNTY': 'hidden field', 'PID': 'hidden field', 'X_CENTROID': 'hidden field', 'Y_CENTROID': 'hidden field', 'Links': 'header label - visible with data', 'COUNTY_2': 'header label - visible with data', 'good status': 'header label - visible with data', 'Income': 'header label - visible with data', 'Spent': 'header label - visible with data', 'Excess moneys': 'header label - visible with data', 'Color of School': 'header label - visible with data', });
lyr_Mississippischools_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});