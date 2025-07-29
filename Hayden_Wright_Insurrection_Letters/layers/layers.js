var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_EnslavedPopulationbyCounty_1 = new ol.format.GeoJSON();
var features_EnslavedPopulationbyCounty_1 = format_EnslavedPopulationbyCounty_1.readFeatures(json_EnslavedPopulationbyCounty_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnslavedPopulationbyCounty_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnslavedPopulationbyCounty_1.addFeatures(features_EnslavedPopulationbyCounty_1);
var lyr_EnslavedPopulationbyCounty_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnslavedPopulationbyCounty_1, 
                style: style_EnslavedPopulationbyCounty_1,
                popuplayertitle: 'Enslaved Population by County',
                interactive: false,
    title: 'Enslaved Population by County<br />\
    <img src="styles/legend/EnslavedPopulationbyCounty_1_0.png" /> 400 - 2000<br />\
    <img src="styles/legend/EnslavedPopulationbyCounty_1_1.png" /> 2000 - 5000<br />\
    <img src="styles/legend/EnslavedPopulationbyCounty_1_2.png" /> 5000 - 7000<br />\
    <img src="styles/legend/EnslavedPopulationbyCounty_1_3.png" /> 7000 - 13000<br />\
    <img src="styles/legend/EnslavedPopulationbyCounty_1_4.png" /> 13000 - 23000<br />' });
var format_LettersConcerningInsurrections_2 = new ol.format.GeoJSON();
var features_LettersConcerningInsurrections_2 = format_LettersConcerningInsurrections_2.readFeatures(json_LettersConcerningInsurrections_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LettersConcerningInsurrections_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LettersConcerningInsurrections_2.addFeatures(features_LettersConcerningInsurrections_2);
var lyr_LettersConcerningInsurrections_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LettersConcerningInsurrections_2, 
                style: style_LettersConcerningInsurrections_2,
                popuplayertitle: 'Letters Concerning Insurrections',
                interactive: true,
                title: '<img src="styles/legend/LettersConcerningInsurrections_2.png" /> Letters Concerning Insurrections'
            });

