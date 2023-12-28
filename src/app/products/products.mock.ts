export const productsList: TypeProduct[] = [
  { id: 1, name: 'Microcontrolador Arduino UNO', price: 50000, descrip: '' },
  { id: 2, name: 'Display 16x2', price: 20000, descrip: '' },
  { id: 3, name: 'Módulo I2C', price: 7000, descrip: '' },
  { id: 4, name: 'Celdas de carga', price: 10000, descrip: '' },
];

// Tipado de la lista de productos
export interface TypeProduct {
  id: number | string;
  name: string;
  price: number;
  descrip: string;
}
