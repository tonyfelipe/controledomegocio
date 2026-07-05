document.getElementById('obraForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const desc = document.getElementById('desc').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const tipo = document.getElementById('tipo').value; // 'receita' ou 'despesa'
    
    if (isNaN(valor)) return;

    const lista = document.getElementById('lista');
    const linha = document.createElement('tr');
    
    // Adicionamos uma classe para identificar se é despesa
    linha.innerHTML = `<td>${desc}</td><td>${tipo}</td><td class="valor-item" data-valor="${valor}" data-tipo="${tipo}">
                       ${tipo === 'receita' ? '+' : '-'} R$ ${valor.toFixed(2)}</td>`;
    lista.appendChild(linha);
    
    atualizarSaldo();
    this.reset();
});

function atualizarSaldo() {
    let saldo = 0;
    document.querySelectorAll('.valor-item').forEach(td => {
        const valor = parseFloat(td.getAttribute('data-valor'));
        const tipo = td.getAttribute('data-tipo');
        saldo += (tipo === 'receita') ? valor : -valor;
    });
    document.getElementById('saldo').innerText = saldo.toFixed(2);
}
