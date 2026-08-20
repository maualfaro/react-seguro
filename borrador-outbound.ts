type Resultado = { permitido: true; url: URL } | { permitido: false; motivo: string };

const destinos = [
  'https://api.banco.cr/v1/tipo-cambio',
  'https://10.0.1.50:9200/_search',
  'https://metrics.interno/health',
  'http://169.254.169.254/latest/meta-data/',
];

function probar(titulo: string, fn: (e: string) => Resultado) {
  console.log('\n' + titulo);
  console.log('-'.repeat(62));
  for (const d of destinos) {
    const r = fn(d);
    console.log((r.permitido ? '  PASA  ' : 'BLOQUEA ') + d.padEnd(42) + (r.permitido ? '' : '<- ' + r.motivo));
  }
}