
const fotos = {
    'cancun': ['Cancún.jpg.webp'],
    'cap-cana': ['cap cana.jpg'],
    'costa-mujeres': ['COSTA-MUJERES_CPTQ-1_31_11zon-scaled.jpg'],
    'ibiza': ['ibiza.jpg'],
    'montego-bay': ['Montego Bay.jpg'],
    'punta-cana': ['punta cana.jpg'],
    'riviera-nayarit': ['riviera-nayarit.jpg'],
    'salvador-bahia': ['Salvador de bahia.jpg']
};

function mostrarDescripcion(id) {
    const descripcion = document.getElementById(id).innerHTML;
    const fotosDestino = fotos[id] || [];
    let fotosHtml = '';

    fotosDestino.forEach(src => {
        fotosHtml += `<img src="img/${src}" alt="Foto de ${id}" class="foto-destino">`;
    });

    document.getElementById('modal').innerHTML = 
        '<h2>' + document.querySelector('#' + id).previousElementSibling.innerText + '</h2>' + 
        descripcion + 
        '<div class="galeria-fotos">' + fotosHtml + '</div>';
}
