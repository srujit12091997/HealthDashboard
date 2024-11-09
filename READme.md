# Health Dashboard - Google Pixel Watch 2 Data Visualization

By Srujit Varasala

## Project Overview
This project transforms my personal health data from Google Pixel Watch 2 into an interactive web dashboard. I started with a Health Connect database file that wasn't readable, processed it using Python to extract meaningful statistics, and created a web dashboard to visualize my health data.

## Author
**Srujit Varasala**
- GitHub: https://github.com/srujit12091997
- LinkedIn: https://www.linkedin.com/in/srujitvarasala/
- Portfolio: Working on it(I have a base version will release a full version later)

## Project Journey

### 1. Initial Data Source
- Downloaded `health_connect_export.db` from my Google Pixel Watch 2
- File Location: Downloads folder
- Format: SQLite database (not human-readable)

### 2. Data Processing with Python
I wrote this Python script to read the SQLite database:


### 3. Key Data Found
After running my script, I discovered these important metrics:
- Steps: 12,056 records
- Heart Rate: 27,839 records
- Distance: 11,985 records
- Calories Burned: 37,674 records
- Exercise Sessions: 136 records
- Sleep Data: 4 records

### 4. Dashboard Creation
Built a web dashboard using:
- HTML5
- CSS3
- JavaScript
- Chart.js

### 5. Features
- Real-time health metrics display
- Interactive charts showing my daily activities
- Personal health insights panel
- Responsive design for all devices

## Setup Instructions

1. **Get the Data**
   - Export health data from Google Pixel Watch 2
   - Save the `.db` file to your computer

2. **Process the Data**
   ```bash
   # Install SQLite3
   pip install sqlite3

   # Run the Python script
   python read_health_data.py
   ```

3. **View the Dashboard**
   - Open `index.html` in a web browser

## Technologies Used
- Python with SQLite3
- HTML/CSS/JavaScript
- Chart.js

## My Learning Experience
Throughout this project, I:
1. Learned about database manipulation with SQLite
2. Improved my Python coding skills
3. Gained experience in web development
4. Enhanced my data visualization abilities
5. Better understood my personal health metrics

## Future Enhancements
Planning to add:
- More detailed sleep analysis
- Workout type breakdown
- Data export functionality
- Weekly/monthly trends analysis

## Personal Note
This project was born from my interest in personal health tracking and web development. As a Google Pixel Watch 2 user, I wanted to create something that would help me visualize my health data in a more meaningful way.

## Contact Me
For any questions or suggestions:
- Email: srujit.v@gmail.com
- Github: https://github.com/srujit12091997
- Linkedin: https://www.linkedin.com/in/srujitvarasala/

## License
This project is licensed under the MIT License.

---
*Note: This project is for personal health tracking and not intended for medical purposes.*

© 2024 Srujit Varasala. All Rights Reserved.