const fs = require('fs')
const PDFParser = require('pdf2json')

const pdfParser = new PDFParser()

pdfParser.on('pdfParser_dataError', err => console.error(err.parserError))
pdfParser.on('pdfParser_dataReady', data => {
  console.log(`pages: ${data.formImage.Pages.length}`)
  console.log(JSON.stringify(data, null, '\t'))  
})

pdfParser.loadPDF('./sample.pdf')
