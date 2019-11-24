export function BasicControls () {

}

BasicControls.prototype.run = function () {
  console.log('hola mundo')

  this.nuevaFuncion = () => {
    console.log('nueva funcion')
    this.stop()
  }
}
