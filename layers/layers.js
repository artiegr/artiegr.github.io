var wms_layers = [];
var format_smaller_0 = new ol.format.GeoJSON();
var features_smaller_0 = format_smaller_0.readFeatures(json_smaller_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_smaller_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_smaller_0.addFeatures(features_smaller_0);var lyr_smaller_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_smaller_0, 
                style: style_smaller_0,
                title: '<img src="styles/legend/smaller_0.png" /> smaller'
            });var format_map_polylines_street3_1 = new ol.format.GeoJSON();
var features_map_polylines_street3_1 = format_map_polylines_street3_1.readFeatures(json_map_polylines_street3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_map_polylines_street3_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_map_polylines_street3_1.addFeatures(features_map_polylines_street3_1);var lyr_map_polylines_street3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_map_polylines_street3_1, 
                style: style_map_polylines_street3_1,
                title: 'map_polylines_street3'
            });var format_treeswithstreetnameslessbackyards_2 = new ol.format.GeoJSON();
var features_treeswithstreetnameslessbackyards_2 = format_treeswithstreetnameslessbackyards_2.readFeatures(json_treeswithstreetnameslessbackyards_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_treeswithstreetnameslessbackyards_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_treeswithstreetnameslessbackyards_2.addFeatures(features_treeswithstreetnameslessbackyards_2);var lyr_treeswithstreetnameslessbackyards_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_treeswithstreetnameslessbackyards_2, 
                style: style_treeswithstreetnameslessbackyards_2,
                title: '<img src="styles/legend/treeswithstreetnameslessbackyards_2.png" /> treeswithstreetnameslessbackyards'
            });

