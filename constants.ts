import { Product } from './types';
import aguacateImg from './assets/productos/AGUACATE.png';
import aguacate400 from './assets/productos/AGUACATE-400w.png';
import aguacate800 from './assets/productos/AGUACATE-800w.png';
import aguacate1200 from './assets/productos/AGUACATE-1200w.png';

import aloeImg from './assets/productos/ALOE_VERA.png';
import aloe400 from './assets/productos/ALOE_VERA-400w.png';
import aloe800 from './assets/productos/ALOE_VERA-800w.png';
import aloe1200 from './assets/productos/ALOE_VERA-1200w.png';

import avenaImg from './assets/productos/AVENA.png';
import avena400 from './assets/productos/AVENA-400w.png';
import avena800 from './assets/productos/AVENA-800w.png';
import avena1200 from './assets/productos/AVENA-1200w.png';

import carbonImg from './assets/productos/CARBON_ACTIVADO.png';
import carbon400 from './assets/productos/CARBON_ACTIVADO-400w.png';
import carbon800 from './assets/productos/CARBON_ACTIVADO-800w.png';
import carbon1200 from './assets/productos/CARBON_ACTIVADO-1200w.png';

import mentaImg from './assets/productos/MENTA_EUCALIPTO.png';
import menta400 from './assets/productos/MENTA_EUCALIPTO-400w.png';
import menta800 from './assets/productos/MENTA_EUCALIPTO-800w.png';
import menta1200 from './assets/productos/MENTA_EUCALIPTO-1200w.png';

import rudaImg from './assets/productos/RUDA.png';
import ruda400 from './assets/productos/RUDA-400w.png';
import ruda800 from './assets/productos/RUDA-800w.png';
import ruda1200 from './assets/productos/RUDA-1200w.png';

import quarzoImg from './assets/productos/QUARZO.png';
import quarzo400 from './assets/productos/QUARZO-400w.png';
import quarzo800 from './assets/productos/QUARZO-800w.png';
import quarzo1200 from './assets/productos/QUARZO-1200w.png';

import navidadImg from './assets/productos/NAVIDAD.png';
import navidad400 from './assets/productos/NAVIDAD-400w.png';
import navidad800 from './assets/productos/NAVIDAD-800w.png';
import navidad1200 from './assets/productos/NAVIDAD-1200w.png';

import piesImg from './assets/productos/CARBON_ACTIVADO_EXFOLIANTE_PIES.png';
import pies400 from './assets/productos/CARBON_ACTIVADO_EXFOLIANTE_PIES-400w.png';
import pies800 from './assets/productos/CARBON_ACTIVADO_EXFOLIANTE_PIES-800w.png';
import pies1200 from './assets/productos/CARBON_ACTIVADO_EXFOLIANTE_PIES-1200w.png';

export const WHATSAPP_NUMBER = "593964201819"; // Extracted from PDF (0964201819 with EC code)

