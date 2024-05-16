pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: "cypress/integration/examples/**/**", description: "Enter the script path")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Choose the browser")
    }

    options {
        timestamps()
    }

    stages {
        stage('Building') {
            steps {
                echo "Building the application"
            }
        }
        stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying') {
            steps {
                echo "Deploying the application"
            }
        }
    }

    post {
        always {
            publishHTML([
                allowMissing: false, 
                alwaysLinkToLastBuild: false, 
                keepAll: true, 
                reportDir: 'cypress/reports', 
                reportFiles: 'index.html', 
                reportName: 'HTML Report', 
                reportTitles: '', 
                useWrapperFileDirectly: true
            ])
        }
    }
}