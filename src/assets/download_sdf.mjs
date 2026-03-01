import fs from 'fs';
import https from 'https';

const cids = [60823, 2794, 5288826, 123591, 2244, 2519];

function tryDownload(index) {
    if (index >= cids.length) {
        console.log("Failed all");
        process.exit(1);
    }
    const cid = cids[index];
    console.log("Trying 3D SDF for CID: " + cid);
    const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/record/SDF/?record_type=3d`;
    https.get(url, (res) => {
        if (res.statusCode === 200) {
            console.log("Success with CID " + cid);
            const file = fs.createWriteStream('src/assets/large_molecule.sdf');
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log("Download complete.");
                process.exit(0);
            });
        } else {
            console.log("Failed: " + res.statusCode);
            tryDownload(index + 1);
        }
    }).on('error', (err) => {
        console.log("Error: " + err.message);
        tryDownload(index + 1);
    });
}
tryDownload(0);