export const PRODUCTS: Product[] = [
  {
    id: 'aguacate',
    name: 'Jabón de Aguacate',
    price: '$5.00',
    weight: '100g aprox.',
    ingredients: 'Aceite de aguacate, extracto de semilla de aguacate y vitamina E.',
    benefits: 'Hidratación profunda, suavidad inmediata, piel más flexible y nutrida.',
    idealFor: 'Piel seca, irritada o apagada.',
    category: 'natural',
    imagePlaceholderColor: 'bg-green-200',
    image: aguacateImg,
    image400w: aguacate400,
    image800w: aguacate800,
    image1200w: aguacate1200
  },
  {
    id: 'aloe',
    name: 'Jabón de Aloe Vera',
    price: '$5.00',
    weight: '100g aprox.',
    ingredients: 'Aloe vera (gel/extracto) y vitamina E.',
    benefits: 'Calma al instante, reduce enrojecimiento, hidrata sin dejar grasa y ayuda a regenerar la piel.',
    idealFor: 'Piel sensible, irritada o con tendencia a la resequedad.',
    category: 'natural',
    imagePlaceholderColor: 'bg-green-400',
    image: aloeImg,
    image400w: aloe400,
    image800w: aloe800,
    image1200w: aloe1200
  },
  {
    id: 'avena',
    name: 'Jabón de Avena',
    price: '$5.00',
    weight: '100g aprox.',
    ingredients: 'Extracto de avena, avena coloidal, leche y miel.',
    benefits: 'Alivia irritaciones, reduce enrojecimiento, aporta suavidad profunda.',
    idealFor: 'Piel sensible, reseca, con picazón o tendencia a irritarse.',
    category: 'natural',
    imagePlaceholderColor: 'bg-orange-100',
    image: avenaImg,
    image400w: avena400,
    image800w: avena800,
    image1200w: avena1200
  },
  {
    id: 'calendula',
    name: 'Caléndula y Manzanilla',
    price: '$5.00',
    weight: '100g aprox.',
    ingredients: 'Extracto de caléndula, extracto de manzanilla.',
    benefits: 'Calma irritaciones, reduce rojeces, suaviza la piel y ayuda a equilibrar zonas sensibles.',
    idealFor: 'Bebés, piel sensible, irritada, reactiva.',
    category: 'natural',
    imagePlaceholderColor: 'bg-yellow-200'
  },
  {
    id: 'carbon',
    name: 'Carbón Activado Corporal',
    price: '$6.00',
    weight: '120g aprox.',
    ingredients: 'Carbón activado y leche.',
    benefits: 'Limpieza profunda, ayuda a desintoxicar, reduce impurezas.',
    idealFor: 'Piel mixta, grasa o propensa a puntos negros.',
    category: 'natural',
    imagePlaceholderColor: 'bg-gray-800',
    image: carbonImg,
    image400w: carbon400,
    image800w: carbon800,
    image1200w: carbon1200
  },
  {
    id: 'menta',
    name: 'Menta y Eucalipto',
    price: '$5.00',
    weight: '100g aprox.',
    ingredients: 'Extracto de menta y eucalipto, aceites esenciales.',
    benefits: 'Refresca, descongestiona, reduce pesadez y revitaliza.',
    idealFor: 'Piel mixta, grasa o efecto cooling.',
    category: 'natural',
    imagePlaceholderColor: 'bg-teal-200',
    image: mentaImg,
    image400w: menta400,
    image800w: menta800,
    image1200w: menta1200
  },
  {
    id: 'ruda',
    name: 'Esotérico: Ruda',
    price: '$5.00',
    weight: '90g',
    ingredients: 'Extracto de ruda y aceite esencial de ruda.',
    benefits: 'Purificante, protector y revitalizante. Absorbe energías negativas.',
    idealFor: 'Limpieza energética tradicional.',
    category: 'esoterico',
    imagePlaceholderColor: 'bg-green-600',
    image: rudaImg,
    image400w: ruda400,
    image800w: ruda800,
    image1200w: ruda1200
  },
  {
    id: 'romero',
    name: 'Esotérico: Romero',
    price: '$5.00',
    weight: '100g aprox.',
    ingredients: 'Extracto de romero, aceite esencial de romero.',
    benefits: 'Claridad mental y fuerza. Purifica y regula la grasa.',
    idealFor: 'Limpieza de pensamientos y energías estancadas.',
    category: 'esoterico',
    imagePlaceholderColor: 'bg-green-700'
  },
  {
    id: 'lavanda-cuarzos',
    name: 'Lavanda Cuarzos',
    price: '$6.00',
    weight: '120g aprox.',
    ingredients: 'Extracto de lavanda e incrustaciones decorativas tipo cuarzo.',
    benefits: 'Calma, suaviza y equilibra emociones.',
    idealFor: 'Relajación profunda y piel estresada.',
    category: 'esoterico',
    imagePlaceholderColor: 'bg-purple-300',
    image: quarzoImg,
    image400w: quarzo400,
    image800w: quarzo800,
    image1200w: quarzo1200
  },
  {
    id: 'bombshell',
    name: 'Bombshell',
    price: '$5.00',
    weight: '90g aprox.',
    ingredients: 'Fragancia inspirada (floral-frutal) y vitamina E.',
    benefits: 'Aporta suavidad sedosa, deja la piel perfumada.',
    idealFor: 'Quienes buscan un aroma elegante y femenino.',
    category: 'natural',
    imagePlaceholderColor: 'bg-red-400'
  },
  {
    id: 'navidad',
    name: 'Colección Navideña',
    price: '$5 - $7',
    weight: 'Varía',
    ingredients: 'Fragancias navideñas, pino, canela.',
    benefits: 'Edición limitada de temporada.',
    idealFor: 'Regalos y decoración.',
    category: 'temporada',
    imagePlaceholderColor: 'bg-red-600',
    image: navidadImg,
    image400w: navidad400,
    image800w: navidad800,
    image1200w: navidad1200
  },
  {
    id: 'pies',
    name: 'Exfoliante para Pies',
    price: '$6.00',
    weight: '120g',
    ingredients: 'Carbón, leche, gránulos exfoliantes.',
    benefits: 'Elimina durezas y suaviza talones.',
    idealFor: 'Pies con resequedad o callitos.',
    category: 'natural',
    imagePlaceholderColor: 'bg-gray-600',
    image: piesImg,
    image400w: pies400,
    image800w: pies800,
    image1200w: pies1200
  },
];