//Encadeamento opcional e Operador de coalescência nula
  type Documento = {
    titulo: string;
    texto: string;
    data?: Date;//Pode não existir
  };

  const documento: Documento = {
    titulo: 'O titulo',
    texto: 'O texto',
  };

  console.log(documento.data?.toDateString() ?? 'ixi, não existe data.')//Verifica se existe date