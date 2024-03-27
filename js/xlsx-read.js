
fetch('../sinavhazirlik/PTE.json')
    .then((response) => response.json())
    .then((json) => {
        // JSON verilerini döngüyle işle
        // for (const item of json) 
        for (let i = 0; i < 20; i++) {
            const item = json[i];

            const randomSayi = Math.floor(Math.random() * 700) + 1;
            const item2 = json[randomSayi];
            const item3 = json[randomSayi + 1];
            const item4 = json[randomSayi + 2];
            const no = item.No;
            const soru = item.Soru;
            const cevap = item.Cevap;
            const cevap2 = item2.Cevap;
            const cevap3 = item3.Cevap;
            const cevap4 = item4.Cevap;
            const aktif = item.Aktif;



            // // Burada istediğiniz işlemleri yapabilirsiniz
            // console.log(`No: ${no}, Soru: ${soru}, Cevap: ${cevap},Aktif Mi: ${aktif}`);

            const sorularElement = document.getElementById('sorular');
            const soruHTML = `

            <form>
                <!-- Soru 1 -->
                <div class="form-group">
                    <label for="soru${no}" id="soru${no}">Soru ${no}: ${soru}</label>

                    // cevapları yukle
                    ${generateQuestion(cevap, cevap2, cevap3, cevap4, no)}

                </div>
    
                <!-- İleri Butonu -->
                <button type="submit" class="btn btn-primary">İleri</button>
            </form>
            `;
            sorularElement.innerHTML += soruHTML;
        }
    })
    .catch((error) => {
        console.error('Veri okuma hatası:', error);
    });



function generateQuestion(cevap1, cevap2, cevap3, cevap4, no) {

    const cevaplar = [
        { cevap: cevap1, dogru: 1 },
        { cevap: cevap2, dogru: 0 },
        { cevap: cevap3, dogru: 0 },
        { cevap: cevap4, dogru: 0 }
    ];

    // Cevapları rastgele sırala
    const shuffledCevaplar = cevaplar.sort(() => Math.random() - 0.5);


    // HTML içeriğini oluştur
    let html = "";
    for (let i = 0; i < shuffledCevaplar.length; i++) {
        const cevap = shuffledCevaplar[i].cevap;
        const value = shuffledCevaplar[i].dogru;

        html += `

                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="${value}" value="${value}">
                <label class="form-check-label" for="cevap${i}">${cevap}</label>
                </div>
            `;
    }

    // #sorular elementine ekle
    // const cevaplarElement = document.getElementById("cevaplar");

    return html;
}

