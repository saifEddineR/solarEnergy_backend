pipeline{
    environment {
        imagename = "saifromdhane/solarenergy_back"
        registryCredential = "dockerhub_credentials"
        // dockerImage = ''
        // scannerHome = tool 'sonarQube scanner'
        def scannerHome = tool 'sonarqube-scanner'

    }
    agent any
    stages{
        stage("test-sonar"){
            steps{
                script {
                    withSonarQubeEnv("sonarQube") {
                    sh "${scannerHome}/bin/sonar-scanner \
                        -Dsonar.projectKey=solarenergy-backend \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=http://localhost:9000 \
                        -Dsonar.login=admin \
                        -Dsonar.password=trythisagain96"
                    } 
                }
            }
        }
        stage("build"){
            
            steps{
                sh 'npm install'
                sh 'docker --version'
            }
        }
        
        stage("docker-build"){
            steps{
                script {
                    dockerImage = docker.build imagename   
                    docker.withRegistry( '', registryCredential ) {
                    dockerImage.push("$BUILD_NUMBER")
                    dockerImage.push('latest')
                    }
                }
            }
        }
        stage("deploy"){
            steps{
                echo 'deployment'
            }
        }
    }
}