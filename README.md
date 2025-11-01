# MotorPH Employee Management System

A comprehensive web-based system for HR, Payroll, and all employees to manage payroll and all sorts of related HR operations. Built with HTML, CSS, and JavaScript, this system provides complete functionality for employee attendance tracking, payroll management, leave requests, tax deductions, and administrative tasks with advanced file upload capabilities and secure HR authorization workflows.

## 🚀 Live Demo

**Access the live application:** [View Live Demo](https://lrsrivera.github.io/motorph-system/)

## 📋 Features

### Employee Dashboard
- **Attendance Tracking**: View personal attendance records and statistics
- **Request Management**: Submit and track both leave and overtime requests with file attachments
- **File Upload System**: Upload supporting documents (JPG, PNG, PDF, DOC, DOCX) for requests
- **Attachment Management**: View, remove, and manage uploaded files before submission
- **Payslip Access**: View and download personal payslips
- **Profile Management**: Update personal information
- **Prototype Notice**: One-time session dialog for system awareness

### Manager Dashboard
- **Team Management**: View team attendance and performance with searchable dropdowns
- **Request Approval**: Approve/reject employee leave and overtime requests with attachment viewing
- **Separated Request Views**: Dedicated tabs for leave and overtime requests
- **File Attachment Review**: View uploaded documents in request details modal
- **Team Analytics**: Monitor team statistics and KPIs
- **Searchable Employee Selection**: Enhanced dropdown with search functionality for better UX
- **Team Calendar**: View approved team leaves and overtime for the month with filtering capabilities
- **Team Calendar Integration**: Access calendar from approval/rejection dialogs to check schedule conflicts
- **Advanced Filtering**: Filter calendar by request type (All, Leave, Overtime) and employee

### Payroll Dashboard
- **Payroll Processing**: Generate and manage employee payslips with searchable employee selection
- **Tax Management**: Handle tax deductions and calculations
- **Employee Records**: Manage comprehensive employee data with HR authorization
- **Payroll History**: Track and view historical payroll data
- **Bulk Operations**: Process multiple employees simultaneously
- **HR Security**: Secure employee update/delete operations with credential verification
- **Employee Archiving**: Archive employees instead of deleting (prototype - no data persistence)
- **Archived Employees Management**: View and manage archived employee records in Activity Logs
- **Employee Reactivation**: Reactivate archived employees with HR authorization (demo functionality)

## 🔐 Test Credentials

### Employee Access
- **Employee No:** `10001`
- **Username:** `employee`
- **Password:** `password`

### Manager Access
- **Employee No:** `10006`
- **Username:** `manager`
- **Password:** `password`

### Payroll Access
- **Employee No:** `10111`
- **Username:** `payroll`
- **Password:** `password`

### HR Authorization (for Employee Management)
- **Username:** `hr_admin`
- **Password:** `password`

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with modern design principles
- **Icons**: SVG icons for consistent UI

## 📁 Project Structure

```
├── index.html                 # Login page
├── employee_dashboard.html    # Employee main dashboard
├── my_payslip.html           # Employee payslip view
├── my_requests.html          # Leave and overtime request management
├── about_me.html             # Employee profile
├── manager_dashboard.html     # Manager dashboard
├── manager_payslip.html      # Manager payslip view
├── manager_requests.html     # Manager request approval
├── manager_about.html         # Manager profile
├── payroll_dashboard.html     # Payroll management
├── manage_tax_deductions.html # Tax management
├── team_attendance.html       # Team attendance view
├── team_requests.html         # Team request management (separated leave/overtime)
├── employee_details.html      # Employee detail management
├── employee_payroll_history.html # Payroll history
├── activity_logs.html         # System activity logs
└── assets/
    ├── styles.css            # Main stylesheet
    ├── app.js               # JavaScript functionality
    ├── images/              # Logo and sample images
    └── data/                # Sample employee data
```

## 🎯 Key Functionalities

### HR Management System
- **Employee Records**: Complete employee profile management
- **Attendance Tracking**: Real-time attendance monitoring and analytics
- **Request Management**: Comprehensive leave and overtime request system
- **Team Management**: Manager tools for team oversight and analytics
- **Employee Archiving**: Archive employees with status tracking (Resigned, Terminated, End of Contract)
- **Archive Management**: Comprehensive archives modal with search, filter, and reactivation capabilities
- **Activity Logs Enhancement**: Access archived employees directly from Activity Logs page

### Payroll Management System
- **Automated Payroll**: Generate payslips for individual or bulk employees
- **Tax Calculations**: Handle all tax deductions and calculations
- **Payroll History**: Complete historical payroll data tracking
- **Download & Export**: PDF payslip generation and data export

### Employee Self-Service
- **Personal Dashboard**: Individual employee portal with KPIs
- **Request Management**: Submit and track both leave and overtime requests
- **Payslip Access**: View and download personal payslips
- **Profile Updates**: Manage personal information and documents

### Administrative Features
- **Role-Based Access**: Secure login with different permission levels
- **Activity Logging**: Complete audit trail of all system activities
- **Search & Filter**: Advanced search capabilities across all modules
- **Bulk Operations**: Process multiple employees simultaneously

## 📝 Request Management Features

### Employee Request System
- **Dynamic Forms**: Switch between Leave and Overtime request forms
- **Leave Requests**: Sick leave, vacation, bereavement, maternity/paternity, unpaid leave
- **Overtime Requests**: Regular overtime, weekend overtime with time tracking
- **File Attachments**: Upload supporting documents (JPG, PNG, PDF, DOC, DOCX)
- **Attachment Management**: Preview, remove, and manage files before submission
- **Unified Tracking**: Single table showing both request types with color-coded badges
- **Status Management**: Track Pending, Approved, and Rejected requests
- **Form Reset**: Automatic form clearing after successful submission

### Manager Approval System
- **Separated Views**: Dedicated tabs for Leave and Overtime requests
- **File Attachment Review**: View uploaded documents in detailed request modals
- **Proper Schema Handling**: Different data structures for date ranges vs time ranges
- **Approval Workflow**: Two-level approval (Immediate Supervisor + Department Head)
- **Request History**: Complete audit trail of all processed requests
- **Bulk Operations**: Process multiple requests efficiently
- **Team Calendar Integration**: View team calendar before approving/rejecting requests
- **Enhanced Approval Dialogs**: Improved UI with "View Team Calendar First" option
- **Streamlined Actions**: Removed Cancel buttons, optimized button layout and spacing

### UI/UX Improvements
- **Request Type Badges**: Blue badges for Leave, Yellow badges for Overtime
- **Custom Modals**: Professional confirmation dialogs instead of browser alerts
- **Responsive Tables**: Proper column alignment and mobile-friendly design
- **Form Validation**: Real-time validation for dates, times, and required fields
- **File Upload Feedback**: Visual file list with remove functionality
- **Tooltip Positioning**: Side-positioned tooltips to prevent cutoff issues

## 🎨 Design Features

- **Modern UI**: Clean, professional interface with MotorPH branding
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Interactive Elements**: Smooth animations and transitions
- **Accessibility**: Screen reader friendly
- **Color Coding**: Status indicators and visual feedback
- **Searchable Dropdowns**: Enhanced user experience with combo box functionality
- **File Upload Interface**: Intuitive drag-and-drop style file selection
- **Modal Dialogs**: Professional confirmation and detail viewing interfaces
- **Session Management**: One-time prototype notices and persistent user sessions

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/lrsrivera/motorph-system.git
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance

3. **Use test credentials**
   - Login with any of the provided test accounts
   - Explore different user roles and functionalities

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🔧 Customization

The system is built with modularity in mind:
- Easy to modify CSS variables for theming
- JavaScript functions are well-documented and globally accessible
- HTML structure is semantic and accessible
- Modular file upload system with configurable file types
- Flexible searchable dropdown implementation
- Session storage management for user preferences

## 📊 Sample Data

The system includes comprehensive sample data **for user testing and demonstration purposes only**:

**Note**: All data is simulated and used solely for testing the system's functionality. No real employee information is stored or processed.

## 🔒 Security Features

- **HR Authorization**: Secure employee management with credential verification
- **Session Management**: Proper session handling for user authentication
- **File Upload Security**: Restricted file types and size validation
- **Input Validation**: Comprehensive form validation and sanitization
- **Role-Based Access**: Different permission levels for Employee, Manager, and Payroll roles

## 🤝 Contributing

This is a demonstration project. For production use:
1. Implement proper backend integration with database connectivity
2. Enhance security measures with proper authentication
3. Add comprehensive testing and error handling
4. Implement proper file storage and management
5. Add audit logging and compliance features

## 📄 License

This project is for educational and demonstration purposes.

## 📞 Support

For questions or issues, please refer to the documentation or create an issue in the repository.

## 🆕 Recent Updates

### Team Calendar Feature
- **Visual Calendar View**: Month-grid display of approved team leaves and overtime
- **Smart Filtering**: Filter by request type (All, Leave, Overtime) and employee
- **Color-Coded Events**: Green for leave requests, blue for overtime requests
- **Integration**: Access calendar from approval/rejection dialogs to check conflicts
- **Searchable Employee Filter**: Enhanced dropdown for quick employee selection
- **Responsive Design**: Mobile-friendly calendar with overflow handling

### Archive Management System
- **Employee Archiving**: Archive employees instead of permanent deletion (prototype)
- **Archive Status Tracking**: Track Resigned, Terminated, and End of Contract statuses
- **Archives Modal**: Comprehensive interface in Activity Logs for viewing archived employees
- **Search & Filter**: Search by name, ID, position, department with status filtering
- **Employee Reactivation**: Reactivate archived employees with HR authorization (demo)
- **Color-Coded Badges**: Orange for Resigned, Red for Terminated, Gray for End of Contract

### Enhanced Approval System
- **Team Calendar Integration**: View team calendar before approving/rejecting requests
- **Streamlined UI**: Removed redundant Cancel buttons, optimized button layout
- **Improved Modals**: Better spacing, alignment, and visual hierarchy in approval dialogs
- **Consistent Styling**: Green approve buttons matching table action buttons

### File Upload System
- **Multi-file Support**: Upload multiple documents per request
- **File Management**: Preview, remove, and manage attachments before submission
- **Supported Formats**: JPG, PNG, PDF, DOC, DOCX with size validation
- **Visual Feedback**: File list display with individual remove buttons

### Enhanced User Experience
- **Searchable Dropdowns**: Combo box functionality for better employee selection
- **HR Authorization**: Secure employee management with credential verification
- **Session Management**: One-time prototype notices and persistent sessions
- **Improved Tooltips**: Side-positioned tooltips to prevent UI cutoff issues
- **Enhanced Modal Buttons**: Larger clickable areas, better hover states, improved accessibility
- **Improved Search Bars**: Better icon positioning and padding for readability

### Security Improvements
- **HR Credentials**: Username/password verification for sensitive operations
- **Form Validation**: Enhanced validation for phone numbers and file uploads
- **Input Sanitization**: Proper handling of user inputs and file data

---

**Note**: This is a frontend prototype with advanced file handling and security features. For production deployment, integrate with appropriate backend services and databases.
