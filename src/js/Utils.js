export const translateWeekDay = (weekDay) => {
    switch (parseInt(weekDay)) {
        case 0:
            return 'Domingo'
        case 1:
            return 'Segunda'
        case 2:
            return 'Terça'
        case 3:
            return 'Quarta'
        case 4:
            return 'Quinta'
        case 5:
            return 'Sexta'
        case 6:
            return 'Sábado'
    }
}

export const deliveries = () => {
  return [
    { id: 1, name: 'Entrega' },
    { id: 2, name: 'Retirada' }
  ]
}
