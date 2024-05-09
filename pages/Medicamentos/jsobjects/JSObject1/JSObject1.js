export default {
  genPDF: () => {
    const doc = new jspdf.jsPDF();
    
    // Log para verificar o valor de 'medicamentos_ativos.tableData' e 'medicamentos_ativos.columnOrder'
    console.log('medicamentos_ativos.tableData:', medicamentos_ativos.tableData);
    console.log('medicamentos_ativos.columnOrder:', medicamentos_ativos.tableHeaders);
    
    doc.text('Lista de Animais', 20, 20);
    
    // Log para verificar o valor após a chamada de 'doc.text'
    console.log('Texto adicionado ao PDF.');
    
    doc.table(0, 30, medicamentos_ativos.tableData, medicamentos_ativos.tableHeaders, { printHeaders: true, autoSize: true });
    
    // Log para verificar o valor após a chamada de 'doc.table'
    console.log('Tabela adicionada ao PDF.');

    download(doc.output(), 'painel_animais.pdf');
  }
};