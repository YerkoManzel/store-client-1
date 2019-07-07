// import {Item} from './item';
//
// export const ITEMS: Item[] = [
//   {
//     id: 0,
//     featured: true,
//     name: 'Tractor Kubota 10.5 Hp',
//     image: '/assets/images/tractorkubota.jpg',
//     category: 'machinery',
//     label: 'tractor',
//     price: 4500,
//     description: 'Tractor útil para arado en superficies regulares sin pendientes pronunciadas.' +
//       ' Modelo JB11XA, Con Rotocultor, Diesel, 4x4, 10,5 HP. Año 2015',
//     comments: [
//       {
//         rating: 5,
//         comment: 'Imagina todo lo que puedes hacer con este tractor y su arado!',
//         author: 'Leo Messi',
//         date: '2012-10-16T17:57:28.556094Z'
//       },
//       {
//         rating: 4,
//         comment: 'Me dio mucho confort, desearia que mi suegro lo compre!',
//         author: 'Tania Barrancos',
//         date: '2014-09-05T17:57:28.556094Z'
//       },
//       {
//         rating: 3,
//         comment: 'Usalo, solamente usalo y veras que no hay comparacion con otros!',
//         author: 'Mario Rodriguez',
//         date: '2015-02-13T17:57:28.556094Z'
//       },
//       {
//         rating: 4,
//         comment: 'Lo ultimo, modelo de lujo!',
//         author: 'Damian Cardozo',
//         date: '2013-12-02T17:57:28.556094Z'
//       },
//       {
//         rating: 2,
//         comment: 'Simplemente es muy lindo!',
//         author: 'Gustavo Lopez',
//         date: '2011-12-02T17:57:28.556094Z'
//       }
//     ]
//   },
//   {
//     id: 1,
//     featured: false,
//     name: 'Tractor kubota con pala 20Hp',
//     image: '/assets/images/tractorkubota-pala.jpg',
//     category: 'machinery',
//     label: 'tractor',
//     price: 10.500,
//     description: 'Tractor útil para arado en superficies con pendientes pronunciadas, para situaciones de alto esfuerzo. ' +
//       'Modelo L1-20DT, Con Rotocultor, Diesel 4x4, 20 HP, Con Pala.'
//     ,
//     comments: [
//       {
//         rating: 5,
//         comment: 'Imagina todo lo que puedes hacer con este poderoso tractor y su pala frontal!',
//         author: 'Gabriel Perez',
//         date: '2012-10-16T17:57:28.556094Z'
//       },
//       {
//         rating: 4,
//         comment: 'Me facilito el trabajo, desearia que mi hermano lo compre!',
//         author: 'Javier Hidalgo',
//         date: '2014-09-05T17:57:28.556094Z'
//       },
//       {
//         rating: 3,
//         comment: 'Maravilloso, multifuncion usalo y veras que no hay trabajo que no se pueda realizar!',
//         author: 'Tito Rodriguez',
//         date: '2015-02-13T17:57:28.556094Z'
//       },
//       {
//         rating: 4,
//         comment: 'Fenomenal, modelo unico!',
//         author: 'Bruno Fernandez',
//         date: '2013-12-02T17:57:28.556094Z'
//       },
//       {
//         rating: 5,
//         comment: 'Simplemente es muy lindo!',
//         author: 'Gustavo Lopez',
//         date: '2011-12-02T17:57:28.556094Z'
//       }
//     ]
//
//   },
//   {
//     id: 2,
//     featured: false,
//     name: 'Motocultor yanmar 250',
//     image: '/assets/images/motocultor.jpg',
//     category: 'machinery',
//     label: 'motocultor',
//     price: 2500,
//     description: 'Motocultor útil para arado en superficies de dificil acceso, con espacios reducidos, ' +
//       'para situaciones de alto esfuerzo. Arado De Mano Modelo YC80, Diesel.'
//     ,
//     comments: [
//       {
//         rating: 5,
//         comment: 'Imagina todos los lugares estrechos que puedes acceder con este motocultor!',
//         author: 'Miguel Acuña',
//         date: '2012-10-16T17:57:28.556094Z'
//       },
//       {
//         rating: 5,
//         comment: 'Me asombro su facil acceso a lugares sin caminos, desearia adicionarle una carreta!',
//         author: 'Franco Duran',
//         date: '2014-09-05T17:57:28.556094Z'
//       },
//       {
//         rating: 4,
//         comment: 'Muy economico, veras lo economico que resulta y lo maravilloso que funciona!',
//         author: 'Edwin Apaza',
//         date: '2015-02-13T17:57:28.556094Z'
//       },
//       {
//         rating: 4,
//         comment: 'Bonito, liviano y facil de maniobrar!',
//         author: 'Damian Cardozo',
//         date: '2013-12-02T17:57:28.556094Z'
//       },
//       {
//         rating: 2,
//         comment: 'Demora en terrenos muy extensos!',
//         author: 'Ramon Lopez',
//         date: '2011-12-02T17:57:28.556094Z'
//       }
//     ]
//   },
//   {
//     id: 3,
//     featured: false,
//     name: 'Montacarga',
//     image: '/assets/images/montacarga.jpg',
//     category: 'machinery',
//     label: '',
//     price: 15.999,
//     description: 'Hechos pensados en la industria donde la exigencia del equipo es frecuente. Komatsu BOBLE, ALTURA ELEVANTE 3,0 MTS'
//     ,
//     comments: [
//       {
//         rating: 5,
//         comment: 'Imagina todo lo que puedes mover con este montacarga!',
//         author: 'Fredy Tamayo',
//         date: '2012-10-16T17:57:28.556094Z'
//       },
//       {
//         rating: 4,
//         comment: 'Levanta cosas super pesadas, la potencia es real!',
//         author: 'Hugo Muñoz',
//         date: '2014-09-05T17:57:28.556094Z'
//       },
//       {
//         rating: 3,
//         comment: 'Si manipulas cosas pequeñas puede no ser lo apropiado!',
//         author: 'Rene Jaldin',
//         date: '2015-02-13T17:57:28.556094Z'
//       },
//       {
//         rating: 4,
//         comment: 'Lo ultimo, modelo de lujo!',
//         author: 'Damian Cardozo',
//         date: '2013-12-02T17:57:28.556094Z'
//       },
//       {
//         rating: 5,
//         comment: 'No te arrepentiras, veras todo el tiempo que te ahorra!',
//         author: 'Gustavo Lopez',
//         date: '2011-12-02T17:57:28.556094Z'
//       }
//     ]
//   }
// ];
