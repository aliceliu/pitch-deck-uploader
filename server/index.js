const path = require('path');
const fs = require('fs');

const express = require('express'); 
const cors = require('cors');
const multer  = require('multer');
const PDFImage = require('pdf-image').PDFImage;
const pdfPageCounter = require('pdf-page-counter');

const app = express(); 
const port = process.env.PORT || 5000;
const uploadDestination = path.join(__dirname, 'uploads');
const upload = multer({ 
	storage: multer.diskStorage({
	  destination: uploadDestination,
	  filename: function (req, file, cb) {
	    cb(null, file.originalname)
	  }
	}) 
});

app.listen(port, () => console.log(`Listening on port ${port}`)); 

app.use(cors());
app.use(express.static(uploadDestination))

app.post('/upload', upload.single('file'), async function(req, res, next) { 
	try {
		const imagePaths = await convertFileToImages(req.file.path);	
		res.status(200).send({'filePath' : req.file.filename, 'imagePaths' : imagePaths});
	} catch (err) {
		next(err);
	}
}); 

const convertFileToImages = async (filepath) => {
	const dataBuffer = fs.readFileSync(filepath);
	const pdfInfo = await pdfPageCounter(dataBuffer);
	const listOfPages = [...Array(pdfInfo.numpages).keys()];

	const pdfImageConverter = new PDFImage(filepath);
	return await Promise.all(listOfPages.map(async page => {
		let path = await pdfImageConverter.convertPage(page);
		url = 'http://localhost:' + port + path.substring(uploadDestination.length);
		return url;
	}));
}







