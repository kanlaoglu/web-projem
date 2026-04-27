function diziAra() {
    const arama = document.getElementById("diziInput").value;
    const sonucAlani = document.getElementById("sonuc");

    if (arama.trim() === "") {
        sonucAlani.innerHTML = `
            <div class="col-12">
                <div class="alert alert-warning">Lütfen bir dizi adı giriniz.</div>
            </div>
        `;
        return;
    }

    fetch("https://api.tvmaze.com/search/shows?q=" + arama)
        .then(response => response.json())
        .then(data => {
            sonucAlani.innerHTML = "";

            if (data.length === 0) {
                sonucAlani.innerHTML = `
                    <div class="col-12">
                        <div class="alert alert-danger">Sonuç bulunamadı.</div>
                    </div>
                `;
                return;
            }

            data.slice(0, 6).forEach(item => {
                const dizi = item.show;

                const resim = dizi.image ? dizi.image.medium : "https://via.placeholder.com/210x295?text=Resim+Yok";
                const turler = dizi.genres.length > 0 ? dizi.genres.join(", ") : "Tür bilgisi yok";
                const puan = dizi.rating.average ? dizi.rating.average : "Puan yok";
                const ozet = dizi.summary ? dizi.summary : "Özet bilgisi bulunmuyor.";

                sonucAlani.innerHTML += `
                    <div class="col-md-4">
                        <div class="card h-100 shadow-sm">
                            <img src="${resim}" class="card-img-top" alt="${dizi.name}">
                            <div class="card-body">
                                <h5 class="card-title">${dizi.name}</h5>
                                <p><strong>Tür:</strong> ${turler}</p>
                                <p><strong>Puan:</strong> ${puan}</p>
                                <div class="card-text">${ozet}</div>
                            </div>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => {
            sonucAlani.innerHTML = `
                <div class="col-12">
                    <div class="alert alert-danger">API verisi alınırken hata oluştu.</div>
                </div>
            `;
        });
}