lyr_Basemap_0.setVisible(true);lyr_EnslavedPopulationbyCounty_1.setVisible(true);lyr_LettersConcerningInsurrections_2.setVisible(true);
var layersList = [lyr_Basemap_0,lyr_EnslavedPopulationbyCounty_1,lyr_LettersConcerningInsurrections_2];
lyr_EnslavedPopulationbyCounty_1.set('fieldAliases', {'DECADE': 'DECADE', 'NHGISNAM': 'NHGISNAM', 'NHGISST': 'NHGISST', 'NHGISCTY': 'NHGISCTY', 'ICPSRST': 'ICPSRST', 'ICPSRCTY': 'ICPSRCTY', 'ICPSRNAM': 'ICPSRNAM', 'STATENAM': 'STATENAM', 'ICPSRSTI': 'ICPSRSTI', 'ICPSRCTYI': 'ICPSRCTYI', 'ICPSRFIP': 'ICPSRFIP', 'GISJOIN': 'GISJOIN', 'GISJOIN2': 'GISJOIN2', 'STATE': 'STATE', 'COUNTY': 'COUNTY', 'PID': 'PID', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'GISJOIN_2': 'GISJOIN_2', 'YEAR': 'YEAR', 'STATE_2': 'STATE_2', 'STATEA': 'STATEA', 'COUNTY_2': 'COUNTY_2', 'COUNTYA': 'COUNTYA', 'AREANAME': 'AREANAME', 'STATEICP': 'STATEICP', 'COUNTYICP': 'COUNTYICP', 'AH3001': 'AH3001', 'AH3002': 'AH3002', 'AH3003': 'AH3003', 'AH3004': 'AH3004', 'AH3005': 'AH3005', 'AH3006': 'AH3006', 'Enslaved': 'Enslaved', });
lyr_LettersConcerningInsurrections_2.set('fieldAliases', {'Identifier': 'ID', 'Work_Title': 'Title', 'Identifier_1': 'Identifier_1', 'Section': 'Section', 'Section_Subjects': 'Section_Subjects', 'Page_Title': 'Page_Title', 'Page_Position': 'Page_Position', 'Page_URL': 'Page_URL', 'Subject': 'Subject', 'Text': 'Text', 'Text_Type': 'Text_Type', 'External_URI': 'External_URI', 'Category': 'Category', 'Subject_URI': 'Subject_URI', 'Subject_Latitude': 'Subject_Latitude', 'Subject_Longitude': 'Subject_Longitude', 'Subject_Description': 'Subject_Description', 'Category_Hierarchy': 'Category_Hierarchy', 'ID': 'ID', 'Title': 'Title', 'Description': 'Description', 'Creator': 'Creator', 'Date': 'Date', 'Coverage (time period)': 'Coverage (time period)', 'Subject_1': 'Subject_1', 'Mississippi county': 'Mississippi county', 'Geographic location': 'Geographic location', 'Resource type': 'Resource type', 'Format': 'Format', 'Language': 'Language', 'Publisher': 'Publisher', 'Contributors': 'Contributors', 'Notes': 'Notes', 'Rights': 'Rights', 'Disclaimer': 'Disclaimer', 'Contributing institution': 'Contributing institution', 'Collection': 'Collection', 'Source': 'Source', 'Digital repository': 'Digital repository', 'Digital collection': 'Digital collection', 'File extension': 'File extension', 'Repository': 'Repository', 'File size': 'File size', 'Width': 'Width', 'Height': 'Height', 'Color space': 'Color space', 'File name': 'File name', 'Alternate ID': 'Alternate ID', 'Record created by': 'Record created by', });
lyr_EnslavedPopulationbyCounty_1.set('fieldImages', {'DECADE': 'TextEdit', 'NHGISNAM': 'TextEdit', 'NHGISST': 'TextEdit', 'NHGISCTY': 'TextEdit', 'ICPSRST': 'TextEdit', 'ICPSRCTY': 'TextEdit', 'ICPSRNAM': 'TextEdit', 'STATENAM': 'TextEdit', 'ICPSRSTI': 'Range', 'ICPSRCTYI': 'Range', 'ICPSRFIP': 'TextEdit', 'GISJOIN': 'TextEdit', 'GISJOIN2': 'TextEdit', 'STATE': 'TextEdit', 'COUNTY': 'TextEdit', 'PID': 'TextEdit', 'X_CENTROID': 'TextEdit', 'Y_CENTROID': 'TextEdit', 'GISJOIN_2': 'TextEdit', 'YEAR': 'TextEdit', 'STATE_2': 'TextEdit', 'STATEA': 'TextEdit', 'COUNTY_2': 'TextEdit', 'COUNTYA': 'TextEdit', 'AREANAME': 'TextEdit', 'STATEICP': 'TextEdit', 'COUNTYICP': 'TextEdit', 'AH3001': 'TextEdit', 'AH3002': 'TextEdit', 'AH3003': 'TextEdit', 'AH3004': 'TextEdit', 'AH3005': 'TextEdit', 'AH3006': 'TextEdit', 'Enslaved': 'Range', });
lyr_LettersConcerningInsurrections_2.set('fieldImages', {'Identifier': 'TextEdit', 'Work_Title': 'TextEdit', 'Identifier_1': 'Hidden', 'Section': 'Hidden', 'Section_Subjects': 'Hidden', 'Page_Title': 'Hidden', 'Page_Position': 'Hidden', 'Page_URL': 'Hidden', 'Subject': 'Hidden', 'Text': 'Hidden', 'Text_Type': 'Hidden', 'External_URI': 'Hidden', 'Category': 'Hidden', 'Subject_URI': 'Hidden', 'Subject_Latitude': 'Hidden', 'Subject_Longitude': 'Hidden', 'Subject_Description': 'Hidden', 'Category_Hierarchy': 'Hidden', 'ID': 'Hidden', 'Title': 'Hidden', 'Description': 'TextEdit', 'Creator': 'Hidden', 'Date': 'Hidden', 'Coverage (time period)': 'Hidden', 'Subject_1': 'Hidden', 'Mississippi county': 'TextEdit', 'Geographic location': 'Hidden', 'Resource type': 'Hidden', 'Format': 'Hidden', 'Language': 'Hidden', 'Publisher': 'Hidden', 'Contributors': 'Hidden', 'Notes': 'Hidden', 'Rights': 'Hidden', 'Disclaimer': 'Hidden', 'Contributing institution': 'Hidden', 'Collection': 'Hidden', 'Source': 'Hidden', 'Digital repository': 'Hidden', 'Digital collection': 'Hidden', 'File extension': 'Hidden', 'Repository': 'Hidden', 'File size': 'Hidden', 'Width': 'Hidden', 'Height': 'Hidden', 'Color space': 'Hidden', 'File name': 'Hidden', 'Alternate ID': 'Hidden', 'Record created by': 'Hidden', });
lyr_EnslavedPopulationbyCounty_1.set('fieldLabels', {'DECADE': 'no label', 'NHGISNAM': 'no label', 'NHGISST': 'no label', 'NHGISCTY': 'no label', 'ICPSRST': 'no label', 'ICPSRCTY': 'no label', 'ICPSRNAM': 'no label', 'STATENAM': 'no label', 'ICPSRSTI': 'no label', 'ICPSRCTYI': 'no label', 'ICPSRFIP': 'no label', 'GISJOIN': 'no label', 'GISJOIN2': 'no label', 'STATE': 'no label', 'COUNTY': 'no label', 'PID': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'GISJOIN_2': 'no label', 'YEAR': 'no label', 'STATE_2': 'no label', 'STATEA': 'no label', 'COUNTY_2': 'no label', 'COUNTYA': 'no label', 'AREANAME': 'no label', 'STATEICP': 'no label', 'COUNTYICP': 'no label', 'AH3001': 'no label', 'AH3002': 'no label', 'AH3003': 'no label', 'AH3004': 'no label', 'AH3005': 'no label', 'AH3006': 'no label', 'Enslaved': 'no label', });
lyr_LettersConcerningInsurrections_2.set('fieldLabels', {'Identifier': 'header label - always visible', 'Work_Title': 'header label - always visible', 'Description': 'header label - always visible', 'Mississippi county': 'header label - always visible', });
lyr_LettersConcerningInsurrections_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});