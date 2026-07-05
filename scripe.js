document.getElementById('obraForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const desc = document.getElementById('desc').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const tipo = document.getElementById('tipo').value;
    
    const lista = document.getElementById('lista');
    const linha = document.createElement('tr');
    
    linha.innerHTML = `<td>${desc}</td><td>${tipo}</td><td>${tipo === 'receita' ? '+' : '-'} R$ ${valor.toFixed(2)}</td>`;
    lista.appendChild(linha);
    
    atualizarSaldo();
    this.reset();
});

function atualizarSaldo() {
    let saldo = 0;
    document.querySelectorAll('#lista tr').forEach(tr => {
        const texto = tr.cells[2].innerText;
        const valor = parseFloat(texto.replace(/[^0-9.-]/g, ''));
        saldo += texto.includes('+') ? valor : -valor;
    });
    document.getElementById('saldo').innerText = saldo.toFixed(2);
}
