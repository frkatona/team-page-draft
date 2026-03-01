import { useEffect, useRef, useState } from 'react';
import * as $3Dmol from '3dmol/build/3Dmol.js';

const MoleculeViewer = ({ url, title }) => {
    const viewerRef = useRef(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!viewerRef.current || !url) return;

        let viewer = null;
        let isMounted = true;

        const initViewer = async () => {
            try {
                // Initialize the 3Dmol viewer
                viewer = $3Dmol.createViewer(viewerRef.current, {
                    backgroundColor: 'white',
                    id: `viewer-${Math.random().toString(36).substr(2, 9)}`
                });

                // Fetch the molecule data
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Failed to load molecule: ${response.statusText}`);
                }
                const data = await response.text();

                if (!isMounted) return;

                // Load and style the molecule
                viewer.addModel(data, 'sdf');
                viewer.setStyle({}, { stick: { radius: 0.15 }, sphere: { radius: 0.4 } });
                viewer.zoomTo();
                viewer.render();

                // Add spinning animation
                viewer.spin('y', 0.5);

            } catch (err) {
                console.error("Error loading 3D molecule:", err);
                if (isMounted) {
                    setError(err.message);
                }
            }
        };

        initViewer();

        return () => {
            isMounted = false;
            // Clean up the viewer on unmount
            if (viewer) {
                viewer.clear();
            }
        };
    }, [url]);

    if (error) {
        return (
            <div className="molecule-error" style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#fee2e2', color: '#991b1b', borderRadius: '8px' }}>
                <p>Failed to load 3D model: {error}</p>
            </div>
        );
    }

    return (
        <div style={{ width: '100%', height: '100%', minHeight: '300px', backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden' }}
            ref={viewerRef}
            title={title || "Interactive 3D Molecule"}
            className="molecule-viewer-container"
        />
    );
};

export default MoleculeViewer;
