const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        let isPdf = false;
        if (file.mimetype === 'application/pdf') {
            isPdf = true;
        }

        // Generate a unique identifier
        // We use originalname without extension + timestamp
        let public_id = file.originalname.split('.')[0] + "_" + Date.now();

        // IMPORTANT: For 'raw' resource_type (PDFs), we MUST append the extension 
        // to the public_id manually, otherwise it downloads as a file without extension.
        if (isPdf) {
            public_id += ".pdf";
        }

        return {
            folder: 'dce_notices',
            resource_type: isPdf ? 'raw' : 'auto',
            public_id: public_id,
            // 'format' is often ignored for 'raw', so reliance on public_id is key
        };
    },
});

module.exports = { cloudinary, storage };
