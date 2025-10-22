// MotorPH Login System
(function() {
    'use strict';

    // Initialize the application
    window.__INIT__ = function() {
        initializeLogin();
        initializeTooltip();
        handleURLParameters();
        initializePayslipModal();
    };

    // Handle URL parameters for auto-filling credentials
    function handleURLParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        const empno = urlParams.get('empno');
        const username = urlParams.get('username');
        const password = urlParams.get('password');

        if (empno) {
            document.getElementById('empno').value = empno;
        }
        if (username) {
            document.getElementById('username').value = username;
        }
        if (password) {
            document.getElementById('password').value = password;
        }
    }

    // Initialize login functionality
    function initializeLogin() {
        const loginForm = document.getElementById('loginForm');
        const errorMessage = document.getElementById('errorMessage');

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const empno = document.getElementById('empno').value.trim();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            // Clear previous error
            errorMessage.style.display = 'none';
            errorMessage.textContent = '';

            // Validate inputs
            if (!empno || !username || !password) {
                showError('Please fill in all fields.');
                return;
            }

            // Check credentials
            const isValid = validateCredentials(empno, username, password);
            
            if (isValid) {
                // Redirect to appropriate dashboard
                redirectToDashboard(empno, username);
            } else {
                showError('Invalid credentials. Please check your employee number, username, and password.');
            }
        });
    }

    // Validate login credentials
    function validateCredentials(empno, username, password) {
        const credentials = {
            // Employee Dashboard
            '10001': { username: 'employee', password: 'password', role: 'employee' },
            '10002': { username: 'employee', password: 'password', role: 'employee' },
            '10003': { username: 'employee', password: 'password', role: 'employee' },
            
            // Managerial Dashboard
            '10006': { username: 'manager', password: 'password', role: 'manager' },
            '10007': { username: 'manager', password: 'password', role: 'manager' },
            
            // Payroll Dashboard
            '10111': { username: 'payroll', password: 'password', role: 'payroll' },
            '10112': { username: 'payroll', password: 'password', role: 'payroll' }
        };

        const userCreds = credentials[empno];
        if (userCreds && userCreds.username === username && userCreds.password === password) {
            return { valid: true, role: userCreds.role };
        }
        return false;
    }

    // Redirect to appropriate dashboard
    function redirectToDashboard(empno, username) {
        const validation = validateCredentials(empno, username, document.getElementById('password').value);
        
        if (validation && validation.valid) {
            let redirectUrl = '';
            
            switch (validation.role) {
                case 'employee':
                    redirectUrl = 'employee_dashboard.html';
                    break;
                case 'manager':
                    redirectUrl = 'manager_dashboard.html';
                    break;
                case 'payroll':
                    redirectUrl = 'payroll_dashboard.html';
                    break;
                default:
                    showError('Unknown user role.');
                    return;
            }

            // Add a small delay for better UX
            setTimeout(() => {
                window.location.href = redirectUrl;
            }, 500);
        }
    }

    // Show error message
    function showError(message) {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        
        // Hide error after 5 seconds
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }

    // Initialize tooltip functionality
    function initializeTooltip() {
        const tooltipTrigger = document.querySelector('.tooltip-trigger');
        const tooltipPanel = document.querySelector('.tooltip-panel');
        let isVisible = false;

        if (!tooltipTrigger || !tooltipPanel) return;

        // Show tooltip
        function showTooltip() {
            tooltipPanel.style.display = 'block';
            tooltipPanel.setAttribute('aria-hidden', 'false');
            isVisible = true;
            
            // Position tooltip with a small delay to ensure it's rendered
            setTimeout(() => {
                positionTooltip();
            }, 10);
        }

        // Hide tooltip
        function hideTooltip() {
            tooltipPanel.style.display = 'none';
            tooltipPanel.setAttribute('aria-hidden', 'true');
            isVisible = false;
        }

        // Position tooltip relative to trigger
        function positionTooltip() {
            const triggerRect = tooltipTrigger.getBoundingClientRect();
            
            // Set a fixed width to ensure consistent sizing
            tooltipPanel.style.width = '600px';
            tooltipPanel.style.maxWidth = '600px';
            tooltipPanel.style.minHeight = '200px';
            
            // Position above the trigger, centered horizontally
            tooltipPanel.style.position = 'fixed';
            tooltipPanel.style.left = (triggerRect.left + triggerRect.width / 2 - 300) + 'px'; // 300px is half the tooltip width
            tooltipPanel.style.top = (triggerRect.top - 220) + 'px'; // Position above the trigger
            tooltipPanel.style.zIndex = '1001';
            
            // Ensure tooltip doesn't go off-screen
            const panelRect = tooltipPanel.getBoundingClientRect();
            if (panelRect.left < 10) {
                tooltipPanel.style.left = '10px';
            }
            if (panelRect.right > window.innerWidth - 10) {
                tooltipPanel.style.left = (window.innerWidth - 600 - 10) + 'px';
            }
            if (panelRect.top < 10) {
                tooltipPanel.style.top = (triggerRect.bottom + 10) + 'px'; // Position below if no space above
            }
        }

        // Event listeners
        tooltipTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            if (isVisible) {
                hideTooltip();
            } else {
                showTooltip();
            }
        });

        tooltipTrigger.addEventListener('mouseenter', function() {
            showTooltip();
        });

        tooltipTrigger.addEventListener('mouseleave', function() {
            // Small delay to prevent flickering
            setTimeout(() => {
                if (!tooltipPanel.matches(':hover')) {
                    hideTooltip();
                }
            }, 100);
        });

        tooltipPanel.addEventListener('mouseenter', function() {
            showTooltip();
        });

        tooltipPanel.addEventListener('mouseleave', function() {
            hideTooltip();
        });

        // Hide tooltip when clicking outside
        document.addEventListener('click', function(e) {
            if (!tooltipTrigger.contains(e.target) && !tooltipPanel.contains(e.target)) {
                hideTooltip();
            }
        });

        // Hide tooltip on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isVisible) {
                hideTooltip();
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (isVisible) {
                positionTooltip();
            }
        });
    }

    // Auto-fill credentials when clicking on tooltip credentials
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'CODE') {
            const codeText = e.target.textContent;
            const fieldMap = {
                '10001': 'empno',
                '10006': 'empno',
                '10111': 'empno',
                'employee': 'username',
                'manager': 'username',
                'payroll': 'username',
                'password': 'password'
            };

            const fieldId = fieldMap[codeText];
            if (fieldId) {
                const field = document.getElementById(fieldId);
                if (field) {
                    field.value = codeText;
                    field.focus();
                }
            }
        }
    });

    // Payslip Modal Functions - Make globally available immediately
    window.downloadPayslip = function() {
        const modal = document.getElementById('payslipModal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    };

    window.closePayslipModal = function() {
        const modal = document.getElementById('payslipModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    function initializePayslipModal() {
        // Close modal when clicking outside
        const modal = document.getElementById('payslipModal');
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    window.closePayslipModal();
                }
            });
        }

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const modal = document.getElementById('payslipModal');
                if (modal && modal.style.display === 'flex') {
                    window.closePayslipModal();
                }
            }
        });
    }

    // Searchable Dropdown Functionality
    function createSearchableDropdown(containerId, options, placeholder = 'Select Employee') {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Create dropdown HTML
        container.innerHTML = `
            <div class="searchable-dropdown">
                <input type="text" class="searchable-dropdown-input" placeholder="${placeholder}">
                <svg class="searchable-dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="searchable-dropdown-list">
                    ${options.map(option => 
                        `<div class="searchable-dropdown-item" data-value="${option.value}" data-text="${option.text}">${option.text}</div>`
                    ).join('')}
                </div>
            </div>
        `;

        const dropdown = container.querySelector('.searchable-dropdown');
        const input = dropdown.querySelector('.searchable-dropdown-input');
        const list = dropdown.querySelector('.searchable-dropdown-list');
        const items = dropdown.querySelectorAll('.searchable-dropdown-item');

        let selectedValue = '';
        let selectedText = '';
        let highlightedIndex = -1;

        // Show/hide dropdown
        function toggleDropdown() {
            list.classList.toggle('show');
            if (list.classList.contains('show')) {
                input.focus();
                filterItems('');
            }
        }

        // Filter items based on search
        function filterItems(searchTerm) {
            const term = searchTerm.toLowerCase();
            let visibleCount = 0;
            
            items.forEach((item, index) => {
                const text = item.dataset.text.toLowerCase();
                if (text.includes(term)) {
                    item.style.display = 'block';
                    item.classList.remove('highlighted');
                    if (visibleCount === 0 && searchTerm) {
                        item.classList.add('highlighted');
                        highlightedIndex = index;
                    }
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // Select item
        function selectItem(item) {
            selectedValue = item.dataset.value;
            selectedText = item.dataset.text;
            input.value = selectedText;
            
            // Remove previous selection
            items.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
            
            list.classList.remove('show');
            
            // Trigger change event
            const event = new CustomEvent('change', {
                detail: { value: selectedValue, text: selectedText }
            });
            container.dispatchEvent(event);
        }

        // Event listeners
        input.addEventListener('click', toggleDropdown);
        input.addEventListener('focus', toggleDropdown);
        
        input.addEventListener('input', function(e) {
            const searchTerm = e.target.value;
            filterItems(searchTerm);
            list.classList.add('show');
        });

        input.addEventListener('keydown', function(e) {
            if (!list.classList.contains('show')) {
                if (e.key === 'Enter' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    toggleDropdown();
                }
                return;
            }

            const visibleItems = Array.from(items).filter(item => item.style.display !== 'none');
            
            switch(e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    highlightedIndex = Math.min(highlightedIndex + 1, visibleItems.length - 1);
                    visibleItems.forEach((item, index) => {
                        item.classList.toggle('highlighted', index === highlightedIndex);
                    });
                    break;
                    
                case 'ArrowUp':
                    e.preventDefault();
                    highlightedIndex = Math.max(highlightedIndex - 1, 0);
                    visibleItems.forEach((item, index) => {
                        item.classList.toggle('highlighted', index === highlightedIndex);
                    });
                    break;
                    
                case 'Enter':
                    e.preventDefault();
                    if (highlightedIndex >= 0 && visibleItems[highlightedIndex]) {
                        selectItem(visibleItems[highlightedIndex]);
                    }
                    break;
                    
                case 'Escape':
                    list.classList.remove('show');
                    input.blur();
                    break;
            }
        });

        items.forEach(item => {
            item.addEventListener('click', function() {
                selectItem(this);
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                list.classList.remove('show');
            }
        });

        // Return API for external access
        return {
            getValue: () => selectedValue,
            getText: () => selectedText,
            setValue: (value) => {
                const item = Array.from(items).find(i => i.dataset.value === value);
                if (item) {
                    selectItem(item);
                }
            },
            clear: () => {
                selectedValue = '';
                selectedText = '';
                input.value = '';
                items.forEach(i => i.classList.remove('selected'));
            }
        };
    }

    // Make function globally available
    window.createSearchableDropdown = createSearchableDropdown;

})();