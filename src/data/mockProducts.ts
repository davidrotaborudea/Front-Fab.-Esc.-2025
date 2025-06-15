import { Product } from "@/models/product";

export let mockProducts: Product[] = [
  { id: 1, name: 'Croquetas para perro extra grande', price: 45.99, stock: 120, provider: 'Purina', threshold: 10 },
  { id: 2, name: 'Arenero para gato', price: 30.00, stock: 15, provider: 'PetClean', threshold: 10 },
  { id: 3, name: 'Juguete de hule', price: 12.50, stock: 75, provider: 'DogPlay', threshold: 10 },
  { id: 4, name: 'Collar con placa', price: 18.00, stock: 60, provider: 'MascotasPlus', threshold: 10},
  { id: 5, name: 'Rascador para gato', price: 55.00, stock: 10, provider: 'GatoFeliz', threshold: 10 },
  { id: 6, name: 'Transportadora pequeña', price: 70.25, stock: 25, provider: 'PetViajes', threshold: 10 },
  { id: 7, name: 'Shampoo para perro', price: 22.30, stock: 40, provider: 'PetCare', threshold: 10 },
  { id: 8, name: 'Alimento húmedo gato', price: 3.99, stock: 200, provider: 'Whiskas', threshold: 10 },
  { id: 9, name: 'Correa retráctil', price: 25.00, stock: 50, provider: 'CanLine', threshold: 10 },
  { id: 10, name: 'Pelota con sonido', price: 9.99, stock: 90, provider: 'FunPet', threshold: 10},
];


export function addProduct(product: Product ){

   mockProducts = [...mockProducts, product];
}