const pagesData = require('../data/pages.json');

exports.getPageContent = (req, res) => {
    const { slug } = req.params;
    // Handle nested slugs by joining parameters if caught by wildcard, 
    // but simpler here: we expect the frontend to pass the full path or we use query param.
    // Actually easier: use a query param ?path=/about/history or post body.
    // Or mapping: /api/content/:section/:subsection? 

    // Let's use a query param 'path' for simplicity and flexibility.
    const path = req.query.path;

    if (!path) {
        return res.status(400).json({ error: 'Path is required' });
    }

    // Remove leading slash for matching
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    const page = pagesData.find(p => p.slug === cleanPath);

    if (page) {
        res.json(page);
    } else {
        res.status(404).json({ title: 'Page Not Found', content: '<p>The requested page could not be found.</p>' });
    }
};
