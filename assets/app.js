// MotorPH HR System - Main JavaScript File

// Global variables
let currentUser = null;
let isLoggedIn = false;

// Searchable dropdown functionality
window.createSearchableDropdown = function(containerId, options, placeholder) {
    const container = document.getElementById(containerId);
    if (!container) return null;
    
    const dropdown = document.createElement('div');
    dropdown.className = 'searchable-dropdown';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'searchable-dropdown-input';
    input.placeholder = placeholder;
    input.autocomplete = 'off';
    
    // Add dropdown icon
    const dropdownIcon = document.createElement('div');
    dropdownIcon.className = 'searchable-dropdown-icon';
    dropdownIcon.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
    
    const list = document.createElement('ul');
    list.className = 'searchable-dropdown-list';
    list.style.display = 'none';
    
    let filteredOptions = [...options];
    let selectedValue = '';
    let iconClicked = false; // Flag to track icon clicks
    
    // Function to render options
    function renderOptions(optionsToRender) {
        list.innerHTML = '';
        optionsToRender.forEach(option => {
            const li = document.createElement('li');
            li.textContent = option.text;
            li.dataset.value = option.value;
            li.addEventListener('click', () => {
                input.value = option.text;
                selectedValue = option.value;
                list.style.display = 'none';
                
                // Trigger change event
                const event = new CustomEvent('change', {
                    detail: { value: option.value, text: option.text }
                });
                container.dispatchEvent(event);
            });
            list.appendChild(li);
        });
    }
    
    // Initial render
    renderOptions(options);
    
    // Handle input typing
    input.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        if (searchTerm === '') {
            filteredOptions = [...options];
        } else {
            filteredOptions = options.filter(option => 
                option.text.toLowerCase().includes(searchTerm)
            );
        }
        
        renderOptions(filteredOptions);
        list.style.display = filteredOptions.length > 0 ? 'block' : 'none';
    });
    
    // Handle focus
    input.addEventListener('focus', () => {
        // Only show dropdown if it's not already visible, there are options, and icon wasn't just clicked
        if (list.style.display === 'none' && filteredOptions.length > 0 && !iconClicked) {
            list.style.display = 'block';
        }
    });
    
    // Handle click
    input.addEventListener('click', (e) => {
        // Only toggle if icon wasn't just clicked
        if (!iconClicked) {
            list.style.display = list.style.display === 'none' ? 'block' : 'none';
        }
    });
    
    // Handle icon click
    dropdownIcon.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        iconClicked = true;
        list.style.display = list.style.display === 'none' ? 'block' : 'none';
        // Reset flag after a short delay
        setTimeout(() => { iconClicked = false; }, 100);
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            list.style.display = 'none';
        }
    });
    
    // Handle keyboard navigation
    input.addEventListener('keydown', (e) => {
        const visibleItems = list.querySelectorAll('li');
        const currentIndex = Array.from(visibleItems).findIndex(li => li.classList.contains('highlighted'));
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (currentIndex < visibleItems.length - 1) {
                    visibleItems.forEach(li => li.classList.remove('highlighted'));
                    visibleItems[currentIndex + 1].classList.add('highlighted');
                }
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (currentIndex > 0) {
                    visibleItems.forEach(li => li.classList.remove('highlighted'));
                    visibleItems[currentIndex - 1].classList.add('highlighted');
                }
                break;
            case 'Enter':
                e.preventDefault();
                if (currentIndex >= 0) {
                    visibleItems[currentIndex].click();
                }
                break;
            case 'Escape':
                list.style.display = 'none';
                break;
        }
    });
    
    dropdown.appendChild(input);
    dropdown.appendChild(dropdownIcon);
    dropdown.appendChild(list);
    container.appendChild(dropdown);
    
    return dropdown;
};

// Initialize the application
window.__INIT__ = function() {
    console.log('MotorPH HR System initialized');
    initializeTooltips();
    initializeLogin();
    initializeNavigation();
};

// Tooltip functionality
function initializeTooltips() {
    // Page tooltip (test credentials)
    const tooltipTrigger = document.querySelector('.tooltip-trigger');
    const tooltipPanel = document.querySelector('.tooltip-panel');
    
    console.log('Tooltip elements found:', { tooltipTrigger, tooltipPanel });
    
    if (tooltipTrigger && tooltipPanel) {
        tooltipTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Tooltip clicked');
            
            const isVisible = tooltipPanel.classList.contains('show');
            
            // Close all tooltips first
            document.querySelectorAll('.tooltip-panel.show').forEach(panel => {
                panel.classList.remove('show');
            });
            
            // Toggle current tooltip
            if (!isVisible) {
                tooltipPanel.classList.add('show');
                console.log('Tooltip shown');
            } else {
                console.log('Tooltip hidden');
            }
        });
        
        // Close tooltip when clicking outside
        document.addEventListener('click', function(e) {
            if (!tooltipTrigger.contains(e.target) && !tooltipPanel.contains(e.target)) {
                tooltipPanel.classList.remove('show');
            }
        });
    } else {
        console.log('Tooltip elements not found');
    }
    
    // Info tooltips (data-tooltip attributes)
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.addEventListener('mouseenter', function() {
            // Tooltip is handled by CSS :hover pseudo-class
        });
    });
}

