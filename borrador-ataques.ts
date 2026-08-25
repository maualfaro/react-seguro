import { validarDestino } from './src/lib/outbound';

console.log(validarDestino('https://169.254.169.254/latest/meta-data/'));
console.log(validarDestino('http://169.254.169.254/latest/meta-data/'));
console.log(validarDestino('https://10.0.1.50:9200/_search'));
console.log(validarDestino('https://2130706433/'));