var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TingkatKependudukanKabSidoarjo_1 = new ol.format.GeoJSON();
var features_TingkatKependudukanKabSidoarjo_1 = format_TingkatKependudukanKabSidoarjo_1.readFeatures(json_TingkatKependudukanKabSidoarjo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TingkatKependudukanKabSidoarjo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TingkatKependudukanKabSidoarjo_1.addFeatures(features_TingkatKependudukanKabSidoarjo_1);
var lyr_TingkatKependudukanKabSidoarjo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TingkatKependudukanKabSidoarjo_1, 
                style: style_TingkatKependudukanKabSidoarjo_1,
                popuplayertitle: 'Tingkat Kependudukan Kab. Sidoarjo ',
                interactive: true,
    title: 'Tingkat Kependudukan Kab. Sidoarjo <br />\
    <img src="styles/legend/TingkatKependudukanKabSidoarjo_1_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/TingkatKependudukanKabSidoarjo_1_1.png" /> Rendah<br />\
    <img src="styles/legend/TingkatKependudukanKabSidoarjo_1_2.png" /> Sedang<br />\
    <img src="styles/legend/TingkatKependudukanKabSidoarjo_1_3.png" /> Padat<br />\
    <img src="styles/legend/TingkatKependudukanKabSidoarjo_1_4.png" /> Sangat Padat<br />' });
var format_TempatKependudukanKabSidoarjo_2 = new ol.format.GeoJSON();
var features_TempatKependudukanKabSidoarjo_2 = format_TempatKependudukanKabSidoarjo_2.readFeatures(json_TempatKependudukanKabSidoarjo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatKependudukanKabSidoarjo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatKependudukanKabSidoarjo_2.addFeatures(features_TempatKependudukanKabSidoarjo_2);
var lyr_TempatKependudukanKabSidoarjo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatKependudukanKabSidoarjo_2, 
                style: style_TempatKependudukanKabSidoarjo_2,
                popuplayertitle: 'Tempat Kependudukan Kab. Sidoarjo ',
                interactive: true,
    title: 'Tempat Kependudukan Kab. Sidoarjo <br />\
    <img src="styles/legend/TempatKependudukanKabSidoarjo_2_0.png" /> Kantor Kecamatan<br />\
    <img src="styles/legend/TempatKependudukanKabSidoarjo_2_1.png" /> Kantor Pemerintah<br />\
    <img src="styles/legend/TempatKependudukanKabSidoarjo_2_2.png" /> Kantor Pos<br />\
    <img src="styles/legend/TempatKependudukanKabSidoarjo_2_3.png" /> Pusat Pelayanan Publik<br />\
    <img src="styles/legend/TempatKependudukanKabSidoarjo_2_4.png" /> Rumah Sakit<br />\
    <img src="styles/legend/TempatKependudukanKabSidoarjo_2_5.png" /> Dan lain-lain<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_TingkatKependudukanKabSidoarjo_1.setVisible(true);lyr_TempatKependudukanKabSidoarjo_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TingkatKependudukanKabSidoarjo_1,lyr_TempatKependudukanKabSidoarjo_2];
lyr_TingkatKependudukanKabSidoarjo_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'Jumlah_Penduduk_Jumlah_Penduduk': 'Jumlah_Penduduk_Jumlah_Penduduk', });
lyr_TempatKependudukanKabSidoarjo_2.set('fieldAliases', {'nama_lokasi': 'nama_lokasi', 'jenis_lokasi': 'jenis_lokasi', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_TingkatKependudukanKabSidoarjo_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'Jumlah_Penduduk_Jumlah_Penduduk': 'TextEdit', });
lyr_TempatKependudukanKabSidoarjo_2.set('fieldImages', {'nama_lokasi': 'TextEdit', 'jenis_lokasi': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', });
lyr_TingkatKependudukanKabSidoarjo_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'inline label - visible with data', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', 'Jumlah_Penduduk_Jumlah_Penduduk': 'inline label - visible with data', });
lyr_TempatKependudukanKabSidoarjo_2.set('fieldLabels', {'nama_lokasi': 'inline label - visible with data', 'jenis_lokasi': 'inline label - visible with data', 'longitude': 'no label', 'latitude': 'no label', });
lyr_TempatKependudukanKabSidoarjo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});