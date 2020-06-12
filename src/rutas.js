const productos =[
    {
      id:10,
      nombre:"Chaqueta flores clara",
      imagen:"chaqueta-clara.jpg",
      valor:"$90.000"
    },
    
    
    {
      id:1,
      nombre:"Chaqueta Modelo 1",
      imagen:"chaquetafondo1.jpg",
      valor:"$50.000"
    },
    
  
    {
      id:2,
      nombre:"Chaqueta Modelo 2",
      imagen:"chaquetafondo2.jpg",
      valor:"$55.000"
    },
  
  
    {
      id:3,
      nombre:"Chaqueta Modelo 3",
      imagen:"chaquetafondo3.jpg",
      valor:"$60.000"
    },
    
  
    {
      id:4,
      nombre:"Chaqueta Modelo 4",
      imagen:"chaquetafondo4.jpg",
      valor:"$65.000"
    },
    
  
    {
      id:5,
      nombre:"Chaqueta Modelo 5",
      imagen:"chaquetafondo5.jpg",
      valor:"$70.000"
    },
    
  
    {
      id:6,
      nombre:"Chaqueta Modelo 6",
      imagen:"chaquetafondo6.jpg",
      valor:"$75.000"
    }
  ];
  
function confirmacion(id){
    let productoSeleccionado = productos.find(function(producto) { return producto.id == id });
    localStorage.setItem('producto', JSON.stringify(productoSeleccionado));
    window.location = "confirmacion.html";
  }

  function cargaInicial(){
    var producto = localStorage.getItem('producto');
    producto = JSON.parse(producto);
    document.getElementById("nombre").innerText = producto.nombre
    document.getElementById("valor").innerText = producto.valor
    document.getElementById("imagen").src = "imagenes/"+producto.imagen
  }
  