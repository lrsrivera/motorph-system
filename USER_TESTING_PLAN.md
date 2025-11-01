# MotorPH Employee Management System - User Testing Plan

## 📋 Overview
This document outlines the comprehensive user testing plan for the MotorPH Employee Management System high-fidelity prototype. The testing will evaluate usability, functionality, and user experience across different user roles and scenarios.

## 🎯 Testing Objectives
- Validate system usability and user experience
- Identify usability issues and improvement opportunities
- Gather feedback on feature completeness and workflow efficiency
- Assess user satisfaction and task completion rates
- Evaluate role-based access and navigation effectiveness

## 👥 User Details

### Target User Groups
1. **Employees** (Regular Staff)
   - **Demographics**: Office workers, field staff, administrative personnel
   - **Experience Level**: Basic to intermediate computer users
   - **Primary Tasks**: View attendance, submit leave requests, access payslips

2. **Managers/Supervisors**
   - **Demographics**: Team leaders, department heads, supervisors
   - **Experience Level**: Intermediate to advanced computer users
   - **Primary Tasks**: Approve requests, monitor team performance, generate reports

3. **HR/Payroll Staff**
   - **Demographics**: HR professionals, payroll administrators, system administrators
   - **Experience Level**: Advanced computer users
   - **Primary Tasks**: Manage employee records, process payroll, handle tax deductions

### Participant Requirements
- **Minimum Participants**: 15 users (5 per role)
- **Age Range**: 25-55 years
- **Computer Experience**: At least 2 years of regular computer use
- **Industry Background**: Preferably from HR, payroll, or administrative roles
- **Time Commitment**: 45-60 minutes per session

## 🖥️ Equipment & Setup

### Hardware Requirements
- **Desktop/Laptop**: Windows 10/11, macOS, or Linux
- **Screen Resolution**: Minimum 1366x768, recommended 1920x1080
- **Browser**: Chrome (primary), Firefox, Safari, or Edge
- **Internet Connection**: Stable broadband connection
- **Audio/Video**: For remote testing sessions (if applicable)

### Testing Environment
- **Location**: Quiet, distraction-free environment
- **Lighting**: Adequate lighting for screen visibility
- **Seating**: Comfortable chair and desk setup
- **Backup Plan**: Alternative device available if technical issues occur

### Software Setup
- **Prototype URL**: https://lrsrivera.github.io/motorph-system/
- **Test Credentials**: Pre-loaded for each user role
- **Screen Recording**: Optional for detailed analysis
- **Note-taking Tools**: Digital or physical note-taking materials

## 📝 Testing Tasks

### Task 1: System Login & Navigation (5 minutes)
**Objective**: Test authentication and initial navigation
**Instructions**:
1. Open the browser and navigate to: https://lrsrivera.github.io/motorph-system/
2. Use the provided credentials for your assigned role
3. Click the "Login" button
4. Verify you land on the correct dashboard for your role
5. Identify and click on at least 3 different menu items in the sidebar
6. Navigate back to the main dashboard

**Success Criteria**: User successfully logs in and demonstrates understanding of navigation

### Task 2: Employee Dashboard Tasks (10 minutes)
**For Employee Role**:
1. **Personal Dashboard Review**:
   - View your attendance statistics (total hours, days late, absences)
   - Check your leave balance displayed in the top-right corner
   - Review the KPI cards showing your performance metrics

2. **Request Management**:
   - Click on "My Requests" in the sidebar
   - View the "Requests Filed" table showing both Leave and Overtime requests
   - Notice the color-coded badges (blue for Leave, yellow for Overtime)
   - Click "Submit New Request" button
   - Test switching between "Leave Request" and "Overtime Request" types
   - Verify the form fields change appropriately for each request type
   - Cancel the request form and return to the main table

3. **Attendance Management**:
   - Click on "My Attendance" in the sidebar
   - View "This Week's Attendance" table
   - Switch to "Attendance History" tab
   - Use the date filter to select a specific month (e.g., March 2024)
   - Scroll through the attendance records

4. **Profile Management**:
   - Click on "About Me" in the sidebar
   - Review your personal information (name, position, contact details)
   - Click the edit button (pencil icon) next to your photo
   - Update any field (e.g., phone number) and save changes
   - Verify the change was saved

**Success Criteria**: Successfully navigate through all employee dashboard features

### Task 3: Manager Dashboard Tasks (10 minutes)
**For Manager Role**:
1. **Team Overview**:
   - Review the team statistics displayed on the main dashboard
   - Check the KPI cards showing team performance metrics
   - Identify the number of pending requests

2. **Team Attendance Management**:
   - Click on "Team Attendance" in the sidebar
   - View "This Week's Attendance" for your team
   - Switch to "Attendance History" tab
   - Use the employee dropdown to select a specific team member
   - Select a date range (e.g., February 2024) and view their attendance
   - Scroll through the attendance records

