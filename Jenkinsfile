pipeline{
    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/intigration/**/**", description: "enter the script path")
        choice(name: 'BROWSER', choice: ['chrome','edge','firefox'], description: "choice the browser")
    }

    options{
        ansiColor('xterm')

    }

    stages{
        stage('Building'){
            steps{
            echo "Building the application"
            }
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }

        }
        
        stage('Deploying'){
            steps{
            echo "Deploying the application"
            }
        }
        
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}