export const orderOne = [
  {
    name: 'Footprints',
    variations: [
      { name: '24D x 32W', quantity: 2 },
      { name: '27D x 36W', quantity: 2 },
      { name: '30D x 40W', quantity: 0 }
    ],
    fieldType: 'quantity'
  },
  {
    name: 'Heights',
    variations: [
      { name: '10mm', quantity: 1 },
      { name: '12mm', quantity: 0 },
      { name: '14mm', quantity: 0 },
      { name: '16mm', quantity: 0 },
      { name: '18mm', quantity: 0 },
      { name: '20mm', quantity: 1 }
    ],
    fieldType: 'quantity'
  },
  {
    name: 'Lordoses',
    variations: [
      { name: '8mm', quantity: 0 },
      { name: '14mm', quantity: 7 },
      { name: '20mm', quantity: 0 },
      { name: '25mm', quantity: 0 }
    ],
    fieldType: 'quantity'
  },
  {
    name: 'Screw Type',
    selectedValue: 'ac',
    variations: [
      { name: 'Self Tapping', value: 'st' },
      { name: 'Self Drilling', value: 'sd' },
      { name: 'Acute', value: 'ac' }
    ],
    fieldType: 'radio'
  },
  {
    name: 'Ø5.0 Diameter Screws',
    variations: [
      { name: '20mm', quantity: 3 },
      { name: '25mm', quantity: 0 },
      { name: '30mm', quantity: 0 },
      { name: '35mm', quantity: 0 }
    ],
    fieldType: 'quantity'
  },
  {
    name: 'Ø5.5 Diameter Screws',
    variations: [
      { name: '20mm', quantity: 0 },
      { name: '25mm', quantity: 0 },
      { name: '30mm', quantity: 6 },
      { name: '35mm', quantity: 0 }
    ],
    fieldType: 'quantity'
  }
]