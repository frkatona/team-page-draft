import papersData from '../../papers.json';
import { piData } from './pis';

const paperImageModules = import.meta.glob('../assets/paperImages/*', {
    eager: true,
    import: 'default'
});

const sdfModules = import.meta.glob('../assets/*.sdf', {
    eager: true,
    query: '?url',
    import: 'default'
});

const timelineMetadata = {
    'Photochemistry and Thermal Chemistry in Polymeric Ceramic Precursors': {
        id: 'p1'
    },
    'ReaxFF Parameter Set for Boron Clusters and Icosahedral Boron Crystals: Comparison with Density Functional Theory and Machine-Learning Potentials': {
        id: 'p2'
    },
    'Atomistic-Scale Simulations of the High-Temperature Chemistry of Si/C/O/H-Based Polymers and Their Conversion to Si/C Solid Materials': {
        id: 'p3'
    }
};

const normalizeName = (name) => (
    String(name || '')
        .toLowerCase()
        .replace(/^prof\.?\s+/, '')
        .replace(/[.,]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
);

const piGroupByNormalizedName = piData.reduce((acc, pi) => {
    const fullName = normalizeName(pi.name);
    const parts = fullName.split(' ').filter(Boolean);
    const firstName = parts[0] || '';
    const lastName = parts[parts.length - 1] || '';

    if (fullName) acc[fullName] = pi.group;
    if (firstName) acc[firstName] = pi.group;
    if (firstName && lastName) acc[`${firstName} ${lastName}`] = pi.group;
    return acc;
}, {});

const piAliasToNormalizedName = {
    audri: 'adri van duin',
    'audri van duin': 'adri van duin',
    adri: 'adri van duin',
    'adri van duin': 'adri van duin',
    alex: 'alexander radosevich',
    'alex radosevich': 'alexander radosevich',
    robert: 'rob hickey',
    'robert hickey': 'rob hickey',
    rob: 'rob hickey',
    ben: 'ben lear',
    jp: 'jp maria'
};

const normalizePiForLookup = (name) => {
    const normalized = normalizeName(name);
    return piAliasToNormalizedName[normalized] || normalized;
};

const parsePiNames = (rawPiList) => {
    const names = [];
    const seen = new Set();

    (rawPiList || [])
        .flatMap((entry) => String(entry || '').split(','))
        .map((name) => name.trim())
        .filter(Boolean)
        .forEach((name) => {
            const key = normalizeName(name);
            if (!seen.has(key)) {
                seen.add(key);
                names.push(name);
            }
        });

    return names;
};

const getPiGroup = (name) => {
    const normalized = normalizePiForLookup(name);
    return piGroupByNormalizedName[normalized] || 'Theory';
};

const parseDateTextToSortValue = (rawDate) => {
    const input = String(rawDate || '').trim();
    if (!input) return Number.POSITIVE_INFINITY;

    const isoMatch = input.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (isoMatch) {
        const [, year, month, day] = isoMatch;
        return Date.UTC(Number(year), Number(month) - 1, Number(day));
    }

    const yearOnlyMatch = input.match(/^(\d{4})$/);
    if (yearOnlyMatch) {
        return Date.UTC(Number(yearOnlyMatch[1]), 0, 1);
    }

    const parsed = Date.parse(input);
    if (!Number.isNaN(parsed)) {
        const date = new Date(parsed);
        return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    }

    return Number.POSITIVE_INFINITY;
};

const getPublicationDateInfo = (paper) => {
    const rawDate = Array.isArray(paper.publicationDate)
        ? paper.publicationDate.map((part) => String(part || '').trim()).filter(Boolean).join(' ')
        : paper.publicationDate;
    const dateText = rawDate ? String(rawDate).trim() : 'TBD';

    return {
        dateText: dateText || 'TBD',
        sortDate: parseDateTextToSortValue(dateText)
    };
};

const resolvePaperImage = (imageLink) => {
    if (!imageLink) {
        return null;
    }

    if (imageLink.startsWith('http://') || imageLink.startsWith('https://')) {
        return imageLink;
    }

    const normalizedPath = imageLink.replace(/\\/g, '/');
    const fileName = normalizedPath.split('/').pop();

    if (fileName.endsWith('.sdf')) {
        const moduleKey = `../assets/${fileName}`;
        return sdfModules[moduleKey] || null;
    } else {
        const moduleKey = `../assets/paperImages/${fileName}`;
        return paperImageModules[moduleKey] || null;
    }
};

const buildDescription = (paper) => {
    const contributorNames = parsePiNames(paper.PIs);
    const contributors = contributorNames.length
        ? `Contributors: ${contributorNames.join(', ')}.`
        : '';
    const studentNames = (paper.Students || [])
        .map((name) => String(name || '').trim())
        .filter(Boolean);
    const students = studentNames.length
        ? ` Students: ${studentNames.join(', ')}.`
        : '';

    return `${contributors}${students}`.trim();
};

export const timelineData = Object.entries(papersData)
    .map(([title, paper], index) => {
        const metadata = timelineMetadata[title] || {};
        const publicationDate = getPublicationDateInfo(paper);
        const parsedPiNames = parsePiNames(paper.PIs);

        return {
            id: metadata.id || `p${index + 1}`,
            date: publicationDate.dateText,
            sortDate: publicationDate.sortDate,
            title,
            paper: title,
            journal: paper.Journal || '',
            description: buildDescription(paper),
            pis: parsedPiNames.map((name) => ({
                name,
                group: getPiGroup(name)
            })),
            link: paper.Link || '#',
            image: resolvePaperImage(paper.ImageLink)
        };
    })
    .sort((a, b) => {
        if (a.sortDate !== b.sortDate) {
            return a.sortDate - b.sortDate;
        }
        return a.title.localeCompare(b.title);
    });
