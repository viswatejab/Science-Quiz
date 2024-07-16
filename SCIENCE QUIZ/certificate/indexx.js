
const userName = document.getElementById("name");
const submitBtn = document.getElementById("submitBtn");
const { PDFDocument, rgb, degrees } = PDFLib;


submitBtn.addEventListener("click", () => {
    const val =userName.value;
    if (val.trim() !== "" && userName.checkValidity()) {
       
        generatePDF(val);
      } else {
        userName.reportValidity();
      }
});
const generatePDF = async (name) => {
    const existingPdfBytes = await fetch("./Quizcertificate.pdf").then((res) =>
      res.arrayBuffer()
    );

   
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.registerFontkit(fontkit);

    
  
  const fontBytes = await fetch("Sanchez-Regular.ttf").then((res) =>
  res.arrayBuffer()
);
 
  const SanChezFont  = await pdfDoc.embedFont(fontBytes);

   const pages = pdfDoc.getPages();
   const firstPage = pages[0];
 
 
   firstPage.drawText(name, {
     x: 510,
     y: 285,
     size: 40,
     font: SanChezFont ,
     color: rgb(0.2, 0.84, 0.67),
   });
 

  const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  saveAs(pdfDataUri,"newcertificate.pdf")
};