// Login functionality
function initializeLogin() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const empno = document.getElementById('empno').value.trim();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            
            // Clear previous errors
            hideError();
            
            // Validate inputs
            if (!empno || !username || !password) {
                showError('Please fill in all fields');
                return;
            }
            
            // Check credentials
            const credentials = {
                '10001': { username: 'employee', password: 'password', role: 'CEO', name: 'Manuel Garcia III' },
                '10006': { username: 'manager', password: 'password', role: 'HR Manager', name: 'Andrea Mae Villanueva' },
                '10011': { username: 'payroll', password: 'password', role: 'Payroll Manager', name: 'Anthony Salcedo' }
            };
            
            const userCreds = credentials[empno];
            
            if (userCreds && userCreds.username === username && userCreds.password === password) {
                // Login successful
                currentUser = {
                    empno: empno,
                    username: username,
                    role: userCreds.role,
                    name: userCreds.name
                };
                isLoggedIn = true;
                
                // Store user session
                sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
                sessionStorage.setItem('isLoggedIn', 'true');
                
                // Redirect based on role
                redirectToDashboard(userCreds.role);
            } else {
                showError('Invalid credentials. Please check your employee number, username, and password.');
            }
        });
    }
}

// Navigation functionality
function initializeNavigation() {
    // Handle navigation clicks
    document.addEventListener('click', function(e) {
        if (e.target.matches('.nav-item') || e.target.closest('.nav-item')) {
            const navItem = e.target.closest('.nav-item');
            const href = navItem.getAttribute('href');
            
            if (href && href !== '#') {
                e.preventDefault();
                navigateToPage(href);
            }
        }
        
        // Handle logout
        if (e.target.matches('.logout-btn') || e.target.closest('.logout-btn')) {
            e.preventDefault();
            logout();
        }
    });
}

// Utility functions
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'flex';
    }
}

function hideError() {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

function redirectToDashboard(role) {
    let redirectUrl = '';
    
    switch (role) {
        case 'employee':
        case 'CEO':
            redirectUrl = 'employee_dashboard.html';
            break;
        case 'manager':
        case 'HR Manager':
            redirectUrl = 'manager_dashboard.html';
            break;
        case 'payroll':
        case 'Payroll Manager':
            redirectUrl = 'payroll_dashboard.html';
            break;
        default:
            redirectUrl = 'employee_dashboard.html';
    }
    
    // Add a small delay for better UX
    setTimeout(() => {
        window.location.href = redirectUrl;
    }, 500);
}

function navigateToPage(url) {
    if (url && url !== '#') {
        window.location.href = url;
    }
}

function logout() {
    // Clear session
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('isLoggedIn');
    
    // Reset global variables
    currentUser = null;
    isLoggedIn = false;
    
    // Redirect to login
    window.location.href = 'index.html';
}

// Check if user is logged in on page load
function checkAuthStatus() {
    const storedUser = sessionStorage.getItem('currentUser');
    const storedLoginStatus = sessionStorage.getItem('isLoggedIn');
    
    if (storedUser && storedLoginStatus === 'true') {
        currentUser = JSON.parse(storedUser);
        isLoggedIn = true;
        
        // Update UI with user info
        updateUserInterface();
    } else {
        // Redirect to login if not authenticated
        if (window.location.pathname !== '/index.html' && !window.location.pathname.endsWith('index.html')) {
            window.location.href = 'index.html';
        }
    }
}

function updateUserInterface() {
    if (currentUser) {
        // Update employee name in header only (not in tables)
        const headerEmployeeName = document.querySelector('.dashboard-header .employee-name');
        if (headerEmployeeName) {
            headerEmployeeName.textContent = currentUser.name;
        }
        
        // Update employee number badges in header only
        const headerEmpnoBadges = document.querySelectorAll('.dashboard-header .badge-empno');
        headerEmpnoBadges.forEach(badge => {
            badge.textContent = currentUser.empno;
        });
        
        // Update role badges in header only
        const headerRoleBadges = document.querySelectorAll('.dashboard-header .badge-role');
        headerRoleBadges.forEach(badge => {
            badge.textContent = currentUser.role;
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set entry point
    window.__ENTRY__ = window.__ENTRY__ || 'main';
    
    // Initialize based on entry point
    if (window.__ENTRY__ === 'login') {
        // Login page - initialize tooltips and login functionality
        console.log('Login page loaded');
        initializeTooltips();
        initializeLogin();
    } else {
        // Dashboard pages - check authentication
        checkAuthStatus();
    }
    
    // Initialize the app
    if (window.__INIT__) {
        window.__INIT__();
    }
});

// Export functions for global access
window.showError = showError;
window.hideError = hideError;
window.logout = logout;
window.navigateToPage = navigateToPage;