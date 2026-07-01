# ABC Technologies - DevOps Deployment Project

This repository contains the multi-page corporate website for **ABC Technologies**, developed in pure HTML, CSS, and Vanilla JavaScript, paired with comprehensive DevOps orchestration manifests for continuous integration, containerization, orchestration, and continuous monitoring.

This project is fully designed and structured for submission in **DEVOPS ASSIGNMENT - 2**.

---

## 📂 Project Structure

```text
corporate-website/
│
├── index.html         # Main Landing Page / Live DevOps Command Dashboard
├── about.html         # About Us Page & Collaborative Git Workflow Section
├── services.html      # Technical Services & Configuration Snippets
├── careers.html       # Careers Page & Drag-Drop Resume Uploader
├── gallery.html       # Visual Workplace Gallery
├── contact.html       # Contact Us Form with Local Storage Queuing
│
├── css/
│   └── style.css      # Core Custom Stylesheets (Professional Polish Design)
│
├── js/
│   └── script.js      # Interactive Playground Core (Jenkins, Pods, Grafana charts)
│
├── images/
│   ├── office1.jpg    # HQ Workplace image asset placeholder
│   ├── office2.jpg    # Laboratory image asset placeholder
│   └── team.jpg       # Core Baremetal Systems Team asset placeholder
│
├── Dockerfile         # Production Multi-stage Build Manifest (NGINX Base)
├── Jenkinsfile        # Declarative Pipeline Script (Checkout -> Lint -> Build -> Push -> Deploy -> Verify)
├── deployment.yaml    # Kubernetes Pod controller with CPU/Mem Quotas & Probes
├── service.yaml       # Kubernetes Service Router configuration (NodePort: 32080)
└── README.md          # Implementation Handbook & Deployment documentation
```

---

## 🚀 Key Features

1. **Static Multi-Page Corporate Site**: Standard, light, high-fidelity pages matching the "Professional Polish" design style, utilising deep Slate `#0f172a` and vibrant Blue `#2563eb` color palettes.
2. **Interactive DevOps Simulation**:
   - **Git Push Simulator**: Push code with custom messages directly in the web browser, automatically triggering the live Jenkins Pipeline simulation.
   - **Jenkins pipeline flow chart**: A visual live status grid walking through standard build steps with console output logs.
   - **Kubernetes Replica Controller**: Live view of replica pods. Users can click *Terminate* on pods to trigger simulated replica crashes and watch the scheduler automatically spin up replacement pods (*Self-healing*).
   - **Live Grafana Canvas charts**: Real-time aggregated metrics displaying CPU load and network rate trends with trigger buttons to inject traffic spikes or server outages.
   - **Nagios Status Indicators**: Live check statuses mapping cluster health, port 80 traffic, and load limits.
3. **DevOps Document Compiler**: An integrated report builder. Entering Student Name and Register Number compiles a comprehensive, academic report in Markdown matching university guidelines.

---

## 🛠 Running the Application Localy

### Requirements
- Node.js (v18+)

### Steps
1. Clone this repository to your workspace.
2. Install the lightweight development server dependencies:
   ```bash
   npm install
   ```
3. Start the static local server:
   ```bash
   npm run dev
   ```
4. Access the website at `http://localhost:3000` inside your web browser.

---

## 🐳 Docker Deployment

To build and run the corporate website inside a standalone Docker container locally:

1. Build the production NGINX-based image:
   ```bash
   docker build -t gokulsrinivasan/abc-corporate-web:latest .
   ```
2. Run the container on Port 80:
   ```bash
   docker run -d -p 80:80 --name abc-corporate-site gokulsrinivasan/abc-corporate-web:latest
   ```
3. Access the deployed site at `http://localhost` inside your browser.

---

## ☸ Kubernetes Deployments

To launch the multi-instance, self-healing, load-balanced application on a running Kubernetes cluster:

1. Apply the Deployment controller:
   ```bash
   kubectl apply -f deployment.yaml
   ```
2. Apply the NodePort Service router:
   ```bash
   kubectl apply -f service.yaml
   ```
3. Fetch service connection details:
   ```bash
   kubectl get services abc-web-service
   ```
4. Access the site on your Node IP on Port `32080` (e.g., `http://<node-ip>:32080`).

---

## 🛡 Nagios & Monitoring Configurations

To configure Nagios check commands matching this deployment, import the following definitions into your Nagios configurations:

```text
# Host Check Definition
define host {
    use                     linux-server
    host_name               abc-web-cluster
    alias                   ABC Corporate Web Cluster
    address                 abc-web-service.default.svc.cluster.local
    max_check_attempts      5
    check_period            24x7
    notification_interval   30
    notification_period     24x7
}

# HTTP Port 80 Service Check
define service {
    use                     generic-service
    host_name               abc-web-cluster
    service_description     HTTP Port 80 Check
    check_command           check_http!-p 32080!-u /index.html
    max_check_attempts      3
    check_interval          1
    retry_interval          1
    check_period            24x7
    notification_interval   30
}
```
