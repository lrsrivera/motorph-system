# MotorPH Employee Management System

A comprehensive web-based system for HR, Payroll, and all employees to manage payroll and all sorts of related HR operations. Built with HTML, CSS, and JavaScript, this system provides complete functionality for employee attendance tracking, payroll management, leave requests, tax deductions, and administrative tasks with advanced file upload capabilities and secure HR authorization workflows.

## 🚀 Live Demo

**Access the live application:** [View Live Demo](https://lrsrivera.github.io/motorph-system/)

## 🎨 UI Design Decisions

### Color Palette
- **Primary Navy Blue (`#1e2a5e`)**: Based on MotorPH logo branding - used for primary buttons, headers, and key UI elements
- **Success Green (`#10b981`)**: Used for approved statuses, leave requests, and positive actions
- **Warning Amber (`#F59E0B`)**: Used for archive actions, resigned status, and warning states
- **Danger Red (`#ef4444`)**: Used for rejected statuses, terminated employees, and critical actions
- **Neutral Gray (`#6b7280`)**: Used for inactive states, end of contract status, and secondary text
- **Background Colors**: Light gray (`#f9fafb`) for panels, white for cards and modals

### Design Elements
- **Rounded Edges**: Consistent `border-radius: 8px` for cards, buttons, and modals; `6px` for badges and smaller elements
- **Subtle Shadows**: Soft box shadows (`0 2px 8px rgba(0,0,0,0.1)`) for depth and elevation
- **Spacing System**: Consistent padding (16px, 24px) and margins throughout for visual hierarchy
- **Typography**: Inter font family for body text, Poppins for headings - clean and professional
- **Icons**: SVG icons with consistent stroke width (2px) and 20px standard size
- **Transitions**: Smooth 0.2s ease transitions for hover states and interactions
- **Responsive Breakpoints**: Mobile-first design with 768px breakpoint for tablet/mobile optimization

### Interaction Patterns
- **Hover States**: Light background color change (`#f3f4f6`) with subtle transform on interactive elements
- **Focus States**: Navy blue outline (`2px solid var(--navy)`) for accessibility
- **Modal Patterns**: Backdrop blur, centered positioning, ESC key and overlay click to close
- **Button Hierarchy**: Primary (blue), Secondary (outlined), Success (green), Warning (amber), Danger (red)
- **Status Badges**: Color-coded pills with soft background colors matching status type

## 📋 Features by Dashboard

## 👤 Employee Dashboard

### My Attendance
- **Personal Attendance View**: View your own attendance records and statistics
- **Date Range Selection**: Filter attendance by specific date ranges
- **Attendance Statistics**: View attendance KPIs and metrics
- **Visual Indicators**: Color-coded attendance status display
- **Prototype Notice**: One-time session dialog for system awareness

### My Payslip
- **Personal Payslip Access**: View and download your own payslips
- **Historical Payslips**: Access past payslip records
- **Download Functionality**: Export payslips for record keeping
- **Payroll Details**: View comprehensive breakdown of earnings and deductions

### My Requests
- **Leave Requests**: Submit leave requests (Sick leave, Vacation, Bereavement, Maternity/Paternity, Unpaid leave)
- **Overtime Requests**: Submit overtime requests (Regular overtime, Weekend overtime with time tracking)
- **Dynamic Form Switching**: Seamlessly switch between Leave and Overtime request forms
- **File Attachments**: Upload supporting documents (JPG, PNG, PDF, DOC, DOCX)
- **Attachment Management**: Preview, remove, and manage files before submission
- **Multi-file Support**: Upload multiple documents per request
- **File Upload Feedback**: Visual file list with individual remove buttons
- **Unified Tracking**: Single table showing both request types with color-coded badges
- **Status Management**: Track Pending, Approved, and Rejected requests with visual indicators
- **Form Validation**: Real-time validation for dates, times, and required fields
- **Form Reset**: Automatic form clearing after successful submission
- **Request Details View**: View complete request information including attachments

### About Me
- **Profile Management**: Update personal information and contact details
- **Profile View**: Display comprehensive employee profile
- **Information Display**: View employee number, role, and personal details

---

## 👔 Managerial Dashboard

### My Attendance
- **Personal Attendance View**: View manager's own attendance records
- **Date Range Filtering**: Filter attendance by specific date ranges
- **Attendance Analytics**: View personal attendance statistics and KPIs

### My Payslip
- **Manager Payslip Access**: View and download manager's own payslips
- **Historical Access**: Access past payslip records
- **Download Capability**: Export payslips for record keeping

### My Requests
- **Personal Request Management**: Submit and track manager's own leave and overtime requests
- **File Attachments**: Upload supporting documents for requests
- **Request Status Tracking**: Monitor approval status of personal requests

### Team Attendance
- **Team Overview**: View attendance records for all team members
- **Searchable Employee Selection**: Enhanced dropdown with search functionality for employee selection
- **Date Range Filtering**: Filter team attendance by date ranges
- **Attendance Statistics**: View team attendance KPIs and analytics
- **Team Calendar**: View approved team leaves and overtime for the month
- **Calendar Filtering**: Filter calendar by request type (All, Leave, Overtime) and employee
- **Visual Calendar View**: Month-grid display with color-coded events (Green for leave, Blue for overtime)
- **Searchable Employee Filter**: Enhanced dropdown for quick employee selection in calendar
- **Responsive Calendar**: Mobile-friendly calendar with overflow handling

### Team Requests
- **Request Approval System**: Approve/reject employee leave and overtime requests
- **Separated Request Views**: Dedicated tabs for Leave and Overtime requests
- **File Attachment Review**: View uploaded documents in detailed request modals
- **Two-Level Approval**: Immediate Supervisor + Department Head approval workflow
- **Request History**: Complete audit trail of all processed requests
- **Bulk Operations**: Process multiple requests efficiently
- **Team Calendar Integration**: View team calendar before approving/rejecting requests
- **Enhanced Approval Dialogs**: Improved UI with "View Team Calendar First" option
- **Streamlined Actions**: Optimized button layout (removed Cancel buttons, better spacing)
- **Status Indicators**: Color-coded badges for request status (Blue for Leave, Yellow for Overtime)
- **Team Calendar**: Access calendar modal from approval/rejection dialogs to check schedule conflicts
- **Smart Filtering**: Filter calendar by request type (All, Leave, Overtime) and employee
- **Color-Coded Events**: Green for leave requests, blue for overtime requests in calendar
- **Request Details Modal**: Comprehensive view with all request information and attachments

### Employee Details
- **Complete Employee Management**: View and manage comprehensive employee records
- **Employee Directory**: Searchable and filterable employee table
- **Employee Search**: Search by name, position, or employee number
- **Status Filtering**: Filter employees by status (Regular, Probationary)
- **Position Filtering**: Filter employees by position
- **Employee Profiles**: View detailed employee information in modal
- **HR Authorization**: Secure employee update/archive operations with credential verification
- **Employee Archiving**: Archive employees instead of deleting (prototype - no data persistence)
  - Archive statuses: Resigned (orange), Terminated (red), End of Contract (gray)
- **Collapsible Sections**: Organized form sections for Personal, Government, Employment, and Compensation information
- **Form Validation**: Comprehensive validation for phone numbers and required fields
- **Flexible Phone Validation**: Accepts multiple formats (09XXXXXXXXX, +639XXXXXXXXX, 639XXXXXXXXX)
- **Auto-calculation**: Automatic calculation of gross semi-monthly rate and hourly rate
- **Activity Logging**: Track all employee updates and changes

### About Me
- **Manager Profile**: View and manage manager profile information
- **Profile Display**: Comprehensive manager profile view

---

## 💼 Payroll Dashboard

### Payroll Dashboard
- **Payroll Processing**: Generate and manage employee payslips
- **Searchable Employee Selection**: Enhanced dropdown with search functionality for employee selection
- **Individual Payslip Generation**: Generate payslips for single employees
- **Bulk Payslip Generation**: Process multiple employees simultaneously
- **Payslip Preview**: View generated payslips before finalizing
- **Download & Export**: PDF payslip generation and data export
- **Payroll Statistics**: View payroll KPIs and metrics

### Employee Payroll History
- **Historical Payroll Data**: Track and view historical payroll records
- **Employee Search**: Search for specific employee payroll history
- **Date Range Filtering**: Filter payroll history by date ranges
- **Detailed Records**: View comprehensive payroll information for each period

### Manage Tax Deductions
- **Tax Management**: Handle tax deductions and calculations
- **Tax Configuration**: Configure tax rates and deduction rules
- **Deduction Management**: Manage various tax deductions
- **Tax Calculations**: Automated tax calculation system

---

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
- **Fonts**: Inter (body), Poppins (headings)

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
- **Enhanced Modal Buttons**: Larger clickable areas (40x40px), better hover states, improved accessibility
- **Improved Search Bars**: Better icon positioning and padding for readability

### Security Improvements
- **HR Credentials**: Username/password verification for sensitive operations
- **Form Validation**: Enhanced validation for phone numbers and file uploads
- **Input Sanitization**: Proper handling of user inputs and file data

---

**Note**: This is a frontend prototype with advanced file handling and security features. For production deployment, integrate with appropriate backend services and databases.
