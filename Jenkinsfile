pipeline {
    agent any
    
    stages {
        stage('Checkout Code From Git') {
            steps {
                git branch: 'main', url: 'https://github.com/Bupphakon31/TTB-REPO.git'
            }
        }
        
        stage('Run Test Automate') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install --with-deps'
                bat 'npm run playwright:all'
            }
        }
        
        stage('Send Result To Jenkins') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
                echo 'Test results archived successfully'
            }
        }
    }
}