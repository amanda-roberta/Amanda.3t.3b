const url = 'https://raw.githubusercontent.com/timreis/api/refs/heads/main/amanda.js'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Os três principais produtos do Valor Bruto da Produção (VBP) da agropecuária, são: Em primero, o Soja com <span>${dados.Soja}</span> bilhões, em segundo,a Carne Bovina com <span>${dados.Carne_Bovina}</span> bilhões. Em terceiro, o Milho com <span>${dados.Milho}</span> bilhões.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}
principais produtos do VBP da agropecuária (R$ bilhões)


vizualizarInformacoesGlobais()
