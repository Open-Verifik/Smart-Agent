const fs = require('fs');
const path = require('path');

const publicEnPath = path.join(__dirname, 'public/i18n/features-en.json');
const translationData = JSON.parse(fs.readFileSync(publicEnPath, 'utf8'));

const genericEndpoints = [];

for (const key in translationData.appFeatures) {
    const feature = translationData.appFeatures[key];
    if (
        feature.title.includes('Vehicle Verification') ||
        feature.title.includes('Data Verification Service') ||
        feature.description.includes('General data verification') ||
        feature.description.includes('Standard vehicle verification') ||
        feature.description.includes('Standard identity verification') ||
        feature.title.includes('Identity Verification')
    ) {
        genericEndpoints.push({
            code: key,
            title: feature.title,
            description: feature.description,
        });
    }
}

fs.writeFileSync(
    path.join(__dirname, 'global-generic.json'),
    JSON.stringify(genericEndpoints, null, 2)
);
