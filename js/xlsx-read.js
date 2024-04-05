//     fetch('../sinavhazirlik/PTE.json')
//         .then((response) => response.json())
//         .then((json) => {
//             // JSON verilerini dgnguyle isle
//             // for (const item of json) 
//             for (let i = 0; i < 20; i++) {
//                 const item = json[i];

//                 const randomSayi = Math.floor(Math.random() * 700) + 1;
//                 const item2 = json[randomSayi];
//                 const item3 = json[randomSayi + 1];
//                 const item4 = json[randomSayi + 2];
//                 const no = item.No;
//                 const soru = item.Soru;
//                 const cevap = item.Cevap;
//                 const cevap2 = item2.Cevap;
//                 const cevap3 = item3.Cevap;
//                 const cevap4 = item4.Cevap;
//                 const aktif = item.Aktif;

//                 const sorularElement = document.getElementById('sorular');
//                 const soruHTML = `

//             <form>
//                 <!-- Soru 1 -->
//                 <div class="form-group">
//                     <label for="soru${no}" id="soru">S${no}: ${soru}</label>

//                     ${generateQuestion(cevap, cevap2, cevap3, cevap4, no)}

//                 </div>
//             </form>
//             `;
//                 sorularElement.innerHTML += soruHTML;
//             }
//         })
//         .catch((error) => {
//             console.error('Veri okuma hatasi:', error);
//         });

// function generateQuestion(cevap1, cevap2, cevap3, cevap4, no) {

//     const cevaplar = [
//         { cevap: cevap1, dogru: 1 },
//         { cevap: cevap2, dogru: 0 },
//         { cevap: cevap3, dogru: 0 },
//         { cevap: cevap4, dogru: 0 }
//     ];

//     // Cevaplari rastgele sirala
//     const shuffledCevaplar = cevaplar.sort(() => Math.random() - 0.5);


//     // HTML icerigini olustur
//     let html = "";
//     for (let i = 0; i < shuffledCevaplar.length; i++) {
//         const cevap = shuffledCevaplar[i].cevap;
//         const value = shuffledCevaplar[i].dogru;

//         html += `

//                 <div class="form-check">
//                 <input class="form-check-input" type="checkbox" id="myCheckbox" value="${value}">
//                 <label class="form-check-label" id="myLabel" for="cevap${i}">${cevap}</label>
//                 </div>
//             `;
//     }

//     return html;
// }

