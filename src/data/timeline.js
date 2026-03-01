import papersData from '../../papers.json';

const paperImageModules = import.meta.glob('../assets/paperImages/*', {
    eager: true,
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

const piGroupByName = {
    Audri: 'Theory',
    Adri: 'Theory',
    Priya: 'Theory',
    Aiichiro: 'Theory',
    Alex: 'Synthesis',
    Mike: 'Synthesis',
    Rob: 'Synthesis',
    Ben: 'Processing',
    JP: 'Processing'
};

const resolvePaperImage = (imageLink) => {
    if (!imageLink) {
        return null;
    }

    const normalizedPath = imageLink.replace(/\\/g, '/');
    const fileName = normalizedPath.split('/').pop();
    const moduleKey = `../assets/paperImages/${fileName}`;

    return paperImageModules[moduleKey] || null;
};

const buildDescription = (paper) => {
    const contributors = paper.PIs?.length
        ? `Contributors: ${paper.PIs.join(', ')}.`
        : '';
    const students = paper.Students?.length
        ? ` Students: ${paper.Students.join(', ')}.`
        : '';

    return `${contributors}${students}`.trim();
};

export const timelineData = Object.entries(papersData).map(([title, paper], index) => {
    const metadata = timelineMetadata[title] || {};

    return {
        id: metadata.id || `p${index + 1}`,
        date: paper.publicationDate?.[0] || 'TBD',
        title,
        paper: title,
        journal: paper.Journal || '',
        description: buildDescription(paper),
        pis: (paper.PIs || []).map((name) => ({
            name,
            group: piGroupByName[name] || 'Theory'
        })),
        link: paper.Link || '#',
        image: resolvePaperImage(paper.ImageLink)
    };
});
