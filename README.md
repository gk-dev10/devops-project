Nexora Technologies – DevOps Deployment & Monitoring Project

This repository contains the source code and DevOps infrastructure for Nexora Technologies, a multi-page corporate website deployed using modern DevOps practices.

The project demonstrates the complete software delivery lifecycle including:

Source Code Management using Git & GitHub
Continuous Integration & Continuous Deployment using Jenkins
Containerization using Docker
Container Orchestration using Kubernetes
Infrastructure Monitoring using Grafana, Graphite, and Telegraf
Service Health Monitoring using Nagios

📂 Project Structure
devops-project/
│
├── index.html
├── about.html
├── services.html
├── careers.html
├── gallery.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── Dockerfile
├── Jenkinsfile
├── deployment.yaml
├── service.yaml
├── telegraf.conf
├── README.md

🚀 Project Features
Website
Multi-page corporate website
Responsive design
Home, About, Services, Careers, Gallery and Contact pages
Modern UI with professional business theme
Jenkins CI/CD Pipeline

The project uses a Declarative Jenkins Pipeline to automate deployment.

Pipeline Stages
Checkout Source Code
        ↓
Build Docker Image
        ↓
Stop Existing Container
        ↓
Run New Container
        ↓
Verify Deployment

The pipeline automatically:

Pulls latest code from GitHub
Builds Docker image
Stops old container
Deploys new container
Verifies successful deployment
Docker Containerization

The website is containerized using Docker and served through NGINX.

Docker Features
Lightweight NGINX image
Fast deployment
Isolated runtime environment
Consistent execution across environments
Kubernetes Deployment

Application deployment is managed through Kubernetes.

Kubernetes Components
Deployment
ReplicaSet
Pods
NodePort Service
Features
Self-healing
High availability
Automated pod management
Scalability support
Monitoring Stack
Grafana

Grafana is used for real-time visualization of infrastructure metrics.

Dashboard Panels:

CPU Usage
Memory Usage
Disk Usage
Network Traffic
System Uptime
Telegraf

Telegraf collects system-level metrics from Docker containers and host resources.

Collected Metrics:

CPU
Memory
Disk
Network
System statistics
Graphite

Graphite acts as the time-series metrics storage backend.

Responsibilities:

Receive metrics from Telegraf
Store historical performance data
Provide data source for Grafana
Nagios

Nagios continuously monitors service availability.

Checks include:

Website status
HTTP response validation
Service uptime
Availability monitoring

🏗️ Technology Stack
Category	Technology
Frontend	HTML, CSS, JavaScript
Source Control	Git, GitHub
CI/CD	Jenkins
Containerization	Docker
Orchestration	Kubernetes
Monitoring	Grafana
Metrics Collection	Telegraf
Metrics Storage	Graphite
Service Monitoring	Nagios

🔄 DevOps Workflow
Developer
    ↓
GitHub Repository
    ↓
Jenkins Pipeline
    ↓
Docker Image Build
    ↓
Container Deployment
    ↓
Kubernetes Orchestration
    ↓
Website Deployment
    ↓
Telegraf Metrics Collection
    ↓
Graphite Metrics Storage
    ↓
Grafana Visualization
    ↓
Nagios Health Monitoring
📊 Monitoring Dashboard

The Grafana dashboard provides real-time visibility into:

CPU Utilization
Memory Consumption
Disk Usage
Network Throughput
System Uptime

This enables proactive monitoring and performance analysis of the deployed application.

✅ Assignment Outcomes

Successfully implemented:

Continuous Integration (CI)
Continuous Deployment (CD)
Docker-based containerization
Kubernetes deployment
Automated build pipeline
Infrastructure monitoring
Application health monitoring
Real-time metrics visualization

👨‍💻 Author

Gokul Srinivasan
B.Tech Information Technology
Vellore Institute of Technology (VIT)
