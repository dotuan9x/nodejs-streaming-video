const get = async params => {
    try {
        const path = require('path');
        const fs = require('fs');
        const assetPath = path.resolve('asset/videoplayback.mp4');
        const stat = fs.statSync(assetPath);
        const fileSize = stat.size;

        const {
            req, res
        } = params;

        const range = req.headers.range;

        if (range) {
            const parts = range.replace(/bytes=/, '').split('-');
            const start = parseInt(parts[0], 10);
            const end = parts[1] && parts[1] < fileSize ? parseInt(parts[1], 10) : fileSize - 1;

            const chunkSize = (end - start) + 1;
            const file = fs.createReadStream(assetPath, {start, end});
            const head = {
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunkSize,
                'Content-Type': 'video/mp4'
            };

            res.writeHead(206, head);
            return file.pipe(res);
        } else {
            const head = {
                'Accepts-Ranges': 'bytes',
                'Content-Length': fileSize,
                'Content-Type': 'video/mp4'
            };

            res.writeHead(200, head);

            return fs.createReadStream(assetPath).pipe(res);
        }
    } catch (error) {
        throw error;
    }
};

module.exports = {
    get
};
