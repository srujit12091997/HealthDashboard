// Health data
const healthData = {
    steps: {
        daily: [9240, 8650, 7890, 9120, 8450, 8890, 8256],
        average: 8642
    },
    heartRate: {
        daily: [112, 115, 118, 110, 114, 116, 113],
        average: 114
    },
    calories: {
        daily: [2200, 2150, 2100, 2300, 2050, 2100, 2150],
        average: 2150
    }
};

// Initialize Charts
document.addEventListener('DOMContentLoaded', function() {
    // Steps Chart
    const stepsChart = new Chart(
        document.getElementById('stepsChart'),
        {
            type: 'line',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'Daily Steps',
                    data: healthData.steps.daily,
                    fill: true,
                    backgroundColor: 'rgba(66, 153, 225, 0.2)',
                    borderColor: 'rgb(66, 153, 225)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: false
                    },
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 5000,
                        title: {
                            display: true,
                            text: 'Steps'
                        }
                    }
                }
            }
        }
    );

    // Heart Rate Chart
    const heartRateChart = new Chart(
        document.getElementById('heartRateChart'),
        {
            type: 'line',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'Heart Rate (BPM)',
                    data: healthData.heartRate.daily,
                    fill: true,
                    backgroundColor: 'rgba(245, 101, 101, 0.2)',
                    borderColor: 'rgb(245, 101, 101)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: false
                    },
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 60,
                        max: 140,
                        title: {
                            display: true,
                            text: 'BPM'
                        }
                    }
                }
            }
        }
    );
});

// Add animations to metric cards
const metricCards = document.querySelectorAll('.metric-card');
metricCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Update progress bars
function updateProgressBars() {
    const stepsProgress = (healthData.steps.average / 10000) * 100;
    document.querySelector('.progress').style.width = `${Math.min(stepsProgress, 100)}%`;
}

// Call function when page loads
updateProgressBars();

// Add responsive behavior
window.addEventListener('resize', function() {
    const charts = Chart.instances;
    charts.forEach(chart => chart.resize());
});