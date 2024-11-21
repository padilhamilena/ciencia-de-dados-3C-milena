const url= https='//raw.githubusercontent.com/padilhamilena/ciencia-de-dados-3C-milena/refs/heads/main/dados-globais.json';

async function vizualizarinformacoesglobais(){
    const res = await fetch(url);

    const dados = await res.json ();
}

vizualizarinformacoesglobais();