3. **Team Requests Management**:
   - Click on "Team Requests" in the sidebar
   - View "Pending Leave Requests" tab
   - Click on a specific pending leave request to view details
   - Approve or reject the request (add a comment if rejecting)
   - Switch to "Pending Overtime Requests" tab
   - Click on a specific pending overtime request to view details
   - Approve or reject the request (add a comment if rejecting)
   - Switch to "Request History" tab
   - Use the Request Type filter to select "Leave Requests" only
   - Use the Request Type filter to select "Overtime Requests" only
   - Select "All Request Types" to see both
   - Use the month/year dropdown to select a specific period (e.g., January 2024)
   - Scroll through the historical requests

4. **Manager Profile**:
   - Click on "About Me" in the sidebar
   - Review your manager profile information
   - Check your team management details

**Success Criteria**: Successfully manage team attendance and requests

### Task 4: Payroll Dashboard Tasks (10 minutes)
**For Payroll Role**:
1. **Payroll Overview**:
   - Review the payroll dashboard statistics
   - Check the KPI cards showing payroll metrics
   - Identify pending payroll tasks

2. **Employee Management**:
   - Click on "Employee Details" in the sidebar
   - Use the search bar to find a specific employee (e.g., search "Garcia")
   - Click on an employee row to view their detailed information
   - Review their personal, employment, and payroll information
   - Click "Edit" to modify any field (e.g., salary) and save

3. **Payroll Processing**:
   - Click on "Payroll Dashboard" in the sidebar
   - Select an employee from the dropdown
   - Choose a specific month and year (e.g., March 2024)
   - Review the payroll calculations
   - Click "Generate Payslip" button
   - Download the generated payslip

4. **Tax Management**:
   - Click on "Manage Tax & Deductions" in the sidebar
   - Select an employee from the list
   - Review their tax deductions
   - Modify any tax field (e.g., SSS contribution) and save
   - Verify the changes were applied

5. **Payroll History**:
   - Click on "Payroll History" in the sidebar
   - Select an employee and date range
   - Review their payroll history
   - Export the data using the download button

**Success Criteria**: Successfully process payroll and manage employee data

### Task 5: Request Management Workflow (15 minutes)
**For Employee Role**:
1. **Submit Leave Request**:
   - Click on "My Requests" in the sidebar
   - Click "Submit New Request" button
   - Select "Leave Request" from the Request Type dropdown
   - Select leave type: "Vacation" from the Leave Type dropdown
   - Choose dates: From "2024-04-15" to "2024-04-17"
   - Upload a supporting document (use any PDF/image file)
   - Enter reason: "Family vacation"
   - Click "Submit" button
   - Verify the request appears in "Requests Filed" table with blue "LEAVE" badge

2. **Submit Overtime Request**:
   - Click "Submit New Request" button again
   - Select "Overtime Request" from the Request Type dropdown
   - Select overtime type: "Regular Overtime" from the Overtime Type dropdown
   - Choose date: "2024-04-20"
   - Set start time: "18:00" and end time: "22:00"
   - Enter reason: "Project deadline completion"
   - Click "Submit" button
   - Verify the request appears in "Requests Filed" table with yellow "OVERTIME" badge

3. **Track Request Status**:
   - View both submitted requests in the unified table
   - Click the "View Details" button (eye icon) on the leave request
   - Verify the modal shows leave-specific details (date range, leave type)
   - Close the modal and click "View Details" on the overtime request
   - Verify the modal shows overtime-specific details (time range, overtime type)
   - Check both requests show "Pending" status

**For Manager Role**:
1. **Review Pending Leave Requests**:
   - Click on "Team Requests" in the sidebar
   - View the "Pending Leave Requests" tab
   - Find the leave request submitted by the employee
   - Click on the request to view full details
   - Review the leave type, date range, reason, and attachments

2. **Review Pending Overtime Requests**:
   - Switch to "Pending Overtime Requests" tab
   - Find the overtime request submitted by the employee
   - Click on the request to view full details
   - Review the overtime type, time range, and reason

3. **Approve/Reject Requests**:
   - Go back to "Pending Leave Requests" tab
   - Click "Approve" button to approve the leave request
   - Add a comment: "Approved for family vacation"
   - Confirm the approval
   - Switch to "Pending Overtime Requests" tab
   - Click "Approve" button to approve the overtime request
   - Add a comment: "Approved for project completion"
   - Confirm the approval

4. **Review Request History**:
   - Switch to "Request History" tab
   - Use the Request Type filter to select "Leave Requests"
   - Verify only leave requests are displayed
   - Change filter to "Overtime Requests"
   - Verify only overtime requests are displayed
   - Use Month filter to select "April" and verify filtered requests appear

**Success Criteria**: Complete request workflow for both Leave and Overtime requests from submission to approval

