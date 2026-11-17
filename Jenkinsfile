pipeline {
    agent any

    tools {
        nodejs 'Node18' // Configure in Jenkins Global Tools
    }

    environment {
        DEPLOY_DEV = '/var/www/dev.adhouseadvertising.in'
        DEPLOY_PROD = '/var/www/www.adhouseadvertising.in'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "${env.BRANCH_NAME}", url: 'https://gitlab.com/xtalogic/adhouse.git'
                script {
                    echo "Running build for branch: ${env.BRANCH_NAME}"
                }
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    def deployPath = (env.BRANCH_NAME == 'main') ? DEPLOY_PROD : DEPLOY_DEV
                    def appName = (env.BRANCH_NAME == 'main') ? 'adhouse-prod' : 'adhouse-dev'

                    sh """
                    mkdir -p $deployPath
                    rm -rf $deployPath/*
                    cp -r .next public package.json next.config.js $deployPath

                    cd $deployPath
                    npm install --omit=dev
                    pm2 delete $appName || true
                    pm2 start npm --name "$appName" -- start
                    """
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployed successfully to ${env.BRANCH_NAME}"
        }
        failure {
            echo "❌ Deployment failed"
        }
    }
}
