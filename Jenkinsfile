pipeline {
    agent any

    environment {
        IMAGE_NAME = "nexora-website"
        CONTAINER_NAME = "nexora"
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Fetching source code from GitHub...'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Stop Existing Container') {
            steps {
                echo 'Stopping old container if it exists...'
                bat '''
                docker stop %CONTAINER_NAME% || exit /b 0
                docker rm %CONTAINER_NAME% || exit /b 0
                '''
            }
        }

        stage('Run Container') {
            steps {
                echo 'Starting new container...'
                bat 'docker run -d -p 8082:80 --name %CONTAINER_NAME% %IMAGE_NAME%'
            }
        }

        stage('Verify Container') {
            steps {
                bat 'docker ps'
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful!'
        }

        failure {
            echo 'Deployment Failed!'
        }
    }
}