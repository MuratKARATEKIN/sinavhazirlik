fetch('../sinavhazirlik/PTE.json')
    .then((response) => response.json())
    .then((json) => {
        // JSON verilerini dgnguyle isle
        // for (const item of json) 
        for (let i = 0; i < json.length; i++) {
            const item = json[i];

            const no = item.No;
            const soru = item.Soru;
            const cevap = item.Cevap;


            const sorularElement = document.getElementById('sorularGenel');
            const soruHTML = `



            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Soru</th>
      <th scope="col">Cevap</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">${no}</th>
      <td>${soru}</td>
      <td>${cevap}</td>
    </tr>
  </tbody>
</table>
            `;
            sorularElement.innerHTML += soruHTML;
        }
    })
    .catch((error) => {
        console.error('Veri okuma hatasi:', error);
    });
