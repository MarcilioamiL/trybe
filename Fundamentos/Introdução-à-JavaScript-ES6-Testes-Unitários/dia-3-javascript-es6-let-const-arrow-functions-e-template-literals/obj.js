// const order = {
//     name: 'Rafael Andrade',
//     phoneNumber: '11-98763-1416',
//     address: {
//       street: 'Rua das Flores',
//       number: '389',
//       apartment: '701',
//     },
//     order: {
//       pizza: {
//         marguerita: {
//           amount: 1,
//           price: 25,
//         },
//         pepperoni: {
//           amount: 1,
//           price: 20,
//         }
//       },
//       drinks: {
//         coke: {
//           type: 'Coca-Cola Zero',
//           price: 10,
//           amount: 1,
//         }
//       },
//       delivery: {
//         deliveryPerson: 'Ana Silveira',
//         price: 5,
//       }
//     },
//     payment: {
//       total: 60,
//     },
//   };
  
//   const customerInfo = (order) => {
//     const pessoa = order.order.delivery.deliveryPerson;
//     const cliente = order['name'];
//     const fone = order['phoneNumber'];
//     const rua = order.address.street;
//     const numero = order.address.number;
//     const ap = order.address.apartment;
//     console.log(`"Olá ${pessoa}, entrega para: ${cliente}, Telefone: ${fone},
//     R. ${rua}, N°: ${numero}, AP: ${ap}"`)
//   }
  
//   customerInfo(order);
  
//   const orderModifier = (order) => {
//     const newName = order.name = 'Liuz Silva';
//     const pizzaEcolhida = Object.keys(order.order.pizza);
//     const bebida = order.order.drinks.coke.type;
//     const newValor = order.payment = '50';
//     console.log(`"Olá ${newName}, o total do seu pedido de ${pizzaEcolhida[0]}, ${pizzaEcolhida[1]} e ${bebida} é R$${newValor}"`)
    
//   }
  
//   orderModifier(order);