### Task 6: Payslip Management (10 minutes)
**For Employee Role**:
1. **View Personal Payslip**:
   - Click on "My Payslip" in the sidebar
   - Select "March 2024" from the month dropdown
   - Select "2024" from the year dropdown
   - Review the payslip details (earnings, deductions, net pay)
   - Click "Download Payslip" button
   - Verify the PDF downloads successfully

2. **Navigate Pay Periods**:
   - Change to "February 2024" and review that payslip
   - Change to "January 2024" and review that payslip
   - Compare the different pay periods

**For Payroll Role**:
1. **Generate Employee Payslip**:
   - Click on "Payroll Dashboard" in the sidebar
   - Select "Manuel Garcia III" from the employee dropdown
   - Select "March 2024" and "2024"
   - Review the payroll calculations
   - Click "Generate Payslip" button
   - Download the payslip PDF

2. **Bulk Payroll Processing**:
   - Click "Generate All Payslips" button
   - Confirm the bulk generation
   - Wait for the process to complete
   - Verify all employees' payslips were generated

**Success Criteria**: Successfully access, generate, and download payslips

### Task 7: Data Management & Search (10 minutes)
**For All Roles**:
1. **Search Functionality**:
   - Use the search bar in any data table
   - Search for "Garcia" and verify results
   - Clear the search and search for "10001"
   - Verify the search results are accurate

2. **Filtering and Sorting**:
   - Apply a status filter (e.g., "Approved" for leave requests)
   - Sort data by date (newest first)
   - Sort data by employee name (A-Z)
   - Reset filters to show all data

3. **Data Export**:
   - Click on any "Export" or "Download" button
   - Verify the data exports successfully
   - Check the exported file format and content

**Success Criteria**: Efficiently locate and manage data using search/filter tools

### Task 8: New Feature Testing (10 minutes)
**Objective**: Test the new overtime request functionality and improved UI features
**Instructions**:

1. **Dynamic Form Testing**:
   - Navigate to "My Requests" (Employee) or "Team Requests" (Manager)
   - Click "Submit New Request"
   - Switch between "Leave Request" and "Overtime Request" dropdown options
   - Verify form fields change dynamically:
     - Leave Request: Shows Leave Type, Date Range, Reason fields
     - Overtime Request: Shows Overtime Type, Date, Start Time, End Time, Reason fields
   - Test form validation for both request types

2. **Request Type Badge Testing**:
   - Submit one Leave Request and one Overtime Request
   - Verify both appear in the "Requests Filed" table
   - Check that Leave requests show blue "LEAVE" badges
   - Check that Overtime requests show yellow "OVERTIME" badges
   - Verify the Request Type column displays correctly

3. **Custom Modal Testing**:
   - Click "View Details" on a Leave Request
   - Verify the modal shows leave-specific information (date range, leave type)
   - Close modal and click "View Details" on an Overtime Request
   - Verify the modal shows overtime-specific information (time range, overtime type)
   - Test modal close functionality (X button and overlay click)

4. **Team Requests Separation Testing** (Manager Role):
   - Navigate to "Team Requests"
   - Verify three tabs: "Pending Leave Requests", "Pending Overtime Requests", "Request History"
   - Test switching between tabs
   - Verify Leave requests only appear in "Pending Leave Requests" tab
   - Verify Overtime requests only appear in "Pending Overtime Requests" tab
   - Test approval workflow in each tab

5. **Request History Filtering Testing** (Manager Role):
   - Go to "Request History" tab
   - Notice the "Select request type:" label above the dropdown
   - Test the Request Type filter:
     - Select "Leave Requests" - verify only leave requests show
     - Select "Overtime Requests" - verify only overtime requests show
   - Test combined filtering (Request Type + Month + Year)
   - Verify proper data alignment in each filtered view

6. **Custom Success Modal Testing** (Payroll Role):
   - Navigate to "Payroll Dashboard"
   - Generate a payslip for any employee
   - Verify the custom success modal appears instead of browser alert
   - Test modal close functionality
   - Verify professional appearance and messaging

**Success Criteria**: All new features function correctly and provide improved user experience

### Task 9: System Exploration & Feedback (10 minutes)
**Objective**: Free exploration and overall system evaluation
**Instructions**:
1. **Responsive Design Testing**:
   - Resize the browser window to simulate tablet size
   - Test navigation and functionality on smaller screen
   - Resize back to desktop size

2. **Feature Exploration**:
   - Explore any features not covered in previous tasks
   - Test the logout functionality
   - Try logging back in with different credentials
   - Test any interactive elements (buttons, dropdowns, modals)

3. **Overall System Evaluation**:
   - Provide feedback on overall usability
   - Identify any confusing or unclear elements
   - Suggest improvements or missing features
   - Rate overall satisfaction with the system