lyr_smaller_0.setVisible(true);lyr_map_polylines_street3_1.setVisible(true);lyr_treeswithstreetnameslessbackyards_2.setVisible(true);
var layersList = [lyr_smaller_0,lyr_map_polylines_street3_1,lyr_treeswithstreetnameslessbackyards_2];
lyr_smaller_0.set('fieldAliases', {'id': 'id', 'LINK': 'LINK', 'ADDRESS': 'ADDRESS', 'LFNAME': 'LFNAME', 'ARC_SIDE': 'ARC_SIDE', 'NAME': 'NAME', 'X': 'X', 'Y': 'Y', });
lyr_map_polylines_street3_1.set('fieldAliases', {'id': 'id', 'highway': 'highway', 'name': 'name', 'h11': 'h11', 'h7': 'h7', 'h9': 'h9', });
lyr_treeswithstreetnameslessbackyards_2.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'tree_index': 'tree_index', 'tree_name': 'tree_name', 'date': 'date', 'block_id': 'block_id', 'tree_no': 'tree_no', 'species_co': 'species_co', 'species__1': 'species__1', 'dead': 'dead', 'location_c': 'location_c', 'ownership_': 'ownership_', 'number_of_': 'number_of_', 'dbh': 'dbh', 'hrd_surfac': 'hrd_surfac', 'crown_widt': 'crown_widt', 'ht_to_base': 'ht_to_base', 'total_heig': 'total_heig', 'reduced_cr': 'reduced_cr', 'unbalanced': 'unbalanced', 'defoliatio': 'defoliatio', 'weak_or_ye': 'weak_or_ye', 'dead_or_br': 'dead_or_br', 'lean': 'lean', 'poor_branc': 'poor_branc', 'branch_sca': 'branch_sca', 'trunk_scar': 'trunk_scar', 'conks': 'conks', 'rot_or_cav': 'rot_or_cav', 'rot_or_c_1': 'rot_or_c_1', 'confined_s': 'confined_s', 'crack': 'crack', 'girdling_r': 'girdling_r', 'recent_tre': 'recent_tre', 'cable_or_b': 'cable_or_b', 'conflict_w': 'conflict_w', 'conflict_1': 'conflict_1', 'conflict_2': 'conflict_2', 'conflict_3': 'conflict_3', 'conflict_4': 'conflict_4', 'comments': 'comments', 'latitude': 'latitude', 'longitude': 'longitude', 'edits': 'edits', 'test_for_d': 'test_for_d', 'field_44_1': 'field_44_1', 'field_45_1': 'field_45_1', 'join_ADDRE': 'join_ADDRE', 'join_LFNAM': 'join_LFNAM', });
lyr_smaller_0.set('fieldImages', {'id': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS': 'TextEdit', 'LFNAME': 'TextEdit', 'ARC_SIDE': 'TextEdit', 'NAME': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_map_polylines_street3_1.set('fieldImages', {'id': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'h11': 'TextEdit', 'h7': 'TextEdit', 'h9': 'TextEdit', });
lyr_treeswithstreetnameslessbackyards_2.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'tree_index': 'TextEdit', 'tree_name': 'TextEdit', 'date': 'TextEdit', 'block_id': 'TextEdit', 'tree_no': 'TextEdit', 'species_co': 'TextEdit', 'species__1': 'TextEdit', 'dead': 'TextEdit', 'location_c': 'TextEdit', 'ownership_': 'TextEdit', 'number_of_': 'TextEdit', 'dbh': 'TextEdit', 'hrd_surfac': 'TextEdit', 'crown_widt': 'TextEdit', 'ht_to_base': 'TextEdit', 'total_heig': 'TextEdit', 'reduced_cr': 'TextEdit', 'unbalanced': 'TextEdit', 'defoliatio': 'TextEdit', 'weak_or_ye': 'TextEdit', 'dead_or_br': 'TextEdit', 'lean': 'TextEdit', 'poor_branc': 'TextEdit', 'branch_sca': 'TextEdit', 'trunk_scar': 'TextEdit', 'conks': 'TextEdit', 'rot_or_cav': 'TextEdit', 'rot_or_c_1': 'TextEdit', 'confined_s': 'TextEdit', 'crack': 'TextEdit', 'girdling_r': 'TextEdit', 'recent_tre': 'TextEdit', 'cable_or_b': 'TextEdit', 'conflict_w': 'TextEdit', 'conflict_1': 'TextEdit', 'conflict_2': 'TextEdit', 'conflict_3': 'TextEdit', 'conflict_4': 'TextEdit', 'comments': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'edits': 'TextEdit', 'test_for_d': 'TextEdit', 'field_44_1': 'TextEdit', 'field_45_1': 'TextEdit', 'join_ADDRE': 'TextEdit', 'join_LFNAM': 'TextEdit', });
lyr_smaller_0.set('fieldLabels', {'id': 'no label', 'LINK': 'no label', 'ADDRESS': 'no label', 'LFNAME': 'no label', 'ARC_SIDE': 'no label', 'NAME': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_map_polylines_street3_1.set('fieldLabels', {'id': 'no label', 'highway': 'no label', 'name': 'no label', 'h11': 'no label', 'h7': 'no label', 'h9': 'no label', });
lyr_treeswithstreetnameslessbackyards_2.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'tree_index': 'no label', 'tree_name': 'no label', 'date': 'no label', 'block_id': 'no label', 'tree_no': 'no label', 'species_co': 'no label', 'species__1': 'no label', 'dead': 'no label', 'location_c': 'no label', 'ownership_': 'no label', 'number_of_': 'no label', 'dbh': 'no label', 'hrd_surfac': 'no label', 'crown_widt': 'no label', 'ht_to_base': 'no label', 'total_heig': 'no label', 'reduced_cr': 'no label', 'unbalanced': 'no label', 'defoliatio': 'no label', 'weak_or_ye': 'no label', 'dead_or_br': 'no label', 'lean': 'no label', 'poor_branc': 'no label', 'branch_sca': 'no label', 'trunk_scar': 'no label', 'conks': 'no label', 'rot_or_cav': 'no label', 'rot_or_c_1': 'no label', 'confined_s': 'no label', 'crack': 'no label', 'girdling_r': 'no label', 'recent_tre': 'no label', 'cable_or_b': 'no label', 'conflict_w': 'no label', 'conflict_1': 'no label', 'conflict_2': 'no label', 'conflict_3': 'no label', 'conflict_4': 'no label', 'comments': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'edits': 'no label', 'test_for_d': 'no label', 'field_44_1': 'no label', 'field_45_1': 'no label', 'join_ADDRE': 'no label', 'join_LFNAM': 'no label', });
lyr_treeswithstreetnameslessbackyards_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});