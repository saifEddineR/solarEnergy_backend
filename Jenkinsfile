pipeline{
    environment {
        imagename = "saifromdhane/solarenergy_back"
        registryCredential = "dockerhub_credentials"
        // dockerImage = ''
    }
    agent any
    stages{
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