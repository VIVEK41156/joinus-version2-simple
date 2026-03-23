/**
 * v4 Info - Join Us Page Interactive Logic
 * 
 * Architecture Features:
 * - Module Pattern (IIFE) for zero global namespace pollution.
 * - Centralized state management for filters and pagination.
 * - Event delegation and Intersection Observers for optimal run-time performance.
 */

const App = (() => {
    // --- 1. DATA PAYLOAD (Simulated Database) ---
    const jobsData = [
        {
            id: 1,
            title: 'Frontend Developer',
            openings: [
                { location: 'Bangalore', count: 2 },
                { location: 'Hyderabad', count: 1 }
            ],
            type: 'Full-time',
            exp: '2-4 Years',
            shortDesc: 'We are looking for a skilled Frontend Developer to build highly responsive, performant web applications using modern JavaScript frameworks.',
            fullDesc: '<div class="v4_info_joinus_v2-job-details-header"><h2 class="v4_info_joinus_v2-job-title">Frontend Developer</h2><div class="v4_info_joinus_v2-job-meta"><span class="v4_info_joinus_v2-job-meta-item">Bangalore, Hyderabad</span> • <span class="v4_info_joinus_v2-job-meta-item">2-4 Years Exp</span></div></div><h4>About the Role</h4><p>You will be responsible for creating pixel-perfect, highly scalable interfaces. You will work closely with our UX team to translate designs into code.</p><h4>Requirements</h4><ul><li>Proficiency in HTML, CSS, JavaScript (ES6+).</li><li>Experience with React, Vue, or Angular.</li><li>Strong understanding of responsive design.</li></ul>'
        },
        {
            id: 2,
            title: 'Backend Developer',
            openings: [
                { location: 'Bangalore', count: 3 }
            ],
            type: 'Full-time',
            exp: '3-5 Years',
            shortDesc: 'Seeking a strong Backend Developer to architect and build robust APIs, manage database schemas, and ensure high application performance.',
            fullDesc: '<div class="v4_info_joinus_v2-job-details-header"><h2 class="v4_info_joinus_v2-job-title">Backend Developer</h2><div class="v4_info_joinus_v2-job-meta"><span class="v4_info_joinus_v2-job-meta-item">Bangalore</span> • <span class="v4_info_joinus_v2-job-meta-item">3-5 Years Exp</span></div></div><h4>About the Role</h4><p>You will design, build, and maintain our core functional logic and database infrastructure, ensuring maximum availability and speed.</p><h4>Requirements</h4><ul><li>Strong experience in Node.js, Python, or Go.</li><li>Knowledge of SQL and NoSQL databases.</li><li>Experience with RESTful API design.</li></ul>'
        },
        {
            id: 3,
            title: 'UI/UX Designer',
            openings: [
                { location: 'Hyderabad', count: 2 },
                { location: 'Bangalore', count: 1 }
            ],
            type: 'Full-time',
            exp: '1-3 Years',
            shortDesc: 'Join our creative team to design intuitive, beautiful user experiences. You will lead the design process from wireframes to high-fidelity prototypes.',
            fullDesc: '<div class="v4_info_joinus_v2-job-details-header"><h2 class="v4_info_joinus_v2-job-title">UI/UX Designer</h2><div class="v4_info_joinus_v2-job-meta"><span class="v4_info_joinus_v2-job-meta-item">Bangalore, Hyderabad</span> • <span class="v4_info_joinus_v2-job-meta-item">1-3 Years Exp</span></div></div><h4>About the Role</h4><p>We need a visionary designer to craft stunning interfaces and seamless user journeys. You will collaborate heavily with engineering and product.</p><h4>Requirements</h4><ul><li>Expertise in Figma or Adobe XD.</li><li>Strong portfolio showcasing web and mobile applications.</li><li>Understanding of user-centered design principles.</li></ul>'
        },
        {
            id: 4,
            title: 'Product Manager',
            openings: [
                { location: 'Hyderabad', count: 1 }
            ],
            type: 'Full-time',
            exp: '4+ Years',
            shortDesc: 'Seeking a strategic Product Manager to guide the lifecycle of our core SaaS product from ideation through launch and beyond.',
            fullDesc: '<div class="v4_info_joinus_v2-job-details-header"><h2 class="v4_info_joinus_v2-job-title">Product Manager</h2><div class="v4_info_joinus_v2-job-meta"><span class="v4_info_joinus_v2-job-meta-item">Hyderabad</span> • <span class="v4_info_joinus_v2-job-meta-item">4+ Years Exp</span></div></div><h4>About the Role</h4><p>You will own the product roadmap, working tightly with engineering and marketing to deliver features our customers love.</p><h4>Requirements</h4><ul><li>Proven track record of managing technical software products.</li><li>Strong analytical and problem-solving skills.</li><li>Excellent communication across teams.</li></ul>'
        },
        {
            id: 5,
            title: 'DevOps Engineer',
            openings: [
                { location: 'Bangalore', count: 2 }
            ],
            type: 'Full-time',
            exp: '3-6 Years',
            shortDesc: 'Looking for a DevOps Engineer to automate and streamline our operations and processes. Build and maintain tools for deployment.',
            fullDesc: '<div class="v4_info_joinus_v2-job-details-header"><h2 class="v4_info_joinus_v2-job-title">DevOps Engineer</h2><div class="v4_info_joinus_v2-job-meta"><span class="v4_info_joinus_v2-job-meta-item">Bangalore</span> • <span class="v4_info_joinus_v2-job-meta-item">3-6 Years Exp</span></div></div><h4>About the Role</h4><p>Ensure maximum uptime and minimal deployment friction for our microservices architecture.</p><h4>Requirements</h4><ul><li>Deep knowledge of AWS/GCP and Kubernetes.</li><li>Strong scripting skills (Bash, Python).</li><li>Experience with CI/CD pipelines (Jenkins, GitHub Actions).</li></ul>'
        },
        {
            id: 6,
            title: 'Full Stack Developer',
            openings: [
                { location: 'Bangalore', count: 4 },
                { location: 'Hyderabad', count: 2 }
            ],
            type: 'Full-time',
            exp: '3-6 Years',
            shortDesc: 'Join us as a Full Stack Developer to build end-to-end features spanning React frontend to Node backend microservices.',
            fullDesc: '<div class="v4_info_joinus_v2-job-details-header"><h2 class="v4_info_joinus_v2-job-title">Full Stack Developer</h2><div class="v4_info_joinus_v2-job-meta"><span class="v4_info_joinus_v2-job-meta-item">Bangalore, Hyderabad</span> • <span class="v4_info_joinus_v2-job-meta-item">3-6 Years Exp</span></div></div><h4>About the Role</h4><p>You will be driving development across the full stack.</p><h4>Requirements</h4><ul><li>Next.js, Node.js, PostgreSQL.</li></ul>'
        },
        {
            id: 7,
            title: 'Marketing Specialist',
            openings: [
                { location: 'Hyderabad', count: 1 }
            ],
            type: 'Full-time',
            exp: '2-5 Years',
            shortDesc: 'Help us grow our brand presence through dynamic marketing campaigns and SEO optimization strategies.',
            fullDesc: '<div class="v4_info_joinus_v2-job-details-header"><h2 class="v4_info_joinus_v2-job-title">Marketing Specialist</h2><div class="v4_info_joinus_v2-job-meta"><span class="v4_info_joinus_v2-job-meta-item">Hyderabad</span> • <span class="v4_info_joinus_v2-job-meta-item">2-5 Years Exp</span></div></div><h4>About the Role</h4><p>You will execute marketing campaigns.</p><h4>Requirements</h4><ul><li>SEO, SEM, Copywriting.</li></ul>'
        }
    ];

    // --- 2. GLOBAL STATE ---
    const State = {
        itemsPerPage: window.innerWidth <= 768 ? 3 : 6,
        currentPage: 1,
        location: 'all',
        searchQuery: '',
        filteredJobs: [...jobsData]
    };

    // --- 3. DOM ELEMENTS CACHE ---
    const DOM = {
        jobsGrid: document.getElementById('jobs-grid'),
        pagination: document.getElementById('pagination'),
        form: document.getElementById('apply-form'),
        dropArea: document.getElementById('file-drop-area'),
        fileInput: document.getElementById('resume'),
        dropText: document.getElementById('file-drop-text'),
        locationTabs: document.querySelectorAll('.v4_info_joinus_v2-tab'),
        searchInput: document.getElementById('job-search'),
        positionSelect: document.getElementById('position')
    };

    /**
     * Initializes the Application lifecycle
     */
    const init = () => {
        populatePositionsSelect();
        applyFilters(); 
        setupEventListeners();
        setupFormValidation();
        setupDragAndDrop();
        setupScrollObserver();
    };

    /**
     * Populates the Application Form Select dropdown based on actual active jobs.
     */
    const populatePositionsSelect = () => {
        if (!DOM.positionSelect) return;
        DOM.positionSelect.innerHTML = '<option value="" disabled selected>Select a position</option>';
        
        jobsData.forEach(job => {
            const option = document.createElement('option');
            option.value = job.title;
            option.textContent = job.title;
            DOM.positionSelect.appendChild(option);
        });
    };

    /**
     * Filters the job payload based on current state parameters (Search + Location tab).
     */
    const applyFilters = () => {
        State.filteredJobs = jobsData.filter(job => {
            // Check Location
            const matchesLocation = State.location === 'all' || 
                job.openings.some(o => o.location.toLowerCase() === State.location.toLowerCase());

            // Check Search Text
            const query = State.searchQuery.toLowerCase().trim();
            const matchesSearch = query === '' || 
                job.title.toLowerCase().includes(query) || 
                job.shortDesc.toLowerCase().includes(query);

            return matchesLocation && matchesSearch;
        });

        State.currentPage = 1; // Always reset to page 1 to prevent orphaned views
        renderJobGrid();
    };

    /**
     * Dynamically generates the HTML markup for the visible jobs based on State.
     */
    const renderJobGrid = () => {
        if (!DOM.jobsGrid) return;
        DOM.jobsGrid.innerHTML = '';
        
        // Handle empty states gracefully
        if (State.filteredJobs.length === 0) {
            DOM.jobsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--v4-joinus-text-muted);">No open positions found matching your criteria.</p>';
            renderPagination();
            return;
        }

        // Calculate limits for Current Page slice
        const startIndex = (State.currentPage - 1) * State.itemsPerPage;
        const endIndex = Math.min(startIndex + State.itemsPerPage, State.filteredJobs.length);
        const currentBatch = State.filteredJobs.slice(startIndex, endIndex);

        // Render each card natively
        currentBatch.forEach(job => {
            const card = document.createElement('div');
            card.className = 'v4_info_joinus_v2-job-card';
            
            // Format Location tags dynamically
            const locationString = job.openings.map(o => o.location).join(', ');
            
            // Determine Contextual Openings Count text
            let openingsText = '';
            if (State.location !== 'all') {
                const locMatch = job.openings.find(o => o.location.toLowerCase() === State.location.toLowerCase());
                if (locMatch) openingsText = `${locMatch.count} Opening${locMatch.count > 1 ? 's' : ''} in ${locMatch.location}`;
            } else {
                const totalOpenings = job.openings.reduce((sum, o) => sum + o.count, 0);
                openingsText = `${totalOpenings} Total Opening${totalOpenings > 1 ? 's' : ''}`;
            }
            
            // Construct template explicitly for readability
            card.innerHTML = `
                <div class="v4_info_joinus_v2-job-header">
                    <h3 class="v4_info_joinus_v2-job-title">${job.title}</h3>
                    <div class="v4_info_joinus_v2-job-meta">
                        <span class="v4_info_joinus_v2-job-meta-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            ${locationString}
                        </span>
                        <span class="v4_info_joinus_v2-job-meta-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                            ${job.type}
                        </span>
                        <span class="v4_info_joinus_v2-job-meta-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            ${job.exp}
                        </span>
                    </div>
                    <div class="v4_info_joinus_v2-job-openings-badge">${openingsText}</div>
                </div>
                <p class="v4_info_joinus_v2-job-desc">${job.shortDesc}</p>
                <div class="v4_info_joinus_v2-job-actions">
                    <button class="v4_info_joinus_v2-btn v4_info_joinus_v2-btn-outline" onclick="App.openDetailsModal(${job.id})">Job Details</button>
                    <button class="v4_info_joinus_v2-btn v4_info_joinus_v2-btn-primary" onclick="App.openApplyModal('${job.title}')">Apply</button>
                </div>
            `;
            DOM.jobsGrid.appendChild(card);
        });

        renderPagination();
    };

    /**
     * Evaluates total page count and renders modular pagination blocks.
     */
    const renderPagination = () => {
        if (!DOM.pagination) return;
        DOM.pagination.innerHTML = '';
        
        const totalPages = Math.ceil(State.filteredJobs.length / State.itemsPerPage);
        if (totalPages <= 1) return; // Hide pagination if content fits perfectly on 1 page

        // Helper func to mount buttons
        const mountButton = (content, isDisabled, onClickCb, customClass = '') => {
            const btn = document.createElement('button');
            btn.className = `v4_info_joinus_v2-page-btn ${customClass}`;
            btn.innerHTML = content;
            btn.disabled = isDisabled;
            btn.onclick = onClickCb;
            DOM.pagination.appendChild(btn);
        };

        // Render [Prev] Button
        mountButton(
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>',
            State.currentPage === 1,
            () => { State.currentPage--; renderJobGrid(); }
        );

        // Render Numbered Page Links
        for (let i = 1; i <= totalPages; i++) {
            mountButton(
                i,
                false,
                () => { State.currentPage = i; renderJobGrid(); },
                State.currentPage === i ? 'active' : ''
            );
        }

        // Render [Next] Button
        mountButton(
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
            State.currentPage === totalPages,
            () => { State.currentPage++; renderJobGrid(); }
        );
    };

    /**
     * Centralized function handling core UI event bindings 
     */
    const setupEventListeners = () => {
        // Handle Location Tab Clicks cleanly
        if (DOM.locationTabs) {
            DOM.locationTabs.forEach(tab => {
                tab.addEventListener('click', (e) => {
                    DOM.locationTabs.forEach(t => t.classList.remove('active'));
                    e.currentTarget.classList.add('active');
                    State.location = e.currentTarget.getAttribute('data-location');
                    applyFilters();
                });
            });
        }

        // Handle Live Search logic
        if (DOM.searchInput) {
            DOM.searchInput.addEventListener('input', (e) => {
                State.searchQuery = e.target.value;
                applyFilters();
            });
        }

        // Handle Responsive scaling event (re-computes mobile layout limits automatically)
        window.addEventListener('resize', () => {
            const newLimits = window.innerWidth <= 768 ? 3 : 6;
            if (newLimits !== State.itemsPerPage) {
                State.itemsPerPage = newLimits;
                State.currentPage = 1; // prevent out-of-bounds error
                renderJobGrid();
            }
        });
    };

    /**
     * Initializes the IntersectionObserver for performance-heavy animations
     * Features: 94% statistics counting loop triggered only upon viewport intersection
     */
    const setupScrollObserver = () => {
        const statNumber = document.querySelector('.v4_info_joinus_v2-stat-number');
        if (!statNumber) return;

        const animateStat = () => {
            const target = +statNumber.getAttribute('data-target');
            const count = +statNumber.innerText;
            const inc = target / 30; // Control speed
            
            if (count < target) {
                statNumber.innerText = Math.ceil(count + inc);
                setTimeout(animateStat, 30);
            } else {
                statNumber.innerText = target;
            }
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateStat();
                observer.disconnect(); // Fire only once then kill listener to optimize performance
            }
        }, { threshold: 0.5 });
        
        observer.observe(document.querySelector('.v4_info_joinus_v2-growth-card'));
    };

    /**
     * Bind form validation handling using generic regex architectures to protect payload reliability.
     */
    const setupFormValidation = () => {
        if (!DOM.form) return;

        const validators = {
            firstName: { regex: /^[a-zA-Z\s]{2,50}$/, error: 'Valid first name is required' },
            lastName: { regex: /^[a-zA-Z\s]{2,50}$/, error: 'Valid last name is required' },
            email: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, error: 'Please enter a valid email address' },
            phone: { regex: /^$|^[\+\d\s\-\(\)]{7,20}$/, error: 'Please enter a valid phone form' }
        };

        const validateField = (input) => {
            const id = input.id;
            const value = input.value.trim();
            const group = input.closest('.v4_info_joinus_v2-form-group');
            const errorLabel = group.querySelector('.v4_info_joinus_v2-error-msg');
            
            let isValid = true;
            let errMsg = '';

            if (input.required && !value) {
                isValid = false;
                errMsg = 'This field is required';
            } else if (validators[id] && value) {
                if (!validators[id].regex.test(value)) {
                    isValid = false;
                    errMsg = validators[id].error;
                }
            }

            group.classList.toggle('has-error', !isValid);
            if(errorLabel) errorLabel.textContent = errMsg;

            return isValid;
        };

        // Attach live blurring validation feedback
        DOM.form.querySelectorAll('input, select').forEach(input => {
            ['input', 'blur'].forEach(evt => input.addEventListener(evt, () => validateField(input)));
        });

        // Submit listener payload compilation
        DOM.form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isFormValid = true;
            
            DOM.form.querySelectorAll('input, select').forEach(input => {
                if (!validateField(input)) isFormValid = false;
            });

            if (isFormValid) {
                const submitBtn = DOM.form.querySelector('.v4_info_joinus_v2-submit-btn');
                const lockText = submitBtn.innerHTML;
                submitBtn.innerHTML = 'Submitting...';
                submitBtn.disabled = true;

                // Mock API Dispatch pipeline
                setTimeout(() => {
                    alert('Application submitted successfully!');
                    closeModal('modal-apply');
                    submitBtn.innerHTML = lockText;
                    submitBtn.disabled = false;
                }, 1500);
            }
        });
    };

    /**
     * Orchestrates the complex File Upload Drag & Drop simulation context
     */
    const setupDragAndDrop = () => {
        if (!DOM.dropArea || !DOM.fileInput) return;

        const prevent = e => { e.preventDefault(); e.stopPropagation(); };

        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => {
            DOM.dropArea.addEventListener(evt, prevent, false);
        });

        ['dragenter', 'dragover'].forEach(evt => {
            DOM.dropArea.addEventListener(evt, () => DOM.dropArea.classList.add('dragover'), false);
        });

        ['dragleave', 'drop'].forEach(evt => {
            DOM.dropArea.addEventListener(evt, () => DOM.dropArea.classList.remove('dragover'), false);
        });

        DOM.dropArea.addEventListener('drop', (e) => {
            const dt = e.dataTransfer;
            if (dt.files?.length) {
                DOM.fileInput.files = dt.files;
                handleFileUpload(dt.files[0]);
            }
        }, false);

        DOM.dropArea.addEventListener('click', () => DOM.fileInput.click());
        DOM.fileInput.addEventListener('change', function() {
            if (this.files?.length) handleFileUpload(this.files[0]);
        });
    };

    /**
     * File processing logic + Simulator Auto-fill Logic
     */
    const handleFileUpload = (file) => {
        if (!file) return;

        const validExts = ['pdf', 'doc', 'docx'];
        const ext = file.name.split('.').pop().toLowerCase();
        
        if (!validExts.includes(ext)) return alert('Invalid format. Please upload PDF, DOC, or DOCX.');
        if (file.size > 5 * 1024 * 1024) return alert('File size exceeds 5MB limit.');

        DOM.dropText.textContent = `Parsing resume parameters...`;

        // Simulate Machine Parsing delays
        setTimeout(() => {
            const mock = { firstName: 'Alex', lastName: 'Johnson', email: 'alex.j@example.com', phone: '+1 (555) 123-4567' };
            Object.keys(mock).forEach(id => {
                const field = document.getElementById(id);
                if (field) {
                    field.value = mock[id];
                    field.dispatchEvent(new Event('input')); // Dispatches event to clear validation errors organically
                }
            });
            DOM.dropText.textContent = `Attached: ${file.name} (Auto-filled fields)`;
        }, 800);
    };

    // --- Modal Management Globals ---
    const toggleModalData = (modalId, isOpen) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.setAttribute('aria-hidden', !isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : ''; // Restricts body scrolling when modal active
        }
    };

    const openDetailsModal = (jobId) => {
        const job = jobsData.find(j => j.id === jobId);
        if (job) {
            document.getElementById('job-details-content').innerHTML = job.fullDesc;
            document.getElementById('details-apply-btn').onclick = () => {
                toggleModalData('modal-details', false);
                setTimeout(() => openApplyModal(job.title), 300); // Async transition chaining
            };
            toggleModalData('modal-details', true);
        }
    };

    const openApplyModal = (positionTitle = '') => {
        DOM.form.reset(); // Erase legacy inputs
        document.querySelectorAll('.v4_info_joinus_v2-form-group.has-error').forEach(el => el.classList.remove('has-error'));
        document.querySelectorAll('.v4_info_joinus_v2-error-msg').forEach(el => el.textContent = '');
        DOM.dropText.innerHTML = 'Drop your resume here or <span class="v4_info_joinus_v2-file-browse">click to browse</span>';

        if (positionTitle && DOM.positionSelect) {
            const opts = Array.from(DOM.positionSelect.options);
            const bindIndex = opts.findIndex(opt => opt.value === positionTitle);
            if (bindIndex !== -1) DOM.positionSelect.selectedIndex = bindIndex;
        }
        toggleModalData('modal-apply', true);
    };

    const closeModal = (modalId) => toggleModalData(modalId, false);

    // Contextual API Returns for HTML accessibility securely bounding the internal modules
    return {
        init,
        openDetailsModal,
        openApplyModal,
        closeModal
    };
})();

// DOM Loading Bootstrapping
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', App.init);
} else {
    App.init();
}