**Success Criteria**: Demonstrate understanding of system capabilities and provide constructive feedback

## 📊 Measurement & Data Collection

### Google Forms Integration
**Pre-Test Survey**:
- Demographics and experience level
- Current system usage (if applicable)
- Expectations and goals

**Post-Test Survey**:
- Task completion ratings (1-5 scale)
- Usability satisfaction (1-5 scale)
- Feature usefulness ratings
- Overall system satisfaction
- Specific feedback and suggestions

### Quantitative Metrics
- **Task Completion Rate**: Percentage of successfully completed tasks
- **Time to Complete**: Average time for each task
- **Error Rate**: Number of errors or failed attempts
- **Navigation Efficiency**: Number of clicks/pages to complete tasks
- **User Satisfaction Score**: Overall system rating (1-10 scale)

### Qualitative Metrics
- **User Comments**: Open-ended feedback
- **Pain Points**: Specific usability issues identified
- **Feature Requests**: Suggestions for improvements
- **Workflow Feedback**: Comments on business process alignment

## 📋 Documentation

### Session Documentation
- **Participant Information**: Role, experience level, demographics
- **Task Performance**: Completion status, time taken, errors encountered
- **Observations**: Notable behaviors, difficulties, positive interactions
- **Quotes**: Direct user feedback and comments
- **Screenshots**: Issues or notable interactions (with permission)

### Data Collection Template
```
Participant ID: [P001-P015]
Role: [Employee/Manager/Payroll]
Date: [MM/DD/YYYY]
Session Duration: [XX minutes]

Task Performance:
- Task 1: [Completed/Partial/Failed] - [XX minutes]
- Task 2: [Completed/Partial/Failed] - [XX minutes]
- Task 3: [Completed/Partial/Failed] - [XX minutes]
- Task 4: [Completed/Partial/Failed] - [XX minutes]
- Task 5: [Completed/Partial/Failed] - [XX minutes]
- Task 6: [Completed/Partial/Failed] - [XX minutes]
- Task 7: [Completed/Partial/Failed] - [XX minutes]
- Task 8: [Completed/Partial/Failed] - [XX minutes]
- Task 9: [Completed/Partial/Failed] - [XX minutes]

Key Observations:
- [Observation 1]
- [Observation 2]
- [Observation 3]

User Feedback:
- [Direct quote 1]
- [Direct quote 2]
- [Direct quote 3]

Issues Identified:
- [Issue 1]
- [Issue 2]
- [Issue 3]
```

### Reporting Structure
1. **Executive Summary**: Key findings and recommendations
2. **Methodology**: Testing approach and participant details
3. **Quantitative Results**: Metrics and statistical analysis
4. **Qualitative Findings**: User feedback and observations
5. **Issues & Recommendations**: Prioritized list of improvements
6. **Appendices**: Detailed data, quotes, and supporting materials

## 🎯 Success Criteria

### Minimum Acceptable Performance
- **Task Completion Rate**: ≥80% for core tasks
- **User Satisfaction**: ≥7/10 average rating
- **Critical Issues**: ≤2 blocking issues per user role
- **Navigation Efficiency**: ≤3 clicks for primary actions

### Target Performance Goals
- **Task Completion Rate**: ≥90% for all tasks
- **User Satisfaction**: ≥8/10 average rating
- **Zero Critical Issues**: No blocking usability problems
- **High Efficiency**: Intuitive navigation with minimal learning curve

## 📅 Testing Timeline

### Phase 1: Preparation (Week 1)
- Recruit participants
- Set up testing environment
- Prepare documentation templates
- Create Google Forms surveys

### Phase 2: Testing Execution (Week 2-3)
- Conduct user testing sessions (60-75 minutes per session due to additional features)
- Collect quantitative and qualitative data
- Document observations and feedback
- Focus on new overtime request functionality and UI improvements

### Phase 3: Analysis & Reporting (Week 4)
- Analyze collected data
- Identify patterns and issues
- Create comprehensive report
- Develop recommendations

## 🔧 Tools & Resources

### Testing Tools
- **Google Forms**: Survey creation and data collection
- **Screen Recording**: Optional for detailed analysis
- **Note-taking Apps**: Digital documentation
- **Spreadsheet Software**: Data analysis and reporting

### Prototype Resources
- **Live URL**: https://lrsrivera.github.io/motorph-system/
- **Test Credentials**: Pre-defined for each role
- **User Manual**: Basic instructions for testers
- **Issue Reporting**: Template for bug/issue documentation

## 📞 Contact & Support

**Testing Coordinator**: [Your Name]
**Email**: [Your Email]
**Phone**: [Your Phone]
**Project Repository**: https://github.com/lrsrivera/motorph-system

---

**Note**: This testing plan is designed to ensure comprehensive evaluation of the MotorPH Employee Management System prototype while maintaining focus on user experience and business requirements validation.
